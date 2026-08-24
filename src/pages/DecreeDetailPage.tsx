import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { 
  ArrowLeft, Calendar, FileText, Download, Building, 
  Tag, Clock, AlertTriangle, CheckCircle, Bot,
  Info, Share2, Printer, Heart 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import { CATEGORIES, DECREE_STATUS_LABELS } from '@/lib/utils/constants';
import { formatDate } from '@/lib/utils/format';
import { useDecreeStore } from '@/stores/decree-store';
import { useToast } from '@/components/ui/use-toast';

export function DecreeDetailPage() {
  const { id } = useParams();
  const { toast } = useToast();
  const { decrees, bookmarks, toggleBookmark } = useDecreeStore();
  const decree = decrees.find(d => d.id === id);
  
  const [content, setContent] = useState<string>('');
  const [summaryContent, setSummaryContent] = useState<string>('');
  const [fullTextContent, setFullTextContent] = useState<string>('');
  const [isLoadingContent, setIsLoadingContent] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (decree) {
      if (decree.content_url) {
        setIsLoadingContent(true);
        const basePath = import.meta.env.BASE_URL || '/';
        const contentPath = basePath.replace(/\/$/, '') + decree.content_url;
        fetch(contentPath)
          .then(res => {
            if (!res.ok) throw new Error('Không tìm thấy nội dung');
            return res.text();
          })
          .then(text => {
            if (text.includes('> *Lỗi tạo tóm tắt tự động*') || text.includes('Lỗi gọi AI:')) {
              text = text.replace(/> \*Lỗi tạo tóm tắt tự động\*/g, '> *⚠️ Hệ thống AI hiện đang bị quá tải (do giới hạn từ Google). Tóm tắt chuyên sâu sẽ tự động cập nhật sau ít phút. Trong lúc chờ đợi, anh/chị vui lòng tham khảo chi tiết ở phần Toàn văn bên dưới.*');
              text = text.replace(/Lỗi gọi AI: Bad status \d+:[\s\S]*?(?=---|$)/g, '> *⚠️ Hệ thống AI hiện đang bị quá tải. Tóm tắt sẽ cập nhật sau.* \n\n');
            }
            
            // Split the markdown into Summary and Full Text
            const splitMatch = text.match(/(?:---)?\s*## 📜 TOÀN VĂN VĂN BẢN\s*([\s\S]*)/);
            if (splitMatch) {
              let summaryPart = text.replace(splitMatch[0], '');
              // Remove the main title from the summary part
              summaryPart = summaryPart.replace(/^# .+\n/, '').trim();
              // Remove the redundant heading for the UI
              summaryPart = summaryPart.replace(/## 🌟 TÓM TẮT CHUYÊN SÂU \(Bởi AI\)\r?\n?/, '').trim();
              
              setSummaryContent(summaryPart);
              setFullTextContent(splitMatch[1].trim());
            } else {
              setSummaryContent(decree.summary || '');
              setFullTextContent(text);
            }
            
            setContent(text);
          })
          .catch(() => {
            setFullTextContent('Lỗi tải nội dung.');
            setSummaryContent(decree.summary || '');
          })
          .finally(() => setIsLoadingContent(false));
      } else {
        setFullTextContent(decree.content || '');
        setSummaryContent(decree.summary || '');
      }
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
  const statusInfo = DECREE_STATUS_LABELS[decree.status];
  const isBookmarked = bookmarks.includes(decree.id);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({ title: 'Thành công', description: 'Đã sao chép đường dẫn thành công!' });
  };

  const basePath = import.meta.env.BASE_URL || '/';
  const pdfLink = decree.pdf_url ? basePath.replace(/\/$/, '') + decree.pdf_url : '#';

  return (
    <div className="max-w-5xl mx-auto pb-12">
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
              <Button asChild variant="outline" className="gap-2">
                <a href={`https://drive.google.com/uc?export=download&id=${decree.pdf_drive_id}`} target="_blank" rel="noopener noreferrer">
                  <Download className="h-4 w-4" /> Tải PDF (Google Drive)
                </a>
              </Button>
            ) : decree.pdf_url ? (
              <Button asChild variant="outline" className="gap-2">
                <a href={pdfLink} download>
                  <Download className="h-4 w-4" /> Tải Văn bản gốc
                </a>
              </Button>
            ) : decree.source_url ? (
              <Button asChild variant="outline" className="gap-2">
                <a href={decree.source_url} target="_blank" rel="noopener noreferrer">
                  <Info className="h-4 w-4" /> Xem trên trang gốc
                </a>
              </Button>
            ) : (
              <Button variant="outline" className="gap-2" disabled>
                <Download className="h-4 w-4" /> Chưa có file gốc
              </Button>
            )}
          </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Tabs defaultValue="content" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="content">Nội dung chi tiết</TabsTrigger>
              <TabsTrigger value="summary">Tóm tắt AI</TabsTrigger>
            </TabsList>
            
            <TabsContent value="content" className="mt-0">
              <div className="bg-card border border-border/60 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow">
                <div id="decree-content" className="prose prose-slate dark:prose-invert max-w-none prose-headings:text-primary prose-a:text-primary hover:prose-a:text-primary/80 prose-p:leading-relaxed prose-li:leading-relaxed">
                  {isLoadingContent ? (
                    <div className="py-10 text-center text-muted-foreground">Đang tải nội dung...</div>
                  ) : (
                    <ReactMarkdown remarkPlugins={[remarkGfm, remarkMath]} rehypePlugins={[rehypeKatex]}>
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
                  <ReactMarkdown remarkPlugins={[remarkGfm, remarkMath]} rehypePlugins={[rehypeKatex]}>
                    {summaryContent}
                  </ReactMarkdown>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6 lg:sticky lg:top-24 h-fit">
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
    </div>
  );
}