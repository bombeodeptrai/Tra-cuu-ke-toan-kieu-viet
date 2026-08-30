import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Search as SearchIcon, Filter, ArrowUpDown } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { DecreeCard } from '@/components/decree/DecreeCard';
import { CATEGORIES } from '@/lib/utils/constants';
import { useDecrees } from '@/hooks/useDecrees';
import { useNotesStore } from '@/stores/notes-store';

export function SearchPage() {
  const [searchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const navigate = useNavigate();
  const { addSearchHistory } = useNotesStore();
  
  const [query, setQuery] = useState(initialQuery);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeStatus, setActiveStatus] = useState<string>('all');

  const { filteredDecrees, isLoading } = useDecrees(initialQuery, activeCategory, activeStatus, 1, 1000);

  useEffect(() => {
    setQuery(initialQuery);
    if (initialQuery) {
      addSearchHistory(initialQuery);
    }
  }, [initialQuery]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      addSearchHistory(query.trim());
      navigate(`/tra-cuu?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <div className="max-w-5xl mx-auto pb-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-6">Tra cứu văn bản</h1>
        
        <form onSubmit={handleSearch} className="flex gap-3 mb-6">
          <div className="relative flex-1">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input 
              placeholder="Nhập số hiệu, tên văn bản, hoặc từ khóa..." 
              className="pl-10 h-12 text-base rounded-xl bg-card border-border focus-visible:ring-blue-500"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <Button type="submit" className="h-12 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium">
            Tìm kiếm
          </Button>
        </form>

        <div className="flex flex-wrap items-center gap-4 p-4 bg-card border border-border rounded-xl shadow-sm">
          <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground mr-2">
            <Filter className="h-4 w-4" /> Bộ lọc:
          </div>
          
          <select 
            className="text-sm border border-border rounded-lg px-3 py-2 bg-background focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={activeCategory}
            onChange={(e) => setActiveCategory(e.target.value)}
          >
            <option value="all">Tất cả lĩnh vực</option>
            {CATEGORIES.map(c => (
              <option key={c.id} value={c.slug}>{c.name}</option>
            ))}
          </select>

          <select 
            className="text-sm border border-border rounded-lg px-3 py-2 bg-background focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={activeStatus}
            onChange={(e) => setActiveStatus(e.target.value)}
          >
            <option value="all">Tất cả hiệu lực</option>
            <option value="active">Đang có hiệu lực</option>
            <option value="amended">Đã sửa đổi/bổ sung</option>
            <option value="expired">Hết hiệu lực</option>
          </select>
        </div>
      </div>

      <div className="mb-4 text-sm text-muted-foreground">
        Tìm thấy <strong className="text-foreground">{filteredDecrees.length}</strong> kết quả {initialQuery ? `cho "${initialQuery}"` : ''}
      </div>

      {isLoading ? (
        <div className="text-center py-10">Đang tải dữ liệu...</div>
      ) : filteredDecrees.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDecrees.map(decree => (
            <DecreeCard key={decree.id} decree={decree} viewMode="grid" />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-card border border-border rounded-xl border-dashed">
          <SearchIcon className="h-12 w-12 mx-auto text-muted-foreground mb-4 opacity-50" />
          <h3 className="text-lg font-medium mb-1">Không tìm thấy kết quả</h3>
          <p className="text-muted-foreground">Vui lòng thử lại với từ khóa khác ngắn gọn hơn.</p>
        </div>
      )}
    </div>
  );
}
