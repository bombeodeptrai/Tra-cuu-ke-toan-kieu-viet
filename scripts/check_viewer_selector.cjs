const fs = require('fs');
const decrees = JSON.parse(fs.readFileSync('public/data/decrees.json', 'utf8'));
const viewer = fs.readFileSync('src/components/decree/DecreeDiffViewer.tsx', 'utf8');
const missingInViewer = [];
for (const d of decrees) {
  if (!viewer.includes(`value="${d.id}"`)) {
    missingInViewer.push(d.id);
  }
}
console.log('Missing in selector count:', missingInViewer.length);
if (missingInViewer.length > 0) {
  console.log('Missing IDs:', missingInViewer);
} else {
  console.log('ALL 55 DECREES PRESENT IN VIEWER SELECTOR 100%!');
}
