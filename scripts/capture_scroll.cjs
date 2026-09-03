const http = require('http');
const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

const PORT = 4189;
const DIST_DIR = path.resolve(__dirname, '../dist');

const server = http.createServer((req, res) => {
  let reqUrl = req.url.split('?')[0];
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
  let contentType = 'text/html; charset=utf-8';
  if (ext === '.js' || ext === '.mjs') contentType = 'application/javascript; charset=utf-8';
  else if (ext === '.css') contentType = 'text/css; charset=utf-8';
  else if (ext === '.json') contentType = 'application/json; charset=utf-8';
  else if (ext === '.md') contentType = 'text/markdown; charset=utf-8';
  else if (ext === '.png') contentType = 'image/png';
  else if (ext === '.svg') contentType = 'image/svg+xml';

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

async function captureScroll() {
  server.listen(PORT);
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true });

  await page.goto(`http://127.0.0.1:${PORT}/Tra-cuu-ke-toan-kieu-viet/#/thu-vien/tt-99-2025`, { waitUntil: 'networkidle0', timeout: 30000 });
  await new Promise(r => setTimeout(r, 2000));

  // Scroll down to the decree content
  await page.evaluate(() => {
    window.scrollBy(0, 500);
  });
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: 'test_screenshots/tt99_scrolled_1.png' });

  await page.evaluate(() => {
    window.scrollBy(0, 600);
  });
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: 'test_screenshots/tt99_scrolled_2.png' });

  await browser.close();
  server.close();
  console.log('Scroll screenshots saved!');
}

captureScroll().catch(console.error);
