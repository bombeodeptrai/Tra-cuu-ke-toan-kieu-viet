const fs = require('fs');
const { PDFParse } = require('pdf-parse');

async function run() {
    try {
        const dataBuffer = fs.readFileSync('public/data/pdfs/qd-87-2025-gialai.pdf');
        
        // Use PDFParse to extract text
        const parser = new PDFParse();
        const data = await parser.parse(dataBuffer);
        const text = data.text;
        
        let content = fs.readFileSync('public/data/content/qd-87-2025-gialai.md', 'utf8');
        const parts = content.split(/## 📜 TOÀN VĂN VĂN BẢN/);
        
        const newContent = parts[0] + '## 📜 TOÀN VĂN VĂN BẢN\n' + text.trim();
        fs.writeFileSync('public/data/content/qd-87-2025-gialai.md', newContent, 'utf8');
        console.log('Successfully updated qd-87-2025-gialai.md');
    } catch (e) {
        console.error(e);
    }
}
run();
