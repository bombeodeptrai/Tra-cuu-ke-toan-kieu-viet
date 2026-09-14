const puppeteer = require('puppeteer');

async function testGuidePage() {
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  
  const errors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') errors.push(msg.text());
  });
  page.on('pageerror', err => errors.push(err.message));

  const targetUrl = process.argv[2] || 'http://127.0.0.1:5174/Tra-cuu-ke-toan-kieu-viet/#/huong-dan';
  console.log('Navigating to Guide page at:', targetUrl);
  await page.goto(targetUrl, { waitUntil: 'networkidle2', timeout: 45000 });

  // Check title or header
  const title = await page.title();
  console.log('Page Title:', title);

  // Check section headings (should be 15 sections)
  const sections = await page.$$eval('section[id]', els => els.map(e => ({ id: e.id, title: e.querySelector('h2')?.innerText || '' })));
  console.log(`Found ${sections.length} sections:`, sections.map(s => s.id));

  // Check search bar
  await page.type('input[placeholder*="Tìm kiếm"]', 'hóa đơn');
  await new Promise(r => setTimeout(r, 500));

  // Check raw html leaks
  const rawHtmlLeaks = await page.evaluate(() => {
    const text = document.body.innerText;
    return text.includes('<div') || text.includes('</div') || text.includes('<span') || text.includes('undefined') || text.includes('[object Object]');
  });

  console.log('Raw HTML leaks:', rawHtmlLeaks);
  console.log('Console Errors:', errors.length, errors);

  await browser.close();

  if (sections.length < 15 || rawHtmlLeaks || errors.length > 0) {
    console.error('TEST FAILED!');
    process.exit(1);
  } else {
    console.log('ALL 15 SECTIONS VERIFIED! TEST PASSED!');
    process.exit(0);
  }
}

testGuidePage().catch(err => {
  console.error(err);
  process.exit(1);
});
