const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const TurndownService = require('turndown');
const turndownService = new TurndownService();

const d = JSON.parse(fs.readFileSync('./public/data/decrees.json', 'utf8'));
const smallFiles = [
  'luat-108-2025.md', 'luat-109-2025.md', 'luat-56-2024.md',
  'luat-quan-ly-thue-2019.md', 'nd-125-2020.md', 'nd-252-2026.md',
  'nd-254-2026.md', 'nd-73-2024.md', 'qd-87-2025-gialai.md',
  'tt-78-2021.md', 'vas-01.md', 'vas-02.md', 'vas-14.md'
];

async function run() {
  for (const doc of d) {
    if (doc.content_url && smallFiles.some(f => doc.content_url.includes(f))) {
      console.log('Fetching', doc.free_download_url);
      try {
        const res = await axios.get(doc.free_download_url);
        const $ = cheerio.load(res.data);
        
        let contentHtml = .nd-content.html() || #toanvan.html() || .noidung.html() || .detail-content.html() || .entry-content.html() || article.html() || #tab1.html();
        if (!contentHtml) {
          console.log('  -> Could not find main content div for', doc.decree_number);
          continue;
        }
        
        const markdown = turndownService.turndown(contentHtml);
        if (markdown.length < 500) {
          console.log('  -> Scraped markdown too small', doc.decree_number);
          continue;
        }

        const mdPath = './public' + doc.content_url;
        let currentMd = fs.readFileSync(mdPath, 'utf8');
        
        // Append it if not already appended
        if (!currentMd.includes('TOÀN VAN VAN B?N')) {
          currentMd += '\n\n## ?? TOÀN VAN VAN B?N\n\n' + markdown;
          fs.writeFileSync(mdPath, currentMd);
          console.log('  -> Successfully appended', mdPath, markdown.length, 'bytes');
        } else {
          console.log('  -> Already appended', mdPath);
        }
      } catch(e) {
        console.log('  -> Error fetching', doc.decree_number, e.message);
      }
    }
  }
}
run();
