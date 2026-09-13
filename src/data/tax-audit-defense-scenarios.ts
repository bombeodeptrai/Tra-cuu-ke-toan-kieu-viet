import { AUDIT_PROCEDURES, procedureDraft } from './audit-procedures';
import { PILLAR_LABELS } from '@/types/tax-audit';
const referenceFor=(id:string)=>({wood:'tt-99-2025',yield:'tt-96-2015',wip:'tt-200-2014',revenue:'nd-123-2020',payment:'tt-219-2013',related:'nd-132-2020',debt:'tt-48-2019',payroll:'tt-111-2013',consulting:'tt-80-2021',quarry:'tt-152-2015'} as Record<string,string>)[id]||'vas-02';
// 8 Kịch Bản Phản Biện Thực Chiến & Kho Tri Thức Đối Đáp Thanh Tra Thuế Kiểu Việt
// Doanh nghiệp: CÔNG TY CỔ PHẦN KIỂU VIỆT (Gia Lai)

export interface DefenseScenario {
  id: string;
  title: string;
  category: string;
  threat: string;
  decreeId: string;
  articleNum?: number;
  decreeLabel: string;
  legalReference: string;
  keyArguments: string[];
  requiredDossiers: string[];
  dialogueScript: string;
}

export const DEFENSE_SCENARIOS: DefenseScenario[] = AUDIT_PROCEDURES.map((p,i)=>({
 id:'kb-'+String(i+1).padStart(2,'0'),title:p.title,category:PILLAR_LABELS[p.pillar],threat:'Tình huống cần kiểm chứng: '+p.question,
 decreeId:referenceFor(p.id),articleNum:undefined,decreeLabel:'Mở văn bản gốc, xác định điều khoản đúng kỳ',legalReference:'Cần rà chuỗi văn bản theo kỳ trước khi kết luận; xem Kho luật bổ sung.',
 keyArguments:p.steps.map(s=>s.action+' Hồ sơ đầu ra: '+s.output),requiredDossiers:p.records,
 dialogueScript:'Đối với nội dung yêu cầu [ghi nguyên văn], công ty cung cấp bảng đối chiếu [tên bảng], kỳ [kỳ thực tế] và chứng từ [danh mục]. Kết quả đã kiểm: [điền]. Chênh lệch còn lại: [điền]. Căn cứ đã đọc: [điều/khoản, văn bản, thời điểm áp dụng]. Nội dung còn thiếu cần bổ sung: [điền, người xử lý, hạn]. Đề nghị ghi nhận ý kiến và tài liệu này trong hồ sơ làm việc. Không ghi công ty đã tuân thủ hoặc đoàn đã chấp nhận khi chưa có căn cứ.'
}));
