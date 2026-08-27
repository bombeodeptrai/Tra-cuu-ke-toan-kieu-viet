const fs = require('fs');
const cheerio = require('cheerio');
const html = fs.readFileSync('congbao_search.html', 'utf8');
console.log("Includes 125/2020:", html.includes("125/2020"));
const $ = cheerio.load(html);
const links = [];
$('a').each((i, el) => {
  const href = $(el).attr('href');
  if (href && href.includes('noi-dung')) {
    links.push(href);
  }
});
console.log("Links found:", links);
