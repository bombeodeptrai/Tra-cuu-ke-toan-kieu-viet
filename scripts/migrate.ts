import fs from 'fs';
import path from 'path';
import { MOCK_DECREES } from '../src/data/mock-decrees';

const DATA_DIR = path.join(process.cwd(), 'public', 'data');
const CONTENT_DIR = path.join(DATA_DIR, 'content');
const PDF_DIR = path.join(DATA_DIR, 'pdfs');

// Ensure directories exist
if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
if (!fs.existsSync(CONTENT_DIR)) fs.mkdirSync(CONTENT_DIR, { recursive: true });
if (!fs.existsSync(PDF_DIR)) fs.mkdirSync(PDF_DIR, { recursive: true });

async function migrate() {
  console.log(`Migrating ${MOCK_DECREES.length} decrees...`);

  const indexData = MOCK_DECREES.map((decree) => {
    const { content, ...metadata } = decree;
    
    // Write markdown content
    fs.writeFileSync(
      path.join(CONTENT_DIR, `${decree.id}.md`),
      content,
      'utf-8'
    );

    // Create a dummy PDF file
    fs.writeFileSync(
      path.join(PDF_DIR, `${decree.id}.pdf`),
      `%PDF-1.4\n% Dummy PDF file for ${decree.title}\n`,
      'utf-8'
    );

    return {
      ...metadata,
      pdf_url: `/data/pdfs/${decree.id}.pdf`,
      content_url: `/data/content/${decree.id}.md`
    };
  });

  // Write index JSON
  fs.writeFileSync(
    path.join(DATA_DIR, 'decrees.json'),
    JSON.stringify(indexData, null, 2),
    'utf-8'
  );

  console.log('Migration completed successfully!');
}

migrate().catch(console.error);
