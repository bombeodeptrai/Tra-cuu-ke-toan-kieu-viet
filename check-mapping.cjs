const fs = require('fs');
const decrees = JSON.parse(fs.readFileSync('public/data/decrees.json', 'utf8'));
console.log('Checking mapping of id to content file:');
decrees.forEach(d => {
  const defaultPath = `public/data/content/${d.id}.md`;
  const exists = fs.existsSync(defaultPath);
  console.log(`${d.id} -> ${defaultPath} : ${exists ? 'EXISTS' : 'MISSING'}`);
});