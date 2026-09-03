const fs = require('fs');
const path = require('path');
const TurndownService = require('turndown');

const turndown = new TurndownService({ headingStyle: 'atx' });
const dir = 'public/data/content';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'));

let cleanedCount = 0;

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  if (content.includes('<table') || content.includes('<colgroup') || content.includes('<tbody')) {
    content = content.replace(/<table[\s\S]*?<\/table>/gi, (match) => {
      try {
        return '\n\n' + turndown.turndown(match) + '\n\n';
      } catch (e) {
        return match;
      }
    });
    changed = true;
  }

  // Strip residual ugly HTML style tags
  if (/<(span|p|div|colgroup|col)[^>]*style=/i.test(content)) {
    content = content
      .replace(/<span[^>]*>/gi, '')
      .replace(/<\/span>/gi, '')
      .replace(/<p[^>]*>/gi, '\n')
      .replace(/<\/p>/gi, '\n')
      .replace(/<div[^>]*>/gi, '\n')
      .replace(/<\/div>/gi, '\n');
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    cleanedCount++;
    console.log(`Cleaned HTML from ${file}`);
  }
}

console.log(`Finished! Cleaned ${cleanedCount} files.`);
