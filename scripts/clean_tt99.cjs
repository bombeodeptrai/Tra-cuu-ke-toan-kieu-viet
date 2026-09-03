const fs = require('fs');
const cheerio = require('cheerio');
const TurndownService = require('turndown');

let content = fs.readFileSync('public/data/content/tt-99-2025.md', 'utf8');

// Replace the header table with clean markdown
const oldHeaderRegex = /<table border="1"[\s\S]*?<\/table>/i;
const cleanHeader = `
| **BỘ TÀI CHÍNH** | **CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM**<br>**Độc lập - Tự do - Hạnh phúc** |
| :---: | :---: |
| **Số: 99/2025/TT-BTC** | *Hà Nội, ngày 27 tháng 10 năm 2025* |
`;

content = content.replace(oldHeaderRegex, cleanHeader);

// Convert all remaining HTML tables in the file to markdown tables using Turndown
const turndown = new TurndownService({ headingStyle: 'atx' });
content = content.replace(/<table[\s\S]*?<\/table>/gi, (match) => {
  return '\n\n' + turndown.turndown(match) + '\n\n';
});

// Remove leftover ugly inline html spans or styles if any
content = content.replace(/<span[^>]*>/gi, '').replace(/<\/span>/gi, '');
content = content.replace(/<p[^>]*>/gi, '\n').replace(/<\/p>/gi, '\n');

fs.writeFileSync('public/data/content/tt-99-2025.md', content, 'utf8');
console.log('Successfully cleaned tt-99-2025.md! Length:', content.length);
