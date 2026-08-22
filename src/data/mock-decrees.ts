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
Thông tư này hướng dẫn kế toán áp dụng đối với các doanh nghiệp thuộc mọi lĩnh vực, mọi thành phần kinh tế.

### Điều 2. Những thay đổi trọng yếu so với Thông tư 200
1. Cấu trúc lại hệ thống tài khoản kế toán: Bổ sung tài khoản tài sản sinh học, tài khoản phải trả cổ tức.
2. Đổi tên "Bảng cân đối kế toán" thành "Báo cáo tình hình tài chính".
3. Doanh nghiệp được tự thiết kế mẫu chứng từ, sổ sách tuân thủ Luật Kế toán thay vì bắt buộc dùng biểu mẫu cố định.`,
    category: 'thong-tu',
    issued_date: '2025-10-15',
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

### Điều 1. Rút ngắn thời hạn
Rút ngắn thời hạn khai bổ sung hồ sơ khai thuế từ 10 năm xuống còn 5 năm kể từ ngày hết hạn nộp hồ sơ khai thuế.

### Điều 2. Chuyển đổi số
Tất cả doanh nghiệp phải áp dụng hồ sơ điện tử, quản lý hóa đơn chứng từ qua hệ thống Cổng thông tin của Tổng cục Thuế.`,
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

Nghị định yêu cầu tất cả các hộ kinh doanh và doanh nghiệp áp dụng chuẩn định dạng dữ liệu hóa đơn mới. Bỏ hoàn toàn thuế khoán với hộ kinh doanh chậm nhất vào cuối 2026.`,
    category: 'hoa-don',
    issued_date: '2026-05-15',
    effective_date: '2026-07-01',
    status: 'active',
    source_url: '#'
  },
  {
    id: 'luat-ketoan-2015',
    decree_number: '88/2015/QH13',
    title: 'Luật Kế toán 2015 (Hợp nhất 41/VBHN-VPQH)',
    summary: 'Luật quy định về nội dung công tác kế toán, tổ chức bộ máy kế toán, người làm kế toán (Bản hợp nhất mới nhất).',
    content: `## Chương I: NHỮNG QUY ĐỊNH CHUNG
Được áp dụng liên tục cùng các văn bản hướng dẫn bổ sung mới.`,
    category: 'luat',
    issued_date: '2015-11-20',
    effective_date: '2017-01-01',
    status: 'active',
    source_url: 'https://thuvienphapluat.vn/van-ban/Ke-toan-Kiem-toan/Luat-ke-toan-2015-298369.aspx'
  },
  {
    id: 'tt-200-2014',
    decree_number: '200/2014/TT-BTC',
    title: 'Thông tư 200/2014/TT-BTC Chế độ kế toán doanh nghiệp',
    summary: 'Đã bị thay thế bởi Thông tư 99/2025/TT-BTC.',
    content: `## CHƯƠNG I: QUY ĐỊNH CHUNG
Thông tư này đã hết hiệu lực và được thay thế bởi Thông tư 99/2025/TT-BTC.`,
    category: 'thong-tu',
    issued_date: '2014-12-22',
    effective_date: '2015-01-01',
    status: 'expired',
    source_url: 'https://thuvienphapluat.vn/van-ban/Ke-toan-Kiem-toan/Thong-tu-200-2014-TT-BTC-Huong-dan-Che-do-ke-toan-doanh-nghiep-262452.aspx'
  },
  {
    id: 'tt-133-2016',
    decree_number: '133/2016/TT-BTC',
    title: 'Thông tư 133/2016/TT-BTC Chế độ kế toán DNNVV',
    summary: 'Đang chuẩn bị hết hiệu lực và được thay thế dần.',
    content: `## QUY ĐỊNH CHUNG
Áp dụng cho doanh nghiệp nhỏ và vừa.`,
    category: 'thong-tu',
    issued_date: '2016-08-26',
    effective_date: '2017-01-01',
    status: 'expired',
    source_url: 'https://thuvienphapluat.vn/van-ban/Ke-toan-Kiem-toan/Thong-tu-133-2016-TT-BTC-che-do-ke-toan-doanh-nghiep-nho-va-vua-322040.aspx'
  },
  {
    id: 'nd-123-2020',
    decree_number: '123/2020/NĐ-CP',
    title: 'Nghị định 123/2020/NĐ-CP Quy định về hóa đơn',
    summary: 'Đã được bổ sung bởi Nghị định 254/2026/NĐ-CP.',
    content: `## CHƯƠNG I: QUY ĐỊNH CHUNG
Quy định về hóa đơn chứng từ.`,
    category: 'hoa-don',
    issued_date: '2020-10-19',
    effective_date: '2020-10-19',
    status: 'amended',
    source_url: 'https://thuvienphapluat.vn/van-ban/Thue-Phi-Le-Phi/Nghi-dinh-123-2020-ND-CP-Quy-dinh-ve-hoa-don-chung-tu-454942.aspx'
  },
  {
    id: 'tt-78-2021',
    decree_number: '78/2021/TT-BTC',
    title: 'Thông tư 78/2021/TT-BTC Hướng dẫn HĐĐT',
    summary: 'Hướng dẫn thực hiện hóa đơn điện tử.',
    content: `## QUY ĐỊNH CHUNG
Hướng dẫn hóa đơn điện tử.`,
    category: 'hoa-don',
    issued_date: '2021-09-17',
    effective_date: '2022-07-01',
    status: 'amended',
    source_url: 'https://thuvienphapluat.vn/van-ban/Thue-Phi-Le-Phi/Thong-tu-78-2021-TT-BTC-huong-dan-thuc-hien-Luat-Quan-ly-thue-Nghi-dinh-123-2020-ND-CP-476717.aspx'
  }
];
