const fs = require('fs');
const p = 'src/data/criteria-md.ts';
if (fs.existsSync(p)) {
  let c = fs.readFileSync(p, 'utf8');
  c = c.replace(/status:\s*['"][a-zA-Z]+['"],\s*/g, '');
  c = c.replace(/evidenceCount:\s*\d+,\s*/g, '');
  c = c.replace(/verdict:\s*['"][a-zA-Z]+['"],\s*/g, '');
  fs.writeFileSync(p, c);
  console.log('Cleaned criteria-md.ts');
} else {
  console.log('criteria-md.ts not found');
}
