import { useState } from 'react';
import { useLiveQuery } from 'dexie-react-hooks';
import { auditDb, newId, saveWork, downloadBlob, downloadCsv, type WorkRecord } from '@/lib/audit/workspace';
import { useAuditWorkspace } from '@/stores/audit-workspace-store';
import { PILLAR_LABELS, type Pillar } from '@/types/tax-audit';
import { TAX_AUDIT_GROUPS } from '@/data/tax-audit-checklist';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
const labels = { open: 'Mới tiếp nhận', preparing: 'Đang chuẩn bị', submitted: 'Đã bàn giao', closed: 'Đã có biên nhận/kết quả', not_applicable: 'Không áp dụng (có lý do)' };
const workPillars = { unassigned: 'Chưa phân mảng', ...PILLAR_LABELS };
const blank = (caseId: string): WorkRecord => ({ id: newId(), caseId, kind: 'request', title: '', pillar: 'unassigned', owner: '', deadline: '', requestedBy: '', receivedAt: '', status: 'open', evidenceIds: [], response: '', receipt: '', submittedAt: '', deliveries: [] });
export function AuditRequestLog() {
  const caseId = useAuditWorkspace(s => s.caseId);
  const rows = useLiveQuery(() => auditDb.work.where('caseId').equals(caseId).toArray(), [caseId]) || [];
  const evidence = useLiveQuery(() => auditDb.evidence.where('caseId').equals(caseId).toArray(), [caseId]) || [];
  const current = useLiveQuery(() => auditDb.cases.get(caseId), [caseId]);
  const events = useLiveQuery(() => auditDb.events.where('caseId').equals(caseId).toArray(), [caseId]) || [];
  const [draft,setDraft] = useState<WorkRecord>(); const [message,setMessage] = useState(''); const [filter,setFilter] = useState('all');
  const [busy,setBusy] = useState(false);
  const edit = <K extends keyof WorkRecord>(key: K, value: WorkRecord[K]) => setDraft(d => d ? { ...d, [key]: value } : d);
  const run = async (fn: () => Promise<void>) => { setBusy(true); try { await fn(); setMessage('Đã lưu.'); } catch(e) { setMessage(e instanceof Error ? e.message : 'Không lưu được.'); } finally { setBusy(false); } };
  const shown = rows.filter(r => filter === 'all' || r.status === filter);
  return <section className="border rounded-xl p-4 space-y-4 bg-card">
    <h2 className="font-bold text-lg">Công việc, yêu cầu và bản bàn giao</h2>
    <p className="text-sm">{rows.length} việc • {rows.filter(r => r.deadline && r.deadline < new Date().toISOString().slice(0,10) && !['closed','submitted','not_applicable'].includes(r.status)).length} quá hạn. Hạn do người dùng nhập theo yêu cầu thực tế.</p>
    <div className="flex flex-wrap gap-2"><Button disabled={!caseId} onClick={() => setDraft(blank(caseId))}>Thêm yêu cầu / công việc</Button>
      <Button variant="outline" disabled={busy || !caseId} onClick={() => run(async () => {
        const all = TAX_AUDIT_GROUPS.flatMap(g => g.items);
        await auditDb.transaction('rw', auditDb.work, async () => {
          for (const item of all) {
            const id = `${caseId}:check:${item.id}`;
            if (!await auditDb.work.get(id)) await auditDb.work.add({ ...blank(caseId), id, kind: 'task', title: `${item.decreeLabel}: ${item.title}`, owner: '', response: `CHỨNG TỪ CẦN THU THẬP\n${item.documentsRequired.map(x => '- ' + x).join('\n')}\n\nChưa xác nhận áp dụng; chọn mảng và kỳ phù hợp trước khi rà.`, pillar: 'unassigned' });
          }
        });
      })}>Lập việc từ toàn bộ checklist</Button>
      <Button variant="outline" onClick={() => downloadCsv([['Nội dung','Mảng','Người','Hạn','Trạng thái','Giải trình','Biên nhận'], ...rows.map(r => [r.title,workPillars[r.pillar],r.owner,r.deadline,labels[r.status],r.response,r.receipt])], 'nhat-ky-kiem-tra-thue.csv')}>Xuất nhật ký CSV</Button>
    </div>
    {draft?.caseId === caseId && <form className="border rounded p-3 space-y-3" onSubmit={e => { e.preventDefault(); void run(async () => { await saveWork(draft); setDraft(undefined); }); }}>
      <div className="grid sm:grid-cols-2 gap-3">
        <label className="text-xs">Nội dung yêu cầu<Input required aria-label="Nội dung yêu cầu" value={draft.title} onChange={e => edit('title',e.target.value)} /></label>
        <label className="text-xs">Người phụ trách<Input required aria-label="Người phụ trách" value={draft.owner} onChange={e => edit('owner',e.target.value)} /></label>
        <label className="text-xs">Hạn nộp<Input aria-label="Hạn nộp" type="date" value={draft.deadline} onChange={e => edit('deadline',e.target.value)} /></label>
        <label className="text-xs">Người/cơ quan yêu cầu<Input aria-label="Người yêu cầu" value={draft.requestedBy} onChange={e => edit('requestedBy',e.target.value)} /></label>
        <label className="text-xs">Ngày nhận yêu cầu<Input aria-label="Ngày nhận yêu cầu" type="date" value={draft.receivedAt} onChange={e => edit('receivedAt',e.target.value)} /></label>
        <select aria-label="Mảng công việc" className="border rounded p-2 bg-background" value={draft.pillar} onChange={e => edit('pillar',e.target.value as WorkRecord['pillar'])}>{Object.entries(workPillars).map(([k,v]) => <option key={k} value={k}>{v}</option>)}</select>
        <select aria-label="Trạng thái yêu cầu" className="border rounded p-2 bg-background" value={draft.status} onChange={e => edit('status',e.target.value as WorkRecord['status'])}>{Object.entries(labels).map(([k,v]) => <option key={k} value={k}>{v}</option>)}</select>
        <label className="text-xs">Số/vị trí biên nhận hoặc kết quả<Input aria-label="Biên nhận" value={draft.receipt} onChange={e => edit('receipt',e.target.value)} /></label>
      </div>
      <label className="text-xs block">Bản giải trình nội bộ — ghi rõ dữ kiện, chứng từ, căn cứ và nội dung còn thiếu<Textarea rows={8} aria-label="Bản giải trình" value={draft.response} onChange={e => edit('response',e.target.value)} /></label>
      <fieldset className="space-y-1"><legend className="text-sm font-semibold">Chứng từ đính kèm bản bàn giao</legend>{evidence.map(f => <label key={f.id} className="block text-sm"><input type="checkbox" checked={draft.evidenceIds.includes(f.id)} onChange={e => edit('evidenceIds',e.target.checked ? [...draft.evidenceIds,f.id] : draft.evidenceIds.filter(id => id !== f.id))} /> {f.title} — {f.verifiedBy || 'chưa rà'}</label>)}</fieldset>
      <Button disabled={busy} type="submit">Lưu yêu cầu</Button> <Button variant="outline" type="button" onClick={() => setDraft(undefined)}>Đóng chỉnh sửa</Button>
    </form>}
    {message && <p role="status">{message}</p>}
    <select aria-label="Lọc trạng thái yêu cầu" className="border rounded p-2 bg-background" value={filter} onChange={e => setFilter(e.target.value)}><option value="all">Tất cả trạng thái</option>{Object.entries(labels).map(([k,v]) => <option key={k} value={k}>{v}</option>)}</select>
    {!rows.length && <p>Chưa có yêu cầu từ đoàn. Chỉ nhập khi thực tế phát sinh hoặc lập công việc chuẩn bị nội bộ.</p>}
    {shown.map(r => <article key={r.id} className="border rounded p-3 space-y-2">
      <h3 className="font-semibold">{r.title}</h3><p className="text-sm">{r.owner || 'Chưa phân công'} • {r.deadline || 'Chưa đặt hạn'} • {labels[r.status]} • {r.evidenceIds.length} chứng từ</p>
      <Button size="sm" variant="outline" onClick={() => setDraft(r)}>Mở / chỉnh sửa</Button>{' '}
      <Button size="sm" variant="outline" onClick={() => downloadBlob(new Blob([`BẢN NHÁP GIẢI TRÌNH NỘI BỘ\n${current?.entity}\nMST: ${current?.taxCode}\nKỳ: ${current?.periods || 'Chưa xác định'}\nVấn đề: ${r.title}\nNgười phụ trách: ${r.owner}\n\n${r.response}\n\nCHỨNG TỪ\n${evidence.filter(f => r.evidenceIds.includes(f.id)).map(f => `${f.reference} — ${f.title} — ${f.fileName || f.location} — ${f.verifiedBy || 'chưa rà'}`).join('\n')}\n\nChưa thay thế văn bản được người có thẩm quyền ký.`],{type:'text/plain;charset=utf-8'}),'giai-trinh-noi-bo.txt')}>Xuất bản giải trình</Button>
      {r.deliveries.map((d,i) => <details key={i}><summary className="text-sm cursor-pointer">Bản bàn giao {i+1} — {d.at}</summary><pre className="text-xs whitespace-pre-wrap break-words">{d.response}</pre><ul>{d.files.map(f => <li key={f.id} className="text-xs break-all">{f.title} — {f.hash || f.location}</li>)}</ul></details>)}
    </article>)}
    <details><summary className="cursor-pointer text-sm">Lịch sử thao tác ({events.length})</summary><ul className="text-xs space-y-1">{events.slice().sort((a,b) => b.at.localeCompare(a.at)).map(e => <li key={e.id}>{e.at} — {e.action}</li>)}</ul></details>
  </section>;
}
