import { AUDIT_PROCEDURES, procedureDraft } from './audit-procedures';
import { PILLAR_LABELS } from '@/types/tax-audit';
const referenceFor=(id:string)=>({wood:'tt-99-2025',yield:'tt-96-2015',wip:'tt-200-2014',revenue:'nd-123-2020',payment:'tt-219-2013',related:'nd-132-2020',debt:'tt-48-2019',payroll:'tt-111-2013',consulting:'tt-80-2021',quarry:'tt-152-2015'} as Record<string,string>)[id]||'vas-02';
// Bộ Mẫu Biểu & Văn Bản Giải Trình Thực Chiến Tiếp Đoàn Kiểm Tra Thuế
// Doanh nghiệp: CÔNG TY CỔ PHẦN KIỂU VIỆT (Nội Thất — Vật Liệu Xây Dựng — Thi Công Xây Lắp)
// Website: kieuviet.com.vn | Slogan: "Xây bền vững - Dựng tương lai"

export interface AuditTemplate {
  id: string;
  code: string;
  title: string;
  category: string;
  targetRisk: string;
  legalBase: string;
  decreeId: string;
  articleNum?: number;
  decreeLabel: string;
  description: string;
  requiredDossier: string[];
  defenseArguments: string[];
  templateContent: string;
}

export const AUDIT_TEMPLATES: AuditTemplate[] = AUDIT_PROCEDURES.map((p,i)=>({
 id:'mau-'+String(i+1).padStart(2,'0'),code:'MẪU NỘI BỘ '+String(i+1).padStart(2,'0'),title:p.title,category:PILLAR_LABELS[p.pillar],
 targetRisk:p.question,legalBase:'Mở căn cứ và chuỗi sửa đổi theo kỳ; chưa xác nhận điều khoản áp dụng.',decreeId:referenceFor(p.id),articleNum:undefined,
 decreeLabel:'Mở văn bản để kiểm căn cứ theo kỳ',description:p.scope,requiredDossier:p.records,
 defenseArguments:p.steps.map(s=>s.action+' Kết quả cần lưu: '+s.output),templateContent:'BẢN NHÁP NỘI BỘ — CHƯA KÝ\nPháp nhân: [điền]\nMST: [điền]\nSố văn bản/ngày: [điền khi ban hành]\n'+procedureDraft(p,'')
}));
