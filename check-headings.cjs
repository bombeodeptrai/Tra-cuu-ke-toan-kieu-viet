const fs = require('fs');
const content = fs.readFileSync('public/data/content/nd-180-2024-nd-cp.md', 'utf8');
console.log('Headings in nd-180:');
const headings = content.match(/^#+\s+.+$/gm);
console.log(headings);