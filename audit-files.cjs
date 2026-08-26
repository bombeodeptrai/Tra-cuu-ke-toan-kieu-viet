const fs = require('fs');
const files = fs.readdirSync('public/data/content');
const smallFiles = [];
files.forEach(f => {
  const stat = fs.statSync(`public/data/content/${f}`);
  if (stat.size < 5000) {
    smallFiles.push({ file: f, size: stat.size });
  }
});
console.log('Small files (<5KB) that need full expansion:', smallFiles);