const fs = require('fs');

const files = [
  'src/data/diffs/group1_accounting.ts',
  'src/data/diffs/group2_invoices_tax_admin.ts',
  'src/data/diffs/group3_corporate_personal_tax.ts',
  'src/data/diffs/group4_labor_salary_contracts.ts',
  'src/data/diffs/group5_resources_fees_general.ts'
];

let allData = {};
for (const f of files) {
  let txt = fs.readFileSync(f, 'utf8');
  txt = txt.replace(/import\s+[^;]+;\s*/g, '');
  txt = txt.replace(/export\s+const\s+\w+[^=]*=\s*/, 'return ');
  const fn = new Function(txt);
  const data = fn();
  Object.assign(allData, data);
}

const decrees = JSON.parse(fs.readFileSync('public/data/decrees.json', 'utf8'));

console.log(`Loaded ${Object.keys(allData).length} decrees from diff database.`);

// Sample 5 decrees
const sampleKeys = ['tt-99-2025', 'nd-123-2020', 'luat-67-2025-tndn', 'blld-45-2019', 'nd-193-2025-khoangsan'];
for (const k of sampleKeys) {
  const d = allData[k];
  console.log(`\n========================================`);
  console.log(`ID: ${d.decreeId} | ${d.title} | vs ${d.compareWith}`);
  console.log(`Summary: ${d.summary}`);
  console.log(`Total items: ${d.items.length}`);
  d.items.forEach((it, i) => {
    console.log(`  [Point ${i+1}] ${it.topic} (${it.type})`);
    console.log(`     Old: ${it.oldRule.substring(0, 100)}...`);
    console.log(`     New: ${it.newRule.substring(0, 100)}...`);
    console.log(`     Impact: ${it.impactNote.substring(0, 100)}...`);
  });
}
