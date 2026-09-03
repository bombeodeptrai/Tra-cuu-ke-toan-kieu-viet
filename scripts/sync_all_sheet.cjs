const fs = require('fs');

const GAS_URL = 'https://script.google.com/macros/s/AKfycbwkPqx3h1fhA-2vhAB5W4VZnEsKyIEfrUNrnf3WjZ35A48Eido-GvK6IKF9Zu2n3YCG/exec';

async function syncAllToSheet() {
  const decrees = JSON.parse(fs.readFileSync('public/data/decrees.json', 'utf8'));
  console.log(`Syncing all ${decrees.length} decrees to Google Sheets...`);
  
  const fetch = (...args) => import('node-fetch').then(({ default: f }) => f(...args));
  const res = await fetch(GAS_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain' },
    body: JSON.stringify(decrees)
  });

  const txt = await res.text();
  console.log('Google Sheets sync response:', txt);
}

syncAllToSheet().catch(console.error);
