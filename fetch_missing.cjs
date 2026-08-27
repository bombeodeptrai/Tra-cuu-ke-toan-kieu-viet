const fs = require('fs');
const duckdb = require('duckdb');
const cheerio = require('cheerio');
const TurndownService = require('turndown');

const db = new duckdb.Database(':memory:');
const missingDocs = [
  { id: 'luat-ke-toan-2015', so_ky_hieu: '88/2015/QH13' },
  { id: 'luat-quan-ly-thue-2019', so_ky_hieu: '38/2019/QH14' },
  { id: 'luat-thue-tndn', so_ky_hieu: '14/2008/QH12' },
  { id: 'luat-thue-gtgt', so_ky_hieu: '13/2008/QH12' },
  { id: 'luat-41-2024', so_ky_hieu: '41/2024/QH15' } // Re-fetch luat 41
];

const whereClause = missingDocs.map(d => `so_ky_hieu = '${d.so_ky_hieu}'`).join(' OR ');

db.all(`
  SELECT id, title, so_ky_hieu, loai_van_ban
  FROM 'https://huggingface.co/datasets/th1nhng0/vietnamese-legal-documents/resolve/refs%2Fconvert%2Fparquet/metadata/data/0000.parquet' 
  WHERE ${whereClause}
`, function(err, metadataRows) {
  if (err) return console.error(err);
  
  const idMap = new Map();
  for (const d of missingDocs) {
      const best = metadataRows.find(r => r.so_ky_hieu === d.so_ky_hieu);
      if (best) idMap.set(best.id, d);
  }
  
  const idsToFetch = Array.from(idMap.keys());
  if (idsToFetch.length === 0) return;
  
  const inClause = idsToFetch.map(id => `'${id}'`).join(',');
  db.all(`
      SELECT id, content_html 
      FROM 'https://huggingface.co/datasets/th1nhng0/vietnamese-legal-documents/resolve/refs%2Fconvert%2Fparquet/content/data/0000.parquet' 
      WHERE id IN (${inClause})
  `, function(err2, contentRows) {
      if (err2) return console.error(err2);
      
      const turndownService = new TurndownService({ headingStyle: 'atx', bulletListMarker: '-', codeBlockStyle: 'fenced' });
      turndownService.keep(['table', 'tr', 'th', 'td', 'thead', 'tbody']);
      
      for (const row of contentRows) {
          const doc = idMap.get(row.id);
          const html = row.content_html;
          const $ = cheerio.load(html);
          $('script, style').remove();
          
          let md = turndownService.turndown($.html()).replace(/\n{3,}/g, '\n\n');
          const mdPath = `public/data/content/${doc.id}.md`;
          let existingMd = '';
          try { existingMd = fs.readFileSync(mdPath, 'utf8'); } catch(e) {}
          
          const separator = '## 📜 TOÀN VĂN VĂN BẢN';
          let aiPart = separator + '\n\n';
          if (existingMd) {
              if (existingMd.includes(separator)) aiPart = existingMd.split(separator)[0].trim() + '\n\n' + separator + '\n\n';
              else if (existingMd.includes('# CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM')) aiPart = existingMd.split('# CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM')[0].trim() + '\n\n' + separator + '\n\n';
              else aiPart = existingMd + '\n\n' + separator + '\n\n';
          }
          
          fs.writeFileSync(mdPath, aiPart + md);
          console.log(`Updated ${mdPath}`);
      }
  });
});
