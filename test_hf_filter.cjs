const axios = require('axios');
async function test() {
  try {
    const res = await axios.get("https://datasets-server.huggingface.co/filter?dataset=th1nhng0/vietnamese-legal-documents&config=default&split=train&where=so_ky_hieu='125/2020/NĐ-CP'");
    console.log("SUCCESS");
    console.log(res.data);
  } catch (e) {
    console.log("FAILED:", e.message, e.response?.data);
  }
}
test();
