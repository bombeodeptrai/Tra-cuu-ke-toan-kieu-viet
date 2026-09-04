import React, { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Filter, LayoutGrid, List as ListIcon, ArrowRightLeft, Eye, X, Download, BookOpen, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CATEGORIES, TAX_FIELDS, DECREE_STATUS_LABELS } from '@/lib/utils/constants';
import { formatDate } from '@/lib/utils/format';
import { DecreeCard } from '@/components/decree/DecreeCard';
import { useDecreeStore } from '@/stores/decree-store';
import { useDecrees } from '@/hooks/useDecrees';
import { Decree } from '@/types/decree';

export function LibraryPage() {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';
  
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [activeYear, setActiveYear] = useState('all');
  const [activeTaxField, setActiveTaxField] = useState('all');
  const [previewDecree, setPreviewDecree] = useState<Decree | null>(null);
  const navigate = useNavigate();
  
  const { viewMode, setViewMode } = useDecreeStore();
  const { filteredDecrees, isLoading } = useDecrees('', activeCategory, 'all', 1, 1000);

  const allYears = useDecreeStore.getState().decrees.flatMap(d => {
    const list = [new Date(d.issued_date).getFullYear().toString()];
    if (d.effective_date) list.push(new Date(d.effective_date).getFullYear().toString());
    if (d.summary && d.summary.includes('2026')) list.push('2026');
    return list;
  });
  const years = Array.from(new Set(allYears)).sort().reverse();

  const yearFiltered = activeYear === 'all' 
    ? filteredDecrees 
    : filteredDecrees.filter(d => {
        const issuedYear = new Date(d.issued_date).getFullYear().toString();
        const effectiveYear = d.effective_date ? new Date(d.effective_date).getFullYear().toString() : '';
        const has2026Summary = activeYear === '2026' && d.summary && d.summary.includes('2026');
        return issuedYear === activeYear || effectiveYear === activeYear || has2026Summary;
      });

  const finalDecrees = activeTaxField === 'all'
    ? yearFiltered
    : yearFiltered.filter(d => d.tax_field === activeTaxField);

  return (
    <div className="max-w-7xl mx-auto pb-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Thư viện văn bản</h1>
          <p className="text-muted-foreground">Khám phá và tra cứu toàn bộ văn bản pháp luật về kế toán, tài chính.</p>
        </div>
        
        <div className="flex flex-wrap items-center gap-2">
          <Button 
            onClick={() => navigate('/so-sanh')}
            variant="outline"
            className="gap-2 text-xs font-semibold border-emerald-300 text-emerald-700 bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950/40 dark:border-emerald-800 dark:text-emerald-300 h-9"
          >
            <ArrowRightLeft className="h-4 w-4 text-emerald-600" />
            Xem So Sánh Điểm Mới (Toàn Bộ 55 Văn Bản)
          </Button>
          <div className="flex items-center gap-1 border border-border p-0.5 rounded-lg bg-muted/40">
            <Button 
              variant={viewMode === 'grid' ? 'default' : 'ghost'} 
              size="icon"
              className="h-8 w-8"
              onClick={() => setViewMode('grid')}
            >
              <LayoutGrid className="h-4 w-4" />
            </Button>
            <Button 
              variant={viewMode === 'list' ? 'default' : 'ghost'} 
              size="icon"
              className="h-8 w-8"
              onClick={() => setViewMode('list')}
            >
              <ListIcon className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filters */}
        <div className="w-full lg:w-64 flex-shrink-0 space-y-6">
          {/* Sắc thuế / Lĩnh vực chuyên ngành */}
          <div className="bg-card border border-border rounded-xl p-5 shadow-sm">
            <h3 className="font-semibold flex items-center gap-2 mb-4">
              <Filter className="h-4 w-4" /> Sắc thuế
            </h3>
            <div className="space-y-1">
              <button
                className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                  activeTaxField === 'all' 
                    ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 font-medium' 
                    : 'hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
                onClick={() => setActiveTaxField('all')}
              >
                Tất cả lĩnh vực
              </button>
              {TAX_FIELDS.map(tf => (
                <button
                  key={tf.slug}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                    activeTaxField === tf.slug 
                      ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 font-medium' 
                      : 'hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                  onClick={() => setActiveTaxField(tf.slug)}
                >
                  {tf.icon} {tf.name}
                </button>
              ))}
            </div>
          </div>

          {/* Loại văn bản */}
          <div className="bg-card border border-border rounded-xl p-5 shadow-sm">
            <h3 className="font-semibold flex items-center gap-2 mb-4">
              <Filter className="h-4 w-4" /> Loại văn bản
            </h3>
            <div className="space-y-1">
              <button
                className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                  activeCategory === 'all' 
                    ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 font-medium' 
                    : 'hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
                onClick={() => setActiveCategory('all')}
              >
                Tất cả loại
              </button>
              {CATEGORIES.map(category => (
                <button
                  key={category.id}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                    activeCategory === category.slug 
                      ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 font-medium' 
                      : 'hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                  onClick={() => setActiveCategory(category.slug)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Năm ban hành */}
          <div className="bg-card border border-border rounded-xl p-5 shadow-sm">
            <h3 className="font-semibold flex items-center gap-2 mb-4">
              <Filter className="h-4 w-4" /> Năm ban hành
            </h3>
            <div className="space-y-1 max-h-48 overflow-y-auto pr-2 custom-scrollbar">
              <button
                className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                  activeYear === 'all' 
                    ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 font-medium' 
                    : 'hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
                onClick={() => setActiveYear('all')}
              >
                Tất cả các năm
              </button>
              {years.map(year => (
                <button
                  key={year}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                    activeYear === year 
                      ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 font-medium' 
                      : 'hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                  onClick={() => setActiveYear(year)}
                >
                  Năm {year}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          {isLoading ? (
            <div className="text-center py-20 text-muted-foreground">Đang tải dữ liệu...</div>
          ) : (
            <div className="space-y-12">
              {TAX_FIELDS.map(taxField => {
                const decrees = finalDecrees.filter(d => d.tax_field === taxField.slug);
                if (decrees.length === 0) return null;
                
                const catOrder: Record<string, number> = { 'luat': 1, 'nghi-dinh': 2, 'thong-tu': 3, 'chuan-muc': 4, 'quyet-dinh': 5 };
                decrees.sort((a, b) => {
                  const orderA = catOrder[a.category] || 99;
                  const orderB = catOrder[b.category] || 99;
                  if (orderA !== orderB) return orderA - orderB;
                  return new Date(b.issued_date).getTime() - new Date(a.issued_date).getTime();
                });
                
                return (
                  <div key={taxField.slug} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="flex items-center gap-3 mb-6 pb-2 border-b border-border/50">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-xl shadow-sm">
                        {taxField.icon}
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-foreground">{taxField.name}</h2>
                        <p className="text-sm text-muted-foreground">{decrees.length} văn bản</p>
                      </div>
                    </div>
                    
                    <div className={`grid gap-4 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' : 'grid-cols-1'}`}>
                      {decrees.map(decree => (
                        <DecreeCard key={decree.id} decree={decree} viewMode={viewMode} onPreview={setPreviewDecree} />
                      ))}
                    </div>
                  </div>
                );
              })}
              
              {/* RENDER UNCLASSIFIED ITEMS AS KHAC */}
              {(() => {
                const unclassified = finalDecrees.filter(d => !d.tax_field || !TAX_FIELDS.find(tf => tf.slug === d.tax_field));
                if (unclassified.length === 0 || activeTaxField !== 'all') return null;
                
                const catOrder: Record<string, number> = { 'luat': 1, 'nghi-dinh': 2, 'thong-tu': 3, 'chuan-muc': 4, 'quyet-dinh': 5 };
                unclassified.sort((a, b) => {
                  const orderA = catOrder[a.category] || 99;
                  const orderB = catOrder[b.category] || 99;
                  if (orderA !== orderB) return orderA - orderB;
                  return new Date(b.issued_date).getTime() - new Date(a.issued_date).getTime();
                });
                
                return (
                  <div key="khac" className="animate-in fade-in slide-in-from-bottom-4 duration-500 mt-12">
                    <div className="flex items-center gap-3 mb-6 pb-2 border-b border-border/50">
                      <div className="h-10 w-10 rounded-lg bg-slate-100 text-slate-500 flex items-center justify-center text-xl shadow-sm">
                        📁
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-foreground">Lĩnh vực khác (Chưa phân loại)</h2>
                        <p className="text-sm text-muted-foreground">{unclassified.length} văn bản</p>
                      </div>
                    </div>
                    
                    <div className={`grid gap-4 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' : 'grid-cols-1'}`}>
                      {unclassified.map(decree => (
                        <DecreeCard key={decree.id} decree={decree} viewMode={viewMode} onPreview={setPreviewDecree} />
                      ))}
                    </div>
                  </div>
                );
              })()}
            </div>
          )}
              
          {finalDecrees.length === 0 && !isLoading && (
            <div className="text-center py-20 bg-card border border-border rounded-xl border-dashed">
              <p className="text-muted-foreground">Không có văn bản nào trong danh mục này.</p>
            </div>
          )}
        </div>
      </div>

      {/* QUICK PREVIEW MODAL FOR 100% OF DECREES */}
      {previewDecree && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setPreviewDecree(null)}
        >
          <div 
            className="bg-background border border-border w-full max-w-3xl max-h-[90vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Modal */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-muted/40">
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-primary/10 text-primary rounded-lg">
                  <Eye className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Bản xem trước nhanh</span>
                  <h3 className="font-bold text-lg text-foreground flex items-center gap-2">
                    {previewDecree.decree_number}
                  </h3>
                </div>
              </div>
              <Button 
                variant="ghost" 
                size="icon" 
                className="rounded-full h-8 w-8 hover:bg-muted"
                onClick={() => setPreviewDecree(null)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Body Modal */}
            <div className="p-6 overflow-y-auto flex-1 space-y-6">
              {/* Tiêu đề & Quốc hiệu */}
              <div className="text-center pb-4 border-b border-border space-y-1">
                <div className="text-xs uppercase font-bold tracking-wider text-muted-foreground">CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</div>
                <div className="text-xs font-medium text-muted-foreground">Độc lập - Tự do - Hạnh phúc</div>
                <div className="text-xs text-primary font-semibold pt-1">HỆ THỐNG TRA CỨU PHÁP LUẬT — CÔNG TY CỔ PHẦN KIỂU VIỆT</div>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 items-center mb-2">
                  <Badge className={DECREE_STATUS_LABELS[previewDecree.status]?.color || 'bg-slate-500'}>
                    {DECREE_STATUS_LABELS[previewDecree.status]?.label || previewDecree.status}
                  </Badge>
                  {(() => {
                    const effYear = previewDecree.effective_date ? new Date(previewDecree.effective_date).getFullYear() : null;
                    if (effYear === 2026 || (previewDecree.summary && previewDecree.summary.includes('2026'))) {
                      return (
                        <Badge className="bg-amber-500 hover:bg-amber-600 text-white gap-1 text-xs">
                          <Sparkles className="h-3 w-3" /> Hiệu lực 2026
                        </Badge>
                      );
                    }
                    return null;
                  })()}
                  {CATEGORIES.find(c => c.slug === previewDecree.category) && (
                    <Badge variant="outline">
                      {CATEGORIES.find(c => c.slug === previewDecree.category)?.name}
                    </Badge>
                  )}
                </div>
                <h2 className="text-xl font-bold text-foreground leading-snug">
                  {previewDecree.title}
                </h2>
              </div>

              {/* Thông tin bảng tóm lược */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-4 bg-muted/30 rounded-xl border border-border text-sm">
                <div>
                  <span className="text-xs text-muted-foreground">Số hiệu:</span>
                  <div className="font-semibold text-primary">{previewDecree.decree_number}</div>
                </div>
                <div>
                  <span className="text-xs text-muted-foreground">Lĩnh vực pháp lý:</span>
                  <div className="font-semibold text-foreground">
                    {TAX_FIELDS.find(t => t.slug === previewDecree.tax_field)?.name || 'Quy phạm Pháp luật Doanh nghiệp'}
                  </div>
                </div>
                <div>
                  <span className="text-xs text-muted-foreground">Ngày ban hành:</span>
                  <div className="font-semibold text-foreground">{formatDate(previewDecree.issued_date)}</div>
                </div>
                <div>
                  <span className="text-xs text-muted-foreground">Ngày hiệu lực:</span>
                  <div className="font-semibold text-emerald-700 dark:text-emerald-400">
                    {previewDecree.effective_date ? formatDate(previewDecree.effective_date) : 'Đang cập nhật'}
                  </div>
                </div>
              </div>

              {/* Trích yếu nghiệp vụ kế toán */}
              <div className="space-y-2">
                <h4 className="font-bold text-sm text-foreground flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-blue-600" />
                  Nội dung tóm lược & Căn cứ áp dụng:
                </h4>
                <div className="p-4 bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200/60 dark:border-blue-800/40 rounded-xl text-sm leading-relaxed text-foreground">
                  {previewDecree.summary || 'Văn bản quy phạm pháp luật phục vụ công tác kế toán và quản trị doanh nghiệp Kiểu Việt.'}
                </div>
              </div>
            </div>

            {/* Footer Modal */}
            <div className="px-6 py-4 border-t border-border bg-muted/20 flex flex-wrap items-center justify-between gap-3">
              <Button 
                variant="outline" 
                onClick={() => setPreviewDecree(null)}
              >
                Đóng
              </Button>
              <div className="flex items-center gap-2">
                {previewDecree.pdf_url && (
                  <a 
                    href={(import.meta.env.BASE_URL || '/').replace(/\/$/, '') + previewDecree.pdf_url}
                    download
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button variant="outline" className="gap-2">
                      <Download className="h-4 w-4" /> Tải file PDF
                    </Button>
                  </a>
                )}
                <Button 
                  className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                  onClick={() => {
                    const id = previewDecree.id;
                    setPreviewDecree(null);
                    navigate(`/thu-vien/${id}`);
                  }}
                >
                  <BookOpen className="h-4 w-4" />
                  Xem toàn văn & Điều khoản
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
