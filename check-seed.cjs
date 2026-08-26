const fs = require('fs');
if (fs.existsSync('post_seed.cjs')) console.log('--- post_seed.cjs ---', fs.readFileSync('post_seed.cjs', 'utf8'));
if (fs.existsSync('fix_seed.cjs')) console.log('--- fix_seed.cjs ---', fs.readFileSync('fix_seed.cjs', 'utf8'));