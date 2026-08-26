const fs = require('fs');
const https = require('https');

async function doSeeding() {
  const data = JSON.parse(fs.readFileSync('public/data/decrees.json', 'utf8'));
  const url = 'https://script.google.com/macros/s/AKfycbwkPqx3h1fhA-2vhAB5W4VZnEsKyIEfrUNrnf3WjZ35A48Eido-GvK6IKF9Zu2n3YCG/exec';
  
  // First, we need to tell it to clear the DB
  const clearPayload = JSON.stringify({ action: 'reset' });
  const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
  
  try {
    const res = await fetch(url, {
      method: 'POST',
      body: clearPayload,
      headers: { 'Content-Type': 'text/plain' } // Apps Script doPost gets this as e.postData.contents
    });
    console.log('Clear response:', await res.text());
    
    // Now post the data in chunks (Apps script might timeout on huge payload)
    const chunkSize = 20;
    for(let i = 0; i < data.length; i += chunkSize) {
       const chunk = data.slice(i, i + chunkSize);
       const postRes = await fetch(url, {
         method: 'POST',
         body: JSON.stringify(chunk),
         headers: { 'Content-Type': 'text/plain' }
       });
       console.log('Chunk', i, await postRes.text());
    }
  } catch (e) {
    console.error(e);
  }
}

doSeeding();