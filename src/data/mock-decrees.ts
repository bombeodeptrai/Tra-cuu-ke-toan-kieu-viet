import { Decree } from '@/types/decree'

export const MOCK_CATEGORIES = [
  { id: '1', name: 'Luật', slug: 'luat', description: 'Các văn bản Luật' },
  { id: '2', name: 'Nghị định', slug: 'nghi-dinh', description: 'Nghị định của Chính phủ' },
  { id: '3', name: 'Thông tư', slug: 'thong-tu', description: 'Thông tư hướng dẫn' },
  { id: '4', name: 'Hóa đơn', slug: 'hoa-don', description: 'Quy định về hóa đơn chứng từ' },
  { id: '5', name: 'Thuế', slug: 'thue', description: 'Quy định về thuế' },
  { id: '6', name: 'Chuẩn mực', slug: 'chuan-muc', description: 'Chuẩn mực kế toán' }
];

export const MOCK_DECREES: Decree[] = [
  {
    id: 'tt-99-2025',
    decree_number: '99/2025/TT-BTC',
    title: 'Thông tư 99/2025/TT-BTC Chế độ kế toán doanh nghiệp (Mới)',
    summary: 'Thay thế Thông tư 200/2014/TT-BTC, thay đổi toàn diện chế độ kế toán doanh nghiệp, cấu trúc lại tài khoản và báo cáo tài chính.',
    content: `## CHƯƠNG I: QUY ĐỊNH CHUNG

### Điều 1. Đối tượng áp dụng
Thông tư này hướng dẫn kế toán áp dụng đối với các doanh nghiệp thuộc mọi lĩnh vực, mọi thành phần kinh tế hoạt động dưới hình thức công ty trách nhiệm hữu hạn, công ty cổ phần, công ty hợp danh, doanh nghiệp tư nhân.

### Điều 2. Những thay đổi trọng yếu so với Thông tư 200
1. Cấu trúc lại hệ thống tài khoản kế toán: 
a) Bổ sung tài khoản 142 - Tài sản sinh học.
b) Bổ sung tài khoản 337 - Phải trả cổ tức.
2. Đổi tên "Bảng cân đối kế toán" thành "Báo cáo tình hình tài chính".
3. Doanh nghiệp được tự thiết kế mẫu chứng từ, sổ sách tuân thủ Luật Kế toán thay vì bắt buộc dùng biểu mẫu cố định.`,
    category: 'thong-tu',
    issued_date: '2025-10-15',
    effective_date: '2026-01-01',
    status: 'active',
    source_url: '#'
  },
  {
    id: 'luat-thue-tndn-2025',
    decree_number: '70/2025/QH15',
    title: 'Luật Thuế Thu nhập doanh nghiệp 2025',
    summary: 'Quy định các khoản chi phí được trừ và không được trừ, thuế suất ưu đãi mới áp dụng từ 2026.',
    content: `## CHƯƠNG II: THU NHẬP CHỊU THUẾ VÀ CHI PHÍ ĐƯỢC TRỪ

### Điều 9. Các khoản chi phí được trừ và không được trừ khi xác định thu nhập chịu thuế
1. Doanh nghiệp được trừ mọi khoản chi nếu đáp ứng đủ các điều kiện sau đây:
a) Khoản chi thực tế phát sinh liên quan đến hoạt động sản xuất, kinh doanh của doanh nghiệp;
b) Khoản chi có đủ hoá đơn, chứng từ hợp pháp theo quy định của pháp luật;
c) Khoản chi nếu có hoá đơn mua hàng hoá, dịch vụ từng lần có giá trị từ 20 triệu đồng trở lên (giá đã bao gồm thuế GTGT) khi thanh toán phải có chứng từ thanh toán không dùng tiền mặt.

2. Các khoản chi không được trừ khi xác định thu nhập chịu thuế bao gồm:
a) Chi khấu hao tài sản cố định không đúng quy định của pháp luật;
b) Tiền lương, tiền công của chủ doanh nghiệp tư nhân; thù lao trả cho các sáng lập viên doanh nghiệp không trực tiếp tham gia điều hành sản xuất, kinh doanh;
c) Phần chi vượt mức quy định của pháp luật về bảo hiểm xã hội, bảo hiểm y tế.`,
    category: 'thue',
    issued_date: '2025-12-10',
    effective_date: '2026-01-01',
    status: 'active',
    source_url: '#'
  },
  {
    id: 'luat-thue-gtgt-2025',
    decree_number: '71/2025/QH15',
    title: 'Luật Thuế Giá trị gia tăng 2025',
    summary: 'Cập nhật đối tượng không chịu thuế GTGT và thuế suất 0%, 5%, 10% áp dụng cho năm 2026.',
    content: `## CHƯƠNG II: CĂN CỨ VÀ PHƯƠNG PHÁP TÍNH THUẾ

### Điều 8. Thuế suất
1. Mức thuế suất 0% áp dụng đối với hàng hoá, dịch vụ xuất khẩu, vận tải quốc tế và hàng hoá, dịch vụ không chịu thuế giá trị gia tăng khi xuất khẩu.
2. Mức thuế suất 5% áp dụng đối với hàng hoá, dịch vụ sau đây: Nước sạch phục vụ sản xuất và sinh hoạt; Quặng để sản xuất phân bón; Sản phẩm trồng trọt, chăn nuôi, thủy sản chưa qua chế biến.
3. Mức thuế suất 10% áp dụng đối với hàng hoá, dịch vụ không quy định tại Khoản 1 và Khoản 2 Điều này.

### Điều 15. Điều kiện khấu trừ thuế giá trị gia tăng đầu vào
1. Có hoá đơn giá trị gia tăng hợp pháp của hàng hoá, dịch vụ mua vào.
2. Có chứng từ thanh toán không dùng tiền mặt đối với hàng hoá, dịch vụ mua vào từ 20 triệu đồng trở lên.`,
    category: 'thue',
    issued_date: '2025-12-10',
    effective_date: '2026-01-01',
    status: 'active',
    source_url: '#'
  },
  {
    id: 'tt-58-2026',
    decree_number: '58/2026/TT-BTC',
    title: 'Thông tư 58/2026/TT-BTC Kế toán doanh nghiệp siêu nhỏ',
    summary: 'Hướng dẫn chế độ kế toán cho doanh nghiệp siêu nhỏ, thay thế Thông tư 132/2018/TT-BTC.',
    content: `## QUY ĐỊNH CHUNG

### Điều 1. Đối tượng áp dụng
Thông tư áp dụng cho các doanh nghiệp siêu nhỏ theo quy định pháp luật về hỗ trợ doanh nghiệp nhỏ và vừa.

### Điều 2. Nguyên tắc kế toán
Doanh nghiệp siêu nhỏ nộp thuế TNDN theo phương pháp tỷ lệ % trên doanh thu không bắt buộc lập báo cáo tài chính, chỉ cần ghi chép sổ kế toán đơn giản để theo dõi doanh thu và nghĩa vụ thuế.`,
    category: 'thong-tu',
    issued_date: '2026-03-20',
    effective_date: '2026-07-01',
    status: 'active',
    source_url: '#'
  },
  {
    id: 'luat-quan-ly-thue-2025',
    decree_number: '68/2025/QH15',
    title: 'Luật Quản lý thuế 2025',
    summary: 'Luật mới cập nhật thay thế Luật QLT cũ, rút ngắn thời hạn khai bổ sung thuế và thúc đẩy chuyển đổi số.',
    content: `## QUY ĐỊNH CHÍNH

### Điều 47. Khai bổ sung hồ sơ khai thuế
1. Rút ngắn thời hạn khai bổ sung hồ sơ khai thuế từ 10 năm xuống còn 5 năm kể từ ngày hết hạn nộp hồ sơ khai thuế.

### Điều 90. Nguyên tắc lập, quản lý, sử dụng hóa đơn điện tử
Tất cả doanh nghiệp phải áp dụng hồ sơ điện tử, quản lý hóa đơn chứng từ qua hệ thống Cổng thông tin của Tổng cục Thuế. Hóa đơn điện tử phải được đăng ký và xác thực mã của cơ quan thuế trước khi gửi cho khách hàng.`,
    category: 'luat',
    issued_date: '2025-11-20',
    effective_date: '2026-07-01',
    status: 'active',
    source_url: '#'
  },
  {
    id: 'nd-254-2026',
    decree_number: '254/2026/NĐ-CP',
    title: 'Nghị định 254/2026/NĐ-CP Hóa đơn điện tử',
    summary: 'Quy định mới nhất về hóa đơn điện tử và chứng từ điện tử, bắt buộc nâng cấp hệ thống dữ liệu đồng bộ với cơ quan thuế.',
    content: `## QUY ĐỊNH HÓA ĐƠN ĐIỆN TỬ MỚI

### Điều 12. Áp dụng hóa đơn điện tử
Nghị định yêu cầu tất cả các hộ kinh doanh và doanh nghiệp áp dụng chuẩn định dạng dữ liệu hóa đơn XML mới nhất. 
Khoản 3: Bỏ hoàn toàn thuế khoán với hộ kinh doanh chậm nhất vào 31/12/2026. Mọi đơn vị phải xuất hóa đơn điện tử từ máy tính tiền.`,
    category: 'hoa-don',
    issued_date: '2026-05-15',
    effective_date: '2026-07-01',
    status: 'active',
    source_url: '#'
  },
  {
    id: 'vas-01',
    decree_number: 'QĐ 149/2001/QĐ-BTC',
    title: 'Chuẩn mực kế toán số 01 - Chuẩn mực chung (VAS 01)',
    summary: 'Các nguyên tắc kế toán cơ bản và yêu cầu cơ bản đối với kế toán.',
    content: `## CÁC NGUYÊN TẮC KẾ TOÁN CƠ BẢN

### Cơ sở dồn tích
Mọi nghiệp vụ kinh tế, tài chính của doanh nghiệp liên quan đến tài sản, nợ phải trả, nguồn vốn chủ sở hữu, doanh thu, chi phí phải được ghi sổ kế toán vào thời điểm phát sinh, không căn cứ vào thời điểm thực tế thu hoặc thực tế chi tiền.

### Hoạt động liên tục
Báo cáo tài chính phải được lập trên cơ sở giả định là doanh nghiệp đang hoạt động liên tục và sẽ tiếp tục hoạt động kinh doanh bình thường trong tương lai gần.

### Giá gốc
Tài sản phải được ghi nhận theo giá gốc. Giá gốc của tài sản được tính theo số tiền hoặc khoản tương đương tiền đã trả, phải trả hoặc tính theo giá trị hợp lý của tài sản đó vào thời điểm tài sản được ghi nhận.`,
    category: 'chuan-muc',
    issued_date: '2001-12-31',
    effective_date: '2002-01-01',
    status: 'active',
    source_url: '#'
  },
  {
    id: 'luat-ketoan-2015',
    decree_number: '88/2015/QH13',
    title: 'Luật Kế toán 2015 (Hợp nhất 41/VBHN-VPQH)',
    summary: 'Luật quy định về nội dung công tác kế toán, tổ chức bộ máy kế toán, người làm kế toán.',
    content: `## Chương I: NHỮNG QUY ĐỊNH CHUNG

### Điều 5. Nguyên tắc kế toán
1. Giá trị tài sản và nợ phải trả được ghi nhận ban đầu theo giá gốc. Sau ghi nhận ban đầu, đối với một số loại tài sản hoặc nợ phải trả mà giá trị biến động thường xuyên theo giá thị trường và giá trị của chúng có thể xác định lại một cách đáng tin cậy thì được ghi nhận theo giá trị hợp lý tại thời điểm cuối kỳ lập báo cáo tài chính.
2. Các quy định và phương pháp kế toán đã chọn phải được áp dụng nhất quán trong kỳ kế toán năm.`,
    category: 'luat',
    issued_date: '2015-11-20',
    effective_date: '2017-01-01',
    status: 'active',
    source_url: 'https://thuvienphapluat.vn/van-ban/Ke-toan-Kiem-toan/Luat-ke-toan-2015-298369.aspx'
  }
];
