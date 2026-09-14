import React, { useState } from 'react';
import { useLiveQuery } from 'dexie-react-hooks';
import { AUDIT_PROCEDURES, procedureDraft } from '@/data/audit-procedures';
import { auditDb, downloadCsv, logEvent } from '@/lib/audit/workspace';
import { useAuditWorkspace } from '@/stores/audit-workspace-store';
import { PILLAR_LABELS } from '@/types/tax-audit';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { 
  FileText, Download, CheckCircle2, Clock, AlertTriangle, 
  Scale, ShieldCheck, ArrowRight, BookOpen, UserCheck, 
  Layers, ExternalLink, FileSpreadsheet, Calendar, Sparkles, Check
} from 'lucide-react';

const lawName = (id: string) => {
  const names: Record<string, string> = {
    'vas-02': 'VAS 02 – Hàng tồn kho',
    'luat-41-2024': 'Luật BHXH 41/2024/QH15',
    'luat-108-2025': 'Luật Quản lý thuế 108/2025/QH15',
    'luat-54-2024-khoangsan': 'Luật Địa chất và khoáng sản 54/2024/QH15',
    'qd-87-2025-gialai': 'QĐ 87/2025/QĐ-UBND Gia Lai',
    'nd-102-2020-go': 'Nghị định 102/2020/NĐ-CP (Lâm sản)',
    'nd-120-2024-go': 'Nghị định 120/2024/NĐ-CP (Gỗ hợp pháp)',
    'tt-26-2022-lamsan': 'Thông tư 26/2022/TT-BNNPTNT',
    'tt-26-2025-lamsan': 'Thông tư 26/2025/TT-BNNMT',
    'tt-84-2025-lamsan': 'Thông tư 84/2025/TT-BNNMT',
    'tt-96-2015': 'Thông tư 96/2015/TT-BTC (Thuế TNDN)',
    'nd-320-2025': 'Nghị định 320/2025/NĐ-CP (Quản lý thuế)',
    'tt-200-2014': 'Thông tư 200/2014/TT-BTC',
    'tt-99-2025': 'Thông tư 99/2025/TT-BTC (Chế độ KT mới)',
    'nd-123-2020': 'Nghị định 123/2020/NĐ-CP (Hóa đơn)',
    'tt-219-2013': 'Thông tư 219/2013/TT-BTC (Thuế GTGT)',
    'nd-181-2025': 'Nghị định 181/2025/NĐ-CP (Thuế GTGT mới)',
    'nd-144-2026': 'Nghị định 144/2026/NĐ-CP (Hoàn thuế)',
    'nd-132-2020': 'Nghị định 132/2020/NĐ-CP (Giao dịch liên kết)',
    'nd-20-2025': 'Nghị định 20/2025/NĐ-CP (Sửa đổi GD liên kết)',
    'tt-48-2019': 'Thông tư 48/2019/TT-BTC (Trích lập dự phòng)',
    'tt-24-2022': 'Thông tư 24/2022/TT-BTC (Dự phòng nợ khó đòi)',
    'tt-111-2013': 'Thông tư 111/2013/TT-BTC (Thuế TNCN)',
    'luat-09-2026': 'Luật 09/2026/QH16 (Sửa đổi thuế TNCN)',
    'tt-80-2021': 'Thông tư 80/2021/TT-BTC',
    'tt-21-2026': 'Thông tư 21/2026/TT-BTC',
    'tt-45-2013': 'Thông tư 45/2013/TT-BTC (Khấu hao TSCĐ)',
    'nd-193-2025-khoangsan': 'Nghị định 193/2025/NĐ-CP (Khoáng sản)',
    'tt-152-2015': 'Thông tư 152/2015/TT-BTC (Thuế Tài nguyên)',
    'nd-27-2023': 'Nghị định 27/2023/NĐ-CP (Phí BVMT)'
  };
  if (names[id]) return names[id];
  const m = id.match(/^(nd|tt)-(\d+)-(\d{4})/);
  if (!m) return 'Văn bản pháp luật theo kỳ';
  return `${m[1] === 'nd' ? 'Nghị định' : 'Thông tư'} ${m[2]}/${m[3]}/${m[1] === 'nd' ? 'NĐ-CP' : 'TT-BTC'}`;
};

const PILLAR_ICONS: Record<string, string> = {
  all: '🌟',
  interior: '🪑',
  concrete_materials: '🧱',
  construction: '🏗️',
  consulting: '💼'
};

export function AuditPreparationDesk({ 
  openWork, 
  openCalculations, 
  openLaws 
}: {
  openWork: () => void;
  openCalculations: () => void;
  openLaws: () => void;
}) {
  const caseId = useAuditWorkspace(s => s.caseId);
  const current = useLiveQuery(() => auditDb.cases.get(caseId), [caseId]);
  const work = useLiveQuery(() => auditDb.work.where('caseId').equals(caseId).toArray(), [caseId]) || [];

  const [sector, setSector] = useState('all');
  const [selected, setSelected] = useState('wood');
  const [owner, setOwner] = useState('');
  const [deadline, setDeadline] = useState('');
  const [message, setMessage] = useState('');
  const [busy, setBusy] = useState(false);

  const list = AUDIT_PROCEDURES.filter(p => sector === 'all' || p.pillar === sector);
  const p = list.find(item => item.id === selected) || list[0] || AUDIT_PROCEDURES[0];
  const id = `${caseId}:procedure:${p.id}`;
  const existing = work.find(w => w.id === id);

  const statusMap: Record<string, { label: string; color: string }> = {
    open: { label: 'Chưa bắt đầu', color: 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300' },
    preparing: { label: 'Đang chuẩn bị', color: 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300' },
    submitted: { label: 'Đã bàn giao đoàn', color: 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300' },
    closed: { label: 'Có biên nhận / Hoàn tất', color: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300' },
    not_applicable: { label: 'Không áp dụng', color: 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400' }
  };

  const createdCount = AUDIT_PROCEDURES.filter(proc => work.some(w => w.id === `${caseId}:procedure:${proc.id}`)).length;

  async function handleCreateTask() {
    setBusy(true);
    setMessage('');
    try {
      if (!current) throw Error('Vui lòng chọn đợt kiểm tra thuế trước khi giao việc.');
      if (!owner.trim()) throw Error('Vui lòng nhập tên nhân viên/kế toán viên phụ trách hồ sơ này.');
      
      await auditDb.transaction('rw', auditDb.work, auditDb.events, async () => {
        if (await auditDb.work.get(id)) {
          throw Error('Hồ sơ này đã được lập trong ca kiểm tra hiện tại. Bạn có thể mở hồ sơ để chỉnh sửa.');
        }
        await auditDb.work.add({
          id,
          caseId,
          kind: 'task',
          title: p.title,
          pillar: p.pillar,
          owner: owner.trim(),
          deadline,
          requestedBy: 'Ban Giám Đốc / KTT Kiểu Việt',
          receivedAt: new Date().toISOString(),
          status: 'preparing',
          evidenceIds: [],
          response: procedureDraft(p, current.periods),
          receipt: '',
          submittedAt: '',
          deliveries: []
        });
        await logEvent(caseId, 'Lập hồ sơ theo quy trình chuẩn bị', id);
      });
      setMessage('Đã lập hồ sơ và lưu người phụ trách, hạn xử lý cùng bản nháp giải trình. Bạn có thể mở hồ sơ để điền kết quả và kẹp chứng từ.');
    } catch (e) {
      setMessage(e instanceof Error ? e.message : 'Không lưu được hồ sơ.');
    } finally {
      setBusy(false);
    }
  }

  return (
    <section className="space-y-6" aria-label="Bàn chuẩn bị kiểm tra thuế">
      {/* HEADER BANNER CHUYÊN NGHIỆP & HƯỚNG DẪN SỬ DỤNG */}
      <div className="rounded-2xl border border-border bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white p-6 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5" /> Bàn Chuẩn Bị Thực Chiến Kiểu Việt
              </span>
              <Badge variant="outline" className="bg-white/10 text-white border-white/20 text-xs">
                15 Chuyên Đề Trọng Yếu
              </Badge>
            </div>
            <h2 className="text-xl md:text-2xl font-bold tracking-tight text-white">
              Chuẩn bị theo hồ sơ thực tế · 15 Bộ Hồ Sơ Kiểm Tra Thuế Kiểu Việt
            </h2>
            <p className="text-sm text-slate-300 max-w-3xl leading-relaxed">
              Hướng dẫn kế toán viên thao tác chuẩn bị hồ sơ thực tế cho 4 mảng hoạt động cốt lõi của Kiểu Việt (Nội thất gỗ, Bê tông thương phẩm, Khai thác mỏ đá và Thi công xây lắp). 
              Chọn mảng nghiệp vụ, tải bảng làm việc mẫu CSV, phân công người phụ trách và in bản giải trình kẹp cùng chứng từ gốc.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-xs rounded-xl p-4 border border-white/10 space-y-2 text-right self-start md:self-auto min-w-[220px]">
            <div className="text-xs text-slate-300 font-medium">Ca kiểm tra hiện tại:</div>
            <div className="text-sm font-bold text-emerald-400 truncate">{current?.name || 'Đợt kiểm tra nội bộ'}</div>
            <div className="text-xs text-slate-300">Kỳ thanh tra: <span className="font-semibold text-white">{current?.periods || 'Chưa chọn'}</span></div>
            <div className="pt-1 border-t border-white/10 flex items-center justify-between text-xs">
              <span className="text-slate-300">Tiến độ hồ sơ:</span>
              <span className="font-bold text-emerald-300">Đã lập {createdCount}/{AUDIT_PROCEDURES.length}</span>
            </div>
          </div>
        </div>

        {/* 4 BƯỚC HÀNH ĐỘNG NHANH */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-6 pt-5 border-t border-white/10">
          <div className="flex items-start gap-3 bg-white/5 rounded-xl p-3 border border-white/5">
            <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-300 font-black text-sm">1</div>
            <div className="text-xs space-y-0.5">
              <div className="font-semibold text-white">Chọn Mảng Hoạt Động</div>
              <div className="text-slate-300">Lọc 15 quy trình theo 4 mảng kinh doanh Kiểu Việt</div>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-white/5 rounded-xl p-3 border border-white/5">
            <div className="p-2 rounded-lg bg-blue-500/20 text-blue-300 font-black text-sm">2</div>
            <div className="text-xs space-y-0.5">
              <div className="font-semibold text-white">Gom Chứng Từ Gốc</div>
              <div className="text-slate-300">Kiểm tra mục A để in đủ hóa đơn, phiếu nhập, cân xe</div>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-white/5 rounded-xl p-3 border border-white/5">
            <div className="p-2 rounded-lg bg-purple-500/20 text-purple-300 font-black text-sm">3</div>
            <div className="text-xs space-y-0.5">
              <div className="font-semibold text-white">Tải Bảng Mẫu CSV</div>
              <div className="text-slate-300">Tải file đối soát về nhập số liệu thực tế của đợt</div>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-white/5 rounded-xl p-3 border border-white/5">
            <div className="p-2 rounded-lg bg-amber-500/20 text-amber-300 font-black text-sm">4</div>
            <div className="text-xs space-y-0.5">
              <div className="font-semibold text-white">Phân Công & Theo Dõi</div>
              <div className="text-slate-300">Giao việc cho kế toán viên và theo dõi ngày hoàn thành</div>
            </div>
          </div>
        </div>
      </div>

      {/* BỘ LỌC 4 MẢNG HOẠT ĐỘNG CỦA KIỂU VIỆT */}
      <div className="flex flex-wrap items-center gap-2" aria-label="Lọc quy trình theo mảng">
        <span className="text-xs font-bold text-muted-foreground mr-1 uppercase">Lọc theo mảng:</span>
        <Button 
          variant={sector === 'all' ? 'default' : 'outline'}
          size="sm"
          onClick={() => { setSector('all'); setMessage(''); }}
          className={`h-9 text-xs rounded-xl font-medium gap-1.5 ${sector === 'all' ? 'shadow-xs' : ''}`}
        >
          <span>🌟</span> Tất cả 15 Hồ sơ ({AUDIT_PROCEDURES.length})
        </Button>

        {Object.entries(PILLAR_LABELS).map(([key, label]) => {
          const count = AUDIT_PROCEDURES.filter(item => item.pillar === key).length;
          const isSelected = sector === key;
          return (
            <Button
              key={key}
              variant={isSelected ? 'default' : 'outline'}
              size="sm"
              onClick={() => { setSector(key); setMessage(''); }}
              className={`h-9 text-xs rounded-xl font-medium gap-1.5 ${isSelected ? 'shadow-xs' : ''}`}
            >
              <span>{PILLAR_ICONS[key] || '📌'}</span> {label} ({count})
            </Button>
          );
        })}
      </div>

      {/* GIAO DIỆN 2 CỘT: DANH SÁCH BÊN TRÁI & CHI TIẾT BÊN PHẢI */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* CỘT TRÁI: DANH SÁCH HỒ SƠ QUY TRÌNH (4 CỘT) */}
        <nav aria-label="Danh sách hồ sơ cần chuẩn bị" className="lg:col-span-4 space-y-2.5 max-h-[800px] overflow-y-auto pr-1">
          <div className="text-xs font-bold text-muted-foreground uppercase px-1 flex items-center justify-between">
            <span>Danh mục {list.length} chuyên đề hồ sơ</span>
            <span>Trạng thái</span>
          </div>

          {list.map((item) => {
            const isSelected = p.id === item.id;
            const task = work.find(w => w.id === `${caseId}:procedure:${item.id}`);
            const taskStatus = task ? statusMap[task.status] || statusMap.preparing : null;

            return (
              <button
                type="button"
                key={item.id}
                onClick={() => { setSelected(item.id); setMessage(''); }}
                aria-current={isSelected ? 'true' : undefined}
                className={`w-full text-left rounded-xl p-3.5 border transition-all cursor-pointer block ${
                  isSelected
                    ? 'border-blue-600 bg-blue-50/70 dark:bg-blue-950/50 shadow-xs ring-1 ring-blue-500/20'
                    : 'border-border bg-card hover:bg-muted/60 hover:border-slate-300'
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-start gap-2 min-w-0">
                    <span className="text-base flex-shrink-0 mt-0.5">{PILLAR_ICONS[item.pillar] || '📄'}</span>
                    <div className="min-w-0">
                      <div className="font-semibold text-xs sm:text-sm text-foreground leading-snug line-clamp-2">
                        {item.title}
                      </div>
                      <div className="text-[11px] text-muted-foreground mt-1 flex items-center gap-1.5">
                        <span className="truncate">{PILLAR_LABELS[item.pillar]}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex-shrink-0">
                    {task ? (
                      <span className={`inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full ${taskStatus?.color}`}>
                        <Check className="h-3 w-3" /> Đã lập
                      </span>
                    ) : (
                      <span className="text-[10px] font-medium text-muted-foreground px-2 py-0.5 rounded-full bg-muted">
                        Chưa lập
                      </span>
                    )}
                  </div>
                </div>
              </button>
            );
          })}
        </nav>

        {/* CỘT PHẢI: KHUNG CHI TIẾT HỒ SƠ THỰC THI (8 CỘT) */}
        <div className="lg:col-span-8 rounded-2xl border border-border bg-card shadow-xs p-6 space-y-6" data-testid="procedure-detail">
          {/* HEADER CHUYÊN ĐỀ */}
          <div className="space-y-3 pb-5 border-b border-border">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <Badge variant="outline" className="text-xs font-semibold px-2.5 py-1 bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300 border-blue-200">
                {PILLAR_ICONS[p.pillar]} {PILLAR_LABELS[p.pillar]}
              </Badge>

              {existing && (
                <Badge className={`${statusMap[existing.status]?.color} text-xs font-bold`}>
                  {statusMap[existing.status]?.label}
                </Badge>
              )}
            </div>

            <h3 className="text-xl md:text-2xl font-black text-foreground tracking-tight">
              {p.title}
            </h3>

            <div className="rounded-xl bg-blue-50/50 dark:bg-blue-950/30 border border-blue-200/60 dark:border-blue-800/60 p-3.5 text-xs text-blue-900 dark:text-blue-200 space-y-1">
              <div className="font-bold flex items-center gap-1.5 text-blue-800 dark:text-blue-300">
                <span>🎯 Mục tiêu rà soát & Trọng tâm thanh tra:</span>
              </div>
              <p className="leading-relaxed">{p.question}</p>
            </div>

            <div className="text-xs text-muted-foreground leading-relaxed flex items-start gap-1.5">
              <span className="font-semibold text-foreground flex-shrink-0">📌 Phạm vi áp dụng:</span>
              <span>{p.scope}</span>
            </div>
          </div>

          {/* MỤC A: CHỨNG TỪ GỐC CẦN GOM */}
          <div className="rounded-xl border border-emerald-200/80 bg-emerald-50/30 dark:bg-emerald-950/20 p-4 space-y-2.5">
            <div className="flex items-center gap-2 text-sm font-bold text-emerald-800 dark:text-emerald-300">
              <FileText className="h-4 w-4 text-emerald-600" />
              <span>A. Danh mục chứng từ & sổ sách kế toán bạn cần gom đủ:</span>
            </div>
            <ul className="grid grid-cols-1 gap-2 text-xs text-foreground leading-relaxed pl-1">
              {p.records.map((rec, idx) => (
                <li key={idx} className="flex items-start gap-2 bg-card p-2.5 rounded-lg border border-emerald-100 dark:border-emerald-900/40">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>{rec}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* MỤC B: TRÌNH TỰ 4 BƯỚC ĐỐI SOÁT */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm font-bold text-foreground">
              <Clock className="h-4 w-4 text-blue-600" />
              <span>B. Trình tự 4 bước đối soát nội bộ bạn cần thực hiện:</span>
            </div>
            <div className="space-y-3">
              {p.steps.map((step, idx) => (
                <div key={idx} className="border-l-4 border-blue-500 bg-muted/40 rounded-r-xl p-3.5 space-y-1.5">
                  <div className="font-bold text-xs sm:text-sm text-foreground flex items-center justify-between">
                    <span>{step.title}</span>
                    <span className="text-[10px] uppercase font-bold text-blue-600 bg-blue-100 dark:bg-blue-950 px-2 py-0.5 rounded-md">Bước {idx + 1}</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Thao tác:</strong> {step.action}
                  </p>
                  <div className="text-xs text-emerald-700 dark:text-emerald-300 font-medium bg-emerald-50/50 dark:bg-emerald-950/40 p-2 rounded-md border border-emerald-200/50">
                    <strong>Đầu ra cần lưu lại:</strong> {step.output}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* MỤC C: TÌNH HUỐNG BỊ BẮT BẺ & CÁCH XỬ LÝ */}
          <div className="rounded-xl border border-amber-200 bg-amber-50/40 dark:bg-amber-950/20 p-4 space-y-2.5">
            <div className="flex items-center gap-2 text-sm font-bold text-amber-800 dark:text-amber-300">
              <AlertTriangle className="h-4 w-4 text-amber-600" />
              <span>C. Tình huống đoàn kiểm tra hay bắt bẻ & Cách đối đáp bảo vệ:</span>
            </div>
            <ul className="space-y-2 text-xs text-amber-950 dark:text-amber-200 leading-relaxed">
              {p.exceptions.map((ex, idx) => (
                <li key={idx} className="flex items-start gap-2 bg-card p-2.5 rounded-lg border border-amber-100 dark:border-amber-900/40">
                  <span className="text-amber-600 font-bold flex-shrink-0">⚠️</span>
                  <span>{ex}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* MỤC D: CĂN CỨ PHÁP LÝ BẢO VỆ */}
          <div className="space-y-3 rounded-xl border border-border bg-muted/20 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm font-bold text-foreground">
                <Scale className="h-4 w-4 text-purple-600" />
                <span>D. Căn cứ pháp lý bảo vệ chi phí (Trong kho 84 văn bản):</span>
              </div>
              <Button variant="link" size="sm" onClick={openLaws} className="h-7 text-xs text-purple-700 dark:text-purple-300 p-0 gap-1">
                <span>Tra cứu kho văn bản gốc</span>
                <ExternalLink className="h-3 w-3" />
              </Button>
            </div>

            <div className="flex flex-wrap gap-2">
              {p.laws.map((lId) => (
                <Badge key={lId} variant="outline" className="bg-card text-xs font-medium py-1 px-2.5 gap-1.5 border-purple-200 dark:border-purple-800 text-purple-900 dark:text-purple-200">
                  <BookOpen className="h-3 w-3 text-purple-600" />
                  <span>{lawName(lId)}</span>
                </Badge>
              ))}
            </div>

            <div className="text-[11px] text-muted-foreground pt-1 border-t border-border">
              <strong>Tiêu chuẩn hoàn tất hồ sơ:</strong> {p.completion.join(' • ')}
            </div>
          </div>

          {/* MỤC E: THAO TÁC NGHIỆP VỤ & PHÂN CÔNG GIAO VIỆC */}
          <div className="border-t border-border pt-5 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h4 className="font-bold text-sm text-foreground flex items-center gap-2">
                <UserCheck className="h-4 w-4 text-emerald-600" />
                <span>E. Tải bảng làm việc & Phân công nhân sự phụ trách:</span>
              </h4>

              <div className="flex flex-wrap gap-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => downloadCsv([p.columns], `bang-ra-${p.id}.csv`)}
                  className="h-8 text-xs gap-1.5 text-emerald-700 border-emerald-300 bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950/40 dark:border-emerald-800 dark:text-emerald-300"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>Tải bảng làm việc của hồ sơ</span>
                </Button>

                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={openCalculations}
                  className="h-8 text-xs gap-1.5 text-blue-700 border-blue-300 bg-blue-50 hover:bg-blue-100 dark:bg-blue-950/40 dark:border-blue-800 dark:text-blue-300"
                >
                  <Scale className="h-3.5 w-3.5" />
                  <span>Mở công cụ đối chiếu</span>
                </Button>
              </div>
            </div>

            {existing ? (
              <div className="rounded-xl border border-emerald-200 bg-emerald-50/40 dark:bg-emerald-950/20 p-4 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                  <div>
                    Người phụ trách: <strong className="text-foreground">{existing.owner}</strong>
                  </div>
                  <div>
                    Hạn hoàn thành: <strong className="text-foreground">{existing.deadline || 'Chưa đặt hạn'}</strong>
                  </div>
                  <div>
                    Trạng thái: <Badge className={statusMap[existing.status]?.color}>{statusMap[existing.status]?.label}</Badge>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-1">
                  <Button onClick={openWork} size="sm" className="h-8 text-xs bg-emerald-600 hover:bg-emerald-700 text-white gap-1.5">
                    <FileText className="h-3.5 w-3.5" />
                    <span>Mở hồ sơ đã lập</span>
                  </Button>
                  <span className="text-xs text-muted-foreground">Đã có mã công việc: <code>{existing.id}</code></span>
                </div>
              </div>
            ) : (
              <form 
                onSubmit={e => { e.preventDefault(); void handleCreateTask(); }} 
                className="rounded-xl border border-border bg-muted/30 p-4 space-y-3"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-foreground flex items-center gap-1">
                      <span>Người phụ trách rà soát:</span>
                      <span className="text-red-500">*</span>
                    </label>
                    <Input 
                      aria-label="Người phụ trách quy trình" 
                      placeholder="Ví dụ: Kế toán Nguyễn Văn A"
                      required 
                      value={owner} 
                      onChange={e => setOwner(e.target.value)}
                      className="h-8 text-xs bg-background"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-foreground flex items-center gap-1">
                      <span>Hạn hoàn thành nội bộ:</span>
                    </label>
                    <Input 
                      aria-label="Hạn quy trình" 
                      type="date" 
                      value={deadline} 
                      onChange={e => setDeadline(e.target.value)}
                      className="h-8 text-xs bg-background"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <Button 
                    disabled={busy || !current} 
                    type="submit" 
                    size="sm"
                    className="h-8 text-xs bg-blue-600 hover:bg-blue-700 text-white gap-1.5 shadow-xs"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    <span>Lập hồ sơ theo hướng dẫn này</span>
                  </Button>
                  <span className="text-[11px] text-muted-foreground">Tự động tạo bản nháp giải trình vào Sổ đoàn kiểm tra</span>
                </div>
              </form>
            )}

            {message && (
              <div role="status" className={`text-xs p-3 rounded-xl border ${message.startsWith('✅') ? 'bg-emerald-50 text-emerald-800 border-emerald-200' : 'bg-red-50 text-red-800 border-red-200'}`}>
                {message}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
