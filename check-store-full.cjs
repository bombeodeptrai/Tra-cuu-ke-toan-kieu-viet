const fs = require('fs');
console.log('--- decree-store.ts fetchDecrees logic ---');
const store = fs.readFileSync('src/stores/decree-store.ts', 'utf8');
console.log(store);