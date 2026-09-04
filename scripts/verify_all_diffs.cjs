const fs = require('fs');

const decrees = JSON.parse(fs.readFileSync('public/data/decrees.json', 'utf8'));
console.log('Total decrees in decrees.json:', decrees.length);

const g1 = fs.readFileSync('src/data/diffs/group1_accounting.ts', 'utf8');
const g2 = fs.readFileSync('src/data/diffs/group2_invoices_tax_admin.ts', 'utf8');
const g3 = fs.readFileSync('src/data/diffs/group3_corporate_personal_tax.ts', 'utf8');
const g4 = fs.readFileSync('src/data/diffs/group4_labor_salary_contracts.ts', 'utf8');
const g5 = fs.readFileSync('src/data/diffs/group5_resources_fees_general.ts', 'utf8');
const allText = g1 + g2 + g3 + g4 + g5;

const missing = [];
const found = [];

for (const d of decrees) {
  if (allText.includes(`"${d.id}": {`)) {
    found.push(d.id);
  } else {
    missing.push(d.id);
  }
}

console.log(`Found: ${found.length} / ${decrees.length}`);
console.log('Missing decrees:', missing);

// Count total items with "topic"
const totalItemsMatches = allText.match(/"topic":/g);
console.log('Total diff comparison points ("topic": count):', totalItemsMatches ? totalItemsMatches.length : 0);
