import { AuditHandoffGuide } from '@/components/tax-audit/AuditHandoffGuide';
import React, { useState, useEffect, useMemo } from 'react';
import { 
  ShieldCheck, AlertTriangle, CheckCircle2, Clock, FileText, 
  ExternalLink, Filter, RotateCcw, Download, Printer, ChevronRight, 
  Building2, Sparkles, HelpCircle, Check, X, AlertCircle, ArrowRight,
  TrendingUp, BarChart3, Scale, BookOpen, Search, Copy, Bot,
  FileSpreadsheet, MessageSquareText, ChevronDown, ChevronUp, GitBranch
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
  CheckPriority,
  RiskQuestion
} from '@/data/tax-audit-checklist';
import { useChatStore } from '@/stores/chat-store';
import { AUDIT_TEMPLATES, AuditTemplate } from '@/data/tax-audit-templates';
import { TaxAuditAIChat } from '@/components/tax-audit/TaxAuditAIChat';
import { AuditCaseHeader } from '@/components/tax-audit/AuditWorkspaceHeader';
import { ReconciliationPanel } from '@/components/tax-audit/AuditCalculations';
import { EvidencePanel } from '@/components/tax-audit/AuditEvidencePanel';
import { AuditRequestLog } from '@/components/tax-audit/AuditWorkLog';
import { FolderArchive } from 'lucide-react';
import { AuditLegalLibrary } from '@/components/tax-audit/AuditLegalLibrary';
import { AuditPreparationDesk } from '@/components/tax-audit/AuditPreparationDesk';

import { useLiveQuery } from 'dexie-react-hooks';
import { auditDb, newId } from '@/lib/audit/workspace';
import { useAuditWorkspace } from '@/stores/audit-workspace-store';

const STORAGE_KEY_ITEMS = 'kv_tax_audit_checked_items';
const STORAGE_KEY_RISK = 'kv_tax_audit_risk_answers';

export function TaxAuditPage() {
  const [auditTab,setAuditTab] = useState('preparation');
  const navigate = useNavigate();

  const caseId = useAuditWorkspace(s => s.caseId);
  const currentCase = useLiveQuery(() => auditDb.cases.get(caseId), [caseId]);
  const checkedItems = currentCase?.checked || {};
  const riskAnswers = currentCase?.risk || {};
  const updateAnswers = (field: 'checked' | 'risk', update: Record<string, boolean> | ((previous: Record<string, boolean>) => Record<string, boolean>)) => {
    if (!caseId) return;
    void auditDb.cases.where('id').equals(caseId).modify(record => {
      record[field] = typeof update === 'function' ? update(record[field] || {}) : update;
    }).catch(() => alert('Không lưu được tiến độ. Hãy kiểm tra dung lượng trình duyệt và sao lưu.'));
  };
  const setCheckedItems = (update: Record<string, boolean> | ((previous: Record<string, boolean>) => Record<string, boolean>)) => updateAnswers('checked', update);
  const setRiskAnswers = (update: Record<string, boolean> | ((previous: Record<string, boolean>) => Record<string, boolean>)) => updateAnswers('risk', update);

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

  // Toggle checklist item
  const toggleItem = (id: string) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // State mở rộng chi tiết dẫn chứng & hồ sơ 15 điểm nóng
  const [expandedRiskItems, setExpandedRiskItems] = useState<Record<string, boolean>>({});
  const [expandAllRisk, setExpandAllRisk] = useState<boolean>(true); // Mặc định mở rộng để không bao giờ bị sơ sài

  const handleToggleExpandAllRisk = () => {
    const next = !expandAllRisk;
    setExpandAllRisk(next);
    if (next) {
      const allExp: Record<string, boolean> = {};
      RISK_QUESTIONS.forEach(q => { allExp[q.id] = true; });
      setExpandedRiskItems(allExp);
    } else {
      setExpandedRiskItems({});
    }
  };

  // State mở rộng chi tiết nhiệm vụ trong Lộ trình 30-15-7 ngày
  const [expandedTimelineTasks, setExpandedTimelineTasks] = useState<Record<string, boolean>>({});
  const toggleExpandTimelineTask = (id: string) => {
    setExpandedTimelineTasks(prev => ({ ...prev, [id]: !prev[id] }));
  };
  const toggleExpandRiskItem = (id: string) => {
    setExpandedRiskItems(prev => ({
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
    // Tự động mở chi tiết dẫn chứng khi phát hiện có rủi ro
    if (value === true) {
      setExpandedRiskItems(prev => ({
        ...prev,
        [id]: true
      }));
    }
  };

  // Phân nhánh cuộc trò chuyện sang Hỏi đáp AI
  const handleBranchToAIChat = (q: RiskQuestion) => {
    const prompt = `Tôi cần tư vấn pháp lý chuyên sâu và phương án bảo vệ giải trình cho điểm nóng thanh tra thuế sau đây của Công ty Cổ phần Kiểu Việt:

📌 **Điểm nóng kiểm tra:** ${q.question}
⚖️ **Căn cứ pháp luật:** ${q.decreeTitle} (${q.articleRef})
📜 **Trích dẫn điều luật:** "${q.legalQuote}"
⚠️ **Bản chất rủi ro & Kỹ thuật soi của đoàn:** ${q.riskAnalysis}
🚨 **Khung xử phạt vi phạm:** ${q.penaltyFramework}
📂 **Hồ sơ cần chuẩn bị:**
${q.defenseDocuments.map(d => `- ${d}`).join('\n')}

Hãy đóng vai Kế toán trưởng giàu kinh nghiệm, phân tích chi tiết các bước xử lý, phương án làm việc với đoàn thanh tra và cách chuẩn bị chứng từ giải trình bảo vệ tối đa lợi ích hợp pháp cho doanh nghiệp.`;

    const newSessionId = useChatStore.getState().createBranchFromPrompt(
      `Điểm nóng: ${q.question.slice(0, 35)}...`,
      prompt
    );
    navigate('/hoi-dap-ai', { state: { sessionId: newSessionId, autoSend: true } });
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
  const completedCount = allItems.filter(item => checkedItems[item.id] === true).length;
  const progressPercent = totalItems > 0 ? Math.round((completedCount / totalItems) * 100) : 0;

  const criticalItems = allItems.filter(i => i.priority === 'critical');
  const criticalPending = criticalItems.filter(i => !checkedItems[i.id]).length;
  const importantItems = allItems.filter(i => i.priority === 'important');
  const recommendedItems = allItems.filter(i => i.priority === 'recommended');

  // Risk calculation - Fixed false-green according to Codex Walkthrough Section 7.3
  const totalRiskScore = useMemo(() => {
    return RISK_QUESTIONS.reduce((sum, q) => {
      return sum + (riskAnswers[q.id] ? q.weight : 0);
    }, 0);
  }, [riskAnswers]);

  const maxRiskScore = RISK_QUESTIONS.reduce((sum, q) => sum + q.weight, 0); // 61
  const answeredQuestionsCount = RISK_QUESTIONS.filter(
    q => typeof riskAnswers[q.id] === 'boolean'
  ).length;
  const assessmentComplete = answeredQuestionsCount === RISK_QUESTIONS.length;

  const riskLevel = useMemo(() => {
    if (answeredQuestionsCount === 0) {
      return {
        text: 'CHƯA ĐÁNH GIÁ',
        color: 'text-slate-700 bg-slate-100 dark:bg-slate-800 dark:text-slate-300 border-slate-300',
        desc: 'Chưa thực hiện trả lời bài đánh giá rủi ro. Vui lòng trả lời để nhận diện nguy cơ thực tế.'
      };
    }
    if (!assessmentComplete) {
      return {
        text: `CHƯA ĐỦ DỮ LIỆU (${answeredQuestionsCount}/${RISK_QUESTIONS.length})`,
        color: 'text-amber-700 bg-amber-100 dark:bg-amber-950/60 dark:text-amber-300 border-amber-300',
        desc: `Đã trả lời ${answeredQuestionsCount}/${RISK_QUESTIONS.length} câu. Tiếp tục hoàn thành để có đánh giá toàn diện.`
      };
    }
    if (totalRiskScore <= 15) return { text: 'RỦI RO THẤP', color: 'text-emerald-700 bg-emerald-100 dark:bg-emerald-950/60 dark:text-emerald-300 border-emerald-300', desc: 'Ít dấu hiệu từ câu trả lời tự khai; chưa xác nhận hồ sơ tuân thủ hoặc số thuế.' };
    if (totalRiskScore <= 35) return { text: 'RỦI RO TRUNG BÌNH', color: 'text-amber-700 bg-amber-100 dark:bg-amber-950/60 dark:text-amber-300 border-amber-300', desc: 'Có một số sai sót cần khắc phục ngay và lập bản giải trình trước khi thanh tra.' };
    return { text: 'RỦI RO CAO', color: 'text-red-700 bg-red-100 dark:bg-red-950/60 dark:text-red-300 border-red-300', desc: 'Nguy cơ bị ấn định thuế, loại trừ chi phí và xử phạt nặng! Cần rà soát khẩn cấp.' };
  }, [totalRiskScore, answeredQuestionsCount, assessmentComplete]);

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

  const handleCopyTemplate = async () => {
    try {
      await navigator.clipboard.writeText(selectedTemplate.templateContent);
      setCopiedTemplate(true);
      setTimeout(() => setCopiedTemplate(false), 2000);
    } catch {
      setCopiedTemplate(false);
      alert('Chưa thể tự động sao chép. Vui lòng chọn và sao chép thủ công.');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-in fade-in duration-300">
      {/* Printable Report Header (Active on print) */}
      <div className="hidden print:block border-b-2 border-black pb-4 mb-6">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-sm font-bold uppercase">{currentCase?.entity || 'Kiểu Việt'}</h2>
            <p className="text-xs">Phòng Tài chính - Kế toán</p>
            <p className="text-xs">Mã số thuế: {currentCase?.taxCode} | Kỳ: {currentCase?.periods || 'Chưa xác định'}</p>
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

      {/* Header Điều Hành Ca Kiểm Tra Thuế Kiểu Việt */}
      <div className="print:hidden space-y-4">
        <AuditCaseHeader completedCount={completedCount} totalCount={totalItems} />
        
        {/* Cẩm Nang Hướng Dẫn 4 Bước Sử Dụng Nhanh Cho Kế Toán Kiểu Việt */}
        <div className="rounded-2xl border border-blue-200/80 bg-gradient-to-r from-blue-50/70 via-indigo-50/50 to-emerald-50/60 dark:from-blue-950/30 dark:via-indigo-950/20 dark:to-emerald-950/20 p-5 shadow-xs">
          <div className="flex items-center gap-2 mb-3">
            <span className="p-1.5 rounded-lg bg-blue-600 text-white shadow-2xs">
              <Sparkles className="h-4 w-4" />
            </span>
            <div>
              <h3 className="text-sm font-bold text-blue-950 dark:text-blue-100">
                Cẩm Nang 4 Bước Thao Tác Chuẩn Bị Kiểm Tra Thuế Dành Cho Kế Toán Kiểu Việt
              </h3>
              <p className="text-[11px] text-muted-foreground">
                Thực hiện tuần tự 4 bước nghiệp vụ bên dưới để hoàn thiện toàn bộ hồ sơ sổ sách trước khi đoàn kiểm tra công bố quyết định.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
            <div className="bg-card/90 rounded-xl p-3.5 border border-border/80 space-y-1.5 shadow-2xs">
              <div className="font-bold text-blue-700 dark:text-blue-400 flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 flex items-center justify-center font-black text-[11px]">1</span>
                <span>Thiết Lập Ca Kiểm Tra</span>
              </div>
              <p className="text-muted-foreground leading-relaxed text-[11px]">
                Chọn đợt kiểm tra và niên độ thuế ở bảng trên để phân lập dữ liệu và quản lý sổ bàn giao chứng từ theo từng quyết định thanh tra.
              </p>
            </div>

            <div className="bg-card/90 rounded-xl p-3.5 border border-border/80 space-y-1.5 shadow-2xs">
              <div className="font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 flex items-center justify-center font-black text-[11px]">2</span>
                <span>Chuẩn Bị 15 Bộ Hồ Sơ</span>
              </div>
              <p className="text-muted-foreground leading-relaxed text-[11px]">
                Vào tab "Chuẩn bị từng hồ sơ", chọn mảng kinh doanh (Gỗ, Bê tông, Đá, Xây lắp) để gom đủ chứng từ gốc và tải bảng CSV đối soát.
              </p>
            </div>

            <div className="bg-card/90 rounded-xl p-3.5 border border-border/80 space-y-1.5 shadow-2xs">
              <div className="font-bold text-amber-700 dark:text-amber-400 flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300 flex items-center justify-center font-black text-[11px]">3</span>
                <span>Rà Soát Điểm Nóng & Sổ</span>
              </div>
              <p className="text-muted-foreground leading-relaxed text-[11px]">
                Tick chọn Checklist 55 mục, làm bài tự đánh giá 15 rủi ro và sử dụng 6 công cụ đối chiếu để rà soát chênh lệch trước ngày đoàn vào.
              </p>
            </div>

            <div className="bg-card/90 rounded-xl p-3.5 border border-border/80 space-y-1.5 shadow-2xs">
              <div className="font-bold text-purple-700 dark:text-purple-400 flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 flex items-center justify-center font-black text-[11px]">4</span>
                <span>Phòng Thủ & Giải Trình</span>
              </div>
              <p className="text-muted-foreground leading-relaxed text-[11px]">
                Khai thác 15 mẫu văn bản giải trình hành chính, tra cứu 84 văn bản gốc và kích hoạt Trợ lý AI để luyện tập bảo vệ số liệu.
              </p>
            </div>
          </div>
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
              55 mục rà soát theo 84 văn bản pháp luật hiện hành
            </p>
          </CardContent>
        </Card>
      </div>

      {/* TABS NỘI DUNG CHÍNH (Screen Only) - HỆ THỐNG 3 CỤM NGHIỆP VỤ CHUYÊN SÂU */}
      <Tabs value={auditTab} onValueChange={setAuditTab} className="print:hidden space-y-6">
        <div className="bg-card rounded-2xl border border-border p-3.5 shadow-xs space-y-3">
          <TabsList className="bg-transparent p-0 w-full h-auto grid grid-cols-1 md:grid-cols-3 gap-3">
            {/* Cụm 1: Chuẩn bị thực chiến */}
            <div className="bg-muted/40 dark:bg-muted/20 rounded-xl p-2.5 border border-border/60 space-y-1.5 flex flex-col justify-between">
              <div className="flex items-center justify-between px-1 text-[11px] font-bold text-blue-700 dark:text-blue-400 uppercase tracking-wider">
                <span className="flex items-center gap-1.5"><Sparkles className="h-3.5 w-3.5" /> 1. Chuẩn Bị & Bàn Giao</span>
                <span className="text-[10px] text-muted-foreground font-medium">3 chức năng</span>
              </div>
              <div className="grid grid-cols-1 gap-1">
                <TabsTrigger 
                  value="preparation" 
                  className="rounded-lg text-xs font-semibold py-2 px-3 justify-start gap-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white shadow-none transition-all"
                >
                  <Building2 className="h-3.5 w-3.5 shrink-0" />
                  <span className="truncate">Chuẩn bị từng hồ sơ</span>
                  <Badge variant="outline" className="ml-auto text-[10px] font-bold px-1.5 py-0 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 border-none">15 bộ</Badge>
                </TabsTrigger>
                <TabsTrigger 
                  value="timeline" 
                  className="rounded-lg text-xs font-medium py-2 px-3 justify-start gap-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white shadow-none transition-all"
                >
                  <Clock className="h-3.5 w-3.5 shrink-0" />
                  <span className="truncate">3. Lộ Trình 30-15-7 Ngày</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="evidence-log" 
                  className="rounded-lg text-xs font-medium py-2 px-3 justify-start gap-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white shadow-none transition-all"
                >
                  <FolderArchive className="h-3.5 w-3.5 shrink-0" />
                  <span className="truncate">📁 Hồ Sơ & Sổ Đoàn Kiểm Tra</span>
                </TabsTrigger>
              </div>
            </div>

            {/* Cụm 2: Rà soát rủi ro & đối chiếu số liệu */}
            <div className="bg-muted/40 dark:bg-muted/20 rounded-xl p-2.5 border border-border/60 space-y-1.5 flex flex-col justify-between">
              <div className="flex items-center justify-between px-1 text-[11px] font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider">
                <span className="flex items-center gap-1.5"><Scale className="h-3.5 w-3.5" /> 2. Rà Soát & Đối Chiếu</span>
                <span className="text-[10px] text-muted-foreground font-medium">3 chức năng</span>
              </div>
              <div className="grid grid-cols-1 gap-1">
                <TabsTrigger 
                  value="checklist" 
                  className="rounded-lg text-xs font-medium py-2 px-3 justify-start gap-2 data-[state=active]:bg-emerald-600 data-[state=active]:text-white shadow-none transition-all"
                >
                  <FileText className="h-3.5 w-3.5 shrink-0" />
                  <span className="truncate">1. Checklist Hồ Sơ ({completedCount}/{totalItems})</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="risk" 
                  className="rounded-lg text-xs font-medium py-2 px-3 justify-start gap-2 data-[state=active]:bg-emerald-600 data-[state=active]:text-white shadow-none transition-all"
                >
                  <AlertTriangle className="h-3.5 w-3.5 shrink-0" />
                  <span className="truncate">2. Tự Đánh Giá Rủi Ro ({totalRiskScore}đ)</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="reconcile" 
                  className="rounded-lg text-xs font-medium py-2 px-3 justify-start gap-2 data-[state=active]:bg-emerald-600 data-[state=active]:text-white shadow-none transition-all"
                >
                  <Scale className="h-3.5 w-3.5 shrink-0" />
                  <span className="truncate">Đối chiếu sổ và nhập CSV</span>
                </TabsTrigger>
              </div>
            </div>

            {/* Cụm 3: Phòng thủ, mẫu biểu & pháp lý */}
            <div className="bg-muted/40 dark:bg-muted/20 rounded-xl p-2.5 border border-border/60 space-y-1.5 flex flex-col justify-between">
              <div className="flex items-center justify-between px-1 text-[11px] font-bold text-purple-700 dark:text-purple-400 uppercase tracking-wider">
                <span className="flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5" /> 3. Phòng Thủ & Pháp Lý</span>
                <span className="text-[10px] text-muted-foreground font-medium">4 chức năng</span>
              </div>
              <div className="grid grid-cols-2 gap-1">
                <TabsTrigger 
                  value="templates" 
                  className="rounded-lg text-xs font-medium py-2 px-2 justify-start gap-1 data-[state=active]:bg-purple-600 data-[state=active]:text-white shadow-none transition-all"
                >
                  <FileSpreadsheet className="h-3.5 w-3.5 shrink-0" />
                  <span className="truncate">5. Mẫu giải trình ({AUDIT_TEMPLATES.length} mẫu)</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="rights" 
                  className="rounded-lg text-xs font-medium py-2 px-2 justify-start gap-1 data-[state=active]:bg-purple-600 data-[state=active]:text-white shadow-none transition-all"
                >
                  <ShieldCheck className="h-3.5 w-3.5 shrink-0" />
                  <span className="truncate">4. Quyền DN & Kỹ Năng</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="ai-advisor" 
                  className="rounded-lg text-xs font-medium py-2 px-2 justify-start gap-1 data-[state=active]:bg-purple-600 data-[state=active]:text-white shadow-none transition-all"
                >
                  <Bot className="h-3.5 w-3.5 shrink-0 text-emerald-500 animate-pulse" />
                  <span className="truncate">6. Trợ Lý AI Phản Biện (Gemini)</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="legal-corpus" 
                  className="rounded-lg text-xs font-medium py-2 px-2 justify-start gap-1 data-[state=active]:bg-purple-600 data-[state=active]:text-white shadow-none transition-all"
                >
                  <BookOpen className="h-3.5 w-3.5 shrink-0" />
                  <span className="truncate">Kho luật bổ sung</span>
                </TabsTrigger>
              </div>
            </div>
          </TabsList>
        </div>

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
                    data-checklist-item={item.id}
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
                      <div className="space-y-2 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-xs font-bold text-muted-foreground">#{idx + 1}</span>
                          <span className="text-sm font-bold text-foreground">{q.question}</span>
                          <Badge variant="outline" className="text-[10px] border-amber-300 text-amber-700 dark:text-amber-300 font-semibold">
                            Trọng số: +{q.weight}đ
                          </Badge>
                        </div>

                        {/* Thanh điều hướng văn bản & Phân nhánh hội thoại */}
                        <div className="flex flex-wrap items-center gap-2 pt-1">
                          {/* Nút ĐƯA TỚI TRANG VĂN BẢN */}
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => navigate(`/thu-vien/${q.decreeId}?dieu=${q.articleNum}`)}
                            className="h-7 text-xs bg-emerald-50/80 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-200 border-emerald-300 dark:border-emerald-800 hover:bg-emerald-100 dark:hover:bg-emerald-900 gap-1.5 font-semibold cursor-pointer shadow-2xs"
                            title={`Chuyển thẳng tới trang văn bản: ${q.decreeTitle} (Điều ${q.articleNum}) trong Thư viện`}
                          >
                            <BookOpen className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
                            <span className="truncate max-w-[280px] sm:max-w-none">{q.decreeTitle} — {q.articleRef}</span>
                            <ExternalLink className="h-3 w-3 opacity-70" />
                          </Button>

                          {/* Nút PHÂN NHÁNH CUỘC TRÒ CHUYỆN SANG HỎI ĐÁP AI */}
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleBranchToAIChat(q)}
                            className="h-7 text-xs bg-purple-50/80 dark:bg-purple-950/40 text-purple-800 dark:text-purple-200 border-purple-300 dark:border-purple-800 hover:bg-purple-100 dark:hover:bg-purple-900 gap-1.5 font-semibold cursor-pointer shadow-2xs"
                            title="Phân nhánh cuộc trò chuyện: Mở luồng tư vấn AI chuyên sâu cho điểm nóng này"
                          >
                            <GitBranch className="h-3.5 w-3.5 text-purple-600 dark:text-purple-400" />
                            <span>Phân nhánh Hỏi AI 🌿</span>
                          </Button>

                          {/* Nút Mở rộng dẫn chứng & giải trình */}
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => toggleExpandRiskItem(q.id)}
                            className="h-7 text-xs text-muted-foreground hover:text-foreground gap-1 px-2 cursor-pointer ml-auto"
                          >
                            {(expandedRiskItems[q.id] || isYes) ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
                            <span>{(expandAllRisk || expandedRiskItems[q.id] || isYes) ? 'Thu gọn dẫn chứng' : 'Xem dẫn chứng & hồ sơ giải trình'}</span>
                          </Button>
                        </div>
                      </div>

                      {/* Nút Yes / No */}
                      <div className="flex items-center gap-2 shrink-0 pt-1 sm:pt-0">
                        <Button
                          variant={isYes ? 'default' : 'outline'}
                          size="sm"
                          onClick={() => toggleRiskAnswer(q.id, true)}
                          className={`h-8 px-3 text-xs font-bold ${
                            isYes 
                              ? 'bg-red-600 hover:bg-red-700 text-white shadow-xs' 
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
                              ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs' 
                              : 'hover:border-emerald-300 hover:text-emerald-600'
                          }`}
                        >
                          KHÔNG ghi nhận
                        </Button>
                      </div>
                    </div>

                    {/* KHỐI DẪN CHỨNG PHÁP LÝ & HỒ SƠ GIẢI TRÌNH CHUYÊN SÂU */}
                    {(expandAllRisk || expandedRiskItems[q.id] || isYes) && (
                      <div className="mt-3.5 pt-3.5 border-t border-border/60 space-y-3 animate-in fade-in duration-200">
                        {/* 1. Dẫn chứng pháp lý nguyên văn trích dẫn từ văn bản */}
                        <div className="bg-amber-50/70 dark:bg-amber-950/25 rounded-xl p-3.5 border border-amber-200 dark:border-amber-900/40 text-xs">
                          <div className="flex items-center justify-between gap-2 font-bold text-amber-900 dark:text-amber-200 mb-1.5">
                            <div className="flex items-center gap-1.5">
                              <Scale className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                              <span>Dẫn chứng pháp lý nguyên văn & Căn cứ kiểm tra:</span>
                            </div>
                            <button 
                              onClick={() => navigate(`/thu-vien/${q.decreeId}?dieu=${q.articleNum}`)}
                              className="text-[11px] text-amber-700 dark:text-amber-300 hover:underline flex items-center gap-1 font-semibold cursor-pointer"
                            >
                              Đọc toàn văn Điều {q.articleNum} ↗
                            </button>
                          </div>
                          <p className="italic leading-relaxed text-amber-950 dark:text-amber-100 bg-white/70 dark:bg-card/50 p-2.5 rounded-lg border border-amber-200/60 dark:border-amber-900/30">
                            "{q.legalQuote}"
                          </p>
                        </div>

                        {/* 2. Bản chất rủi ro & Kỹ thuật đối chiếu của đoàn thanh tra */}
                        <div className="bg-red-50/50 dark:bg-red-950/20 rounded-xl p-3.5 border border-red-200 dark:border-red-900/40 text-xs space-y-2">
                          <div className="flex items-center gap-1.5 font-bold text-red-800 dark:text-red-200">
                            <AlertTriangle className="h-4 w-4 text-red-600 dark:text-red-400" />
                            <span>Bản chất rủi ro nghiệp vụ & Kỹ thuật kiểm tra của Đoàn Thuế:</span>
                          </div>
                          <p className="leading-relaxed text-red-950 dark:text-red-200">
                            {q.riskAnalysis}
                          </p>
                          <div className="bg-red-100/60 dark:bg-red-900/30 p-2.5 rounded-lg text-[11px] text-red-900 dark:text-red-100 font-medium">
                            <strong>🚨 Khung xử phạt dự kiến:</strong> {q.penaltyFramework}
                          </div>
                        </div>

                        {/* 3. Danh mục hồ sơ & chứng từ gốc bắt buộc kẹp cùng */}
                        <div className="bg-blue-50/50 dark:bg-blue-950/20 rounded-xl p-3.5 border border-blue-200 dark:border-blue-900/40 text-xs">
                          <div className="flex items-center gap-1.5 font-bold text-blue-900 dark:text-blue-200 mb-1.5">
                            <FolderArchive className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                            <span>Danh mục Hồ sơ & Chứng từ gốc bắt buộc phải chuẩn bị kẹp cùng:</span>
                          </div>
                          <ul className="space-y-1 pl-5 list-disc text-blue-950 dark:text-blue-100">
                            {q.defenseDocuments.map((doc, dIdx) => (
                              <li key={dIdx} className="leading-relaxed font-medium">
                                {doc}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* 4. Biện pháp xử lý cấp bách */}
                        <div className="bg-emerald-50/60 dark:bg-emerald-950/25 rounded-xl p-3 border border-emerald-200 dark:border-emerald-900/40 text-xs flex items-start gap-2 text-emerald-900 dark:text-emerald-200">
                          <ShieldCheck className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                          <div>
                            <strong className="font-bold">Biện pháp xử lý ngay:</strong> {q.tip}
                          </div>
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
        {/* TAB 3: LỘ TRÌNH 30-15-7 NGÀY (CHUYÊN SÂU THỰC CHIẾN KIỂU VIỆT) */}
        {/* ========================================================================= */}
        <TabsContent value="timeline" className="space-y-6">
          <div className="bg-muted/30 border border-border rounded-2xl p-4 sm:p-6 space-y-2">
            <div className="flex items-center gap-2 text-sm font-black text-foreground uppercase tracking-wide">
              <Clock className="h-5 w-5 text-blue-600" />
              <span>Lộ Trình Chuẩn Bị Thực Chiến 30 - 15 - 7 Ngày Cho Ca Kiểm Tra Thuế</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Mỗi mốc thời gian gắn liền với quy định luật quản lý thuế nghiêm ngặt: T-30 là thời điểm duy nhất để nộp tờ khai bổ sung Mẫu 01/KHBS miễn phạt 20% khai sai; T-15 kẹp hồ sơ 3 bên đồng bộ; T-7 diễn tập phản biện và bố trí phòng làm việc an toàn.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {TIMELINE_PHASES.map(phase => {
              const borderColors = {
                1: 'border-emerald-300 dark:border-emerald-800',
                2: 'border-blue-300 dark:border-blue-800',
                3: 'border-amber-300 dark:border-amber-800',
              }[phase.phase as 1 | 2 | 3];

              const headerColors = {
                1: 'bg-emerald-50 text-emerald-950 dark:bg-emerald-950/40 dark:text-emerald-100 border-emerald-200 dark:border-emerald-900',
                2: 'bg-blue-50 text-blue-950 dark:bg-blue-950/40 dark:text-blue-100 border-blue-200 dark:border-blue-900',
                3: 'bg-amber-50 text-amber-950 dark:bg-amber-950/40 dark:text-amber-100 border-amber-200 dark:border-amber-900',
              }[phase.phase as 1 | 2 | 3];

              const badgeColors = {
                1: 'bg-emerald-600 text-white',
                2: 'bg-blue-600 text-white',
                3: 'bg-amber-600 text-white',
              }[phase.phase as 1 | 2 | 3];

              return (
                <Card key={phase.phase} className={`border-2 shadow-xs flex flex-col ${borderColors}`}>
                  <div className={`p-4 rounded-t-xl border-b space-y-2 ${headerColors}`}>
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-extrabold uppercase tracking-wider opacity-80">Giai đoạn {phase.phase}</span>
                      <Badge className={`text-[10px] font-bold ${badgeColors}`}>
                        {phase.daysBefore}
                      </Badge>
                    </div>
                    <div className="text-base font-black">
                      {phase.label}
                    </div>
                    <p className="text-[11px] leading-relaxed opacity-90 border-t border-current/20 pt-2 font-medium">
                      🎯 <strong>Mục tiêu:</strong> {phase.objective}
                    </p>
                    <div className="text-[10px] italic bg-white/60 dark:bg-card/40 p-2 rounded-lg border border-current/15 leading-snug">
                      ⚖️ <strong>Căn cứ:</strong> {phase.legalRule}
                    </div>
                  </div>

                  <CardContent className="p-4 flex-1 space-y-3.5 text-xs">
                    {phase.tasks.map((task, tIdx) => {
                      const isExpanded = Boolean(expandedTimelineTasks[task.id]);
                      return (
                        <div 
                          key={task.id} 
                          className="rounded-xl border border-border/70 bg-card p-3.5 space-y-2.5 shadow-2xs hover:border-emerald-300 transition-all"
                        >
                          <div className="flex items-start justify-between gap-2">
                            <div className="flex items-start gap-2">
                              <span className="font-black text-muted-foreground shrink-0 mt-0.5 text-[11px] bg-muted px-1.5 py-0.5 rounded">
                                #{tIdx + 1}
                              </span>
                              <h4 className="font-bold text-foreground text-xs leading-snug">
                                {task.title}
                              </h4>
                            </div>
                          </div>

                          {/* Căn cứ pháp lý & Nút điều hướng deep-link */}
                          <div className="flex flex-wrap items-center gap-1.5">
                            <button
                              onClick={() => navigate(`/thu-vien/${task.decreeId}?dieu=${task.articleNum}`)}
                              className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-semibold bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 hover:bg-emerald-100 transition-colors cursor-pointer"
                            >
                              <BookOpen className="h-3 w-3 text-emerald-600" />
                              <span>{task.decreeLabel}</span>
                              <ExternalLink className="h-2.5 w-2.5 opacity-70" />
                            </button>

                            <button
                              onClick={() => toggleExpandTimelineTask(task.id)}
                              className="ml-auto text-[11px] font-semibold text-muted-foreground hover:text-foreground flex items-center gap-0.5"
                            >
                              <span>{isExpanded ? 'Thu gọn' : 'Xem chi tiết'}</span>
                              {isExpanded ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
                            </button>
                          </div>

                          {/* Khối chi tiết bung mở */}
                          {isExpanded && (
                            <div className="mt-2 pt-2.5 border-t border-border/50 space-y-2.5 animate-in fade-in duration-150 text-[11px]">
                              {/* Hướng dẫn thao tác */}
                              <div className="bg-muted/40 p-2.5 rounded-lg space-y-1">
                                <div className="font-bold text-foreground flex items-center gap-1">
                                  <Sparkles className="h-3 w-3 text-amber-500" />
                                  <span>Hướng dẫn hành động:</span>
                                </div>
                                <p className="text-muted-foreground leading-relaxed">
                                  {task.actionGuide}
                                </p>
                              </div>

                              {/* Hồ sơ chứng từ bắt buộc */}
                              <div className="bg-blue-50/40 dark:bg-blue-950/20 p-2.5 rounded-lg border border-blue-100 dark:border-blue-900/40 space-y-1">
                                <div className="font-bold text-blue-900 dark:text-blue-200 flex items-center gap-1">
                                  <FolderArchive className="h-3 w-3 text-blue-600" />
                                  <span>Hồ sơ chứng từ bắt buộc kẹp cùng:</span>
                                </div>
                                <ul className="list-disc pl-4 space-y-0.5 text-blue-950 dark:text-blue-100">
                                  {task.requiredDossier.map((doc, dIdx) => (
                                    <li key={dIdx} className="leading-tight">{doc}</li>
                                  ))}
                                </ul>
                              </div>

                              {/* Rủi ro nếu chậm trễ */}
                              <div className="bg-red-50/40 dark:bg-red-950/20 p-2 rounded-lg border border-red-100 dark:border-red-900/40 text-[10.5px] text-red-900 dark:text-red-200 flex items-start gap-1.5">
                                <AlertTriangle className="h-3 w-3 text-red-600 shrink-0 mt-0.5" />
                                <div><strong>Hậu quả nếu trễ hạn:</strong> {task.riskIfDelayed}</div>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>

        {/* ========================================================================= */}
        {/* TAB 4: QUYỀN DOANH NGHIỆP & KỸ NĂNG TIẾP ĐOÀN (NÂNG CẤP TOÀN DIỆN 8x8) */}
        {/* ========================================================================= */}
        <TabsContent value="rights"><AuditHandoffGuide openWork={()=>setAuditTab('evidence-log')} openLaws={()=>setAuditTab('legal-corpus')}/></TabsContent>


        {/* ========================================================================= */}
        {/* TAB 5: MẪU BIỂU GIẢI TRÌNH THỰC CHIẾN (NÂNG CẤP ĐẦY ĐỦ CĂN CỨ VÀ HỒ SƠ) */}
        {/* ========================================================================= */}
        <TabsContent value="templates" className="space-y-6">
          <div className="bg-muted/30 border border-border rounded-2xl p-4 sm:p-5 space-y-2">
            <div className="flex items-center gap-2 text-sm font-black text-foreground uppercase tracking-wide">
              <FileSpreadsheet className="h-5 w-5 text-teal-600" />
              <span>{AUDIT_TEMPLATES.length} mẫu hồ sơ nội bộ theo nghiệp vụ</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Trang bị đầy đủ thể thức văn bản hành chính theo quy chuẩn, trích dẫn chuẩn xác điều khoản của 55 văn bản quy phạm pháp luật, danh mục hồ sơ gốc bắt buộc kẹp kèm và lập luận đối thoại đanh thép bảo vệ giá vốn cho Công ty Cổ phần Kiểu Việt.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Sidebar danh sách 8 mẫu biểu */}
            <div className="lg:col-span-4 space-y-2.5">
              <div className="text-xs font-bold text-muted-foreground uppercase px-1 mb-2 flex items-center justify-between">
                <span>Danh mục 8 biểu mẫu giải trình:</span>
                <Badge variant="outline" className="text-[10px]">8/8 Chuẩn hoá</Badge>
              </div>
              {AUDIT_TEMPLATES.map((tmpl) => {
                const isSelected = tmpl.id === selectedTemplateId;
                return (
                  <div
                    key={tmpl.id}
                    onClick={() => setSelectedTemplateId(tmpl.id)}
                    className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 shadow-xs ring-1 ring-emerald-500/20'
                        : 'bg-card border-border hover:border-emerald-300'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <Badge variant="outline" className={`text-[10px] font-bold ${isSelected ? 'border-emerald-500 text-emerald-700 dark:text-emerald-300 bg-emerald-100/50 dark:bg-emerald-900/40' : ''}`}>
                        {tmpl.code}
                      </Badge>
                      <span className="text-[10.5px] text-muted-foreground font-medium truncate">{tmpl.category}</span>
                    </div>
                    <div className={`text-xs font-bold mb-1.5 line-clamp-2 ${isSelected ? 'text-emerald-900 dark:text-emerald-200' : 'text-foreground'}`}>
                      {tmpl.title}
                    </div>
                    <div className="flex items-center gap-1 text-[10.5px] text-emerald-700 dark:text-emerald-400 font-medium pt-1 border-t border-border/40">
                      <BookOpen className="h-3 w-3 shrink-0" />
                      <span className="truncate">{tmpl.decreeLabel}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Chi tiết nội dung biểu mẫu */}
            <div className="lg:col-span-8 space-y-4">
              <Card className="border-border shadow-xs overflow-hidden">
                <CardHeader className="p-5 border-b border-border bg-muted/20 space-y-3">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="space-y-1 max-w-xl">
                      <div className="flex items-center gap-2">
                        <Badge className="bg-emerald-600 text-white text-xs font-bold">{selectedTemplate.code}</Badge>
                        <Badge variant="outline" className="text-xs text-muted-foreground font-medium">{selectedTemplate.category}</Badge>
                      </div>
                      <CardTitle className="text-base sm:text-lg text-foreground font-bold leading-snug">
                        {selectedTemplate.title}
                      </CardTitle>
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                      <Button
                        size="sm"
                        onClick={handleCopyTemplate}
                        className="h-8 text-xs bg-emerald-600 hover:bg-emerald-700 text-white gap-1.5 rounded-lg shadow-xs"
                      >
                        {copiedTemplate ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                        {copiedTemplate ? 'Đã sao chép' : 'Sao chép văn bản'}
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="h-8 text-xs"
                        disabled={!caseId} 
                        onClick={async () => {
                          try {
                            await auditDb.work.add({ 
                              id: newId(), 
                              caseId, 
                              kind: 'task', 
                              title: selectedTemplate.title,
                              pillar: 'unassigned', 
                              owner: '', 
                              deadline: '', 
                              requestedBy: '', 
                              receivedAt: '', 
                              status: 'preparing',
                              evidenceIds: [], 
                              response: selectedTemplate.templateContent, 
                              receipt: '', 
                              submittedAt: '', 
                              deliveries: [] 
                            });
                            alert('Đã lưu bản nháp vào Hồ sơ & nhật ký. Mở công việc để chọn mảng, phân công, điền dữ kiện và gắn chứng từ.');
                          } catch { 
                            alert('Không lưu được bản nháp. Hãy kiểm tra dung lượng trình duyệt.'); 
                          }
                        }}
                      >
                        Lập hồ sơ từ mẫu này
                      </Button>
                    </div>
                  </div>

                  {/* Căn cứ pháp lý có nút deep-link mở văn bản */}
                  <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-border/50">
                    <span className="text-xs font-bold text-muted-foreground">Căn cứ pháp luật:</span>
                    <button
                      onClick={() => navigate(`/thu-vien/${selectedTemplate.decreeId}${selectedTemplate.articleNum ? `?dieu=${selectedTemplate.articleNum}` : ""}`)}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 hover:bg-emerald-100 transition-all cursor-pointer shadow-2xs"
                    >
                      <BookOpen className="h-3.5 w-3.5 text-emerald-600" />
                      <span>{selectedTemplate.decreeLabel}</span>
                      <ExternalLink className="h-3 w-3 opacity-70" />
                    </button>
                    <span className="text-[11.5px] text-muted-foreground italic">
                      ({selectedTemplate.legalBase})
                    </span>
                  </div>

                  {/* Rủi ro kiểm tra */}
                  <div className="bg-red-50/50 dark:bg-red-950/20 p-2.5 rounded-lg border border-red-100 dark:border-red-900/40 text-xs text-red-900 dark:text-red-200 flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-red-600 shrink-0 mt-0.5" />
                    <div>
                      <strong>Rủi ro đoàn kiểm tra tập trung soi: </strong>
                      <span>{selectedTemplate.targetRisk}</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-5 space-y-4">
                  {/* Khối hồ sơ chứng từ gốc bắt buộc */}
                  {selectedTemplate.requiredDossier && selectedTemplate.requiredDossier.length > 0 && (
                    <div className="bg-blue-50/40 dark:bg-blue-950/20 p-3.5 rounded-xl border border-blue-100 dark:border-blue-900/40 space-y-2">
                      <div className="font-bold text-blue-900 dark:text-blue-200 flex items-center gap-1.5 text-xs">
                        <FolderArchive className="h-4 w-4 text-blue-600" />
                        <span>Hồ sơ chứng từ gốc bắt buộc kẹp cùng biểu mẫu:</span>
                      </div>
                      <ul className="list-disc pl-5 space-y-1 text-blue-950 dark:text-blue-100 text-xs">
                        {selectedTemplate.requiredDossier.map((doc, dIdx) => (
                          <li key={dIdx} className="leading-relaxed">{doc}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Khối lập luận đối thoại đanh thép */}
                  {selectedTemplate.defenseArguments && selectedTemplate.defenseArguments.length > 0 && (
                    <div className="bg-emerald-50/40 dark:bg-emerald-950/20 p-3.5 rounded-xl border border-emerald-100 dark:border-emerald-900/40 space-y-2">
                      <div className="font-bold text-emerald-900 dark:text-emerald-200 flex items-center gap-1.5 text-xs">
                        <Scale className="h-4 w-4 text-emerald-600" />
                        <span>Lập luận đối thoại then chốt với Trưởng đoàn kiểm tra:</span>
                      </div>
                      <ul className="list-decimal pl-5 space-y-1 text-emerald-950 dark:text-emerald-100 text-xs">
                        {selectedTemplate.defenseArguments.map((arg, aIdx) => (
                          <li key={aIdx} className="leading-relaxed">{arg}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Toàn văn công văn giải trình */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs font-bold text-muted-foreground uppercase px-1">
                      <span>Toàn văn văn bản hành chính hoàn chỉnh:</span>
                      <span className="text-[11px] font-normal text-muted-foreground">Chuẩn thể thức NĐ 30/2020/NĐ-CP</span>
                    </div>
                    <div className="bg-muted/30 border border-border rounded-xl p-4 overflow-x-auto max-h-[500px]">
                      <pre className="font-mono text-xs text-foreground leading-relaxed whitespace-pre-wrap selection:bg-emerald-200 font-serif">
                        {selectedTemplate.templateContent}
                      </pre>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        {/* ========================================================================= */}
        {/* TAB MỚI: 6 CÔNG CỤ ĐỐI CHIẾU SỐ LIỆU TÀI CHÍNH KIỂU VIỆT */}
        {/* ========================================================================= */}
        <TabsContent value="reconcile" className="space-y-6">
          <ReconciliationPanel key={caseId} />
        </TabsContent>

        {/* ========================================================================= */}
        {/* TAB MỚI: HỒ SƠ CHỨNG TỪ & SỔ GIAO VIỆC ĐOÀN KIỂM TRA */}
        {/* ========================================================================= */}
        <TabsContent value="preparation"><AuditPreparationDesk key={caseId} openWork={()=>setAuditTab('evidence-log')} openCalculations={()=>setAuditTab('reconcile')} openLaws={()=>setAuditTab('legal-corpus')}/></TabsContent>
        <TabsContent value="legal-corpus"><AuditLegalLibrary /></TabsContent>
        <TabsContent value="evidence-log" className="space-y-6">
          <EvidencePanel key={`evidence-${caseId}`} />
          <AuditRequestLog key={`work-${caseId}`} />
        </TabsContent>

                {/* TAB 6: TRỢ LÝ AI PHẢN BIỆN BẢO VỆ CHI PHÍ (MỚI) */}
        {/* ========================================================================= */}
        <TabsContent value="ai-advisor" className="space-y-6">
          <TaxAuditAIChat key={caseId} />
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
