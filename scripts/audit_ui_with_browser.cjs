const http = require('http');
const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

// 1. Simple static server for dist
const PORT = 4188;
const DIST_DIR = path.resolve(__dirname, '../dist');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.pdf': 'application/pdf',
  '.svg': 'image/svg+xml',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.md': 'text/markdown; charset=utf-8'
};

const server = http.createServer((req, res) => {
  let reqUrl = req.url.split('?')[0];
  
  // Strip GitHub Pages repo base path if present
  if (reqUrl.startsWith('/Tra-cuu-ke-toan-kieu-viet/')) {
    reqUrl = reqUrl.replace('/Tra-cuu-ke-toan-kieu-viet/', '/');
  }
  
  if (reqUrl === '/' || reqUrl === '') reqUrl = '/index.html';
  
  let filePath = path.join(DIST_DIR, reqUrl);
  if (!fs.existsSync(filePath)) {
    filePath = path.join(path.resolve(__dirname, '../public'), reqUrl);
  }
  if (!fs.existsSync(filePath)) {
    filePath = path.join(DIST_DIR, 'index.html');
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(404);
      res.end('Not found');
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    }
  });
});

async function runAudit() {
  server.listen(PORT);
  console.log(`Preview server started at http://127.0.0.1:${PORT}`);

  const browser = await puppeteer.launch({ 
    headless: true, 
    args: ['--no-sandbox', '--disable-setuid-sandbox'] 
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true }); // Mobile viewport

  const errors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') {
      errors.push(`[Console Error] ${msg.text()}`);
    }
  });
  page.on('pageerror', err => {
    errors.push(`[Page Error] ${err.message}`);
  });

  if (!fs.existsSync('test_screenshots')) {
    fs.mkdirSync('test_screenshots');
  }

  const pagesToTest = [
    { url: `http://127.0.0.1:${PORT}/Tra-cuu-ke-toan-kieu-viet/#/`, name: '01_homepage' },
    { url: `http://127.0.0.1:${PORT}/Tra-cuu-ke-toan-kieu-viet/#/thu-vien`, name: '02_library' },
    { url: `http://127.0.0.1:${PORT}/Tra-cuu-ke-toan-kieu-viet/#/thu-vien/tt-99-2025`, name: '03_decree_tt99_summary' },
    { url: `http://127.0.0.1:${PORT}/Tra-cuu-ke-toan-kieu-viet/#/tien-ich`, name: '04_tools_page' },
    { url: `http://127.0.0.1:${PORT}/Tra-cuu-ke-toan-kieu-viet/#/tai-khoan`, name: '05_chart_accounts' },
    { url: `http://127.0.0.1:${PORT}/Tra-cuu-ke-toan-kieu-viet/#/huong-dan`, name: '06_guide_page' },
    { url: `http://127.0.0.1:${PORT}/Tra-cuu-ke-toan-kieu-viet/#/thu-vien/nd-145-2020`, name: '07_decree_nd145' },
    { url: `http://127.0.0.1:${PORT}/Tra-cuu-ke-toan-kieu-viet/#/thu-vien/nd-37-2015`, name: '08_decree_nd37' },
    { url: `http://127.0.0.1:${PORT}/Tra-cuu-ke-toan-kieu-viet/#/thu-vien/nd-50-2021`, name: '09_decree_nd50' },
    { url: `http://127.0.0.1:${PORT}/Tra-cuu-ke-toan-kieu-viet/#/thu-vien/nd-73-2024`, name: '10_decree_nd73' },
    { url: `http://127.0.0.1:${PORT}/Tra-cuu-ke-toan-kieu-viet/#/thu-vien/qd-595-2017-bhxh`, name: '11_decree_qd595' },
    { url: `http://127.0.0.1:${PORT}/Tra-cuu-ke-toan-kieu-viet/#/thu-vien/luat-109-2025-tncn`, name: '12_decree_luat109' },
  ];

  let rawHtmlLeaks = [];

  for (const p of pagesToTest) {
    console.log(`Auditing: ${p.name} (${p.url})...`);
    await page.goto(p.url, { waitUntil: 'networkidle0', timeout: 30000 });
    await new Promise(r => setTimeout(r, 1200)); // wait for transitions & state

    // If it's tt-99-2025, also test clicking the "Toàn văn" tab and "Điểm mới & So sánh" tab!
    if (p.name === '03_decree_tt99_summary') {
      // 1. Screenshot summary
      await page.screenshot({ path: `test_screenshots/${p.name}.png` });

      // 2. Click "Toàn văn" tab
      const toanVanTab = await page.$('button[value="full"], button[role="tab"]:nth-child(2)');
      if (toanVanTab) {
        console.log('Clicking Toàn văn tab on TT99...');
        await toanVanTab.click();
        await new Promise(r => setTimeout(r, 1500));
        await page.screenshot({ path: 'test_screenshots/03_decree_tt99_toanvan.png' });
        
        // Inspect body text for raw html leak
        const bodyText = await page.evaluate(() => document.body.innerText);
        if (bodyText.includes('border-collapse') || bodyText.includes('width: 45.494') || bodyText.includes('<table') || bodyText.includes('border-style: none')) {
          rawHtmlLeaks.push('LEAK FOUND IN TT99 TOÀN VĂN: Raw HTML table styles visible in text!');
        }
      }

      // 3. Click "Điểm mới & So sánh" tab
      const diffTab = await page.$('button[value="diff"], button[role="tab"]:nth-child(3)');
      if (diffTab) {
        console.log('Clicking Điểm mới & So sánh tab on TT99...');
        await diffTab.click();
        await new Promise(r => setTimeout(r, 1500));
        await page.screenshot({ path: 'test_screenshots/03_decree_tt99_diff.png' });
      }
    } else {
      await page.screenshot({ path: `test_screenshots/${p.name}.png` });
      
      const bodyText = await page.evaluate(() => document.body.innerText);
      if (bodyText.includes('border-collapse') || bodyText.includes('<table') || bodyText.includes('border-style: none')) {
        rawHtmlLeaks.push(`LEAK FOUND IN ${p.name}: Raw HTML tags visible in text!`);
      }
    }
  }

  await browser.close();
  server.close();

  console.log('\n================ BROWSER AUDIT SUMMARY ================');
  console.log('Total tested pages:', pagesToTest.length);
  console.log('Console / Page Errors:', errors.length === 0 ? 'NONE (Clean!)' : errors);
  console.log('Raw HTML Leaks in UI:', rawHtmlLeaks.length === 0 ? 'NONE (Clean!)' : rawHtmlLeaks);
  console.log('Screenshots saved to: test_screenshots/');
  console.log('========================================================\n');
}

runAudit().catch(err => {
  console.error('Audit failed with exception:', err);
  server.close();
  process.exit(1);
});
