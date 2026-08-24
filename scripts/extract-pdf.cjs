const fs = require('fs');
const pdf = require('pdf-parse');

async function extract() {
    console.log('Reading PDF...');
    const dataBuffer = fs.readFileSync('public/data/pdfs/qd-87-2025-gialai.pdf');
    const data = await pdf(dataBuffer);
    
    console.log('Extracted ' + data.text.length + ' chars');
    
    let content = fs.readFileSync('public/data/content/qd-87-2025-gialai.md', 'utf8');
    const parts = content.split(/## 📜 TOÀN VĂN VĂN BẢN/);
    
    // Create new full text by appending the extracted text
    const newFullText = parts[parts.length - 1].trim() + '\n\n' + data.text.trim();
    
    const newContent = parts.slice(0, -1).join('## 📜 TOÀN VĂN VĂN BẢN') + '## 📜 TOÀN VĂN VĂN BẢN\n' + newFullText;
    
    fs.writeFileSync('public/data/content/qd-87-2025-gialai.md', newContent, 'utf8');
    console.log('Saved to markdown!');
}
extract();
