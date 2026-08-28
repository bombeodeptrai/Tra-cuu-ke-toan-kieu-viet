const googleIt = require('google-it');
googleIt({ query: 'site:vbpl.vn "200/2014/TT-BTC"' })
  .then(res => {
    console.log("VBPL:");
    console.log(res.map(r => r.link));
  }).catch(console.error);

googleIt({ query: 'site:hethongphapluat.com "200/2014/TT-BTC"' })
  .then(res => {
    console.log("HeThong:");
    console.log(res.map(r => r.link));
  }).catch(console.error);
