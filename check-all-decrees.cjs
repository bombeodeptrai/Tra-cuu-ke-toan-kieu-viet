const fs = require('fs');
const decrees = JSON.parse(fs.readFileSync('public/data/decrees.json', 'utf8'));

console.log('Checking all decree content sizes:');
decrees.forEach(d => {
  const file = `public/data/content/${d.id}.md`;
  if (fs.existsSync(file)) {
    const stat = fs.statSync(file);
    const text = fs.readFileSync(file, 'utf8');
    const hasSplit = text.includes('## 📜 TOÀN VĂN VĂN BẢN') || text.includes('# CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM');
    console.log(`${d.id.padEnd(25)} | Size: ${stat.size.toString().padStart(7)} bytes | Has Real Text: ${hasSplit}`);
  } else {
    console.log(`${d.id.padEnd(25)} | MISSING FILE`);
  }
});