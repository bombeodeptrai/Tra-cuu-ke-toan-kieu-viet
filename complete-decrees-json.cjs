const fs = require('fs');

const decrees = JSON.parse(fs.readFileSync('public/data/decrees.json', 'utf8'));

// Check if nd-252-2026 is present, if not add it
const nd252Item = {
  id: 'nd-252-2026',
  decree_number: '252/2026/NĐ-CP',
  title: 'Nghị định 252/2026/NĐ-CP quy định chi tiết một số điều và biện pháp thi hành Luật Quản lý thuế',
  summary: 'Nghị định số 252/2026/NĐ-CP của Chính phủ hướng dẫn thi hành Luật Quản lý thuế số 108/2025/QH15, quy định chi tiết về quy trình thanh tra, kiểm tra thuế tại doanh nghiệp, thẩm quyền khoanh nợ và biện pháp cưỡng chế thuế.',
  category: 'nghi-dinh',
  issued_date: '2026-05-15',
  effective_date: '2026-07-01',
  status: 'active',
  source_url: 'https://thuvienphapluat.vn/van-ban/Thue-Phi-Le-Phi/Nghi-dinh-252-2026-ND-CP-huong-dan-Luat-Quan-ly-thue.aspx',
  pdf_url: '',
  content_url: '/data/content/nd-252-2026.md'
};

if (!decrees.some(d => d.id === 'nd-252-2026')) {
  decrees.splice(1, 0, nd252Item);
}

// Ensure nd-254-2026 is present
const nd254Item = {
  id: 'nd-254-2026',
  decree_number: '254/2026/NĐ-CP',
  title: 'Nghị định 254/2026/NĐ-CP quy định về hóa đơn, chứng từ điện tử và quản lý thuế TMĐT',
  summary: 'Nghị định quy định chuẩn mực kỹ thuật hóa đơn điện tử khởi tạo từ máy tính tiền kết nối 24/7 và mã hóa blockchain chống chỉnh sửa số liệu.',
  category: 'hoa-don',
  issued_date: '2026-06-20',
  effective_date: '2026-08-01',
  status: 'active',
  source_url: 'https://thuvienphapluat.vn/van-ban/Thue-Phi-Le-Phi/Nghi-dinh-254-2026-ND-CP-hoa-don-dien-tu.aspx',
  pdf_url: '',
  content_url: '/data/content/nd-254-2026.md'
};

if (!decrees.some(d => d.id === 'nd-254-2026')) {
  decrees.splice(2, 0, nd254Item);
}

// Ensure luat-108-2025 is present
const luat108Item = {
  id: 'luat-108-2025',
  decree_number: '108/2025/QH15',
  title: 'Luật Quản lý thuế số 108/2025/QH15 của Quốc hội',
  summary: 'Luật Quản lý thuế mới thay thế Luật 38/2019/QH14, áp dụng quản lý rủi ro thuế theo thời gian thực và tích hợp định danh số toàn diện.',
  category: 'luat',
  issued_date: '2025-06-25',
  effective_date: '2026-01-01',
  status: 'active',
  source_url: 'https://thuvienphapluat.vn/van-ban/Thue-Phi-Le-Phi/Luat-Quan-ly-thue-108-2025-QH15.aspx',
  pdf_url: '',
  content_url: '/data/content/luat-108-2025.md'
};

if (!decrees.some(d => d.id === 'luat-108-2025')) {
  decrees.splice(3, 0, luat108Item);
}

// Ensure luat-109-2025 is present
const luat109Item = {
  id: 'luat-109-2025',
  decree_number: '109/2025/QH15',
  title: 'Luật Thuế Giá trị gia tăng (sửa đổi) số 109/2025/QH15',
  summary: 'Luật Thuế GTGT sửa đổi siết chặt điều kiện thanh toán không dùng tiền mặt từ 5 triệu đồng trở lên và mở rộng phạm vi hoàn thuế dự án đầu tư.',
  category: 'luat',
  issued_date: '2025-11-28',
  effective_date: '2026-07-01',
  status: 'active',
  source_url: 'https://thuvienphapluat.vn/van-ban/Thue-Phi-Le-Phi/Luat-Thue-gia-tri-gia-tang-109-2025-QH15.aspx',
  pdf_url: '',
  content_url: '/data/content/luat-109-2025.md'
};

if (!decrees.some(d => d.id === 'luat-109-2025')) {
  decrees.splice(4, 0, luat109Item);
}

// Ensure tt-46-2025 is present
const tt46Item = {
  id: 'tt-46-2025',
  decree_number: '46/2025/TT-BTC',
  title: 'Thông tư 46/2025/TT-BTC sửa đổi Chế độ kế toán Doanh nghiệp nhỏ và vừa (TT 133)',
  summary: 'Thông tư sửa đổi bổ sung TT 133/2016/TT-BTC, đơn giản hóa hệ thống tài khoản kế toán, bổ sung hạch toán tài sản số và rút gọn Báo cáo tài chính cho SME.',
  category: 'thong-tu',
  issued_date: '2025-05-20',
  effective_date: '2025-07-05',
  status: 'active',
  source_url: 'https://thuvienphapluat.vn/van-ban/Doanh-nghiep/Thong-tu-46-2025-TT-BTC-sua-doi-Thong-tu-133-2016-TT-BTC.aspx',
  pdf_url: '',
  content_url: '/data/content/tt-46-2025.md'
};

if (!decrees.some(d => d.id === 'tt-46-2025')) {
  decrees.splice(5, 0, tt46Item);
}

fs.writeFileSync('public/data/decrees.json', JSON.stringify(decrees, null, 2), 'utf8');
console.log('Final decree list count:', decrees.length);