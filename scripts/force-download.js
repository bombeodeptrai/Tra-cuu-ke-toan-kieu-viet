import fs from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'public', 'data');
const PDF_DIR = path.join(DATA_DIR, 'pdfs');

async function searchVbplForItemId(number) {
  // Use the HTML search page of vbpl.vn
  const url = `https://vbpl.vn/TW/Pages/vbpq-tim-kiem.aspx?Keyword=${encodeURIComponent(number)}`;
  try {
    const res = await fetch(url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' }
    });
    const html = await res.text();
    
    // Parse the results
    // Example: <a href="/TW/Pages/vbpq-toanvan.aspx?ItemID=146114">Nghị định 123/2020/NĐ-CP</a>
    const regex = /<a href="[^"]*ItemID=(\d+)[^"]*">([^<]+)<\/a>/g;
    let match;
    while ((match = regex.exec(html)) !== null) {
      const id = match[1];
      const title = match[2];
      if (title.includes(number)) {
        return parseInt(id);
      }
    }
  } catch(e) {
    console.error(`Lỗi khi tìm ${number}:`, e.message);
  }
  return null;
}

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
        if (buf.length > 10000) { // Valid file
          fs.writeFileSync(pdfOutPath, buf);
          return true;
        }
      }
    }
  }
  return false;
}

async function run() {
  const decreesFile = path.join(DATA_DIR, 'decrees.json');
  const decrees = JSON.parse(fs.readFileSync(decreesFile, 'utf-8'));
  
  console.log('Bắt đầu càn quét toàn bộ vbpl.vn...');
  
  for (const d of decrees) {
    const pdfPath = path.join(PDF_DIR, `${d.id}.pdf`);
    let needsDownload = true;
    if (fs.existsSync(pdfPath)) {
      if (fs.statSync(pdfPath).size > 50000) needsDownload = false;
    }
    
    if (needsDownload) {
      console.log(`\nĐang quét: ${d.decree_number}...`);
      const itemId = await searchVbplForItemId(d.decree_number);
      if (itemId) {
        console.log(`✅ Tìm thấy ItemID: ${itemId}`);
        const success = await downloadFromApi(itemId, pdfPath);
        if (success) {
          console.log(`✅ Tải PDF THÀNH CÔNG!`);
          d.source_url = `https://vbpl.vn/TW/Pages/vbpq-toanvan.aspx?ItemID=${itemId}`;
        } else {
          console.log(`❌ API không trả về file đính kèm cho văn bản này.`);
        }
      } else {
        console.log(`❌ Không tìm thấy văn bản trên vbpl.vn`);
      }
      await new Promise(r => setTimeout(r, 1000));
    }
  }
  
  fs.writeFileSync(decreesFile, JSON.stringify(decrees, null, 2), 'utf-8');
  console.log('\nHOÀN TẤT!');
}

run();
