const duckdb = require('duckdb');
const fs = require('fs');
const db = new duckdb.Database(':memory:');

db.all(`
  SELECT content_html 
  FROM 'https://huggingface.co/datasets/th1nhng0/vietnamese-legal-documents/resolve/refs%2Fconvert%2Fparquet/content/data/0000.parquet' 
  WHERE id = 'ab302360-68a4-11f1-a9cd-836a3b797bec'
`, function(err, res) {
  if (err) {
    console.error("FAILED content query:", err);
  } else {
    fs.writeFileSync('nd125_merged_hf.html', res[0].content_html);
    console.log("Saved to nd125_merged_hf.html. Length:", res[0].content_html.length);
  }
});
