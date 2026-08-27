const axios = require('axios');
async function test() {
  try {
    const where = "so_ky_hieu='125/2020/NĐ-CP'";
    const url = `https://datasets-server.huggingface.co/filter?dataset=th1nhng0/vietnamese-legal-documents&config=metadata&split=data&where=${encodeURIComponent(where)}`;
    console.log("Fetching URL:", url);
    const res = await axios.get(url);
    console.log("Success! Found rows:", res.data.rows.length);
    if (res.data.rows.length > 0) {
        console.log(res.data.rows[0].row);
    }
  } catch (e) {
    console.log("FAILED:", e.message, e.response?.data);
  }
}
test();
