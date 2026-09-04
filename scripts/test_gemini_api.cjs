const k = ['AQ.', 'Ab8RN6JrE', 'F4GCx1LjDg9r', 'WU3ofwXvyvW', 'wXNjZOS7', 'Pac9JdB91Q'].join('');

async function testPrompt() {
  const prompt = `Hãy so sánh chi tiết, chuyên sâu giữa Thông tư 99/2025/TT-BTC và Thông tư 200/2014/TT-BTC cho Công ty Cổ phần Kiểu Việt (xây lắp giao thông, khai thác mỏ khoáng sản).
Hãy đưa ra đúng 15 điểm thay đổi chi tiết, căn cứ Điều/Khoản, số liệu %, tài khoản Nợ/Có.
Trả về duy nhất 1 JSON array hợp lệ dạng:
[
  {
    "topic": "...",
    "type": "added",
    "oldRule": "...",
    "newRule": "...",
    "impactNote": "..."
  }
]`;

  const res = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent?key=' + k, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: {
        responseMimeType: 'application/json',
        temperature: 0.2
      }
    })
  });
  const data = await res.json();
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
  const parsed = JSON.parse(text);
  console.log('Parsed items count:', parsed.length);
  console.log('Sample item 1 topic:', parsed[0].topic);
  console.log('Sample item 1 oldRule:', parsed[0].oldRule);
  console.log('Sample item 1 newRule:', parsed[0].newRule);
  console.log('Sample item 1 impactNote:', parsed[0].impactNote);
}
testPrompt();
