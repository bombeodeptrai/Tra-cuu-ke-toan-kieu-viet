const fs = require('fs');
const decrees = JSON.parse(fs.readFileSync('public/data/decrees.json', 'utf8'));
console.log('Total decrees in json:', decrees.length);
decrees.forEach(d => {
  const contentPath = 'public' + d.content_url;
  const exists = fs.existsSync(contentPath);
  const size = exists ? fs.statSync(contentPath).size : 0;
  console.log(`${d.decree_number.padEnd(20)} -> ${contentPath} [${exists ? size + ' bytes' : 'MISSING'}]`);
});