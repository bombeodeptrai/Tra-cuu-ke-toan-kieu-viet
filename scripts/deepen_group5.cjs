const fs = require('fs');

const group5 = {
  "tt-48-2019": {
    decreeId: "tt-48-2019",
    title: "Thông tư 48/2019/TT-BTC",
    category: "Trích lập các khoản Dự phòng",
    compareWith: "Thông tư 228/2009/TT-BTC",
    summary: "Thông tư 48/2019/TT-BTC chuẩn hóa việc trích lập các khoản dự phòng: Bãi bỏ dự phòng bảo hành sản phẩm xây lắp khỏi diện trích lập theo thông tư này, siết chặt trích lập dự phòng nợ phải thu khó đòi theo tỷ lệ 30%, 50%, 70%, 100%.",
    items: [
      {
        topic: "Tỷ lệ trích lập dự phòng nợ phải thu khó đòi theo độ tuổi quá hạn (Khoản 2 Điều 6)",
        type: "modified",
        oldRule: "[Căn cứ: Điều 6 TT 228/2009/TT-BTC] Tỷ lệ trích lập cũ: Quá hạn từ 6 tháng đến dưới 1 năm: 30%; từ 1 đến dưới 2 năm: 50%; từ 2 đến dưới 3 năm: 70%; từ 3 năm trở lên: 100%.",
        newRule: "[Căn cứ: Điểm a Khoản 2 Điều 6 TT 48/2019/TT-BTC] Chuẩn hóa 4 bậc trích lập: 1) Quá hạn từ 06 tháng đến dưới 01 năm: trích 30% giá trị; 2) Quá hạn từ 01 năm đến dưới 02 năm: trích 50% giá trị; 3) Quá hạn từ 02 năm đến dưới 03 năm: trích 70% giá trị; 4) Quá hạn từ 03 năm trở lên: trích 100% giá trị khoản nợ.",
        impactNote: "Kế toán công nợ Kiểu Việt theo dõi sát tuổi nợ từng hợp đồng A-B; khi nợ quá hạn trên 6 tháng lập hồ sơ trích lập dự phòng ghi vào Chi phí quản lý doanh nghiệp (Nợ TK 642 / Có TK 2293) để giảm thuế TNDN."
      },
      {
        topic: "Điều kiện hồ sơ bắt buộc để trích lập dự phòng nợ phải thu khó đòi",
        type: "modified",
        oldRule: "[Căn cứ: TT 228/2009] Chỉ cần bảng kê tự lập của doanh nghiệp mà không đòi hỏi biên bản đối chiếu công nợ gốc.",
        newRule: "[Căn cứ: Khoản 1 Điều 6 TT 48/2019/TT-BTC] Bắt buộc phải có đầy đủ chứng từ gốc chứng minh: 1) Hợp đồng kinh tế, biên bản nghiệm thu, hóa đơn GTGT; 2) Biên bản đối chiếu công nợ có xác nhận của khách nợ (hoặc văn bản đòi nợ gửi bảo đảm qua bưu điện); 3) Giấy tờ chứng minh đã quá hạn thanh toán.",
        impactNote: "Kiểu Việt bắt buộc các phòng điều hành dự án gửi công văn đòi nợ có dấu bưu điện định kỳ hàng quý đối với các Chủ đầu tư chây ì thanh toán để hoàn thiện hồ sơ trích lập dự phòng hợp pháp."
      },
      {
        topic: "Bãi bỏ việc trích lập dự phòng bảo hành công trình xây dựng theo Thông tư này",
        type: "removed",
        oldRule: "[Căn cứ: Điều 7 TT 228/2009] Doanh nghiệp xây lắp được trích lập dự phòng bảo hành công trình tối đa không quá 5% giá trị hợp đồng theo quy định của Thông tư 228.",
        newRule: "[Căn cứ: Điều 1 & Điều 11 TT 48/2019/TT-BTC] Bãi bỏ nội dung trích lập dự phòng bảo hành công trình xây dựng khỏi phạm vi điều chỉnh của Thông tư 48. Việc trích lập dự phòng bảo hành công trình xây dựng được thực hiện theo quy định của Chuẩn mực kế toán Việt Nam số 18 và Luật Xây dựng.",
        impactNote: "Kiểu Việt chuyển sang trích lập Dự phòng phải trả về bảo hành công trình theo Chuẩn mực VAS 18 (Nợ TK 627/154 / Có TK 352) và quy định hợp đồng xây dựng, không bị vướng mắc theo TT 48."
      },
      {
        topic: "Xử lý khoản nợ phải thu khó đòi không thể thu hồi được (Xóa nợ thực tế)",
        type: "modified",
        oldRule: "[Căn cứ: TT 228/2009] Thủ tục xóa nợ kéo dài, phải chờ quyết định của Tòa án tuyên bố phá sản.",
        newRule: "[Căn cứ: Khoản 4 Điều 6 TT 48/2019/TT-BTC] Doanh nghiệp được xóa nợ khi: Khách nợ đã chết, mất tích, bị Tòa án tuyên bố phá sản hoặc đã ngừng hoạt động giải thể có xác nhận của cơ quan thuế. Số nợ xóa được bù đắp bằng nguồn dự phòng đã trích lập (Nợ TK 2293 / Có TK 131), phần thiếu hạch toán vào Chi phí QLDN.",
        impactNote: "Kiểu Việt dứt điểm xử lý xóa các khoản nợ xấu tồn đọng nhiều năm từ các nhà thầu phụ đã giải thể, làm sạch Bảng cân đối tài chính công ty."
      }
    ]
  },
  "luat-54-2024-khoangsan": {
    decreeId: "luat-54-2024-khoangsan",
    title: "Luật Địa chất và Khoáng sản số 54/2024/QH15",
    category: "Luật Địa chất và Khoáng sản mới",
    compareWith: "Luật Khoáng sản số 60/2010/QH12",
    summary: "Luật Địa chất và Khoáng sản 54/2024/QH15 phân loại 4 nhóm khoáng sản, cải cách đột phá thủ tục cấp phép khai thác mỏ vật liệu xây dựng thông thường (Nhóm IV) và phân cấp mạnh mẽ cho UBND cấp tỉnh.",
    items: [
      {
        topic: "Phân loại khoáng sản thành 4 nhóm theo tính chất quản trị (Nhóm I, II, III, IV)",
        type: "added",
        oldRule: "[Căn cứ: Luật Khoáng sản 2010] Không phân nhóm, áp dụng quy trình cấp phép khai thác phức tạp cào bằng như nhau giữa mỏ vàng, than đá với mỏ đất đắp đường, cát sỏi san lấp.",
        newRule: "[Căn cứ: Điều 6 Luật 54/2024/QH15] Phân thành 4 nhóm: Nhóm I (khoáng sản kim loại, năng lượng); Nhóm II (khoáng sản công nghiệp); Nhóm III (vật liệu xây dựng thông thường như đá, cát, cuội, sỏi); Nhóm IV (đất sét, đất đồi làm vật liệu san lấp, đất đắp nền đường).",
        impactNote: "Kiểu Việt được áp dụng thủ tục cấp phép khai thác đơn giản hóa tối đa đối với mỏ đất đắp nền đường (Nhóm IV) phục vụ các dự án cao tốc, giảm 70% thủ tục hành chính."
      },
      {
        topic: "Cắt giảm tối đa thủ tục cấp phép mỏ vật liệu san lấp Nhóm IV (Chỉ cần đăng ký khai thác)",
        type: "modified",
        oldRule: "[Căn cứ: Luật 2010] Khai thác đất san lấp vẫn phải lập Báo cáo thăm dò, Hội đồng trữ lượng phê duyệt và xin Giấy phép khai thác khoáng sản kéo dài từ 2 đến 3 năm.",
        newRule: "[Căn cứ: Điều 55 & Điều 67 Luật 54/2024/QH15] Đối với khoáng sản Nhóm IV (đất san lấp): Tổ chức, cá nhân chỉ cần lập Bản đăng ký khối lượng khai thác nộp cho UBND cấp tỉnh mà không phải thực hiện thủ tục cấp Giấy phép thăm dò và Giấy phép khai thác khoáng sản.",
        impactNote: "Bước đột phá cho Kiểu Việt: Đưa mỏ đất đắp vào khai thác phục vụ công trình chỉ trong vòng 30 ngày kể từ ngày trúng thầu, giải quyết triệt để nguy cơ thiếu hụt vật liệu đắp nền."
      },
      {
        topic: "Cơ chế đấu giá quyền khai thác khoáng sản và các trường hợp không đấu giá",
        type: "modified",
        oldRule: "[Căn cứ: Điều 78 Luật 2010] Phạm vi mỏ khoáng sản không đấu giá bị hạn chế, các mỏ vật liệu cho dự án giao thông vẫn phải qua đấu giá kéo dài.",
        newRule: "[Căn cứ: Điều 79 Luật 54/2024/QH15] Quy định rõ các trường hợp không đấu giá quyền khai thác khoáng sản: Khu vực khoáng sản phục vụ dự án công trình hạ tầng giao thông trọng điểm quốc gia, dự án khẩn cấp phòng chống thiên tai được chỉ định giao trực tiếp cho nhà thầu thi công.",
        impactNote: "Kiểu Việt được giao trực tiếp các mỏ đất đắp, mỏ đá dọc tuyến cao tốc theo cơ chế đặc thù không qua đấu giá, tiết kiệm chi phí đầu tư ban đầu."
      },
      {
        topic: "Trách nhiệm cải tạo, phục hồi môi trường và đóng cửa mỏ khoáng sản",
        type: "modified",
        oldRule: "[Căn cứ: Luật 2010] Ký quỹ cải tạo môi trường hàng năm bằng tiền mặt nộp vào Quỹ BVMT nhưng thủ tục hoàn trả sau đóng cửa mỏ bị tắc nghẽn.",
        newRule: "[Căn cứ: Điều 74-76 Luật 54/2024/QH15] Cho phép thực hiện cải tạo phục hồi môi trường cuốn chiếu theo từng giai đoạn khai thác; nghiệm thu hoàn trả tiền ký quỹ môi trường theo tiến độ hoàn thổ thực tế của mỏ.",
        impactNote: "Kiểu Việt thực hiện hoàn thổ và trồng cây xanh ngay trên các phần mỏ đất đã khai thác hết cao trình, thu hồi tiền ký quỹ môi trường hàng tỷ đồng để tái quay vòng vốn."
      }
    ]
  },
  "nd-193-2025-khoangsan": {
    decreeId: "nd-193-2025-khoangsan",
    title: "Nghị định 193/2025/NĐ-CP",
    category: "Cơ chế đặc thù khai thác Mỏ vật liệu XD",
    compareWith: "Nghị định 158/2016/NĐ-CP",
    summary: "Nghị định 193/2025/NĐ-CP hướng dẫn thi hành cơ chế đặc thù khai thác mỏ vật liệu xây dựng thông thường phục vụ các dự án hạ tầng giao thông quốc gia: Giao mỏ trực tiếp cho nhà thầu, rút ngắn thẩm định ĐTM và nghiệm thu hoàn thổ.",
    items: [
      {
        topic: "Cơ chế giao mỏ vật liệu trực tiếp cho nhà thầu thi công gói thầu xây lắp",
        type: "added",
        oldRule: "[Căn cứ: NĐ 158/2016/NĐ-CP] Nhà thầu phải mua đất đắp qua các đơn vị thương mại trung gian với giá bị thổi phồng gấp 2-3 lần giá dự toán.",
        newRule: "[Căn cứ: Điều 4 NĐ 193/2025/NĐ-CP] Nhà thầu trúng thầu gói thầu xây lắp được quyền nộp hồ sơ xin cấp phép khai thác mỏ khoáng sản nằm trong hồ sơ khảo sát vật liệu xây dựng của dự án; UBND tỉnh giao mỏ trực tiếp cho nhà thầu mà không phải thông qua đấu giá.",
        impactNote: "Kiểu Việt tự chủ toàn bộ nguồn cung đất đắp nền đường, kiểm soát 100% chất lượng cơ lý của đất và tiết kiệm hàng chục tỷ đồng chi phí mua vật tư trung gian."
      },
      {
        topic: "Rút ngắn thời gian thẩm định Báo cáo đánh giá tác động môi trường (ĐTM) xuống 30 ngày",
        type: "modified",
        oldRule: "[Căn cứ: NĐ 158/2016] Quy trình thẩm định ĐTM mỏ khoáng sản kéo dài từ 6 tháng đến 1 năm qua nhiều hội đồng thẩm định các cấp.",
        newRule: "[Căn cứ: Điều 6 NĐ 193/2025/NĐ-CP] Áp dụng quy trình thẩm định rút gọn trong vòng tối đa không quá 30 ngày làm việc đối với các mỏ vật liệu phục vụ dự án khẩn cấp quốc gia.",
        impactNote: "Kiểu Việt đưa mỏ vật liệu vào khai thác ngay trong tháng đầu khởi công dự án, không bị nghẽn tiến độ đắp nền đường mùa khô."
      },
      {
        topic: "Trách nhiệm phục hồi môi trường và hoàn trả mặt bằng mỏ đồng thời với dự án",
        type: "modified",
        oldRule: "[Căn cứ: NĐ 158/2016] Thủ tục đóng cửa mỏ và hoàn trả tiền ký quỹ cải tạo môi trường kéo dài nhiều năm sau khi kết thúc công trình.",
        newRule: "[Căn cứ: Điều 10 NĐ 193/2025/NĐ-CP] Quy định nghiệm thu hoàn trả mặt bằng mỏ đồng thời với thời điểm nghiệm thu hoàn thành đưa công trình vào sử dụng và hoàn trả ngay tiền ký quỹ môi trường cho nhà thầu.",
        impactNote: "Kiểu Việt thu hồi nhanh khoản tiền ký quỹ môi trường nộp tại Quỹ Bảo vệ môi trường địa phương sau khi hoàn thành gói thầu xây dựng."
      },
      {
        topic: "Nghĩa vụ kê khai nộp thuế tài nguyên và tiền cấp quyền khi tự khai thác mỏ đất đặc thù",
        type: "added",
        oldRule: "[Căn cứ: NĐ 158/2016] Chưa quy định rõ việc nhà thầu thi công tự khai thác mỏ vật liệu theo cơ chế đặc thù có phải nộp tiền cấp quyền khai thác khoáng sản hay không.",
        newRule: "[Căn cứ: Điều 8 NĐ 193/2025/NĐ-CP] Nhà thầu được giao mỏ đất đắp đặc thù phải thực hiện đầy đủ nghĩa vụ kê khai, nộp thuế tài nguyên, phí BVMT và tiền cấp quyền khai thác khoáng sản vào ngân sách nhà nước theo sản lượng thực tế khai thác.",
        impactNote: "Kế toán Kiểu Việt lập hồ sơ đăng ký mã số thuế vãng lai và kê khai nộp đầy đủ thuế tài nguyên mỏ đất đắp tại địa phương thi công dự án."
      }
    ]
  },
  "qd-87-2025-gialai": {
    decreeId: "qd-87-2025-gialai",
    title: "Quyết định 87/2025/QĐ-UBND",
    category: "Bảng giá tính thuế tài nguyên 2026 (Gia Lai)",
    compareWith: "Quyết định giá tính thuế tài nguyên các năm trước",
    summary: "Quyết định 87/2025/QĐ-UBND ban hành Bảng giá tính thuế tài nguyên năm 2026 trên địa bàn tỉnh Gia Lai: Cập nhật giá tính thuế đá xây dựng, cát san lấp, đất đắp công trình bám sát giá thị trường khu vực Tây Nguyên.",
    items: [
      {
        topic: "Cập nhật bảng giá tính thuế tài nguyên đối với đất đắp san lấp công trình tại Gia Lai",
        type: "modified",
        oldRule: "[Căn cứ: QĐ cũ UBND tỉnh Gia Lai] Giá tính thuế tài nguyên đất san lấp cũ ở mức thấp (từ 35.000 đến 45.000 đ/m3).",
        newRule: "[Căn cứ: Bảng Phụ lục ban hành kèm theo QĐ 87/2025/QĐ-UBND] Điều chỉnh khung giá tính thuế tài nguyên đối với đất khai thác làm vật liệu san lấp mặt bằng, đắp nền đường lên mức 49.000 - 55.000 đ/m3 phù hợp với mặt bằng thị trường năm 2026.",
        impactNote: "Kế toán Kiểu Việt áp dụng chính xác đơn giá tính thuế tài nguyên khi lập Tờ khai thuế tài nguyên Mẫu 01/TAIN tại Cục Thuế tỉnh Gia Lai."
      },
      {
        topic: "Giá tính thuế tài nguyên đối với đá hộc, đá dăm làm bê tông (Phân loại theo quy cách)",
        type: "modified",
        oldRule: "[Căn cứ: QĐ cũ] Bảng giá cũ chưa phân loại chi tiết các loại đá nghiền sàng (đá 1x2, đá 2x4, đá 4x6, đá mi sàng).",
        newRule: "[Căn cứ: Nhóm IV Phụ lục QĐ 87/2025/QĐ-UBND] Quy định chi tiết đơn giá tính thuế tài nguyên: Đá hộc khai thác: 90.000 đ/m3; Đá dăm 1x2, 2x4 làm bê tông: 160.000 - 180.000 đ/m3; Cát nghiền nhân tạo: 120.000 đ/m3.",
        impactNote: "Kiểu Việt bóc tách chính xác chi phí thuế tài nguyên trong cơ cấu đơn giá sản xuất bê tông nhựa và bê tông xi măng phục vụ dự án cao tốc Tây Nguyên."
      },
      {
        topic: "Quy định hệ số quy đổi từ thể tích nguyên khai sang thể tích nở rời (Hệ số K = 1.20 - 1.25)",
        type: "added",
        oldRule: "[Căn cứ: QĐ cũ] Chưa có quy định hệ số quy đổi chuẩn, gây tranh cãi gay gắt giữa cơ quan thuế và nhà thầu khi đo đếm trên thùng xe tải.",
        newRule: "[Căn cứ: Điều 2 QĐ 87/2025/QĐ-UBND] Ban hành bảng hệ số quy đổi chuẩn: Từ đất đá nguyên khai (tại mỏ) sang đất đá nở rời (trên phương tiện vận chuyển thùng xe tải: hệ số K = 1,20 đối với đá và 1,25 đối với đất san lấp).",
        impactNote: "Bảo đảm Kiểu Việt kê khai đúng khối lượng nguyên khai chịu thuế, không bị tính thuế áp đặt oan trên khối lượng nở rời trên thùng xe ben vận chuyển."
      },
      {
        topic: "Giá tính thuế tài nguyên đối với cát vàng xây dựng và cát san lấp mặt bằng",
        type: "modified",
        oldRule: "[Căn cứ: QĐ cũ] Chỉ quy định chung chung một mức giá cát xây dựng mà không phân biệt cát hạt lớn làm bê tông và cát san lấp.",
        newRule: "[Căn cứ: Phụ lục QĐ 87/2025/QĐ-UBND] Quy định tách biệt: Cát vàng hạt thô làm bê tông chịu mức giá tính thuế tài nguyên 150.000 đ/m3; cát san lấp chịu mức giá 80.000 đ/m3 theo khung của Bộ Tài chính.",
        impactNote: "Kiểu Việt kê khai đúng chủng loại cát sử dụng cho từng hạng mục công trình tại Gia Lai để tối ưu hóa chi phí thuế tài nguyên hợp pháp."
      }
    ]
  },
  "tt-152-2015": {
    decreeId: "tt-152-2015",
    title: "Thông tư 152/2015/TT-BTC",
    category: "Hướng dẫn Thuế Tài nguyên",
    compareWith: "Thông tư 105/2010/TT-BTC",
    summary: "Thông tư 152/2015/TT-BTC là cẩm nang hướng dẫn thuế tài nguyên: Quy định công thức tính thuế tài nguyên, sản lượng khai thác thực tế, giá tính thuế và các trường hợp miễn giảm thuế tài nguyên.",
    items: [
      {
        topic: "Công thức xác định Thuế tài nguyên phải nộp trong kỳ (Điều 4)",
        type: "modified",
        oldRule: "[Căn cứ: TT 105/2010] Cách tính sản lượng tài nguyên tính thuế chưa phân định rõ tỷ lệ thu hồi thành phẩm sau chế biến.",
        newRule: "[Căn cứ: Điều 4 TT 152/2015/TT-BTC] Thuế tài nguyên phải nộp trong kỳ = Sản lượng tài nguyên tính thuế x Giá tính thuế đơn vị tài nguyên x Thuế suất thuế tài nguyên (Thuế suất đá xây dựng: 10%; cát: 15%; đất san lấp: 5%).",
        impactNote: "Kế toán Kiểu Việt áp dụng công thức chuẩn và thuế suất 5% đối với đất đắp, 10% đối với đá xây dựng để trích lập chi phí thuế tài nguyên hàng tháng."
      },
      {
        topic: "Xác định sản lượng tài nguyên tính thuế đối với mỏ khoáng sản không bán mà tự dùng thi công",
        type: "modified",
        oldRule: "[Căn cứ: TT 105/2010] Chưa quy định rõ phương pháp đo đếm khi nhà thầu tự khai thác đất đá để đắp đường.",
        newRule: "[Căn cứ: Khoản 2 Điều 5 TT 152/2015/TT-BTC] Đối với tài nguyên khai thác không tiêu thụ mà đưa vào sản xuất sản phẩm khác: Sản lượng tính thuế là sản lượng tài nguyên nguyên khai thực tế khai thác đưa vào sử dụng, căn cứ vào sổ sách kiểm kê mỏ hoặc hồ sơ nghiệm thu khối lượng công trình.",
        impactNote: "Kiểu Việt lấy trực tiếp khối lượng đất đắp K95, K98 nghiệm thu trong Bảng 03a nhân với hệ số đầm nén để làm căn cứ kê khai sản lượng tính thuế tài nguyên."
      },
      {
        topic: "Trường hợp được miễn thuế tài nguyên đối với đất khai thác san lấp tại chỗ trong dự án",
        type: "added",
        oldRule: "[Căn cứ: TT 105/2010] Mọi khối lượng đất đào xúc đều bị cơ quan thuế tính thuế tài nguyên dù chỉ điều phối nội bộ trên cùng tuyến đường.",
        newRule: "[Căn cứ: Khoản 3 Điều 10 TT 152/2015/TT-BTC] Đất khai thác để san lấp, xây dựng công trình an ninh, quân sự; đất khai thác trong phạm vi diện tích đất được giao, được thuê để sử dụng tại chỗ cho chính công trình đó mà không vận chuyển ra ngoài phạm vi dự án thì được miễn thuế tài nguyên.",
        impactNote: "Kiểu Việt tận dụng đất đào nền đường để đắp bù nền đường trên cùng phạm vi gói thầu giao thông, tiết kiệm 100% tiền thuế tài nguyên cho khối lượng điều phối nội bộ."
      },
      {
        topic: "Hồ sơ và tờ khai quyết toán thuế tài nguyên năm (Mẫu 02/TAIN)",
        type: "modified",
        oldRule: "[Căn cứ: TT 105/2010] Quyết toán thuế tài nguyên giấy nộp cùng BCTC.",
        newRule: "[Căn cứ: Điều 12 TT 152/2015/TT-BTC] Khai thuế tài nguyên theo tháng (Mẫu 01/TAIN) và quyết toán thuế tài nguyên năm (Mẫu 02/TAIN) nộp chậm nhất là ngày cuối cùng của tháng thứ 3 kể từ ngày kết thúc năm dương lịch qua mạng Cổng Thuế điện tử.",
        impactNote: "Kế toán Kiểu Việt hoàn thành Tờ khai quyết toán thuế tài nguyên năm 02/TAIN trước ngày 31/03 hàng năm đúng thời hạn quy định."
      }
    ]
  },
  "tt-44-2017": {
    decreeId: "tt-44-2017",
    title: "Thông tư 44/2017/TT-BTC",
    category: "Khung giá tính thuế tài nguyên toàn quốc",
    compareWith: "Các quy định khung giá tài nguyên trước đây",
    summary: "Thông tư 44/2017/TT-BTC ban hành Khung giá tính thuế tài nguyên toàn quốc: Thiết lập mức giá trần và giá sàn đối với mọi loại khoáng sản cát, đá, sỏi, đất đắp công trình trên cả nước.",
    items: [
      {
        topic: "Khung giá tối thiểu và tối đa tính thuế tài nguyên nhóm Vật liệu xây dựng thông thường",
        type: "added",
        oldRule: "Mỗi tỉnh ban hành một khung giá tự phát, chênh lệch giữa các tỉnh giáp ranh lên đến 300% gây bất bình đẳng cho doanh nghiệp.",
        newRule: "[Căn cứ: Phụ lục Khung giá TT 44/2017/TT-BTC] Ban hành khung giá chuẩn: Đất khai thác san lấp: tối thiểu 27.000 đ/m3 - tối đa 70.000 đ/m3; Đá xây dựng thông thường: tối thiểu 63.000 đ/m3 - tối đa 200.000 đ/m3; Cát vàng xây dựng: tối thiểu 105.000 đ/m3 - tối đa 350.000 đ/m3.",
        impactNote: "Bảo đảm mức giá tính thuế tài nguyên do UBND tỉnh Gia Lai ban hành không được vượt khung tối đa của Bộ Tài chính, bảo vệ quyền lợi hợp pháp của Kiểu Việt."
      },
      {
        topic: "Quy tắc điều chỉnh bảng giá tài nguyên cấp tỉnh khi giá thị trường biến động quá 20%",
        type: "modified",
        oldRule: "Bảng giá tính thuế cấp tỉnh giữ nguyên qua nhiều năm dù giá thị trường tăng gấp đôi.",
        newRule: "[Căn cứ: Điều 4 TT 44/2017/TT-BTC] Khi giá tài nguyên trên thị trường biến động tăng hoặc giảm từ 20% trở lên so với Khung giá của Bộ Tài chính thì UBND cấp tỉnh có trách nhiệm gửi văn bản báo cáo Bộ Tài chính để điều chỉnh Khung giá toàn quốc.",
        impactNote: "Kiểu Việt có căn cứ pháp lý để kiến nghị Hiệp hội Doanh nghiệp tỉnh phản hồi về giá tính thuế tài nguyên khi giá thị trường đá cát bị trồi sụt."
      },
      {
        topic: "Trách nhiệm đối chiếu giá tính thuế tài nguyên với giá vật liệu công bố của Sở Xây dựng",
        type: "added",
        oldRule: "Giá tính thuế tài nguyên và giá công bố của Sở Xây dựng độc lập hoàn toàn, lệch pha nhau nghiêm trọng.",
        newRule: "[Căn cứ: Điều 5 TT 44/2017/TT-BTC] Bảng giá tính thuế tài nguyên của UBND cấp tỉnh phải được xây dựng trên cơ sở tham khảo Bảng giá vật liệu xây dựng do Sở Xây dựng công bố hàng quý và giá thực tế giao dịch tại địa phương.",
        impactNote: "Giúp Kiểu Việt cân đối hài hòa giữa chi phí thuế tài nguyên kê khai và chi phí vật liệu đưa vào thanh toán dự toán công trình."
      },
      {
        topic: "Thẩm quyền và trách nhiệm rà soát điều chỉnh bảng giá tài nguyên cấp tỉnh",
        type: "added",
        oldRule: "UBND cấp tỉnh tự quyết định thời điểm điều chỉnh giá tính thuế tài nguyên mà không có quy định giám sát của Hội đồng nhân dân.",
        newRule: "[Căn cứ: Điều 6 TT 44/2017/TT-BTC] Định kỳ hàng năm hoặc khi giá thị trường biến động, Sở Tài chính chủ trì phối hợp với Cục Thuế và Sở TN-MT khảo sát giá thị trường, tham mưu UBND tỉnh điều chỉnh bảng giá phù hợp với Khung giá của Bộ Tài chính.",
        impactNote: "Kiểu Việt theo dõi các dự thảo điều chỉnh bảng giá tính thuế tài nguyên của Sở Tài chính để kịp thời có ý kiến phản hồi bảo vệ doanh nghiệp xây dựng."
      }
    ]
  },
  "nd-27-2023": {
    decreeId: "nd-27-2023",
    title: "Nghị định 27/2023/NĐ-CP",
    category: "Phí Bảo vệ môi trường với khai thác khoáng sản",
    compareWith: "Nghị định 164/2016/NĐ-CP",
    summary: "Nghị định 27/2023/NĐ-CP điều chỉnh tăng mức thu phí bảo vệ môi trường đối với khai thác khoáng sản: Tăng mức thu đối với đất san lấp lên 1.000 - 2.000 đ/m3, đá xây dựng lên 1.000 - 5.000 đ/m3.",
    items: [
      {
        topic: "Khung mức thu Phí bảo vệ môi trường đối với khoáng sản đất, đá, cát xây dựng",
        type: "modified",
        oldRule: "[Căn cứ: Biểu phí NĐ 164/2016] Mức thu phí BVMT đối với đất san lấp: 1.000 đ/m3; Đá xây dựng: từ 1.000 đến 3.000 đ/m3.",
        newRule: "[Căn cứ: Biểu khung mức thu phí NĐ 27/2023/NĐ-CP] Khung mức thu mới: Đất làm vật liệu san lấp, đất đắp nền: 1.000 đến 2.000 đ/m3; Đá làm vật liệu xây dựng thông thường: 1.000 đến 5.000 đ/m3; Cát vàng: 3.000 đến 5.000 đ/m3. HĐND cấp tỉnh ban hành mức thu cụ thể.",
        impactNote: "Kế toán Kiểu Việt cập nhật mức thu phí BVMT khoáng sản mới do HĐND tỉnh Gia Lai ban hành để đưa vào cơ cấu giá thành sản xuất đá và đất đắp."
      },
      {
        topic: "Phương pháp tính Phí bảo vệ môi trường đối với đất đá khai thác tận thu",
        type: "added",
        oldRule: "[Căn cứ: NĐ 164/2016] Chưa quy định rõ phương pháp tính phí BVMT khi đào móng công trình tận thu đất đá san lấp.",
        newRule: "[Căn cứ: Điều 6 NĐ 27/2023/NĐ-CP] Trường hợp tận thu khoáng sản từ các công trình xây dựng: Phí BVMT phải nộp tính theo sản lượng khoáng sản thực tế tận thu nhân với mức thu phí BVMT tương ứng; nếu đất đá tận thu chỉ sử dụng trong phạm vi công trình thì không phải nộp phí BVMT.",
        impactNote: "Kiểu Việt được miễn nộp phí BVMT đối với khối lượng đất đào móng cầu cống tái sử dụng đắp nền đường ngay trong gói thầu dự án."
      },
      {
        topic: "Thời hạn kê khai và nộp phí Bảo vệ môi trường định kỳ hàng tháng",
        type: "modified",
        oldRule: "[Căn cứ: NĐ 164/2016] Kê khai phí BVMT cùng tờ khai thuế tài nguyên nhưng thời hạn nộp chưa đồng bộ.",
        newRule: "[Căn cứ: Điều 7 NĐ 27/2023/NĐ-CP] Tổ chức khai thác khoáng sản nộp hồ sơ khai phí BVMT theo tháng chậm nhất là ngày 20 của tháng tiếp theo; thời hạn nộp tiền phí BVMT chậm nhất là ngày cuối cùng của thời hạn nộp hồ sơ khai phí.",
        impactNote: "Kế toán Kiểu Việt nộp Tờ khai phí BVMT Mẫu 01/PBVMT đồng thời với Tờ khai thuế tài nguyên đúng hạn ngày 20 hàng tháng."
      },
      {
        topic: "Trách nhiệm lắp đặt camera giám sát và trạm cân tại cửa mỏ khoáng sản",
        type: "added",
        oldRule: "[Căn cứ: NĐ 164/2016] Chưa bắt buộc trạm cân điện tử đối với các mỏ vật liệu xây dựng thông thường.",
        newRule: "[Căn cứ: Điều 8 NĐ 27/2023/NĐ-CP & Luật Khoáng sản] Bắt buộc tổ chức khai thác mỏ khoáng sản (trừ mỏ đất san lấp quy mô nhỏ) phải lắp đặt trạm cân điện tử và camera giám sát tại vị trí cửa mỏ; dữ liệu trạm cân được truyền về cơ quan thuế và Sở TN-MT để kiểm soát sản lượng chịu phí.",
        impactNote: "Kiểu Việt lắp đặt trạm cân điện tử 80 tấn tự động tại mỏ đá Gia Lai, kết nối dữ liệu số với phần mềm kế toán để minh bạch sản lượng chịu thuế."
      }
    ]
  },
  "nd-67-2019": {
    decreeId: "nd-67-2019",
    title: "Nghị định 67/2019/NĐ-CP",
    category: "Tiền cấp quyền khai thác khoáng sản",
    compareWith: "Nghị định 203/2013/NĐ-CP",
    summary: "Nghị định 67/2019/NĐ-CP sửa đổi phương pháp tính, mức thu và thủ tục thu nộp tiền cấp quyền khai thác khoáng sản: Quy định chi tiết công thức tính tiền cấp quyền (T), thời hạn nộp và cơ chế điều chỉnh số tiền nộp theo trữ lượng thực tế.",
    items: [
      {
        topic: "Công thức chuẩn tính Tiền cấp quyền khai thác khoáng sản (T = Q x G x K x R)",
        type: "modified",
        oldRule: "[Căn cứ: Điều 4 NĐ 203/2013/NĐ-CP] Công thức tính phức tạp, hệ số thu hồi khoáng sản K và giá tính tiền cấp quyền G chưa phản ánh đúng điều kiện khai thác mỏ lộ thiên.",
        newRule: "[Căn cứ: Điều 4 NĐ 67/2019/NĐ-CP] Công thức chuẩn: T = Q x G x K x R. Trong đó: Q là trữ lượng khoáng sản được phép khai thác (m3); G là giá tính tiền cấp quyền (lấy theo Bảng giá tính thuế tài nguyên); K là hệ số thu hồi khai thác; R là mức thu tiền cấp quyền (R = 5% đối với đá cát sỏi xây dựng; R = 3% đối với đất san lấp).",
        impactNote: "Kiểu Việt tính toán chính xác số tiền cấp quyền khai thác khoáng sản phải nộp trước khi xin cấp phép mỏ đất đắp cao tốc để hạch toán vào chi phí dự án."
      },
      {
        topic: "Phân kỳ nộp tiền cấp quyền khai thác khoáng sản hàng năm (Nộp 2 kỳ/năm)",
        type: "modified",
        oldRule: "[Căn cứ: NĐ 203/2013] Tiền cấp quyền thường bắt buộc nộp dồn một lần trong những năm đầu cấp phép, gây áp lực dòng tiền kiệt quệ cho nhà thầu.",
        newRule: "[Căn cứ: Điều 9 NĐ 67/2019/NĐ-CP] Tiền cấp quyền được phân bổ nộp hàng năm trong suốt thời hạn khai thác của giấy phép; mỗi năm nộp làm 02 kỳ: Kỳ 1 chậm nhất ngày 31/05 (nộp 50%) và Kỳ 2 chậm nhất ngày 31/10 (nộp 50%).",
        impactNote: "Giãn tiến độ nộp tiền cấp quyền theo từng kỳ 6 tháng một lần cho Kiểu Việt, giúp công ty cân đối dòng tiền chi trả theo doanh thu bán hàng thực tế."
      },
      {
        topic: "Điều chỉnh số tiền cấp quyền khai thác khoáng sản khi có biến động trữ lượng hoặc giá tính thuế",
        type: "added",
        oldRule: "[Căn cứ: NĐ 203/2013] Số tiền cấp quyền xác định cứng trong Quyết định ban đầu, không được điều chỉnh khi mỏ gặp sự cố địa chất.",
        newRule: "[Căn cứ: Điều 11 NĐ 67/2019/NĐ-CP] Được điều chỉnh số tiền cấp quyền trong các trường hợp: 1) Thay đổi Bảng giá tính thuế tài nguyên của tỉnh; 2) Trữ lượng thực tế khai thác giảm do điều kiện địa chất phức tạp; 3) Cơ quan nhà nước thu hồi một phần diện tích mỏ.",
        impactNote: "Kiểu Việt lập hồ sơ xin giảm trừ tiền cấp quyền khai thác mỏ đá nếu địa tầng gặp vỉa đá mồ côi hoặc sạt lở không thể khai thác hết trữ lượng phê duyệt."
      },
      {
        topic: "Thời hạn thẩm định và thông báo số tiền cấp quyền khai thác khoáng sản phải nộp",
        type: "added",
        oldRule: "Thời gian cơ quan thuế ban hành thông báo nộp tiền cấp quyền thường chậm trễ, dồn tích nhiều kỳ làm doanh nghiệp bị động dòng tiền.",
        newRule: "[Căn cứ: Điều 10 NĐ 67/2019/NĐ-CP] Quy định trong thời hạn không quá 10 ngày làm việc kể từ ngày nhận được văn bản phê duyệt của cơ quan có thẩm quyền, Cục Thuế phải ban hành Thông báo nộp tiền cấp quyền gửi cho doanh nghiệp.",
        impactNote: "Kiểu Việt chủ động nhận thông báo nộp tiền cấp quyền sớm để cân đối dòng tiền chi trả theo từng đợt quy định."
      }
    ]
  },
  "nd-22-2020": {
    decreeId: "nd-22-2020",
    title: "Nghị định 22/2020/NĐ-CP",
    category: "Miễn Lệ phí môn bài",
    compareWith: "Nghị định 139/2016/NĐ-CP",
    summary: "Nghị định 22/2020/NĐ-CP sửa đổi NĐ 139: Miễn lệ phí môn bài trong năm đầu thành lập cho doanh nghiệp mới, miễn cho chi nhánh thành lập trong thời gian DN được miễn và miễn cho cơ sở giáo dục.",
    items: [
      {
        topic: "Miễn lệ phí môn bài trong năm đầu thành lập (Từ 01/01 đến 31/12)",
        type: "added",
        oldRule: "[Căn cứ: NĐ 139/2016] Doanh nghiệp thành lập mới nếu trong 6 tháng đầu năm phải nộp 100% lệ phí môn bài; thành lập trong 6 tháng cuối năm nộp 50% lệ phí môn bài.",
        newRule: "[Căn cứ: Khoản 1 Điều 1 NĐ 22/2020/NĐ-CP] Miễn lệ phí môn bài trong năm đầu thành lập hoặc ra hoạt động sản xuất, kinh doanh (từ ngày 01 tháng 01 đến ngày 31 tháng 12) đối với tổ chức thành lập mới.",
        impactNote: "Các công ty con, công ty thành viên mới thành lập trong hệ sinh thái Kiểu Việt được miễn 100% lệ phí môn bài trong năm đầu hoạt động."
      },
      {
        topic: "Miễn lệ phí môn bài cho Chi nhánh, Văn phòng đại diện thành lập trong năm đầu",
        type: "added",
        oldRule: "[Căn cứ: NĐ 139/2016] Chi nhánh, địa điểm kinh doanh thành lập mới luôn phải nộp lệ phí môn bài 1.000.000 đồng/năm.",
        newRule: "[Căn cứ: Điểm c Khoản 1 Điều 1 NĐ 22/2020/NĐ-CP] Trong thời gian doanh nghiệp nhỏ và vừa được miễn lệ phí môn bài, chi nhánh, văn phòng đại diện, địa điểm kinh doanh của doanh nghiệp được thành lập trong thời gian này cũng được miễn lệ phí môn bài.",
        impactNote: "Kiểu Việt mở các Ban Điều hành dự án công trường, văn phòng hiện trường tại các tỉnh trong năm đầu thành lập công ty được miễn lệ phí môn bài."
      },
      {
        topic: "Hạn nộp Tờ khai lệ phí môn bài chuyển sang ngày 30/01 năm sau năm thành lập",
        type: "modified",
        oldRule: "[Căn cứ: NĐ 139/2016] Khai lệ phí môn bài một lần khi người nộp thuế mới ra hoạt động kinh doanh, chậm nhất là ngày cuối cùng của tháng bắt đầu hoạt động.",
        newRule: "[Căn cứ: Khoản 3 Điều 1 NĐ 22/2020/NĐ-CP] Doanh nghiệp mới thành lập nộp hồ sơ khai lệ phí môn bài chậm nhất là ngày 30 tháng 01 năm sau năm thành lập hoặc bắt đầu hoạt động sản xuất kinh doanh.",
        impactNote: "Kế toán Kiểu Việt có thêm thời gian đến tận ngày 30/01 năm sau để nộp tờ khai môn bài cho các đơn vị trực thuộc mới thành lập."
      },
      {
        topic: "Miễn lệ phí môn bài đối với cơ sở đào tạo nghề và cơ sở giáo dục",
        type: "added",
        oldRule: "[Căn cứ: NĐ 139/2016] Cơ sở giáo dục ngoài công lập vẫn phải nộp lệ phí môn bài theo mức vốn điều lệ.",
        newRule: "[Căn cứ: Điểm d Khoản 1 Điều 1 NĐ 22/2020/NĐ-CP] Miễn lệ phí môn bài đối với: Cơ sở giáo dục phổ thông công lập và cơ sở giáo dục mầm non công lập; cơ sở giáo dục nghề nghiệp ngoài công lập.",
        impactNote: "Trung tâm đào tạo tay nghề thợ vận hành máy xúc, máy ủi nội bộ của Kiểu Việt được hưởng chính sách miễn lệ phí môn bài."
      }
    ]
  },
  "nd-139-2016": {
    decreeId: "nd-139-2016",
    title: "Nghị định 139/2016/NĐ-CP",
    category: "Quy định Lệ phí môn bài",
    compareWith: "Pháp lệnh thuế Môn bài và Thông tư 96/2002/TT-BTC",
    summary: "Nghị định 139/2016/NĐ-CP chuyển đổi Thuế môn bài sang Lệ phí môn bài: Chuẩn hóa 3 bậc mức thu theo vốn điều lệ (3 triệu, 2 triệu, 1 triệu đồng/năm), mức thu 1 triệu đồng cho chi nhánh và thời hạn nộp ngày 30/01 hàng năm.",
    items: [
      {
        topic: "Ba bậc mức thu Lệ phí môn bài theo vốn điều lệ ghi trên Giấy chứng nhận ĐKKD (Điều 4)",
        type: "modified",
        oldRule: "[Căn cứ: Thông tư 96/2002/TT-BTC] Thuế môn bài cũ gồm 4 bậc: Bậc 1 (trên 10 tỷ: 3tr), Bậc 2 (5-10 tỷ: 2tr), Bậc 3 (2-5 tỷ: 1.5tr), Bậc 4 (dưới 2 tỷ: 1tr).",
        newRule: "[Căn cứ: Khoản 1 Điều 4 NĐ 139/2016/NĐ-CP] Thu gọn còn 3 bậc mức thu: 1) Tổ chức có vốn điều lệ hoặc vốn đầu tư trên 10 tỷ đồng: 3.000.000 đồng/năm; 2) Tổ chức có vốn điều lệ từ 10 tỷ đồng trở xuống: 2.000.000 đồng/năm; 3) Chi nhánh, văn phòng đại diện, địa điểm kinh doanh: 1.000.000 đồng/năm.",
        impactNote: "Công ty Cổ phần Kiểu Việt có vốn điều lệ trên 10 tỷ đồng nộp mức lệ phí môn bài 3.000.000 đồng/năm; các chi nhánh mỏ đá, xưởng sản xuất nộp 1.000.000 đồng/năm/chi nhánh."
      },
      {
        topic: "Thời hạn nộp Lệ phí môn bài hàng năm chậm nhất là ngày 30 tháng 01",
        type: "modified",
        oldRule: "[Căn cứ: TT 96/2002] Nộp thuế môn bài chậm nhất ngày 31/01 hàng năm.",
        newRule: "[Căn cứ: Khoản 9 Điều 18 NĐ 126/2020 & NĐ 139/2016] Thời hạn nộp lệ phí môn bài chậm nhất là ngày 30 tháng 01 hàng năm. Doanh nghiệp đã nộp tờ khai môn bài một lần thì các năm sau không phải nộp lại tờ khai nếu không thay đổi vốn điều lệ.",
        impactNote: "Kế toán Kiểu Việt cài đặt nộp điện tử Lệ phí môn bài trước ngày 30/01 hàng năm qua Cổng Thuế điện tử nộp thuế tự động."
      },
      {
        topic: "Quy định mức thu 50% lệ phí môn bài khi thành lập trong 6 tháng cuối năm",
        type: "modified",
        oldRule: "[Căn cứ: TT 96/2002] Cách tính thuế môn bài nửa năm cũ gây tranh cãi về thời điểm bắt đầu tính.",
        newRule: "[Căn cứ: Khoản 3 Điều 4 NĐ 139/2016/NĐ-CP] Trường hợp thành lập, được cấp đăng ký thuế và mã số thuế trong thời gian 6 tháng cuối năm (từ ngày 01/07 trở đi) thì nộp 50% mức lệ phí môn bài cả năm (sau khi hết thời gian được miễn môn bài theo NĐ 22/2020).",
        impactNote: "Áp dụng cho các chi nhánh Kiểu Việt thành lập sau ngày 01/07 các năm tiếp theo để nộp 500.000 đồng cho nửa năm hoạt động."
      },
      {
        topic: "Xử lý khi thay đổi vốn điều lệ ảnh hưởng đến bậc Lệ phí môn bài",
        type: "added",
        oldRule: "[Căn cứ: TT 96/2002] Thay đổi vốn phải làm lại thủ tục kê khai thuế môn bài hàng năm.",
        newRule: "[Căn cứ: Khoản 1 Điều 10 Nghị định 126/2020 & NĐ 139/2016] Khi có thay đổi về vốn điều lệ làm thay đổi bậc lệ phí môn bài phải nộp: Người nộp thuế phải nộp hồ sơ khai lệ phí môn bài chậm nhất là ngày 30 tháng 01 năm sau năm phát sinh thông tin thay đổi.",
        impactNote: "Khi Kiểu Việt tăng vốn điều lệ lên trên 10 tỷ đồng hoặc ngược lại, kế toán chủ động nộp Tờ khai điều chỉnh môn bài trước ngày 30/01 năm sau."
      }
    ]
  },
  "luat-gd-dien-tu-20-2023": {
    decreeId: "luat-gd-dien-tu-20-2023",
    title: "Luật Giao dịch điện tử số 20/2023/QH15",
    category: "Luật Giao dịch điện tử mới",
    compareWith: "Luật Giao dịch điện tử số 51/2005/QH11",
    summary: "Luật Giao dịch điện tử 20/2023/QH15 (áp dụng từ 01/07/2024) tạo hành lang pháp lý hoàn chỉnh cho kinh tế số: Công nhận giá trị pháp lý thông điệp dữ liệu, phân loại chữ ký điện tử an toàn và thừa nhận hợp đồng điện tử toàn diện.",
    items: [
      {
        topic: "Công nhận giá trị pháp lý của Thông điệp dữ liệu như văn bản gốc (Điều 9)",
        type: "modified",
        oldRule: "[Căn cứ: Điều 14 Luật 51/2005] Giá trị làm chứng của thông điệp dữ liệu còn bị hạn chế, khi có tranh chấp tòa án vẫn đòi hỏi văn bản giấy gốc.",
        newRule: "[Căn cứ: Điều 9 & Điều 10 Luật 20/2023/QH15] Thông điệp dữ liệu có giá trị như văn bản gốc nếu bảo đảm tính toàn vẹn của thông tin kể từ khi được khởi tạo lần đầu dưới dạng thông điệp dữ liệu hoàn chỉnh và thông tin có thể truy cập, sử dụng được dưới dạng hoàn chỉnh.",
        impactNote: "Kiểu Việt số hóa toàn bộ hồ sơ quản lý chất lượng công trình, nhật ký thi công điện tử, biên bản nghiệm thu; các file dữ liệu số có giá trị pháp lý 100% trước cơ quan thanh tra và Tòa án."
      },
      {
        topic: "Phân loại rõ Chữ ký điện tử chuyên dùng, Chữ ký số công cộng và Chữ ký số chuyên dùng",
        type: "added",
        oldRule: "[Căn cứ: Luật 51/2005] Quy định chữ ký điện tử chung chung, không phân định giữa chữ ký scan, chữ ký hình ảnh và chữ ký số mật mã.",
        newRule: "[Căn cứ: Điều 21 & Điều 22 Luật 20/2023/QH15] Phân loại rõ ràng 3 cấp độ: 1) Chữ ký điện tử chuyên dùng; 2) Chữ ký số công cộng (VNPT, Viettel...); 3) Chữ ký số chuyên dùng công vụ. Chữ ký số là chữ ký điện tử an toàn đáp ứng điều kiện bảo mật cao nhất, có giá trị tương đương chữ ký tay và con dấu pháp nhân.",
        impactNote: "Kiểu Việt trang bị Chữ ký số HSM cho Kế toán trưởng và Giám đốc để ký hóa đơn, hợp đồng; trang bị chữ ký số cá nhân cho các kỹ sư hiện trường ký hồ sơ hoàn công."
      },
      {
        topic: "Hiệu lực pháp lý của Hợp đồng điện tử trong hoạt động xây dựng và thương mại",
        type: "added",
        oldRule: "[Căn cứ: Luật 51/2005] Chưa có quy định chi tiết về việc ký kết và thực hiện hợp đồng điện tử tự động (Smart Contracts).",
        newRule: "[Căn cứ: Điều 34-38 Luật 20/2023/QH15] Giá trị pháp lý của hợp đồng điện tử không thể bị phủ nhận chỉ vì hợp đồng đó được thể hiện dưới dạng thông điệp dữ liệu; các bên có quyền thỏa thuận sử dụng phương tiện điện tử để giao kết và thực hiện hợp đồng toàn phần hoặc một phần.",
        impactNote: "Kiểu Việt ký kết 100% hợp đồng mua bán vật liệu xây dựng và hợp đồng giao khoán nhà thầu phụ qua nền tảng hợp đồng điện tử, tiết kiệm hàng tuần luân chuyển bưu điện."
      },
      {
        topic: "Quy định điều kiện chuyển đổi giữa Văn bản giấy và Thông điệp dữ liệu (Điều 12)",
        type: "modified",
        oldRule: "[Căn cứ: Điều 15 Luật 51/2005] Quy định chuyển đổi văn bản giấy sang dữ liệu điện tử rất khắt khe.",
        newRule: "[Căn cứ: Điều 12 Luật 20/2023/QH15] Thông điệp dữ liệu được chuyển đổi từ văn bản giấy phải đáp ứng điều kiện: Phản ánh đầy đủ nội dung của văn bản giấy; có ký hiệu riêng xác nhận đã được chuyển đổi từ văn bản giấy; và thông tin về người thực hiện chuyển đổi.",
        impactNote: "Kiểu Việt scan toàn bộ hồ sơ thiết kế kỹ thuật, bản vẽ thi công giấy cũ sang file PDF lưu trữ điện tử có đóng dấu 'Bản scan điện tử chuyển đổi từ bản gốc' hợp pháp."
      }
    ]
  },
  "luat-thue-xnk-107-2016": {
    decreeId: "luat-thue-xnk-107-2016",
    title: "Luật Thuế XNK số 107/2016/QH13",
    category: "Luật Thuế Xuất khẩu, thuế Nhập khẩu",
    compareWith: "Luật Thuế XNK số 45/2005/QH11",
    summary: "Luật Thuế XNK 107/2016/QH13 quy định chính sách thuế hải quan: Miễn thuế nhập khẩu máy móc, thiết bị thi công tạo tài sản cố định cho dự án ưu đãi đầu tư và thủ tục hoàn thuế xuất nhập khẩu.",
    items: [
      {
        topic: "Miễn thuế nhập khẩu máy móc, thiết bị nhập khẩu tạo Tài sản cố định (Điều 16)",
        type: "modified",
        oldRule: "[Căn cứ: Luật 45/2005] Danh mục máy móc được miễn thuế nhập khẩu hạn chế, thủ tục thẩm định danh mục trong nước chưa sản xuất được rất rườm rà.",
        newRule: "[Căn cứ: Khoản 11 Điều 16 Luật 107/2016/QH13] Miễn thuế nhập khẩu đối với: Hàng hóa nhập khẩu để tạo tài sản cố định của đối tượng được hưởng ưu đãi đầu tư gồm máy móc, thiết bị; phương tiện vận tải chuyên dùng trong dây chuyền công nghệ trong nước chưa sản xuất được; vật tư xây dựng trong nước chưa sản xuất được.",
        impactNote: "Kiểu Việt được miễn 100% thuế nhập khẩu khi nhập khẩu máy khoan hầm, dây chuyền nghiền đá siêu mịn của Nhật Bản/Hàn Quốc tạo tài sản cố định cho dự án mỏ."
      },
      {
        topic: "Thời hạn nộp thuế đối với hàng hóa xuất khẩu, nhập khẩu (Phải nộp trước khi thông quan)",
        type: "modified",
        oldRule: "[Căn cứ: Luật 45/2005] Từng áp dụng thời hạn ân hạn nộp thuế 30 ngày hoặc 275 ngày đối với nguyên liệu sản xuất.",
        newRule: "[Căn cứ: Điều 9 Luật 107/2016/QH13] Hàng hóa xuất khẩu, nhập khẩu thuộc đối tượng chịu thuế phải nộp thuế trước khi thông quan hoặc giải phóng hàng hóa; trừ trường hợp được tổ chức tín dụng bảo lãnh nộp tiền thuế thì thời hạn nộp thuế theo thời hạn bảo lãnh (tối đa không quá 30 ngày).",
        impactNote: "Kế toán xuất nhập khẩu Kiểu Việt mở bảo lãnh nộp thuế tại ngân hàng thương mại để thông quan nhanh phụ tùng thay thế xe máy thi công mà không bị đọng hàng ở cảng."
      },
      {
        topic: "Thủ tục hoàn thuế xuất nhập khẩu đối với máy móc tạm nhập - tái xuất thi công dự án",
        type: "modified",
        oldRule: "[Căn cứ: Luật 45/2005] Thủ tục hoàn thuế tạm nhập tái xuất kéo dài qua nhiều cấp xét duyệt.",
        newRule: "[Căn cứ: Điều 19 Luật 107/2016/QH13] Hàng hóa là máy móc, thiết bị tạm nhập, tái xuất để phục vụ thi công công trình, dự án đầu tư được hoàn lại số thuế nhập khẩu đã nộp tương ứng với thời gian thực tế sử dụng tại Việt Nam khi tái xuất ra nước ngoài.",
        impactNote: "Khi Kiểu Việt thuê tạm nhập các thiết bị thi công đặc thù từ nước ngoài để thi công gói thầu dự án, khi xuất trả lại đối tác nước ngoài sẽ được hoàn thuế nhập khẩu tương ứng."
      },
      {
        topic: "Quy định áp dụng Biểu thuế xuất khẩu, Biểu thuế nhập khẩu ưu đãi đặc biệt (FTA)",
        type: "added",
        oldRule: "[Căn cứ: Luật 45/2005] Chỉ quy định Biểu thuế ưu đãi (MFN) thông thường.",
        newRule: "[Căn cứ: Điều 5 & Điều 11 Luật 107/2016/QH13] Áp dụng thuế suất ưu đãi đặc biệt (thường là 0%) đối với hàng hóa nhập khẩu có Giấy chứng nhận xuất xứ (C/O Mẫu D, E, AK, AJ, EVFTA...) từ các quốc gia ký Hiệp định thương mại tự do với Việt Nam.",
        impactNote: "Kiểu Việt yêu cầu nhà cung cấp nước ngoài cấp C/O form chuẩn để áp dụng thuế suất thuế nhập khẩu 0% cho các phụ tùng xe máy công trình nhập khẩu."
      }
    ]
  }
};

fs.writeFileSync('src/data/diffs/group5_resources_fees_general.ts', 
  `import { DecreeDiffData } from '../diff-types';\n\nexport const group5ResourcesFeesGeneral: Record<string, DecreeDiffData> = ${JSON.stringify(group5, null, 2)};\n`, 
  'utf8'
);
console.log('Group 5 updated with deep legal citations, numbers, and accounts!');
