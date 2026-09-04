const http = require('http');
const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

// 1. Simple static file server for dist/
const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.mjs': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
};

const server = http.createServer((req, res) => {
  let reqUrl = req.url.split('?')[0];
  // Strip base prefix if any
  reqUrl = reqUrl.replace(/^\/Tra-cuu-ke-toan-kieu-viet/, '');
  if (reqUrl === '' || reqUrl === '/') reqUrl = '/index.html';

  let filePath = path.join(__dirname, '..', 'dist', reqUrl);

  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    filePath = path.join(__dirname, '..', 'dist', 'index.html');
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentType = mimeTypes[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(500);
      res.end('Server Error');
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

const PORT = 4174;

server.listen(PORT, async () => {
  console.log(`Test server running at http://localhost:${PORT}`);
  let browser;
  try {
    browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900 });

    const consoleErrors = [];
    const pageErrors = [];

    page.on('console', msg => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });

    page.on('pageerror', err => {
      pageErrors.push(err.toString());
    });

    console.log('Navigating to comparison page...');
    await page.goto(`http://localhost:${PORT}/#/so-sanh`, { waitUntil: 'networkidle0', timeout: 30000 });

    // Wait for selector
    await page.waitForSelector('select', { timeout: 10000 });

    // Check options in select dropdown
    const options = await page.$$eval('select option', opts => opts.map(o => ({ value: o.value, text: o.text })));
    console.log(`Total comparison dropdown options found in UI: ${options.length}`);

    // Verify all 55 decrees are in the dropdown
    const decrees = JSON.parse(fs.readFileSync('public/data/decrees.json', 'utf8'));
    const missingDecrees = decrees.filter(d => !options.some(o => o.value === d.id));
    console.log(`Missing decrees in dropdown: ${missingDecrees.length}`);

    // Test cycling through first 5 decrees, plus 5 random ones to test rendering and ensure no errors
    const testIds = [
      'tt-99-2025',
      'tt-200-2014',
      'nd-123-2020',
      'luat-67-2025-tndn',
      'luat-109-2025-tncn',
      'blld-45-2019',
      'nd-193-2025-khoangsan',
      'qd-87-2025-gialai',
      'luat-gd-dien-tu-20-2023',
      'nd-12-2022'
    ];

    let renderedTotal = 0;
    for (const testId of testIds) {
      await page.select('select', testId);
      await new Promise(r => setTimeout(r, 400));
      
      const cards = await page.$$eval('.space-y-4 .overflow-hidden', els => els.length);
      const impactNotes = await page.$$eval('.text-amber-900, .dark\\:text-amber-200', els => els.length);
      renderedTotal += cards;
      console.log(`Decree ${testId}: ${cards} diff cards rendered, ${impactNotes} impact notes`);
    }

    // Check raw HTML leaks
    const htmlLeak = await page.evaluate(() => {
      const text = document.body.innerText;
      return /<div|<span|<p>|&lt;div/.test(text);
    });

    console.log('\n--- AUDIT RESULTS ---');
    console.log(`Console Errors: ${consoleErrors.length}`);
    if (consoleErrors.length > 0) console.log(consoleErrors);
    console.log(`Page Crashes / Errors: ${pageErrors.length}`);
    if (pageErrors.length > 0) console.log(pageErrors);
    console.log(`Raw HTML Leaks: ${htmlLeak ? 1 : 0}`);

    // Take screenshot
    const screenshotPath = path.join(__dirname, '..', 'audit_screens', 'so_sanh_audit.png');
    if (!fs.existsSync(path.dirname(screenshotPath))) {
      fs.mkdirSync(path.dirname(screenshotPath), { recursive: true });
    }
    await page.screenshot({ path: screenshotPath, fullPage: false });
    console.log(`Screenshot saved to: ${screenshotPath}`);

    if (consoleErrors.length === 0 && pageErrors.length === 0 && !htmlLeak && missingDecrees.length === 0) {
      console.log('✅ ALL TEST CRITERIA PASSED! 0 Console Errors, 0 Crashes, 0 HTML Leaks, 100% 55 Decrees covered.');
    } else {
      console.error('❌ TEST FAILED CRITERIA!');
      process.exitCode = 1;
    }

  } catch (err) {
    console.error('Puppeteer test encountered error:', err);
    process.exitCode = 1;
  } finally {
    if (browser) await browser.close();
    server.close();
  }
});
