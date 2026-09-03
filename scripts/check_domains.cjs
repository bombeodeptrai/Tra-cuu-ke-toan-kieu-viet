const axios = require('axios');

const domains = [
  'http://kieuviet.vn',
  'https://kieuviet.vn',
  'http://kieuviet.com',
  'https://kieuviet.com',
  'http://xaylapkieuviet.com',
  'http://xaylapkieuviet.vn',
  'http://betongkieuviet.com',
  'http://betongkieuviet.vn',
  'http://kieuviet.com.vn',
  'https://www.kieuviet.com.vn',
  'http://www.kieuviet.com.vn'
];

async function checkDomains() {
  for (const d of domains) {
    try {
      const res = await axios.get(d, { timeout: 4000, headers: { 'User-Agent': 'Mozilla/5.0' } });
      console.log('ACTIVE DOMAIN:', d, 'Status:', res.status, 'Title:', res.data.match(/<title>(.*?)<\/title>/i)?.[1]);
    } catch (e) {
      // console.log(d, e.code || e.message);
    }
  }
}

checkDomains();
