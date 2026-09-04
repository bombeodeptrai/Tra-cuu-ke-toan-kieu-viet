const fs = require('fs');
const path = require('path');

const diffData = {
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
  }
};

console.log('Script loaded successfully with key decrees');
