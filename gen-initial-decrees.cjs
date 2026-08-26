const fs = require('fs');
const decrees = JSON.parse(fs.readFileSync('public/data/decrees.json', 'utf8'));

const tsContent = `import { Decree } from '@/types/decree';

export const INITIAL_DECREES: Decree[] = ${JSON.stringify(decrees, null, 2)};
`;

fs.writeFileSync('src/data/initial-decrees.ts', tsContent, 'utf8');
console.log('Successfully generated src/data/initial-decrees.ts with 39 pre-bundled decrees!');