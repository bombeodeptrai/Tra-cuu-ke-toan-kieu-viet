import fs from 'fs';
import path from 'path';
import TurndownService from 'turndown';
import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';
dotenv.config();

const DATA_DIR = path.join(process.cwd(), 'public', 'data');
const CONTENT_DIR = path.join(DATA_DIR, 'content');
const decreesFile = path.join(DATA_DIR, 'decrees.json');

const turndownService = new TurndownService({ headingStyle: 'atx' });
turndownService.addRule('remove-links', {
  filter: ['a'],
  replacement: function (content) { return content; }
});

async function getSummary(title, content) {
  try {
    const snippet = content.substring(0, 10000); 
    const prompt = `Bạn là chuyên gia kế toán, tài chính pháp lý. 
Dưới đây là một phần nội dung văn bản "${title}".
Hãy viết một bản "TÓM TẮT CHUYÊN SÂU" (khoảng 300-500 từ) dành cho kế toán viên, phân tích rõ ý nghĩa, các điểm mới, hoặc những lưu ý quan trọng nhất khi áp dụng văn bản này.
Định dạng bằng Markdown đẹp mắt (dùng danh sách, in đậm...). Chỉ trả về phần tóm tắt, không giải thích gì thêm.

Nội dung:
${snippet}
`;
    const url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent?key=' + process.env.VITE_GEMINI_API_KEY;
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
    });
    if (!response.ok) {
      const errText = await response.text();
      throw new Error('Bad status ' + response.status + ': ' + errText);
    }
    const result = await response.json();
    return result.candidates[0].content.parts[0].text;
  } catch(e) {
    console.error('Lỗi gọi AI:', e.message);
    return '> *Lỗi tạo tóm tắt tự động*';
  }
}

async function run() {
  const decrees = JSON.parse(fs.readFileSync(decreesFile, 'utf8'));
  
  for (const d of decrees) {
    console.log(`Đang xử lý ${d.decree_number}...`);
    let fullMarkdown = '';
    let htmlContent = '';
    
    // Fetch HTML if ItemID exists
    if (d.source_url && d.source_url.includes('ItemID=')) {
      const match = d.source_url.match(/ItemID=(\d+)/);
      if (match) {
        try {
          const res = await fetch(`https://apipacs.moj.gov.vn/api/vbpl/document?id=${match[1]}`, { headers: { 'User-Agent': 'Mozilla/5.0' } });
          const json = await res.json();
          htmlContent = json?.data?.vbpqToanVan || '';
        } catch(e) { console.error('  Lỗi tải API:', e.message); }
      }
    }
    
    if (htmlContent) {
      console.log('  Tìm thấy Toàn văn HTML, đang chuyển đổi...');
      fullMarkdown = turndownService.turndown(htmlContent);
    } else {
      console.log('  Không có Toàn văn HTML, giữ nội dung cũ.');
      const oldPath = path.join(CONTENT_DIR, `${d.id}.md`);
      if (fs.existsSync(oldPath)) {
        fullMarkdown = fs.readFileSync(oldPath, 'utf8');
      } else {
        fullMarkdown = `Không tìm thấy toàn văn cho văn bản ${d.decree_number}`;
      }
    }
    
    console.log('  Đang tạo tóm tắt AI...');
    const summary = await getSummary(d.title, fullMarkdown);
    
    const finalContent = `# ${d.title} (${d.decree_number})

## 🌟 TÓM TẮT CHUYÊN SÂU (Bởi AI)
${summary}

---

## 📜 TOÀN VĂN VĂN BẢN
${fullMarkdown}
`;
    
    fs.writeFileSync(path.join(CONTENT_DIR, `${d.id}.md`), finalContent);
    console.log(`  Đã lưu ${d.id}.md thành công!`);
    await new Promise(r => setTimeout(r, 2000)); // Rate limit protection
  }
  
  console.log('HOÀN TẤT!');
}

run();
