const axios = require('axios');
async function test() {
  try {
    const res = await axios.get("https://datasets-server.huggingface.co/info?dataset=th1nhng0/vietnamese-legal-documents");
    const columns = res.data.dataset_info.default.features;
    console.log("Columns:", Object.keys(columns));
  } catch (e) {
    console.log("FAILED:", e.message);
  }
}
test();
