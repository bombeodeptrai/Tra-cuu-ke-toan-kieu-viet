import fs from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'public', 'data');
const PDF_DIR = path.join(DATA_DIR, 'pdfs');

async function searchAndDownload(number, id) {
  try {
    const query = `${number} filetype:pdf site:gov.vn`;
    console.log(`Tìm kiếm: ${query}`);
    
    const res = await fetch('https://html.duckduckgo.com/html/?q=' + encodeURIComponent(query), {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
    });
    
    if (!res.ok) {
      console.log(`❌ Search failed: ${res.status}`);
      return false;
    }
    
    const html = await res.text();
    const links = [...html.matchAll(/uddg=([^&]+)/gi)];
    const urls = links.map(m => decodeURIComponent(m[1]));
    const pdfs = urls.filter(u => u.toLowerCase().includes('.pdf'));
    
    if (pdfs.length > 0) {
      const pdfUrl = pdfs[0];
      console.log(`✅ Tìm thấy link PDF: ${pdfUrl}`);
      
      const pdfRes = await fetch(pdfUrl, {
        headers: { 'User-Agent': 'Mozilla/5.0' }
      });
      
      if (pdfRes.ok) {
        const buf = Buffer.from(await pdfRes.arrayBuffer());
        if (buf.length > 50000) {
          fs.writeFileSync(path.join(PDF_DIR, `${id}.pdf`), buf);
          console.log(`✅ Đã tải thành công: ${Math.round(buf.length/1024)}KB`);
          return true;
        }
      }
    }
    console.log(`❌ Không tìm thấy hoặc tải thất bại`);
    return false;
  } catch(e) {
    console.log(`❌ Lỗi: ${e.message}`);
    return false;
  }
}

async function run() {
  const decreesFile = path.join(DATA_DIR, 'decrees.json');
  const decrees = JSON.parse(fs.readFileSync(decreesFile, 'utf-8'));
  
  for (const d of decrees) {
    const pdfPath = path.join(PDF_DIR, `${d.id}.pdf`);
    let needsDownload = true;
    
    if (fs.existsSync(pdfPath)) {
      const stat = fs.statSync(pdfPath);
      if (stat.size > 50000) {
        needsDownload = false;
      }
    }
    
    if (needsDownload) {
      console.log(`\nĐang xử lý: ${d.decree_number}`);
      await searchAndDownload(d.decree_number, d.id);
      await new Promise(r => setTimeout(r, 2000));
    }
  }
}

run();
