const fs = require('fs');

const decrees = JSON.parse(fs.readFileSync('public/data/decrees.json', 'utf8'));

const files = [
  'src/data/diffs/group1_accounting.ts',
  'src/data/diffs/group2_invoices_tax_admin.ts',
  'src/data/diffs/group3_corporate_personal_tax.ts',
  'src/data/diffs/group4_labor_salary_contracts.ts',
  'src/data/diffs/group5_resources_fees_general.ts'
];

let allContent = '';
for (const f of files) {
  allContent += fs.readFileSync(f, 'utf8') + '\n';
}

const decreeCounts = {};
for (const d of decrees) {
  const startIdx = allContent.indexOf(`"${d.id}": {`);
  if (startIdx === -1) {
    decreeCounts[d.id] = 0;
    continue;
  }
  // find items array
  const itemsIdx = allContent.indexOf('"items": [', startIdx);
  // find next decree or end
  let endIdx = allContent.indexOf('\n  "', startIdx + 1);
  if (endIdx === -1) endIdx = allContent.length;
  const chunk = allContent.substring(itemsIdx, endIdx);
  const matches = chunk.match(/"topic":/g) || chunk.match(/topic:/g);
  decreeCounts[d.id] = matches ? matches.length : 0;
}

console.log('Decree item counts:');
let total = 0;
let min = 999;
let minKey = '';
for (const [k, v] of Object.entries(decreeCounts)) {
  total += v;
  if (v < min) { min = v; minKey = k; }
  console.log(`${k}: ${v}`);
}
console.log(`\nTotal items: ${total}, Min items: ${min} (${minKey})`);
