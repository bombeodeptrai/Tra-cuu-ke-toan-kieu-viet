export const schema = `
CREATE TABLE IF NOT EXISTS users (
  id TEXT PRIMARY KEY,
  name TEXT,
  email TEXT UNIQUE
);

CREATE TABLE IF NOT EXISTS memberships (
  id TEXT PRIMARY KEY,
  user_id TEXT REFERENCES users(id),
  tenant_id TEXT,
  role TEXT
);

CREATE TABLE IF NOT EXISTS cases (
  id TEXT PRIMARY KEY,
  tenant_id TEXT,
  title TEXT
);

CREATE TABLE IF NOT EXISTS case_revisions (
  id TEXT PRIMARY KEY,
  case_id TEXT REFERENCES cases(id),
  revision_number INTEGER,
  UNIQUE(case_id, revision_number)
);

CREATE TABLE IF NOT EXISTS evidence_files (
  id TEXT PRIMARY KEY,
  tenant_id TEXT,
  name TEXT
);

CREATE TABLE IF NOT EXISTS file_versions (
  id TEXT PRIMARY KEY,
  file_id TEXT REFERENCES evidence_files(id),
  version_number INTEGER,
  content BLOB
);

CREATE TABLE IF NOT EXISTS document_versions (
  id TEXT PRIMARY KEY,
  tenant_id TEXT,
  sourceKey TEXT,
  revision TEXT,
  title TEXT,
  UNIQUE(tenant_id, sourceKey, revision)
);

CREATE TABLE IF NOT EXISTS legal_blocks (
  id TEXT PRIMARY KEY,
  document_version_id TEXT REFERENCES document_versions(id),
  content TEXT
);

CREATE TABLE IF NOT EXISTS attachments (
  id TEXT PRIMARY KEY,
  tenant_id TEXT,
  file_url TEXT
);

CREATE TABLE IF NOT EXISTS ingestion_jobs (
  id TEXT PRIMARY KEY,
  tenant_id TEXT,
  status TEXT
);

CREATE TABLE IF NOT EXISTS assessment_runs (
  id TEXT PRIMARY KEY,
  tenant_id TEXT,
  status TEXT
);

CREATE TABLE IF NOT EXISTS findings (
  id TEXT PRIMARY KEY,
  assessment_run_id TEXT REFERENCES assessment_runs(id),
  description TEXT
);

CREATE TABLE IF NOT EXISTS products (
  id TEXT PRIMARY KEY,
  tenant_id TEXT,
  name TEXT
);

CREATE TABLE IF NOT EXISTS assets (
  id TEXT PRIMARY KEY,
  tenant_id TEXT,
  name TEXT
);

CREATE TABLE IF NOT EXISTS service_records (
  id TEXT PRIMARY KEY,
  asset_id TEXT REFERENCES assets(id),
  description TEXT
);

CREATE TABLE IF NOT EXISTS incidents (
  id TEXT PRIMARY KEY,
  tenant_id TEXT,
  description TEXT
);

CREATE TABLE IF NOT EXISTS chat_sessions (
  id TEXT PRIMARY KEY,
  tenant_id TEXT,
  title TEXT
);

CREATE TABLE IF NOT EXISTS messages (
  id TEXT PRIMARY KEY,
  session_id TEXT REFERENCES chat_sessions(id),
  clientMessageId TEXT,
  content TEXT,
  UNIQUE(session_id, clientMessageId)
);

CREATE TABLE IF NOT EXISTS comparison_runs (
  id TEXT PRIMARY KEY,
  tenant_id TEXT,
  status TEXT
);

CREATE TABLE IF NOT EXISTS alignments (
  id TEXT PRIMARY KEY,
  comparison_run_id TEXT REFERENCES comparison_runs(id),
  data TEXT
);

CREATE TABLE IF NOT EXISTS exports (
  id TEXT PRIMARY KEY,
  tenant_id TEXT,
  status TEXT
);

CREATE TABLE IF NOT EXISTS audit_events (
  id TEXT PRIMARY KEY,
  tenant_id TEXT,
  event_type TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
`;

export function applySchema(db) {
  return new Promise((resolve, reject) => {
    db.exec(schema, (err) => {
      if (err) reject(err);
      else resolve();
    });
  });
}
