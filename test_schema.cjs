const duckdb = require('duckdb');
const db = new duckdb.Database(':memory:');

db.all(`
  DESCRIBE SELECT * FROM 'https://huggingface.co/datasets/th1nhng0/vietnamese-legal-documents/resolve/refs%2Fconvert%2Fparquet/metadata/data/0000.parquet' LIMIT 1
`, function(err, res) {
  if (err) {
    console.error(err);
  } else {
    console.log(res);
  }
});
