import { google } from 'googleapis';
import fs from 'fs';
import stream from 'stream';

const RETRY_LIMIT = 3;
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

class DriveStore {
  constructor(authClient, folderId) {
    this.drive = google.drive({ version: 'v3', auth: authClient });
    this.folderId = folderId;
  }

  async withRetry(operation) {
    let attempt = 0;
    while (attempt < RETRY_LIMIT) {
      try {
        return await operation();
      } catch (err) {
        attempt++;
        if (attempt >= RETRY_LIMIT || (err.code !== 429 && err.code < 500)) {
          throw err;
        }
        const backoff = Math.pow(2, attempt) * 1000 + Math.random() * 1000;
        await delay(backoff);
      }
    }
  }

  async verifyFolder() {
    return this.withRetry(async () => {
      const res = await this.drive.files.get({
        fileId: this.folderId,
        fields: 'id, name, mimeType',
      });
      if (res.data.mimeType !== 'application/vnd.google-apps.folder') {
        throw new Error('Not a folder');
      }
      return res.data;
    });
  }

  async findByKey(key) {
    return this.withRetry(async () => {
      const query = `'${this.folderId}' in parents and name = '${key}' and trashed = false`;
      const res = await this.drive.files.list({
        q: query,
        fields: 'files(id, name, mimeType)',
      });
      return res.data.files[0] || null;
    });
  }

  async uploadResumable(key, filePath, mimeType = 'application/octet-stream') {
    return this.withRetry(async () => {
      const existing = await this.findByKey(key);
      if (existing) {
        return existing; // Idempotency check based on key
      }

      const media = {
        mimeType,
        body: fs.createReadStream(filePath)
      };

      const res = await this.drive.files.create({
        requestBody: {
          name: key,
          parents: [this.folderId],
        },
        media: media,
        fields: 'id, name',
      });
      return res.data;
    });
  }

  async downloadTo(fileId, destPath) {
    return this.withRetry(async () => {
      const dest = fs.createWriteStream(destPath);
      const res = await this.drive.files.get(
        { fileId, alt: 'media' },
        { responseType: 'stream' }
      );
      
      const { pipeline } = await import('stream/promises');
      await pipeline(res.data, dest);
      return destPath;
    });
  }

  async metadata(fileId) {
    return this.withRetry(async () => {
      const res = await this.drive.files.get({
        fileId,
        fields: 'id, name, mimeType, size, modifiedTime',
      });
      return res.data;
    });
  }
}

export default DriveStore;
