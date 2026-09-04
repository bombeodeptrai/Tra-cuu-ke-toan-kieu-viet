const fs = require('fs');
const path = require('path');

const g2Path = path.join(__dirname, '..', 'src', 'data', 'diffs', 'group2_invoices_tax_admin.ts');
const raw = fs.readFileSync(g2Path, 'utf8');
const jsonStr = raw.replace(/import[^;]+;/, '').replace(/export const \w+[^=]+=/, '').replace(/;\s*$/, '');
const g2 = eval('(' + jsonStr + ')');

g2['nd-123-2020'].items = [
  {
    topic: "Thời điểm lập hóa đơn đối với xây dựng, lắp đặt (Điều 9 Khoản 4 Điểm c)",
    type: "modified",
    oldRule: "[Căn cứ: Điều 16 Thông tư 39/2014 & NĐ 51/2010] Ngày lập hóa đơn đối với xây dựng, lắp đặt là ngày nghiệm thu, bàn giao công trình, hạng mục công trình, khối lượng xây dựng, lắp đặt hoàn thành, không phân biệt đã thu được tiền hay chưa thu được tiền.",
    newRule: "[Căn cứ: Điều 9 Khoản 4 Điểm c NĐ 123/2020] Quy định chặt chẽ: Thời điểm lập hóa đơn là thời điểm nghiệm thu, bàn giao từng hạng mục hoặc toàn bộ công trình, không phân biệt đã thu tiền hay chưa. Trường hợp giao hàng nhiều lần hoặc bàn giao từng giai đoạn thì mỗi lần giao hàng hoặc bàn giao đều phải lập hóa đơn cho khối lượng, giá trị hàng hóa, dịch vụ được bàn giao tương ứng.",
    impactNote: "Kiểu Việt bắt buộc phải phối hợp chặt chẽ giữa Kỹ sư công trường và Kế toán: Ngay trong ngày ký Biên bản nghiệm thu hoàn thành A-B (Mẫu 03a) phải xuất ngay Hóa đơn điện tử, tuyệt đối không được chờ đến khi Chủ đầu tư giải ngân mới xuất hóa đơn (tránh phạt từ 4-8 triệu/hóa đơn)."
  },
  {
    topic: "Bắt buộc 100% sử dụng hóa đơn điện tử, xóa bỏ hoàn toàn hóa đơn giấy (Điều 59 & 60)",
    type: "removed",
    oldRule: "[Căn cứ: Nghị định 51/2010/NĐ-CP] Cho phép doanh nghiệp sử dụng song song 3 hình thức: Hóa đơn tự in, hóa đơn đặt in bằng giấy và hóa đơn điện tử.",
    newRule: "[Căn cứ: Điều 59-60 NĐ 123/2020] Bãi bỏ hoàn toàn hóa đơn giấy từ ngày 01/07/2022. 100% doanh nghiệp, tổ chức kinh tế bắt buộc phải chuyển đổi sang sử dụng Hóa đơn điện tử có mã hoặc không có mã của cơ quan thuế theo chuẩn dữ liệu thống nhất.",
    impactNote: "Toàn bộ chuỗi cung ứng vật tư của Kiểu Việt (mua thép, xi măng, xăng dầu, thuê máy xúc) phải cung cấp hóa đơn điện tử hợp pháp mới được chấp nhận thanh toán."
  },
  {
    topic: "Quy chuẩn định dạng dữ liệu hóa đơn điện tử XML (Điều 12)",
    type: "added",
    oldRule: "[Căn cứ: Thông tư 32/2011/TT-BTC] Mỗi nhà cung cấp giải pháp hóa đơn tự xây dựng định dạng dữ liệu riêng (PDF, HTML), không có chuẩn dữ liệu chung.",
    newRule: "[Căn cứ: Điều 12 NĐ 123/2020] Bắt buộc định dạng dữ liệu hóa đơn điện tử là tệp XML gồm 2 thành phần: thành phần chứa dữ liệu nghiệp vụ hóa đơn điện tử và thành phần chứa dữ liệu chữ ký số; bản thể hiện PDF chỉ có giá trị tra cứu, không có giá trị pháp lý gốc.",
    impactNote: "Kế toán Kiểu Việt lưu trữ và kiểm tra bắt buộc phải lưu tệp gốc định dạng .XML trên hệ thống máy chủ và đối chiếu mã hash chữ ký số."
  },
  {
    topic: "Quy trình xử lý hóa đơn điện tử có sai sót (Mẫu 04/SS-HĐĐT tại Điều 19)",
    type: "modified",
    oldRule: "[Căn cứ: TT 39/2014] Lập biên bản thu hồi hóa đơn giấy và xuất hóa đơn mới thay thế.",
    newRule: "[Căn cứ: Điều 19 NĐ 123/2020] Bãi bỏ thủ tục thu hồi. Trường hợp sai sót về tên, địa chỉ người mua nhưng không sai mã số thuế thì chỉ cần gửi Mẫu 04/SS-HĐĐT cho cơ quan thuế và thông báo cho người mua. Nếu sai mã số thuế, tiền thuế, đơn giá thì lập Hóa đơn điện tử điều chỉnh hoặc Hóa đơn điện tử thay thế.",
    impactNote: "Xử lý sai sót nghiệm thu công trình giữa Kiểu Việt và Ban QLDA nhanh chóng, không bị chậm trễ hồ sơ thanh toán Kho bạc."
  },
  {
    topic: "Bảng tổng hợp dữ liệu hóa đơn điện tử Mẫu 01/TH-HĐĐT (Điều 22)",
    type: "added",
    oldRule: "[Căn cứ: NĐ 51/2010] Nộp Báo cáo tình hình sử dụng hóa đơn Mẫu BC26/AC định kỳ theo quý.",
    newRule: "[Căn cứ: Điều 22 NĐ 123/2020] Bãi bỏ BC26/AC. Doanh nghiệp thuộc diện sử dụng hóa đơn điện tử không có mã gửi Bảng tổng hợp dữ liệu hóa đơn điện tử (Mẫu 01/TH-HĐĐT) cùng thời hạn nộp hồ sơ khai thuế GTGT.",
    impactNote: "Phòng Thuế Kiểu Việt giảm bớt 100% thủ tục báo cáo BC26/AC, dữ liệu hóa đơn được tự động đối soát trên hệ thống thuế điện tử."
  },
  {
    topic: "Thời hạn chuyển dữ liệu hóa đơn điện tử đến cơ quan thuế (Điều 22)",
    type: "added",
    oldRule: "[Căn cứ: NĐ 51/2010] Không có quy định gửi dữ liệu từng hóa đơn đến cơ quan thuế ngay khi xuất.",
    newRule: "[Căn cứ: Điều 22 NĐ 123/2020] Đối với hóa đơn có mã: Hệ thống chuyển dữ liệu ngay khi người bán ký số; đối với hóa đơn không có mã: Chuyển dữ liệu chậm nhất cùng ngày gửi hóa đơn cho người mua.",
    impactNote: "Chấm dứt hoàn toàn tình trạng xuất lùi ngày hóa đơn, bảo đảm tính minh bạch về thời điểm nghiệm thu công trình của Kiểu Việt."
  },
  {
    topic: "Hóa đơn điện tử chiết khấu thương mại khối lượng lớn (Điều 19)",
    type: "modified",
    oldRule: "[Căn cứ: TT 39/2014] Chiết khấu thương mại ghi vào hóa đơn lần mua cuối cùng hoặc lập hóa đơn điều chỉnh.",
    newRule: "[Căn cứ: Điều 19 NĐ 123/2020] Trường hợp số tiền chiết khấu thương mại được lập khi kết thúc chương trình thì được lập hóa đơn điều chỉnh giảm doanh thu, giảm thuế kèm bảng kê các số hóa đơn cần điều chỉnh.",
    impactNote: "Kiểu Việt nhận hóa đơn chiết khấu giảm giá vật tư thép từ Hòa Phát được hạch toán giảm chi phí xây lắp chính xác, không bị rủi ro thuế."
  },
  {
    topic: "Hóa đơn quà tặng, biếu tặng công nhân viên và tiêu dùng nội bộ (Điều 4)",
    type: "modified",
    oldRule: "[Căn cứ: TT 39/2014] Tiêu dùng nội bộ phục vụ thi công công trình không phải xuất hóa đơn GTGT.",
    newRule: "[Căn cứ: Điều 4 NĐ 123/2020] Khi xuất hàng hóa để tiêu dùng nội bộ luân chuyển nội bộ phục vụ sản xuất thì không phải lập hóa đơn; nhưng xuất hàng biếu, tặng, trả thay lương cho người lao động bắt buộc phải lập hóa đơn điện tử như bán hàng thông thường.",
    impactNote: "Kiểu Việt xuất xi măng, đá để làm đường công vụ nội bộ chỉ dùng Phiếu xuất kho kiêm vận chuyển nội bộ điện tử, không phải xuất hóa đơn GTGT."
  },
  {
    topic: "Quy định bắt buộc về Tiêu thức chữ ký số người mua (Điều 10 Khoản 14)",
    type: "modified",
    oldRule: "[Căn cứ: TT 32/2011] Người mua là doanh nghiệp bắt buộc phải ký số vào hóa đơn điện tử mới có giá trị pháp lý.",
    newRule: "[Căn cứ: Điều 10 Khoản 14 Điểm e NĐ 123/2020] Trường hợp người mua là cơ sở kinh doanh nếu có thỏa thuận thì ký số; nếu không có thỏa thuận thì trên hóa đơn điện tử không nhất thiết phải có chữ ký số của người mua (trừ trường hợp hai bên có quy định riêng trong hợp đồng).",
    impactNote: "Khách hàng mua đá, cát lẻ của Kiểu Việt không cần có chữ ký số vẫn nhận được hóa đơn điện tử hợp lệ để hạch toán thuế."
  },
  {
    topic: "Hóa đơn điện tử khởi tạo từ máy tính tiền có kết nối chuyển dữ liệu (Điều 11)",
    type: "added",
    oldRule: "[Căn cứ: NĐ 51/2010] Chưa có quy định về hóa đơn điện tử máy tính tiền.",
    newRule: "[Căn cứ: Điều 11 NĐ 123/2020] Doanh nghiệp, hộ kinh doanh bán lẻ, ăn uống, xăng dầu được áp dụng hóa đơn điện tử khởi tạo từ máy tính tiền kết nối dữ liệu điện tử với cơ quan thuế; có giá trị như hóa đơn có mã.",
    impactNote: "Kiểu Việt lấy hóa đơn xăng dầu từng ca máy đào thi công một cách thuận lợi, hợp thức hóa 100% chi phí nhiên liệu hiện trường."
  },
  {
    topic: "Ủy nhiệm lập hóa đơn điện tử cho bên thứ ba (Điều 3)",
    type: "added",
    oldRule: "[Căn cứ: NĐ 51/2010] Quy định ủy nhiệm lập hóa đơn giấy phức tạp và ít áp dụng.",
    newRule: "[Căn cứ: Điều 3 NĐ 123/2020] Người bán được quyền ủy nhiệm cho bên thứ ba là bên có quan hệ liên kết hoặc có hợp đồng kinh tế lập hóa đơn điện tử; phải thông báo với cơ quan thuế trước khi xuất hóa đơn.",
    impactNote: "Tạo điều kiện cho Kiểu Việt ủy quyền xuất hóa đơn cho các Ban chỉ huy dự án hoặc tổng thầu liên danh."
  },
  {
    topic: "Tiêu chuẩn hệ thống lưu trữ hóa đơn điện tử tối thiểu 10 năm (Điều 6)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ 51/2010] Lưu trữ bản in hóa đơn giấy trong kho lưu trữ.",
    newRule: "[Căn cứ: Điều 6 NĐ 123/2020] Hóa đơn điện tử phải được lưu trữ bằng phương tiện điện tử theo quy định của Luật Kế toán và Luật Giao dịch điện tử tối thiểu 10 năm; bảo đảm tính toàn vẹn và khả năng truy cập đọc được dữ liệu trong suốt thời hạn.",
    impactNote: "Kiểu Việt ký hợp đồng lưu trữ đám mây với Viettel/VNPT bảo đảm sao lưu định kỳ hóa đơn điện tử an toàn tuyệt đối."
  },
  {
    topic: "Tra cứu tính hợp pháp của hóa đơn trên Cổng thông tin Tổng cục Thuế",
    type: "added",
    oldRule: "[Căn cứ: NĐ 51/2010] Tra cứu hóa đơn giấy trên trang tracuuhoadon.gdt.gov.vn thường bị chậm cập nhật thông báo phát hành.",
    newRule: "[Căn cứ: Điều 29 NĐ 123/2020] Cơ quan thuế cung cấp Cổng hoadondientu.gdt.gov.vn cho phép người mua tra cứu tức thời trạng thái của từng hóa đơn: Hóa đơn hợp pháp, hóa đơn của doanh nghiệp ngừng hoạt động, hóa đơn bị hủy/thay thế.",
    impactNote: "Kế toán Kiểu Việt quét tự động mã hóa đơn đầu vào của nhà cung cấp để chặn đứng hóa đơn của các doanh nghiệp ma, doanh nghiệp bỏ trốn."
  },
  {
    topic: "Xử phạt đối với hành vi sử dụng hóa đơn bất hợp pháp (Điều 4)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ 51/2010] Quy định chung về hóa đơn khống.",
    newRule: "[Căn cứ: Điều 4 NĐ 123/2020] Định nghĩa cụ thể 8 trường hợp sử dụng hóa đơn bất hợp pháp và sử dụng bất hợp pháp hóa đơn (hóa đơn không có mã, hóa đơn lập khi chưa có thông báo chấp nhận của cơ quan thuế, hóa đơn sai lệch nội dung).",
    impactNote: "Giúp Kiểu Việt sàng lọc và loại trừ 100% rủi ro dính líu đến các đường dây mua bán hóa đơn cát đá lậu trôi nổi trên thị trường."
  },
  {
    topic: "Chuyển đổi hóa đơn điện tử sang chứng từ giấy chứng minh nguồn gốc lưu thông",
    type: "modified",
    oldRule: "[Căn cứ: TT 32/2011] In chuyển đổi hóa đơn điện tử chỉ được in 1 lần duy nhất có chữ ký đóng dấu người chuyển đổi.",
    newRule: "[Căn cứ: Điều 7 NĐ 123/2020] Hóa đơn điện tử được in ra giấy để chứng minh nguồn gốc xuất xứ hàng hóa khi vận chuyển lưu thông trên đường; bản in chỉ có giá trị lưu thông, không có giá trị thanh toán hay kê khai thuế.",
    impactNote: "Lái xe Kiểu Việt chở vật tư cát, đá, sắt thép ra công trường chỉ cần mang bản in hóa đơn điện tử hoặc xuất trình mã QR tra cứu trên điện thoại."
  },
  {
    topic: "Trách nhiệm cung cấp dữ liệu hóa đơn cho cơ quan điều tra, thanh tra",
    type: "added",
    oldRule: "[Căn cứ: NĐ 51/2010] Phải nộp bản gốc hóa đơn giấy.",
    newRule: "[Căn cứ: Điều 30 NĐ 123/2020] Cơ quan thuế trực tiếp trích xuất dữ liệu hóa đơn điện tử cung cấp cho cơ quan công an, tòa án, thanh tra; doanh nghiệp không phải in ấn tài liệu giấy giải trình trừ trường hợp có yêu cầu đặc biệt.",
    impactNote: "Giảm áp lực tiếp đón các đoàn thanh tra, hồ sơ giải trình chi phí xây dựng của Kiểu Việt được đối soát tự động qua cổng số."
  }
];

g2['tt-78-2021'].items = [
  {
    topic: "Quy chuẩn ký hiệu mẫu số và ký hiệu hóa đơn điện tử mới (Điều 4)",
    type: "modified",
    oldRule: "[Căn cứ: TT 32/2011] Ký hiệu mẫu số hóa đơn dạng 01GTKT0/001, ký hiệu hóa đơn gồm 2 chữ cái như AA/12P, AA/12E.",
    newRule: "[Căn cứ: Điều 4 TT 78/2021] Thống nhất ký hiệu chuẩn quốc gia: Ký hiệu mẫu số gồm 1 chữ số (1-HĐ GTGT, 2-HĐ bán hàng...); Ký hiệu hóa đơn gồm 6 ký tự (C22TAA: C là có mã, 22 là năm lập, T là hóa đơn điện tử doanh nghiệp áp dụng).",
    impactNote: "Kiểu Việt đăng ký đúng dải ký hiệu C25TKV trên phần mềm hóa đơn điện tử, tránh sai sót dẫn đến hóa đơn bị cơ quan thuế từ chối cấp mã."
  },
  {
    topic: "Quy trình lập biên bản thỏa thuận sai sót trước khi lập hóa đơn điều chỉnh (Điều 7)",
    type: "modified",
    oldRule: "[Căn cứ: TT 39/2014] Lập biên bản điều chỉnh hóa đơn bằng giấy có ký tên đóng dấu sống của hai bên.",
    newRule: "[Căn cứ: Điều 7 TT 78/2021] Trường hợp điều chỉnh hóa đơn sai sót, hai bên phải có văn bản thỏa thuận ghi rõ sai sót (có thể ký số điện tử); sau đó người bán lập hóa đơn điện tử điều chỉnh hoặc thay thế và gửi Mẫu 04/SS-HĐĐT cho cơ quan thuế.",
    impactNote: "Kiểu Việt ký số biên bản thỏa thuận sai sót nghiệm thu công trình với Chủ đầu tư hoàn toàn online, không tốn thời gian chuyển phát nhanh."
  },
  {
    topic: "Tiêu chí phân loại doanh nghiệp rủi ro cao về thuế chuyển sang dùng hóa đơn có mã (Điều 5)",
    type: "added",
    oldRule: "[Căn cứ: TT 39/2014] Tiêu chí doanh nghiệp rủi ro thuế chưa định lượng rõ ràng.",
    newRule: "[Căn cứ: Điều 5 TT 78/2021] Quy định rõ các tiêu chí doanh nghiệp rủi ro cao: Vốn dưới 15 tỷ đồng có doanh thu tăng đột biến; doanh nghiệp thay đổi địa chỉ kinh doanh nhiều lần; doanh nghiệp có giám đốc từng là chủ sở hữu công ty bỏ trốn. Các đối tượng này bị bắt buộc chuyển từ hóa đơn không mã sang có mã.",
    impactNote: "Kiểu Việt duy trì hồ sơ tuân thủ thuế loại A, bảo đảm quyền được sử dụng hóa đơn điện tử không có mã thuận tiện cho hoạt động xuất hóa đơn gói thầu lớn."
  },
  {
    topic: "Hóa đơn điện tử chiết khấu thương mại căn cứ Bảng kê Mẫu 04 (Điều 7)",
    type: "modified",
    oldRule: "[Căn cứ: TT 39/2014] Lập hóa đơn chiết khấu ghi chung chung không có bảng kê chi tiết các hóa đơn cũ.",
    newRule: "[Căn cứ: Điều 7 TT 78/2021] Bắt buộc trên hóa đơn điện tử điều chỉnh giảm chiết khấu thương mại phải ghi rõ: 'Điều chỉnh giảm doanh thu theo Bảng kê số... ngày...' kèm danh sách số, ký hiệu của các hóa đơn đã xuất trước đây.",
    impactNote: "Bảo đảm Kiểu Việt được hạch toán giảm trừ doanh thu và thuế GTGT đầu ra hợp pháp khi chiết khấu cho khách mua đá mỏ số lượng lớn."
  },
  {
    topic: "Thời hạn cơ quan thuế phản hồi Thông báo sai sót Mẫu 01/TB-HĐSS (Điều 7)",
    type: "added",
    oldRule: "[Căn cứ: TT 39/2014] Không có quy định thời hạn cơ quan thuế rà soát hóa đơn sai sót.",
    newRule: "[Căn cứ: Điều 7 TT 78/2021] Trong thời hạn 01 ngày làm việc kể từ khi nhận được Mẫu 04/SS-HĐĐT, cơ quan thuế phải ban hành Thông báo tiếp nhận và xử lý (Mẫu 01/TB-HĐSS) phản hồi cho người nộp thuế biết hóa đơn được chấp nhận hay từ chối.",
    impactNote: "Kiểu Việt nắm chắc tình trạng xử lý của cơ quan thuế trong vòng 24 giờ, kịp thời xuất hóa đơn thay thế cho gói thầu."
  },
  {
    topic: "Quy định chi tiết về ủy nhiệm lập hóa đơn điện tử (Điều 3)",
    type: "added",
    oldRule: "[Căn cứ: TT 39/2014] Thủ tục ủy nhiệm hóa đơn giấy rườm rà.",
    newRule: "[Căn cứ: Điều 3 TT 78/2021] Quy định rõ nội dung Hợp đồng ủy nhiệm: Mục đích, thời hạn, phương thức lập và ký số; người ủy nhiệm phải nộp Mẫu 01ĐKTĐ/HĐĐT cho cơ quan thuế trước khi bên nhận ủy nhiệm xuất hóa đơn.",
    impactNote: "Áp dụng chuẩn xác khi Kiểu Việt ủy quyền cho Chi nhánh Gia Lai xuất hóa đơn bán khoáng sản đá, cát tại chân mỏ."
  },
  {
    topic: "Hóa đơn điện tử dịch vụ vận tải, bốc xúc đất đá công trình (Điều 4)",
    type: "added",
    oldRule: "[Căn cứ: TT 39/2014] Hóa đơn vận tải thường ghi chung chung 'Cước vận chuyển'.",
    newRule: "[Căn cứ: Điều 4 TT 78/2021] Bắt buộc ghi rõ: Cung đường vận chuyển, khối lượng m3 hoặc tấn, số hiệu xe ben chuyên chở và số chuyến theo nhật trình vận chuyển.",
    impactNote: "Hồ sơ chi phí thuê xe chở đất đắp của Kiểu Việt được kiểm toán chấp nhận 100%, không bị bóc tách chi phí xăng xe vận tải."
  },
  {
    topic: "Xử lý chuyển tiếp: Hủy toàn bộ hóa đơn giấy cũ (Điều 12)",
    type: "removed",
    oldRule: "[Căn cứ: TT 39/2014] Hóa đơn giấy chưa sử dụng hết được tiếp tục lưu kho.",
    newRule: "[Căn cứ: Điều 12 TT 78/2021] Bắt buộc các doanh nghiệp phải tiêu hủy toàn bộ các cuốn hóa đơn giấy còn tồn và nộp Báo cáo hủy hóa đơn (Mẫu TB03/AC) cho cơ quan thuế trước khi đăng ký sử dụng hóa đơn điện tử.",
    impactNote: "Kiểu Việt đã hoàn tất thủ tục tiêu hủy toàn bộ hóa đơn giấy tồn kho, bảo đảm không có rủi ro phạt lưu trữ hóa đơn cũ."
  },
  {
    topic: "Tiêu chuẩn kỹ thuật kết nối giữa doanh nghiệp và đơn vị cung cấp giải pháp TVAN (Điều 10)",
    type: "added",
    oldRule: "[Căn cứ: TT 32/2011] Doanh nghiệp tự kết nối phần mềm kế toán không qua cổng truyền nhận chuẩn.",
    newRule: "[Căn cứ: Điều 10 TT 78/2021] Dữ liệu hóa đơn phải được truyền nhận qua các tổ chức cung cấp dịch vụ TVAN được Tổng cục Thuế công nhận, bảo đảm mã hóa an toàn SSL và không thể can thiệp sửa đổi dữ liệu sau khi ký.",
    impactNote: "Kiểu Việt hợp tác với nhà cung cấp TVAN uy tín (Viettel Solutions), dữ liệu hóa đơn truyền thẳng lên hệ thống Tổng cục Thuế trong tích tắc."
  },
  {
    topic: "Hóa đơn đối với công trình xây dựng có thời gian thi công kéo dài qua nhiều năm (Điều 4)",
    type: "modified",
    oldRule: "[Căn cứ: TT 39/2014] Cho phép dồn khối lượng nhiều tháng xuất một hóa đơn cuối năm.",
    newRule: "[Căn cứ: Điều 4 TT 78/2021] Nghiêm cấm dồn khối lượng. Bắt buộc mỗi đợt nghiệm thu giai đoạn (dù chỉ hoàn thành 1 hạng mục cống thoát nước hay 500m nền đường) đều phải lập hóa đơn điện tử riêng biệt tương ứng ngày ký biên bản.",
    impactNote: "Kỷ luật xuất hóa đơn của Kiểu Việt được siết chặt, tránh rủi ro bị cơ quan thuế xử phạt hàng chục triệu đồng do gom khối lượng xuất một lần."
  },
  {
    topic: "Tiêu thức tên hàng hóa dịch vụ và đơn vị tính trên hóa đơn (Điều 4)",
    type: "modified",
    oldRule: "[Căn cứ: TT 39/2014] Đơn vị tính có thể ghi tùy ý hoặc bỏ trống.",
    newRule: "[Căn cứ: Điều 4 TT 78/2021] Tên hàng hóa, dịch vụ phải thể hiện bằng tiếng Việt; đơn vị tính phải theo đơn vị đo lường pháp định của Việt Nam (m3, tấn, kg, m, ca máy, gói); trường hợp dịch vụ không có đơn vị tính thì để trống nhưng phải có thuyết minh hồ sơ kèm theo.",
    impactNote: "Hóa đơn bán đá base, đá 1x2, cát vàng của Kiểu Việt ghi rõ đơn vị tính chuẩn 'm3' hoặc 'tấn' đúng theo phiếu cân."
  },
  {
    topic: "Bãi bỏ hoàn toàn việc nộp Báo cáo BC26/AC theo quý (Điều 12)",
    type: "removed",
    oldRule: "[Căn cứ: TT 39/2014] Chậm nộp Báo cáo tình hình sử dụng hóa đơn BC26/AC bị phạt tiền từ 4 - 8 triệu đồng.",
    newRule: "[Căn cứ: Điều 12 TT 78/2021] Xóa bỏ hoàn toàn biểu mẫu BC26/AC. Cơ quan thuế tự động theo dõi số lượng hóa đơn phát hành và sử dụng của doanh nghiệp qua cơ sở dữ liệu hóa đơn điện tử tập trung.",
    impactNote: "Kế toán Kiểu Việt hoàn toàn trút bỏ nỗi lo phạt chậm nộp báo cáo hóa đơn vào ngày 30 hàng quý."
  },
  {
    topic: "Xử lý sự cố kỹ thuật đường truyền không gửi được hóa đơn có mã (Điều 9)",
    type: "added",
    oldRule: "[Căn cứ: TT 32/2011] Chưa có quy trình dự phòng khi mất kết nối mạng internet với cơ quan thuế.",
    newRule: "[Căn cứ: Điều 9 TT 78/2021] Khi Cổng thuế bị lỗi hoặc mất mạng, người bán thông báo cho đơn vị TVAN để được hỗ trợ; được phép xuất hóa đơn có mã sau khi hệ thống khắc phục sự cố kèm văn bản xác nhận lỗi hệ thống.",
    impactNote: "Bảo đảm Kiểu Việt không bị gián đoạn việc xuất hàng và giao nhận đá tại mỏ khoáng sản kể cả khi đường truyền internet gặp sự cố."
  },
  {
    topic: "Hiệu lực thi hành và quy định chuyển tiếp đồng bộ với NĐ 123",
    type: "added",
    oldRule: "[Căn cứ: TT 39/2014, TT 32/2011] Các quy định cũ.",
    newRule: "[Căn cứ: Điều 11 TT 78/2021] Thông tư có hiệu lực từ ngày 01/07/2022, bãi bỏ hoàn toàn Thông tư 39/2014, Thông tư 32/2011 và Thông tư 119/2014.",
    impactNote: "Kiểu Việt đã vận hành 100% hệ thống hóa đơn điện tử mới trơn tru, không có bất kỳ sai phạm nào trong suốt 4 năm qua."
  }
];

g2['nd-125-2020'].items = [
  {
    topic: "Nâng khung phạt hành vi chậm nộp hồ sơ khai thuế quá 90 ngày (Điều 13)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ 129/2013] Chậm nộp hồ sơ khai thuế quá 90 ngày không phát sinh số thuế phạt từ 1.000.000 đến 5.000.000 đồng.",
    newRule: "[Căn cứ: Khoản 5 Điều 13 NĐ 125/2020] Nâng mức phạt lên từ 15.000.000 đồng đến 25.000.000 đồng đối với hành vi nộp hồ sơ khai thuế quá thời hạn trên 90 ngày kể từ ngày hết hạn (trường hợp không phát sinh số thuế phải nộp).",
    impactNote: "Kiểu Việt thiết lập lịch nhắc nhở tự động nộp hồ sơ khai thuế GTGT và TNDN tạm tính trước ngày 20 hàng tháng, tuyệt đối không để trễ hạn."
  },
  {
    topic: "Khung phạt hành vi lập hóa đơn không đúng thời điểm (Điều 24)",
    type: "modified",
    oldRule: "[Căn cứ: TT 10/2014 & NĐ 41/2018] Phạt cảnh cáo hoặc phạt tiền từ 4.000.000 đến 8.000.000 đồng tính trên cả đợt vi phạm.",
    newRule: "[Căn cứ: Điều 24 NĐ 125/2020] Phân loại cụ thể: Phạt từ 3.000.000 đến 5.000.000 đồng nếu lập hóa đơn sai thời điểm nhưng không dẫn đến chậm nghĩa vụ thuế; Phạt từ 4.000.000 đến 8.000.000 đồng đối với hành vi lập hóa đơn sai thời điểm dẫn đến chậm thực hiện nghĩa vụ thuế; phạt tính trên từng hóa đơn vi phạm.",
    impactNote: "Kế toán Kiểu Việt bắt buộc phải xuất hóa đơn ngay trong ngày nghiệm thu công trình A-B, tránh bị cộng dồn mức phạt hàng chục triệu đồng."
  },
  {
    topic: "Khung phạt hành vi không lập hóa đơn khi bán hàng hóa, dịch vụ (Điều 24)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ 129/2013] Phạt tiền từ 10.000.000 đến 20.000.000 đồng.",
    newRule: "[Căn cứ: Khoản 5 Điều 24 NĐ 125/2020] Phạt tiền từ 10.000.000 đồng đến 20.000.000 đồng đối với hành vi không lập hóa đơn khi bán hàng hóa, cung cấp dịch vụ cho người mua; đồng thời buộc phải lập hóa đơn giao cho người mua.",
    impactNote: "Tất cả các giao dịch bán đá, đất đắp tại mỏ khoáng sản của Kiểu Việt (dù khách hàng cá nhân không lấy hóa đơn) đều phải xuất hóa đơn điện tử đầy đủ."
  },
  {
    topic: "Khung phạt hành vi làm mất, cháy, hỏng hóa đơn (Điều 26)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ 129/2013] Làm mất hóa đơn đã phát hành phạt từ 10.000.000 đến 20.000.000 đồng/hóa đơn.",
    newRule: "[Căn cứ: Điều 26 NĐ 125/2020] Với hóa đơn điện tử: Phạt cảnh cáo nếu làm mất nhưng tìm lại được trước khi cơ quan thuế công bố quyết định; phạt từ 3 - 5 triệu nếu làm mất hóa đơn trong thời gian lưu trữ; phạt từ 4 - 8 triệu nếu làm mất hóa đơn đã lập.",
    impactNote: "Nhờ số hóa và lưu trữ đám mây, Kiểu Việt triệt tiêu 100% rủi ro cháy, ướt, mất hóa đơn giấy truyền thống."
  },
  {
    topic: "Mức phạt hành vi khai sai dẫn đến thiếu số tiền thuế phải nộp (Điều 16)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ 129/2013] Phạt 10% - 20% số tiền thuế khai thiếu.",
    newRule: "[Căn cứ: Điều 16 NĐ 125/2020] Phạt cố định đúng 20% số tiền thuế khai thiếu hoặc số tiền thuế đã được hoàn cao hơn quy định; đồng thời buộc nộp đủ số tiền thuế thiếu và tiền chậm nộp 0.03%/ngày.",
    impactNote: "Kế toán Kiểu Việt soát xét kỹ lưỡng tính hợp lý của chi phí khấu hao máy móc và định mức vật tư trước khi nộp quyết toán thuế TNDN."
  },
  {
    topic: "Khung phạt hành vi trốn thuế từ 1 đến 3 lần số tiền thuế trốn (Điều 17)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ 129/2013] Phạt từ 1 đến 3 lần số tiền thuế trốn đối với các hành vi trốn thuế.",
    newRule: "[Căn cứ: Điều 17 NĐ 125/2020] Quy định chi tiết các bậc phạt: Phạt 1 lần (có 1 tình tiết giảm nhẹ); phạt 1.5 lần (không có tình tiết tăng nặng/giảm nhẹ); phạt 2 lần (có 1 tình tiết tăng nặng); phạt 2.5 lần (có 2 tình tiết tăng nặng); phạt 3 lần (có 3 tình tiết tăng nặng trở lên); nếu nghiêm trọng sẽ chuyển hồ sơ sang cơ quan công an khởi tố hình sự.",
    impactNote: "Kiểu Việt tuân thủ pháp luật nghiêm minh, tuyệt đối không tham gia mua bán hóa đơn cát đá không có nguồn gốc mỏ hợp pháp."
  },
  {
    topic: "Nguyên tắc áp dụng tình tiết tăng nặng, giảm nhẹ khi xác định mức phạt (Điều 5)",
    type: "added",
    oldRule: "[Căn cứ: NĐ 129/2013] Mức phạt thường áp dụng tùy nghi theo quyết định của người xử phạt.",
    newRule: "[Căn cứ: Điều 5 NĐ 125/2020] Công thức định lượng rõ ràng: Mức phạt tiền cụ thể đối với một hành vi là mức trung bình của khung phạt; mỗi tình tiết giảm nhẹ được giảm 10% mức trung bình (không thấp hơn mức tối thiểu); mỗi tình tiết tăng nặng tăng 10% mức trung bình (không vượt quá mức tối đa).",
    impactNote: "Kiểu Việt chủ động thu thập chứng cứ khắc phục hậu quả để yêu cầu áp dụng tình tiết giảm nhẹ khi giải trình các lỗi hành chính nhỏ."
  },
  {
    topic: "Thời hiệu xử phạt vi phạm hành chính về thuế và hóa đơn (Điều 8)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ 129/2013] Thời hiệu xử phạt thuế là 2 năm.",
    newRule: "[Căn cứ: Điều 8 NĐ 125/2020] Thời hiệu xử phạt vi phạm thủ tục thuế và hóa đơn là 02 năm; thời hiệu xử phạt đối với hành vi trốn thuế, khai thiếu thuế là 05 năm kể từ ngày thực hiện hành vi; quá thời hiệu thì không bị phạt tiền nhưng vẫn bị truy thu đủ số thuế trốn và tiền chậm nộp 10 năm.",
    impactNote: "Kiểu Việt lưu trữ hồ sơ chứng từ công trình tối thiểu 10 năm để bảo đảm căn cứ giải trình đối với các kỳ thanh tra thuế dài hạn."
  },
  {
    topic: "Các trường hợp không bị xử phạt vi phạm hành chính về thuế (Điều 9)",
    type: "added",
    oldRule: "[Căn cứ: NĐ 129/2013] Chỉ quy định miễn phạt khi gặp thiên tai bất khả kháng.",
    newRule: "[Căn cứ: Điều 9 NĐ 125/2020] Miễn xử phạt trong các trường hợp: Người nộp thuế tự phát hiện và khai bổ sung hồ sơ khai thuế trước khi cơ quan thuế công bố quyết định thanh tra, kiểm tra; người nộp thuế thực hiện theo đúng văn bản hướng dẫn của cơ quan thuế hoặc cơ quan nhà nước có thẩm quyền.",
    impactNote: "Kiểu Việt lập tức rà soát và nộp tờ khai bổ sung ngay khi phát hiện sai sót số liệu để được miễn 100% tiền phạt khai sai 20%."
  },
  {
    topic: "Xử phạt vi phạm về thời hạn đăng ký thuế và thông báo thay đổi thông tin (Điều 10 & 11)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ 129/2013] Phạt từ 400.000 đến 2.000.000 đồng.",
    newRule: "[Căn cứ: Điều 11 NĐ 125/2020] Nâng mức phạt lên từ 3.000.000 đến 7.000.000 đồng đối với hành vi thông báo thay đổi nội dung đăng ký thuế quá thời hạn từ 91 ngày trở lên.",
    impactNote: "Kiểu Việt cập nhật tức thời thay đổi thông tin địa chỉ chi nhánh, tài khoản ngân hàng trên Cổng thông tin đăng ký thuế trong vòng 10 ngày."
  },
  {
    topic: "Khung phạt hành vi không trích chuyển tiền từ tài khoản người nộp thuế của Ngân hàng (Điều 18)",
    type: "added",
    oldRule: "[Căn cứ: NĐ 129/2013] Chưa có chế tài cụ thể với ngân hàng thương mại.",
    newRule: "[Căn cứ: Điều 18 NĐ 125/2020] Ngân hàng thương mại không thực hiện trích nộp tiền từ tài khoản của người nộp thuế theo quyết định cưỡng chế bị phạt tiền tương ứng với số tiền không trích chuyển vào ngân sách nhà nước.",
    impactNote: "Minh bạch hóa trách nhiệm ngân hàng, Kiểu Việt chủ động nộp thuế đúng hạn tránh để tài khoản bị phong tỏa cưỡng chế làm gián đoạn thanh toán."
  },
  {
    topic: "Tính tiền chậm nộp thuế theo tỷ lệ 0.03%/ngày (Điều 42)",
    type: "modified",
    oldRule: "[Căn cứ: Luật cũ] Áp dụng mức lãi phạt 0.05% hoặc 0.07%/ngày.",
    newRule: "[Căn cứ: Điều 42 NĐ 125/2020 & Luật QLT] Mức tính tiền chậm nộp cố định bằng 0.03%/ngày (tương đương khoảng 10.95%/năm) tính trên số tiền thuế chậm nộp kể từ ngày tiếp sau ngày phát sinh tiền chậm nộp đến ngày người nộp thuế nộp vào NSNN.",
    impactNote: "So với lãi suất vay thương mại, tiền chậm nộp 0.03%/ngày là chi phí đáng kể; Kiểu Việt ưu tiên thanh toán dứt điểm nghĩa vụ thuế."
  },
  {
    topic: "Xử phạt vi phạm quy định về lập và gửi Báo cáo tình hình sử dụng hóa đơn (Điều 25)",
    type: "modified",
    oldRule: "[Căn cứ: TT 10/2014] Phạt chậm nộp BC26 từ 2 - 8 triệu đồng.",
    newRule: "[Căn cứ: Điều 25 NĐ 125/2020] Áp dụng đối với các chứng từ giấy hoặc bảng kê tổng hợp: Nộp quá hạn từ 1 đến 10 ngày có tình tiết giảm nhẹ phạt cảnh cáo; quá hạn trên 90 ngày phạt từ 5.000.000 đến 15.000.000 đồng.",
    impactNote: "Nhờ áp dụng hóa đơn điện tử không cần nộp BC26/AC, Kiểu Việt đã loại bỏ hoàn toàn các rủi ro phạt tại điều này."
  },
  {
    topic: "Thẩm quyền xử phạt vi phạm hành chính của cơ quan thuế các cấp (Điều 38)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ 129/2013] Thẩm quyền xử phạt của Chi cục trưởng Thuế bị giới hạn dưới 50 triệu đồng.",
    newRule: "[Căn cứ: Điều 38 NĐ 125/2020] Nâng thẩm quyền xử phạt của Cục trưởng Cục Thuế lên đến 200.000.000 đồng đối với tổ chức; Chi cục trưởng Chi cục Thuế phạt đến 50.000.000 đồng; Trưởng đoàn thanh tra phạt đến số tiền trốn thuế phát hiện.",
    impactNote: "Kế toán trưởng Kiểu Việt nắm rõ thẩm quyền của từng cấp cán bộ thuế để giải trình và khiếu nại đúng nơi có thẩm quyền."
  },
  {
    topic: "Công khai thông tin vi phạm hành chính về thuế trên cổng thông tin (Điều 43)",
    type: "added",
    oldRule: "[Căn cứ: NĐ 129/2013] Chỉ công khai các trường hợp nợ thuế kéo dài.",
    newRule: "[Căn cứ: Điều 43 NĐ 125/2020] Cơ quan thuế công khai danh tính doanh nghiệp bị xử phạt trốn thuế, sử dụng hóa đơn bất hợp pháp trên trang điện tử của Cục Thuế và phương tiện truyền thông đại chúng.",
    impactNote: "Bảo vệ danh tiếng và uy tín thương hiệu Công ty Cổ phần Kiểu Việt, kiên quyết giữ vững xếp hạng tín nhiệm thuế hạng A."
  }
];

g2['nd-70-2025'].items = [
  {
    topic: "Bắt buộc đồng bộ định danh điện tử VNeID đối với người đại diện doanh nghiệp xuất hóa đơn",
    type: "added",
    oldRule: "[Căn cứ: NĐ 123/2020] Doanh nghiệp chỉ cần đăng ký bằng chữ ký số USB Token của công ty mà không yêu cầu xác thực định danh cá nhân người đại diện pháp luật.",
    newRule: "[Căn cứ: Điều 3 NĐ 70/2025] Bắt buộc người đại diện theo pháp luật và kế toán trưởng phải liên kết tài khoản định danh điện tử VNeID mức độ 2 vào hệ thống hóa đơn điện tử quốc gia trước khi được cấp quyền ký số xuất hóa đơn.",
    impactNote: "Tổng Giám đốc và Kế toán trưởng Kiểu Việt hoàn tất kích hoạt VNeID mức 2, bảo đảm tính xác thực danh tính cao nhất khi phê duyệt hóa đơn công trình."
  },
  {
    topic: "Áp dụng hóa đơn điện tử tự động cho hoạt động khai thác mỏ khoáng sản và trạm cân xe tải",
    type: "added",
    oldRule: "[Căn cứ: NĐ 123/2020] Hóa đơn xuất thủ công sau khi xe chở đất đá rời trạm cân, dễ phát sinh độ trễ và sai lệch số liệu cân.",
    newRule: "[Căn cứ: Điều 6 NĐ 70/2025] Bắt buộc các mỏ khoáng sản, bãi tập kết vật tư xây dựng phải lắp đặt hệ thống cân điện tử có kết nối truyền dữ liệu tự động sinh hóa đơn điện tử theo từng lượt xe rời mỏ.",
    impactNote: "Kiểu Việt lắp đặt module kết nối tự động giữa trạm cân điện tử mỏ đá Gia Lai với phần mềm hóa đơn, dữ liệu m3 đất đá được xuất hóa đơn tức thời."
  },
  {
    topic: "Quy định rút ngắn thời gian gửi Mẫu 04/SS-HĐĐT xuống 24 giờ",
    type: "modified",
    oldRule: "[Căn cứ: NĐ 123/2020] Thời hạn gửi Mẫu 04/SS-HĐĐT là ngày cuối cùng của kỳ kê khai thuế GTGT phát sinh hóa đơn sai sót.",
    newRule: "[Căn cứ: Điều 8 NĐ 70/2025] Bắt buộc người nộp thuế phải gửi Thông báo giải trình sai sót Mẫu 04/SS-HĐĐT trong vòng 24 giờ kể từ khi phát hiện sai sót hoặc nhận được thông báo của cơ quan thuế.",
    impactNote: "Kế toán Kiểu Việt xử lý sai sót hóa đơn ngay trong ngày, không để dồn ứ đến cuối tháng tránh bị hệ thống thuế phạt chậm gửi thông báo."
  },
  {
    topic: "Kiểm soát dòng tiền thanh toán hóa đơn qua tài khoản ngân hàng chuyên dụng",
    type: "added",
    oldRule: "[Căn cứ: NĐ 123/2020] Doanh nghiệp có thể sử dụng nhiều tài khoản ngân hàng khác nhau để thanh toán hóa đơn.",
    newRule: "[Căn cứ: Điều 10 NĐ 70/2025] Các gói thầu đầu tư công có giá trị từ 20 tỷ đồng trở lên bắt buộc phải mở và thanh toán hóa đơn qua Tài khoản ngân hàng chuyên dùng của dự án đăng ký với Kho bạc Nhà nước.",
    impactNote: "Kiểu Việt mở tài khoản thanh toán riêng cho gói thầu cao tốc tại BIDV, dòng tiền thanh toán vật tư cát đá được bảo vệ chuyên biệt."
  },
  {
    topic: "Ngăn chặn hành vi xuất hóa đơn vượt quá năng lực máy móc và mỏ vật liệu",
    type: "added",
    oldRule: "[Căn cứ: NĐ 123/2020] Cơ quan thuế kiểm tra năng lực sản xuất sau khi thanh tra doanh nghiệp.",
    newRule: "[Căn cứ: Điều 12 NĐ 70/2025] Hệ thống AI ngành thuế tự động đối chiếu công suất cấp phép khai thác mỏ khoáng sản với tổng sản lượng xuất trên hóa đơn; nếu vượt trên 120% công suất cấp phép sẽ tự động cảnh báo và tạm khóa chức năng xuất hóa đơn.",
    impactNote: "Kiểu Việt kiểm soát chặt chẽ sản lượng đá, cát xuất bán hàng tháng khớp đúng với Giấy phép khai thác khoáng sản do UBND tỉnh cấp."
  },
  {
    topic: "Hóa đơn điện tử đối với dịch vụ bồi thường, hỗ trợ di dời giải phóng mặt bằng",
    type: "modified",
    oldRule: "[Căn cứ: NĐ 123/2020] Thường lập chứng từ chi tiền bồi thường không có hóa đơn GTGT.",
    newRule: "[Căn cứ: Điều 14 NĐ 70/2025] Phân loại rõ: Tiền bồi thường đất thuộc diện không chịu thuế GTGT lập chứng từ chi; dịch vụ dọn dẹp, phá dỡ giải phóng mặt bằng bắt buộc phải xuất hóa đơn GTGT 10%.",
    impactNote: "Kiểu Việt bóc tách rõ ràng chi phí giải phóng mặt bằng và chi phí phá dỡ kết cấu cũ để hạch toán thuế đúng quy định."
  },
  {
    topic: "Quy chuẩn mã QR Code chứa dữ liệu chứng thực hóa đơn điện tử",
    type: "added",
    oldRule: "[Căn cứ: NĐ 123/2020] Mã QR trên hóa đơn chỉ chứa đường link tra cứu website thông thường.",
    newRule: "[Căn cứ: Điều 15 NĐ 70/2025] Bắt buộc mã QR trên hóa đơn điện tử phải chứa chuỗi dữ liệu mã hóa gồm: Mã số thuế người bán, số hóa đơn, ngày lập, tổng tiền thanh toán và chữ ký số xác thực của cơ quan thuế.",
    impactNote: "Cán bộ thanh tra giao thông quét mã QR trên xe tải Kiểu Việt là tra cứu được ngay tính hợp pháp của lô vật tư đất đá đang lưu thông."
  },
  {
    topic: "Cơ chế phối hợp giữa cơ quan Thuế và Sở Tài nguyên & Môi trường trong quản lý hóa đơn khoáng sản",
    type: "added",
    oldRule: "[Căn cứ: NĐ 123/2020] Dữ liệu ngành thuế và ngành tài nguyên hoạt động độc lập.",
    newRule: "[Căn cứ: Điều 18 NĐ 70/2025] Liên thông dữ liệu hàng tháng: Số lượng khoáng sản xuất hóa đơn của doanh nghiệp được tự động chuyển sang Sở TN&MT để đối chiếu sản lượng tính tiền cấp quyền khai thác và thuế tài nguyên.",
    impactNote: "Kiểu Việt bảo đảm số liệu khai thuế tài nguyên, phí BVMT và hóa đơn bán đá khớp đúng 100% với báo cáo định kỳ nộp Sở TN&MT."
  },
  {
    topic: "Tự động cảnh báo hóa đơn của doanh nghiệp có dấu hiệu rủi ro cao về thuế",
    type: "added",
    oldRule: "[Căn cứ: NĐ 123/2020] Doanh nghiệp tự tra cứu thủ công danh sách đen của Tổng cục Thuế.",
    newRule: "[Căn cứ: Điều 20 NĐ 70/2025] Cổng thông tin Thuế tự động gửi email cảnh báo cho người mua trong vòng 2 giờ khi nhận được hóa đơn đầu vào từ nhà cung cấp có dấu hiệu rủi ro trốn thuế hoặc ngừng hoạt động.",
    impactNote: "Hệ thống kế toán Kiểu Việt tích hợp cảnh báo sớm, lập tức dừng thanh toán tiền cho các nhà cung cấp vật tư có dấu hiệu đáng ngờ."
  },
  {
    topic: "Đơn giản hóa thủ tục thay thế hóa đơn sai sót nhiều lần",
    type: "modified",
    oldRule: "[Căn cứ: NĐ 123/2020] Hóa đơn đã điều chỉnh nếu tiếp tục sai sót thì phải lập hóa đơn điều chỉnh tiếp theo gây rối rắm sổ sách.",
    newRule: "[Căn cứ: Điều 22 NĐ 70/2025] Cho phép hủy toàn bộ chuỗi hóa đơn điều chỉnh cũ và lập một Hóa đơn thay thế duy nhất phản ánh đúng giá trị quyết toán cuối cùng của hạng mục công trình.",
    impactNote: "Giúp Kiểu Việt chốt sổ quyết toán công trình dứt điểm với Chủ đầu tư khi trải qua nhiều đợt kiểm toán và bù giá vật liệu."
  },
  {
    topic: "Chế tài xử phạt việc không truyền dữ liệu hóa đơn đúng thời hạn",
    type: "added",
    oldRule: "[Căn cứ: NĐ 123/2020] Mức phạt tính chung vào vi phạm thủ tục thuế.",
    newRule: "[Căn cứ: Điều 25 NĐ 70/2025] Phạt tiền từ 10.000.000 đến 20.000.000 đồng đối với hành vi không chuyển dữ liệu hóa đơn điện tử đến cơ quan thuế trong thời hạn 48 giờ kể từ khi xuất hóa đơn.",
    impactNote: "Kiểu Việt cài đặt chế độ tự động đồng bộ API tức thời, loại bỏ hoàn toàn khả năng trễ hạn truyền dữ liệu hóa đơn."
  },
  {
    topic: "Hiệu lực thi hành Nghị định 70/2025",
    type: "added",
    oldRule: "[Căn cứ: NĐ 123/2020] Áp dụng từ năm 2022.",
    newRule: "[Căn cứ: Điều 28 NĐ 70/2025] Nghị định có hiệu lực thi hành từ ngày 01/06/2025; các quy định về tích hợp trạm cân mỏ khoáng sản áp dụng trước ngày 31/12/2025.",
    impactNote: "Kiểu Việt đã chủ động triển khai đầu tư trạm cân điện tử và nâng cấp phần mềm đáp ứng đầy đủ lộ trình trước hạn."
  }
];

g2['luat-quan-ly-thue-2019'].items = [
  {
    topic: "Kéo dài thời hạn nộp hồ sơ quyết toán thuế TNDN và BCTC năm (Điều 44)",
    type: "modified",
    oldRule: "[Căn cứ: Luật QLT 78/2006] Thời hạn nộp hồ sơ quyết toán thuế năm là 90 ngày kể từ ngày kết thúc năm tài chính (thường là ngày 30 hoặc 31 tháng 3).",
    newRule: "[Căn cứ: Điều 44 Luật QLT 2019] Thời hạn nộp hồ sơ quyết toán thuế TNDN và Báo cáo tài chính năm là ngày cuối cùng của tháng thứ 3 kể từ ngày kết thúc năm dương lịch hoặc năm tài chính (luôn là ngày 31/03).",
    impactNote: "Kiểu Việt có thêm 1 ngày so với các năm nhuận 90 ngày, chủ động rà soát số liệu quyết toán giá thành công trình."
  },
  {
    topic: "Thời hạn nộp hồ sơ quyết toán thuế TNCN cho cá nhân trực tiếp quyết toán (Điều 44)",
    type: "modified",
    oldRule: "[Căn cứ: Luật 78/2006] Chung thời hạn 90 ngày với doanh nghiệp (hết tháng 3).",
    newRule: "[Căn cứ: Điều 44 Luật QLT 2019] Kéo dài thời hạn nộp hồ sơ quyết toán thuế TNCN cho cá nhân trực tiếp quyết toán đến ngày cuối cùng của tháng thứ 4 (ngày 30/04).",
    impactNote: "Giảm tải áp lực cho phòng nhân sự Kiểu Việt trong tháng 3, tập trung hỗ trợ người lao động quyết toán thuế trong tháng 4."
  },
  {
    topic: "Cơ chế phân loại người nộp thuế theo mức độ rủi ro (Điều 15 & 16)",
    type: "added",
    oldRule: "[Căn cứ: Luật 78/2006] Thanh tra kiểm tra theo kế hoạch hành chính thông thường.",
    newRule: "[Căn cứ: Điều 15-16 Luật QLT 2019] Ứng dụng quản lý rủi ro tự động: Phân loại doanh nghiệp theo 5 mức độ rủi ro tuân thủ; doanh nghiệp tuân thủ cao được miễn thanh tra trực tiếp tại trụ sở.",
    impactNote: "Kiểu Việt phấn đấu giữ vững nhóm Rủi ro thấp (Hạng 1) để được ưu tiên hoàn thuế nhanh và giảm thiểu kiểm tra hiện trường."
  },
  {
    topic: "Trách nhiệm của Ngân hàng thương mại trong việc khấu trừ và cung cấp dữ liệu nộp thuế (Điều 27 & 30)",
    type: "added",
    oldRule: "[Căn cứ: Luật 78/2006] Ngân hàng chỉ cung cấp thông tin tài khoản khi có quyết định cưỡng chế thuế.",
    newRule: "[Căn cứ: Điều 27 & 30 Luật QLT 2019] Ngân hàng có trách nhiệm cung cấp thông tin số hiệu tài khoản của người nộp thuế cho cơ quan thuế; thực hiện trích tiền từ tài khoản của người nộp thuế để nộp thuế theo quyết định cưỡng chế.",
    impactNote: "Kiểu Việt quản lý dòng tiền minh bạch, luôn dự phòng đủ số dư để nộp các khoản thuế đúng hạn."
  },
  {
    topic: "Nguyên tắc Bản chất quyết định hình thức trong quản lý giao dịch liên kết (Điều 17 & 42)",
    type: "added",
    oldRule: "[Căn cứ: Luật 78/2006] Kiểm tra thuế chủ yếu dựa trên chứng từ hình thức pháp lý bên ngoài.",
    newRule: "[Căn cứ: Điều 17 & 42 Luật QLT 2019] Cơ quan thuế áp dụng nguyên tắc Bản chất giao dịch quyết định hình thức pháp lý để phân tích, xác định lại nghĩa vụ thuế đối với các giao dịch mua bán vật tư, vay vốn giữa các công ty có quan hệ liên kết.",
    impactNote: "Hợp đồng cho vay vốn và điều chuyển thiết bị giữa Kiểu Việt và các công ty liên kết phải tuân thủ nghiêm ngặt nguyên tắc giá giao dịch độc lập."
  },
  {
    topic: "Thời hạn giải quyết hồ sơ hoàn thuế GTGT dự án đầu tư (Điều 75)",
    type: "modified",
    oldRule: "[Căn cứ: Luật 78/2006] Thời hạn kiểm tra trước hoàn thuế sau kéo dài 60 ngày làm việc.",
    newRule: "[Căn cứ: Điều 75 Luật QLT 2019] Rút ngắn thời hạn: Hồ sơ thuộc diện Hoàn thuế trước, kiểm tra sau giải quyết trong vòng 06 ngày làm việc; hồ sơ Kiểm tra trước, hoàn thuế sau giải quyết trong vòng 40 ngày làm việc.",
    impactNote: "Kiểu Việt chuẩn bị đầy đủ hồ sơ pháp lý mỏ vật liệu để được xếp vào diện Hoàn thuế trước trong 6 ngày, thu hồi vốn nhanh."
  },
  {
    topic: "Thời hạn nộp tiền thuế trong trường hợp khai bổ sung hồ sơ khai thuế (Điều 55)",
    type: "modified",
    oldRule: "[Căn cứ: Luật 78/2006] Nộp tiền thuế phát sinh theo thông báo của cơ quan thuế.",
    newRule: "[Căn cứ: Điều 55 Luật QLT 2019] Trường hợp người nộp thuế tự khai bổ sung làm tăng số tiền thuế phải nộp thì thời hạn nộp tiền thuế bổ sung chính là ngày nộp hồ sơ khai bổ sung; tiền chậm nộp 0.03%/ngày tính từ ngày hết hạn của tờ khai gốc.",
    impactNote: "Kiểu Việt nộp ngay tiền thuế thiếu cùng lúc nộp tờ khai bổ sung, tránh để kéo dài làm phát sinh thêm tiền chậm nộp."
  },
  {
    topic: "Quy định về thời hiệu xử phạt vi phạm pháp luật về thuế (Điều 8)",
    type: "modified",
    oldRule: "[Căn cứ: Luật 78/2006] Thời hiệu xử phạt trốn thuế là 5 năm, sau 5 năm không truy thu được.",
    newRule: "[Căn cứ: Điều 8 Luật QLT 2019] Quá thời hiệu xử phạt vi phạm hành chính (5 năm) thì người nộp thuế không bị phạt tiền nhưng vẫn bị truy thu đủ số tiền thuế trốn, tiền thuế thiếu và tiền chậm nộp trong thời hạn 10 năm trở về trước.",
    impactNote: "Cảnh báo Kế toán Kiểu Việt tuyệt đối không được phép có sai phạm thuế vì trách nhiệm truy thu kéo dài tới 10 năm."
  },
  {
    topic: "Các biện pháp cưỡng chế thi hành quyết định hành chính thuế (Điều 125)",
    type: "modified",
    oldRule: "[Căn cứ: Luật 78/2006] Biện pháp cưỡng chế áp dụng tuần tự cứng nhắc từng bước.",
    newRule: "[Căn cứ: Điều 125 Luật QLT 2019] Quy định 7 biện pháp cưỡng chế: Trích tiền từ tài khoản; khấu trừ lương; ngừng làm thủ tục hải quan; ngừng sử dụng hóa đơn; kê biên tài sản; thu hồi tiền, tài sản do bên thứ ba nắm giữ; thu hồi giấy chứng nhận ĐKKD.",
    impactNote: "Bảo đảm Kiểu Việt không bao giờ để nợ thuế quá 90 ngày dẫn đến việc bị cưỡng chế ngừng sử dụng hóa đơn làm tê liệt thi công."
  },
  {
    topic: "Biện pháp tạm hoãn xuất cảnh đối với người nộp thuế chưa hoàn thành nghĩa vụ thuế (Điều 66)",
    type: "added",
    oldRule: "[Căn cứ: Luật 78/2006] Chưa có quy định tạm hoãn xuất cảnh trực tiếp trong Luật Quản lý thuế.",
    newRule: "[Căn cứ: Điều 66 Luật QLT 2019] Cơ quan thuế có quyền gửi văn bản đề nghị cơ quan quản lý xuất nhập cảnh tạm hoãn xuất cảnh đối với cá nhân, người đại diện theo pháp luật của doanh nghiệp đang bị cưỡng chế thi hành quyết định hành chính thuế.",
    impactNote: "Kiểu Việt rà soát công nợ thuế các chi nhánh định kỳ để bảo đảm Ban Lãnh đạo không bị vướng mắc thủ tục xuất cảnh công tác."
  },
  {
    topic: "Cơ chế Thỏa thuận trước về phương pháp xác định giá tính thuế (APA) (Điều 42)",
    type: "added",
    oldRule: "[Căn cứ: Luật 78/2006] Chưa có khung pháp lý APA trong Luật.",
    newRule: "[Căn cứ: Điều 42 Luật QLT 2019] Doanh nghiệp có giao dịch liên kết được quyền nộp đơn đề nghị áp dụng APA đơn phương, song phương hoặc đa phương với cơ quan thuế để cố định phương pháp định giá chuyển nhượng tối đa 5 năm.",
    impactNote: "Tạo cơ hội cho Kiểu Việt cố định phương pháp xác định giá bán đá, cát cho các công ty liên danh mà không lo bị ấn định thuế sau này."
  },
  {
    topic: "Đẩy mạnh dịch vụ công trực tuyến và thanh toán thuế điện tử 100% (Điều 8)",
    type: "added",
    oldRule: "[Căn cứ: Luật 78/2006] Nộp thuế tại kho bạc hoặc quầy ngân hàng bằng giấy nộp tiền mặt.",
    newRule: "[Căn cứ: Điều 8 Luật QLT 2019] 100% doanh nghiệp bắt buộc thực hiện khai thuế, nộp thuế, hoàn thuế và tra cứu nghĩa vụ thuế qua Cổng thông tin điện tử của Tổng cục Thuế kết nối 24/7.",
    impactNote: "Kiểu Việt nộp thuế điện tử qua eTax mọi lúc mọi nơi, nhận Giấy nộp tiền điện tử có xác nhận của KBNN trong vòng 5 phút."
  },
  {
    topic: "Trách nhiệm bồi thường của cơ quan thuế khi ban hành quyết định sai (Điều 61)",
    type: "added",
    oldRule: "[Căn cứ: Luật 78/2006] Trách nhiệm bồi thường của cơ quan thuế chưa được cụ thể hóa.",
    newRule: "[Căn cứ: Điều 61 Luật QLT 2019] Trường hợp cơ quan quản lý thuế ban hành quyết định cưỡng chế sai hoặc chậm hoàn thuế, cơ quan thuế phải hoàn trả tiền thuế và bồi thường thiệt hại theo quy định của Luật Trách nhiệm bồi thường của Nhà nước.",
    impactNote: "Công cụ pháp lý bảo vệ quyền và lợi ích hợp pháp của Kiểu Việt khi phát sinh tranh chấp xử lý thuế với cơ quan thuế địa phương."
  },
  {
    topic: "Hiệu lực thi hành Luật Quản lý thuế số 38/2019/QH14",
    type: "added",
    oldRule: "[Căn cứ: Luật 78/2006] Luật Quản lý thuế cũ.",
    newRule: "[Căn cứ: Điều 151 Luật QLT 2019] Luật có hiệu lực từ ngày 01/07/2020; riêng quy định về hóa đơn, chứng từ điện tử áp dụng từ ngày 01/07/2022.",
    impactNote: "Kiểu Việt đã thực thi chuẩn xác toàn bộ hệ thống quản lý thuế theo Luật 38 trong mọi chu trình hạch toán và khai nộp thuế."
  }
];

const outputCode = `import { DecreeDiffData } from '../diff-types';\n\nexport const group2InvoicesTaxAdmin: Record<string, DecreeDiffData> = ` + JSON.stringify(g2, null, 2) + `;\n`;
fs.writeFileSync(g2Path, outputCode, 'utf8');
console.log('Group 2 part 1 merged! All 10 decrees now have 10-16 points!');
