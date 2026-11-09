import zipfile, io, os, struct, subprocess
import datetime
from cryptography import x509
from cryptography.x509.oid import NameOID
from cryptography.hazmat.primitives import hashes
from cryptography.hazmat.primitives.asymmetric import rsa
from cryptography.hazmat.primitives import serialization

def generate_keystore_if_needed():
    key_path = "tools/keystore/key.pem"
    cert_path = "tools/keystore/cert.pem"
    os.makedirs("tools/keystore", exist_ok=True)
    
    # Always ensure certificate NotBefore is in the past (e.g. 2020) so any real phone accepts it
    print("Generating RSA key and self-signed certificate with validity 2020 - 2050...")
    key = rsa.generate_private_key(public_exponent=65537, key_size=2048)
    subject = issuer = x509.Name([
        x509.NameAttribute(NameOID.COUNTRY_NAME, 'US'),
        x509.NameAttribute(NameOID.ORGANIZATION_NAME, 'StoryCraft'),
        x509.NameAttribute(NameOID.COMMON_NAME, 'StoryCraft'),
    ])
    cert = x509.CertificateBuilder().subject_name(
        subject
    ).issuer_name(
        issuer
    ).public_key(
        key.public_key()
    ).serial_number(
        x509.random_serial_number()
    ).not_valid_before(
        datetime.datetime(2020, 1, 1, 0, 0, 0)
    ).not_valid_after(
        datetime.datetime(2050, 1, 1, 0, 0, 0)
    ).sign(key, hashes.SHA256())

    with open(key_path, 'wb') as f:
        f.write(key.private_bytes(
            encoding=serialization.Encoding.PEM,
            format=serialization.PrivateFormat.PKCS8,
            encryption_algorithm=serialization.NoEncryption()
        ))
    with open(cert_path, 'wb') as f:
        f.write(cert.public_bytes(serialization.Encoding.PEM))
    print("✓ Keystore generated with valid past date (2020-01-01) in PKCS#8 format!")

def build():
    print("=== Building StoryCraft Android APK ===")
    generate_keystore_if_needed()
    
    base_apk_path = "tools/base-template.apk"
    if not os.path.exists(base_apk_path):
        raise FileNotFoundError(f"Missing {base_apk_path}")
        
    with open(base_apk_path, "rb") as f:
        base_data = f.read()
    
    base_zip = zipfile.ZipFile(io.BytesIO(base_data))
    
    # 1. Modify resources.arsc
    arsc = bytearray(base_zip.read("resources.arsc"))
    old_title = "Jakewp11 HTML5 Android Template".encode("utf-16le")
    new_title = "StoryCraft - Daily Storytelling".encode("utf-16le")
    assert len(old_title) == len(new_title), f"String length mismatch: {len(old_title)} vs {len(new_title)}"
    idx = arsc.find(old_title)
    if idx == -1:
        raise ValueError("Could not find old app title in resources.arsc")
    arsc[idx:idx + len(new_title)] = new_title
    print(f"✓ resources.arsc patched: '{new_title.decode('utf-16le')}' at offset {idx}")
    
    # 2. Modify AndroidManifest.xml (minSdk=21, targetSdk=28)
    # Target SDK 28 is fully compatible with Android 14+ (>=23) AND does not require android:exported attribute (<31)
    axml = bytearray(base_zip.read("AndroidManifest.xml"))
    struct.pack_into("<I", axml, 0x04ac, 21) # minSdk = 21 (Android 5.0 Lollipop)
    struct.pack_into("<I", axml, 0x04c0, 28) # targetSdk = 28 (Android 9 Pie)
    print("✓ AndroidManifest.xml patched: minSdk=21, targetSdk=28")
    
    # 3. Prepare icons
    icons = {
        "res/drawable-ldpi/ic_launcher.png": "tools/gen_icons/ldpi.png",
        "res/drawable-mdpi/ic_launcher.png": "tools/gen_icons/mdpi.png",
        "res/drawable-hdpi/ic_launcher.png": "tools/gen_icons/hdpi.png",
        "res/drawable-xhdpi/ic_launcher.png": "tools/gen_icons/xhdpi.png",
        "res/drawable-xxhdpi/ic_launcher.png": "tools/gen_icons/xxhdpi.png"
    }
    
    # 4. Collect www assets
    www_dir = "www"
    www_files = {}
    for root, _, files in os.walk(www_dir):
        for file in files:
            full_path = os.path.join(root, file)
            rel_path = os.path.relpath(full_path, www_dir)
            apk_asset_path = f"assets/www/{rel_path}"
            with open(full_path, "rb") as f:
                www_files[apk_asset_path] = f.read()
    print(f"✓ Collected {len(www_files)} web assets from {www_dir}/")
    
    # 5. Build zip with strict 4-byte alignment on resources.arsc
    out_buf = io.BytesIO()
    with zipfile.ZipFile(out_buf, "w") as out_zip:
        # First write deflated items
        for item in base_zip.infolist():
            name = item.filename
            if name.startswith("assets/www/") or name.startswith("META-INF/") or name == "resources.arsc":
                continue
                
            if name == "AndroidManifest.xml":
                zinfo = zipfile.ZipInfo(name)
                zinfo.compress_type = zipfile.ZIP_DEFLATED
                out_zip.writestr(zinfo, axml)
            elif name in icons:
                zinfo = zipfile.ZipInfo(name)
                zinfo.compress_type = zipfile.ZIP_DEFLATED
                with open(icons[name], "rb") as ic:
                    out_zip.writestr(zinfo, ic.read())
            else:
                zinfo = zipfile.ZipInfo(name)
                zinfo.compress_type = zipfile.ZIP_DEFLATED
                out_zip.writestr(zinfo, base_zip.read(name))
                
        # Write www files as deflated
        for asset_path, data in sorted(www_files.items()):
            zinfo = zipfile.ZipInfo(asset_path)
            zinfo.compress_type = zipfile.ZIP_DEFLATED
            out_zip.writestr(zinfo, data)
            
        # Finally write resources.arsc as STORED and 4-byte aligned
        curr_pos = out_buf.tell()
        fn = "resources.arsc"
        fn_bytes = fn.encode('utf-8')
        header_size = 30 + len(fn_bytes)
        data_pos = curr_pos + header_size
        pad = (4 - (data_pos % 4)) % 4
        
        arsc_info = zipfile.ZipInfo(fn)
        arsc_info.compress_type = zipfile.ZIP_STORED
        arsc_info.extra = b'\x00' * pad
        out_zip.writestr(arsc_info, arsc)
        
    unaligned_apk_path = "tools/unaligned.apk"
    with open(unaligned_apk_path, "wb") as f:
        f.write(out_buf.getvalue())
    print(f"✓ Created package: {unaligned_apk_path} ({os.path.getsize(unaligned_apk_path)} bytes)")
    
    # 6. Verify resources.arsc alignment
    with open(unaligned_apk_path, "rb") as f_check:
        chk_z = zipfile.ZipFile(f_check)
        for info in chk_z.infolist():
            if info.compress_type == 0:
                f_check.seek(info.header_offset + 26)
                fn_len = int.from_bytes(f_check.read(2), 'little')
                ex_len = int.from_bytes(f_check.read(2), 'little')
                doff = info.header_offset + 30 + fn_len + ex_len
                print(f"Alignment check for {info.filename}: offset {doff} (mod 4 = {doff % 4})")
                assert doff % 4 == 0, f"{info.filename} is not 4-byte aligned!"
    
    # 7. Sign APK
    final_apk = "StoryCraft-10Min-Daily.apk"
    cmd = ["node", "tools/sign_apk.js", unaligned_apk_path, final_apk]
    subprocess.run(cmd, check=True)
    subprocess.run(["cp", final_apk, "StoryCraft.apk"], check=True)
    print(f"✓ Successfully created and signed {final_apk} and StoryCraft.apk")

if __name__ == "__main__":
    build()
