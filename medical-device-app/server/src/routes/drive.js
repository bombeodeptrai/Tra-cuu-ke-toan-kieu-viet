import express from 'express';
import { google } from 'googleapis';
import DriveStore from '../services/drive.js';

const router = express.Router();

// Avoid .clasprc.json logic by strictly using GoogleAuth which uses ADC (Application Default Credentials)
const auth = new google.auth.GoogleAuth({
  scopes: ['https://www.googleapis.com/auth/drive'],
});

let driveStore;
(async () => {
  try {
    const authClient = await auth.getClient();
    const folderId = process.env.DRIVE_FOLDER_ID;
    if (!folderId) {
      throw new Error('DRIVE_FOLDER_ID is missing');
    }
    driveStore = new DriveStore(authClient, folderId);
  } catch (e) {
    console.warn('Could not initialize Google Auth', e.message);
  }
})();

router.get('/verify', async (req, res) => {
  try {
    const data = await driveStore.verifyFolder();
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

router.get('/find/:key', async (req, res) => {
  try {
    const data = await driveStore.findByKey(req.params.key);
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

router.get('/metadata/:id', async (req, res) => {
  try {
    const data = await driveStore.metadata(req.params.id);
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

export default router;
