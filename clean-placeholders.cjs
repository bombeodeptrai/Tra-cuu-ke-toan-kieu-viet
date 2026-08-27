const fs = require('fs');

const decrees = JSON.parse(fs.readFileSync('public/data/decrees.json', 'utf8'));

// Filter out placeholder stubs
const placeholderIds = new Set([
  'nd-254-2026', 'nd-252-2026', 'nd-132-2026', 'tt-58-2026', 'luat-108-2025', 'luat-109-2025'
]);

const cleanedDecrees = decrees.filter(d => !placeholderIds.has(d.id));

console.log(`Filtered out ${decrees.length - cleanedDecrees.length} placeholders.`);
console.log(`Remaining 100% genuine legal documents: ${cleanedDecrees.length}`);

fs.writeFileSync('public/data/decrees.json', JSON.stringify(cleanedDecrees, null, 2), 'utf8');

const tsContent = `import { Decree } from '@/types/decree';\n\nexport const INITIAL_DECREES: Decree[] = ${JSON.stringify(cleanedDecrees, null, 2)};\n`;
fs.writeFileSync('src/data/initial-decrees.ts', tsContent, 'utf8');