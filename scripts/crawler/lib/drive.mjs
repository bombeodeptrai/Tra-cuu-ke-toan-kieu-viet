// Mirror PDF gốc lên Google Drive bằng Service Account (GitHub Secrets), xác nhận lại sau khi tải.
//
// Secrets cần cấu hình trên GitHub (Settings → Secrets and variables → Actions):
//   GDRIVE_SERVICE_ACCOUNT_JSON — nội dung khóa JSON của Service Account
//   GDRIVE_FOLDER_ID            — ID thư mục đích; nên nằm trong Shared Drive và đã chia quyền
//                                 Content manager cho email Service Account (Service Account
//                                 không có dung lượng My Drive riêng).
// Không đọc .clasprc.json hay token cá nhân. Không đổi quyền chia sẻ của tệp.
import crypto from 'node:crypto';

const TOKEN_URL = 'https://oauth2.googleapis.com/token';
const SCOPE = 'https://www.googleapis.com/auth/drive'; // cần quyền ghi vào thư mục dùng chung

export class DriveError extends Error { constructor(message) { super(message); this.name = 'DriveError'; } }

export function driveConfigFromEnv(env = process.env) {
  const missing = ['GDRIVE_SERVICE_ACCOUNT_JSON', 'GDRIVE_FOLDER_ID'].filter(name => !env[name]);
  if (missing.length) return { configured: false, missing };
  let key;
  try { key = JSON.parse(env.GDRIVE_SERVICE_ACCOUNT_JSON); } catch { return { configured: false, missing: ['GDRIVE_SERVICE_ACCOUNT_JSON (không phải JSON hợp lệ)'] }; }
  if (!key.client_email || !key.private_key) return { configured: false, missing: ['GDRIVE_SERVICE_ACCOUNT_JSON (thiếu client_email/private_key)'] };
  return { configured: true, clientEmail: key.client_email, privateKey: key.private_key, folderId: env.GDRIVE_FOLDER_ID };
}

const b64url = input => Buffer.from(input).toString('base64').replace(/=+$/, '').replace(/\+/g, '-').replace(/\//g, '_');

async function accessToken(config, fetchImpl) {
  const now = Math.floor(Date.now() / 1000);
  const header = b64url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }));
  const claims = b64url(JSON.stringify({ iss: config.clientEmail, scope: SCOPE, aud: TOKEN_URL, iat: now, exp: now + 3600 }));
  const signature = crypto.createSign('RSA-SHA256').update(`${header}.${claims}`).sign(config.privateKey);
  const res = await fetchImpl(TOKEN_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer', assertion: `${header}.${claims}.${b64url(signature)}` }),
  });
  if (!res.ok) throw new DriveError(`Không lấy được access token Drive (HTTP ${res.status})`);
  return (await res.json()).access_token;
}

/**
 * Tải PDF lên thư mục Drive rồi đọc lại metadata để xác nhận kích thước và MD5.
 * Trả { driveId, driveUrl, driveReadbackBytes, driveHashVerified: true }.
 */
export async function mirrorPdfToDrive({ buffer, fileName, md5: localMd5 }, config, { fetchImpl = globalThis.fetch } = {}) {
  if (!config?.configured) throw new DriveError(`Chưa cấu hình Drive: ${(config?.missing || []).join(', ')}`);
  const token = await accessToken(config, fetchImpl);
  const boundary = `kv-${crypto.randomUUID()}`;
  const metadata = JSON.stringify({ name: fileName, mimeType: 'application/pdf', parents: [config.folderId] });
  const body = Buffer.concat([
    Buffer.from(`--${boundary}\r\nContent-Type: application/json; charset=UTF-8\r\n\r\n${metadata}\r\n--${boundary}\r\nContent-Type: application/pdf\r\n\r\n`),
    buffer,
    Buffer.from(`\r\n--${boundary}--`),
  ]);
  const upload = await fetchImpl('https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&supportsAllDrives=true&fields=id', {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': `multipart/related; boundary=${boundary}` },
    body,
  });
  if (!upload.ok) throw new DriveError(`Tải lên Drive thất bại (HTTP ${upload.status})`);
  const { id } = await upload.json();
  if (!id) throw new DriveError('Drive không trả file ID');
  const check = await fetchImpl(`https://www.googleapis.com/drive/v3/files/${encodeURIComponent(id)}?supportsAllDrives=true&fields=id,size,md5Checksum,parents,trashed`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!check.ok) throw new DriveError(`Không đọc lại được tệp Drive ${id} (HTTP ${check.status})`);
  const meta = await check.json();
  if (meta.trashed) throw new DriveError(`Tệp Drive ${id} đang ở thùng rác`);
  if (Number(meta.size) !== buffer.length) throw new DriveError(`Kích thước trên Drive (${meta.size}) khác bản gốc (${buffer.length})`);
  if (meta.md5Checksum !== localMd5) throw new DriveError(`MD5 trên Drive khác bản gốc (${meta.md5Checksum} ≠ ${localMd5})`);
  if (!meta.parents?.includes(config.folderId)) throw new DriveError(`Tệp Drive ${id} không nằm trong thư mục cấu hình`);
  return { driveId: id, driveUrl: `https://drive.google.com/file/d/${id}/view?usp=drivesdk`, driveReadbackBytes: Number(meta.size), driveHashVerified: true };
}
