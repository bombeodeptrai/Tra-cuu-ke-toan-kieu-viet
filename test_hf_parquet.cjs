const axios = require('axios');
async function test() {
  try {
    const res = await axios.get("https://datasets-server.huggingface.co/parquet?dataset=th1nhng0/vietnamese-legal-documents");
    console.log(JSON.stringify(res.data, null, 2));
  } catch (e) {
    console.log("FAILED:", e.message);
  }
}
test();
