const cheerio = require('cheerio');
const fs = require('fs');
const $ = cheerio.load(fs.readFileSync('lvn_test.html'));
let contentDivs = [];
$('[class*="content"]').each((i, el) => {
  contentDivs.push($(el).attr('class'));
});
console.log("Content classes:", [...new Set(contentDivs)]);
console.log("Text length of body:", $('body').text().length);
console.log("Text of #toanvan:", $('#toanvan').text().length);
console.log("Text of .vb-properties:", $('.vb-properties').text().length);
