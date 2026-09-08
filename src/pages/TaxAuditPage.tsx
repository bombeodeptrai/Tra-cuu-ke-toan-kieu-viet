import React, { useState, useEffect, useMemo } from 'react';
import { 
  ShieldCheck, AlertTriangle, CheckCircle2, Clock, FileText, 
  ExternalLink, Filter, RotateCcw, Download, Printer, ChevronRight, 
  Building2, Sparkles, HelpCircle, Check, X, AlertCircle, ArrowRight,
  TrendingUp, BarChart3, Scale, BookOpen, Search, Copy, Bot,
  FileSpreadsheet, MessageSquareText, ChevronDown, ChevronUp
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import { 
  TAX_AUDIT_GROUPS, 
  RISK_QUESTIONS, 
  TIMELINE_PHASES, 
  ChecklistItem, 
  CheckPriority 
} from '@/data/tax-audit-checklist';
import { AUDIT_TEMPLATES, AuditTemplate } from '@/data/tax-audit-templates';
import { TaxAuditAIChat } from '@/components/tax-audit/TaxAuditAIChat';

const STORAGE_KEY_ITEMS = 'kv_tax_audit_checked_items';
const STORAGE_KEY_RISK = 'kv_tax_audit_risk_answers';

export function TaxAuditPage() {
  const navigate = useNavigate();

  // State checked items: Record<itemId, boolean>
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_ITEMS);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // State risk answers: Record<questionId, boolean> (true = có nguy cơ)
  const [riskAnswers, setRiskAnswers] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_RISK);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [selectedGroup, setSelectedGroup] = useState<string>('all');
  const [filterPriority, setFilterPriority] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Selected template in Tab 5
  const [selectedTemplateId, setSelectedTemplateId] = useState<string>(AUDIT_TEMPLATES[0].id);
  const [copiedTemplate, setCopiedTemplate] = useState<boolean>(false);

  // State mở rộng chi tiết hướng dẫn thực chiến (20+ dòng)
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});
  const [expandAll, setExpandAll] = useState<boolean>(false);

  const toggleExpandItem = (id: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleToggleExpandAll = () => {
    const next = !expandAll;
    setExpandAll(next);
    if (next) {
      const allExp: Record<string, boolean> = {};
      allItems.forEach(i => { allExp[i.id] = true; });
      setExpandedItems(allExp);
    } else {
      setExpandedItems({});
    }
  };

  // Save checked items to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_ITEMS, JSON.stringify(checkedItems));
  }, [checkedItems]);

  // Save risk answers to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_RISK, JSON.stringify(riskAnswers));
  }, [riskAnswers]);

  // Toggle checklist item
  const toggleItem = (id: string) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Toggle risk answer
  const toggleRiskAnswer = (id: string, value: boolean) => {
    setRiskAnswers(prev => ({
      ...prev,
      [id]: value
    }));
  };

  // Reset checklist
  const resetChecklist = () => {
    if (window.confirm('Bạn có chắc muốn đặt lại toàn bộ tiến độ kiểm tra?')) {
      setCheckedItems({});
    }
  };

  // Reset risk assessment
  const resetRiskAssessment = () => {
    if (window.confirm('Bạn có chắc muốn đặt lại bài tự đánh giá rủi ro?')) {
      setRiskAnswers({});
    }
  };

  // All checklist items flattened
  const allItems = useMemo(() => {
    return TAX_AUDIT_GROUPS.flatMap(g => g.items);
  }, []);

  // Filtered items (by group, priority, and search query)
  const filteredItems = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return allItems.filter(item => {
      const matchGroup = selectedGroup === 'all' || TAX_AUDIT_GROUPS.find(g => g.id === selectedGroup)?.items.some(i => i.id === item.id);
      const matchPriority = filterPriority === 'all' || item.priority === filterPriority;
      const matchSearch = !q || 
        item.title.toLowerCase().includes(q) || 
        item.description.toLowerCase().includes(q) ||
        item.decreeLabel.toLowerCase().includes(q) ||
        (item.articleNum && `điều ${item.articleNum}`.includes(q));

      return matchGroup && matchPriority && matchSearch;
    });
  }, [allItems, selectedGroup, filterPriority, searchQuery]);

  // Calculations
  const totalItems = allItems.length;
  const completedCount = Object.values(checkedItems).filter(Boolean).length;
  const progressPercent = totalItems > 0 ? Math.round((completedCount / totalItems) * 100) : 0;

  const criticalItems = allItems.filter(i => i.priority === 'critical');
  const criticalPending = criticalItems.filter(i => !checkedItems[i.id]).length;
  const importantItems = allItems.filter(i => i.priority === 'important');
  const recommendedItems = allItems.filter(i => i.priority === 'recommended');

  // Risk calculation
  const totalRiskScore = useMemo(() => {
    return RISK_QUESTIONS.reduce((sum, q) => {
      return sum + (riskAnswers[q.id] ? q.weight : 0);
    }, 0);
  }, [riskAnswers]);

  const maxRiskScore = RISK_QUESTIONS.reduce((sum, q) => sum + q.weight, 0); // 61
  const answeredQuestionsCount = Object.keys(riskAnswers).length;

  const riskLevel = useMemo(() => {
    if (totalRiskScore <= 15) return { text: 'RỦI RO THẤP', color: 'text-emerald-700 bg-emerald-100 dark:bg-emerald-950/60 dark:text-emerald-300 border-emerald-300', desc: 'Hồ sơ doanh nghiệp cơ bản an toàn, tuân thủ tương đối tốt.' };
    if (totalRiskScore <= 35) return { text: 'RỦI RO TRUNG BÌNH', color: 'text-amber-700 bg-amber-100 dark:bg-amber-950/60 dark:text-amber-300 border-amber-300', desc: 'Có một số sai sót cần khắc phục ngay và lập bản giải trình trước khi thanh tra.' };
    return { text: 'RỦI RO CAO', color: 'text-red-700 bg-red-100 dark:bg-red-950/60 dark:text-red-300 border-red-300', desc: 'Nguy cơ bị ấn định thuế, loại trừ chi phí và xử phạt nặng! Cần rà soát khẩn cấp.' };
  }, [totalRiskScore]);

  const priorityBadge = (priority: CheckPriority) => {
    switch (priority) {
      case 'critical':
        return <Badge variant="outline" className="bg-red-50 text-red-700 dark:bg-red-950/50 dark:text-red-300 border-red-300 text-[10px]">🔴 Bắt buộc</Badge>;
      case 'important':
        return <Badge variant="outline" className="bg-amber-50 text-amber-700 dark:bg-amber-950/50 dark:text-amber-300 border-amber-300 text-[10px]">🟡 Quan trọng</Badge>;
      case 'recommended':
        return <Badge variant="outline" className="bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300 border-emerald-300 text-[10px]">🟢 Khuyến nghị</Badge>;
    }
  };

  const selectedTemplate = useMemo(() => {
    return AUDIT_TEMPLATES.find(t => t.id === selectedTemplateId) || AUDIT_TEMPLATES[0];
  }, [selectedTemplateId]);

  const handleCopyTemplate = () => {
    navigator.clipboard.writeText(selectedTemplate.templateContent);
    setCopiedTemplate(true);
    setTimeout(() => setCopiedTemplate(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-in fade-in duration-300">
      {/* Printable Report Header (Active on print) */}
      <div className="hidden print:block border-b-2 border-black pb-4 mb-6">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-sm font-bold uppercase">CÔNG TY CỔ PHẦN KIỂU VIỆT</h2>
            <p className="text-xs">Phòng Tài chính - Kế toán</p>
            <p className="text-xs">Mã số thuế: 5901168128 | Gia Lai</p>
          </div>
          <div className="text-right">
            <h3 className="text-sm font-bold uppercase">CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</h3>
            <p className="text-xs italic">Độc lập - Tự do - Hạnh phúc</p>
          </div>
        </div>
        <div className="text-center mt-6">
          <h1 className="text-lg font-black uppercase">BIÊN BẢN TỰ RÀ SOÁT HỒ SƠ PHỤC VỤ THANH TRA / KIỂM TRA THUẾ</h1>
          <p className="text-xs text-gray-600 mt-1">Ngày lập: {new Date().toLocaleDateString('vi-VN')} | Tiến độ hoàn thành: {progressPercent}% ({completedCount}/{totalItems} mục)</p>
        </div>
      </div>

      {/* Banner Doanh Nghiệp (Screen Only) */}
      <div className="print:hidden relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-emerald-950 to-teal-950 text-white p-6 sm:p-8 md:p-10 shadow-xl border border-emerald-800/40">
        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-emerald-300 text-xs font-semibold border border-emerald-500/30">
            <Building2 className="h-3.5 w-3.5 text-emerald-400" />
            CÔNG TY CỔ PHẦN KIỂU VIỆT — HỆ THỐNG PHÒNG THỦ & THANH TRA THUẾ
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white flex items-center gap-3">
            <ShieldCheck className="h-8 w-8 text-emerald-400 shrink-0" />
            Trợ Lý Chuẩn Bị Kiểm Tra Thuế Doanh Nghiệp
          </h1>
          <p className="text-sm md:text-base text-slate-300 leading-relaxed font-normal">
            Hệ thống rà soát toàn diện 7 nhóm sắc thuế (TNDN, GTGT, TNCN, Hóa đơn, BHXH, Mỏ đá Gia Lai, BCTC), 
            bộ mẫu biểu giải trình thực chiến, công cụ tự đo lường rủi ro và trợ lý AI phản biện bảo vệ chi phí hợp lệ.
          </p>
        </div>
      </div>

      {/* 4 THẺ DASHBOARD TỔNG QUAN (Screen Only) */}
      <div className="print:hidden grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1: Tiến độ hồ sơ */}
        <Card className="border-border shadow-xs">
          <CardContent className="p-5 space-y-2">
            <div className="flex items-center justify-between text-xs font-bold text-muted-foreground uppercase">
              <span>Tiến độ chuẩn bị</span>
              <CheckCircle2 className="h-4 w-4 text-emerald-600" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-black text-foreground">{completedCount}</span>
              <span className="text-sm text-muted-foreground">/ {totalItems} mục</span>
            </div>
            <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
              <div 
                className="h-full bg-emerald-600 rounded-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <div className="text-[11px] text-muted-foreground flex justify-between">
              <span>Hoàn thành: {progressPercent}%</span>
              <span>Còn lại: {totalItems - completedCount}</span>
            </div>
          </CardContent>
        </Card>

        {/* Card 2: Mục bắt buộc chưa xong */}
        <Card className={`border-border shadow-xs ${criticalPending > 0 ? 'bg-red-50/40 dark:bg-red-950/20 border-red-200 dark:border-red-900/40' : ''}`}>
          <CardContent className="p-5 space-y-2">
            <div className="flex items-center justify-between text-xs font-bold text-muted-foreground uppercase">
              <span>Mục bắt buộc chưa xong</span>
              <AlertTriangle className={`h-4 w-4 ${criticalPending > 0 ? 'text-red-600 animate-pulse' : 'text-emerald-600'}`} />
            </div>
            <div className="flex items-baseline gap-2">
              <span className={`text-3xl font-black ${criticalPending > 0 ? 'text-red-600' : 'text-emerald-600'}`}>
                {criticalPending}
              </span>
              <span className="text-sm text-muted-foreground">/ {criticalItems.length} mục</span>
            </div>
            <p className="text-[11px] text-muted-foreground">
              {criticalPending === 0 ? '✅ Toàn bộ mục bắt buộc đã chuẩn bị!' : '⚠️ Cần ưu tiên hoàn thiện trước ngày kiểm tra!'}
            </p>
          </CardContent>
        </Card>

        {/* Card 3: Điểm rủi ro */}
        <Card className="border-border shadow-xs">
          <CardContent className="p-5 space-y-2">
            <div className="flex items-center justify-between text-xs font-bold text-muted-foreground uppercase">
              <span>Mức độ rủi ro thanh tra</span>
              <Scale className="h-4 w-4 text-purple-600" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-black text-foreground">{totalRiskScore}</span>
              <span className="text-xs text-muted-foreground">/ {maxRiskScore} điểm</span>
              <Badge variant="outline" className={`ml-auto text-[10px] font-bold ${riskLevel.color}`}>
                {riskLevel.text}
              </Badge>
            </div>
            <p className="text-[11px] text-muted-foreground line-clamp-1">
              {riskLevel.desc}
            </p>
          </CardContent>
        </Card>

        {/* Card 4: Sắc thuế bao quát */}
        <Card className="border-border shadow-xs">
          <CardContent className="p-5 space-y-2">
            <div className="flex items-center justify-between text-xs font-bold text-muted-foreground uppercase">
              <span>Phạm vi bao phủ</span>
              <BookOpen className="h-4 w-4 text-blue-600" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-black text-foreground">{TAX_AUDIT_GROUPS.length}</span>
              <span className="text-sm text-muted-foreground">nhóm chuyên đề</span>
            </div>
            <p className="text-[11px] text-muted-foreground">
              Liên kết 100% tới kho 55 văn bản pháp luật
            </p>
          </CardContent>
        </Card>
      </div>

      {/* TABS NỘI DUNG CHÍNH (Screen Only) */}
      <Tabs defaultValue="checklist" className="print:hidden space-y-6">
        <TabsList className="bg-muted p-1 rounded-2xl w-full flex flex-wrap sm:inline-flex h-auto gap-1">
          <TabsTrigger value="checklist" className="rounded-xl gap-2 font-semibold text-xs py-2.5 px-3.5">
            <FileText className="h-4 w-4 text-emerald-600" /> 
            1. Checklist Hồ Sơ ({completedCount}/{totalItems})
          </TabsTrigger>
          <TabsTrigger value="risk" className="rounded-xl gap-2 font-semibold text-xs py-2.5 px-3.5">
            <AlertTriangle className="h-4 w-4 text-amber-600" /> 
            2. Tự Đánh Giá Rủi Ro ({totalRiskScore}đ)
          </TabsTrigger>
          <TabsTrigger value="timeline" className="rounded-xl gap-2 font-semibold text-xs py-2.5 px-3.5">
            <Clock className="h-4 w-4 text-blue-600" /> 
            3. Lộ Trình 30-15-7 Ngày
          </TabsTrigger>
          <TabsTrigger value="rights" className="rounded-xl gap-2 font-semibold text-xs py-2.5 px-3.5">
            <ShieldCheck className="h-4 w-4 text-purple-600" /> 
            4. Quyền DN & Kỹ Năng Tiếp Đoàn
          </TabsTrigger>
          <TabsTrigger value="templates" className="rounded-xl gap-2 font-semibold text-xs py-2.5 px-3.5">
            <FileSpreadsheet className="h-4 w-4 text-teal-600" /> 
            5. Mẫu Biểu Giải Trình (6 Mẫu)
          </TabsTrigger>
          <TabsTrigger value="ai-advisor" className="rounded-xl gap-2 font-semibold text-xs py-2.5 px-3.5">
            <Bot className="h-4 w-4 text-emerald-500 animate-pulse" /> 
            6. Trợ Lý AI Phản Biện (Gemini)
          </TabsTrigger>
        </TabsList>

        {/* ========================================================================= */}
        {/* TAB 1: CHECKLIST HỒ SƠ CHI TIẾT */}
        {/* ========================================================================= */}
        <TabsContent value="checklist" className="space-y-6">
          {/* Bộ lọc nhóm, tìm kiếm và độ ưu tiên */}
          <div className="bg-card rounded-2xl border border-border p-4 shadow-xs space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs font-bold text-foreground uppercase">
                <Filter className="h-4 w-4 text-emerald-600" />
                <span>Lọc theo nhóm sắc thuế & chuyên đề:</span>
              </div>
              <div className="flex items-center gap-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={resetChecklist}
                  className="h-8 text-xs text-muted-foreground hover:text-red-600 gap-1.5"
                >
                  <RotateCcw className="h-3 w-3" /> Đặt lại tiến độ
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={handleToggleExpandAll}
                  className="h-8 text-xs text-emerald-700 dark:text-emerald-300 border-emerald-300 dark:border-emerald-800 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 gap-1.5"
                >
                  {expandAll ? <ChevronUp className="h-3.5 w-3.5 text-emerald-600" /> : <ChevronDown className="h-3.5 w-3.5 text-emerald-600" />}
                  {expandAll ? 'Thu gọn chi tiết' : 'Mở rộng 100% chi tiết (20+ dòng)'}
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => window.print()}
                  className="h-8 text-xs gap-1.5"
                >
                  <Printer className="h-3.5 w-3.5" /> In danh mục A4
                </Button>
              </div>
            </div>

            {/* Ô tìm kiếm nhanh */}
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Tìm kiếm mục kiểm tra (ví dụ: hóa đơn, khấu hao, mỏ đá, trích trước 335, BHXH, vãng lai 1%...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-14 h-10 text-xs rounded-xl bg-muted/30 focus-visible:ring-emerald-500/30"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground hover:text-foreground font-semibold"
                >
                  Xóa
                </button>
              )}
            </div>

            {/* Selector các nhóm */}
            <div className="flex flex-wrap gap-1.5">
              <Button
                variant={selectedGroup === 'all' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedGroup('all')}
                className={`h-8 text-xs rounded-lg ${selectedGroup === 'all' ? 'bg-emerald-600 text-white' : ''}`}
              >
                Tất cả ({totalItems})
              </Button>
              {TAX_AUDIT_GROUPS.map(g => {
                const isSelected = selectedGroup === g.id;
                const groupCompleted = g.items.filter(i => checkedItems[i.id]).length;
                return (
                  <Button
                    key={g.id}
                    variant={isSelected ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedGroup(g.id)}
                    className={`h-8 text-xs rounded-lg gap-1.5 ${isSelected ? 'bg-emerald-600 text-white' : ''}`}
                  >
                    <span>{g.icon}</span>
                    <span>{g.name}</span>
                    <span className="text-[10px] opacity-75">({groupCompleted}/{g.items.length})</span>
                  </Button>
                );
              })}
            </div>

            {/* Lọc theo độ ưu tiên */}
            <div className="flex items-center gap-2 pt-1 border-t border-border/50 text-xs text-muted-foreground">
              <span className="font-semibold">Độ ưu tiên:</span>
              <button 
                onClick={() => setFilterPriority('all')}
                className={`px-2 py-0.5 rounded text-xs ${filterPriority === 'all' ? 'bg-muted font-bold text-foreground' : 'hover:text-foreground'}`}
              >
                Tất cả ({totalItems})
              </button>
              <button 
                onClick={() => setFilterPriority('critical')}
                className={`px-2 py-0.5 rounded text-xs text-red-600 ${filterPriority === 'critical' ? 'bg-red-100 dark:bg-red-950 font-bold' : 'hover:underline'}`}
              >
                🔴 Bắt buộc ({criticalItems.length})
              </button>
              <button 
                onClick={() => setFilterPriority('important')}
                className={`px-2 py-0.5 rounded text-xs text-amber-600 ${filterPriority === 'important' ? 'bg-amber-100 dark:bg-amber-950 font-bold' : 'hover:underline'}`}
              >
                🟡 Quan trọng ({importantItems.length})
              </button>
              <button 
                onClick={() => setFilterPriority('recommended')}
                className={`px-2 py-0.5 rounded text-xs text-emerald-600 ${filterPriority === 'recommended' ? 'bg-emerald-100 dark:bg-emerald-950 font-bold' : 'hover:underline'}`}
              >
                🟢 Khuyến nghị ({recommendedItems.length})
              </button>
            </div>
          </div>

          {/* Danh sách các mục checklist */}
          <div className="space-y-3">
            {filteredItems.length === 0 ? (
              <div className="text-center py-12 bg-card rounded-xl border border-dashed border-border text-muted-foreground text-xs">
                Không tìm thấy mục kiểm tra nào phù hợp với từ khóa "{searchQuery}".
              </div>
            ) : (
              filteredItems.map(item => {
                const isChecked = Boolean(checkedItems[item.id]);
                return (
                  <div
                    key={item.id}
                    className={`p-4 rounded-xl border transition-all duration-200 ${
                      isChecked 
                        ? 'bg-emerald-50/40 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-900/40 opacity-80' 
                        : 'bg-card border-border hover:border-emerald-300 shadow-2xs'
                    }`}
                  >
                    <div className="flex items-start gap-3.5">
                      {/* Checkbox */}
                      <button
                        type="button"
                        onClick={() => toggleItem(item.id)}
                        className={`mt-0.5 h-5 w-5 rounded-md border flex items-center justify-center shrink-0 transition-colors cursor-pointer ${
                          isChecked 
                            ? 'bg-emerald-600 border-emerald-600 text-white' 
                            : 'border-muted-foreground/40 hover:border-emerald-500 bg-background'
                        }`}
                        title={isChecked ? 'Đánh dấu chưa hoàn thành' : 'Đánh dấu đã hoàn thành'}
                      >
                        {isChecked && <Check className="h-3.5 w-3.5 stroke-[3]" />}
                      </button>

                      {/* Content */}
                      <div className="flex-1 min-w-0 space-y-1.5">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <div className="flex items-center gap-2">
                            <span className={`text-sm font-bold ${isChecked ? 'line-through text-muted-foreground' : 'text-foreground'}`}>
                              {item.title}
                            </span>
                            {priorityBadge(item.priority)}
                          </div>
                          
                          {/* Deep-link to Official Decree */}
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => navigate(`/thu-vien/${item.decreeId}${item.articleNum ? `?dieu=${item.articleNum}` : ''}`)}
                            className="h-7 px-2.5 text-xs bg-muted/40 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 hover:border-emerald-300 text-foreground gap-1.5 shrink-0"
                            title={`Mở ${item.decreeLabel}${item.articleNum ? ` (Điều ${item.articleNum})` : ''} trong Thư viện`}
                          >
                            <BookOpen className="h-3 w-3 text-emerald-600" />
                            <span className="truncate max-w-[200px]">
                              {item.decreeLabel} {item.articleNum ? `(Đ.${item.articleNum})` : ''}
                            </span>
                            <ExternalLink className="h-2.5 w-2.5 opacity-60" />
                          </Button>
                        </div>

                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>

                        <div className="flex flex-wrap items-center justify-between gap-2 pt-1 text-[11px] text-muted-foreground border-t border-border/40 mt-2">
                          <span className="font-semibold text-emerald-700 dark:text-emerald-300">
                            Lộ trình: Giai đoạn {item.phase} ({item.phase === 1 ? 'Trước 30 ngày' : item.phase === 2 ? 'Trước 15 ngày' : 'Trước 7 ngày'})
                          </span>

                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => toggleExpandItem(item.id)}
                            className="h-6 text-xs text-emerald-700 dark:text-emerald-300 hover:bg-emerald-50 dark:hover:bg-emerald-950/50 gap-1 px-2 font-semibold cursor-pointer"
                          >
                            {(expandedItems[item.id] ?? expandAll) ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
                            <span>{(expandedItems[item.id] ?? expandAll) ? 'Thu gọn chi tiết' : 'Xem chi tiết thực chiến (4 trụ cột)'}</span>
                          </Button>
                        </div>

                        {/* CHI TIẾT CHUYÊN SÂU 4 TRỤ CỘT (20+ DÒNG MÔ TẢ) */}
                        {(expandedItems[item.id] ?? expandAll) && (
                          <div className="mt-3 pt-3 border-t border-border/60 space-y-3 text-xs animate-in fade-in-50 duration-200">
                            {/* Trụ cột 1: Hồ sơ & Chứng từ gốc */}
                            {item.documentsRequired && item.documentsRequired.length > 0 && (
                              <div className="bg-muted/40 dark:bg-muted/20 rounded-xl p-3 border border-border/50">
                                <div className="flex items-center gap-1.5 font-bold text-foreground mb-1.5">
                                  <span className="flex items-center justify-center h-4 w-4 rounded bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-[10px]">📂</span>
                                  <span>1. Danh mục Hồ sơ & Chứng từ gốc bắt buộc phải kẹp cùng:</span>
                                </div>
                                <ul className="space-y-1 pl-5 list-disc text-muted-foreground">
                                  {item.documentsRequired.map((doc, dIdx) => (
                                    <li key={dIdx} className="leading-relaxed">
                                      <span className="text-foreground font-medium">{doc}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {/* Trụ cột 2: Quy trình rà soát tài khoản kế toán */}
                            {item.accountingSteps && item.accountingSteps.length > 0 && (
                              <div className="bg-muted/40 dark:bg-muted/20 rounded-xl p-3 border border-border/50">
                                <div className="flex items-center gap-1.5 font-bold text-foreground mb-1.5">
                                  <span className="flex items-center justify-center h-4 w-4 rounded bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 text-[10px]">📊</span>
                                  <span>2. Quy trình rà soát sổ sách & Đối ứng tài khoản kế toán:</span>
                                </div>
                                <div className="space-y-1.5 pl-1 text-muted-foreground">
                                  {item.accountingSteps.map((step, sIdx) => (
                                    <div key={sIdx} className="leading-relaxed flex items-start gap-2">
                                      <span className="text-purple-600 font-bold shrink-0">•</span>
                                      <span className="text-foreground">{step}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* Trụ cột 3 & 4: Rủi ro bóc tách và Phương án giải trình */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              {/* Rủi ro */}
                              {item.auditRisks && item.auditRisks.length > 0 && (
                                <div className="bg-red-50/40 dark:bg-red-950/20 rounded-xl p-3 border border-red-200 dark:border-red-900/40">
                                  <div className="flex items-center gap-1.5 font-bold text-red-700 dark:text-red-300 mb-1.5">
                                    <span className="flex items-center justify-center h-4 w-4 rounded bg-red-100 dark:bg-red-900/60 text-red-700 dark:text-red-300 text-[10px]">⚠️</span>
                                    <span>3. Điểm nóng thuế hay bóc tách & Mức phạt:</span>
                                  </div>
                                  <ul className="space-y-1 pl-4 list-disc text-red-900/80 dark:text-red-300/80">
                                    {item.auditRisks.map((risk, rIdx) => (
                                      <li key={rIdx} className="leading-relaxed">{risk}</li>
                                    ))}
                                  </ul>
                                </div>
                              )}

                              {/* Giải trình thực chiến */}
                              {item.defenseStrategy && item.defenseStrategy.length > 0 && (
                                <div className="bg-emerald-50/40 dark:bg-emerald-950/20 rounded-xl p-3 border border-emerald-200 dark:border-emerald-900/40">
                                  <div className="flex items-center gap-1.5 font-bold text-emerald-800 dark:text-emerald-300 mb-1.5">
                                    <span className="flex items-center justify-center h-4 w-4 rounded bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 text-[10px]">🛡️</span>
                                    <span>4. Phương án giải trình & Lập luận bảo vệ:</span>
                                  </div>
                                  <div className="space-y-1 text-emerald-900/90 dark:text-emerald-300/90">
                                    {item.defenseStrategy.map((def, dfIdx) => (
                                      <div key={dfIdx} className="leading-relaxed flex items-start gap-1.5">
                                        <span className="text-emerald-600 font-bold shrink-0">✓</span>
                                        <span>{def}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </TabsContent>

        {/* ========================================================================= */}
        {/* TAB 2: TỰ ĐÁNH GIÁ RỦI RO THANH TRA */}
        {/* ========================================================================= */}
        <TabsContent value="risk" className="space-y-6">
          <div className="bg-card rounded-2xl border border-border p-6 shadow-xs space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-4">
              <div>
                <h3 className="font-bold text-xl text-foreground flex items-center gap-2">
                  <Scale className="h-5 w-5 text-purple-600" />
                  Bộ Câu Hỏi Tự Đánh Giá Rủi Ro Thanh Tra (15 Điểm Nóng)
                </h3>
                <p className="text-xs text-muted-foreground mt-1">
                  Đánh giá trung thực các câu hỏi dưới đây. Nếu có câu trả lời "CÓ", hệ thống sẽ tính điểm rủi ro và gợi ý biện pháp xử lý kịp thời.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={resetRiskAssessment}
                  className="h-8 text-xs text-muted-foreground hover:text-red-600 gap-1.5"
                >
                  <RotateCcw className="h-3 w-3" /> Làm lại đánh giá
                </Button>
              </div>
            </div>

            {/* Bảng điểm kết quả */}
            <div className={`p-4 rounded-xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${riskLevel.color}`}>
              <div className="space-y-1">
                <div className="text-xs uppercase tracking-wider font-bold">Kết quả đánh giá hiện tại:</div>
                <div className="text-2xl font-black flex items-center gap-2">
                  <span>{riskLevel.text}</span>
                  <span className="text-base font-normal">({totalRiskScore} / {maxRiskScore} điểm)</span>
                </div>
                <p className="text-xs font-medium">{riskLevel.desc}</p>
              </div>
              <div className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-white/80 dark:bg-card/80 text-foreground border border-border shrink-0">
                Đã trả lời: {answeredQuestionsCount} / {RISK_QUESTIONS.length} câu
              </div>
            </div>

            {/* Danh sách câu hỏi */}
            <div className="space-y-4">
              {RISK_QUESTIONS.map((q, idx) => {
                const answer = riskAnswers[q.id];
                const isYes = answer === true;
                const isNo = answer === false;

                return (
                  <div 
                    key={q.id}
                    className={`p-4 rounded-xl border transition-all ${
                      isYes 
                        ? 'bg-red-50/50 dark:bg-red-950/20 border-red-200 dark:border-red-900/40' 
                        : isNo 
                          ? 'bg-emerald-50/30 dark:bg-emerald-950/10 border-emerald-200 dark:border-emerald-900/30'
                          : 'bg-muted/20 border-border'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                      <div className="space-y-1 flex-1">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-muted-foreground">#{idx + 1}</span>
                          <span className="text-sm font-semibold text-foreground">{q.question}</span>
                          <Badge variant="outline" className="text-[10px] border-amber-300 text-amber-700 dark:text-amber-300">
                            Trọng số: +{q.weight}đ
                          </Badge>
                        </div>
                        <div className="text-[11px] text-muted-foreground">
                          Căn cứ pháp luật: <strong className="text-foreground">{q.articleRef}</strong> ({q.decreeId})
                        </div>
                      </div>

                      {/* Nút Yes / No */}
                      <div className="flex items-center gap-2 shrink-0">
                        <Button
                          variant={isYes ? 'default' : 'outline'}
                          size="sm"
                          onClick={() => toggleRiskAnswer(q.id, true)}
                          className={`h-8 px-3 text-xs font-bold ${
                            isYes 
                              ? 'bg-red-600 hover:bg-red-700 text-white' 
                              : 'hover:border-red-300 hover:text-red-600'
                          }`}
                        >
                          CÓ (Rủi ro)
                        </Button>
                        <Button
                          variant={isNo ? 'default' : 'outline'}
                          size="sm"
                          onClick={() => toggleRiskAnswer(q.id, false)}
                          className={`h-8 px-3 text-xs font-bold ${
                            isNo 
                              ? 'bg-emerald-600 hover:bg-emerald-700 text-white' 
                              : 'hover:border-emerald-300 hover:text-emerald-600'
                          }`}
                        >
                          KHÔNG (An toàn)
                        </Button>
                      </div>
                    </div>

                    {/* Lời khuyên khi bị Yes */}
                    {isYes && (
                      <div className="mt-3 pt-3 border-t border-red-200 dark:border-red-900/40 text-xs text-red-900 dark:text-red-200 flex items-start gap-2 bg-red-100/50 dark:bg-red-950/40 p-2.5 rounded-lg">
                        <AlertCircle className="h-4 w-4 text-red-600 shrink-0 mt-0.5" />
                        <div>
                          <strong className="font-bold">Biện pháp xử lý ngay:</strong> {q.tip}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </TabsContent>

        {/* ========================================================================= */}
        {/* TAB 3: LỘ TRÌNH 30-15-7 NGÀY */}
        {/* ========================================================================= */}
        <TabsContent value="timeline" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TIMELINE_PHASES.map(phase => {
              const borderColors = {
                1: 'border-emerald-300 dark:border-emerald-800',
                2: 'border-blue-300 dark:border-blue-800',
                3: 'border-amber-300 dark:border-amber-800',
              }[phase.phase];

              const headerColors = {
                1: 'bg-emerald-100 text-emerald-900 dark:bg-emerald-950 dark:text-emerald-200',
                2: 'bg-blue-100 text-blue-900 dark:bg-blue-950 dark:text-blue-200',
                3: 'bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-200',
              }[phase.phase];

              return (
                <Card key={phase.phase} className={`border-2 shadow-xs flex flex-col ${borderColors}`}>
                  <div className={`p-4 rounded-t-xl font-bold border-b ${headerColors}`}>
                    <div className="text-xs uppercase tracking-wider opacity-75">Giai đoạn {phase.phase}</div>
                    <div className="text-lg flex items-center justify-between mt-0.5">
                      <span>{phase.label}</span>
                      <Badge variant="outline" className="bg-white/80 dark:bg-card/80 text-xs font-semibold">
                        {phase.daysBefore}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-4 flex-1 space-y-3 text-xs">
                    {phase.tasks.map((task, tIdx) => (
                      <div key={tIdx} className="flex items-start gap-2.5 p-2 rounded-lg bg-muted/30 border border-border/50">
                        <span className="font-bold text-muted-foreground shrink-0 mt-0.5">#{tIdx + 1}</span>
                        <span className="text-foreground leading-relaxed">{task}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>

        {/* ========================================================================= */}
        {/* TAB 4: QUYỀN DN & KỸ NĂNG TIẾP ĐOÀN */}
        {/* ========================================================================= */}
        <TabsContent value="rights" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Quyền của Doanh Nghiệp */}
            <Card className="border-border shadow-xs">
              <CardHeader className="bg-emerald-50/50 dark:bg-emerald-950/20 border-b border-border pb-4">
                <CardTitle className="text-base flex items-center gap-2 text-emerald-800 dark:text-emerald-300">
                  <ShieldCheck className="h-5 w-5 text-emerald-600" />
                  Quyền Của Doanh Nghiệp (Điều 110-111 Luật QLT 38/2019)
                </CardTitle>
                <CardDescription className="text-xs">
                  Những quyền pháp lý người nộp thuế được bảo vệ khi có quyết định kiểm tra tại trụ sở
                </CardDescription>
              </CardHeader>
              <CardContent className="p-5 space-y-3.5 text-xs">
                <div className="space-y-1">
                  <div className="font-bold text-foreground">1. Quyền được nhận quyết định trước tối thiểu 03 ngày:</div>
                  <p className="text-muted-foreground leading-relaxed">
                    Quyết định kiểm tra thuế phải được gửi cho doanh nghiệp trong thời hạn 03 ngày làm việc kể từ ngày ban hành.
                  </p>
                </div>
                <div className="space-y-1">
                  <div className="font-bold text-foreground">2. Quyền từ chối cung cấp thông tin ngoài phạm vi:</div>
                  <p className="text-muted-foreground leading-relaxed">
                    Doanh nghiệp có quyền từ chối cung cấp thông tin, tài liệu không liên quan đến nội dung và thời kỳ kiểm tra ghi trong Quyết định.
                  </p>
                </div>
                <div className="space-y-1">
                  <div className="font-bold text-foreground">3. Quyền giải trình và bảo lưu ý kiến:</div>
                  <p className="text-muted-foreground leading-relaxed">
                    Được quyền giải trình bằng văn bản các chênh lệch số liệu trước khi đoàn ký Biên bản kiểm tra. Có quyền ghi ý kiến bảo lưu vào biên bản nếu không đồng ý.
                  </p>
                </div>
                <div className="space-y-1">
                  <div className="font-bold text-foreground">4. Quyền khiếu nại quyết định xử phạt:</div>
                  <p className="text-muted-foreground leading-relaxed">
                    Nếu phát hiện kết luận hoặc quyết định xử phạt vi phạm pháp luật, doanh nghiệp được quyền khiếu nại lên Cục Thuế/Tổng cục Thuế hoặc khởi kiện ra Tòa án Hành chính.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Kỹ Năng Thực Chiến Tiếp Đoàn */}
            <Card className="border-border shadow-xs">
              <CardHeader className="bg-blue-50/50 dark:bg-blue-950/20 border-b border-border pb-4">
                <CardTitle className="text-base flex items-center gap-2 text-blue-800 dark:text-blue-300">
                  <Sparkles className="h-5 w-5 text-blue-600" />
                  Kỹ Năng Thực Chiến Khi Làm Việc Với Đoàn Kiểm Tra
                </CardTitle>
                <CardDescription className="text-xs">
                  Kinh nghiệm thực tiễn giúp hạn chế tối đa số tiền bị truy thu và phạt
                </CardDescription>
              </CardHeader>
              <CardContent className="p-5 space-y-3.5 text-xs">
                <div className="space-y-1">
                  <div className="font-bold text-foreground">1. Nguyên tắc "Hỏi gì đáp nấy, đòi gì cung cấp nấy":</div>
                  <p className="text-muted-foreground leading-relaxed">
                    Tuyệt đối không tự ý cung cấp thêm tài liệu, file Excel nháp hoặc sổ sách không được yêu cầu. Chỉ cung cấp tài liệu chính thức có ký tên đóng dấu.
                  </p>
                </div>
                <div className="space-y-1">
                  <div className="font-bold text-foreground">2. Luôn chuẩn bị hồ sơ 3 bên đồng bộ:</div>
                  <p className="text-muted-foreground leading-relaxed">
                    Với công trình xây dựng: Hợp đồng ➔ Biên bản nghiệm thu ➔ Hóa đơn ➔ Chứng từ ngân hàng. 4 chứng từ này phải khớp 100% về ngày tháng, tên công trình và số tiền.
                  </p>
                </div>
                <div className="space-y-1">
                  <div className="font-bold text-foreground">3. Chủ động nộp bổ sung trước ngày công bố quyết định:</div>
                  <p className="text-muted-foreground leading-relaxed">
                    Nếu phát hiện sai sót tự kê khai bổ sung trước khi cơ quan thuế công bố quyết định kiểm tra: <strong>không bị phạt 20% khai sai</strong>, chỉ phải nộp tiền chậm nộp 0.03%/ngày.
                  </p>
                </div>
                <div className="space-y-1">
                  <div className="font-bold text-foreground">4. Phân công đầu mối duy nhất phát ngôn:</div>
                  <p className="text-muted-foreground leading-relaxed">
                    Chỉ định Kế toán trưởng làm việc trực tiếp. Nhân viên kế toán khác không trực tiếp giải trình các nội dung ngoài thẩm quyền để tránh xung đột thông tin.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* ========================================================================= */}
        {/* TAB 5: MẪU BIỂU GIẢI TRÌNH THỰC CHIẾN (MỚI) */}
        {/* ========================================================================= */}
        <TabsContent value="templates" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Sidebar danh sách mẫu biểu */}
            <div className="lg:col-span-4 space-y-2">
              <div className="text-xs font-bold text-muted-foreground uppercase px-1 mb-2">
                Danh mục biểu mẫu giải trình chuẩn:
              </div>
              {AUDIT_TEMPLATES.map((tmpl) => {
                const isSelected = tmpl.id === selectedTemplateId;
                return (
                  <div
                    key={tmpl.id}
                    onClick={() => setSelectedTemplateId(tmpl.id)}
                    className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 shadow-xs'
                        : 'bg-card border-border hover:border-emerald-300'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <Badge variant="outline" className={`text-[10px] ${isSelected ? 'border-emerald-500 text-emerald-700 dark:text-emerald-300' : ''}`}>
                        {tmpl.code}
                      </Badge>
                      <span className="text-[10px] text-muted-foreground truncate">{tmpl.category}</span>
                    </div>
                    <div className={`text-xs font-bold ${isSelected ? 'text-emerald-900 dark:text-emerald-200' : 'text-foreground'}`}>
                      {tmpl.title}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Chi tiết nội dung biểu mẫu */}
            <div className="lg:col-span-8">
              <Card className="border-border shadow-xs">
                <CardHeader className="p-5 border-b border-border bg-muted/20">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <Badge className="bg-emerald-600 text-white text-xs">{selectedTemplate.code}</Badge>
                        <Badge variant="outline" className="text-xs text-muted-foreground">{selectedTemplate.category}</Badge>
                      </div>
                      <CardTitle className="text-base sm:text-lg text-foreground mt-1">
                        {selectedTemplate.title}
                      </CardTitle>
                    </div>

                    <div className="flex items-center gap-2">
                      <Button
                        size="sm"
                        onClick={handleCopyTemplate}
                        className="h-8 text-xs bg-emerald-600 hover:bg-emerald-700 text-white gap-1.5 rounded-lg shadow-xs"
                      >
                        {copiedTemplate ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                        {copiedTemplate ? 'Đã sao chép' : 'Sao chép văn bản'}
                      </Button>
                    </div>
                  </div>

                  <div className="mt-3 pt-3 border-t border-border/50 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="font-semibold text-muted-foreground">Rủi ro xử lý: </span>
                      <span className="text-red-700 dark:text-red-300">{selectedTemplate.targetRisk}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-muted-foreground">Căn cứ pháp lý: </span>
                      <span className="text-emerald-700 dark:text-emerald-300 font-medium">{selectedTemplate.legalBase}</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-5">
                  <div className="bg-muted/30 border border-border rounded-xl p-4 overflow-x-auto">
                    <pre className="font-mono text-xs text-foreground leading-relaxed whitespace-pre-wrap selection:bg-emerald-200">
                      {selectedTemplate.templateContent}
                    </pre>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        {/* ========================================================================= */}
        {/* TAB 6: TRỢ LÝ AI PHẢN BIỆN BẢO VỆ CHI PHÍ (MỚI) */}
        {/* ========================================================================= */}
        <TabsContent value="ai-advisor" className="space-y-6">
          <TaxAuditAIChat />
        </TabsContent>
      </Tabs>

      {/* ========================================================================= */}
      {/* BẢNG IN CHUYÊN NGHIỆP TRÊN GIẤY A4 (PRINT-ONLY VIEW) */}
      {/* ========================================================================= */}
      <div className="hidden print:block space-y-6">
        <table className="w-full text-xs border-collapse border border-black">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-black p-1.5 w-8 text-center">STT</th>
              <th className="border border-black p-1.5 text-left">Nội dung rà soát hồ sơ</th>
              <th className="border border-black p-1.5 w-28 text-center">Nhóm thuế</th>
              <th className="border border-black p-1.5 w-40 text-left">Căn cứ pháp lý</th>
              <th className="border border-black p-1.5 w-24 text-center">Trạng thái</th>
              <th className="border border-black p-1.5 w-28 text-center">Ghi chú</th>
            </tr>
          </thead>
          <tbody>
            {allItems.map((item, idx) => {
              const isChecked = Boolean(checkedItems[item.id]);
              const groupName = TAX_AUDIT_GROUPS.find(g => g.items.some(i => i.id === item.id))?.name || '';
              return (
                <tr key={item.id} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="border border-black p-1.5 text-center font-bold">{idx + 1}</td>
                  <td className="border border-black p-1.5">
                    <div className="font-semibold">{item.title}</div>
                    <div className="text-[10px] text-gray-600">{item.description}</div>
                  </td>
                  <td className="border border-black p-1.5 text-center text-[10px]">{groupName.split('(')[0]}</td>
                  <td className="border border-black p-1.5 text-[10px]">
                    {item.decreeLabel} {item.articleNum ? `(Điều ${item.articleNum})` : ''}
                  </td>
                  <td className="border border-black p-1.5 text-center font-bold">
                    {isChecked ? 'ĐÃ CHUẨN BỊ' : '[ CHƯA ]'}
                  </td>
                  <td className="border border-black p-1.5 text-[10px]"></td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {/* Chữ ký xác nhận */}
        <div className="grid grid-cols-3 text-center text-xs mt-10 pt-4">
          <div>
            <div className="font-bold">NGƯỜI LẬP BIỂU</div>
            <div className="italic text-[10px] text-gray-500 mt-0.5">(Ký, ghi rõ họ tên)</div>
            <div className="h-16"></div>
          </div>
          <div>
            <div className="font-bold">KẾ TOÁN TRƯỞNG</div>
            <div className="italic text-[10px] text-gray-500 mt-0.5">(Ký, ghi rõ họ tên)</div>
            <div className="h-16"></div>
          </div>
          <div>
            <div className="font-bold">BAN GIÁM ĐỐC PHÊ DUYỆT</div>
            <div className="italic text-[10px] text-gray-500 mt-0.5">(Ký tên, đóng dấu)</div>
            <div className="h-16"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
