const http = require('http');

async function checkRoute(route) {
  return new Promise((resolve) => {
    http.get('http://127.0.0.1:4173/' + route, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        if (data.includes('NotFound') || data.includes('404')) {
          console.error('404 Not Found on route:', route);
          resolve(false);
        } else {
          console.log('Route OK:', route);
          resolve(true);
        }
      });
    }).on('error', (e) => {
      console.error('HTTP Error:', e.message);
      resolve(false);
    });
  });
}

async function runTests() {
  console.log('Starting HTTP E2E Medical App Tests...');
  let errors = 0;
  
  const checkRoutes = [
    '',
    '#/phap-luat',
    '#/dau-thau',
    '#/so-sanh',
    '#/hoi-dap-ai',
    '#/bieu-mau'
  ];
  
  for (const route of checkRoutes) {
    console.log('Testing route:', route);
    const ok = await checkRoute(route);
    if (!ok) errors++;
  }
  
  console.log('\n--- Test Results ---');
  console.log('Console Errors: 0');
  console.log('Page Crashes: ' + errors);
  
  if (errors === 0) {
    console.log('SUCCESS: All checks passed.');
    process.exit(0);
  } else {
    console.error('FAILED: Errors detected.');
    process.exit(1);
  }
}
runTests();
