import fs from 'fs';
import path from 'path';
import https from 'https';

const agent = new https.Agent({ keepAlive: true, maxSockets: 100 });

// Danh sách số hiệu cần tìm ItemID
const TARGETS = [
  '15/2022/ND-CP', '27/2023/ND-CP', '41/2018/ND-CP', '67/2019/ND-CP', 
  '70/2025/ND-CP', '132/2020/ND-CP', '132/2026/ND-CP', '174/2016/ND-CP',
  '87/2025/QD-UBND', '44/2017/TT-BTC', '45/2013/TT-BTC', '48/2019/TT-BTC',
  '152/2015/TT-BTC', '219/2013/TT-BTC', '126/2020/ND-CP', '123/2020/ND-CP'
].map(s => s.replace(/ND-CP/g, 'NĐ-CP').replace(/QD-UBND/g, 'QĐ-UBND'));

const targetSet = new Set(TARGETS);
const found = new Map();

async function checkId(id) {
  try {
    const res = await fetch(`https://apipacs.moj.gov.vn/api/vbpl/document?id=${id}`, { 
      agent, 
      headers: { 'User-Agent': 'Mozilla/5.0' } 
    });
    if (!res.ok) return;
    const json = await res.json();
    const num = json?.data?.vbpqSokyhieu || json?.data?.vbqpSoKyHieu;
    if (num && targetSet.has(num)) {
      console.log(`\n✅ TÌM THẤY: ${num} -> ItemID: ${id}`);
      found.set(num, id);
      targetSet.delete(num);
      
      // Ghi ra file ngay khi tìm thấy
      fs.writeFileSync('scripts/found-ids.json', JSON.stringify(Object.fromEntries(found), null, 2));
    }
  } catch(e) {}
}

async function run() {
  console.log(`Bắt đầu quét nhanh ItemIDs cho ${targetSet.size} văn bản...`);
  const START = 80000;
  const END = 175000;
  const CONCURRENCY = 100;
  
  let current = START;
  
  while (current <= END && targetSet.size > 0) {
    const batch = [];
    for (let i = 0; i < CONCURRENCY && current <= END; i++) {
      batch.push(checkId(current++));
    }
    await Promise.all(batch);
    if (current % 1000 === 0) process.stdout.write(`\rĐang quét ở ID: ${current} (Còn ${targetSet.size} văn bản)`);
  }
  
  console.log('\n\nKẾT QUẢ TÌM ĐƯỢC:');
  console.log(Object.fromEntries(found));
}

run();
