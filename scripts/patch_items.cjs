const fs = require('fs');

// 1. Update group3 (nd-15-2022)
let f3 = fs.readFileSync('src/data/diffs/group3_corporate_personal_tax.ts', 'utf8');
const p4_nd15 = `      {
        topic: "Xử lý hóa đơn xuất sai thuế suất trong thời gian áp dụng chính sách giảm thuế",
        type: "added",
        oldRule: "Chưa có quy định xử lý khi người bán lỡ xuất hóa đơn 10% cho mặt hàng được giảm thuế 8%.",
        newRule: "Trường hợp đã lập hóa đơn và đã kê khai theo mức thuế suất 10% thì người bán và người mua phải lập biên bản ghi rõ sai sót, người bán lập hóa đơn điều chỉnh sai sót giảm 2% thuế suất và giao cho người mua.",
        impactNote: "Kiểu Việt yêu cầu các nhà thầu phụ xuất hóa đơn điều chỉnh giảm 2% thuế suất đối với các khối lượng xây lắp nghiệm thu trong kỳ để hạch toán đúng thuế GTGT đầu vào."
      }`;
f3 = f3.replace(/("nd-15-2022": \{[\s\S]*?"items": \[[\s\S]*?\{[\s\S]*?\}\n)(    \]\n  \})/, `$1,\n${p4_nd15}\n$2`);
fs.writeFileSync('src/data/diffs/group3_corporate_personal_tax.ts', f3, 'utf8');
console.log('Updated group 3 nd-15-2022');

// 2. Update group5 (nd-193, qd-87, tt-44, nd-67)
let f5 = fs.readFileSync('src/data/diffs/group5_resources_fees_general.ts', 'utf8');

const p4_nd193 = `      {
        topic: "Nghĩa vụ kê khai nộp thuế tài nguyên và tiền cấp quyền khi tự khai thác mỏ đất",
        type: "added",
        oldRule: "Chưa quy định rõ việc nhà thầu thi công tự khai thác mỏ vật liệu theo cơ chế đặc thù có phải nộp tiền cấp quyền khai thác khoáng sản hay không.",
        newRule: "Nhà thầu được giao mỏ đất đắp đặc thù phải thực hiện đầy đủ nghĩa vụ kê khai, nộp thuế tài nguyên, phí BVMT và tiền cấp quyền khai thác khoáng sản vào ngân sách nhà nước theo sản lượng thực tế khai thác.",
        impactNote: "Kế toán Kiểu Việt lập hồ sơ đăng ký mã số thuế vãng lai và kê khai nộp đầy đủ thuế tài nguyên mỏ đất đắp tại địa phương thi công dự án."
      }`;
f5 = f5.replace(/("nd-193-2025-khoangsan": \{[\s\S]*?"items": \[[\s\S]*?\{[\s\S]*?\}\n)(    \]\n  \})/, `$1,\n${p4_nd193}\n$2`);

const p4_qd87 = `      {
        topic: "Giá tính thuế tài nguyên đối với cát vàng xây dựng và cát san lấp mặt bằng",
        type: "modified",
        oldRule: "Chỉ quy định chung chung một mức giá cát xây dựng mà không phân biệt cát hạt lớn làm bê tông và cát san lấp.",
        newRule: "Quy định tách biệt: Cát vàng hạt thô làm bê tông chịu mức giá tính thuế tài nguyên cao hơn; cát san lấp chịu mức giá tối thiểu theo khung của Bộ Tài chính.",
        impactNote: "Kiểu Việt kê khai đúng chủng loại cát sử dụng cho từng hạng mục công trình tại Gia Lai để tối ưu hóa chi phí thuế tài nguyên."
      }`;
f5 = f5.replace(/("qd-87-2025-gialai": \{[\s\S]*?"items": \[[\s\S]*?\{[\s\S]*?\}\n)(    \]\n  \})/, `$1,\n${p4_qd87}\n$2`);

const p4_tt44 = `      {
        topic: "Thẩm quyền và trách nhiệm rà soát điều chỉnh bảng giá tài nguyên cấp tỉnh",
        type: "added",
        oldRule: "UBND cấp tỉnh tự quyết định thời điểm điều chỉnh giá tính thuế tài nguyên mà không có quy định giám sát của Hội đồng nhân dân.",
        newRule: "Định kỳ hàng năm hoặc khi giá thị trường biến động, Sở Tài chính chủ trì phối hợp với Cục Thuế và Sở TN-MT khảo sát giá thị trường, tham mưu UBND tỉnh điều chỉnh bảng giá phù hợp với Khung giá của Bộ Tài chính.",
        impactNote: "Kiểu Việt theo dõi các dự thảo điều chỉnh bảng giá tính thuế tài nguyên của Sở Tài chính để kịp thời có ý kiến phản hồi bảo vệ doanh nghiệp xây dựng."
      }`;
f5 = f5.replace(/("tt-44-2017": \{[\s\S]*?"items": \[[\s\S]*?\{[\s\S]*?\}\n)(    \]\n  \})/, `$1,\n${p4_tt44}\n$2`);

const p4_nd67 = `      {
        topic: "Thời hạn thẩm định và thông báo số tiền cấp quyền khai thác khoáng sản phải nộp",
        type: "added",
        oldRule: "Thời gian cơ quan thuế ban hành thông báo nộp tiền cấp quyền thường chậm trễ, dồn tích nhiều kỳ làm doanh nghiệp bị động dòng tiền.",
        newRule: "Quy định trong thời hạn không quá 10 ngày làm việc kể từ ngày nhận được văn bản phê duyệt của cơ quan có thẩm quyền, Cục Thuế phải ban hành Thông báo nộp tiền cấp quyền gửi cho doanh nghiệp.",
        impactNote: "Kiểu Việt chủ động nhận thông báo nộp tiền cấp quyền sớm để cân đối dòng tiền chi trả theo từng đợt quy định."
      }`;
f5 = f5.replace(/("nd-67-2019": \{[\s\S]*?"items": \[[\s\S]*?\{[\s\S]*?\}\n)(    \]\n  \})/, `$1,\n${p4_nd67}\n$2`);

fs.writeFileSync('src/data/diffs/group5_resources_fees_general.ts', f5, 'utf8');
console.log('Updated group 5 decrees successfully');
