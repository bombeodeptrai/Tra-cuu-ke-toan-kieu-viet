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
      if (decree.free_download_url) {
        console.log(`[${i+1}] Skip ${decree.decree_number}, already has link`);
        continue;
      }
      
      console.log(`[${i+1}] Searching for: ${decree.decree_number}`);
      try {
        const query = encodeURIComponent(`site:vbpl.vn "${decree.decree_number}"`);
        const res = await axios.post('https://lite.duckduckgo.com/lite/', `q=${query}`, {
          headers: { 
            'Content-Type': 'application/x-www-form-urlencoded',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
          }
        });
        
        const $ = cheerio.load(res.data);
        const firstLink = $('.result-snippet').closest('tr').prev('tr').find('.result-url').attr('href');
        
        if (firstLink && firstLink.includes('vbpl.vn')) {
          let fullLink = firstLink;
          if (fullLink.startsWith('//')) fullLink = 'https:' + fullLink;
          console.log(`=> Found: ${fullLink}`);
          data[i].free_download_url = fullLink;
          updatedCount++;
        } else {
           console.log("=> Not found on vbpl, trying hethongphapluat...");
           const query2 = encodeURIComponent(`site:hethongphapluat.com "${decree.decree_number}"`);
           const res2 = await axios.post('https://lite.duckduckgo.com/lite/', `q=${query2}`, {
             headers: { 
               'Content-Type': 'application/x-www-form-urlencoded',
               'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
             }
           });
           const $2 = cheerio.load(res2.data);
           const firstLink2 = $2('.result-snippet').closest('tr').prev('tr').find('.result-url').attr('href');
           if (firstLink2 && firstLink2.includes('hethongphapluat.com')) {
              let fullLink2 = firstLink2;
              if (fullLink2.startsWith('//')) fullLink2 = 'https:' + fullLink2;
              console.log(`=> Found: ${fullLink2}`);
              data[i].free_download_url = fullLink2;
              updatedCount++;
           } else {
              console.log("=> Still not found.");
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
