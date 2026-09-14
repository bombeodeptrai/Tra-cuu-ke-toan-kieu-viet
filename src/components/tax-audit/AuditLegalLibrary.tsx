import React, { useEffect, useState } from 'react';
import { useDecreeStore } from '@/stores/decree-store';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { downloadCsv } from '@/lib/audit/workspace';
import { 
  BookOpen, Search, Download, FileText, ExternalLink, 
  ChevronLeft, ChevronRight, ShieldCheck, Scale, FileSpreadsheet, Eye
} from 'lucide-react';

type LawFile = {
  localUrl: string;
  textUrl: string;
  sha256: string;
  pages: number;
  emptyPages: number[];
  driveUrl?: string;
  lowConfidencePages?: number[];
};

type Law = {
  id: string;
  number: string;
  title: string;
  status: string;
  files: LawFile[];
  error?: string;
  layoutVerified: boolean;
};

const url = (s: string) => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${s.replace(/^\//, '')}`;

export function AuditLegalLibrary() {
  const decrees = useDecreeStore(s => s.decrees);
  const [laws, setLaws] = useState<Law[]>([]);
  const [error, setError] = useState('');
  const [selected, setSelected] = useState<Law>();
  const [pages, setPages] = useState<{ page: number; text: string; file: number; ocrConfidence?: number }[]>([]);
  const [query, setQuery] = useState('');
  const [pageIndex, setPageIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [showPdf, setShowPdf] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [metadata, setMetadata] = useState<Record<string, { issuedDate: string; effectiveDate: string; source: string; error: string }>>({});

  useEffect(() => {
    let alive = true;
    fetch(url('/data/accounting-laws/metadata.json'))
      .then(r => {
        if (!r.ok) throw Error('Không đọc được thuộc tính văn bản.');
        return r.json();
      })
      .then(d => { if (alive) setMetadata(d.documents); })
      .catch(e => { if (alive) setError(e.message); });
    return () => { alive = false; };
  }, []);

  useEffect(() => {
    let alive = true;
    fetch(url('/data/accounting-laws/manifest.json'))
      .then(r => {
        if (!r.ok) throw Error('Không tải được danh mục bổ sung.');
        return r.json();
      })
      .then(d => { 
        if (alive) {
          setLaws(d.documents); 
          if (d.documents.length > 0 && !selected) setSelected(d.documents[0]);
        }
      })
      .catch(e => { if (alive) setError(e.message); });
    return () => { alive = false; };
  }, []);

  useEffect(() => {
    let alive = true;
    setPages([]);
    setPageIndex(0);
    setError('');
    if (!selected) return;
    setLoading(true);

    Promise.all(selected.files.map(async (f, index) => {
      const r = await fetch(url(f.textUrl));
      if (!r.ok) throw Error('Không đọc được bản trích nội dung. File PDF gốc vẫn có thể tải về.');
      const d = await r.json();
      return d.pages.map((p: { page: number; text: string }) => ({ ...p, file: index }));
    }))
      .then(data => { if (alive) setPages(data.flat()); })
      .catch(e => { if (alive) setError(e.message); })
      .finally(() => { if (alive) setLoading(false); });

    return () => { alive = false; };
  }, [selected]);

  const matches = pages.filter(p => !query || p.text.toLocaleLowerCase('vi').includes(query.toLocaleLowerCase('vi')));
  const current = matches[Math.min(pageIndex, Math.max(0, matches.length - 1))];

  return (
    <section className="rounded-2xl border border-border bg-card p-6 space-y-6 shadow-xs">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-border">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-purple-500/20 text-purple-600 dark:text-purple-400">
              <BookOpen className="h-4 w-4" />
            </div>
            <h2 className="text-xl font-bold text-foreground">Kho Căn Cứ Pháp Lý & Văn Bản Bổ Sung Kiểm Tra Thuế</h2>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Hệ thống văn bản pháp luật kế toán, thuế và quản lý lâm sản, mỏ đá phục vụ công tác đối soát hồ sơ Kiểu Việt ({decrees.length} văn bản trong kho chung, bao gồm {laws.length} văn bản có đầy đủ PDF gốc và bản chép từng trang).
          </p>
        </div>

        <Button 
          variant="outline" 
          size="sm"
          onClick={() => downloadCsv([
            ['ID', 'Số hiệu', 'Tên văn bản', 'Phân loại', 'Số trang PDF', 'Trạng thái'],
            ...decrees.map(d => [d.id, d.decree_number || d.number || '', d.title, d.category, '', d.status]),
            ...laws.map(d => [d.id, d.number, d.title, 'Văn bản bổ sung', d.files.map(f => `${f.pages} trang`).join('; '), d.status])
          ], 'kiem-ke-kho-van-ban-phap-luat-kieu-viet.csv')}
          className="h-8 text-xs gap-1.5 self-start md:self-auto"
        >
          <FileSpreadsheet className="h-3.5 w-3.5 text-emerald-600" />
          <span>Xuất danh mục văn bản (CSV)</span>
        </Button>
      </div>

      {/* SEARCH AND TWO-COLUMN LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* LIST OF LAWS (4 COLS) */}
        <div className="lg:col-span-4 space-y-2 max-h-[700px] overflow-y-auto pr-1">
          <div className="text-xs font-bold text-muted-foreground uppercase px-1 mb-2">
            Danh sách văn bản nguồn ({laws.length} văn bản)
          </div>

          {laws.map(d => {
            const isSel = selected?.id === d.id;
            const totalPages = d.files.reduce((n, f) => n + f.pages, 0);
            return (
              <button
                key={d.id}
                onClick={() => setSelected(d)}
                className={`w-full text-left rounded-xl p-3 border transition-all ${
                  isSel
                    ? 'border-purple-500 bg-purple-50/70 dark:bg-purple-950/50 shadow-xs ring-1 ring-purple-500/20'
                    : 'border-border bg-card hover:bg-muted/60'
                }`}
              >
                <div className="flex items-center justify-between gap-1 mb-1">
                  <span className="font-bold text-xs text-purple-700 dark:text-purple-300">{d.number}</span>
                  <Badge variant="outline" className="text-[10px] px-1.5 py-0">
                    {totalPages} trang
                  </Badge>
                </div>
                <div className="text-xs text-foreground font-medium line-clamp-2 leading-snug">
                  {d.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* READER VIEW (8 COLS) */}
        <div className="lg:col-span-8 rounded-xl border border-border p-5 space-y-4 bg-muted/20 min-w-0">
          {selected ? (
            <>
              <div className="space-y-2 pb-3 border-b border-border">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-bold text-base sm:text-lg text-foreground">
                    {selected.number} — {selected.title}
                  </h3>
                  {metadata[selected.id]?.source && (
                    <a 
                      href={metadata[selected.id].source} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs text-blue-600 hover:underline flex items-center gap-1"
                    >
                      <span>Văn bản Chính phủ</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                </div>

                {metadata[selected.id] && (
                  <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                    <span>Ngày ban hành: <strong className="text-foreground">{metadata[selected.id].issuedDate || 'Theo bản ký'}</strong></span>
                    <span>•</span>
                    <span>Ngày hiệu lực: <strong className="text-foreground">{metadata[selected.id].effectiveDate || 'Theo văn bản'}</strong></span>
                  </div>
                )}
              </div>

              {/* PDF DOWNLOAD AND PREVIEW ACTIONS */}
              <div className="flex flex-wrap items-center gap-2">
                {selected.files.map((f, i) => (
                  <div key={f.localUrl} className="flex items-center gap-1">
                    <a 
                      href={url(f.localUrl)} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium bg-purple-50 text-purple-700 border border-purple-200 hover:bg-purple-100 dark:bg-purple-950 dark:text-purple-300 dark:border-purple-800"
                    >
                      <FileText className="h-3 w-3" />
                      <span>Mở PDF gốc ({f.pages} trang)</span>
                    </a>

                    <a 
                      href={url(f.localUrl)} 
                      download
                      className="inline-flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-medium bg-muted text-muted-foreground hover:text-foreground"
                    >
                      <Download className="h-3 w-3" />
                    </a>

                    {f.driveUrl && (
                      <a 
                        href={f.driveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-2 py-1 rounded-lg text-xs text-blue-600 hover:underline"
                      >
                        Drive nội bộ
                      </a>
                    )}
                  </div>
                ))}

                <div className="ml-auto flex items-center gap-2">
                  <Button size="sm" variant="outline" onClick={() => setShowPdf(v => !v)} className="h-7 text-xs">
                    {showPdf ? 'Ẩn PDF' : 'Xem PDF trong trang'}
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => setShowAll(v => !v)} className="h-7 text-xs">
                    {showAll ? 'Đọc từng trang' : 'Hiện toàn bộ bản trích'}
                  </Button>
                </div>
              </div>

              {/* SEARCH WITHIN DOCUMENT */}
              <div className="relative">
                <Search className="h-3.5 w-3.5 absolute left-3 top-2.5 text-muted-foreground" />
                <Input 
                  aria-label="Tìm kiếm nội dung văn bản"
                  placeholder="Tìm kiếm từ khóa trong các trang của văn bản này..." 
                  value={query} 
                  onChange={e => { setQuery(e.target.value); setPageIndex(0); }}
                  className="pl-8 h-8 text-xs bg-background"
                />
              </div>

              {showPdf && current && (
                <iframe 
                  title="Bản PDF gốc đang đối chiếu" 
                  className="w-full h-[600px] border border-border rounded-xl bg-white" 
                  src={`${url(selected.files[current.file].localUrl)}#page=${current.page}`} 
                />
              )}

              {showAll ? (
                <div className="border border-border rounded-xl p-4 max-h-[600px] overflow-auto space-y-4 bg-background">
                  {pages.map(p => (
                    <article key={`${p.file}-${p.page}`} className="pb-4 border-b border-border last:border-b-0">
                      <h4 className="font-bold text-xs text-purple-700 dark:text-purple-300 mb-1.5">
                        File {p.file + 1} — Trang {p.page}
                      </h4>
                      <pre className="text-xs whitespace-pre-wrap break-words leading-relaxed font-sans text-foreground">
                        {p.text || 'Trang chứa bảng biểu hoặc hình ảnh, vui lòng xem bản PDF gốc.'}
                      </pre>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <Button 
                      size="sm" 
                      variant="outline" 
                      disabled={pageIndex === 0} 
                      onClick={() => setPageIndex(n => n - 1)}
                      className="h-7 gap-1"
                    >
                      <ChevronLeft className="h-3.5 w-3.5" /> Trang trước
                    </Button>

                    <span className="font-medium text-muted-foreground">
                      {matches.length ? `Trang ${pageIndex + 1} / ${matches.length} trang phù hợp` : 'Không tìm thấy trang phù hợp'}
                    </span>

                    <Button 
                      size="sm" 
                      variant="outline" 
                      disabled={pageIndex >= matches.length - 1} 
                      onClick={() => setPageIndex(n => n + 1)}
                      className="h-7 gap-1"
                    >
                      Trang sau <ChevronRight className="h-3.5 w-3.5" />
                    </Button>
                  </div>

                  {loading ? (
                    <div className="py-12 text-center text-xs text-muted-foreground">Đang tải nội dung văn bản...</div>
                  ) : current ? (
                    <div className="border border-border rounded-xl p-4 bg-background max-h-[600px] overflow-auto space-y-2">
                      <div className="text-[11px] text-muted-foreground font-semibold flex items-center justify-between">
                        <span>File {current.file + 1} • Trang gốc {current.page}</span>
                        {current.ocrConfidence !== undefined && (
                          <span>Độ tin cậy OCR: {current.ocrConfidence}%</span>
                        )}
                      </div>
                      <pre className="whitespace-pre-wrap break-words text-xs leading-relaxed font-sans text-foreground">
                        {current.text || 'Trang không có nội dung dạng văn bản hoặc là trang ký đóng dấu. Vui lòng mở file PDF gốc để xem chi tiết.'}
                      </pre>
                    </div>
                  ) : null}
                </div>
              )}
            </>
          ) : (
            <div className="py-16 text-center text-xs text-muted-foreground">
              Chọn một văn bản ở danh sách bên trái để đọc nội dung và tải file PDF gốc.
            </div>
          )}
        </div>
      </div>
      {error && <p role="alert" className="text-xs text-red-600">{error}</p>}
    </section>
  );
}
