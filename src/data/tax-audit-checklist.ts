// Cơ sở dữ liệu Checklist Chuẩn Bị Kiểm Tra Thuế — Công ty Cổ phần Kiểu Việt
// Liên kết trực tiếp tới 55 văn bản pháp luật trong hệ thống

export type CheckPriority = 'critical' | 'important' | 'recommended';
export type CheckStatus = 'pending' | 'in-progress' | 'done';

export interface ChecklistItem {
  id: string;
  title: string;
  description: string;
  priority: CheckPriority;
  decreeId: string;        // ID văn bản trong hệ thống 55 VB
  articleNum?: string;     // Số Điều để deep-link
  decreeLabel: string;     // Tên rút gọn văn bản
  phase: 1 | 2 | 3;       // Giai đoạn 30/15/7 ngày
}

export interface ChecklistGroup {
  id: string;
  name: string;
  icon: string;
  color: string;
  description: string;
  items: ChecklistItem[];
}

export interface RiskQuestion {
  id: string;
  question: string;
  weight: number;          // 1-5 điểm rủi ro
  decreeId: string;
  articleRef: string;
  tip: string;             // Hướng dẫn khắc phục
}

// ===== 7 NHÓM CHECKLIST =====

export const TAX_AUDIT_GROUPS: ChecklistGroup[] = [
  {
    id: 'tndn',
    name: 'Thuế Thu nhập Doanh nghiệp (TNDN)',
    icon: '🏢',
    color: 'emerald',
    description: 'Quyết toán, chi phí được trừ, giao dịch liên kết, tạm nộp 80%, khấu hao TSCĐ, dự phòng',
    items: [
      { id: 'tndn-01', title: 'Tờ khai quyết toán thuế TNDN (Mẫu 03/TNDN)', description: 'Kiểm tra tờ khai quyết toán cho các năm thuộc phạm vi kiểm tra. Đối chiếu số liệu với BCTC.', priority: 'critical', decreeId: 'luat-67-2025-tndn', articleNum: '17', decreeLabel: 'Luật Thuế TNDN 67/2025', phase: 1 },
      { id: 'tndn-02', title: 'Bảng xác định chi phí được trừ và không được trừ', description: 'Lập bảng liệt kê chi tiết các khoản chi phí không được trừ theo Điều 4, Điều 6 TT 96/2015. Chú ý: chi phí không có hóa đơn, chi phí vượt trần, chi phí không liên quan HĐKD.', priority: 'critical', decreeId: 'tt-96-2015', articleNum: '4', decreeLabel: 'TT 96/2015 (Chi phí được trừ)', phase: 1 },
      { id: 'tndn-03', title: 'Hồ sơ giao dịch liên kết (Mẫu 01, Phụ lục I-III)', description: 'Nếu có giao dịch với bên liên kết: Lập hồ sơ xác định giá giao dịch, kê khai Mẫu 01 kèm Phụ lục. Kiểm tra trần lãi vay 30% EBITDA.', priority: 'critical', decreeId: 'nd-132-2020', articleNum: '18', decreeLabel: 'NĐ 132/2020 (Giao dịch liên kết)', phase: 1 },
      { id: 'tndn-04', title: 'Sổ theo dõi lỗ chuyển năm trước (tối đa 5 năm)', description: 'Kiểm tra lỗ từ các năm trước đã chuyển đúng quy định (liên tục, tối đa 5 năm, không vượt quá lợi nhuận năm chuyển).', priority: 'important', decreeId: 'nd-218-2013', articleNum: '7', decreeLabel: 'NĐ 218/2013 (Hướng dẫn Thuế TNDN)', phase: 1 },
      { id: 'tndn-05', title: 'Hồ sơ ưu đãi thuế TNDN (nếu hưởng)', description: 'Chuẩn bị đầy đủ hồ sơ chứng minh đủ điều kiện ưu đãi: thuế suất ưu đãi, miễn giảm thuế theo dự án đầu tư.', priority: 'important', decreeId: 'luat-67-2025-tndn', articleNum: '13', decreeLabel: 'Luật Thuế TNDN 67/2025', phase: 2 },
      { id: 'tndn-06', title: 'Kiểm tra tạm nộp thuế TNDN 4 quý ≥ 80% quyết toán', description: 'Tổng tạm nộp 4 quý phải đạt tối thiểu 80% số quyết toán cả năm. Nếu thiếu sẽ bị phạt chậm nộp 0.03%/ngày trên phần thiếu.', priority: 'critical', decreeId: 'nd-126-2020', articleNum: '8', decreeLabel: 'NĐ 126/2020 (Tạm nộp 80%)', phase: 1 },
      { id: 'tndn-07', title: 'Phân bổ thuế TNDN công trình vãng lai (1% doanh thu)', description: 'Công trình xây dựng tại tỉnh khác trụ sở: phải phân bổ thuế TNDN = 1% doanh thu chưa thuế. Đối chiếu Mẫu 02-1/TĐ-TNDN.', priority: 'important', decreeId: 'tt-80-2021', articleNum: '12', decreeLabel: 'TT 80/2021 (Phân bổ thuế vãng lai)', phase: 1 },
      { id: 'tndn-08', title: 'Chi phí khấu hao TSCĐ — đối chiếu khung TT 45/2013', description: 'Kiểm tra: nguyên giá đúng, phương pháp khấu hao đã đăng ký, thời gian nằm trong khung cho phép, TSCĐ đang sử dụng cho HĐKD.', priority: 'critical', decreeId: 'tt-45-2013', articleNum: '6', decreeLabel: 'TT 45/2013 (Khấu hao TSCĐ)', phase: 1 },
      { id: 'tndn-09', title: 'Chi phí dự phòng nợ phải thu, giảm giá hàng tồn kho', description: 'Kiểm tra trích lập dự phòng đúng tỷ lệ và đủ hồ sơ chứng minh: công nợ quá hạn, biên bản đối chiếu, thư đòi nợ.', priority: 'important', decreeId: 'tt-48-2019', articleNum: '5', decreeLabel: 'TT 48/2019 (Dự phòng)', phase: 2 },
      { id: 'tndn-10', title: 'Doanh thu xây lắp — đối chiếu hóa đơn nghiệm thu A-B với TK 511', description: 'Kiểm tra doanh thu ghi nhận trên sổ kế toán TK 511 khớp với biên bản nghiệm thu khối lượng hoàn thành và hóa đơn GTGT đã xuất.', priority: 'critical', decreeId: 'tt-99-2025', articleNum: '44', decreeLabel: 'TT 99/2025 (Chế độ KT mới)', phase: 1 },
      { id: 'tndn-11', title: 'Chi phí lãi vay ngân hàng — mục đích đầu tư kinh doanh', description: 'Lãi vay phải phục vụ HĐKD, có hợp đồng vay, UNC trả lãi. Lãi vay mua TSCĐ giai đoạn đầu tư vốn hóa vào nguyên giá.', priority: 'important', decreeId: 'tt-96-2015', articleNum: '4', decreeLabel: 'TT 96/2015 (Chi phí được trừ)', phase: 2 },
      { id: 'tndn-12', title: 'Biên bản thanh lý TSCĐ (máy móc, xe tải hết hạn/bán)', description: 'TSCĐ thanh lý phải có: quyết định thanh lý, biên bản thanh lý, hóa đơn bán (nếu bán), hạch toán đúng lãi/lỗ.', priority: 'recommended', decreeId: 'tt-45-2013', articleNum: '35', decreeLabel: 'TT 45/2013 (Khấu hao TSCĐ)', phase: 2 },
    ]
  },
  {
    id: 'gtgt',
    name: 'Thuế Giá trị Gia tăng (GTGT)',
    icon: '🧾',
    color: 'blue',
    description: 'Tờ khai GTGT, khấu trừ thuế, hóa đơn đầu vào/ra, thanh toán ngân hàng, hoàn thuế',
    items: [
      { id: 'gtgt-01', title: 'Tờ khai thuế GTGT hàng tháng/quý (Mẫu 01/GTGT)', description: 'Kiểm tra tờ khai đã nộp đúng hạn, số liệu khớp với sổ kế toán TK 33311 (thuế GTGT đầu ra) và TK 1331 (thuế GTGT đầu vào).', priority: 'critical', decreeId: 'luat-thue-gtgt', articleNum: '10', decreeLabel: 'Luật Thuế GTGT 13/2008', phase: 1 },
      { id: 'gtgt-02', title: 'Bảng kê hóa đơn đầu vào — rà soát chéo với XML CQT', description: 'Download dữ liệu hóa đơn từ Tổng cục Thuế (hoadondientu.gdt.gov.vn), đối chiếu với bảng kê PL 01-2/GTGT. Loại bỏ hóa đơn CQT cảnh báo rủi ro.', priority: 'critical', decreeId: 'tt-219-2013', articleNum: '14', decreeLabel: 'TT 219/2013 (Thuế GTGT)', phase: 1 },
      { id: 'gtgt-03', title: 'Bảng kê hóa đơn đầu ra — đối chiếu sổ TK 33311', description: 'Tổng thuế GTGT đầu ra trên bảng kê phải khớp với số dư Có TK 33311. Kiểm tra có HĐ nào xuất nhưng chưa kê khai không.', priority: 'critical', decreeId: 'tt-219-2013', articleNum: '16', decreeLabel: 'TT 219/2013 (Thuế GTGT)', phase: 1 },
      { id: 'gtgt-04', title: 'Thuế GTGT vãng lai — kê khai 1% tại nơi xây dựng', description: 'Công trình tỉnh khác: phân bổ thuế GTGT = 1% doanh thu chưa thuế nộp tại địa phương nơi có công trình.', priority: 'important', decreeId: 'tt-80-2021', articleNum: '13', decreeLabel: 'TT 80/2021 (Phân bổ thuế)', phase: 1 },
      { id: 'gtgt-05', title: 'Chênh lệch doanh thu GTGT vs quyết toán TNDN', description: 'Đoàn kiểm tra luôn so sánh 2 số liệu này. Mọi chênh lệch đều phải giải trình được (doanh thu chưa xuất HĐ, doanh thu không chịu thuế GTGT, v.v.).', priority: 'critical', decreeId: 'luat-quan-ly-thue-2019', articleNum: '42', decreeLabel: 'Luật Quản lý thuế 38/2019', phase: 1 },
      { id: 'gtgt-06', title: 'Hóa đơn giảm thuế GTGT 2% (8% thay vì 10%)', description: 'Kiểm tra hàng hóa/dịch vụ áp dụng thuế suất 8% có nằm đúng danh mục được giảm theo NĐ 180/2024 không.', priority: 'important', decreeId: 'nd-180-2024-nd-cp', articleNum: '1', decreeLabel: 'NĐ 180/2024 (Giảm 2% GTGT)', phase: 2 },
      { id: 'gtgt-07', title: 'Thanh toán qua ngân hàng cho HĐ ≥ 20 triệu', description: 'Hóa đơn mua hàng từ 20 triệu trở lên phải có chứng từ thanh toán không dùng tiền mặt (UNC, chuyển khoản). Nếu không sẽ bị loại khấu trừ.', priority: 'critical', decreeId: 'tt-219-2013', articleNum: '15', decreeLabel: 'TT 219/2013 (Thuế GTGT)', phase: 1 },
      { id: 'gtgt-08', title: 'Hồ sơ hoàn thuế GTGT (nếu có)', description: 'Kiểm tra đủ điều kiện hoàn thuế: xuất khẩu, dự án đầu tư mới, 12 tháng liên tục có số thuế GTGT chưa khấu trừ hết ≥ 300 triệu.', priority: 'recommended', decreeId: 'luat-thue-gtgt', articleNum: '13', decreeLabel: 'Luật Thuế GTGT 13/2008', phase: 2 },
    ]
  },
  {
    id: 'tncn',
    name: 'Thuế Thu nhập Cá nhân (TNCN)',
    icon: '👥',
    color: 'purple',
    description: 'Quyết toán TNCN, giảm trừ gia cảnh, khoán chi, chứng từ khấu trừ điện tử',
    items: [
      { id: 'tncn-01', title: 'Quyết toán thuế TNCN (Mẫu 05/QTT-TNCN)', description: 'Kiểm tra tờ khai quyết toán cho toàn bộ NLĐ. Đối chiếu tổng thu nhập chịu thuế với bảng lương 12 tháng.', priority: 'critical', decreeId: 'luat-109-2025-tncn', articleNum: '25', decreeLabel: 'Luật Thuế TNCN 109/2025', phase: 1 },
      { id: 'tncn-02', title: 'Danh sách người phụ thuộc — kiểm tra MST NPT', description: 'Rà soát danh sách NPT đã đăng ký giảm trừ. Kiểm tra mỗi NPT có MST và hồ sơ hợp lệ (giấy khai sinh, giấy xác nhận).', priority: 'important', decreeId: 'tt-111-2013', articleNum: '9', decreeLabel: 'TT 111/2013 (Hướng dẫn TNCN)', phase: 2 },
      { id: 'tncn-03', title: 'Bảng tính thuế TNCN lũy tiến — đúng mức giảm trừ', description: 'Áp dụng đúng mức giảm trừ: 11tr/4.4tr (Luật cũ) hoặc 15.5tr/6.2tr (Luật 109/2025 từ 01/01/2026). Kiểm tra biểu thuế lũy tiến 7 bậc.', priority: 'critical', decreeId: 'luat-109-2025-tncn', articleNum: '19', decreeLabel: 'Luật Thuế TNCN 109/2025', phase: 1 },
      { id: 'tncn-04', title: 'Chứng từ khấu trừ TNCN điện tử cho NLĐ nghỉ việc', description: 'NLĐ nghỉ việc trong năm phải được cấp chứng từ khấu trừ thuế TNCN điện tử (NĐ 70/2025). Kiểm tra đã cấp đủ chưa.', priority: 'important', decreeId: 'nd-70-2025', articleNum: '4', decreeLabel: 'NĐ 70/2025 (Chứng từ TNCN ĐT)', phase: 2 },
      { id: 'tncn-05', title: 'Khoán chi ăn ca ≤ 730.000đ/tháng, trang phục ≤ 5tr/năm', description: 'Kiểm tra các khoản phụ cấp ăn ca, tiền trang phục không vượt trần miễn thuế. Phần vượt phải tính vào thu nhập chịu thuế TNCN.', priority: 'important', decreeId: 'tt-111-2013', articleNum: '2', decreeLabel: 'TT 111/2013 (Hướng dẫn TNCN)', phase: 2 },
      { id: 'tncn-06', title: 'Thu nhập chịu thuế từ thưởng, phúc lợi', description: 'Tiền thưởng tết, thưởng doanh số, quà tặng bằng tiền/hiện vật > 2 triệu đều phải khai thuế TNCN. Kiểm tra đã kê khai đủ chưa.', priority: 'important', decreeId: 'tt-111-2013', articleNum: '2', decreeLabel: 'TT 111/2013 (Hướng dẫn TNCN)', phase: 2 },
      { id: 'tncn-07', title: 'HĐLĐ ngắn hạn — khấu trừ 10% nếu ≥ 2 triệu/lần', description: 'Lao động thời vụ, khoán việc nhận thu nhập ≥ 2 triệu/lần phải khấu trừ 10% thuế TNCN trước khi chi trả (trừ khi có cam kết 02/CK-TNCN).', priority: 'important', decreeId: 'tt-111-2013', articleNum: '25', decreeLabel: 'TT 111/2013 (Hướng dẫn TNCN)', phase: 2 },
    ]
  },
  {
    id: 'hoadon',
    name: 'Hóa đơn Điện tử & Quản lý Thuế',
    icon: '💻',
    color: 'orange',
    description: 'Hóa đơn điện tử, Mẫu 04/SS, xử phạt, quyền nghĩa vụ khi kiểm tra',
    items: [
      { id: 'hd-01', title: 'Đối chiếu tổng HĐ điện tử với dữ liệu CQT', description: 'Đăng nhập hoadondientu.gdt.gov.vn → So sánh tổng số hóa đơn phát hành, tổng giá trị, tổng thuế với dữ liệu kế toán nội bộ.', priority: 'critical', decreeId: 'nd-123-2020', articleNum: '19', decreeLabel: 'NĐ 123/2020 (Hóa đơn ĐT)', phase: 1 },
      { id: 'hd-02', title: 'Hóa đơn sai sót — đã lập Mẫu 04/SS gửi CQT chưa?', description: 'Kiểm tra tất cả hóa đơn đã điều chỉnh/thay thế đều có Mẫu 04/SS gửi CQT. Lưu trữ biên bản thỏa thuận điều chỉnh với khách hàng.', priority: 'critical', decreeId: 'tt-78-2021', articleNum: '7', decreeLabel: 'TT 78/2021 (Hướng dẫn HĐĐT)', phase: 1 },
      { id: 'hd-03', title: 'Hóa đơn hủy/thay thế/điều chỉnh — biên bản đầy đủ', description: 'Mỗi hóa đơn hủy hoặc thay thế cần có: biên bản ghi nhận lý do, hóa đơn thay thế/điều chỉnh liên kết đúng số.', priority: 'important', decreeId: 'nd-123-2020', articleNum: '19', decreeLabel: 'NĐ 123/2020 (Hóa đơn ĐT)', phase: 2 },
      { id: 'hd-04', title: 'Sổ theo dõi hóa đơn — phân loại đầy đủ', description: 'Lập bảng tổng hợp hóa đơn: phát hành, hủy, mất, thay thế, điều chỉnh. Đoàn kiểm tra thường yêu cầu bảng này.', priority: 'important', decreeId: 'tt-78-2021', articleNum: '12', decreeLabel: 'TT 78/2021 (Hướng dẫn HĐĐT)', phase: 2 },
      { id: 'hd-05', title: 'Nắm rõ quyền của DN khi bị kiểm tra thuế', description: 'Quyền: được thông báo trước, được giải trình, được từ chối cung cấp thông tin ngoài phạm vi kiểm tra, khiếu nại kết luận.', priority: 'important', decreeId: 'luat-quan-ly-thue-2019', articleNum: '110', decreeLabel: 'Luật QLT 38/2019 (Quyền NNT)', phase: 3 },
      { id: 'hd-06', title: 'Khung xử phạt vi phạm thuế & hóa đơn', description: 'Nghiên cứu trước khung phạt: phạt khai sai 20% số thuế khai thiếu, phạt trốn thuế 1-3 lần, phạt hóa đơn bất hợp pháp 20-50 triệu.', priority: 'recommended', decreeId: 'nd-125-2020', articleNum: '8', decreeLabel: 'NĐ 125/2020 (Xử phạt thuế)', phase: 3 },
      { id: 'hd-07', title: 'Tiền chậm nộp thuế 0.03%/ngày', description: 'Tính trước số tiền chậm nộp (nếu có) để chủ động nộp bổ sung trước khi đoàn kiểm tra kết luận.', priority: 'important', decreeId: 'luat-quan-ly-thue-2019', articleNum: '59', decreeLabel: 'Luật QLT 38/2019 (Chậm nộp)', phase: 1 },
    ]
  },
  {
    id: 'bhxh-luong',
    name: 'BHXH, Tiền lương & Lao động',
    icon: '💼',
    color: 'indigo',
    description: 'Bảng lương, HĐLĐ, BHXH, lương tối thiểu vùng, tăng ca, xử phạt',
    items: [
      { id: 'ld-01', title: 'Bảng lương tháng — đối chiếu HĐLĐ, trả qua NH', description: 'Bảng lương phải khớp với mức lương trên HĐLĐ. Thanh toán qua ngân hàng (hoặc có phiếu lương ký nhận nếu tiền mặt).', priority: 'critical', decreeId: 'blld-45-2019', articleNum: '94', decreeLabel: 'BLLĐ 45/2019', phase: 1 },
      { id: 'ld-02', title: 'Hồ sơ HĐLĐ — không còn HĐLĐ mùa vụ', description: 'Từ 01/01/2021 chỉ còn 2 loại: HĐLĐ xác định thời hạn và HĐLĐ không xác định thời hạn. Kiểm tra các HĐ cũ đã chuyển đổi chưa.', priority: 'important', decreeId: 'blld-45-2019', articleNum: '20', decreeLabel: 'BLLĐ 45/2019', phase: 2 },
      { id: 'ld-03', title: 'Quy chế lương thưởng nội bộ', description: 'Phải có văn bản quy chế tiền lương, thang bảng lương áp dụng nhất quán. Đây là căn cứ để CQT chấp nhận chi phí lương.', priority: 'critical', decreeId: 'tt-96-2015', articleNum: '4', decreeLabel: 'TT 96/2015 (Chi phí được trừ)', phase: 2 },
      { id: 'ld-04', title: 'Sổ sách đóng BHXH — đối chiếu Mẫu D02-LT', description: 'Đối chiếu danh sách NLĐ đóng BHXH với bảng lương. Kiểm tra mức đóng đúng trần (20 lần lương cơ sở = 46.8tr).', priority: 'critical', decreeId: 'qd-595-2017-bhxh', articleNum: '2', decreeLabel: 'QĐ 595/QĐ-BHXH', phase: 1 },
      { id: 'ld-05', title: 'Lương tối thiểu vùng — kiểm tra HĐLĐ ≥ mức sàn', description: 'Kiểm tra lương trên HĐLĐ ≥ mức tối thiểu vùng tương ứng (Vùng I: 4.960.000đ, Vùng II: 4.410.000đ, Vùng III: 3.860.000đ, Vùng IV: 3.450.000đ).', priority: 'critical', decreeId: 'nd-293-2025', articleNum: '3', decreeLabel: 'NĐ 293/2025 (LTT vùng 2026)', phase: 1 },
      { id: 'ld-06', title: 'Lương cơ sở & trần đóng BHXH', description: 'Lương cơ sở 2.340.000đ/tháng. Trần đóng BHXH, BHYT = 20 x 2.340.000 = 46.800.000đ/tháng.', priority: 'important', decreeId: 'nd-73-2024', articleNum: '3', decreeLabel: 'NĐ 73/2024 (Lương cơ sở)', phase: 2 },
      { id: 'ld-07', title: 'Tiền lương tăng ca — trần 300h/năm cho xây dựng', description: 'Ngành xây dựng được tăng ca tối đa 300h/năm (thay vì 200h). Kiểm tra tổng giờ tăng ca và đơn giá tính đúng 150%-200%-300%.', priority: 'important', decreeId: 'nd-145-2020', articleNum: '60', decreeLabel: 'NĐ 145/2020 (Tăng ca)', phase: 2 },
      { id: 'ld-08', title: 'Xử phạt trốn đóng BHXH & ATLĐ', description: 'Nắm rõ khung xử phạt: trốn đóng BHXH phạt 12-15% tổng số tiền trốn đóng, tối thiểu 20 triệu.', priority: 'recommended', decreeId: 'nd-12-2022', articleNum: '38', decreeLabel: 'NĐ 12/2022 (Xử phạt BHXH)', phase: 3 },
    ]
  },
  {
    id: 'tainguyen',
    name: 'Thuế Tài nguyên, Phí BVMT & Khoáng sản',
    icon: '⛏️',
    color: 'amber',
    description: 'Đặc thù mỏ đá Kiểu Việt: thuế tài nguyên, phí BVMT, tiền cấp quyền, giấy phép',
    items: [
      { id: 'tn-01', title: 'Tờ khai thuế tài nguyên hàng tháng (Mẫu 01/TAIN)', description: 'Kiểm tra sản lượng khai thác kê khai đúng, giá tính thuế đúng bảng giá địa phương, thuế suất đúng loại khoáng sản.', priority: 'critical', decreeId: 'tt-152-2015', articleNum: '6', decreeLabel: 'TT 152/2015 (Thuế Tài nguyên)', phase: 1 },
      { id: 'tn-02', title: 'Bảng giá tính thuế tài nguyên Gia Lai (QĐ 87/2025)', description: 'Đối chiếu giá tính thuế đã kê khai với bảng giá do UBND tỉnh Gia Lai ban hành. Cập nhật bảng giá mới nhất.', priority: 'critical', decreeId: 'qd-87-2025-gialai', decreeLabel: 'QĐ 87/2025/QĐ-UBND Gia Lai', phase: 1 },
      { id: 'tn-03', title: 'Tiền cấp quyền khai thác khoáng sản — nộp đủ', description: 'Kiểm tra đã nộp tiền cấp quyền KTKS theo quyết định phê duyệt. Nộp thiếu sẽ bị phạt chậm nộp và có thể thu hồi giấy phép.', priority: 'critical', decreeId: 'nd-67-2019', articleNum: '4', decreeLabel: 'NĐ 67/2019 (Tiền cấp quyền KTKS)', phase: 1 },
      { id: 'tn-04', title: 'Phí BVMT khai thác khoáng sản (NĐ 27/2023)', description: 'Kê khai và nộp phí BVMT đúng mức và đúng hạn. Đá xây dựng: 6.000-10.000đ/m3, cát: 5.000-8.000đ/m3.', priority: 'critical', decreeId: 'nd-27-2023', articleNum: '5', decreeLabel: 'NĐ 27/2023 (Phí BVMT)', phase: 1 },
      { id: 'tn-05', title: 'Sổ theo dõi sản lượng khai thác thực tế', description: 'Đối chiếu sổ ghi sản lượng hàng ngày/tuần với số liệu trên tờ khai thuế TN. Chênh lệch lớn là dấu hiệu rủi ro thanh tra.', priority: 'critical', decreeId: 'luat-54-2024-khoangsan', articleNum: '57', decreeLabel: 'Luật Khoáng sản 54/2024', phase: 1 },
      { id: 'tn-06', title: 'Giấy phép khai thác khoáng sản còn hiệu lực', description: 'Kiểm tra giấy phép KTKS: còn hạn không, đã gia hạn chưa, phạm vi khai thác đúng tọa độ.', priority: 'important', decreeId: 'nd-193-2025-khoangsan', articleNum: '28', decreeLabel: 'NĐ 193/2025 (Hướng dẫn Luật KS)', phase: 2 },
      { id: 'tn-07', title: 'Khung giá tính thuế tài nguyên toàn quốc', description: 'Đối chiếu với TT 44/2017 — giá tính thuế không được thấp hơn khung giá do Bộ Tài chính ban hành.', priority: 'important', decreeId: 'tt-44-2017', decreeLabel: 'TT 44/2017 (Khung giá thuế TN)', phase: 2 },
    ]
  },
  {
    id: 'ketoan',
    name: 'Kế toán, Sổ sách & BCTC',
    icon: '📊',
    color: 'teal',
    description: 'BCTC, sổ cái, chứng từ gốc, hệ thống tài khoản, VAS, lệ phí môn bài',
    items: [
      { id: 'kt-01', title: 'BCTC (B01-B09) nộp đúng hạn và chuẩn TT 200/TT 99', description: 'Kiểm tra BCTC đã nộp CQT đúng hạn (31/03), số liệu khớp với quyết toán thuế. In bản có ký tên đóng dấu sẵn sàng.', priority: 'critical', decreeId: 'tt-200-2014', decreeLabel: 'TT 200/2014 (Chế độ KT)', phase: 1 },
      { id: 'kt-02', title: 'Sổ cái, sổ chi tiết TK 511, 131, 331, 154, 632', description: 'In hoặc xuất file sổ cái và sổ chi tiết các TK trọng yếu. Đoàn kiểm tra thường yêu cầu ngay ngày đầu tiên.', priority: 'critical', decreeId: 'luat-ke-toan-2015', articleNum: '24', decreeLabel: 'Luật Kế toán 88/2015', phase: 1 },
      { id: 'kt-03', title: 'Chứng từ gốc đầy đủ (HĐ, BBNT, PXK, UNC)', description: 'Sắp xếp chứng từ gốc theo tháng/quý: hợp đồng, biên bản nghiệm thu, phiếu xuất kho, ủy nhiệm chi, giấy báo Nợ/Có ngân hàng.', priority: 'critical', decreeId: 'luat-ke-toan-2015', articleNum: '16', decreeLabel: 'Luật Kế toán 88/2015', phase: 1 },
      { id: 'kt-04', title: 'Đăng ký phương pháp khấu hao, tính giá HTK', description: 'Kiểm tra đã đăng ký và áp dụng nhất quán phương pháp khấu hao (đường thẳng/số dư giảm dần) và phương pháp tính giá HTK (bình quân/FIFO).', priority: 'important', decreeId: 'tt-45-2013', articleNum: '13', decreeLabel: 'TT 45/2013 (Khấu hao TSCĐ)', phase: 2 },
      { id: 'kt-05', title: 'Sổ theo dõi TSCĐ — nguyên giá, KH lũy kế, GTCL', description: 'In bảng tổng hợp TSCĐ có đầy đủ thông tin: nguyên giá, ngày đưa vào sử dụng, thời gian khấu hao, khấu hao lũy kế, giá trị còn lại.', priority: 'important', decreeId: 'tt-45-2013', articleNum: '9', decreeLabel: 'TT 45/2013 (Khấu hao TSCĐ)', phase: 1 },
      { id: 'kt-06', title: 'Hệ thống tài khoản áp dụng — TT 99/2025 hay TT 200?', description: 'Xác nhận rõ công ty đang áp dụng chế độ kế toán nào. Nếu chuyển sang TT 99/2025 từ 01/01/2026, cần có văn bản đăng ký.', priority: 'important', decreeId: 'tt-99-2025', articleNum: '5', decreeLabel: 'TT 99/2025 (Chế độ KT mới)', phase: 2 },
      { id: 'kt-07', title: 'Xử phạt vi phạm kế toán & kiểm toán', description: 'Nắm rõ khung phạt: không lập BCTC phạt 5-10 triệu, BCTC sai lệch phạt 10-20 triệu, không lưu trữ chứng từ phạt 5-10 triệu.', priority: 'recommended', decreeId: 'nd-41-2018', articleNum: '7', decreeLabel: 'NĐ 41/2018 (Xử phạt KT)', phase: 3 },
      { id: 'kt-08', title: 'Chuẩn mực kế toán chung VAS 01', description: 'Đảm bảo nguyên tắc kế toán tuân thủ: hoạt động liên tục, cơ sở dồn tích, nhất quán, trọng yếu, phù hợp.', priority: 'recommended', decreeId: 'vas-01', decreeLabel: 'Chuẩn mực VAS 01', phase: 3 },
      { id: 'kt-09', title: 'Doanh thu hợp đồng xây dựng — VAS 14', description: 'Ghi nhận doanh thu xây lắp theo phương pháp tỷ lệ hoàn thành (VAS 14) hoặc theo hóa đơn nghiệm thu (TT 99/2025).', priority: 'important', decreeId: 'vas-14', decreeLabel: 'Chuẩn mực VAS 14', phase: 2 },
      { id: 'kt-10', title: 'Lệ phí Môn bài — nộp đúng hạn 30/01', description: 'Kiểm tra lệ phí môn bài đã nộp đúng hạn 30/01 hàng năm. Vốn > 10 tỷ: 3.000.000đ/năm, ≤ 10 tỷ: 2.000.000đ/năm.', priority: 'important', decreeId: 'nd-139-2016', articleNum: '4', decreeLabel: 'NĐ 139/2016 (Lệ phí Môn bài)', phase: 2 },
    ]
  }
];

// ===== 15 CÂU HỎI TỰ ĐÁNH GIÁ RỦI RO =====

export const RISK_QUESTIONS: RiskQuestion[] = [
  { id: 'rq-01', question: 'Doanh thu kê khai GTGT và doanh thu quyết toán TNDN có chênh lệch > 5% không?', weight: 5, decreeId: 'luat-quan-ly-thue-2019', articleRef: 'Điều 42', tip: 'Lập bảng giải trình chi tiết nguyên nhân chênh lệch: doanh thu trả lại, doanh thu không chịu thuế GTGT, doanh thu chưa xuất HĐ.' },
  { id: 'rq-02', question: 'Có hóa đơn đầu vào > 20 triệu thanh toán bằng tiền mặt không?', weight: 5, decreeId: 'tt-219-2013', articleRef: 'Điều 15 K10', tip: 'Chuyển đổi sang thanh toán qua ngân hàng trước khi kiểm tra. Nếu đã thanh toán tiền mặt, loại HĐ khỏi bảng kê khấu trừ và kê khai bổ sung.' },
  { id: 'rq-03', question: 'Tổng tạm nộp thuế TNDN 4 quý có < 80% số quyết toán cả năm không?', weight: 5, decreeId: 'nd-126-2020', articleRef: 'Điều 8 K6', tip: 'Nộp bổ sung phần thiếu ngay lập tức. Tính tiền chậm nộp 0.03%/ngày từ ngày 31/01 năm sau đến ngày nộp đủ.' },
  { id: 'rq-04', question: 'Có giao dịch liên kết nhưng chưa lập/nộp hồ sơ xác định giá (NĐ 132) không?', weight: 4, decreeId: 'nd-132-2020', articleRef: 'Điều 18', tip: 'Lập hồ sơ giao dịch liên kết ngay. Kê khai Mẫu 01 và nộp kèm quyết toán TNDN. Nếu quá hạn, nộp bổ sung và chấp nhận phạt khai chậm.' },
  { id: 'rq-05', question: 'Có chi phí không có hóa đơn hoặc hóa đơn bất hợp pháp không?', weight: 5, decreeId: 'nd-125-2020', articleRef: 'Điều 24-29', tip: 'Loại bỏ chi phí không có HĐ ra khỏi chi phí được trừ. Kê khai bổ sung thuế TNDN tương ứng. Kiểm tra HĐ nhà cung cấp trên hoadondientu.gdt.gov.vn.' },
  { id: 'rq-06', question: 'Có khấu hao TSCĐ vượt khung hoặc sai phương pháp đăng ký không?', weight: 4, decreeId: 'tt-45-2013', articleRef: 'Điều 10', tip: 'Rà soát bảng tính khấu hao, điều chỉnh về đúng khung cho phép. Phần khấu hao vượt khung phải loại chi phí thuế TNDN.' },
  { id: 'rq-07', question: 'Lương NLĐ trên HĐLĐ có thấp hơn mức tối thiểu vùng không?', weight: 3, decreeId: 'nd-293-2025', articleRef: 'Điều 3', tip: 'Lập phụ lục HĐLĐ điều chỉnh lương ngay. Truy nộp BHXH trên phần chênh lệch.' },
  { id: 'rq-08', question: 'Có nợ BHXH quá 30 ngày không?', weight: 3, decreeId: 'nd-12-2022', articleRef: 'Điều 38-39', tip: 'Nộp dứt điểm nợ BHXH và tiền chậm đóng trước khi đoàn kiểm tra. Lưu biên lai nộp.' },
  { id: 'rq-09', question: 'Sản lượng khai thác thực tế và kê khai thuế tài nguyên có chênh > 5% không?', weight: 5, decreeId: 'tt-152-2015', articleRef: 'Điều 6-7', tip: 'Đối chiếu sổ sản lượng khai thác với tờ khai thuế TN. Kê khai bổ sung nếu thiếu. Chuẩn bị giải trình hao hụt tự nhiên.' },
  { id: 'rq-10', question: 'Có chưa nộp phí BVMT khoáng sản đúng hạn không?', weight: 3, decreeId: 'nd-27-2023', articleRef: 'Điều 8', tip: 'Nộp bổ sung phí BVMT khoáng sản và tiền chậm nộp trước ngày kiểm tra.' },
  { id: 'rq-11', question: 'Có hóa đơn bị CQT thông báo rủi ro (cảnh báo Mẫu 01/TB-HĐ) không?', weight: 5, decreeId: 'nd-123-2020', articleRef: 'Điều 34', tip: 'Kiểm tra danh sách NCC bị cảnh báo. Loại HĐ của NCC rủi ro cao ra khỏi bảng kê khấu trừ. Kê khai bổ sung.' },
  { id: 'rq-12', question: 'Chi phí lãi vay giao dịch liên kết có > 30% EBITDA không?', weight: 4, decreeId: 'nd-132-2020', articleRef: 'Điều 16', tip: 'Tính lại trần lãi vay 30% EBITDA. Phần vượt trần phải loại khỏi chi phí được trừ thuế TNDN.' },
  { id: 'rq-13', question: 'Có NLĐ nghỉ việc chưa được cấp chứng từ khấu trừ TNCN ĐT không?', weight: 2, decreeId: 'nd-70-2025', articleRef: 'Điều 4', tip: 'Cấp chứng từ khấu trừ TNCN điện tử cho tất cả NLĐ đã nghỉ việc trong năm.' },
  { id: 'rq-14', question: 'Có HĐ xây dựng chưa có biên bản nghiệm thu khối lượng đúng mẫu không?', weight: 3, decreeId: 'nd-37-2015', articleRef: 'Điều 15-19', tip: 'Bổ sung biên bản nghiệm thu cho tất cả giai đoạn đã thanh toán. Biên bản phải có đủ chữ ký CĐT và nhà thầu.' },
  { id: 'rq-15', question: 'Sổ cái, sổ chi tiết kế toán chưa in/lưu cho kỳ kiểm tra không?', weight: 3, decreeId: 'luat-ke-toan-2015', articleRef: 'Điều 24-27', tip: 'In đầy đủ sổ cái, sổ chi tiết cho năm kiểm tra. Lưu bản mềm PDF backup.' },
];

// ===== TIMELINE 3 GIAI ĐOẠN =====

export interface TimelinePhase {
  phase: number;
  label: string;
  daysBefore: string;
  color: string;
  tasks: string[];
}

export const TIMELINE_PHASES: TimelinePhase[] = [
  {
    phase: 1,
    label: 'Rà soát tổng thể',
    daysBefore: 'Trước 30 ngày',
    color: 'emerald',
    tasks: [
      'Rà soát chênh lệch doanh thu GTGT vs TNDN — lập bảng giải trình',
      'Đối chiếu sổ cái TK 511, 131, 154, 632 với tờ khai thuế',
      'Kiểm tra toàn bộ hóa đơn đầu vào > 20 triệu (thanh toán ngân hàng)',
      'In sổ cái, sổ chi tiết cho năm kiểm tra',
      'Rà soát khấu hao TSCĐ — đúng khung, đúng phương pháp',
      'Kiểm tra hồ sơ giao dịch liên kết (NĐ 132)',
      'Đối chiếu sản lượng khai thác mỏ vs kê khai thuế tài nguyên',
      'Tính lại tạm nộp TNDN 4 quý — nộp bổ sung nếu < 80%',
    ]
  },
  {
    phase: 2,
    label: 'Bổ sung hồ sơ',
    daysBefore: 'Trước 15 ngày',
    color: 'blue',
    tasks: [
      'In BCTC bản chính thức có ký tên đóng dấu',
      'Chuẩn bị tập hóa đơn sai sót đã xử lý (Mẫu 04/SS, biên bản)',
      'Đối chiếu bảng lương với HĐLĐ, sổ BHXH',
      'Chuẩn bị hồ sơ thuế tài nguyên, phí BVMT (đặc thù mỏ đá)',
      'Lập bảng tổng hợp chi phí không được trừ',
      'Bổ sung biên bản nghiệm thu cho công trình chưa có',
      'Kiểm tra chứng từ khấu trừ TNCN đã cấp cho NLĐ nghỉ việc',
      'Rà soát quy chế lương thưởng nội bộ',
    ]
  },
  {
    phase: 3,
    label: 'Sẵn sàng tiếp đoàn',
    daysBefore: 'Trước 7 ngày',
    color: 'amber',
    tasks: [
      'Sắp xếp phòng làm việc cho đoàn kiểm tra (bàn, ghế, ổ điện, wifi)',
      'Phân công người trực tiếp làm việc với đoàn (kế toán trưởng + trợ lý)',
      'Chuẩn bị bản giải trình cho các chênh lệch đã phát hiện ở giai đoạn 1',
      'Kiểm tra lần cuối checklist — mọi mục phải ✅',
      'Backup toàn bộ dữ liệu kế toán (phần mềm, Excel, chứng từ scan)',
      'Nắm rõ quyền của DN khi bị kiểm tra thuế (Điều 110-111 Luật QLT 2019)',
      'Chuẩn bị con dấu, giấy ủy quyền (nếu Giám đốc vắng mặt)',
      'Photo sẵn bộ BCTC, tờ khai thuế cho đoàn kiểm tra',
    ]
  }
];
