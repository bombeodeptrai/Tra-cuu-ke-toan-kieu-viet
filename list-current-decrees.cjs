const fs = require('fs');
const decrees = JSON.parse(fs.readFileSync('public/data/decrees.json', 'utf8'));
console.log('Current decrees in DB:');
decrees.forEach((d, idx) => {
  console.log(`${(idx+1).toString().padStart(2, '0')}. [${d.category}] ${d.decree_number} - ${d.title} (Ban hành: ${d.issued_date})`);
});