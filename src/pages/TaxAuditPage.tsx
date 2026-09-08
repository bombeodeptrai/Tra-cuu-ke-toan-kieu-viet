import React, { useState, useEffect, useMemo } from 'react';
import { 
  ShieldCheck, AlertTriangle, CheckCircle2, Clock, FileText, 
  ExternalLink, Filter, RotateCcw, Download, Printer, ChevronRight, 
  Building2, Sparkles, HelpCircle, Check, X, AlertCircle, ArrowRight,
  TrendingUp, BarChart3, Scale, BookOpen
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import { 
  TAX_AUDIT_GROUPS, 
  RISK_QUESTIONS, 
  TIMELINE_PHASES, 
  ChecklistItem, 
  CheckPriority 
} from '@/data/tax-audit-checklist';

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

  // Filtered items
  const filteredItems = useMemo(() => {
    return allItems.filter(item => {
      const matchGroup = selectedGroup === 'all' || TAX_AUDIT_GROUPS.find(g => g.id === selectedGroup)?.items.some(i => i.id === item.id);
      const matchPriority = filterPriority === 'all' || item.priority === filterPriority;
      return matchGroup && matchPriority;
    });
  }, [allItems, selectedGroup, filterPriority]);

  // Calculations
  const totalItems = allItems.length;
  const completedCount = Object.values(checkedItems).filter(Boolean).length;
  const progressPercent = totalItems > 0 ? Math.round((completedCount / totalItems) * 100) : 0;

  const criticalItems = allItems.filter(i => i.priority === 'critical');
  const criticalPending = criticalItems.filter(i => !checkedItems[i.id]).length;

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

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-in fade-in duration-300">
      {/* Banner Doanh Nghiệp */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-emerald-950 to-teal-950 text-white p-6 sm:p-8 md:p-10 shadow-xl border border-emerald-800/40">
        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-emerald-300 text-xs font-semibold border border-emerald-500/30">
            <Building2 className="h-3.5 w-3.5 text-emerald-400" />
            CÔNG TY CỔ PHẦN KIỂU VIỆT — PHÒNG THỦ PHÁP LÝ & THANH TRA THUẾ
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white flex items-center gap-3">
            <ShieldCheck className="h-8 w-8 text-emerald-400 shrink-0" />
            Trợ Lý Chuẩn Bị Kiểm Tra Thuế Doanh Nghiệp
          </h1>
          <p className="text-sm md:text-base text-slate-300 leading-relaxed font-normal">
            Hệ thống rà soát toàn diện 7 nhóm sắc thuế (TNDN, GTGT, TNCN, Hóa đơn, BHXH, Mỏ đá Gia Lai, BCTC), 
            công cụ tự đo lường rủi ro xử phạt và lộ trình chuẩn bị 3 giai đoạn (30-15-7 ngày) trước khi tiếp đoàn kiểm tra thuế.
          </p>
        </div>
      </div>

      {/* 4 THẺ DASHBOARD TỔNG QUAN */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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

        {/* Card 2: Mục bắt buộc còn thiếu */}
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

      {/* TABS NỘI DUNG CHÍNH */}
      <Tabs defaultValue="checklist" className="space-y-6">
        <TabsList className="bg-muted p-1 rounded-2xl w-full flex flex-wrap sm:inline-flex h-auto gap-1">
          <TabsTrigger value="checklist" className="rounded-xl gap-2 font-semibold text-xs py-2.5 px-4">
            <FileText className="h-4 w-4 text-emerald-600" /> 
            1. Checklist Hồ Sơ ({completedCount}/{totalItems})
          </TabsTrigger>
          <TabsTrigger value="risk" className="rounded-xl gap-2 font-semibold text-xs py-2.5 px-4">
            <AlertTriangle className="h-4 w-4 text-amber-600" /> 
            2. Tự Đánh Giá Rủi Ro ({totalRiskScore}đ)
          </TabsTrigger>
          <TabsTrigger value="timeline" className="rounded-xl gap-2 font-semibold text-xs py-2.5 px-4">
            <Clock className="h-4 w-4 text-blue-600" /> 
            3. Lộ Trình 30-15-7 Ngày
          </TabsTrigger>
          <TabsTrigger value="rights" className="rounded-xl gap-2 font-semibold text-xs py-2.5 px-4">
            <ShieldCheck className="h-4 w-4 text-purple-600" /> 
            4. Quyền DN & Kỹ Năng Tiếp Đoàn
          </TabsTrigger>
        </TabsList>

        {/* ========================================================================= */}
        {/* TAB 1: CHECKLIST HỒ SƠ CHI TIẾT */}
        {/* ========================================================================= */}
        <TabsContent value="checklist" className="space-y-6">
          {/* Bộ lọc nhóm và độ ưu tiên */}
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
                  onClick={() => window.print()}
                  className="h-8 text-xs gap-1.5"
                >
                  <Printer className="h-3.5 w-3.5" /> In danh mục
                </Button>
              </div>
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
                Tất cả
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
                🟡 Quan trọng
              </button>
              <button 
                onClick={() => setFilterPriority('recommended')}
                className={`px-2 py-0.5 rounded text-xs text-emerald-600 ${filterPriority === 'recommended' ? 'bg-emerald-100 dark:bg-emerald-950 font-bold' : 'hover:underline'}`}
              >
                🟢 Khuyến nghị
              </button>
            </div>
          </div>

          {/* Danh sách các mục checklist */}
          <div className="space-y-3">
            {filteredItems.map(item => {
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

                      <div className="flex items-center gap-2 pt-1 text-[11px] text-muted-foreground">
                        <span className="font-semibold text-emerald-700 dark:text-emerald-300">
                          Lộ trình: Giai đoạn {item.phase} ({item.phase === 1 ? 'Trước 30 ngày' : item.phase === 2 ? 'Trước 15 ngày' : 'Trước 7 ngày'})
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
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
      </Tabs>
    </div>
  );
}
