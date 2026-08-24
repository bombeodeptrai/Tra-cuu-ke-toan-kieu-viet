const fs = require('fs');
const path = require('path');
const https = require('https');

require('dotenv').config({ path: path.join(__dirname, '../.env.local') });

const API_KEY = process.env.VITE_GEMINI_API_KEY;
if (!API_KEY) {
  console.error("Missing VITE_GEMINI_API_KEY");
  process.exit(1);
}

const documentsToGenerate = [
  // LUẬT
  { title: "Luật Kế toán số 88/2015/QH13", cat: "luat", num: "88/2015/QH13" },
  { title: "Luật Quản lý thuế số 38/2019/QH14", cat: "luat", num: "38/2019/QH14" },
  { title: "Luật Thuế Thu nhập doanh nghiệp số 14/2008/QH12", cat: "luat", num: "14/2008/QH12" },
  { title: "Luật Thuế Giá trị gia tăng số 13/2008/QH12", cat: "luat", num: "13/2008/QH12" },
  { title: "Luật Doanh nghiệp số 59/2020/QH14", cat: "luat", num: "59/2020/QH14" },
  
  // NGHỊ ĐỊNH
  { title: "Nghị định 174/2016/NĐ-CP hướng dẫn Luật Kế toán", cat: "nghi-dinh", num: "174/2016/NĐ-CP" },
  { title: "Nghị định 123/2020/NĐ-CP quy định về hóa đơn, chứng từ", cat: "nghi-dinh", num: "123/2020/NĐ-CP" },
  { title: "Nghị định 126/2020/NĐ-CP hướng dẫn Luật Quản lý thuế", cat: "nghi-dinh", num: "126/2020/NĐ-CP" },
  { title: "Nghị định 41/2018/NĐ-CP xử phạt vi phạm hành chính kế toán", cat: "nghi-dinh", num: "41/2018/NĐ-CP" },
  { title: "Nghị định 132/2020/NĐ-CP quản lý thuế giao dịch liên kết", cat: "nghi-dinh", num: "132/2020/NĐ-CP" },

  // THÔNG TƯ
  { title: "Thông tư 200/2014/TT-BTC Chế độ kế toán doanh nghiệp", cat: "thong-tu", num: "200/2014/TT-BTC" },
  { title: "Thông tư 133/2016/TT-BTC Chế độ kế toán doanh nghiệp nhỏ và vừa", cat: "thong-tu", num: "133/2016/TT-BTC" },
  { title: "Thông tư 78/2021/TT-BTC hướng dẫn hóa đơn điện tử", cat: "thong-tu", num: "78/2021/TT-BTC" },
  { title: "Thông tư 111/2013/TT-BTC hướng dẫn Luật Thuế TNCN", cat: "thong-tu", num: "111/2013/TT-BTC" },
  { title: "Thông tư 219/2013/TT-BTC hướng dẫn Luật Thuế GTGT", cat: "thong-tu", num: "219/2013/TT-BTC" },
  { title: "Thông tư 45/2013/TT-BTC hướng dẫn trích lập khấu hao TSCĐ", cat: "thong-tu", num: "45/2013/TT-BTC" },
  { title: "Thông tư 48/2019/TT-BTC hướng dẫn trích lập dự phòng", cat: "thong-tu", num: "48/2019/TT-BTC" },

  // CHUẨN MỰC
  { title: "Chuẩn mực Kế toán Việt Nam VAS 01 - Chuẩn mực chung", cat: "chuan-muc", num: "VAS 01" },
  { title: "Chuẩn mực Kế toán Việt Nam VAS 02 - Hàng tồn kho", cat: "chuan-muc", num: "VAS 02" },
  { title: "Chuẩn mực Kế toán Việt Nam VAS 14 - Doanh thu và thu nhập khác", cat: "chuan-muc", num: "VAS 14" },
  { title: "Chuẩn mực Kế toán Việt Nam VAS 21 - Trình bày báo cáo tài chính", cat: "chuan-muc", num: "VAS 21" },

  // HÓA ĐƠN & THUẾ KHÁC
  { title: "Nghị định 15/2022/NĐ-CP giảm thuế GTGT", cat: "thue", num: "15/2022/NĐ-CP" },
  { title: "Thông tư 80/2021/TT-BTC hướng dẫn thi hành luật quản lý thuế", cat: "thue", num: "80/2021/TT-BTC" },
  { title: "Quyết định 1450/QĐ-TCT quy trình quản lý hóa đơn điện tử", cat: "hoa-don", num: "1450/QĐ-TCT" }
];

async function generateContent(doc) {
  const prompt = \`Bạn là chuyên gia luật kế toán tài chính Việt Nam. Hãy viết nội dung tóm tắt chuyên sâu (summary) và nội dung chi tiết (content) cho văn bản: "\${doc.title}".

BẮT BUỘC TRẢ VỀ CHỈ 1 OBJECT JSON ĐÚNG ĐỊNH DẠNG SAU (KHÔNG CÓ MARKDOWN BLOCK \`\`\`json):
{
  "summary": "Tóm tắt từ 3-5 đoạn. Nêu bật: Tầm quan trọng, đối tượng áp dụng, điểm mới cốt lõi (nếu có) và lưu ý rủi ro cho kế toán.",
  "content": "Nội dung cực kỳ chi tiết, dài 700-1500 từ. Sử dụng Markdown (Heading 1, 2, 3, bold, table). Phân tích sâu các Điều khoản quan trọng nhất, ví dụ cách hạch toán, cách kê khai thuế, hoặc mức phạt. Phải chia thành các mục: 1. Phạm vi điều chỉnh, 2. Các nguyên tắc/điều khoản cốt lõi, 3. Phân tích chuyên sâu & Hướng dẫn áp dụng (có ví dụ Nợ/Có hoặc ví dụ thực tế), 4. Lưu ý rủi ro pháp lý."
}\`;

  const data = JSON.stringify({
    contents: [{ parts: [{ text: prompt }] }],
    generationConfig: {
      temperature: 0.2,
      response_mime_type: "application/json"
    }
  });

  const options = {
    hostname: 'generativelanguage.googleapis.com',
    port: 443,
    path: \`/v1beta/models/gemini-1.5-flash:generateContent?key=\${API_KEY}\`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(data)
    }
  };

  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let chunks = '';
      res.on('data', (d) => chunks += d);
      res.on('end', () => {
        try {
          const response = JSON.parse(chunks);
          if(response.error) return reject(response.error);
          const text = response.candidates[0].content.parts[0].text;
          resolve(JSON.parse(text));
        } catch(e) {
          reject(e);
        }
      });
    });
    req.on('error', reject);
    req.write(data);
    req.end();
  });
}

async function run() {
  console.log("Bắt đầu sinh dữ liệu chi tiết cho 24 văn bản cốt lõi...");
  const results = [];
  
  for(let i=0; i<documentsToGenerate.length; i++) {
    const doc = documentsToGenerate[i];
    console.log(\`[\${i+1}/\${documentsToGenerate.length}] Đang xử lý: \${doc.title}\`);
    try {
      const generated = await generateContent(doc);
      results.push({
        id: (i + 1).toString(),
        decree_number: doc.num,
        title: doc.title,
        content: generated.content,
        summary: generated.summary,
        category: doc.cat,
        issued_date: "2020-01-01", // Mock date for simplicity
        effective_date: "2020-01-01",
        status: "active",
        source_url: "#"
      });
      // Sleep slightly to avoid rate limits
      await new Promise(r => setTimeout(r, 2000));
    } catch(err) {
      console.error("Lỗi tại", doc.title, err.message);
    }
  }

  const fileContent = \`import { Decree } from '../types/decree';

export const MOCK_DECREES: Decree[] = \${JSON.stringify(results, null, 2)};
\`;

  fs.writeFileSync(path.join(__dirname, '../src/data/mock-decrees.ts'), fileContent, 'utf-8');
  console.log("Đã hoàn thành tạo src/data/mock-decrees.ts với dữ liệu phân tích chuyên sâu!");
}

run();
