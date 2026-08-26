const https = require('https');
https.get('https://script.google.com/macros/s/AKfycbwkPqx3h1fhA-2vhAB5W4VZnEsKyIEfrUNrnf3WjZ35A48Eido-GvK6IKF9Zu2n3YCG/exec', (res) => {
  if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
    https.get(res.headers.location, (res2) => {
      let data = '';
      res2.on('data', chunk => data += chunk);
      res2.on('end', () => {
        try {
          const json = JSON.parse(data);
          console.log('Total items in Google Sheet Apps Script:', json.length);
          console.log('Items:', json.map(x => ({ id: x.id, decree_number: x.decree_number, title: x.title })));
        } catch (e) {
          console.log('Error parsing JSON:', e, data.substring(0, 200));
        }
      });
    });
  }
});