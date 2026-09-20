import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import sqlite3 from 'sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';
import { applySchema } from './db/schema.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

// Auth middleware mock
app.use((req, res, next) => {
  req.tenantId = 'test-tenant';
  next();
});

const dbPath = path.join(__dirname, '../database.sqlite');
const db = new sqlite3.Database(dbPath, async (err) => {
  if (err) {
    console.error('Error opening database', err.message);
  } else {
    console.log('Connected to the SQLite database.');
    try {
      await applySchema(db);
      console.log('Schema applied successfully.');
    } catch (e) {
      console.error('Error applying schema:', e);
    }
  }
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', version: 'v2' });
});

// Stub required endpoints
const stubHandler = (req, res) => res.json({ message: `Stub for ${req.method} ${req.path}`, tenantId: req.tenantId });

// /api/documents
app.get('/api/documents', stubHandler);
app.post('/api/documents', stubHandler);

// /api/files
app.get('/api/files', stubHandler);
app.post('/api/files', stubHandler);

// /api/compare
app.post('/api/compare', stubHandler);
app.get('/api/compare', stubHandler);

// /api/tenders
app.get('/api/tenders', stubHandler);
app.post('/api/tenders', stubHandler);

// /api/cases
app.get('/api/cases', stubHandler);
app.post('/api/cases', stubHandler);

// /api/devices
app.get('/api/devices', stubHandler);
app.post('/api/devices', stubHandler);

// /api/incidents
app.get('/api/incidents', stubHandler);
app.post('/api/incidents', stubHandler);

// /api/search
app.get('/api/search', stubHandler);
app.post('/api/search', stubHandler);

// /api/chat
app.get('/api/chat', stubHandler);
app.post('/api/chat', stubHandler);

// /api/templates
app.get('/api/templates', stubHandler);
app.post('/api/templates', stubHandler);

// Global Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error', message: err.message });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
