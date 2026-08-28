const fs = require('fs');
const content = fs.readFileSync('public/data/content/tt-200-2014.md', 'utf8');
console.log("Phụ lục count:", content.split('Phụ lục').length - 1);
console.log("Biểu mẫu count:", content.split('Biểu mẫu').length - 1);
console.log("Last 2000 chars:\n", content.slice(-2000));
