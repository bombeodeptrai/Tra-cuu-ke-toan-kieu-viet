import { useEffect, useState } from 'react';
import { useDecreeStore } from '@/stores/decree-store';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { downloadCsv } from '@/lib/audit/workspace';
type LawFile={localUrl:string;textUrl:string;sha256:string;pages:number;emptyPages:number[];driveUrl?:string;lowConfidencePages?:number[]};
type Law={id:string;number:string;title:string;status:string;files:LawFile[];error?:string;layoutVerified:boolean};
const url=(s:string)=>`${import.meta.env.BASE_URL.replace(/\/$/,'')}/${s.replace(/^\//,'')}`;
export function AuditLegalLibrary(){
  const decrees=useDecreeStore(s=>s.decrees); const [laws,setLaws]=useState<Law[]>([]);const [error,setError]=useState('');
  const [selected,setSelected]=useState<Law>();const [pages,setPages]=useState<{page:number;text:string;file:number;ocrConfidence?:number}[]>([]);
  const [query,setQuery]=useState('');const [pageIndex,setPageIndex]=useState(0);const [loading,setLoading]=useState(false);
  const [showPdf,setShowPdf]=useState(false);const [showAll,setShowAll]=useState(false);
  const [metadata,setMetadata]=useState<Record<string,{issuedDate:string;effectiveDate:string;source:string;error:string}>>({});
  useEffect(()=>{let alive=true;fetch(url('/data/accounting-laws/metadata.json')).then(r=>{if(!r.ok)throw Error('Không đọc được thuộc tính văn bản.');return r.json();}).then(d=>{if(alive)setMetadata(d.documents);}).catch(e=>{if(alive)setError(e.message);});return()=>{alive=false;};},[]);
  useEffect(()=>{let alive=true;fetch(url('/data/accounting-laws/manifest.json')).then(r=>{if(!r.ok)throw Error('Không tải được danh mục bổ sung.');return r.json();}).then(d=>{if(alive)setLaws(d.documents);}).catch(e=>{if(alive)setError(e.message);});return()=>{alive=false;};},[]);
  useEffect(()=>{let alive=true;setPages([]);setPageIndex(0);setError('');if(!selected)return;setLoading(true);
    Promise.all(selected.files.map(async(f,index)=>{const r=await fetch(url(f.textUrl));if(!r.ok)throw Error('Không đọc được bản chép. Bản PDF gốc vẫn tải riêng.');const d=await r.json();return d.pages.map((p:{page:number;text:string})=>({...p,file:index}));})).then(data=>{if(alive)setPages(data.flat());}).catch(e=>{if(alive)setError(e.message);}).finally(()=>{if(alive)setLoading(false);});return()=>{alive=false;};},[selected]);
  const matches=pages.filter(p=>!query||p.text.toLocaleLowerCase('vi').includes(query.toLocaleLowerCase('vi')));const current=matches[Math.min(pageIndex,Math.max(0,matches.length-1))];
  return <section className="border rounded-xl p-4 space-y-4 bg-card">
    <h2 className="font-bold text-lg">Kho căn cứ phục vụ kiểm tra thuế</h2>
    <p className="text-sm">Giữ {decrees.length} văn bản trong thư viện cũ; thêm {laws.length} văn bản nguồn. Có file không đồng nghĩa đã xác minh toàn văn, hiệu lực hoặc áp dụng cho hồ sơ. Mỗi phụ lục là một file riêng.</p>
    <div className="rounded border p-3 text-sm">Cần kiểm theo kỳ: nguồn gốc lâm sản và định mức nội thất; mua bán cát, đá, xi măng, thép; cấp phối và giao nhận bê tông; vận chuyển, nhiên liệu, công nợ; xây lắp liên tỉnh và tư vấn dự án; GTGT, hóa đơn, TNDN, giao dịch liên kết và thủ tục kiểm tra. Đối chiếu xử phạt cần đọc NĐ 125/2020 cùng các sửa đổi 102/2021, 310/2025, 291/2026 và điều khoản chuyển tiếp. Danh mục chưa xác nhận đủ mọi căn cứ cho kỳ chưa biết.</div>
    <Button variant="outline" onClick={()=>downloadCsv([['ID','Số hiệu','Tên','Nguồn dữ liệu','File/trang','Mức xác minh'],...decrees.map(d=>[d.id,d.decree_number,d.title,'Thư viện cũ',d.content_url||'','Chưa đối chiếu lại bản ký trong đợt này']),...laws.map(d=>[d.id,d.number,d.title,'Kho bổ sung',d.files.map(f=>`${f.pages} trang`).join('; '),d.status])],'kiem-ke-kho-luat.csv')}>Xuất kiểm kê toàn bộ kho</Button>
    <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] gap-4">
      <div className="space-y-2 max-h-[650px] overflow-auto">{laws.map(d=><button key={d.id} className={`text-left w-full border rounded p-3 text-sm ${selected?.id===d.id?'bg-blue-50 dark:bg-blue-950':''}`} onClick={()=>setSelected(d)}><strong>{d.number}</strong><div>{d.title}</div><div className="text-xs text-muted-foreground">{d.files.length} file • {d.files.reduce((n,f)=>n+f.pages,0)} trang • {d.status==='pending'?'Chưa lấy được file':d.files.some(f=>f.emptyPages.length)?'Còn trang cần OCR':'Đã trích các trang; cần so bản gốc'}</div></button>)}</div>
      <div className="min-w-0 space-y-3">{selected?<><h3 className="font-semibold">{selected.number} — {selected.title}</h3>
        {metadata[selected.id]&&<p className="text-sm">Ban hành: {metadata[selected.id].issuedDate || 'xem bản gốc'} • Hiệu lực ghi tại nguồn: {metadata[selected.id].effectiveDate || 'xem chuỗi văn bản hợp nhất'}. Ngày này không thay việc kiểm điều khoản chuyển tiếp. <a className="underline" target="_blank" rel="noopener noreferrer" href={metadata[selected.id].source}>Thuộc tính tại nguồn</a></p>}
        <p className="text-xs">Bản chép máy/OCR phục vụ tìm kiếm; kiểm bản gốc khi dùng số liệu, bảng hoặc điều khoản. Chưa có xác nhận rà bố cục toàn bộ.</p>
        {selected.files.map((f,i)=><div key={f.localUrl} className="text-sm border rounded p-2 space-y-1"><a className="underline mr-3" href={url(f.localUrl)} target="_blank" rel="noopener noreferrer">Mở PDF gốc {i+1} ({f.pages} trang)</a><a className="underline" href={url(f.localUrl)} download>Tải file PDF</a>{f.driveUrl&&<a className="underline ml-3" href={f.driveUrl} target="_blank" rel="noopener noreferrer">File trên Drive</a>}<p className="text-[10px] break-all">SHA256: {f.sha256}</p>{!!f.emptyPages.length&&<p className="text-amber-700">Chưa có chữ ở trang: {f.emptyPages.join(', ')}</p>}</div>)}
        <Input aria-label="Tìm toàn bộ trang văn bản bổ sung" placeholder="Tìm trên tất cả trang và phụ lục..." value={query} onChange={e=>{setQuery(e.target.value);setPageIndex(0);}} />
        <div className="flex flex-wrap gap-2"><Button size="sm" variant="outline" onClick={()=>setShowPdf(v=>!v)}>{showPdf?'Ẩn PDF':'Đọc bản PDF trong trang'}</Button><Button size="sm" variant="outline" onClick={()=>setShowAll(v=>!v)}>{showAll?'Đọc từng trang':'Hiện toàn bộ bản chép và phụ lục'}</Button></div>
        {showPdf&&current&&<iframe title="Bản PDF gốc đang đối chiếu" className="w-full h-[650px] border rounded" src={`${url(selected.files[current.file].localUrl)}#page=${current.page}`} />}
        {showAll&&<div className="border rounded p-3 max-h-[650px] overflow-auto">{pages.map(p=><article key={`${p.file}-${p.page}`} className="mb-4"><h4 className="font-semibold text-xs">File {p.file+1} — Trang {p.page}</h4><pre className="text-sm whitespace-pre-wrap break-words">{p.text||'Chưa nhận dạng được chữ; xem bản PDF của trang này.'}</pre></article>)}</div>}
        <div className="flex gap-2 items-center text-sm"><Button size="sm" variant="outline" disabled={pageIndex===0} onClick={()=>setPageIndex(n=>n-1)}>Trang trước</Button><span>{matches.length?`${pageIndex+1}/${matches.length} trang phù hợp`:'Không có trang phù hợp'}</span><Button size="sm" variant="outline" disabled={pageIndex>=matches.length-1} onClick={()=>setPageIndex(n=>n+1)}>Trang sau</Button></div>
        {loading?<p>Đang đọc các file...</p>:current&&<><p className="text-xs">File {current.file+1}, trang gốc {current.page}{current.ocrConfidence!==undefined?` • độ tin cậy OCR máy tính: ${current.ocrConfidence}% (không phải độ đúng pháp lý)`:''}</p><pre className="whitespace-pre-wrap break-words text-sm leading-relaxed max-h-[650px] overflow-auto border rounded p-3">{current.text||'Trang chưa có chữ, mở PDF gốc để đọc. Không có bản tóm tắt thay thế.'}</pre></>}
      </>:<p>Chọn văn bản để đọc file gốc và bản chép từng trang.</p>}</div>
    </div>
    {error&&<p role="alert">{error}</p>}
  </section>;
}
