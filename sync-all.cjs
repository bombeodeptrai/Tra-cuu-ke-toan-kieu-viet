const fs = require('fs');

async function syncAllToSheets() {
  const data = JSON.parse(fs.readFileSync('public/data/decrees.json', 'utf8'));
  console.log(`Pushing all ${data.length} decrees to Google Apps Script...`);
  const url = 'https://script.google.com/macros/s/AKfycbwkPqx3h1fhA-2vhAB5W4VZnEsKyIEfrUNrnf3WjZ35A48Eido-GvK6IKF9Zu2n3YCG/exec';
  
  try {
    const res = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'text/plain' }
    });
    const txt = await res.text();
    console.log('Result from Apps Script:', txt);
  } catch (e) {
    console.error('Error syncing:', e);
  }
}
syncAllToSheets();