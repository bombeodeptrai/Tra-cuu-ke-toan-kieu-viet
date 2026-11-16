// HTTP có thử lại, giới hạn thời gian và danh sách tên miền chính thức được phép.

export const OFFICIAL_HOSTS = new Set(['vanban.chinhphu.vn', 'datafiles.chinhphu.vn']);
export const USER_AGENT = 'KieuViet-LegalCrawler/2.0 (+https://bombeodeptrai.github.io/Tra-cuu-ke-toan-kieu-viet/)';

export class HttpError extends Error {
  constructor(message, { url, status } = {}) {
    super(message);
    this.name = 'HttpError';
    this.url = url;
    this.status = status;
  }
}

export function assertOfficialUrl(url) {
  const parsed = new URL(url);
  if (parsed.protocol !== 'https:' || !OFFICIAL_HOSTS.has(parsed.hostname)) {
    throw new HttpError(`URL ngoài danh sách nguồn chính thức: ${url}`, { url });
  }
  return parsed.toString();
}

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

/**
 * fetch có thử lại với 429/5xx/lỗi mạng. Không thử lại 4xx khác (403, 404...).
 * Trả { status, headers, body: Buffer, url }.
 */
export async function fetchWithRetry(url, {
  fetchImpl = globalThis.fetch,
  retries = 3,
  timeoutMs = 30000,
  backoffMs = 2000,
  accept = 'text/html,application/xhtml+xml',
} = {}) {
  assertOfficialUrl(url);
  let lastError;
  for (let attempt = 0; attempt <= retries; attempt++) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);
    try {
      const res = await fetchImpl(url, {
        headers: { 'User-Agent': USER_AGENT, Accept: accept, 'Accept-Language': 'vi-VN,vi;q=0.9' },
        redirect: 'follow',
        signal: controller.signal,
      });
      const finalUrl = res.url || url;
      assertOfficialUrl(finalUrl);
      if (res.status === 429 || res.status >= 500) {
        lastError = new HttpError(`HTTP ${res.status} ${url}`, { url, status: res.status });
      } else if (!res.ok) {
        throw new HttpError(`HTTP ${res.status} ${url}`, { url, status: res.status });
      } else {
        const body = Buffer.from(await res.arrayBuffer());
        return { status: res.status, headers: res.headers, body, url: finalUrl };
      }
    } catch (error) {
      if (error instanceof HttpError && error.status && error.status < 500 && error.status !== 429) throw error;
      lastError = error.name === 'AbortError' ? new HttpError(`Hết thời gian chờ ${url}`, { url }) : error;
    } finally {
      clearTimeout(timer);
    }
    if (attempt < retries) await sleep(backoffMs * (attempt + 1));
  }
  throw lastError;
}
