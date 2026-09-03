const puppeteer = require('puppeteer');
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 4201;
const DIST_DIR = path.resolve(__dirname, '../dist');

const server = http.createServer((req, res) => {
  let reqUrl = req.url.split('?')[0].replace('/Tra-cuu-ke-toan-kieu-viet/', '/');
  if (reqUrl === '/' || reqUrl === '') reqUrl = '/index.html';
  let p = path.join(DIST_DIR, reqUrl);
  if (!fs.existsSync(p)) p = path.join(path.resolve(__dirname, '../public'), reqUrl);
  if (!fs.existsSync(p)) p = path.join(DIST_DIR, 'index.html');
  const ext = path.extname(p).toLowerCase();
  let ct = 'text/html; charset=utf-8';
  if (ext === '.js' || ext === '.mjs') ct = 'application/javascript; charset=utf-8';
  else if (ext === '.css') ct = 'text/css; charset=utf-8';
  else if (ext === '.json') ct = 'application/json; charset=utf-8';
  else if (ext === '.png') ct = 'image/png';
  else if (ext === '.xls') ct = 'application/vnd.ms-excel';
  else if (ext === '.doc') ct = 'application/msword';
  fs.readFile(p, (err, c) => {
    if (err) {
      res.writeHead(404);
      res.end('Not found');
    } else {
      res.writeHead(200, { 'Content-Type': ct });
      res.end(c);
    }
  });
});

async function testForms() {
  server.listen(PORT);
  console.log('Testing forms download on port', PORT);

  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true });

  let alertFired = false;
  let alertMessage = '';
  page.on('dialog', async dialog => {
    alertFired = true;
    alertMessage = dialog.message();
    await dialog.dismiss();
  });

  const consoleErrors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') consoleErrors.push(msg.text());
  });

  await page.goto(`http://127.0.0.1:${PORT}/Tra-cuu-ke-toan-kieu-viet/#/bieu-mau`, { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 1000));

  // Count buttons
  const buttons = await page.$$('button');
  console.log(`Found ${buttons.length} buttons on FormsPage`);

  // Click the first download button
  const downloadButtons = await page.$$('button');
  let clicked = false;
  for (const btn of downloadButtons) {
    const text = await (await btn.getProperty('innerText')).jsonValue();
    if (text.includes('Tải Mẫu')) {
      console.log('Clicking button:', text);
      await btn.click();
      clicked = true;
      break;
    }
  }

  await new Promise(r => setTimeout(r, 1000));

  await page.screenshot({ path: 'audit_screens/forms_mobile_tested.png' });
  console.log('Saved screenshot to audit_screens/forms_mobile_tested.png');

  console.log('Alert fired?:', alertFired, alertMessage ? `("${alertMessage}")` : '(None)');
  console.log('Console errors:', consoleErrors.length);

  await browser.close();
  server.close();

  if (alertFired) {
    console.error('FAILED: An alert was fired!');
    process.exit(1);
  } else {
    console.log('SUCCESS: Download button works with ZERO alerts and ZERO console errors!');
  }
}

testForms().catch(err => {
  console.error(err);
  process.exit(1);
});
