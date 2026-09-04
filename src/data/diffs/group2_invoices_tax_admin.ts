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
        "topic": "Thời điểm bắt buộc chuyển đổi 100% sang Hóa đơn điện tử (Bãi bỏ HĐ giấy)",
        "type": "modified",
        "oldRule": "[Căn cứ: NĐ 51/2010 & NĐ 04/2014] Doanh nghiệp được tự do in hóa đơn giấy đặt in hoặc tự in, sử dụng song song hóa đơn giấy và hóa đơn điện tử tự phát.",
        "newRule": "[Căn cứ: Điều 11 & Điều 59 NĐ 123/2020] Bắt buộc 100% doanh nghiệp, tổ chức kinh tế phải sử dụng Hóa đơn điện tử từ ngày 01/07/2022. Hóa đơn giấy in trước ngày này bị vô hiệu lực hoàn toàn.",
        "impactNote": "Kiểu Việt hủy toàn bộ các cuốn hóa đơn GTGT giấy còn tồn, chuyển sang giải pháp Hóa đơn điện tử Viettel/VNPT tích hợp ký số HSM."
      },
      {
        "topic": "Quy định khắt khe về Thời điểm lập hóa đơn đối với hoạt động xây dựng, lắp đặt",
        "type": "modified",
        "oldRule": "[Căn cứ: Điều 8 Thông tư 39/2014] Thường linh hoạt chờ đến khi quyết toán toàn bộ công trình hoặc khi Chủ đầu tư thanh toán tiền mới xuất hóa đơn tài chính.",
        "newRule": "[Căn cứ: Khoản 4 Điều 9 NĐ 123/2020] Thời điểm lập hóa đơn đối với xây dựng, lắp đặt là thời điểm nghiệm thu, bàn giao công trình, hạng mục công trình, khối lượng xây dựng, lắp đặt hoàn thành, không phân biệt đã thu được tiền hay chưa thu được tiền.",
        "impactNote": "Kiểu Việt phải xuất hóa đơn GTGT ngay khi ký Biên bản nghiệm thu khối lượng A-B (Mẫu 03a); nếu xuất trễ sẽ bị phạt xuất hóa đơn sai thời điểm từ 4.000.000 đến 8.000.000 đồng/hóa đơn."
      },
      {
        "topic": "Phân định Hóa đơn điện tử có mã và không có mã của cơ quan thuế",
        "type": "added",
        "oldRule": "[Căn cứ: NĐ 51/2010] Hóa đơn điện tử do doanh nghiệp tự phát hành và chỉ gửi báo cáo tình hình sử dụng hóa đơn Mẫu BC26/AC định kỳ hàng quý.",
        "newRule": "[Căn cứ: Điều 13-14 NĐ 123/2020] Phân loại rõ: 1) HĐĐT có mã của cơ quan thuế (phải truyền dữ liệu cấp mã trước khi gửi cho người mua); 2) HĐĐT không có mã (doanh nghiệp rủi ro thấp tự truyền dữ liệu sang cơ quan thuế). Bãi bỏ hoàn toàn báo cáo BC26/AC.",
        "impactNote": "Kiểu Việt thuộc nhóm doanh nghiệp lớn được sử dụng Hóa đơn điện tử không có mã, truyền thẳng dữ liệu đến Cổng Thuế theo Bảng tổng hợp dữ liệu HĐĐT."
      },
      {
        "topic": "Quy trình xử lý hóa đơn điện tử có sai sót (Mẫu số 04/SS-HĐĐT)",
        "type": "added",
        "oldRule": "[Căn cứ: Thông tư 39/2014] Lập Biên bản thu hồi hóa đơn giấy bị sai và xuất hóa đơn mới thay thế.",
        "newRule": "[Căn cứ: Điều 19 NĐ 123/2020] Đối với hóa đơn sai sót đã gửi người mua: Lập hóa đơn điều chỉnh hoặc hóa đơn thay thế; người bán phải lập và gửi Thông báo hóa đơn điện tử có sai sót theo Mẫu 04/SS-HĐĐT đến cơ quan thuế chậm nhất là ngày cuối cùng của kỳ kê khai thuế phát sinh.",
        "impactNote": "Kế toán Kiểu Việt luôn gửi Mẫu 04/SS-HĐĐT đúng hạn khi điều chỉnh đơn giá vật tư bê tông, sắt thép để tránh bị xử phạt hành chính."
      },
      {
        "topic": "Thời điểm ký số và thời điểm lập hóa đơn điện tử",
        "type": "added",
        "oldRule": "[Căn cứ: NĐ 51/2010] Không có sự phân biệt giữa ngày ký và ngày lập trên hóa đơn giấy.",
        "newRule": "[Căn cứ: Khoản 9 Điều 10 NĐ 123/2020] Phân định rõ Ngày lập hóa đơn và Ngày ký số. Trường hợp ngày ký số khác ngày lập hóa đơn: Cơ quan thuế căn cứ vào Ngày lập hóa đơn để xác định nghĩa vụ kê khai thuế GTGT của người bán và người mua.",
        "impactNote": "Kiểu Việt bảo đảm lập tờ khai thuế GTGT theo Ngày lập ghi trên hóa đơn, không bị xử phạt chậm nộp do nhầm lẫn với ngày ký số HSM."
      },
      {
        "topic": "Bắt buộc chuyển đổi Chứng từ khấu trừ thuế TNCN sang định dạng điện tử",
        "type": "added",
        "oldRule": "[Căn cứ: Thông tư 37/2010] Doanh nghiệp mua quyển chứng từ khấu trừ thuế TNCN giấy tự in hoặc mua trực tiếp tại Chi cục Thuế.",
        "newRule": "[Căn cứ: Điều 33 NĐ 123/2020] Bắt buộc các tổ chức chi trả thu nhập phải chuyển sang sử dụng Chứng từ khấu trừ thuế TNCN điện tử, bãi bỏ hoàn toàn việc phát hành chứng từ giấy tự in.",
        "impactNote": "Kiểu Việt cấp chứng từ khấu trừ thuế TNCN điện tử có mã định danh số cho các chuyên gia tư vấn giám sát và thợ thời vụ để tự quyết toán thuế."
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
        "topic": "Quy chuẩn mới về Ký hiệu hóa đơn điện tử (Mẫu số 1C22TAA, 2C23TBB...)",
        "type": "modified",
        "oldRule": "[Căn cứ: Điều 6 TT 39/2014] Ký hiệu hóa đơn cũ gồm 7 ký tự (Ví dụ: AA/13P, AB/14E...)",
        "newRule": "[Căn cứ: Điều 4 TT 78/2021] Ký hiệu mới chuẩn hóa 8 ký tự: Ký tự 1 là loại hóa đơn (1-GTGT, 2-Bán hàng); Ký tự 2 là mã số thuế (C-Có mã, K-Không mã); Ký tự 3-4 là hai chữ số năm phát hành (24, 25, 26); Ký tự 5 là loại HĐ (T-Điện tử, M-Máy tính tiền); Ký tự 6-7 là chữ cái do DN tự chọn; Ký tự 8 là ký hiệu kiểm toán.",
        "impactNote": "Phần mềm kế toán Kiểu Việt cấu hình chuẩn xác ký hiệu hóa đơn 1K26TKV cho toàn bộ hóa đơn thi công xây lắp xuất trong năm 2026."
      },
      {
        "topic": "Hướng dẫn xử lý hóa đơn điện tử đã xuất có sai sót (Điều 7 Thông tư 78)",
        "type": "modified",
        "oldRule": "[Căn cứ: Điều 20 TT 39/2014] Khi sai sót hóa đơn giấy phải lập Biên bản thu hồi hóa đơn và kẹp hóa đơn sai vào cuốn lưu.",
        "newRule": "[Căn cứ: Điều 7 TT 78/2021] 1) Nếu chỉ sai tên, địa chỉ người mua: Gửi Mẫu 04/SS thông báo cho thuế, không phải lập lại HĐ; 2) Nếu sai mã số thuế, số tiền, thuế suất: Được chọn lập Hóa đơn điều chỉnh (ghi dấu dương/âm) HOẶC lập Hóa đơn thay thế có dòng chữ 'Thay thế cho hóa đơn Mẫu số... ký hiệu... ngày...'.",
        "impactNote": "Kiểu Việt thống nhất lập Hóa đơn thay thế khi điều chỉnh khối lượng nghiệm thu hợp đồng thi công để tránh phức tạp bù trừ số âm."
      },
      {
        "topic": "Ủy nhiệm lập hóa đơn điện tử cho bên thứ ba",
        "type": "added",
        "oldRule": "[Căn cứ: TT 39/2014] Thủ tục ủy nhiệm in hóa đơn phải nộp hồ sơ bằng văn bản xin chấp thuận của Cục Thuế tỉnh.",
        "newRule": "[Căn cứ: Điều 3 TT 78/2021] Người bán được ủy nhiệm cho bên thứ ba lập hóa đơn điện tử. Việc ủy nhiệm phải được lập thành văn bản (hợp đồng) và phải thông báo cho cơ quan thuế theo Mẫu 01ĐKTĐ/HĐĐT trước khi thực hiện.",
        "impactNote": "Tạo cơ chế linh hoạt cho Kiểu Việt ủy quyền cho các Ban Điều hành dự án công trường xuất hóa đơn bán vật liệu phụ cho nhà thầu phụ."
      },
      {
        "topic": "Quy chế sử dụng hóa đơn điện tử khởi tạo từ máy tính tiền có kết nối dữ liệu thuế",
        "type": "added",
        "oldRule": "[Căn cứ: TT 32/2011] Chưa có quy định riêng biệt cho hóa đơn điện tử kết nối máy tính tiền POS.",
        "newRule": "[Căn cứ: Điều 8 TT 78/2021] Cho phép trung tâm thương mại, nhà hàng, khách sạn, trạm cung ứng xăng dầu xuất hóa đơn điện tử từ máy tính tiền có mã của cơ quan thuế theo thời gian thực (Real-time).",
        "impactNote": "Chứng từ hóa đơn tiền xăng dầu cho xe máy thi công, chi phí tiếp khách của Kiểu Việt xuất từ máy tính tiền hợp lệ 100% để tính thuế TNDN."
      },
      {
        "topic": "Quy định tiêu chí lựa chọn Tổ chức cung cấp dịch vụ hóa đơn điện tử",
        "type": "added",
        "oldRule": "[Căn cứ: TT 32/2011] Doanh nghiệp tự do lựa chọn bất kỳ công ty tin học nào viết phần mềm hóa đơn.",
        "newRule": "[Căn cứ: Điều 10 TT 78/2021] Tổ chức cung cấp dịch vụ HĐĐT phải đáp ứng tiêu chuẩn khắt khe của Tổng cục Thuế: Hạ tầng máy chủ dự phòng, đường truyền VPN kết nối trực tiếp cổng thuế, chứng chỉ ISO 27001 về bảo mật thông tin.",
        "impactNote": "Kiểu Việt ký hợp đồng với đơn vị truyền nhận đạt chuẩn quốc gia, bảo đảm dữ liệu hóa đơn công trình không bị nghẽn mạng."
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
        "topic": "Bắt buộc tích hợp Chứng từ khấu trừ thuế TNCN điện tử vào ứng dụng VNeID",
        "type": "added",
        "oldRule": "[Căn cứ: TT 37/2010] Người lao động phải cầm chứng từ khấu trừ thuế giấy đến từng cơ quan thuế nộp hồ sơ quyết toán.",
        "newRule": "[Căn cứ: Điều 5 NĐ 70/2025/NĐ-CP] Dữ liệu khấu trừ thuế TNCN của người lao động được đồng bộ tự động lên tài khoản định danh điện tử VNeID và Cổng Thuế điện tử cá nhân (eTax Mobile).",
        "impactNote": "Hàng trăm kỹ sư và công nhân của Kiểu Việt có thể tự quyết toán thuế hoàn thuế TNCN trực tuyến trên điện thoại mà không cần xin cấp chứng từ giấy từ phòng kế toán."
      },
      {
        "topic": "Quy chuẩn mã số định danh trên Chứng từ khấu trừ TNCN điện tử",
        "type": "added",
        "oldRule": "[Căn cứ: TT 37/2010] Sử dụng số series in sẵn trên cuốn chứng từ giấy.",
        "newRule": "[Căn cứ: Điều 7 NĐ 70/2025/NĐ-CP] Mỗi chứng từ khấu trừ thuế TNCN điện tử có một mã định danh duy nhất (UUID) gồm 24 ký tự kèm mã QR-code phục vụ tra cứu tức thời.",
        "impactNote": "Loại bỏ hoàn toàn rủi ro bị làm giả chứng từ khấu trừ thuế của công ty Kiểu Việt."
      },
      {
        "topic": "Thời hạn cấp chứng từ khấu trừ thuế TNCN điện tử cho người lao động",
        "type": "modified",
        "oldRule": "[Căn cứ: TT 37/2010] Cấp chứng từ giấy khi người lao động nghỉ việc hoặc khi có yêu cầu bằng văn bản.",
        "newRule": "[Căn cứ: Điều 9 NĐ 70/2025/NĐ-CP] Doanh nghiệp có trách nhiệm phát hành và gửi chứng từ khấu trừ TNCN điện tử cho người nộp thuế trong vòng 03 ngày làm việc kể từ ngày nhận được yêu cầu.",
        "impactNote": "Phòng Nhân sự - Kế toán Kiểu Việt thiết lập hệ thống tự động xuất chứng từ TNCN điện tử qua email nhân viên trong vòng 24 giờ."
      },
      {
        "topic": "Chế tài xử phạt vi phạm về phát hành chứng từ khấu trừ thuế TNCN",
        "type": "added",
        "oldRule": "[Căn cứ: NĐ 125/2020] Phạt mức chung về hành vi chậm cấp chứng từ.",
        "newRule": "[Căn cứ: Điều 15 NĐ 70/2025/NĐ-CP] Phạt tiền từ 2.000.000 đến 5.000.000 đồng đối với hành vi chậm cấp chứng từ khấu trừ thuế TNCN điện tử quá thời hạn quy định.",
        "impactNote": "Kiểu Việt tuân thủ nghiêm ngặt quy trình cấp chứng từ đúng hạn cho nhân công thời vụ thi công công trình."
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
        "topic": "Thời hạn nộp hồ sơ quyết toán thuế năm chuyển sang ngày cuối cùng tháng thứ 3",
        "type": "modified",
        "oldRule": "[Căn cứ: Điều 32 Luật QLT 2006] Hạn chót nộp hồ sơ quyết toán năm là ngày thứ 90 kể từ ngày kết thúc năm dương lịch.",
        "newRule": "[Căn cứ: Điểm a Khoản 2 Điều 44 Luật QLT 2019] Chậm nhất là ngày cuối cùng của tháng thứ 3 kể từ ngày kết thúc năm dương lịch (ngày 31/03 hàng năm).",
        "impactNote": "Kế toán Kiểu Việt có thêm từ 1 đến 2 ngày (tùy năm nhuận) để hoàn tất kiểm toán Báo cáo tài chính và nộp hồ sơ quyết toán thuế TNDN, TNCN."
      },
      {
        "topic": "Mức tính tiền chậm nộp tiền thuế giữ nguyên 0,03%/ngày (tương đương 10,95%/năm)",
        "type": "modified",
        "oldRule": "[Căn cứ: Luật 78/2006 & Luật 106/2016] Từng áp dụng mức 0,05%/ngày (18,25%/năm), sau đó điều chỉnh xuống 0,03%/ngày.",
        "newRule": "[Căn cứ: Điều 59 Luật QLT 2019] Mức tính tiền chậm nộp bằng 0,03%/ngày tính trên số tiền thuế chậm nộp. Tiền chậm nộp được tính liên tục từ ngày tiếp sau ngày cuối cùng của thời hạn nộp thuế đến ngày nộp thuế vào NSNN.",
        "impactNote": "Kiểu Việt chủ động nộp thuế đúng hạn để không bị cơ quan thuế tính tiền chậm nộp hàng trăm triệu đồng đối với các gói thầu giá trị lớn."
      },
      {
        "topic": "Trách nhiệm của Ngân hàng thương mại trong việc cung cấp thông tin tài khoản",
        "type": "added",
        "oldRule": "[Căn cứ: Luật QLT 2006] Ngân hàng chỉ cung cấp thông tin sao kê tài khoản doanh nghiệp khi có Quyết định thanh tra thuế hoặc khởi tố hình sự.",
        "newRule": "[Căn cứ: Điều 27 & Điều 30 Luật QLT 2019] Ngân hàng thương mại có trách nhiệm cung cấp thông tin số hiệu tài khoản của người nộp thuế cho cơ quan quản lý thuế; thực hiện phong tỏa, trích nộp tiền từ tài khoản theo Quyết định cưỡng chế thuế.",
        "impactNote": "Toàn bộ dòng tiền thanh toán hợp đồng xây lắp của Kiểu Việt qua các tài khoản ngân hàng BIDV, Vietinbank, Vietcombank phải minh bạch 100%."
      },
      {
        "topic": "Quy định về thời hiệu xử phạt vi phạm hành chính về quản lý thuế",
        "type": "modified",
        "oldRule": "[Căn cứ: Luật QLT 2006] Thời hiệu xử phạt vi phạm thủ tục thuế chung là 2 năm.",
        "newRule": "[Căn cứ: Điều 8 Luật QLT 2019] Thời hiệu xử phạt vi phạm thủ tục thuế là 02 năm; thời hiệu xử phạt đối với hành vi trốn thuế chưa đến mức truy cứu trách nhiệm hình sự là 05 năm kể từ ngày thực hiện hành vi.",
        "impactNote": "Kiểu Việt bảo đảm lưu trữ hồ sơ giải trình chi phí xây dựng công trình tối thiểu 5-10 năm để phòng ngừa rủi ro hậu kiểm thuế."
      },
      {
        "topic": "Cơ chế kéo dài thời hạn nộp thuế trong trường hợp gặp khó khăn bất khả kháng",
        "type": "added",
        "oldRule": "[Căn cứ: Luật QLT 2006] Thủ tục gia hạn nộp thuế do thiên tai, dịch bệnh rất phức tạp và kéo dài.",
        "newRule": "[Căn cứ: Điều 62 & Điều 63 Luật QLT 2019] Doanh nghiệp bị thiệt hại do thiên tai, dịch bệnh, hỏa hoạn bất khả kháng được gia hạn nộp thuế tối đa không quá 02 năm kể từ ngày hết hạn nộp thuế và không bị tính tiền chậm nộp.",
        "impactNote": "Kiểu Việt có quyền lập hồ sơ xin gia hạn nộp thuế khi công trình thi công tại khu vực Tây Nguyên bị ngập lụt, sạt lở đất gây thiệt hại vật tư."
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
        "topic": "Tỷ lệ tạm nộp thuế TNDN 4 quý tối thiểu phải đạt 80% số thuế quyết toán năm",
        "type": "modified",
        "oldRule": "[Căn cứ: NĐ 83/2013 & NĐ 91/2014] Tổng số thuế TNDN tạm nộp của 3 quý đầu năm không được thấp hơn 75% số thuế TNDN phải nộp theo quyết toán năm (sửa đổi tại NĐ 91/2022).",
        "newRule": "[Căn cứ: Điểm b Khoản 6 Điều 8 NĐ 126/2020 (đã sửa đổi bởi NĐ 91/2022)] Tổng số thuế TNDN đã tạm nộp của 04 quý không được thấp hơn 80% số thuế TNDN phải nộp theo quyết toán năm. Nếu nộp thiếu sẽ bị tính tiền chậm nộp 0,03%/ngày trên số thuế nộp thiếu tính từ ngày 31/01.",
        "impactNote": "Kế toán Kiểu Việt phải ước tính chính xác lợi nhuận cả năm trước ngày 31/01 để nộp tạm ứng đủ 80% thuế TNDN, tránh bị tính tiền phạt chậm nộp."
      },
      {
        "topic": "Quy định về khai thuế GTGT, TNCN theo tháng hoặc theo quý",
        "type": "modified",
        "oldRule": "[Căn cứ: NĐ 83/2013] Tiêu chí khai thuế theo quý căn cứ vào doanh thu năm trước liền kề dưới 50 tỷ đồng.",
        "newRule": "[Căn cứ: Điều 9 NĐ 126/2020] Khai thuế theo quý áp dụng đối với người nộp thuế có tổng doanh thu bán hàng hóa và cung cấp dịch vụ của năm trước liền kề từ 50 tỷ đồng trở xuống. Doanh thu trên 50 tỷ đồng bắt buộc phải khai thuế theo tháng.",
        "impactNote": "Với doanh thu hàng trăm tỷ đồng mỗi năm, Công ty Cổ phần Kiểu Việt bắt buộc phải kê khai và nộp tờ khai thuế GTGT theo từng tháng (hạn chót ngày 20 hàng tháng)."
      },
      {
        "topic": "Ngừng sử dụng hóa đơn là biện pháp cưỡng chế thi hành quyết định hành chính thuế",
        "type": "added",
        "oldRule": "[Căn cứ: NĐ 83/2013] Biện pháp thông báo hóa đơn không còn giá trị sử dụng áp dụng chậm và rời rạc.",
        "newRule": "[Căn cứ: Điều 34 NĐ 126/2020] Cơ quan thuế ban hành Quyết định cưỡng chế bằng biện pháp ngừng sử dụng hóa đơn đối với doanh nghiệp nợ tiền thuế quá 90 ngày. Hệ thống hóa đơn điện tử sẽ tự động khóa chức năng xuất hóa đơn.",
        "impactNote": "Cảnh báo đỏ: Kiểu Việt phải luôn đối chiếu công nợ thuế, không bao giờ để nợ đọng thuế quá 90 ngày làm hệ thống HĐĐT bị cưỡng chế đóng băng."
      },
      {
        "topic": "Trách nhiệm nộp thuế thay cho nhà thầu nước ngoài của doanh nghiệp Việt Nam",
        "type": "added",
        "oldRule": "[Căn cứ: NĐ 83/2013] Quy định kê khai thuế nhà thầu nước ngoài (FCT) còn nhiều vướng mắc về thủ tục khấu trừ.",
        "newRule": "[Căn cứ: Điều 7 NĐ 126/2020] Bên Việt Nam ký hợp đồng mua máy móc, dịch vụ kỹ thuật của nhà thầu nước ngoài có trách nhiệm khấu trừ, khai và nộp thay thuế GTGT và thuế TNDN nhà thầu trước khi chuyển tiền ra nước ngoài.",
        "impactNote": "Khi Kiểu Việt thuê chuyên gia nước ngoài hoặc mua phần mềm thiết kế thi công nước ngoài, kế toán phải khấu trừ và nộp thay thuế FCT đúng quy định."
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
        "topic": "Giảm tỷ lệ phân bổ thuế GTGT xây dựng vãng lai ngoại tỉnh từ 2% xuống 1%",
        "type": "modified",
        "oldRule": "[Căn cứ: Điều 11 Thông tư 156/2013] Hoạt động xây lắp ngoại tỉnh không thành lập chi nhánh phải nộp thuế GTGT vãng lai 2% trên doanh thu chưa thuế cho Kho bạc địa phương nơi thi công.",
        "newRule": "[Căn cứ: Điểm c Khoản 1 Điều 13 TT 80/2021] Tỷ lệ phân bổ thuế GTGT đối với hoạt động xây dựng tại địa bàn tỉnh khác nơi đóng trụ sở chính giảm xuống còn 1% trên doanh thu công trình chưa có thuế GTGT.",
        "impactNote": "Tiết kiệm ngay 50% dòng tiền nộp thuế vãng lai công trình ngoại tỉnh cho Kiểu Việt, giảm ứ đọng thuế GTGT đầu vào tại trụ sở chính."
      },
      {
        "topic": "Quy định ngưỡng giá trị hợp đồng xây dựng vãng lai không phải nộp phân bổ 1%",
        "type": "added",
        "oldRule": "[Căn cứ: TT 156/2013] Mọi hợp đồng xây lắp ngoại tỉnh trên 1 tỷ đồng đều phải nộp thuế vãng lai 2%.",
        "newRule": "[Căn cứ: Điểm c Khoản 1 Điều 13 TT 80/2021] Trường hợp công trình xây dựng liên quan đến nhiều tỉnh mà không xác định được doanh thu của công trình ở từng tỉnh thì số thuế GTGT phải nộp phân bổ không áp dụng nếu giá trị công trình dưới 1 tỷ đồng.",
        "impactNote": "Các gói thầu sửa chữa nhỏ, xử lý sự cố kỹ thuật dưới 1 tỷ đồng của Kiểu Việt tại các tỉnh không phải làm thủ tục phân bổ thuế vãng lai phức tạp."
      },
      {
        "topic": "Hồ sơ và quy trình phân bổ nghĩa vụ thuế TNDN cho cơ sở sản xuất phụ thuộc",
        "type": "modified",
        "oldRule": "[Căn cứ: TT 156/2013] Phân bổ thuế TNDN theo tỷ lệ chi phí phức tạp, gây tranh chấp giữa các Cục Thuế địa phương.",
        "newRule": "[Căn cứ: Điều 17 TT 80/2021] Hướng dẫn chi tiết công thức phân bổ thuế TNDN tạm nộp hàng quý và quyết toán năm cho các đơn vị phụ thuộc, địa điểm kinh doanh theo tỷ lệ chi phí thực tế phát sinh trong kỳ.",
        "impactNote": "Kế toán Kiểu Việt lập Bảng phân bổ thuế TNDN Mẫu 01-1/TNDN chính xác cho các mỏ đá, xưởng bê tông trực thuộc tại các tỉnh Tây Nguyên."
      },
      {
        "topic": "Quy trình hoàn thuế điện tử khép kín và tự động phân loại hồ sơ rủi ro",
        "type": "modified",
        "oldRule": "[Căn cứ: TT 156/2013] Nộp hồ sơ hoàn thuế giấy, thời gian thẩm định thực tế thường kéo dài quá thời hạn luật định.",
        "newRule": "[Căn cứ: Điều 27-32 TT 80/2021] 100% hồ sơ đề nghị hoàn thuế GTGT dự án đầu tư được tiếp nhận qua Cổng Thuế điện tử. Hệ thống tự động phân loại 'Hoàn thuế trước, kiểm tra sau' (trong 06 ngày làm việc) hoặc 'Kiểm tra trước, hoàn thuế sau' (trong 40 ngày làm việc).",
        "impactNote": "Kiểu Việt được hoàn thuế GTGT dự án đầu tư cụm mỏ khoáng sản theo cơ chế hoàn trước kiểm sau trong vòng 6 ngày làm việc."
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
        "topic": "Khung tiền phạt đối với hành vi lập hóa đơn sai thời điểm (Khoản 3 Điều 24)",
        "type": "modified",
        "oldRule": "[Căn cứ: Điều 38 NĐ 109/2013] Phạt cảnh cáo hoặc phạt tiền từ 200.000 đến 1.000.000 đồng đối với hành vi lập hóa đơn không đúng thời điểm.",
        "newRule": "[Căn cứ: Khoản 3 & Khoản 4 Điều 24 NĐ 125/2020] Phạt tiền từ 3.000.000 đến 5.000.000 đồng nếu không dẫn đến chậm nghĩa vụ thuế; Phạt tiền từ 4.000.000 đến 8.000.000 đồng đối với hành vi lập hóa đơn sai thời điểm dẫn đến chậm thực hiện nghĩa vụ thuế.",
        "impactNote": "Kế toán Kiểu Việt tuyệt đối không được xuất dồn hóa đơn nghiệm thu công trình sang tháng sau, tránh bị phạt 8 triệu đồng cho mỗi số hóa đơn vi phạm."
      },
      {
        "topic": "Khung tiền phạt chậm nộp hồ sơ khai thuế (Tờ khai GTGT, TNDN, TNCN)",
        "type": "modified",
        "oldRule": "[Căn cứ: Điều 9 NĐ 129/2013] Phạt từ 1.000.000 đến 5.000.000 đồng đối với hành vi nộp chậm tờ khai quá 90 ngày.",
        "newRule": "[Căn cứ: Điều 13 NĐ 125/2020] Nâng mạnh khung phạt: Quá hạn từ 31-60 ngày: phạt từ 6 - 8 triệu; Quá hạn từ 61-90 ngày: phạt từ 8 - 15 triệu; Quá hạn trên 90 ngày có phát sinh số thuế phải nộp: phạt kịch khung từ 15.000.000 đến 25.000.000 đồng.",
        "impactNote": "Kiểu Việt cài đặt lịch tự động cảnh báo nộp tờ khai trước hạn chót ngày 20 hàng tháng, tuyệt đối không để chậm trễ dù chỉ 01 ngày."
      },
      {
        "topic": "Xử phạt hành vi không lập hóa đơn khi bán hàng hóa, cung cấp dịch vụ",
        "type": "modified",
        "oldRule": "[Căn cứ: NĐ 109/2013] Phạt tiền từ 10.000.000 đến 20.000.000 đồng.",
        "newRule": "[Căn cứ: Khoản 5 Điều 24 NĐ 125/2020] Phạt tiền từ 10.000.000 đến 20.000.000 đồng đối với hành vi không lập hóa đơn khi bán hàng hóa, dịch vụ theo quy định; đồng thời buộc phải lập hóa đơn giao cho người mua.",
        "impactNote": "Mọi khoản thanh lý phế liệu, cho thuê ca máy thi công của Kiểu Việt đều phải lập hóa đơn GTGT đầy đủ."
      },
      {
        "topic": "Xử phạt hành vi khai sai dẫn đến thiếu số tiền thuế phải nộp (Phạt 20%)",
        "type": "modified",
        "oldRule": "[Căn cứ: Điều 10 NĐ 129/2013] Phạt 20% tính trên số tiền thuế khai thiếu.",
        "newRule": "[Căn cứ: Điều 16 NĐ 125/2020] Duy trì mức phạt 20% số tiền thuế khai thiếu hoặc số tiền thuế đã được hoàn cao hơn quy định; đồng thời buộc nộp đủ số tiền thuế thiếu và tiền chậm nộp 0,03%/ngày.",
        "impactNote": "Kiểu Việt kiểm soát chặt chẽ chi phí hợp lý được trừ để tránh bị thanh tra thuế loại chi phí, truy thu 20% tiền phạt và lãi chậm nộp."
      },
      {
        "topic": "Xử phạt hành vi trốn thuế (Phạt từ 1 đến 3 lần số thuế trốn)",
        "type": "modified",
        "oldRule": "[Căn cứ: Điều 11 NĐ 129/2013] Phạt từ 1 đến 3 lần số thuế trốn nhưng quy định tình tiết giảm nhẹ còn phân tán.",
        "newRule": "[Căn cứ: Điều 17 NĐ 125/2020] Quy định cụ thể: Phạt 1 lần nếu có 1 tình tiết giảm nhẹ; Phạt 1,5 lần đối với hành vi trốn thuế thông thường; Phạt từ 2 đến 3 lần đối với hành vi trốn thuế có từ 2 tình tiết tăng nặng trở lên; chuyển hồ sơ sang cơ quan công an điều tra nếu có dấu hiệu hình sự.",
        "impactNote": "Công ty Cổ phần Kiểu Việt quán triệt nguyên tắc tuân thủ pháp luật thuế 100%, nói không với hóa đơn bất hợp pháp."
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
        "topic": "Xử phạt hành vi lập hai hệ thống sổ kế toán tài chính trở lên (Phạt 40 - 50 triệu)",
        "type": "modified",
        "oldRule": "[Căn cứ: Điều 10 NĐ 105/2013] Phạt tiền từ 20.000.000 đến 30.000.000 đồng đối với hành vi để ngoài sổ kế toán tài sản của đơn vị.",
        "newRule": "[Căn cứ: Điểm đ Khoản 4 Điều 11 NĐ 41/2018] Phạt tiền từ 40.000.000 đến 50.000.000 đồng đối với hành vi: Lập hai hệ thống sổ kế toán tài chính trở lên hoặc để ngoài sổ kế toán tài sản, nợ phải trả có liên quan đến đơn vị.",
        "impactNote": "Kiểu Việt duy trì tính thống nhất tuyệt đối của sổ sách tài chính, minh bạch dữ liệu kế toán công ty."
      },
      {
        "topic": "Xử phạt vi phạm quy định về tiêu chuẩn, điều kiện bổ nhiệm Kế toán trưởng",
        "type": "modified",
        "oldRule": "[Căn cứ: Điều 15 NĐ 105/2013] Phạt tiền từ 5.000.000 đến 10.000.000 đồng.",
        "newRule": "[Căn cứ: Điều 17 NĐ 41/2018] Phạt tiền từ 20.000.000 đến 30.000.000 đồng đối với hành vi: Bổ nhiệm Kế toán trưởng không đủ tiêu chuẩn, điều kiện theo quy định; không có chứng chỉ bồi dưỡng kế toán trưởng.",
        "impactNote": "Kiểu Việt rà soát hồ sơ bổ nhiệm Kế toán trưởng, bảo đảm đầy đủ văn bằng, chứng chỉ và đăng ký với cơ quan quản lý."
      },
      {
        "topic": "Xử phạt vi phạm quy định về nộp và công khai Báo cáo tài chính năm",
        "type": "modified",
        "oldRule": "[Căn cứ: Điều 11 NĐ 105/2013] Phạt từ 5.000.000 đến 10.000.000 đồng đối với việc nộp chậm BCTC.",
        "newRule": "[Căn cứ: Điều 12 NĐ 41/2018] Phạt tiền từ 40.000.000 đến 50.000.000 đồng đối với hành vi không nộp Báo cáo tài chính cho cơ quan nhà nước có thẩm quyền hoặc công khai BCTC chậm quá 03 tháng.",
        "impactNote": "Kiểu Việt nộp đầy đủ Báo cáo tài chính đã kiểm toán cho Sở KH-ĐT, Cục Thuế, Tổng cục Thống kê đúng hạn ngày 31/03."
      },
      {
        "topic": "Xử phạt hành vi giả mạo, khai man chứng từ kế toán hoặc ký chứng từ khống",
        "type": "modified",
        "oldRule": "[Căn cứ: NĐ 105/2013] Phạt tiền từ 10.000.000 đến 20.000.000 đồng.",
        "newRule": "[Căn cứ: Khoản 3 Điều 8 NĐ 41/2018] Phạt tiền từ 20.000.000 đến 30.000.000 đồng đối với hành vi: Giả mạo, khai man chứng từ kế toán nhưng chưa đến mức truy cứu trách nhiệm hình sự; ký chứng từ kế toán khi chưa ghi đủ nội dung.",
        "impactNote": "Tuyệt đối cấm ký khống Phiếu chi, Phiếu xuất kho hoặc Biên bản nghiệm thu công việc tại các công trường của Kiểu Việt."
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
        "topic": "Trần khống chế chi phí lãi vay được trừ ở mức 30% tổng lợi nhuận thuần (EBITDA)",
        "type": "modified",
        "oldRule": "[Căn cứ: Khoản 3 Điều 8 NĐ 20/2017] Trần chi phí lãi vay được trừ khi tính thuế TNDN bị khống chế ở mức rất thấp là 20% EBITDA, gây khó khăn lớn cho các doanh nghiệp xây dựng dùng đòn bẩy tài chính cao.",
        "newRule": "[Căn cứ: Điểm a Khoản 3 Điều 16 NĐ 132/2020] Nâng trần khống chế chi phí lãi vay được trừ lên 30% của tổng lợi nhuận thuần từ hoạt động kinh doanh cộng chi phí lãi vay thuần cộng chi phí khấu hao (EBITDA).",
        "impactNote": "Mở rộng hạn mức khấu trừ chi phí lãi vay ngân hàng cho Kiểu Việt thêm 10%, tiết kiệm hàng tỷ đồng thuế TNDN khi tài trợ vốn cho các dự án xây dựng dài hạn."
      },
      {
        "topic": "Cơ chế cho phép chuyển chi phí lãi vay vượt trần 30% sang 5 năm tiếp theo",
        "type": "added",
        "oldRule": "[Căn cứ: NĐ 20/2017] Phần chi phí lãi vay vượt trần 20% bị loại vĩnh viễn khỏi chi phí hợp lý, không được chuyển sang các năm sau.",
        "newRule": "[Căn cứ: Điểm b Khoản 3 Điều 16 NĐ 132/2020] Phần chi phí lãi vay không được trừ (vượt trần 30%) được chuyển sang kỳ tính thuế tiếp theo khi xác định tổng chi phí lãi vay được trừ. Thời gian chuyển chi phí lãi vay tính liên tục không quá 05 năm.",
        "impactNote": "Kiểu Việt bảo toàn toàn bộ chi phí lãi vay hợp lệ trong giai đoạn đầu tư ban đầu để chuyển sang khấu trừ vào các năm dự án có doanh thu lớn."
      },
      {
        "topic": "Xác định các bên có quan hệ liên kết trong cho vay, mượn vốn (Ngưỡng 25% vốn góp)",
        "type": "modified",
        "oldRule": "[Căn cứ: Điểm d Khoản 1 Điều 5 NĐ 20/2017] Doanh nghiệp vay vốn ngân hàng thương mại chiếm trên 25% vốn chủ sở hữu và trên 50% tổng nợ trung dài hạn bị xem là bên liên kết.",
        "newRule": "[Căn cứ: Điểm d Khoản 2 Điều 5 NĐ 132/2020] Duy trì tiêu chí: Một doanh nghiệp bảo lãnh hoặc cho một doanh nghiệp khác vay vốn dưới bất kỳ hình thức nào với điều kiện khoản vốn vay ít nhất bằng 25% vốn góp của chủ sở hữu và chiếm trên 50% tổng giá trị các khoản nợ trung và dài hạn.",
        "impactNote": "Kế toán Kiểu Việt rà soát kỹ tỷ lệ đòn bẩy vay vốn tại BIDV/Vietinbank so với vốn điều lệ để xác định có thuộc diện lập Phụ lục Giao dịch liên kết hay không."
      },
      {
        "topic": "Các trường hợp được miễn kê khai, miễn lập Hồ sơ xác định giá giao dịch liên kết",
        "type": "added",
        "oldRule": "[Căn cứ: NĐ 20/2017] Điều kiện miễn trừ phức tạp, hầu như mọi DN có giao dịch liên kết đều phải làm hồ sơ chuyển giá đồ sộ.",
        "newRule": "[Căn cứ: Điều 19 NĐ 132/2020] Miễn lập Hồ sơ xác định giá giao dịch liên kết nếu: 1) Doanh thu dưới 50 tỷ đồng và tổng giá trị giao dịch liên kết dưới 30 tỷ đồng; HOẶC 2) Chỉ phát sinh giao dịch giữa các bên liên kết nộp thuế tại Việt Nam có cùng mức thuế suất thuế TNDN 20%.",
        "impactNote": "Nếu Kiểu Việt và các công ty liên kết đều áp dụng thuế suất phổ thông 20% thì được miễn lập Hồ sơ chuyển giá 3 cấp, tiết kiệm chi phí thuê tư vấn."
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
        "topic": "Quy định điều kiện được thuê dịch vụ làm kế toán, dịch vụ kế toán trưởng",
        "type": "modified",
        "oldRule": "[Căn cứ: NĐ 128/2004] Doanh nghiệp có thể thuê cá nhân hành nghề tự do không có chứng chỉ hành nghề làm kế toán trưởng.",
        "newRule": "[Căn cứ: Điều 22 NĐ 174/2016] Doanh nghiệp chỉ được thuê doanh nghiệp kinh doanh dịch vụ kế toán hoặc hộ kinh doanh dịch vụ kế toán có Giấy chứng nhận đủ điều kiện kinh doanh dịch vụ kế toán do Bộ Tài chính cấp.",
        "impactNote": "Kiểu Việt ký hợp đồng dịch vụ kế toán kiểm toán với các tổ chức hợp chuẩn Bộ Tài chính, bảo đảm tính pháp lý của hồ sơ kế toán."
      },
      {
        "topic": "Trường hợp không bắt buộc phải bố trí Kế toán trưởng tại doanh nghiệp siêu nhỏ",
        "type": "added",
        "oldRule": "[Căn cứ: NĐ 128/2004] Mọi pháp nhân doanh nghiệp khi thành lập đều bắt buộc phải bổ nhiệm Kế toán trưởng ngay.",
        "newRule": "[Căn cứ: Khoản 2 Điều 20 NĐ 174/2016] Doanh nghiệp siêu nhỏ được bố trí người phụ trách kế toán mà không bắt buộc phải bổ nhiệm Kế toán trưởng trong thời hạn tối đa 12 tháng đầu thành lập.",
        "impactNote": "Tạo điều kiện linh hoạt cho các công ty dự án mới thành lập trực thuộc Kiểu Việt trong giai đoạn chuẩn bị đầu tư ban đầu."
      },
      {
        "topic": "Bảo quản, lưu trữ tài liệu kế toán trên phương tiện điện tử an toàn",
        "type": "added",
        "oldRule": "[Căn cứ: NĐ 128/2004] Chỉ quy định việc đóng tập, niêm phong và đóng thùng lưu trữ tài liệu giấy trong kho.",
        "newRule": "[Căn cứ: Điều 10 NĐ 174/2016] Tài liệu kế toán lưu trữ trên phương tiện điện tử phải bảo đảm tính an toàn, bảo mật dữ liệu, có bản sao lưu (Backup) dự phòng và có khả năng truy cập, in ra giấy hoặc tra cứu khi có yêu cầu thanh tra.",
        "impactNote": "Kiểu Việt triển khai hệ thống máy chủ sao lưu dữ liệu kế toán đám mây tự động hàng ngày, bảo vệ an toàn 100% dữ liệu tài chính công ty."
      },
      {
        "topic": "Xác định trách nhiệm bồi thường khi làm mất mát, hư hỏng tài liệu kế toán",
        "type": "modified",
        "oldRule": "[Căn cứ: NĐ 128/2004] Trách nhiệm cá nhân của thủ kho, nhân viên kế toán chưa được lượng hóa rõ ràng.",
        "newRule": "[Căn cứ: Điều 16 NĐ 174/2016] Khi phát hiện tài liệu kế toán bị mất mát, cháy, hỏng: Phải lập biên bản kiểm tra, xác định nguyên nhân và thông báo ngay cho cơ quan có thẩm quyền; người có lỗi phải bồi thường thiệt hại theo quy định pháp luật.",
        "impactNote": "Kiểu Việt ban hành Quy chế bảo mật và quản lý chứng từ thi công công trình, ràng buộc trách nhiệm vật chất đối với từng nhân sự kế toán phụ trách."
      }
    ]
  }
};
