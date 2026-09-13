import { useState } from 'react';
import { useLiveQuery } from 'dexie-react-hooks';
import { AUDIT_PROCEDURES, procedureDraft } from '@/data/audit-procedures';
import { auditDb, downloadCsv, logEvent } from '@/lib/audit/workspace';
import { useAuditWorkspace } from '@/stores/audit-workspace-store';
import { PILLAR_LABELS } from '@/types/tax-audit';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
const lawName=(id:string)=>{
  const names:Record<string,string>={'vas-02':'VAS 02 – Hàng tồn kho','luat-41-2024':'Luật BHXH 41/2024/QH15','luat-108-2025':'Luật Quản lý thuế 108/2025/QH15','luat-54-2024-khoangsan':'Luật Địa chất và khoáng sản 54/2024/QH15','qd-87-2025-gialai':'Quyết định 87/2025/QĐ-UBND Gia Lai'};
  if(names[id])return names[id];const m=id.match(/^(nd|tt)-(\d+)-(\d{4})/);if(!m)return 'Văn bản trong danh mục theo kỳ';
  return `${m[1]==='nd'?'Nghị định':'Thông tư'} ${m[2]}/${m[3]}/${m[1]==='nd'?'NĐ-CP':id.includes('lamsan')?(m[3]==='2022'?'TT-BNNPTNT':'TT-BNNMT'):'TT-BTC'}`;
};

export function AuditPreparationDesk({ openWork, openCalculations, openLaws }: {openWork:()=>void;openCalculations:()=>void;openLaws:()=>void}) {
  const caseId=useAuditWorkspace(s=>s.caseId);
  const current=useLiveQuery(()=>auditDb.cases.get(caseId),[caseId]);
  const work=useLiveQuery(()=>auditDb.work.where('caseId').equals(caseId).toArray(),[caseId])||[];
  const [sector,setSector]=useState('all');const [selected,setSelected]=useState('wood');
  const [owner,setOwner]=useState('');const [deadline,setDeadline]=useState('');const [message,setMessage]=useState('');const [busy,setBusy]=useState(false);
  const list=AUDIT_PROCEDURES.filter(p=>sector==='all'||p.pillar===sector);
  const p=list.find(p=>p.id===selected)||list[0];
  const id=`${caseId}:procedure:${p.id}`;const existing=work.find(w=>w.id===id);
  const status={open:'Chưa bắt đầu',preparing:'Đang chuẩn bị',submitted:'Đã bàn giao',closed:'Có biên nhận/kết quả',not_applicable:'Không áp dụng, có lý do'};
  async function create() {
    setBusy(true);setMessage('');
    try {
      if(!current)throw Error('Chọn đợt kiểm tra trước khi giao việc.');
      if(!owner.trim())throw Error('Nhập người phụ trách hồ sơ này.');
      await auditDb.transaction('rw',auditDb.work,auditDb.events,async()=>{
        if(await auditDb.work.get(id))throw Error('Hồ sơ này đã được lập. Mở công việc hiện có để tránh tạo trùng.');
        await auditDb.work.add({id,caseId,kind:'task',title:p.title,pillar:p.pillar,owner:owner.trim(),deadline,
          requestedBy:'Chuẩn bị nội bộ',receivedAt:'',status:'preparing',evidenceIds:[],response:procedureDraft(p,current.periods),receipt:'',submittedAt:'',deliveries:[]});
        await logEvent(caseId,'Lập hồ sơ theo quy trình',id);
      });
      setMessage('Đã lập hồ sơ và lưu người phụ trách, hạn xử lý, hướng dẫn cùng bản nháp. Mở công việc để điền kết quả và gắn chứng từ.');
    }catch(e){setMessage(e instanceof Error?e.message:'Không lưu được hồ sơ.');}finally{setBusy(false);}
  }
  return <section className="space-y-5" aria-label="Bàn chuẩn bị kiểm tra thuế">
    <div className="rounded-xl border bg-card p-5 space-y-3">
      <h2 className="text-xl font-bold">Chuẩn bị theo hồ sơ thực tế</h2>
      <p className="text-sm leading-6">Chọn đúng mảng, đọc cách rà, tải bảng làm việc rồi phân công. Mỗi hồ sơ có đầu vào, bước đối chiếu, chênh lệch cần xử lý và điều kiện hoàn thành. Số liệu chỉ điền từ sổ và chứng từ của đợt đang chọn.</p>
      <ol className="grid sm:grid-cols-2 xl:grid-cols-4 gap-3 text-sm">{['1. Chốt kỳ và phạm vi theo quyết định','2. Tập hợp sổ, file và chứng từ gốc','3. Đối chiếu, ghi chênh lệch và người xử lý','4. Rà chứng từ, lưu bản giải trình và biên nhận'].map(s=><li key={s} className="rounded-lg bg-muted p-3 leading-6">{s}</li>)}</ol>
      <p className="text-sm">Đợt: <strong>{current?.name||'Đang tải'}</strong> · Kỳ: <strong>{current?.periods||'Chưa xác định'}</strong> · Đã lập {AUDIT_PROCEDURES.filter(p=>work.some(w=>w.id===`${caseId}:procedure:${p.id}`)).length}/{AUDIT_PROCEDURES.length} hồ sơ hướng dẫn. Đây là tiến độ lập việc, không phải tỷ lệ tuân thủ thuế.</p>
    </div>
    <div className="flex flex-wrap gap-2" aria-label="Lọc quy trình theo mảng">{[['all','Tất cả 4 mảng'],...Object.entries(PILLAR_LABELS)].map(([key,label])=><Button key={key} variant={sector===key?'default':'outline'} onClick={()=>{setSector(key);setMessage('');}} className="h-auto whitespace-normal text-left">{label} ({AUDIT_PROCEDURES.filter(p=>key==='all'||p.pillar===key).length})</Button>)}</div>
    <div className="grid lg:grid-cols-[minmax(230px,1fr)_minmax(0,3fr)] gap-5">
      <nav aria-label="Danh sách hồ sơ cần chuẩn bị" className="space-y-2">{list.map(item=><button key={item.id} onClick={()=>{setSelected(item.id);setMessage('');}} aria-current={p.id===item.id?'true':undefined} className={`w-full rounded-xl border p-3 text-left text-sm leading-6 ${p.id===item.id?'border-blue-500 bg-blue-50 dark:bg-blue-950':'bg-card hover:bg-muted'}`}><strong>{item.title}</strong><span className="block text-xs text-muted-foreground">{work.some(w=>w.id===`${caseId}:procedure:${item.id}`)?'Đã có công việc trong đợt':'Chưa lập công việc'}</span></button>)}</nav>
      <article className="min-w-0 rounded-xl border bg-card p-5 space-y-6" data-testid="procedure-detail">
        <header className="space-y-2"><h3 className="text-xl font-bold">{p.title}</h3><p className="font-medium leading-6">{p.question}</p><p className="text-sm leading-6 text-muted-foreground">{p.scope}</p></header>
        <section><h4 className="font-bold mb-2">A. Lấy sổ và chứng từ nào?</h4><ul className="list-disc pl-5 space-y-2 text-sm leading-6">{p.records.map(x=><li key={x}>{x}</li>)}</ul></section>
        <section><h4 className="font-bold mb-3">B. Thực hiện đối chiếu từng bước</h4><ol className="space-y-3">{p.steps.map((s,i)=><li key={s.title} className="border-l-4 border-blue-400 bg-muted/40 p-4 rounded-r-lg"><h5 className="font-semibold">{i+1}. {s.title}</h5><p className="text-sm leading-6 mt-1">{s.action}</p><p className="text-sm leading-6 mt-2"><strong>Phải lưu lại:</strong> {s.output}</p></li>)}</ol></section>
        <section className="rounded-lg border border-amber-300 p-4"><h4 className="font-bold mb-2">C. Trường hợp cần xử lý riêng</h4><ul className="list-disc pl-5 text-sm space-y-2 leading-6">{p.exceptions.map(x=><li key={x}>{x}</li>)}</ul></section>
        <section><h4 className="font-bold mb-2">D. Khi nào có thể trình người rà?</h4><ul className="list-disc pl-5 text-sm space-y-2 leading-6">{p.completion.map(x=><li key={x}>{x}</li>)}</ul><p className="text-sm mt-3 leading-6">Căn cứ cần mở theo kỳ: {p.laws.map(lawName).join(' · ')}. Đọc văn bản gốc, sửa đổi và chuyển tiếp trước khi ghi điều khoản; danh sách này chưa xác nhận áp dụng cho hồ sơ.</p><Button variant="link" onClick={openLaws}>Mở kho luật và file gốc</Button></section>
        <section className="border-t pt-4 space-y-3"><h4 className="font-bold">E. Tạo bảng làm việc và phân công</h4><div className="flex flex-wrap gap-2"><Button variant="outline" onClick={()=>downloadCsv([p.columns],`bang-ra-${p.id}.csv`)}>Tải bảng làm việc của hồ sơ</Button><Button variant="outline" onClick={openCalculations}>Mở công cụ đối chiếu số liệu</Button></div>
          {existing?<div className="text-sm space-y-2"><p>Người phụ trách: <strong>{existing.owner}</strong> · Hạn: {existing.deadline||'Chưa đặt'} · {status[existing.status]}</p><Button onClick={openWork}>Mở hồ sơ đã lập</Button></div>:<form onSubmit={e=>{e.preventDefault();void create();}} className="space-y-3"><div className="grid sm:grid-cols-2 gap-3"><label className="text-sm">Người phụ trách<Input aria-label="Người phụ trách quy trình" required value={owner} onChange={e=>setOwner(e.target.value)}/></label><label className="text-sm">Hạn chuẩn bị thực tế (chưa rõ để trống)<Input aria-label="Hạn quy trình" type="date" value={deadline} onChange={e=>setDeadline(e.target.value)}/></label></div><Button disabled={busy||!current} type="submit">Lập hồ sơ theo hướng dẫn này</Button></form>}
          {message&&<p role="status" className="text-sm leading-6">{message}</p>}
        </section>
      </article>
    </div>
  </section>;
}
