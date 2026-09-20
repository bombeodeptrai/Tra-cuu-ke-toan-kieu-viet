const puppeteer = require('puppeteer');

async function runTest() {
  const browser = await puppeteer.launch({ 
    headless: true, 
    args: ['--no-sandbox', '--disable-setuid-sandbox'] 
  });
  
  const page = await browser.newPage();
  
  const consoleErrors = [];
  const pageErrors = [];
  
  page.on('console', msg => {
    if (msg.type() === 'error') consoleErrors.push(msg.text());
  });
  
  page.on('pageerror', err => {
    pageErrors.push(err.message);
  });
  
  try {
    await page.goto('http://127.0.0.1:5173/#/so-sanh', { waitUntil: 'networkidle2' });
  } catch (e) {
    if (e.message.includes('ERR_ABORTED')) {
      console.log('Caught ERR_ABORTED, waiting a bit to see if SPA loads...');
      await new Promise(r => setTimeout(r, 3000));
    } else {
      pageErrors.push(e.message);
    }
  }
  
  console.log('Console Errors:', consoleErrors);
  console.log('Page Errors:', pageErrors);
  
  await browser.close();
  
  if (consoleErrors.length > 0 || pageErrors.length > 0) {
    console.error('Test FAILED');
    process.exit(1);
  } else {
    console.log('Test PASSED');
    process.exit(0);
  }
}
runTest();
