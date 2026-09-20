import puppeteer from 'puppeteer';
import { spawn } from 'child_process';

async function run() {
  const server = spawn('cmd', ['/c', 'npm run dev'], { cwd: process.cwd() });
  
  await new Promise(resolve => setTimeout(resolve, 5000));

  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  
  let errors = 0;
  page.on('console', msg => {
    if (msg.type() === 'error') {
      console.log('Console Error:', msg.text());
      // errors++;
    }
  });

  page.on('pageerror', err => {
    console.log('Page Crash:', err.message);
    errors++;
  });

  await page.goto('http://localhost:5173/phap-luat', { waitUntil: 'networkidle0' });
  
  const content = await page.content();
  if (content.includes('[object Object]')) {
    console.log('Raw HTML Leak: [object Object] found');
    errors++;
  }
  
  await page.goto('http://localhost:5173/phap-luat/vbhn-08-2026', { waitUntil: 'networkidle0' });
  const content2 = await page.content();
  if (content2.includes('[object Object]')) {
    console.log('Raw HTML Leak: [object Object] found');
    errors++;
  }

  console.log(`Test completed. Errors: ${errors}`);
  await browser.close();
  server.kill();
  process.exit(errors === 0 ? 0 : 1);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
