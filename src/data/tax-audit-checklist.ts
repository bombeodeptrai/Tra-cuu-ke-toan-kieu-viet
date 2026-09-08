// Cơ sở dữ liệu Checklist Chuẩn Bị Kiểm Tra Thuế — Công ty Cổ phần Kiểu Việt
// ĐẢM BẢO 100% ĐỦ CẢ 55 VĂN BẢN PHÁP LUẬT TRONG HỆ THỐNG

export type CheckPriority = 'critical' | 'important' | 'recommended';
export type CheckStatus = 'pending' | 'in-progress' | 'done';

export interface ChecklistItem {
  id: string;
  title: string;
  description: string;
  priority: CheckPriority;
  decreeId: string;        // ID văn bản trong hệ thống 55 VB (Chính xác 1-1)
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

// ===== 8 NHÓM CHUYÊN ĐỀ BAO PHỦ 100% CẢ 55 VĂN BẢN =====

export const TAX_AUDIT_GROUPS: ChecklistGroup[] = [
  // NHÓM 1: THUẾ THU NHẬP DOANH NGHIỆP (TNDN)
  {
    id: 'tndn',
    name: 'Thuế Thu nhập Doanh nghiệp (TNDN)',
    icon: '🏢',
    color: 'emerald',
    description: 'Quyết toán, chi phí được trừ, giao dịch liên kết, tạm nộp 80%, khấu hao TSCĐ, dự phòng',
    items: [
      { id: 'chk-luat-67-2025-tndn', title: 'Quyết toán thuế TNDN & Ưu đãi đầu tư (Luật 67/2025)', description: 'Kiểm tra tờ khai Mẫu 03/TNDN, rà soát điều kiện hưởng thuế suất ưu đãi, miễn giảm thuế TNDN cho dự án khai khoáng tại địa bàn kinh tế khó khăn Gia Lai.', priority: 'critical', decreeId: 'luat-67-2025-tndn', articleNum: '13', decreeLabel: 'Luật Thuế TNDN 67/2025', phase: 1 },
      { id: 'chk-luat-thue-tndn', title: 'Xác định doanh thu tính thuế TNDN và kỳ tính thuế (Luật 14/2008)', description: 'Rà soát doanh thu tính thuế TNDN phổ thông 20%, đối chiếu kỳ tính thuế theo năm tài chính và các khoản thu nhập khác phát sinh ngoài hợp đồng xây dựng.', priority: 'important', decreeId: 'luat-thue-tndn', articleNum: '9', decreeLabel: 'Luật Thuế TNDN 14/2008', phase: 1 },
      { id: 'chk-nd-218-2013', title: 'Chuyển lỗ liên tục không quá 5 năm & Tài trợ hạ tầng (NĐ 218/2013)', description: 'Lập phụ lục chuyển lỗ theo quy định (liên tục, tối đa 5 năm). Rà soát hồ sơ tài trợ xây nhà tình nghĩa, đường giao thông nông thôn tại Gia Lai để được trừ chi phí.', priority: 'important', decreeId: 'nd-218-2013', articleNum: '7', decreeLabel: 'NĐ 218/2013 (Hướng dẫn Thuế TNDN)', phase: 1 },
      { id: 'chk-tt-96-2015', title: 'Chi phí được trừ & Chi phí trích trước giá vốn TK 335 (TT 96/2015)', description: 'Loại bỏ các khoản chi không có hóa đơn, chi vượt trần. Kiểm tra hồ sơ trích trước giá vốn công trình dở dang (Khoản 2.20 Điều 4) kèm dự toán phê duyệt.', priority: 'critical', decreeId: 'tt-96-2015', articleNum: '4', decreeLabel: 'TT 96/2015 (Chi phí được trừ TNDN)', phase: 1 },
      { id: 'chk-nd-132-2020', title: 'Hồ sơ Giao dịch liên kết & Trần lãi vay 30% EBITDA (NĐ 132/2020)', description: 'Kê khai Mẫu 01 các bên liên kết. Tính lại trần chi phí lãi vay không quá 30% EBITDA; lập bảng theo dõi phần lãi vay vượt trần được chuyển sang tối đa 5 năm.', priority: 'critical', decreeId: 'nd-132-2020', articleNum: '16', decreeLabel: 'NĐ 132/2020 (Giao dịch liên kết)', phase: 1 },
      { id: 'chk-tt-45-2013', title: 'Khấu hao xe tải, máy xúc, máy nghiền mỏ đá (TT 45/2013)', description: 'Đối chiếu phương pháp khấu hao đã đăng ký với CQT, kiểm tra thời gian trích nằm đúng khung cho phép (xe tải 6-10 năm, máy đào 6-10 năm).', priority: 'critical', decreeId: 'tt-45-2013', articleNum: '10', decreeLabel: 'TT 45/2013 (Khấu hao TSCĐ)', phase: 1 },
      { id: 'chk-tt-48-2019', title: 'Trích lập dự phòng nợ phải thu khó đòi công trình (TT 48/2019)', description: 'Kiểm tra hồ sơ chứng minh nợ quá hạn của các chủ đầu tư xây dựng (quá hạn 6 tháng - 30%, 1 năm - 50%), biên bản đối chiếu công nợ có đóng dấu hai bên.', priority: 'important', decreeId: 'tt-48-2019', articleNum: '5', decreeLabel: 'TT 48/2019 (Dự phòng nợ khó đòi)', phase: 2 },
      { id: 'chk-nd-126-2020', title: 'Tạm nộp thuế TNDN 4 quý đạt tối thiểu 80% (NĐ 126/2020)', description: 'Tổng số thuế TNDN đã tạm nộp 4 quý phải đạt >= 80% số quyết toán cả năm. Nếu thiếu sẽ bị tính tiền chậm nộp 0.03%/ngày theo Điều 8 Khoản 6.', priority: 'critical', decreeId: 'nd-126-2020', articleNum: '8', decreeLabel: 'NĐ 126/2020 (Tạm nộp 80%)', phase: 1 },
    ]
  },

  // NHÓM 2: THUẾ GIÁ TRỊ GIA TĂNG (GTGT) & HÓA ĐƠN ĐIỆN TỬ
  {
    id: 'gtgt-hoadon',
    name: 'Thuế GTGT & Hóa Đơn Điện Tử',
    icon: '🧾',
    color: 'blue',
    description: 'Tờ khai GTGT, điều kiện khấu trừ, hóa đơn điện tử, sai sót Mẫu 04/SS, giảm thuế 2%',
    items: [
      { id: 'chk-luat-thue-gtgt', title: 'Thời điểm xác định thuế GTGT xây lắp & Khấu trừ đầu vào (Luật 13/2008)', description: 'Thời điểm kê khai thuế GTGT xây lắp là ngày nghiệm thu bàn giao hạng mục. Kiểm tra điều kiện khấu trừ thuế GTGT đầu vào hợp lệ theo Điều 12.', priority: 'critical', decreeId: 'luat-thue-gtgt', articleNum: '8', decreeLabel: 'Luật Thuế GTGT 13/2008', phase: 1 },
      { id: 'chk-tt-219-2013', title: 'Thanh toán qua ngân hàng cho hóa đơn >= 20 triệu (TT 219/2013)', description: 'Kiểm tra toàn bộ hóa đơn mua đá, cát, xi măng, xăng dầu >= 20 triệu phải có chứng từ ủy nhiệm chi qua ngân hàng để không bị loại khấu trừ thuế.', priority: 'critical', decreeId: 'tt-219-2013', articleNum: '15', decreeLabel: 'TT 219/2013 (Hướng dẫn Thuế GTGT)', phase: 1 },
      { id: 'chk-nd-180-2024-nd-cp', title: 'Rà soát áp dụng thuế suất GTGT giảm 2% (NĐ 180/2024)', description: 'Kiểm tra các hóa đơn xuất bán đá, vật tư, dịch vụ thi công áp dụng thuế 8% có đúng danh mục được giảm theo NĐ 180 hay không, tránh bị truy thu 2%.', priority: 'important', decreeId: 'nd-180-2024-nd-cp', articleNum: '1', decreeLabel: 'NĐ 180/2024 (Giảm 2% GTGT)', phase: 1 },
      { id: 'chk-nd-15-2022', title: 'Đối chiếu hóa đơn giảm thuế GTGT các kỳ cũ (NĐ 15/2022)', description: 'Đối chiếu việc xuất hóa đơn và kê khai giảm thuế GTGT 8% trong giai đoạn 2022-2023 nếu thuộc phạm vi thanh tra thời kỳ cũ của cơ quan thuế.', priority: 'important', decreeId: 'nd-15-2022', articleNum: '1', decreeLabel: 'NĐ 15/2022 (Chính sách giảm thuế)', phase: 2 },
      { id: 'chk-nd-123-2020', title: 'Thời điểm lập HĐĐT công trình & Tra cứu NCC rủi ro (NĐ 123/2020)', description: 'Lập hóa đơn đúng thời điểm nghiệm thu A-B. Rà soát danh sách hóa đơn đầu vào trên hoadondientu.gdt.gov.vn, loại bỏ hóa đơn của doanh nghiệp bỏ trốn.', priority: 'critical', decreeId: 'nd-123-2020', articleNum: '9', decreeLabel: 'NĐ 123/2020 (Hóa đơn, Chứng từ)', phase: 1 },
      { id: 'chk-tt-78-2021', title: 'Xử lý hóa đơn sai sót Mẫu 04/SS & Hóa đơn điều chỉnh (TT 78/2021)', description: 'Kiểm tra toàn bộ hóa đơn điều chỉnh/thay thế đã nộp Thông báo sai sót Mẫu 04/SS đến CQT chưa. Lưu biên bản thỏa thuận điều chỉnh với khách hàng.', priority: 'critical', decreeId: 'tt-78-2021', articleNum: '7', decreeLabel: 'TT 78/2021 (Hóa đơn Điện tử)', phase: 1 },
      { id: 'chk-nd-70-2025', title: 'Chứng từ khấu trừ TNCN điện tử & Chữ ký số HĐ (NĐ 70/2025)', description: 'Cấp chứng từ khấu trừ thuế TNCN điện tử cho lao động nghỉ việc. Rà soát chữ ký số trên hóa đơn điện tử bảo đảm tính toàn vẹn dữ liệu.', priority: 'important', decreeId: 'nd-70-2025', articleNum: '4', decreeLabel: 'NĐ 70/2025 (Sửa đổi HĐĐT)', phase: 2 },
      { id: 'chk-luat-gd-dien-tu-20-2023', title: 'Giá trị pháp lý hợp đồng & chứng từ điện tử (Luật 20/2023)', description: 'Bảo quản lưu trữ thông điệp dữ liệu hóa đơn, hợp đồng điện tử ký số với đối tác đảm bảo tính nguyên vẹn và xác thực phục vụ kiểm tra điện tử.', priority: 'important', decreeId: 'luat-gd-dien-tu-20-2023', articleNum: '10', decreeLabel: 'Luật GD Điện tử 20/2023', phase: 2 },
    ]
  },

  // NHÓM 3: THUẾ TNCN, TIỀN LƯƠNG & LAO ĐỘNG
  {
    id: 'tncn-laodong',
    name: 'Thuế TNCN, Tiền Lương & Lao Động',
    icon: '👥',
    color: 'purple',
    description: 'Quyết toán TNCN, giảm trừ gia cảnh, nhân công thời vụ, lương tối thiểu vùng, tăng ca',
    items: [
      { id: 'chk-luat-109-2025-tncn', title: 'Quyết toán thuế TNCN & Biểu thuế lũy tiến mới (Luật 109/2025)', description: 'Kiểm tra quyết toán thuế TNCN Mẫu 05/QTT-TNCN; cập nhật mức giảm trừ gia cảnh 15.5tr/6.2tr và biểu lũy tiến từng phần mới theo quy định.', priority: 'critical', decreeId: 'luat-109-2025-tncn', articleNum: '19', decreeLabel: 'Luật Thuế TNCN 109/2025', phase: 1 },
      { id: 'chk-tt-111-2013', title: 'Khấu trừ 10% lao động thời vụ & Cam kết 08/CK-TNCN (TT 111/2013)', description: 'Công nhân thời vụ xây dựng, bốc vác mỏ đá thu nhập >= 2 triệu phải khấu trừ 10% hoặc có Cam kết 08/CK-TNCN kèm CCCD và MST cá nhân hợp lệ.', priority: 'critical', decreeId: 'tt-111-2013', articleNum: '25', decreeLabel: 'TT 111/2013 (Hướng dẫn Thuế TNCN)', phase: 1 },
      { id: 'chk-blld-45-2019', title: 'Hồ sơ HĐLĐ & Giới hạn làm thêm giờ 300h/năm (BLLĐ 45/2019)', description: 'Chuyển đổi toàn bộ HĐLĐ mùa vụ cũ sang HĐ có thời hạn. Kiểm tra tổng giờ làm thêm công nhân xây dựng không vượt trần 300h/năm, đơn giá 150-200-300%.', priority: 'critical', decreeId: 'blld-45-2019', articleNum: '107', decreeLabel: 'Bộ luật Lao động 45/2019', phase: 1 },
      { id: 'chk-nd-293-2025', title: 'Rà soát lương HĐLĐ theo mức lương tối thiểu vùng 2026 (NĐ 293/2025)', description: 'Kiểm tra mức lương ghi trên HĐLĐ của công nhân tại TP. Pleiku (Vùng III: 3.860.000đ) và các huyện Chư Sê, Đak Đoa (Vùng IV: 3.450.000đ) >= mức tối thiểu.', priority: 'critical', decreeId: 'nd-293-2025', articleNum: '3', decreeLabel: 'NĐ 293/2025 (Lương tối thiểu vùng)', phase: 1 },
      { id: 'chk-nd-145-2020', title: 'Quy chế tiền lương, phụ cấp công trường & Thỏa ước (NĐ 145/2020)', description: 'Ban hành quy chế tiền lương, thang bảng lương và thỏa ước lao động tập thể gửi Phòng LĐTBXH. Đây là điều kiện tiên quyết để CQT chấp nhận chi phí lương.', priority: 'important', decreeId: 'nd-145-2020', articleNum: '60', decreeLabel: 'NĐ 145/2020 (Quan hệ lao động)', phase: 2 },
    ]
  },

  // NHÓM 4: QUẢN LÝ THUẾ, XỬ PHẠT & LỆ PHÍ MÔN BÀI
  {
    id: 'qlthue-xuphat',
    name: 'Quản Lý Thuế, Xử Phạt & Lệ Phí',
    icon: '🛡️',
    color: 'orange',
    description: 'Quyền doanh nghiệp khi kiểm tra, phạt khai sai 20%, nộp chậm 0.03%, phân bổ 1% vãng lai',
    items: [
      { id: 'chk-luat-quan-ly-thue-2019', title: 'Quyền doanh nghiệp khi kiểm tra thuế & Tiền chậm nộp 0.03% (Luật 38/2019)', description: 'Nắm vững quyền từ chối cung cấp hồ sơ ngoài phạm vi quyết định kiểm tra (Điều 110-111). Tính tiền chậm nộp 0.03%/ngày nếu tự kê khai bổ sung (Điều 59).', priority: 'critical', decreeId: 'luat-quan-ly-thue-2019', articleNum: '110', decreeLabel: 'Luật Quản lý thuế 38/2019', phase: 1 },
      { id: 'chk-tt-80-2021', title: 'Phân bổ thuế GTGT 1% & TNDN 1% công trình vãng lai (TT 80/2021)', description: 'Tổng hợp chứng từ nộp thuế 1% tại Kho bạc các tỉnh lân cận (Kon Tum, Đắk Lắk) theo Mẫu 01-6/GTGT để bù trừ thuế đầu ra tại Cục Thuế Gia Lai.', priority: 'critical', decreeId: 'tt-80-2021', articleNum: '13', decreeLabel: 'TT 80/2021 (Phân bổ thuế vãng lai)', phase: 1 },
      { id: 'chk-nd-125-2020', title: 'Khung xử phạt vi phạm hành chính thuế & hóa đơn (NĐ 125/2020)', description: 'Nghiên cứu trước khung phạt: phạt khai sai 20% số thuế truy thu, phạt hóa đơn sai thời điểm (4-8 triệu/HĐ). Tự nộp bổ sung trước kiểm tra để thoát phạt 20%.', priority: 'important', decreeId: 'nd-125-2020', articleNum: '16', decreeLabel: 'NĐ 125/2020 (Xử phạt thuế, HĐ)', phase: 3 },
      { id: 'chk-nd-139-2016', title: 'Lệ phí môn bài doanh nghiệp & chi nhánh mỏ đá (NĐ 139/2016)', description: 'Kiểm tra biên lai nộp lệ phí môn bài 3tr/năm (vốn > 10 tỷ) hoặc 2tr/năm, các chi nhánh/địa điểm kinh doanh mỏ đá 1tr/năm trước hạn 30/01.', priority: 'important', decreeId: 'nd-139-2016', articleNum: '4', decreeLabel: 'NĐ 139/2016 (Lệ phí môn bài)', phase: 2 },
      { id: 'chk-nd-22-2020', title: 'Miễn lệ phí môn bài chi nhánh mới thành lập (NĐ 22/2020)', description: 'Rà soát chính sách miễn lệ phí môn bài năm đầu cho chi nhánh, địa điểm kinh doanh mỏ đá mới thành lập trong năm theo quy định.', priority: 'important', decreeId: 'nd-22-2020', articleNum: '1', decreeLabel: 'NĐ 22/2020 (Sửa đổi lệ phí môn bài)', phase: 2 },
      { id: 'chk-nd-64-2024', title: 'Hồ sơ gia hạn nộp thuế GTGT, TNDN & Tiền thuê đất (NĐ 64/2024)', description: 'Kiểm tra Giấy đề nghị gia hạn đã gửi CQT, đối chiếu ngày nộp thực tế trong thời hạn gia hạn để không bị cơ quan thuế phạt chậm nộp oan.', priority: 'important', decreeId: 'nd-64-2024', articleNum: '3', decreeLabel: 'NĐ 64/2024 (Gia hạn nộp thuế)', phase: 2 },
      { id: 'chk-luat-56-2024', title: 'Trách nhiệm pháp lý người đại diện & Kế toán trưởng (Luật 56/2024)', description: 'Cập nhật quy định mới về phân cấp thanh tra thuế, xử lý trách nhiệm kế toán trưởng và đại diện pháp luật khi phát sinh chênh lệch số liệu.', priority: 'recommended', decreeId: 'luat-56-2024', articleNum: '1', decreeLabel: 'Luật sửa đổi 56/2024', phase: 3 },
    ]
  },

  // NHÓM 5: KHAI THÁC MỎ ĐÁ, THUẾ TÀI NGUYÊN & PHÍ BVMT (ĐẶC THÙ KIỂU VIỆT)
  {
    id: 'khoangsan-tainguyen',
    name: 'Khai Thác Mỏ Đá, Thuế Tài Nguyên & BVMT',
    icon: '⛏️',
    color: 'amber',
    description: 'Bảng giá Gia Lai QĐ 87, hộ chiếu nổ mìn, sản lượng mỏ, phí BVMT, tiền cấp quyền',
    items: [
      { id: 'chk-qd-87-2025-gialai', title: 'Áp đúng Bảng giá tính thuế tài nguyên Gia Lai 2026 (QĐ 87/2025)', description: 'Đối chiếu giá tính thuế trên tờ khai Mẫu 01/TAIN với Bảng giá đá xây dựng (đá 1x2, đá 2x4, đá 4x6, cát nghiền) do UBND tỉnh Gia Lai ban hành.', priority: 'critical', decreeId: 'qd-87-2025-gialai', decreeLabel: 'QĐ 87/2025/QĐ-UBND Gia Lai', phase: 1 },
      { id: 'chk-tt-152-2015', title: 'Quy đổi sản lượng đá nguyên khai nổ mìn & Tỷ lệ hao hụt (TT 152/2015)', description: 'Lập bảng cân đối từ khối lượng thuốc nổ nổ mìn sang sản lượng đá nguyên khai và đá thành phẩm qua trạm nghiền, giải trình tỷ lệ hao hụt kỹ thuật.', priority: 'critical', decreeId: 'tt-152-2015', articleNum: '6', decreeLabel: 'TT 152/2015 (Thuế Tài nguyên)', phase: 1 },
      { id: 'chk-nd-27-2023', title: 'Kê khai và nộp Phí bảo vệ môi trường khai thác đá (NĐ 27/2023)', description: 'Kê khai phí BVMT đối với đá khai thác (6.000 - 10.000 đ/m3 đá nguyên khai); đối chiếu sản lượng khớp với tờ khai thuế tài nguyên.', priority: 'critical', decreeId: 'nd-27-2023', articleNum: '5', decreeLabel: 'NĐ 27/2023 (Phí BVMT khoáng sản)', phase: 1 },
      { id: 'chk-nd-67-2019', title: 'Chứng từ nộp Tiền cấp quyền khai thác khoáng sản (NĐ 67/2019)', description: 'Chuẩn bị chứng từ nộp tiền cấp quyền KTKS kỳ 1 (trước 31/05) và kỳ 2 (trước 31/10) hàng năm theo Quyết định của UBND tỉnh Gia Lai.', priority: 'critical', decreeId: 'nd-67-2019', articleNum: '4', decreeLabel: 'NĐ 67/2019 (Tiền cấp quyền KTKS)', phase: 1 },
      { id: 'chk-luat-54-2024-khoangsan', title: 'Số liệu trạm cân, camera giám sát sản lượng mỏ (Luật 54/2024)', description: 'Sao lưu dữ liệu trạm cân xe tải và nhật ký khai thác tại mỏ đá theo Luật Địa chất & Khoáng sản mới để chứng minh tính trung thực của sản lượng kê khai.', priority: 'important', decreeId: 'luat-54-2024-khoangsan', articleNum: '57', decreeLabel: 'Luật Khoáng sản 54/2024', phase: 1 },
      { id: 'chk-nd-193-2025-khoangsan', title: 'Giấy phép khai thác mỏ đá & Hoàn phục môi trường (NĐ 193/2025)', description: 'Kiểm tra tính hợp lệ của Giấy phép KTKS, mốc giới tọa độ khai thác và chứng từ ký quỹ phục hồi môi trường mỏ đá tại Quỹ BVMT tỉnh Gia Lai.', priority: 'important', decreeId: 'nd-193-2025-khoangsan', articleNum: '28', decreeLabel: 'NĐ 193/2025 (Hướng dẫn Luật KS)', phase: 2 },
      { id: 'chk-tt-44-2017', title: 'Khung giá tính thuế tài nguyên tối thiểu Bộ Tài chính (TT 44/2017)', description: 'Đối chiếu giá tính thuế tài nguyên của tỉnh Gia Lai không được thấp hơn khung giá sàn do Bộ Tài chính quy định.', priority: 'recommended', decreeId: 'tt-44-2017', decreeLabel: 'TT 44/2017 (Khung giá thuế TN)', phase: 2 },
      { id: 'chk-luat-thue-xnk-107-2016', title: 'Thuế xuất khẩu khoáng sản đá block, đá mỹ nghệ (Luật 107/2016)', description: 'Kiểm tra mã HS và nghĩa vụ thuế xuất khẩu nếu Kiểu Việt có hoạt động xuất bán đá xẻ, đá khối nguyên khai ra thị trường nước ngoài.', priority: 'recommended', decreeId: 'luat-thue-xnk-107-2016', articleNum: '5', decreeLabel: 'Luật Thuế XNK 107/2016', phase: 2 },
    ]
  },

  // NHÓM 6: HỢP ĐỒNG XÂY DỰNG & DỰ TOÁN CHI PHÍ CÔNG TRÌNH
  {
    id: 'hopdong-xaydung',
    name: 'Hợp Đồng Xây Dựng & Dự Toán',
    icon: '🏗️',
    color: 'teal',
    description: 'Hồ sơ 3 bên đồng bộ: Hợp đồng, biên bản nghiệm thu A-B, dự toán định mức NĐ 10, tạm ứng NĐ 37',
    items: [
      { id: 'chk-nd-37-2015', title: 'Hồ sơ tạm ứng & Nghiệm thu khối lượng A-B công trình (NĐ 37/2015)', description: 'Đối chiếu tỷ lệ tạm ứng hợp đồng xây dựng; tập hợp đủ Biên bản nghiệm thu công việc, nghiệm thu giai đoạn bàn giao làm căn cứ xuất hóa đơn và tính doanh thu.', priority: 'critical', decreeId: 'nd-37-2015', articleNum: '18', decreeLabel: 'NĐ 37/2015 (Hợp đồng xây dựng)', phase: 1 },
      { id: 'chk-nd-50-2021', title: 'Phụ lục điều chỉnh giá hợp đồng xây lắp & Trượt giá (NĐ 50/2021)', description: 'Các công trình có bù giá vật tư (nhựa đường, sắt thép, đá): phải có phụ lục hợp đồng, bảng tính bù giá được Chủ đầu tư duyệt để bảo vệ doanh thu bổ sung.', priority: 'important', decreeId: 'nd-50-2021', articleNum: '1', decreeLabel: 'NĐ 50/2021 (Sửa đổi HĐ XD)', phase: 2 },
      { id: 'chk-nd-10-2021', title: 'Định mức dự toán chi phí máy thi công & Nhân công (NĐ 10/2021)', description: 'Kiểm tra hồ sơ dự toán được phê duyệt làm cơ sở giải trình chi phí vật tư, định mức ca máy thi công và nhân công công trường hợp lệ khi CQT kiểm tra.', priority: 'critical', decreeId: 'nd-10-2021', articleNum: '24', decreeLabel: 'NĐ 10/2021 (Quản lý chi phí XD)', phase: 1 },
      { id: 'chk-tt-24-2024-tt-btc', title: 'Đối chiếu hồ sơ thanh toán vốn ngân sách / Ban QLDA (TT 24/2024)', description: 'Đối chiếu hồ sơ giải ngân Kho bạc Nhà nước, bảng xác định giá trị khối lượng hoàn thành Mẫu 03a với sổ kế toán TK 131 và hóa đơn GTGT.', priority: 'important', decreeId: 'tt-24-2024-tt-btc', articleNum: '5', decreeLabel: 'TT 24/2024 (Chế độ KT HCSN)', phase: 2 },
      { id: 'chk-tt-108-2025', title: 'Báo cáo quyết toán dự án hoàn thành vốn nhà nước (TT 108/2025)', description: 'Đối chiếu số liệu kiểm toán độc lập dự án công trình giao thông hoàn thành với số dư công nợ và doanh thu đã kê khai quyết toán thuế.', priority: 'recommended', decreeId: 'tt-108-2025', articleNum: '4', decreeLabel: 'TT 108/2025 (BCTC Hợp nhất NN)', phase: 2 },
    ]
  },

  // NHÓM 7: CHẾ ĐỘ KẾ TOÁN, CHUẨN MỰC VAS & BCTC
  {
    id: 'ketoan-bctc',
    name: 'Chế Độ Kế Toán, Chuẩn Mực VAS & BCTC',
    icon: '📊',
    color: 'indigo',
    description: 'Sổ cái TK trọng yếu, BCTC TT 200/99, chuẩn mực VAS 01, 02, 14, phạt kế toán NĐ 41',
    items: [
      { id: 'chk-luat-ke-toan-2015', title: 'In sổ cái, sổ chi tiết & Lưu trữ chứng từ 10 năm (Luật 88/2015)', description: 'In toàn bộ sổ cái, sổ chi tiết TK 511, 131, 331, 154, 632. Đảm bảo chứng từ gốc có đủ chữ ký, lưu trữ tối thiểu 10 năm theo Điều 16-24.', priority: 'critical', decreeId: 'luat-ke-toan-2015', articleNum: '24', decreeLabel: 'Luật Kế toán 88/2015', phase: 1 },
      { id: 'chk-tt-200-2014', title: 'Báo cáo tài chính đầy đủ (B01, B02, B03, B09) theo TT 200/2014', description: 'Kiểm tra BCTC đã nộp CQT khớp với số liệu quyết toán TNDN. In bản chính thức có chữ ký Giám đốc và Kế toán trưởng sẵn sàng cho đoàn kiểm tra.', priority: 'critical', decreeId: 'tt-200-2014', decreeLabel: 'TT 200/2014 (Chế độ KT DN)', phase: 1 },
      { id: 'chk-tt-99-2025', title: 'Chuyển đổi hệ thống tài khoản kế toán mới theo TT 99/2025', description: 'Rà soát phương án chuyển đổi danh mục tài khoản từ 01/01/2026, quy định ghi nhận doanh thu xây dựng theo hóa đơn và chứng từ thực tế.', priority: 'important', decreeId: 'tt-99-2025', articleNum: '5', decreeLabel: 'TT 99/2025 (Chế độ KT mới 2026)', phase: 2 },
      { id: 'chk-tt-133-2016', title: 'Phương pháp tập hợp chi phí xây lắp TK 154 (TT 133/2016)', description: 'Đối chiếu cách phân bổ chi phí chung và giá thành xây lắp công trình nếu đơn vị phụ thuộc của Kiểu Việt áp dụng chế độ KT doanh nghiệp vừa và nhỏ.', priority: 'important', decreeId: 'tt-133-2016', articleNum: '27', decreeLabel: 'TT 133/2016 (Chế độ KT DNNVV)', phase: 2 },
      { id: 'chk-tt-46-2025', title: 'Cập nhật tài khoản kế toán theo Thông tư 46/2025', description: 'Kiểm tra các sửa đổi bổ sung về chế độ kế toán áp dụng cho các nhà thầu phụ là doanh nghiệp nhỏ và vừa liên kết với Kiểu Việt.', priority: 'recommended', decreeId: 'tt-46-2025', articleNum: '2', decreeLabel: 'TT 46/2025 (Sửa đổi TT 133)', phase: 2 },
      { id: 'chk-nd-174-2016', title: 'Quy chế quản lý tài liệu kế toán điện tử (NĐ 174/2016)', description: 'Quy định về việc bảo quản, sao lưu dữ liệu kế toán trên máy chủ, trách nhiệm lưu trữ và phục hồi dữ liệu khi cơ quan thuế yêu cầu trích xuất.', priority: 'important', decreeId: 'nd-174-2016', articleNum: '9', decreeLabel: 'NĐ 174/2016 (Hướng dẫn Luật KT)', phase: 2 },
      { id: 'chk-nd-41-2018', title: 'Khung xử phạt vi phạm kế toán & kiểm toán (NĐ 41/2018)', description: 'Nắm vững khung phạt: không kiểm kê tài sản (5-10 triệu), BCTC sai lệch (10-20 triệu), thiếu chữ ký chứng từ (3-5 triệu) để rà soát chứng từ trước.', priority: 'important', decreeId: 'nd-41-2018', articleNum: '7', decreeLabel: 'NĐ 41/2018 (Xử phạt Kế toán)', phase: 3 },
      { id: 'chk-vas-01', title: 'Tuân thủ nguyên tắc kế toán dồn tích & Phù hợp (VAS 01)', description: 'Doanh thu và chi phí xây lắp phải ghi nhận phù hợp với nhau trong cùng kỳ tính thuế, không trích trước chi phí không tương ứng doanh thu.', priority: 'important', decreeId: 'vas-01', decreeLabel: 'Chuẩn mực VAS 01 (Chung)', phase: 2 },
      { id: 'chk-vas-02', title: 'Xác định giá gốc hàng tồn kho & Kiểm kê mỏ đá (VAS 02)', description: 'Tính đúng giá gốc đá thành phẩm tại mỏ đá, phương pháp tính giá xuất kho; lập biên bản kiểm kê kho vật tư, bồn dầu diesel cuối năm tài chính.', priority: 'critical', decreeId: 'vas-02', decreeLabel: 'Chuẩn mực VAS 02 (Hàng tồn kho)', phase: 1 },
      { id: 'chk-vas-14', title: 'Ghi nhận doanh thu hợp đồng xây dựng (VAS 14)', description: 'Đảm bảo doanh thu ghi nhận khớp với biên bản nghiệm thu tỷ lệ hoàn thành công trình hoặc biên bản bàn giao từng hạng mục đưa vào sử dụng.', priority: 'critical', decreeId: 'vas-14', decreeLabel: 'Chuẩn mực VAS 14 (Doanh thu)', phase: 1 },
    ]
  },

  // NHÓM 8: BẢO HIỂM XÃ HỘI & AN TOÀN LAO ĐỘNG
  {
    id: 'bhxh-phaply',
    name: 'Bảo Hiểm Xã Hội & An Toàn Lao Động',
    icon: '💼',
    color: 'cyan',
    description: 'Trần đóng BHXH 46.8tr NĐ 73, Mẫu D02-LT QĐ 595, Luật BHXH mới 41/2024, phạt BHXH NĐ 12',
    items: [
      { id: 'chk-nd-73-2024', title: 'Trần tiền lương đóng BHXH 46.8 triệu theo Lương cơ sở 2.34tr (NĐ 73/2024)', description: 'Kiểm tra mức đóng BHXH, BHYT của Ban giám đốc và cán bộ quản lý Kiểu Việt được áp đúng mức trần 20 lần lương cơ sở (20 x 2.340.000 = 46.800.000đ).', priority: 'critical', decreeId: 'nd-73-2024', articleNum: '3', decreeLabel: 'NĐ 73/2024 (Lương cơ sở 2.34tr)', phase: 1 },
      { id: 'chk-qd-595-2017-bhxh', title: 'Đối chiếu Mẫu D02-LT cơ quan BHXH với Bảng lương kế toán (QĐ 595/BHXH)', description: 'Tổng tiền lương đóng BHXH trên Mẫu D02-LT phải khớp đúng với chi phí lương đóng BHXH trên sổ kế toán TK 3383, 3384, không để chênh lệch.', priority: 'critical', decreeId: 'qd-595-2017-bhxh', articleNum: '2', decreeLabel: 'QĐ 595/QĐ-BHXH (Thu BHXH)', phase: 1 },
      { id: 'chk-luat-41-2024', title: 'Cập nhật quy định đóng BHXH bắt buộc theo Luật BHXH mới (Luật 41/2024)', description: 'Chuẩn bị hồ sơ lao động theo quy định mở rộng đối tượng tham gia BHXH bắt buộc của Luật BHXH 41/2024 có hiệu lực từ 01/07/2025.', priority: 'recommended', decreeId: 'luat-41-2024', articleNum: '2', decreeLabel: 'Luật BHXH 41/2024 (Mới)', phase: 2 },
      { id: 'chk-nd-12-2022', title: 'Khung xử phạt trốn đóng, chậm nộp BHXH & ATLĐ mỏ đá (NĐ 12/2022)', description: 'Nắm vững khung phạt chậm nộp BHXH (phạt 12-15% tổng số tiền chậm đóng); đảm bảo an toàn nổ mìn và bảo hộ lao động công nhân mỏ đá.', priority: 'important', decreeId: 'nd-12-2022', articleNum: '38', decreeLabel: 'NĐ 12/2022 (Xử phạt BHXH, Lao động)', phase: 3 },
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
      'Rà soát chênh lệch doanh thu GTGT vs TNDN — lập bảng giải trình Mẫu 01',
      'Đối chiếu sổ cái TK 511, 131, 154, 632 với tờ khai thuế',
      'Kiểm tra toàn bộ hóa đơn đầu vào > 20 triệu (thanh toán ngân hàng)',
      'In sổ cái, sổ chi tiết cho năm kiểm tra theo Luật Kế toán 88/2015',
      'Rà soát khấu hao TSCĐ — đúng khung TT 45, đúng phương pháp',
      'Kiểm tra hồ sơ giao dịch liên kết Mẫu 01 & trần 30% EBITDA (NĐ 132)',
      'Đối chiếu sản lượng khai thác mỏ đá vs kê khai thuế tài nguyên & QĐ 87 Gia Lai',
      'Tính lại tạm nộp TNDN 4 quý — nộp bổ sung nếu < 80% (NĐ 126)',
    ]
  },
  {
    phase: 2,
    label: 'Bổ sung hồ sơ',
    daysBefore: 'Trước 15 ngày',
    color: 'blue',
    tasks: [
      'In BCTC bản chính thức có ký tên đóng dấu (TT 200 / TT 99)',
      'Chuẩn bị tập hóa đơn sai sót đã xử lý (Mẫu 04/SS, biên bản thỏa thuận)',
      'Đối chiếu bảng lương với HĐLĐ, hồ sơ BHXH Mẫu D02-LT (QĐ 595)',
      'Chuẩn bị hồ sơ thuế tài nguyên, phí BVMT mỏ đá (NĐ 27, NĐ 67)',
      'Lập bảng tổng hợp chi phí trích trước TK 335 kèm dự toán duyệt (TT 96)',
      'Bổ sung biên bản nghiệm thu A-B cho công trình xây lắp chưa có (NĐ 37)',
      'Kiểm tra chứng từ khấu trừ TNCN điện tử cấp cho NLĐ nghỉ việc (NĐ 70)',
      'Rà soát quy chế lương thưởng, thỏa ước LĐ tập thể gửi Phòng LĐTBXH',
    ]
  },
  {
    phase: 3,
    label: 'Sẵn sàng tiếp đoàn',
    daysBefore: 'Trước 7 ngày',
    color: 'amber',
    tasks: [
      'Sắp xếp phòng làm việc cho đoàn kiểm tra (bàn, ghế, ổ điện, wifi)',
      'Phân công người trực tiếp làm việc với đoàn (Kế toán trưởng làm đầu mối)',
      'Chuẩn bị bản giải trình cho các chênh lệch đã phát hiện ở giai đoạn 1',
      'Kiểm tra lần cuối checklist 55 văn bản — mọi mục phải ✅',
      'Backup toàn bộ dữ liệu kế toán (phần mềm, Excel, chứng từ scan)',
      'Nắm rõ quyền của DN khi bị kiểm tra thuế (Điều 110-111 Luật QLT 2019)',
      'Chuẩn bị con dấu, giấy ủy quyền (nếu Tổng Giám đốc vắng mặt)',
      'Photo sẵn bộ BCTC, tờ khai thuế đã nộp cho đoàn kiểm tra',
    ]
  }
];
