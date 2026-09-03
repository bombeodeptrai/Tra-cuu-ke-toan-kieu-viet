const fs = require('fs');

function escapeBrackets(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  // Replace <text with spaces/slashes> with [text with spaces/slashes]
  content = content.replace(/<([^>]*[\/\s_][^>]*)>/g, '[$1]');
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Cleaned placeholder brackets in', filePath);
}

escapeBrackets('public/data/content/nd-125-2020.md');
escapeBrackets('public/data/content/nd-70-2025.md');
