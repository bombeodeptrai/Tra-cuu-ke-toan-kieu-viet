const fs = require('fs');
const path = require('path');

const filePath = path.resolve('src/data/tax-audit-checklist.ts');
let content = fs.readFileSync(filePath, 'utf8');

const replacements = [
  {
    target: `Khẳng định việc trích lập dự phòng nợ phải thu khó đòi tuân thủ tuyệt đối Điều 5 Thông tư 48/2019/TT-BTC, dựa trên thực tế các công trình giao thông thủy lợi tại Gia Lai bị chậm thanh toán vốn đầu tư công.`,
    replace: `Khẳng định việc trích lập dự phòng nợ phải thu khó đòi đáp ứng đầy đủ các điều kiện theo Điều 5 Thông tư 48/2019/TT-BTC (có biên bản đối chiếu công nợ, công văn đôn đốc nợ và thời gian quá hạn xác thực theo hợp đồng).`
  },
  {
    target: `Căn cứ Nghị định 70/2025/NĐ-CP, Công ty Cổ phần Kiểu Việt đã triển khai áp dụng hệ thống chứng từ điện tử khấu trừ thuế TNCN và sử dụng chữ ký số hợp lệ cho toàn bộ hóa đơn, chứng từ phát hành, đảm bảo tuân thủ tuyệt đối quy định công nghệ mới.`,
    replace: `Căn cứ Nghị định 70/2025/NĐ-CP, doanh nghiệp rà soát việc cấp chứng từ khấu trừ thuế TNCN điện tử và chữ ký số hợp lệ cho các chứng từ phát hành, đảm bảo hồ sơ khấu trừ đầy đủ căn cứ khi quyết toán.`
  },
  {
    target: `Lập luận rằng các biên bản nghiệm thu khối lượng A-B và phiếu cân trạm cân mỏ đá được ký số bởi người có thẩm quyền của Công ty Cổ phần Kiểu Việt và chủ đầu tư có giá trị ràng buộc pháp lý tuyệt đối theo đúng Luật Giao dịch điện tử, không thể bị phủ nhận chỉ vì không in ấn bản giấy có dấu mộc đỏ trực tiếp.`,
    replace: `Xuất trình các biên bản nghiệm thu khối lượng A-B và phiếu cân trạm cân có chữ ký số hợp lệ của các bên theo Luật Giao dịch điện tử 2023, chứng minh tính toàn vẹn và giá trị pháp lý của chứng từ điện tử khi làm việc với đoàn kiểm tra.`
  },
  {
    target: `Yêu cầu đoàn thanh tra xem xét toàn diện bộ hồ sơ quyết toán vốn đầu tư dự án hoàn thành đã được cấp thẩm quyền phê duyệt, khẳng định tình hình tài chính của công ty hoàn toàn minh bạch, tuân thủ tuyệt đối pháp luật thuế và kế toán hiện hành.`,
    replace: `Xuất trình bộ hồ sơ quyết toán vốn đầu tư dự án hoàn thành đã được cấp có thẩm quyền phê duyệt theo Thông tư 108/2025/TT-BTC làm căn cứ đối chiếu số liệu chi phí, doanh thu và nghĩa vụ tài chính của công trình.`
  },
  {
    target: `Lập luận chặt chẽ dựa trên Điều 27 Thông tư 133/2016/TT-BTC: Công ty Cổ phần Kiểu Việt thực hiện hạch toán chi phí sản xuất kinh doanh dở dang trên TK 154 tuân thủ tuyệt đối nguyên tắc hạch toán chi tiết theo từng công trình giao thông, thủy lợi, có sự đối chiếu khớp đúng với dự toán thầu và hồ sơ nghiệm thu A-B.`,
    replace: `Viện dẫn Điều 27 Thông tư 133/2016/TT-BTC: Đối với doanh nghiệp áp dụng chế độ kế toán vừa và nhỏ, chi phí sản xuất xây lắp được hạch toán trực tiếp vào TK 154 theo từng công trình/hạng mục, có bảng phân bổ và đối chiếu với hồ sơ nghiệm thu A-B thay vì mở các tài khoản loại 6.`
  },
  {
    target: `Lập luận rằng toàn bộ hệ thống hóa đơn, chứng từ, sổ sách kế toán của Công ty Cổ phần Kiểu Việt đều được lưu trữ đầy đủ dưới cả hai định dạng pháp lý là file XML gốc có chữ ký số hợp lệ và bản thể hiện PDF tuân thủ tuyệt đối Điều 9 Nghị định 174/2016/NĐ-CP.`,
    replace: `Xuất trình quy chế quản lý dữ liệu kế toán điện tử và hệ thống lưu trữ đồng thời file XML gốc có chữ ký số hợp lệ và bản thể hiện PDF theo Điều 9 Nghị định 174/2016/NĐ-CP, giải trình phương thức tra cứu cho đoàn kiểm tra.`
  },
  {
    target: `Bước 3: Kiểm tra sự phù hợp tuyệt đối giữa doanh thu khai thác mỏ đá kê khai thuế GTGT hàng tháng với doanh thu hạch toán trên Sổ cái TK 511 và Báo cáo tài chính.`,
    replace: `Bước 3: Đối chiếu doanh thu khai thác mỏ đá kê khai thuế GTGT hàng tháng với doanh thu trên Sổ cái TK 511, lập bảng giải trình các khoản chênh lệch thời điểm phát sinh (nếu có).`
  },
  {
    target: `Trình bày biên bản kiểm kê kho cuối năm có sự tham gia chứng kiến của các bên, khẳng định không có việc giấu sản lượng hay trốn thuế tài nguyên, bảo vệ tuyệt đối tính đúng đắn của Báo cáo tài chính và Tờ khai quyết toán thuế.`,
    replace: `Trình bày biên bản kiểm kê kho cuối kỳ có đầy đủ chữ ký của hội đồng kiểm kê, giải trình chi tiết nguyên nhân các khoản chênh lệch thừa/thiếu (nếu có) tại mỏ đá và xưởng gỗ theo đúng nguyên tắc Chuẩn mực kế toán VAS 02.`
  },
  {
    target: `Trường hợp có nhân sự có mức lương cao vượt trần 46,8 triệu đồng, doanh nghiệp đã tách bạch rõ ràng phần đóng BHXH kịch trần và phần thu nhập không tính đóng BHXH, tuân thủ tuyệt đối quy định tại Luật Bảo hiểm xã hội và các văn bản hướng dẫn thi hành.`,
    replace: `Trường hợp có nhân sự có mức lương vượt trần 46,8 triệu đồng (20 lần mức lương cơ sở 2,34 triệu theo NĐ 73/2024), kế toán kiểm tra lại bảng lương để đảm bảo chỉ trích đóng BHXH/BHYT tối đa theo mức trần quy định, không trích vượt vào chi phí.`
  }
];

let replacedCount = 0;
for (const item of replacements) {
  if (content.includes(item.target)) {
    content = content.replace(item.target, item.replace);
    replacedCount++;
  } else {
    console.warn('Target not found:', item.target.slice(0, 40));
  }
}

fs.writeFileSync(filePath, content, 'utf8');
console.log(`Successfully replaced ${replacedCount}/${replacements.length} items.`);
