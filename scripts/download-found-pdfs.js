import fs from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'public', 'data');
const PDF_DIR = path.join(DATA_DIR, 'pdfs');

async function downloadFromApi(itemId, pdfOutPath) {
  const apiUrl = `https://apipacs.moj.gov.vn/api/vbpl/document?id=${itemId}`;
  const res = await fetch(apiUrl, { headers: { 'User-Agent': 'Mozilla/5.0' } });
  if (!res.ok) return false;
  
  const data = await res.json();
  const files = data?.data?.listFileAttach || data?.data?.ltsFileAttachClone || [];
  
  if (files.length > 0) {
    const pdfFile = files.find(f => f.name.toLowerCase().endsWith('.pdf')) || files[0];
    if (pdfFile?.url) {
      const pdfRes = await fetch(pdfFile.url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
      if (pdfRes.ok) {
        const buf = Buffer.from(await pdfRes.arrayBuffer());
        if (buf.length > 20000) { // Valid file > 20KB
          fs.writeFileSync(pdfOutPath, buf);
          return true;
        }
      }
    }
  }
  return false;
}

async function run() {
  const found = JSON.parse(fs.readFileSync('scripts/found-ids.json', 'utf-8'));
  const decreesFile = path.join(DATA_DIR, 'decrees.json');
  const decrees = JSON.parse(fs.readFileSync(decreesFile, 'utf-8'));
  
  let successCount = 0;
  
  for (const d of decrees) {
    // Normalise name (NĐ-CP sometimes written strangely)
    const key = Object.keys(found).find(k => k.replace(/Đ/g, 'D') === d.decree_number.replace(/Đ/g, 'D'));
    if (key) {
      const id = found[key];
      console.log(`Đang tải PDF cho ${d.decree_number} (ID: ${id})...`);
      const pdfPath = path.join(PDF_DIR, `${d.id}.pdf`);
      
      const success = await downloadFromApi(id, pdfPath);
      if (success) {
        console.log(`✅ Tải thành công!`);
        successCount++;
        d.source_url = `https://vbpl.vn/TW/Pages/vbpq-toanvan.aspx?ItemID=${id}`;
      } else {
        console.log(`❌ Lỗi tải (có thể API không có file đính kèm)`);
      }
    }
  }
  
  fs.writeFileSync(decreesFile, JSON.stringify(decrees, null, 2), 'utf-8');
  console.log(`\nHoàn tất tải ${successCount} văn bản gốc!`);
}

run();
