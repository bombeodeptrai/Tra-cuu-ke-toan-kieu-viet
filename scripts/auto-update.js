import fs from 'fs';
import path from 'path';

// Use environment variable from GitHub Actions
const GEMINI_API_KEY = process.env.VITE_GEMINI_API_KEY;

async function updateDecrees() {
  console.log('🔄 Bắt đầu chạy Bot tự động cập nhật nghị định...');
  if (!GEMINI_API_KEY) {
    console.error('❌ Lỗi: Không tìm thấy VITE_GEMINI_API_KEY trong môi trường!');
    process.exit(1);
  }
  
  try {
    // We would ideally use @google/genai with googleSearch grounding here.
    // For this demonstration, we are using the standard REST endpoint.
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: "Tìm 2 thông tư/nghị định mới nhất về kế toán, thuế (năm 2025, 2026). Trả về mảng JSON chỉ chứa đúng định dạng sau, không kèm markdown (ví dụ [{\"id\": \"...\", \"decree_number\": \"...\", \"title\": \"...\", \"summary\": \"...\", \"content\": \"...\", \"category\": \"thong-tu\", \"issued_date\": \"YYYY-MM-DD\", \"effective_date\": \"YYYY-MM-DD\", \"status\": \"active\", \"source_url\": \"#\"}]):"
          }]
        }]
      })
    });

    if (!response.ok) {
      console.error('❌ Lỗi khi gọi Gemini API:', response.statusText);
      return;
    }

    const data = await response.json();
    let text = data.candidates[0].content.parts[0].text;
    
    // Clean up markdown code blocks if any
    text = text.replace(/```json/g, '').replace(/```/g, '').trim();
    
    let newDecrees;
    try {
      newDecrees = JSON.parse(text);
    } catch (e) {
      console.error('❌ Lỗi parse JSON:', e);
      return;
    }

    if (!Array.isArray(newDecrees) || newDecrees.length === 0) {
      console.log('⚠️ Không có dữ liệu mới.');
      return;
    }

    console.log(`✅ Tìm thấy ${newDecrees.length} văn bản mới! Đang ghi vào mã nguồn...`);

    // Path to the mock data file
    const dataFilePath = path.join(process.cwd(), 'src', 'data', 'mock-decrees.ts');
    let fileContent = fs.readFileSync(dataFilePath, 'utf8');

    // Simple string manipulation to insert the new decrees into the array
    const insertIndex = fileContent.indexOf('export const MOCK_DECREES: Decree[] = [') + 'export const MOCK_DECREES: Decree[] = ['.length;
    
    let insertString = '\n';
    newDecrees.forEach(decree => {
      insertString += `  {
    id: '${decree.id || Date.now()}',
    decree_number: '${decree.decree_number}',
    title: '${decree.title}',
    summary: '${decree.summary}',
    content: \`${decree.content}\`,
    category: '${decree.category}',
    issued_date: '${decree.issued_date}',
    effective_date: '${decree.effective_date}',
    status: '${decree.status}',
    source_url: '${decree.source_url}'
  },
`;
    });

    fileContent = fileContent.slice(0, insertIndex) + insertString + fileContent.slice(insertIndex);
    fs.writeFileSync(dataFilePath, fileContent, 'utf8');

    console.log('✅ Đã cập nhật thành công thư viện nghị định!');

  } catch (error) {
    console.error('❌ Lỗi quá trình cập nhật:', error);
  }
}

updateDecrees();
