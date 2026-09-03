const puppeteer = require('puppeteer');
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 4205;
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
  fs.readFile(p, (err, c) => {
    res.writeHead(200, { 'Content-Type': ct });
    res.end(c);
  });
});

async function run() {
  server.listen(PORT);

  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });

  const errors = [];
  page.on('console', msg => { if (msg.type() === 'error') errors.push(msg.text()); });

  // 1. Check Home
  await page.goto(`http://127.0.0.1:${PORT}/Tra-cuu-ke-toan-kieu-viet/#/`, { waitUntil: 'networkidle0' });
  const title = await page.title();
  console.log('Page Title:', title);

  const bodyText = await page.$eval('body', el => el.innerText);
  console.log('Page has "Kiểu Việt"?:', bodyText.includes('Kiểu Việt'));
  console.log('Page has "Kiều"?:', bodyText.includes('Kiều'));

  // 2. Check Guide
  await page.goto(`http://127.0.0.1:${PORT}/Tra-cuu-ke-toan-kieu-viet/#/huong-dan`, { waitUntil: 'networkidle0' });
  const guideText = await page.$eval('body', el => el.innerText);
  console.log('Guide has "CÔNG TY CỔ PHẦN KIỂU VIỆT"?:', guideText.includes('CÔNG TY CỔ PHẦN KIỂU VIỆT'));
  console.log('Guide has "XÂY LẮP KIỂU VIỆT"?:', guideText.includes('XÂY LẮP KIỂU VIỆT'));

  // 3. Check Forms
  await page.goto(`http://127.0.0.1:${PORT}/Tra-cuu-ke-toan-kieu-viet/#/bieu-mau`, { waitUntil: 'networkidle0' });
  const formsText = await page.$eval('body', el => el.innerText);
  console.log('Forms has "KHO BIỂU MẪU CHỨNG TỪ NỘI BỘ KIỂU VIỆT"?:', formsText.includes('KHO BIỂU MẪU CHỨNG TỪ NỘI BỘ KIỂU VIỆT'));
  console.log('Forms has "Thư Viện Biểu Mẫu Kế Toán Kiểu Việt"?:', formsText.includes('Thư Viện Biểu Mẫu Kế Toán Kiểu Việt'));
  console.log('Forms has "Xây Lắp Kiểu Việt"?:', formsText.includes('Xây Lắp Kiểu Việt'));

  console.log('Total console errors:', errors.length);

  await browser.close();
  server.close();
}

run().catch(e => {
  console.error(e);
  process.exit(1);
});
