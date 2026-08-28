const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

(async () => {
  const dataPath = path.join(__dirname, 'public/data/decrees.json');
  const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
  console.log("Total decrees:", data.length);

  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  let updatedCount = 0;

  for (let i = 0; i < data.length; i++) {
    const decree = data[i];
    if (decree.free_download_url) continue;

    console.log(`[${i+1}/${data.length}] Searching ${decree.decree_number}...`);
    try {
      const url = `https://vbpl.vn/pages/timkiem.aspx?Keyword=${encodeURIComponent(decree.decree_number)}`;
      await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
      
      // Wait for search results
      await page.waitForSelector('.title a', { timeout: 10000 }).catch(() => null);
      
      const link = await page.evaluate(() => {
        const a = document.querySelector('.title a');
        if (a) return a.href;
        return null;
      });

      if (link) {
        console.log(`=> Found: ${link}`);
        data[i].free_download_url = link;
        updatedCount++;
        fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
      } else {
        console.log(`=> Not found on VBPL`);
        
        // Fallback to chinhphu
        const url2 = `https://vanban.chinhphu.vn/?pageid=27160&keyword=${encodeURIComponent(decree.decree_number)}`;
        await page.goto(url2, { waitUntil: 'domcontentloaded', timeout: 30000 });
        await page.waitForSelector('.title a', { timeout: 10000 }).catch(() => null);
        const link2 = await page.evaluate(() => {
          const a = document.querySelector('.title a');
          if (a) return a.href;
          return null;
        });
        if (link2) {
           console.log(`=> Found on ChinhPhu: ${link2}`);
           data[i].free_download_url = link2;
           updatedCount++;
           fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
        } else {
           console.log(`=> Not found on ChinhPhu either`);
        }
      }
    } catch (e) {
      console.error("Error:", e.message);
    }
  }

  await browser.close();
  console.log(`Finished! Updated ${updatedCount} links.`);
})();
