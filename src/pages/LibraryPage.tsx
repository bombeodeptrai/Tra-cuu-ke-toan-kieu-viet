import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { LayoutGrid, List, Filter, X, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { DecreeCard } from '@/components/decree/DecreeCard';
import { MOCK_DECREES } from '@/data/mock-decrees';
import { CATEGORIES } from '@/lib/utils/constants';

export function LibraryPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  
  const initialCategory = searchParams.get('category') || 'all';
  const [category, setCategory] = useState(initialCategory);
  const [status, setStatus] = useState('all');
  const [year, setYear] = useState('all');

  useEffect(() => {
    if (initialCategory !== category) {
      setCategory(initialCategory);
    }
  }, [initialCategory]);

  const filteredDecrees = MOCK_DECREES.filter(d => {
    if (category !== 'all' && d.category !== category) return false;
    if (status !== 'all' && d.status !== status) return false;
    if (year !== 'all' && new Date(d.issued_date).getFullYear().toString() !== year) return false;
    return true;
  });

  const clearFilters = () => {
    setCategory('all');
    setStatus('all');
    setYear('all');
    setSearchParams({});
  };

  const years = Array.from(new Set(MOCK_DECREES.map(d => new Date(d.issued_date).getFullYear().toString()))).sort().reverse();

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Thư viện Nghị Định Kế Toán</h1>
          <p className="text-muted-foreground text-sm">Hiển thị {filteredDecrees.length} văn bản</p>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            className="gap-2"
            onClick={() => window.open('/Tra-c-u-K-To-n-Ki-u-Vi-t/thu-vien-phap-luat.csv', '_blank')}
          >
            Xuất Google Sheets (CSV)
          </Button>
          <div className="flex bg-muted p-1 rounded-lg">
            <Button 
              variant={viewMode === 'grid' ? 'secondary' : 'ghost'} 
              size="sm" 
              onClick={() => setViewMode('grid')}
              className="h-8 px-2"
            >
              <LayoutGrid className="h-4 w-4" />
            </Button>
            <Button 
              variant={viewMode === 'list' ? 'secondary' : 'ghost'} 
              size="sm" 
              onClick={() => setViewMode('list')}
              className="h-8 px-2"
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 bg-card p-4 rounded-xl border border-border shadow-sm">
        <div className="flex items-center gap-2 text-muted-foreground md:border-r border-border md:pr-4">
          <Filter className="h-4 w-4" />
          <span className="text-sm font-medium">Bộ lọc</span>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 flex-1">
          <Select value={category} onValueChange={(val) => { setCategory(val); setSearchParams({ category: val }); }}>
            <SelectTrigger>
              <SelectValue placeholder="Danh mục" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tất cả danh mục</SelectItem>
              {CATEGORIES.map(c => (
                <SelectItem key={c.id} value={c.slug}>{c.name}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={status} onValueChange={setStatus}>
            <SelectTrigger>
              <SelectValue placeholder="Trạng thái" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tất cả trạng thái</SelectItem>
              <SelectItem value="active">Còn hiệu lực</SelectItem>
              <SelectItem value="expired">Hết hiệu lực</SelectItem>
              <SelectItem value="upcoming">Sắp có hiệu lực</SelectItem>
            </SelectContent>
          </Select>

          <Select value={year} onValueChange={setYear}>
            <SelectTrigger>
              <SelectValue placeholder="Năm ban hành" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tất cả các năm</SelectItem>
              {years.map(y => (
                <SelectItem key={y} value={y}>{y}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {(category !== 'all' || status !== 'all' || year !== 'all') && (
          <Button variant="ghost" size="icon" onClick={clearFilters} className="hidden md:flex text-muted-foreground hover:text-foreground shrink-0">
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>

      {filteredDecrees.length > 0 ? (
        <div className={viewMode === 'grid' ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" : "flex flex-col gap-3"}>
          {filteredDecrees.map(decree => (
            <DecreeCard key={decree.id} decree={decree} viewMode={viewMode} />
          ))}
        </div>
      ) : (
        <div className="py-20 text-center flex flex-col items-center justify-center">
          <div className="bg-muted w-16 h-16 rounded-full flex items-center justify-center mb-4">
            <Search className="h-8 w-8 text-muted-foreground" />
          </div>
          <h3 className="text-lg font-medium">Không tìm thấy kết quả</h3>
          <p className="text-muted-foreground mt-2 max-w-md">Hãy thử thay đổi bộ lọc hoặc từ khóa tìm kiếm để xem thêm kết quả.</p>
          <Button onClick={clearFilters} variant="outline" className="mt-6">Xóa bộ lọc</Button>
        </div>
      )}
    </div>
  );
}
