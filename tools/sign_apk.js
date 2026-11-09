const fs = require('fs');
const { signApk } = require('apk_sign_ts');

async function main() {
  const inputFile = process.argv[2] || 'tools/unsigned.apk';
  const outputFile = process.argv[3] || 'StoryCraft.apk';
  
  if (!fs.existsSync(inputFile)) {
    console.error(`Input file not found: ${inputFile}`);
    process.exit(1);
  }
  
  const apkData = fs.readFileSync(inputFile);
  const key = fs.readFileSync('tools/keystore/key.pem', 'utf8');
  const cert = fs.readFileSync('tools/keystore/cert.pem', 'utf8');
  
  console.log(`Signing ${inputFile}...`);
  const result = await signApk(apkData, key, cert);
  fs.writeFileSync(outputFile, Buffer.from(result.signedApk));
  console.log(`Successfully signed: ${outputFile} (${fs.statSync(outputFile).size} bytes)`);
}

main().catch(err => {
  console.error('Signing error:', err);
  process.exit(1);
});
