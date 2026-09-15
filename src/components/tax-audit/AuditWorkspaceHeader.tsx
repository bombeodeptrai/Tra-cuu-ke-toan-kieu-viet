import React, { useEffect, useState } from 'react';
import { useLiveQuery } from 'dexie-react-hooks';
import { auditDb, createCase, exportCase, restoreCase, type CaseRecord } from '@/lib/audit/workspace';
import { useAuditWorkspace } from '@/stores/audit-workspace-store';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { 
  Building2, Calendar, FileText, Download, Upload, 
  Plus, CheckCircle2, ShieldCheck, Sparkles, Save, Clock
} from 'lucide-react';
import { TAX_AUDIT_GROUPS, RISK_QUESTIONS } from '@/data/tax-audit-checklist';

let initializing: Promise<string> | undefined;

export function AuditCaseHeader({ completedCount, totalCount }: { completedCount: number; totalCount: number }) {
  const { caseId, select } = useAuditWorkspace();
  const cases = useLiveQuery(() => auditDb.cases.toArray(), []);
  const current = cases?.find(c => c.id === caseId);
  const [draft, setDraft] = useState<CaseRecord>();
  const [message, setMessage] = useState('');
  const [legacyAvailable, setLegacyAvailable] = useState(() => !!(localStorage.getItem('kv_tax_audit_checked_items') || localStorage.getItem('kv_tax_audit_risk_answers')));

  useEffect(() => {
    if (!cases || current) return;
    if (cases.length) { select(cases[0].id); return; }
    initializing ||= createCase().finally(() => { initializing = undefined; });
    initializing.then(select).catch(e => setMessage(e.message));
  }, [cases, current, select]);

  useEffect(() => setDraft(current), [current]);

  const run = async (action: () => Promise<unknown>, success: string) => {
    try {
      await action();
      setMessage(success);
    } catch (e) {
      setMessage(e instanceof Error ? e.message : 'Không lưu được dữ liệu.');
    }
  };

  return (
    <Card className="border-border shadow-xs bg-card overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white p-5 border-b border-border">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <div className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                <Building2 className="h-4 w-4" />
              </div>
              <CardTitle className="text-base sm:text-lg font-bold text-white flex flex-wrap items-center gap-2">
                Thiết Lập Thông Tin Ca Kiểm Tra Thuế Kiểu Việt
              </CardTitle>
              <Badge className="bg-emerald-500 text-slate-950 font-bold text-[10px]">Cơ Sở Dữ Liệu Nội Bộ</Badge>
            </div>
            <p className="text-xs text-slate-300 max-w-2xl leading-relaxed">
              Thiết lập thông tin Quyết định kiểm tra, niên độ thanh tra thực tế (Ví dụ: Năm 2023 - 2024), phân công quản lý hồ sơ và bảo mật dữ liệu trên máy tính nội bộ.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 self-start md:self-auto">
            <select 
              aria-label="Chọn đợt kiểm tra" 
              className="h-9 px-3 py-1.5 text-xs font-semibold rounded-xl border border-white/20 bg-white/10 text-white hover:bg-white/20 transition-all focus:outline-hidden"
              value={caseId} 
              onChange={e => select(e.target.value)}
            >
              {cases?.map(c => <option key={c.id} value={c.id} className="bg-slate-900 text-white">{c.name}</option>)}
            </select>

            <Button 
              size="sm" 
              variant="outline" 
              onClick={() => run(async () => select(await createCase()), '✅ Đã tạo đợt kiểm tra mới.')}
              className="h-9 text-xs bg-white/10 text-white border-white/20 hover:bg-white/20 gap-1.5"
            >
              <Plus className="h-3.5 w-3.5" /> Tạo đợt mới
            </Button>

            <Button 
              size="sm" 
              variant="outline" 
              disabled={!current} 
              onClick={() => run(() => exportCase(caseId), '✅ Đã xuất bản sao lưu toàn bộ hồ sơ và chứng từ.')}
              className="h-9 text-xs bg-white/10 text-white border-white/20 hover:bg-white/20 gap-1.5"
            >
              <Download className="h-3.5 w-3.5" /> Sao lưu
            </Button>

            <label className="h-9 px-3 py-2 text-xs font-medium rounded-xl border border-white/20 bg-white/10 text-white hover:bg-white/20 transition-all cursor-pointer inline-flex items-center gap-1.5">
              <Upload className="h-3.5 w-3.5" /> Khôi phục
              <input 
                aria-label="Khôi phục bản sao lưu" 
                className="sr-only" 
                type="file" 
                accept=".json" 
                onChange={e => { 
                  const f = e.target.files?.[0]; 
                  if (f) void run(async () => select(await restoreCase(f)), '✅ Khôi phục thành công đợt kiểm tra.'); 
                  e.target.value = ''; 
                }} 
              />
            </label>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-5 space-y-4">
        {legacyAvailable && (
          <div className="rounded-xl border border-amber-200 bg-amber-50/60 dark:bg-amber-950/30 p-3.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 text-amber-900 dark:text-amber-200">
              <Clock className="h-4 w-4 text-amber-600 flex-shrink-0" />
              <span>Hệ thống phát hiện tiến độ checklist từ phiên làm việc trước. Bạn có muốn đồng bộ vào ca kiểm tra này?</span>
            </div>
            <Button 
              size="sm"
              variant="outline" 
              disabled={!current} 
              onClick={() => run(async () => {
                const read = (key: string, allowed: Set<string>) => {
                  const data: unknown = JSON.parse(localStorage.getItem(key) || '{}');
                  if (!data || typeof data !== 'object' || Array.isArray(data)) throw Error('Tiến độ không đúng định dạng.');
                  return Object.fromEntries(Object.entries(data).filter(([k, val]) => allowed.has(k) && typeof val === 'boolean'));
                };
                const checked = read('kv_tax_audit_checked_items', new Set(TAX_AUDIT_GROUPS.flatMap(g => g.items.map(i => i.id))));
                const risk = read('kv_tax_audit_risk_answers', new Set(RISK_QUESTIONS.map(q => q.id)));
                await auditDb.cases.where('id').equals(caseId).modify(c => { 
                  c.checked = { ...checked, ...c.checked }; 
                  c.risk = { ...risk, ...c.risk }; 
                });
                setLegacyAvailable(false);
              }, '✅ Đã đồng bộ tiến độ cũ vào đợt đang chọn.')}
              className="h-8 text-xs border-amber-300 text-amber-800 hover:bg-amber-100 dark:border-amber-700 dark:text-amber-300 flex-shrink-0"
            >
              Đồng bộ dữ liệu ngay
            </Button>
          </div>
        )}

        {draft && (
          <form 
            onSubmit={e => { 
              e.preventDefault(); 
              void run(async () => { 
                if (!draft.name.trim() || !draft.entity.trim()) throw new Error('Vui lòng nhập tên đợt và pháp nhân.'); 
                await auditDb.cases.update(caseId, { 
                  name: draft.name, 
                  entity: draft.entity, 
                  taxCode: draft.taxCode, 
                  periods: draft.periods, 
                  auditMonth: draft.auditMonth, 
                  prepDate: draft.prepDate, 
                  decision: draft.decision, 
                  authority: draft.authority 
                }); 
              }, '✅ Đã lưu thông tin ca kiểm tra thuế thành công.'); 
            }}
            className="space-y-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-foreground">Tên ca kiểm tra:</label>
                <Input 
                  aria-label="Tên đợt" 
                  value={draft.name} 
                  onChange={e => setDraft({ ...draft, name: e.target.value })}
                  placeholder="Ví dụ: Kiểm tra thuế năm 2024"
                  className="h-8 text-xs"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-foreground">Tên pháp nhân doanh nghiệp:</label>
                <Input 
                  aria-label="Pháp nhân" 
                  value={draft.entity} 
                  onChange={e => setDraft({ ...draft, entity: e.target.value })}
                  placeholder="Công ty Cổ phần Kiểu Việt"
                  className="h-8 text-xs"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-foreground">Mã số thuế (MST):</label>
                <Input 
                  aria-label="Mã số thuế" 
                  value={draft.taxCode} 
                  onChange={e => setDraft({ ...draft, taxCode: e.target.value })}
                  placeholder="5901234567"
                  className="h-8 text-xs"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-foreground">Niên độ / Kỳ thuế thanh tra:</label>
                <Input 
                  aria-label="Kỳ kiểm tra" 
                  value={draft.periods} 
                  onChange={e => setDraft({ ...draft, periods: e.target.value })}
                  placeholder="Ví dụ: Năm 2023 - 2024"
                  className="h-8 text-xs font-bold text-blue-600"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-foreground">Tháng đoàn dự kiến làm việc:</label>
                <Input 
                  aria-label="Tháng đoàn vào" 
                  type="month"
                  value={draft.auditMonth} 
                  onChange={e => setDraft({ ...draft, auditMonth: e.target.value })}
                  className="h-8 text-xs"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-foreground">Hạn hoàn tất chuẩn bị nội bộ:</label>
                <Input 
                  aria-label="Hạn chuẩn bị nội bộ" 
                  type="date"
                  value={draft.prepDate} 
                  onChange={e => setDraft({ ...draft, prepDate: e.target.value })}
                  className="h-8 text-xs"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-foreground">Số Quyết định kiểm tra thuế:</label>
                <Input 
                  aria-label="Số quyết định" 
                  value={draft.decision} 
                  onChange={e => setDraft({ ...draft, decision: e.target.value })}
                  placeholder="Ví dụ: 128/QĐ-CTGLA"
                  className="h-8 text-xs"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-foreground">Cơ quan thuế ban hành quyết định:</label>
                <Input 
                  aria-label="Cơ quan thuế" 
                  value={draft.authority} 
                  onChange={e => setDraft({ ...draft, authority: e.target.value })}
                  placeholder="Cục Thuế tỉnh Gia Lai"
                  className="h-8 text-xs"
                />
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-border">
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                  <span>Tiến độ rà soát: <strong className="text-foreground">{completedCount}/{totalCount} mục</strong></span>
                </span>
                <span>•</span>
                <span>Kỳ tính thuế: <strong className="text-blue-600 font-bold">{current?.periods || 'Chưa đặt kỳ'}</strong></span>
                <span>•</span>
                <span>Cơ quan thuế: <strong className="text-foreground">{current?.authority || 'Cục Thuế tỉnh Gia Lai'}</strong></span>
              </div>

              <Button type="submit" size="sm" className="h-8 text-xs bg-indigo-600 hover:bg-indigo-700 text-white gap-1.5 shadow-xs">
                <Save className="h-3.5 w-3.5" /> Lưu thông tin ca kiểm tra
              </Button>
            </div>
          </form>
        )}

        {message && (
          <div role="status" className={`text-xs p-3 rounded-xl border ${message.startsWith('✅') ? 'bg-emerald-50 text-emerald-800 border-emerald-200' : 'bg-red-50 text-red-800 border-red-200'}`}>
            {message}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
