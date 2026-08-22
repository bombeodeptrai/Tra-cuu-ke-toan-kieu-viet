import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate, Link } from 'react-router-dom';
import { Search, X, History, ArrowRight, Bot } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { DecreeCard } from '@/components/decree/DecreeCard';
import { MOCK_DECREES } from '@/data/mock-decrees';
import { CATEGORIES } from '@/lib/utils/constants';

export function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const [query, setQuery] = useState(initialQuery);
  const navigate = useNavigate();

  // Simple mock search history
  const searchHistory = ['Thông tư 200', 'Hóa đơn điện tử', 'Thuế TNDN'];

  useEffect(() => {
    setQuery(initialQuery);
  }, [initialQuery]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      setSearchParams({ q: query });
    }
  };

  // Simple naive search matching for demo purposes
  const results = initialQuery.trim() ? MOCK_DECREES.filter(d => 
    d.title.toLowerCase().includes(initialQuery.toLowerCase()) || 
    d.decree_number.toLowerCase().includes(initialQuery.toLowerCase()) ||
    d.summary.toLowerCase().includes(initialQuery.toLowerCase())
  ) : [];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <form onSubmit={handleSearch} className="relative">
        <div className="relative flex items-center">
          <Search className="absolute left-4 h-6 w-6 text-muted-foreground" />
          <Input 
            className="w-full bg-card h-16 pl-14 pr-14 text-lg rounded-2xl shadow-sm border-2 focus-visible:border-primary focus-visible:ring-0 transition-all"
            placeholder="Nhập số hiệu, tên văn bản, hoặc nội dung cần tìm..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
          />
          {query && (
            <Button 
              type="button" 
              variant="ghost" 
              size="icon" 
              className="absolute right-3 h-10 w-10 text-muted-foreground hover:text-foreground"
              onClick={() => { setQuery(''); setSearchParams({}); }}
            >
              <X className="h-5 w-5" />
            </Button>
          )}
        </div>
      </form>

      {!initialQuery ? (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="bg-card border border-border rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold flex items-center gap-2">
                <History className="h-5 w-5 text-muted-foreground" /> Lịch sử tìm kiếm
              </h3>
              <Button variant="ghost" size="sm" className="text-muted-foreground text-xs h-8">Xóa tất cả</Button>
            </div>
            <div className="flex flex-wrap gap-2">
              {searchHistory.map(term => (
                <Badge key={term} variant="secondary" className="px-3 py-1.5 text-sm cursor-pointer hover:bg-muted font-normal" onClick={() => setSearchParams({ q: term })}>
                  {term}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Danh mục phổ biến</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {CATEGORIES.slice(0, 4).map(cat => (
                <div 
                  key={cat.id} 
                  onClick={() => navigate(`/thu-vien?category=${cat.slug}`)}
                  className="p-4 rounded-xl border border-border bg-card hover:border-primary/50 hover:bg-primary/5 cursor-pointer transition-colors flex items-center justify-between"
                >
                  <span className="font-medium text-sm">{cat.name}</span>
                  <ArrowRight className="h-4 w-4 text-muted-foreground" />
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">Tìm thấy {results.length} kết quả cho "{initialQuery}"</h2>
          </div>

          {results.length > 0 && (
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="bg-primary/20 p-2 rounded-full text-primary">
                  <Bot className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold">Bạn muốn hiểu rõ hơn về vấn đề này?</h4>
                  <p className="text-sm text-muted-foreground">AI có thể giải thích và tóm tắt theo ngữ cảnh của bạn.</p>
                </div>
              </div>
              <Button onClick={() => navigate('/hoi-dap-ai')} className="shrink-0">
                Hỏi AI ngay
              </Button>
            </div>
          )}

          <div className="flex flex-col gap-4">
            {results.map(decree => (
              <DecreeCard key={decree.id} decree={decree} viewMode="list" />
            ))}
            
            {results.length === 0 && (
              <div className="text-center py-20 bg-card rounded-2xl border border-border">
                <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4 opacity-50" />
                <h3 className="text-lg font-medium">Không tìm thấy kết quả phù hợp</h3>
                <p className="text-muted-foreground mt-2">Vui lòng thử lại với từ khóa khác hoặc tra cứu qua danh mục.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// Simple Badge fallback if not imported
const Badge = ({ children, className, variant, onClick }: any) => (
  <span onClick={onClick} className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${className}`}>
    {children}
  </span>
);
