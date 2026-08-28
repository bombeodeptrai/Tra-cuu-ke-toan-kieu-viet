const fs = require('fs');
const decrees = JSON.parse(fs.readFileSync('./public/data/decrees.json', 'utf8'));
const headers = ['id', 'decree_number', 'title', 'summary', 'category', 'issued_date', 'effective_date', 'status', 'source_url', 'pdf_url', 'content_url', 'free_download_url'];
let csv = headers.join('\t') + '\n';
for (const d of decrees) {
  const row = headers.map(h => {
    let val = d[h] || '';
    if (typeof val === 'string') {
      val = val.replace(/\n/g, '\\n').replace(/\t/g, ' '); // simple escape for TSV
    }
    return val;
  });
  csv += row.join('\t') + '\n';
}
fs.writeFileSync('C:/Users/HUY/.gemini/antigravity/brain/33e38b74-d817-44ad-8472-c8f8afd8bca3/decrees-cho-google-sheet.tsv', csv);
console.log('Exported');
