import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { 
  ArrowLeft, Calendar, FileText, Download, Building, 
  Tag, Clock, AlertTriangle, CheckCircle, Bot,
  Info, Share2, Printer, Heart, ListFilter, ArrowRightLeft, ZoomIn, ZoomOut, RotateCcw, Copy 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeRaw from 'rehype-raw';
import 'katex/dist/katex.min.css';
import { CATEGORIES, DECREE_STATUS_LABELS } from '@/lib/utils/constants';
import { formatDate } from '@/lib/utils/format';
import { useDecreeStore } from '@/stores/decree-store';
import { useNotesStore } from '@/stores/notes-store';
import { useToast } from '@/components/ui/use-toast';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { TableOfContents } from '@/components/decree/TableOfContents';
import { DecreeDiffViewer } from '@/components/decree/DecreeDiffViewer';

const contentCache = new Map<string, string>();

export function DecreeDetailPage() {
  const { id } = useParams();
  const { toast } = useToast();
  const { decrees, bookmarks, toggleBookmark } = useDecreeStore();
  const { addNote } = useNotesStore();
  const decree = decrees.find(d => d.id === id);
  
  const [content, setContent] = useState<string>('');
  const [summaryContent, setSummaryContent] = useState<string>('');
  const [fullTextContent, setFullTextContent] = useState<string>('');
  const [isLoadingContent, setIsLoadingContent] = useState(false);
  
  // Font size adjustment (persisted in localStorage)
  const [fontSize, setFontSize] = useState<number>(() => {
    return Number(localStorage.getItem('kv_doc_font_size')) || 16;
  });

  const changeFontSize = (delta: number) => {
    setFontSize(prev => {
      const next = Math.min(24, Math.max(13, prev + delta));
      localStorage.setItem('kv_doc_font_size', next.toString());
      return next;
    });
  };

  const resetFontSize = () => {
    setFontSize(16);
    localStorage.setItem('kv_doc_font_size', '16');
  };

  // Highlight Note states
  const [selectedText, setSelectedText] = useState('');
  const [isNoteDialogOpen, setIsNoteDialogOpen] = useState(false);
  const [noteInput, setNoteInput] = useState('');
  const [selectionRect, setSelectionRect] = useState<{top: number, left: number} | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    const handleSelection = () => {
      const selection = window.getSelection();
      if (selection && selection.toString().trim().length > 10) {
        const range = selection.getRangeAt(0);
        const rect = range.getBoundingClientRect();
        // Only show if selection is inside the decree content area
        const contentArea = document.getElementById('decree-content-area');
        if (contentArea && contentArea.contains(range.commonAncestorContainer)) {
          setSelectedText(selection.toString().trim());
          setSelectionRect({
            top: rect.top + window.scrollY - 40,
            left: rect.left + window.scrollX + (rect.width / 2) - 50,
          });
        }
      } else {
        if (!isNoteDialogOpen) {
          setSelectionRect(null);
        }
      }
    };

    document.addEventListener('mouseup', handleSelection);
    document.addEventListener('touchend', handleSelection);
    return () => {
      document.removeEventListener('mouseup', handleSelection);
      document.removeEventListener('touchend', handleSelection);
    };
  }, [isNoteDialogOpen]);

  const handleSaveNote = async () => {
    if (!decree) return;
    await addNote({
      decree_id: decree.id,
      selected_text: selectedText,
      user_note: noteInput
    });
    toast({ title: 'Đã lưu ghi chú', description: 'Ghi chú đã được lưu vào Sổ tay Kế toán và Google Sheets.' });
    setIsNoteDialogOpen(false);
    setNoteInput('');
    setSelectionRect(null);
    window.getSelection()?.removeAllRanges();
  };

  const parseAndSetText = (text: string) => {
    if (text.includes('> *Lỗi tạo tóm tắt tự động*') || text.includes('Lỗi gọi AI:')) {
      text = text.replace(/> \*Lỗi tạo tóm tắt tự động\*/g, '> *⚠️ Hệ thống AI hiện đang bị quá tải (do giới hạn từ Google). Tóm tắt chuyên sâu sẽ tự động cập nhật sau ít phút. Trong lúc chờ đợi, anh/chị vui lòng tham khảo chi tiết ở phần Toàn văn bên dưới.*');
      text = text.replace(/Lỗi gọi AI: Bad status \d+:[\s\S]*?(?=---|$)/g, '> *⚠️ Hệ thống AI hiện đang bị quá tải. Tóm tắt sẽ cập nhật sau.* \n\n');
    }
    setContent(text);

    // Split between AI Summary/Analysis and Full Official Legal Text
    const splitRegex = /(?:---)?\s*## 📜 TOÀN VĂN VĂN BẢN[\s\S]*$/i;
    const splitMatch = text.match(splitRegex);

    if (splitMatch && splitMatch.index !== undefined && splitMatch.index > 50) {
      const summaryPart = text.substring(0, splitMatch.index).trim();
      let fullPart = splitMatch[0].replace(/^---\s*/, '').replace(/^## 📜 TOÀN VĂN VĂN BẢN\r?\n?/i, '').trim();
      if (!fullPart.startsWith('# CỘNG HÒA') && !fullPart.startsWith('# ') && !fullPart.startsWith('**CHÍNH PHỦ**') && !fullPart.startsWith('**BỘ TÀI CHÍNH**')) {
        fullPart = `# ${decree?.title || 'TOÀN VĂN VĂN BẢN GỐC'}\n\n` + fullPart;
      }
      setSummaryContent(summaryPart);
      setFullTextContent(fullPart);
    } else {
      // Check if text starts directly with government header
      if (text.includes('# CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM') || text.includes('**CỘNG HOÀ XÃ HỘI CHỦ NGHĨA VIỆT NAM**')) {
        setFullTextContent(text);
        setSummaryContent(decree?.summary ? `### 🌟 TÓM TẮT TRỌNG TÂM CHO KẾ TOÁN\n\n${decree.summary}` : 'Đang cập nhật phân tích AI...');
      } else {
        // Pure analysis
        setSummaryContent(text);
        setFullTextContent(text);
      }
    }
  };

  useEffect(() => {
    if (decree) {
      if (contentCache.has(decree.id)) {
        parseAndSetText(contentCache.get(decree.id)!);
        setIsLoadingContent(false);
        return;
      }

      setIsLoadingContent(true);
      const basePath = import.meta.env.BASE_URL || '/';
      const contentUrl = decree.content_url || `/data/content/${decree.id}.md`;
      const contentPath = basePath.replace(/\/$/, '') + (contentUrl.startsWith('/') ? contentUrl : '/' + contentUrl) + '?t=' + Date.now();
      
      fetch(contentPath)
        .then(res => {
          if (!res.ok) throw new Error('Không tìm thấy nội dung file markdown');
          return res.text();
        })
        .then(text => {
          contentCache.set(decree.id, text);
          parseAndSetText(text);
        })
        .catch((err) => {
          console.warn('Could not load markdown file, using decree.content:', err);
          setFullTextContent(decree.content || decree.summary || 'Nội dung đang được cập nhật...');
          setSummaryContent(decree.summary || '');
        })
        .finally(() => setIsLoadingContent(false));
    }
  }, [decree]);

  if (!decree) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <FileText className="h-16 w-16 text-muted-foreground mb-4 opacity-50" />
        <h2 className="text-2xl font-bold mb-2">Không tìm thấy nghị định</h2>
        <p className="text-muted-foreground mb-6">Nghị định bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.</p>
        <Button onClick={() => navigate('/thu-vien')}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Về Thư viện
        </Button>
      </div>
    );
  }

  const category = CATEGORIES.find(c => c.slug === decree.category);
  const relatedDecrees = decrees.filter(d => d.category === decree.category && d.id !== decree.id).slice(0, 3);
  const statusInfo = DECREE_STATUS_LABELS[decree.status] || DECREE_STATUS_LABELS.active;
  const isBookmarked = bookmarks.includes(decree.id);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({ title: 'Thành công', description: 'Đã sao chép đường dẫn thành công!' });
  };

  const basePath = import.meta.env.BASE_URL || '/';
  const pdfLink = decree.pdf_url ? basePath.replace(/\/$/, '') + decree.pdf_url : '#';

  return (
    <div className="max-w-5xl mx-auto pb-12">
      {/* Header chỉ hiển thị khi in ấn (Print Header) */}
      <div className="print-header hidden">
        <div style={{ textAlign: 'center', marginBottom: '15px' }}>
          <h3 style={{ fontSize: '13pt', fontWeight: 'bold', margin: '0' }}>CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</h3>
          <p style={{ fontSize: '11pt', fontStyle: 'italic', margin: '2px 0 8px 0' }}>Độc lập - Tự do - Hạnh phúc</p>
          <hr style={{ width: '120px', margin: '0 auto 10px auto' }} />
          <h4 style={{ fontSize: '11pt', fontWeight: 'bold', textTransform: 'uppercase', margin: '0', color: '#006633' }}>
            HỆ THỐNG TRA CỨU PHÁP LUẬT — CÔNG TY CỔ PHẦN KIỂU VIỆT
          </h4>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="flex items-center text-sm text-muted-foreground mb-6 gap-2">
        <Link to="/" className="hover:text-primary transition-colors">Trang chủ</Link>
        <span>/</span>
        <Link to="/thu-vien" className="hover:text-primary transition-colors">Thư viện</Link>
        <span>/</span>
        <span className="text-foreground font-medium truncate max-w-[200px] sm:max-w-[400px]">{decree.decree_number}</span>
      </div>

      <div className="bg-card border border-border rounded-xl p-6 sm:p-8 shadow-sm mb-8">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <Badge variant="outline" className={`${statusInfo.color}`}>
                {statusInfo.label}
              </Badge>
              {category && (
                <Badge variant="secondary" className="bg-slate-100 dark:bg-slate-800">
                  {category.name}
                </Badge>
              )}
              <span className="text-sm text-muted-foreground font-medium">{decree.decree_number}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold leading-tight mb-4">{decree.title}</h1>
          </div>

          <div className="flex items-center gap-2 md:flex-col md:items-end">
            <Button 
              variant={isBookmarked ? "default" : "outline"}
              size="icon" 
              onClick={() => toggleBookmark(decree.id)}
              className={isBookmarked ? "bg-red-500 hover:bg-red-600 text-white border-red-500" : ""}
            >
              <Heart className={`h-5 w-5 ${isBookmarked ? 'fill-current' : ''}`} />
            </Button>
            <Button variant="outline" size="icon" onClick={handleShare}>
              <Share2 className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" onClick={() => window.print()}>
              <Printer className="h-5 w-5" />
            </Button>
          </div>
        </div>

          <div className="flex flex-wrap items-center gap-3">
            <Button onClick={() => navigate('/hoi-dap-ai', { state: { prefill: `Hãy phân tích và tóm tắt những điểm kế toán cần lưu ý trong văn bản ${decree.decree_number} (${decree.title}).` } })} className="gap-2">
              <Bot className="h-4 w-4" /> Hỏi AI về văn bản này
            </Button>

            {decree.pdf_drive_id ? (
              <Button asChild variant="outline" className="gap-2 border-blue-200 text-blue-700 bg-blue-50 hover:bg-blue-100 dark:bg-blue-900/30 dark:border-blue-800 dark:text-blue-300">
                <a href={`https://drive.google.com/uc?export=download&id=${decree.pdf_drive_id}`} target="_blank" rel="noopener noreferrer">
                  <Download className="h-4 w-4" /> Tải PDF & Phụ lục (Google Drive)
                </a>
              </Button>
            ) : decree.pdf_url ? (
              <Button asChild variant="outline" className="gap-2 border-blue-200 text-blue-700 bg-blue-50 hover:bg-blue-100 dark:bg-blue-900/30 dark:border-blue-800 dark:text-blue-300">
                <a href={pdfLink} download>
                  <Download className="h-4 w-4" /> Tải PDF (Có Phụ lục)
                </a>
              </Button>
            ) : null}
            
            {/* Direct Google Dork for finding .doc / .xls files instantly bypassing paywalls */}
            {decree.free_download_url ? (
              <Button asChild size="sm" className="bg-emerald-600 hover:bg-emerald-700 w-full sm:w-auto h-10 shadow-sm" title="Tải trực tiếp File Gốc">
                <a href={decree.free_download_url} target="_blank" rel="noopener noreferrer">
                  <Download className="w-4 h-4 mr-2" />
                  Tải File Biểu Mẫu (Miễn Phí)
                </a>
              </Button>
            ) : (
              <Button asChild size="sm" className="bg-emerald-600 hover:bg-emerald-700 w-full sm:w-auto h-10 shadow-sm" title="Tải trực tiếp từ Cổng TTĐT Chính Phủ">
                <a href={`https://vanban.chinhphu.vn/?pageid=27160&keyword=${encodeURIComponent(decree.decree_number)}`} target="_blank" rel="noopener noreferrer">
                  <Download className="w-4 h-4 mr-2" />
                  Tải File Biểu Mẫu (Miễn Phí)
                </a>
              </Button>
            )}
            
            {!decree.pdf_drive_id && !decree.pdf_url && !decree.free_download_url && (
              <Button variant="outline" className="gap-2" disabled>
                <Download className="h-4 w-4" /> Chưa có file gốc
              </Button>
            )}
          </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" id="decree-content-area">
        <div className="lg:col-span-2 relative">
          
          {selectionRect && !isNoteDialogOpen && (
            <div 
              style={{ position: 'absolute', top: selectionRect.top, left: selectionRect.left, zIndex: 50 }}
              className="bg-amber-100 dark:bg-amber-900 border border-amber-300 shadow-lg rounded-md p-1 animate-in fade-in zoom-in duration-200"
            >
              <Button size="sm" variant="ghost" className="h-8 text-amber-800 dark:text-amber-100 hover:bg-amber-200" onClick={() => setIsNoteDialogOpen(true)}>
                <Bot className="w-4 h-4 mr-2" />
                Lưu Ghi chú
              </Button>
            </div>
          )}
          
          <Tabs defaultValue="content" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-6">
              <TabsTrigger value="content" className="gap-2 font-semibold text-xs sm:text-sm">
                <FileText className="h-4 w-4 text-emerald-600" /> Toàn văn gốc
              </TabsTrigger>
              <TabsTrigger value="summary" className="gap-2 font-semibold text-xs sm:text-sm">
                <Bot className="h-4 w-4 text-blue-600" /> Tóm tắt AI
              </TabsTrigger>
              <TabsTrigger value="diff" className="gap-2 font-semibold text-xs sm:text-sm">
                <ArrowRightLeft className="h-4 w-4 text-amber-600" /> Điểm mới & So sánh
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="content" className="mt-0 space-y-4">
              {/* Font Size & Reader Utility Bar */}
              <div className="flex items-center justify-between bg-muted/40 border border-border/60 rounded-xl px-4 py-2 text-xs">
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground font-medium hidden sm:inline">Cỡ chữ đọc luật:</span>
                  <div className="flex items-center gap-1 bg-background border border-border/80 rounded-lg p-0.5 shadow-xs">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="h-7 px-2 text-xs font-bold hover:bg-muted"
                      onClick={() => changeFontSize(-1)}
                      title="Thu nhỏ chữ"
                    >
                      A-
                    </Button>
                    <span className="text-xs font-mono font-bold px-1.5 text-foreground">{fontSize}px</span>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="h-7 px-2 text-xs font-bold hover:bg-muted"
                      onClick={() => changeFontSize(1)}
                      title="Phóng to chữ"
                    >
                      A+
                    </Button>
                  </div>
                  {fontSize !== 16 && (
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="h-7 px-1.5 text-[11px] text-muted-foreground hover:text-foreground"
                      onClick={resetFontSize}
                      title="Đặt lại cỡ chữ chuẩn 16px"
                    >
                      <RotateCcw className="h-3 w-3 mr-1" /> Đặt lại
                    </Button>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="h-7 text-xs gap-1"
                    onClick={() => {
                      navigator.clipboard.writeText(`Căn cứ theo ${decree.decree_number}: "${decree.title}" (Ban hành ngày ${formatDate(decree.issued_date)})`);
                      toast({ title: 'Đã sao chép trích dẫn căn cứ', description: 'Có thể dán trực tiếp vào email/báo cáo công việc.' });
                    }}
                  >
                    <Copy className="h-3.5 w-3.5" />
                    <span className="hidden sm:inline">Sao chép trích dẫn</span>
                  </Button>
                </div>
              </div>

              <div className="bg-card border border-border/60 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow">
                <div 
                  id="decree-content" 
                  style={{ fontSize: `${fontSize}px`, lineHeight: 1.6 }}
                  className="prose prose-slate dark:prose-invert max-w-none prose-headings:text-primary prose-a:text-primary hover:prose-a:text-primary/80 prose-p:leading-relaxed prose-li:leading-relaxed transition-all duration-150"
                >
                  {isLoadingContent ? (
                    <div className="py-10 text-center text-muted-foreground">Đang tải nội dung...</div>
                  ) : (
                    <ReactMarkdown remarkPlugins={[remarkGfm, remarkMath]} rehypePlugins={[rehypeRaw, rehypeKatex]}>
                      {fullTextContent}
                    </ReactMarkdown>
                  )}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="summary" className="mt-0">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/40 dark:to-indigo-950/40 border border-blue-200/50 dark:border-blue-800/50 rounded-2xl p-6 sm:p-8 shadow-inner relative overflow-hidden">
                <div className="absolute top-0 right-0 p-32 bg-blue-400/10 dark:bg-blue-600/10 blur-[100px] rounded-full pointer-events-none"></div>
                <div className="flex items-center gap-3 mb-6 text-blue-600 dark:text-blue-400 relative z-10">
                  <div className="p-2.5 bg-blue-100 dark:bg-blue-900/50 rounded-xl">
                    <Bot className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-xl">Tóm tắt chuyên sâu bởi AI</h3>
                </div>
                <div className="prose prose-blue dark:prose-invert max-w-none relative z-10 prose-p:leading-relaxed">
                  <ReactMarkdown remarkPlugins={[remarkGfm, remarkMath]} rehypePlugins={[rehypeRaw, rehypeKatex]}>
                    {summaryContent}
                  </ReactMarkdown>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="diff" className="mt-0">
              <DecreeDiffViewer decreeId={decree.id} />
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6 lg:sticky lg:top-24 h-fit">
          {/* MỤC LỤC ĐIỀU KHOẢN STICKY */}
          <div className="bg-card border border-border/60 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-bold text-sm flex items-center gap-2 mb-3 text-emerald-800 dark:text-emerald-300">
              <ListFilter className="h-4 w-4 text-emerald-600" />
              Mục lục điều khoản
            </h3>
            <TableOfContents content={fullTextContent} />
          </div>

          <div className="bg-card border border-border/60 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-bold text-lg flex items-center gap-2 mb-4">
              <Info className="h-5 w-5 text-primary" />
              Thông tin áp dụng
            </h3>
            <div className="space-y-4">
              <div>
                <div className="text-sm text-muted-foreground mb-1">Ngày ban hành</div>
                <div className="font-semibold text-foreground">{formatDate(decree.issued_date)}</div>
              </div>
              <div className="h-px bg-border/50"></div>
              <div>
                <div className="text-sm text-muted-foreground mb-1">Ngày có hiệu lực</div>
                <div className="font-semibold text-foreground">{formatDate(decree.effective_date)}</div>
              </div>
              <div className="h-px bg-border/50"></div>
              <div>
                <div className="text-sm text-muted-foreground mb-1">Lĩnh vực</div>
                <div className="font-semibold text-foreground">{category?.name || decree.category}</div>
              </div>
            </div>
          </div>

          {relatedDecrees.length > 0 && (
            <div className="bg-card border border-border/60 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-lg mb-4">Văn bản liên quan</h3>
              <div className="space-y-3">
                {relatedDecrees.map(d => (
                  <Link 
                    key={d.id} 
                    to={`/thu-vien/${d.id}`}
                    className="block p-3 rounded-xl border border-transparent hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                  >
                    <div className="text-xs font-bold text-primary mb-1">
                      {d.decree_number}
                    </div>
                    <div className="text-sm font-medium line-clamp-2 text-foreground">
                      {d.title}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      
      <Dialog open={isNoteDialogOpen} onOpenChange={setIsNoteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Lưu Ghi chú / Trích dẫn</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="p-3 bg-muted rounded-md text-sm italic border-l-2 border-primary line-clamp-4">
              "{selectedText}"
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Ghi chú của bạn (tuỳ chọn)</label>
              <Textarea 
                placeholder="Ví dụ: Dùng cho khách hàng A, lưu ý xuất hóa đơn..." 
                value={noteInput}
                onChange={(e) => setNoteInput(e.target.value)}
                rows={3}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsNoteDialogOpen(false)}>Hủy</Button>
            <Button onClick={handleSaveNote}>Lưu vào Sổ tay</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Mobile Floating Action Button for Table of Contents */}
      <div className="fixed bottom-6 right-6 lg:hidden z-30">
        <Sheet>
          <SheetTrigger asChild>
            <Button className="rounded-full shadow-xl bg-emerald-600 hover:bg-emerald-700 text-white gap-2 h-12 px-4 border border-emerald-500">
              <ListFilter className="h-5 w-5" />
              <span className="font-semibold text-xs">Mục lục</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="bottom" className="h-[75vh] p-4 rounded-t-2xl">
            <SheetHeader className="pb-3 border-b border-border">
              <SheetTitle className="text-base font-bold text-emerald-800 dark:text-emerald-300 flex items-center gap-2">
                <ListFilter className="h-4 w-4" />
                Mục lục: {decree.decree_number}
              </SheetTitle>
            </SheetHeader>
            <div className="mt-4 h-[calc(100%-60px)]">
              <TableOfContents content={fullTextContent} />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}