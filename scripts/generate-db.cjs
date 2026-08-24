const fs = require('fs');
const path = require('path');

const tsFile = fs.readFileSync(path.join(__dirname, '../src/data/mock-decrees.ts'), 'utf8');

// Just a quick way to extract the array of objects without running TS
// Wait, I can just use the identical array in JS!
const decrees = [
  {
    id: 'tt-99-2025',
    decree_number: '99/2025/TT-BTC',
    title: 'Thông tư 99/2025/TT-BTC Chế độ kế toán doanh nghiệp (Mới)',
    summary: 'Thay thế Thông tư 200/2014/TT-BTC, thay đổi toàn diện chế độ kế toán doanh nghiệp, cấu trúc lại tài khoản và báo cáo tài chính.',
    category: 'thong-tu',
    issued_date: '2025-10-15',
    effective_date: '2026-01-01',
    status: 'active'
  },
  {
    id: 'luat-thue-tndn-2025',
    decree_number: '70/2025/QH15',
    title: 'Luật Thuế Thu nhập doanh nghiệp 2025',
    summary: 'Quy định các khoản chi phí được trừ và không được trừ, thuế suất ưu đãi mới áp dụng từ 2026.',
    category: 'thue',
    issued_date: '2025-12-10',
    effective_date: '2026-01-01',
    status: 'active'
  },
  {
    id: 'luat-thue-gtgt-2025',
    decree_number: '71/2025/QH15',
    title: 'Luật Thuế Giá trị gia tăng 2025',
    summary: 'Cập nhật đối tượng không chịu thuế GTGT và thuế suất 0%, 5%, 10% áp dụng cho năm 2026.',
    category: 'thue',
    issued_date: '2025-12-10',
    effective_date: '2026-01-01',
    status: 'active'
  },
  {
    id: 'tt-58-2026',
    decree_number: '58/2026/TT-BTC',
    title: 'Thông tư 58/2026/TT-BTC Kế toán doanh nghiệp siêu nhỏ',
    summary: 'Hướng dẫn chế độ kế toán cho doanh nghiệp siêu nhỏ, thay thế Thông tư 132/2018/TT-BTC.',
    category: 'thong-tu',
    issued_date: '2026-03-20',
    effective_date: '2026-07-01',
    status: 'active'
  },
  {
    id: 'luat-quan-ly-thue-2025',
    decree_number: '68/2025/QH15',
    title: 'Luật Quản lý thuế 2025',
    summary: 'Luật mới cập nhật thay thế Luật QLT cũ, rút ngắn thời hạn khai bổ sung thuế và thúc đẩy chuyển đổi số.',
    category: 'luat',
    issued_date: '2025-11-20',
    effective_date: '2026-07-01',
    status: 'active'
  },
  {
    id: 'nd-254-2026',
    decree_number: '254/2026/NĐ-CP',
    title: 'Nghị định 254/2026/NĐ-CP Hóa đơn điện tử',
    summary: 'Quy định mới nhất về hóa đơn điện tử và chứng từ điện tử, bắt buộc nâng cấp hệ thống dữ liệu đồng bộ với cơ quan thuế.',
    category: 'hoa-don',
    issued_date: '2026-05-15',
    effective_date: '2026-07-01',
    status: 'active'
  },
  {
    id: 'vas-01',
    decree_number: 'QĐ 149/2001/QĐ-BTC',
    title: 'Chuẩn mực kế toán số 01 - Chuẩn mực chung (VAS 01)',
    summary: 'Các nguyên tắc kế toán cơ bản và yêu cầu cơ bản đối với kế toán.',
    category: 'chuan-muc',
    issued_date: '2001-12-31',
    effective_date: '2002-01-01',
    status: 'active'
  },
  {
    id: 'luat-ketoan-2015',
    decree_number: '88/2015/QH13',
    title: 'Luật Kế toán 2015 (Hợp nhất 41/VBHN-VPQH)',
    summary: 'Luật quy định về nội dung công tác kế toán, tổ chức bộ máy kế toán, người làm kế toán.',
    category: 'luat',
    issued_date: '2015-11-20',
    effective_date: '2017-01-01',
    status: 'active'
  },
  {
    id: 'tt-200-2014',
    decree_number: '200/2014/TT-BTC',
    title: 'Thông tư 200/2014/TT-BTC Chế độ kế toán doanh nghiệp',
    summary: 'Chế độ kế toán doanh nghiệp cơ bản áp dụng trước khi có Thông tư 99.',
    category: 'thong-tu',
    issued_date: '2014-12-22',
    effective_date: '2015-01-01',
    status: 'expired'
  },
  {
    id: 'tt-133-2016',
    decree_number: '133/2016/TT-BTC',
    title: 'Thông tư 133/2016/TT-BTC Chế độ kế toán DNNVV',
    summary: 'Hướng dẫn chế độ kế toán cho doanh nghiệp nhỏ và vừa.',
    category: 'thong-tu',
    issued_date: '2016-08-26',
    effective_date: '2017-01-01',
    status: 'expired'
  },
  {
    id: 'nd-123-2020',
    decree_number: '123/2020/NĐ-CP',
    title: 'Nghị định 123/2020/NĐ-CP Quy định về hóa đơn',
    summary: 'Quy định cơ bản về hóa đơn, chứng từ (Bị sửa đổi bởi NĐ 254).',
    category: 'hoa-don',
    issued_date: '2020-10-19',
    effective_date: '2022-07-01',
    status: 'amended'
  },
  {
    id: 'tt-78-2021',
    decree_number: '78/2021/TT-BTC',
    title: 'Thông tư 78/2021/TT-BTC Hướng dẫn HĐĐT',
    summary: 'Hướng dẫn thực hiện hóa đơn điện tử.',
    category: 'hoa-don',
    issued_date: '2021-09-17',
    effective_date: '2022-07-01',
    status: 'amended'
  },
  {
    id: 'luat-thue-tncn-2007',
    decree_number: '04/2007/QH12',
    title: 'Luật Thuế thu nhập cá nhân 2007 (sửa đổi bổ sung)',
    summary: 'Quy định về các khoản thu nhập chịu thuế, giảm trừ gia cảnh.',
    category: 'thue',
    issued_date: '2007-11-21',
    effective_date: '2009-01-01',
    status: 'active'
  },
  {
    id: 'nd-15-2022',
    decree_number: '15/2022/NĐ-CP',
    title: 'Nghị định 15/2022/NĐ-CP Giảm thuế GTGT',
    summary: 'Chính sách miễn, giảm thuế theo Nghị quyết 43/2022/QH15.',
    category: 'thue',
    issued_date: '2022-01-28',
    effective_date: '2022-02-01',
    status: 'expired'
  },
  {
    id: 'tt-119-2014',
    decree_number: '119/2014/TT-BTC',
    title: 'Thông tư 119/2014/TT-BTC Cải cách thủ tục hành chính thuế',
    summary: 'Sửa đổi các thông tư để cải cách, đơn giản hóa thủ tục hành chính thuế.',
    category: 'thong-tu',
    issued_date: '2014-08-25',
    effective_date: '2014-09-01',
    status: 'active'
  },
  {
    id: 'tt-156-2013',
    decree_number: '156/2013/TT-BTC',
    title: 'Thông tư 156/2013/TT-BTC Hướng dẫn Luật Quản lý thuế',
    summary: 'Hướng dẫn thi hành một số điều của Luật Quản lý thuế.',
    category: 'thong-tu',
    issued_date: '2013-11-06',
    effective_date: '2013-12-20',
    status: 'amended'
  },
  {
    id: 'vas-02',
    decree_number: 'QĐ 149/2001/QĐ-BTC',
    title: 'Chuẩn mực kế toán số 02 - Hàng tồn kho (VAS 02)',
    summary: 'Phương pháp kế toán hàng tồn kho, xác định giá gốc và giá trị thuần có thể thực hiện được.',
    category: 'chuan-muc',
    issued_date: '2001-12-31',
    effective_date: '2002-01-01',
    status: 'active'
  },
  {
    id: 'vas-03',
    decree_number: 'QĐ 149/2001/QĐ-BTC',
    title: 'Chuẩn mực kế toán số 03 - Tài sản cố định hữu hình (VAS 03)',
    summary: 'Ghi nhận và đánh giá tài sản cố định hữu hình.',
    category: 'chuan-muc',
    issued_date: '2001-12-31',
    effective_date: '2002-01-01',
    status: 'active'
  },
  {
    id: 'vas-04',
    decree_number: 'QĐ 149/2001/QĐ-BTC',
    title: 'Chuẩn mực kế toán số 04 - Tài sản cố định vô hình (VAS 04)',
    summary: 'Ghi nhận và đánh giá tài sản cố định vô hình.',
    category: 'chuan-muc',
    issued_date: '2001-12-31',
    effective_date: '2002-01-01',
    status: 'active'
  },
  {
    id: 'vas-14',
    decree_number: 'QĐ 149/2001/QĐ-BTC',
    title: 'Chuẩn mực kế toán số 14 - Doanh thu và thu nhập khác (VAS 14)',
    summary: 'Nguyên tắc và phương pháp ghi nhận doanh thu.',
    category: 'chuan-muc',
    issued_date: '2001-12-31',
    effective_date: '2002-01-01',
    status: 'active'
  },
  {
    id: 'tt-45-2013',
    decree_number: '45/2013/TT-BTC',
    title: 'Thông tư 45/2013/TT-BTC Hướng dẫn chế độ quản lý, trích khấu hao TSCĐ',
    summary: 'Quy định chi tiết về quản lý, sử dụng và trích khấu hao tài sản cố định.',
    category: 'thong-tu',
    issued_date: '2013-04-25',
    effective_date: '2013-06-10',
    status: 'active'
  },
  {
    id: 'tt-48-2019',
    decree_number: '48/2019/TT-BTC',
    title: 'Thông tư 48/2019/TT-BTC Hướng dẫn trích lập dự phòng',
    summary: 'Hướng dẫn việc trích lập và xử lý các khoản dự phòng giảm giá hàng tồn kho, tổn thất các khoản đầu tư, nợ phải thu khó đòi.',
    category: 'thong-tu',
    issued_date: '2019-08-08',
    effective_date: '2019-10-10',
    status: 'active'
  }
];

function escapeCSV(str) {
  if (!str) return '""';
  return '"' + str.replace(/"/g, '""') + '"';
}

const csvHeader = 'ID,Số hiệu,Tên văn bản,Tóm tắt,Phân loại,Ngày ban hành,Ngày hiệu lực,Trạng thái\\n';
const csvRows = decrees.map(d => {
  return [d.id, d.decree_number, d.title, d.summary, d.category, d.issued_date, d.effective_date, d.status].map(escapeCSV).join(',');
}).join('\\n');

fs.writeFileSync(path.join(__dirname, '../public/thu-vien-phap-luat.csv'), csvHeader + csvRows);
console.log('Done generating DB with ' + decrees.length + ' records.');
