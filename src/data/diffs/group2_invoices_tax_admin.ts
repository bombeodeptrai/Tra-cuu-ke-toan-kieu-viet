import { DecreeDiffData } from '../diff-types';

export const group2InvoicesTaxAdmin: Record<string, DecreeDiffData> = {
  "nd-123-2020": {
    "decreeId": "nd-123-2020",
    "title": "Nghị định 123/2020/NĐ-CP",
    "category": "Hóa đơn & Chứng từ điện tử",
    "compareWith": "Nghị định 51/2010/NĐ-CP và Nghị định 04/2014/NĐ-CP",
    "summary": "Nghị định 123/2020/NĐ-CP chính thức xóa sổ hoàn toàn hóa đơn giấy, bắt buộc 100% doanh nghiệp chuyển sang Hóa đơn điện tử có mã hoặc không có mã của cơ quan thuế từ ngày 01/07/2022; siết chặt thời điểm lập hóa đơn xây lắp.",
    "items": [
      {
        "topic": "Thời điểm lập hóa đơn đối với xây dựng, lắp đặt (Điều 9 Khoản 4 Điểm c)",
        "type": "modified",
        "oldRule": "[Căn cứ: Điều 16 Thông tư 39/2014 & NĐ 51/2010] Ngày lập hóa đơn đối với xây dựng, lắp đặt là ngày nghiệm thu, bàn giao công trình, hạng mục công trình, khối lượng xây dựng, lắp đặt hoàn thành, không phân biệt đã thu được tiền hay chưa thu được tiền.",
        "newRule": "[Căn cứ: Điều 9 Khoản 4 Điểm c NĐ 123/2020] Quy định chặt chẽ: Thời điểm lập hóa đơn là thời điểm nghiệm thu, bàn giao từng hạng mục hoặc toàn bộ công trình, không phân biệt đã thu tiền hay chưa. Trường hợp giao hàng nhiều lần hoặc bàn giao từng giai đoạn thì mỗi lần giao hàng hoặc bàn giao đều phải lập hóa đơn cho khối lượng, giá trị hàng hóa, dịch vụ được bàn giao tương ứng.",
        "impactNote": "Kiểu Việt bắt buộc phải phối hợp chặt chẽ giữa Kỹ sư công trường và Kế toán: Ngay trong ngày ký Biên bản nghiệm thu hoàn thành A-B (Mẫu 03a) phải xuất ngay Hóa đơn điện tử, tuyệt đối không được chờ đến khi Chủ đầu tư giải ngân mới xuất hóa đơn (tránh phạt từ 4-8 triệu/hóa đơn)."
      },
      {
        "topic": "Bắt buộc 100% sử dụng hóa đơn điện tử, xóa bỏ hoàn toàn hóa đơn giấy (Điều 59 & 60)",
        "type": "removed",
        "oldRule": "[Căn cứ: Nghị định 51/2010/NĐ-CP] Cho phép doanh nghiệp sử dụng song song 3 hình thức: Hóa đơn tự in, hóa đơn đặt in bằng giấy và hóa đơn điện tử.",
        "newRule": "[Căn cứ: Điều 59-60 NĐ 123/2020] Bãi bỏ hoàn toàn hóa đơn giấy từ ngày 01/07/2022. 100% doanh nghiệp, tổ chức kinh tế bắt buộc phải chuyển đổi sang sử dụng Hóa đơn điện tử có mã hoặc không có mã của cơ quan thuế theo chuẩn dữ liệu thống nhất.",
        "impactNote": "Toàn bộ chuỗi cung ứng vật tư của Kiểu Việt (mua thép, xi măng, xăng dầu, thuê máy xúc) phải cung cấp hóa đơn điện tử hợp pháp mới được chấp nhận thanh toán."
      },
      {
        "topic": "Quy chuẩn định dạng dữ liệu hóa đơn điện tử XML (Điều 12)",
        "type": "added",
        "oldRule": "[Căn cứ: Thông tư 32/2011/TT-BTC] Mỗi nhà cung cấp giải pháp hóa đơn tự xây dựng định dạng dữ liệu riêng (PDF, HTML), không có chuẩn dữ liệu chung.",
        "newRule": "[Căn cứ: Điều 12 NĐ 123/2020] Bắt buộc định dạng dữ liệu hóa đơn điện tử là tệp XML gồm 2 thành phần: thành phần chứa dữ liệu nghiệp vụ hóa đơn điện tử và thành phần chứa dữ liệu chữ ký số; bản thể hiện PDF chỉ có giá trị tra cứu, không có giá trị pháp lý gốc.",
        "impactNote": "Kế toán Kiểu Việt lưu trữ và kiểm tra bắt buộc phải lưu tệp gốc định dạng .XML trên hệ thống máy chủ và đối chiếu mã hash chữ ký số."
      },
      {
        "topic": "Quy trình xử lý hóa đơn điện tử có sai sót (Mẫu 04/SS-HĐĐT tại Điều 19)",
        "type": "modified",
        "oldRule": "[Căn cứ: TT 39/2014] Lập biên bản thu hồi hóa đơn giấy và xuất hóa đơn mới thay thế.",
        "newRule": "[Căn cứ: Điều 19 NĐ 123/2020] Bãi bỏ thủ tục thu hồi. Trường hợp sai sót về tên, địa chỉ người mua nhưng không sai mã số thuế thì chỉ cần gửi Mẫu 04/SS-HĐĐT cho cơ quan thuế và thông báo cho người mua. Nếu sai mã số thuế, tiền thuế, đơn giá thì lập Hóa đơn điện tử điều chỉnh hoặc Hóa đơn điện tử thay thế.",
        "impactNote": "Xử lý sai sót nghiệm thu công trình giữa Kiểu Việt và Ban QLDA nhanh chóng, không bị chậm trễ hồ sơ thanh toán Kho bạc."
      },
      {
        "topic": "Bảng tổng hợp dữ liệu hóa đơn điện tử Mẫu 01/TH-HĐĐT (Điều 22)",
        "type": "added",
        "oldRule": "[Căn cứ: NĐ 51/2010] Nộp Báo cáo tình hình sử dụng hóa đơn Mẫu BC26/AC định kỳ theo quý.",
        "newRule": "[Căn cứ: Điều 22 NĐ 123/2020] Bãi bỏ BC26/AC. Doanh nghiệp thuộc diện sử dụng hóa đơn điện tử không có mã gửi Bảng tổng hợp dữ liệu hóa đơn điện tử (Mẫu 01/TH-HĐĐT) cùng thời hạn nộp hồ sơ khai thuế GTGT.",
        "impactNote": "Phòng Thuế Kiểu Việt giảm bớt 100% thủ tục báo cáo BC26/AC, dữ liệu hóa đơn được tự động đối soát trên hệ thống thuế điện tử."
      },
      {
        "topic": "Thời hạn chuyển dữ liệu hóa đơn điện tử đến cơ quan thuế (Điều 22)",
        "type": "added",
        "oldRule": "[Căn cứ: NĐ 51/2010] Không có quy định gửi dữ liệu từng hóa đơn đến cơ quan thuế ngay khi xuất.",
        "newRule": "[Căn cứ: Điều 22 NĐ 123/2020] Đối với hóa đơn có mã: Hệ thống chuyển dữ liệu ngay khi người bán ký số; đối với hóa đơn không có mã: Chuyển dữ liệu chậm nhất cùng ngày gửi hóa đơn cho người mua.",
        "impactNote": "Chấm dứt hoàn toàn tình trạng xuất lùi ngày hóa đơn, bảo đảm tính minh bạch về thời điểm nghiệm thu công trình của Kiểu Việt."
      },
      {
        "topic": "Hóa đơn điện tử chiết khấu thương mại khối lượng lớn (Điều 19)",
        "type": "modified",
        "oldRule": "[Căn cứ: TT 39/2014] Chiết khấu thương mại ghi vào hóa đơn lần mua cuối cùng hoặc lập hóa đơn điều chỉnh.",
        "newRule": "[Căn cứ: Điều 19 NĐ 123/2020] Trường hợp số tiền chiết khấu thương mại được lập khi kết thúc chương trình thì được lập hóa đơn điều chỉnh giảm doanh thu, giảm thuế kèm bảng kê các số hóa đơn cần điều chỉnh.",
        "impactNote": "Kiểu Việt nhận hóa đơn chiết khấu giảm giá vật tư thép từ Hòa Phát được hạch toán giảm chi phí xây lắp chính xác, không bị rủi ro thuế."
      },
      {
        "topic": "Hóa đơn quà tặng, biếu tặng công nhân viên và tiêu dùng nội bộ (Điều 4)",
        "type": "modified",
        "oldRule": "[Căn cứ: TT 39/2014] Tiêu dùng nội bộ phục vụ thi công công trình không phải xuất hóa đơn GTGT.",
        "newRule": "[Căn cứ: Điều 4 NĐ 123/2020] Khi xuất hàng hóa để tiêu dùng nội bộ luân chuyển nội bộ phục vụ sản xuất thì không phải lập hóa đơn; nhưng xuất hàng biếu, tặng, trả thay lương cho người lao động bắt buộc phải lập hóa đơn điện tử như bán hàng thông thường.",
        "impactNote": "Kiểu Việt xuất xi măng, đá để làm đường công vụ nội bộ chỉ dùng Phiếu xuất kho kiêm vận chuyển nội bộ điện tử, không phải xuất hóa đơn GTGT."
      },
      {
        "topic": "Quy định bắt buộc về Tiêu thức chữ ký số người mua (Điều 10 Khoản 14)",
        "type": "modified",
        "oldRule": "[Căn cứ: TT 32/2011] Người mua là doanh nghiệp bắt buộc phải ký số vào hóa đơn điện tử mới có giá trị pháp lý.",
        "newRule": "[Căn cứ: Điều 10 Khoản 14 Điểm e NĐ 123/2020] Trường hợp người mua là cơ sở kinh doanh nếu có thỏa thuận thì ký số; nếu không có thỏa thuận thì trên hóa đơn điện tử không nhất thiết phải có chữ ký số của người mua (trừ trường hợp hai bên có quy định riêng trong hợp đồng).",
        "impactNote": "Khách hàng mua đá, cát lẻ của Kiểu Việt không cần có chữ ký số vẫn nhận được hóa đơn điện tử hợp lệ để hạch toán thuế."
      },
      {
        "topic": "Hóa đơn điện tử khởi tạo từ máy tính tiền có kết nối chuyển dữ liệu (Điều 11)",
        "type": "added",
        "oldRule": "[Căn cứ: NĐ 51/2010] Chưa có quy định về hóa đơn điện tử máy tính tiền.",
        "newRule": "[Căn cứ: Điều 11 NĐ 123/2020] Doanh nghiệp, hộ kinh doanh bán lẻ, ăn uống, xăng dầu được áp dụng hóa đơn điện tử khởi tạo từ máy tính tiền kết nối dữ liệu điện tử với cơ quan thuế; có giá trị như hóa đơn có mã.",
        "impactNote": "Kiểu Việt lấy hóa đơn xăng dầu từng ca máy đào thi công một cách thuận lợi, hợp thức hóa 100% chi phí nhiên liệu hiện trường."
      },
      {
        "topic": "Ủy nhiệm lập hóa đơn điện tử cho bên thứ ba (Điều 3)",
        "type": "added",
        "oldRule": "[Căn cứ: NĐ 51/2010] Quy định ủy nhiệm lập hóa đơn giấy phức tạp và ít áp dụng.",
        "newRule": "[Căn cứ: Điều 3 NĐ 123/2020] Người bán được quyền ủy nhiệm cho bên thứ ba là bên có quan hệ liên kết hoặc có hợp đồng kinh tế lập hóa đơn điện tử; phải thông báo với cơ quan thuế trước khi xuất hóa đơn.",
        "impactNote": "Tạo điều kiện cho Kiểu Việt ủy quyền xuất hóa đơn cho các Ban chỉ huy dự án hoặc tổng thầu liên danh."
      },
      {
        "topic": "Tiêu chuẩn hệ thống lưu trữ hóa đơn điện tử tối thiểu 10 năm (Điều 6)",
        "type": "modified",
        "oldRule": "[Căn cứ: NĐ 51/2010] Lưu trữ bản in hóa đơn giấy trong kho lưu trữ.",
        "newRule": "[Căn cứ: Điều 6 NĐ 123/2020] Hóa đơn điện tử phải được lưu trữ bằng phương tiện điện tử theo quy định của Luật Kế toán và Luật Giao dịch điện tử tối thiểu 10 năm; bảo đảm tính toàn vẹn và khả năng truy cập đọc được dữ liệu trong suốt thời hạn.",
        "impactNote": "Kiểu Việt ký hợp đồng lưu trữ đám mây với Viettel/VNPT bảo đảm sao lưu định kỳ hóa đơn điện tử an toàn tuyệt đối."
      },
      {
        "topic": "Tra cứu tính hợp pháp của hóa đơn trên Cổng thông tin Tổng cục Thuế",
        "type": "added",
        "oldRule": "[Căn cứ: NĐ 51/2010] Tra cứu hóa đơn giấy trên trang tracuuhoadon.gdt.gov.vn thường bị chậm cập nhật thông báo phát hành.",
        "newRule": "[Căn cứ: Điều 29 NĐ 123/2020] Cơ quan thuế cung cấp Cổng hoadondientu.gdt.gov.vn cho phép người mua tra cứu tức thời trạng thái của từng hóa đơn: Hóa đơn hợp pháp, hóa đơn của doanh nghiệp ngừng hoạt động, hóa đơn bị hủy/thay thế.",
        "impactNote": "Kế toán Kiểu Việt quét tự động mã hóa đơn đầu vào của nhà cung cấp để chặn đứng hóa đơn của các doanh nghiệp ma, doanh nghiệp bỏ trốn."
      },
      {
        "topic": "Xử phạt đối với hành vi sử dụng hóa đơn bất hợp pháp (Điều 4)",
        "type": "modified",
        "oldRule": "[Căn cứ: NĐ 51/2010] Quy định chung về hóa đơn khống.",
        "newRule": "[Căn cứ: Điều 4 NĐ 123/2020] Định nghĩa cụ thể 8 trường hợp sử dụng hóa đơn bất hợp pháp và sử dụng bất hợp pháp hóa đơn (hóa đơn không có mã, hóa đơn lập khi chưa có thông báo chấp nhận của cơ quan thuế, hóa đơn sai lệch nội dung).",
        "impactNote": "Giúp Kiểu Việt sàng lọc và loại trừ 100% rủi ro dính líu đến các đường dây mua bán hóa đơn cát đá lậu trôi nổi trên thị trường."
      },
      {
        "topic": "Chuyển đổi hóa đơn điện tử sang chứng từ giấy chứng minh nguồn gốc lưu thông",
        "type": "modified",
        "oldRule": "[Căn cứ: TT 32/2011] In chuyển đổi hóa đơn điện tử chỉ được in 1 lần duy nhất có chữ ký đóng dấu người chuyển đổi.",
        "newRule": "[Căn cứ: Điều 7 NĐ 123/2020] Hóa đơn điện tử được in ra giấy để chứng minh nguồn gốc xuất xứ hàng hóa khi vận chuyển lưu thông trên đường; bản in chỉ có giá trị lưu thông, không có giá trị thanh toán hay kê khai thuế.",
        "impactNote": "Lái xe Kiểu Việt chở vật tư cát, đá, sắt thép ra công trường chỉ cần mang bản in hóa đơn điện tử hoặc xuất trình mã QR tra cứu trên điện thoại."
      },
      {
        "topic": "Trách nhiệm cung cấp dữ liệu hóa đơn cho cơ quan điều tra, thanh tra",
        "type": "added",
        "oldRule": "[Căn cứ: NĐ 51/2010] Phải nộp bản gốc hóa đơn giấy.",
        "newRule": "[Căn cứ: Điều 30 NĐ 123/2020] Cơ quan thuế trực tiếp trích xuất dữ liệu hóa đơn điện tử cung cấp cho cơ quan công an, tòa án, thanh tra; doanh nghiệp không phải in ấn tài liệu giấy giải trình trừ trường hợp có yêu cầu đặc biệt.",
        "impactNote": "Giảm áp lực tiếp đón các đoàn thanh tra, hồ sơ giải trình chi phí xây dựng của Kiểu Việt được đối soát tự động qua cổng số."
      }
    ]
  },
  "tt-78-2021": {
    "decreeId": "tt-78-2021",
    "title": "Thông tư 78/2021/TT-BTC",
    "category": "Hướng dẫn Hóa đơn điện tử",
    "compareWith": "Thông tư 39/2014/TT-BTC và Thông tư 32/2011/TT-BTC",
    "summary": "Thông tư 78/2021/TT-BTC hướng dẫn kỹ thuật chi tiết thi hành NĐ 123: Hướng dẫn xử lý hóa đơn sai sót Mẫu 04/SS, ủy nhiệm lập hóa đơn, ký hiệu hóa đơn chuẩn mới (C22, C23...) và triển khai hóa đơn khởi tạo từ máy tính tiền.",
    "items": [
      {
        "topic": "Quy chuẩn ký hiệu mẫu số và ký hiệu hóa đơn điện tử mới (Điều 4)",
        "type": "modified",
        "oldRule": "[Căn cứ: TT 32/2011] Ký hiệu mẫu số hóa đơn dạng 01GTKT0/001, ký hiệu hóa đơn gồm 2 chữ cái như AA/12P, AA/12E.",
        "newRule": "[Căn cứ: Điều 4 TT 78/2021] Thống nhất ký hiệu chuẩn quốc gia: Ký hiệu mẫu số gồm 1 chữ số (1-HĐ GTGT, 2-HĐ bán hàng...); Ký hiệu hóa đơn gồm 6 ký tự (C22TAA: C là có mã, 22 là năm lập, T là hóa đơn điện tử doanh nghiệp áp dụng).",
        "impactNote": "Kiểu Việt đăng ký đúng dải ký hiệu C25TKV trên phần mềm hóa đơn điện tử, tránh sai sót dẫn đến hóa đơn bị cơ quan thuế từ chối cấp mã."
      },
      {
        "topic": "Quy trình lập biên bản thỏa thuận sai sót trước khi lập hóa đơn điều chỉnh (Điều 7)",
        "type": "modified",
        "oldRule": "[Căn cứ: TT 39/2014] Lập biên bản điều chỉnh hóa đơn bằng giấy có ký tên đóng dấu sống của hai bên.",
        "newRule": "[Căn cứ: Điều 7 TT 78/2021] Trường hợp điều chỉnh hóa đơn sai sót, hai bên phải có văn bản thỏa thuận ghi rõ sai sót (có thể ký số điện tử); sau đó người bán lập hóa đơn điện tử điều chỉnh hoặc thay thế và gửi Mẫu 04/SS-HĐĐT cho cơ quan thuế.",
        "impactNote": "Kiểu Việt ký số biên bản thỏa thuận sai sót nghiệm thu công trình với Chủ đầu tư hoàn toàn online, không tốn thời gian chuyển phát nhanh."
      },
      {
        "topic": "Tiêu chí phân loại doanh nghiệp rủi ro cao về thuế chuyển sang dùng hóa đơn có mã (Điều 5)",
        "type": "added",
        "oldRule": "[Căn cứ: TT 39/2014] Tiêu chí doanh nghiệp rủi ro thuế chưa định lượng rõ ràng.",
        "newRule": "[Căn cứ: Điều 5 TT 78/2021] Quy định rõ các tiêu chí doanh nghiệp rủi ro cao: Vốn dưới 15 tỷ đồng có doanh thu tăng đột biến; doanh nghiệp thay đổi địa chỉ kinh doanh nhiều lần; doanh nghiệp có giám đốc từng là chủ sở hữu công ty bỏ trốn. Các đối tượng này bị bắt buộc chuyển từ hóa đơn không mã sang có mã.",
        "impactNote": "Kiểu Việt duy trì hồ sơ tuân thủ thuế loại A, bảo đảm quyền được sử dụng hóa đơn điện tử không có mã thuận tiện cho hoạt động xuất hóa đơn gói thầu lớn."
      },
      {
        "topic": "Hóa đơn điện tử chiết khấu thương mại căn cứ Bảng kê Mẫu 04 (Điều 7)",
        "type": "modified",
        "oldRule": "[Căn cứ: TT 39/2014] Lập hóa đơn chiết khấu ghi chung chung không có bảng kê chi tiết các hóa đơn cũ.",
        "newRule": "[Căn cứ: Điều 7 TT 78/2021] Bắt buộc trên hóa đơn điện tử điều chỉnh giảm chiết khấu thương mại phải ghi rõ: 'Điều chỉnh giảm doanh thu theo Bảng kê số... ngày...' kèm danh sách số, ký hiệu của các hóa đơn đã xuất trước đây.",
        "impactNote": "Bảo đảm Kiểu Việt được hạch toán giảm trừ doanh thu và thuế GTGT đầu ra hợp pháp khi chiết khấu cho khách mua đá mỏ số lượng lớn."
      },
      {
        "topic": "Thời hạn cơ quan thuế phản hồi Thông báo sai sót Mẫu 01/TB-HĐSS (Điều 7)",
        "type": "added",
        "oldRule": "[Căn cứ: TT 39/2014] Không có quy định thời hạn cơ quan thuế rà soát hóa đơn sai sót.",
        "newRule": "[Căn cứ: Điều 7 TT 78/2021] Trong thời hạn 01 ngày làm việc kể từ khi nhận được Mẫu 04/SS-HĐĐT, cơ quan thuế phải ban hành Thông báo tiếp nhận và xử lý (Mẫu 01/TB-HĐSS) phản hồi cho người nộp thuế biết hóa đơn được chấp nhận hay từ chối.",
        "impactNote": "Kiểu Việt nắm chắc tình trạng xử lý của cơ quan thuế trong vòng 24 giờ, kịp thời xuất hóa đơn thay thế cho gói thầu."
      },
      {
        "topic": "Quy định chi tiết về ủy nhiệm lập hóa đơn điện tử (Điều 3)",
        "type": "added",
        "oldRule": "[Căn cứ: TT 39/2014] Thủ tục ủy nhiệm hóa đơn giấy rườm rà.",
        "newRule": "[Căn cứ: Điều 3 TT 78/2021] Quy định rõ nội dung Hợp đồng ủy nhiệm: Mục đích, thời hạn, phương thức lập và ký số; người ủy nhiệm phải nộp Mẫu 01ĐKTĐ/HĐĐT cho cơ quan thuế trước khi bên nhận ủy nhiệm xuất hóa đơn.",
        "impactNote": "Áp dụng chuẩn xác khi Kiểu Việt ủy quyền cho Chi nhánh Gia Lai xuất hóa đơn bán khoáng sản đá, cát tại chân mỏ."
      },
      {
        "topic": "Hóa đơn điện tử dịch vụ vận tải, bốc xúc đất đá công trình (Điều 4)",
        "type": "added",
        "oldRule": "[Căn cứ: TT 39/2014] Hóa đơn vận tải thường ghi chung chung 'Cước vận chuyển'.",
        "newRule": "[Căn cứ: Điều 4 TT 78/2021] Bắt buộc ghi rõ: Cung đường vận chuyển, khối lượng m3 hoặc tấn, số hiệu xe ben chuyên chở và số chuyến theo nhật trình vận chuyển.",
        "impactNote": "Hồ sơ chi phí thuê xe chở đất đắp của Kiểu Việt được kiểm toán chấp nhận 100%, không bị bóc tách chi phí xăng xe vận tải."
      },
      {
        "topic": "Xử lý chuyển tiếp: Hủy toàn bộ hóa đơn giấy cũ (Điều 12)",
        "type": "removed",
        "oldRule": "[Căn cứ: TT 39/2014] Hóa đơn giấy chưa sử dụng hết được tiếp tục lưu kho.",
        "newRule": "[Căn cứ: Điều 12 TT 78/2021] Bắt buộc các doanh nghiệp phải tiêu hủy toàn bộ các cuốn hóa đơn giấy còn tồn và nộp Báo cáo hủy hóa đơn (Mẫu TB03/AC) cho cơ quan thuế trước khi đăng ký sử dụng hóa đơn điện tử.",
        "impactNote": "Kiểu Việt đã hoàn tất thủ tục tiêu hủy toàn bộ hóa đơn giấy tồn kho, bảo đảm không có rủi ro phạt lưu trữ hóa đơn cũ."
      },
      {
        "topic": "Tiêu chuẩn kỹ thuật kết nối giữa doanh nghiệp và đơn vị cung cấp giải pháp TVAN (Điều 10)",
        "type": "added",
        "oldRule": "[Căn cứ: TT 32/2011] Doanh nghiệp tự kết nối phần mềm kế toán không qua cổng truyền nhận chuẩn.",
        "newRule": "[Căn cứ: Điều 10 TT 78/2021] Dữ liệu hóa đơn phải được truyền nhận qua các tổ chức cung cấp dịch vụ TVAN được Tổng cục Thuế công nhận, bảo đảm mã hóa an toàn SSL và không thể can thiệp sửa đổi dữ liệu sau khi ký.",
        "impactNote": "Kiểu Việt hợp tác với nhà cung cấp TVAN uy tín (Viettel Solutions), dữ liệu hóa đơn truyền thẳng lên hệ thống Tổng cục Thuế trong tích tắc."
      },
      {
        "topic": "Hóa đơn đối với công trình xây dựng có thời gian thi công kéo dài qua nhiều năm (Điều 4)",
        "type": "modified",
        "oldRule": "[Căn cứ: TT 39/2014] Cho phép dồn khối lượng nhiều tháng xuất một hóa đơn cuối năm.",
        "newRule": "[Căn cứ: Điều 4 TT 78/2021] Nghiêm cấm dồn khối lượng. Bắt buộc mỗi đợt nghiệm thu giai đoạn (dù chỉ hoàn thành 1 hạng mục cống thoát nước hay 500m nền đường) đều phải lập hóa đơn điện tử riêng biệt tương ứng ngày ký biên bản.",
        "impactNote": "Kỷ luật xuất hóa đơn của Kiểu Việt được siết chặt, tránh rủi ro bị cơ quan thuế xử phạt hàng chục triệu đồng do gom khối lượng xuất một lần."
      },
      {
        "topic": "Tiêu thức tên hàng hóa dịch vụ và đơn vị tính trên hóa đơn (Điều 4)",
        "type": "modified",
        "oldRule": "[Căn cứ: TT 39/2014] Đơn vị tính có thể ghi tùy ý hoặc bỏ trống.",
        "newRule": "[Căn cứ: Điều 4 TT 78/2021] Tên hàng hóa, dịch vụ phải thể hiện bằng tiếng Việt; đơn vị tính phải theo đơn vị đo lường pháp định của Việt Nam (m3, tấn, kg, m, ca máy, gói); trường hợp dịch vụ không có đơn vị tính thì để trống nhưng phải có thuyết minh hồ sơ kèm theo.",
        "impactNote": "Hóa đơn bán đá base, đá 1x2, cát vàng của Kiểu Việt ghi rõ đơn vị tính chuẩn 'm3' hoặc 'tấn' đúng theo phiếu cân."
      },
      {
        "topic": "Bãi bỏ hoàn toàn việc nộp Báo cáo BC26/AC theo quý (Điều 12)",
        "type": "removed",
        "oldRule": "[Căn cứ: TT 39/2014] Chậm nộp Báo cáo tình hình sử dụng hóa đơn BC26/AC bị phạt tiền từ 4 - 8 triệu đồng.",
        "newRule": "[Căn cứ: Điều 12 TT 78/2021] Xóa bỏ hoàn toàn biểu mẫu BC26/AC. Cơ quan thuế tự động theo dõi số lượng hóa đơn phát hành và sử dụng của doanh nghiệp qua cơ sở dữ liệu hóa đơn điện tử tập trung.",
        "impactNote": "Kế toán Kiểu Việt hoàn toàn trút bỏ nỗi lo phạt chậm nộp báo cáo hóa đơn vào ngày 30 hàng quý."
      },
      {
        "topic": "Xử lý sự cố kỹ thuật đường truyền không gửi được hóa đơn có mã (Điều 9)",
        "type": "added",
        "oldRule": "[Căn cứ: TT 32/2011] Chưa có quy trình dự phòng khi mất kết nối mạng internet với cơ quan thuế.",
        "newRule": "[Căn cứ: Điều 9 TT 78/2021] Khi Cổng thuế bị lỗi hoặc mất mạng, người bán thông báo cho đơn vị TVAN để được hỗ trợ; được phép xuất hóa đơn có mã sau khi hệ thống khắc phục sự cố kèm văn bản xác nhận lỗi hệ thống.",
        "impactNote": "Bảo đảm Kiểu Việt không bị gián đoạn việc xuất hàng và giao nhận đá tại mỏ khoáng sản kể cả khi đường truyền internet gặp sự cố."
      },
      {
        "topic": "Hiệu lực thi hành và quy định chuyển tiếp đồng bộ với NĐ 123",
        "type": "added",
        "oldRule": "[Căn cứ: TT 39/2014, TT 32/2011] Các quy định cũ.",
        "newRule": "[Căn cứ: Điều 11 TT 78/2021] Thông tư có hiệu lực từ ngày 01/07/2022, bãi bỏ hoàn toàn Thông tư 39/2014, Thông tư 32/2011 và Thông tư 119/2014.",
        "impactNote": "Kiểu Việt đã vận hành 100% hệ thống hóa đơn điện tử mới trơn tru, không có bất kỳ sai phạm nào trong suốt 4 năm qua."
      }
    ]
  },
  "nd-70-2025": {
    "decreeId": "nd-70-2025",
    "title": "Nghị định 70/2025/NĐ-CP",
    "category": "Chứng từ khấu trừ TNCN điện tử",
    "compareWith": "Thông tư 37/2010/TT-BTC",
    "summary": "Nghị định 70/2025/NĐ-CP chuẩn hóa quy chế quản lý, phát hành và tích hợp Chứng từ khấu trừ thuế TNCN điện tử vào VNeID và Cổng dịch vụ công quốc gia, xóa bỏ hoàn toàn chứng từ giấy.",
    "items": [
      {
        "topic": "Bắt buộc đồng bộ định danh điện tử VNeID đối với người đại diện doanh nghiệp xuất hóa đơn",
        "type": "added",
        "oldRule": "[Căn cứ: NĐ 123/2020] Doanh nghiệp chỉ cần đăng ký bằng chữ ký số USB Token của công ty mà không yêu cầu xác thực định danh cá nhân người đại diện pháp luật.",
        "newRule": "[Căn cứ: Điều 3 NĐ 70/2025] Bắt buộc người đại diện theo pháp luật và kế toán trưởng phải liên kết tài khoản định danh điện tử VNeID mức độ 2 vào hệ thống hóa đơn điện tử quốc gia trước khi được cấp quyền ký số xuất hóa đơn.",
        "impactNote": "Tổng Giám đốc và Kế toán trưởng Kiểu Việt hoàn tất kích hoạt VNeID mức 2, bảo đảm tính xác thực danh tính cao nhất khi phê duyệt hóa đơn công trình."
      },
      {
        "topic": "Áp dụng hóa đơn điện tử tự động cho hoạt động khai thác mỏ khoáng sản và trạm cân xe tải",
        "type": "added",
        "oldRule": "[Căn cứ: NĐ 123/2020] Hóa đơn xuất thủ công sau khi xe chở đất đá rời trạm cân, dễ phát sinh độ trễ và sai lệch số liệu cân.",
        "newRule": "[Căn cứ: Điều 6 NĐ 70/2025] Bắt buộc các mỏ khoáng sản, bãi tập kết vật tư xây dựng phải lắp đặt hệ thống cân điện tử có kết nối truyền dữ liệu tự động sinh hóa đơn điện tử theo từng lượt xe rời mỏ.",
        "impactNote": "Kiểu Việt lắp đặt module kết nối tự động giữa trạm cân điện tử mỏ đá Gia Lai với phần mềm hóa đơn, dữ liệu m3 đất đá được xuất hóa đơn tức thời."
      },
      {
        "topic": "Quy định rút ngắn thời gian gửi Mẫu 04/SS-HĐĐT xuống 24 giờ",
        "type": "modified",
        "oldRule": "[Căn cứ: NĐ 123/2020] Thời hạn gửi Mẫu 04/SS-HĐĐT là ngày cuối cùng của kỳ kê khai thuế GTGT phát sinh hóa đơn sai sót.",
        "newRule": "[Căn cứ: Điều 8 NĐ 70/2025] Bắt buộc người nộp thuế phải gửi Thông báo giải trình sai sót Mẫu 04/SS-HĐĐT trong vòng 24 giờ kể từ khi phát hiện sai sót hoặc nhận được thông báo của cơ quan thuế.",
        "impactNote": "Kế toán Kiểu Việt xử lý sai sót hóa đơn ngay trong ngày, không để dồn ứ đến cuối tháng tránh bị hệ thống thuế phạt chậm gửi thông báo."
      },
      {
        "topic": "Kiểm soát dòng tiền thanh toán hóa đơn qua tài khoản ngân hàng chuyên dụng",
        "type": "added",
        "oldRule": "[Căn cứ: NĐ 123/2020] Doanh nghiệp có thể sử dụng nhiều tài khoản ngân hàng khác nhau để thanh toán hóa đơn.",
        "newRule": "[Căn cứ: Điều 10 NĐ 70/2025] Các gói thầu đầu tư công có giá trị từ 20 tỷ đồng trở lên bắt buộc phải mở và thanh toán hóa đơn qua Tài khoản ngân hàng chuyên dùng của dự án đăng ký với Kho bạc Nhà nước.",
        "impactNote": "Kiểu Việt mở tài khoản thanh toán riêng cho gói thầu cao tốc tại BIDV, dòng tiền thanh toán vật tư cát đá được bảo vệ chuyên biệt."
      },
      {
        "topic": "Ngăn chặn hành vi xuất hóa đơn vượt quá năng lực máy móc và mỏ vật liệu",
        "type": "added",
        "oldRule": "[Căn cứ: NĐ 123/2020] Cơ quan thuế kiểm tra năng lực sản xuất sau khi thanh tra doanh nghiệp.",
        "newRule": "[Căn cứ: Điều 12 NĐ 70/2025] Hệ thống AI ngành thuế tự động đối chiếu công suất cấp phép khai thác mỏ khoáng sản với tổng sản lượng xuất trên hóa đơn; nếu vượt trên 120% công suất cấp phép sẽ tự động cảnh báo và tạm khóa chức năng xuất hóa đơn.",
        "impactNote": "Kiểu Việt kiểm soát chặt chẽ sản lượng đá, cát xuất bán hàng tháng khớp đúng với Giấy phép khai thác khoáng sản do UBND tỉnh cấp."
      },
      {
        "topic": "Hóa đơn điện tử đối với dịch vụ bồi thường, hỗ trợ di dời giải phóng mặt bằng",
        "type": "modified",
        "oldRule": "[Căn cứ: NĐ 123/2020] Thường lập chứng từ chi tiền bồi thường không có hóa đơn GTGT.",
        "newRule": "[Căn cứ: Điều 14 NĐ 70/2025] Phân loại rõ: Tiền bồi thường đất thuộc diện không chịu thuế GTGT lập chứng từ chi; dịch vụ dọn dẹp, phá dỡ giải phóng mặt bằng bắt buộc phải xuất hóa đơn GTGT 10%.",
        "impactNote": "Kiểu Việt bóc tách rõ ràng chi phí giải phóng mặt bằng và chi phí phá dỡ kết cấu cũ để hạch toán thuế đúng quy định."
      },
      {
        "topic": "Quy chuẩn mã QR Code chứa dữ liệu chứng thực hóa đơn điện tử",
        "type": "added",
        "oldRule": "[Căn cứ: NĐ 123/2020] Mã QR trên hóa đơn chỉ chứa đường link tra cứu website thông thường.",
        "newRule": "[Căn cứ: Điều 15 NĐ 70/2025] Bắt buộc mã QR trên hóa đơn điện tử phải chứa chuỗi dữ liệu mã hóa gồm: Mã số thuế người bán, số hóa đơn, ngày lập, tổng tiền thanh toán và chữ ký số xác thực của cơ quan thuế.",
        "impactNote": "Cán bộ thanh tra giao thông quét mã QR trên xe tải Kiểu Việt là tra cứu được ngay tính hợp pháp của lô vật tư đất đá đang lưu thông."
      },
      {
        "topic": "Cơ chế phối hợp giữa cơ quan Thuế và Sở Tài nguyên & Môi trường trong quản lý hóa đơn khoáng sản",
        "type": "added",
        "oldRule": "[Căn cứ: NĐ 123/2020] Dữ liệu ngành thuế và ngành tài nguyên hoạt động độc lập.",
        "newRule": "[Căn cứ: Điều 18 NĐ 70/2025] Liên thông dữ liệu hàng tháng: Số lượng khoáng sản xuất hóa đơn của doanh nghiệp được tự động chuyển sang Sở TN&MT để đối chiếu sản lượng tính tiền cấp quyền khai thác và thuế tài nguyên.",
        "impactNote": "Kiểu Việt bảo đảm số liệu khai thuế tài nguyên, phí BVMT và hóa đơn bán đá khớp đúng 100% với báo cáo định kỳ nộp Sở TN&MT."
      },
      {
        "topic": "Tự động cảnh báo hóa đơn của doanh nghiệp có dấu hiệu rủi ro cao về thuế",
        "type": "added",
        "oldRule": "[Căn cứ: NĐ 123/2020] Doanh nghiệp tự tra cứu thủ công danh sách đen của Tổng cục Thuế.",
        "newRule": "[Căn cứ: Điều 20 NĐ 70/2025] Cổng thông tin Thuế tự động gửi email cảnh báo cho người mua trong vòng 2 giờ khi nhận được hóa đơn đầu vào từ nhà cung cấp có dấu hiệu rủi ro trốn thuế hoặc ngừng hoạt động.",
        "impactNote": "Hệ thống kế toán Kiểu Việt tích hợp cảnh báo sớm, lập tức dừng thanh toán tiền cho các nhà cung cấp vật tư có dấu hiệu đáng ngờ."
      },
      {
        "topic": "Đơn giản hóa thủ tục thay thế hóa đơn sai sót nhiều lần",
        "type": "modified",
        "oldRule": "[Căn cứ: NĐ 123/2020] Hóa đơn đã điều chỉnh nếu tiếp tục sai sót thì phải lập hóa đơn điều chỉnh tiếp theo gây rối rắm sổ sách.",
        "newRule": "[Căn cứ: Điều 22 NĐ 70/2025] Cho phép hủy toàn bộ chuỗi hóa đơn điều chỉnh cũ và lập một Hóa đơn thay thế duy nhất phản ánh đúng giá trị quyết toán cuối cùng của hạng mục công trình.",
        "impactNote": "Giúp Kiểu Việt chốt sổ quyết toán công trình dứt điểm với Chủ đầu tư khi trải qua nhiều đợt kiểm toán và bù giá vật liệu."
      },
      {
        "topic": "Chế tài xử phạt việc không truyền dữ liệu hóa đơn đúng thời hạn",
        "type": "added",
        "oldRule": "[Căn cứ: NĐ 123/2020] Mức phạt tính chung vào vi phạm thủ tục thuế.",
        "newRule": "[Căn cứ: Điều 25 NĐ 70/2025] Phạt tiền từ 10.000.000 đến 20.000.000 đồng đối với hành vi không chuyển dữ liệu hóa đơn điện tử đến cơ quan thuế trong thời hạn 48 giờ kể từ khi xuất hóa đơn.",
        "impactNote": "Kiểu Việt cài đặt chế độ tự động đồng bộ API tức thời, loại bỏ hoàn toàn khả năng trễ hạn truyền dữ liệu hóa đơn."
      },
      {
        "topic": "Hiệu lực thi hành Nghị định 70/2025",
        "type": "added",
        "oldRule": "[Căn cứ: NĐ 123/2020] Áp dụng từ năm 2022.",
        "newRule": "[Căn cứ: Điều 28 NĐ 70/2025] Nghị định có hiệu lực thi hành từ ngày 01/06/2025; các quy định về tích hợp trạm cân mỏ khoáng sản áp dụng trước ngày 31/12/2025.",
        "impactNote": "Kiểu Việt đã chủ động triển khai đầu tư trạm cân điện tử và nâng cấp phần mềm đáp ứng đầy đủ lộ trình trước hạn."
      }
    ]
  },
  "luat-quan-ly-thue-2019": {
    "decreeId": "luat-quan-ly-thue-2019",
    "title": "Luật Quản lý thuế số 38/2019/QH14",
    "category": "Luật Quản lý thuế",
    "compareWith": "Luật Quản lý thuế số 78/2006/QH11",
    "summary": "Đạo luật cải cách toàn diện hệ thống quản lý thuế Việt Nam: Bắt buộc hóa đơn điện tử toàn quốc, duy trì tiền chậm nộp 0,03%/ngày, siết chặt quản lý giao dịch liên kết và ngân hàng phải cung cấp tài khoản doanh nghiệp.",
    "items": [
      {
        "topic": "Kéo dài thời hạn nộp hồ sơ quyết toán thuế TNDN và BCTC năm (Điều 44)",
        "type": "modified",
        "oldRule": "[Căn cứ: Luật QLT 78/2006] Thời hạn nộp hồ sơ quyết toán thuế năm là 90 ngày kể từ ngày kết thúc năm tài chính (thường là ngày 30 hoặc 31 tháng 3).",
        "newRule": "[Căn cứ: Điều 44 Luật QLT 2019] Thời hạn nộp hồ sơ quyết toán thuế TNDN và Báo cáo tài chính năm là ngày cuối cùng của tháng thứ 3 kể từ ngày kết thúc năm dương lịch hoặc năm tài chính (luôn là ngày 31/03).",
        "impactNote": "Kiểu Việt có thêm 1 ngày so với các năm nhuận 90 ngày, chủ động rà soát số liệu quyết toán giá thành công trình."
      },
      {
        "topic": "Thời hạn nộp hồ sơ quyết toán thuế TNCN cho cá nhân trực tiếp quyết toán (Điều 44)",
        "type": "modified",
        "oldRule": "[Căn cứ: Luật 78/2006] Chung thời hạn 90 ngày với doanh nghiệp (hết tháng 3).",
        "newRule": "[Căn cứ: Điều 44 Luật QLT 2019] Kéo dài thời hạn nộp hồ sơ quyết toán thuế TNCN cho cá nhân trực tiếp quyết toán đến ngày cuối cùng của tháng thứ 4 (ngày 30/04).",
        "impactNote": "Giảm tải áp lực cho phòng nhân sự Kiểu Việt trong tháng 3, tập trung hỗ trợ người lao động quyết toán thuế trong tháng 4."
      },
      {
        "topic": "Cơ chế phân loại người nộp thuế theo mức độ rủi ro (Điều 15 & 16)",
        "type": "added",
        "oldRule": "[Căn cứ: Luật 78/2006] Thanh tra kiểm tra theo kế hoạch hành chính thông thường.",
        "newRule": "[Căn cứ: Điều 15-16 Luật QLT 2019] Ứng dụng quản lý rủi ro tự động: Phân loại doanh nghiệp theo 5 mức độ rủi ro tuân thủ; doanh nghiệp tuân thủ cao được miễn thanh tra trực tiếp tại trụ sở.",
        "impactNote": "Kiểu Việt phấn đấu giữ vững nhóm Rủi ro thấp (Hạng 1) để được ưu tiên hoàn thuế nhanh và giảm thiểu kiểm tra hiện trường."
      },
      {
        "topic": "Trách nhiệm của Ngân hàng thương mại trong việc khấu trừ và cung cấp dữ liệu nộp thuế (Điều 27 & 30)",
        "type": "added",
        "oldRule": "[Căn cứ: Luật 78/2006] Ngân hàng chỉ cung cấp thông tin tài khoản khi có quyết định cưỡng chế thuế.",
        "newRule": "[Căn cứ: Điều 27 & 30 Luật QLT 2019] Ngân hàng có trách nhiệm cung cấp thông tin số hiệu tài khoản của người nộp thuế cho cơ quan thuế; thực hiện trích tiền từ tài khoản của người nộp thuế để nộp thuế theo quyết định cưỡng chế.",
        "impactNote": "Kiểu Việt quản lý dòng tiền minh bạch, luôn dự phòng đủ số dư để nộp các khoản thuế đúng hạn."
      },
      {
        "topic": "Nguyên tắc Bản chất quyết định hình thức trong quản lý giao dịch liên kết (Điều 17 & 42)",
        "type": "added",
        "oldRule": "[Căn cứ: Luật 78/2006] Kiểm tra thuế chủ yếu dựa trên chứng từ hình thức pháp lý bên ngoài.",
        "newRule": "[Căn cứ: Điều 17 & 42 Luật QLT 2019] Cơ quan thuế áp dụng nguyên tắc Bản chất giao dịch quyết định hình thức pháp lý để phân tích, xác định lại nghĩa vụ thuế đối với các giao dịch mua bán vật tư, vay vốn giữa các công ty có quan hệ liên kết.",
        "impactNote": "Hợp đồng cho vay vốn và điều chuyển thiết bị giữa Kiểu Việt và các công ty liên kết phải tuân thủ nghiêm ngặt nguyên tắc giá giao dịch độc lập."
      },
      {
        "topic": "Thời hạn giải quyết hồ sơ hoàn thuế GTGT dự án đầu tư (Điều 75)",
        "type": "modified",
        "oldRule": "[Căn cứ: Luật 78/2006] Thời hạn kiểm tra trước hoàn thuế sau kéo dài 60 ngày làm việc.",
        "newRule": "[Căn cứ: Điều 75 Luật QLT 2019] Rút ngắn thời hạn: Hồ sơ thuộc diện Hoàn thuế trước, kiểm tra sau giải quyết trong vòng 06 ngày làm việc; hồ sơ Kiểm tra trước, hoàn thuế sau giải quyết trong vòng 40 ngày làm việc.",
        "impactNote": "Kiểu Việt chuẩn bị đầy đủ hồ sơ pháp lý mỏ vật liệu để được xếp vào diện Hoàn thuế trước trong 6 ngày, thu hồi vốn nhanh."
      },
      {
        "topic": "Thời hạn nộp tiền thuế trong trường hợp khai bổ sung hồ sơ khai thuế (Điều 55)",
        "type": "modified",
        "oldRule": "[Căn cứ: Luật 78/2006] Nộp tiền thuế phát sinh theo thông báo của cơ quan thuế.",
        "newRule": "[Căn cứ: Điều 55 Luật QLT 2019] Trường hợp người nộp thuế tự khai bổ sung làm tăng số tiền thuế phải nộp thì thời hạn nộp tiền thuế bổ sung chính là ngày nộp hồ sơ khai bổ sung; tiền chậm nộp 0.03%/ngày tính từ ngày hết hạn của tờ khai gốc.",
        "impactNote": "Kiểu Việt nộp ngay tiền thuế thiếu cùng lúc nộp tờ khai bổ sung, tránh để kéo dài làm phát sinh thêm tiền chậm nộp."
      },
      {
        "topic": "Quy định về thời hiệu xử phạt vi phạm pháp luật về thuế (Điều 8)",
        "type": "modified",
        "oldRule": "[Căn cứ: Luật 78/2006] Thời hiệu xử phạt trốn thuế là 5 năm, sau 5 năm không truy thu được.",
        "newRule": "[Căn cứ: Điều 8 Luật QLT 2019] Quá thời hiệu xử phạt vi phạm hành chính (5 năm) thì người nộp thuế không bị phạt tiền nhưng vẫn bị truy thu đủ số tiền thuế trốn, tiền thuế thiếu và tiền chậm nộp trong thời hạn 10 năm trở về trước.",
        "impactNote": "Cảnh báo Kế toán Kiểu Việt tuyệt đối không được phép có sai phạm thuế vì trách nhiệm truy thu kéo dài tới 10 năm."
      },
      {
        "topic": "Các biện pháp cưỡng chế thi hành quyết định hành chính thuế (Điều 125)",
        "type": "modified",
        "oldRule": "[Căn cứ: Luật 78/2006] Biện pháp cưỡng chế áp dụng tuần tự cứng nhắc từng bước.",
        "newRule": "[Căn cứ: Điều 125 Luật QLT 2019] Quy định 7 biện pháp cưỡng chế: Trích tiền từ tài khoản; khấu trừ lương; ngừng làm thủ tục hải quan; ngừng sử dụng hóa đơn; kê biên tài sản; thu hồi tiền, tài sản do bên thứ ba nắm giữ; thu hồi giấy chứng nhận ĐKKD.",
        "impactNote": "Bảo đảm Kiểu Việt không bao giờ để nợ thuế quá 90 ngày dẫn đến việc bị cưỡng chế ngừng sử dụng hóa đơn làm tê liệt thi công."
      },
      {
        "topic": "Biện pháp tạm hoãn xuất cảnh đối với người nộp thuế chưa hoàn thành nghĩa vụ thuế (Điều 66)",
        "type": "added",
        "oldRule": "[Căn cứ: Luật 78/2006] Chưa có quy định tạm hoãn xuất cảnh trực tiếp trong Luật Quản lý thuế.",
        "newRule": "[Căn cứ: Điều 66 Luật QLT 2019] Cơ quan thuế có quyền gửi văn bản đề nghị cơ quan quản lý xuất nhập cảnh tạm hoãn xuất cảnh đối với cá nhân, người đại diện theo pháp luật của doanh nghiệp đang bị cưỡng chế thi hành quyết định hành chính thuế.",
        "impactNote": "Kiểu Việt rà soát công nợ thuế các chi nhánh định kỳ để bảo đảm Ban Lãnh đạo không bị vướng mắc thủ tục xuất cảnh công tác."
      },
      {
        "topic": "Cơ chế Thỏa thuận trước về phương pháp xác định giá tính thuế (APA) (Điều 42)",
        "type": "added",
        "oldRule": "[Căn cứ: Luật 78/2006] Chưa có khung pháp lý APA trong Luật.",
        "newRule": "[Căn cứ: Điều 42 Luật QLT 2019] Doanh nghiệp có giao dịch liên kết được quyền nộp đơn đề nghị áp dụng APA đơn phương, song phương hoặc đa phương với cơ quan thuế để cố định phương pháp định giá chuyển nhượng tối đa 5 năm.",
        "impactNote": "Tạo cơ hội cho Kiểu Việt cố định phương pháp xác định giá bán đá, cát cho các công ty liên danh mà không lo bị ấn định thuế sau này."
      },
      {
        "topic": "Đẩy mạnh dịch vụ công trực tuyến và thanh toán thuế điện tử 100% (Điều 8)",
        "type": "added",
        "oldRule": "[Căn cứ: Luật 78/2006] Nộp thuế tại kho bạc hoặc quầy ngân hàng bằng giấy nộp tiền mặt.",
        "newRule": "[Căn cứ: Điều 8 Luật QLT 2019] 100% doanh nghiệp bắt buộc thực hiện khai thuế, nộp thuế, hoàn thuế và tra cứu nghĩa vụ thuế qua Cổng thông tin điện tử của Tổng cục Thuế kết nối 24/7.",
        "impactNote": "Kiểu Việt nộp thuế điện tử qua eTax mọi lúc mọi nơi, nhận Giấy nộp tiền điện tử có xác nhận của KBNN trong vòng 5 phút."
      },
      {
        "topic": "Trách nhiệm bồi thường của cơ quan thuế khi ban hành quyết định sai (Điều 61)",
        "type": "added",
        "oldRule": "[Căn cứ: Luật 78/2006] Trách nhiệm bồi thường của cơ quan thuế chưa được cụ thể hóa.",
        "newRule": "[Căn cứ: Điều 61 Luật QLT 2019] Trường hợp cơ quan quản lý thuế ban hành quyết định cưỡng chế sai hoặc chậm hoàn thuế, cơ quan thuế phải hoàn trả tiền thuế và bồi thường thiệt hại theo quy định của Luật Trách nhiệm bồi thường của Nhà nước.",
        "impactNote": "Công cụ pháp lý bảo vệ quyền và lợi ích hợp pháp của Kiểu Việt khi phát sinh tranh chấp xử lý thuế với cơ quan thuế địa phương."
      },
      {
        "topic": "Hiệu lực thi hành Luật Quản lý thuế số 38/2019/QH14",
        "type": "added",
        "oldRule": "[Căn cứ: Luật 78/2006] Luật Quản lý thuế cũ.",
        "newRule": "[Căn cứ: Điều 151 Luật QLT 2019] Luật có hiệu lực từ ngày 01/07/2020; riêng quy định về hóa đơn, chứng từ điện tử áp dụng từ ngày 01/07/2022.",
        "impactNote": "Kiểu Việt đã thực thi chuẩn xác toàn bộ hệ thống quản lý thuế theo Luật 38 trong mọi chu trình hạch toán và khai nộp thuế."
      }
    ]
  },
  "nd-126-2020": {
    "decreeId": "nd-126-2020",
    "title": "Nghị định 126/2020/NĐ-CP",
    "category": "Hướng dẫn Luật Quản lý thuế",
    "compareWith": "Nghị định 83/2013/NĐ-CP",
    "summary": "Nghị định 126/2020/NĐ-CP hướng dẫn chi tiết Luật QLT 2019: Quy định tỷ lệ tạm nộp thuế TNDN 4 quý tối thiểu 80%, trách nhiệm kê khai thuế thay của nhà thầu và các biện pháp cưỡng chế hóa đơn.",
    "items": [
      {
        "topic": "Quy định tỷ lệ tạm nộp thuế TNDN 4 quý không được thấp hơn 80% (Điều 8 Khoản 6)",
        "type": "modified",
        "oldRule": "[Căn cứ: NĐ 83/2013 & TT 151/2014] Tổng số thuế TNDN tạm nộp 3 quý đầu năm không được thấp hơn 75% số thuế TNDN phải nộp theo quyết toán năm.",
        "newRule": "[Căn cứ: Điều 8 Khoản 6 NĐ 126/2020 (sửa đổi bởi NĐ 91/2022)] Tổng số thuế TNDN đã tạm nộp của 04 quý không được thấp hơn 80% số thuế TNDN phải nộp theo quyết toán năm; nộp thiếu bị tính tiền chậm nộp 0.03%/ngày từ ngày 31/01.",
        "impactNote": "Kế toán Kiểu Việt chủ động ước tính lợi nhuận công trình cả năm vào tháng 1, tạm nộp đủ tối thiểu 80% số thuế TNDN trước ngày 31/01 để tránh bị phạt tiền chậm nộp."
      },
      {
        "topic": "Kê khai và phân bổ nghĩa vụ thuế GTGT đối với hoạt động xây dựng vãng lai ngoại tỉnh (Điều 11 & 13)",
        "type": "modified",
        "oldRule": "[Căn cứ: TT 156/2013] Nộp thuế GTGT vãng lai ngoại tỉnh tỷ lệ 2% trên doanh thu công trình chưa bao gồm thuế GTGT tại địa phương nơi có công trình.",
        "newRule": "[Căn cứ: Điều 11 & 13 NĐ 126/2020] Giảm tỷ lệ khai và phân bổ thuế GTGT vãng lai xuống còn 1% trên doanh thu chưa có thuế GTGT của công trình xây lắp tại tỉnh khác tỉnh nơi đóng trụ sở chính; nộp hồ sơ phân bổ theo Mẫu 01-6/GTGT.",
        "impactNote": "Kiểu Việt thi công cầu đường tại Đắk Lắk, Kon Tum chỉ phải tạm nộp 1% thuế GTGT vãng lai tại địa phương, giảm áp lực dòng tiền mặt lưu động tới 50%."
      },
      {
        "topic": "Trách nhiệm của Ngân hàng trong việc cung cấp thông tin tài khoản thanh toán (Điều 30)",
        "type": "added",
        "oldRule": "[Căn cứ: NĐ 83/2013] Ngân hàng chỉ cung cấp sao kê khi có quyết định thanh tra bằng văn bản.",
        "newRule": "[Căn cứ: Điều 30 NĐ 126/2020] Ngân hàng thương mại có trách nhiệm cung cấp thông tin tên chủ tài khoản, số hiệu tài khoản và ngày mở tài khoản của người nộp thuế định kỳ theo yêu cầu của Tổng cục Thuế bằng phương thức điện tử.",
        "impactNote": "Kiểu Việt đăng ký công khai toàn bộ tài khoản ngân hàng giao dịch với cơ quan thuế, không để tài khoản ngoài sổ sách."
      },
      {
        "topic": "Các trường hợp cơ quan thuế ấn định thuế (Điều 14 & 15)",
        "type": "modified",
        "oldRule": "[Căn cứ: NĐ 83/2013] Quy định chung về ấn định thuế khi không nộp tờ khai.",
        "newRule": "[Căn cứ: Điều 14-15 NĐ 126/2020] Quy định chi tiết 11 trường hợp bị ấn định thuế: Không phản ánh trung thực sổ sách kế toán; mua bán hàng hóa không có hóa đơn hợp pháp; không xuất trình sổ sách chứng từ khi kiểm tra thuế.",
        "impactNote": "Nhắc nhở Kiểu Việt bảo đảm đầy đủ hồ sơ dự toán, hợp đồng thầu phụ và nghiệm thu thực tế, tránh nguy cơ bị ấn định tỷ lệ chi phí xây dựng."
      },
      {
        "topic": "Địa điểm nộp hồ sơ khai thuế đối với hoạt động khai thác khoáng sản (Điều 11)",
        "type": "modified",
        "oldRule": "[Căn cứ: TT 156/2013] Khai thuế tài nguyên nộp tại trụ sở chính doanh nghiệp.",
        "newRule": "[Căn cứ: Điều 11 NĐ 126/2020] Hoạt động khai thác khoáng sản (đá, cát, đất đắp) bắt buộc phải nộp hồ sơ khai thuế tài nguyên, phí BVMT tại cơ quan thuế quản lý trực tiếp địa bàn nơi có hoạt động khai thác mỏ.",
        "impactNote": "Kiểu Việt nộp tờ khai thuế tài nguyên mỏ đá trực tiếp tại Chi cục Thuế khu vực Chư Păh - Ia Grai (Gia Lai) đúng quy định."
      },
      {
        "topic": "Thời hạn nộp hồ sơ khai thuế theo từng lần phát sinh (Điều 8)",
        "type": "modified",
        "oldRule": "[Căn cứ: NĐ 83/2013] Thời hạn nộp hồ sơ là ngày thứ 10 kể từ ngày phát sinh nghĩa vụ thuế.",
        "newRule": "[Căn cứ: Điều 8 NĐ 126/2020] Giữ nguyên thời hạn chậm nhất là ngày thứ 10 kể từ ngày phát sinh nghĩa vụ thuế đối với các khoản thuế môn bài thành lập mới, thuế chuyển nhượng bất động sản, thuế vãng lai từng lần.",
        "impactNote": "Kiểu Việt nộp tờ khai và tiền thuế môn bài cho chi nhánh mỏ mới thành lập trong vòng 10 ngày kể từ ngày được cấp giấy phép."
      },
      {
        "topic": "Gia hạn nộp thuế trong trường hợp di dời cơ sở sản xuất theo quy hoạch (Điều 24)",
        "type": "added",
        "oldRule": "[Căn cứ: NĐ 83/2013] Chưa có quy định gia hạn thuế khi di dời cơ sở ô nhiễm.",
        "newRule": "[Căn cứ: Điều 24 NĐ 126/2020] Doanh nghiệp phải di dời trạm trộn bê tông, mỏ đá theo quyết định của cơ quan nhà nước được xem xét gia hạn nộp thuế tối đa 02 năm kể từ ngày hết thời hạn nộp thuế.",
        "impactNote": "Kiểu Việt tận dụng chính sách gia hạn thuế khi phải di dời trạm nghiền đá để bảo vệ nguồn vốn lưu động thi công."
      },
      {
        "topic": "Quy trình cưỡng chế bằng biện pháp trích tiền từ tài khoản (Điều 31)",
        "type": "modified",
        "oldRule": "[Căn cứ: NĐ 83/2013] Lệnh phong tỏa tài khoản kéo dài vô thời hạn.",
        "newRule": "[Căn cứ: Điều 31 NĐ 126/2020] Quyết định cưỡng chế trích tiền có hiệu lực trong thời hạn 30 ngày kể từ ngày ban hành; ngân hàng chỉ được trích đúng số tiền ghi trong quyết định cưỡng chế.",
        "impactNote": "Bảo đảm quyền lợi doanh nghiệp, ngân hàng không được tự ý phong tỏa toàn bộ số dư vượt quá số tiền thuế bị cưỡng chế của Kiểu Việt."
      },
      {
        "topic": "Quy trình hoàn thuế nộp thừa đối với các khoản thuế tài nguyên, phí BVMT (Điều 25)",
        "type": "modified",
        "oldRule": "[Căn cứ: NĐ 83/2013] Thủ tục bù trừ số thuế nộp thừa kéo dài qua nhiều cấp xét duyệt.",
        "newRule": "[Căn cứ: Điều 25 NĐ 126/2020] Số thuế nộp thừa được tự động bù trừ vào số thuế phải nộp của kỳ tiếp theo hoặc bù trừ với các khoản thuế khác cùng địa bàn; thủ tục hoàn trả giải quyết trong vòng 05 ngày làm việc.",
        "impactNote": "Kiểu Việt bù trừ linh hoạt số tiền thuế tài nguyên nộp thừa vào số thuế GTGT hoặc TNDN phải nộp tại tỉnh Gia Lai."
      },
      {
        "topic": "Trách nhiệm nộp thuế thay của bên nhận ủy quyền và tổ chức liên danh (Điều 7)",
        "type": "added",
        "oldRule": "[Căn cứ: NĐ 83/2013] Chưa quy định rõ nghĩa vụ thuế của từng thành viên trong liên danh nhà thầu.",
        "newRule": "[Căn cứ: Điều 7 NĐ 126/2020] Trường hợp liên danh nhà thầu có thỏa thuận xuất hóa đơn riêng thì từng thành viên tự kê khai nộp thuế; trường hợp cử 1 thành viên đại diện xuất hóa đơn thì bên đại diện phải phân bổ và nộp thuế thay cho các thành viên.",
        "impactNote": "Quy chế liên danh của Kiểu Việt quy định rõ từng nhà thầu tự xuất hóa đơn và chịu trách nhiệm độc lập về thuế phần việc của mình."
      },
      {
        "topic": "Cơ chế quản lý thuế đối với kinh doanh thương mại điện tử xuyên biên giới (Điều 30)",
        "type": "added",
        "oldRule": "[Căn cứ: NĐ 83/2013] Chưa có cơ chế thu thuế nhà thầu nước ngoài trực tiếp.",
        "newRule": "[Căn cứ: Điều 30 NĐ 126/2020] Nhà cung cấp nước ngoài (Google, Microsoft, Facebook) trực tiếp đăng ký, kê khai và nộp thuế qua Cổng thông tin điện tử dành cho nhà cung cấp nước ngoài của Tổng cục Thuế.",
        "impactNote": "Kiểu Việt mua dịch vụ phần mềm Microsoft 365, Google Workspace được nhận hóa đơn hợp pháp có mã số thuế nhà thầu nước ngoài để khấu trừ thuế."
      },
      {
        "topic": "Hiệu lực thi hành và hướng dẫn thi hành Luật Quản lý thuế",
        "type": "added",
        "oldRule": "[Căn cứ: NĐ 83/2013] Nghị định cũ.",
        "newRule": "[Căn cứ: Điều 44 NĐ 126/2020] Nghị định có hiệu lực thi hành từ ngày 05/12/2020, thay thế toàn bộ Nghị định 83/2013 và các nghị định sửa đổi trước đây.",
        "impactNote": "Kiểu Việt tuân thủ đầy đủ 100% các quy định về kê khai, phân bổ thuế và nộp thuế điện tử theo NĐ 126."
      }
    ]
  },
  "tt-80-2021": {
    "decreeId": "tt-80-2021",
    "title": "Thông tư 80/2021/TT-BTC",
    "category": "Hướng dẫn Luật Quản lý thuế & Phân bổ thuế",
    "compareWith": "Thông tư 156/2013/TT-BTC",
    "summary": "Thông tư 80/2021/TT-BTC là 'cẩm nang' quản lý thuế: Cải cách toàn diện việc phân bổ thuế GTGT xây dựng vãng lai ngoại tỉnh giảm từ 2% xuống 1%, chuẩn hóa 100% biểu mẫu tờ khai thuế và quy trình hoàn thuế điện tử.",
    "items": [
      {
        "topic": "Đổi mới toàn diện hệ thống mẫu biểu hồ sơ khai thuế GTGT, TNDN, TNCN (Phụ lục II)",
        "type": "modified",
        "oldRule": "[Căn cứ: TT 156/2013] Sử dụng các mẫu biểu tờ khai cũ: 01/GTGT, 03/TNDN, 05/KK-TNCN với nhiều bảng kê chi tiết thủ công.",
        "newRule": "[Căn cứ: Phụ lục II TT 80/2021] Ban hành hệ thống mẫu biểu tờ khai chuẩn hóa mã vạch điện tử: Tờ khai 01/GTGT kèm các phụ lục phân bổ 01-6/GTGT cho xây dựng vãng lai; Tờ khai 03/TNDN tích hợp phụ lục giao dịch liên kết NĐ 132.",
        "impactNote": "Kiểu Việt cập nhật phần mềm kế toán tương thích 100% với ứng dụng HTKK mới nhất của Tổng cục Thuế, nộp tờ khai không bị lỗi định dạng."
      },
      {
        "topic": "Quy trình phân bổ nghĩa vụ thuế GTGT cho công trình xây lắp tại nhiều địa phương (Điều 13)",
        "type": "modified",
        "oldRule": "[Căn cứ: TT 156/2013] Phải nộp tờ khai thuế GTGT vãng lai riêng tại từng Chi cục Thuế nơi có công trình.",
        "newRule": "[Căn cứ: Điều 13 TT 80/2021] Doanh nghiệp chỉ nộp một Tờ khai thuế GTGT duy nhất (Mẫu 01/GTGT) tại cơ quan thuế trụ sở chính, kèm Phụ lục bảng phân bổ số thuế GTGT phải nộp cho các địa phương (Mẫu 01-6/GTGT); Kho bạc tự động điều tiết tiền thuế về các tỉnh.",
        "impactNote": "Kiểu Việt tiết kiệm hàng trăm giờ làm việc, không còn phải lập và theo dõi riêng hàng chục tờ khai vãng lai tại các huyện xa xôi."
      },
      {
        "topic": "Quy định phân bổ thuế TNDN đối với cơ sở sản xuất đá, cát trực thuộc khác tỉnh (Điều 17)",
        "type": "modified",
        "oldRule": "[Căn cứ: TT 156/2013] Phân bổ thuế TNDN dựa trên tỷ lệ chi phí sản xuất.",
        "newRule": "[Căn cứ: Điều 17 TT 80/2021] Cơ sở sản xuất trực thuộc (nhà máy nghiền đá, mỏ đất) khác tỉnh được phân bổ số thuế TNDN phải nộp căn cứ theo tỷ lệ chi phí của cơ sở sản xuất trên tổng chi phí của doanh nghiệp; quyết toán tại trụ sở chính.",
        "impactNote": "Kiểu Việt phân bổ chuẩn xác nghĩa vụ thuế TNDN cho ngân sách tỉnh Gia Lai và Bình Định, hài hòa nghĩa vụ thuế với chính quyền địa phương."
      },
      {
        "topic": "Hồ sơ và thủ tục hoàn thuế GTGT điện tử (Điều 27-32)",
        "type": "modified",
        "oldRule": "[Căn cứ: TT 156/2013] Nộp hồ sơ hoàn thuế bản giấy kèm bản sao hóa đơn chứng từ.",
        "newRule": "[Căn cứ: Điều 27-32 TT 80/2021] 100% hồ sơ đề nghị hoàn thuế GTGT dự án đầu tư được nộp điện tử qua Cổng eTax; hệ thống tự động phân loại hồ sơ và kiểm tra đối chiếu hóa đơn điện tử.",
        "impactNote": "Hồ sơ hoàn thuế dự án đầu tư dây chuyền nghiền đá Kiểu Việt được thẩm định hoàn toàn qua mạng, rút ngắn thời gian nhận tiền hoàn thuế."
      },
      {
        "topic": "Quy trình miễn, giảm thuế theo Hiệp định tránh đánh thuế hai lần (DTA) (Điều 62)",
        "type": "modified",
        "oldRule": "[Căn cứ: TT 156/2013] Thủ tục xét duyệt kéo dài và đòi hỏi hợp pháp hóa lãnh sự phức tạp.",
        "newRule": "[Căn cứ: Điều 62 TT 80/2021] Nhà thầu phụ nước ngoài hoặc chuyên gia nước ngoài tự nộp hồ sơ thông báo miễn giảm thuế DTA qua mạng điện tử kèm Giấy chứng nhận cư trú của nước sở tại.",
        "impactNote": "Kiểu Việt làm thủ tục miễn giảm thuế nhà thầu chuẩn xác khi thuê chuyên gia Nhật Bản, Hàn Quốc hướng dẫn vận hành máy khoan hầm."
      },
      {
        "topic": "Xử lý số tiền thuế, tiền phạt nộp thừa tại các chi nhánh (Điều 25 & 26)",
        "type": "modified",
        "oldRule": "[Căn cứ: TT 156/2013] Bù trừ tiền nộp thừa giữa các tỉnh khác nhau rất khó khăn.",
        "newRule": "[Căn cứ: Điều 25-26 TT 80/2021] Quy định rõ thẩm quyền của cơ quan thuế trụ sở chính trong việc ban hành Quyết định hoàn trả kiêm bù trừ thu ngân sách nhà nước giữa các chi cục thuế khác tỉnh trên toàn quốc.",
        "impactNote": "Kiểu Việt dễ dàng bù trừ tiền thuế nộp thừa tại công trình Gia Lai sang nghĩa vụ thuế tại trụ sở chính công ty."
      },
      {
        "topic": "Quy định về lập và nộp hồ sơ khai thuế môn bài (Điều 18)",
        "type": "modified",
        "oldRule": "[Căn cứ: TT 156/2013] Hàng năm phải nộp tờ khai thuế môn bài nếu có thay đổi vốn.",
        "newRule": "[Căn cứ: Điều 18 TT 80/2021] Chỉ phải nộp tờ khai lệ phí môn bài một lần duy nhất khi mới thành lập hoặc khi có thay đổi về vốn điều lệ; nộp chậm nhất ngày 30/01 năm sau năm có thay đổi.",
        "impactNote": "Giảm bớt thủ tục hành chính đầu năm, Kiểu Việt chỉ cần nộp tiền lệ phí môn bài trước ngày 30/01 mà không cần nộp lại tờ khai."
      },
      {
        "topic": "Thủ tục chấm dứt hiệu lực mã số thuế và phục hồi mã số thuế (Điều 39-41)",
        "type": "modified",
        "oldRule": "[Căn cứ: TT 156/2013] Mã số thuế đã đóng rất khó khôi phục lại.",
        "newRule": "[Căn cứ: Điều 39-41 TT 80/2021] Quy định rõ quy trình phục hồi mã số thuế trong vòng 10 ngày làm việc nếu doanh nghiệp chứng minh đã khắc phục đầy đủ nghĩa vụ thuế và có lý do chính đáng.",
        "impactNote": "Bảo đảm Kiểu Việt có công cụ pháp lý bảo vệ mã số thuế của các chi nhánh mỏ vật liệu khi có sự cố chậm trễ hành chính."
      },
      {
        "topic": "Quy trình kiểm tra thuế tại trụ sở người nộp thuế (Điều 70-74)",
        "type": "modified",
        "oldRule": "[Căn cứ: TT 156/2013] Thời gian kiểm tra thường bị kéo dài vượt quá thời hạn ghi trên quyết định.",
        "newRule": "[Căn cứ: Điều 70-74 TT 80/2021] Quy định nghiêm ngặt: Thời hạn kiểm tra tại trụ sở doanh nghiệp tối đa không quá 10 ngày làm việc (gia hạn 1 lần không quá 10 ngày); Trưởng đoàn phải công bố quyết định và ký biên bản kiểm tra đúng hạn.",
        "impactNote": "Kiểu Việt chủ động sắp xếp phòng làm việc và cung cấp chứng từ cho đoàn kiểm tra thuế trong đúng khung thời gian 10 ngày luật định."
      },
      {
        "topic": "Xác nhận hoàn thành nghĩa vụ nộp thuế phục vụ đấu thầu công trình (Điều 70)",
        "type": "added",
        "oldRule": "[Căn cứ: TT 156/2013] Xin giấy xác nhận nghĩa vụ thuế bằng văn bản giấy mất 10 - 15 ngày.",
        "newRule": "[Căn cứ: Điều 70 TT 80/2021] Doanh nghiệp gửi đề nghị tra cứu nghĩa vụ thuế qua mạng eTax; cơ quan thuế trả kết quả Giấy xác nhận tình trạng thuế điện tử có chữ ký số trong vòng 03 ngày làm việc.",
        "impactNote": "Kiểu Việt lấy ngay giấy xác nhận không nợ thuế để hoàn thiện hồ sơ dự thầu các gói thầu cao tốc hàng ngàn tỷ đồng kịp hạn chót."
      },
      {
        "topic": "Quy định chi tiết về hoàn thuế TNCN cho người lao động ủy quyền (Điều 42)",
        "type": "modified",
        "oldRule": "[Căn cứ: TT 156/2013] Thủ tục hoàn thuế TNCN cho cán bộ công nhân viên phức tạp.",
        "newRule": "[Căn cứ: Điều 42 TT 80/2021] Doanh nghiệp chi trả thu nhập thực hiện quyết toán thay và bù trừ số thuế nộp thừa vào kỳ tiếp theo hoặc lập hồ sơ hoàn thuế tập trung cho toàn bộ cán bộ công nhân viên.",
        "impactNote": "Phòng Kế toán Kiểu Việt hoàn thuế TNCN nhanh gọn cho hàng trăm kỹ sư, lái máy thi công sau kỳ quyết toán năm."
      },
      {
        "topic": "Cơ chế phối hợp chia sẻ thông tin thu thuế giữa Thuế và Kho bạc Nhà nước (Điều 10)",
        "type": "added",
        "oldRule": "[Căn cứ: TT 156/2013] Chứng từ nộp tiền vào Kho bạc phải luân chuyển qua đường công văn.",
        "newRule": "[Căn cứ: Điều 10 TT 80/2021] Dữ liệu số thuế Kiểu Việt nộp vào Kho bạc được truyền tự động sang hệ thống Thuế trong vòng 15 phút, xóa ngay tình trạng nợ thuế trên màn hình quản lý.",
        "impactNote": "Bảo đảm tình trạng thuế của Kiểu Việt luôn ở trạng thái 'Đã nộp đủ', không bao giờ bị ghi nhận nợ thuế ảo."
      },
      {
        "topic": "Biểu mẫu báo cáo chuyển nhượng vốn và thay đổi tỷ lệ sở hữu (Phụ lục II)",
        "type": "added",
        "oldRule": "[Căn cứ: TT 156/2013] Kê khai chuyển nhượng vốn chung chung trên tờ khai thuế TNDN.",
        "newRule": "[Căn cứ: Mẫu 05/TNDN TT 80/2021] Tách riêng tờ khai thuế TNDN từ chuyển nhượng vốn; kê khai chi tiết giá vốn, giá chuyển nhượng và thuế suất 20% trên thu nhập chịu thuế.",
        "impactNote": "Kiểu Việt kê khai minh bạch khi thực hiện tái cấu trúc phần vốn góp tại các công ty liên kết khai thác khoáng sản."
      },
      {
        "topic": "Hiệu lực thi hành Thông tư 80/2021/TT-BTC",
        "type": "added",
        "oldRule": "[Căn cứ: TT 156/2013, TT 119/2014, TT 151/2014] Các thông tư cũ.",
        "newRule": "[Căn cứ: Điều 87 TT 80/2021] Thông tư có hiệu lực từ ngày 01/01/2022, bãi bỏ hoàn toàn Thông tư 156/2013 và các thông tư hướng dẫn quản lý thuế trước đây.",
        "impactNote": "Toàn bộ chu trình kế toán thuế Kiểu Việt vận hành đồng bộ theo quy chuẩn Thông tư 80 bảo đảm tính pháp lý cao nhất."
      }
    ]
  },
  "nd-125-2020": {
    "decreeId": "nd-125-2020",
    "title": "Nghị định 125/2020/NĐ-CP",
    "category": "Xử phạt vi phạm hành chính Thuế & Hóa đơn",
    "compareWith": "Nghị định 129/2013/NĐ-CP và Nghị định 109/2013/NĐ-CP",
    "summary": "Nghị định 125/2020/NĐ-CP tăng mạnh mức tiền phạt vi phạm hành chính về thuế và hóa đơn: Phạt xuất hóa đơn sai thời điểm lên đến 8 triệu đồng, phạt chậm nộp tờ khai lên đến 25 triệu đồng và phạt trốn thuế từ 1 đến 3 lần số thuế trốn.",
    "items": [
      {
        "topic": "Nâng khung phạt hành vi chậm nộp hồ sơ khai thuế quá 90 ngày (Điều 13)",
        "type": "modified",
        "oldRule": "[Căn cứ: NĐ 129/2013] Chậm nộp hồ sơ khai thuế quá 90 ngày không phát sinh số thuế phạt từ 1.000.000 đến 5.000.000 đồng.",
        "newRule": "[Căn cứ: Khoản 5 Điều 13 NĐ 125/2020] Nâng mức phạt lên từ 15.000.000 đồng đến 25.000.000 đồng đối với hành vi nộp hồ sơ khai thuế quá thời hạn trên 90 ngày kể từ ngày hết hạn (trường hợp không phát sinh số thuế phải nộp).",
        "impactNote": "Kiểu Việt thiết lập lịch nhắc nhở tự động nộp hồ sơ khai thuế GTGT và TNDN tạm tính trước ngày 20 hàng tháng, tuyệt đối không để trễ hạn."
      },
      {
        "topic": "Khung phạt hành vi lập hóa đơn không đúng thời điểm (Điều 24)",
        "type": "modified",
        "oldRule": "[Căn cứ: TT 10/2014 & NĐ 41/2018] Phạt cảnh cáo hoặc phạt tiền từ 4.000.000 đến 8.000.000 đồng tính trên cả đợt vi phạm.",
        "newRule": "[Căn cứ: Điều 24 NĐ 125/2020] Phân loại cụ thể: Phạt từ 3.000.000 đến 5.000.000 đồng nếu lập hóa đơn sai thời điểm nhưng không dẫn đến chậm nghĩa vụ thuế; Phạt từ 4.000.000 đến 8.000.000 đồng đối với hành vi lập hóa đơn sai thời điểm dẫn đến chậm thực hiện nghĩa vụ thuế; phạt tính trên từng hóa đơn vi phạm.",
        "impactNote": "Kế toán Kiểu Việt bắt buộc phải xuất hóa đơn ngay trong ngày nghiệm thu công trình A-B, tránh bị cộng dồn mức phạt hàng chục triệu đồng."
      },
      {
        "topic": "Khung phạt hành vi không lập hóa đơn khi bán hàng hóa, dịch vụ (Điều 24)",
        "type": "modified",
        "oldRule": "[Căn cứ: NĐ 129/2013] Phạt tiền từ 10.000.000 đến 20.000.000 đồng.",
        "newRule": "[Căn cứ: Khoản 5 Điều 24 NĐ 125/2020] Phạt tiền từ 10.000.000 đồng đến 20.000.000 đồng đối với hành vi không lập hóa đơn khi bán hàng hóa, cung cấp dịch vụ cho người mua; đồng thời buộc phải lập hóa đơn giao cho người mua.",
        "impactNote": "Tất cả các giao dịch bán đá, đất đắp tại mỏ khoáng sản của Kiểu Việt (dù khách hàng cá nhân không lấy hóa đơn) đều phải xuất hóa đơn điện tử đầy đủ."
      },
      {
        "topic": "Khung phạt hành vi làm mất, cháy, hỏng hóa đơn (Điều 26)",
        "type": "modified",
        "oldRule": "[Căn cứ: NĐ 129/2013] Làm mất hóa đơn đã phát hành phạt từ 10.000.000 đến 20.000.000 đồng/hóa đơn.",
        "newRule": "[Căn cứ: Điều 26 NĐ 125/2020] Với hóa đơn điện tử: Phạt cảnh cáo nếu làm mất nhưng tìm lại được trước khi cơ quan thuế công bố quyết định; phạt từ 3 - 5 triệu nếu làm mất hóa đơn trong thời gian lưu trữ; phạt từ 4 - 8 triệu nếu làm mất hóa đơn đã lập.",
        "impactNote": "Nhờ số hóa và lưu trữ đám mây, Kiểu Việt triệt tiêu 100% rủi ro cháy, ướt, mất hóa đơn giấy truyền thống."
      },
      {
        "topic": "Mức phạt hành vi khai sai dẫn đến thiếu số tiền thuế phải nộp (Điều 16)",
        "type": "modified",
        "oldRule": "[Căn cứ: NĐ 129/2013] Phạt 10% - 20% số tiền thuế khai thiếu.",
        "newRule": "[Căn cứ: Điều 16 NĐ 125/2020] Phạt cố định đúng 20% số tiền thuế khai thiếu hoặc số tiền thuế đã được hoàn cao hơn quy định; đồng thời buộc nộp đủ số tiền thuế thiếu và tiền chậm nộp 0.03%/ngày.",
        "impactNote": "Kế toán Kiểu Việt soát xét kỹ lưỡng tính hợp lý của chi phí khấu hao máy móc và định mức vật tư trước khi nộp quyết toán thuế TNDN."
      },
      {
        "topic": "Khung phạt hành vi trốn thuế từ 1 đến 3 lần số tiền thuế trốn (Điều 17)",
        "type": "modified",
        "oldRule": "[Căn cứ: NĐ 129/2013] Phạt từ 1 đến 3 lần số tiền thuế trốn đối với các hành vi trốn thuế.",
        "newRule": "[Căn cứ: Điều 17 NĐ 125/2020] Quy định chi tiết các bậc phạt: Phạt 1 lần (có 1 tình tiết giảm nhẹ); phạt 1.5 lần (không có tình tiết tăng nặng/giảm nhẹ); phạt 2 lần (có 1 tình tiết tăng nặng); phạt 2.5 lần (có 2 tình tiết tăng nặng); phạt 3 lần (có 3 tình tiết tăng nặng trở lên); nếu nghiêm trọng sẽ chuyển hồ sơ sang cơ quan công an khởi tố hình sự.",
        "impactNote": "Kiểu Việt tuân thủ pháp luật nghiêm minh, tuyệt đối không tham gia mua bán hóa đơn cát đá không có nguồn gốc mỏ hợp pháp."
      },
      {
        "topic": "Nguyên tắc áp dụng tình tiết tăng nặng, giảm nhẹ khi xác định mức phạt (Điều 5)",
        "type": "added",
        "oldRule": "[Căn cứ: NĐ 129/2013] Mức phạt thường áp dụng tùy nghi theo quyết định của người xử phạt.",
        "newRule": "[Căn cứ: Điều 5 NĐ 125/2020] Công thức định lượng rõ ràng: Mức phạt tiền cụ thể đối với một hành vi là mức trung bình của khung phạt; mỗi tình tiết giảm nhẹ được giảm 10% mức trung bình (không thấp hơn mức tối thiểu); mỗi tình tiết tăng nặng tăng 10% mức trung bình (không vượt quá mức tối đa).",
        "impactNote": "Kiểu Việt chủ động thu thập chứng cứ khắc phục hậu quả để yêu cầu áp dụng tình tiết giảm nhẹ khi giải trình các lỗi hành chính nhỏ."
      },
      {
        "topic": "Thời hiệu xử phạt vi phạm hành chính về thuế và hóa đơn (Điều 8)",
        "type": "modified",
        "oldRule": "[Căn cứ: NĐ 129/2013] Thời hiệu xử phạt thuế là 2 năm.",
        "newRule": "[Căn cứ: Điều 8 NĐ 125/2020] Thời hiệu xử phạt vi phạm thủ tục thuế và hóa đơn là 02 năm; thời hiệu xử phạt đối với hành vi trốn thuế, khai thiếu thuế là 05 năm kể từ ngày thực hiện hành vi; quá thời hiệu thì không bị phạt tiền nhưng vẫn bị truy thu đủ số thuế trốn và tiền chậm nộp 10 năm.",
        "impactNote": "Kiểu Việt lưu trữ hồ sơ chứng từ công trình tối thiểu 10 năm để bảo đảm căn cứ giải trình đối với các kỳ thanh tra thuế dài hạn."
      },
      {
        "topic": "Các trường hợp không bị xử phạt vi phạm hành chính về thuế (Điều 9)",
        "type": "added",
        "oldRule": "[Căn cứ: NĐ 129/2013] Chỉ quy định miễn phạt khi gặp thiên tai bất khả kháng.",
        "newRule": "[Căn cứ: Điều 9 NĐ 125/2020] Miễn xử phạt trong các trường hợp: Người nộp thuế tự phát hiện và khai bổ sung hồ sơ khai thuế trước khi cơ quan thuế công bố quyết định thanh tra, kiểm tra; người nộp thuế thực hiện theo đúng văn bản hướng dẫn của cơ quan thuế hoặc cơ quan nhà nước có thẩm quyền.",
        "impactNote": "Kiểu Việt lập tức rà soát và nộp tờ khai bổ sung ngay khi phát hiện sai sót số liệu để được miễn 100% tiền phạt khai sai 20%."
      },
      {
        "topic": "Xử phạt vi phạm về thời hạn đăng ký thuế và thông báo thay đổi thông tin (Điều 10 & 11)",
        "type": "modified",
        "oldRule": "[Căn cứ: NĐ 129/2013] Phạt từ 400.000 đến 2.000.000 đồng.",
        "newRule": "[Căn cứ: Điều 11 NĐ 125/2020] Nâng mức phạt lên từ 3.000.000 đến 7.000.000 đồng đối với hành vi thông báo thay đổi nội dung đăng ký thuế quá thời hạn từ 91 ngày trở lên.",
        "impactNote": "Kiểu Việt cập nhật tức thời thay đổi thông tin địa chỉ chi nhánh, tài khoản ngân hàng trên Cổng thông tin đăng ký thuế trong vòng 10 ngày."
      },
      {
        "topic": "Khung phạt hành vi không trích chuyển tiền từ tài khoản người nộp thuế của Ngân hàng (Điều 18)",
        "type": "added",
        "oldRule": "[Căn cứ: NĐ 129/2013] Chưa có chế tài cụ thể với ngân hàng thương mại.",
        "newRule": "[Căn cứ: Điều 18 NĐ 125/2020] Ngân hàng thương mại không thực hiện trích nộp tiền từ tài khoản của người nộp thuế theo quyết định cưỡng chế bị phạt tiền tương ứng với số tiền không trích chuyển vào ngân sách nhà nước.",
        "impactNote": "Minh bạch hóa trách nhiệm ngân hàng, Kiểu Việt chủ động nộp thuế đúng hạn tránh để tài khoản bị phong tỏa cưỡng chế làm gián đoạn thanh toán."
      },
      {
        "topic": "Tính tiền chậm nộp thuế theo tỷ lệ 0.03%/ngày (Điều 42)",
        "type": "modified",
        "oldRule": "[Căn cứ: Luật cũ] Áp dụng mức lãi phạt 0.05% hoặc 0.07%/ngày.",
        "newRule": "[Căn cứ: Điều 42 NĐ 125/2020 & Luật QLT] Mức tính tiền chậm nộp cố định bằng 0.03%/ngày (tương đương khoảng 10.95%/năm) tính trên số tiền thuế chậm nộp kể từ ngày tiếp sau ngày phát sinh tiền chậm nộp đến ngày người nộp thuế nộp vào NSNN.",
        "impactNote": "So với lãi suất vay thương mại, tiền chậm nộp 0.03%/ngày là chi phí đáng kể; Kiểu Việt ưu tiên thanh toán dứt điểm nghĩa vụ thuế."
      },
      {
        "topic": "Xử phạt vi phạm quy định về lập và gửi Báo cáo tình hình sử dụng hóa đơn (Điều 25)",
        "type": "modified",
        "oldRule": "[Căn cứ: TT 10/2014] Phạt chậm nộp BC26 từ 2 - 8 triệu đồng.",
        "newRule": "[Căn cứ: Điều 25 NĐ 125/2020] Áp dụng đối với các chứng từ giấy hoặc bảng kê tổng hợp: Nộp quá hạn từ 1 đến 10 ngày có tình tiết giảm nhẹ phạt cảnh cáo; quá hạn trên 90 ngày phạt từ 5.000.000 đến 15.000.000 đồng.",
        "impactNote": "Nhờ áp dụng hóa đơn điện tử không cần nộp BC26/AC, Kiểu Việt đã loại bỏ hoàn toàn các rủi ro phạt tại điều này."
      },
      {
        "topic": "Thẩm quyền xử phạt vi phạm hành chính của cơ quan thuế các cấp (Điều 38)",
        "type": "modified",
        "oldRule": "[Căn cứ: NĐ 129/2013] Thẩm quyền xử phạt của Chi cục trưởng Thuế bị giới hạn dưới 50 triệu đồng.",
        "newRule": "[Căn cứ: Điều 38 NĐ 125/2020] Nâng thẩm quyền xử phạt của Cục trưởng Cục Thuế lên đến 200.000.000 đồng đối với tổ chức; Chi cục trưởng Chi cục Thuế phạt đến 50.000.000 đồng; Trưởng đoàn thanh tra phạt đến số tiền trốn thuế phát hiện.",
        "impactNote": "Kế toán trưởng Kiểu Việt nắm rõ thẩm quyền của từng cấp cán bộ thuế để giải trình và khiếu nại đúng nơi có thẩm quyền."
      },
      {
        "topic": "Công khai thông tin vi phạm hành chính về thuế trên cổng thông tin (Điều 43)",
        "type": "added",
        "oldRule": "[Căn cứ: NĐ 129/2013] Chỉ công khai các trường hợp nợ thuế kéo dài.",
        "newRule": "[Căn cứ: Điều 43 NĐ 125/2020] Cơ quan thuế công khai danh tính doanh nghiệp bị xử phạt trốn thuế, sử dụng hóa đơn bất hợp pháp trên trang điện tử của Cục Thuế và phương tiện truyền thông đại chúng.",
        "impactNote": "Bảo vệ danh tiếng và uy tín thương hiệu Công ty Cổ phần Kiểu Việt, kiên quyết giữ vững xếp hạng tín nhiệm thuế hạng A."
      }
    ]
  },
  "nd-41-2018": {
    "decreeId": "nd-41-2018",
    "title": "Nghị định 41/2018/NĐ-CP",
    "category": "Xử phạt Kế toán – Kiểm toán độc lập",
    "compareWith": "Nghị định 105/2013/NĐ-CP",
    "summary": "Nghị định 41/2018/NĐ-CP siết chặt kỷ cương kế toán: Tăng gấp 2-3 lần mức phạt vi phạm chứng từ, sổ sách, tiêu chuẩn bổ nhiệm Kế toán trưởng và chế tài đối với hành vi lập hai hệ thống sổ kế toán.",
    "items": [
      {
        "topic": "Nâng mức phạt hành vi để ngoài sổ sách kế toán tài sản, công nợ (Điều 16)",
        "type": "modified",
        "oldRule": "[Căn cứ: NĐ 105/2013] Phạt từ 10.000.000 đến 20.000.000 đồng.",
        "newRule": "[Căn cứ: Khoản 3 Điều 16 NĐ 41/2018] Phạt tiền từ 20.000.000 đến 30.000.000 đồng đối với hành vi để ngoài sổ kế toán tài sản của đơn vị hoặc tài sản liên quan đến đơn vị; buộc nộp lại số lợi bất hợp pháp.",
        "impactNote": "Kiểu Việt quản lý 100% tài sản xe máy thiết bị và mỏ đất đá trên sổ sách kế toán, cấm để ngoài sổ bất kỳ tài sản nào."
      },
      {
        "topic": "Khung phạt hành vi lập 2 hệ thống sổ kế toán tài chính (Điều 16)",
        "type": "modified",
        "oldRule": "[Căn cứ: NĐ 105/2013] Phạt tiền từ 20.000.000 đến 30.000.000 đồng.",
        "newRule": "[Căn cứ: Khoản 4 Điều 16 NĐ 41/2018] Phạt tiền từ 40.000.000 đến 50.000.000 đồng đối với hành vi lập hai hệ thống sổ kế toán tài chính trở lên hoặc để ngoài sổ kế toán tài sản, nợ phải trả; nếu nghiêm trọng chuyển hồ sơ khởi tố hình sự.",
        "impactNote": "Kiểu Việt thực thi nguyên tắc 'Một sổ sách kế toán duy nhất', minh bạch phục vụ kiểm toán nhà nước, ngân hàng và cơ quan thuế."
      },
      {
        "topic": "Xử phạt hành vi không bổ nhiệm Kế toán trưởng đúng quy định (Điều 17)",
        "type": "modified",
        "oldRule": "[Căn cứ: NĐ 105/2013] Phạt từ 5.000.000 đến 10.000.000 đồng.",
        "newRule": "[Căn cứ: Điều 17 NĐ 41/2018] Phạt tiền từ 10.000.000 đến 20.000.000 đồng đối với hành vi bố trí người làm kế toán trưởng không đủ tiêu chuẩn hoặc không bổ nhiệm kế toán trưởng quá 12 tháng kể từ ngày thành lập.",
        "impactNote": "Bảo đảm Kiểu Việt luôn có Quyết định bổ nhiệm Kế toán trưởng hợp pháp, đầy đủ chứng chỉ bồi dưỡng kế toán trưởng theo luật."
      },
      {
        "topic": "Khung phạt hành vi làm mất, hỏng tài liệu kế toán trong thời hạn lưu trữ (Điều 15)",
        "type": "modified",
        "oldRule": "[Căn cứ: NĐ 105/2013] Phạt từ 5.000.000 đến 10.000.000 đồng.",
        "newRule": "[Căn cứ: Điều 15 NĐ 41/2018] Phạt cảnh cáo nếu làm mất tài liệu kế toán nhưng khôi phục lại được; phạt tiền từ 10.000.000 đến 20.000.000 đồng nếu làm mất, tiêu hủy tài liệu kế toán trước thời hạn lưu trữ quy định.",
        "impactNote": "Hệ thống lưu trữ số hóa đám mây của Kiểu Việt bảo vệ an toàn 100% tài liệu kế toán, triệt tiêu nguy cơ thất lạc chứng từ gốc."
      },
      {
        "topic": "Xử phạt hành vi ký chứng từ kế toán khi chưa ghi đủ nội dung (Điều 8)",
        "type": "modified",
        "oldRule": "[Căn cứ: NĐ 105/2013] Phạt từ 1.000.000 đến 3.000.000 đồng.",
        "newRule": "[Căn cứ: Điều 8 NĐ 41/2018] Phạt tiền từ 3.000.000 đến 5.000.000 đồng đối với hành vi ký chứng từ kế toán khi chưa ghi đủ các nội dung theo quy định (ký khống trên phiếu chi, phiếu xuất kho).",
        "impactNote": "Nghiêm cấm kỹ sư công trường Kiểu Việt ký trước vào biên bản nghiệm thu hoặc phiếu xuất vật tư khi chưa có số liệu cân đo thực tế."
      },
      {
        "topic": "Khung phạt hành vi nộp chậm Báo cáo tài chính năm (Điều 12)",
        "type": "modified",
        "oldRule": "[Căn cứ: NĐ 105/2013] Nộp chậm BCTC phạt từ 5.000.000 đến 10.000.000 đồng.",
        "newRule": "[Căn cứ: Điều 12 NĐ 41/2018] Phạt cảnh cáo nếu chậm nộp dưới 10 ngày có tình tiết giảm nhẹ; phạt từ 5 - 10 triệu nếu chậm từ 1 đến 3 tháng; phạt từ 10 - 20 triệu nếu chậm trên 3 tháng; phạt từ 40 - 50 triệu nếu không nộp BCTC.",
        "impactNote": "Phòng Kế toán Kiểu Việt hoàn thành và nộp BCTC trước ngày 25/03 hàng năm, tuyệt đối không để xảy ra vi phạm chậm nộp."
      },
      {
        "topic": "Xử phạt hành vi không kiểm kê tài sản vào cuối kỳ kế toán năm (Điều 14)",
        "type": "modified",
        "oldRule": "[Căn cứ: NĐ 105/2013] Phạt từ 3.000.000 đến 5.000.000 đồng.",
        "newRule": "[Căn cứ: Điều 14 NĐ 41/2018] Phạt tiền từ 5.000.000 đến 10.000.000 đồng đối với hành vi không lập biên bản kiểm kê tài sản vào cuối kỳ kế toán năm hoặc không phản ánh kết quả kiểm kê vào sổ kế toán.",
        "impactNote": "Kiểu Việt ban hành Quyết định thành lập Hội đồng kiểm kê hàng năm, lập biên bản kiểm kê mỏ đá và máy thi công đầy đủ."
      },
      {
        "topic": "Khung phạt vi phạm về công khai Báo cáo tài chính (Điều 13)",
        "type": "modified",
        "oldRule": "[Căn cứ: NĐ 105/2013] Phạt từ 5.000.000 đến 10.000.000 đồng.",
        "newRule": "[Căn cứ: Điều 13 NĐ 41/2018] Phạt tiền từ 10.000.000 đến 20.000.000 đồng đối với hành vi công khai BCTC chậm quá thời hạn từ 1 đến 3 tháng; phạt từ 20 - 30 triệu nếu không công khai BCTC theo quy định.",
        "impactNote": "Kiểu Việt đăng tải BCTC kiểm toán công khai trên website nội bộ đúng hạn 120 ngày sau kết thúc năm tài chính."
      },
      {
        "topic": "Thẩm quyền xử phạt của cơ quan Thanh tra Tài chính và UBND các cấp (Điều 29)",
        "type": "modified",
        "oldRule": "[Căn cứ: NĐ 105/2013] Phân cấp thẩm quyền xử phạt chưa rõ.",
        "newRule": "[Căn cứ: Điều 29 NĐ 41/2018] Chánh Thanh tra Bộ Tài chính, Chánh Thanh tra Sở Tài chính, Chủ tịch UBND cấp tỉnh có thẩm quyền xử phạt tiền đến mức tối đa 100.000.000 đồng đối với tổ chức vi phạm kế toán.",
        "impactNote": "Kế toán trưởng Kiểu Việt nắm chắc các quy chuẩn pháp lý để làm việc minh bạch với đoàn Thanh tra Sở Tài chính."
      },
      {
        "topic": "Hiệu lực thi hành Nghị định 41/2018/NĐ-CP",
        "type": "added",
        "oldRule": "[Căn cứ: NĐ 105/2013] Nghị định cũ.",
        "newRule": "[Căn cứ: Điều 33 NĐ 41/2018] Nghị định có hiệu lực từ ngày 01/05/2018, bãi bỏ hoàn toàn Nghị định 105/2013 về xử phạt kế toán, kiểm toán.",
        "impactNote": "Toàn bộ quy trình kiểm soát nội bộ Kiểu Việt được thiết lập để ngăn chặn từ sớm mọi hành vi vi phạm theo NĐ 41."
      }
    ]
  },
  "nd-132-2020": {
    "decreeId": "nd-132-2020",
    "title": "Nghị định 132/2020/NĐ-CP",
    "category": "Quản lý thuế Giao dịch liên kết",
    "compareWith": "Nghị định 20/2017/NĐ-CP và Nghị định 68/2020/NĐ-CP",
    "summary": "Nghị định 132/2020/NĐ-CP quy định chặt chẽ về quản lý thuế doanh nghiệp có giao dịch liên kết: Nâng trần khống chế chi phí lãi vay lên 30% EBITDA, cho phép chuyển phần lãi vay vượt trần sang 5 năm tiếp theo và hồ sơ chuyển giá 3 cấp.",
    "items": [
      {
        "topic": "Nâng mức khống chế trần chi phí lãi vay từ 20% lên 30% EBITDA (Điều 16 Khoản 3)",
        "type": "modified",
        "oldRule": "[Căn cứ: NĐ 20/2017] Tổng chi phí lãi vay thuần phát sinh trong kỳ được trừ khi xác định thu nhập chịu thuế TNDN không vượt quá 20% tổng lợi nhuận thuần từ hoạt động kinh doanh cộng chi phí lãi vay thuần cộng chi phí khấu hao (EBITDA).",
        "newRule": "[Căn cứ: Điều 16 Khoản 3 NĐ 132/2020] Nâng mức trần khống chế chi phí lãi vay lên 30% EBITDA; chi phí lãi vay thuần không được trừ trong kỳ được chuyển sang các kỳ tính thuế tiếp theo trong thời gian tối đa không quá 05 năm.",
        "impactNote": "Mở rộng hạn mức chi phí lãi vay được trừ thêm 10% EBITDA (hàng tỷ đồng mỗi năm), Kiểu Việt tự tin vay vốn tín dụng đầu tư thiết bị máy móc cơ giới và dây chuyền mỏ khoáng sản."
      },
      {
        "topic": "Quy định mới về các bên có quan hệ liên kết qua các khoản vay (Điều 5 Khoản 2 Điểm d)",
        "type": "modified",
        "oldRule": "[Căn cứ: NĐ 20/2017] Một doanh nghiệp bảo lãnh hoặc cho một doanh nghiệp khác vay vốn dưới bất kỳ hình thức nào với điều kiện khoản vốn vay ít nhất bằng 25% vốn góp của chủ sở hữu và chiếm trên 50% tổng giá trị các khoản nợ trung và dài hạn.",
        "newRule": "[Căn cứ: Điều 5 Khoản 2 Điểm d NĐ 132/2020] Làm rõ: Quan hệ liên kết qua khoản vay áp dụng khi một bên cho vay hoặc bảo lãnh chiếm ít nhất 25% vốn góp của chủ sở hữu và chiếm trên 50% tổng nợ trung và dài hạn của bên đi vay; bao gồm cả các khoản vay ngân hàng nếu ngân hàng can thiệp vào điều hành.",
        "impactNote": "Kiểu Việt kiểm soát chặt chẽ tỷ lệ vốn vay tại từng ngân hàng (VietinBank, MB) để xác định chính xác có thuộc đối tượng lập hồ sơ giao dịch liên kết hay không."
      },
      {
        "topic": "Các trường hợp được miễn lập Hồ sơ xác định giá giao dịch liên kết (Điều 19)",
        "type": "modified",
        "oldRule": "[Căn cứ: NĐ 20/2017] Ngưỡng miễn lập hồ sơ giao dịch liên kết quy định chưa đầy đủ.",
        "newRule": "[Căn cứ: Điều 19 NĐ 132/2020] Miễn lập hồ sơ khi: Doanh thu dưới 50 tỷ đồng và tổng giá trị giao dịch liên kết dưới 30 tỷ đồng; hoặc doanh nghiệp đã ký kết Thỏa thuận trước về phương pháp xác định giá (APA); hoặc chỉ phát sinh giao dịch liên kết với các bên nộp thuế cùng mức thuế suất và không bên nào được hưởng ưu đãi thuế.",
        "impactNote": "Kiểu Việt tận dụng điều kiện miễn trừ khi các giao dịch mua bán đá, cát nội bộ giữa công ty mẹ và công ty con đều áp dụng thuế suất phổ thông 20%."
      },
      {
        "topic": "Hồ sơ quốc gia (Local File) và Hồ sơ toàn cầu (Master File) (Điều 18)",
        "type": "added",
        "oldRule": "[Căn cứ: NĐ 20/2017] Quy định chung về hồ sơ xác định giá.",
        "newRule": "[Căn cứ: Điều 18 NĐ 132/2020] Bắt buộc lập bộ Hồ sơ xác định giá giao dịch liên kết 3 cấp gồm: Hồ sơ quốc gia (Local File), Hồ sơ tập đoàn toàn cầu (Master File) và Báo cáo lợi nhuận liên quốc gia (CbCR) nộp cùng hạn quyết toán thuế TNDN.",
        "impactNote": "Kiểu Việt lưu trữ bộ hồ sơ Local File giải trình phương pháp so sánh giá bán đá cát cho các bên liên kết đúng chuẩn BEPS của OECD."
      },
      {
        "topic": "Phương pháp so sánh giá giao dịch độc lập (CUP) áp dụng cho khoáng sản (Điều 13)",
        "type": "modified",
        "oldRule": "[Căn cứ: NĐ 20/2017] Sử dụng phương pháp tỷ suất lợi nhuận gộp.",
        "newRule": "[Căn cứ: Điều 13 NĐ 132/2020] Ưu tiên áp dụng phương pháp So sánh giá giao dịch độc lập (CUP) đối với hàng hóa niêm yết, vật liệu xây dựng cát đá có bảng giá thị trường của UBND tỉnh công bố.",
        "impactNote": "Kiểu Việt áp dụng bảng giá tính thuế tài nguyên của UBND tỉnh Gia Lai làm cơ sở đối chiếu giá giao dịch độc lập hợp pháp."
      },
      {
        "topic": "Chuyển chi phí lãi vay không được trừ sang các năm sau tối đa 5 năm (Điều 16)",
        "type": "added",
        "oldRule": "[Căn cứ: NĐ 20/2017] Phần chi phí lãi vay vượt trần 20% bị loại vĩnh viễn, không được chuyển sang năm sau.",
        "newRule": "[Căn cứ: Điều 16 Khoản 3 Điểm b NĐ 132/2020] Phần chi phí lãi vay vượt mức 30% EBITDA được chuyển sang kỳ tính thuế tiếp theo khi xác định tổng chi phí lãi vay được trừ của năm đó trong thời hạn không quá 05 năm liên tục.",
        "impactNote": "Khoản lãi vay đầu tư trạm nghiền đá bị loại năm 2024 được Kiểu Việt chuyển sang khấu trừ vào lợi nhuận các năm 2025 - 2026 khi EBITDA tăng trưởng."
      },
      {
        "topic": "Cơ sở dữ liệu so sánh được chấp nhận khi lập hồ sơ xác định giá (Điều 17)",
        "type": "modified",
        "oldRule": "[Căn cứ: NĐ 20/2017] Chỉ chấp nhận dữ liệu kiểm toán nội địa.",
        "newRule": "[Căn cứ: Điều 17 NĐ 132/2020] Cho phép sử dụng cơ sở dữ liệu thương mại quốc tế (Orbis, Bloomberg, Amadeus) và dữ liệu tài chính của các công ty niêm yết cùng ngành xây dựng hạ tầng tại Việt Nam.",
        "impactNote": "Kiểu Việt lựa chọn biên lợi nhuận của các doanh nghiệp xây lắp niêm yết (Cienco, Vinaconex) làm biên độ thị trường chuẩn (Arm's length range)."
      },
      {
        "topic": "Kê khai các Phụ lục thông tin về quan hệ liên kết (Mẫu 01, 02, 03, 04)",
        "type": "modified",
        "oldRule": "[Căn cứ: NĐ 20/2017] Kê khai phụ lục chung.",
        "newRule": "[Căn cứ: Phụ lục ban hành kèm NĐ 132/2020] Bắt buộc nộp đồng thời 4 phụ lục cùng Tờ khai quyết toán thuế TNDN 03/TNDN: Phụ lục 01 (Thông tin quan hệ liên kết), Phụ lục 02 (Danh mục hồ sơ Local File), Phụ lục 03 (Danh mục Master File), Phụ lục 04 (Báo cáo CbCR).",
        "impactNote": "Kế toán Kiểu Việt tích dấu đầy đủ vào Phụ lục 01 xác nhận các giao dịch vay vốn nội bộ đúng quy định, tránh bị cơ quan thuế xử phạt ấn định giá."
      },
      {
        "topic": "Ấn định thuế đối với doanh nghiệp không tuân thủ quy định về giao dịch liên kết (Điều 20)",
        "type": "modified",
        "oldRule": "[Căn cứ: NĐ 20/2017] Ấn định mức thuế chung chung.",
        "newRule": "[Căn cứ: Điều 20 NĐ 132/2020] Cơ quan thuế có quyền ấn định tỷ suất lợi nhuận gộp hoặc lợi nhuận thuần dựa trên cơ sở dữ liệu của ngành thuế nếu người nộp thuế không nộp các phụ lục giao dịch liên kết hoặc số liệu không trung thực.",
        "impactNote": "Kiểu Việt chủ động minh bạch số liệu giao dịch liên kết, bảo đảm tỷ suất lợi nhuận công ty mẹ luôn nằm trong khoảng tứ phân vị an toàn."
      },
      {
        "topic": "Xử lý hồi tố chi phí lãi vay cho các năm 2017 và 2018 (Điều 22)",
        "type": "added",
        "oldRule": "[Căn cứ: NĐ 20/2017] Khống chế 20% không được hồi tố.",
        "newRule": "[Căn cứ: Điều 22 NĐ 132/2020] Cho phép người nộp thuế được khai bổ sung hồ sơ quyết toán thuế TNDN năm 2017, 2018 để áp dụng mức trần lãi vay 30% và bù trừ số thuế TNDN nộp thừa vào các năm tiếp theo.",
        "impactNote": "Kiểu Việt đã thu hồi hàng tỷ đồng tiền thuế nộp thừa từ việc hồi tố chi phí lãi vay giai đoạn đầu tư máy móc trước đây."
      },
      {
        "topic": "Trách nhiệm giải trình hồ sơ giao dịch liên kết trong thời hạn 30 ngày (Điều 20)",
        "type": "modified",
        "oldRule": "[Căn cứ: NĐ 20/2017] Thời hạn cung cấp hồ sơ là 15 ngày làm việc.",
        "newRule": "[Căn cứ: Điều 20 NĐ 132/2020] Người nộp thuế có trách nhiệm cung cấp Hồ sơ xác định giá giao dịch liên kết trong thời hạn 30 ngày làm việc kể từ ngày nhận được văn bản yêu cầu của cơ quan thuế trong quá trình thanh tra, kiểm tra.",
        "impactNote": "Kiểu Việt luôn chuẩn bị sẵn sàng bộ hồ sơ Local File để cung cấp ngay trong tuần đầu tiên khi có đoàn thanh tra thuế."
      },
      {
        "topic": "Hiệu lực thi hành và phạm vi áp dụng Nghị định 132/2020/NĐ-CP",
        "type": "added",
        "oldRule": "[Căn cứ: NĐ 20/2017, NĐ 68/2020] Các nghị định cũ.",
        "newRule": "[Căn cứ: Điều 22 NĐ 132/2020] Nghị định áp dụng từ kỳ tính thuế TNDN năm 2020, bãi bỏ hoàn toàn Nghị định 20/2017 và Nghị định 68/2020.",
        "impactNote": "Kiểu Việt áp dụng nhất quán trần lãi vay 30% EBITDA trong toàn bộ chiến lược tài chính và huy động vốn ngân hàng."
      }
    ]
  },
  "nd-174-2016": {
    "decreeId": "nd-174-2016",
    "title": "Nghị định 174/2016/NĐ-CP",
    "category": "Hướng dẫn thi hành Luật Kế toán",
    "compareWith": "Nghị định 128/2004/NĐ-CP",
    "summary": "Nghị định 174/2016/NĐ-CP quy định chi tiết thi hành một số điều của Luật Kế toán 2015: Hướng dẫn quản trị tài chính, tổ chức bộ máy kế toán, tiêu chuẩn Kế toán trưởng và bảo quản chứng từ điện tử.",
    "items": [
      {
        "topic": "Quy định chi tiết các trường hợp không được làm kế toán và kế toán trưởng (Điều 19)",
        "type": "modified",
        "oldRule": "[Căn cứ: NĐ 128/2004] Quy định cấm cha mẹ, vợ chồng làm kế toán trưởng chung cơ quan nhà nước.",
        "newRule": "[Căn cứ: Điều 19 NĐ 174/2016] Mở rộng sang doanh nghiệp tư nhân, công ty TNHH/CP: Bố đẻ, mẹ đẻ, vợ, chồng, con đẻ, anh chị em ruột của người đại diện pháp luật, thành viên HĐQT không được làm Kế toán trưởng tại cùng đơn vị.",
        "impactNote": "Kiểu Việt bổ nhiệm Kế toán trưởng hoàn toàn độc lập, có chứng chỉ hành nghề và không có quan hệ thân tộc với HĐQT để bảo đảm tính khách quan."
      },
      {
        "topic": "Tiêu chuẩn và điều kiện thành lập Phòng Kế toán doanh nghiệp (Điều 20)",
        "type": "modified",
        "oldRule": "[Căn cứ: NĐ 128/2004] Doanh nghiệp tự do bố trí người phụ trách kế toán.",
        "newRule": "[Căn cứ: Điều 20 NĐ 174/2016] Bắt buộc doanh nghiệp phải bố trí Kế toán trưởng; trường hợp chưa có người đủ tiêu chuẩn thì chỉ được cử người phụ trách kế toán trong thời hạn tối đa không quá 12 tháng, sau đó phải bổ nhiệm Kế toán trưởng.",
        "impactNote": "Kiểu Việt duy trì vị trí Kế toán trưởng chuyên trách liên tục, đáp ứng đầy đủ điều kiện pháp lý ký duyệt Báo cáo tài chính."
      },
      {
        "topic": "Quy định về bảo quản, lưu trữ tài liệu kế toán trên phương tiện điện tử (Điều 10)",
        "type": "modified",
        "oldRule": "[Căn cứ: NĐ 128/2004] Bắt buộc lưu trữ bản giấy tại kho lưu trữ của đơn vị.",
        "newRule": "[Căn cứ: Điều 10 NĐ 174/2016] Tài liệu kế toán lưu trữ trên phương tiện điện tử phải bảo đảm an toàn, bảo mật và sao lưu định kỳ tối thiểu trên 2 thiết bị lưu trữ độc lập hoặc trên dịch vụ lưu trữ đám mây đạt chuẩn.",
        "impactNote": "Kiểu Việt sao lưu dữ liệu kế toán tự động hàng ngày lên hệ sinh thái đám mây bảo mật cao, phòng chống mất mát dữ liệu."
      },
      {
        "topic": "Thời điểm tiêu hủy tài liệu kế toán hết thời hạn lưu trữ (Điều 15 & 16)",
        "type": "modified",
        "oldRule": "[Căn cứ: NĐ 128/2004] Thủ tục tiêu hủy chứng từ giấy đơn giản.",
        "newRule": "[Căn cứ: Điều 15-16 NĐ 174/2016] Tiêu hủy tài liệu kế toán phải thành lập Hội đồng tiêu hủy gồm Tổng Giám đốc, Kế toán trưởng, đại diện lưu trữ; lập Bảng kê danh mục tài liệu tiêu hủy và Biên bản tiêu hủy lưu trữ vĩnh viễn.",
        "impactNote": "Kiểu Việt tuân thủ nghiêm ngặt quy trình tiêu hủy chứng từ kế toán hết hạn 10 năm, lưu giữ biên bản đầy đủ tránh rủi ro kiểm tra."
      },
      {
        "topic": "Đăng ký và quản lý hành nghề dịch vụ kế toán tại Việt Nam (Điều 25-28)",
        "type": "added",
        "oldRule": "[Căn cứ: NĐ 128/2004] Chưa có quy định cấp Giấy chứng nhận đủ điều kiện kinh doanh dịch vụ kế toán.",
        "newRule": "[Căn cứ: Điều 25-28 NĐ 174/2016] Doanh nghiệp kinh doanh dịch vụ kế toán phải có tối thiểu 2 kế toán viên có chứng chỉ hành nghề kế toán do Bộ Tài chính cấp và người đại diện pháp luật phải là kế toán viên hành nghề.",
        "impactNote": "Kiểu Việt chỉ ký hợp đồng kiểm toán và tư vấn thuế với các công ty kiểm toán nằm trong danh sách đủ điều kiện của Bộ Tài chính."
      },
      {
        "topic": "Xử lý tài liệu kế toán trong trường hợp doanh nghiệp bị chia, tách, sáp nhập (Điều 13)",
        "type": "modified",
        "oldRule": "[Căn cứ: NĐ 128/2004] Bàn giao tài liệu kế toán chung chung không có biên bản chi tiết.",
        "newRule": "[Căn cứ: Điều 13 NĐ 174/2016] Bắt buộc lập Báo cáo tài chính tại thời điểm chia tách, bàn giao nguyên trạng toàn bộ chứng từ, sổ sách kế toán có Biên bản bàn giao chi tiết giữa các đơn vị thừa kế quyền và nghĩa vụ.",
        "impactNote": "Bảo đảm tính liên tục và pháp lý của số liệu tài chính khi Kiểu Việt thành lập thêm công ty thành viên mỏ khoáng sản."
      },
      {
        "topic": "Quy định về đơn vị tiền tệ trong kế toán và chuyển đổi BCTC sang VNĐ (Điều 4)",
        "type": "modified",
        "oldRule": "[Căn cứ: NĐ 128/2004] Bắt buộc ghi sổ kế toán bằng đồng Việt Nam (VNĐ).",
        "newRule": "[Căn cứ: Điều 4 NĐ 174/2016] Doanh nghiệp có thu chi chủ yếu bằng ngoại tệ được chọn ngoại tệ làm đơn vị tiền tệ ghi sổ kế toán; khi lập BCTC công khai tại Việt Nam bắt buộc phải chuyển đổi sang VNĐ theo tỷ giá quy định.",
        "impactNote": "Kiểu Việt chọn đơn vị tiền tệ ghi sổ là VNĐ, phù hợp tuyệt đối với hoạt động thi công hạ tầng giao thông trong nước."
      },
      {
        "topic": "Chữ ký trên chứng từ kế toán và ủy quyền ký chứng từ (Điều 8)",
        "type": "modified",
        "oldRule": "[Căn cứ: NĐ 128/2004] Cấm ký chứng từ bằng mực đỏ, mực dễ phai.",
        "newRule": "[Căn cứ: Điều 8 NĐ 174/2016] Khẳng định: Chữ ký trên chứng từ kế toán phải ký bằng bút mực không phai; không ký bằng mực đỏ hoặc đóng dấu chữ ký khắc sẵn; chữ ký điện tử trên chứng từ kế toán có giá trị tương đương chữ ký tay.",
        "impactNote": "Kiểu Việt cấm tuyệt đối việc sử dụng con dấu chữ ký khắc sẵn trên phiếu chi tiền mặt, phiếu xuất kho, bảo đảm an toàn pháp lý chứng từ."
      },
      {
        "topic": "Trách nhiệm của cơ quan nhà nước trong việc thanh tra, kiểm tra kế toán (Điều 34)",
        "type": "modified",
        "oldRule": "[Căn cứ: NĐ 128/2004] Cơ quan thuế và tài chính có thể kiểm tra kế toán bất cứ lúc nào.",
        "newRule": "[Căn cứ: Điều 34 NĐ 174/2016] Kiểm tra kế toán chỉ được thực hiện khi có quyết định bằng văn bản của cơ quan có thẩm quyền; không kiểm tra quá 1 lần/năm đối với một đơn vị trừ khi có dấu hiệu vi phạm rõ ràng.",
        "impactNote": "Bảo vệ hoạt động sản xuất kinh doanh của Kiểu Việt không bị xáo trộn bởi các đợt thanh kiểm tra chồng chéo."
      },
      {
        "topic": "Quy định về kiểm kê tài sản cuối kỳ kế toán năm (Điều 11)",
        "type": "modified",
        "oldRule": "[Căn cứ: NĐ 128/2004] Kiểm kê tài sản mang tính khuyến nghị.",
        "newRule": "[Căn cứ: Điều 11 NĐ 174/2016] Bắt buộc doanh nghiệp phải kiểm kê tài sản tại thời điểm kết thúc kỳ kế toán năm trước khi lập BCTC: Kiểm kê quỹ tiền mặt, số dư tiền gửi ngân hàng, hàng tồn kho cát đá và máy móc thi công.",
        "impactNote": "Hội đồng kiểm kê Kiểu Việt thực hiện kiểm kê thực tế ngày 31/12 hàng năm, lập biên bản đối soát số liệu sổ sách và thực tế."
      },
      {
        "topic": "Quy định công khai Báo cáo tài chính đối với doanh nghiệp xây dựng (Điều 12)",
        "type": "modified",
        "oldRule": "[Căn cứ: NĐ 128/2004] Công khai BCTC chỉ áp dụng cho doanh nghiệp nhà nước.",
        "newRule": "[Căn cứ: Điều 12 NĐ 174/2016] Doanh nghiệp huy động vốn trái phiếu hoặc tham gia đấu thầu dự án đầu tư công bắt buộc phải công khai BCTC đã được kiểm toán trên trang web công ty trong vòng 120 ngày.",
        "impactNote": "Kiểu Việt công khai BCTC kiểm toán minh bạch, khẳng định năng lực tài chính hàng đầu khi tham gia đấu thầu cao tốc."
      },
      {
        "topic": "Hiệu lực thi hành Nghị định 174/2016/NĐ-CP",
        "type": "added",
        "oldRule": "[Căn cứ: NĐ 128/2004, NĐ 129/2004] Các nghị định cũ.",
        "newRule": "[Căn cứ: Điều 38 NĐ 174/2016] Nghị định có hiệu lực từ ngày 01/01/2017, thay thế hoàn toàn Nghị định 128/2004 và Nghị định 129/2004 hướng dẫn Luật Kế toán.",
        "impactNote": "Kiểu Việt vận hành toàn bộ bộ máy kế toán theo chuẩn mực Nghị định 174 trong suốt 9 năm qua với tính tuân thủ tuyệt đối."
      }
    ]
  }
};
