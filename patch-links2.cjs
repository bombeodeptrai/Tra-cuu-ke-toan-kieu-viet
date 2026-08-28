const fs = require('fs');
const path = require('path');

function slugify(text) {
  return text.toString().toLowerCase()
    .replace(/đ/g, 'd')
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/--+/g, '-')
    .replace(/^-+/, '').replace(/-+$/, '');
}

const dataPath = path.join(__dirname, 'public/data/decrees.json');
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

for (let i = 0; i < data.length; i++) {
  if (!data[i].free_download_url) {
    if (data[i].decree_number.includes('VAS')) {
      if (data[i].decree_number === 'VAS 01') data[i].free_download_url = 'https://hethongphapluat.com/quyet-dinh-165-2002-qd-btc.html';
      if (data[i].decree_number === 'VAS 02') data[i].free_download_url = 'https://hethongphapluat.com/quyet-dinh-149-2001-qd-btc.html';
      if (data[i].decree_number === 'VAS 14') data[i].free_download_url = 'https://hethongphapluat.com/quyet-dinh-149-2001-qd-btc.html';
    } else {
      let typeSlug = '';
      if (data[i].decree_number.includes('NĐ-CP')) typeSlug = 'nghi-dinh';
      if (data[i].decree_number.includes('TT-BTC')) typeSlug = 'thong-tu';
      if (data[i].decree_number.includes('QH')) typeSlug = 'luat';
      if (data[i].decree_number.includes('QĐ')) typeSlug = 'quyet-dinh';
      
      const numSlug = data[i].decree_number.toLowerCase().replace(/\//g, '-').replace(/đ/g, 'd');
      const titleSlug = slugify(data[i].title);
      
      let finalSlug = `${typeSlug}-${numSlug}-${titleSlug}.html`;
      // Clean up duplicate terms
      finalSlug = finalSlug.replace(`${typeSlug}-${typeSlug}`, typeSlug);
      
      data[i].free_download_url = `https://hethongphapluat.com/${finalSlug}`;
    }
  }
}

fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
console.log('All remaining links generated!');
