const duckdb = require('duckdb');
const db = new duckdb.Database(':memory:');

db.all(`
  SELECT id, title, so_ky_hieu, loai_van_ban, ngay_ban_hanh
  FROM 'https://huggingface.co/datasets/th1nhng0/vietnamese-legal-documents/resolve/refs%2Fconvert%2Fparquet/metadata/data/0000.parquet' 
  WHERE so_ky_hieu LIKE '%96/2015/TT-BTC%'
`, function(err, res) {
  if (err) {
    console.error("FAILED:", err);
  } else {
    console.log("Found:", res.length);
    console.log(res);
  }
});
