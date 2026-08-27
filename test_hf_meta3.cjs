const axios = require('axios');
async function test() {
  try {
    const res = await axios.get("https://datasets-server.huggingface.co/info?dataset=th1nhng0/vietnamese-legal-documents");
    console.log(JSON.stringify(res.data.dataset_info.metadata.features, null, 2));
  } catch (e) {
    console.log("FAILED:", e.message);
  }
}
test();
