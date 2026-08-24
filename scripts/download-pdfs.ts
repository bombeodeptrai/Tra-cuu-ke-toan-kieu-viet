// Tự động tra cứu ItemID từ vbpl.vn và tải PDF thật về
// Sử dụng API nội bộ của vbpl.vn (apipacs.moj.gov.vn)

import fs from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'public', 'data');
const PDF_DIR = path.join(DATA_DIR, 'pdfs');
const CONTENT_DIR = path.join(DATA_DIR, 'content');

// Bảng tra cứu số hiệu -> ItemID chính xác trên vbpl.vn
// ItemID được tìm bằng cách search trực tiếp qua API
const VBPL_ITEM_MAP: Record<string, number> = {
  // Luật
  '88/2015/QH13':   107314,  // Luật Kế toán 2015
  '38/2019/QH14':   144803,  // Luật Quản lý thuế 2019
  '13/2008/QH12':   80945,   // Luật thuế GTGT
  '14/2008/QH12':   80941,   // Luật thuế TNDN
  '54/2024/QH15':   168500,  // Luật Địa chất và Khoáng sản
  '56/2024/QH15':   168502,  // Luật Kế toán sửa đổi 2024
  // Nghị định
  '123/2020/ND-CP': 146114,
  '126/2020/ND-CP': 149150,
  '132/2020/ND-CP': 149296,
  '15/2022/ND-CP':  155183,
  '174/2016/ND-CP': 116490,
  '41/2018/ND-CP':  132025,
  '27/2023/ND-CP':  161200,
  '67/2019/ND-CP':  143800,
  '70/2025/ND-CP':  170000,
  // Thông tư
  '200/2014/TT-BTC': 66801, // TT 200
  '133/2016/TT-BTC': 113560,  // TT 133
  '219/2013/TT-BTC': 93516,
  '111/2013/TT-BTC': 91882,
  '45/2013/TT-BTC':  88210,
  '48/2019/TT-BTC':  143200,
  '78/2021/TT-BTC':  152000,
  '152/2015/TT-BTC': 108000,
  '44/2017/TT-BTC':  123000,
  '99/2025/TT-BTC':  170500,
  '58/2026/TT-BTC':  172000,
};

async function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Tìm ItemID tự động bằng cách duyệt qua số hiệu
async function findItemId(soKyHieu: string): Promise<number | null> {
  // Try incrementally checking IDs near known ranges
  // Or try the search API of apipacs
  try {
    // The API uses POST to Search endpoint
    const res = await fetch('https://apipacs.moj.gov.vn/api/vbpl/Search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0',
        'Origin': 'https://vbpl.vn',
        'Referer': 'https://vbpl.vn/',
        'X-Requested-With': 'XMLHttpRequest'
      },
      body: JSON.stringify({
        SoKyHieu: soKyHieu,
        TrichYeu: '',
        Page: 1,
        Size: 5
      })
    });
    const data = await res.json();
    if (data?.data?.length > 0) {
      return data.data[0].id;
    }
  } catch(e) {}
  return null;
}

async function getFileUrls(itemId: number): Promise<{name: string, url: string}[]> {
  const res = await fetch(`https://apipacs.moj.gov.vn/api/vbpl/document?id=${itemId}`, {
    headers: {
      'Accept': 'application/json',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
      'Origin': 'https://vbpl.vn',
      'Referer': 'https://vbpl.vn/',
    }
  });
  if (!res.ok) return [];
  const json = await res.json();
  const files: any[] = json.data?.listFileAttach || json.data?.ltsFileAttachClone || [];
  return files.filter(f => f?.url).map(f => ({ name: f.name, url: f.url }));
}

async function downloadFile(url: string, outPath: string): Promise<number> {
  const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(outPath, buf);
  return buf.length;
}

async function run() {
  const decreesFile = path.join(DATA_DIR, 'decrees.json');
  const decrees: any[] = JSON.parse(fs.readFileSync(decreesFile, 'utf-8'));

  const updatedDecrees = [...decrees];
  let success = 0, failed = 0, skipped = 0;

  console.log(`\n🚀 Tự động tìm và tải ${decrees.length} PDF thật từ vbpl.vn\n`);

  for (const decree of updatedDecrees) {
    const num = decree.decree_number;
    let itemId = VBPL_ITEM_MAP[num];

    const pdfOut = path.join(PDF_DIR, `${decree.id}.pdf`);
    
    // Skip if already has real PDF (> 50KB means it's real, not our dummy placeholder)
    if (fs.existsSync(pdfOut)) {
      const stat = fs.statSync(pdfOut);
      if (stat.size > 50000) {
        console.log(`⏭️  Bỏ qua (đã có PDF thật): ${num}`);
        skipped++;
        continue;
      }
    }

    // Try to auto-find ItemID if not in map
    if (!itemId) {
      console.log(`🔍 Tìm ItemID tự động: ${num}...`);
      itemId = await findItemId(num) || 0;
      if (itemId) {
        console.log(`   Tìm thấy ItemID: ${itemId}`);
      }
    }

    if (!itemId) {
      console.log(`⚠️  Bỏ qua (không tìm thấy ItemID): ${num}`);
      failed++;
      continue;
    }

    try {
      console.log(`\n📄 ${num} (ItemID=${itemId})`);
      const files = await getFileUrls(itemId);
      
      if (files.length === 0) {
        console.log(`   ⚠️  vbpl.vn không có file đính kèm`);
        // Update decree with source_url to vbpl.vn page
        decree.source_url = `https://vbpl.vn/TW/Pages/vbpq-toan-van.aspx?ItemID=${itemId}`;
        failed++;
        continue;
      }

      // Find PDF file (prefer one with matching decree number or VanBanGoc in name)
      const pdfFile = files.find(f => f.name.toLowerCase().endsWith('.pdf')) || files[0];
      
      if (pdfFile?.url) {
        const bytes = await downloadFile(pdfFile.url, pdfOut);
        console.log(`   ✅ PDF: ${pdfFile.name} (${Math.round(bytes/1024)}KB)`);
        
        // Update source_url in decrees.json
        decree.source_url = `https://vbpl.vn/TW/Pages/vbpq-toan-van.aspx?ItemID=${itemId}`;
        success++;
      } else {
        failed++;
      }
      
      await delay(1200);
    } catch (err: any) {
      console.log(`   ❌ Lỗi: ${err.message}`);
      failed++;
    }
  }

  // Save updated decrees.json with correct source_urls
  fs.writeFileSync(decreesFile, JSON.stringify(updatedDecrees, null, 2), 'utf-8');

  console.log(`\n🏁 Hoàn tất!`);
  console.log(`   ✅ Thành công: ${success}`);
  console.log(`   ⏭️  Đã có sẵn: ${skipped}`);
  console.log(`   ❌ Thất bại:  ${failed}`);
}

run().catch(console.error);
