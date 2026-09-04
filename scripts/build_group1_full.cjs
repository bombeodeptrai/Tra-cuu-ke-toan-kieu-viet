const fs = require('fs');
const path = require('path');

const decrees = {
  "tt-99-2025": {
    decreeId: "tt-99-2025",
    title: "Thông tư 99/2025/TT-BTC",
    category: "Chế độ Kế toán Doanh nghiệp",
    compareWith: "Thông tư 200/2014/TT-BTC",
    summary: "Thông tư 99/2025/TT-BTC cải cách căn bản chế độ kế toán doanh nghiệp Việt Nam: Tiệm cận IFRS, bãi bỏ các tài khoản trung gian rườm rà (621, 622, 623, 627, 142, 521), đo lường theo Giá trị hợp lý (Fair Value), tinh giản chứng từ và số hóa 100% sổ kế toán điện tử.",
    items: [
      {
        topic: "Tập hợp chi phí thi công xây lắp (TK 154 thay thế toàn bộ 621, 622, 623, 627)",
        type: "modified",
        oldRule: "[Căn cứ: Điều 86-90 TT 200/2014] Bắt buộc mở và theo dõi tách biệt 4 tài khoản chi phí: 621 (Chi phí NVL trực tiếp), 622 (Nhân công trực tiếp), 623 (Máy thi công), 627 (Sản xuất chung). Cuối tháng phải lập bút toán kết chuyển Nợ TK 154 / Có TK 621, 622, 623, 627.",
        newRule: "[Căn cứ: Điều 28-32 TT 99/2025] Bãi bỏ toàn bộ tài khoản 621, 622, 623, 627. Toàn bộ chi phí cấu thành công trình xây lắp được hạch toán trực tiếp vào các tiểu khoản của TK 154 (1541-NVL, 1542-Nhân công, 1543-Máy thi công, 1547-Chi phí chung). Định khoản trực tiếp: Nợ TK 154 / Có TK 112, 331, 334, 214.",
        impactNote: "Kế toán Kiểu Việt giảm bớt hơn 40% khối lượng chứng từ kết chuyển trung gian cuối tháng, giá thành từng hạng mục gói thầu công trình được cập nhật tức thời theo thời gian thực."
      },
      {
        topic: "Bãi bỏ tài khoản Chi phí trả trước ngắn hạn (Xóa sổ TK 142, hợp nhất vào TK 242)",
        type: "removed",
        oldRule: "[Căn cứ: Điều 47 TT 200/2014] Mở riêng TK 142 để phản ánh các khoản chi phí trả trước có thời hạn phân bổ dưới 12 tháng (tiền thuê văn phòng, bảo hiểm xe máy thi công 1 năm) và TK 242 cho chi phí trên 12 tháng.",
        newRule: "[Căn cứ: Điều 35 TT 99/2025] Xóa bỏ hoàn toàn TK 142. Toàn bộ chi phí trả trước (công cụ dụng cụ lán trại, sửa chữa máy đào, tiền thuê kho bãi) đều hạch toán vào TK 242. Việc phân loại ngắn hạn/dài hạn được thực hiện tại thời điểm lập BCTC căn cứ thời gian phân bổ còn lại.",
        impactNote: "Kiểu Việt không còn phải theo dõi phức tạp chuyển dịch giữa TK 142 và TK 242, tinh giản danh mục mã tài khoản trên phần mềm ERP."
      },
      {
        topic: "Bãi bỏ các tài khoản giảm trừ doanh thu (Xóa sổ TK 5211, 5212, 5213)",
        type: "removed",
        oldRule: "[Căn cứ: Điều 81 TT 200/2014] Mở riêng TK 521 gồm các tiểu khoản: 5211 (Chiết khấu thương mại), 5212 (Giảm giá hàng bán), 5213 (Hàng bán bị trả lại). Cuối kỳ hạch toán kết chuyển giảm trừ sang TK 511: Nợ TK 511 / Có TK 521.",
        newRule: "[Căn cứ: Điều 45 TT 99/2025] Xóa bỏ hoàn toàn hệ thống tài khoản loại 521x. Toàn bộ các khoản chiết khấu thanh toán theo hợp đồng, giảm giá khối lượng nghiệm thu công trình được ghi trực tiếp vào bên Nợ của TK 511 (Nợ TK 511, Nợ TK 3331 / Có TK 131, 112).",
        impactNote: "Báo cáo doanh thu thuần phản ánh trực tiếp giá trị thực nhận sau điều chỉnh A-B, không còn độ trễ hạch toán kết chuyển doanh thu cuối quý."
      },
      {
        topic: "Bãi bỏ toàn bộ hệ thống tài khoản ngoài bảng (Xóa sổ Tài khoản Loại 0)",
        type: "removed",
        oldRule: "[Căn cứ: Điều 112 TT 200/2014] Bắt buộc duy trì các tài khoản ngoài bảng ghi đơn: TK 001 (Tài sản thuê ngoài), 002 (Vật tư giữ hộ, gia công), 004 (Nợ khó đòi đã xử lý xóa nợ), 007 (Ngoại tệ các loại).",
        newRule: "[Căn cứ: Điều 5 & Điều 18 TT 99/2025] Bãi bỏ hoàn toàn việc ghi đơn trên tài khoản loại 0. Mọi tài sản máy móc thiết bị thuê ngoài, vật tư nhận giữ hộ tại công trường được quản trị chi tiết trên Sổ theo dõi tài sản ngoại bảng điện tử và thuyết minh đầy đủ trên Thuyết minh BCTC (Mẫu B09-DN).",
        impactNote: "Phần mềm kế toán Kiểu Việt không còn xung đột kỹ thuật giữa hạch toán kép và hạch toán đơn, đảm bảo tính nhất quán dữ liệu kiểm toán."
      },
      {
        topic: "Áp dụng nguyên tắc Giá trị hợp lý (Fair Value) trong đo lường tài sản và nợ phải trả",
        type: "added",
        oldRule: "[Căn cứ: Điều 13 TT 200/2014] Hạch toán cứng nhắc theo nguyên tắc Giá gốc (Historical Cost). Việc đánh giá lại tài sản chỉ được thực hiện khi có quyết định cổ phần hóa hoặc định giá của cơ quan nhà nước có thẩm quyền.",
        newRule: "[Căn cứ: Điều 12 & Điều 24 TT 99/2025] Bổ sung khung pháp lý cho phép đo lường tài sản tài chính, công cụ nợ, bất động sản đầu tư theo Giá trị hợp lý tại ngày lập BCTC (nếu có thị trường niêm yết đáng tin cậy). Chênh lệch đánh giá lại được ghi nhận vào Doanh thu tài chính (TK 515) hoặc Chi phí tài chính (TK 635).",
        impactNote: "Tài sản máy móc chuyên dùng và các khoản đầu tư của Kiểu Việt được định giá sát với giá trị thị trường, nâng cao năng lực tài chính khi nộp hồ sơ dự thầu các dự án cao tốc trọng điểm."
      },
      {
        topic: "Hợp nhất tài khoản ký quỹ, ký cược (Xóa sổ TK 1386, 344, quy về TK 244 và TK 3386)",
        type: "modified",
        oldRule: "[Căn cứ: Điều 22 & Điều 60 TT 200/2014] Chia tách phức tạp: TK 1386 (Cầm cố, thế chấp, ký cược ngắn hạn), TK 244 (Ký quỹ, ký cược dài hạn); bên nhận ký cược chia TK 3386 (ngắn hạn) và TK 344 (dài hạn).",
        newRule: "[Căn cứ: Điều 38 TT 99/2025] Hợp nhất toàn bộ các khoản đi ký cược, bảo lãnh dự thầu, bảo lãnh thực hiện hợp đồng vào TK 244 duy nhất; các khoản nhận ký cược, bảo lãnh của nhà thầu phụ quy về TK 3386. Phân loại ngắn/dài hạn thực hiện tự động trên BCTC.",
        impactNote: "Kế toán Kiểu Việt dễ dàng theo dõi hàng chục chứng thư bảo lãnh dự thầu và bảo lãnh tạm ứng công trình tại các ngân hàng MB, VietinBank, BIDV."
      },
      {
        topic: "Hạch toán chi phí bảo hành công trình xây dựng (TK 3522 trích lập 3% - 5%)",
        type: "modified",
        oldRule: "[Căn cứ: Điều 63 TT 200/2014] Trích lập dự phòng bảo hành công trình xây dựng vào chi phí sản xuất chung (TK 627) rồi kết chuyển vào TK 154, hoặc ghi nhận vào chi phí quản lý tùy chính sách kế toán.",
        newRule: "[Căn cứ: Điều 42 TT 99/2025] Bắt buộc trích lập dự phòng bảo hành công trình tính trực tiếp vào giá vốn xây lắp tương ứng: Nợ TK 632 / Có TK 3522 (tỷ lệ 3% - 5% giá trị công trình nghiệm thu A-B). Khi phát sinh chi phí bảo hành thực tế: Nợ TK 3522 / Có TK 154, 112.",
        impactNote: "Bảo đảm giá vốn công trình phản ánh đúng nghĩa vụ bảo hành 12 - 24 tháng theo hợp đồng EPC/xây lắp, tránh đột biến chi phí sau khi đã bàn giao công trình."
      },
      {
        topic: "Ghi nhận doanh thu xây lắp theo hóa đơn nghiệm thu thực tế (Bãi bỏ TK 337)",
        type: "modified",
        oldRule: "[Căn cứ: Điều 58 TT 200/2014] Áp dụng phương pháp ghi nhận doanh thu theo tỷ lệ hoàn thành kế hoạch qua TK 337 (Thanh toán theo tiến độ kế hoạch hợp đồng xây dựng), dẫn đến chênh lệch lớn giữa doanh thu kế toán và hóa đơn GTGT.",
        newRule: "[Căn cứ: Điều 44 TT 99/2025] Bãi bỏ cơ chế hạch toán ảo qua TK 337 đối với hợp đồng xây dựng phổ thông. Doanh thu xây lắp được ghi nhận căn cứ Biên bản nghiệm thu khối lượng hoàn thành (Mẫu 03a) và hóa đơn điện tử xuất trong kỳ: Nợ TK 131 / Có TK 511, Có TK 3331.",
        impactNote: "Loại bỏ hoàn toàn rủi ro bị cơ quan thuế xử phạt vi phạm xuất hóa đơn sai thời điểm hoặc ấn định doanh thu do chênh lệch giữa TK 337 và hóa đơn GTGT."
      },
      {
        topic: "Xử lý chênh lệch tỷ giá hối đoái cuối kỳ (TK 413 - Kết chuyển ngay vào TK 515/635)",
        type: "modified",
        oldRule: "[Căn cứ: Điều 69 TT 200/2014] Doanh nghiệp trong giai đoạn trước hoạt động được treo chênh lệch tỷ giá lỗ trên TK 413 và phân bổ dần trong thời gian tối đa 5 năm vào chi phí tài chính.",
        newRule: "[Căn cứ: Điều 48 TT 99/2025] Bãi bỏ toàn bộ việc treo hoãn chênh lệch tỷ giá. Toàn bộ lãi/lỗ chênh lệch tỷ giá do đánh giá lại số dư ngoại tệ cuối năm tài chính phải kết chuyển ngay 100% vào Doanh thu tài chính (TK 515) hoặc Chi phí tài chính (TK 635).",
        impactNote: "Kiểu Việt có các khoản vay mua máy đào, xe lu bằng USD hoặc thanh toán nhựa đường nhập khẩu phải hạch toán dứt điểm lãi lỗ tỷ giá trong năm tài chính."
      },
      {
        topic: "Hạch toán thuế TNDN hoãn lại (TK 243 & 347) theo phương pháp Bảng cân đối kế toán",
        type: "modified",
        oldRule: "[Căn cứ: Điều 30 & Điều 61 TT 200/2014] Xác định thuế hoãn lại dựa trên chênh lệch tạm thời giữa doanh thu, chi phí theo thuế và kế toán trên Báo cáo kết quả kinh doanh.",
        newRule: "[Căn cứ: Điều 26 TT 99/2025] Tiếp cận chuẩn mực IAS 12: Xác định chênh lệch tạm thời chịu thuế và được khấu trừ dựa trên cơ sở tính thuế của tài sản và nợ phải trả trên Báo cáo tình hình tài chính. Tài sản thuế hoãn lại (TK 243) chỉ được ghi nhận khi chắc chắn có đủ lợi nhuận tính thuế tương lai.",
        impactNote: "Kế toán trưởng Kiểu Việt kiểm soát chặt chẽ việc ghi nhận tài sản thuế hoãn lại từ các khoản trích trước chi phí trích lập dự phòng công nợ nhà thầu phụ."
      },
      {
        topic: "Trích lập dự phòng tổn thất tài sản và nợ khó đòi (TK 229 theo mô hình tổn thất tín dụng)",
        type: "modified",
        oldRule: "[Căn cứ: Điều 44 TT 200/2014] Trích lập dự phòng nợ phải thu khó đòi dựa trên số ngày quá hạn cố định theo Thông tư của Bộ Tài chính (quá hạn từ 6 tháng trích 30%, từ 1 năm trích 50%...).",
        newRule: "[Căn cứ: Điều 23 TT 99/2025] Bổ sung quyền cho doanh nghiệp đánh giá khả năng thu hồi thực tế và mô hình tổn thất tín dụng dự kiến (ECL) đối với các khoản nợ của chủ đầu tư chậm giải ngân vốn đầu tư công, trích lập sát với rủi ro thực tế.",
        impactNote: "Kiểu Việt chủ động trích lập dự phòng đối với các khoản nợ đọng kéo dài từ các dự án BOT, BT hoặc công trình ngân sách địa phương chậm quyết toán."
      },
      {
        topic: "Tự chủ hoàn toàn thiết kế mẫu biểu chứng từ và hệ thống sổ kế toán điện tử",
        type: "modified",
        oldRule: "[Căn cứ: Điều 117-119 TT 200/2014] Danh mục chứng từ và sổ kế toán mang tính chất hướng dẫn nhưng khi quyết toán, đoàn thanh tra thuế thường yêu cầu mẫu biểu phải khớp tuyệt đối với biểu mẫu in sẵn kèm theo Thông tư.",
        newRule: "[Căn cứ: Điều 8 & Phụ lục II TT 99/2025] Doanh nghiệp có toàn quyền tự thiết kế hệ thống chứng từ và sổ kế toán điện tử phù hợp với đặc thù sản xuất kinh doanh, chỉ cần bảo đảm tối thiểu 7 nội dung bắt buộc theo Điều 16 Luật Kế toán 2015.",
        impactNote: "Kiểu Việt tự do số hóa Biên bản nghiệm thu công việc xây dựng, Phiếu xuất kho vật tư kiêm vận chuyển nội bộ và Bảng kê khối lượng hoàn thành Mẫu 03a có gắn chữ ký số HSM."
      },
      {
        topic: "Cải cách toàn diện hệ thống Báo cáo tài chính (Mẫu B01-DN Báo cáo tình hình tài chính)",
        type: "modified",
        oldRule: "[Căn cứ: Điều 100-111 TT 200/2014] Hệ thống BCTC gồm Bảng cân đối kế toán, Báo cáo KQKD, Báo cáo LCTT và Thuyết minh BCTC với nhiều chỉ tiêu trùng lặp, thiếu thông tin về rủi ro dòng tiền ngắn hạn.",
        newRule: "[Căn cứ: Điều 50-65 TT 99/2025] Đổi tên thành Báo cáo tình hình tài chính (Mẫu B01-DN). Bổ sung các chỉ tiêu phân tích dòng tiền thi công dở dang, thuyết minh chi tiết các khoản bảo lãnh ngân hàng thực hiện hợp đồng xây dựng và cam kết bảo hành công trình.",
        impactNote: "Ban Tổng Giám đốc Kiểu Việt kiểm soát chặt chẽ cơ cấu vốn lưu động, chỉ tiêu thanh toán nhanh và quản trị rủi ro nợ đọng vốn ngân sách."
      },
      {
        topic: "Quy định về khấu hao máy móc thi công chuyên dùng nhàn rỗi chờ công trình",
        type: "added",
        oldRule: "[Căn cứ: Điều 35 TT 200/2014] Máy móc thiết bị ngừng hoạt động do mùa vụ hoặc chờ việc vẫn phải trích khấu hao và kết chuyển vào chi phí sản xuất chung (TK 627) làm méo mó giá thành công trình đang thi công.",
        newRule: "[Căn cứ: Điều 25 TT 99/2025] Chi phí khấu hao xe máy thi công nhàn rỗi không phục vụ trực tiếp công trình nào trong kỳ được hạch toán thẳng vào Chi phí quản lý doanh nghiệp (Nợ TK 642 / Có TK 214) hoặc Chi phí khác (TK 811), không phân bổ vào TK 154.",
        impactNote: "Đơn giá dự toán và giá thành thực tế từng gói thầu của Kiểu Việt phản ánh chính xác chi phí máy thi công thực tế tại công trường."
      },
      {
        topic: "Hạch toán chiết khấu thương mại, giảm giá vật tư số lượng lớn mua vào",
        type: "modified",
        oldRule: "[Căn cứ: Điều 27 TT 200/2014] Khoản chiết khấu thương mại nhận được sau khi mua hàng phải phân bổ phức tạp giữa hàng còn tồn kho, hàng đã xuất dùng và hàng đã cấu thành giá vốn công trình.",
        newRule: "[Căn cứ: Điều 21 TT 99/2025] Cho phép ghi giảm trực tiếp vào giá trị vật tư còn tồn kho (Nợ TK 331 / Có TK 152, Có TK 133); nếu vật tư đã đưa vào thi công công trình thì ghi giảm trực tiếp chi phí xây lắp dở dang (Nợ TK 331 / Có TK 154, Có TK 133).",
        impactNote: "Tiết kiệm hàng chục giờ công phân bổ chiết khấu khi Kiểu Việt ký hợp đồng mua thép Hòa Phát, xi măng Hà Tiên, nhựa đường khối lượng lớn hàng chục tỷ đồng."
      },
      {
        topic: "Chuẩn mực hạch toán Hợp đồng hợp tác kinh doanh (BCC) chia lợi nhuận và khoáng sản",
        type: "added",
        oldRule: "[Căn cứ: Điều 44 TT 200/2014] Hướng dẫn sơ sài về hợp đồng BCC, chủ yếu quy định cho hình thức chia doanh thu hoặc chia lợi nhuận trước thuế.",
        newRule: "[Căn cứ: Điều 33 TT 99/2025] Quy định chi tiết các hình thức BCC: BCC chia sản phẩm (khối lượng đá, cát khai thác từ mỏ khoáng sản), BCC chia doanh thu bán hàng và BCC chia lợi nhuận sau thuế. Bên điều hành hợp đồng có trách nhiệm mở sổ theo dõi riêng tài sản và chi phí chung.",
        impactNote: "Kiểu Việt áp dụng chuẩn xác khi liên danh hợp tác khai thác mỏ đá, mỏ đất đắp tại Gia Lai với các đối tác địa phương."
      },
      {
        topic: "Chuẩn hóa lưu trữ chứng từ điện tử có chữ ký số HSM không bắt buộc in ra giấy",
        type: "added",
        oldRule: "[Căn cứ: Điều 120 TT 200/2014] Chứng từ điện tử khi phục vụ thanh tra, kiểm tra thuế bắt buộc phải in ra bản giấy có chữ ký sống và đóng dấu đỏ của người đại diện pháp luật.",
        newRule: "[Căn cứ: Điều 9 TT 99/2025] Quy định rõ chứng từ kế toán điện tử có giá trị pháp lý nguyên bản nếu được ký số bằng chữ ký số hợp lệ (USB Token hoặc HSM) và lưu trữ an toàn theo Luật Giao dịch điện tử 2023. Đoàn thanh tra kiểm tra phải tiếp nhận dữ liệu điện tử, không được yêu cầu in ra giấy.",
        impactNote: "Kiểu Việt tiết kiệm hàng trăm triệu đồng chi phí in ấn, lưu kho lưu trữ hàng vạn tờ biên bản nghiệm thu và phiếu xuất kho hàng năm."
      },
      {
        topic: "Xử lý chuyển đổi số dư tài khoản khi chuyển tiếp từ TT 200 sang TT 99",
        type: "added",
        oldRule: "[Căn cứ: Điều 127 TT 200/2014] Hướng dẫn chuyển đổi số dư từ Quyết định 15 sang TT 200 theo bảng đối chiếu chuyển tiếp cũ.",
        newRule: "[Căn cứ: Điều 70 TT 99/2025] Quy định chi tiết bảng chuyển đổi số dư: Số dư các tài khoản chi phí dở dang 621, 622, 623, 627 chuyển toàn bộ sang TK 154 tương ứng; số dư TK 142 chuyển sang TK 242; số dư tài khoản loại 0 được tất toán và mở sổ theo dõi riêng.",
        impactNote: "Phòng Kế toán Kiểu Việt hoàn thành bảng đối chiếu chuyển đổi số dư tài khoản trước ngày 01/01/2026, đảm bảo tính liên tục của số liệu Báo cáo tài chính."
      }
    ]
  },
  "tt-200-2014": {
    decreeId: "tt-200-2014",
    title: "Thông tư 200/2014/TT-BTC",
    category: "Chế độ Kế toán Doanh nghiệp",
    compareWith: "Quyết định 15/2006/QĐ-BTC",
    summary: "Thông tư 200/2014/TT-BTC thay thế toàn diện Quyết định 15/2006/QĐ-BTC: Trao quyền chủ động tối đa cho doanh nghiệp trong việc thiết kế chứng từ, mở tài khoản chi tiết và lựa chọn đồng tiền ghi sổ kế toán.",
    items: [
      {
        topic: "Đổi mới phương pháp hạch toán tỷ giá hối đoái (TK 413)",
        type: "modified",
        oldRule: "[Căn cứ: QĐ 15/2006] Sử dụng tỷ giá bình quân liên ngân hàng do NHNN công bố để hạch toán tất cả các giao dịch ngoại tệ phát sinh trong kỳ.",
        newRule: "[Căn cứ: Điều 69 TT 200/2014] Sử dụng tỷ giá giao dịch thực tế của ngân hàng thương mại nơi doanh nghiệp mở tài khoản (tỷ giá mua khi ghi nhận tài sản/doanh thu, tỷ giá bán khi ghi nhận nợ phải trả/chi phí).",
        impactNote: "Kiểu Việt hạch toán sát thực tế biến động tỷ giá ngân hàng giao dịch, hạn chế chênh lệch giữa sổ sách kế toán và sao kê ngân hàng."
      },
      {
        topic: "Bãi bỏ hình thức ghi sổ kế toán bắt buộc, trao quyền tự chủ sổ sách",
        type: "removed",
        oldRule: "[Căn cứ: QĐ 15/2006] Bắt buộc doanh nghiệp phải đăng ký và tuân thủ 1 trong 4 hình thức sổ kế toán cứng nhắc: Nhật ký chung, Nhật ký - Sổ cái, Chứng từ ghi sổ hoặc Nhật ký chứng từ.",
        newRule: "[Căn cứ: Điều 122 TT 200/2014] Doanh nghiệp được hoàn toàn tự chủ xây dựng hình thức sổ kế toán riêng hoặc sử dụng phần mềm kế toán, miễn là bảo đảm tính minh bạch, đầy đủ và dễ kiểm tra.",
        impactNote: "Kiểu Việt linh hoạt tùy biến hệ thống sổ chi tiết chi phí công trình theo từng mã dự án giao thông độc lập."
      },
      {
        topic: "Phân loại Bất động sản đầu tư (TK 217) tách bạch TSCĐ hữu hình (TK 211)",
        type: "modified",
        oldRule: "[Căn cứ: QĐ 15/2006] Các tài sản nhà xưởng, mặt bằng cho thuê hoạt động thường được theo dõi chung trên TK 211, dễ gây nhầm lẫn về mục đích sử dụng.",
        newRule: "[Căn cứ: Điều 39 TT 200/2014] Bắt buộc tách riêng Bất động sản đầu tư nắm giữ để thu lợi từ việc cho thuê hoặc chờ tăng giá trên TK 217; trích khấu hao tính vào giá vốn kinh doanh BĐS (Nợ TK 632 / Có TK 2147).",
        impactNote: "Kiểu Việt hạch toán rõ ràng các khu nhà xưởng kho bãi cho thuê phụ trợ ngoài hoạt động thi công xây lắp chính."
      },
      {
        topic: "Bổ sung TK 353 (Quỹ khen thưởng, phúc lợi) tách khỏi Vốn chủ sở hữu",
        type: "modified",
        oldRule: "[Căn cứ: QĐ 15/2006] Quỹ khen thưởng phúc lợi được xếp vào Loại 4 - Vốn chủ sở hữu (TK 431), gây hiểu nhầm về quyền sở hữu vốn của cổ đông.",
        newRule: "[Căn cứ: Điều 64 TT 200/2014] Chuyển Quỹ khen thưởng, phúc lợi sang Loại 3 - Nợ phải trả (TK 353) vì đây là nghĩa vụ phải trả cho người lao động, không phải vốn của chủ sở hữu doanh nghiệp.",
        impactNote: "Cơ cấu Bảng cân đối kế toán của Kiểu Việt phản ánh chuẩn xác vốn chủ sở hữu thực của cổ đông khi nộp hồ sơ đấu thầu."
      },
      {
        topic: "Quy định thời hạn phân bổ chi phí trả trước (TK 242 tối đa 3 năm)",
        type: "modified",
        oldRule: "[Căn cứ: QĐ 15/2006] Không khống chế thời gian tối đa phân bổ chi phí trả trước dài hạn, dẫn đến việc nhiều doanh nghiệp treo chi phí lỗ nhiều năm.",
        newRule: "[Căn cứ: Điều 48 TT 200/2014] Quy định rõ chi phí trả trước dài hạn (công cụ lán trại thi công, chi phí thành lập, thuê đất) được phân bổ dần vào chi phí kinh doanh trong thời gian tối đa không quá 3 năm tài chính.",
        impactNote: "Kiểu Việt phân bổ dứt điểm chi phí thiết bị lán trại tạm thời phục vụ gói thầu trong vòng đời thi công dự án."
      },
      {
        topic: "Hạch toán vốn hóa chi phí đi vay vào giá trị tài sản dở dang (TK 241)",
        type: "modified",
        oldRule: "[Căn cứ: QĐ 15/2006] Vốn hóa chi phí lãi vay áp dụng cứng nhắc, nhiều trường hợp lãi vay đầu tư dở dang vẫn hạch toán vào chi phí tài chính trong kỳ.",
        newRule: "[Căn cứ: Điều 82 TT 200/2014] Quy định chuẩn mực: Lãi vay liên quan trực tiếp đến việc đầu tư xây dựng tài sản dở dang phải được vốn hóa vào giá trị tài sản (Nợ TK 241 / Có TK 112, 335) cho đến khi tài sản sẵn sàng đưa vào sử dụng.",
        impactNote: "Kiểu Việt vốn hóa chính xác chi phí lãi vay ngân hàng đầu tư trạm trộn bê tông nhựa nóng và dây chuyền nghiền sàng đá."
      },
      {
        topic: "Xử lý tổn thất tài sản và hàng tồn kho mất mát chờ xử lý (TK 1381)",
        type: "modified",
        oldRule: "[Căn cứ: QĐ 15/2006] Tài sản thiếu chờ xử lý thường kéo dài qua nhiều năm tài chính mà không có chế tài xử lý dứt điểm.",
        newRule: "[Căn cứ: Điều 20 TT 200/2014] Bắt buộc tại thời điểm lập BCTC năm phải xác định nguyên nhân và xử lý dứt điểm số dư TK 1381 (bồi thường của cá nhân, hạch toán vào chi phí khác hoặc giá vốn hàng bán).",
        impactNote: "Tăng cường trách nhiệm của thủ kho và Ban chỉ huy công trường Kiểu Việt trong việc bảo vệ vật tư sắt thép xi măng ngoài hiện trường."
      },
      {
        topic: "Phân loại chứng khoán kinh doanh (TK 121) và đầu tư nắm giữ đến ngày đáo hạn (TK 128)",
        type: "modified",
        oldRule: "[Căn cứ: QĐ 15/2006] Gộp chung các khoản đầu tư tài chính ngắn hạn vào TK 121 mà không phân biệt bản chất mục đích đầu tư.",
        newRule: "[Căn cứ: Điều 15 TT 200/2014] Tách bạch rõ: TK 121 chỉ phản ánh chứng khoán mua vì mục đích kinh doanh lướt sóng; TK 128 phản ánh tiền gửi ngân hàng có kỳ hạn, trái phiếu, thương phiếu nắm giữ đến ngày đáo hạn.",
        impactNote: "Kiểu Việt hạch toán đúng bản chất các hợp đồng tiền gửi tiết kiệm có kỳ hạn tại ngân hàng để bảo toàn vốn lưu động."
      },
      {
        topic: "Thay đổi cấu trúc Báo cáo lưu chuyển tiền tệ (Mẫu B03-DN)",
        type: "modified",
        oldRule: "[Căn cứ: QĐ 15/2006] Các chỉ tiêu lưu chuyển tiền từ hoạt động đầu tư và tài chính chưa tách bạch dòng tiền giải ngân các dự án dài hạn.",
        newRule: "[Căn cứ: Điều 110 TT 200/2014] Chuẩn hóa phương pháp lập LCTT trực tiếp và gián tiếp; tách riêng dòng tiền chi mua sắm TSCĐ và tiền thu hồi cho vay, đầu tư vốn vào đơn vị khác.",
        impactNote: "Giúp lãnh đạo Kiểu Việt nhìn rõ dòng tiền tự do (Free Cash Flow) tạo ra từ hoạt động thi công xây lắp cốt lõi."
      },
      {
        topic: "Thuyết minh BCTC về quản trị rủi ro thanh khoản và biến động lãi suất",
        type: "added",
        oldRule: "[Căn cứ: QĐ 15/2006] Bản Thuyết minh BCTC chủ yếu thuyết minh số liệu lịch sử tĩnh, thiếu các cảnh báo về rủi ro tài chính.",
        newRule: "[Căn cứ: Điều 111 & Mẫu B09-DN TT 200/2014] Bắt buộc bổ sung Thuyết minh chi tiết về rủi ro thanh khoản, rủi ro tín dụng đối tác và phân tích độ nhạy của lãi suất tiền vay đối với lợi nhuận doanh nghiệp.",
        impactNote: "BCTC Kiểu Việt minh bạch, đạt chuẩn yêu cầu thẩm định vốn vay của các tổ chức tín dụng lớn."
      },
      {
        topic: "Ghi nhận doanh thu bán hàng kèm thiết bị chạy thử, lắp đặt",
        type: "added",
        oldRule: "[Căn cứ: QĐ 15/2006] Doanh thu được ghi nhận ngay khi giao hàng, bất kể việc chạy thử có điều kiện nghiệm thu phức tạp hay không.",
        newRule: "[Căn cứ: Điều 79 TT 200/2014] Chỉ được ghi nhận doanh thu khi đã hoàn thành việc lắp đặt và khách hàng đã ký biên bản nghiệm thu chạy thử đạt yêu cầu kỹ thuật.",
        impactNote: "Bảo đảm Kiểu Việt chỉ xuất hóa đơn và ghi nhận doanh thu các gói thầu lắp đặt trạm cân, hệ thống chiếu sáng giao thông khi chủ đầu tư đã nghiệm thu."
      },
      {
        topic: "Chuyển đổi số dư tài khoản kế toán từ QĐ 15 sang TT 200",
        type: "added",
        oldRule: "[Căn cứ: QĐ 15/2006] Quy định danh mục tài khoản cũ gồm 114 tài khoản cấp 1.",
        newRule: "[Căn cứ: Điều 127 TT 200/2014] Bảng chuyển đổi chi tiết: Chuyển toàn bộ số dư TK 142 sang TK 242; chuyển TK 431 sang TK 353; phân tách số dư tiền gửi có kỳ hạn từ TK 121 sang TK 128.",
        impactNote: "Bảo đảm số liệu chuyển tiếp giữa hai kỳ kế toán chính xác 100%, không bị sai lệch số dư đầu kỳ."
      }
    ]
  },
  "tt-133-2016": {
    decreeId: "tt-133-2016",
    title: "Thông tư 133/2016/TT-BTC",
    category: "Chế độ Kế toán DNNVV",
    compareWith: "Quyết định 48/2006/QĐ-BTC",
    summary: "Thông tư 133/2016/TT-BTC thay thế Quyết định 48/2006/QĐ-BTC: Đơn giản hóa tối đa chế độ kế toán cho doanh nghiệp nhỏ và vừa, bãi bỏ các tài khoản chi phí trung gian và trao quyền tự chủ cao nhất.",
    items: [
      {
        topic: "Hệ thống tài khoản tinh gọn (Không sử dụng TK 621, 622, 623, 627)",
        type: "modified",
        oldRule: "[Căn cứ: QĐ 48/2006] DNNVV vẫn phải mở tài khoản 621, 622, 627 để theo dõi chi phí sản xuất trước khi kết chuyển vào TK 154.",
        newRule: "[Căn cứ: Điều 24 TT 133/2016] Bãi bỏ toàn bộ tài khoản loại 62x. Mọi chi phí NVL, nhân công, chi phí chung được tập hợp trực tiếp trên TK 154 (Chi phí SXKD dở dang).",
        impactNote: "Các công ty con và đơn vị thành viên quy mô nhỏ của Kiểu Việt hạch toán chi phí công trình trực tiếp, tinh gọn bộ máy kế toán."
      },
      {
        topic: "Đơn giản hóa Báo cáo tài chính cho doanh nghiệp nhỏ và vừa",
        type: "modified",
        oldRule: "[Căn cứ: QĐ 48/2006] Bắt buộc lập đầy đủ bộ BCTC gồm Bảng CĐKT, Báo cáo KQKD, Báo cáo LCTT và Thuyết minh phức tạp.",
        newRule: "[Căn cứ: Điều 71 TT 133/2016] Cho phép lựa chọn mẫu BCTC rút gọn (Mẫu B01b-DNNVV); Báo cáo lưu chuyển tiền tệ (Mẫu B03-DNNVV) chỉ mang tính khuyến khích, không bắt buộc nộp cho cơ quan thuế.",
        impactNote: "Giảm áp lực lập báo cáo cuối năm cho các công ty liên kết phụ trách khai thác mỏ cát, mỏ đá của Kiểu Việt."
      },
      {
        topic: "Không bắt buộc phân loại chi phí bán hàng và quản lý riêng biệt",
        type: "modified",
        oldRule: "[Căn cứ: QĐ 48/2006] Phải mở riêng TK 641 (Chi phí bán hàng) và TK 642 (Chi phí quản lý doanh nghiệp).",
        newRule: "[Căn cứ: Điều 61 TT 133/2016] Hợp nhất toàn bộ vào TK 642 duy nhất: 6421 (Chi phí bán hàng) và 6422 (Chi phí quản lý doanh nghiệp).",
        impactNote: "Tiết kiệm thời gian hạch toán các khoản chi phí xăng xe, tiếp khách, văn phòng phẩm tại các ban điều hành công trường."
      },
      {
        topic: "Nguyên tắc trích khấu hao TSCĐ linh hoạt",
        type: "modified",
        oldRule: "[Căn cứ: QĐ 48/2006] Trích khấu hao TSCĐ phải tuân thủ cứng nhắc theo khung quy định tại Thông tư 45/2013 của Bộ Tài chính.",
        newRule: "[Căn cứ: Điều 32 TT 133/2016] Doanh nghiệp được căn cứ năng lực tài chính và cường độ sử dụng máy móc để xác định thời gian khấu hao hợp lý, đăng ký một lần với cơ quan thuế.",
        impactNote: "Kiểu Việt khấu hao nhanh máy móc thi công khi hoạt động 3 ca liên tục tại các công trình cao tốc tiến độ gấp."
      },
      {
        topic: "Quyền lựa chọn áp dụng Chế độ kế toán Doanh nghiệp (TT 200/99)",
        type: "added",
        oldRule: "[Căn cứ: QĐ 48/2006] Doanh nghiệp đã đăng ký áp dụng QĐ 48 thì không được chuyển đổi sang QĐ 15 trừ khi vượt quá quy mô DNNVV.",
        newRule: "[Căn cứ: Điều 3 TT 133/2016] DNNVV được quyền chủ động lựa chọn áp dụng Thông tư 200/2014 (hoặc Thông tư 99/2025) cho phù hợp với định hướng quản trị, chỉ cần thông báo cho cơ quan thuế.",
        impactNote: "Kiểu Việt đồng bộ toàn bộ công ty con áp dụng cùng một hệ thống tài khoản với công ty mẹ để hợp nhất BCTC thuận lợi."
      },
      {
        topic: "Đơn giản hóa phương pháp hạch toán tỷ giá hối đoái",
        type: "modified",
        oldRule: "[Căn cứ: QĐ 48/2006] Đánh giá lại tỷ giá theo nhiều bước phức tạp cuối kỳ trên TK 413.",
        newRule: "[Căn cứ: Điều 52 TT 133/2016] Không mở TK 413 riêng biệt. Chênh lệch tỷ giá đánh giá lại cuối năm được ghi nhận thẳng vào TK 515 (Doanh thu tài chính) hoặc TK 635 (Chi phí tài chính).",
        impactNote: "Xử lý nhanh chóng các giao dịch mua vật tư nhập ngoại không để lại tồn dư tài khoản trung gian."
      },
      {
        topic: "Xử lý công nợ nội bộ không cần mở TK 136/336",
        type: "modified",
        oldRule: "[Căn cứ: QĐ 48/2006] Bắt buộc mở TK 136 (Phải thu nội bộ) và TK 336 (Phải trả nội bộ) giữa các chi nhánh, xí nghiệp trực thuộc.",
        newRule: "[Căn cứ: Điều 19 TT 133/2016] Cho phép sử dụng trực tiếp TK 1388 (Phải thu khác) và TK 3388 (Phải trả khác) để phản ánh công nợ luân chuyển vốn nội bộ.",
        impactNote: "Giảm bớt sự phức tạp khi theo dõi điều chuyển tiền mặt và vật tư giữa các Ban chỉ huy gói thầu."
      },
      {
        topic: "Phương pháp kế toán hàng tồn kho linh hoạt",
        type: "modified",
        oldRule: "[Căn cứ: QĐ 48/2006] Ưu tiên phương pháp kê khai thường xuyên, thủ tục áp dụng phương pháp kiểm kê định kỳ rất khắt khe.",
        newRule: "[Căn cứ: Điều 23 TT 133/2016] Cho phép áp dụng linh hoạt phương pháp kê khai thường xuyên hoặc kiểm kê định kỳ tùy theo đặc thù kho bãi và tính chất vật liệu cát, đá, đất đắp.",
        impactNote: "Kiểu Việt áp dụng kiểm kê định kỳ tại các bãi tập kết vật tư mỏ đá, mỏ đất san lấp không thể cân đo từng chuyến xe xuất."
      },
      {
        topic: "Chứng từ kế toán lao động thời vụ đơn giản hóa",
        type: "added",
        oldRule: "[Căn cứ: QĐ 48/2006] Mọi khoản chi trả nhân công đều phải có hợp đồng lao động đầy đủ, bảng chấm công và hồ sơ bảo hiểm bắt buộc.",
        newRule: "[Căn cứ: Điều 84 TT 133/2016] Cho phép lập Bảng kê thanh toán tiền công thuê ngoài (Mẫu 01-LĐTL) kèm CCCD và cam kết Mẫu 08 đối với lao động phổ thông thời vụ dưới 3 tháng.",
        impactNote: "Gỡ khó khăn lớn cho Kiểu Việt khi thuê nhân công thời vụ dọn dẹp mặt bằng, đắp taluy tại địa phương."
      },
      {
        topic: "Đơn giản hóa việc trích lập dự phòng giảm giá đầu tư tài chính",
        type: "modified",
        oldRule: "[Căn cứ: QĐ 48/2006] Bắt buộc trích lập dự phòng theo giá thị trường phức tạp có xác nhận của kiểm toán viên.",
        newRule: "[Căn cứ: Điều 17 TT 133/2016] Cho phép trích lập dự phòng tổn thất đầu tư căn cứ vào BCTC có xác nhận của bên nhận đầu tư, không đòi hỏi kiểm toán độc lập đối với khoản đầu tư nhỏ.",
        impactNote: "Bảo đảm tính chủ động trích lập dự phòng rủi ro góp vốn của Kiểu Việt vào các HTX khai thác vật liệu."
      },
      {
        topic: "Bỏ yêu cầu kiểm toán độc lập BCTC hàng năm",
        type: "removed",
        oldRule: "[Căn cứ: QĐ 48/2006] Một số trường hợp DNNVV tham gia liên danh đấu thầu nhà nước bị đòi hỏi kiểm toán bắt buộc.",
        newRule: "[Căn cứ: Điều 86 TT 133/2016] Khẳng định DNNVV không thuộc diện bắt buộc phải kiểm toán BCTC, trừ trường hợp có thỏa thuận riêng trong hồ sơ mời thầu hoặc vay vốn tín dụng.",
        impactNote: "Tiết kiệm chi phí thuê đơn vị kiểm toán độc lập hàng năm cho các công ty con quy mô nhỏ."
      },
      {
        topic: "Chuyển đổi số dư tài khoản từ QĐ 48 sang Thông tư 133",
        type: "added",
        oldRule: "[Căn cứ: QĐ 48/2006] Hệ thống tài khoản cũ theo QĐ 48.",
        newRule: "[Căn cứ: Điều 91 TT 133/2016] Hướng dẫn chi tiết: Chuyển toàn bộ số dư TK 621, 622, 627 sang TK 154; chuyển số dư TK 641 sang TK 6421; chuyển số dư TK 142 sang TK 242.",
        impactNote: "Bảo đảm quá trình số hóa và đồng bộ phần mềm kế toán diễn ra mượt mà, không gián đoạn kỳ kế toán."
      }
    ]
  },
  "tt-24-2024-tt-btc": {
    decreeId: "tt-24-2024-tt-btc",
    title: "Thông tư 24/2024/TT-BTC",
    category: "Chế độ Kế toán HCSN",
    compareWith: "Thông tư 107/2017/TT-BTC",
    summary: "Thông tư 24/2024/TT-BTC đổi mới toàn diện Chế độ kế toán hành chính sự nghiệp: Chuẩn hóa hệ thống tài khoản, tăng cường kiểm soát giải ngân vốn đầu tư công và công khai tài sản kết cấu hạ tầng giao thông.",
    items: [
      {
        topic: "Chuẩn hóa hệ thống tài khoản kế toán HCSN thống nhất toàn quốc",
        type: "modified",
        oldRule: "[Căn cứ: TT 107/2017] Hệ thống tài khoản HCSN gồm 7 loại tài khoản trong bảng và các tài khoản loại 0 ngoài bảng theo dõi kinh phí dự toán.",
        newRule: "[Căn cứ: Điều 12-25 TT 24/2024] Tái cơ cấu toàn bộ hệ thống tài khoản kế toán HCSN: Bổ sung các tài khoản quản lý chi tiết nguồn vốn đầu tư công, nguồn vốn ODA và kinh phí sự nghiệp kinh tế giao thông.",
        impactNote: "Kế toán Kiểu Việt nắm rõ quy trình hạch toán của các Ban QLDA để chuẩn bị hồ sơ nghiệm thu thanh toán khớp đúng tài khoản giải ngân của Chủ đầu tư."
      },
      {
        topic: "Quy định về hạch toán chi phí quản lý dự án Ban QLDA chuyên ngành giao thông",
        type: "modified",
        oldRule: "[Căn cứ: Điều 42 TT 107/2017] Chi phí QLDA được theo dõi chung trong nguồn kinh phí hoạt động thường xuyên của đơn vị.",
        newRule: "[Căn cứ: Điều 30 TT 24/2024] Bắt buộc tách riêng chi phí QLDA theo từng công trình, dự án; kiểm soát chặt chẽ định mức chi phí giám sát, nghiệm thu khối lượng A-B theo quy định quản lý chi phí xây dựng.",
        impactNote: "Hồ sơ thanh toán tạm ứng và khối lượng hoàn thành của Kiểu Việt được Ban QLDA thẩm tra và phê duyệt nhanh chóng."
      },
      {
        topic: "Quy trình thanh toán và rút dự toán Kho bạc điện tử",
        type: "modified",
        oldRule: "[Căn cứ: TT 107/2017] Hồ sơ rút dự toán và ủy nhiệm chi chuyển khoản Kho bạc Nhà nước thực hiện phần lớn bằng chứng từ giấy có dấu đỏ.",
        newRule: "[Căn cứ: Điều 8 TT 24/2024] 100% hồ sơ thanh toán khối lượng xây lắp và rút dự toán vốn đầu tư công được xử lý qua hệ thống Dịch vụ công trực tuyến Kho bạc Nhà nước có ký số HSM.",
        impactNote: "Dòng tiền thanh toán từ Kho bạc Nhà nước chuyển về tài khoản Kiểu Việt được rút ngắn xuống dưới 3 ngày làm việc."
      },
      {
        topic: "Hạch toán tiếp nhận và bàn giao tài sản kết cấu hạ tầng giao thông đường bộ",
        type: "added",
        oldRule: "[Căn cứ: TT 107/2017] Hạch toán tài sản hạ tầng đường bộ chưa có tài khoản chi tiết riêng, thường ghi nhận chung vào TSCĐ của đơn vị hành chính.",
        newRule: "[Căn cứ: Điều 36 TT 24/2024] Bổ sung tài khoản theo dõi riêng tài sản hạ tầng giao thông (đường cao tốc, cầu cống, trạm thu phí); quy định rõ quy trình bàn giao từ nhà thầu xây lắp sang đơn vị quản lý khai thác sau khi hết thời hạn bảo hành.",
        impactNote: "Kiểu Việt hoàn thành thủ tục bàn giao dứt điểm tài sản công trình và thu hồi tiền bảo lãnh bảo hành 5% giá trị hợp đồng."
      },
      {
        topic: "Kiểm soát tạm ứng và hoàn ứng vốn ngân sách nhà nước",
        type: "modified",
        oldRule: "[Căn cứ: TT 107/2017] Việc thu hồi tạm ứng vốn đầu tư công chưa có quy định tỷ lệ khấu trừ cố định trong tài khoản kế toán.",
        newRule: "[Căn cứ: Điều 28 TT 24/2024] Quy định rõ tỷ lệ thu hồi tạm ứng qua từng lần thanh toán khối lượng hoàn thành Mẫu 03a, bắt buộc thu hồi dứt điểm số dư tạm ứng khi khối lượng nghiệm thu đạt 80% giá trị hợp đồng.",
        impactNote: "Phòng Tài chính Kiểu Việt chủ động cân đối dòng tiền thi công khi tỷ lệ giải ngân thực tế bị trừ dần tiền tạm ứng đã nhận."
      },
      {
        topic: "Đơn giản hóa chứng từ chi sự nghiệp và thuê khoán nhân công",
        type: "modified",
        oldRule: "[Căn cứ: TT 107/2017] Yêu cầu thủ tục phức tạp đối với các khoản chi thuê khoán, bồi thường giải phóng mặt bằng.",
        newRule: "[Căn cứ: Điều 10 TT 24/2024] Cho phép sử dụng bảng kê thanh toán điện tử có xác nhận của chính quyền địa phương đối với chi trả đền bù mặt bằng và nhân công địa phương.",
        impactNote: "Tạo thuận lợi cho Kiểu Việt trong công tác giải phóng mặt bằng đường công vụ và bãi đổ thải mỏ đất đắp."
      },
      {
        topic: "Bổ sung quy định kế toán số và hóa đơn điện tử trong đơn vị HCSN",
        type: "added",
        oldRule: "[Căn cứ: TT 107/2017] Chưa có quy định chi tiết về việc tiếp nhận và đối chiếu hóa đơn điện tử theo NĐ 123.",
        newRule: "[Căn cứ: Điều 9 TT 24/2024] Bắt buộc các đơn vị HCSN tiếp nhận, kiểm tra tính hợp lệ của hóa đơn điện tử trên Cổng hoadondientu.gdt.gov.vn trước khi lập lệnh chi tiền gửi Kho bạc.",
        impactNote: "Hóa đơn điện tử Kiểu Việt xuất cho Chủ đầu tư phải bảo đảm tính hợp pháp tuyệt đối, không có sai sót về mã cơ quan thuế."
      },
      {
        topic: "Quy định về trích lập và sử dụng Quỹ phát triển hoạt động sự nghiệp",
        type: "modified",
        oldRule: "[Căn cứ: TT 107/2017] Cơ chế trích lập quỹ tại các Ban QLDA còn nhiều điểm chưa thống nhất giữa chi thường xuyên và chi đầu tư.",
        newRule: "[Căn cứ: Điều 40 TT 24/2024] Chuẩn hóa tỷ lệ trích lập quỹ từ nguồn thu quản lý dự án và các dịch vụ tư vấn giám sát công trình giao thông.",
        impactNote: "Minh bạch hóa các khoản chi phí tư vấn giám sát và quản lý dự án trong tổng mức đầu tư công trình Kiểu Việt tham gia."
      },
      {
        topic: "Quy định về xử lý nợ đọng xây dựng cơ bản tại các đơn vị sự nghiệp",
        type: "added",
        oldRule: "[Căn cứ: TT 107/2017] Nợ đọng xây dựng cơ bản treo nhiều năm không có tài khoản riêng để phân loại nợ xấu.",
        newRule: "[Căn cứ: Điều 32 TT 24/2024] Bắt buộc phân loại chi tiết các khoản nợ đọng nhà thầu xây lắp theo từng năm ngân sách và lập kế hoạch bố trí vốn thanh toán dứt điểm.",
        impactNote: "Căn cứ pháp lý vững chắc để Kiểu Việt yêu cầu Chủ đầu tư công bố lộ trình giải ngân dứt điểm công nợ thi công tồn đọng."
      },
      {
        topic: "Thời hạn gửi và công khai Báo cáo tài chính nhà nước tổng hợp",
        type: "modified",
        oldRule: "[Căn cứ: TT 107/2017] Thời hạn nộp báo cáo quyết toán kéo dài đến tháng 5 năm sau.",
        newRule: "[Căn cứ: Điều 55 TT 24/2024] Rút ngắn thời hạn hoàn thành quyết toán vốn đầu tư công dự án hoàn thành, bắt buộc đối chiếu công nợ nhà thầu trước ngày 31/01 hàng năm.",
        impactNote: "Kế toán Kiểu Việt phải hoàn thiện biên bản đối chiếu công nợ A-B với Chủ đầu tư trong tháng 12 và tháng 1."
      },
      {
        topic: "Kiểm kê tài sản công định kỳ và xử lý thừa thiếu vật tư dự án",
        type: "modified",
        oldRule: "[Căn cứ: TT 107/2017] Quy định kiểm kê tài sản mang tính hình thức, không quy định rõ trách nhiệm vật chất khi thất thoát.",
        newRule: "[Căn cứ: Điều 48 TT 24/2024] Quy định quy trình kiểm kê hiện trường công trình xây dựng dở dang có sự tham gia bắt buộc của Ban QLDA, Tư vấn giám sát và Nhà thầu thi công.",
        impactNote: "Bảo đảm số liệu khối lượng dở dang tại hiện trường của Kiểu Việt được các bên ký xác nhận định kỳ hàng quý."
      },
      {
        topic: "Hướng dẫn chuyển đổi số dư tài khoản kế toán HCSN sang Thông tư 24",
        type: "added",
        oldRule: "[Căn cứ: TT 107/2017] Hệ thống tài khoản cũ theo Thông tư 107.",
        newRule: "[Căn cứ: Điều 65 TT 24/2024] Hướng dẫn chi tiết chuyển đổi số dư toàn bộ tài khoản nguồn vốn và tài sản cố định sang hệ thống tài khoản mới từ ngày 01/01/2025.",
        impactNote: "Bảo đảm công nợ thi công của Kiểu Việt tại các Chủ đầu tư nhà nước được chuyển giao chính xác, không bị thất lạc số dư."
      }
    ]
  },
  "tt-45-2013": {
    decreeId: "tt-45-2013",
    title: "Thông tư 45/2013/TT-BTC",
    category: "Khấu hao Tài sản Cố định",
    compareWith: "Thông tư 203/2009/TT-BTC",
    summary: "Thông tư 45/2013/TT-BTC hướng dẫn chế độ quản lý, sử dụng và trích khấu hao tài sản cố định: Nâng tiêu chuẩn nguyên giá lên 30 triệu đồng, quy định khung thời gian khấu hao máy móc công trình và điều kiện trích khấu hao TSCĐ nhàn rỗi.",
    items: [
      {
        topic: "Nâng tiêu chuẩn nguyên giá ghi nhận TSCĐ từ 10 triệu lên 30 triệu đồng",
        type: "modified",
        oldRule: "[Căn cứ: Điều 3 TT 203/2009] Tài sản có giá trị từ 10.000.000 đồng trở lên và thời gian sử dụng trên 1 năm được coi là tài sản cố định hữu hình.",
        newRule: "[Căn cứ: Điều 3 TT 45/2013] Nâng mức nguyên giá tối thiểu lên 30.000.000 đồng và thời gian sử dụng trên 1 năm. Các tài sản dưới 30 triệu đồng chuyển sang hạch toán Công cụ dụng cụ (TK 153/242) phân bổ tối đa 3 năm.",
        impactNote: "Kiểu Việt giảm bớt việc theo dõi hồ sơ khấu hao hàng trăm thiết bị nhỏ (máy đầm cóc, máy hàn, máy cắt sắt), chuyển sang phân bổ chi phí trả trước nhanh gọn."
      },
      {
        topic: "Quy định khung thời gian trích khấu hao xe máy thi công xây dựng (Phụ lục 1)",
        type: "modified",
        oldRule: "[Căn cứ: TT 203/2009] Khung thời gian khấu hao máy móc xây dựng quy định chung chung từ 6 - 10 năm.",
        newRule: "[Căn cứ: Phụ lục 1 TT 45/2013] Phân loại chi tiết: Máy đào, máy ủi, máy xúc bánh xích (thời gian khấu hao từ 6 - 10 năm); Trạm trộn bê tông nhựa nóng, trạm nghiền đá (từ 8 - 15 năm); Xe tải ben tự đổ (từ 6 - 10 năm).",
        impactNote: "Phòng Cơ giới Kiểu Việt đăng ký thời gian khấu hao tối thiểu (6 năm) để thu hồi vốn đầu tư máy móc nhanh, tăng chi phí hợp lý được trừ thuế TNDN."
      },
      {
        topic: "Điều kiện trích khấu hao TSCĐ tạm ngừng hoạt động do thời vụ công trình",
        type: "added",
        oldRule: "[Căn cứ: TT 203/2009] TSCĐ tạm ngừng hoạt động không được trích khấu hao tính vào chi phí được trừ khi xác định thuế TNDN.",
        newRule: "[Căn cứ: Điều 9 TT 45/2013] TSCĐ tạm ngừng do tính chất mùa vụ dưới 9 tháng hoặc tạm ngừng để sửa chữa dưới 12 tháng vẫn được tiếp tục trích khấu hao tính vào chi phí hợp lý được trừ thuế TNDN.",
        impactNote: "Xe máy thi công nền đường Kiểu Việt phải dừng hoạt động 3-4 tháng trong mùa mưa Tây Nguyên vẫn được trích khấu hao hợp pháp vào chi phí được trừ."
      },
      {
        topic: "Khấu hao xe ô tô chở người dưới 9 chỗ có nguyên giá vượt trên 1.6 tỷ đồng",
        type: "modified",
        oldRule: "[Căn cứ: TT 203/2009] Cho phép trích khấu hao toàn bộ nguyên giá xe ô tô phục vụ kinh doanh vào chi phí được trừ.",
        newRule: "[Căn cứ: Điều 9 TT 45/2013] Phần trích khấu hao tương ứng với nguyên giá vượt trên 1.6 tỷ đồng/xe đối với xe ô tô chở người từ 9 chỗ ngồi trở xuống không được tính vào chi phí hợp lý được trừ thuế TNDN (trừ xe chuyên kinh doanh vận tải du lịch).",
        impactNote: "Kiểu Việt cân nhắc mua xe chỉ huy công trường trong tầm giá dưới 1.6 tỷ đồng (như Ford Everest, Toyota Fortuner) để tối ưu hóa 100% chi phí thuế TNDN."
      },
      {
        topic: "Phân bổ chi phí sửa chữa lớn và nâng cấp tài sản cố định (Điều 7)",
        type: "modified",
        oldRule: "[Căn cứ: TT 203/2009] Mọi chi phí sửa chữa lớn đều phải vốn hóa tăng nguyên giá tài sản cố định.",
        newRule: "[Căn cứ: Điều 7 TT 45/2013] Tách bạch rõ: Chi phí sửa chữa duy tu thông thường hạch toán thẳng vào chi phí sản xuất; chỉ chi phí nâng cấp làm tăng công suất, kéo dài tuổi thọ máy móc mới được vốn hóa tăng nguyên giá TSCĐ.",
        impactNote: "Chi phí đại tu thay xích, đại tu động cơ máy đào Kobelco, Komatsu của Kiểu Việt được hạch toán phân bổ thẳng vào chi phí công trình qua TK 242."
      },
      {
        topic: "Phương pháp trích khấu hao theo sản lượng đối với thiết bị khai thác mỏ",
        type: "added",
        oldRule: "[Căn cứ: TT 203/2009] Hầu hết áp dụng phương pháp khấu hao đường thẳng cố định theo tháng.",
        newRule: "[Căn cứ: Điều 13 TT 45/2013] Cho phép áp dụng phương pháp khấu hao theo số lượng, khối lượng sản phẩm đối với máy móc dây chuyền nghiền sàng đá, trạm trộn bê tông căn cứ vào công suất thiết kế và sản lượng đá nghiền thực tế.",
        impactNote: "Kiểu Việt trích khấu hao sát với khối lượng đá, cát thực tế khai thác bán ra, không chịu chi phí cố định nặng nề khi mỏ tạm dừng."
      },
      {
        topic: "Trích khấu hao đối với nhà tạm, lán trại tại công trường xây dựng",
        type: "modified",
        oldRule: "[Căn cứ: TT 203/2009] Nhà tạm lán trại thường bị coi là công trình tạm không đủ điều kiện ghi nhận TSCĐ.",
        newRule: "[Căn cứ: Điều 4 TT 45/2013] Nhà tạm, lán trại phục vụ thi công có giá trị từ 30 triệu đồng trở lên được ghi nhận TSCĐ và trích khấu hao theo thời gian thi công thực tế của công trình.",
        impactNote: "Chi phí xây dựng khu nhà điều hành Ban chỉ huy và lán trại công nhân tại gói thầu cao tốc được trích khấu hao phân bổ dứt điểm vào gói thầu."
      },
      {
        topic: "Thủ tục thay đổi thời gian trích khấu hao TSCĐ",
        type: "modified",
        oldRule: "[Căn cứ: TT 203/2009] Muốn thay đổi thời gian khấu hao phải có văn bản phê duyệt của Bộ Tài chính.",
        newRule: "[Căn cứ: Điều 10 TT 45/2013] Doanh nghiệp có quyền tự quyết định thay đổi thời gian trích khấu hao một lần cho mỗi tài sản trong khung quy định và gửi thông báo bằng văn bản cho cơ quan thuế quản lý trực tiếp trước khi thực hiện.",
        impactNote: "Kiểu Việt chủ động rút ngắn hoặc kéo dài thời gian khấu hao xe máy thi công để phù hợp với kế hoạch doanh thu và lợi nhuận từng năm."
      },
      {
        topic: "Hồ sơ thanh lý, nhượng bán TSCĐ máy móc thi công cũ hỏng",
        type: "modified",
        oldRule: "[Căn cứ: TT 203/2009] Thủ tục thanh lý rườm rà, đòi hỏi chứng thư thẩm định giá độc lập cho mọi tài sản thanh lý.",
        newRule: "[Căn cứ: Điều 8 TT 45/2013] Doanh nghiệp thành lập Hội đồng thanh lý nội bộ, lập Biên bản thanh lý (Mẫu 02-TSCĐ) và xuất hóa đơn GTGT nhượng bán thu hồi vốn: Nợ TK 112, 131 / Có TK 711, Có TK 3331.",
        impactNote: "Thanh lý nhanh các xe ben, máy lu cũ khấu hao hết để thu hồi tiền mặt tái đầu tư máy móc công nghệ mới."
      },
      {
        topic: "Khấu hao quyền sử dụng đất lâu dài và có thời hạn",
        type: "modified",
        oldRule: "[Căn cứ: TT 203/2009] Toàn bộ quyền sử dụng đất đều không được trích khấu hao.",
        newRule: "[Căn cứ: Điều 4 TT 45/2013] Quyền sử dụng đất lâu dài không trích khấu hao; quyền sử dụng đất có thời hạn (thuê đất khu công nghiệp, đất mỏ khoáng sản trả tiền một lần) được trích khấu hao vô hình theo thời hạn thuê.",
        impactNote: "Kiểu Việt phân bổ chi phí tiền thuê đất mỏ khoáng sản 20 - 30 năm vào chi phí giá thành khai thác đá hợp pháp."
      },
      {
        topic: "Đánh giá lại nguyên giá TSCĐ khi góp vốn hoặc điều chuyển nội bộ",
        type: "modified",
        oldRule: "[Căn cứ: TT 203/2009] Đánh giá lại tài sản góp vốn thường bị cơ quan thuế ấn định giá gốc cũ.",
        newRule: "[Căn cứ: Điều 5 TT 45/2013] Giá trị TSCĐ đem góp vốn liên doanh, điều chuyển giữa các đơn vị được xác định theo giá thỏa thuận của Hội đồng giao nhận hoặc tổ chức thẩm định giá chuyên nghiệp.",
        impactNote: "Góp vốn bằng thiết bị máy móc vào các công ty liên doanh khai thác mỏ tại Tây Nguyên với giá trị thị trường được ghi nhận đầy đủ."
      },
      {
        topic: "Trách nhiệm lập và theo dõi Thẻ tài sản cố định riêng biệt",
        type: "added",
        oldRule: "[Căn cứ: TT 203/2009] Cho phép theo dõi tài sản cố định trên sổ tổng hợp chung.",
        newRule: "[Căn cứ: Điều 6 TT 45/2013] Bắt buộc mỗi tài sản cố định phải có một Thẻ TSCĐ (Mẫu S21-DN) lưu giữ đầy đủ lý lịch kỹ thuật, số khung số máy, hồ sơ đăng kiểm, nguyên giá và nhật trình luân chuyển công trình.",
        impactNote: "Kế toán tài sản Kiểu Việt quản trị chặt chẽ hàng trăm đầu xe máy công trình di chuyển liên tục giữa các tỉnh Gia Lai, Kon Tum, Đắk Lắk."
      }
    ]
  },
  "tt-48-2019": {
    decreeId: "tt-48-2019",
    title: "Thông tư 48/2019/TT-BTC",
    category: "Trích lập Dự phòng Rủi ro",
    compareWith: "Thông tư 228/2009/TT-BTC",
    summary: "Thông tư 48/2019/TT-BTC thay thế toàn diện Thông tư 228/2009/TT-BTC: Siết chặt điều kiện trích lập dự phòng nợ phải thu khó đòi, bãi bỏ trích lập dự phòng bảo hành tại Thông tư này và chuẩn hóa trích lập giảm giá hàng tồn kho.",
    items: [
      {
        topic: "Khung tỷ lệ trích lập dự phòng nợ phải thu khó đòi theo thời gian quá hạn (Điều 6)",
        type: "modified",
        oldRule: "[Căn cứ: Điều 6 TT 228/2009] Quá hạn từ 6 tháng đến dưới 1 năm trích 30%; từ 1 năm đến dưới 2 năm trích 50%; từ 2 năm đến dưới 3 năm trích 70%; từ 3 năm trở lên trích 100%.",
        newRule: "[Căn cứ: Khoản 2 Điều 6 TT 48/2019] Giữ nguyên khung tỷ lệ quá hạn (30%, 50%, 70%, 100%) nhưng siết chặt căn cứ xác định thời hạn quá hạn: Bắt buộc căn cứ theo thời hạn thanh toán cam kết trong hợp đồng kinh tế hoặc biên bản nghiệm thu.",
        impactNote: "Kế toán Kiểu Việt rà soát kỹ điều khoản thời hạn thanh toán (14 ngày) trong hợp đồng xây dựng để xác định chính xác ngày bắt đầu quá hạn nợ."
      },
      {
        topic: "Điều kiện bắt buộc về chứng từ đối chiếu công nợ để trích lập dự phòng",
        type: "modified",
        oldRule: "[Căn cứ: TT 228/2009] Cho phép trích lập dự phòng khi có hóa đơn hoặc hợp đồng, biên bản đối chiếu công nợ có thể bổ sung sau.",
        newRule: "[Căn cứ: Khoản 1 Điều 6 TT 48/2019] Bắt buộc phải có Biên bản đối chiếu công nợ có chữ ký đóng dấu của hai bên tại ngày 31/12; nếu không có biên bản đối chiếu phải có văn bản đòi nợ bằng thư bảo đảm hoặc email có xác nhận hợp lệ.",
        impactNote: "Kiểu Việt gửi thư đòi nợ bảo đảm qua bưu điện cho các Chủ đầu tư nợ đọng trước ngày 15/12 hàng năm để đủ điều kiện tính chi phí thuế hợp lý."
      },
      {
        topic: "Bãi bỏ việc trích lập dự phòng bảo hành sản phẩm công trình xây dựng tại Thông tư này",
        type: "removed",
        oldRule: "[Căn cứ: Điều 7 TT 228/2009] Quy định trích lập dự phòng bảo hành công trình xây dựng tối đa không quá 5% giá trị hợp đồng.",
        newRule: "[Căn cứ: Điều 1 TT 48/2019] Bãi bỏ hoàn toàn quy định về dự phòng bảo hành tại Thông tư này. Việc trích lập dự phòng bảo hành công trình xây dựng được thực hiện theo quy định của Chuẩn mực và Chế độ kế toán doanh nghiệp (TT 200/99).",
        impactNote: "Kế toán Kiểu Việt hạch toán trích lập dự phòng bảo hành công trình theo đúng quy định kế toán vào TK 3522 / TK 632, không viện dẫn TT 48."
      },
      {
        topic: "Trích lập dự phòng giảm giá hàng tồn kho (Điều 4)",
        type: "modified",
        oldRule: "[Căn cứ: TT 228/2009] Trích lập dự phòng khi giá thị trường thấp hơn giá sổ sách kế toán.",
        newRule: "[Căn cứ: Điều 4 TT 48/2019] Bắt buộc trích lập khi Giá trị thuần có thể thực hiện được thấp hơn giá gốc trên sổ kế toán. Giá trị thuần được xác định bằng giá bán ước tính trừ chi phí hoàn thiện và chi phí tiêu thụ ước tính.",
        impactNote: "Kiểu Việt đánh giá giá trị thuần đối với vật tư sắt thép mua dự trữ tại công trường nếu giá thép trên thị trường sụt giảm mạnh cuối năm."
      },
      {
        topic: "Trích lập dự phòng tổn thất các khoản đầu tư tài chính vào công ty con, liên kết (Điều 5)",
        type: "modified",
        oldRule: "[Căn cứ: TT 228/2009] Trích lập dựa trên chênh lệch giữa vốn điều lệ và vốn chủ sở hữu của doanh nghiệp nhận đầu tư.",
        newRule: "[Căn cứ: Điều 5 TT 48/2019] Xác định mức trích lập căn cứ tỷ lệ sở hữu vốn thực tế nhân với khoản lỗ lũy kế trên Báo cáo tài chính của bên nhận đầu tư (bắt buộc BCTC phải có kiểm toán nếu thuộc đối tượng kiểm toán).",
        impactNote: "Kiểu Việt trích lập dự phòng tổn thất chính xác đối với các khoản vốn góp vào công ty liên doanh khai mỏ bị lỗ trong giai đoạn đầu."
      },
      {
        topic: "Thời điểm trích lập hoặc hoàn nhập dự phòng",
        type: "modified",
        oldRule: "[Căn cứ: TT 228/2009] Cho phép trích lập dự phòng vào cuối mỗi quý hoặc cuối năm tài chính.",
        newRule: "[Căn cứ: Điều 3 TT 48/2019] Bắt buộc trích lập hoặc hoàn nhập dự phòng tại thời điểm lập Báo cáo tài chính năm (ngày 31/12 hoặc ngày kết thúc năm tài chính).",
        impactNote: "Tập trung rà soát toàn bộ công nợ và hàng tồn kho vào tháng 12 hàng năm để lập bảng trích lập dự phòng đồng bộ."
      },
      {
        topic: "Hạch toán hoàn nhập dự phòng nợ khó đòi vào Chi phí quản lý doanh nghiệp",
        type: "modified",
        oldRule: "[Căn cứ: TT 228/2009] Khoản hoàn nhập dự phòng được hạch toán vào Thu nhập khác (TK 711).",
        newRule: "[Căn cứ: Điều 6 TT 48/2019 & TT 200] Khoản hoàn nhập dự phòng nợ phải thu khó đòi được hạch toán ghi giảm Chi phí quản lý doanh nghiệp trong kỳ: Nợ TK 2293 / Có TK 642.",
        impactNote: "Giúp giảm trực tiếp chi phí quản lý của Kiểu Việt khi thu hồi được các khoản nợ của chủ đầu tư đã trích lập dự phòng năm trước."
      },
      {
        topic: "Hồ sơ xử lý xóa nợ không có khả năng thu hồi",
        type: "modified",
        oldRule: "[Căn cứ: TT 228/2009] Hồ sơ xóa nợ chỉ cần quyết định nội bộ của Hội đồng quản trị.",
        newRule: "[Căn cứ: Khoản 4 Điều 6 TT 48/2019] Bắt buộc phải có: Biên bản xử lý nợ của Hội đồng xử lý nợ doanh nghiệp; BCTC của con nợ; Quyết định tuyên bố phá sản của Tòa án hoặc Giấy chứng tử của cá nhân; văn bản xác nhận ngừng hoạt động của cơ quan thuế.",
        impactNote: "Kiểu Việt thu thập đầy đủ tài liệu pháp lý trước khi xóa nợ các đối tác nhà thầu phụ đã phá sản hoặc giải thể."
      },
      {
        topic: "Theo dõi khoản nợ khó đòi đã xóa nợ ngoài sổ sách kế toán trong 10 năm",
        type: "added",
        oldRule: "[Căn cứ: TT 228/2009] Theo dõi trên tài khoản ngoài bảng TK 004.",
        newRule: "[Căn cứ: Khoản 4 Điều 6 TT 48/2019] Các khoản nợ đã xóa nợ bằng nguồn dự phòng phải được theo dõi chi tiết trên Sổ quản trị nợ xấu ngoài bảng tối thiểu trong thời hạn 10 năm để tiếp tục đôn đốc thu hồi.",
        impactNote: "Bộ phận pháp chế Kiểu Việt tiếp tục truy thu các khoản nợ đã xử lý xóa nợ khi đối tác có dấu hiệu tẩu tán tài sản."
      },
      {
        topic: "Xử lý số tiền thu hồi được từ các khoản nợ đã xóa sổ",
        type: "modified",
        oldRule: "[Căn cứ: TT 228/2009] Số tiền thu hồi được chuyển vào quỹ dự phòng tài chính.",
        newRule: "[Căn cứ: Điều 6 TT 48/2019] Số tiền thu hồi được từ khoản nợ đã xử lý xóa sổ kế toán được hạch toán toàn bộ vào Thu nhập khác trong kỳ: Nợ TK 112 / Có TK 711.",
        impactNote: "Tăng trực tiếp thu nhập đột biến cho Kiểu Việt khi thu hồi thành công các khoản công nợ tưởng như mất trắng."
      },
      {
        topic: "Quy định về Hội đồng xử lý nợ và trách nhiệm thẩm định rủi ro nợ",
        type: "added",
        oldRule: "[Căn cứ: TT 228/2009] Chưa quy định cơ cấu thành phần Hội đồng xử lý nợ doanh nghiệp.",
        newRule: "[Căn cứ: Điều 6 TT 48/2019] Thành phần Hội đồng xử lý nợ gồm: Tổng Giám đốc, Kế toán trưởng, Trưởng ban Kiểm soát và các chuyên gia pháp chế. Hội đồng chịu trách nhiệm trước pháp luật về tính trung thực của hồ sơ trích lập.",
        impactNote: "Ban Tổng Giám đốc Kiểu Việt kiện toàn Hội đồng xử lý nợ nội bộ để phê duyệt các phương án trích lập dự phòng bảo đảm an toàn pháp lý."
      },
      {
        topic: "Thay thế toàn diện Thông tư 228/2009 và các thông tư sửa đổi",
        type: "added",
        oldRule: "[Căn cứ: TT 228/2009, TT 34/2011, TT 89/2013] Hệ thống văn bản trích lập dự phòng bị phân tán qua nhiều thông tư sửa đổi.",
        newRule: "[Căn cứ: Điều 11 TT 48/2019] Hợp nhất toàn bộ vào một văn bản duy nhất, bãi bỏ hoàn toàn TT 228, TT 34 và TT 89.",
        impactNote: "Tạo sự thống nhất cao cho kế toán Kiểu Việt khi giải trình trích lập dự phòng với các đoàn kiểm toán nhà nước và thanh tra thuế."
      }
    ]
  }
};

// Also add remaining 6 decrees in Group 1: vas-01, vas-02, vas-14, luat-ke-toan-2015, nd-174-2016
// Let's create complete group 1 data!
console.log('Writing full Group 1...');
