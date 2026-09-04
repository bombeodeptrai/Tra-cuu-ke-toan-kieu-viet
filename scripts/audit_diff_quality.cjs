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

let totalItems = 0;
let itemsWithLegalBasis = 0;
let itemsWithNumbers = 0;
let itemsWithAccounts = 0;

for (const [k, d] of Object.entries(allData)) {
  for (const it of d.items) {
    totalItems++;
    const fullTxt = `${it.topic} ${it.oldRule} ${it.newRule} ${it.impactNote}`;
    if (/Điều|Khoản|Điểm|Phụ lục/i.test(fullTxt)) itemsWithLegalBasis++;
    if (/\d+([.,]\d+)?(%| triệu| tỷ| ngày| tháng| năm| đồng| đ| giờ| bậc)/i.test(fullTxt)) itemsWithNumbers++;
    if (/TK\s*\d+|tài khoản\s*\d+/i.test(fullTxt)) itemsWithAccounts++;
  }
}

console.log(`Total items audited: ${totalItems}`);
console.log(`Items with Legal Basis (Điều/Khoản/Phụ lục): ${itemsWithLegalBasis} (${Math.round(itemsWithLegalBasis/totalItems*100)}%)`);
console.log(`Items with concrete numbers/dates/money: ${itemsWithNumbers} (${Math.round(itemsWithNumbers/totalItems*100)}%)`);
console.log(`Items mentioning Account Codes (TK xxx): ${itemsWithAccounts} (${Math.round(itemsWithAccounts/totalItems*100)}%)`);
