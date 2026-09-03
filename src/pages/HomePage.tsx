import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, FileText, FolderOpen, Bot, RefreshCw, Building2, Calculator, ArrowRightLeft, Scale, ArrowUpRight, Sparkles } from 'lucide-react';
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
    <div className="flex flex-col gap-10 pb-12 max-w-[1400px] mx-auto px-4 md:px-8 mt-4">
      {/* Top Company Announcement Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-2 px-4 py-2 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 rounded-xl text-xs text-emerald-900 dark:text-emerald-200 shadow-xs">
        <div className="flex items-center gap-2 font-medium">
          <Building2 className="h-4 w-4 text-emerald-600 shrink-0" />
          <span><strong>CÔNG TY KIỂU VIỆT:</strong> Cổng thông tin tra cứu văn bản pháp luật, chính sách thuế & nghiệp vụ xây dựng</span>
        </div>
        <div className="flex items-center gap-3 text-[11px] text-emerald-800/80 dark:text-emerald-300 font-semibold">
          <span>Hotline: (0256) 3947 003</span>
          <span>•</span>
          <span>Kieuviet2006@gmail.com</span>
        </div>
      </div>

      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative rounded-[2rem] bg-gradient-to-b from-emerald-50/40 via-white to-white dark:from-emerald-950/20 dark:via-zinc-900/50 dark:to-background border border-emerald-200/50 dark:border-border/40 overflow-hidden shadow-sm"
      >
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[400px] text-center px-6 py-10 md:py-16">
          <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
            <Badge variant="outline" className="bg-white/80 dark:bg-background/80 backdrop-blur-sm border-emerald-500/30 text-emerald-800 dark:text-emerald-300 px-3.5 py-1 rounded-full text-xs font-semibold shadow-xs">
              <Sparkles className="h-3 w-3 mr-1 text-emerald-600 inline" />
              Dữ liệu Pháp luật & Kế toán 2026 (55 Văn bản Toàn văn)
            </Badge>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight mb-4 max-w-4xl leading-tight text-foreground">
            Tra Cứu Kế Toán & Pháp Luật <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 via-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-300">
              DOANH NGHIỆP KIỂU VIỆT
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-8 max-w-2xl font-normal leading-relaxed">
            Tra cứu tức thì 55 văn bản quy phạm pháp luật kế toán, chính sách thuế, tiền lương - BHXH và hợp đồng chi phí đầu tư xây dựng phục vụ thực tế cho toàn thể cán bộ nhân viên Kiểu Việt.
          </p>

          <form onSubmit={handleSearch} className="w-full max-w-2xl relative group flex items-center">
            <Search className="absolute left-5 h-5 w-5 text-muted-foreground group-focus-within:text-emerald-600 transition-colors" />
            <Input
              type="search"
              placeholder="Nhập số hiệu văn bản (145/2020, 99/2025, 37/2015) hoặc từ khóa..."
              className="w-full bg-background/90 backdrop-blur-md pl-14 pr-32 h-14 rounded-2xl border-emerald-200 dark:border-border/60 shadow-float focus-visible:ring-2 focus-visible:ring-emerald-500/30 text-base md:text-lg transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button type="submit" className="absolute right-2 h-10 rounded-xl px-6 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold transition-all shadow-sm">
              Tìm kiếm
            </Button>
          </form>

          <div className="flex flex-wrap items-center justify-center gap-2 mt-6 text-xs">
            <span className="text-muted-foreground font-medium mr-1">Tra cứu nhanh:</span>
            {[
              { label: 'Thông tư 99/2025', q: '99/2025' },
              { label: 'Luật Thuế TNCN 2026', q: '109/2025' },
              { label: 'Hợp đồng XD NĐ 37', q: '37/2015' },
              { label: 'Lương cơ sở 2.34tr NĐ 73', q: '73/2024' },
              { label: 'Quy trình thu BHXH 595', q: '595' },
              { label: 'Chi phí XD NĐ 10', q: '10/2021' }
            ].map(chip => (
              <button 
                key={chip.label}
                onClick={() => navigate(`/tra-cuu?q=${chip.q}`)}
                className="bg-white dark:bg-card hover:bg-emerald-50 dark:hover:bg-emerald-950/40 text-foreground border border-border/60 hover:border-emerald-300 px-3 py-1 rounded-full transition-all text-xs font-medium shadow-xs"
              >
                {chip.label}
              </button>
            ))}
          </div>
        </div>
        
        {/* Minimalist Background Elements */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-300/50 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-500/5 via-transparent to-transparent pointer-events-none"></div>
      </motion.div>

      {/* 4 Quick Action Utility Cards - Thực chiến Kiểu Việt */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div 
          onClick={() => navigate('/tien-ich')}
          className="group p-5 bg-card border border-emerald-200/80 dark:border-emerald-800/40 rounded-2xl shadow-soft hover:shadow-float hover:border-emerald-400 cursor-pointer transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
        >
          <div>
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-300 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Calculator className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-foreground group-hover:text-emerald-700 transition-colors flex items-center justify-between">
              Tính Thuế TNCN 2026
              <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-emerald-600" />
            </h3>
            <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
              So sánh Biểu thuế mới Luật 109 (giảm trừ 15.5tr/6.2tr) vs biểu hiện hành.
            </p>
          </div>
          <span className="text-[11px] text-emerald-700 dark:text-emerald-400 font-semibold mt-3 flex items-center gap-1">
            Mở máy tính thuế &rarr;
          </span>
        </div>

        <div 
          onClick={() => navigate('/tien-ich')}
          className="group p-5 bg-card border border-blue-200/80 dark:border-blue-800/40 rounded-2xl shadow-soft hover:shadow-float hover:border-blue-400 cursor-pointer transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
        >
          <div>
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <ArrowRightLeft className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-foreground group-hover:text-blue-700 transition-colors flex items-center justify-between">
              Lương Gross ➔ Net & BHXH
              <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-blue-600" />
            </h3>
            <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
              Áp trần lương cơ sở 2.34tr (NĐ 73), bóc tách chi phí công ty Kiểu Việt chi trả.
            </p>
          </div>
          <span className="text-[11px] text-blue-700 dark:text-blue-400 font-semibold mt-3 flex items-center gap-1">
            Tính lương & bảo hiểm &rarr;
          </span>
        </div>

        <div 
          onClick={() => navigate('/thu-vien/tt-99-2025')}
          className="group p-5 bg-card border border-teal-200/80 dark:border-teal-800/40 rounded-2xl shadow-soft hover:shadow-float hover:border-teal-400 cursor-pointer transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
        >
          <div>
            <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-800 dark:bg-teal-900/50 dark:text-teal-300 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <FileText className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-foreground group-hover:text-teal-700 transition-colors flex items-center justify-between">
              Điểm Mới Thông Tư 99/2025
              <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-teal-600" />
            </h3>
            <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
              Đối chiếu hệ thống tài khoản chi phí xây lắp 621, 622, 623, 627 vs TT 200.
            </p>
          </div>
          <span className="text-[11px] text-teal-700 dark:text-teal-400 font-semibold mt-3 flex items-center gap-1">
            Xem bảng so sánh &rarr;
          </span>
        </div>

        <div 
          onClick={() => navigate('/thu-vien?category=xay-dung')}
          className="group p-5 bg-card border border-amber-200/80 dark:border-amber-800/40 rounded-2xl shadow-soft hover:shadow-float hover:border-amber-400 cursor-pointer transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
        >
          <div>
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-300 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Scale className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-foreground group-hover:text-amber-700 transition-colors flex items-center justify-between">
              Hợp Đồng & Chi Phí Xây Lắp
              <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-amber-600" />
            </h3>
            <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
              Quy định tạm ứng, trượt giá và quản lý dự toán công trình theo NĐ 37 & NĐ 10.
            </p>
          </div>
          <span className="text-[11px] text-amber-700 dark:text-amber-400 font-semibold mt-3 flex items-center gap-1">
            Tra cứu văn bản XD &rarr;
          </span>
        </div>
      </div>

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
