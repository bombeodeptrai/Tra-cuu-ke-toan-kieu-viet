const fs = require('fs');
const files = fs.readdirSync('public/data/content').filter(f => f.endsWith('.md'));
let cleaned = 0;
for (const file of files) {
  const filePath = 'public/data/content/' + file;
  const content = fs.readFileSync(filePath, 'utf8');
  const count = (content.match(/## 📜 TOÀN VĂN VĂN BẢN/g) || []).length;
  if (count > 1) {
    const summaryMatch = content.match(/## 🌟 TÓM TẮT CHUYÊN SÂU \(Bởi AI\)\r?\n([\s\S]*?)## 📜 TOÀN VĂN VĂN BẢN/);
    let trueSummary = summaryMatch ? summaryMatch[1].trim() : '';
    trueSummary = trueSummary.replace(/\r?\n---\s*$/, '').trim();
    const parts = content.split(/## 📜 TOÀN VĂN VĂN BẢN/);
    const realFullText = parts[parts.length - 1].trim();
    const titleMatch = content.match(/^(# .+?)\r?\n/);
    const titleLine = titleMatch ? titleMatch[1] : '';
    const newContent = titleLine + '\n\n## 🌟 TÓM TẮT CHUYÊN SÂU (Bởi AI)\n' + trueSummary + '\n\n---\n\n## 📜 TOÀN VĂN VĂN BẢN\n' + realFullText + '\n';
    fs.writeFileSync(filePath, newContent, 'utf8');
    cleaned++;
  }
}
console.log('Cleaned ' + cleaned + ' files');
