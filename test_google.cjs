const googleIt = require('google-it');

async function test() {
  try {
    const results = await googleIt({ query: 'site:vanban.chinhphu.vn "125/2020/NĐ-CP"' });
    console.log(results);
  } catch (e) {
    console.log("FAILED:", e.message);
  }
}
test();
