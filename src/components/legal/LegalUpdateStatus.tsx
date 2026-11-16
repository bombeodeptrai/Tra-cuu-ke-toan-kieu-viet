import { useEffect, useState } from 'react';
import { AlertTriangle, CheckCircle2, Clock, XCircle } from 'lucide-react';

type CrawlResult = 'updated' | 'no_changes' | 'review_required' | 'failed';

interface CrawlStatus {
  schemaVersion: number;
  lastAttemptAt: string | null;
  lastSuccessfulScanAt: string | null;
  result: CrawlResult;
  sources: Array<{ sourceId: string; ok: boolean }>;
  documentsAdded: Array<{ id: string; officialNumber: string }>;
  documentsPendingReview: Array<{ officialNumber: string }>;
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
    </div>
  );
}
