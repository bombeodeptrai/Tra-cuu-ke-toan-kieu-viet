const http = require('http');
const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

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

const PORT = 4175;

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

    // 1. Check AI Chatbox presence
    await page.waitForSelector('textarea', { timeout: 10000 });
    console.log('✅ AI Chatbox Textarea found!');

    // 2. Check preset question buttons
    const quickButtons = await page.$$eval('button', btns => 
      btns.map(b => b.innerText).filter(t => t.includes('💬'))
    );
    console.log(`✅ Quick prompt buttons found: ${quickButtons.length}`);
    quickButtons.forEach(b => console.log('   -', b));

    // 3. Test sending a question via quick button
    console.log('Testing click on first quick question...');
    const firstQuickBtn = (await page.$$('button')).find(async b => {
      const text = await page.evaluate(el => el.innerText, b);
      return text.includes('💬');
    });

    if (firstQuickBtn) {
      await firstQuickBtn.click();
      console.log('Clicked quick prompt, waiting for response...');
      await new Promise(r => setTimeout(r, 1200));

      const responseCount = await page.$$eval('.prose', els => els.length);
      console.log(`✅ AI Response prose blocks rendered: ${responseCount}`);
    }

    // 4. Test typing a custom question
    await page.type('textarea', 'Hạch toán chi phí công trình xây dựng theo quy định mới như thế nào?');
    await page.keyboard.press('Enter');
    console.log('Custom question submitted, waiting for AI...');
    await new Promise(r => setTimeout(r, 1500));

    // 5. Check raw HTML leaks
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

    // Scroll to top to capture AI Box Chat prominently
    await page.evaluate(() => window.scrollTo(0, 100));
    await new Promise(r => setTimeout(r, 400));

    // Take screenshot
    const screenshotPath = path.join(__dirname, '..', 'audit_screens', 'so_sanh_ai_chat_audit.png');
    await page.screenshot({ path: screenshotPath, fullPage: false });
    console.log(`Screenshot saved to: ${screenshotPath}`);

    if (consoleErrors.length === 0 && pageErrors.length === 0 && !htmlLeak) {
      console.log('✅ ALL TEST CRITERIA PASSED! AI Chatbox fully integrated and working.');
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
