import { useEffect, useState } from 'react';
import { AlertTriangle, CheckCircle2, Clock, ExternalLink, XCircle } from 'lucide-react';

type CrawlResult = 'updated' | 'no_changes' | 'review_required' | 'failed';

interface CrawlStatus {
  schemaVersion: number;
  lastAttemptAt: string | null;
  lastSuccessfulScanAt: string | null;
  result: CrawlResult;
  sources: Array<{ sourceId: string; ok: boolean }>;
  documentsAdded: Array<{ id: string; officialNumber: string; textStatus?: string; warnings?: string[] }>;
  drivePending?: Array<{ id: string; officialNumber: string; file: string }>;
  warnings?: string[];
  documentsPendingReview: Array<{
    officialNumber: string;
    title?: string;
    issuedDate?: string;
    reason?: string;
    officialDetailUrl?: string;
    reviewFiles?: Array<{
      file: number;
      sourcePdfUrl: string;
      driveUrl?: string | null;
      driveHashVerified?: boolean;
      pageCount?: number;
      ocrPageCount?: number;
      lowConfidencePages?: number[];
    }>;
  }>;
}

const RESULT_VIEW: Record<CrawlResult, { label: string; className: string; Icon: typeof CheckCircle2 }> = {
  updated: { label: 'Đã nhập văn bản mới đã xác minh', className: 'text-emerald-700 dark:text-emerald-300', Icon: CheckCircle2 },
  no_changes: { label: 'Nguồn chính thức quét đủ, không có văn bản mới thuộc phạm vi', className: 'text-emerald-700 dark:text-emerald-300', Icon: CheckCircle2 },
  review_required: { label: 'Có văn bản cần rà soát trước khi đưa vào thư viện', className: 'text-amber-700 dark:text-amber-300', Icon: AlertTriangle },
  failed: { label: 'Lần quét gần nhất lỗi — danh mục có thể chưa cập nhật', className: 'text-red-700 dark:text-red-300', Icon: XCircle },
};

function formatTime(value: string | null) {
  if (!value) return 'chưa có';
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? 'không rõ' : date.toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' });
}

function safeLegalUrl(value?: string | null) {
  if (!value) return false;
  try {
    const url = new URL(value);
    return url.protocol === 'https:' && ['vanban.chinhphu.vn', 'datafiles.chinhphu.vn', 'drive.google.com'].includes(url.hostname);
  } catch {
    return false;
  }
}

/** Trạng thái quét nguồn chính thức (public/data/legal-crawl-status.json). Tách thời điểm quét khỏi ngày ban hành văn bản. */
export function LegalUpdateStatus() {
  const [status, setStatus] = useState<CrawlStatus | null>(null);
  const [unavailable, setUnavailable] = useState(false);

  useEffect(() => {
    const basePath = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
    fetch(`${basePath}/data/legal-crawl-status.json?t=${Date.now()}`)
      .then(res => (res.ok ? res.json() : Promise.reject(new Error(String(res.status)))))
      .then((data: CrawlStatus) => setStatus(data))
      .catch(() => setUnavailable(true));
  }, []);

  if (unavailable) {
    return (
      <div className="mb-6 flex items-center gap-2 rounded-lg border border-border bg-muted/40 px-4 py-3 text-xs text-muted-foreground">
        <Clock className="h-4 w-4 shrink-0" />
        Chưa có dữ liệu trạng thái quét tự động nguồn văn bản chính thức.
      </div>
    );
  }
  if (!status) return null;

  const view = RESULT_VIEW[status.result] ?? RESULT_VIEW.failed;
  const okSources = status.sources.filter(source => source.ok).length;
  return (
    <div className="mb-6 rounded-lg border border-border bg-card px-4 py-3 text-xs">
      <div className={`flex items-center gap-2 font-semibold ${view.className}`}>
        <view.Icon className="h-4 w-4 shrink-0" />
        {view.label}
      </div>
      <div className="mt-2 grid gap-x-6 gap-y-1 text-muted-foreground sm:grid-cols-2 lg:grid-cols-4">
        <span>Lần quét nguồn gần nhất: <strong className="text-foreground">{formatTime(status.lastAttemptAt)}</strong></span>
        <span>Lần quét thành công gần nhất: <strong className="text-foreground">{formatTime(status.lastSuccessfulScanAt)}</strong></span>
        <span>Nguồn thành công: <strong className="text-foreground">{okSources}/{status.sources.length}</strong> · Văn bản đã nhập: <strong className="text-foreground">{status.documentsAdded.length}</strong></span>
        <span>Hồ sơ cần rà soát: <strong className="text-foreground">{status.documentsPendingReview.length}</strong>{status.documentsPendingReview.length > 0 && ` (${status.documentsPendingReview.map(doc => doc.officialNumber).join(', ')})`}</span>
      </div>
      {(status.warnings?.length ?? 0) > 0 && (
        <ul className="mt-3 space-y-1 border-t border-border pt-3 text-amber-700 dark:text-amber-300">
          {status.warnings!.map(warning => <li key={warning}>⚠️ {warning}</li>)}
        </ul>
      )}
      {status.documentsAdded.some(doc => doc.textStatus === 'ocr-review') && (
        <p className="mt-2 text-muted-foreground">
          Văn bản đánh dấu "OCR" lấy chữ bằng nhận dạng ảnh, chưa có người đối chiếu — luôn đối chiếu PDF gốc trước khi viện dẫn.
        </p>
      )}
      {status.documentsPendingReview.length > 0 && (
        <div className="mt-3 space-y-3 border-t border-border pt-3">
          {status.documentsPendingReview.map((doc, index) => (
            <section key={`${doc.officialNumber}-${index}`} className="rounded-md bg-muted/40 p-3">
              <div className="font-semibold text-foreground">{doc.officialNumber}{doc.title ? ` · ${doc.title}` : ''}</div>
              {doc.issuedDate && <div className="mt-1 text-muted-foreground">Ngày ban hành: {doc.issuedDate}</div>}
              {doc.reason && <p className="mt-2 break-words text-muted-foreground">Lý do chờ: {doc.reason}</p>}
              {doc.reviewFiles?.map(file => (
                <div key={`${doc.officialNumber}-file-${file.file}`} className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
                  {file.pageCount && <span className="text-muted-foreground">PDF: {file.pageCount} trang</span>}
                  {file.ocrPageCount ? <span className="text-muted-foreground">OCR: {file.ocrPageCount} trang; confidence thấp: {file.lowConfidencePages?.join(', ') || 'không có'}</span> : null}
                  {safeLegalUrl(file.sourcePdfUrl) && <a className="inline-flex items-center gap-1 font-medium text-primary underline underline-offset-2" href={file.sourcePdfUrl} target="_blank" rel="noopener noreferrer">PDF gốc chính thức <ExternalLink className="h-3 w-3" /></a>}
                  {file.driveHashVerified && safeLegalUrl(file.driveUrl) && <a className="inline-flex items-center gap-1 font-medium text-primary underline underline-offset-2" href={file.driveUrl!} target="_blank" rel="noopener noreferrer">PDF đã xác minh trên Drive <ExternalLink className="h-3 w-3" /></a>}
                </div>
              ))}
              {safeLegalUrl(doc.officialDetailUrl) && <a className="mt-2 inline-flex items-center gap-1 font-medium text-primary underline underline-offset-2" href={doc.officialDetailUrl} target="_blank" rel="noopener noreferrer">Trang thông tin văn bản <ExternalLink className="h-3 w-3" /></a>}
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
