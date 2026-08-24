// Script tìm đúng ItemID bằng cách quét từ vbpl.vn
// Run: npx tsx scripts/find-item-ids.ts

import fs from 'fs';
import path from 'path';

const HEADERS = {
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
  'Accept': 'application/json',
  'Origin': 'https://vbpl.vn',
  'Referer': 'https://vbpl.vn/',
};

// Danh sách số hiệu cần tìm ItemID
const TARGET_DECREES = [
  '88/2015/QH13',
  '38/2019/QH14',
  '13/2008/QH12',
  '14/2008/QH12',
  '123/2020/ND-CP',
  '126/2020/ND-CP',
  '132/2020/ND-CP',
  '15/2022/ND-CP',
  '174/2016/ND-CP',
  '41/2018/ND-CP',
  '200/2014/TT-BTC',
  '133/2016/TT-BTC',
  '219/2013/TT-BTC',
  '111/2013/TT-BTC',
  '45/2013/TT-BTC',
  '48/2019/TT-BTC',
  '78/2021/TT-BTC',
  '152/2015/TT-BTC',
  '44/2017/TT-BTC',
];

async function delay(ms: number) {
  return new Promise(r => setTimeout(r, ms));
}

async function scanRange(start: number, end: number, targets: Set<string>): Promise<Map<string, number>> {
  const found = new Map<string, number>();
  for (let id = start; id <= end; id++) {
    try {
      const res = await fetch(`https://apipacs.moj.gov.vn/api/vbpl/document?id=${id}`, { headers: HEADERS });
      const json = await res.json();
      const data = json?.data;
      const num: string = data?.vbpqSokyhieu || data?.vbqpSoKyHieu || '';
      
      if (num && targets.has(num)) {
        const files = data?.listFileAttach?.length || 0;
        console.log(`✅ Tìm thấy: ${num} -> ItemID=${id} (${files} files)`);
        found.set(num, id);
        targets.delete(num);
      }
      
      if (id % 100 === 0) process.stdout.write('.');
      if (targets.size === 0) break;
      await delay(80);
    } catch(e) { /* skip */ }
  }
  return found;
}

async function run() {
  const targets = new Set(TARGET_DECREES);
  console.log(`\n🔍 Quét ItemID cho ${targets.size} văn bản từ vbpl.vn...\n`);
  
  // Các khoảng ID có khả năng cao (các văn bản từ 2013-2024)
  const ranges = [
    [85000, 95000],   // 2013
    [100000, 110000], // 2014-2015
    [110000, 125000], // 2016
    [125000, 140000], // 2017-2018
    [140000, 158000], // 2019-2021
    [158000, 172000], // 2022-2024
  ];
  
  const allFound = new Map<string, number>();
  
  for (const [start, end] of ranges) {
    if (targets.size === 0) break;
    console.log(`\nQuét khoảng ${start}-${end}...`);
    const found = await scanRange(start, end, targets);
    found.forEach((v, k) => allFound.set(k, v));
  }
  
  console.log('\n\n=== KẾT QUẢ ===');
  allFound.forEach((id, num) => console.log(`  '${num}': ${id},`));
  
  if (targets.size > 0) {
    console.log('\nKhông tìm thấy:');
    targets.forEach(n => console.log('  -', n));
  }
  
  // Save to JSON
  const result: Record<string, number> = {};
  allFound.forEach((v, k) => result[k] = v);
  fs.writeFileSync(path.join('scripts', 'item-ids.json'), JSON.stringify(result, null, 2));
  console.log('\n✅ Đã lưu item-ids.json');
}

run().catch(console.error);
