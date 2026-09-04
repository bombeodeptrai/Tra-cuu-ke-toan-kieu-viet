const fs = require('fs');
const path = require('path');

const diffFiles = [
  { file: 'src/data/diffs/group1_accounting.ts', exportName: 'group1Accounting' },
  { file: 'src/data/diffs/group2_invoices_tax_admin.ts', exportName: 'group2InvoicesTaxAdmin' },
  { file: 'src/data/diffs/group3_corporate_personal_tax.ts', exportName: 'group3CorporatePersonalTax' },
  { file: 'src/data/diffs/group4_labor_salary_contracts.ts', exportName: 'group4LaborSalaryContracts' },
  { file: 'src/data/diffs/group5_resources_fees_general.ts', exportName: 'group5ResourcesFeesGeneral' }
];

for (const entry of diffFiles) {
  let content = fs.readFileSync(entry.file, 'utf8');
  // strip import and export
  content = content.replace(/import\s+[^;]+;/g, '');
  content = content.replace(new RegExp(`export\\s+const\\s+${entry.exportName}[^=]*=\\s*`), 'module.exports = ');
  
  // write to a temporary cjs file
  const tmpFile = path.join(__dirname, `tmp_${entry.exportName}.cjs`);
  fs.writeFileSync(tmpFile, content, 'utf8');

  try {
    const data = require(tmpFile);
    fs.unlinkSync(tmpFile);

    // Now process data: deduplicate items by topic
    for (const [decreeId, decree] of Object.entries(data)) {
      const seenTopics = new Set();
      const uniqueItems = [];
      for (const it of decree.items) {
        if (!seenTopics.has(it.topic)) {
          seenTopics.add(it.topic);
          uniqueItems.push({
            topic: it.topic,
            type: it.type,
            oldRule: it.oldRule,
            newRule: it.newRule,
            impactNote: it.impactNote
          });
        }
      }
      decree.items = uniqueItems;
    }

    // Write back cleanly formatted TS file
    const newTsContent = `import { DecreeDiffData } from '../diff-types';\n\nexport const ${entry.exportName}: Record<string, DecreeDiffData> = ${JSON.stringify(data, null, 2)};\n`;
    fs.writeFileSync(entry.file, newTsContent, 'utf8');
    console.log(`Successfully reformatted ${entry.file}: ${Object.keys(data).length} decrees`);
  } catch (err) {
    if (fs.existsSync(tmpFile)) fs.unlinkSync(tmpFile);
    console.error(`Error in ${entry.file}:`, err);
  }
}
