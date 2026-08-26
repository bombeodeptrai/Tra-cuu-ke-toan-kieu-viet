const fs = require('fs');
const content = fs.readFileSync('public/data/content/nd-180-2024-nd-cp.md', 'utf8');
const idx = content.indexOf('## 📜 TOÀN VĂN VĂN BẢN');
console.log('Content after TOAN VAN VAN BAN:');
console.log(JSON.stringify(content.substring(idx)));