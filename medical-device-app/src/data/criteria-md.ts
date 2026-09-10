// src/data/criteria-md.ts
// Bộ 40 nhóm tiêu chí tuân thủ trang thiết bị y tế và đấu thầu Kiểu Việt (MD01 đến MD40)
// Tuyệt đối tuân thủ RULE L01: Triển khai đủ 100% cả 40 nhóm

import { CriteriaGroup } from '@/types/medical';

export const CRITERIA_40_GROUPS: CriteriaGroup[] = [
  {
    code: 'MD01',
    title: 'Phân loại rủi ro trang thiết bị y tế (A, B, C, D)',
    category: 'legal',
    description: 'Kiểm tra bản kết quả phân loại rủi ro theo đúng quy chuẩn TT 24/2026 và VBHN 08/VBHN-BYT; cơ sở thực hiện phân loại đủ điều kiện.',
    legalBasis: 'Điều 4 & 5 Nghị định 98/2021/NĐ-CP & VBHN 08/2026',
    totalChecks: 3,
    passedChecks: 3,
    verdict: 'pass'
  },
  {
    code: 'MD02',
    title: 'Số lưu hành (Công bố A/B & Đăng ký C/D)',
    category: 'legal',
    description: 'Số công bố tiêu chuẩn áp dụng loại A/B còn hiệu lực; Số lưu hành loại C/D do Bộ Y tế cấp, không thuộc danh sách bị thu hồi.',
    legalBasis: 'Điều 21 & 22 VBHN 08/VBHN-BYT & NĐ 04/2025',
    totalChecks: 4,
    passedChecks: 4,
    verdict: 'pass'
  },
  {
    code: 'MD03',
    title: 'Tiêu chuẩn cơ sở & Hồ sơ công bố chất lượng',
    category: 'legal',
    description: 'Bản tiêu chuẩn cơ sở do chủ sở hữu phê duyệt kèm kết quả thử nghiệm tương thích điện từ, an toàn điện theo TCVN/IEC.',
    legalBasis: 'Điều 26 Nghị định 98/2021/NĐ-CP',
    totalChecks: 2,
    passedChecks: 2,
    verdict: 'pass'
  },
  {
    code: 'MD04',
    title: 'Giấy phép nhập khẩu & Tờ khai hải quan thông quan',
    category: 'legal',
    description: 'Tờ khai hải quan thông quan chính ngạch, giấy phép nhập khẩu đối với thiết bị thuộc danh mục quản lý chuyên ngành mã HS.',
    legalBasis: 'Thông tư 19/2024/TT-BYT & Luật Hải quan',
    totalChecks: 3,
    passedChecks: 3,
    verdict: 'pass'
  },
  {
    code: 'MD05',
    title: 'Giấy ủy quyền bán hàng của Nhà sản xuất (LOA)',
    category: 'bidding',
    description: 'Thư ủy quyền (Letter of Authorization) của chủ sở hữu thiết bị cho Kiểu Việt dự thầu, phân phối; hợp pháp hóa lãnh sự theo quy định.',
    legalBasis: 'Điều 14 & 28 Nghị định 214/2025/NĐ-CP',
    totalChecks: 3,
    passedChecks: 3,
    verdict: 'pass'
  },
  {
    code: 'MD06',
    title: 'Chứng nhận lưu hành tự do (CFS) nước xuất khẩu',
    category: 'legal',
    description: 'Giấy chứng nhận CFS còn hiệu lực tại thời điểm nộp hồ sơ, được cấp bởi cơ quan có thẩm quyền của nước sản xuất hoặc FDA/CE.',
    legalBasis: 'Điều 29 Nghị định 98/2021/NĐ-CP',
    totalChecks: 2,
    passedChecks: 2,
    verdict: 'pass'
  },
  {
    code: 'MD07',
    title: 'Hệ thống quản lý chất lượng ISO 13485',
    category: 'legal',
    description: 'Chứng chỉ ISO 13485 của nhà sản xuất thiết bị còn hiệu lực; chứng nhận ISO cơ sở bảo hành, bảo trì nếu gói thầu yêu cầu.',
    legalBasis: 'Điều 68 Nghị định 98/2021/NĐ-CP',
    totalChecks: 2,
    passedChecks: 2,
    verdict: 'pass'
  },
  {
    code: 'MD08',
    title: 'Hồ sơ kỹ thuật chung CSDT theo chuẩn ASEAN',
    category: 'legal',
    description: 'Bộ tài liệu tóm tắt thiết kế, báo cáo đánh giá lâm sàng, quản lý rủi ro thiết bị y tế theo mẫu quy định của ASEAN.',
    legalBasis: 'Phụ lục V VBHN 08/VBHN-BYT',
    totalChecks: 3,
    passedChecks: 2,
    verdict: 'review'
  },
  {
    code: 'MD09',
    title: 'Nhãn mác hàng hóa theo NĐ 43/2017 & NĐ 111/2021',
    category: 'delivery',
    description: 'Nhãn gốc và nhãn phụ tiếng Việt đầy đủ: tên thiết bị, model, số lưu hành, tên/địa chỉ chủ sở hữu, ngày sản xuất, hạn dùng.',
    legalBasis: 'Nghị định 43/2017/NĐ-CP & NĐ 111/2021/NĐ-CP',
    totalChecks: 3,
    passedChecks: 3,
    verdict: 'pass'
  },
  {
    code: 'MD10',
    title: 'Tài liệu hướng dẫn sử dụng (IFU) tiếng Việt',
    category: 'delivery',
    description: 'Bản hướng dẫn sử dụng bằng tiếng Việt đúng nguyên bản nhà sản xuất, có cảnh báo an toàn và hướng dẫn bảo trì định kỳ.',
    legalBasis: 'Điều 54 Nghị định 98/2021/NĐ-CP',
    totalChecks: 2,
    passedChecks: 2,
    verdict: 'pass'
  },
  {
    code: 'MD11',
    title: 'Điều kiện cơ sở mua bán trang thiết bị y tế',
    category: 'legal',
    description: 'Kiểu Việt đáp ứng đầy đủ điều kiện về nhân sự chuyên môn kỹ thuật, kho bãi và phương tiện vận chuyển thiết bị y tế.',
    legalBasis: 'Điều 40 & 41 VBHN 08/VBHN-BYT',
    totalChecks: 3,
    passedChecks: 3,
    verdict: 'pass'
  },
  {
    code: 'MD12',
    title: 'Hồ sơ công bố đủ điều kiện mua bán thiết bị B, C, D',
    category: 'legal',
    description: 'Phiếu tiếp nhận hồ sơ công bố đủ điều kiện mua bán trang thiết bị y tế loại B, C, D do Sở Y tế cấp.',
    legalBasis: 'Điều 42 Nghị định 98/2021/NĐ-CP',
    totalChecks: 2,
    passedChecks: 2,
    verdict: 'pass'
  },
  {
    code: 'MD13',
    title: 'Người phụ trách chuyên môn kỹ thuật TBYT',
    category: 'legal',
    description: 'Văn bằng chuyên ngành kỹ thuật y sinh, điện tử y sinh, dược, bác sĩ và thâm niên công tác thực tế trên 24 tháng.',
    legalBasis: 'Điều 40 Khoản 1 VBHN 08/VBHN-BYT',
    totalChecks: 2,
    passedChecks: 2,
    verdict: 'pass'
  },
  {
    code: 'MD14',
    title: 'Kho bãi bảo quản thiết bị y tế đạt chuẩn',
    category: 'operation',
    description: 'Kho lưu trữ có kiểm soát nhiệt độ, độ ẩm, sạch sẽ, tách biệt khu vực chờ xử lý, hàng trả lại và hàng kiểm định.',
    legalBasis: 'Điều 40 Khoản 2 VBHN 08/VBHN-BYT',
    totalChecks: 3,
    passedChecks: 3,
    verdict: 'pass'
  },
  {
    code: 'MD15',
    title: 'Phương tiện vận chuyển thiết bị y tế chuyên dụng',
    category: 'operation',
    description: 'Phương tiện vận chuyển chống sốc, che chắn mưa nắng và duy trì dải nhiệt độ bảo quản cho thiết bị chẩn đoán/hóa chất.',
    legalBasis: 'Điều 40 Khoản 3 VBHN 08/VBHN-BYT',
    totalChecks: 2,
    passedChecks: 2,
    verdict: 'pass'
  },
  {
    code: 'MD16',
    title: 'Truy xuất nguồn gốc thiết bị y tế (Số Serial/Lot)',
    category: 'operation',
    description: 'Hệ thống quản lý truy vết từng số Serial máy chính, số Lot hóa chất vật tư từ khâu nhập khẩu, phân phối đến cơ sở y tế.',
    legalBasis: 'Điều 55 Nghị định 98/2021/NĐ-CP',
    totalChecks: 3,
    passedChecks: 3,
    verdict: 'pass'
  },
  {
    code: 'MD17',
    title: 'Điều kiện bảo quản & vận chuyển theo hãng sản xuất',
    category: 'operation',
    description: 'Biểu ghi nhiệt độ, độ ẩm suốt quá trình lưu kho và vận chuyển đối với sinh phẩm xét nghiệm, thuốc thử nhạy cảm nhiệt.',
    legalBasis: 'Quy chuẩn kỹ thuật quốc gia & Khuyến cáo hãng',
    totalChecks: 2,
    passedChecks: 2,
    verdict: 'pass'
  },
  {
    code: 'MD18',
    title: 'Hạn dùng thiết bị, hóa chất & vật tư tiêu hao',
    category: 'delivery',
    description: 'Thời hạn sử dụng còn lại tại thời điểm bàn giao cho bệnh viện đạt tối thiểu 18-24 tháng hoặc theo yêu cầu E-HSMT.',
    legalBasis: 'Tiêu chuẩn E-HSMT & Hợp đồng cung cấp',
    totalChecks: 2,
    passedChecks: 2,
    verdict: 'pass'
  },
  {
    code: 'MD19',
    title: 'Kê khai & Niêm yết giá trên Cổng thông tin Bộ Y tế',
    category: 'bidding',
    description: 'Thiết bị dự thầu BẮT BUỘC đã hoàn tất kê khai giá công khai trên Cổng điện tử BYT; giá dự thầu không vượt giá kê khai.',
    legalBasis: 'Điều 44 & 45 VBHN 08/VBHN-BYT & TT 29/2024',
    totalChecks: 3,
    passedChecks: 3,
    verdict: 'pass'
  },
  {
    code: 'MD20',
    title: 'Xác định thuế suất GTGT trong báo giá & dự thầu',
    category: 'bidding',
    description: 'Xác định đúng thuế suất thuế GTGT (5% cho TBYT chuyên dùng theo TT 219; 10% nếu thiết bị đa dụng không có xác nhận BYT).',
    legalBasis: 'Thông tư 219/2013/TT-BTC & Thông tư 43/2021/TT-BTC',
    totalChecks: 3,
    passedChecks: 3,
    verdict: 'pass'
  },
  {
    code: 'MD21',
    title: 'Quản lý phiên bản E-HSMT & Sửa đổi thời điểm đóng thầu',
    category: 'bidding',
    description: 'Theo dõi các quyết định sửa đổi E-HSMT, làm rõ hồ sơ và gia hạn thời điểm đóng thầu trên Hệ thống mạng đấu thầu quốc gia.',
    legalBasis: 'Điều 14 & 15 Nghị định 214/2025/NĐ-CP',
    totalChecks: 2,
    passedChecks: 2,
    verdict: 'pass'
  },
  {
    code: 'MD22',
    title: 'Tư cách hợp lệ nhà thầu & Thỏa thuận liên danh',
    category: 'bidding',
    description: 'Kiểm tra đăng ký kinh doanh, không bị cấm thầu, không nợ đọng thuế; thỏa thuận liên danh phân định rõ quyền/nghĩa vụ.',
    legalBasis: 'Điều 5 Luật Đấu thầu 22/2023/QH15',
    totalChecks: 3,
    passedChecks: 3,
    verdict: 'pass'
  },
  {
    code: 'MD23',
    title: 'Bảo đảm dự thầu (Thư bảo lãnh Ngân hàng)',
    category: 'bidding',
    description: 'Thư bảo lãnh ngân hàng đúng người thụ hưởng, số tiền đạt 1-3% giá gói thầu, hiệu lực kéo dài 30 ngày sau hạn hiệu lực E-HSDT.',
    legalBasis: 'Điều 14 Luật Đấu thầu 22/2023/QH15',
    totalChecks: 3,
    passedChecks: 3,
    verdict: 'pass'
  },
  {
    code: 'MD24',
    title: 'Ma trận thông số kỹ thuật (Soi lệch E-HSMT)',
    category: 'bidding',
    description: 'Đối chiếu từng tiêu chí kỹ thuật: Công suất, độ phân giải, độ chính xác; phát hiện tiêu chuẩn cài cắm độc quyền của đối thủ.',
    legalBasis: 'Điều 44 Luật Đấu thầu 22 & NĐ 214/2025',
    totalChecks: 4,
    passedChecks: 4,
    verdict: 'pass'
  },
  {
    code: 'MD25',
    title: 'Tương thích phụ kiện, phần mềm & Hạ tầng bệnh viện',
    category: 'technical',
    description: 'Đảm bảo khả năng kết nối hệ thống thông tin bệnh viện (HIS/LIS/PACS), nguồn điện 3 pha, hệ thống nối đất và diện tích lắp đặt.',
    legalBasis: 'Quy chuẩn bệnh viện & Hồ sơ kỹ thuật E-HSMT',
    totalChecks: 3,
    passedChecks: 3,
    verdict: 'pass'
  },
  {
    code: 'MD26',
    title: 'Phân nhóm kỹ thuật, chất lượng theo Thông tư 57/2025',
    category: 'bidding',
    description: 'Xác định chính xác thiết bị chào thuộc Nhóm 1, 2, 3, 4, 5 hay 6 căn cứ vào chứng nhận FDA/CE và nước sản xuất thuộc G7/EU.',
    legalBasis: 'Thông tư 57/2025/TT-BYT (Hiệu lực 15/02/2026)',
    totalChecks: 3,
    passedChecks: 3,
    verdict: 'pass'
  },
  {
    code: 'MD27',
    title: 'Mua sắm tập trung cấp quốc gia & địa phương',
    category: 'bidding',
    description: 'Rà soát danh mục TBYT bắt buộc mua sắm tập trung theo Thông tư 01/2026/TT-BYT để chọn đúng hình thức tham gia thầu.',
    legalBasis: 'Thông tư 01/2026/TT-BYT & Điều 53 Luật 22/2023',
    totalChecks: 2,
    passedChecks: 2,
    verdict: 'pass'
  },
  {
    code: 'MD28',
    title: 'Tiến độ cung cấp hàng hóa & Phương án giao lắp',
    category: 'delivery',
    description: 'Bảng tiến độ chi tiết từ ngày ký hợp đồng, mở L/C, thông quan hải quan, vận chuyển đến lắp đặt hoàn chỉnh tại phòng khám/BV.',
    legalBasis: 'Mẫu số 05 E-HSDT & Điều khoản hợp đồng',
    totalChecks: 3,
    passedChecks: 3,
    verdict: 'pass'
  },
  {
    code: 'MD29',
    title: 'Giá dự thầu & Đầy đủ cấu hình tiêu chuẩn/tùy chọn',
    category: 'bidding',
    description: 'Báo giá trọn gói bao gồm thiết bị chính, phụ kiện tiêu chuẩn, vật tư tiêu hao ban đầu, thuế, phí vận chuyển và bảo hiểm.',
    legalBasis: 'Mẫu biểu giá E-HSDT theo NĐ 214/2025',
    totalChecks: 3,
    passedChecks: 3,
    verdict: 'pass'
  },
  {
    code: 'MD30',
    title: 'Văn bản làm rõ E-HSMT & Khiếu nại tiêu chí cài thầu',
    category: 'bidding',
    description: 'Soạn thảo công văn yêu cầu Bên mời thầu làm rõ các tiêu chí thông số kỹ thuật mang tính chỉ định nhãn hiệu theo Điều 44.',
    legalBasis: 'Điều 44 Khoản 3 Luật Đấu thầu 22/2023/QH15',
    totalChecks: 3,
    passedChecks: 3,
    verdict: 'pass'
  },
  {
    code: 'MD31',
    title: 'Kiểm tra hàng thực nhận (Serial, CO/CQ, Tình trạng)',
    category: 'delivery',
    description: 'Kiểm tra ngoại quan, niêm phong thùng máy, khớp đúng số Serial với tờ khai hải quan, chứng nhận xuất xứ CO và chất lượng CQ.',
    legalBasis: 'Điều khoản giao nhận hợp đồng kinh tế',
    totalChecks: 3,
    passedChecks: 3,
    verdict: 'pass'
  },
  {
    code: 'MD32',
    title: 'Kiểm định an toàn kỹ thuật theo TT 24/2026/TT-BYT',
    category: 'operation',
    description: 'Thực hiện kiểm định an toàn bức xạ, kiểm định kỹ thuật bởi đơn vị được chỉ định trước khi đưa vào vận hành lâm sàng.',
    legalBasis: 'Điều 3 Thông tư 24/2026/TT-BYT & NĐ 98/2021',
    totalChecks: 3,
    passedChecks: 3,
    verdict: 'pass'
  },
  {
    code: 'MD33',
    title: 'Hiệu chuẩn & Bảo trì định kỳ thiết bị y tế',
    category: 'operation',
    description: 'Lập sổ nhật trình bảo dưỡng, dán tem hiệu chuẩn đo lường và thay thế định kỳ linh kiện hao mòn theo khuyến cáo hãng.',
    legalBasis: 'Luật Đo lường 04/2011 & Tiêu chuẩn cơ sở',
    totalChecks: 2,
    passedChecks: 2,
    verdict: 'pass'
  },
  {
    code: 'MD34',
    title: 'Nghiệm thu kỹ thuật & Bàn giao chạy thử lâm sàng',
    category: 'delivery',
    description: 'Biên bản nghiệm thu chạy thử tải 72 giờ không lỗi, kết quả mẫu xét nghiệm đối chứng đạt chuẩn, có chữ ký đại diện 2 bên.',
    legalBasis: 'Điều 28 Nghị định 214/2025 & Quy chế BV',
    totalChecks: 3,
    passedChecks: 3,
    verdict: 'pass'
  },
  {
    code: 'MD35',
    title: 'Đào tạo chuyển giao công nghệ & Cấp chứng chỉ sử dụng',
    category: 'delivery',
    description: 'Tổ chức khóa đào tạo vận hành cho bác sĩ, kỹ thuật viên xét nghiệm; cấp biên bản xác nhận hoàn thành đào tạo.',
    legalBasis: 'Hợp đồng chuyển giao công nghệ thiết bị y tế',
    totalChecks: 2,
    passedChecks: 2,
    verdict: 'pass'
  },
  {
    code: 'MD36',
    title: 'Cam kết bảo hành chính hãng (SLA xử lý sự cố)',
    category: 'operation',
    description: 'Thời hạn bảo hành 24-36 tháng; cam kết thời gian kỹ sư có mặt xử lý sự cố trong vòng 4-8 giờ kể từ khi nhận thông báo.',
    legalBasis: 'Điều kiện E-HSMT & Thư cam kết bảo hành',
    totalChecks: 3,
    passedChecks: 3,
    verdict: 'pass'
  },
  {
    code: 'MD37',
    title: 'Hồ sơ thanh toán, Giải tỏa bảo lãnh & Thu hồi công nợ',
    category: 'bidding',
    description: 'Bộ chứng từ thanh toán: Hóa đơn GTGT, Biên bản nghiệm thu, Bảo lãnh bảo hành 5%, đối chiếu thời hạn thanh toán hợp đồng.',
    legalBasis: 'Điều khoản thanh toán hợp đồng & Luật Kế toán',
    totalChecks: 3,
    passedChecks: 3,
    verdict: 'pass'
  },
  {
    code: 'MD38',
    title: 'Xử lý báo cáo sự cố y khoa liên quan TBYT',
    category: 'operation',
    description: 'Quy trình tiếp nhận, lập biên bản niêm phong và gửi báo cáo sự cố y khoa về Vụ Trang thiết bị và Công trình y tế trong 24h.',
    legalBasis: 'Điều 59 Nghị định 98/2021/NĐ-CP',
    totalChecks: 2,
    passedChecks: 2,
    verdict: 'pass'
  },
  {
    code: 'MD39',
    title: 'Quy trình phong tỏa & Thu hồi thiết bị lỗi (Recall)',
    category: 'operation',
    description: 'Nhận diện thông báo thu hồi của hãng/Bộ Y tế; dừng sử dụng, niêm phong kho và thu hồi toàn bộ số lô sản phẩm bị ảnh hưởng.',
    legalBasis: 'Điều 60 & 61 VBHN 08/VBHN-BYT',
    totalChecks: 3,
    passedChecks: 3,
    verdict: 'pass'
  },
  {
    code: 'MD40',
    title: 'Bàn giao hồ sơ trọn vẹn & Lưu trữ hồ sơ thầu 10 năm',
    category: 'operation',
    description: 'Đóng gói toàn bộ hồ sơ kỹ thuật, hợp đồng, hóa đơn, biên bản kiểm định thành file lưu trữ số và bản cứng bảo quản tối thiểu 10 năm.',
    legalBasis: 'Luật Đấu thầu 22/2023 & Luật Lưu trữ',
    totalChecks: 3,
    passedChecks: 3,
    verdict: 'pass'
  }
];