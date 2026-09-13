import { useEffect, useState } from 'react';
import { useLiveQuery } from 'dexie-react-hooks';
import { auditDb, createCase, exportCase, restoreCase, type CaseRecord } from '@/lib/audit/workspace';
import { useAuditWorkspace } from '@/stores/audit-workspace-store';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { TAX_AUDIT_GROUPS, RISK_QUESTIONS } from '@/data/tax-audit-checklist';
let initializing: Promise<string> | undefined;
export function AuditCaseHeader({ completedCount, totalCount }: { completedCount: number; totalCount: number }) {
  const { caseId, select } = useAuditWorkspace();
  const cases = useLiveQuery(() => auditDb.cases.toArray(), []);
  const current = cases?.find(c => c.id === caseId);
  const [draft, setDraft] = useState<CaseRecord>(); const [message, setMessage] = useState('');
  const [legacyAvailable, setLegacyAvailable] = useState(() => !!(localStorage.getItem('kv_tax_audit_checked_items') || localStorage.getItem('kv_tax_audit_risk_answers')));
  useEffect(() => {
    if (!cases || current) return;
    if (cases.length) { select(cases[0].id); return; }
    initializing ||= createCase().finally(() => { initializing = undefined; });
    initializing.then(select).catch(e => setMessage(e.message));
  }, [cases, current, select]);
  useEffect(() => setDraft(current), [current]);
  const run = async (action: () => Promise<unknown>, success: string) => {
    try { await action(); setMessage(success); } catch (e) { setMessage(e instanceof Error ? e.message : 'Không lưu được dữ liệu.'); }
  };
  return <section className="rounded-xl border p-4 space-y-3 bg-card" aria-label="Thông tin đợt kiểm tra">
    <h1 className="text-xl font-bold">Hồ sơ kiểm tra thuế Kiểu Việt</h1>
    <p className="text-sm text-muted-foreground">Dữ liệu và file lưu trên trình duyệt này. Xuất bản sao lưu để chuyển máy; chưa đồng bộ Drive. Kỳ kiểm tra chỉ điền theo quyết định thực tế.</p>
    <div className="flex flex-wrap gap-2 items-center">
      <select aria-label="Chọn đợt kiểm tra" className="border rounded p-2 bg-background max-w-full" value={caseId} onChange={e => select(e.target.value)}>{cases?.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}</select>
      <Button variant="outline" onClick={() => run(async () => select(await createCase()), 'Đã tạo đợt riêng.')}>Tạo đợt mới</Button>
      <Button variant="outline" disabled={!current} onClick={() => run(() => exportCase(caseId), 'Đã xuất bản sao lưu gồm file chứng từ.')}>Sao lưu toàn bộ</Button>
      <label className="border rounded p-2 text-sm cursor-pointer">Khôi phục bản sao lưu<input aria-label="Khôi phục bản sao lưu" className="sr-only" type="file" accept=".json" onChange={e => { const f = e.target.files?.[0]; if (f) void run(async () => select(await restoreCase(f)), 'Khôi phục thành đợt mới. Rà lại chứng từ trước khi bàn giao.'); e.target.value = ''; }} /></label>
    </div>
    {legacyAvailable && <div className="text-sm border rounded p-3 space-y-2"><p>Trình duyệt còn tiến độ checklist của phiên bản cũ, chưa gắn với đợt kiểm tra. Chọn đúng đợt phía trên rồi nhập; bản cũ vẫn được giữ lại.</p><Button variant="outline" disabled={!current} onClick={() => run(async () => {
      const read = (key: string, allowed: Set<string>) => {
        const data: unknown = JSON.parse(localStorage.getItem(key) || '{}');
        if (!data || typeof data !== 'object' || Array.isArray(data)) throw Error('Tiến độ cũ không đúng định dạng.');
        return Object.fromEntries(Object.entries(data).filter(([id,value]) => allowed.has(id) && typeof value === 'boolean'));
      };
      const checked = read('kv_tax_audit_checked_items', new Set(TAX_AUDIT_GROUPS.flatMap(g => g.items.map(i => i.id))));
      const risk = read('kv_tax_audit_risk_answers', new Set(RISK_QUESTIONS.map(q => q.id)));
      await auditDb.cases.where('id').equals(caseId).modify(c => { c.checked = { ...checked, ...c.checked }; c.risk = { ...risk, ...c.risk }; });
      setLegacyAvailable(false);
    }, 'Đã nhập tiến độ cũ vào đợt đang chọn, giữ các câu trả lời đã có của đợt này.')}>Nhập tiến độ cũ vào đợt đang chọn</Button></div>}
    {draft && <form onSubmit={e => { e.preventDefault(); void run(async () => { if (!draft.name.trim() || !draft.entity.trim()) throw new Error('Nhập tên đợt và pháp nhân.'); await auditDb.cases.update(caseId, { name: draft.name, entity: draft.entity, taxCode: draft.taxCode, periods: draft.periods, auditMonth: draft.auditMonth, prepDate: draft.prepDate, decision: draft.decision, authority: draft.authority }); }, 'Đã lưu thông tin đợt.'); }}>
      <div className="grid sm:grid-cols-3 gap-3">{([
        ['name','Tên đợt','text'], ['entity','Pháp nhân','text'], ['taxCode','Mã số thuế','text'], ['periods','Kỳ/năm bị kiểm tra (chưa rõ để trống)','text'],
        ['auditMonth','Tháng đoàn dự kiến vào','month'], ['prepDate','Hạn chuẩn bị nội bộ tự đặt','date'], ['decision','Số quyết định kiểm tra','text'], ['authority','Cơ quan theo quyết định','text'],
      ] as const).map(([key,label,type]) => <label key={key} className="text-xs space-y-1 block">{label}<Input aria-label={label} type={type} value={draft[key]} onChange={e => setDraft({ ...draft, [key]: e.target.value })} /></label>)}</div>
      <Button className="mt-3" type="submit">Lưu thông tin đợt</Button>
    </form>}
    <p className="text-sm">Đã tự rà {completedCount}/{totalCount} mục. Kỳ kiểm tra: <strong>{current?.periods || 'Chưa xác định'}</strong>. Tick checklist không thay xác nhận chứng từ.</p>
    {message && <p role="status" className="text-sm text-blue-700 dark:text-blue-300">{message}</p>}
  </section>;
}
