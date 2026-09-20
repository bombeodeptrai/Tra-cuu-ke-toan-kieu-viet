const fs = require('fs');
const { execSync } = require('child_process');
const crypto = require('crypto');

const commit = execSync('git rev-parse HEAD').toString().trim();
const builtAt = new Date().toISOString();

const buildInfo = {
  sourceCommit: commit,
  buildId: 'v1.3.0-' + commit.substring(0, 7),
  corpusVersion: '2026-09-19-v1',
  apiContractVersion: 'v2',
  builtAt: builtAt,
  assetHashes: {}
};

fs.writeFileSync('dist/build-info.json', JSON.stringify(buildInfo, null, 2));
