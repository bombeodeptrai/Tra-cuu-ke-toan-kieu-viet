const puppeteer = require('puppeteer');
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 4216;
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
  else if (ext === '.svg') ct = 'image/svg+xml';
  fs.readFile(p, (err, c) => {
    res.writeHead(200, { 'Content-Type': ct });
    res.end(c);
  });
});

async function run() {
  server.listen(PORT);
  console.log(`Test server running on port ${PORT}`);
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
  const page = await browser.newPage();
  const errors = [];
  page.on('pageerror', err => errors.push('PAGE: ' + err.message));
  page.on('console', msg => {
    if (msg.type() === 'error') errors.push('CONSOLE: ' + msg.text());
  });

  // 1. Test Library preview modal
  console.log('Testing /thu-vien decree preview modal...');
  await page.goto(`http://127.0.0.1:${PORT}/Tra-cuu-ke-toan-kieu-viet/#/thu-vien`, { waitUntil: 'networkidle0' });
  const previewBtns = await page.$$('button');
  for (const b of previewBtns) {
    const text = await page.evaluate(el => el.textContent, b);
    if (text && text.includes('Xem trước')) {
      await b.click();
      break;
    }
  }
  await new Promise(r => setTimeout(r, 600));
  const hasDecreeModal = await page.evaluate(() => {
    return document.body.textContent.includes('Bản xem trước nhanh') && 
           document.body.textContent.includes('HỆ THỐNG TRA CỨU PHÁP LUẬT — CÔNG TY CỔ PHẦN KIỂU VIỆT');
  });
  console.log('Decree Preview Modal working?:', hasDecreeModal);

  // 2. Test Forms page
  console.log('Testing /bieu-mau...');
  await page.goto(`http://127.0.0.1:${PORT}/Tra-cuu-ke-toan-kieu-viet/#/bieu-mau`, { waitUntil: 'networkidle0' });
  const formCardsCount = await page.evaluate(() => {
    return document.querySelectorAll('.grid > div').length;
  });
  console.log('Total forms displayed on page:', formCardsCount);

  // 3. Test Form Preview modal
  const formPreviewBtns = await page.$$('button');
  for (const b of formPreviewBtns) {
    const text = await page.evaluate(el => el.textContent, b);
    if (text && text.includes('Xem trước')) {
      await b.click();
      break;
    }
  }
  await new Promise(r => setTimeout(r, 600));
  const hasFormModal = await page.evaluate(() => {
    return document.body.textContent.includes('CÔNG TY CỔ PHẦN KIỂU VIỆT') &&
           document.body.textContent.includes('Kế toán trưởng');
  });
  console.log('Form Preview Modal working?:', hasFormModal);

  console.log('Total Console Errors:', errors.length);
  if (errors.length > 0) console.log(errors);

  await browser.close();
  server.close();
  process.exit(errors.length > 0 ? 1 : 0);
}

run();
