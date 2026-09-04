const fs = require('fs');
const path = require('path');

const decrees = JSON.parse(fs.readFileSync('public/data/decrees.json', 'utf8'));

const groups = [
  'group1_accounting.ts',
  'group2_invoices_tax_admin.ts',
  'group3_corporate_personal_tax.ts',
  'group4_labor_salary_contracts.ts',
  'group5_resources_fees_general.ts'
];

console.log('Total Decrees in decrees.json:', decrees.length);

const decreeMap = {};
for (const d of decrees) {
  decreeMap[d.id] = d;
}

const status = {};

for (const groupFile of groups) {
  const filePath = path.join('src', 'data', 'diffs', groupFile);
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Extract all decree keys
  const lines = content.split('\n');
  let currentKey = null;
  let itemsCount = 0;
  
  for (const line of lines) {
    const keyMatch = line.match(/^\s*["']([a-z0-9-]+)["']:\s*\{/);
    if (keyMatch) {
      if (currentKey) {
        status[currentKey] = { group: groupFile, count: itemsCount, title: decreeMap[currentKey]?.title || 'Unknown' };
      }
      currentKey = keyMatch[1];
      itemsCount = 0;
    }
    if (currentKey && (line.includes('"topic":') || line.includes('topic:'))) {
      itemsCount++;
    }
  }
  if (currentKey) {
    status[currentKey] = { group: groupFile, count: itemsCount, title: decreeMap[currentKey]?.title || 'Unknown' };
  }
}

console.log('\n--- CURRENT DIFF COUNT PER DECREE ---');
let below10Count = 0;
let totalItems = 0;

for (const d of decrees) {
  const s = status[d.id];
  if (!s) {
    console.log(`[MISSING] ${d.id} - ${d.title}`);
    below10Count++;
  } else {
    totalItems += s.count;
    if (s.count < 10) {
      console.log(`[LOW <10] (${s.count} items) [${s.group}] ${d.id}: ${d.title.substring(0, 50)}...`);
      below10Count++;
    } else {
      console.log(`[OK >=10] (${s.count} items) [${s.group}] ${d.id}`);
    }
  }
}

console.log(`\nSummary:`);
console.log(`- Total items across all decrees: ${totalItems}`);
console.log(`- Decrees with < 10 items: ${below10Count} / ${decrees.length}`);
console.log(`- Decrees with >= 10 items: ${decrees.length - below10Count} / ${decrees.length}`);
