import { useState } from 'react';
import { useLiveQuery } from 'dexie-react-hooks';
import { TOOLS, calculate, inspectJournal, type ToolKind } from '@/lib/audit/calculations';
import { auditDb, newId, now, downloadCsv } from '@/lib/audit/workspace';
import { useAuditWorkspace } from '@/stores/audit-workspace-store';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
const inputGuide:Record<ToolKind,{source:string;method:string;review:string}>={
  revenue:{source:'Sổ chi tiết 511/521, bảng hóa đơn gốc và điều chỉnh, tờ khai GTGT đã nộp, bảng giao nhận/nghiệm thu.',method:'Lấy doanh thu phát sinh của cùng kỳ và phạm vi; không lấy số dư cuối kỳ 511 sau kết chuyển sang 911. Dùng số chưa GTGT. Giảm trừ và chênh lệch thời điểm phải có bảng giải thích, ghi đúng dấu.',review:'Tổng các dòng giải thích phải bằng chênh lệch. Chưa ghép được hóa đơn với giao nhận/nghiệm thu thì giao việc kiểm tra, không kết luận đã xuất hóa đơn đúng kỳ.'},
  wip:{source:'Sổ 154 theo đơn hàng/công trình, nhập 155, kết chuyển 632, nghiệm thu và bảng giá thành.',method:'Chọn một đối tượng hoặc một phạm vi tổng hợp rõ ràng. Đầu kỳ cộng chi phí tăng, trừ toàn bộ giảm để ra cuối kỳ. Nội thất/cấu kiện nhập thành phẩm phải tính chuyển 154 → 155, không chỉ 632.',review:'Chênh lệch bằng 0 mới chứng minh phép cộng. Rà tiếp hàng đã hoàn thành, khối lượng chưa nghiệm thu, tồn thực tế và chi phí treo lâu.'},
  inventory:{source:'Sổ cái và sổ chi tiết của tài khoản/đối tượng chọn; thẻ kho, kiểm kê hoặc đối chiếu công nợ.',method:'Ghi tên tài khoản và đối tượng ngay trong tên bảng. Thống nhất tính chất số dư và cùng kỳ; không bù phải thu của khách này với phải trả của khách khác.',review:'Tổng chi tiết khớp sổ cái; lệch lượng kho khác lệch giá trị. Phân loại sai tài khoản vẫn có thể làm phép cộng khớp nên phải xem chứng từ.'},
  interest:{source:'Báo cáo kết quả kinh doanh, chi tiết lãi vay, lãi tiền gửi/cho vay, bảng khấu hao và hồ sơ xác định phạm vi liên kết.',method:'Chỉ dùng mô phỏng sau khi xác định phạm vi, kỳ và miễn trừ. Lãi vay nhập là số thuần theo hướng dẫn của công cụ; không lấy dư nợ hoặc khoản phải thu liên quan thay chi phí lãi vay.',review:'Kiểm riêng phần chuyển tiếp từng năm và căn cứ thuế. Kết quả công cụ không tự điều chỉnh tờ khai hoặc xác nhận chi phí bị loại.'},
  debt:{source:'Sổ 131/2293, hợp đồng và hạn trả gốc, đối chiếu công nợ, thu tiền sau kỳ, hồ sơ đòi nợ.',method:'Tính theo từng khoản nợ còn lại. Số tháng quá hạn phải xuất phát từ hạn có căn cứ; không mặc định lấy ngày hóa đơn. Dự phòng đã ghi là số của cùng khoản nợ.',review:'Tuổi nợ chưa đủ chứng minh điều kiện dự phòng. Rà tranh chấp khối lượng, hồ sơ thu hồi và các trường hợp đặc biệt; không trích cho cả khách hàng từ một hóa đơn quá hạn.'},
  payment:{source:'Sổ 331/111/112, hóa đơn, hợp đồng, sao kê, ủy nhiệm chi và hồ sơ cấn trừ.',method:'Tổng phải thanh toán gồm các khoản theo hóa đơn/hợp đồng đang đối chiếu. Phân bổ khoản trả cho đúng hóa đơn; tách ứng trước. Còn nợ không phải đã trả tiền mặt.',review:'Chứng từ cấn trừ và trả hộ cần rà riêng. Số khớp không xác nhận điều kiện khấu trừ GTGT hoặc được trừ TNDN; phải kiểm luật theo kỳ riêng.'},
  wood:{source:'BOM/cấp phối, định mức đã duyệt, sản lượng thực tế, xuất vật tư, trả kho và thu hồi phế liệu.',method:'Áp dụng cho cả gỗ và vật liệu bê tông/cấu kiện. Nhập cùng đơn vị số nguyên đã quy đổi, ghi đơn vị trong tên bảng; không cộng m³ cát với kg xi măng. Lượng định mức phải theo sản lượng thật.',review:'So lượng xuất dùng thuần với định mức; ghi phế liệu riêng để tránh trừ hai lần. Giải thích khác biệt thiết kế, cân đo, trả hàng và hàng hỏng bằng tài liệu thực tế.'},
};
export function ReconciliationPanel() {
  const caseId = useAuditWorkspace(s => s.caseId);
  const records = useLiveQuery(() => auditDb.calculations.where('caseId').equals(caseId).toArray(),[caseId]) || [];
  const [kind,setKind] = useState<ToolKind>('revenue'); const [values,setValues] = useState<Record<string,string>>({});
  const [title,setTitle] = useState(''); const [period,setPeriod] = useState(''); const [message,setMessage] = useState('');
  const [journal,setJournal] = useState<ReturnType<typeof inspectJournal>>(); const [journalName,setJournalName] = useState(''); const [journalText,setJournalText] = useState('');
  const tool=TOOLS.find(t=>t.id===kind)!;
  const output = (()=>{try{return calculate(kind,values);}catch{return '';}})();
  return <section className="border rounded-xl p-4 space-y-4 bg-card">
    <h2 className="font-bold text-lg">Đối chiếu số liệu và lưu bảng làm việc</h2>
    <div className="flex flex-wrap gap-2">{TOOLS.map(t=><Button key={t.id} size="sm" variant={kind===t.id?'default':'outline'} onClick={()=>{setKind(t.id);setValues({});setMessage('');}}>{t.title}</Button>)}</div>
    <p className="text-sm">{tool.instruction}</p>
    <div className="grid lg:grid-cols-3 gap-3 text-sm leading-6"><div className="border rounded-lg p-3"><h3 className="font-semibold mb-2">1. Lấy số ở đâu?</h3>{inputGuide[kind].source}</div><div className="border rounded-lg p-3"><h3 className="font-semibold mb-2">2. Chuẩn hóa trước khi nhập</h3>{inputGuide[kind].method}</div><div className="border rounded-lg p-3"><h3 className="font-semibold mb-2">3. Đọc kết quả và rà tiếp</h3>{inputGuide[kind].review}</div></div>
    <div className="grid sm:grid-cols-2 gap-3"><label className="text-xs">Tên bảng / đơn hàng / công trình<Input aria-label="Tên bảng đối chiếu" value={title} onChange={e=>setTitle(e.target.value)} /></label><label className="text-xs">Kỳ số liệu<Input aria-label="Kỳ số liệu" placeholder="Ví dụ 2024 hoặc 2025-06" value={period} onChange={e=>setPeriod(e.target.value)} /></label>
      {tool.fields.map(([key,label])=><label key={key} className="text-xs">{label}<Input aria-label={label} inputMode="numeric" value={values[key]||''} onChange={e=>setValues({...values,[key]:e.target.value})} /></label>)}</div>
    <pre className="whitespace-pre-wrap text-sm p-3 rounded bg-muted">{output || 'Nhập đủ số nguyên hợp lệ để tính. Dữ liệu chưa nhập không được coi bằng 0.'}</pre>
    <Button disabled={!caseId} onClick={async()=>{try{if(!title.trim()||!period.trim())throw new Error('Nhập tên bảng và kỳ số liệu.');const result=calculate(kind,values);await auditDb.calculations.add({id:newId(),caseId,kind,title,period,inputs:values,output:result,createdAt:now()});setMessage('Đã lưu phiên bản bảng đối chiếu.');}catch(e){setMessage(e instanceof Error?e.message:'Không lưu được.');}}}>Lưu bảng đối chiếu</Button>
    {message&&<p role="status">{message}</p>}
    <div className="border-t pt-4 space-y-2"><h3 className="font-semibold">Nhập sổ nhật ký từ CSV</h3>
      <p className="text-sm">Xuất CSV UTF-8 từ Excel/phần mềm kế toán. Giữ mã tài khoản và chứng từ. Kiểm đủ các dòng, báo dòng lỗi; không tự sửa sổ. Các cột tiền dùng VND nguyên.</p>
      <Button size="sm" variant="outline" onClick={()=>downloadCsv([['date','voucher','account','debit','credit','object','pillar']], 'mau-nhat-ky.csv')}>Tải mẫu CSV</Button>
      <input aria-label="Nhập sổ CSV" type="file" accept=".csv" onChange={async e=>{const file=e.target.files?.[0];if(!file)return;try{if(file.size>10*1024*1024)throw new Error('CSV tối đa 10 MB.');const text=await file.text();setJournal(inspectJournal(text));setJournalName(file.name);setJournalText(text);setMessage('Đã kiểm tra các dòng CSV.');}catch(err){setJournal(undefined);setMessage(err instanceof Error?err.message:'Không đọc được file.');}}} />
      {journal&&<><p>{journal.total} dòng • hợp lệ {journal.accepted} • lỗi dữ liệu {journal.rejected} • {journal.findings.length} điểm cần rà</p>
        <div className="max-h-72 overflow-auto"><table className="text-xs w-full"><thead><tr><th>Dòng</th><th>Chứng từ</th><th>Vấn đề</th></tr></thead><tbody>{journal.findings.map((f,i)=><tr key={i}><td>{f.row||'Tổng'}</td><td>{f.voucher}</td><td>{f.issue}</td></tr>)}</tbody></table></div>
        <Button variant="outline" onClick={()=>downloadCsv([['Dòng','Chứng từ','Vấn đề'],...journal.findings.map(f=>[f.row,f.voucher,f.issue])],'chenh-lech-nhat-ky.csv')}>Xuất lỗi CSV</Button>{' '}
        <Button disabled={!caseId} onClick={async()=>{try{if(!period.trim())throw new Error('Nhập kỳ số liệu trước khi lưu sổ.');await auditDb.calculations.add({id:newId(),caseId,kind:'journal',title:journalName,period,inputs:{csv:journalText},output:JSON.stringify(journal,null,2),createdAt:now()});setMessage('Đã lưu sổ nhập và kết quả đối chiếu.');}catch(e){setMessage(e instanceof Error?e.message:'Không lưu được.');}}}>Lưu sổ và kết quả</Button>
      </>}
    </div>
    <h3 className="font-semibold">Các bảng đã lưu ({records.length})</h3>{records.map(r=><details key={r.id} className="border rounded p-2"><summary className="cursor-pointer">{r.title} • {r.period} • {r.createdAt}</summary><pre className="whitespace-pre-wrap break-words text-xs">{r.output}</pre><Button size="sm" variant="outline" onClick={()=>downloadCsv([['Tên','Kỳ','Loại','Dữ liệu','Kết quả'],[r.title,r.period,r.kind,JSON.stringify(r.inputs),r.output]],'bang-doi-chieu.csv')}>Xuất bảng</Button></details>)}
  </section>;
}
