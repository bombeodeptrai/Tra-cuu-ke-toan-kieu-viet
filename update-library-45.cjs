const fs = require('fs');

const decrees = JSON.parse(fs.readFileSync('public/data/decrees.json', 'utf8'));

const newDocs = [
  {
    id: 'nd-125-2020',
    decree_number: '125/2020/NĐ-CP',
    title: 'Nghị định 125/2020/NĐ-CP xử phạt vi phạm hành chính về thuế, hóa đơn',
    summary: 'Nghị định quy định toàn diện về xử phạt vi phạm hành chính trong lĩnh vực thuế, hóa đơn, mức phạt khai sai 20%, trốn thuế từ 1-3 lần và phạt xuất hóa đơn sai thời điểm.',
    category: 'thue',
    issued_date: '2020-10-19',
    effective_date: '2020-12-05',
    status: 'active',
    source_url: 'https://congbao.chinhphu.vn/van-ban/nghi-dinh-so-125-2020-nd-cp-33519.htm',
    pdf_url: '',
    content_url: '/data/content/nd-125-2020.md'
  },
  {
    id: 'tt-96-2015',
    decree_number: '96/2015/TT-BTC',
    title: 'Thông tư 96/2015/TT-BTC hướng dẫn Thuế TNDN và Chi phí được trừ / Không được trừ',
    summary: 'Thông tư cốt lõi hướng dẫn xác định thu nhập chịu thuế TNDN, các điều kiện chi phí được trừ (xe ô tô >1.6 tỷ, hóa đơn >20tr chuyển khoản, lãi vay...) và các khoản chi bị loại.',
    category: 'thue',
    issued_date: '2015-06-22',
    effective_date: '2015-08-06',
    status: 'active',
    source_url: 'https://congbao.chinhphu.vn/van-ban/thong-tu-so-96-2015-tt-btc-19412.htm',
    pdf_url: '',
    content_url: '/data/content/tt-96-2015.md'
  },
  {
    id: 'tt-80-2021',
    decree_number: '80/2021/TT-BTC',
    title: 'Thông tư 80/2021/TT-BTC hướng dẫn thi hành Luật Quản lý thuế toàn diện',
    summary: 'Thông tư hướng dẫn chi tiết về phân bổ nghĩa vụ thuế GTGT/TNDN cho chi nhánh ngoại tỉnh, quy trình lập hồ sơ hoàn thuế GTGT 06 ngày và thủ tục miễn giảm thuế.',
    category: 'thue',
    issued_date: '2021-09-29',
    effective_date: '2022-01-01',
    status: 'active',
    source_url: 'https://congbao.chinhphu.vn/van-ban/thong-tu-so-80-2021-tt-btc-35221.htm',
    pdf_url: '',
    content_url: '/data/content/tt-80-2021.md'
  },
  {
    id: 'nd-73-2024',
    decree_number: '73/2024/NĐ-CP',
    title: 'Nghị định 73/2024/NĐ-CP quy định mức lương cơ sở 2,34 triệu (áp dụng trần đóng BHXH)',
    summary: 'Nghị định điều chỉnh mức lương cơ sở lên 2.340.000đ/tháng từ 01/07/2024, nâng mức lương tối đa đóng BHXH, BHYT bắt buộc lên 46.800.000đ/tháng.',
    category: 'thong-tu',
    issued_date: '2024-06-30',
    effective_date: '2024-07-01',
    status: 'active',
    source_url: 'https://congbao.chinhphu.vn/van-ban/nghi-dinh-so-73-2024-nd-cp-43512.htm',
    pdf_url: '',
    content_url: '/data/content/nd-73-2024.md'
  },
  {
    id: 'nd-64-2024',
    decree_number: '64/2024/NĐ-CP',
    title: 'Nghị định 64/2024/NĐ-CP gia hạn thời hạn nộp thuế GTGT, TNDN, TNCN và tiền thuê đất',
    summary: 'Chính sách gia hạn nộp thuế GTGT (3-5 tháng), thuế TNDN quý 2 và 50% tiền thuê đất năm 2024 giúp tối ưu hóa dòng tiền lưu động cho doanh nghiệp.',
    category: 'thue',
    issued_date: '2024-06-17',
    effective_date: '2024-06-17',
    status: 'active',
    source_url: 'https://congbao.chinhphu.vn/van-ban/nghi-dinh-so-64-2024-nd-cp-43480.htm',
    pdf_url: '',
    content_url: '/data/content/nd-64-2024.md'
  },
  {
    id: 'luat-41-2024',
    decree_number: '41/2024/QH15',
    title: 'Luật Bảo hiểm xã hội số 41/2024/QH15 (Có hiệu lực từ 01/07/2025)',
    summary: 'Luật BHXH mới giảm điều kiện hưởng lương hưu xuống 15 năm đóng BHXH, bổ sung chế tài phạt 0.03%/ngày và phong tỏa tài khoản doanh nghiệp trốn đóng BHXH.',
    category: 'luat',
    issued_date: '2024-06-29',
    effective_date: '2025-07-01',
    status: 'active',
    source_url: 'https://congbao.chinhphu.vn/van-ban/luat-bao-hiem-xa-hoi-so-41-2024-qh15-43505.htm',
    pdf_url: '',
    content_url: '/data/content/luat-41-2024.md'
  }
];

newDocs.forEach(doc => {
  if (!decrees.some(d => d.id === doc.id)) {
    decrees.push(doc);
  }
});

fs.writeFileSync('public/data/decrees.json', JSON.stringify(decrees, null, 2), 'utf8');

const tsContent = `import { Decree } from '@/types/decree';\n\nexport const INITIAL_DECREES: Decree[] = ${JSON.stringify(decrees, null, 2)};\n`;
fs.writeFileSync('src/data/initial-decrees.ts', tsContent, 'utf8');

console.log('Successfully updated total decrees in library to:', decrees.length);