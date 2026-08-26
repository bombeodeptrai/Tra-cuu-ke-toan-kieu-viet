const fs = require('fs');
const mock = fs.readFileSync('src/data/mock-decrees.ts', 'utf8');
const matches = mock.match(/id:\s*['"][^'"]+['"]/g);
console.log('Count in mock-decrees.ts:', matches ? matches.length : 0);
console.log('Matches:', matches);