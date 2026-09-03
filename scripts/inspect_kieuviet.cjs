const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

async function inspectKieuViet() {
  try {
    const res = await axios.get('https://kieuviet.com.vn/', {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' },
      timeout: 15000
    });
    console.log('Status:', res.status, 'HTML length:', res.data.length);
    const $ = cheerio.load(res.data);
    console.log('Title:', $('title').text().trim());
    
    // Check logos
    const imgs = [];
    $('img').each((i, el) => {
      const src = $(el).attr('src') || '';
      if (src.toLowerCase().includes('logo') || src.toLowerCase().includes('kieu') || src.toLowerCase().includes('banner')) {
        imgs.push(src);
      }
    });
    console.log('Images/Logos:', imgs);

    // Check headings and taglines
    console.log('H1:', $('h1').text().trim());
    console.log('H2:', $('h2').map((i, el) => $(el).text().trim()).get().slice(0, 5));
    
    // Check brand colors in styles
    const styles = $('style').text();
    const hexColors = styles.match(/#[0-9a-fA-F]{3,6}/g) || [];
    console.log('Sample Colors:', Array.from(new Set(hexColors)).slice(0, 15));

    // Nav text
    const navText = $('header, nav, .navbar').text().replace(/\s+/g, ' ').trim();
    console.log('Header/Nav text:', navText.substring(0, 300));
  } catch (e) {
    console.error('Error:', e.message);
  }
}

inspectKieuViet();
