const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

async function run() {
  try {
    const data = JSON.parse(fs.readFileSync('public/data/decrees.json', 'utf8'));
    console.log("Total decrees:", data.length);
    
    let updatedCount = 0;
    for (let i = 0; i < data.length; i++) {
      const decree = data[i];
      if (decree.free_download_url) continue; // Skip if already found
      
      console.log(`[${i+1}/${data.length}] Searching for: ${decree.decree_number}`);
      try {
        const query = encodeURIComponent(`site:hethongphapluat.com "${decree.decree_number}"`);
        const res = await axios.get(`https://html.duckduckgo.com/html/?q=${query}`, {
          headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
        });
        const $ = cheerio.load(res.data);
        const link = $('.result__url').first().text().trim();
        if (link && link.includes('hethongphapluat.com')) {
          let fullLink = link;
          if (!fullLink.startsWith('http')) fullLink = 'https://' + fullLink;
          console.log(`=> Found: ${fullLink}`);
          data[i].free_download_url = fullLink;
          updatedCount++;
        } else {
          console.log("=> Not found on hethongphapluat.com");
          
          // Try luatminhkhue.vn
          const query2 = encodeURIComponent(`site:luatminhkhue.vn "${decree.decree_number}"`);
          const res2 = await axios.get(`https://html.duckduckgo.com/html/?q=${query2}`, {
            headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
          });
          const $2 = cheerio.load(res2.data);
          const link2 = $2('.result__url').first().text().trim();
          if (link2 && link2.includes('luatminhkhue.vn')) {
            let fullLink = link2;
            if (!fullLink.startsWith('http')) fullLink = 'https://' + fullLink;
            console.log(`=> Found on luatminhkhue: ${fullLink}`);
            data[i].free_download_url = fullLink;
            updatedCount++;
          }
        }
      } catch (e) {
        console.error("Error fetching:", e.message);
      }
      // Save progressively
      fs.writeFileSync('public/data/decrees.json', JSON.stringify(data, null, 2));
      await new Promise(r => setTimeout(r, 2000));
    }
    console.log(`Done. Updated ${updatedCount} links.`);
  } catch (e) {
    console.error(e);
  }
}
run();
