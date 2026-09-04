const fs = require('fs');

const group5 = {
  "tt-48-2019": {
    decreeId: "tt-48-2019",
    title: "Thông tư 48/2019/TT-BTC",
    category: "Trích lập dự phòng",
    compareWith: "Thông tư 228/2009/TT-BTC",
    summary: "Hướng dẫn trích lập và xử lý các khoản dự phòng giảm giá hàng tồn kho, tổn thất đầu tư, nợ phải thu khó đòi tại doanh nghiệp; bãi bỏ dự phòng bảo hành công trình xây dựng theo chế độ thuế.",
    items: [
      {
        topic: "Mức trích lập dự phòng nợ phải thu khó đòi theo 4 mốc thời gian quá hạn",
        type: "modified",
        oldRule: "Quy định trích lập chung chung, doanh nghiệp tự ước lượng tỷ lệ dẫn đến tranh cãi với đoàn thanh tra thuế.",
        newRule: "Quy định khung 4 mốc tỷ lệ trích lập cứng: 30% giá trị (quá hạn từ 6 tháng đến dưới 1 năm); 50% giá trị (quá hạn từ 1 năm đến dưới 2 năm); 70% giá trị (quá hạn từ 2 năm đến dưới 3 năm); 100% giá trị (quá hạn từ 3 năm trở lên).",
        impactNote: "Kiểu Việt có căn cứ pháp lý vững chắc trích dự phòng cho các khoản công nợ tồn đọng từ các chủ đầu tư chậm thanh toán, đưa vào chi phí hợp lý được trừ."
      },
      {
        topic: "Bãi bỏ việc trích lập dự phòng bảo hành công trình xây dựng theo chế độ thuế",
        type: "removed",
        oldRule: "Thông tư 228 cho phép nhà thầu xây dựng trích trước tối đa 5% giá trị hợp đồng để lập quỹ dự phòng bảo hành công trình tính vào chi phí được trừ.",
        newRule: "Bãi bỏ hoàn toàn việc trích lập dự phòng bảo hành công trình xây lắp tính vào chi phí được trừ khi xác định thuế TNDN; chi phí bảo hành thực tế phát sinh kỳ nào thì hạch toán vào chi phí kỳ đó.",
        impactNote: "Kế toán Kiểu Việt chỉ hạch toán chi phí bảo hành công trình khi có chứng từ sửa chữa, thay thế vật tư thực tế tại hiện trường, không trích trước chi phí ảo."
      },
      {
        topic: "Điều kiện trích lập dự phòng giảm giá hàng tồn kho (Vật tư, sắt thép)",
        type: "modified",
        oldRule: "Căn cứ theo giá thị trường tự thu thập từ các báo giá bán lẻ.",
        newRule: "Phải có bằng chứng tin cậy về việc suy giảm Giá trị thuần có thể thực hiện được (NRV) thấp hơn giá gốc tại ngày lập BCTC và hàng tồn kho phải thuộc quyền sở hữu hợp pháp của doanh nghiệp.",
        impactNote: "Kiểu Việt lập Hội đồng đánh giá chất lượng và giá trị vật tư sắt thép tồn kho cuối năm để trích lập dự phòng hợp lệ."
      },
      {
        topic: "Hồ sơ bắt buộc khi xử lý xóa sổ khoản nợ không có khả năng thu hồi",
        type: "added",
        oldRule: "Doanh nghiệp tự làm biên bản nội bộ để xóa nợ và tính thẳng vào chi phí.",
        newRule: "Bắt buộc phải có: Biên bản đối chiếu công nợ; Quyết định tuyên bố phá sản của Tòa án; hoặc Giấy chứng tử của cá nhân; hoặc Thông báo truy nã/bỏ trốn của cơ quan công an.",
        impactNote: "Kiểu Việt lưu trữ đầy đủ hồ sơ pháp lý đòi nợ trước khi thực hiện xóa sổ các khoản công nợ thầu phụ không thể thu hồi."
      }
    ]
  },
  "luat-54-2024-khoangsan": {
    decreeId: "luat-54-2024-khoangsan",
    title: "Luật Địa chất và Khoáng sản số 54/2024/QH15",
    category: "Luật Khoáng sản (Mới)",
    compareWith: "Luật Khoáng sản số 60/2010/QH12",
    summary: "Cải cách thể chế tài nguyên khoáng sản: Phân loại 4 nhóm khoáng sản, cơ chế cấp phép khai thác đất đắp vật liệu san lấp công trình trọng điểm theo thủ tục rút gọn, phân cấp mạnh cho địa phương và tính tiền cấp quyền theo sản lượng thực tế.",
    items: [
      {
        topic: "Phân loại khoáng sản thành 4 nhóm theo công dụng và giá trị quản lý",
        type: "modified",
        oldRule: "Khoáng sản chỉ phân chia chung chung thành khoáng sản kim loại, phi kim loại, nước khoáng mà không có cơ chế quản lý riêng cho vật liệu xây dựng.",
        newRule: "Phân chia thành 4 nhóm cụ thể: Nhóm I (khoáng sản chiến lược, kim loại quý); Nhóm II (vật liệu xây dựng công nghiệp); Nhóm III (vật liệu xây dựng thông thường); Nhóm IV (đất san lấp, đất đắp công trình).",
        impactNote: "Tạo hành lang pháp lý thông thoáng cho Kiểu Việt xin cấp phép khai thác các mỏ đất đắp (Nhóm IV) phục vụ trực tiếp các dự án đường giao thông."
      },
      {
        topic: "Cơ chế cấp phép khai thác khoáng sản làm vật liệu san lấp theo thủ tục rút gọn",
        type: "added",
        oldRule: "Mọi mỏ đất đắp san lấp đều phải trải qua quy trình đấu giá, thăm dò, phê duyệt trữ lượng kéo dài từ 2 đến 3 năm.",
        newRule: "Cho phép cấp phép khai thác khoáng sản Nhóm IV phục vụ các công trình hạ tầng giao thông trọng điểm theo cơ chế chỉ định thầu khai thác trực tiếp cho nhà thầu thi công.",
        impactNote: "Kiểu Việt được giao mỏ đất đắp ngay tại chân công trình, giảm 70% thời gian chờ đợi cấp phép và chủ động 100% nguồn vật liệu san lấp."
      },
      {
        topic: "Tính tiền cấp quyền khai thác khoáng sản theo sản lượng thực tế",
        type: "modified",
        oldRule: "Tính tiền cấp quyền khai thác khoáng sản dựa trên trữ lượng địa chất phê duyệt trên giấy tờ cấp phép, gây thiệt hại lớn cho doanh nghiệp nếu trữ lượng thực tế ít hơn.",
        newRule: "Chuyển sang phương thức thu tiền cấp quyền khai thác khoáng sản căn cứ trên khối lượng sản phẩm khoáng sản thực tế khai thác được đo đếm qua trạm cân và camera giám sát.",
        impactNote: "Kiểu Việt chỉ phải nộp tiền cấp quyền cho đúng khối lượng đất đá thực tế đào đắp vào công trình, không phải nộp tiền cho khối lượng ảo."
      },
      {
        topic: "Bắt buộc lắp đặt trạm cân và camera giám sát tại cửa mỏ khoáng sản",
        type: "added",
        oldRule: "Kê khai khối lượng khai thác thủ công bằng sổ nhật ký mỏ.",
        newRule: "Bắt buộc 100% các mỏ khai thác khoáng sản phải lắp đặt trạm cân tải trọng và camera giám sát truyền dữ liệu trực tiếp về Sở TN&MT và Cơ quan Thuế.",
        impactNote: "Kiểu Việt đầu tư hệ thống trạm cân điện tử tự động tại các mỏ vật liệu để chuẩn hóa dữ liệu khối lượng vận chuyển vào công trình."
      }
    ]
  },
  "nd-193-2025-khoangsan": {
    decreeId: "nd-193-2025-khoangsan",
    title: "Nghị định 193/2025/NĐ-CP",
    category: "Quy chế khai thác mỏ vật liệu công trình",
    compareWith: "Nghị định 158/2016/NĐ-CP",
    summary: "Hướng dẫn thi hành cơ chế đặc thù khai thác mỏ vật liệu xây dựng thông thường phục vụ các dự án hạ tầng giao thông quốc gia, rút ngắn thủ tục đánh giá tác động môi trường và bàn giao mặt bằng mỏ.",
    items: [
      {
        topic: "Cơ chế giao mỏ vật liệu trực tiếp cho nhà thầu thi công gói thầu xây lắp",
        type: "added",
        oldRule: "Nhà thầu phải mua đất đắp qua các đơn vị thương mại trung gian với giá bị thổi phồng gấp nhiều lần.",
        newRule: "Nhà thầu trúng thầu gói thầu xây lắp được quyền nộp hồ sơ xin cấp phép khai thác mỏ khoáng sản nằm trong hồ sơ khảo sát mỏ vật liệu của dự án mà không phải qua đấu giá quyền khai thác.",
        impactNote: "Kiểu Việt tự chủ toàn bộ nguồn cung đất đắp nền đường, kiểm soát 100% chất lượng cơ lý của đất và tiết kiệm hàng chục tỷ đồng chi phí mua vật tư."
      },
      {
        topic: "Rút ngắn thời gian thẩm định Báo cáo đánh giá tác động môi trường (ĐTM)",
        type: "modified",
        oldRule: "Quy trình thẩm định ĐTM mỏ khoáng sản kéo dài từ 6 tháng đến 1 năm qua nhiều hội đồng thẩm định.",
        newRule: "Áp dụng quy trình thẩm định rút gọn trong vòng tối đa 30 ngày làm việc đối với các mỏ vật liệu phục vụ dự án khẩn cấp quốc gia.",
        impactNote: "Kiểu Việt đưa mỏ vật liệu vào khai thác ngay trong tháng đầu khởi công dự án, không bị nghẽn tiến độ đắp nền đường."
      },
      {
        topic: "Trách nhiệm phục hồi môi trường và hoàn trả mặt bằng sau khi hoàn thành dự án",
        type: "modified",
        oldRule: "Thủ tục đóng cửa mỏ và hoàn trả tiền ký quỹ cải tạo môi trường kéo dài nhiều năm sau khi kết thúc công trình.",
        newRule: "Quy định nghiệm thu hoàn trả mặt bằng mỏ đồng thời với thời điểm nghiệm thu hoàn thành đưa công trình vào sử dụng và hoàn trả ngay tiền ký quỹ môi trường.",
        impactNote: "Kiểu Việt thu hồi nhanh khoản tiền ký quỹ môi trường nộp tại Quỹ Bảo vệ môi trường địa phương sau khi hoàn thành gói thầu."
      }
    ]
  },
  "qd-87-2025-gialai": {
    decreeId: "qd-87-2025-gialai",
    title: "Quyết định 87/2025/QĐ-UBND",
    category: "Bảng giá tính thuế tài nguyên 2026 (Gia Lai)",
    compareWith: "Quyết định giá tính thuế tài nguyên các năm trước",
    summary: "Ban hành Bảng giá tính thuế tài nguyên năm 2026 trên địa bàn tỉnh Gia Lai: Cập nhật giá tính thuế đá xây dựng, cát san lấp, đất đắp công trình bám sát giá thị trường khu vực Tây Nguyên.",
    items: [
      {
        topic: "Cập nhật bảng giá tính thuế tài nguyên đối với đất đắp san lấp công trình",
        type: "modified",
        oldRule: "Giá tính thuế tài nguyên đất san lấp cũ ở mức thấp (từ 35.000 - 45.000 đ/m3).",
        newRule: "Điều chỉnh khung giá tính thuế tài nguyên đối với đất khai thác làm vật liệu san lấp mặt bằng, đắp nền đường lên mức phù hợp với mặt bằng thị trường năm 2026.",
        impactNote: "Kế toán Kiểu Việt áp dụng chính xác đơn giá tính thuế tài nguyên khi khai Tờ khai thuế tài nguyên Mẫu 01/TAIN tại Cục Thuế tỉnh Gia Lai."
      },
      {
        topic: "Giá tính thuế tài nguyên đối với đá hộc, đá dăm làm bê tông",
        type: "modified",
        oldRule: "Bảng giá cũ chưa phân loại chi tiết các loại đá nghiền sàng (đá 1x2, đá 2x4, đá 4x6, đá mi sàng).",
        newRule: "Quy định chi tiết đơn giá tính thuế tài nguyên cho từng quy cách đá thành phẩm sau nổ mìn và chế biến tại mỏ.",
        impactNote: "Kiểu Việt bóc tách chính xác chi phí thuế tài nguyên trong cơ cấu đơn giá sản xuất bê tông nhựa và bê tông xi măng phục vụ dự án cao tốc Tây Nguyên."
      },
      {
        topic: "Quy định hệ số quy đổi từ thể tích nguyên khai sang thể tích nở rời",
        type: "added",
        oldRule: "Chưa có quy định hệ số quy đổi chuẩn, gây tranh cãi giữa cơ quan thuế và nhà thầu khi đo đếm trên thùng xe tải.",
        newRule: "Ban hành bảng hệ số quy đổi chuẩn từ đất đá nguyên khai (tại mỏ) sang đất đá nở rời (trên phương tiện vận chuyển: hệ số K = 1.20 - 1.25).",
        impactNote: "Bảo đảm Kiểu Việt kê khai đúng khối lượng nguyên khai chịu thuế, không bị tính thuế áp đặt trên khối lượng nở rời của xe ben."
      }
    ]
  },
  "tt-152-2015": {
    decreeId: "tt-152-2015",
    title: "Thông tư 152/2015/TT-BTC",
    category: "Thuế Tài nguyên",
    compareWith: "Thông tư 105/2010/TT-BTC",
    summary: "Thông tư căn bản hướng dẫn về thuế tài nguyên: Quy định người nộp thuế, phương pháp xác định sản lượng tài nguyên tính thuế, giá tính thuế tài nguyên tại nơi khai thác và biểu mức thuế suất cho khoáng sản xây dựng.",
    items: [
      {
        topic: "Xác định người nộp thuế tài nguyên trong hợp đồng hợp tác kinh doanh",
        type: "modified",
        oldRule: "Trách nhiệm nộp thuế tài nguyên trong các liên danh khai thác mỏ thường chồng chéo.",
        newRule: "Tổ chức, cá nhân đứng tên trên Giấy phép khai thác khoáng sản là người nộp thuế tài nguyên; trường hợp liên doanh phân chia sản phẩm thì các bên tự nộp theo phần sản phẩm nhận được.",
        impactNote: "Kiểu Việt xác định rõ nghĩa vụ thuế tài nguyên trong các hợp đồng liên danh khai thác mỏ đá, mỏ đất với đối tác địa phương."
      },
      {
        topic: "Phương pháp xác định sản lượng tài nguyên tính thuế thực tế",
        type: "modified",
        oldRule: "Ước lượng sản lượng khai thác dựa trên số ca máy hoạt động.",
        newRule: "Sản lượng tài nguyên tính thuế là số lượng, trọng lượng hoặc thể tích tài nguyên thực tế khai thác trong kỳ ghi nhận trên hóa đơn bán hàng, phiếu cân đo hoặc chứng từ vận chuyển hợp pháp.",
        impactNote: "Kế toán Kiểu Việt căn cứ vào số liệu phiếu cân điện tử hàng ngày để tổng hợp sản lượng khai thác kê khai tờ khai tháng."
      },
      {
        topic: "Xác định giá tính thuế tài nguyên tại nơi khai thác",
        type: "added",
        oldRule: "Giá tính thuế thường bị cơ quan thuế tính theo giá bán đã bao gồm cả chi phí vận chuyển đến công trường.",
        newRule: "Giá tính thuế tài nguyên là giá bán đơn vị sản phẩm tài nguyên chưa bao gồm thuế GTGT tại nơi khai thác (không bao gồm chi phí vận chuyển từ mỏ về công trường thi công).",
        impactNote: "Kiểu Việt bóc tách riêng chi phí vận chuyển ra khỏi giá vật tư để giảm số thuế tài nguyên phải nộp tại cửa mỏ một cách hợp pháp."
      },
      {
        topic: "Biểu thuế suất thuế tài nguyên đối với khoáng sản làm VLXD",
        type: "modified",
        oldRule: "Thuế suất cũ quy định biên độ dao động rộng do UBND tỉnh tự quyết định.",
        newRule: "Quy định mức thuế suất thống nhất: Đất khai thác san lấp (5% - 7%), Đá cát sỏi xây dựng (7% - 10%), Khoáng sản kim loại (10% - 15%).",
        impactNote: "Kiểu Việt lập dự toán ngân sách thuế tài nguyên chính xác khi tham gia đấu thầu các dự án có mỏ khoáng sản đi kèm."
      }
    ]
  },
  "tt-44-2017": {
    decreeId: "tt-44-2017",
    title: "Thông tư 44/2017/TT-BTC",
    category: "Khung giá tính thuế tài nguyên",
    compareWith: "Quy định khung giá cũ",
    summary: "Ban hành Khung giá tính thuế tài nguyên thống nhất toàn quốc: Quy định mức giá tối thiểu và giá tối đa cho từng nhóm khoáng sản, khống chế quyền ban hành bảng giá của UBND cấp tỉnh.",
    items: [
      {
        topic: "Ban hành Khung giá tính thuế tài nguyên toàn quốc",
        type: "added",
        oldRule: "Các địa phương tự ban hành bảng giá tính thuế tài nguyên tùy tiện, chênh lệch nhau nhiều lần giữa các tỉnh giáp ranh.",
        newRule: "Bộ Tài chính ban hành Khung giá chuẩn gồm mức giá tối thiểu và mức giá tối đa cho hàng trăm nhóm tài nguyên khoáng sản trên toàn lãnh thổ Việt Nam.",
        impactNote: "Tạo cơ sở pháp lý minh bạch để Kiểu Việt so sánh chi phí thuế tài nguyên khi thi công liên tỉnh giữa Bình Định, Gia Lai, Phú Yên."
      },
      {
        topic: "Khống chế quyền ban hành bảng giá tính thuế tài nguyên của UBND cấp tỉnh",
        type: "modified",
        oldRule: "UBND cấp tỉnh được tự quyết định giá tính thuế mà không bị ràng buộc trần sàn.",
        newRule: "Bảng giá tính thuế tài nguyên do UBND cấp tỉnh ban hành không được thấp hơn mức giá tối thiểu và không được cao hơn mức giá tối đa quy định tại Khung giá của Bộ Tài chính.",
        impactNote: "Bảo vệ Kiểu Việt khỏi nguy cơ bị địa phương áp đặt mức thuế tài nguyên bất hợp lý vượt quá khung pháp lý của Chính phủ."
      },
      {
        topic: "Cơ chế điều chỉnh Khung giá khi thị trường biến động trên 20%",
        type: "added",
        oldRule: "Khung giá cố định qua nhiều năm dù giá vật liệu xây dựng trên thị trường tăng phi mã.",
        newRule: "Khi giá bán tài nguyên trên thị trường phổ biến biến động tăng hoặc giảm từ 20% trở lên so với mức giá trong Khung giá, UBND cấp tỉnh có trách nhiệm gửi văn bản đề nghị Bộ Tài chính điều chỉnh khung giá.",
        impactNote: "Kiểu Việt chủ động kiến nghị thông qua Hiệp hội Doanh nghiệp địa phương để điều chỉnh khung giá sát với thực tế khi thị trường suy giảm."
      }
    ]
  },
  "nd-27-2023": {
    decreeId: "nd-27-2023",
    title: "Nghị định 27/2023/NĐ-CP",
    category: "Phí Bảo vệ môi trường khoáng sản",
    compareWith: "Nghị định 164/2016/NĐ-CP",
    summary: "Quy định mức thu, chế độ thu, nộp, quản lý và sử dụng Phí bảo vệ môi trường đối với khai thác khoáng sản: Tăng mức thu phí đối với đất cát sỏi san lấp và quy định kê khai định kỳ cùng thuế tài nguyên.",
    items: [
      {
        topic: "Tăng mức thu Phí bảo vệ môi trường đối với đất san lấp công trình",
        type: "modified",
        oldRule: "Mức thu phí BVMT đối với đất khai thác làm vật liệu san lấp mặt bằng theo NĐ 164 từ 1.000 đến 2.000 đ/m3.",
        newRule: "Điều chỉnh khung mức thu phí BVMT đối với đất khai thác để san lấp, xây dựng công trình từ 1.000 đến 2.000 đ/m3; đất sét làm gạch ngói từ 1.500 đến 2.500 đ/m3.",
        impactNote: "Kế toán Kiểu Việt tính đúng chi phí phí BVMT nộp ngân sách địa phương nơi khai thác mỏ đất thi công."
      },
      {
        topic: "Khung mức thu phí BVMT đối với đá cát sỏi xây dựng",
        type: "modified",
        oldRule: "Khung mức thu cũ đối với đá dăm là 1.000 - 5.000 đ/m3; cát vàng từ 3.000 - 5.000 đ/m3.",
        newRule: "Quy định mức thu phí BVMT: Đá xây dựng thông thường (1.000 - 5.000 đ/m3); Cát sỏi các loại (3.000 - 7.000 đ/m3) do HĐND cấp tỉnh quyết định cụ thể.",
        impactNote: "Kiểu Việt cập nhật Nghị quyết HĐND tỉnh Bình Định và Gia Lai để nộp đúng mức phí BVMT theo m3 khoáng sản thành phẩm."
      },
      {
        topic: "Đồng bộ thời hạn kê khai và nộp phí BVMT cùng tờ khai thuế tài nguyên",
        type: "added",
        oldRule: "Kê khai phí BVMT theo tờ khai riêng biệt với quy trình nộp tiền khác nhau.",
        newRule: "Người nộp phí nộp tờ khai phí BVMT cho cơ quan thuế cùng thời hạn với thời hạn nộp hồ sơ khai thuế tài nguyên (chậm nhất ngày 20 tháng sau).",
        impactNote: "Kế toán Kiểu Việt gộp quy trình kê khai thuế tài nguyên và phí BVMT thành 1 bước đồng thời hàng tháng, tiết kiệm thời gian giao dịch."
      },
      {
        topic: "Mục đích sử dụng nguồn thu phí BVMT để tái thiết hạ tầng địa phương",
        type: "added",
        oldRule: "Nguồn thu phí BVMT nộp chung vào ngân sách tỉnh, ít khi đầu tư lại cho khu vực chịu ảnh hưởng bởi mỏ.",
        newRule: "100% nguồn thu phí BVMT được điều tiết về ngân sách địa phương cấp huyện, xã nơi có mỏ để đầu tư nâng cấp đường giao thông dân sinh và khắc phục ô nhiễm môi trường.",
        impactNote: "Kiểu Việt phối hợp với chính quyền địa phương tạo sự đồng thuận của người dân xung quanh khu vực mỏ khoáng sản của công ty."
      }
    ]
  },
  "nd-67-2019": {
    decreeId: "nd-67-2019",
    title: "Nghị định 67/2019/NĐ-CP",
    category: "Tiền cấp quyền khai thác khoáng sản",
    compareWith: "Nghị định 203/2013/NĐ-CP",
    summary: "Quy định phương pháp tính, mức thu tiền cấp quyền khai thác khoáng sản: Ban hành công thức chuẩn (M = Q x G x K x R), cho phép nộp tiền nhiều lần hàng năm và cơ chế khấu trừ tiền cấp quyền khi trả lại mỏ.",
    items: [
      {
        topic: "Công thức chuẩn tính Tiền cấp quyền khai thác khoáng sản (M = Q x G x K x R)",
        type: "modified",
        oldRule: "Công thức tính cũ theo NĐ 203 có nhiều hệ số không rõ ràng, dẫn đến mức thu tiền cấp quyền vượt quá khả năng tài chính của doanh nghiệp.",
        newRule: "Quy định chuẩn xác: M = Q x G x K x R (Trong đó: Q là trữ lượng tính tiền; G là giá tính tiền cấp quyền; K là hệ số phương pháp khai thác; R là mức thu tiền cấp quyền từ 1% đến 5%).",
        impactNote: "Kế toán Kiểu Việt thẩm tra lại Thông báo nộp tiền cấp quyền của Cục Thuế bảo đảm áp đúng hệ số K (lộ thiên K = 1.0; hầm lò K = 0.9)."
      },
      {
        topic: "Cho phép phân kỳ nộp tiền cấp quyền khai thác khoáng sản hàng năm",
        type: "added",
        oldRule: "Doanh nghiệp phải nộp toàn bộ số tiền cấp quyền khai thác khoáng sản trong 1-2 năm đầu của giấy phép.",
        newRule: "Cho phép doanh nghiệp nộp tiền cấp quyền khai thác khoáng sản làm nhiều lần hàng năm chia đều theo số năm được cấp phép khai thác (mỗi năm nộp 2 kỳ).",
        impactNote: "Giảm áp lực dòng tiền vốn đầu tư ban đầu cho Kiểu Việt, tiền cấp quyền được chia nhỏ phân bổ đều vào chi phí từng năm khai thác."
      },
      {
        topic: "Thủ tục hoàn trả hoặc khấu trừ tiền cấp quyền khi trả lại một phần mỏ",
        type: "added",
        oldRule: "Doanh nghiệp trả lại mỏ hoặc dừng khai thác do thiên tai không được hoàn trả số tiền cấp quyền đã nộp trước.",
        newRule: "Quy định cơ chế hoàn trả hoặc bù trừ số tiền cấp quyền đã nộp thừa vào các nghĩa vụ thuế khác khi doanh nghiệp trả lại một phần hoặc toàn bộ diện tích mỏ.",
        impactNote: "Kiểu Việt được bảo toàn quyền lợi tài chính khi điều chỉnh ranh giới mỏ vật liệu phục vụ dự án."
      }
    ]
  },
  "nd-22-2020": {
    decreeId: "nd-22-2020",
    title: "Nghị định 22/2020/NĐ-CP",
    category: "Miễn Lệ phí môn bài",
    compareWith: "Nghị định 139/2016/NĐ-CP",
    summary: "Cải cách thủ tục lệ phí môn bài: Miễn lệ phí môn bài trong năm đầu thành lập cho doanh nghiệp mới, miễn 3 năm cho DNNVV chuyển đổi từ hộ kinh doanh và kéo dài thời hạn nộp tờ khai đến 30/01 năm sau.",
    items: [
      {
        topic: "Miễn lệ phí môn bài trong năm đầu thành lập mới",
        type: "added",
        oldRule: "Doanh nghiệp mới thành lập phải nộp ngay lệ phí môn bài trong tháng đầu hoạt động (nếu thành lập 6 tháng cuối năm nộp 50%).",
        newRule: "Miễn lệ phí môn bài trong năm đầu thành lập hoặc ra hoạt động sản xuất, kinh doanh (từ ngày 01/01 đến ngày 31/12) cho toàn bộ tổ chức mới thành lập.",
        impactNote: "Tiết kiệm chi phí hành chính ban đầu cho các công ty con, công ty thành viên mới thành lập trong hệ sinh thái Kiểu Việt."
      },
      {
        topic: "Miễn lệ phí môn bài cho chi nhánh, địa điểm kinh doanh thành lập trong năm đầu",
        type: "added",
        oldRule: "Chi nhánh, văn phòng đại diện thành lập mới luôn phải nộp 1.000.000 đồng/năm ngay khi được cấp phép.",
        newRule: "Trong thời gian doanh nghiệp được miễn lệ phí môn bài, chi nhánh, văn phòng đại diện, địa điểm kinh doanh thành lập của doanh nghiệp đó cũng được miễn lệ phí môn bài.",
        impactNote: "Kiểu Việt thoải mái mở các văn phòng ban điều hành công trường tại các tỉnh thành mà không phát sinh chi phí môn bài trong năm đầu."
      },
      {
        topic: "Miễn lệ phí môn bài 03 năm cho DNNVV chuyển đổi từ hộ kinh doanh",
        type: "added",
        oldRule: "Hộ kinh doanh chuyển đổi lên công ty phải nộp lệ phí môn bài theo vốn điều lệ công ty ngay từ năm đầu.",
        newRule: "Miễn lệ phí môn bài trong thời hạn 03 năm kể từ ngày được cấp Giấy chứng nhận đăng ký doanh nghiệp lần đầu cho doanh nghiệp nhỏ và vừa chuyển đổi từ hộ kinh doanh.",
        impactNote: "Chính sách khuyến khích các đối tác tổ đội xây dựng liên kết với Kiểu Việt nâng cấp lên mô hình công ty cổ phần/TNHH chuyên nghiệp."
      },
      {
        topic: "Thời hạn nộp hồ sơ khai lệ phí môn bài chuyển sang ngày 30/01 năm sau",
        type: "modified",
        oldRule: "Phải nộp tờ khai lệ phí môn bài chậm nhất vào ngày cuối cùng của tháng bắt đầu hoạt động sản xuất kinh doanh.",
        newRule: "Người nộp lệ phí mới thành lập nộp hồ sơ khai lệ phí môn bài chậm nhất là ngày 30 tháng 01 năm sau năm thành lập.",
        impactNote: "Kế toán Kiểu Việt có tới cả năm đầu để ổn định bộ máy trước khi phải nộp tờ khai lệ phí môn bài lần đầu tiên."
      }
    ]
  },
  "nd-139-2016": {
    decreeId: "nd-139-2016",
    title: "Nghị định 139/2016/NĐ-CP",
    category: "Lệ phí môn bài",
    compareWith: "Thông tư 96/2002/TT-BTC & Pháp lệnh Thuế môn bài",
    summary: "Chuyển đổi tên gọi chính thức từ Thuế môn bài sang Lệ phí môn bài, quy định 3 bậc mức thu theo vốn điều lệ (Vốn trên 10 tỷ: 3 triệu/năm, vốn dưới 10 tỷ: 2 triệu/năm, chi nhánh: 1 triệu/năm) và thời hạn nộp ngày 30/01 hàng năm.",
    items: [
      {
        topic: "Quy định 3 bậc mức thu lệ phí môn bài cho tổ chức kinh doanh",
        type: "modified",
        oldRule: "Thuế môn bài cũ áp dụng 4 bậc mức thu căn cứ vào vốn đăng ký theo Thông tư 96/2002 (Bậc 1: 3tr, Bậc 2: 2tr, Bậc 3: 1.5tr, Bậc 4: 1tr).",
        newRule: "Quy định chuẩn 3 bậc: Bậc 1 (Vốn điều lệ trên 10 tỷ đồng: 3.000.000 đ/năm); Bậc 2 (Vốn điều lệ từ 10 tỷ đồng trở xuống: 2.000.000 đ/năm); Bậc 3 (Chi nhánh, VPĐD, địa điểm kinh doanh: 1.000.000 đ/năm).",
        impactNote: "Kiểu Việt có vốn điều lệ trên 10 tỷ đồng thuộc Bậc 1, nộp đúng 3.000.000 đ/năm cho công ty mẹ và 1.000.000 đ/năm cho mỗi chi nhánh."
      },
      {
        topic: "Căn cứ xác định mức thu lệ phí môn bài là Vốn ghi trên Giấy phép",
        type: "modified",
        oldRule: "Căn cứ theo vốn tự có hoặc tổng tài sản trên Bảng cân đối kế toán năm trước.",
        newRule: "Căn cứ vào Vốn điều lệ ghi trong Giấy chứng nhận đăng ký doanh nghiệp; trường hợp không có vốn điều lệ thì căn cứ vào Vốn đầu tư ghi trong Giấy chứng nhận đăng ký đầu tư.",
        impactNote: "Trường hợp Kiểu Việt tăng vốn điều lệ vượt mốc 10 tỷ đồng, mức nộp lệ phí môn bài bậc mới sẽ áp dụng từ năm tài chính tiếp theo."
      },
      {
        topic: "Thời hạn nộp tiền lệ phí môn bài hàng năm chậm nhất là ngày 30/01",
        type: "added",
        oldRule: "Thời hạn nộp thuế môn bài cũ quy định từ ngày 01 đến ngày 30 tháng 01 nhưng nhiều doanh nghiệp hay quên nộp.",
        newRule: "Quy định thời hạn nộp tiền lệ phí môn bài hàng năm chậm nhất là ngày 30 tháng 01 năm tài chính; nếu nộp chậm sẽ bị tính tiền chậm nộp 0.03%/ngày theo Luật Quản lý thuế.",
        impactNote: "Kiểu Việt đặt lịch cố định: Chuyển khoản nộp lệ phí môn bài cho toàn bộ công ty mẹ và các chi nhánh ngay trong tuần đầu tiên của tháng 01 hàng năm."
      },
      {
        topic: "Bãi bỏ thủ tục nộp tờ khai môn bài hàng năm nếu không thay đổi vốn",
        type: "removed",
        oldRule: "Hàng năm doanh nghiệp đều phải in và nộp lại tờ khai thuế môn bài Mẫu 01/MBAI.",
        newRule: "Doanh nghiệp chỉ phải nộp Tờ khai lệ phí môn bài 01 lần duy nhất khi mới thành lập; các năm tiếp theo chỉ cần nộp tiền vào NSNN, không phải nộp lại tờ khai nếu không thay đổi vốn điều lệ.",
        impactNote: "Cắt giảm 100% thủ tục giấy tờ kê khai môn bài hàng năm cho phòng kế toán Kiểu Việt."
      }
    ]
  },
  "luat-gd-dien-tu-20-2023": {
    decreeId: "luat-gd-dien-tu-20-2023",
    title: "Luật Giao dịch điện tử số 20/2023/QH15",
    category: "Luật Giao dịch điện tử",
    compareWith: "Luật Giao dịch điện tử số 51/2005/QH11",
    summary: "Nền tảng pháp lý vững chắc cho kỷ nguyên số: Mở rộng áp dụng giao dịch điện tử toàn diện cho mọi lĩnh vực, công nhận giá trị pháp lý tuyệt đối của Hợp đồng điện tử, phân loại 3 cấp độ chữ ký điện tử và bảo mật dữ liệu số.",
    items: [
      {
        topic: "Mở rộng phạm vi điều chỉnh ra toàn bộ các hoạt động kinh tế - xã hội",
        type: "modified",
        oldRule: "Luật 2005 loại trừ không áp dụng giao dịch điện tử đối với việc cấp sổ đỏ, giấy chứng nhận kết hôn, văn bản thừa kế.",
        newRule: "Mở rộng áp dụng toàn diện: Giao dịch điện tử được phép áp dụng cho toàn bộ hoạt động kinh tế, dân sự, thương mại, hành chính công mà không còn phạm vi loại trừ.",
        impactNote: "Kiểu Việt có cơ sở pháp lý vững chắc để thực hiện số hóa toàn bộ hợp đồng giao nhận thầu, biên bản nghiệm thu và hồ sơ dự án xây dựng."
      },
      {
        topic: "Công nhận giá trị pháp lý tuyệt đối của Hợp đồng điện tử",
        type: "added",
        oldRule: "Hợp đồng ký kết qua mạng vẫn bị nhiều chủ đầu tư và cơ quan tòa án yêu cầu phải có bản in đóng dấu đỏ mới công nhận.",
        newRule: "Khẳng định giá trị pháp lý của Hợp đồng điện tử không thể bị phủ nhận chỉ vì hợp đồng đó được thể hiện dưới dạng thông điệp dữ liệu.",
        impactNote: "Kiểu Việt ký kết các hợp đồng kinh tế mua bán vật liệu xây dựng với các nhà cung cấp toàn quốc hoàn toàn trực tuyến, tiết kiệm thời gian đi lại."
      },
      {
        topic: "Phân định rõ ràng 3 loại Chữ ký điện tử",
        type: "added",
        oldRule: "Chưa phân loại cụ thể mức độ tin cậy và giá trị pháp lý của các loại chữ ký số và chữ ký điện tử thông thường.",
        newRule: "Phân loại rõ 3 loại: (1) Chữ ký điện tử chuyên dùng; (2) Chữ ký số công cộng (dùng nộp thuế, hải quan, đấu thầu); (3) Chữ ký số chuyên dùng công vụ.",
        impactNote: "Kiểu Việt trang bị chữ ký số công cộng tích hợp HSM đám mây cho phép Ban Giám đốc ký duyệt chứng từ mọi lúc mọi nơi an toàn."
      },
      {
        topic: "Quy định điều kiện chuyển đổi giữa văn bản giấy và thông điệp dữ liệu",
        type: "modified",
        oldRule: "Chưa quy định chuẩn kỹ thuật khi scan hoặc số hóa tài liệu giấy chuyển sang lưu trữ điện tử.",
        newRule: "Quy định điều kiện chuyển đổi: Phải bảo đảm tính toàn vẹn của thông tin; có chữ ký số của bên thực hiện chuyển đổi; và có thể truy cập, sử dụng lại bất cứ lúc nào.",
        impactNote: "Kiểu Việt số hóa toàn bộ kho hồ sơ hoàn công công trình giấy cũ sang kho lưu trữ số đạt chuẩn pháp lý."
      }
    ]
  },
  "luat-thue-xnk-107-2016": {
    decreeId: "luat-thue-xnk-107-2016",
    title: "Luật Thuế Xuất khẩu, thuế nhập khẩu số 107/2016/QH13",
    category: "Thuế Xuất nhập khẩu",
    compareWith: "Luật Thuế Xuất khẩu, nhập khẩu số 45/2005/QH11",
    summary: "Quy chuẩn chính sách thuế quan Việt Nam hội nhập quốc tế: Miễn thuế nhập khẩu máy móc thiết bị tạo tài sản cố định cho dự án ưu đãi đầu tư, áp dụng phương pháp tính thuế hỗn hợp và các biện pháp phòng vệ thương mại.",
    items: [
      {
        topic: "Miễn thuế nhập khẩu đối với máy móc, thiết bị tạo tài sản cố định (TSCĐ)",
        type: "added",
        oldRule: "Chính sách miễn thuế nhập khẩu máy móc thiết bị ưu đãi đầu tư phải qua nhiều khâu thẩm định danh mục xét miễn thuế phức tạp.",
        newRule: "Miễn thuế nhập khẩu đối với hàng hóa nhập khẩu để tạo TSCĐ của đối tượng được hưởng ưu đãi đầu tư (máy móc, thiết bị thi công chuyên dùng trong nước chưa sản xuất được).",
        impactNote: "Kiểu Việt được miễn 100% thuế nhập khẩu khi nhập khẩu dàn máy xúc lật cỡ lớn, máy khoan hầm hiện đại từ Nhật Bản, Đức tạo TSCĐ công ty."
      },
      {
        topic: "Áp dụng phương pháp tính thuế hỗn hợp (Hỗn hợp % và thuế tuyệt đối)",
        type: "modified",
        oldRule: "Chủ yếu áp dụng phương pháp tính thuế theo tỷ lệ phần trăm (%) trên trị giá hải quan.",
        newRule: "Bổ sung phương pháp tính thuế hỗn hợp: Kết hợp giữa tính thuế theo tỷ lệ % và áp dụng mức thuế tuyệt đối trên đơn vị hàng hóa nhập khẩu.",
        impactNote: "Kế toán Kiểu Việt nắm vững phương pháp tính thuế để kiểm tra chi phí hải quan khi nhập khẩu linh kiện, phụ tùng thay thế xe máy công trường."
      },
      {
        topic: "Chính sách bảo lãnh tiền thuế hải quan qua hệ thống điện tử ngân hàng",
        type: "added",
        oldRule: "Phải nộp tiền mặt hoặc nộp séc trực tiếp tại kho bạc hải quan mới được thông quan hàng hóa.",
        newRule: "Doanh nghiệp có thư bảo lãnh nghĩa vụ nộp thuế của Ngân hàng thương mại được thông quan hàng hóa ngay lập tức và được ân hạn nộp thuế tối đa 30 ngày.",
        impactNote: "Kiểu Việt thông quan máy móc nhập khẩu nhanh chóng trong ngày, đưa ngay thiết bị ra công trường phục vụ thi công đúng tiến độ."
      },
      {
        topic: "Các biện pháp phòng vệ thương mại (Thuế tự vệ, chống bán phá giá thép)",
        type: "added",
        oldRule: "Chưa có quy định luật định thống nhất về các loại thuế phòng vệ thương mại ngoài thuế nhập khẩu thông thường.",
        newRule: "Quy định cụ thể 3 loại thuế phòng vệ thương mại: Thuế chống bán phá giá, Thuế chống trợ cấp và Thuế tự vệ áp dụng đối với hàng hóa nhập khẩu ồ ạt cạnh tranh không lành mạnh.",
        impactNote: "Kiểu Việt theo dõi sát các quyết định áp thuế tự vệ đối với phôi thép, thép cuộn nhập khẩu để dự báo biến động giá sắt thép xây dựng trong nước."
      }
    ]
  }
};

const code = `import { DecreeDiffData } from '../diff-types';

export const group5ResourcesFeesGeneral: Record<string, DecreeDiffData> = ${JSON.stringify(group5, null, 2)};
`;

fs.writeFileSync('src/data/diffs/group5_resources_fees_general.ts', code, 'utf8');
console.log('Group 5 generated successfully (12 decrees).');
