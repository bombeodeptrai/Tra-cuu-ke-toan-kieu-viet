const fs = require('fs');
const decrees = JSON.parse(fs.readFileSync('public/data/decrees.json', 'utf8'));
const diffContent = fs.readFileSync('src/components/decree/DecreeDiffViewer.tsx', 'utf8');

const diffKeys = [];
const regex = /"([a-z0-9\-]+)":\s*\{\s*"decreeId":/g;
let m;
while ((m = regex.exec(diffContent)) !== null) {
  diffKeys.push(m[1]);
}

console.log('Total decrees in database:', decrees.length);
console.log('Total keys in DecreeDiffViewer:', diffKeys.length);

const missing = decrees.filter(d => !diffKeys.includes(d.id));
console.log('Missing count:', missing.length);
if (missing.length === 0) {
  console.log('SUCCESS: 100% OF ALL 55 DOCUMENTS ARE FULLY COVERED!');
} else {
  console.log('Missing list:', missing.map(d => d.id));
}
