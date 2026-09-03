const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

const targetDocs = [
  { id: 'nd-145-2020', number: '145/2020/NĐ-CP', title: 'Nghị định 145/2020/NĐ-CP hướng dẫn thi hành Bộ luật Lao động về điều kiện lao động và quan hệ lao động' },
  { id: 'nd-12-2022', number: '12/2022/NĐ-CP', title: 'Nghị định 12/2022/NĐ-CP xử phạt vi phạm hành chính trong lĩnh vực lao động, bảo hiểm xã hội' },
  { id: 'nd-37-2015', number: '37/2015/NĐ-CP', title: 'Nghị định 37/2015/NĐ-CP quy định chi tiết về hợp đồng xây dựng' },
  { id: 'nd-50-2021', number: '50/2021/NĐ-CP', title: 'Nghị định 50/2021/NĐ-CP sửa đổi, bổ sung Nghị định 37/2015/NĐ-CP về hợp đồng xây dựng' },
  { id: 'nd-10-2021', number: '10/2021/NĐ-CP', title: 'Nghị định 10/2021/NĐ-CP về quản lý chi phí đầu tư xây dựng' },
  { id: 'nd-218-2013', number: '218/2013/NĐ-CP', title: 'Nghị định 218/2013/NĐ-CP hướng dẫn thi hành Luật Thuế thu nhập doanh nghiệp' },
  { id: 'qd-595-2017-bhxh', number: '595/QĐ-BHXH', title: 'Quyết định 595/QĐ-BHXH ban hành Quy trình thu bảo hiểm xã hội, bảo hiểm y tế, bảo hiểm thất nghiệp' }
];

async function searchCongBao(doc) {
  try {
    const url = 'https://congbao.chinhphu.vn/tim-kiem?keyword=' + encodeURIComponent(doc.number);
    const res = await axios.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
    const $ = cheerio.load(res.data);
    let matchedLink = null;
    let matchedTitle = null;

    $('a').each((i, el) => {
      const href = $(el).attr('href') || '';
      const text = $(el).text().trim();
      if (href.includes('/van-ban/') && (text.includes(doc.number) || href.includes(doc.number.toLowerCase().replace(/[\/\.]/g, '-')))) {
        if (!matchedLink) {
          matchedLink = href.startsWith('http') ? href : 'https://congbao.chinhphu.vn' + href;
          matchedTitle = text;
        }
      }
    });

    return { doc, matchedLink, matchedTitle };
  } catch (e) {
    return { doc, error: e.message };
  }
}

async function run() {
  console.log('Searching congbao.chinhphu.vn for 7 docs...');
  for (const d of targetDocs) {
    const res = await searchCongBao(d);
    console.log(`[${d.number}] => Link: ${res.matchedLink || 'Not found'}`);
  }
}

run();
