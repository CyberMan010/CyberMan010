import zipfile, io, os, struct, subprocess
from PIL import Image

def build():
    print("=== Building StoryCraft Android APK ===")
    
    # 1. Read base template
    base_apk_path = "tools/base-template.apk"
    if not os.path.exists(base_apk_path):
        raise FileNotFoundError(f"Missing {base_apk_path}")
        
    with open(base_apk_path, "rb") as f:
        base_data = f.read()
    
    base_zip = zipfile.ZipFile(io.BytesIO(base_data))
    
    # 2. Modify resources.arsc (replace app title)
    arsc = bytearray(base_zip.read("resources.arsc"))
    old_title = "Jakewp11 HTML5 Android Template".encode("utf-16le")
    new_title = "StoryCraft - Daily Storytelling".encode("utf-16le")
    assert len(old_title) == len(new_title), f"String length mismatch: {len(old_title)} vs {len(new_title)}"
    idx = arsc.find(old_title)
    if idx == -1:
        raise ValueError("Could not find old app title in resources.arsc")
    arsc[idx:idx + len(new_title)] = new_title
    print(f"✓ resources.arsc patched: '{new_title.decode('utf-16le')}' at offset {idx}")
    
    # 3. Modify AndroidManifest.xml (update minSdk and targetSdk)
    axml = bytearray(base_zip.read("AndroidManifest.xml"))
    struct.pack_into("<I", axml, 0x04ac, 21) # minSdk = 21 (Android 5.0 Lollipop)
    struct.pack_into("<I", axml, 0x04c0, 34) # targetSdk = 34 (Android 14)
    print("✓ AndroidManifest.xml patched: minSdk=21, targetSdk=34")
    
    # 4. Prepare icons
    icons = {
        "res/drawable-ldpi/ic_launcher.png": "tools/gen_icons/ldpi.png",
        "res/drawable-mdpi/ic_launcher.png": "tools/gen_icons/mdpi.png",
        "res/drawable-hdpi/ic_launcher.png": "tools/gen_icons/hdpi.png",
        "res/drawable-xhdpi/ic_launcher.png": "tools/gen_icons/xhdpi.png",
        "res/drawable-xxhdpi/ic_launcher.png": "tools/gen_icons/xxhdpi.png"
    }
    
    # 5. Collect www assets
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
    
    # 6. Create repackaged unaligned zip
    out_buf = io.BytesIO()
    with zipfile.ZipFile(out_buf, "w", compression=zipfile.ZIP_DEFLATED) as out_zip:
        for item in base_zip.infolist():
            name = item.filename
            
            # Skip old assets and signatures
            if name.startswith("assets/www/") or name.startswith("META-INF/"):
                continue
                
            if name == "resources.arsc":
                out_zip.writestr(item, arsc)
            elif name == "AndroidManifest.xml":
                out_zip.writestr(item, axml)
            elif name in icons:
                with open(icons[name], "rb") as ic:
                    out_zip.writestr(item, ic.read())
            else:
                out_zip.writestr(item, base_zip.read(name))
                
        # Write new assets
        for asset_path, data in www_files.items():
            zinfo = zipfile.ZipInfo(asset_path)
            zinfo.compress_type = zipfile.ZIP_DEFLATED
            out_zip.writestr(zinfo, data)
            
    unaligned_apk_path = "tools/unaligned.apk"
    with open(unaligned_apk_path, "wb") as f:
        f.write(out_buf.getvalue())
    print(f"✓ Created repackaged APK: {unaligned_apk_path} ({os.path.getsize(unaligned_apk_path)} bytes)")
    
    # 7. Sign APK with Node / apk_sign_ts
    final_apk = "StoryCraft-10Min-Daily.apk"
    cmd = ["node", "tools/sign_apk.js", unaligned_apk_path, final_apk]
    print(f"Running signing: {' '.join(cmd)}")
    subprocess.run(cmd, check=True)
    
    # Also create alias StoryCraft.apk
    subprocess.run(["cp", final_apk, "StoryCraft.apk"], check=True)
    print(f"✓ Created {final_apk} and StoryCraft.apk")

if __name__ == "__main__":
    build()
