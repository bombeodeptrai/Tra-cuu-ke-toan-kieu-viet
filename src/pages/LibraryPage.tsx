import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, LayoutGrid, List as ListIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CATEGORIES, TAX_FIELDS } from '@/lib/utils/constants';
import { DecreeCard } from '@/components/decree/DecreeCard';
import { useDecreeStore } from '@/stores/decree-store';
import { useDecrees } from '@/hooks/useDecrees';

export function LibraryPage() {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';
  
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [activeYear, setActiveYear] = useState('all');
  const [activeTaxField, setActiveTaxField] = useState('all');
  
  const { viewMode, setViewMode } = useDecreeStore();
  const { filteredDecrees, isLoading } = useDecrees('', activeCategory, 'all');

  const years = Array.from(new Set(useDecreeStore.getState().decrees.map(d => new Date(d.issued_date).getFullYear().toString()))).sort().reverse();

  const yearFiltered = activeYear === 'all' 
    ? filteredDecrees 
    : filteredDecrees.filter(d => new Date(d.issued_date).getFullYear().toString() === activeYear);

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
        
        <div className="flex items-center gap-2">
          <Button 
            variant={viewMode === 'grid' ? 'default' : 'outline'} 
            size="icon"
            onClick={() => setViewMode('grid')}
          >
            <LayoutGrid className="h-4 w-4" />
          </Button>
          <Button 
            variant={viewMode === 'list' ? 'default' : 'outline'} 
            size="icon"
            onClick={() => setViewMode('list')}
          >
            <ListIcon className="h-4 w-4" />
          </Button>
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
                const decrees = finalDecrees.filter(d => 
                  d.tax_field === taxField.slug || 
                  (taxField.slug === 'khac' && !d.tax_field)
                );
                
                if (decrees.length === 0) return null;
                
                // Sort: luat -> nghi-dinh -> thong-tu -> ...
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
                        <DecreeCard key={decree.id} decree={decree} viewMode={viewMode} />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
          
          {finalDecrees.length === 0 && !isLoading && (
            <div className="text-center py-20 bg-card border border-border rounded-xl border-dashed">
              <p className="text-muted-foreground">Không có văn bản nào trong danh mục này.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
