const fs = require('fs');
const data = JSON.parse(fs.readFileSync('public/data/decrees.json', 'utf8'));
const nd180 = data.find(d => d.id === 'nd-180-2024-nd-cp');
console.log(nd180);