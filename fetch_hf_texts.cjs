const fs = require('fs');
const duckdb = require('duckdb');
const cheerio = require('cheerio');
const TurndownService = require('turndown');

const db = new duckdb.Database(':memory:');
const decrees = JSON.parse(fs.readFileSync('public/data/decrees.json', 'utf8'));

// Extract query parts
const queryConditions = decrees.map(d => {
    // e.g. "nd-125-2020" -> ["nd", "125", "2020"]
    const parts = d.id.split('-');
    if (parts.length >= 3) {
        return `so_ky_hieu LIKE '%${parts[1]}/${parts[2]}%'`;
    }
    return null;
}).filter(Boolean);

const whereClause = queryConditions.join(' OR ');

console.log("Fetching metadata...");
db.all(`
  SELECT id, title, so_ky_hieu, loai_van_ban
  FROM 'https://huggingface.co/datasets/th1nhng0/vietnamese-legal-documents/resolve/refs%2Fconvert%2Fparquet/metadata/data/0000.parquet' 
  WHERE ${whereClause}
`, function(err, metadataRows) {
  if (err) {
    console.error("FAILED metadata:", err);
    return;
  }
  
  console.log("Fetched", metadataRows.length, "metadata rows.");
  
  // Map documents to best ID
  const idMap = new Map();
  for (const d of decrees) {
      const parts = d.id.split('-');
      if (parts.length < 3) continue;
      const numYear = `${parts[1]}/${parts[2]}`;
      
      let typeCode = parts[0]; // nd, tt, luat, nq
      
      const candidates = metadataRows.filter(r => r.so_ky_hieu && r.so_ky_hieu.includes(numYear));
      
      let best = null;
      // 1. Look for VBHN (consolidated document) for this exact decree
      const vbhn = candidates.find(r => r.loai_van_ban === 'Văn bản hợp nhất' && r.title.includes(parts[1]) && r.title.includes(parts[2]));
      if (vbhn) {
          best = vbhn;
      } else {
          // 2. Look for exact type match
          let targetType = '';
          if (typeCode === 'nd') targetType = 'Nghị định';
          else if (typeCode === 'tt') targetType = 'Thông tư';
          else if (typeCode === 'luat') targetType = 'Luật';
          else if (typeCode === 'nq') targetType = 'Nghị quyết';
          
          best = candidates.find(r => r.loai_van_ban === targetType || (targetType === 'Luật' && !r.so_ky_hieu.includes('NĐ'))); 
          
          if (!best && candidates.length > 0) {
              best = candidates[0];
          }
      }
      
      if (best) {
          idMap.set(best.id, d);
          console.log(`Mapped ${d.id} -> ${best.id} (${best.title})`);
      } else {
          console.log(`NO MATCH for ${d.id}`);
      }
  }
  
  const idsToFetch = Array.from(idMap.keys());
  if (idsToFetch.length === 0) return;
  
  const inClause = idsToFetch.map(id => `'${id}'`).join(',');
  console.log(`Fetching content for ${idsToFetch.length} documents...`);
  
  db.all(`
      SELECT id, content_html 
      FROM 'https://huggingface.co/datasets/th1nhng0/vietnamese-legal-documents/resolve/refs%2Fconvert%2Fparquet/content/data/0000.parquet' 
      WHERE id IN (${inClause})
  `, function(err2, contentRows) {
      if (err2) {
          console.error("FAILED content:", err2);
          return;
      }
      
      console.log("Fetched", contentRows.length, "content rows.");
      
      const turndownService = new TurndownService({
          headingStyle: 'atx',
          bulletListMarker: '-',
          codeBlockStyle: 'fenced'
      });
      // Handle tables better
      turndownService.keep(['table', 'tr', 'th', 'td', 'thead', 'tbody']);
      
      for (const row of contentRows) {
          const doc = idMap.get(row.id);
          if (!doc) continue;
          
          const html = row.content_html;
          const $ = cheerio.load(html);
          
          // Remove scripts, styles
          $('script, style').remove();
          
          let md = turndownService.turndown($.html());
          md = md.replace(/\n{3,}/g, '\n\n'); // Clean up excessive newlines
          
          const mdPath = `public/data/content/${doc.id}.md`;
          let existingMd = '';
          try {
              existingMd = fs.readFileSync(mdPath, 'utf8');
          } catch(e) {}
          
          const separator = '## 📜 TOÀN VĂN VĂN BẢN';
          let aiPart = '';
          if (existingMd) {
              if (existingMd.includes(separator)) {
                  aiPart = existingMd.split(separator)[0].trim() + '\n\n' + separator + '\n\n';
              } else if (existingMd.includes('# CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM')) {
                  aiPart = existingMd.split('# CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM')[0].trim() + '\n\n' + separator + '\n\n';
              } else {
                  aiPart = existingMd + '\n\n' + separator + '\n\n';
              }
          } else {
              aiPart = separator + '\n\n';
          }
          
          fs.writeFileSync(mdPath, aiPart + md);
          console.log(`Updated ${mdPath}`);
      }
      console.log("DONE!");
  });
});
