const duckdb = require('duckdb');
const db = new duckdb.Database(':memory:');

db.all(`
  SELECT id, title, so_ky_hieu, loai_van_ban
  FROM 'https://huggingface.co/datasets/th1nhng0/vietnamese-legal-documents/resolve/refs%2Fconvert%2Fparquet/metadata/data/0000.parquet' 
  WHERE title LIKE '%125/2020%'
`, function(err, res) {
  if (err) {
    console.error("FAILED:", err);
  } else {
    console.log("Found:", res.length);
    console.log(res);
  }
});
