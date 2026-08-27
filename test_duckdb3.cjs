const duckdb = require('duckdb');
const db = new duckdb.Database(':memory:');

db.all(`
  SELECT id, title, so_ky_hieu, loai_van_ban
  FROM 'https://huggingface.co/datasets/th1nhng0/vietnamese-legal-documents/resolve/refs%2Fconvert%2Fparquet/metadata/data/0000.parquet' 
  WHERE so_ky_hieu LIKE '%125/2020/NĐ-CP%'
`, function(err, res) {
  if (err) {
    console.error("FAILED metadata query:", err);
    return;
  }
  console.log("Found metadata rows:", res.length);
  console.log(res);
});
