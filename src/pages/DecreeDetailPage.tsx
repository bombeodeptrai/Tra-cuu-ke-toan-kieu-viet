import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Share2, Printer, Bot, Heart, FileText, Info, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { CATEGORIES, DECREE_STATUS_LABELS } from '@/lib/utils/constants';
import { formatDate } from '@/lib/utils/format';
import { useDecreeStore } from '@/stores/decree-store';
import { useToast } from '@/components/ui/use-toast';

export function DecreeDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { decrees, bookmarks, toggleBookmark } = useDecreeStore();
  const decree = decrees.find(d => d.id === id);
  
  const [content, setContent] = useState<string>('');
  const [isLoadingContent, setIsLoadingContent] = useState<boolean>(false);

  useEffect(() => {
    if (decree) {
      if (decree.content_url) {
        setIsLoadingContent(true);
        const basePath = import.meta.env.BASE_URL || '/';
        fetch(basePath.replace(/\/$/, '') + decree.content_url)
          .then(res => res.text())
          .then(text => setContent(text))
          .catch(() => setContent('Lỗi tải nội dung.'))
          .finally(() => setIsLoadingContent(false));
      } else {
        setContent(decree.content || '');
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
                  <Download className="h-4 w-4" /> Tải PDF gốc
                </a>
              </Button>
            ) : (
              <Button variant="outline" className="gap-2" disabled>
                <Download className="h-4 w-4" /> Chưa có file PDF
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
              <div className="bg-card border border-border rounded-xl p-6 sm:p-8 shadow-sm">
                <div id="decree-content" className="prose prose-slate dark:prose-invert max-w-none">
                  {isLoadingContent ? (
                    <div className="py-10 text-center text-muted-foreground">Đang tải nội dung...</div>
                  ) : (
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {content}
                    </ReactMarkdown>
                  )}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="summary" className="mt-0">
              <div className="bg-blue-50/50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900 rounded-xl p-6 sm:p-8">
                <div className="flex items-center gap-2 mb-4 text-blue-600 dark:text-blue-400">
                  <Bot className="h-5 w-5" />
                  <h3 className="font-semibold text-lg">AI Tóm tắt</h3>
                </div>
                <div className="prose prose-blue dark:prose-invert max-w-none">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {decree.summary}
                  </ReactMarkdown>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
            <h3 className="font-semibold flex items-center gap-2 mb-4">
              <Info className="h-5 w-5 text-blue-500" />
              Thông tin áp dụng
            </h3>
            <div className="space-y-4">
              <div>
                <div className="text-sm text-muted-foreground mb-1">Ngày ban hành</div>
                <div className="font-medium">{formatDate(decree.issued_date)}</div>
              </div>
              <div className="h-px bg-border"></div>
              <div>
                <div className="text-sm text-muted-foreground mb-1">Ngày có hiệu lực</div>
                <div className="font-medium">{formatDate(decree.effective_date)}</div>
              </div>
              <div className="h-px bg-border"></div>
              <div>
                <div className="text-sm text-muted-foreground mb-1">Lĩnh vực</div>
                <div className="font-medium">{category?.name || decree.category}</div>
              </div>
            </div>
          </div>

          {relatedDecrees.length > 0 && (
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold mb-4">Văn bản liên quan</h3>
              <div className="space-y-3">
                {relatedDecrees.map(d => (
                  <Link 
                    key={d.id} 
                    to={`/thu-vien/${d.id}`}
                    className="block p-3 rounded-lg border border-transparent hover:border-border hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
                  >
                    <div className="text-xs font-medium text-blue-600 dark:text-blue-400 mb-1">
                      {d.decree_number}
                    </div>
                    <div className="text-sm font-medium line-clamp-2">
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