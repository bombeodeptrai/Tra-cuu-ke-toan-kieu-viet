const fs = require('fs');

const decrees = JSON.parse(fs.readFileSync('public/data/decrees.json', 'utf8'));

for (const d of decrees) {
  if (!d.decree_number && d.number) {
    d.decree_number = d.number;
    console.log(`Set decree_number for ${d.id} -> ${d.decree_number}`);
  }
}

fs.writeFileSync('public/data/decrees.json', JSON.stringify(decrees, null, 2), 'utf8');
console.log('Fixed decree_number for all documents!');
