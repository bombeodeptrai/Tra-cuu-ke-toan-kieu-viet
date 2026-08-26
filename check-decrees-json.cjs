const fs = require('fs');
const data = JSON.parse(fs.readFileSync('public/data/decrees.json', 'utf8'));
console.log('Total in public/data/decrees.json:', data.length);
console.log(data.map(d => ({ id: d.id, number: d.decree_number })));