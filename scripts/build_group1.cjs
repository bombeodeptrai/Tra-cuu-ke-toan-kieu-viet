const fs = require('fs');

const group1 = {
  "tt-99-2025": {
    decreeId: "tt-99-2025",
    title: "Thông tư 99/2025/TT-BTC",
    category: "Chế độ Kế toán Doanh nghiệp",
    compareWith: "Thông tư 200/2014/TT-BTC",
    summary: "Thông tư 99/2025/TT-BTC hiện đại hóa căn bản hệ thống kế toán doanh nghiệp Việt Nam, bãi bỏ các tài khoản trung gian rườm rà, đo lường theo Giá trị hợp lý (Fair Value), tiệm cận chuẩn mực quốc tế IFRS và hỗ trợ chuyển đổi số toàn diện.",
    items: [
      {
        topic: "Tập hợp chi phí thi công xây lắp & sản xuất (TK 154 thay thế 621, 622, 623, 627)",
        type: "modified",
        oldRule: "Bắt buộc mở và theo dõi tách biệt 4 tài khoản chi phí: 621 (Chi phí NVL trực tiếp), 622 (Nhân công trực tiếp), 623 (Máy thi công), 627 (Sản xuất chung), cuối kỳ mới kết chuyển sang TK 154.",
        newRule: "Cho phép doanh nghiệp tinh giản, theo dõi trực tiếp chi phí xây lắp trên các tiểu khoản cấp 2, cấp 3 của TK 154 (1541-NVL, 1542-Nhân công, 1543-Máy thi công, 1547-Sản xuất chung) mà không cần qua tài khoản loại 6.",
        impactNote: "Kế toán Kiểu Việt giảm bớt hơn 40% bút toán kết chuyển trung gian cuối tháng, giá thành từng hạng mục công trình thi công được tổng hợp tức thời và minh bạch."
      },
      {
        topic: "Bãi bỏ các tài khoản giảm trừ doanh thu (TK 5211, 5212, 5213)",
        type: "removed",
        oldRule: "Sử dụng TK 521 gồm các tài khoản chiết khấu thương mại (5211), giảm giá hàng bán (5212), hàng bán bị trả lại (5213) rồi cuối kỳ kết chuyển giảm trừ sang TK 511.",
        newRule: "Xóa bỏ toàn bộ các tài khoản 521x. Toàn bộ các khoản chiết khấu, giảm giá, bồi hoàn khối lượng nghiệm thu được hạch toán trực tiếp vào bên Nợ của TK 511 (Doanh thu bán hàng và cung cấp dịch vụ).",
        impactNote: "Báo cáo doanh thu thuần phản ánh tức thì giá trị thực nhận sau điều chỉnh A-B, không còn độ trễ kết chuyển doanh thu."
      },
      {
        topic: "Xóa bỏ toàn bộ hệ thống tài khoản ngoài bảng (Loại 0)",
        type: "removed",
        oldRule: "Duy trì bắt buộc tài khoản loại 0 (TK 001, 002, 004, 007...) để ghi đơn vật tư nhận giữ hộ, tài sản thuê ngoài, ngoại tệ.",
        newRule: "Bãi bỏ hoàn toàn việc ghi đơn trên tài khoản loại 0. Toàn bộ tài sản nhận giữ hộ, máy móc thuê ngoài công trình được quản lý chi tiết trên sổ kế toán nội bộ và thuyết minh trên Báo cáo tài chính.",
        impactNote: "Hệ thống phần mềm kế toán Kiểu Việt không còn xung đột giữa hạch toán kép và ghi đơn, bảo đảm tính toàn vẹn cơ sở dữ liệu."
      },
      {
        topic: "Đo lường tài sản và công nợ theo Giá trị hợp lý (Fair Value)",
        type: "added",
        oldRule: "Chủ yếu hạch toán cứng nhắc theo nguyên tắc Giá gốc (Historical Cost), việc đánh giá lại tài sản chỉ thực hiện khi có quyết định cổ phần hóa hoặc định giá nhà nước.",
        newRule: "Quy định khung đo lường tài sản tài chính, công cụ nợ và công nợ dài hạn theo Giá trị hợp lý tại ngày lập BCTC nếu có thị trường hoạt động đáng tin cậy.",
        impactNote: "Tài sản máy móc và công cụ tài chính của Kiểu Việt được phản ánh sát giá thị trường, nâng cao năng lực hồ sơ đấu thầu khi tham gia các dự án xây dựng lớn."
      },
      {
        topic: "Tự chủ hoàn toàn mẫu biểu chứng từ và hệ thống sổ kế toán",
        type: "modified",
        oldRule: "Các biểu mẫu chứng từ kế toán và sổ sách tuy là hướng dẫn nhưng các cơ quan thanh tra vẫn yêu cầu cứng nhắc theo mẫu biểu ban hành kèm Thông tư.",
        newRule: "Doanh nghiệp có toàn quyền tự thiết kế hệ thống chứng từ và sổ kế toán điện tử, chỉ cần bảo đảm tối thiểu 7 nội dung cơ bản theo Luật Kế toán.",
        impactNote: "Kiểu Việt tự do chuẩn hóa các Biên bản giao nhận vật tư công trường, Bảng xác định khối lượng hoàn thành Mẫu 03a tích hợp chữ ký số nội bộ."
      },
      {
        topic: "Cải cách toàn diện hệ thống Báo cáo tài chính (B01-DN, B02-DN, B03-DN, B09-DN)",
        type: "modified",
        oldRule: "Mẫu BCTC theo TT 200 có nhiều chỉ tiêu trùng lặp và bản thuyết minh BCTC dài dòng, thiếu thông tin về dòng tiền thực tế.",
        newRule: "Ban hành mẫu Báo cáo tình hình tài chính, Báo cáo KQKD, Báo cáo LCTT và Thuyết minh BCTC tinh gọn, bổ sung chỉ tiêu phân tích rủi ro thanh khoản và biến động vốn lưu động.",
        impactNote: "Ban Giám đốc Kiểu Việt nắm bắt chính xác sức khỏe tài chính và cấu trúc dòng tiền thi công công trình của toàn công ty."
      }
    ]
  },
  "tt-200-2014": {
    decreeId: "tt-200-2014",
    title: "Thông tư 200/2014/TT-BTC",
    category: "Chế độ Kế toán Doanh nghiệp",
    compareWith: "Quyết định 15/2006/QĐ-BTC",
    summary: "Cột mốc lịch sử trong quản trị tài chính doanh nghiệp, trao quyền tự chủ tối đa trong tổ chức công tác kế toán, thiết kế chứng từ, bãi bỏ quy định cứng nhắc và mở rộng ghi nhận doanh thu theo bản chất hơn hình thức.",
    items: [
      {
        topic: "Tính bắt buộc của mẫu biểu chứng từ kế toán",
        type: "modified",
        oldRule: "Doanh nghiệp phải áp dụng chuẩn xác 100% theo các mẫu chứng từ bắt buộc do Bộ Tài chính ban hành trong Quyết định 15.",
        newRule: "Toàn bộ mẫu chứng từ kế toán mang tính chất hướng dẫn. Doanh nghiệp được tự thiết kế mẫu phù hợp đặc thù sản xuất kinh doanh của mình.",
        impactNote: "Kiểu Việt chủ động thiết kế Phiếu xuất kho công trình và Phiếu nghiệm thu nội bộ gắn mã dự án riêng biệt."
      },
      {
        topic: "Hạch toán chênh lệch tỷ giá hối đoái (TK 413)",
        type: "modified",
        oldRule: "Chênh lệch tỷ giá giai đoạn trước hoạt động được treo trên TK 413 rồi phân bổ dần vào chi phí tối đa 5 năm sau khi đi vào hoạt động.",
        newRule: "Bãi bỏ việc treo chênh lệch tỷ giá trước hoạt động. Toàn bộ chênh lệch tỷ giá phát sinh trong kỳ đều đưa ngay vào doanh thu tài chính (TK 515) hoặc chi phí tài chính (TK 635).",
        impactNote: "Báo cáo tài chính phản ánh trung thực kết quả kinh doanh từng kỳ, không còn rủi ro tồn đọng chi phí tỷ giá treo phân bổ."
      },
      {
        topic: "Ghi nhận doanh thu bất động sản và công trình xây dựng",
        type: "modified",
        oldRule: "Cho phép ghi nhận doanh thu bất động sản theo tiến độ thu tiền của khách hàng khi đã ký hợp đồng mua bán.",
        newRule: "Chỉ được ghi nhận doanh thu khi đã bàn giao thực tế bất động sản cho người mua và chuyển giao phần lớn rủi ro, lợi ích gắn liền với quyền sở hữu.",
        impactNote: "Kế toán Kiểu Việt chỉ ghi nhận doanh thu khi có Biên bản bàn giao công trình đưa vào sử dụng có xác nhận của Chủ đầu tư (A-B)."
      },
      {
        topic: "Xử lý chi phí khấu hao TSCĐ nhàn rỗi, ngừng hoạt động",
        type: "modified",
        oldRule: "Khấu hao TSCĐ nhàn rỗi hoặc ngừng hoạt động vì lý do mùa vụ được hạch toán vào Chi phí khác (TK 811).",
        newRule: "Toàn bộ chi phí khấu hao của TSCĐ tạm ngừng hoạt động do theo mùa vụ, sửa chữa định kỳ được hạch toán vào Chi phí quản lý doanh nghiệp (TK 642).",
        impactNote: "Chi phí khấu hao các máy móc thi công chờ điều chuyển công trường được hạch toán đúng tính chất chi phí quản lý vận hành."
      },
      {
        topic: "Đổi mới phương pháp lập Báo cáo lưu chuyển tiền tệ (LCTT)",
        type: "modified",
        oldRule: "Phương pháp gián tiếp điều chỉnh từ lợi nhuận thuần sau thuế, dẫn đến các sai số lũy kế trong hạch toán thuế.",
        newRule: "Chuẩn hóa phương pháp lập Báo cáo LCTT gián tiếp bắt đầu từ Lợi nhuận kế toán trước thuế, loại trừ chính xác các khoản mục phi tiền tệ.",
        impactNote: "Dòng tiền thuần từ hoạt động kinh doanh của Kiểu Việt được kiểm soát chính xác phục vụ kế hoạch trả nợ vay ngân hàng."
      }
    ]
  },
  "tt-133-2016": {
    decreeId: "tt-133-2016",
    title: "Thông tư 133/2016/TT-BTC",
    category: "Kế toán Doanh nghiệp nhỏ và vừa",
    compareWith: "Quyết định 48/2006/QĐ-BTC",
    summary: "Chế độ kế toán dành riêng cho Doanh nghiệp nhỏ và vừa (DNNVV), cắt giảm triệt để các thủ tục rườm rà, tinh giản tối đa hệ thống tài khoản và không bắt buộc nộp Báo cáo lưu chuyển tiền tệ.",
    items: [
      {
        topic: "Đơn giản hóa hệ thống tài khoản tập hợp chi phí thi công",
        type: "modified",
        oldRule: "Vẫn duy trì các tài khoản chi phí 621, 622, 627 phức tạp tương tự doanh nghiệp quy mô lớn.",
        newRule: "Bãi bỏ hoàn toàn các tài khoản 621, 622, 623, 627. Toàn bộ chi phí sản xuất, thi công công trình tập hợp trực tiếp vào TK 154 (Chi phí SXKD dở dang).",
        impactNote: "Rất phù hợp cho các công ty liên kết, nhà thầu phụ quy mô vừa và nhỏ trong hệ sinh thái Kiểu Việt hạch toán nhanh gọn."
      },
      {
        topic: "Lập Báo cáo lưu chuyển tiền tệ (LCTT)",
        type: "removed",
        oldRule: "Bắt buộc phải lập và nộp Báo cáo lưu chuyển tiền tệ cùng Bảng CĐKT và Báo cáo KQKD cho Cơ quan Thuế.",
        newRule: "Không bắt buộc lập Báo cáo LCTT nộp cho Cơ quan Thuế (chỉ khuyến khích lập phục vụ mục đích quản trị nội bộ doanh nghiệp).",
        impactNote: "Cắt giảm 50% áp lực lập BCTC niên độ cho các đơn vị trực thuộc quy mô nhỏ của Kiểu Việt."
      },
      {
        topic: "Trích lập dự phòng phải thu khó đòi theo ước tính tổn thất",
        type: "modified",
        oldRule: "Phải tuân thủ cứng nhắc theo các mốc thời gian quá hạn của Thông tư 228 (30%, 50%, 70%).",
        newRule: "Doanh nghiệp tự ước tính mức tổn thất có thể xảy ra của các khoản nợ phải thu chưa đến hạn hoặc quá hạn để trích lập dự phòng phù hợp.",
        impactNote: "Kiểu Việt có quyền tự đánh giá khả năng thanh toán của từng chủ đầu tư để chủ động trích lập dự phòng công nợ."
      },
      {
        topic: "Quyền lựa chọn áp dụng Chế độ Kế toán Doanh nghiệp (TT 200)",
        type: "added",
        oldRule: "DNNVV bắt buộc phải áp dụng Quyết định 48, muốn đổi phải làm văn bản xin phép Bộ Tài chính.",
        newRule: "DNNVV được quyền tự do lựa chọn áp dụng Chế độ KT Doanh nghiệp theo Thông tư 200 nhưng phải thông báo cho cơ quan thuế và nhất quán trong năm.",
        impactNote: "Kiểu Việt hoàn toàn chủ động áp dụng chế độ kế toán nâng cao để đáp ứng yêu cầu thẩm định hồ sơ năng lực dự án."
      },
      {
        topic: "Mẫu biểu BCTC dành cho doanh nghiệp siêu nhỏ",
        type: "added",
        oldRule: "Chưa có quy định riêng biệt cho doanh nghiệp siêu nhỏ, vẫn áp dụng biểu mẫu chung.",
        newRule: "Ban hành mẫu Báo cáo tình hình tài chính siêu đơn giản (Mẫu B01a-DNN và B01b-DNN) theo nguyên tắc tính thanh khoản giảm dần.",
        impactNote: "Giúp các tổ đội thi công hạch toán độc lập dễ dàng lập báo cáo phục vụ quyết toán nội bộ."
      }
    ]
  },
  "tt-46-2025": {
    decreeId: "tt-46-2025",
    title: "Thông tư 46/2025/TT-BTC",
    category: "Kế toán DNNVV (Sửa đổi)",
    compareWith: "Thông tư 133/2016/TT-BTC",
    summary: "Sửa đổi, bổ sung Chế độ kế toán doanh nghiệp nhỏ và vừa: Đồng bộ hóa với giao dịch số, hóa đơn điện tử, chuẩn mực kế toán đám mây và quy định kê khai thuế trực tuyến.",
    items: [
      {
        topic: "Công nhận 100% tính pháp lý của chứng từ số và lưu trữ đám mây",
        type: "added",
        oldRule: "Ưu tiên in và lưu trữ sổ sách, chứng từ kế toán giấy đóng tập có đóng dấu giáp lai theo năm tài chính.",
        newRule: "Công nhận giá trị pháp lý đầy đủ của chứng từ điện tử, chữ ký số phân quyền và dữ liệu sổ kế toán lưu trữ trên nền tảng đám mây đạt chuẩn an toàn thông tin.",
        impactNote: "Kiểu Việt hoàn toàn có thể loại bỏ việc in ấn hàng ngàn trang sổ chi tiết, chuyển sang lưu trữ số an toàn và tiết kiệm 80% chi phí kho bãi."
      },
      {
        topic: "Đồng bộ hạch toán hóa đơn điện tử khởi tạo từ máy tính tiền",
        type: "added",
        oldRule: "Chưa có hướng dẫn cụ thể về việc ghi nhận doanh thu từ hóa đơn khởi tạo từ máy tính tiền kết nối dữ liệu thuế.",
        newRule: "Quy định quy trình đối soát dữ liệu bán hàng tự động hàng ngày giữa máy tính tiền với phần mềm kế toán và Cổng thông tin Tổng cục Thuế.",
        impactNote: "Bảo đảm doanh thu bán lẻ vật tư, dịch vụ sửa chữa của Kiểu Việt được khớp đúng 100% với dữ liệu thuế điện tử."
      },
      {
        topic: "Tiêu chí linh hoạt phân loại quy mô doanh nghiệp",
        type: "modified",
        oldRule: "Căn cứ cứng nhắc theo mức vốn điều lệ đăng ký trên Giấy phép kinh doanh và số lao động đóng BHXH.",
        newRule: "Cập nhật tiêu chí đánh giá linh hoạt theo Doanh thu bán hàng năm trước và Tổng tài sản bình quân, tạo hành lang thuận lợi khi mở rộng quy mô.",
        impactNote: "Giúp ban điều hành Kiểu Việt chuẩn bị lộ trình chuyển đổi từ chuẩn kế toán DNNVV sang chuẩn doanh nghiệp lớn đúng thời điểm."
      },
      {
        topic: "Quy trình chuyển đổi số liệu kế toán giữa hai niên độ",
        type: "modified",
        oldRule: "Việc chuyển đổi sổ kế toán cuối năm phải khóa sổ thủ công và in biên bản bàn giao số dư đầu kỳ.",
        newRule: "Cho phép hệ thống phần mềm kế toán tự động kết chuyển số dư và tự động tạo mã hash kiểm tra tính toàn vẹn của dữ liệu kỳ trước.",
        impactNote: "Khóa sổ cuối năm tại Kiểu Việt diễn ra chỉ trong vài giây, loại bỏ hoàn toàn nguy cơ sai lệch số dư chuyển tiếp."
      }
    ]
  },
  "tt-24-2024-tt-btc": {
    decreeId: "tt-24-2024-tt-btc",
    title: "Thông tư 24/2024/TT-BTC",
    category: "Kế toán HCSN & Dự án",
    compareWith: "Thông tư 107/2017/TT-BTC",
    summary: "Hướng dẫn chế độ kế toán hành chính sự nghiệp mới từ 01/01/2025, chuẩn hóa tài khoản theo dõi nguồn vốn đầu tư công, giải ngân vốn xây dựng cơ bản và đối soát kho bạc nhà nước.",
    items: [
      {
        topic: "Phương pháp hạch toán nguồn vốn giải ngân xây dựng cơ bản",
        type: "modified",
        oldRule: "Sử dụng TK 337 và 241 với các bút toán tạm ứng nguồn vốn ngân sách nhà nước phức tạp.",
        newRule: "Chuẩn hóa quy trình ghi nhận công nợ và giải ngân qua Kho bạc theo phương thức thực chi và tạm ứng hợp đồng dự án.",
        impactNote: "Giúp Kiểu Việt đối chiếu hồ sơ thanh toán khối lượng xây lắp A-B với các Ban Quản lý Dự án (Chủ đầu tư vốn nhà nước) chuẩn xác."
      },
      {
        topic: "Chứng từ kế toán điện tử giao dịch với Kho bạc Nhà nước",
        type: "added",
        oldRule: "Hồ sơ thanh toán vốn đầu tư công phải in và nộp chứng từ giấy có dấu đỏ trực tiếp tại quầy Kho bạc.",
        newRule: "100% hồ sơ nghiệm thu, ủy nhiệm chi và bảng xác định khối lượng hoàn thành Mẫu 03a được ký số và gửi qua Cổng Dịch vụ công Kho bạc.",
        impactNote: "Rút ngắn thời gian giải ngân thu hồi công nợ các gói thầu thi công hạ tầng của Kiểu Việt từ hàng tuần xuống 24 - 48 giờ."
      },
      {
        topic: "Xử lý khoản chi phí tư vấn và quản lý dự án chưa quyết toán",
        type: "modified",
        oldRule: "Theo dõi dồn tích kéo dài, khó bóc tách chi phí quản lý dự án khi bàn giao từng giai đoạn công trình.",
        newRule: "Quy định nguyên tắc phân bổ chi phí tư vấn, thẩm tra và quản lý dự án theo tỷ lệ tương ứng giá trị khối lượng nghiệm thu bàn giao.",
        impactNote: "Kiểu Việt có cơ sở pháp lý để yêu cầu Ban QLDA thanh toán dứt điểm chi phí xây lắp theo từng giai đoạn nghiệm thu."
      },
      {
        topic: "Hệ thống tài khoản tài sản công và máy móc thiết bị dự án",
        type: "modified",
        oldRule: "Tài sản dự án và tài sản đơn vị sự nghiệp theo dõi chung trên nhóm tài khoản 211 thiếu phân định nguồn vốn.",
        newRule: "Tách bạch tài sản cố định hình thành từ nguồn vốn ngân sách nhà nước với tài sản của nhà thầu thi công tại hiện trường.",
        impactNote: "Tránh rủi ro tranh chấp sở hữu máy móc thiết bị thi công của Kiểu Việt đưa vào công trường dự án đầu tư công."
      }
    ]
  },
  "tt-108-2025": {
    decreeId: "tt-108-2025",
    title: "Thông tư 108/2025/TT-BTC",
    category: "Báo cáo tài chính hợp nhất",
    compareWith: "Thông tư 202/2014/TT-BTC",
    summary: "Hướng dẫn lập và trình bày Báo cáo tài chính hợp nhất theo chuẩn mực quốc tế IFRS 10, loại trừ triệt để giao dịch nội bộ và xác định chính xác lợi ích cổ đông không kiểm soát (NCI).",
    items: [
      {
        topic: "Xác định quyền kiểm soát công ty con (Control Assessment)",
        type: "modified",
        oldRule: "Căn cứ chủ yếu vào tỷ lệ quyền biểu quyết trực tiếp trên 50% vốn điều lệ của công ty con.",
        newRule: "Đánh giá quyền kiểm soát dựa trên 3 yếu tố cốt lõi: Quyền lực đối với bên nhận đầu tư, khả năng tiếp cận lợi nhuận biến đổi và khả năng sử dụng quyền lực để tác động đến lợi nhuận.",
        impactNote: "Kiểu Việt đánh giá chuẩn xác quyền chi phối đối với các đơn vị liên doanh, liên kết thi công để hợp nhất BCTC."
      },
      {
        topic: "Loại trừ giao dịch nội bộ và lãi chưa thực hiện (Unrealized Profit)",
        type: "modified",
        oldRule: "Phương pháp loại trừ số dư nợ phải thu, phải trả và lãi nội bộ phân bổ thủ công theo tỷ lệ sở hữu.",
        newRule: "Loại trừ 100% lãi chưa thực hiện phát sinh từ các giao dịch bán vật tư, điều chuyển máy móc nội bộ giữa công ty mẹ và công ty con.",
        impactNote: "Bảo đảm Báo cáo tài chính hợp nhất của Tập đoàn Kiểu Việt không bị thổi phồng doanh thu hay lợi nhuận ảo."
      },
      {
        topic: "Đo lường Lợi ích cổ đông không kiểm soát (NCI)",
        type: "added",
        oldRule: "NCI chỉ được đo lường duy nhất theo tỷ lệ giá trị tài sản thuần của bên bị mua tại ngày mua.",
        newRule: "Cho phép lựa chọn đo lường NCI theo Giá trị hợp lý (Fair Value Method) hoặc theo Tỷ lệ phần trăm tài sản thuần tương ứng.",
        impactNote: "Phản ánh giá trị thặng dư tài sản và thương hiệu của các công ty thành viên Kiểu Việt trung thực hơn."
      },
      {
        topic: "Thuyết minh chi tiết các bên liên quan và cam kết bảo lãnh",
        type: "added",
        oldRule: "Thuyết minh nghĩa vụ nợ chung chung, ít giải trình các khoản bảo lãnh tín dụng ngân hàng giữa các công ty con.",
        newRule: "Bắt buộc thuyết minh chi tiết giá trị bảo lãnh thực hiện hợp đồng, bảo lãnh thanh toán công nợ và cam kết tài chính chéo trong tập đoàn.",
        impactNote: "Tăng cường tính minh bạch tín dụng của Kiểu Việt trước các đối tác tài chính và ngân hàng thương mại."
      }
    ]
  },
  "luat-ke-toan-2015": {
    decreeId: "luat-ke-toan-2015",
    title: "Luật Kế toán số 88/2015/QH13",
    category: "Luật Kế toán",
    compareWith: "Luật Kế toán số 03/2003/QH11",
    summary: "Xương sống pháp lý cao nhất điều chỉnh toàn bộ công tác kế toán Việt Nam, lần đầu tiên đưa nguyên tắc Giá trị hợp lý vào luật, bắt buộc kiểm soát nội bộ và quy định chế tài nghiêm ngặt đối với gian lận sổ sách.",
    items: [
      {
        topic: "Áp dụng nguyên tắc Giá trị hợp lý (Fair Value) trong đo lường tài sản",
        type: "added",
        oldRule: "Chỉ quy định duy nhất nguyên tắc Giá gốc (Historical Cost) trong việc tính toán và ghi nhận tài sản, nợ phải trả.",
        newRule: "Bổ sung nguyên tắc đo lường theo Giá trị hợp lý đối với tài sản và nợ phải trả có giá trị biến động thường xuyên theo giá thị trường.",
        impactNote: "Kiểu Việt có cơ sở pháp lý để định giá lại máy móc thiết bị thi công theo đúng giá trị thị trường thực tế khi cần huy động vốn."
      },
      {
        topic: "Quy định bắt buộc về Kiểm soát nội bộ và Kiểm toán nội bộ",
        type: "added",
        oldRule: "Luật Kế toán 2003 chưa quy định nghĩa vụ của doanh nghiệp trong việc thiết lập hệ thống kiểm soát nội bộ.",
        newRule: "Doanh nghiệp có nghĩa vụ thiết lập, duy trì hệ thống kiểm soát nội bộ để bảo đảm tài sản được bảo vệ và số liệu kế toán trung thực.",
        impactNote: "Ban Giám đốc Kiểu Việt thành lập ban kiểm soát nội bộ độc lập để giám sát định mức tiêu hao vật tư tại các công trường thi công."
      },
      {
        topic: "Thời hạn lưu trữ tài liệu kế toán doanh nghiệp",
        type: "modified",
        oldRule: "Quy định chung chung về thời hạn lưu trữ tài liệu chứng từ kế toán mà không phân loại rõ ràng mức độ quan trọng.",
        newRule: "Phân loại 3 cấp độ thời hạn lưu trữ: Tối thiểu 5 năm (chứng từ không dùng trực tiếp ghi sổ), tối thiểu 10 năm (sổ sách, BCTC), và lưu trữ vĩnh viễn (tài liệu quốc phòng, an ninh, lịch sử).",
        impactNote: "Kiểu Việt áp dụng quy chế tiêu hủy chứng từ kế toán quá 5 năm và phân loại lưu trữ BCTC tối thiểu 10 năm theo đúng luật."
      },
      {
        topic: "Các hành vi bị nghiêm cấm tuyệt đối trong kế toán",
        type: "modified",
        oldRule: "Chưa quy định chi tiết chế tài đối với việc lập hai hệ thống sổ sách hoặc để ngoài sổ kế toán.",
        newRule: "Nghiêm cấm tuyệt đối: Lập hai hệ thống sổ kế toán tài chính trở lên; để ngoài sổ kế toán tài sản, nợ phải trả; giả mạo, khai man chứng từ kế toán.",
        impactNote: "Cảnh báo pháp lý tối thượng: Toàn bộ dữ liệu doanh thu, chi phí của Kiểu Việt phải được quản lý trên duy nhất một hệ thống kế toán chính thức."
      },
      {
        topic: "Quy định tiêu chuẩn và trách nhiệm của Kế toán trưởng",
        type: "modified",
        oldRule: "Tiêu chuẩn kế toán trưởng chưa gắn với chứng chỉ hành nghề và thời gian công tác thực tế cụ thể.",
        newRule: "Kế toán trưởng phải có chứng chỉ bồi dưỡng kế toán trưởng, chuyên môn tài chính kế toán từ bậc đại học trở lên và có ít nhất 2 năm công tác thực tế.",
        impactNote: "Kiểu Việt bảo đảm vị trí Kế toán trưởng đáp ứng đủ tiêu chuẩn pháp lý để các báo cáo và chữ ký trên chứng từ có giá trị pháp lý cao nhất."
      }
    ]
  },
  "luat-56-2024": {
    decreeId: "luat-56-2024",
    title: "Luật số 56/2024/QH15",
    category: "Sửa đổi Luật Kế toán, Chứng khoán",
    compareWith: "Luật Kế toán 88/2015/QH13",
    summary: "Cải cách thủ tục hành chính về đăng ký hành nghề, công nhận chữ ký số quốc tế và mở rộng thẩm quyền ký duyệt chứng từ điện tử trong mô hình doanh nghiệp hiện đại.",
    items: [
      {
        topic: "Đơn giản hóa thủ tục cấp phép hành nghề dịch vụ kế toán",
        type: "modified",
        oldRule: "Thủ tục thẩm định chứng chỉ và hồ sơ hành nghề kéo dài với nhiều yêu cầu xác nhận giấy tờ phức tạp.",
        newRule: "Cắt giảm 50% thời gian xử lý thủ tục hành chính, chuyển sang đăng ký và tiếp nhận kết quả trực tuyến toàn trình cấp độ 4.",
        impactNote: "Tạo điều kiện cho đội ngũ chuyên gia kế toán Kiểu Việt dễ dàng đăng ký hành nghề và nâng cao trình độ chuyên môn."
      },
      {
        topic: "Thừa nhận chứng từ điện tử xuyên biên giới và chữ ký số quốc tế",
        type: "added",
        oldRule: "Chứng từ điện tử phát sinh từ các đối tác nước ngoài phải in ra giấy, dịch thuật công chứng mới được ghi sổ kế toán.",
        newRule: "Công nhận giá trị pháp lý của chứng từ điện tử có chữ ký số xác thực quốc tế theo các điều ước quốc tế mà Việt Nam là thành viên.",
        impactNote: "Kiểu Việt hạch toán trực tiếp các hóa đơn mua phần mềm bản quyền, dịch vụ máy chủ nước ngoài (Google, Microsoft) không cần in giấy."
      },
      {
        topic: "Quy định phân quyền ký chứng từ trong hệ thống điện tử",
        type: "added",
        oldRule: "Bắt buộc người đại diện pháp luật và kế toán trưởng phải trực tiếp ký tay hoặc cắm token ký số từng chứng từ.",
        newRule: "Cho phép phân quyền ký số tự động theo hạn mức giá trị giao dịch và phân cấp ủy quyền trên hệ thống ERP nội bộ.",
        impactNote: "Ban Giám đốc Kiểu Việt phân quyền cho Chỉ huy trưởng công trường ký xác nhận phiếu vật tư dưới 50 triệu đồng trực tiếp trên mobile."
      },
      {
        topic: "Tăng mức phạt tiền tối đa đối với hành vi che giấu thông tin tài chính",
        type: "modified",
        oldRule: "Mức phạt hành chính đối với các vi phạm công bố thông tin tài chính còn thấp, chưa đủ sức răn đe.",
        newRule: "Tăng gấp đôi khung tiền phạt và bổ sung biện pháp đình chỉ hoạt động đối với doanh nghiệp cố tình gian lận số liệu kế toán.",
        impactNote: "Nhắc nhở toàn thể bộ phận kế toán Kiểu Việt tuân thủ nghiêm ngặt nguyên tắc trung thực và công khai thông tin tài chính."
      }
    ]
  },
  "vas-01": {
    decreeId: "vas-01",
    title: "Chuẩn mực Kế toán VAS 01 – Chuẩn mực chung",
    category: "Chuẩn mực Kế toán Việt Nam",
    compareWith: "Hệ thống kế toán cũ",
    summary: "Nền tảng của toàn bộ hệ thống chuẩn mực kế toán Việt Nam, thiết lập 7 nguyên tắc kế toán cơ bản và các yêu cầu chất lượng đối với Báo cáo tài chính.",
    items: [
      {
        topic: "Thiết lập 7 nguyên tắc kế toán cơ bản bắt buộc",
        type: "added",
        oldRule: "Kế toán chủ yếu ghi chép theo biểu mẫu thu chi tiền mặt, thiếu hệ thống nguyên tắc chuẩn mực khoa học.",
        newRule: "Quy định bắt buộc 7 nguyên tắc: Cơ sở dồn tích, Hoạt động liên tục, Giá gốc, Phù hợp, Nhất quán, Thận trọng và Trọng yếu.",
        impactNote: "Mọi nghiệp vụ kinh tế tại Kiểu Việt (mua vật tư nợ, trích khấu hao, nghiệm thu A-B) đều phải tuân thủ nghiêm ngặt nguyên tắc dồn tích và phù hợp."
      },
      {
        topic: "Định nghĩa rõ ràng 5 yếu tố cốt lõi của Báo cáo tài chính",
        type: "added",
        oldRule: "Chưa phân định rạch ròi giữa chi phí kinh doanh với chi phí vốn hóa tạo tài sản.",
        newRule: "Định nghĩa chuẩn xác: Tài sản (quyền kiểm soát & lợi ích tương lai), Nợ phải trả, Vốn chủ sở hữu, Doanh thu và Chi phí.",
        impactNote: "Kế toán Kiểu Việt phân loại chuẩn xác chi phí máy móc thi công: chi phí vận hành thường xuyên (TK 154) vs chi phí nâng cấp lớn (TK 211)."
      },
      {
        topic: "Nguyên tắc Thận trọng (Prudence) trong trích lập dự phòng",
        type: "added",
        oldRule: "Thường trì hoãn ghi nhận chi phí tổn thất khiến Báo cáo tài chính không phản ánh đúng rủi ro.",
        newRule: "Phải lập các khoản dự phòng nhưng không quá lớn; không đánh giá cao hơn giá trị của tài sản và thu nhập; không đánh giá thấp hơn nợ và chi phí.",
        impactNote: "Kiểu Việt chủ động trích lập dự phòng nợ khó đòi và giảm giá vật liệu thép, xi măng kịp thời khi thị trường giảm giá."
      },
      {
        topic: "Yêu cầu chất lượng thông tin tài chính (Tính trung thực và có thể so sánh)",
        type: "modified",
        oldRule: "Số liệu kế toán các năm thường thay đổi phương pháp hạch toán tùy tiện làm mất tính so sánh.",
        newRule: "Thông tin kế toán phải trung thực, khách quan, đầy đủ và nhất quán qua các niên độ để so sánh được xu hướng tài chính.",
        impactNote: "Kiểu Việt duy trì phương pháp tính giá hàng tồn kho (Bình quân gia quyền) ổn định để số liệu báo cáo có độ tin cậy cao."
      }
    ]
  },
  "vas-02": {
    decreeId: "vas-02",
    title: "Chuẩn mực Kế toán VAS 02 – Hàng tồn kho",
    category: "Chuẩn mực Kế toán Việt Nam",
    compareWith: "Hệ thống kế toán cũ",
    summary: "Quy định nguyên tắc xác định giá gốc hàng tồn kho, các phương pháp tính giá trị xuất kho và việc lập dự phòng giảm giá hàng tồn kho theo Giá trị thuần có thể thực hiện được (NRV).",
    items: [
      {
        topic: "Cấu thành giá gốc hàng tồn kho mua vào",
        type: "modified",
        oldRule: "Chỉ tính giá mua ghi trên hóa đơn, các chi phí vận chuyển, bốc xếp thường hạch toán thẳng vào chi phí quản lý.",
        newRule: "Giá gốc hàng tồn kho bao gồm: Chi phí mua (giá mua, thuế không hoàn lại), chi phí chế biến và các chi phí liên quan trực tiếp khác (vận chuyển, bốc dỡ, bảo quản).",
        impactNote: "Chi phí vận chuyển cát đá xi măng về công trường thi công của Kiểu Việt được phân bổ đầy đủ vào giá trị vật tư nhập kho (TK 152)."
      },
      {
        topic: "Bãi bỏ phương pháp tính giá xuất kho Nhập sau - Xuất trước (LIFO)",
        type: "removed",
        oldRule: "Cho phép doanh nghiệp sử dụng phương pháp LIFO (Last-In, First-Out) trong thời kỳ lạm phát cao.",
        newRule: "Chỉ cho phép 3 phương pháp tính giá hàng tồn kho: Giá đích danh, Nhập trước - Xuất trước (FIFO) và Bình quân gia quyền.",
        impactNote: "Kiểu Việt áp dụng phương pháp Bình quân gia quyền liên hoàn để tính giá vật tư xuất kho công trình chính xác và ổn định."
      },
      {
        topic: "Đánh giá lại hàng tồn kho theo Giá trị thuần có thể thực hiện được (NRV)",
        type: "added",
        oldRule: "Hàng tồn kho luôn ghi theo giá gốc bất chấp việc hư hỏng, lỗi thời hay giá thị trường giảm mạnh.",
        newRule: "Nếu giá trị thuần có thể thực hiện được thấp hơn giá gốc, hàng tồn kho phải được ghi nhận theo giá trị thuần và trích lập dự phòng giảm giá.",
        impactNote: "Kiểu Việt rà soát vật tư tồn đọng cuối năm tại các kho công trường để trích lập dự phòng giảm giá tính vào giá vốn hợp lý."
      },
      {
        topic: "Quy định hạch toán hao hụt vật tư trong và ngoài định mức",
        type: "modified",
        oldRule: "Mọi khoản hao hụt vật tư thi công đều đưa dồn vào giá thành công trình mà không kiểm tra định mức.",
        newRule: "Hao hụt vật tư trong định mức được tính vào giá thành; hao hụt vượt định mức phải ghi nhận ngay vào Giá vốn hàng bán (TK 632) hoặc bắt bồi thường.",
        impactNote: "Kiểu Việt kiểm soát chặt chẽ định mức hao hụt sắt thép bê tông, xử lý ngay trách nhiệm cá nhân đối với phần vượt định mức."
      }
    ]
  },
  "vas-14": {
    decreeId: "vas-14",
    title: "Chuẩn mực Kế toán VAS 14 – Doanh thu và Thu nhập khác",
    category: "Chuẩn mực Kế toán Việt Nam",
    compareWith: "Hệ thống kế toán cũ",
    summary: "Quy định 5 điều kiện ghi nhận doanh thu bán hàng, doanh thu cung cấp dịch vụ và hợp đồng xây dựng theo tỷ lệ hoàn thành, bảo đảm nguyên tắc phù hợp giữa doanh thu và chi phí.",
    items: [
      {
        topic: "5 điều kiện đồng thời để ghi nhận doanh thu bán hàng",
        type: "added",
        oldRule: "Ghi nhận doanh thu ngay khi xuất hóa đơn hoặc nhận tiền đặt cọc của khách hàng.",
        newRule: "Phải thỏa mãn đồng thời 5 điều kiện: Chuyển giao rủi ro/lợi ích; không còn nắm giữ quyền quản lý; doanh thu xác định tương đối chắc chắn; thu được lợi ích kinh tế; xác định được chi phí liên quan.",
        impactNote: "Kiểu Việt không được ghi nhận doanh thu đối với các khoản tiền tạm ứng trước của chủ đầu tư khi chưa có khối lượng nghiệm thu."
      },
      {
        topic: "Ghi nhận doanh thu hợp đồng xây dựng theo khối lượng hoàn thành",
        type: "modified",
        oldRule: "Ghi nhận doanh thu xây dựng dựa trên tiến độ thu tiền theo hợp đồng thanh toán.",
        newRule: "Doanh thu hợp đồng xây dựng được ghi nhận tương ứng với phần công việc đã hoàn thành được khách hàng nghiệm thu xác nhận (Biên bản A-B).",
        impactNote: "Bảo đảm doanh thu trên Báo cáo tài chính của Kiểu Việt khớp đúng với khối lượng thi công thực tế tại hiện trường."
      },
      {
        topic: "Hạch toán các khoản giảm trừ doanh thu và doanh thu tài chính",
        type: "modified",
        oldRule: "Chiết khấu thanh toán trả sớm cho khách hàng được ghi giảm trừ doanh thu bán hàng.",
        newRule: "Chiết khấu thanh toán không làm giảm doanh thu mà phải hạch toán vào Chi phí tài chính (TK 635); ngược lại được hưởng chiết khấu đưa vào TK 515.",
        impactNote: "Kiểu Việt hạch toán đúng tính chất khoản chiết khấu thanh toán cho nhà cung cấp vật liệu xây dựng."
      },
      {
        topic: "Xác định doanh thu trao đổi hàng hóa dịch vụ không tương tự",
        type: "added",
        oldRule: "Giao dịch đổi hàng (barter) xây dựng lấy sản phẩm bất động sản thường bỏ qua hạch toán doanh thu.",
        newRule: "Giao dịch trao đổi hàng hóa, dịch vụ không tương tự phải được hạch toán theo Giá trị hợp lý của hàng hóa dịch vụ nhận về.",
        impactNote: "Kiểu Việt hạch toán đầy đủ doanh thu và thuế GTGT đối với các gói thầu thi công nhận thanh toán bằng căn hộ hoặc đất nền dự án."
      }
    ]
  }
};

const code = `import { DecreeDiffData } from '../diff-types';

export const group1Accounting: Record<string, DecreeDiffData> = ${JSON.stringify(group1, null, 2)};
`;

fs.writeFileSync('src/data/diffs/group1_accounting.ts', code, 'utf8');
console.log('Group 1 generated successfully (11 decrees).');
