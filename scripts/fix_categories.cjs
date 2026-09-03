const fs = require('fs');

const decrees = JSON.parse(fs.readFileSync('public/data/decrees.json', 'utf8'));

for (const d of decrees) {
  const num = (d.decree_number || d.number || '').toUpperCase();
  const title = (d.title || '').toUpperCase();

  if (num.includes('NĐ-CP') || title.startsWith('NGHỊ ĐỊNH')) {
    d.category = 'nghi-dinh';
  } else if (num.includes('TT-BTC') || num.includes('TT-') || title.startsWith('THÔNG TƯ')) {
    d.category = 'thong-tu';
  } else if (num.includes('QH') || title.startsWith('LUẬT') || title.startsWith('BỘ LUẬT')) {
    d.category = 'luat';
  } else if (num.includes('QĐ-') || title.startsWith('QUYẾT ĐỊNH')) {
    d.category = 'quyet-dinh';
  } else if (title.includes('CHUẨN MỰC')) {
    d.category = 'chuan-muc';
  }
}

fs.writeFileSync('public/data/decrees.json', JSON.stringify(decrees, null, 2), 'utf8');
console.log('Fixed legal categories for all 55 documents!');
