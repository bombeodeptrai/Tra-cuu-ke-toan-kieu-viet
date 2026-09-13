import { useState } from 'react';
import { useLiveQuery } from 'dexie-react-hooks';
import { auditDb, downloadBlob, downloadCsv, newId, now, saveEvidence, logEvent, type EvidenceRecord } from '@/lib/audit/workspace';
import { useAuditWorkspace } from '@/stores/audit-workspace-store';
import { PILLAR_LABELS, type Pillar } from '@/types/tax-audit';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
export function EvidencePanel() {
  const caseId = useAuditWorkspace(s => s.caseId);
  const files = useLiveQuery(() => auditDb.evidence.where('caseId').equals(caseId).toArray(), [caseId]) || [];
  const [query, setQuery] = useState(''); const [pillar, setPillar] = useState('all');
  const [title,setTitle] = useState(''); const [reference,setReference] = useState(''); const [date,setDate] = useState('');
  const [kind,setKind] = useState<EvidenceRecord['kind']>('file'); const [location,setLocation] = useState('');
  const [sector,setSector] = useState<Pillar>('interior'); const [file,setFile] = useState<File>();
  const [reviewer,setReviewer] = useState(''); const [message,setMessage] = useState(''); const [busy,setBusy] = useState(false);
  const fold = (s: string) => s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/đ/g,'d').toLowerCase();
  const shown = files.filter(f => (pillar === 'all' || pillar === f.pillar) && fold(`${f.title} ${f.reference} ${f.location}`).includes(fold(query)));
  const run = async (action: () => Promise<unknown>) => { setBusy(true); try { await action(); setMessage('Đã lưu.'); } catch(e) { setMessage(e instanceof Error ? e.message : 'Không lưu được.'); } finally { setBusy(false); } };
  return <section className="border rounded-xl p-4 space-y-4 bg-card">
    <h2 className="font-bold text-lg">Chứng từ của đợt đang chọn</h2>
    <p className="text-sm">{files.length} chứng từ • {files.filter(f => f.verifiedBy).length} đã được người rà xác nhận. Không có hồ sơ được điền sẵn.</p>
    <form className="grid sm:grid-cols-3 gap-3" onSubmit={e => { e.preventDefault(); void run(async () => {
      if (!caseId) throw new Error('Chọn đợt kiểm tra.');
      await saveEvidence({ id: newId(), caseId, title, reference, date, pillar: sector, kind, location, blob: kind === 'file' ? file : undefined,
        fileName: file?.name, verifiedBy: '', verifiedAt: '' }); setTitle(''); setReference(''); setLocation(''); setFile(undefined);
    }); }}>
      <label className="text-xs">Tên chứng từ<Input required aria-label="Tên chứng từ" value={title} onChange={e => setTitle(e.target.value)} /></label>
      <label className="text-xs">Số chứng từ<Input aria-label="Số chứng từ" value={reference} onChange={e => setReference(e.target.value)} /></label>
      <label className="text-xs">Ngày chứng từ<Input aria-label="Ngày chứng từ" type="date" value={date} onChange={e => setDate(e.target.value)} /></label>
      <select aria-label="Mảng chứng từ" className="border rounded p-2 bg-background" value={sector} onChange={e => setSector(e.target.value as Pillar)}>{Object.entries(PILLAR_LABELS).map(([k,v]) => <option key={k} value={k}>{v}</option>)}</select>
      <select aria-label="Nơi lưu chứng từ" className="border rounded p-2 bg-background" value={kind} onChange={e => setKind(e.target.value as EvidenceRecord['kind'])}><option value="file">Tải file vào hồ sơ</option><option value="paper">Bản giấy</option><option value="drive">File đã có trên Drive</option></select>
      {kind === 'file' ? <input aria-label="File chứng từ" type="file" onChange={e => { const f = e.target.files?.[0]; setFile(f); if (!title && f) setTitle(f.name); }} /> : <Input aria-label="Vị trí hoặc URL file" placeholder="Vị trí hoặc URL file Drive" value={location} onChange={e => setLocation(e.target.value)} />}
      <Button disabled={busy || !caseId} type="submit">Lưu chứng từ</Button>
    </form>
    <div className="flex flex-wrap gap-2"><Input className="sm:w-64" aria-label="Tìm chứng từ" placeholder="Tìm tên, số, vị trí..." value={query} onChange={e => setQuery(e.target.value)} />
      <select aria-label="Lọc mảng chứng từ" className="border rounded bg-background" value={pillar} onChange={e => setPillar(e.target.value)}><option value="all">Tất cả mảng</option>{Object.entries(PILLAR_LABELS).map(([k,v]) => <option key={k} value={k}>{v}</option>)}</select>
      <Button variant="outline" onClick={() => downloadCsv([['Tên','Số','Ngày','Mảng','Vị trí/file','SHA256','Người rà','Ngày rà'], ...shown.map(f => [f.title,f.reference,f.date,PILLAR_LABELS[f.pillar],f.fileName || f.location,f.hash,f.verifiedBy,f.verifiedAt])], 'danh-muc-chung-tu.csv')}>Xuất danh mục CSV</Button>
    </div>
    <Input aria-label="Người xác nhận chứng từ" placeholder="Tên người đã đối chiếu bản gốc (để xác nhận bên dưới)" value={reviewer} onChange={e => setReviewer(e.target.value)} />
    {message && <p role="status">{message}</p>}
    {!shown.length && <p className="text-muted-foreground">Chưa có chứng từ phù hợp. Thêm file hoặc vị trí bản giấy ở trên.</p>}
    <div className="grid md:grid-cols-2 gap-3">{shown.map(f => <article key={f.id} className="border rounded p-3 space-y-2 min-w-0">
      <h3 className="font-semibold break-words">{f.title}</h3><p className="text-xs">{PILLAR_LABELS[f.pillar]} • {f.reference} • {f.date}</p>
      <p className="text-xs break-all">{f.fileName || f.location}</p><p className="text-xs">{f.verifiedBy ? `Người rà: ${f.verifiedBy} — ${f.verifiedAt}` : 'Chưa đối chiếu bản gốc'}</p>
      {f.hash && <p className="text-[10px] break-all">SHA256: {f.hash}</p>}
      <div className="flex flex-wrap gap-2">{f.blob && <Button size="sm" variant="outline" onClick={() => downloadBlob(f.blob!, f.fileName || 'chung-tu')}>Tải file gốc</Button>}
        {f.kind === 'drive' && <a className="underline text-sm" target="_blank" rel="noopener noreferrer" href={f.location}>Mở file Drive</a>}
        <Button size="sm" variant="outline" disabled={busy} onClick={() => run(async () => { if (!reviewer.trim()) throw new Error('Nhập tên người đã rà bản gốc.'); await auditDb.transaction('rw',auditDb.evidence,auditDb.events,async () => { await auditDb.evidence.update(f.id,{ verifiedBy: reviewer.trim(), verifiedAt: now() }); await logEvent(caseId,'Người rà xác nhận chứng từ',f.id); }); })}>Xác nhận đã rà</Button>
      </div>
    </article>)}</div>
  </section>;
}
