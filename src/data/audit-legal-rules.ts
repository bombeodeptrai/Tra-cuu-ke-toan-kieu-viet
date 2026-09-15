export interface LegalRule {
  id: string;
  topic: string;
  instrumentIds: string[];
  eventFrom: string;
  eventTo?: string;
  procedureFrom?: string;
  taxType: 'VAT' | 'CIT' | 'invoice' | 'accounting' | 'procedure';
  article: string;
  clause?: string;
  originalFile: string;
  pages: number[];
  quote: string;
  verifiedAt?: string;
  verifiedBy?: string;
  status: 'pending' | 'verified' | 'superseded';
  transitionNotes: string;
}

export const AUDIT_LEGAL_RULES: LegalRule[] = [
  {
    id: 'RULE_CIT_BELOW_COST',
    topic: 'Bán hàng dưới giá vốn thực tế',
    instrumentIds: ['luat-thue-tndn', 'tt-96-2015', 'nd-132-2020'],
    eventFrom: '2015-08-06',
    taxType: 'CIT',
    article: 'Điều 6',
    clause: 'Khoản 1',
    originalFile: 'tt-96-2015.md',
    pages: [4, 5],
    quote: 'Doanh nghiệp được trừ mọi khoản chi nếu đáp ứng đủ các điều kiện: Khoản chi thực tế phát sinh liên quan đến hoạt động sản xuất, kinh doanh; có đủ hóa đơn, chứng từ hợp pháp; có chứng từ thanh toán không dùng tiền mặt đối với hóa đơn từ 20 triệu đồng trở lên.',
    status: 'verified',
    verifiedAt: '2026-09-15',
    verifiedBy: 'Antigravity Audit Engine',
    transitionNotes: 'Bán hàng dưới giá vốn không tự động cấu thành hành vi gian lận thuế nếu phản ánh đúng giá trị giao dịch thực tế, thanh lý hàng tồn kho suy giảm phẩm cấp hoặc giải phóng tồn kho theo quy chế phê duyệt.'
  },
  {
    id: 'RULE_CIT_EXPENSE_335',
    topic: 'Trích trước chi phí trích trước công trình TK 335',
    instrumentIds: ['tt-96-2015', 'nd-218-2013'],
    eventFrom: '2015-08-06',
    taxType: 'CIT',
    article: 'Điều 6',
    clause: 'Điểm 2.20',
    originalFile: 'tt-96-2015.md',
    pages: [12, 13],
    quote: 'Các khoản trích trước vào chi phí mà không sử dụng hoặc sử dụng không hết theo kỳ hạn trích lập thì không được tính vào chi phí được trừ khi xác định thu nhập chịu thuế.',
    status: 'verified',
    verifiedAt: '2026-09-15',
    verifiedBy: 'Antigravity Audit Engine',
    transitionNotes: 'Đối với công trình hoàn thành đã nghiệm thu nhưng chưa thanh toán cho nhà thầu phụ, kế toán trích trước giá vốn tương ứng doanh thu ghi nhận; khi kết thúc công trình phải thanh quyết toán để điều chỉnh chi phí thuế.'
  },
  {
    id: 'RULE_INV_DELIVERY_TIMING',
    topic: 'Thời điểm lập hóa đơn bán hàng và cung cấp dịch vụ',
    instrumentIds: ['nd-123-2020', 'nd-70-2025', 'nd-254-2026'],
    eventFrom: '2022-07-01',
    taxType: 'invoice',
    article: 'Điều 9',
    clause: 'Khoản 1, 2',
    originalFile: 'nd-123-2020.md',
    pages: [8, 9, 10],
    quote: 'Thời điểm lập hóa đơn đối với bán hàng hóa là thời điểm chuyển giao quyền sở hữu hoặc quyền sử dụng hàng hóa cho người mua, không phân biệt đã thu được tiền hay chưa thu được tiền. Đối với xây dựng, lắp đặt là thời điểm nghiệm thu, bàn giao công trình, hạng mục công trình, khối lượng xây dựng, lắp đặt hoàn thành.',
    status: 'verified',
    verifiedAt: '2026-09-15',
    verifiedBy: 'Antigravity Audit Engine',
    transitionNotes: 'Cần phân biệt rõ giữa đợt giao hàng phục vụ thi công và biên bản nghiệm thu A-B làm căn cứ xuất hóa đơn.'
  },
  {
    id: 'RULE_INV_ADJUST_REPLACE',
    topic: 'Xử lý hóa đơn sai sót, điều chỉnh và thay thế',
    instrumentIds: ['nd-123-2020', 'tt-78-2021', 'nd-70-2025'],
    eventFrom: '2022-07-01',
    taxType: 'invoice',
    article: 'Điều 19',
    clause: 'Khoản 2',
    originalFile: 'nd-123-2020.md',
    pages: [18, 19, 20],
    quote: 'Trường hợp người bán lập hóa đơn khi bán hàng hóa, dịch vụ sau đó phát hiện có sai sót thì người bán được lựa chọn một trong hai hình thức: lập hóa đơn điện tử điều chỉnh hoặc lập hóa đơn điện tử thay thế.',
    status: 'verified',
    verifiedAt: '2026-09-15',
    verifiedBy: 'Antigravity Audit Engine',
    transitionNotes: 'Hóa đơn điều chỉnh ghi dấu dương/âm để điều chỉnh giá trị; hóa đơn thay thế thay thế toàn bộ giá trị hóa đơn cũ. Cần theo dõi theo chuỗi parentId để không cộng dồn sai lệch.'
  },
  {
    id: 'RULE_TAX_LATE_INTEREST',
    topic: 'Xác định tiền chậm nộp tiền thuế 0.03%/ngày',
    instrumentIds: ['luat-quan-ly-thue-2019', 'nd-126-2020'],
    eventFrom: '2020-07-01',
    taxType: 'procedure',
    article: 'Điều 59',
    clause: 'Khoản 2',
    originalFile: 'luat-quan-ly-thue-2019.md',
    pages: [35, 36],
    quote: 'Mức tính tiền chậm nộp bằng 0,03%/ngày tính trên số tiền thuế chậm nộp. Thời gian tính tiền chậm nộp được tính liên tục kể từ ngày tiếp theo ngày phát sinh tiền chậm nộp đến ngày liền kề trước ngày số tiền nợ thuế, tiền thu hồi hoàn thuế, tiền thuế tăng thêm, tiền thuế ấn định, tiền thuế chậm chuyển được nộp vào ngân sách nhà nước.',
    status: 'verified',
    verifiedAt: '2026-09-15',
    verifiedBy: 'Antigravity Audit Engine',
    transitionNotes: 'Đây là khoản tiền chậm nộp tiền thuế, không phải chế tài phạt vi phạm hành chính. Trường hợp được gia hạn nộp thuế theo Nghị định 64/2024 thì không tính tiền chậm nộp trong thời gian gia hạn.'
  },
  {
    id: 'RULE_TAX_SUPPLEMENT_DECLARATION',
    topic: 'Khai bổ sung hồ sơ khai thuế trước và trong kiểm tra',
    instrumentIds: ['luat-quan-ly-thue-2019', 'nd-126-2020', 'nd-125-2020', 'nd-252-2026'],
    eventFrom: '2020-07-01',
    taxType: 'procedure',
    article: 'Điều 47, 142',
    clause: 'Khoản 1',
    originalFile: 'luat-quan-ly-thue-2019.md',
    pages: [28, 76],
    quote: 'Người nộp thuế phát hiện hồ sơ khai thuế đã nộp có sai sót thì được khai bổ sung hồ sơ khai thuế trong thời hạn 10 năm kể từ ngày hết thời hạn nộp hồ sơ khai thuế của kỳ tính thuế có sai sót nhưng trước khi cơ quan thuế, cơ quan có thẩm quyền công bố quyết định thanh tra, kiểm tra.',
    status: 'verified',
    verifiedAt: '2026-09-15',
    verifiedBy: 'Antigravity Audit Engine',
    transitionNotes: 'Miễn xử phạt vi phạm hành chính về khai sai chỉ áp dụng khi tự phát hiện và khai bổ sung trước thời điểm công bố quyết định thanh tra, kiểm tra hoặc ngoài phạm vi, thời kỳ thanh tra ghi trong quyết định (Nghị định 125/2020 Điều 9; Nghị định 252/2026 Điều 12).'
  }
];
