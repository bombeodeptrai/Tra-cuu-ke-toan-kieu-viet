const fs = require('fs');

const group3 = {
  "luat-67-2025-tndn": {
    decreeId: "luat-67-2025-tndn",
    title: "Luật Thuế Thu nhập doanh nghiệp số 67/2025/QH15",
    category: "Luật Thuế TNDN (Mới)",
    compareWith: "Luật Thuế TNDN số 14/2008/QH12",
    summary: "Cải cách toàn diện hệ thống thuế TNDN Việt Nam từ năm 2026: Áp dụng cơ chế Thuế tối thiểu toàn cầu (Pillar Two) 15%, mở rộng ưu đãi cho đổi mới sáng tạo, chuyển đổi xanh, tinh giản thủ tục chuyển lỗ và siết chặt chuyển nhượng dự án đầu tư.",
    items: [
      {
        topic: "Áp dụng cơ chế Thuế tối thiểu toàn cầu (Pillar Two) 15%",
        type: "added",
        oldRule: "Trước đây nhiều doanh nghiệp FDI được hưởng mức thuế suất ưu đãi 5% hoặc 10% kéo dài theo giấy phép đầu tư cũ.",
        newRule: "Bắt buộc các tập đoàn đa quốc gia có doanh thu hợp nhất từ 750 triệu EUR trở lên phải nộp thuế TNDN bổ sung tối thiểu 15% tại Việt Nam.",
        impactNote: "Tạo môi trường cạnh tranh bình đẳng giữa doanh nghiệp xây lắp trong nước như Kiểu Việt với các nhà thầu có vốn FDI."
      },
      {
        topic: "Mở rộng danh mục chi phí được trừ cho nghiên cứu phát triển và chuyển đổi số",
        type: "added",
        oldRule: "Chi phí mua phần mềm, chuyển đổi số chỉ được khấu hao hoặc phân bổ CCDC tối đa 3 năm.",
        newRule: "Cho phép tính thêm 50% đến 100% chi phí thực tế phát sinh cho hoạt động nghiên cứu phát triển (R&D), ứng dụng công nghệ xây dựng xanh vào chi phí được trừ khi xác định thu nhập chịu thuế.",
        impactNote: "Kiểu Việt được khấu trừ thuế tối đa khi đầu tư hệ thống BIM (Building Information Modeling) và máy móc thi công tiết kiệm nhiên liệu."
      },
      {
        topic: "Tinh giản thủ tục chuyển lỗ kinh doanh giữa các niên độ",
        type: "modified",
        oldRule: "Khi chuyển lỗ phải lập Bảng phân bổ số lỗ chuyển Mẫu 03-2A/TNDN với nhiều thủ tục thẩm định phức tạp.",
        newRule: "Doanh nghiệp tự động chuyển toàn bộ và liên tục số lỗ vào thu nhập chịu thuế của các năm tiếp theo trong thời hạn tối đa 5 năm trực tiếp trên tờ khai quyết toán.",
        impactNote: "Kiểu Việt tự động bù trừ số lỗ của các dự án thi công kéo dài vào lợi nhuận của các hợp đồng có lãi trong vòng 5 năm."
      },
      {
        topic: "Siết chặt quy định về chuyển nhượng dự án đầu tư và quyền góp vốn",
        type: "modified",
        oldRule: "Thu nhập từ chuyển nhượng dự án đầu tư được bù trừ với lỗ của hoạt động sản xuất kinh doanh thông thường.",
        newRule: "Thu nhập từ chuyển nhượng bất động sản, chuyển nhượng dự án đầu tư phải kê khai và nộp thuế riêng biệt, không được bù trừ với số lỗ của hoạt động xây lắp thông thường.",
        impactNote: "Kế toán Kiểu Việt tách bạch hạch toán sổ sách giữa mảng thi công xây lắp và mảng đầu tư chuyển nhượng dự án bất động sản."
      },
      {
        topic: "Ưu đãi thuế suất TNDN 15% - 17% cho doanh nghiệp vừa và nhỏ đổi mới",
        type: "added",
        oldRule: "Áp dụng một mức thuế suất phổ thông 20% cào bằng cho mọi quy mô doanh nghiệp.",
        newRule: "Cơ chế thuế suất ưu đãi phân bậc: Doanh nghiệp nhỏ và vừa đáp ứng tiêu chí đổi mới công nghệ được hưởng mức thuế suất ưu đãi 15% - 17% trong thời hạn quy định.",
        impactNote: "Kiểu Việt có cơ hội tiếp cận mức thuế suất ưu đãi khi áp dụng các giải pháp công nghệ xây dựng thông minh."
      }
    ]
  },
  "luat-thue-tndn": {
    decreeId: "luat-thue-tndn",
    title: "Luật Thuế Thu nhập doanh nghiệp số 14/2008/QH12",
    category: "Luật Thuế TNDN",
    compareWith: "Luật Thuế TNDN năm 2003",
    summary: "Hạ mức thuế suất phổ thông từ 28% xuống 25% rồi 20%, thống nhất thuế suất giữa doanh nghiệp nội địa và FDI, quy định 3 điều kiện cơ bản để chi phí được trừ.",
    items: [
      {
        topic: "Lộ trình hạ mức thuế suất thuế TNDN phổ thông từ 28% xuống 20%",
        type: "modified",
        oldRule: "Áp dụng mức thuế suất cao 28% đối với doanh nghiệp trong nước và 25% đối với doanh nghiệp có vốn đầu tư nước ngoài.",
        newRule: "Bãi bỏ sự phân biệt đối xử, hạ thuế suất thống nhất xuống 25% (năm 2009), sau đó xuống 22% (năm 2014) và từ năm 2016 ổn định ở mức 20%.",
        impactNote: "Giảm gánh nặng chi phí thuế TNDN cho Kiểu Việt, giúp tái đầu tư lợi nhuận vào máy móc thiết bị thi công hiện đại."
      },
      {
        topic: "3 điều kiện cốt lõi để chi phí được trừ khi xác định thuế TNDN",
        type: "added",
        oldRule: "Quy định chi phí được trừ theo danh mục liệt kê đóng, nhiều khoản chi thực tế phục vụ sản xuất bị loại bỏ.",
        newRule: "Quy định nguyên tắc 3 điều kiện: (1) Khoản chi thực tế liên quan đến hoạt động SXKD; (2) Có đủ hóa đơn chứng từ hợp pháp; (3) Có chứng từ thanh toán không dùng tiền mặt với hóa đơn từ 20 triệu đồng trở lên.",
        impactNote: "Kim chỉ nam cho kế toán Kiểu Việt: Mọi khoản chi mua vật tư, nhân công, thuê máy đều phải thỏa mãn đồng thời 3 điều kiện trên."
      },
      {
        topic: "Bãi bỏ thuế chuyển lợi nhuận ra nước ngoài",
        type: "removed",
        oldRule: "Áp dụng thuế chuyển lợi nhuận ra nước ngoài từ 3% đến 7% đối với các nhà đầu tư nước ngoài.",
        newRule: "Bãi bỏ hoàn toàn thuế chuyển lợi nhuận ra nước ngoài, khuyến khích các tập đoàn quốc tế đầu tư vào Việt Nam.",
        impactNote: "Mở rộng cơ hội cho Kiểu Việt liên doanh, hợp tác thi công với các nhà thầu và quỹ đầu tư quốc tế."
      },
      {
        topic: "Quy định trích lập Quỹ phát triển khoa học và công nghệ",
        type: "added",
        oldRule: "Doanh nghiệp không được trích trước lợi nhuận trước thuế để đầu tư nghiên cứu công nghệ.",
        newRule: "Doanh nghiệp được trích tối đa 10% thu nhập tính thuế hàng năm để lập Quỹ phát triển khoa học và công nghệ tính vào chi phí hợp lý.",
        impactNote: "Kiểu Việt có thể trích lập quỹ để nghiên cứu vật liệu xây dựng mới, công nghệ thi công cọc khoan nhồi không gây ô nhiễm."
      }
    ]
  },
  "nd-218-2013": {
    decreeId: "nd-218-2013",
    title: "Nghị định 218/2013/NĐ-CP",
    category: "Thuế TNDN",
    compareWith: "Nghị định 124/2008/NĐ-CP",
    summary: "Nghị định quy định chi tiết thi hành Luật Thuế TNDN: Hướng dẫn mức thuế suất 20%, cách xác định thu nhập từ chuyển nhượng BĐS và điều kiện thanh toán qua ngân hàng từ 20 triệu đồng.",
    items: [
      {
        topic: "Áp dụng mức thuế suất thuế TNDN 20% chính thức",
        type: "modified",
        oldRule: "Thuế suất phổ thông là 25% theo Nghị định 124/2008.",
        newRule: "Quy định lộ trình thuế suất 22% từ 01/01/2014 và chính thức áp dụng mức thuế suất 20% cho toàn bộ doanh nghiệp từ ngày 01/01/2016.",
        impactNote: "Kế toán Kiểu Việt áp dụng mức thuế suất 20% trên thu nhập tính thuế khi lập Tờ khai quyết toán thuế TNDN Mẫu 03/TNDN."
      },
      {
        topic: "Điều kiện thanh toán không dùng tiền mặt cho hóa đơn từ 20 triệu đồng",
        type: "modified",
        oldRule: "Chỉ quy định điều kiện thanh toán ngân hàng đối với khấu trừ thuế GTGT, chưa áp dụng bắt buộc với thuế TNDN.",
        newRule: "Bắt buộc các hóa đơn mua hàng hóa, dịch vụ từng lần có giá trị từ 20 triệu đồng trở lên (giá đã có thuế GTGT) phải có chứng từ thanh toán không dùng tiền mặt mới được tính vào chi phí được trừ.",
        impactNote: "Kế toán Kiểu Việt tuyệt đối không thanh toán tiền mặt cho các hóa đơn mua sắt thép, xi măng từ 20 triệu trở lên; 100% phải chuyển khoản qua tài khoản công ty."
      },
      {
        topic: "Phương pháp tính thuế đối với hoạt động chuyển nhượng bất động sản",
        type: "modified",
        oldRule: "Doanh thu và chi phí bất động sản được gộp chung với hoạt động thương mại sản xuất.",
        newRule: "Doanh nghiệp phải kê khai, nộp thuế TNDN riêng cho hoạt động chuyển nhượng BĐS; lỗ từ chuyển nhượng BĐS được bù trừ vào lãi của hoạt động SXKD khác nhưng chiều ngược lại thì không.",
        impactNote: "Kiểu Việt hạch toán riêng rẽ kết quả kinh doanh các dự án hạ tầng BĐS với các hợp đồng xây lắp nhận thầu."
      },
      {
        topic: "Khấu trừ các khoản chi tài trợ giáo dục, y tế, khắc phục thiên tai",
        type: "added",
        oldRule: "Các khoản chi tài trợ từ thiện hầu như bị loại toàn bộ khỏi chi phí hợp lý khi thanh tra thuế.",
        newRule: "Cho phép tính vào chi phí được trừ đối với các khoản tài trợ cho giáo dục, y tế, khắc phục hậu quả thiên tai, xây dựng nhà tình nghĩa có đầy đủ hồ sơ theo quy định.",
        impactNote: "Các chương trình an sinh xã hội xây cầu, làm đường giao thông nông thôn của Kiểu Việt được tính vào chi phí hợp lý."
      }
    ]
  },
  "tt-96-2015": {
    decreeId: "tt-96-2015",
    title: "Thông tư 96/2015/TT-BTC",
    category: "Thuế TNDN & Chi phí được trừ",
    compareWith: "Thông tư 78/2014/TT-BTC",
    summary: "Cẩm nang quan trọng nhất về Chi phí được trừ và không được trừ khi tính thuế TNDN: Bãi bỏ trần khống chế 15% chi phí quảng cáo, quy định chi trang phục 5 triệu/người và chi phúc lợi người lao động 1 tháng lương bình quân.",
    items: [
      {
        topic: "Bãi bỏ hoàn toàn mức trần khống chế 15% chi phí quảng cáo, tiếp thị",
        type: "removed",
        oldRule: "Khống chế tổng chi phí quảng cáo, tiếp thị, khuyến mại, hoa hồng môi giới, tiếp khách không được vượt quá 15% tổng chi phí được trừ.",
        newRule: "Bãi bỏ hoàn toàn quy định khống chế trần 15%. Toàn bộ chi phí tiếp khách, quảng cáo, hội nghị khách hàng có đủ hóa đơn chứng từ hợp pháp đều được tính vào chi phí được trừ.",
        impactNote: "Kiểu Việt được khấu trừ 100% các chi phí tiếp khách, hội nghị khách hàng, đấu thầu dự án có hóa đơn hợp lệ mà không lo bị vượt trần."
      },
      {
        topic: "Khống chế chi trang phục cho người lao động (5.000.000 đ/người/năm)",
        type: "modified",
        oldRule: "Chi trang phục bằng tiền mặt bị khống chế ở mức 1.000.000 đồng/người/năm theo quy định cũ.",
        newRule: "Nâng mức chi trang phục bằng tiền mặt lên tối đa 5.000.000 đồng/người/năm; trường hợp chi bằng hiện vật (quần áo bảo hộ lao động, mũ, giày bảo hộ) có hóa đơn thì không bị khống chế.",
        impactNote: "Kiểu Việt xây dựng quy chế tài chính: Cấp phát trang phục bảo hộ công trường bằng hiện vật có hóa đơn đầy đủ và chi tiền trang phục văn phòng đúng mức 5 triệu/người/năm."
      },
      {
        topic: "Quy định mức chi phúc lợi trực tiếp cho người lao động (1 tháng lương bình quân)",
        type: "added",
        oldRule: "Các khoản chi nghỉ mát, hiếu hỷ, khen thưởng con em CBCNV thường bị bóc tách khỏi chi phí hợp lý.",
        newRule: "Cho phép tính vào chi phí được trừ đối với các khoản chi phúc lợi trực tiếp cho người lao động (nghỉ mát, hiếu hỷ, bảo hiểm tai nạn, đào tạo) với tổng mức chi không quá 1 tháng lương bình quân thực tế.",
        impactNote: "Kiểu Việt tận dụng tối đa quỹ phúc lợi 1 tháng lương bình quân để chăm lo đời sống kỹ sư, công nhân công trường mà vẫn được tính chi phí hợp lý."
      },
      {
        topic: "Chi phí lãi vay tương ứng với phần vốn điều lệ còn thiếu",
        type: "modified",
        oldRule: "Chưa quy định chi tiết cách phân bổ chi phí lãi vay khi các cổ đông chưa góp đủ vốn cam kết.",
        newRule: "Không được tính vào chi phí được trừ phần chi phí lãi vay tương ứng với phần vốn điều lệ đã đăng ký còn thiếu theo tiến độ góp vốn ghi trong điều lệ công ty.",
        impactNote: "Cảnh báo tài chính Kiểu Việt: Bảo đảm các cổ đông góp đủ 100% vốn điều lệ đăng ký trước khi vay vốn ngân hàng để chi phí lãi vay được khấu trừ trọn vẹn."
      },
      {
        topic: "Chênh lệch tỷ giá hối đoái do đánh giá lại nợ phải thu cuối năm",
        type: "modified",
        oldRule: "Cho phép tính lỗ chênh lệch tỷ giá của toàn bộ các khoản mục tiền tệ có gốc ngoại tệ vào chi phí được trừ.",
        newRule: "Lỗ chênh lệch tỷ giá hối đoái do đánh giá lại số dư nợ phải thu cuối năm tài chính không được tính vào chi phí được trừ khi xác định thuế TNDN.",
        impactNote: "Kế toán Kiểu Việt loại trừ khoản lỗ chênh lệch tỷ giá nợ phải thu tại chỉ tiêu B4 trên Tờ khai quyết toán thuế TNDN Mẫu 03/TNDN."
      }
    ]
  },
  "luat-109-2025-tncn": {
    decreeId: "luat-109-2025-tncn",
    title: "Luật Thuế Thu nhập cá nhân số 109/2025/QH15",
    category: "Luật Thuế TNCN (Hiệu lực 2026)",
    compareWith: "Luật Thuế TNCN 04/2007/QH12 & NQ 954/2020",
    summary: "Bước cải cách đột phá về thuế TNCN áp dụng từ năm 2026: Nâng mức giảm trừ gia cảnh bản thân lên 15.5 triệu đồng/tháng (186 triệu/năm), người phụ thuộc lên 6.2 triệu đồng/tháng, tinh giản biểu thuế lũy tiến từ 7 bậc xuống 5 bậc.",
    items: [
      {
        topic: "Nâng mức giảm trừ gia cảnh cho bản thân người nộp thuế lên 15.5 triệu đồng/tháng",
        type: "modified",
        oldRule: "Mức giảm trừ gia cảnh cho bản thân là 11.000.000 đồng/tháng (132.000.000 đồng/năm) áp dụng từ tháng 07/2020 theo Nghị quyết 954/2020.",
        newRule: "Nâng mức giảm trừ gia cảnh cho bản thân lên 15.500.000 đồng/tháng (186.000.000 đồng/năm) từ kỳ tính thuế năm 2026.",
        impactNote: "Cán bộ nhân viên và kỹ sư Kiểu Việt có thu nhập từ tiền lương dưới 15.5 triệu đồng/tháng sẽ không phải nộp thuế TNCN, tăng thu nhập thực nhận."
      },
      {
        topic: "Nâng mức giảm trừ gia cảnh cho mỗi người phụ thuộc lên 6.2 triệu đồng/tháng",
        type: "modified",
        oldRule: "Mức giảm trừ cho mỗi người phụ thuộc (con nhỏ, cha mẹ già hết tuổi lao động) là 4.400.000 đồng/tháng.",
        newRule: "Nâng mức giảm trừ cho mỗi người phụ thuộc lên 6.200.000 đồng/tháng (74.400.000 đồng/năm) từ năm 2026.",
        impactNote: "Người lao động Kiểu Việt nuôi 2 con nhỏ sẽ được giảm trừ tới 27.9 triệu đồng/tháng (15.5tr + 6.2tr x 2) trước khi tính thuế TNCN."
      },
      {
        topic: "Tinh giản Biểu thuế lũy tiến từng phần từ 7 bậc xuống 5 bậc",
        type: "modified",
        oldRule: "Biểu thuế lũy tiến 7 bậc với khoảng cách quá dày: Bậc 1 (đến 5tr - 5%), Bậc 2 (5-10tr - 10%), Bậc 3 (10-18tr - 15%), Bậc 4 (18-32tr - 20%), Bậc 5 (32-52tr - 25%), Bậc 6 (52-80tr - 30%), Bậc 7 (trên 80tr - 35%).",
        newRule: "Rút gọn còn 5 bậc thuế, nới rộng khoảng cách thu nhập chịu thuế ở các bậc thấp và trung bình, giảm thuế suất thực tế cho tầng lớp lao động kỹ thuật.",
        impactNote: "Giúp Kiểu Việt dễ dàng thu hút và giữ chân đội ngũ kỹ sư xây dựng, chỉ huy trưởng công trường giỏi mà không làm tăng chi phí thuế gross."
      },
      {
        topic: "Cơ chế tự động điều chỉnh mức giảm trừ theo chỉ số lạm phát (CPI)",
        type: "added",
        oldRule: "Chỉ khi CPI biến động trên 20% Chính phủ mới trình Ủy ban Thường vụ Quốc hội xem xét điều chỉnh (mất nhiều năm chờ đợi).",
        newRule: "Quy định cơ chế tự động điều chỉnh mức giảm trừ gia cảnh theo biến động chỉ số CPI hàng năm mà không cần phải ban hành luật mới.",
        impactNote: "Mức giảm trừ gia cảnh của người lao động Kiểu Việt sẽ luôn bắt kịp với chi phí sinh hoạt thực tế tại các đô thị."
      },
      {
        topic: "Đơn giản hóa thủ tục chứng từ khấu trừ thuế TNCN điện tử",
        type: "modified",
        oldRule: "Cá nhân ủy quyền quyết toán phải nộp nhiều loại giấy tờ cam kết thu nhập duy nhất.",
        newRule: "Tự động hóa đối soát thông tin mã số thuế cá nhân qua cơ sở dữ liệu định danh quốc gia VNeID, bỏ thủ tục xác nhận giấy.",
        impactNote: "Phòng kế toán Kiểu Việt giảm bớt 70% thủ tục giấy tờ khi làm quyết toán thuế TNCN cho hàng trăm nhân viên công ty."
      }
    ]
  },
  "tt-111-2013": {
    decreeId: "tt-111-2013",
    title: "Thông tư 111/2013/TT-BTC",
    category: "Thuế TNCN",
    compareWith: "Thông tư 84/2008/TT-BTC",
    summary: "Thông tư căn bản hướng dẫn toàn diện Luật Thuế TNCN: Xác định 10 nguồn thu nhập chịu thuế, quy định các khoản phụ cấp miễn thuế, tỷ lệ khấu trừ 10% lao động thời vụ và thủ tục đăng ký người phụ thuộc.",
    items: [
      {
        topic: "Các khoản phụ cấp, trợ cấp được miễn thuế TNCN",
        type: "modified",
        oldRule: "Nhiều khoản phụ cấp phục vụ công việc vẫn bị gộp vào thu nhập chịu thuế TNCN của người lao động.",
        newRule: "Quy định danh mục các khoản không tính vào thu nhập chịu thuế: Phụ cấp độc hại nguy hiểm, phụ cấp lưu động công trường, phụ cấp tiền ăn trưa (trong định mức), tiền công tác phí theo quy chế.",
        impactNote: "Kiểu Việt xây dựng quy chế phụ cấp lưu động công trường và tiền ăn ca hợp lý để tối ưu hóa thu nhập thực nhận cho kỹ sư công trường."
      },
      {
        topic: "Tỷ lệ khấu trừ thuế TNCN 10% đối với lao động thời vụ, vãng lai",
        type: "modified",
        oldRule: "Quy định khấu trừ 10% hoặc 20% tùy thuộc vào việc cá nhân có mã số thuế hay không.",
        newRule: "Áp dụng thống nhất khấu trừ 10% trên tổng thu nhập chi trả từ 2.000.000 đồng/lần trở lên đối với cá nhân cư trú không ký hợp đồng lao động hoặc ký HĐLĐ dưới 3 tháng.",
        impactNote: "Kế toán Kiểu Việt thực hiện khấu trừ 10% thuế TNCN khi thanh toán tiền công cho các tổ đội thợ nề, thợ sắt thi công thời vụ."
      },
      {
        topic: "Cam kết không khấu trừ thuế TNCN theo Mẫu 08/CK-TNCN",
        type: "added",
        oldRule: "Lao động thời vụ dù chỉ có thu nhập duy nhất dưới ngưỡng nộp thuế vẫn bị khấu trừ 10% rồi phải tự đi xin hoàn lại rất phức tạp.",
        newRule: "Cho phép người lao động có ước tính tổng thu nhập trong năm chưa đến mức phải nộp thuế làm Bản cam kết Mẫu 08/CK-TNCN để tổ chức trả thu nhập tạm thời không khấu trừ 10%.",
        impactNote: "Kiểu Việt hướng dẫn các công nhân thời vụ có MST làm cam kết để chi trả trọn vẹn tiền công mà không bị trừ 10% thuế."
      },
      {
        topic: "Hồ sơ chứng minh người phụ thuộc để giảm trừ gia cảnh",
        type: "modified",
        oldRule: "Hồ sơ đăng ký người phụ thuộc phải xin xác nhận phức tạp từ UBND xã/phường nơi cư trú.",
        newRule: "Quy định hồ sơ đơn giản: Bản sao Giấy khai sinh của con hoặc CCCD của cha mẹ già và Tờ khai đăng ký người phụ thuộc Mẫu 07/ĐK-NPT-TNCN.",
        impactNote: "Kiểu Việt thu thập và lưu trữ hồ sơ người phụ thuộc của người lao động đầy đủ để phục vụ thanh tra thuế TNCN."
      }
    ]
  },
  "luat-thue-gtgt": {
    decreeId: "luat-thue-gtgt",
    title: "Luật Thuế Giá trị gia tăng số 13/2008/QH12",
    category: "Luật Thuế GTGT",
    compareWith: "Luật Thuế GTGT năm 1997",
    summary: "Định hình cấu trúc thuế GTGT hiện đại của Việt Nam: Giảm các mức thuế suất xuống còn 0%, 5%, 10%, quy định phương pháp khấu trừ và điều kiện hoàn thuế cho dự án đầu tư mới.",
    items: [
      {
        topic: "Thu hẹp số lượng các mức thuế suất thuế GTGT",
        type: "modified",
        oldRule: "Hệ thống thuế GTGT cũ áp dụng tới 4 mức thuế suất: 0%, 5%, 10% và 20% gây phức tạp trong phân loại hàng hóa.",
        newRule: "Bãi bỏ mức thuế suất 20%, áp dụng 3 mức thuế suất chuẩn: 0% (xuất khẩu), 5% (hàng hóa thiết yếu, nước sạch) và 10% (mức phổ thông cho xây dựng, thương mại).",
        impactNote: "Các hợp đồng thi công xây lắp của Kiểu Việt áp dụng mức thuế suất phổ thông 10% (hoặc 8% trong các giai đoạn được Quốc hội giảm thuế)."
      },
      {
        topic: "Quy định 2 phương pháp tính thuế GTGT (Khấu trừ vs Trực tiếp)",
        type: "modified",
        oldRule: "Nhiều doanh nghiệp lớn vẫn áp dụng phương pháp tính trực tiếp trên doanh thu gây đứt gãy chuỗi hóa đơn.",
        newRule: "Phân định rõ: Phương pháp khấu trừ thuế (bắt buộc với doanh nghiệp có doanh thu từ 1 tỷ đồng trở lên) vs Phương pháp trực tiếp trên GTGT (% doanh thu).",
        impactNote: "Kiểu Việt áp dụng phương pháp khấu trừ thuế, bảo đảm quyền được khấu trừ toàn bộ số thuế GTGT đầu vào của vật tư, máy móc mua vào."
      },
      {
        topic: "Điều kiện khấu trừ thuế GTGT đầu vào",
        type: "added",
        oldRule: "Chỉ cần có hóa đơn GTGT hợp lệ là được kê khai khấu trừ thuế đầu vào bất kể hình thức thanh toán.",
        newRule: "Bắt buộc đồng thời: Có hóa đơn GTGT hợp pháp; và có chứng từ thanh toán không dùng tiền mặt đối với hàng hóa, dịch vụ mua vào từng lần từ 20 triệu đồng trở lên.",
        impactNote: "Kế toán Kiểu Việt chỉ đưa vào bảng kê khấu trừ khi đã có Ủy nhiệm chi qua ngân hàng đối với các hóa đơn vật tư từ 20 triệu đồng."
      },
      {
        topic: "Hoàn thuế GTGT đối với Dự án đầu tư mới",
        type: "added",
        oldRule: "Doanh nghiệp có dự án đầu tư phải chờ dự án đi vào hoạt động phát sinh doanh thu mới được bù trừ dần số thuế lũy kế.",
        newRule: "Doanh nghiệp đang hoạt động có dự án đầu tư mới tại cùng hoặc khác tỉnh thành có số thuế GTGT đầu vào chưa khấu trừ từ 300 triệu đồng trở lên được giải quyết hoàn thuế.",
        impactNote: "Kiểu Việt làm hồ sơ hoàn thuế GTGT cho các dự án đầu tư trạm trộn bê tông hoặc cụm nhà xưởng sản xuất cơ khí mới."
      }
    ]
  },
  "tt-219-2013": {
    decreeId: "tt-219-2013",
    title: "Thông tư 219/2013/TT-BTC",
    category: "Thuế GTGT",
    compareWith: "Thông tư 06/2012/TT-BTC",
    summary: "Cẩm nang hướng dẫn thi hành thuế GTGT chi tiết nhất: Quy định thời điểm xác định thuế GTGT xây lắp tại thời điểm nghiệm thu A-B, xác định giá tính thuế chuyển nhượng BĐS và các trường hợp không phải kê khai tính nộp thuế.",
    items: [
      {
        topic: "Thời điểm xác định thuế GTGT đối với hoạt động xây dựng, lắp đặt",
        type: "modified",
        oldRule: "Thời điểm tính thuế GTGT xây lắp phụ thuộc vào việc thanh toán hoặc quyết toán vốn công trình.",
        newRule: "Thời điểm xác định thuế GTGT đối với xây dựng, lắp đặt là thời điểm nghiệm thu, bàn giao công trình, hạng mục công trình, khối lượng xây dựng hoàn thành, không phân biệt đã thu được tiền hay chưa thu được tiền.",
        impactNote: "Kế toán Kiểu Việt kê khai thuế GTGT đầu ra ngay trong kỳ lập biên bản nghiệm thu A-B, bảo đảm không bị thanh tra thuế truy thu và phạt chậm nộp."
      },
      {
        topic: "Xác định giá tính thuế GTGT đối với hoạt động chuyển nhượng bất động sản",
        type: "modified",
        oldRule: "Tính thuế GTGT trên toàn bộ giá bán bất động sản bao gồm cả giá trị quyền sử dụng đất.",
        newRule: "Giá tính thuế GTGT là giá chuyển nhượng bất động sản trừ (-) giá đất được trừ theo quy định của pháp luật về đất đai.",
        impactNote: "Kiểu Việt bóc tách chính xác giá đất được trừ khi bán các căn hộ hoặc nhà phố dự án để tối ưu hóa số thuế GTGT phải nộp."
      },
      {
        topic: "Các trường hợp không phải kê khai, tính nộp thuế GTGT",
        type: "added",
        oldRule: "Mọi khoản thu tiền bồi thường, tài trợ, chuyển nhượng dự án đều phải xuất hóa đơn tính thuế GTGT 10%.",
        newRule: "Quy định cụ thể các trường hợp không phải kê khai nộp thuế GTGT: Tiền bồi thường thiệt hại, tiền thưởng, tiền hỗ trợ, chuyển nhượng dự án đầu tư để sản xuất kinh doanh.",
        impactNote: "Kiểu Việt thu tiền bồi thường do chậm bàn giao mặt bằng của chủ đầu tư chỉ cần lập chứng từ thu chi, không phải chịu 10% thuế GTGT."
      },
      {
        topic: "Khấu trừ thuế GTGT đầu vào của Tài sản cố định dùng chung",
        type: "modified",
        oldRule: "Thuế GTGT của TSCĐ dùng chung cho cả hoạt động chịu thuế và không chịu thuế được khấu trừ toàn bộ.",
        newRule: "Thuế GTGT đầu vào của TSCĐ dùng chung phải phân bổ theo tỷ lệ doanh thu chịu thuế GTGT trên tổng doanh thu phát sinh trong kỳ.",
        impactNote: "Kiểu Việt phân bổ chính xác số thuế GTGT của xe văn phòng, máy bay không người lái khảo sát dùng chung cho các dự án."
      }
    ]
  },
  "nd-180-2024-nd-cp": {
    decreeId: "nd-180-2024-nd-cp",
    title: "Nghị định 180/2024/NĐ-CP",
    category: "Chính sách Giảm thuế GTGT 2% (2025)",
    compareWith: "Quy định thuế GTGT thông thường (10%)",
    summary: "Tiếp tục thực hiện chính sách giảm 2% thuế suất thuế GTGT (từ 10% xuống 8%) trong 6 tháng đầu năm 2025, hỗ trợ doanh nghiệp phục hồi sản xuất và quy định cách xuất hóa đơn 8%.",
    items: [
      {
        topic: "Giảm 2% thuế suất thuế GTGT từ 10% xuống 8%",
        type: "modified",
        oldRule: "Áp dụng mức thuế suất thuế GTGT thông thường 10% theo Luật Thuế GTGT.",
        newRule: "Giảm 2% thuế suất thuế GTGT, áp dụng mức thuế suất 8% đối với các nhóm hàng hóa, dịch vụ đang áp dụng mức thuế suất 10% trong thời hạn quy định.",
        impactNote: "Các dịch vụ thi công xây lắp, lắp đặt thiết bị của Kiểu Việt thuộc đối tượng được áp dụng thuế suất ưu đãi 8%, giúp giảm giá thành cho khách hàng."
      },
      {
        topic: "Danh mục các lĩnh vực không được giảm thuế GTGT (vẫn giữ 10%)",
        type: "modified",
        oldRule: "Giảm thuế GTGT áp dụng đại trà cho toàn bộ nền kinh tế.",
        newRule: "Loại trừ không giảm thuế đối với: Viễn thông, hoạt động tài chính, ngân hàng, chứng khoán, bảo hiểm, kinh doanh bất động sản, kim loại, sản phẩm từ khoáng sản.",
        impactNote: "Kiểu Việt lưu ý: Hoạt động kinh doanh bất động sản và khai thác cát đá khoáng sản vẫn chịu thuế 10%, không được áp dụng mức 8%."
      },
      {
        topic: "Hướng dẫn lập hóa đơn điện tử giảm thuế 8%",
        type: "added",
        oldRule: "Hóa đơn điện tử chỉ có các cột thuế suất mặc định 0%, 5%, 10%.",
        newRule: "Trên hóa đơn điện tử chọn dòng thuế suất 8%; trường hợp xuất chung nhiều mức thuế suất phải thể hiện rõ thuế suất của từng mặt hàng.",
        impactNote: "Kế toán Kiểu Việt kiểm tra kỹ phần mềm hóa đơn để chọn đúng dòng thuế suất 8%, không xuất nhầm sang thuế suất 10%."
      },
      {
        topic: "Xử lý trường hợp đã xuất hóa đơn thuế suất 10% trước đó",
        type: "added",
        oldRule: "Chưa có hướng dẫn xử lý hồi tố khi xuất nhầm thuế suất trong giai đoạn chuyển tiếp.",
        newRule: "Nếu đã xuất hóa đơn 10% đối với hàng hóa thuộc diện được giảm 8%, người bán và người mua lập biên bản hoặc thỏa thuận, sau đó người bán lập hóa đơn điều chỉnh giảm 2% thuế suất.",
        impactNote: "Kiểu Việt chủ động rà soát các hóa đơn đầu vào từ nhà thầu phụ để yêu cầu xuất hóa đơn điều chỉnh về 8% bảo đảm quyền lợi thuế."
      }
    ]
  },
  "nd-15-2022": {
    decreeId: "nd-15-2022",
    title: "Nghị định 15/2022/NĐ-CP",
    category: "Miễn giảm thuế phục hồi kinh tế",
    compareWith: "Quy định thuế GTGT & TNDN thông thường",
    summary: "Gói giải pháp tài khóa quy mô lớn nhất sau đại dịch Covid-19: Giảm 2% thuế GTGT lần đầu tiên trên diện rộng và tính vào chi phí được trừ đối với các khoản tài trợ phòng chống dịch.",
    items: [
      {
        topic: "Chính sách giảm 2% thuế GTGT kích cầu kinh tế lần đầu tiên",
        type: "added",
        oldRule: "Mức thuế suất 10% cố định xuyên suốt từ năm 2008 không có cơ chế giảm linh hoạt.",
        newRule: "Lần đầu tiên Quốc hội và Chính phủ ban hành chính sách giảm thuế suất thuế GTGT từ 10% xuống 8% để kích cầu tiêu dùng nội địa.",
        impactNote: "Đặt tiền đề cho chuỗi chính sách giảm thuế 2% liên tục trong các năm 2022, 2023, 2024 và 2025 cho ngành xây dựng."
      },
      {
        topic: "Phụ lục danh mục hàng hóa dịch vụ không được giảm thuế (Phụ lục I, II, III)",
        type: "added",
        oldRule: "Chưa có hệ thống mã ngành kinh tế chi tiết 7 chữ số để tra cứu phạm vi giảm thuế.",
        newRule: "Ban hành 3 Phụ lục chi tiết kèm mã sản phẩm HS để tra cứu chính xác hàng hóa không được giảm thuế (than cốc, hóa chất, kim loại, sản phẩm tài chính).",
        impactNote: "Kế toán Kiểu Việt tra cứu mã ngành sản phẩm vật liệu xây dựng để xác định chính xác mặt hàng nào chịu thuế 8%, mặt hàng nào chịu thuế 10%."
      },
      {
        topic: "Tính vào chi phí được trừ đối với khoản chi tài trợ phòng chống dịch Covid-19",
        type: "added",
        oldRule: "Các khoản chi ủng hộ trang thiết bị y tế, vaccine cho các bệnh viện thường bị cơ quan thuế bóc tách khỏi chi phí hợp lý.",
        newRule: "Cho phép tính vào chi phí được trừ khi xác định thuế TNDN toàn bộ các khoản chi ủng hộ, tài trợ bằng tiền, hiện vật cho công tác phòng chống dịch Covid-19 có xác nhận.",
        impactNote: "Kiểu Việt quyết toán trọn vẹn chi phí mua kit test, khẩu trang, trang thiết bị y tế cho công nhân các công trường."
      }
    ]
  },
  "nd-64-2024": {
    decreeId: "nd-64-2024",
    title: "Nghị định 64/2024/NĐ-CP",
    category: "Gia hạn thời hạn nộp thuế (2024)",
    compareWith: "Thời hạn nộp thuế thông thường",
    summary: "Gia hạn thời hạn nộp thuế GTGT, thuế TNDN và tiền thuê đất trong năm 2024, hỗ trợ thanh khoản dòng tiền cho doanh nghiệp mà không bị tính tiền phạt chậm nộp.",
    items: [
      {
        topic: "Gia hạn thời hạn nộp thuế Giá trị gia tăng (Gia hạn 5 tháng)",
        type: "added",
        oldRule: "Thuế GTGT tháng/quý phải nộp chậm nhất vào ngày 20 của tháng tiếp theo hoặc ngày cuối cùng của tháng đầu quý sau.",
        newRule: "Gia hạn 5 tháng đối với số thuế GTGT phát sinh phải nộp từ tháng 5 đến tháng 9/2024 (và quý 2/2024) cho doanh nghiệp thuộc đối tượng hỗ trợ.",
        impactNote: "Kiểu Việt giữ lại hàng tỷ đồng tiền thuế GTGT trong 5 tháng để bổ sung vốn lưu động mua vật tư thi công các công trình lớn."
      },
      {
        topic: "Gia hạn thời hạn nộp thuế Thu nhập doanh nghiệp tạm nộp Quý 2",
        type: "added",
        oldRule: "Thuế TNDN tạm nộp quý 2 phải nộp chậm nhất vào ngày 30/07.",
        newRule: "Gia hạn 3 tháng đối với số thuế TNDN tạm nộp của quý 2 năm 2024 kể từ ngày kết thúc thời hạn nộp thuế theo quy định.",
        impactNote: "Giảm áp lực dòng tiền chi trả nghĩa vụ thuế cho Kiểu Việt vào giai đoạn cao điểm thi công giữa năm."
      },
      {
        topic: "Gia hạn nộp 50% số tiền thuê đất phát sinh trong năm",
        type: "added",
        oldRule: "Tiền thuê đất nộp 2 kỳ: Kỳ 1 chậm nhất 31/05 và Kỳ 2 chậm nhất 31/10 hàng năm.",
        newRule: "Gia hạn thời hạn nộp đối với 50% số tiền thuê đất phát sinh phải nộp năm 2024 của doanh nghiệp trong thời hạn 2 tháng kể từ ngày 31/10/2024.",
        impactNote: "Kiểu Việt được giãn tiến độ nộp tiền thuê mặt bằng bãi đúc cấu kiện bê tông và kho bãi tập kết vật tư xây dựng."
      },
      {
        topic: "Thủ tục gia hạn nộp thuế một lần duy nhất",
        type: "added",
        oldRule: "Phải nộp hồ sơ xin gia hạn cho từng kỳ phát sinh nghĩa vụ thuế.",
        newRule: "Doanh nghiệp chỉ cần gửi 01 Giấy đề nghị gia hạn nộp thuế và tiền thuê đất cho cơ quan thuế quản lý trực tiếp bằng phương thức điện tử cho toàn bộ các sắc thuế.",
        impactNote: "Kế toán Kiểu Việt chỉ mất 5 phút gửi Giấy đề nghị qua Cổng thuedientu.gdt.gov.vn là được tự động gia hạn hợp pháp."
      }
    ]
  }
};

const code = `import { DecreeDiffData } from '../diff-types';

export const group3CorporatePersonalTax: Record<string, DecreeDiffData> = ${JSON.stringify(group3, null, 2)};
`;

fs.writeFileSync('src/data/diffs/group3_corporate_personal_tax.ts', code, 'utf8');
console.log('Group 3 generated successfully (11 decrees).');
