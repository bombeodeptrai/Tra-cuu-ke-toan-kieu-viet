const fs = require('fs');
const path = require('path');

const filePath = path.resolve('src/data/tax-audit-checklist.ts');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Fix line 79: B1 vs 511 vs B02-DN
content = content.replace(
  `"Bước 1: Đối chiếu tổng doanh thu trên Sổ cái TK 511 với Tờ khai quyết toán thuế TNDN (chỉ tiêu B1) và Báo cáo tài chính, đảm bảo khớp đúng tuyệt đối từng đồng."`,
  `"Bước 1: Đối chiếu doanh thu trên Sổ cái TK 511 với Mã số 01 trên Báo cáo kết quả hoạt động kinh doanh (Mẫu B02-DN), sau đó lập bảng nối sang Tờ khai quyết toán thuế TNDN (chỉ tiêu A1: Tổng lợi nhuận kế toán trước thuế; các chỉ tiêu B1–B14: Các khoản điều chỉnh tăng thu nhập chịu thuế), làm rõ các khoản chênh lệch thời điểm ghi nhận nếu có."`
);

// 2. Fix line 320: tuân thủ tuyệt đối
content = content.replace(
  `"Khẳng định việc trích lập dự phòng nợ phải thu khó đòi tuân thủ tuyệt đối Điều 5 Thông tư 48/2019/TT-BTC..."`,
  `"Khẳng định việc trích lập dự phòng nợ phải thu khó đòi đáp ứng đầy đủ các điều kiện theo Điều 5 Thông tư 48/2019/TT-BTC (có biên bản đối chiếu công nợ, chứng từ nhắc nợ và thời gian quá hạn xác thực theo hợp đồng kinh tế)..."`
);

// 3. Fix line 633: Công ty Kiểu Việt đã triển khai áp dụng
content = content.replace(
  `"Căn cứ Nghị định 70/2025/NĐ-CP, Công ty Cổ phần Kiểu Việt đã triển khai áp dụng hệ thống chứng từ điện tử..."`,
  `"Căn cứ Nghị định 70/2025/NĐ-CP, doanh nghiệp cần rà soát việc cấp chứng từ khấu trừ thuế TNCN điện tử và liên thông dữ liệu VNeID phục vụ quyết toán thuế theo đúng lộ trình quy định..."`
);

// 4. Fix line 673: Lập luận rằng các biên bản nghiệm thu
content = content.replace(
  `"Lập luận rằng các biên bản nghiệm thu khối lượng A-B và phiếu cân trạm cân mỏ đá được ký số bởi người đại diện theo pháp luật..."`,
  `"Xuất trình các biên bản nghiệm thu khối lượng A-B và phiếu cân trạm cân mỏ đá có chữ ký số hợp lệ của các bên theo Luật Giao dịch điện tử 2023, chứng minh tính toàn vẹn và giá trị pháp lý của chứng từ điện tử..."`
);

// 5. Fix line 1609: Yêu cầu đoàn thanh tra xem xét
content = content.replace(
  `"Yêu cầu đoàn thanh tra xem xét toàn diện bộ hồ sơ quyết toán vốn đầu tư dự án hoàn thành đã được cấp có thẩm quyền phê duyệt..."`,
  `"Xuất trình bộ hồ sơ quyết toán vốn đầu tư dự án hoàn thành đã được cấp có thẩm quyền phê duyệt theo Thông tư 108/2025/TT-BTC làm căn cứ đối chiếu số liệu chi phí và doanh thu công trình..."`
);

// 6. Fix line 1810: Công ty Cổ phần Kiểu Việt thực hiện hạch toán
content = content.replace(
  `"Lập luận chặt chẽ dựa trên Điều 27 Thông tư 133/2016/TT-BTC: Công ty Cổ phần Kiểu Việt thực hiện hạch toán chi phí sản xuất xây lắp dở dang trực tiếp trên TK 154..."`,
  `"Viện dẫn Điều 27 Thông tư 133/2016/TT-BTC: Đối với doanh nghiệp áp dụng chế độ kế toán vừa và nhỏ, chi phí sản xuất xây lắp được hạch toán trực tiếp vào TK 154 theo từng công trình/hạng mục thay vì mở các tài khoản 621, 622, 623, 627..."`
);

// 7. Fix line 1887: toàn bộ hệ thống hóa đơn... đều lưu trữ điện tử
content = content.replace(
  `"Lập luận rằng toàn bộ hệ thống hóa đơn, chứng từ, sổ sách kế toán của Công ty Cổ phần Kiểu Việt đều lưu trữ điện tử và sao lưu định kỳ theo Điều 13 Nghị định 174/2016/NĐ-CP..."`,
  `"Xuất trình quy chế quản lý dữ liệu kế toán điện tử và nhật ký sao lưu định kỳ theo Điều 13 Nghị định 174/2016/NĐ-CP, giải trình phương thức bảo mật và tra cứu chứng từ số hóa cho đoàn kiểm tra..."`
);

// 8. Fix line 1950: sự phù hợp tuyệt đối
content = content.replace(
  `"Bước 3: Kiểm tra sự phù hợp tuyệt đối giữa doanh thu khai thác mỏ đá kê khai thuế GTGT hàng tháng với số liệu báo cáo sản lượng khoáng sản..."`,
  `"Bước 3: Đối chiếu sản lượng khoáng sản đá kê khai thuế tài nguyên hàng tháng với doanh thu TK 511 trên tờ khai thuế GTGT và số lượng xuất trạm cân, lập bảng kê giải trình hao hụt chế biến nếu có chênh lệch..."`
);

// 9. Fix line 2002: khẳng định không có chênh lệch
content = content.replace(
  `"Trình bày biên bản kiểm kê kho cuối năm có sự tham gia chứng kiến của các bên, khẳng định không có chênh lệch thừa thiếu giữa sổ sách kế toán và thực tế tại các mỏ đá và xưởng sản xuất."`,
  `"Trình bày biên bản kiểm kê kho cuối kỳ có đầy đủ chữ ký của hội đồng kiểm kê, giải trình chi tiết nguyên nhân các khoản chênh lệch thừa/thiếu (nếu có) giữa số liệu sổ sách và thực tế tại mỏ đá, xưởng gỗ theo nguyên tắc VAS 02."`
);

// 10. Fix line 2087: doanh nghiệp đã tách bạch rõ ràng
content = content.replace(
  `"Trường hợp có nhân sự có mức lương cao vượt trần 46,8 triệu đồng, doanh nghiệp đã tách bạch rõ ràng giữa phần tiền lương tính đóng bảo hiểm và phần tiền lương vượt trần..."`,
  `"Trường hợp có nhân sự có mức lương vượt trần 46,8 triệu đồng (20 lần mức lương cơ sở 2,34 triệu theo NĐ 73/2024), kế toán kiểm tra lại bảng trích bảo hiểm để đảm bảo không trích BHXH/BHYT trên phần thu nhập vượt trần..."`
);

// 11. Normalize penalty wording: "Phạt khai sai 20% trên số thuế thiếu và tính tiền chậm nộp 0.03%/ngày do..."
content = content.replaceAll(
  'Phạt khai sai 20% trên số thuế thiếu và tính tiền chậm nộp 0.03%/ngày',
  'Nguy cơ bị xử phạt 20% trên số thuế thiếu (NĐ 125/2020) và tính tiền chậm nộp 0.03%/ngày (Luật QLT 38/2019)'
);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully updated src/data/tax-audit-checklist.ts');
