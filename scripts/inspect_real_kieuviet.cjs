const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

async function inspect() {
  try {
    const res = await axios.get('https://www.kieuviet.com.vn', {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' },
      timeout: 10000
    });
    const $ = cheerio.load(res.data);
    console.log('Title:', $('title').text().trim());
    
    // Logos
    const logos = [];
    $('img').each((i, el) => {
      const src = $(el).attr('src') || '';
      if (src.toLowerCase().includes('logo') || src.toLowerCase().includes('kieu') || src.toLowerCase().includes('banner') || src.toLowerCase().includes('header')) {
        logos.push(src.startsWith('http') ? src : 'https://www.kieuviet.com.vn/' + src.replace(/^\//, ''));
      }
    });
    console.log('Logos found:', logos);

    // CSS links
    const cssLinks = [];
    $('link[rel=\"stylesheet\"]').each((i, el) => {
      cssLinks.push($(el).attr('href'));
    });
    console.log('CSS links:', cssLinks.slice(0, 5));

    // Nav text
    console.log('Nav text:', $('header, nav, .menu, .navbar').text().replace(/\s+/g, ' ').trim().substring(0, 400));
    
    // Footer text
    console.log('Footer text:', $('footer, .footer').text().replace(/\s+/g, ' ').trim().substring(0, 400));
    
    // Primary colors from styles or attributes
    const rawHtml = res.data;
    const colors = rawHtml.match(/#[0-9a-fA-F]{6}/g) || [];
    const colorCounts = {};
    colors.forEach(c => colorCounts[c.toUpperCase()] = (colorCounts[c.toUpperCase()] || 0) + 1);
    console.log('Top colors:', Object.entries(colorCounts).sort((a, b) => b[1] - a[1]).slice(0, 10));
  } catch (e) {
    console.error('Error:', e.message);
  }
}

inspect();
