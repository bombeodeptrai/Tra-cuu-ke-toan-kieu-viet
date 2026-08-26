const fs = require('fs');
console.log('App.tsx content snippet:');
if (fs.existsSync('src/hooks/useDecrees.ts')) {
  console.log(fs.readFileSync('src/hooks/useDecrees.ts', 'utf8').substring(0, 1000));
} else {
  console.log('useDecrees.ts does not exist');
}
if (fs.existsSync('src/App.tsx')) {
  console.log(fs.readFileSync('src/App.tsx', 'utf8').substring(0, 1000));
}