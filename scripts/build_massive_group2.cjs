const fs = require('fs');
const path = require('path');

const g2Path = path.join(__dirname, '..', 'src', 'data', 'diffs', 'group2_invoices_tax_admin.ts');
const raw = fs.readFileSync(g2Path, 'utf8');
const jsonStr = raw.replace(/import[^;]+;/, '').replace(/export const \w+[^=]+=/, '').replace(/;\s*$/, '');
const g2 = eval('(' + jsonStr + ')');

// 6. nd-126-2020: 12 points
g2['nd-126-2020'].items = [
  {
    topic: "Quy định tỷ lệ tạm nộp thuế TNDN 4 quý không được thấp hơn 80% (Điều 8 Khoản 6)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ 83/2013 & TT 151/2014] Tổng số thuế TNDN tạm nộp 3 quý đầu năm không được thấp hơn 75% số thuế TNDN phải nộp theo quyết toán năm.",
    newRule: "[Căn cứ: Điều 8 Khoản 6 NĐ 126/2020 (sửa đổi bởi NĐ 91/2022)] Tổng số thuế TNDN đã tạm nộp của 04 quý không được thấp hơn 80% số thuế TNDN phải nộp theo quyết toán năm; nộp thiếu bị tính tiền chậm nộp 0.03%/ngày từ ngày 31/01.",
    impactNote: "Kế toán Kiểu Việt chủ động ước tính lợi nhuận công trình cả năm vào tháng 1, tạm nộp đủ tối thiểu 80% số thuế TNDN trước ngày 31/01 để tránh bị phạt tiền chậm nộp."
  },
  {
    topic: "Kê khai và phân bổ nghĩa vụ thuế GTGT đối với hoạt động xây dựng vãng lai ngoại tỉnh (Điều 11 & 13)",
    type: "modified",
    oldRule: "[Căn cứ: TT 156/2013] Nộp thuế GTGT vãng lai ngoại tỉnh tỷ lệ 2% trên doanh thu công trình chưa bao gồm thuế GTGT tại địa phương nơi có công trình.",
    newRule: "[Căn cứ: Điều 11 & 13 NĐ 126/2020] Giảm tỷ lệ khai và phân bổ thuế GTGT vãng lai xuống còn 1% trên doanh thu chưa có thuế GTGT của công trình xây lắp tại tỉnh khác tỉnh nơi đóng trụ sở chính; nộp hồ sơ phân bổ theo Mẫu 01-6/GTGT.",
    impactNote: "Kiểu Việt thi công cầu đường tại Đắk Lắk, Kon Tum chỉ phải tạm nộp 1% thuế GTGT vãng lai tại địa phương, giảm áp lực dòng tiền mặt lưu động tới 50%."
  },
  {
    topic: "Trách nhiệm của Ngân hàng trong việc cung cấp thông tin tài khoản thanh toán (Điều 30)",
    type: "added",
    oldRule: "[Căn cứ: NĐ 83/2013] Ngân hàng chỉ cung cấp sao kê khi có quyết định thanh tra bằng văn bản.",
    newRule: "[Căn cứ: Điều 30 NĐ 126/2020] Ngân hàng thương mại có trách nhiệm cung cấp thông tin tên chủ tài khoản, số hiệu tài khoản và ngày mở tài khoản của người nộp thuế định kỳ theo yêu cầu của Tổng cục Thuế bằng phương thức điện tử.",
    impactNote: "Kiểu Việt đăng ký công khai toàn bộ tài khoản ngân hàng giao dịch với cơ quan thuế, không để tài khoản ngoài sổ sách."
  },
  {
    topic: "Các trường hợp cơ quan thuế ấn định thuế (Điều 14 & 15)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ 83/2013] Quy định chung về ấn định thuế khi không nộp tờ khai.",
    newRule: "[Căn cứ: Điều 14-15 NĐ 126/2020] Quy định chi tiết 11 trường hợp bị ấn định thuế: Không phản ánh trung thực sổ sách kế toán; mua bán hàng hóa không có hóa đơn hợp pháp; không xuất trình sổ sách chứng từ khi kiểm tra thuế.",
    impactNote: "Nhắc nhở Kiểu Việt bảo đảm đầy đủ hồ sơ dự toán, hợp đồng thầu phụ và nghiệm thu thực tế, tránh nguy cơ bị ấn định tỷ lệ chi phí xây dựng."
  },
  {
    topic: "Địa điểm nộp hồ sơ khai thuế đối với hoạt động khai thác khoáng sản (Điều 11)",
    type: "modified",
    oldRule: "[Căn cứ: TT 156/2013] Khai thuế tài nguyên nộp tại trụ sở chính doanh nghiệp.",
    newRule: "[Căn cứ: Điều 11 NĐ 126/2020] Hoạt động khai thác khoáng sản (đá, cát, đất đắp) bắt buộc phải nộp hồ sơ khai thuế tài nguyên, phí BVMT tại cơ quan thuế quản lý trực tiếp địa bàn nơi có hoạt động khai thác mỏ.",
    impactNote: "Kiểu Việt nộp tờ khai thuế tài nguyên mỏ đá trực tiếp tại Chi cục Thuế khu vực Chư Păh - Ia Grai (Gia Lai) đúng quy định."
  },
  {
    topic: "Thời hạn nộp hồ sơ khai thuế theo từng lần phát sinh (Điều 8)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ 83/2013] Thời hạn nộp hồ sơ là ngày thứ 10 kể từ ngày phát sinh nghĩa vụ thuế.",
    newRule: "[Căn cứ: Điều 8 NĐ 126/2020] Giữ nguyên thời hạn chậm nhất là ngày thứ 10 kể từ ngày phát sinh nghĩa vụ thuế đối với các khoản thuế môn bài thành lập mới, thuế chuyển nhượng bất động sản, thuế vãng lai từng lần.",
    impactNote: "Kiểu Việt nộp tờ khai và tiền thuế môn bài cho chi nhánh mỏ mới thành lập trong vòng 10 ngày kể từ ngày được cấp giấy phép."
  },
  {
    topic: "Gia hạn nộp thuế trong trường hợp di dời cơ sở sản xuất theo quy hoạch (Điều 24)",
    type: "added",
    oldRule: "[Căn cứ: NĐ 83/2013] Chưa có quy định gia hạn thuế khi di dời cơ sở ô nhiễm.",
    newRule: "[Căn cứ: Điều 24 NĐ 126/2020] Doanh nghiệp phải di dời trạm trộn bê tông, mỏ đá theo quyết định của cơ quan nhà nước được xem xét gia hạn nộp thuế tối đa 02 năm kể từ ngày hết thời hạn nộp thuế.",
    impactNote: "Kiểu Việt tận dụng chính sách gia hạn thuế khi phải di dời trạm nghiền đá để bảo vệ nguồn vốn lưu động thi công."
  },
  {
    topic: "Quy trình cưỡng chế bằng biện pháp trích tiền từ tài khoản (Điều 31)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ 83/2013] Lệnh phong tỏa tài khoản kéo dài vô thời hạn.",
    newRule: "[Căn cứ: Điều 31 NĐ 126/2020] Quyết định cưỡng chế trích tiền có hiệu lực trong thời hạn 30 ngày kể từ ngày ban hành; ngân hàng chỉ được trích đúng số tiền ghi trong quyết định cưỡng chế.",
    impactNote: "Bảo đảm quyền lợi doanh nghiệp, ngân hàng không được tự ý phong tỏa toàn bộ số dư vượt quá số tiền thuế bị cưỡng chế của Kiểu Việt."
  },
  {
    topic: "Quy trình hoàn thuế nộp thừa đối với các khoản thuế tài nguyên, phí BVMT (Điều 25)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ 83/2013] Thủ tục bù trừ số thuế nộp thừa kéo dài qua nhiều cấp xét duyệt.",
    newRule: "[Căn cứ: Điều 25 NĐ 126/2020] Số thuế nộp thừa được tự động bù trừ vào số thuế phải nộp của kỳ tiếp theo hoặc bù trừ với các khoản thuế khác cùng địa bàn; thủ tục hoàn trả giải quyết trong vòng 05 ngày làm việc.",
    impactNote: "Kiểu Việt bù trừ linh hoạt số tiền thuế tài nguyên nộp thừa vào số thuế GTGT hoặc TNDN phải nộp tại tỉnh Gia Lai."
  },
  {
    topic: "Trách nhiệm nộp thuế thay của bên nhận ủy quyền và tổ chức liên danh (Điều 7)",
    type: "added",
    oldRule: "[Căn cứ: NĐ 83/2013] Chưa quy định rõ nghĩa vụ thuế của từng thành viên trong liên danh nhà thầu.",
    newRule: "[Căn cứ: Điều 7 NĐ 126/2020] Trường hợp liên danh nhà thầu có thỏa thuận xuất hóa đơn riêng thì từng thành viên tự kê khai nộp thuế; trường hợp cử 1 thành viên đại diện xuất hóa đơn thì bên đại diện phải phân bổ và nộp thuế thay cho các thành viên.",
    impactNote: "Quy chế liên danh của Kiểu Việt quy định rõ từng nhà thầu tự xuất hóa đơn và chịu trách nhiệm độc lập về thuế phần việc của mình."
  },
  {
    topic: "Cơ chế quản lý thuế đối với kinh doanh thương mại điện tử xuyên biên giới (Điều 30)",
    type: "added",
    oldRule: "[Căn cứ: NĐ 83/2013] Chưa có cơ chế thu thuế nhà thầu nước ngoài trực tiếp.",
    newRule: "[Căn cứ: Điều 30 NĐ 126/2020] Nhà cung cấp nước ngoài (Google, Microsoft, Facebook) trực tiếp đăng ký, kê khai và nộp thuế qua Cổng thông tin điện tử dành cho nhà cung cấp nước ngoài của Tổng cục Thuế.",
    impactNote: "Kiểu Việt mua dịch vụ phần mềm Microsoft 365, Google Workspace được nhận hóa đơn hợp pháp có mã số thuế nhà thầu nước ngoài để khấu trừ thuế."
  },
  {
    topic: "Hiệu lực thi hành và hướng dẫn thi hành Luật Quản lý thuế",
    type: "added",
    oldRule: "[Căn cứ: NĐ 83/2013] Nghị định cũ.",
    newRule: "[Căn cứ: Điều 44 NĐ 126/2020] Nghị định có hiệu lực thi hành từ ngày 05/12/2020, thay thế toàn bộ Nghị định 83/2013 và các nghị định sửa đổi trước đây.",
    impactNote: "Kiểu Việt tuân thủ đầy đủ 100% các quy định về kê khai, phân bổ thuế và nộp thuế điện tử theo NĐ 126."
  }
];

// 7. tt-80-2021: 14 points
g2['tt-80-2021'].items = [
  {
    topic: "Đổi mới toàn diện hệ thống mẫu biểu hồ sơ khai thuế GTGT, TNDN, TNCN (Phụ lục II)",
    type: "modified",
    oldRule: "[Căn cứ: TT 156/2013] Sử dụng các mẫu biểu tờ khai cũ: 01/GTGT, 03/TNDN, 05/KK-TNCN với nhiều bảng kê chi tiết thủ công.",
    newRule: "[Căn cứ: Phụ lục II TT 80/2021] Ban hành hệ thống mẫu biểu tờ khai chuẩn hóa mã vạch điện tử: Tờ khai 01/GTGT kèm các phụ lục phân bổ 01-6/GTGT cho xây dựng vãng lai; Tờ khai 03/TNDN tích hợp phụ lục giao dịch liên kết NĐ 132.",
    impactNote: "Kiểu Việt cập nhật phần mềm kế toán tương thích 100% với ứng dụng HTKK mới nhất của Tổng cục Thuế, nộp tờ khai không bị lỗi định dạng."
  },
  {
    topic: "Quy trình phân bổ nghĩa vụ thuế GTGT cho công trình xây lắp tại nhiều địa phương (Điều 13)",
    type: "modified",
    oldRule: "[Căn cứ: TT 156/2013] Phải nộp tờ khai thuế GTGT vãng lai riêng tại từng Chi cục Thuế nơi có công trình.",
    newRule: "[Căn cứ: Điều 13 TT 80/2021] Doanh nghiệp chỉ nộp một Tờ khai thuế GTGT duy nhất (Mẫu 01/GTGT) tại cơ quan thuế trụ sở chính, kèm Phụ lục bảng phân bổ số thuế GTGT phải nộp cho các địa phương (Mẫu 01-6/GTGT); Kho bạc tự động điều tiết tiền thuế về các tỉnh.",
    impactNote: "Kiểu Việt tiết kiệm hàng trăm giờ làm việc, không còn phải lập và theo dõi riêng hàng chục tờ khai vãng lai tại các huyện xa xôi."
  },
  {
    topic: "Quy định phân bổ thuế TNDN đối với cơ sở sản xuất đá, cát trực thuộc khác tỉnh (Điều 17)",
    type: "modified",
    oldRule: "[Căn cứ: TT 156/2013] Phân bổ thuế TNDN dựa trên tỷ lệ chi phí sản xuất.",
    newRule: "[Căn cứ: Điều 17 TT 80/2021] Cơ sở sản xuất trực thuộc (nhà máy nghiền đá, mỏ đất) khác tỉnh được phân bổ số thuế TNDN phải nộp căn cứ theo tỷ lệ chi phí của cơ sở sản xuất trên tổng chi phí của doanh nghiệp; quyết toán tại trụ sở chính.",
    impactNote: "Kiểu Việt phân bổ chuẩn xác nghĩa vụ thuế TNDN cho ngân sách tỉnh Gia Lai và Bình Định, hài hòa nghĩa vụ thuế với chính quyền địa phương."
  },
  {
    topic: "Hồ sơ và thủ tục hoàn thuế GTGT điện tử (Điều 27-32)",
    type: "modified",
    oldRule: "[Căn cứ: TT 156/2013] Nộp hồ sơ hoàn thuế bản giấy kèm bản sao hóa đơn chứng từ.",
    newRule: "[Căn cứ: Điều 27-32 TT 80/2021] 100% hồ sơ đề nghị hoàn thuế GTGT dự án đầu tư được nộp điện tử qua Cổng eTax; hệ thống tự động phân loại hồ sơ và kiểm tra đối chiếu hóa đơn điện tử.",
    impactNote: "Hồ sơ hoàn thuế dự án đầu tư dây chuyền nghiền đá Kiểu Việt được thẩm định hoàn toàn qua mạng, rút ngắn thời gian nhận tiền hoàn thuế."
  },
  {
    topic: "Quy trình miễn, giảm thuế theo Hiệp định tránh đánh thuế hai lần (DTA) (Điều 62)",
    type: "modified",
    oldRule: "[Căn cứ: TT 156/2013] Thủ tục xét duyệt kéo dài và đòi hỏi hợp pháp hóa lãnh sự phức tạp.",
    newRule: "[Căn cứ: Điều 62 TT 80/2021] Nhà thầu phụ nước ngoài hoặc chuyên gia nước ngoài tự nộp hồ sơ thông báo miễn giảm thuế DTA qua mạng điện tử kèm Giấy chứng nhận cư trú của nước sở tại.",
    impactNote: "Kiểu Việt làm thủ tục miễn giảm thuế nhà thầu chuẩn xác khi thuê chuyên gia Nhật Bản, Hàn Quốc hướng dẫn vận hành máy khoan hầm."
  },
  {
    topic: "Xử lý số tiền thuế, tiền phạt nộp thừa tại các chi nhánh (Điều 25 & 26)",
    type: "modified",
    oldRule: "[Căn cứ: TT 156/2013] Bù trừ tiền nộp thừa giữa các tỉnh khác nhau rất khó khăn.",
    newRule: "[Căn cứ: Điều 25-26 TT 80/2021] Quy định rõ thẩm quyền của cơ quan thuế trụ sở chính trong việc ban hành Quyết định hoàn trả kiêm bù trừ thu ngân sách nhà nước giữa các chi cục thuế khác tỉnh trên toàn quốc.",
    impactNote: "Kiểu Việt dễ dàng bù trừ tiền thuế nộp thừa tại công trình Gia Lai sang nghĩa vụ thuế tại trụ sở chính công ty."
  },
  {
    topic: "Quy định về lập và nộp hồ sơ khai thuế môn bài (Điều 18)",
    type: "modified",
    oldRule: "[Căn cứ: TT 156/2013] Hàng năm phải nộp tờ khai thuế môn bài nếu có thay đổi vốn.",
    newRule: "[Căn cứ: Điều 18 TT 80/2021] Chỉ phải nộp tờ khai lệ phí môn bài một lần duy nhất khi mới thành lập hoặc khi có thay đổi về vốn điều lệ; nộp chậm nhất ngày 30/01 năm sau năm có thay đổi.",
    impactNote: "Giảm bớt thủ tục hành chính đầu năm, Kiểu Việt chỉ cần nộp tiền lệ phí môn bài trước ngày 30/01 mà không cần nộp lại tờ khai."
  },
  {
    topic: "Thủ tục chấm dứt hiệu lực mã số thuế và phục hồi mã số thuế (Điều 39-41)",
    type: "modified",
    oldRule: "[Căn cứ: TT 156/2013] Mã số thuế đã đóng rất khó khôi phục lại.",
    newRule: "[Căn cứ: Điều 39-41 TT 80/2021] Quy định rõ quy trình phục hồi mã số thuế trong vòng 10 ngày làm việc nếu doanh nghiệp chứng minh đã khắc phục đầy đủ nghĩa vụ thuế và có lý do chính đáng.",
    impactNote: "Bảo đảm Kiểu Việt có công cụ pháp lý bảo vệ mã số thuế của các chi nhánh mỏ vật liệu khi có sự cố chậm trễ hành chính."
  },
  {
    topic: "Quy trình kiểm tra thuế tại trụ sở người nộp thuế (Điều 70-74)",
    type: "modified",
    oldRule: "[Căn cứ: TT 156/2013] Thời gian kiểm tra thường bị kéo dài vượt quá thời hạn ghi trên quyết định.",
    newRule: "[Căn cứ: Điều 70-74 TT 80/2021] Quy định nghiêm ngặt: Thời hạn kiểm tra tại trụ sở doanh nghiệp tối đa không quá 10 ngày làm việc (gia hạn 1 lần không quá 10 ngày); Trưởng đoàn phải công bố quyết định và ký biên bản kiểm tra đúng hạn.",
    impactNote: "Kiểu Việt chủ động sắp xếp phòng làm việc và cung cấp chứng từ cho đoàn kiểm tra thuế trong đúng khung thời gian 10 ngày luật định."
  },
  {
    topic: "Xác nhận hoàn thành nghĩa vụ nộp thuế phục vụ đấu thầu công trình (Điều 70)",
    type: "added",
    oldRule: "[Căn cứ: TT 156/2013] Xin giấy xác nhận nghĩa vụ thuế bằng văn bản giấy mất 10 - 15 ngày.",
    newRule: "[Căn cứ: Điều 70 TT 80/2021] Doanh nghiệp gửi đề nghị tra cứu nghĩa vụ thuế qua mạng eTax; cơ quan thuế trả kết quả Giấy xác nhận tình trạng thuế điện tử có chữ ký số trong vòng 03 ngày làm việc.",
    impactNote: "Kiểu Việt lấy ngay giấy xác nhận không nợ thuế để hoàn thiện hồ sơ dự thầu các gói thầu cao tốc hàng ngàn tỷ đồng kịp hạn chót."
  },
  {
    topic: "Quy định chi tiết về hoàn thuế TNCN cho người lao động ủy quyền (Điều 42)",
    type: "modified",
    oldRule: "[Căn cứ: TT 156/2013] Thủ tục hoàn thuế TNCN cho cán bộ công nhân viên phức tạp.",
    newRule: "[Căn cứ: Điều 42 TT 80/2021] Doanh nghiệp chi trả thu nhập thực hiện quyết toán thay và bù trừ số thuế nộp thừa vào kỳ tiếp theo hoặc lập hồ sơ hoàn thuế tập trung cho toàn bộ cán bộ công nhân viên.",
    impactNote: "Phòng Kế toán Kiểu Việt hoàn thuế TNCN nhanh gọn cho hàng trăm kỹ sư, lái máy thi công sau kỳ quyết toán năm."
  },
  {
    topic: "Cơ chế phối hợp chia sẻ thông tin thu thuế giữa Thuế và Kho bạc Nhà nước (Điều 10)",
    type: "added",
    oldRule: "[Căn cứ: TT 156/2013] Chứng từ nộp tiền vào Kho bạc phải luân chuyển qua đường công văn.",
    newRule: "[Căn cứ: Điều 10 TT 80/2021] Dữ liệu số thuế Kiểu Việt nộp vào Kho bạc được truyền tự động sang hệ thống Thuế trong vòng 15 phút, xóa ngay tình trạng nợ thuế trên màn hình quản lý.",
    impactNote: "Bảo đảm tình trạng thuế của Kiểu Việt luôn ở trạng thái 'Đã nộp đủ', không bao giờ bị ghi nhận nợ thuế ảo."
  },
  {
    topic: "Biểu mẫu báo cáo chuyển nhượng vốn và thay đổi tỷ lệ sở hữu (Phụ lục II)",
    type: "added",
    oldRule: "[Căn cứ: TT 156/2013] Kê khai chuyển nhượng vốn chung chung trên tờ khai thuế TNDN.",
    newRule: "[Căn cứ: Mẫu 05/TNDN TT 80/2021] Tách riêng tờ khai thuế TNDN từ chuyển nhượng vốn; kê khai chi tiết giá vốn, giá chuyển nhượng và thuế suất 20% trên thu nhập chịu thuế.",
    impactNote: "Kiểu Việt kê khai minh bạch khi thực hiện tái cấu trúc phần vốn góp tại các công ty liên kết khai thác khoáng sản."
  },
  {
    topic: "Hiệu lực thi hành Thông tư 80/2021/TT-BTC",
    type: "added",
    oldRule: "[Căn cứ: TT 156/2013, TT 119/2014, TT 151/2014] Các thông tư cũ.",
    newRule: "[Căn cứ: Điều 87 TT 80/2021] Thông tư có hiệu lực từ ngày 01/01/2022, bãi bỏ hoàn toàn Thông tư 156/2013 và các thông tư hướng dẫn quản lý thuế trước đây.",
    impactNote: "Toàn bộ chu trình kế toán thuế Kiểu Việt vận hành đồng bộ theo quy chuẩn Thông tư 80 bảo đảm tính pháp lý cao nhất."
  }
];

// 8. nd-132-2020: 12 points
g2['nd-132-2020'].items = [
  {
    topic: "Nâng mức khống chế trần chi phí lãi vay từ 20% lên 30% EBITDA (Điều 16 Khoản 3)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ 20/2017] Tổng chi phí lãi vay thuần phát sinh trong kỳ được trừ khi xác định thu nhập chịu thuế TNDN không vượt quá 20% tổng lợi nhuận thuần từ hoạt động kinh doanh cộng chi phí lãi vay thuần cộng chi phí khấu hao (EBITDA).",
    newRule: "[Căn cứ: Điều 16 Khoản 3 NĐ 132/2020] Nâng mức trần khống chế chi phí lãi vay lên 30% EBITDA; chi phí lãi vay thuần không được trừ trong kỳ được chuyển sang các kỳ tính thuế tiếp theo trong thời gian tối đa không quá 05 năm.",
    impactNote: "Mở rộng hạn mức chi phí lãi vay được trừ thêm 10% EBITDA (hàng tỷ đồng mỗi năm), Kiểu Việt tự tin vay vốn tín dụng đầu tư thiết bị máy móc cơ giới và dây chuyền mỏ khoáng sản."
  },
  {
    topic: "Quy định mới về các bên có quan hệ liên kết qua các khoản vay (Điều 5 Khoản 2 Điểm d)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ 20/2017] Một doanh nghiệp bảo lãnh hoặc cho một doanh nghiệp khác vay vốn dưới bất kỳ hình thức nào với điều kiện khoản vốn vay ít nhất bằng 25% vốn góp của chủ sở hữu và chiếm trên 50% tổng giá trị các khoản nợ trung và dài hạn.",
    newRule: "[Căn cứ: Điều 5 Khoản 2 Điểm d NĐ 132/2020] Làm rõ: Quan hệ liên kết qua khoản vay áp dụng khi một bên cho vay hoặc bảo lãnh chiếm ít nhất 25% vốn góp của chủ sở hữu và chiếm trên 50% tổng nợ trung và dài hạn của bên đi vay; bao gồm cả các khoản vay ngân hàng nếu ngân hàng can thiệp vào điều hành.",
    impactNote: "Kiểu Việt kiểm soát chặt chẽ tỷ lệ vốn vay tại từng ngân hàng (VietinBank, MB) để xác định chính xác có thuộc đối tượng lập hồ sơ giao dịch liên kết hay không."
  },
  {
    topic: "Các trường hợp được miễn lập Hồ sơ xác định giá giao dịch liên kết (Điều 19)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ 20/2017] Ngưỡng miễn lập hồ sơ giao dịch liên kết quy định chưa đầy đủ.",
    newRule: "[Căn cứ: Điều 19 NĐ 132/2020] Miễn lập hồ sơ khi: Doanh thu dưới 50 tỷ đồng và tổng giá trị giao dịch liên kết dưới 30 tỷ đồng; hoặc doanh nghiệp đã ký kết Thỏa thuận trước về phương pháp xác định giá (APA); hoặc chỉ phát sinh giao dịch liên kết với các bên nộp thuế cùng mức thuế suất và không bên nào được hưởng ưu đãi thuế.",
    impactNote: "Kiểu Việt tận dụng điều kiện miễn trừ khi các giao dịch mua bán đá, cát nội bộ giữa công ty mẹ và công ty con đều áp dụng thuế suất phổ thông 20%."
  },
  {
    topic: "Hồ sơ quốc gia (Local File) và Hồ sơ toàn cầu (Master File) (Điều 18)",
    type: "added",
    oldRule: "[Căn cứ: NĐ 20/2017] Quy định chung về hồ sơ xác định giá.",
    newRule: "[Căn cứ: Điều 18 NĐ 132/2020] Bắt buộc lập bộ Hồ sơ xác định giá giao dịch liên kết 3 cấp gồm: Hồ sơ quốc gia (Local File), Hồ sơ tập đoàn toàn cầu (Master File) và Báo cáo lợi nhuận liên quốc gia (CbCR) nộp cùng hạn quyết toán thuế TNDN.",
    impactNote: "Kiểu Việt lưu trữ bộ hồ sơ Local File giải trình phương pháp so sánh giá bán đá cát cho các bên liên kết đúng chuẩn BEPS của OECD."
  },
  {
    topic: "Phương pháp so sánh giá giao dịch độc lập (CUP) áp dụng cho khoáng sản (Điều 13)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ 20/2017] Sử dụng phương pháp tỷ suất lợi nhuận gộp.",
    newRule: "[Căn cứ: Điều 13 NĐ 132/2020] Ưu tiên áp dụng phương pháp So sánh giá giao dịch độc lập (CUP) đối với hàng hóa niêm yết, vật liệu xây dựng cát đá có bảng giá thị trường của UBND tỉnh công bố.",
    impactNote: "Kiểu Việt áp dụng bảng giá tính thuế tài nguyên của UBND tỉnh Gia Lai làm cơ sở đối chiếu giá giao dịch độc lập hợp pháp."
  },
  {
    topic: "Chuyển chi phí lãi vay không được trừ sang các năm sau tối đa 5 năm (Điều 16)",
    type: "added",
    oldRule: "[Căn cứ: NĐ 20/2017] Phần chi phí lãi vay vượt trần 20% bị loại vĩnh viễn, không được chuyển sang năm sau.",
    newRule: "[Căn cứ: Điều 16 Khoản 3 Điểm b NĐ 132/2020] Phần chi phí lãi vay vượt mức 30% EBITDA được chuyển sang kỳ tính thuế tiếp theo khi xác định tổng chi phí lãi vay được trừ của năm đó trong thời hạn không quá 05 năm liên tục.",
    impactNote: "Khoản lãi vay đầu tư trạm nghiền đá bị loại năm 2024 được Kiểu Việt chuyển sang khấu trừ vào lợi nhuận các năm 2025 - 2026 khi EBITDA tăng trưởng."
  },
  {
    topic: "Cơ sở dữ liệu so sánh được chấp nhận khi lập hồ sơ xác định giá (Điều 17)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ 20/2017] Chỉ chấp nhận dữ liệu kiểm toán nội địa.",
    newRule: "[Căn cứ: Điều 17 NĐ 132/2020] Cho phép sử dụng cơ sở dữ liệu thương mại quốc tế (Orbis, Bloomberg, Amadeus) và dữ liệu tài chính của các công ty niêm yết cùng ngành xây dựng hạ tầng tại Việt Nam.",
    impactNote: "Kiểu Việt lựa chọn biên lợi nhuận của các doanh nghiệp xây lắp niêm yết (Cienco, Vinaconex) làm biên độ thị trường chuẩn (Arm's length range)."
  },
  {
    topic: "Kê khai các Phụ lục thông tin về quan hệ liên kết (Mẫu 01, 02, 03, 04)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ 20/2017] Kê khai phụ lục chung.",
    newRule: "[Căn cứ: Phụ lục ban hành kèm NĐ 132/2020] Bắt buộc nộp đồng thời 4 phụ lục cùng Tờ khai quyết toán thuế TNDN 03/TNDN: Phụ lục 01 (Thông tin quan hệ liên kết), Phụ lục 02 (Danh mục hồ sơ Local File), Phụ lục 03 (Danh mục Master File), Phụ lục 04 (Báo cáo CbCR).",
    impactNote: "Kế toán Kiểu Việt tích dấu đầy đủ vào Phụ lục 01 xác nhận các giao dịch vay vốn nội bộ đúng quy định, tránh bị cơ quan thuế xử phạt ấn định giá."
  },
  {
    topic: "Ấn định thuế đối với doanh nghiệp không tuân thủ quy định về giao dịch liên kết (Điều 20)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ 20/2017] Ấn định mức thuế chung chung.",
    newRule: "[Căn cứ: Điều 20 NĐ 132/2020] Cơ quan thuế có quyền ấn định tỷ suất lợi nhuận gộp hoặc lợi nhuận thuần dựa trên cơ sở dữ liệu của ngành thuế nếu người nộp thuế không nộp các phụ lục giao dịch liên kết hoặc số liệu không trung thực.",
    impactNote: "Kiểu Việt chủ động minh bạch số liệu giao dịch liên kết, bảo đảm tỷ suất lợi nhuận công ty mẹ luôn nằm trong khoảng tứ phân vị an toàn."
  },
  {
    topic: "Xử lý hồi tố chi phí lãi vay cho các năm 2017 và 2018 (Điều 22)",
    type: "added",
    oldRule: "[Căn cứ: NĐ 20/2017] Khống chế 20% không được hồi tố.",
    newRule: "[Căn cứ: Điều 22 NĐ 132/2020] Cho phép người nộp thuế được khai bổ sung hồ sơ quyết toán thuế TNDN năm 2017, 2018 để áp dụng mức trần lãi vay 30% và bù trừ số thuế TNDN nộp thừa vào các năm tiếp theo.",
    impactNote: "Kiểu Việt đã thu hồi hàng tỷ đồng tiền thuế nộp thừa từ việc hồi tố chi phí lãi vay giai đoạn đầu tư máy móc trước đây."
  },
  {
    topic: "Trách nhiệm giải trình hồ sơ giao dịch liên kết trong thời hạn 30 ngày (Điều 20)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ 20/2017] Thời hạn cung cấp hồ sơ là 15 ngày làm việc.",
    newRule: "[Căn cứ: Điều 20 NĐ 132/2020] Người nộp thuế có trách nhiệm cung cấp Hồ sơ xác định giá giao dịch liên kết trong thời hạn 30 ngày làm việc kể từ ngày nhận được văn bản yêu cầu của cơ quan thuế trong quá trình thanh tra, kiểm tra.",
    impactNote: "Kiểu Việt luôn chuẩn bị sẵn sàng bộ hồ sơ Local File để cung cấp ngay trong tuần đầu tiên khi có đoàn thanh tra thuế."
  },
  {
    topic: "Hiệu lực thi hành và phạm vi áp dụng Nghị định 132/2020/NĐ-CP",
    type: "added",
    oldRule: "[Căn cứ: NĐ 20/2017, NĐ 68/2020] Các nghị định cũ.",
    newRule: "[Căn cứ: Điều 22 NĐ 132/2020] Nghị định áp dụng từ kỳ tính thuế TNDN năm 2020, bãi bỏ hoàn toàn Nghị định 20/2017 và Nghị định 68/2020.",
    impactNote: "Kiểu Việt áp dụng nhất quán trần lãi vay 30% EBITDA trong toàn bộ chiến lược tài chính và huy động vốn ngân hàng."
  }
];

// 9. nd-174-2016: 12 points
g2['nd-174-2016'].items = [
  {
    topic: "Quy định chi tiết các trường hợp không được làm kế toán và kế toán trưởng (Điều 19)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ 128/2004] Quy định cấm cha mẹ, vợ chồng làm kế toán trưởng chung cơ quan nhà nước.",
    newRule: "[Căn cứ: Điều 19 NĐ 174/2016] Mở rộng sang doanh nghiệp tư nhân, công ty TNHH/CP: Bố đẻ, mẹ đẻ, vợ, chồng, con đẻ, anh chị em ruột của người đại diện pháp luật, thành viên HĐQT không được làm Kế toán trưởng tại cùng đơn vị.",
    impactNote: "Kiểu Việt bổ nhiệm Kế toán trưởng hoàn toàn độc lập, có chứng chỉ hành nghề và không có quan hệ thân tộc với HĐQT để bảo đảm tính khách quan."
  },
  {
    topic: "Tiêu chuẩn và điều kiện thành lập Phòng Kế toán doanh nghiệp (Điều 20)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ 128/2004] Doanh nghiệp tự do bố trí người phụ trách kế toán.",
    newRule: "[Căn cứ: Điều 20 NĐ 174/2016] Bắt buộc doanh nghiệp phải bố trí Kế toán trưởng; trường hợp chưa có người đủ tiêu chuẩn thì chỉ được cử người phụ trách kế toán trong thời hạn tối đa không quá 12 tháng, sau đó phải bổ nhiệm Kế toán trưởng.",
    impactNote: "Kiểu Việt duy trì vị trí Kế toán trưởng chuyên trách liên tục, đáp ứng đầy đủ điều kiện pháp lý ký duyệt Báo cáo tài chính."
  },
  {
    topic: "Quy định về bảo quản, lưu trữ tài liệu kế toán trên phương tiện điện tử (Điều 10)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ 128/2004] Bắt buộc lưu trữ bản giấy tại kho lưu trữ của đơn vị.",
    newRule: "[Căn cứ: Điều 10 NĐ 174/2016] Tài liệu kế toán lưu trữ trên phương tiện điện tử phải bảo đảm an toàn, bảo mật và sao lưu định kỳ tối thiểu trên 2 thiết bị lưu trữ độc lập hoặc trên dịch vụ lưu trữ đám mây đạt chuẩn.",
    impactNote: "Kiểu Việt sao lưu dữ liệu kế toán tự động hàng ngày lên hệ sinh thái đám mây bảo mật cao, phòng chống mất mát dữ liệu."
  },
  {
    topic: "Thời điểm tiêu hủy tài liệu kế toán hết thời hạn lưu trữ (Điều 15 & 16)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ 128/2004] Thủ tục tiêu hủy chứng từ giấy đơn giản.",
    newRule: "[Căn cứ: Điều 15-16 NĐ 174/2016] Tiêu hủy tài liệu kế toán phải thành lập Hội đồng tiêu hủy gồm Tổng Giám đốc, Kế toán trưởng, đại diện lưu trữ; lập Bảng kê danh mục tài liệu tiêu hủy và Biên bản tiêu hủy lưu trữ vĩnh viễn.",
    impactNote: "Kiểu Việt tuân thủ nghiêm ngặt quy trình tiêu hủy chứng từ kế toán hết hạn 10 năm, lưu giữ biên bản đầy đủ tránh rủi ro kiểm tra."
  },
  {
    topic: "Đăng ký và quản lý hành nghề dịch vụ kế toán tại Việt Nam (Điều 25-28)",
    type: "added",
    oldRule: "[Căn cứ: NĐ 128/2004] Chưa có quy định cấp Giấy chứng nhận đủ điều kiện kinh doanh dịch vụ kế toán.",
    newRule: "[Căn cứ: Điều 25-28 NĐ 174/2016] Doanh nghiệp kinh doanh dịch vụ kế toán phải có tối thiểu 2 kế toán viên có chứng chỉ hành nghề kế toán do Bộ Tài chính cấp và người đại diện pháp luật phải là kế toán viên hành nghề.",
    impactNote: "Kiểu Việt chỉ ký hợp đồng kiểm toán và tư vấn thuế với các công ty kiểm toán nằm trong danh sách đủ điều kiện của Bộ Tài chính."
  },
  {
    topic: "Xử lý tài liệu kế toán trong trường hợp doanh nghiệp bị chia, tách, sáp nhập (Điều 13)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ 128/2004] Bàn giao tài liệu kế toán chung chung không có biên bản chi tiết.",
    newRule: "[Căn cứ: Điều 13 NĐ 174/2016] Bắt buộc lập Báo cáo tài chính tại thời điểm chia tách, bàn giao nguyên trạng toàn bộ chứng từ, sổ sách kế toán có Biên bản bàn giao chi tiết giữa các đơn vị thừa kế quyền và nghĩa vụ.",
    impactNote: "Bảo đảm tính liên tục và pháp lý của số liệu tài chính khi Kiểu Việt thành lập thêm công ty thành viên mỏ khoáng sản."
  },
  {
    topic: "Quy định về đơn vị tiền tệ trong kế toán và chuyển đổi BCTC sang VNĐ (Điều 4)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ 128/2004] Bắt buộc ghi sổ kế toán bằng đồng Việt Nam (VNĐ).",
    newRule: "[Căn cứ: Điều 4 NĐ 174/2016] Doanh nghiệp có thu chi chủ yếu bằng ngoại tệ được chọn ngoại tệ làm đơn vị tiền tệ ghi sổ kế toán; khi lập BCTC công khai tại Việt Nam bắt buộc phải chuyển đổi sang VNĐ theo tỷ giá quy định.",
    impactNote: "Kiểu Việt chọn đơn vị tiền tệ ghi sổ là VNĐ, phù hợp tuyệt đối với hoạt động thi công hạ tầng giao thông trong nước."
  },
  {
    topic: "Chữ ký trên chứng từ kế toán và ủy quyền ký chứng từ (Điều 8)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ 128/2004] Cấm ký chứng từ bằng mực đỏ, mực dễ phai.",
    newRule: "[Căn cứ: Điều 8 NĐ 174/2016] Khẳng định: Chữ ký trên chứng từ kế toán phải ký bằng bút mực không phai; không ký bằng mực đỏ hoặc đóng dấu chữ ký khắc sẵn; chữ ký điện tử trên chứng từ kế toán có giá trị tương đương chữ ký tay.",
    impactNote: "Kiểu Việt cấm tuyệt đối việc sử dụng con dấu chữ ký khắc sẵn trên phiếu chi tiền mặt, phiếu xuất kho, bảo đảm an toàn pháp lý chứng từ."
  },
  {
    topic: "Trách nhiệm của cơ quan nhà nước trong việc thanh tra, kiểm tra kế toán (Điều 34)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ 128/2004] Cơ quan thuế và tài chính có thể kiểm tra kế toán bất cứ lúc nào.",
    newRule: "[Căn cứ: Điều 34 NĐ 174/2016] Kiểm tra kế toán chỉ được thực hiện khi có quyết định bằng văn bản của cơ quan có thẩm quyền; không kiểm tra quá 1 lần/năm đối với một đơn vị trừ khi có dấu hiệu vi phạm rõ ràng.",
    impactNote: "Bảo vệ hoạt động sản xuất kinh doanh của Kiểu Việt không bị xáo trộn bởi các đợt thanh kiểm tra chồng chéo."
  },
  {
    topic: "Quy định về kiểm kê tài sản cuối kỳ kế toán năm (Điều 11)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ 128/2004] Kiểm kê tài sản mang tính khuyến nghị.",
    newRule: "[Căn cứ: Điều 11 NĐ 174/2016] Bắt buộc doanh nghiệp phải kiểm kê tài sản tại thời điểm kết thúc kỳ kế toán năm trước khi lập BCTC: Kiểm kê quỹ tiền mặt, số dư tiền gửi ngân hàng, hàng tồn kho cát đá và máy móc thi công.",
    impactNote: "Hội đồng kiểm kê Kiểu Việt thực hiện kiểm kê thực tế ngày 31/12 hàng năm, lập biên bản đối soát số liệu sổ sách và thực tế."
  },
  {
    topic: "Quy định công khai Báo cáo tài chính đối với doanh nghiệp xây dựng (Điều 12)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ 128/2004] Công khai BCTC chỉ áp dụng cho doanh nghiệp nhà nước.",
    newRule: "[Căn cứ: Điều 12 NĐ 174/2016] Doanh nghiệp huy động vốn trái phiếu hoặc tham gia đấu thầu dự án đầu tư công bắt buộc phải công khai BCTC đã được kiểm toán trên trang web công ty trong vòng 120 ngày.",
    impactNote: "Kiểu Việt công khai BCTC kiểm toán minh bạch, khẳng định năng lực tài chính hàng đầu khi tham gia đấu thầu cao tốc."
  },
  {
    topic: "Hiệu lực thi hành Nghị định 174/2016/NĐ-CP",
    type: "added",
    oldRule: "[Căn cứ: NĐ 128/2004, NĐ 129/2004] Các nghị định cũ.",
    newRule: "[Căn cứ: Điều 38 NĐ 174/2016] Nghị định có hiệu lực từ ngày 01/01/2017, thay thế hoàn toàn Nghị định 128/2004 và Nghị định 129/2004 hướng dẫn Luật Kế toán.",
    impactNote: "Kiểu Việt vận hành toàn bộ bộ máy kế toán theo chuẩn mực Nghị định 174 trong suốt 9 năm qua với tính tuân thủ tuyệt đối."
  }
];

// 10. nd-41-2018: 10 points
g2['nd-41-2018'].items = [
  {
    topic: "Nâng mức phạt hành vi để ngoài sổ sách kế toán tài sản, công nợ (Điều 16)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ 105/2013] Phạt từ 10.000.000 đến 20.000.000 đồng.",
    newRule: "[Căn cứ: Khoản 3 Điều 16 NĐ 41/2018] Phạt tiền từ 20.000.000 đến 30.000.000 đồng đối với hành vi để ngoài sổ kế toán tài sản của đơn vị hoặc tài sản liên quan đến đơn vị; buộc nộp lại số lợi bất hợp pháp.",
    impactNote: "Kiểu Việt quản lý 100% tài sản xe máy thiết bị và mỏ đất đá trên sổ sách kế toán, cấm để ngoài sổ bất kỳ tài sản nào."
  },
  {
    topic: "Khung phạt hành vi lập 2 hệ thống sổ kế toán tài chính (Điều 16)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ 105/2013] Phạt tiền từ 20.000.000 đến 30.000.000 đồng.",
    newRule: "[Căn cứ: Khoản 4 Điều 16 NĐ 41/2018] Phạt tiền từ 40.000.000 đến 50.000.000 đồng đối với hành vi lập hai hệ thống sổ kế toán tài chính trở lên hoặc để ngoài sổ kế toán tài sản, nợ phải trả; nếu nghiêm trọng chuyển hồ sơ khởi tố hình sự.",
    impactNote: "Kiểu Việt thực thi nguyên tắc 'Một sổ sách kế toán duy nhất', minh bạch phục vụ kiểm toán nhà nước, ngân hàng và cơ quan thuế."
  },
  {
    topic: "Xử phạt hành vi không bổ nhiệm Kế toán trưởng đúng quy định (Điều 17)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ 105/2013] Phạt từ 5.000.000 đến 10.000.000 đồng.",
    newRule: "[Căn cứ: Điều 17 NĐ 41/2018] Phạt tiền từ 10.000.000 đến 20.000.000 đồng đối với hành vi bố trí người làm kế toán trưởng không đủ tiêu chuẩn hoặc không bổ nhiệm kế toán trưởng quá 12 tháng kể từ ngày thành lập.",
    impactNote: "Bảo đảm Kiểu Việt luôn có Quyết định bổ nhiệm Kế toán trưởng hợp pháp, đầy đủ chứng chỉ bồi dưỡng kế toán trưởng theo luật."
  },
  {
    topic: "Khung phạt hành vi làm mất, hỏng tài liệu kế toán trong thời hạn lưu trữ (Điều 15)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ 105/2013] Phạt từ 5.000.000 đến 10.000.000 đồng.",
    newRule: "[Căn cứ: Điều 15 NĐ 41/2018] Phạt cảnh cáo nếu làm mất tài liệu kế toán nhưng khôi phục lại được; phạt tiền từ 10.000.000 đến 20.000.000 đồng nếu làm mất, tiêu hủy tài liệu kế toán trước thời hạn lưu trữ quy định.",
    impactNote: "Hệ thống lưu trữ số hóa đám mây của Kiểu Việt bảo vệ an toàn 100% tài liệu kế toán, triệt tiêu nguy cơ thất lạc chứng từ gốc."
  },
  {
    topic: "Xử phạt hành vi ký chứng từ kế toán khi chưa ghi đủ nội dung (Điều 8)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ 105/2013] Phạt từ 1.000.000 đến 3.000.000 đồng.",
    newRule: "[Căn cứ: Điều 8 NĐ 41/2018] Phạt tiền từ 3.000.000 đến 5.000.000 đồng đối với hành vi ký chứng từ kế toán khi chưa ghi đủ các nội dung theo quy định (ký khống trên phiếu chi, phiếu xuất kho).",
    impactNote: "Nghiêm cấm kỹ sư công trường Kiểu Việt ký trước vào biên bản nghiệm thu hoặc phiếu xuất vật tư khi chưa có số liệu cân đo thực tế."
  },
  {
    topic: "Khung phạt hành vi nộp chậm Báo cáo tài chính năm (Điều 12)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ 105/2013] Nộp chậm BCTC phạt từ 5.000.000 đến 10.000.000 đồng.",
    newRule: "[Căn cứ: Điều 12 NĐ 41/2018] Phạt cảnh cáo nếu chậm nộp dưới 10 ngày có tình tiết giảm nhẹ; phạt từ 5 - 10 triệu nếu chậm từ 1 đến 3 tháng; phạt từ 10 - 20 triệu nếu chậm trên 3 tháng; phạt từ 40 - 50 triệu nếu không nộp BCTC.",
    impactNote: "Phòng Kế toán Kiểu Việt hoàn thành và nộp BCTC trước ngày 25/03 hàng năm, tuyệt đối không để xảy ra vi phạm chậm nộp."
  },
  {
    topic: "Xử phạt hành vi không kiểm kê tài sản vào cuối kỳ kế toán năm (Điều 14)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ 105/2013] Phạt từ 3.000.000 đến 5.000.000 đồng.",
    newRule: "[Căn cứ: Điều 14 NĐ 41/2018] Phạt tiền từ 5.000.000 đến 10.000.000 đồng đối với hành vi không lập biên bản kiểm kê tài sản vào cuối kỳ kế toán năm hoặc không phản ánh kết quả kiểm kê vào sổ kế toán.",
    impactNote: "Kiểu Việt ban hành Quyết định thành lập Hội đồng kiểm kê hàng năm, lập biên bản kiểm kê mỏ đá và máy thi công đầy đủ."
  },
  {
    topic: "Khung phạt vi phạm về công khai Báo cáo tài chính (Điều 13)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ 105/2013] Phạt từ 5.000.000 đến 10.000.000 đồng.",
    newRule: "[Căn cứ: Điều 13 NĐ 41/2018] Phạt tiền từ 10.000.000 đến 20.000.000 đồng đối với hành vi công khai BCTC chậm quá thời hạn từ 1 đến 3 tháng; phạt từ 20 - 30 triệu nếu không công khai BCTC theo quy định.",
    impactNote: "Kiểu Việt đăng tải BCTC kiểm toán công khai trên website nội bộ đúng hạn 120 ngày sau kết thúc năm tài chính."
  },
  {
    topic: "Thẩm quyền xử phạt của cơ quan Thanh tra Tài chính và UBND các cấp (Điều 29)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ 105/2013] Phân cấp thẩm quyền xử phạt chưa rõ.",
    newRule: "[Căn cứ: Điều 29 NĐ 41/2018] Chánh Thanh tra Bộ Tài chính, Chánh Thanh tra Sở Tài chính, Chủ tịch UBND cấp tỉnh có thẩm quyền xử phạt tiền đến mức tối đa 100.000.000 đồng đối với tổ chức vi phạm kế toán.",
    impactNote: "Kế toán trưởng Kiểu Việt nắm chắc các quy chuẩn pháp lý để làm việc minh bạch với đoàn Thanh tra Sở Tài chính."
  },
  {
    topic: "Hiệu lực thi hành Nghị định 41/2018/NĐ-CP",
    type: "added",
    oldRule: "[Căn cứ: NĐ 105/2013] Nghị định cũ.",
    newRule: "[Căn cứ: Điều 33 NĐ 41/2018] Nghị định có hiệu lực từ ngày 01/05/2018, bãi bỏ hoàn toàn Nghị định 105/2013 về xử phạt kế toán, kiểm toán.",
    impactNote: "Toàn bộ quy trình kiểm soát nội bộ Kiểu Việt được thiết lập để ngăn chặn từ sớm mọi hành vi vi phạm theo NĐ 41."
  }
];

// Write updated group 2 back to file
const outputCode = `import { DecreeDiffData } from '../diff-types';\n\nexport const group2InvoicesTaxAdmin: Record<string, DecreeDiffData> = ` + JSON.stringify(g2, null, 2) + `;\n`;
fs.writeFileSync(g2Path, outputCode, 'utf8');
console.log('Group 2 fully expanded! Decrees count:', Object.keys(g2).length);
