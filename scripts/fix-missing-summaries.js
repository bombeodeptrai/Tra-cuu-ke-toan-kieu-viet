import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config();

const DATA_DIR = path.join(process.cwd(), 'public', 'data');
const CONTENT_DIR = path.join(DATA_DIR, 'content');
const decreesFile = path.join(DATA_DIR, 'decrees.json');

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
    const url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=' + process.env.VITE_GEMINI_API_KEY;
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
    return null;
  }
}

async function run() {
  const decrees = JSON.parse(fs.readFileSync(decreesFile, 'utf8'));
  const files = fs.readdirSync(CONTENT_DIR).filter(f => f.endsWith('.md'));
  let fixedCount = 0;

  for (const file of files) {
    const filePath = path.join(CONTENT_DIR, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if it failed previously
    if (content.includes('> *Lỗi tạo tóm tắt tự động*')) {
      const id = file.replace('.md', '');
      const decree = decrees.find(d => d.id === id);
      if (!decree) continue;

      console.log(`Đang chạy lại AI cho: ${decree.decree_number}`);
      
      // Extract the original full text by removing the old summary block
      const fullTextMatch = content.match(/## 📜 TOÀN VĂN VĂN BẢN\n([\s\S]*)/);
      if (!fullTextMatch) continue;
      const fullText = fullTextMatch[1];
      
      while (true) {
        const summary = await getSummary(decree.title, fullText);
        if (summary) {
          const finalContent = `# ${decree.title} (${decree.decree_number})

## 🌟 TÓM TẮT CHUYÊN SÂU (Bởi AI)
${summary}

---

## 📜 TOÀN VĂN VĂN BẢN
${fullText}
`;
          fs.writeFileSync(filePath, finalContent);
          console.log(`  Đã fix thành công ${file}!`);
          fixedCount++;
          console.log('  Đợi 20 giây để tránh Rate Limit...');
          await new Promise(r => setTimeout(r, 20000));
          break; // move to next file
        } else {
          console.log(`  Lỗi lại xảy ra cho ${file}. Đợi 65 giây...`);
          await new Promise(r => setTimeout(r, 65000));
        }
      }
    }
  }
  console.log(`Đã fix xong ${fixedCount} văn bản!`);
}

run();
