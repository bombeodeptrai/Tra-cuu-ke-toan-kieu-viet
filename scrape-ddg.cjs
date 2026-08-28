const axios = require('axios');
const fs = require('fs');
const path = require('path');

async function run() {
  const dataPath = path.join(__dirname, 'public/data/decrees.json');
  const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
  let updatedCount = 0;

  for (let i = 0; i < data.length; i++) {
    const decree = data[i];
    if (decree.free_download_url) continue;

    console.log(`[${i+1}/${data.length}] Searching ${decree.decree_number}...`);
    try {
      // Small delay to avoid rate limit
      await new Promise(r => setTimeout(r, 3000));
      
      const query = encodeURIComponent(`site:hethongphapluat.com "${decree.decree_number}"`);
      const res = await axios.post('https://lite.duckduckgo.com/lite/', `q=${query}`, {
        headers: { 
          'Content-Type': 'application/x-www-form-urlencoded',
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        }
      });
      
      const m = res.data.match(/hethongphapluat\.com[^<"'\s]+/g);
      if (m && m.length > 0) {
        // Find first link ending with .html
        const htmlLink = m.find(link => link.endsWith('.html'));
        if (htmlLink) {
          const fullLink = 'https://' + htmlLink;
          console.log(`=> Found: ${fullLink}`);
          data[i].free_download_url = fullLink;
          updatedCount++;
          fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
          continue;
        }
      }
      
      console.log(`=> Not found on hethongphapluat.com`);
    } catch (e) {
      console.error("Error:", e.message);
    }
  }
  console.log(`Finished! Updated ${updatedCount} links.`);
}
run();
