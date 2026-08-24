import fs from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'public', 'data');
const PDF_DIR = path.join(DATA_DIR, 'pdfs');

async function searchWeb(query) {
  try {
    const url = 'https://html.duckduckgo.com/html/?q=' + encodeURIComponent(query);
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
      }
    });
    if (!res.ok) return [];
    const html = await res.text();
    const urls = [...html.matchAll(/uddg=([^&]+)/g)].map(m => decodeURIComponent(m[1]));
    return urls.filter(u => u.toLowerCase().endsWith('.pdf') || u.toLowerCase().endsWith('.doc') || u.toLowerCase().endsWith('.docx'));
  } catch (e) {
    return [];
  }
}

async function run() {
  const missing = [
    '87/2025/QĐ-UBND', '70/2025/NĐ-CP', '132/2026/NĐ-CP', 
    '13/2008/QH12', '219/2013/TT-BTC', '45/2013/TT-BTC', '44/2017/TT-BTC'
  ];
  
  for (const m of missing) {
    console.log(`Tìm kiếm ${m}...`);
    const q = `"${m}" filetype:pdf OR filetype:doc OR filetype:docx site:gov.vn`;
    const urls = await searchWeb(q);
    if (urls.length > 0) {
      console.log(`✅ Tìm thấy cho ${m}:`, urls[0]);
      // Download it
      try {
        const docRes = await fetch(urls[0], { headers: { 'User-Agent': 'Mozilla/5.0' } });
        if (docRes.ok) {
          const buf = Buffer.from(await docRes.arrayBuffer());
          // Save with correct id
          // Read decrees.json to find id
          const decrees = JSON.parse(fs.readFileSync(path.join(DATA_DIR, 'decrees.json'), 'utf8'));
          const decree = decrees.find(d => d.decree_number === m);
          if (decree && buf.length > 10000) {
            const ext = urls[0].split('.').pop();
            fs.writeFileSync(path.join(PDF_DIR, `${decree.id}.${ext}`), buf);
            console.log(`   Đã lưu ${decree.id}.${ext} (${Math.round(buf.length/1024)}KB)`);
            
            // Update decree
            decree.pdf_url = `/data/pdfs/${decree.id}.${ext}`;
            decree.source_url = urls[0];
            fs.writeFileSync(path.join(DATA_DIR, 'decrees.json'), JSON.stringify(decrees, null, 2));
          }
        }
      } catch(e) { console.log('   Lỗi tải file'); }
    } else {
      console.log(`❌ Không tìm thấy file trực tiếp`);
    }
    await new Promise(r => setTimeout(r, 2000));
  }
}

run();
