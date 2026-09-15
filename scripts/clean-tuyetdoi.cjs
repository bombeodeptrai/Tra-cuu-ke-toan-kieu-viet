const fs = require('fs');
const path = require('path');

const filePath = path.resolve('src/data/tax-audit-checklist.ts');
let content = fs.readFileSync(filePath, 'utf8');

content = content.replace(
  `tuân thủ tuyệt đối giới hạn trần 30% của tổng lợi nhuận thuần từ hoạt động kinh doanh trước khi trừ lãi vay và trước khi khấu hao (EBITDA).`,
  `được tính toán và khống chế theo mức trần 30% EBITDA theo Khoản 3 Điều 16 Nghị định 132/2020/NĐ-CP, lập phụ lục xác định chi phí lãi vay không được trừ chuyển kỳ sau.`
);

content = content.replace(
  `tuân thủ tuyệt đối nguyên tắc phù hợp giữa doanh thu bán đá và giá vốn.`,
  `đáp ứng nguyên tắc phù hợp giữa doanh thu bán đá và chi phí giá vốn theo VAS 01.`
);

content = content.replace(
  `Tệp 3 (Tài liệu nội bộ, tuyệt đối không xuất trình).`,
  `Tệp 3 (Tài liệu dự thảo nội bộ, không thuộc danh mục chứng từ kế toán chính thức yêu cầu theo quyết định).`
);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Cleaned final 3 instances of tuân thủ tuyệt đối.');
