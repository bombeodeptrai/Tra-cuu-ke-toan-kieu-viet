import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Share2, Printer, Bot, Heart, FileText, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { MOCK_DECREES } from '@/data/mock-decrees';
import { CATEGORIES, DECREE_STATUS_LABELS } from '@/lib/utils/constants';
import { formatDate } from '@/lib/utils/format';
import { useDecreeStore } from '@/stores/decree-store';
import { useToast } from '@/components/ui/use-toast';

export function DecreeDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { bookmarks, toggleBookmark } = useDecreeStore();
  const decree = MOCK_DECREES.find(d => d.id === id);

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
  const relatedDecrees = MOCK_DECREES.filter(d => d.category === decree.category && d.id !== decree.id).slice(0, 3);
  const statusInfo = DECREE_STATUS_LABELS[decree.status];
  const isBookmarked = bookmarks.includes(decree.id);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({ title: '✅ Thành công', description: 'Đã sao chép đường dẫn thành công!' });
  };

  return (
    <div className="max-w-5xl mx-auto pb-12">
      {/* Breadcrumb */}
      <div className="flex items-center text-sm text-muted-foreground mb-6 gap-2">
        <Link to="/" className="hover:text-primary transition-colors">Trang chủ</Link>
        <span>›</span>
        <Link to="/thu-vien" className="hover:text-primary transition-colors">Thư viện</Link>
        <span>›</span>
        <span className="text-foreground font-medium">{decree.decree_number}</span>
      </div>

      {/* Header */}
      <div className="bg-card border rounded-2xl p-6 md:p-8 shadow-sm mb-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge className={statusInfo.color}>
            {statusInfo.label}
          </Badge>
          {category && <Badge variant="outline">{category.name}</Badge>}
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">{decree.decree_number}</h1>
        <h2 className="text-lg md:text-xl font-medium leading-relaxed mb-6">{decree.title}</h2>
        
        <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
          <div className="flex items-center gap-2">
            <Info className="h-4 w-4" />
            <span>Ban hành: <strong className="text-foreground">{formatDate(decree.issued_date)}</strong></span>
          </div>
          <div className="flex items-center gap-2">
            <Info className="h-4 w-4" />
            <span>Hiệu lực: <strong className="text-foreground">{formatDate(decree.effective_date)}</strong></span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Button onClick={() => navigate('/hoi-dap-ai')} className="gap-2">
            <Bot className="h-4 w-4" /> Hỏi AI về văn bản này
          </Button>
          <Button variant="outline" className="gap-2" onClick={handleShare}>
            <Share2 className="h-4 w-4" /> Chia sẻ
          </Button>
          <Button variant="outline" className="gap-2" onClick={() => window.print()}>
            <Printer className="h-4 w-4" /> In
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="ml-auto"
            onClick={() => toggleBookmark(decree.id)}
          >
            <Heart className={`h-5 w-5 ${isBookmarked ? 'fill-red-500 text-red-500' : 'text-muted-foreground'}`} />
          </Button>
        </div>
      </div>

      {/* Content Tabs */}
      <Tabs defaultValue="content" className="w-full mb-12">
        <TabsList className="w-full justify-start border-b rounded-none bg-transparent h-auto p-0 mb-6 space-x-6">
          <TabsTrigger value="content" className="data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none rounded-none py-3 px-1">
            Nội dung chi tiết
          </TabsTrigger>
          <TabsTrigger value="summary" className="data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none rounded-none py-3 px-1">
            Tóm tắt
          </TabsTrigger>
        </TabsList>
        <TabsContent value="content" className="mt-0">
          <div className="bg-card border rounded-2xl p-6 md:p-10 prose prose-slate dark:prose-invert max-w-none prose-headings:text-primary prose-a:text-primary">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {decree.content}
            </ReactMarkdown>
          </div>
        </TabsContent>
        <TabsContent value="summary" className="mt-0">
          <div className="bg-card border rounded-2xl p-6 md:p-8">
            <h3 className="text-lg font-bold mb-4">Tóm tắt nội dung chính</h3>
            <p className="leading-relaxed text-muted-foreground">{decree.summary}</p>
          </div>
        </TabsContent>
      </Tabs>

      {/* Related Decrees */}
      {relatedDecrees.length > 0 && (
        <div>
          <h3 className="text-xl font-bold mb-6">Văn bản liên quan</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {relatedDecrees.map(d => (
              <div 
                key={d.id}
                onClick={() => navigate(`/thu-vien/${d.id}`)}
                className="bg-card border p-4 rounded-xl hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="font-bold text-primary mb-2">{d.decree_number}</div>
                <div className="text-sm font-medium line-clamp-2">{d.title}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
