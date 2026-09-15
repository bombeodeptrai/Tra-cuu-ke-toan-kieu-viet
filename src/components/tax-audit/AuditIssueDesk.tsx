import React, { useState, useMemo } from 'react';
import { 
  Building2, AlertTriangle, FileText, CheckCircle2, RefreshCw, 
  UploadCloud, Filter, ArrowRight, ShieldCheck, HelpCircle, 
  FileSpreadsheet, Scale, Printer, Download, Eye, ExternalLink,
  Layers, ChevronRight, Check
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { AUDIT_SCENARIOS, type AuditScenario, type ScenarioBranch } from '@/data/audit-issue-scenarios';
import { useAuditIssueStore } from '@/stores/audit-issue-store';
import { AuditImportWizard } from './AuditImportWizard';
import { auditDb, newId, now } from '@/lib/audit/workspace';
import { runReconciliationRules } from '@/lib/audit/reconcile';
import type { Pillar } from '@/types/tax-audit';

interface AuditIssueDeskProps {
  caseId: string;
}

export function AuditIssueDesk({ caseId }: AuditIssueDeskProps) {
  const {
    selectedCategory,
    selectedPillar,
    statusFilter,
    selectedIssueId,
    activeTab,
    setSelectedCategory,
    setSelectedPillar,
    setStatusFilter,
    setSelectedIssueId,
    setActiveTab
  } = useAuditIssueStore();

  const [showImportWizard, setShowImportWizard] = useState(false);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [selectedBranchId, setSelectedBranchId] = useState<string>('explained');
  const [verifiedCauses, setVerifiedCauses] = useState<Record<string, boolean>>({});
  const [reconcileResult, setReconcileResult] = useState<any[]>([]);

  // Current selected scenario
  const currentScenario = useMemo(() => {
    if (!selectedIssueId) return AUDIT_SCENARIOS[0];
    return AUDIT_SCENARIOS.find(s => s.id === selectedIssueId) || AUDIT_SCENARIOS[0];
  }, [selectedIssueId]);

  // Categories for the top cards
  const categories = [
    { id: 'all', label: 'Tất cả sự vụ', count: AUDIT_SCENARIOS.length },
    { id: 'unbilled', label: 'Hóa đơn lệch giao hàng', count: AUDIT_SCENARIOS.filter(s => s.category === 'unbilled').length },
    { id: 'below_cost', label: 'Bán thấp giá / Lỗ', count: AUDIT_SCENARIOS.filter(s => s.category === 'below_cost').length },
    { id: 'stock_mismatch', label: 'Kho lệch thực tế', count: AUDIT_SCENARIOS.filter(s => s.category === 'stock_mismatch').length },
    { id: 'payment_ar', label: 'Công nợ / Thu tiền', count: AUDIT_SCENARIOS.filter(s => s.category === 'payment_ar').length },
    { id: 'wip_cost', label: 'Giá thành / Dở dang 154', count: AUDIT_SCENARIOS.filter(s => s.category === 'wip_cost').length },
    { id: 'other', label: 'Hóa đơn sai / Vấn đề khác', count: AUDIT_SCENARIOS.filter(s => s.category === 'other').length }
  ];

  // Filtered scenarios
  const filteredScenarios = useMemo(() => {
    return AUDIT_SCENARIOS.filter(s => {
      const matchCat = selectedCategory === 'all' || s.category === selectedCategory;
      const matchPillar = selectedPillar === 'all' || s.applicablePillars.includes(selectedPillar) || s.applicablePillars.includes('all');
      return matchCat && matchPillar;
    });
  }, [selectedCategory, selectedPillar]);

  // Handle classification answer
  const handleSelectAnswer = (qId: string, value: string, branch: string) => {
    setAnswers(prev => ({ ...prev, [qId]: value }));
    setSelectedBranchId(branch);
  };

  // Run reconciliation rules for current scenario
  const handleRunReconcile = () => {
    const findings = runReconciliationRules({
      caseId,
      issueId: currentScenario.id,
      deliveries: [
        { id: 'del-01', sku: currentScenario.exampleData.description, quantity: currentScenario.exampleData.physicalQty, deliveryNo: 'PXK-0192' }
      ],
      invoices: [
        { id: 'inv-01', sku: currentScenario.exampleData.description, quantity: currentScenario.exampleData.bookQty, price: currentScenario.exampleData.price, number: '0001248' }
      ]
    });
    setReconcileResult(findings);
  };

  const currentBranch: ScenarioBranch | undefined = currentScenario.branches.find(b => b.branchId === selectedBranchId) || currentScenario.branches[0];

  return (
    <div className="space-y-6 w-full min-w-0 max-w-full overflow-hidden">
      {/* 1. HEADER TỐI GIẢN CHUẨN CODEX (Không quốc hiệu in ấn trên màn hình tác nghiệp) */}
      <div className="bg-card border border-border p-4 sm:p-5 rounded-2xl shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Building2 className="h-4 w-4 text-emerald-600" />
            <span className="font-bold text-xs uppercase tracking-wider text-muted-foreground">Bàn Xử Lý Chênh Lệch & Sự Vụ Thuế</span>
            <Badge variant="outline" className="bg-emerald-50 text-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-300 text-[10px]">
              24 Tình Huống Thực Chiến
            </Badge>
          </div>
          <h2 className="text-base sm:text-lg font-black text-foreground">
            CÔNG TY CỔ PHẦN KIỂU VIỆT — MST: 5901168128
          </h2>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
            <span>Kỳ kiểm tra: <strong className="text-foreground">2023 - 2025</strong></span>
            <span>Lịch đoàn dự kiến: <strong className="text-foreground">Tháng 10/2026</strong></span>
            <span>Trạng thái quyết định: <span className="text-amber-600 font-medium">Chưa ban hành (Giai đoạn tự rà soát)</span></span>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <Button
            size="sm"
            onClick={() => setShowImportWizard(true)}
            className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs gap-1.5 shadow-xs"
          >
            <UploadCloud className="h-4 w-4" />
            <span>Nhập File Đối Chiếu (CSV/XML)</span>
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => window.print()}
            className="text-xs gap-1.5"
          >
            <Printer className="h-4 w-4" />
            <span>In Bản Giải Trình</span>
          </Button>
        </div>
      </div>

      {/* 2. CÁC THẺ PHÂN LOẠI SỰ VỤ (Cards Selector) */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none max-w-full">
        {categories.map(cat => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 border ${
              selectedCategory === cat.id
                ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                : 'bg-card text-muted-foreground border-border hover:bg-muted/60'
            }`}
          >
            <span>{cat.label}</span>
            <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
              selectedCategory === cat.id ? 'bg-white/20 text-white' : 'bg-muted text-foreground'
            }`}>
              {cat.count}
            </span>
          </button>
        ))}
      </div>

      {/* 3. KHÔNG GIAN LÀM VIỆC SỰ VỤ: CỘT DANH SÁCH + 6 VÙNG CHI TIẾT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start w-full min-w-0">
        {/* CỘT TRÁI: DANH SÁCH SỰ VỤ (Col 4) */}
        <div className="lg:col-span-4 min-w-0 space-y-2 bg-card border border-border rounded-2xl p-3 shadow-xs">
          <div className="px-2 py-1 text-xs font-bold text-muted-foreground uppercase flex justify-between items-center">
            <span>Danh sách sự vụ ({filteredScenarios.length})</span>
            <span className="text-[10px] text-muted-foreground">Chọn để xử lý</span>
          </div>

          <div className="space-y-1.5 max-h-[650px] overflow-y-auto pr-1">
            {filteredScenarios.map(s => {
              const active = currentScenario.id === s.id;
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setSelectedIssueId(s.id)}
                  className={`w-full p-3 rounded-xl border text-left transition-all space-y-1 ${
                    active
                      ? 'border-emerald-600 bg-emerald-50/50 dark:bg-emerald-950/30 shadow-2xs'
                      : 'border-border/70 hover:bg-muted/40'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono font-bold text-xs text-emerald-700 dark:text-emerald-400">
                      {s.id}
                    </span>
                    <Badge variant="outline" className="text-[9px] py-0 px-1.5">
                      {s.category}
                    </Badge>
                  </div>
                  <div className="font-semibold text-xs text-foreground line-clamp-1">
                    {s.title}
                  </div>
                  <p className="text-[11px] text-muted-foreground line-clamp-2 leading-relaxed">
                    {s.summary}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* CỘT PHẢI: 6 VÙNG CHI TIẾT SỰ VỤ (Col 8) */}
        <div className="lg:col-span-8 min-w-0 bg-card border border-border rounded-2xl shadow-xs overflow-hidden">
          {/* Header Sự Vụ Đang Chọn */}
          <div className="p-4 sm:p-5 border-b border-border bg-muted/20 space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <Badge className="bg-emerald-600 text-white font-mono">{currentScenario.id}</Badge>
                <h3 className="font-bold text-sm sm:text-base text-foreground">
                  {currentScenario.title}
                </h3>
              </div>
              <Badge variant="outline" className="border-amber-300 text-amber-800 bg-amber-50 text-[10px]">
                Đang rà soát đối chiếu
              </Badge>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {currentScenario.differenceComparison}
            </p>

            {/* Sub-tabs 6 vùng nghiệp vụ */}
            <div className="flex items-center gap-1 pt-2 overflow-x-auto border-t border-border/50">
              {[
                { id: 'dossier', label: '1. Dữ kiện đã có' },
                { id: 'questions', label: '2. Phân loại (3 câu)' },
                { id: 'reconcile', label: '3. Đối chiếu dòng' },
                { id: 'causes', label: '4. Xác nhận nguyên nhân' },
                { id: 'solution', label: '5. Phương án 4 bảng' },
                { id: 'report', label: '6. Bản giải trình xuất' }
              ].map(tab => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                    activeTab === tab.id
                      ? 'bg-foreground text-background'
                      : 'text-muted-foreground hover:bg-muted'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="p-5 space-y-6 text-xs">
            {/* VÙNG 1: DỮ KIỆN ĐÃ CÓ */}
            {activeTab === 'dossier' && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3 bg-muted/30 rounded-xl border border-border/60 space-y-1">
                    <span className="text-muted-foreground">Mảng hoạt động áp dụng:</span>
                    <div className="font-semibold text-foreground">
                      {currentScenario.applicablePillars.includes('all') ? 'Áp dụng chung toàn bộ 4 mảng' : currentScenario.applicablePillars.join(', ')}
                    </div>
                  </div>
                  <div className="p-3 bg-muted/30 rounded-xl border border-border/60 space-y-1">
                    <span className="text-muted-foreground">Ví dụ đối tượng kiểm tra:</span>
                    <div className="font-semibold text-foreground">{currentScenario.exampleData.description}</div>
                  </div>
                </div>

                <div className="p-4 bg-muted/20 rounded-xl border border-border/70 space-y-2">
                  <div className="font-bold text-foreground flex items-center gap-1.5">
                    <FileSpreadsheet className="h-4 w-4 text-emerald-600" />
                    <span>Dữ liệu số lượng & giá tham chiếu:</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
                    <div className="p-2 bg-card rounded-lg border">
                      <span className="text-muted-foreground text-[10px]">Số lượng sổ sách:</span>
                      <div className="font-bold text-sm text-foreground">{currentScenario.exampleData.bookQty} {currentScenario.exampleData.unit}</div>
                    </div>
                    <div className="p-2 bg-card rounded-lg border">
                      <span className="text-muted-foreground text-[10px]">Số lượng thực tế:</span>
                      <div className="font-bold text-sm text-emerald-600">{currentScenario.exampleData.physicalQty} {currentScenario.exampleData.unit}</div>
                    </div>
                    <div className="p-2 bg-card rounded-lg border">
                      <span className="text-muted-foreground text-[10px]">Đơn giá tham chiếu:</span>
                      <div className="font-bold text-sm text-blue-600">{currentScenario.exampleData.price} đ</div>
                    </div>
                    <div className="p-2 bg-card rounded-lg border">
                      <span className="text-muted-foreground text-[10px]">Đơn vị tính:</span>
                      <div className="font-bold text-sm text-foreground">{currentScenario.exampleData.unit}</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="font-bold text-foreground">Hồ sơ chứng từ gốc cần thu thập:</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {currentScenario.dossierChecklist.map((doc, idx) => (
                      <div key={idx} className="flex items-center gap-2 p-2 rounded-lg bg-card border border-border">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                        <span>{doc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* VÙNG 2: CÂU HỎI PHÂN LOẠI (Tối đa 3 câu / bước) */}
            {activeTab === 'questions' && (
              <div className="space-y-4">
                <div className="p-3 bg-blue-50/50 dark:bg-blue-950/20 rounded-xl border border-blue-200 dark:border-blue-900/40 text-blue-900 dark:text-blue-200 leading-relaxed">
                  💡 Trả lời các câu hỏi sau để hệ thống tự động phân nhánh: (1) Đủ chứng cứ có thể giải thích; (2) Sai sót cần sửa; (3) Thiếu dữ kiện cần xác minh; (4) Cảnh báo đặc biệt cần Giám đốc duyệt.
                </div>

                {currentScenario.questions.map(q => (
                  <div key={q.id} className="space-y-2 p-4 bg-muted/20 border border-border rounded-xl">
                    <div className="font-bold text-foreground text-sm">{q.text}</div>
                    <div className="space-y-2">
                      {q.options.map(opt => {
                        const selected = answers[q.id] === opt.value;
                        return (
                          <div
                            key={opt.value}
                            onClick={() => handleSelectAnswer(q.id, opt.value, opt.branch)}
                            className={`p-3 rounded-xl border cursor-pointer transition-all ${
                              selected
                                ? 'border-emerald-600 bg-emerald-50/60 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200'
                                : 'border-border bg-card hover:bg-muted/40'
                            }`}
                          >
                            <div className="flex items-center justify-between font-semibold">
                              <span>{opt.label}</span>
                              {selected && <Check className="h-4 w-4 text-emerald-600" />}
                            </div>
                            <p className="text-[11px] text-muted-foreground mt-1">
                              👉 Hướng dẫn hành động: {opt.actionGuide}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* VÙNG 3: ĐỐI CHIẾU DÒNG CHỨNG TỪ */}
            {activeTab === 'reconcile' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="font-bold text-foreground">Bảng đối chiếu dòng chứng từ thời gian thực:</div>
                  <Button size="sm" onClick={handleRunReconcile} className="text-xs bg-emerald-600 text-white gap-1.5">
                    <RefreshCw className="h-3.5 w-3.5" /> Chạy đối chiếu dòng
                  </Button>
                </div>

                <div className="overflow-x-auto border border-border rounded-xl">
                  <table className="w-full text-xs border-collapse">
                    <thead>
                      <tr className="bg-muted text-foreground">
                        <th className="p-2.5 text-left border-b">STT</th>
                        <th className="p-2.5 text-left border-b">Tên hàng / SKU</th>
                        <th className="p-2.5 text-right border-b">Thực giao</th>
                        <th className="p-2.5 text-right border-b">Trên Hóa đơn</th>
                        <th className="p-2.5 text-right border-b">Chênh lệch</th>
                        <th className="p-2.5 text-left border-b">Đơn vị</th>
                        <th className="p-2.5 text-center border-b">Trạng thái</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="hover:bg-muted/30">
                        <td className="p-2.5 border-b font-mono">01</td>
                        <td className="p-2.5 border-b font-semibold">{currentScenario.exampleData.description}</td>
                        <td className="p-2.5 border-b text-right font-mono">{currentScenario.exampleData.physicalQty}</td>
                        <td className="p-2.5 border-b text-right font-mono">{currentScenario.exampleData.bookQty}</td>
                        <td className="p-2.5 border-b text-right font-mono text-red-600 font-bold">
                          {Number(currentScenario.exampleData.physicalQty) - Number(currentScenario.exampleData.bookQty)}
                        </td>
                        <td className="p-2.5 border-b">{currentScenario.exampleData.unit}</td>
                        <td className="p-2.5 border-b text-center">
                          <Badge variant="outline" className="text-red-700 bg-red-50 border-red-300 text-[10px]">
                            Lệch số lượng
                          </Badge>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {reconcileResult.length > 0 && (
                  <div className="space-y-2 pt-2">
                    <div className="font-bold text-foreground">Kết quả Engine kiểm tra ({reconcileResult.length} phát hiện):</div>
                    {reconcileResult.map((f, i) => (
                      <div key={i} className="p-3 rounded-xl border border-amber-300 bg-amber-50/50 dark:bg-amber-950/20 text-amber-900 dark:text-amber-200 flex items-start gap-2">
                        <AlertTriangle className="h-4 w-4 shrink-0 text-amber-600 mt-0.5" />
                        <div>
                          <strong>[{f.ruleId}]:</strong> {f.explanation}
                          <div className="text-[11px] text-muted-foreground mt-1">Cần bổ sung: {f.missing.join(', ')}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* VÙNG 4: XÁC NHẬN NGUYÊN NHÂN */}
            {activeTab === 'causes' && (
              <div className="space-y-4">
                <div className="font-bold text-foreground">
                  Phân định giữa dấu hiệu do máy phát hiện và nguyên nhân thực tế người rà soát xác nhận:
                </div>
                <div className="space-y-2">
                  {[
                    { id: 'c1', label: 'Do tiến độ công trường dồn vào ban đêm dẫn đến giao hàng trước, xuất hóa đơn sau' },
                    { id: 'c2', label: 'Do sai sót đánh máy số lượng trên phần mềm phát hành hóa đơn' },
                    { id: 'c3', label: 'Khách hàng yêu cầu giữ lại một phần khối lượng để nghiệm thu sau đợt mưa bão' }
                  ].map(c => (
                    <label key={c.id} className="flex items-center gap-2 p-3 bg-muted/20 border border-border rounded-xl cursor-pointer hover:bg-muted/40">
                      <input
                        type="checkbox"
                        checked={verifiedCauses[c.id] || false}
                        onChange={(e) => setVerifiedCauses(prev => ({ ...prev, [c.id]: e.target.checked }))}
                        className="rounded text-emerald-600"
                      />
                      <span className="font-medium text-foreground">{c.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* VÙNG 5: PHƯƠNG ÁN XỬ LÝ 4 BẢNG TÁCH BẠCH */}
            {activeTab === 'solution' && (
              <div className="space-y-4">
                <div className="font-bold text-foreground text-sm flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-emerald-600" />
                  <span>Phương án xử lý toàn diện (4 Bảng độc lập chuẩn Codex):</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Bảng A: Xác minh thực tế */}
                  <div className="p-4 rounded-xl border border-border bg-card space-y-2 shadow-2xs">
                    <div className="font-bold text-foreground text-blue-700 dark:text-blue-400">
                      (A) Xác Minh Thực Tế:
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {currentBranch?.description}
                    </p>
                    <div className="text-[11px] text-foreground">
                      <strong>Hồ sơ cần nộp:</strong> {currentBranch?.requiredDossiers.join(', ')}
                    </div>
                  </div>

                  {/* Bảng B: Xử lý hóa đơn */}
                  <div className="p-4 rounded-xl border border-border bg-card space-y-2 shadow-2xs">
                    <div className="font-bold text-foreground text-emerald-700 dark:text-emerald-400">
                      (B) Dự Thảo Xử Lý Hóa Đơn:
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {currentBranch?.invoiceAction || 'Không yêu cầu lập lại hóa đơn nếu dữ liệu đã khớp với phụ lục nghiệm thu khối lượng hoàn thành.'}
                    </p>
                  </div>

                  {/* Bảng C: Ảnh hưởng kế toán */}
                  <div className="p-4 rounded-xl border border-border bg-card space-y-2 shadow-2xs">
                    <div className="font-bold text-foreground text-purple-700 dark:text-purple-400">
                      (C) Dự Thảo Ảnh Hưởng Sổ Sách:
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {currentBranch?.accountingAdjustment || 'Rà soát số dư TK 131, TK 511 và TK 154 tương ứng đúng niên độ kế toán phát sinh.'}
                    </p>
                  </div>

                  {/* Bảng D: Nghĩa vụ thuế phát sinh */}
                  <div className="p-4 rounded-xl border border-border bg-card space-y-2 shadow-2xs">
                    <div className="font-bold text-foreground text-amber-700 dark:text-amber-400">
                      (D) Kê Khai Thuế & Tiền Chậm Nộp:
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      Chỉ kê khai bổ sung nếu làm tăng số thuế phải nộp. Không tự động kết luận có tiền phạt 20% khi tự phát hiện trước thanh tra.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* VÙNG 6: BẢN GIẢI TRÌNH XUẤT */}
            {activeTab === 'report' && (
              <div className="space-y-4 border border-border rounded-xl p-5 bg-card">
                <div className="flex items-center justify-between border-b pb-3">
                  <div>
                    <h4 className="font-bold text-sm text-foreground">Dự Thảo Bản Giải Trình Sự Vụ Thuế</h4>
                    <p className="text-[11px] text-muted-foreground">Mẫu chuẩn lưu hành nội bộ phục vụ giải trình đoàn kiểm tra</p>
                  </div>
                  <Button size="sm" onClick={() => window.print()} className="gap-1 text-xs">
                    <Download className="h-3.5 w-3.5" /> Xuất file
                  </Button>
                </div>

                <div className="space-y-3 leading-relaxed text-foreground">
                  <p><strong>Kính gửi:</strong> Đoàn Thanh tra / Kiểm tra Thuế theo Quyết định kiểm tra</p>
                  <p><strong>Doanh nghiệp giải trình:</strong> CÔNG TY CỔ PHẦN KIỂU VIỆT (MST: 5901168128)</p>
                  <p><strong>Nội dung sự vụ [{currentScenario.id}]:</strong> {currentScenario.title}</p>
                  <div className="p-3 bg-muted/40 rounded-lg space-y-1">
                    <div>• Dữ kiện thực tế: {currentScenario.exampleData.description} (Thực tế: {currentScenario.exampleData.physicalQty}, Hóa đơn: {currentScenario.exampleData.bookQty}).</div>
                    <div>• Phương án giải trình: {currentBranch?.description}</div>
                    <div>• Biện pháp ngăn ngừa tái diễn: {currentBranch?.preventiveAction}</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {showImportWizard && (
        <AuditImportWizard
          caseId={caseId}
          onImportComplete={(batchId, count) => {
            setShowImportWizard(false);
            alert(`Đã nhập thành công ${count} dòng dữ liệu thực tế vào lô [${batchId}]!`);
          }}
          onClose={() => setShowImportWizard(false)}
        />
      )}
    </div>
  );
}
