import React, { useState, useMemo } from 'react';
import { 
  BookOpen, Search, MessageSquareText, Edit3, Bookmark, LayoutDashboard,
  Calculator, FileText, Download, ShieldCheck, ArrowRightLeft, Sparkles,
  Building2, HelpCircle, CheckCircle2, ChevronRight, AlertTriangle, Layers,
  Printer, Copy, ZoomIn, FileSpreadsheet, Eye, CloudUpload, ArrowUpRight,
  FolderArchive, Scale, Clock, Bot, Check, AlertCircle, Laptop, Phone,
  Sliders, ExternalLink, HardDrive, Filter, ArrowRight, CornerDownRight,
  CheckSquare, FileCheck, RefreshCw, Key
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useNavigate } from 'react-router-dom';

export function GuidePage() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('overview');
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'audit' | 'legal' | 'tools' | 'ai'>('all');

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handlePrint = () => {
    window.print();
  };

  // Mục lục 15 tính năng cốt lõi
  const tableOfContents = [
    { id: 'overview', title: '1. Tổng quan & Kiến trúc nền tảng', category: 'legal', icon: LayoutDashboard },
    { id: 'tax-audit', title: '2. Bàn xử lý sự vụ (S01-S24) & Kiểm tra thuế', category: 'audit', icon: ShieldCheck, badge: 'Trọng tâm' },
    { id: 'audit-dossiers', title: '3. 15 Bộ hồ sơ thực chiến & Bảng CSV', category: 'audit', icon: Building2 },
    { id: 'audit-checklist', title: '4. Checklist 55 mục & Lộ trình 30-15-7 ngày', category: 'audit', icon: CheckSquare },
    { id: 'audit-defense', title: '5. 15 Mẫu giải trình & 15 Kịch bản đối thoại', category: 'audit', icon: FileSpreadsheet },
    { id: 'audit-rights', title: '6. 8 Quyền pháp lý & 8 Kỹ năng tiếp đoàn', category: 'audit', icon: Scale },
    { id: 'audit-reconcile', title: '7. Đối chiếu sổ sách (511, 154, 635, 335, 229)', category: 'audit', icon: ArrowRightLeft },
    { id: 'search-library', title: '8. Thư viện 55 văn bản & Tải PDF Drive', category: 'legal', icon: Layers },
    { id: 'smart-toc', title: '9. Trình đọc luật thông minh & Sticky TOC', category: 'legal', icon: FileText },
    { id: 'legal-diff', title: '10. Trung tâm đối chiếu điểm mới (55 văn bản)', category: 'legal', icon: RefreshCw },
    { id: 'calculators', title: '11. Bộ tiện ích tính thuế & lương 2026', category: 'tools', icon: Calculator },
    { id: 'chart-accounts', title: '12. Hệ thống tài khoản TT 99/2025/TT-BTC', category: 'tools', icon: BookOpen },
    { id: 'ai-assistant', title: '13. Trợ lý AI pháp lý & Bóc tách hóa đơn', category: 'ai', icon: MessageSquareText },
    { id: 'notes-handbook', title: '14. Sổ tay kế toán & Highlight trích dẫn', category: 'tools', icon: Edit3 },
    { id: 'faqs', title: '15. Câu hỏi thường gặp & Khắc phục lỗi', category: 'legal', icon: HelpCircle },
  ];

  const filteredToc = useMemo(() => {
    return tableOfContents.filter(item => {
      const matchCategory = categoryFilter === 'all' || item.category === categoryFilter;
      const matchSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || item.id.includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [categoryFilter, searchQuery]);

  return (
    <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10 animate-in fade-in duration-300">
      
      {/* ========================================================================= */}
      {/* 1. HERO BANNER DOANH NGHIỆP KIỂU VIỆT */}
      {/* ========================================================================= */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-900 via-teal-900 to-slate-900 text-white p-6 sm:p-10 md:p-12 shadow-xl border border-emerald-700/40">
        <div className="relative z-10 max-w-4xl space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-emerald-200 text-xs font-bold border border-white/20">
              <Building2 className="h-3.5 w-3.5 text-emerald-400" />
              CÔNG TY CỔ PHẦN KIỂU VIỆT — GIA LAI
            </div>
            <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-400/40 text-xs">
              Slogan: "Xây bền vững - Dựng tương lai"
            </Badge>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
            Cẩm Nang Hướng Dẫn Sử Dụng & Làm Chủ Hệ Thống Tra Cứu Kế Toán
          </h1>

          <p className="text-sm md:text-base text-emerald-100/90 leading-relaxed font-normal">
            Tài liệu hướng dẫn trực quan, chi tiết từng tính năng dành riêng cho Ban Giám đốc, Kế toán trưởng, Kế toán viên và Cán bộ quản lý xưởng gỗ, trạm bê tông, mỏ đá và công trường xây lắp Kiểu Việt khai thác tối đa công cụ số hóa pháp luật và phòng thủ thanh tra thuế.
          </p>

          <div className="pt-3 flex flex-wrap items-center gap-3">
            <Button 
              onClick={() => navigate('/kiem-tra-thue')}
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm h-10 px-4 rounded-xl gap-2 shadow-md transition-all cursor-pointer"
            >
              <ShieldCheck className="h-4 w-4" /> Mở Không Gian Kiểm Tra Thuế
            </Button>

            <Button 
              onClick={() => navigate('/thu-vien')}
              variant="outline"
              className="bg-white/10 hover:bg-white/20 text-white border-white/30 text-xs sm:text-sm h-10 px-4 rounded-xl gap-2 cursor-pointer"
            >
              <Layers className="h-4 w-4" /> Thư Viện 84 Văn Bản
            </Button>

            <Button 
              onClick={handlePrint}
              variant="ghost"
              className="text-emerald-200 hover:text-white hover:bg-white/10 text-xs sm:text-sm h-10 px-3 rounded-xl gap-1.5 cursor-pointer ml-auto"
            >
              <Printer className="h-4 w-4" /> In Cẩm Nang (Ctrl + P)
            </Button>
          </div>
        </div>

        {/* Decorative circle glow */}
        <div className="absolute right-0 bottom-0 translate-x-16 translate-y-16 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
      </div>

      {/* ========================================================================= */}
      {/* 2. THANH TÌM KIẾM VÀ BỘ LỌC CHUYÊN ĐỀ TÍNH NĂNG */}
      {/* ========================================================================= */}
      <div className="bg-card border border-border/80 rounded-2xl p-4 sm:p-5 shadow-xs space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="relative flex-1 max-w-md">
            <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input 
              type="text" 
              placeholder="Tìm nhanh hướng dẫn (VD: xe bồn, 154, EBITDA, trích trước, CSV...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 h-9 text-xs rounded-xl bg-muted/30"
            />
          </div>

          <div className="flex flex-wrap items-center gap-1.5 text-xs">
            <span className="text-muted-foreground text-[11px] font-semibold mr-1">Chuyên mục:</span>
            {[
              { id: 'all', label: 'Tất cả (15)' },
              { id: 'audit', label: '🛡️ Kiểm tra thuế (6)' },
              { id: 'legal', label: '📚 Luật & Thư viện (4)' },
              { id: 'tools', label: '🧮 Tiện ích & Tài khoản (3)' },
              { id: 'ai', label: '🤖 Trợ lý AI (1)' }
            ].map(cat => (
              <Button
                key={cat.id}
                size="sm"
                variant={categoryFilter === cat.id ? 'default' : 'outline'}
                onClick={() => setCategoryFilter(cat.id as any)}
                className={`h-7 px-2.5 text-xs rounded-lg transition-all ${
                  categoryFilter === cat.id 
                    ? 'bg-emerald-600 text-white font-bold' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {cat.label}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3. BỐ CỤC CHÍNH: CỘT TRÁI STICKY TOC & CỘT PHẢI NỘI DUNG MINH HỌA */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* CỘT TRÁI: MỤC LỤC TRUY CẬP NHANH (STICKY TOC) */}
        <div className="lg:col-span-4 space-y-4">
          <div className="lg:sticky lg:top-20 bg-card border border-border/80 rounded-2xl p-4 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-xs sm:text-sm text-foreground uppercase tracking-wider flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-emerald-600" />
                Mục Lục Hướng Dẫn
              </h3>
              <Badge variant="outline" className="text-[10px]">{filteredToc.length} mục</Badge>
            </div>
            
            <div className="h-px bg-border/60"></div>

            <nav className="space-y-1 text-xs max-h-[calc(100vh-220px)] overflow-y-auto custom-scrollbar pr-1">
              {filteredToc.map((item) => {
                const Icon = item.icon;
                const isSelected = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left px-3 py-2 rounded-xl transition-all flex items-center justify-between gap-2 font-medium cursor-pointer ${
                      isSelected 
                        ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 font-bold border-l-3 border-emerald-600 shadow-2xs' 
                        : 'text-muted-foreground hover:bg-muted/60 hover:text-foreground'
                    }`}
                  >
                    <div className="flex items-center gap-2 truncate">
                      <Icon className={`h-4 w-4 shrink-0 ${isSelected ? 'text-emerald-600' : 'text-muted-foreground'}`} />
                      <span className="truncate">{item.title}</span>
                    </div>
                    {item.badge && (
                      <Badge className="bg-red-500 text-white text-[9px] px-1.5 py-0 shrink-0 font-bold">
                        {item.badge}
                      </Badge>
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Khung trợ giúp nội bộ Kiểu Việt */}
            <div className="pt-3 border-t border-border/60 space-y-2 text-xs">
              <div className="p-3 bg-emerald-50/50 dark:bg-emerald-950/30 border border-emerald-200/60 dark:border-emerald-800/40 rounded-xl space-y-1">
                <div className="font-bold text-emerald-900 dark:text-emerald-200 flex items-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                  Đội Hỗ Trợ Pháp Lý Kiểu Việt
                </div>
                <p className="text-[11px] text-muted-foreground">Phòng Tài chính - Kế toán & Ban Kiểm soát</p>
                <p className="text-[11px] text-muted-foreground">Trụ sở: Pleiku, Gia Lai | Nội bộ: 102</p>
              </div>
            </div>
          </div>
        </div>

        {/* CỘT PHẢI: NỘI DUNG CHI TIẾT KÈM MINH HỌA GIAO DIỆN TRỰC QUAN */}
        <div className="lg:col-span-8 space-y-12 text-foreground">

          {/* ========================================================================= */}
          {/* MỤC 1: TỔNG QUAN HỆ THỐNG */}
          {/* ========================================================================= */}
          <section id="overview" className="space-y-4 scroll-mt-24">
            <div className="flex items-center gap-2.5 border-b border-border pb-3">
              <div className="p-2 rounded-xl bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300">
                <LayoutDashboard className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight">1. Tổng Quan & Kiến Trúc Nền Tảng</h2>
                <p className="text-xs text-muted-foreground">Hệ sinh thái tra cứu pháp lý & bảo vệ giá vốn dành riêng cho Công ty Kiểu Việt</p>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-muted-foreground">
              Hệ thống được thiết kế đặc thù cho mô hình sản xuất kinh doanh đa ngành của <strong>Công ty Cổ phần Kiểu Việt</strong> tại Gia Lai: Sản xuất đồ gỗ nội thất, Trạm trộn bê tông thương phẩm, Khai thác mỏ đá nổ mìn và Thi công xây lắp hạ tầng công trình.
            </p>

            {/* MINH HỌA: SƠ ĐỒ 4 TRỤ CỘT HOẠT ĐỘNG */}
            <div className="bg-muted/30 border border-border/80 rounded-2xl p-5 space-y-3">
              <div className="flex items-center justify-between text-xs font-bold text-foreground uppercase tracking-wider">
                <span className="flex items-center gap-1.5"><Layers className="h-4 w-4 text-emerald-600" /> Sơ đồ 4 Trụ Cột Nghiệp Vụ Kiểu Việt</span>
                <Badge variant="outline" className="text-[10px]">Tích hợp 84 Luật & Nghị định</Badge>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                <div className="p-3.5 rounded-xl border border-amber-300/80 bg-amber-50/50 dark:bg-amber-950/20 space-y-1.5">
                  <div className="font-bold text-amber-900 dark:text-amber-200 flex items-center gap-1.5">
                    <span className="text-base">🪵</span> Xưởng Mộc Nội Thất
                  </div>
                  <p className="text-[11px] text-muted-foreground">Quản lý định mức gỗ xẻ, hao hụt mùn cưa, ván MFC, sơn PU và nguồn gốc lâm sản TT 26/2022.</p>
                </div>

                <div className="p-3.5 rounded-xl border border-blue-300/80 bg-blue-50/50 dark:bg-blue-950/20 space-y-1.5">
                  <div className="font-bold text-blue-900 dark:text-blue-200 flex items-center gap-1.5">
                    <span className="text-base">🏗️</span> Bê Tông Thương Phẩm
                  </div>
                  <p className="text-[11px] text-muted-foreground">Cấp phối mác M200-M350, hao hụt xe bồn 2%, nén mẫu R28 và định mức dầu DO theo TT 12/2021.</p>
                </div>

                <div className="p-3.5 rounded-xl border border-stone-300/80 bg-stone-50/50 dark:bg-stone-950/20 space-y-1.5">
                  <div className="font-bold text-stone-900 dark:text-stone-200 flex items-center gap-1.5">
                    <span className="text-base">⛰️</span> Khai Thác Mỏ Đá
                  </div>
                  <p className="text-[11px] text-muted-foreground">Sản lượng nổ mìn, tỷ lệ nghiền sàng đá dăm 1x2, hệ số nở rời 1.25, thuế tài nguyên & phí BVMT Gia Lai.</p>
                </div>

                <div className="p-3.5 rounded-xl border border-emerald-300/80 bg-emerald-50/50 dark:bg-emerald-950/20 space-y-1.5">
                  <div className="font-bold text-emerald-900 dark:text-emerald-200 flex items-center gap-1.5">
                    <span className="text-base">🚧</span> Thi Công Xây Lắp
                  </div>
                  <p className="text-[11px] text-muted-foreground">Nghiệm thu A-B, trích trước giá vốn TK 335, thuế GTGT vãng lai 1% ngoại tỉnh TT 80 và thuê cừ larsen.</p>
                </div>
              </div>
            </div>
          </section>

          {/* ========================================================================= */}
          {/* MỤC 2: KHÔNG GIAN KIỂM TRA THUẾ - TÂM ĐIỂM CHUYÊN SÂU */}
          {/* ========================================================================= */}
          <section id="tax-audit" className="space-y-5 scroll-mt-24">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border pb-3">
              <div className="flex items-start sm:items-center gap-2.5 min-w-0">
                <div className="p-2 rounded-xl bg-red-100 text-red-800 dark:bg-red-950/60 dark:text-red-300 shrink-0 mt-0.5 sm:mt-0">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
                    2. Bàn Xử Lý Sự Vụ (S01-S24) & Không Gian Kiểm Tra Thuế
                    <Badge className="bg-emerald-600 text-white text-xs">Phát hiện & Xử lý chênh lệch thực tế</Badge>
                  </h2>
                  <p className="text-xs text-muted-foreground">Hệ thống bàn xử lý sự vụ, đối chiếu dòng chứng từ, tự đánh giá, mẫu biểu và pháp lý thực chiến</p>
                </div>
              </div>

              <Button 
                size="sm" 
                onClick={() => navigate('/kiem-tra-thue')}
                className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold h-8 gap-1.5 shrink-0 rounded-lg cursor-pointer"
              >
                <ShieldCheck className="h-3.5 w-3.5" /> Thao Tác Ngay
              </Button>
            </div>

            <p className="text-sm leading-relaxed text-muted-foreground">
              Module <strong>"Chuẩn bị kiểm tra thuế"</strong> là trung tâm tác nghiệp quan trọng nhất của kế toán Kiểu Việt. Mặc định kích hoạt <strong>Bàn xử lý sự vụ thực tế (S01 - S24)</strong> cùng hệ thống điều hướng 2 tầng gồm 11 công cụ chuyên sâu:
            </p>

            {/* MINH HỌA GIAO DIỆN THANH TAB 2 TẦNG */}
            <div className="rounded-2xl border border-border bg-card p-4 sm:p-5 shadow-xs space-y-3">
              <div className="flex items-center justify-between text-xs font-bold text-foreground">
                <div className="flex items-center gap-2">
                  <Sliders className="h-4 w-4 text-purple-600" />
                  <span>Minh họa: Thanh Điều Hướng 2 Tầng Trong Trang Kiểm Tra Thuế</span>
                </div>
                <Badge variant="outline" className="text-[10px]">11 Tabs Chức Năng (Mặc định: Sự Vụ S01-S24)</Badge>
              </div>

              {/* MOCKUP UI FRAME */}
              <div className="rounded-xl border border-border/80 bg-muted/20 p-3 space-y-3">
                {/* Tầng 1 Mockup */}
                <div className="space-y-1.5">
                  <div className="text-[10.5px] font-bold text-blue-700 dark:text-blue-400 uppercase tracking-wide flex items-center gap-1">
                    <Sparkles className="h-3 w-3" /> Tầng 1: Nghiệp Vụ Kiểm Tra & Phòng Thủ Thực Chiến (8 Chuyên Đề)
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-1.5 text-[11px]">
                    <div className="p-2 rounded-lg bg-emerald-600 text-white font-bold flex items-center justify-between shadow-2xs border border-emerald-500/30">
                      <span>⚡ Sự Vụ (Mới)</span>
                      <span className="text-[9px] bg-white/20 px-1 rounded">24 vụ</span>
                    </div>
                    <div className="p-2 rounded-lg bg-card border border-border text-foreground font-medium flex items-center justify-between">
                      <span>📁 15 Bộ Hồ Sơ</span>
                      <span className="text-[9px] text-muted-foreground">15</span>
                    </div>
                    <div className="p-2 rounded-lg bg-card border border-border text-foreground font-medium flex items-center justify-between">
                      <span>📋 Checklist</span>
                      <span className="text-[9px] text-muted-foreground">55</span>
                    </div>
                    <div className="p-2 rounded-lg bg-card border border-border text-foreground font-medium flex items-center justify-between">
                      <span>⚠️ Rủi Ro</span>
                      <span className="text-[9px] text-muted-foreground">15</span>
                    </div>
                    <div className="p-2 rounded-lg bg-card border border-border text-foreground font-medium flex items-center justify-between">
                      <span>⏳ Lộ Trình</span>
                      <span className="text-[9px] text-muted-foreground">30-15-7</span>
                    </div>
                    <div className="p-2 rounded-lg bg-card border border-border text-foreground font-medium flex items-center justify-between">
                      <span>⚖️ Quyền & Kỹ Năng</span>
                      <span className="text-[9px] text-muted-foreground">8+8</span>
                    </div>
                    <div className="p-2 rounded-lg bg-card border border-border text-foreground font-medium flex items-center justify-between">
                      <span>📄 15 Mẫu Giải Trình</span>
                      <span className="text-[9px] text-muted-foreground">15</span>
                    </div>
                    <div className="p-2 rounded-lg bg-card border border-border text-foreground font-medium flex items-center justify-between">
                      <span>🤖 AI Phản Biện</span>
                      <span className="text-[9px] text-muted-foreground">Gemini</span>
                    </div>
                  </div>
                </div>

                {/* Tầng 2 Mockup */}
                <div className="space-y-1.5 pt-2 border-t border-border/40">
                  <div className="text-[10.5px] font-bold text-foreground uppercase tracking-wide flex items-center gap-1">
                    <Scale className="h-3 w-3 text-emerald-600" /> Tầng 2: Bàn Làm Việc Đối Soát Số Liệu, Nhật Ký Đoàn & Thư Viện Luật
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px]">
                    <div className="p-2 rounded-lg bg-card border border-border text-foreground font-medium flex items-center gap-2">
                      <Scale className="h-3.5 w-3.5 text-emerald-600" />
                      <span>Đối Chiếu Sổ & Nhập CSV (12 Rules Reconcile Engine)</span>
                    </div>
                    <div className="p-2 rounded-lg bg-card border border-border text-foreground font-medium flex items-center gap-2">
                      <FolderArchive className="h-3.5 w-3.5 text-blue-600" />
                      <span>📁 Hồ Sơ & Sổ Nhật Ký Đoàn Kiểm Tra</span>
                    </div>
                    <div className="p-2 rounded-lg bg-card border border-border text-foreground font-medium flex items-center gap-2">
                      <BookOpen className="h-3.5 w-3.5 text-purple-600" />
                      <span>Kho Luật Bổ Sung (84 Văn Bản Pháp Luật)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* HƯỚNG DẪN 6 VÙNG CHỨC NĂNG BÀN XỬ LÝ SỰ VỤ S01 - S24 */}
            <div className="p-5 bg-gradient-to-r from-emerald-50/50 via-teal-50/30 to-blue-50/40 dark:from-emerald-950/20 dark:via-teal-950/10 dark:to-blue-950/20 border border-emerald-200/80 dark:border-emerald-800/40 rounded-2xl space-y-3 text-xs">
              <div className="font-bold text-emerald-950 dark:text-emerald-100 flex items-center gap-2 text-sm">
                <Sparkles className="h-4 w-4 text-emerald-600" />
                Cấu Trúc 6 Vùng Nghiệp Vụ Tại Bàn Xử Lý Sự Vụ (S01 - S24):
              </div>
              <p className="text-muted-foreground text-[11px] leading-relaxed">
                Khi nhấp vào bất kỳ sự vụ nào trong 24 kịch bản (ví dụ S01 Giao hàng lệch hóa đơn, S03 Bán dưới giá vốn, S05 Âm kho theo ngày), hệ thống mở ra bàn làm việc 6 vùng khép kín:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 pt-1 text-[11px]">
                <div className="p-3 bg-card border border-border rounded-xl space-y-1">
                  <div className="font-bold text-foreground">1. Dữ kiện nghiệp vụ</div>
                  <p className="text-muted-foreground">Ghi nhận mảng hoạt động, khách hàng/công trình, ngày phát sinh, số hóa đơn và số liệu cụ thể.</p>
                </div>
                <div className="p-3 bg-card border border-border rounded-xl space-y-1">
                  <div className="font-bold text-foreground">2. Câu hỏi phân loại bản chất</div>
                  <p className="text-muted-foreground">Tối đa 3 câu hỏi trắc nghiệm chia 3 nhánh: Giải thích được, Cần sửa chữa, hoặc Chưa rõ cần xác minh thêm.</p>
                </div>
                <div className="p-3 bg-card border border-border rounded-xl space-y-1">
                  <div className="font-bold text-foreground">3. Hồ sơ chứng từ đối chiếu</div>
                  <p className="text-muted-foreground">Danh mục chứng từ gốc cần kiểm tra đối ứng (Hợp đồng, phiếu cân, biên bản nghiệm thu, hóa đơn).</p>
                </div>
                <div className="p-3 bg-card border border-border rounded-xl space-y-1">
                  <div className="font-bold text-foreground">4. Đánh giá nguyên nhân thực tế</div>
                  <p className="text-muted-foreground">Phân biệt nguyên nhân kinh doanh khách quan với sai sót kế toán hoặc vi phạm quy định kê khai.</p>
                </div>
                <div className="p-3 bg-card border border-border rounded-xl space-y-1">
                  <div className="font-bold text-foreground">5. Phương án khắc phục & Giải trình</div>
                  <p className="text-muted-foreground">4 bảng phương án: xác minh thực tế, dự thảo hóa đơn, dự thảo sổ kế toán và tờ khai bổ sung Mẫu 01/KHBS.</p>
                </div>
                <div className="p-3 bg-card border border-border rounded-xl space-y-1">
                  <div className="font-bold text-foreground">6. Kết luận & Người phụ trách</div>
                  <p className="text-muted-foreground">Phân công nhân sự thực hiện, thời hạn hoàn tất và liên kết trực tiếp với mẫu giải trình hành chính.</p>
                </div>
              </div>
            </div>

            {/* SƠ ĐỒ 4 GIAI ĐOẠN CHUẨN BỊ */}
            <div className="p-4 bg-muted/40 border border-border rounded-xl space-y-2 text-xs">
              <h4 className="font-bold text-foreground flex items-center gap-2 text-sm">
                <Clock className="h-4 w-4 text-emerald-600" />
                Lộ Trình 4 Bước Tác Nghiệp Chuẩn Cho Kế Toán Kiểu Việt:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 pt-1">
                <div className="p-2.5 bg-card rounded-lg border border-border space-y-1">
                  <strong className="text-blue-700 dark:text-blue-300">Bước 1: Thiết Lập Ca</strong>
                  <p className="text-muted-foreground text-[11px]">Tạo đợt kiểm tra mới, chọn niên độ thuế cần thanh tra để phân lập hồ sơ.</p>
                </div>
                <div className="p-2.5 bg-card rounded-lg border border-border space-y-1">
                  <strong className="text-emerald-700 dark:text-emerald-300">Bước 2: Gom 15 Bộ Hồ Sơ</strong>
                  <p className="text-muted-foreground text-[11px]">Chọn từng quy trình nghiệp vụ (Gỗ, Đá, Bê tông, Xây lắp), tải bảng CSV đối soát số liệu.</p>
                </div>
                <div className="p-2.5 bg-card rounded-lg border border-border space-y-1">
                  <strong className="text-amber-700 dark:text-amber-300">Bước 3: Rà Soát & Tự Chấm</strong>
                  <p className="text-muted-foreground text-[11px]">Tích chọn 55 checklist và trả lời 15 câu hỏi rủi ro để biết trước điểm nóng thuế.</p>
                </div>
                <div className="p-2.5 bg-card rounded-lg border border-border space-y-1">
                  <strong className="text-purple-700 dark:text-purple-300">Bước 4: Phòng Thủ Sắc Bén</strong>
                  <p className="text-muted-foreground text-[11px]">Lấy mẫu công văn giải trình có hướng dẫn điền số và luyện đối thoại với AI.</p>
                </div>
              </div>
            </div>
          </section>

          {/* ========================================================================= */}
          {/* MỤC 3: 15 BỘ HỒ SƠ THỰC CHIẾN & BẢNG CSV */}
          {/* ========================================================================= */}
          <section id="audit-dossiers" className="space-y-4 scroll-mt-24">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border pb-3">
              <div className="flex items-start sm:items-center gap-2.5 min-w-0">
                <div className="p-2 rounded-xl bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-300 shrink-0 mt-0.5 sm:mt-0">
                  <Building2 className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                    3. Chuẩn Bị 15 Bộ Hồ Sơ Nghiệp Vụ & Bảng Đối Soát CSV
                  </h2>
                  <p className="text-xs text-muted-foreground">Bàn chuẩn bị từng hồ sơ với 60 bước tác nghiệp và xuất bảng tính Excel chuẩn</p>
                </div>
              </div>

              <Button 
                size="sm" 
                variant="outline"
                onClick={() => navigate('/kiem-tra-thue')}
                className="h-8 text-xs gap-1.5 shrink-0 border-blue-300 text-blue-700 dark:text-blue-300 cursor-pointer"
              >
                <Building2 className="h-3.5 w-3.5" /> Mở Bàn Chuẩn Bị
              </Button>
            </div>

            <p className="text-sm leading-relaxed text-muted-foreground">
              Tính năng <strong>"Chuẩn bị từng hồ sơ"</strong> gom 15 chuyên đề kiểm tra thuế thực tế của Kiểu Việt thành các hồ sơ làm việc có người phụ trách, hạn xử lý và danh mục chứng từ bắt buộc phải kẹp:
            </p>

            {/* DANH SÁCH 15 BỘ HỒ SƠ THEO 4 MẢNG */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-4 bg-card border border-border rounded-xl space-y-2">
                <strong className="text-emerald-700 dark:text-emerald-300 text-sm flex items-center gap-1.5">
                  <span>🪵</span> Mảng Nội Thất & Xưởng Mộc (3 Bộ):
                </strong>
                <ul className="space-y-1.5 pl-4 list-disc text-muted-foreground">
                  <li><strong>Gỗ nguyên liệu & Lâm sản:</strong> Bảng kê lâm sản, hóa đơn đầu vào, chứng minh nguồn gốc rừng trồng theo TT 26/2022.</li>
                  <li><strong>Định mức tiêu hao & Hao hụt mùn cưa:</strong> Quyết định định mức của Tổng Giám đốc, tỷ lệ mùn cưa 20.6%, hóa đơn bán phế liệu TK 711.</li>
                  <li><strong>Dở dang cuối kỳ TK 154 xưởng mộc:</strong> Biên bản kiểm kê thực địa 31/12, đánh giá dở dang theo chi phí NVL trực tiếp (VAS 02).</li>
                </ul>
              </div>

              <div className="p-4 bg-card border border-border rounded-xl space-y-2">
                <strong className="text-blue-700 dark:text-blue-300 text-sm flex items-center gap-1.5">
                  <span>🏗️</span> Mảng Bê Tông Thương Phẩm (5 Bộ):
                </strong>
                <ul className="space-y-1.5 pl-4 list-disc text-muted-foreground">
                  <li><strong>Cấp phối bê tông M200-M350:</strong> Thiết kế cấp phối LAS-XD, xi măng PCB40, nhật ký mẻ trộn tự động PLC.</li>
                  <li><strong>Hao hụt vận chuyển xe bồn & bơm cần:</strong> Biên bản đối chiếu hao hụt 2.0% theo Thông tư 12/2021/TT-BXD.</li>
                  <li><strong>Thí nghiệm nén mẫu R28:</strong> Hồ sơ kiểm định phòng LAS-XD, điều kiện tiên quyết để Chủ đầu tư nghiệm thu.</li>
                  <li><strong>Tiêu hao dầu DO xe bồn:</strong> Dữ liệu GPS hộp đen, km lăn bánh, giờ nổ máy quay bồn chống đông kết.</li>
                  <li><strong>Cấu kiện bê tông đúc sẵn:</strong> Thẻ giá thành dầm cống đúc sẵn, kiểm kê thép và khuôn đúc.</li>
                </ul>
              </div>

              <div className="p-4 bg-card border border-border rounded-xl space-y-2">
                <strong className="text-stone-700 dark:text-stone-300 text-sm flex items-center gap-1.5">
                  <span>⛰️</span> Mảng Khai Thác Mỏ Đá (2 Bộ):
                </strong>
                <ul className="space-y-1.5 pl-4 list-disc text-muted-foreground">
                  <li><strong>Khối lượng đá nổ mìn:</strong> Giấy phép nổ mìn, hộ chiếu nổ mìn, nhật ký sử dụng vật liệu nổ công nghiệp.</li>
                  <li><strong>Thuế Tài nguyên & Phí BVMT:</strong> Bảng đối chiếu sản lượng đá nguyên khai qua máy nghiền sàng sang đá 1x2 (hệ số 1.25).</li>
                </ul>
              </div>

              <div className="p-4 bg-card border border-border rounded-xl space-y-2">
                <strong className="text-purple-700 dark:text-purple-300 text-sm flex items-center gap-1.5">
                  <span>🚧</span> Mảng Xây Lắp & Nghiệp Vụ Chung (5 Bộ):
                </strong>
                <ul className="space-y-1.5 pl-4 list-disc text-muted-foreground">
                  <li><strong>Doanh thu 511 & Nghiệm thu A-B:</strong> Chênh lệch giữa Tờ khai 01/GTGT và BCTC do xuất hóa đơn kỳ sau.</li>
                  <li><strong>Trích trước giá vốn TK 335:</strong> Công trình hoàn thành bàn giao chưa kịp nhận hóa đơn nhà thầu phụ.</li>
                  <li><strong>Lãi vay giao dịch liên kết (NĐ 132/2020):</strong> Tính toán trần 30% EBITDA khi vay mượn Giám đốc/cổ đông.</li>
                  <li><strong>Thanh toán ngân hàng trên 20 triệu:</strong> Bù trừ công nợ hai chiều, sao kê BIDV đối chiếu.</li>
                  <li><strong>Nhân công thời vụ & Thuế TNCN:</strong> Bảng lương thời vụ, Cam kết Mẫu 08/CK-TNCN không khấu trừ 10%.</li>
                </ul>
              </div>
            </div>

            {/* TÍNH NĂNG TẢI FILE CSV */}
            <div className="p-4 bg-emerald-50/50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 rounded-xl space-y-2 text-xs">
              <div className="font-bold text-emerald-900 dark:text-emerald-200 flex items-center gap-2">
                <Download className="h-4 w-4 text-emerald-600" />
                Cơ chế tải bảng làm việc CSV đối soát (15 Bảng Excel mẫu):
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Tại mỗi hồ sơ, chỉ cần nhấn nút <strong>"Tải bảng làm việc của hồ sơ"</strong> ➔ Hệ thống tự động tạo và tải về file CSV chứa sẵn các cột đối chiếu chuyên biệt (Ví dụ: Số chứng từ, Ngày hạch toán, Mã sản phẩm, Đơn vị tính, Số lượng sổ sách, Số lượng thực tế, Tỷ lệ hao hụt, Chênh lệch, Căn cứ pháp lý). Kế toán mở trực tiếp trên Microsoft Excel để nhập liệu hoặc dán từ phần mềm MISA sang.
              </p>
            </div>
          </section>

          {/* ========================================================================= */}
          {/* MỤC 4: CHECKLIST 55 MỤC & LỘ TRÌNH 30-15-7 NGÀY */}
          {/* ========================================================================= */}
          <section id="audit-checklist" className="space-y-4 scroll-mt-24">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border pb-3">
              <div className="flex items-start sm:items-center gap-2.5 min-w-0">
                <div className="p-2 rounded-xl bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 shrink-0 mt-0.5 sm:mt-0">
                  <CheckSquare className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                    4. Checklist Hồ Sơ 55 Mục & Lộ Trình 30-15-7 Ngày
                  </h2>
                  <p className="text-xs text-muted-foreground">Rà soát toàn diện từng sắc thuế, có 4 trụ cột nghiệp vụ và lộ trình chuẩn bị theo mốc thời gian</p>
                </div>
              </div>

              <Button 
                size="sm" 
                variant="outline"
                onClick={() => navigate('/kiem-tra-thue')}
                className="h-8 text-xs gap-1.5 shrink-0 border-emerald-300 text-emerald-700 dark:text-emerald-300 cursor-pointer"
              >
                <CheckSquare className="h-3.5 w-3.5" /> Mở Checklist 55 Mục
              </Button>
            </div>

            <p className="text-sm leading-relaxed text-muted-foreground">
              Bao quát <strong>55 mục rà soát cốt tử</strong> chia thành 7 nhóm sắc thuế: Pháp lý & Hành chính doanh nghiệp, Thuế GTGT & Hóa đơn điện tử, Thuế TNDN & Doanh thu - Giá vốn, Tiền lương & Thuế TNCN, Thuế Tài nguyên & Phí BVMT, Giao dịch liên kết, Sổ sách kế toán & Báo cáo tài chính.
            </p>

            {/* MINH HỌA 4 TRỤ CỘT TRONG MỖI MỤC CHECKLIST */}
            <div className="rounded-2xl border border-border bg-card p-4 sm:p-5 shadow-xs space-y-3">
              <div className="font-bold text-xs sm:text-sm text-foreground flex items-center gap-2">
                <Eye className="h-4 w-4 text-blue-600" />
                Cấu Trúc 4 Trụ Cột Chuyên Sâu Trong Từng Mục Checklist (Bấm mở rộng để xem):
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-muted/30 border border-border rounded-xl space-y-1">
                  <strong className="text-blue-700 dark:text-blue-300 flex items-center gap-1.5">
                    <span>📂</span> 1. Danh mục Hồ sơ & Chứng từ gốc:
                  </strong>
                  <p className="text-muted-foreground text-[11px]">Liệt kê chi tiết tên các biên bản, hợp đồng, ủy nhiệm chi, phiếu xuất kho bắt buộc phải kẹp cùng.</p>
                </div>

                <div className="p-3 bg-muted/30 border border-border rounded-xl space-y-1">
                  <strong className="text-purple-700 dark:text-purple-300 flex items-center gap-1.5">
                    <span>📊</span> 2. Rà soát sổ sách & Tài khoản:
                  </strong>
                  <p className="text-muted-foreground text-[11px]">Hướng dẫn đối ứng Nợ/Có trên tài khoản (TK 154, 511, 632, 635, 335, 229) phát hiện sai sót số dư.</p>
                </div>

                <div className="p-3 bg-muted/30 border border-border rounded-xl space-y-1">
                  <strong className="text-red-700 dark:text-red-300 flex items-center gap-1.5">
                    <span>⚠️</span> 3. Điểm nóng hay bóc tách & Mức phạt:
                  </strong>
                  <p className="text-muted-foreground text-[11px]">Cảnh báo trước hành vi đoàn hay bắt bẻ, mức truy thu 20% và phạt chậm nộp 0.03%/ngày theo NĐ 125/2020.</p>
                </div>

                <div className="p-3 bg-muted/30 border border-border rounded-xl space-y-1">
                  <strong className="text-emerald-700 dark:text-emerald-300 flex items-center gap-1.5">
                    <span>🛡️</span> 4. Phương án giải trình & Lập luận:
                  </strong>
                  <p className="text-muted-foreground text-[11px]">Cung cấp sẵn lập luận pháp lý trích dẫn đúng điều khoản thông tư nghị định để bảo vệ.</p>
                </div>
              </div>
            </div>

            {/* LỘ TRÌNH 30-15-7 NGÀY */}
            <div className="p-4 bg-blue-50/50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-xl space-y-2 text-xs">
              <div className="font-bold text-blue-900 dark:text-blue-200 flex items-center gap-2">
                <Clock className="h-4 w-4 text-blue-600" />
                Lộ Trình 3 Mốc Thời Gian Chuẩn Bị (Tab "3. Lộ Trình 30-15-7 Ngày"):
              </div>
              <div className="space-y-1 text-muted-foreground pl-2 leading-relaxed">
                <div>• <strong>Giai đoạn 1 (Trước 30 ngày):</strong> Thu thập, rà soát hóa đơn, hợp đồng thầu phụ, in sẵn phiếu cân và kiểm tra tính hợp pháp mã số thuế các nhà cung cấp.</div>
                <div>• <strong>Giai đoạn 2 (Trước 15 ngày):</strong> Đối chiếu số dư tài khoản kế toán, khớp doanh thu 511 với tờ khai GTGT, kiểm tra định mức xe bồn và lập biên bản kiểm kê dở dang 154.</div>
                <div>• <strong>Giai đoạn 3 (Trước 7 ngày):</strong> Đóng tập hồ sơ, photo công chứng chứng từ mật, chuẩn bị mẫu công văn giải trình và phân công lễ tân, nhân sự tiếp đoàn.</div>
              </div>
            </div>
          </section>

          {/* ========================================================================= */}
          {/* MỤC 5: 15 MẪU GIẢI TRÌNH & 15 KỊCH BẢN ĐỐI THOẠI */}
          {/* ========================================================================= */}
          <section id="audit-defense" className="space-y-4 scroll-mt-24">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border pb-3">
              <div className="flex items-start sm:items-center gap-2.5 min-w-0">
                <div className="p-2 rounded-xl bg-purple-100 text-purple-800 dark:bg-purple-950/60 dark:text-purple-300 shrink-0 mt-0.5 sm:mt-0">
                  <FileSpreadsheet className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                    5. 15 Mẫu Công Văn Giải Trình & 15 Kịch Bản Đối Thoại
                  </h2>
                  <p className="text-xs text-muted-foreground">Chuẩn thể thức NĐ 30/2020, có hướng dẫn điền số liệu mẫu trong ngoặc vuông và lời thoại phản biện</p>
                </div>
              </div>

              <Button 
                size="sm" 
                variant="outline"
                onClick={() => navigate('/kiem-tra-thue')}
                className="h-8 text-xs gap-1.5 shrink-0 border-purple-300 text-purple-700 dark:text-purple-300 cursor-pointer"
              >
                <FileSpreadsheet className="h-3.5 w-3.5" /> Xem 15 Mẫu Biểu
              </Button>
            </div>

            <p className="text-sm leading-relaxed text-muted-foreground">
              Giải quyết nỗi lo lớn nhất của kế toán: <em>"Không biết viết công văn giải trình thế nào cho đúng chuẩn hành chính và khi đoàn kiểm tra đòi bóc chi phí thì phải ăn nói ra sao?"</em>
            </p>

            {/* MINH HỌA MẪU CÔNG VĂN CÓ HƯỚNG DẪN ĐIỀN */}
            <div className="rounded-2xl border border-border bg-card p-4 sm:p-5 shadow-xs space-y-3">
              <div className="flex items-center justify-between text-xs font-bold text-foreground">
                <div className="flex items-center gap-2">
                  <Copy className="h-4 w-4 text-emerald-600" />
                  <span>Cơ Chế Điền Số Liệu Mẫu Trong Ngoặc Vuông (Không Fake Dữ Liệu):</span>
                </div>
                <Badge className="bg-emerald-600 text-white text-[10px]">1-Click Sao Chép</Badge>
              </div>

              <div className="p-4 bg-muted/40 rounded-xl border border-border font-mono text-xs leading-relaxed space-y-2">
                <div className="text-muted-foreground font-bold">Ví dụ trích đoạn Mẫu 01/GT-DT:</div>
                <div className="p-3 bg-card rounded-lg border border-border/80 text-[11.5px] whitespace-pre-wrap font-sans">
                  {'1. Doanh thu kê khai trên Tờ khai thuế GTGT (Mẫu 01/GTGT):\n'}
                  {'   - Doanh thu chịu thuế 8%: [Điền Doanh thu chịu thuế 8% trên Chỉ tiêu [29] Tờ khai 01/GTGT cả năm (Ví dụ: 18.520.000.000 đ)]\n'}
                  {'   - Doanh thu chịu thuế 10%: [Điền Doanh thu chịu thuế 10% trên Chỉ tiêu [32] Tờ khai 01/GTGT cả năm (Ví dụ: 24.360.000.000 đ)]\n'}
                  {'   - Tổng Doanh thu trên 01/GTGT: [Điền Tổng Doanh thu Chỉ tiêu [34] (Ví dụ: 42.880.000.000 đ)]\n\n'}
                  {'2. Doanh thu bán hàng trên BCTC (Sổ cái TK 511):\n'}
                  {'   - Tổng doanh thu phát sinh trên Sổ cái TK 511: [Điền số liệu đối chiếu từ Sổ cái 511, ví dụ: 44.380.000.000 đ]\n'}
                  {'   - Chênh lệch cần giải trình: [Điền Số tiền chênh lệch = TK 511 - Doanh thu 01/GTGT (Ví dụ: +1.500.000.000 đ)]'}
                </div>
                <p className="text-[11px] text-emerald-800 dark:text-emerald-300 font-sans italic">
                  💡 Kế toán chỉ cần nhấn nút "Sao chép văn bản", dán vào Microsoft Word và thay thế các phần trong ngoặc vuông bằng số liệu sổ sách thực tế của doanh nghiệp!
                </p>
              </div>
            </div>

            {/* 15 KỊCH BẢN ĐỐI THOẠI TRONG TAB AI */}
            <div className="p-4 bg-purple-50/50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800 rounded-xl space-y-2 text-xs">
              <div className="font-bold text-purple-900 dark:text-purple-200 flex items-center gap-2">
                <Bot className="h-4 w-4 text-purple-600" />
                15 Kịch Bản Đối Thoại Phản Biện Thực Chiến (Tab "6. Trợ Lý AI Phản Biện"):
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Mỗi kịch bản mô phỏng chính xác một tình huống đoàn kiểm tra đe dọa bóc tách chi phí tiền tỷ (hao hụt gỗ, hao hụt bê tông, lãi vay 30% EBITDA, cấn trừ công nợ, nợ khó đòi 229...), cung cấp <strong>Nguy cơ bị phạt</strong>, <strong>Căn cứ điều luật</strong>, <strong>Hồ sơ cần chứng minh</strong> và <strong>Lời thoại đối đáp nguyên văn</strong> để kế toán tự tin bảo vệ quyền lợi doanh nghiệp.
              </p>
            </div>
          </section>

          {/* ========================================================================= */}
          {/* MỤC 6: 8 QUYỀN PHÁP LÝ & 8 KỸ NĂNG TIẾP ĐOÀN */}
          {/* ========================================================================= */}
          <section id="audit-rights" className="space-y-4 scroll-mt-24">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border pb-3">
              <div className="flex items-start sm:items-center gap-2.5 min-w-0">
                <div className="p-2 rounded-xl bg-purple-100 text-purple-800 dark:bg-purple-950/60 dark:text-purple-300 shrink-0 mt-0.5 sm:mt-0">
                  <Scale className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                    6. 8 Quyền Pháp Lý Cốt Tử & 8 Kỹ Năng Tiếp Đoàn
                  </h2>
                  <p className="text-xs text-muted-foreground">Luật Quản lý thuế 38/2019/QH14 Điều 16, 110, 111, 112 và quy trình 4 bước bàn giao ca</p>
                </div>
              </div>

              <Button 
                size="sm" 
                variant="outline"
                onClick={() => navigate('/kiem-tra-thue')}
                className="h-8 text-xs gap-1.5 shrink-0 border-purple-300 text-purple-700 dark:text-purple-300 cursor-pointer"
              >
                <Scale className="h-3.5 w-3.5" /> Mở Quyền & Kỹ Năng
              </Button>
            </div>

            <p className="text-sm leading-relaxed text-muted-foreground">
              Tab <strong>"4. Quyền DN & Kỹ Năng Tiếp Đoàn"</strong> trang bị cho nhân sự Kiểu Việt chiếc áo giáp pháp lý vững chắc để không bị đoàn kiểm tra lấn lướt hoặc ép ký biên bản bất lợi:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-4 bg-emerald-50/40 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800 rounded-xl space-y-2">
                <div className="font-bold text-sm text-emerald-900 dark:text-emerald-200 flex items-center justify-between">
                  <span>8 Quyền Pháp Lý Cốt Tử Của DN:</span>
                  <Badge className="bg-emerald-600 text-white text-[9px]">Luật 38/2019</Badge>
                </div>
                <ul className="space-y-1.5 text-muted-foreground pl-3 list-disc">
                  <li><strong>Quyền nhận quyết định trước 03 ngày:</strong> Không được thanh tra đột xuất khi chưa có quyết định hợp pháp.</li>
                  <li><strong>Quyền từ chối cung cấp ngoài phạm vi:</strong> Chỉ cung cấp hồ sơ thuộc niên độ và nội dung ghi trong quyết định.</li>
                  <li><strong>Quyền giải trình trước khi ký biên bản:</strong> Có thời hạn từ 5 - 10 ngày để nộp văn bản bảo vệ số liệu.</li>
                  <li><strong>Quyền bảo lưu ý kiến trong biên bản:</strong> Ghi rõ "Doanh nghiệp chưa đồng ý với điểm bóc tách số..." trước khi ký.</li>
                  <li><strong>Quyền khiếu nại & khởi kiện hành chính:</strong> Theo Luật Khiếu nại và Luật Tố tụng hành chính.</li>
                </ul>
              </div>

              <div className="p-4 bg-blue-50/40 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-xl space-y-2">
                <div className="font-bold text-sm text-blue-900 dark:text-blue-200 flex items-center justify-between">
                  <span>8 Kỹ Năng Thực Chiến Tiếp Đoàn:</span>
                  <Badge className="bg-blue-600 text-white text-[9px]">Kinh nghiệm thực tế</Badge>
                </div>
                <ul className="space-y-1.5 text-muted-foreground pl-3 list-disc">
                  <li><strong>Chiến thuật phân vai:</strong> Chỉ duy nhất Kế toán trưởng được phát ngôn chính thức; nhân viên không nói linh tinh.</li>
                  <li><strong>Giao hồ sơ phải có biên nhận:</strong> 100% hồ sơ nộp cho đoàn phải ký Sổ giao nhận tài liệu có đối chiếu số tờ.</li>
                  <li><strong>Chỉ cung cấp bản photo:</strong> Tuyệt đối giữ lại chứng từ gốc tại phòng kế toán, chỉ cho đối chiếu tại chỗ.</li>
                  <li><strong>Quy tắc trả lời sau:</strong> Gặp câu hỏi hóc búa, kế toán xin phép: <em>"Dạ em xin phép rà soát lại sổ sách và trả lời bằng văn bản vào sáng mai"</em>.</li>
                  <li><strong>Xử lý khi bị ép ký:</strong> Giữ bình tĩnh, tham vấn ý kiến Ban Giám đốc và thực hiện quyền bảo lưu ý kiến.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* ========================================================================= */}
          {/* MỤC 7: ĐỐI CHIẾU SỔ SÁCH & CSV */}
          {/* ========================================================================= */}
          <section id="audit-reconcile" className="space-y-4 scroll-mt-24">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border pb-3">
              <div className="flex items-start sm:items-center gap-2.5 min-w-0">
                <div className="p-2 rounded-xl bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 shrink-0 mt-0.5 sm:mt-0">
                  <ArrowRightLeft className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                    7. Đối Chiếu Sổ Sách (TK 511, 154, 635, 335, 229) & Nhập CSV
                  </h2>
                  <p className="text-xs text-muted-foreground">Bàn làm việc tính toán chênh lệch tự động và xuất báo cáo rà soát số liệu</p>
                </div>
              </div>

              <Button 
                size="sm" 
                variant="outline"
                onClick={() => navigate('/kiem-tra-thue')}
                className="h-8 text-xs gap-1.5 shrink-0 border-emerald-300 text-emerald-700 dark:text-emerald-300 cursor-pointer"
              >
                <ArrowRightLeft className="h-3.5 w-3.5" /> Mở Bàn Đối Chiếu
              </Button>
            </div>

            <p className="text-sm leading-relaxed text-muted-foreground">
              Tab <strong>"Đối chiếu sổ và nhập CSV"</strong> cung cấp các công cụ tính toán tự động các chỉ số tài chính trọng yếu:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3.5 bg-card border border-border rounded-xl space-y-1.5">
                <strong className="text-emerald-700 dark:text-emerald-300 flex items-center gap-1.5">
                  <Scale className="h-4 w-4" /> Đối Chiếu Doanh Thu 511
                </strong>
                <p className="text-[11px] text-muted-foreground">So sánh tự động giữa Doanh thu trên Tờ khai thuế GTGT và Doanh thu trên Báo cáo tài chính, phát hiện chênh lệch do nghiệm thu công trình xây lắp.</p>
              </div>

              <div className="p-3.5 bg-card border border-border rounded-xl space-y-1.5">
                <strong className="text-blue-700 dark:text-blue-300 flex items-center gap-1.5">
                  <Calculator className="h-4 w-4" /> Tính Toán Trần 30% EBITDA
                </strong>
                <p className="text-[11px] text-muted-foreground">Nhập Lợi nhuận thuần, Chi phí lãi vay và Khấu hao TSCĐ ➔ Tự động tính ra mức trần chi phí lãi vay được trừ theo Nghị định 132/2020.</p>
              </div>

              <div className="p-3.5 bg-card border border-border rounded-xl space-y-1.5">
                <strong className="text-purple-700 dark:text-purple-300 flex items-center gap-1.5">
                  <FolderArchive className="h-4 w-4" /> Sổ Nhật Ký Đoàn Kiểm Tra
                </strong>
                <p className="text-[11px] text-muted-foreground">Lưu trữ trên IndexedDB toàn bộ biên bản làm việc hàng ngày, danh mục yêu cầu tài liệu của đoàn và tình trạng đã nộp/chưa nộp.</p>
              </div>
            </div>
          </section>

          {/* ========================================================================= */}
          {/* MỤC 8: THƯ VIỆN 55 VĂN BẢN & TẢI PDF GOOGLE DRIVE */}
          {/* ========================================================================= */}
          <section id="search-library" className="space-y-4 scroll-mt-24">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border pb-3">
              <div className="flex items-start sm:items-center gap-2.5 min-w-0">
                <div className="p-2 rounded-xl bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-300 shrink-0 mt-0.5 sm:mt-0">
                  <Layers className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                    8. Thư Viện 55 Văn Bản & Cơ Chế Tải PDF Google Drive
                  </h2>
                  <p className="text-xs text-muted-foreground">Tra cứu toàn văn chuẩn, phân loại 5 chuyên đề và tải file PDF chính thức tốc độ cao</p>
                </div>
              </div>

              <Button 
                size="sm" 
                variant="outline" 
                onClick={() => navigate('/thu-vien')}
                className="h-8 text-xs gap-1.5 shrink-0 border-blue-300 text-blue-700 dark:text-blue-300 cursor-pointer"
              >
                <Layers className="h-3.5 w-3.5" /> Mở Thư Viện
              </Button>
            </div>

            <p className="text-sm leading-relaxed text-muted-foreground">
              Kho thư viện bao phủ <strong>55 văn bản pháp luật nền tảng</strong> (và 29 văn bản chuyên ngành bổ sung trong Kho luật thuế) thuộc 5 nhóm chuyên đề:
            </p>

            <div className="p-4 bg-card border border-border rounded-xl space-y-2.5 text-xs">
              <h4 className="font-bold text-foreground text-sm flex items-center gap-2">
                <Download className="h-4 w-4 text-emerald-600" />
                3 Nút Tải Văn Bản Tại Trang Chi Tiết (Không Qua Web Thương Mại):
              </h4>
              <div className="space-y-2 pl-2">
                <div>
                  <strong className="text-blue-700 dark:text-blue-300">• Tải PDF & Phụ lục (Google Drive Kiểu Việt):</strong>
                  <span className="text-muted-foreground ml-1">Tải file PDF chính thức được lưu trữ an toàn trên Google Drive nội bộ Kiểu Việt. Mở được trên mọi máy tính và điện thoại.</span>
                </div>
                <div>
                  <strong className="text-emerald-700 dark:text-emerald-300">• Tải File Biểu Mẫu (hethongphapluat.com):</strong>
                  <span className="text-muted-foreground ml-1">Mở liên kết tải trực tiếp các phụ lục Word/Excel từ Hệ Thống Pháp Luật Việt Nam (hoàn toàn miễn phí, cấm dùng thuvienphapluat.vn).</span>
                </div>
                <div>
                  <strong className="text-purple-700 dark:text-purple-300">• Hỏi AI Về Văn Bản Này:</strong>
                  <span className="text-muted-foreground ml-1">Tự động chuyển tiếp văn bản sang Trợ lý AI để tóm tắt các điểm nóng cần lưu ý khi hạch toán.</span>
                </div>
              </div>
            </div>
          </section>

          {/* ========================================================================= */}
          {/* MỤC 9: TRÌNH ĐỌC LUẬT THÔNG MINH */}
          {/* ========================================================================= */}
          <section id="smart-toc" className="space-y-4 scroll-mt-24">
            <div className="flex items-center gap-2.5 border-b border-border pb-3">
              <div className="p-2 rounded-xl bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300">
                <FileText className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight">9. Trình Đọc Luật Thông Minh & Sticky TOC Cây Điều Khoản</h2>
                <p className="text-xs text-muted-foreground">Đọc nhanh các thông tư, nghị định dài hàng trăm trang mà không mỏi mắt</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-4 bg-card border border-border rounded-xl space-y-2">
                <div className="font-bold text-sm text-foreground flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  Mục Lục Cây Điều Khoản (Sticky TOC)
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  • Ghim cố định ở cột phải màn hình Desktop.
                  <br />• Tự động bóc tách từng <strong>Chương</strong> và từng <strong>Điều khoản</strong>.
                  <br />• Có ô tìm kiếm: gõ <em>"Điều 15"</em> hoặc <em>"khấu trừ"</em> để lọc ngay tức thì.
                  <br />• Nhấp vào điều nào ➔ Màn hình trượt mượt mà đến đúng điều đó và nhấp nháy nhận diện.
                  <br />• Trên điện thoại: Có nút nổi <strong>"Mục lục"</strong> mở ngăn kéo xem bất kỳ lúc nào.
                </p>
              </div>

              <div className="p-4 bg-card border border-border rounded-xl space-y-2">
                <div className="font-bold text-sm text-foreground flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  Thanh Công Cụ Đọc Luật Đa Cỡ Chữ
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  • <strong>Bộ chỉnh cỡ chữ:</strong> Nút bấm tiện lợi <code className="px-1.5 py-0.5 rounded bg-muted font-mono font-bold text-foreground">A- / 16px / A+</code> phóng to thu nhỏ văn bản từ 13px đến 24px, lưu tự động vào máy để đọc luật lâu không mỏi mắt.
                  <br />• <strong>Sao chép trích dẫn:</strong> 1-click để copy ngay số hiệu và điều khoản chuẩn, thuận tiện dán vào văn bản giải trình.
                </p>
              </div>
            </div>
          </section>

          {/* ========================================================================= */}
          {/* MỤC 10: TRUNG TÂM ĐỐI CHIẾU ĐIỂM MỚI */}
          {/* ========================================================================= */}
          <section id="legal-diff" className="space-y-4 scroll-mt-24">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border pb-3">
              <div className="flex items-start sm:items-center gap-2.5 min-w-0">
                <div className="p-2 rounded-xl bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300 shrink-0 mt-0.5 sm:mt-0">
                  <RefreshCw className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                    10. Trung Tâm Đối Chiếu Điểm Mới (Toàn Bộ 55 Văn Bản)
                  </h2>
                  <p className="text-xs text-muted-foreground">So sánh 2 cột Cũ vs Mới và phân tích tác động rủi ro tài chính của Kiểu Việt</p>
                </div>
              </div>

              <Button 
                size="sm" 
                variant="outline" 
                onClick={() => navigate('/so-sanh')}
                className="h-8 text-xs gap-1.5 shrink-0 border-amber-300 text-amber-700 dark:text-amber-300 cursor-pointer"
              >
                <ArrowRightLeft className="h-3.5 w-3.5" /> Mở Trung Tâm So Sánh
              </Button>
            </div>

            <p className="text-sm leading-relaxed text-muted-foreground">
              Bao phủ trọn vẹn <strong>100% cả 55 văn bản pháp luật</strong>, đối chiếu 2 cột song song kèm phân tích tác động thực tế cho Công ty Kiểu Việt:
            </p>

            <div className="p-4 bg-card border border-border rounded-xl space-y-3 text-xs">
              <div className="font-bold text-foreground text-sm">Một số cặp đối chiếu điểm mới trọng tâm:</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3 bg-muted/40 rounded-lg space-y-1">
                  <strong className="text-emerald-700 dark:text-emerald-400">• TT 99/2025 vs TT 200/2014:</strong>
                  <p className="text-muted-foreground">Bỏ các TK chi phí trung gian (621, 622, 623, 627), bỏ tài khoản loại 0, hạch toán thẳng vào TK 154.</p>
                </div>
                <div className="p-3 bg-muted/40 rounded-lg space-y-1">
                  <strong className="text-emerald-700 dark:text-emerald-400">• Luật Thuế TNCN 109/2025 vs Luật cũ:</strong>
                  <p className="text-muted-foreground">Tăng giảm trừ gia cảnh lên 15.5tr/6.2tr, rút gọn biểu thuế lũy tiến từ 7 bậc thành 5 bậc.</p>
                </div>
                <div className="p-3 bg-muted/40 rounded-lg space-y-1">
                  <strong className="text-emerald-700 dark:text-emerald-400">• Nghị định 73/2024 vs NĐ 24/2023:</strong>
                  <p className="text-muted-foreground">Lương cơ sở 2.34tr tăng trần đóng BHXH/BHYT lên 46.8 triệu đồng/tháng.</p>
                </div>
                <div className="p-3 bg-muted/40 rounded-lg space-y-1">
                  <strong className="text-emerald-700 dark:text-emerald-400">• Nghị định 50/2021 vs NĐ 37/2015:</strong>
                  <p className="text-muted-foreground">Tạm ứng hợp đồng xây lắp lên đến 50% và nguyên tắc điều chỉnh trượt giá hợp đồng trọn gói.</p>
                </div>
              </div>
            </div>
          </section>

          {/* ========================================================================= */}
          {/* MỤC 11: BỘ TIỆN ÍCH TÍNH TOÁN */}
          {/* ========================================================================= */}
          <section id="calculators" className="space-y-4 scroll-mt-24">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border pb-3">
              <div className="flex items-start sm:items-center gap-2.5 min-w-0">
                <div className="p-2 rounded-xl bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 shrink-0 mt-0.5 sm:mt-0">
                  <Calculator className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                    11. Bộ Tiện Ích Kế Toán Thực Chiến
                  </h2>
                  <p className="text-xs text-muted-foreground">Tính toán tự động thuế TNCN, lương Gross sang Net và tiền phạt chậm nộp</p>
                </div>
              </div>

              <Button 
                size="sm" 
                variant="outline" 
                onClick={() => navigate('/tien-ich')}
                className="h-8 text-xs gap-1.5 shrink-0 border-emerald-300 text-emerald-700 dark:text-emerald-300 cursor-pointer"
              >
                <Calculator className="h-3.5 w-3.5" /> Mở Bộ Tiện Ích
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-4 bg-emerald-50/40 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800 rounded-xl space-y-2">
                <strong className="text-sm text-emerald-900 dark:text-emerald-200">1. Máy Tính Thuế TNCN 2026</strong>
                <p className="text-muted-foreground leading-relaxed text-[11px]">
                  Nhập thu nhập và người phụ thuộc ➔ Tính thuế phải nộp và so sánh số tiền tiết kiệm được giữa luật cũ và luật mới 2026.
                </p>
              </div>

              <div className="p-4 bg-blue-50/40 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-xl space-y-2">
                <strong className="text-sm text-blue-900 dark:text-blue-200">2. Lương Gross ➔ Net & DN Chịu</strong>
                <p className="text-muted-foreground leading-relaxed text-[11px]">
                  Tự động áp trần BHXH 46.8tr (lương cơ sở 2.34tr). Tách rõ phần NLĐ đóng (10.5%) và phần Kiểu Việt chịu (23.5%).
                </p>
              </div>

              <div className="p-4 bg-red-50/40 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-xl space-y-2">
                <strong className="text-sm text-red-900 dark:text-red-200">3. Tiền Phạt Chậm Nộp Thuế</strong>
                <p className="text-muted-foreground leading-relaxed text-[11px]">
                  Công thức: <code className="font-bold">Nợ thuế × 0.03% × Số ngày</code> theo Luật 38/2019. Cảnh báo: Tiền phạt không được trừ thuế TNDN.
                </p>
              </div>
            </div>
          </section>

          {/* ========================================================================= */}
          {/* MỤC 12: HỆ THỐNG TÀI KHOẢN TT99 */}
          {/* ========================================================================= */}
          <section id="chart-accounts" className="space-y-4 scroll-mt-24">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border pb-3">
              <div className="flex items-start sm:items-center gap-2.5 min-w-0">
                <div className="p-2 rounded-xl bg-purple-100 text-purple-800 dark:bg-purple-950/60 dark:text-purple-300 shrink-0 mt-0.5 sm:mt-0">
                  <BookOpen className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                    12. Hệ Thống Tài Khoản Kế Toán TT 99/2025/TT-BTC
                  </h2>
                  <p className="text-xs text-muted-foreground">Danh mục hệ thống tài khoản mới nhất thay thế hoàn toàn TT 200/2014</p>
                </div>
              </div>

              <Button 
                size="sm" 
                variant="outline" 
                onClick={() => navigate('/tai-khoan')}
                className="h-8 text-xs gap-1.5 shrink-0 border-purple-300 text-purple-700 dark:text-purple-300 cursor-pointer"
              >
                <BookOpen className="h-3.5 w-3.5" /> Mở Hệ Thống TK
              </Button>
            </div>

            <div className="p-4 bg-card border border-border rounded-xl space-y-2 text-xs">
              <p className="text-muted-foreground leading-relaxed">
                • <strong>Tra cứu siêu tốc:</strong> Tìm nhanh theo mã tài khoản (111, 112, 154, 331, 333, 632, 642...) hoặc tên gọi.
                <br />• <strong>Phân loại 9 nhóm tài khoản:</strong> Tài sản ngắn hạn, Tài sản dài hạn, Nợ phải trả, Vốn CSH, Doanh thu, Chi phí sản xuất, Chi phí quản lý, Thu nhập khác và Xác định KQKD.
                <br />• <strong>Ghi chú chuyển đổi:</strong> Chỉ rõ tài khoản nào giữ nguyên, tài khoản nào đổi tên và tài khoản nào được bãi bỏ.
              </p>
            </div>
          </section>

          {/* ========================================================================= */}
          {/* MỤC 13: TRỢ LÝ AI PHÁP LÝ */}
          {/* ========================================================================= */}
          <section id="ai-assistant" className="space-y-4 scroll-mt-24">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border pb-3">
              <div className="flex items-start sm:items-center gap-2.5 min-w-0">
                <div className="p-2 rounded-xl bg-indigo-100 text-indigo-800 dark:bg-indigo-950/60 dark:text-indigo-300 shrink-0 mt-0.5 sm:mt-0">
                  <MessageSquareText className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                    13. Trợ Lý AI Pháp Lý & Bóc Tách Ảnh/PDF Hóa Đơn
                  </h2>
                  <p className="text-xs text-muted-foreground">Hỏi đáp chính sách thuế, nhận diện hình ảnh văn bản và tư vấn nghiệp vụ</p>
                </div>
              </div>

              <Button 
                size="sm" 
                variant="outline" 
                onClick={() => navigate('/hoi-dap-ai')}
                className="h-8 text-xs gap-1.5 shrink-0 border-indigo-300 text-indigo-700 dark:text-indigo-300 cursor-pointer"
              >
                <MessageSquareText className="h-3.5 w-3.5" /> Mở Trợ Lý AI
              </Button>
            </div>

            <div className="p-4 bg-muted/40 rounded-xl space-y-2 border border-border text-xs">
              <h4 className="font-bold text-foreground">3 Phương thức tương tác thông minh với AI:</h4>
              <ul className="space-y-1.5 pl-3 list-disc text-muted-foreground">
                <li><strong>Hỏi đáp văn bản tự nhiên:</strong> Gõ câu hỏi nghiệp vụ ➔ AI trích dẫn đúng số hiệu, điều khoản luật hiện hành.</li>
                <li><strong>Dán ảnh chụp hóa đơn (Ctrl + V):</strong> Chụp một đoạn công văn, hóa đơn hoặc biên bản nghiệm thu dán thẳng vào khung chat ➔ AI tự OCR bóc tách chữ và cảnh báo rủi ro thuế.</li>
                <li><strong>Tải file PDF:</strong> Kéo thả file PDF văn bản để AI đọc và tóm tắt nội dung chính.</li>
              </ul>
            </div>
          </section>

          {/* ========================================================================= */}
          {/* MỤC 14: SỔ TAY KẾ TOÁN */}
          {/* ========================================================================= */}
          <section id="notes-handbook" className="space-y-4 scroll-mt-24">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border pb-3">
              <div className="flex items-start sm:items-center gap-2.5 min-w-0">
                <div className="p-2 rounded-xl bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300 shrink-0 mt-0.5 sm:mt-0">
                  <Edit3 className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                    14. Bôi Đen Trích Dẫn & Sổ Tay Kế Toán Cá Nhân
                  </h2>
                  <p className="text-xs text-muted-foreground">Ghi chú điều khoản quan trọng và lưu trữ kiến thức nghiệp vụ</p>
                </div>
              </div>

              <Button 
                size="sm" 
                variant="outline" 
                onClick={() => navigate('/so-tay')}
                className="h-8 text-xs gap-1.5 shrink-0 border-amber-300 text-amber-700 dark:text-amber-300 cursor-pointer"
              >
                <Edit3 className="h-3.5 w-3.5" /> Mở Sổ Tay
              </Button>
            </div>

            <div className="p-4 bg-card border border-border rounded-xl space-y-2 text-xs">
              <p className="text-muted-foreground leading-relaxed">
                1. Khi đang đọc bất kỳ văn bản nào, dùng chuột <strong>bôi đen đoạn văn bản quan trọng</strong> (từ 10 ký tự trở lên).
                <br />2. Một nút nổi <strong>"Lưu Ghi chú"</strong> sẽ tự động xuất hiện ngay phía trên con trỏ chuột.
                <br />3. Nhập ghi chú nghiệp vụ riêng (ví dụ: <em>"Áp dụng cho gói thầu Bê tông đường tránh Pleiku"</em>) và nhấn Lưu.
                <br />4. Toàn bộ trích dẫn và ghi chú sẽ được gom tại mục <strong>"Sổ tay Kế toán"</strong> để xem lại bất kỳ lúc nào.
              </p>
            </div>
          </section>

          {/* ========================================================================= */}
          {/* MỤC 15: FAQS & XỬ LÝ SỰ CỐ */}
          {/* ========================================================================= */}
          <section id="faqs" className="space-y-4 scroll-mt-24">
            <div className="flex items-center gap-2.5 border-b border-border pb-3">
              <div className="p-2 rounded-xl bg-muted text-foreground">
                <HelpCircle className="h-5 w-5 text-emerald-600" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight">15. Câu Hỏi Thường Gặp & Khắc Phục Lỗi (FAQs)</h2>
                <p className="text-xs text-muted-foreground">Giải đáp các thắc mắc nghiệp vụ và kỹ thuật khi vận hành hệ thống</p>
              </div>
            </div>

            <div className="space-y-3 text-xs">
              {[
                {
                  q: '1. Dữ liệu chuẩn bị hồ sơ kiểm tra thuế lưu ở đâu? Có bị mất khi tắt trình duyệt không?',
                  a: 'Toàn bộ sự vụ, 15 bộ hồ sơ, phân công người phụ trách, dòng đối chiếu và nhật ký đoàn được lưu trữ cục bộ trong cơ sở dữ liệu IndexedDB (Dexie) trên trình duyệt của máy bạn. Dữ liệu vẫn được giữ khi tải lại trang (F5) hoặc tắt máy. Tuy nhiên, nếu xóa lịch sử/dữ liệu duyệt web hoặc đổi máy tính, dữ liệu cục bộ có thể bị mất. Bạn CẦN chủ động bấm "Sao lưu dữ liệu" (JSON) định kỳ để bảo toàn hồ sơ an toàn.'
                },
                {
                  q: '2. Khi tải file CSV về máy, tại sao mở bằng Excel bị lỗi font tiếng Việt?',
                  a: 'Hệ thống đã tự động gắn mã hóa UTF-8 with BOM chuẩn quốc tế vào từng file CSV. Khi mở trên Microsoft Excel từ 2016 trở lên hoặc Google Sheets, toàn bộ ký tự tiếng Việt có dấu sẽ hiển thị sắc nét 100%, không bị vỡ font.'
                },
                {
                  q: '3. Tôi có thể in toàn bộ cẩm nang này hoặc lưu thành file PDF để phát cho nhân sự không?',
                  a: 'Rất dễ dàng! Bạn chỉ cần nhấn tổ hợp phím Ctrl + P (hoặc bấm nút "In Cẩm Nang" ở đầu trang). Hệ thống đã tối ưu sẵn mã CSS in ấn chuyên biệt: tự động ẩn toàn bộ menu điều hướng, canh lề chuẩn A4 và chia trang mạch lạc để bạn in ra giấy hoặc chọn "Save as PDF" lưu về máy.'
                },
                {
                  q: '4. Khi đoàn kiểm tra yêu cầu nộp hồ sơ, tôi nên xuất dữ liệu thế nào?',
                  a: 'Vào Tab "📁 Hồ Sơ & Sổ Đoàn Kiểm Tra", nhấn "In Biên Bản Bàn Giao". Hệ thống sẽ tạo ra bản in mẫu chuẩn có sẵn Quốc hiệu, Tiêu ngữ, Bảng thống kê số lượng chứng từ, số tờ và 2 vị trí ký nhận rõ ràng giữa Trưởng đoàn kiểm tra và Kế toán trưởng Kiểu Việt.'
                },
                {
                  q: '5. Làm thế nào để sử dụng Trợ lý AI khi hệ thống báo "Chưa cấu hình API key"?',
                  a: 'Vào mục "Cài đặt" trên thanh menu bên trái, dán mã khóa Gemini API key của công ty vào ô "Google Gemini API Key" và nhấn Lưu. Toàn bộ các tính năng hỏi đáp thông minh và phân tích tình huống sẽ được kích hoạt ngay lập tức.'
                }
              ].map((faq, idx) => (
                <div key={idx} className="border border-border/80 rounded-xl p-4 bg-card shadow-xs transition-all">
                  <h4 className="font-bold text-sm text-foreground mb-1.5 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
                    {faq.q}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed pl-3.5 border-l-2 border-emerald-300 dark:border-emerald-800">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ========================================================================= */}
          {/* KHUNG HÀNH ĐỘNG CUỐI TRANG */}
          {/* ========================================================================= */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/40 dark:to-teal-950/30 border border-emerald-200 dark:border-emerald-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
            <div>
              <h4 className="font-bold text-base text-foreground flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-emerald-600" />
                Sẵn Sàng Làm Chủ Nghiệp Vụ Kế Toán Kiểu Việt?
              </h4>
              <p className="text-xs text-muted-foreground mt-0.5">
                Bắt đầu rà soát ca kiểm tra thuế hoặc tra cứu thư viện 84 văn bản pháp luật ngay bây giờ.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <Button 
                onClick={() => navigate('/kiem-tra-thue')} 
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs h-9 px-4 gap-2 rounded-xl shadow-xs cursor-pointer"
              >
                <ShieldCheck className="h-4 w-4" /> Bắt Đầu Rà Soát Thuế
              </Button>
              <Button 
                variant="outline" 
                onClick={() => navigate('/thu-vien')} 
                className="border-emerald-300 text-emerald-800 dark:text-emerald-300 text-xs h-9 px-4 rounded-xl cursor-pointer"
              >
                Vào Thư Viện Luật
              </Button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
