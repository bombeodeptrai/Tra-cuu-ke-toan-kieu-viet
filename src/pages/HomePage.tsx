import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, FileText, FolderOpen, Bot, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { CATEGORIES } from '@/lib/utils/constants';
import { useDecreeStore } from '@/stores/decree-store';
import { Decree } from '@/types/decree';
import { format } from 'date-fns';
import { vi } from 'date-fns/locale';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

export function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const { decrees } = useDecreeStore();
  const recentDecrees = [...decrees].sort((a, b) => new Date(b.issued_date).getTime() - new Date(a.issued_date).getTime()).slice(0, 5);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/tra-cuu?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const formatDate = (dateString: string) => {
    return format(new Date(dateString), 'dd/MM/yyyy', { locale: vi });
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <div className="flex flex-col gap-12 pb-12 max-w-[1400px] mx-auto px-4 md:px-8 mt-8">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative rounded-[2rem] bg-gradient-to-b from-slate-50/50 to-white dark:from-zinc-900/50 dark:to-background border border-border/40 overflow-hidden"
      >
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[420px] text-center px-6 py-12 md:py-20">
          <Badge variant="outline" className="mb-6 bg-background/50 backdrop-blur-sm border-primary/20 text-primary px-4 py-1.5 rounded-full text-sm font-medium">
            ✨ Cập nhật dữ liệu mới nhất 2025
          </Badge>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 max-w-4xl leading-tight">
            Nền tảng tra cứu Kế toán <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
              Thông minh & Chính xác
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl font-medium">
            Tìm kiếm thông tư, nghị định và chuẩn mực kế toán Việt Nam cực nhanh. 
            Được phân tích và tóm tắt tự động bởi AI.
          </p>

          <form onSubmit={handleSearch} className="w-full max-w-2xl relative group flex items-center">
            <Search className="absolute left-5 h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
            <Input
              type="search"
              placeholder="Nhập số hiệu văn bản hoặc từ khóa..."
              className="w-full bg-background/80 backdrop-blur-md pl-14 pr-32 h-14 rounded-2xl border-border/60 shadow-float focus-visible:ring-1 focus-visible:ring-primary/40 text-lg transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button type="submit" className="absolute right-2 h-10 rounded-xl px-6 bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-all shadow-sm">
              Tìm kiếm
            </Button>
          </form>

          <div className="flex flex-wrap items-center justify-center gap-3 mt-8 text-sm">
            <span className="text-muted-foreground font-medium mr-1">Tìm kiếm phổ biến:</span>
            {['Thông tư 200', 'Thuế TNDN 2025', 'Luật Quản lý thuế', 'Hóa đơn điện tử'].map(chip => (
              <button 
                key={chip}
                onClick={() => navigate(`/tra-cuu?q=${chip}`)}
                className="bg-secondary hover:bg-secondary/80 text-secondary-foreground border border-border/50 px-4 py-1.5 rounded-full transition-all text-sm font-medium shadow-sm hover:shadow"
              >
                {chip}
              </button>
            ))}
          </div>
        </div>
        
        {/* Minimalist Background Elements */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none"></div>
      </motion.div>

      {/* Stats Cards */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {[
          { icon: FileText, count: decrees.length, label: 'Văn bản số hóa', color: 'text-primary dark:text-primary', bg: 'bg-primary/10 dark:bg-primary/20' },
          { icon: FolderOpen, count: CATEGORIES.length, label: 'Danh mục phân loại', color: 'text-slate-600 dark:text-slate-400', bg: 'bg-slate-100 dark:bg-zinc-800' },
          { icon: Bot, count: 'AI', label: 'Trợ lý phân tích', color: 'text-indigo-600 dark:text-indigo-400', bg: 'bg-indigo-50 dark:bg-indigo-900/20' },
          { icon: RefreshCw, count: 'Auto', label: 'Cập nhật thời gian thực', color: 'text-amber-600 dark:text-amber-400', bg: 'bg-amber-50 dark:bg-amber-900/20' },
        ].map((stat, i) => (
          <motion.div variants={itemVariants} key={i} className="bg-card border border-border/40 p-5 rounded-2xl flex flex-col items-start shadow-soft hover:shadow-float hover:border-border/80 hover:-translate-y-1 transition-all duration-300">
            <div className={`p-2.5 rounded-xl mb-4 ${stat.bg} ${stat.color}`}>
              <stat.icon className="w-5 h-5" />
            </div>
            <div className="text-2xl font-black tracking-tight">{stat.count}</div>
            <div className="text-sm text-muted-foreground mt-1 font-medium">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Categories Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        <div className="flex items-center gap-2 mb-6 mt-12">
          <div className="h-6 w-1.5 bg-primary rounded-full"></div>
          <h2 className="text-2xl font-bold tracking-tight">Hệ thống danh mục</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CATEGORIES.map(category => (
            <motion.div 
              variants={itemVariants}
              key={category.id} 
              onClick={() => navigate(`/thu-vien?category=${category.slug}`)}
              className="group bg-card border border-border/40 p-5 rounded-2xl hover:border-border/80 shadow-soft hover:shadow-float transition-all duration-300 cursor-pointer flex items-start gap-4 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary dark:bg-zinc-800 text-secondary-foreground flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110 shadow-sm">
                <FolderOpen className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-base mb-1 group-hover:text-primary transition-colors">{category.name}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{category.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Recent Decrees */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        className="mt-12"
      >
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <div className="h-6 w-1.5 bg-primary rounded-full"></div>
            <h2 className="text-2xl font-bold tracking-tight">Văn bản mới cập nhật</h2>
          </div>
          <Button variant="ghost" onClick={() => navigate('/thu-vien')} className="text-primary hover:text-primary/80 hover:bg-primary/10">
            Xem tất cả <span className="ml-1">&rarr;</span>
          </Button>
        </div>
        <div className="space-y-4">
          {recentDecrees.map(decree => {
            const cat = CATEGORIES.find(c => c.id === decree.category);
            return (
              <motion.div 
                variants={itemVariants}
                key={decree.id}
                onClick={() => navigate(`/thu-vien/${decree.id}`)}
                className="group bg-card border border-border/40 p-5 rounded-2xl hover:border-border/80 shadow-soft hover:shadow-float transition-all duration-300 cursor-pointer flex flex-col md:flex-row md:items-center gap-4 hover:-translate-x-1"
              >
                <div className="flex-1 min-w-0 mb-3 md:mb-0">
                  <div className="flex items-center gap-3 mb-2">
                    <Badge variant={decree.status === 'active' ? 'default' : 'secondary'} className={cn("rounded-md px-2 py-1 font-medium shadow-none", decree.status === 'active' ? "bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500/20" : "bg-secondary text-secondary-foreground")}>
                      {decree.status === 'active' ? 'Còn hiệu lực' : decree.status === 'expired' ? 'Hết hiệu lực' : 'Sắp có hiệu lực'}
                    </Badge>
                    <span className="font-bold text-foreground group-hover:text-primary transition-colors">{decree.decree_number}</span>
                  </div>
                  <h4 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">{decree.title}</h4>
                </div>
                <div className="flex flex-row md:flex-col lg:flex-row items-center lg:items-center gap-3 lg:gap-4 text-sm text-muted-foreground whitespace-nowrap md:w-auto shrink-0 justify-end">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                    {formatDate(decree.issued_date)}
                  </div>
                  {cat && <Badge variant="outline" className="bg-secondary text-secondary-foreground border-border/50">{cat.name}</Badge>}
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
