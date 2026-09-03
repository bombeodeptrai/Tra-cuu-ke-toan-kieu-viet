const axios = require('axios');

const candidates = {
  'nd-10-2021': [
    'https://hethongphapluat.com/nghi-dinh-10-2021-nd-cp-ve-quan-ly-chi-phi-dau-tu-xay-dung.html',
    'https://hethongphapluat.com/nghi-dinh-10-2021-nd-cp-quan-ly-chi-phi-dau-tu-xay-dung.html',
    'https://hethongphapluat.com/nghi-dinh-10-2021-nd-cp-quy-dinh-ve-quan-ly-chi-phi-dau-tu-xay-dung.html'
  ],
  'nd-218-2013': [
    'https://hethongphapluat.com/nghi-dinh-218-2013-nd-cp-huong-dan-thi-hanh-luat-thue-thu-nhap-doanh-nghiep.html',
    'https://hethongphapluat.com/nghi-dinh-218-2013-nd-cp-quy-dinh-chi-tiet-va-huong-dan-thi-hanh-luat-thue-thu-nhap-doanh-nghiep.html',
    'https://hethongphapluat.com/nghi-dinh-218-2013-nd-cp-huong-dan-luat-thue-thu-nhap-doanh-nghiep.html'
  ],
  'qd-595-2017-bhxh': [
    'https://hethongphapluat.com/quyet-dinh-595-qd-bhxh-ban-hanh-quy-trinh-thu-bao-hiem-xa-hoi-bao-hiem-y-te-bao-hiem-that-nghiep-bao-hiem-tai-nan-lao-dong-benh-nghe-nghiep-quan-ly-so-bao-hiem-xa-hoi-the-bao-hiem-y-te.html',
    'https://hethongphapluat.com/quyet-dinh-595-qd-bhxh-quy-trinh-thu-bao-hiem-xa-hoi-bao-hiem-y-te-bao-hiem-that-nghiep.html',
    'https://hethongphapluat.com/quyet-dinh-595-qd-bhxh-2017-quy-trinh-thu-bao-hiem-xa-hoi.html'
  ]
};

async function testCandidates() {
  for (const [key, urls] of Object.entries(candidates)) {
    let found = false;
    for (const u of urls) {
      try {
        const res = await axios.head(u, {
          headers: { 'User-Agent': 'Mozilla/5.0' },
          validateStatus: (s) => s === 200
        });
        if (res.status === 200) {
          console.log(`✅ [${key}] FOUND: ${u}`);
          found = true;
          break;
        }
      } catch (e) {}
    }
    if (!found) console.log(`❌ [${key}] None of the candidates matched.`);
  }
}

testCandidates();
