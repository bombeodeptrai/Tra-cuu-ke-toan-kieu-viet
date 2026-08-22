import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText, FolderOpen, Bot, RefreshCw, Search } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CATEGORIES } from '@/lib/utils/constants';
import { Badge } from '@/components/ui/badge';
import { formatDate } from '@/lib/utils/format';
import { cn } from '@/lib/utils';
import { useDecreeStore } from '@/stores/decree-store';

export function HomePage() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = React.useState('');
  const { decrees } = useDecreeStore();

  const recentDecrees = [...decrees].sort((a, b) => 
    new Date(b.issued_date).getTime() - new Date(a.issued_date).getTime()
  ).slice(0, 5);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/tra-cuu?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className="space-y-10">
      {/* Professional Corporate Hero Section */}
      <motion.div 
        className="relative rounded-2xl overflow-hidden bg-[#0a192f] p-8 md:p-14 text-white shadow-2xl border border-slate-700/50"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="relative z-10 max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-2">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
            Hệ thống nội bộ Kiểu Việt
          </div>
          
          <h1 className="text-3xl md:text-5xl font-extrabold leading-[1.15] tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
            Cổng Tra Cứu Kế Toán & <br className="hidden md:block" />
            Pháp Lý Tài Chính
          </h1>
          
          <p className="text-slate-400 text-base md:text-lg max-w-xl leading-relaxed">
            Hệ thống cơ sở dữ liệu pháp luật chuyên ngành được hỗ trợ bởi Trí tuệ nhân tạo (AI), giúp truy xuất nhanh các điều khoản, nghị định và chuẩn mực kế toán Việt Nam.
          </p>
          
          <form onSubmit={handleSearch} className="relative mt-8 flex items-center max-w-xl">
            <Search className="absolute left-4 h-5 w-5 text-slate-400" />
            <Input 
              className="w-full bg-slate-800/50 backdrop-blur-md border border-slate-700 text-white placeholder:text-slate-500 rounded-xl pl-12 pr-32 h-14 text-base focus-visible:ring-1 focus-visible:ring-blue-500 transition-all shadow-inner"
              placeholder="Nhập số hiệu văn bản hoặc từ khóa..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button type="submit" className="absolute right-1.5 h-11 rounded-lg px-6 bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors shadow-md">
              Tìm kiếm
            </Button>
          </form>

          <div className="flex flex-wrap items-center gap-2 mt-4 text-sm">
            <span className="text-slate-500 font-medium">Truy cập nhanh:</span>
            {['Thông tư 200', 'Thuế TNDN 2025', 'Luật Quản lý thuế', 'Hóa đơn điện tử'].map(chip => (
              <button 
                key={chip}
                onClick={() => navigate(`/tra-cuu?q=${chip}`)}
                className="bg-slate-800/80 hover:bg-slate-700 text-slate-300 border border-slate-700 hover:border-slate-500 px-3 py-1 rounded-md transition-all text-xs"
              >
                {chip}
              </button>
            ))}
          </div>
        </div>
        
        {/* Professional Background Elements */}
        <div className="absolute top-0 right-0 w-[50%] h-full overflow-hidden pointer-events-none hidden md:block">
          <div className="absolute top-[-20%] right-[-10%] w-96 h-96 rounded-full bg-blue-600/20 blur-[100px]"></div>
          <div className="absolute bottom-[-10%] right-[10%] w-64 h-64 rounded-full bg-indigo-500/10 blur-[80px]"></div>
          {/* Subtle grid pattern */}
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#475569 1px, transparent 1px)', backgroundSize: '24px 24px', opacity: 0.1 }}></div>
        </div>
      </motion.div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { icon: FileText, count: decrees.length, label: 'Văn bản được số hóa', color: 'text-blue-600 dark:text-blue-400', bg: 'bg-blue-50 dark:bg-blue-900/20' },
          { icon: FolderOpen, count: CATEGORIES.length, label: 'Danh mục phân loại', color: 'text-emerald-600 dark:text-emerald-400', bg: 'bg-emerald-50 dark:bg-emerald-900/20' },
          { icon: Bot, count: 'AI', label: 'Trợ lý phân tích', color: 'text-indigo-600 dark:text-indigo-400', bg: 'bg-indigo-50 dark:bg-indigo-900/20' },
          { icon: RefreshCw, count: 'Auto', label: 'Cập nhật thời gian thực', color: 'text-amber-600 dark:text-amber-400', bg: 'bg-amber-50 dark:bg-amber-900/20' },
        ].map((stat, i) => (
          <div key={i} className="bg-card border border-border p-5 rounded-xl flex flex-col items-start shadow-sm hover:shadow-md transition-shadow">
            <div className={`p-2.5 rounded-lg mb-4 ${stat.bg} ${stat.color}`}>
              <stat.icon className="w-5 h-5" />
            </div>
            <div className="text-2xl font-black tracking-tight">{stat.count}</div>
            <div className="text-sm text-muted-foreground mt-1 font-medium">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Categories Grid */}
      <div>
        <div className="flex items-center gap-2 mb-6">
          <div className="h-6 w-1.5 bg-blue-600 rounded-full"></div>
          <h2 className="text-xl font-bold tracking-tight">Hệ thống danh mục</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CATEGORIES.map(category => (
            <div 
              key={category.id} 
              onClick={() => navigate(`/thu-vien?category=${category.slug}`)}
              className="group bg-card border border-border p-5 rounded-xl hover:border-blue-500/50 hover:shadow-md transition-all cursor-pointer flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <FolderOpen className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-base mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{category.name}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Decrees */}
      <div>
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <div className="h-6 w-1.5 bg-blue-600 rounded-full"></div>
            <h2 className="text-xl font-bold tracking-tight">Văn bản mới cập nhật</h2>
          </div>
          <Button variant="ghost" onClick={() => navigate('/thu-vien')} className="text-blue-600 hover:text-blue-700 hover:bg-blue-50">
            Xem tất cả <span className="ml-1">&rarr;</span>
          </Button>
        </div>
        <div className="space-y-3">
          {recentDecrees.map(decree => {
            const cat = CATEGORIES.find(c => c.id === decree.category);
            return (
              <div 
                key={decree.id}
                onClick={() => navigate(`/thu-vien/${decree.id}`)}
                className="group bg-card border border-border p-5 rounded-xl hover:border-blue-500/30 hover:shadow-md transition-all cursor-pointer flex flex-col md:flex-row md:items-center gap-4"
              >
                <div className="flex items-center gap-3 md:w-1/4">
                  <Badge variant={decree.status === 'active' ? 'default' : 'secondary'} className={cn("rounded-md px-2 py-1 font-medium", decree.status === 'active' ? "bg-emerald-100 text-emerald-700 hover:bg-emerald-200" : "bg-slate-100 text-slate-700")}>
                    {decree.status === 'active' ? 'Còn hiệu lực' : decree.status === 'expired' ? 'Hết hiệu lực' : 'Sắp có hiệu lực'}
                  </Badge>
                  <span className="font-bold whitespace-nowrap text-slate-700 dark:text-slate-200 group-hover:text-blue-600 transition-colors">{decree.decree_number}</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-base font-medium line-clamp-2 text-foreground group-hover:text-blue-600 transition-colors">{decree.title}</h4>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground md:w-1/4 md:justify-end">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                    {formatDate(decree.issued_date)}
                  </div>
                  {cat && <Badge variant="outline" className="bg-slate-50 text-slate-600 border-slate-200">{cat.name}</Badge>}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
