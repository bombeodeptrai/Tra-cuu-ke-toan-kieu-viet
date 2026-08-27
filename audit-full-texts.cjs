const fs = require('fs');
const files = fs.readdirSync('public/data/content');
console.log(`Found ${files.length} content files in public/data/content:\n`);

files.forEach(f => {
  const stat = fs.statSync(`public/data/content/${f}`);
  const text = fs.readFileSync(`public/data/content/${f}`, 'utf8');
  const hasQuocHieu = text.includes('CỘNG HÒA') || text.includes('CỘNG HOÀ');
  const hasDieu = text.includes('Điều 1') || text.includes('ĐIỀU 1');
  const hasEllipsis = text.includes('...') || text.includes('…');
  console.log(`${f.padEnd(28)} | ${stat.size.toString().padStart(7)} bytes | QuocHieu: ${hasQuocHieu ? 'YES' : 'NO '} | Dieu1: ${hasDieu ? 'YES' : 'NO '}`);
});