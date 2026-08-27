const duckdb = require('duckdb');
const db = new duckdb.Database(':memory:');

db.all(`
  SELECT id 
  FROM 'https://huggingface.co/datasets/th1nhng0/vietnamese-legal-documents/resolve/refs%2Fconvert%2Fparquet/metadata/data/0000.parquet' 
  WHERE so_ky_hieu = '125/2020/NĐ-CP'
`, function(err, res) {
  if (err) {
    console.error("FAILED metadata query:", err);
    return;
  }
  console.log("Found metadata:", res);
  
  if (res.length > 0) {
    const docId = res[0].id;
    db.all(`
      SELECT content_html 
      FROM 'https://huggingface.co/datasets/th1nhng0/vietnamese-legal-documents/resolve/refs%2Fconvert%2Fparquet/content/data/0000.parquet' 
      WHERE id = '${docId}'
    `, function(err2, res2) {
      if (err2) {
        console.error("FAILED content query:", err2);
      } else {
        console.log("Content length:", res2[0].content_html.length);
        console.log("Preview:", res2[0].content_html.substring(0, 200));
      }
    });
  }
});
