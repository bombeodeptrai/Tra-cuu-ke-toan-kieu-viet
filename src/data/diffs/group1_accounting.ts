import { DecreeDiffData } from '../diff-types';

export const group1Accounting: Record<string, DecreeDiffData> = {
  "tt-99-2025": {
    "decreeId": "tt-99-2025",
    "title": "Thông tư 99/2025/TT-BTC",
    "category": "Chế độ Kế toán Doanh nghiệp",
    "compareWith": "Thông tư 200/2014/TT-BTC",
    "summary": "Thông tư 99/2025/TT-BTC cải cách căn bản chế độ kế toán doanh nghiệp Việt Nam: Tiệm cận IFRS, bãi bỏ các tài khoản trung gian rườm rà, đo lường theo Giá trị hợp lý (Fair Value), chuẩn hóa hạch toán số và số hóa 100% chứng từ kế toán.",
    "items": [
      {
        "topic": "Tập hợp chi phí thi công xây lắp (TK 154 thay thế toàn bộ 621, 622, 623, 627)",
        "type": "modified",
        "oldRule": "[Căn cứ: Điều 86-90 TT 200/2014] Bắt buộc mở và theo dõi tách biệt 4 tài khoản chi phí: 621 (Chi phí NVL trực tiếp), 622 (Nhân công trực tiếp), 623 (Máy thi công), 627 (Sản xuất chung). Cuối tháng phải lập bút toán kết chuyển Nợ TK 154 / Có TK 621, 622, 623, 627.",
        "newRule": "[Căn cứ: Điều 28-32 TT 99/2025] Bãi bỏ toàn bộ tài khoản 621, 622, 623, 627. Toàn bộ chi phí cấu thành công trình xây lắp được hạch toán trực tiếp vào các tiểu khoản của TK 154 (1541-NVL, 1542-Nhân công, 1543-Máy thi công, 1547-Chi phí chung). Định khoản trực tiếp: Nợ TK 154 / Có TK 112, 331, 334, 214.",
        "impactNote": "Kế toán Kiểu Việt giảm bớt hơn 40% khối lượng chứng từ kết chuyển trung gian cuối tháng, giá thành từng hạng mục gói thầu công trình được cập nhật tức thời theo thời gian thực."
      },
      {
        "topic": "Bãi bỏ tài khoản Chi phí trả trước ngắn hạn (Xóa sổ TK 142, hợp nhất vào TK 242)",
        "type": "removed",
        "oldRule": "[Căn cứ: Điều 47 TT 200/2014] Mở riêng TK 142 để phản ánh các khoản chi phí trả trước có thời hạn phân bổ dưới 12 tháng (tiền thuê văn phòng, bảo hiểm xe máy thi công 1 năm) và TK 242 cho chi phí trên 12 tháng.",
        "newRule": "[Căn cứ: Điều 35 TT 99/2025] Xóa bỏ hoàn toàn TK 142. Toàn bộ chi phí trả trước (công cụ dụng cụ lán trại, sửa chữa máy đào, tiền thuê kho bãi) đều hạch toán vào TK 242. Việc phân loại ngắn hạn/dài hạn được thực hiện tại thời điểm lập BCTC căn cứ thời gian phân bổ còn lại.",
        "impactNote": "Kiểu Việt không còn phải theo dõi phức tạp chuyển dịch giữa TK 142 và TK 242, tinh giản danh mục mã tài khoản trên phần mềm ERP."
      },
      {
        "topic": "Bãi bỏ các tài khoản giảm trừ doanh thu (Xóa sổ TK 5211, 5212, 5213)",
        "type": "removed",
        "oldRule": "[Căn cứ: Điều 81 TT 200/2014] Mở riêng TK 521 gồm các tiểu khoản: 5211 (Chiết khấu thương mại), 5212 (Giảm giá hàng bán), 5213 (Hàng bán bị trả lại). Cuối kỳ hạch toán kết chuyển giảm trừ sang TK 511: Nợ TK 511 / Có TK 521.",
        "newRule": "[Căn cứ: Điều 45 TT 99/2025] Xóa bỏ hoàn toàn hệ thống tài khoản loại 521x. Toàn bộ các khoản chiết khấu thanh toán theo hợp đồng, giảm giá khối lượng nghiệm thu công trình được ghi trực tiếp vào bên Nợ của TK 511 (Nợ TK 511, Nợ TK 3331 / Có TK 131, 112).",
        "impactNote": "Báo cáo doanh thu thuần phản ánh trực tiếp giá trị thực nhận sau điều chỉnh A-B, không còn độ trễ hạch toán kết chuyển doanh thu cuối quý."
      },
      {
        "topic": "Bãi bỏ toàn bộ hệ thống tài khoản ngoài bảng (Xóa sổ Tài khoản Loại 0)",
        "type": "removed",
        "oldRule": "[Căn cứ: Điều 112 TT 200/2014] Bắt buộc duy trì các tài khoản ngoài bảng ghi đơn: TK 001 (Tài sản thuê ngoài), 002 (Vật tư giữ hộ, gia công), 004 (Nợ khó đòi đã xử lý xóa nợ), 007 (Ngoại tệ các loại).",
        "newRule": "[Căn cứ: Điều 5 & Điều 18 TT 99/2025] Bãi bỏ hoàn toàn việc ghi đơn trên tài khoản loại 0. Mọi tài sản máy móc thiết bị thuê ngoài, vật tư nhận giữ hộ tại công trường được quản trị chi tiết trên Sổ theo dõi tài sản ngoại bảng điện tử và thuyết minh đầy đủ trên Thuyết minh BCTC (Mẫu B09-DN).",
        "impactNote": "Phần mềm kế toán Kiểu Việt không còn xung đột kỹ thuật giữa hạch toán kép và hạch toán đơn, đảm bảo tính nhất quán dữ liệu kiểm toán."
      },
      {
        "topic": "Áp dụng nguyên tắc Giá trị hợp lý (Fair Value) trong đo lường tài sản và nợ phải trả",
        "type": "added",
        "oldRule": "[Căn cứ: Điều 13 TT 200/2014] Hạch toán cứng nhắc theo nguyên tắc Giá gốc (Historical Cost). Việc đánh giá lại tài sản chỉ được thực hiện khi có quyết định cổ phần hóa hoặc định giá của cơ quan nhà nước có thẩm quyền.",
        "newRule": "[Căn cứ: Điều 12 & Điều 24 TT 99/2025] Bổ sung khung pháp lý cho phép đo lường tài sản tài chính, công cụ nợ, bất động sản đầu tư theo Giá trị hợp lý tại ngày lập BCTC (nếu có thị trường niêm yết đáng tin cậy). Chênh lệch đánh giá lại được ghi nhận vào Doanh thu tài chính (TK 515) hoặc Chi phí tài chính (TK 635).",
        "impactNote": "Tài sản máy móc chuyên dùng và các khoản đầu tư của Kiểu Việt được định giá sát với giá trị thị trường, nâng cao năng lực tài chính khi nộp hồ sơ dự thầu các dự án cao tốc trọng điểm."
      },
      {
        "topic": "Hợp nhất tài khoản ký quỹ, ký cược (Xóa sổ TK 1386, 344, quy về TK 244 và TK 3386)",
        "type": "modified",
        "oldRule": "[Căn cứ: Điều 22 & Điều 60 TT 200/2014] Chia tách phức tạp: TK 1386 (Cầm cố, thế chấp, ký cược ngắn hạn), TK 244 (Ký quỹ, ký cược dài hạn); bên nhận ký cược chia TK 3386 (ngắn hạn) và TK 344 (dài hạn).",
        "newRule": "[Căn cứ: Điều 38 TT 99/2025] Hợp nhất toàn bộ các khoản đi ký cược, bảo lãnh dự thầu, bảo lãnh thực hiện hợp đồng vào TK 244 duy nhất; các khoản nhận ký cược, bảo lãnh của nhà thầu phụ quy về TK 3386. Phân loại ngắn/dài hạn thực hiện tự động trên BCTC.",
        "impactNote": "Kế toán Kiểu Việt dễ dàng theo dõi hàng chục chứng thư bảo lãnh dự thầu và bảo lãnh tạm ứng công trình tại các ngân hàng MB, VietinBank, BIDV."
      },
      {
        "topic": "Hạch toán chi phí bảo hành công trình xây dựng (TK 3522 trích lập 3% - 5%)",
        "type": "modified",
        "oldRule": "[Căn cứ: Điều 63 TT 200/2014] Trích lập dự phòng bảo hành công trình xây dựng vào chi phí sản xuất chung (TK 627) rồi kết chuyển vào TK 154, hoặc ghi nhận vào chi phí quản lý tùy chính sách kế toán.",
        "newRule": "[Căn cứ: Điều 42 TT 99/2025] Bắt buộc trích lập dự phòng bảo hành công trình tính trực tiếp vào giá vốn xây lắp tương ứng: Nợ TK 632 / Có TK 3522 (tỷ lệ 3% - 5% giá trị công trình nghiệm thu A-B). Khi phát sinh chi phí bảo hành thực tế: Nợ TK 3522 / Có TK 154, 112.",
        "impactNote": "Bảo đảm giá vốn công trình phản ánh đúng nghĩa vụ bảo hành 12 - 24 tháng theo hợp đồng EPC/xây lắp, tránh đột biến chi phí sau khi đã bàn giao công trình."
      },
      {
        "topic": "Ghi nhận doanh thu xây lắp theo hóa đơn nghiệm thu thực tế (Bãi bỏ TK 337)",
        "type": "modified",
        "oldRule": "[Căn cứ: Điều 58 TT 200/2014] Áp dụng phương pháp ghi nhận doanh thu theo tỷ lệ hoàn thành kế hoạch qua TK 337 (Thanh toán theo tiến độ kế hoạch hợp đồng xây dựng), dẫn đến chênh lệch lớn giữa doanh thu kế toán và hóa đơn GTGT.",
        "newRule": "[Căn cứ: Điều 44 TT 99/2025] Bãi bỏ cơ chế hạch toán ảo qua TK 337 đối với hợp đồng xây dựng phổ thông. Doanh thu xây lắp được ghi nhận căn cứ Biên bản nghiệm thu khối lượng hoàn thành (Mẫu 03a) và hóa đơn điện tử xuất trong kỳ: Nợ TK 131 / Có TK 511, Có TK 3331.",
        "impactNote": "Loại bỏ hoàn toàn rủi ro bị cơ quan thuế xử phạt vi phạm xuất hóa đơn sai thời điểm hoặc ấn định doanh thu do chênh lệch giữa TK 337 và hóa đơn GTGT."
      },
      {
        "topic": "Xử lý chênh lệch tỷ giá hối đoái cuối kỳ (TK 413 - Kết chuyển ngay vào TK 515/635)",
        "type": "modified",
        "oldRule": "[Căn cứ: Điều 69 TT 200/2014] Doanh nghiệp trong giai đoạn trước hoạt động được treo chênh lệch tỷ giá lỗ trên TK 413 và phân bổ dần trong thời gian tối đa 5 năm vào chi phí tài chính.",
        "newRule": "[Căn cứ: Điều 48 TT 99/2025] Bãi bỏ toàn bộ việc treo hoãn chênh lệch tỷ giá. Toàn bộ lãi/lỗ chênh lệch tỷ giá do đánh giá lại số dư ngoại tệ cuối năm tài chính phải kết chuyển ngay 100% vào Doanh thu tài chính (TK 515) hoặc Chi phí tài chính (TK 635).",
        "impactNote": "Kiểu Việt có các khoản vay mua máy đào, xe lu bằng USD hoặc thanh toán nhựa đường nhập khẩu phải hạch toán dứt điểm lãi lỗ tỷ giá trong năm tài chính."
      },
      {
        "topic": "Hạch toán thuế TNDN hoãn lại (TK 243 & 347) theo phương pháp Bảng cân đối kế toán",
        "type": "modified",
        "oldRule": "[Căn cứ: Điều 30 & Điều 61 TT 200/2014] Xác định thuế hoãn lại dựa trên chênh lệch tạm thời giữa doanh thu, chi phí theo thuế và kế toán trên Báo cáo kết quả kinh doanh.",
        "newRule": "[Căn cứ: Điều 26 TT 99/2025] Tiếp cận chuẩn mực IAS 12: Xác định chênh lệch tạm thời chịu thuế và được khấu trừ dựa trên cơ sở tính thuế của tài sản và nợ phải trả trên Báo cáo tình hình tài chính. Tài sản thuế hoãn lại (TK 243) chỉ được ghi nhận khi chắc chắn có đủ lợi nhuận tính thuế tương lai.",
        "impactNote": "Kế toán trưởng Kiểu Việt kiểm soát chặt chẽ việc ghi nhận tài sản thuế hoãn lại từ các khoản trích trước chi phí trích lập dự phòng công nợ nhà thầu phụ."
      },
      {
        "topic": "Trích lập dự phòng tổn thất tài sản và nợ khó đòi (TK 229 theo mô hình tổn thất tín dụng)",
        "type": "modified",
        "oldRule": "[Căn cứ: Điều 44 TT 200/2014] Trích lập dự phòng nợ phải thu khó đòi dựa trên số ngày quá hạn cố định theo Thông tư của Bộ Tài chính (quá hạn từ 6 tháng trích 30%, từ 1 năm trích 50%...).",
        "newRule": "[Căn cứ: Điều 23 TT 99/2025] Bổ sung quyền cho doanh nghiệp đánh giá khả năng thu hồi thực tế và mô hình tổn thất tín dụng dự kiến (ECL) đối với các khoản nợ của chủ đầu tư chậm giải ngân vốn đầu tư công, trích lập sát với rủi ro thực tế.",
        "impactNote": "Kiểu Việt chủ động trích lập dự phòng đối với các khoản nợ đọng kéo dài từ các dự án BOT, BT hoặc công trình ngân sách địa phương chậm quyết toán."
      },
      {
        "topic": "Tự chủ hoàn toàn thiết kế mẫu biểu chứng từ và hệ thống sổ kế toán điện tử",
        "type": "modified",
        "oldRule": "[Căn cứ: Điều 117-119 TT 200/2014] Danh mục chứng từ và sổ kế toán mang tính chất hướng dẫn nhưng khi quyết toán, đoàn thanh tra thuế thường yêu cầu mẫu biểu phải khớp tuyệt đối với biểu mẫu in sẵn kèm theo Thông tư.",
        "newRule": "[Căn cứ: Điều 8 & Phụ lục II TT 99/2025] Doanh nghiệp có toàn quyền tự thiết kế hệ thống chứng từ và sổ kế toán điện tử phù hợp với đặc thù sản xuất kinh doanh, chỉ cần bảo đảm tối thiểu 7 nội dung bắt buộc theo Điều 16 Luật Kế toán 2015.",
        "impactNote": "Kiểu Việt tự do số hóa Biên bản nghiệm thu công việc xây dựng, Phiếu xuất kho vật tư kiêm vận chuyển nội bộ và Bảng kê khối lượng hoàn thành Mẫu 03a có gắn chữ ký số HSM."
      },
      {
        "topic": "Cải cách toàn diện hệ thống Báo cáo tài chính (Mẫu B01-DN Báo cáo tình hình tài chính)",
        "type": "modified",
        "oldRule": "[Căn cứ: Điều 100-111 TT 200/2014] Hệ thống BCTC gồm Bảng cân đối kế toán, Báo cáo KQKD, Báo cáo LCTT và Thuyết minh BCTC với nhiều chỉ tiêu trùng lặp, thiếu thông tin về rủi ro dòng tiền ngắn hạn.",
        "newRule": "[Căn cứ: Điều 50-65 TT 99/2025] Đổi tên thành Báo cáo tình hình tài chính (Mẫu B01-DN). Bổ sung các chỉ tiêu phân tích dòng tiền thi công dở dang, thuyết minh chi tiết các khoản bảo lãnh ngân hàng thực hiện hợp đồng xây dựng và cam kết bảo hành công trình.",
        "impactNote": "Ban Tổng Giám đốc Kiểu Việt kiểm soát chặt chẽ cơ cấu vốn lưu động, chỉ tiêu thanh toán nhanh và quản trị rủi ro nợ đọng vốn ngân sách."
      },
      {
        "topic": "Quy định về khấu hao máy móc thi công chuyên dùng nhàn rỗi chờ công trình",
        "type": "added",
        "oldRule": "[Căn cứ: Điều 35 TT 200/2014] Máy móc thiết bị ngừng hoạt động do mùa vụ hoặc chờ việc vẫn phải trích khấu hao và kết chuyển vào chi phí sản xuất chung (TK 627) làm méo mó giá thành công trình đang thi công.",
        "newRule": "[Căn cứ: Điều 25 TT 99/2025] Chi phí khấu hao xe máy thi công nhàn rỗi không phục vụ trực tiếp công trình nào trong kỳ được hạch toán thẳng vào Chi phí quản lý doanh nghiệp (Nợ TK 642 / Có TK 214) hoặc Chi phí khác (TK 811), không phân bổ vào TK 154.",
        "impactNote": "Đơn giá dự toán và giá thành thực tế từng gói thầu của Kiểu Việt phản ánh chính xác chi phí máy thi công thực tế tại công trường."
      },
      {
        "topic": "Hạch toán chiết khấu thương mại, giảm giá vật tư số lượng lớn mua vào",
        "type": "modified",
        "oldRule": "[Căn cứ: Điều 27 TT 200/2014] Khoản chiết khấu thương mại nhận được sau khi mua hàng phải phân bổ phức tạp giữa hàng còn tồn kho, hàng đã xuất dùng và hàng đã cấu thành giá vốn công trình.",
        "newRule": "[Căn cứ: Điều 21 TT 99/2025] Cho phép ghi giảm trực tiếp vào giá trị vật tư còn tồn kho (Nợ TK 331 / Có TK 152, Có TK 133); nếu vật tư đã đưa vào thi công công trình thì ghi giảm trực tiếp chi phí xây lắp dở dang (Nợ TK 331 / Có TK 154, Có TK 133).",
        "impactNote": "Tiết kiệm hàng chục giờ công phân bổ chiết khấu khi Kiểu Việt ký hợp đồng mua thép Hòa Phát, xi măng Hà Tiên, nhựa đường khối lượng lớn hàng chục tỷ đồng."
      },
      {
        "topic": "Chuẩn mực hạch toán Hợp đồng hợp tác kinh doanh (BCC) chia lợi nhuận và khoáng sản",
        "type": "added",
        "oldRule": "[Căn cứ: Điều 44 TT 200/2014] Hướng dẫn sơ sài về hợp đồng BCC, chủ yếu quy định cho hình thức chia doanh thu hoặc chia lợi nhuận trước thuế.",
        "newRule": "[Căn cứ: Điều 33 TT 99/2025] Quy định chi tiết các hình thức BCC: BCC chia sản phẩm (khối lượng đá, cát khai thác từ mỏ khoáng sản), BCC chia doanh thu bán hàng và BCC chia lợi nhuận sau thuế. Bên điều hành hợp đồng có trách nhiệm mở sổ theo dõi riêng tài sản và chi phí chung.",
        "impactNote": "Kiểu Việt áp dụng chuẩn xác khi liên danh hợp tác khai thác mỏ đá, mỏ đất đắp tại Gia Lai với các đối tác địa phương."
      },
      {
        "topic": "Chuẩn hóa lưu trữ chứng từ điện tử có chữ ký số HSM không bắt buộc in ra giấy",
        "type": "added",
        "oldRule": "[Căn cứ: Điều 120 TT 200/2014] Chứng từ điện tử khi phục vụ thanh tra, kiểm tra thuế bắt buộc phải in ra bản giấy có chữ ký sống và đóng dấu đỏ của người đại diện pháp luật.",
        "newRule": "[Căn cứ: Điều 9 TT 99/2025] Quy định rõ chứng từ kế toán điện tử có giá trị pháp lý nguyên bản nếu được ký số bằng chữ ký số hợp lệ (USB Token hoặc HSM) và lưu trữ an toàn theo Luật Giao dịch điện tử 2023. Đoàn thanh tra kiểm tra phải tiếp nhận dữ liệu điện tử, không được yêu cầu in ra giấy.",
        "impactNote": "Kiểu Việt tiết kiệm hàng trăm triệu đồng chi phí in ấn, lưu kho lưu trữ hàng vạn tờ biên bản nghiệm thu và phiếu xuất kho hàng năm."
      },
      {
        "topic": "Xử lý chuyển đổi số dư tài khoản khi chuyển tiếp từ TT 200 sang TT 99",
        "type": "added",
        "oldRule": "[Căn cứ: Điều 127 TT 200/2014] Hướng dẫn chuyển đổi số dư từ Quyết định 15 sang TT 200 theo bảng đối chiếu chuyển tiếp cũ.",
        "newRule": "[Căn cứ: Điều 70 TT 99/2025] Quy định chi tiết bảng chuyển đổi số dư: Số dư các tài khoản chi phí dở dang 621, 622, 623, 627 chuyển toàn bộ sang TK 154 tương ứng; số dư TK 142 chuyển sang TK 242; số dư tài khoản loại 0 được tất toán và mở sổ theo dõi riêng.",
        "impactNote": "Phòng Kế toán Kiểu Việt hoàn thành bảng đối chiếu chuyển đổi số dư tài khoản trước ngày 01/01/2026, đảm bảo tính liên tục của số liệu Báo cáo tài chính."
      }
    ]
  },
  "tt-200-2014": {
    "decreeId": "tt-200-2014",
    "title": "Thông tư 200/2014/TT-BTC",
    "category": "Chế độ Kế toán Doanh nghiệp",
    "compareWith": "Quyết định 15/2006/QĐ-BTC",
    "summary": "Thông tư 200/2014/TT-BTC là bước chuyển lịch sử: Trao quyền chủ động tối đa cho doanh nghiệp, tôn trọng bản chất hơn hình thức, bãi bỏ các tài khoản trung gian như 142, hợp nhất tài khoản dự phòng và chuẩn hóa ghi nhận doanh thu xây lắp.",
    "items": [
      {
        "topic": "Đổi mới phương pháp hạch toán tỷ giá hối đoái (TK 413)",
        "type": "modified",
        "oldRule": "[Căn cứ: QĐ 15/2006] Sử dụng tỷ giá bình quân liên ngân hàng do NHNN công bố để hạch toán tất cả các giao dịch ngoại tệ phát sinh trong kỳ.",
        "newRule": "[Căn cứ: Điều 69 TT 200/2014] Sử dụng tỷ giá giao dịch thực tế của ngân hàng thương mại nơi doanh nghiệp mở tài khoản (tỷ giá mua khi ghi nhận tài sản/doanh thu, tỷ giá bán khi ghi nhận nợ phải trả/chi phí).",
        "impactNote": "Kiểu Việt hạch toán sát thực tế biến động tỷ giá ngân hàng giao dịch, hạn chế chênh lệch giữa sổ sách kế toán và sao kê ngân hàng."
      },
      {
        "topic": "Bãi bỏ hình thức ghi sổ kế toán bắt buộc, trao quyền tự chủ sổ sách",
        "type": "removed",
        "oldRule": "[Căn cứ: QĐ 15/2006] Bắt buộc doanh nghiệp phải đăng ký và tuân thủ 1 trong 4 hình thức sổ kế toán cứng nhắc: Nhật ký chung, Nhật ký - Sổ cái, Chứng từ ghi sổ hoặc Nhật ký chứng từ.",
        "newRule": "[Căn cứ: Điều 122 TT 200/2014] Doanh nghiệp được hoàn toàn tự chủ xây dựng hình thức sổ kế toán riêng hoặc sử dụng phần mềm kế toán, miễn là bảo đảm tính minh bạch, đầy đủ và dễ kiểm tra.",
        "impactNote": "Kiểu Việt linh hoạt tùy biến hệ thống sổ chi tiết chi phí công trình theo từng mã dự án giao thông độc lập."
      },
      {
        "topic": "Phân loại Bất động sản đầu tư (TK 217) tách bạch TSCĐ hữu hình (TK 211)",
        "type": "modified",
        "oldRule": "[Căn cứ: QĐ 15/2006] Các tài sản nhà xưởng, mặt bằng cho thuê hoạt động thường được theo dõi chung trên TK 211, dễ gây nhầm lẫn về mục đích sử dụng.",
        "newRule": "[Căn cứ: Điều 39 TT 200/2014] Bắt buộc tách riêng Bất động sản đầu tư nắm giữ để thu lợi từ việc cho thuê hoặc chờ tăng giá trên TK 217; trích khấu hao tính vào giá vốn kinh doanh BĐS (Nợ TK 632 / Có TK 2147).",
        "impactNote": "Kiểu Việt hạch toán rõ ràng các khu nhà xưởng kho bãi cho thuê phụ trợ ngoài hoạt động thi công xây lắp chính."
      },
      {
        "topic": "Bổ sung TK 353 (Quỹ khen thưởng, phúc lợi) tách khỏi Vốn chủ sở hữu",
        "type": "modified",
        "oldRule": "[Căn cứ: QĐ 15/2006] Quỹ khen thưởng phúc lợi được xếp vào Loại 4 - Vốn chủ sở hữu (TK 431), gây hiểu nhầm về quyền sở hữu vốn của cổ đông.",
        "newRule": "[Căn cứ: Điều 64 TT 200/2014] Chuyển Quỹ khen thưởng, phúc lợi sang Loại 3 - Nợ phải trả (TK 353) vì đây là nghĩa vụ phải trả cho người lao động, không phải vốn của chủ sở hữu doanh nghiệp.",
        "impactNote": "Cơ cấu Bảng cân đối kế toán của Kiểu Việt phản ánh chuẩn xác vốn chủ sở hữu thực của cổ đông khi nộp hồ sơ đấu thầu."
      },
      {
        "topic": "Quy định thời hạn phân bổ chi phí trả trước (TK 242 tối đa 3 năm)",
        "type": "modified",
        "oldRule": "[Căn cứ: QĐ 15/2006] Không khống chế thời gian tối đa phân bổ chi phí trả trước dài hạn, dẫn đến việc nhiều doanh nghiệp treo chi phí lỗ nhiều năm.",
        "newRule": "[Căn cứ: Điều 48 TT 200/2014] Quy định rõ chi phí trả trước dài hạn (công cụ lán trại thi công, chi phí thành lập, thuê đất) được phân bổ dần vào chi phí kinh doanh trong thời gian tối đa không quá 3 năm tài chính.",
        "impactNote": "Kiểu Việt phân bổ dứt điểm chi phí thiết bị lán trại tạm thời phục vụ gói thầu trong vòng đời thi công dự án."
      },
      {
        "topic": "Hạch toán vốn hóa chi phí đi vay vào giá trị tài sản dở dang (TK 241)",
        "type": "modified",
        "oldRule": "[Căn cứ: QĐ 15/2006] Vốn hóa chi phí lãi vay áp dụng cứng nhắc, nhiều trường hợp lãi vay đầu tư dở dang vẫn hạch toán vào chi phí tài chính trong kỳ.",
        "newRule": "[Căn cứ: Điều 82 TT 200/2014] Quy định chuẩn mực: Lãi vay liên quan trực tiếp đến việc đầu tư xây dựng tài sản dở dang phải được vốn hóa vào giá trị tài sản (Nợ TK 241 / Có TK 112, 335) cho đến khi tài sản sẵn sàng đưa vào sử dụng.",
        "impactNote": "Kiểu Việt vốn hóa chính xác chi phí lãi vay ngân hàng đầu tư trạm trộn bê tông nhựa nóng và dây chuyền nghiền sàng đá."
      },
      {
        "topic": "Xử lý tổn thất tài sản và hàng tồn kho mất mát chờ xử lý (TK 1381)",
        "type": "modified",
        "oldRule": "[Căn cứ: QĐ 15/2006] Tài sản thiếu chờ xử lý thường kéo dài qua nhiều năm tài chính mà không có chế tài xử lý dứt điểm.",
        "newRule": "[Căn cứ: Điều 20 TT 200/2014] Bắt buộc tại thời điểm lập BCTC năm phải xác định nguyên nhân và xử lý dứt điểm số dư TK 1381 (bồi thường của cá nhân, hạch toán vào chi phí khác hoặc giá vốn hàng bán).",
        "impactNote": "Tăng cường trách nhiệm của thủ kho và Ban chỉ huy công trường Kiểu Việt trong việc bảo vệ vật tư sắt thép xi măng ngoài hiện trường."
      },
      {
        "topic": "Phân loại chứng khoán kinh doanh (TK 121) và đầu tư nắm giữ đến ngày đáo hạn (TK 128)",
        "type": "modified",
        "oldRule": "[Căn cứ: QĐ 15/2006] Gộp chung các khoản đầu tư tài chính ngắn hạn vào TK 121 mà không phân biệt bản chất mục đích đầu tư.",
        "newRule": "[Căn cứ: Điều 15 TT 200/2014] Tách bạch rõ: TK 121 chỉ phản ánh chứng khoán mua vì mục đích kinh doanh lướt sóng; TK 128 phản ánh tiền gửi ngân hàng có kỳ hạn, trái phiếu, thương phiếu nắm giữ đến ngày đáo hạn.",
        "impactNote": "Kiểu Việt hạch toán đúng bản chất các hợp đồng tiền gửi tiết kiệm có kỳ hạn tại ngân hàng để bảo toàn vốn lưu động."
      },
      {
        "topic": "Thay đổi cấu trúc Báo cáo lưu chuyển tiền tệ (Mẫu B03-DN)",
        "type": "modified",
        "oldRule": "[Căn cứ: QĐ 15/2006] Các chỉ tiêu lưu chuyển tiền từ hoạt động đầu tư và tài chính chưa tách bạch dòng tiền giải ngân các dự án dài hạn.",
        "newRule": "[Căn cứ: Điều 110 TT 200/2014] Chuẩn hóa phương pháp lập LCTT trực tiếp và gián tiếp; tách riêng dòng tiền chi mua sắm TSCĐ và tiền thu hồi cho vay, đầu tư vốn vào đơn vị khác.",
        "impactNote": "Giúp lãnh đạo Kiểu Việt nhìn rõ dòng tiền tự do (Free Cash Flow) tạo ra từ hoạt động thi công xây lắp cốt lõi."
      },
      {
        "topic": "Thuyết minh BCTC về quản trị rủi ro thanh khoản và biến động lãi suất",
        "type": "added",
        "oldRule": "[Căn cứ: QĐ 15/2006] Bản Thuyết minh BCTC chủ yếu thuyết minh số liệu lịch sử tĩnh, thiếu các cảnh báo về rủi ro tài chính.",
        "newRule": "[Căn cứ: Điều 111 & Mẫu B09-DN TT 200/2014] Bắt buộc bổ sung Thuyết minh chi tiết về rủi ro thanh khoản, rủi ro tín dụng đối tác và phân tích độ nhạy của lãi suất tiền vay đối với lợi nhuận doanh nghiệp.",
        "impactNote": "BCTC Kiểu Việt minh bạch, đạt chuẩn yêu cầu thẩm định vốn vay của các tổ chức tín dụng lớn."
      },
      {
        "topic": "Ghi nhận doanh thu bán hàng kèm thiết bị chạy thử, lắp đặt",
        "type": "added",
        "oldRule": "[Căn cứ: QĐ 15/2006] Doanh thu được ghi nhận ngay khi giao hàng, bất kể việc chạy thử có điều kiện nghiệm thu phức tạp hay không.",
        "newRule": "[Căn cứ: Điều 79 TT 200/2014] Chỉ được ghi nhận doanh thu khi đã hoàn thành việc lắp đặt và khách hàng đã ký biên bản nghiệm thu chạy thử đạt yêu cầu kỹ thuật.",
        "impactNote": "Bảo đảm Kiểu Việt chỉ xuất hóa đơn và ghi nhận doanh thu các gói thầu lắp đặt trạm cân, hệ thống chiếu sáng giao thông khi chủ đầu tư đã nghiệm thu."
      },
      {
        "topic": "Chuyển đổi số dư tài khoản kế toán từ QĐ 15 sang TT 200",
        "type": "added",
        "oldRule": "[Căn cứ: QĐ 15/2006] Quy định danh mục tài khoản cũ gồm 114 tài khoản cấp 1.",
        "newRule": "[Căn cứ: Điều 127 TT 200/2014] Bảng chuyển đổi chi tiết: Chuyển toàn bộ số dư TK 142 sang TK 242; chuyển TK 431 sang TK 353; phân tách số dư tiền gửi có kỳ hạn từ TK 121 sang TK 128.",
        "impactNote": "Bảo đảm số liệu chuyển tiếp giữa hai kỳ kế toán chính xác 100%, không bị sai lệch số dư đầu kỳ."
      }
    ]
  },
  "tt-133-2016": {
    "decreeId": "tt-133-2016",
    "title": "Thông tư 133/2016/TT-BTC",
    "category": "Kế toán Doanh nghiệp nhỏ và vừa",
    "compareWith": "Quyết định 48/2006/QĐ-BTC",
    "summary": "Thông tư 133/2016/TT-BTC thay thế QĐ 48, áp dụng cho DNNVV: Bãi bỏ tài khoản chi phí loại 6 (621, 622, 623, 627), theo dõi giá thành trực tiếp trên TK 154, đơn giản hóa tối đa Báo cáo tài chính và không bắt buộc lập Báo cáo lưu chuyển tiền tệ.",
    "items": [
      {
        "topic": "Hệ thống tài khoản tinh gọn (Không sử dụng TK 621, 622, 623, 627)",
        "type": "modified",
        "oldRule": "[Căn cứ: QĐ 48/2006] DNNVV vẫn phải mở tài khoản 621, 622, 627 để theo dõi chi phí sản xuất trước khi kết chuyển vào TK 154.",
        "newRule": "[Căn cứ: Điều 24 TT 133/2016] Bãi bỏ toàn bộ tài khoản loại 62x. Mọi chi phí NVL, nhân công, chi phí chung được tập hợp trực tiếp trên TK 154 (Chi phí SXKD dở dang).",
        "impactNote": "Các công ty con và đơn vị thành viên quy mô nhỏ của Kiểu Việt hạch toán chi phí công trình trực tiếp, tinh gọn bộ máy kế toán."
      },
      {
        "topic": "Đơn giản hóa Báo cáo tài chính cho doanh nghiệp nhỏ và vừa",
        "type": "modified",
        "oldRule": "[Căn cứ: QĐ 48/2006] Bắt buộc lập đầy đủ bộ BCTC gồm Bảng CĐKT, Báo cáo KQKD, Báo cáo LCTT và Thuyết minh phức tạp.",
        "newRule": "[Căn cứ: Điều 71 TT 133/2016] Cho phép lựa chọn mẫu BCTC rút gọn (Mẫu B01b-DNNVV); Báo cáo lưu chuyển tiền tệ (Mẫu B03-DNNVV) chỉ mang tính khuyến khích, không bắt buộc nộp cho cơ quan thuế.",
        "impactNote": "Giảm áp lực lập báo cáo cuối năm cho các công ty liên kết phụ trách khai thác mỏ cát, mỏ đá của Kiểu Việt."
      },
      {
        "topic": "Không bắt buộc phân loại chi phí bán hàng và quản lý riêng biệt",
        "type": "modified",
        "oldRule": "[Căn cứ: QĐ 48/2006] Phải mở riêng TK 641 (Chi phí bán hàng) và TK 642 (Chi phí quản lý doanh nghiệp).",
        "newRule": "[Căn cứ: Điều 61 TT 133/2016] Hợp nhất toàn bộ vào TK 642 duy nhất: 6421 (Chi phí bán hàng) và 6422 (Chi phí quản lý doanh nghiệp).",
        "impactNote": "Tiết kiệm thời gian hạch toán các khoản chi phí xăng xe, tiếp khách, văn phòng phẩm tại các ban điều hành công trường."
      },
      {
        "topic": "Nguyên tắc trích khấu hao TSCĐ linh hoạt",
        "type": "modified",
        "oldRule": "[Căn cứ: QĐ 48/2006] Trích khấu hao TSCĐ phải tuân thủ cứng nhắc theo khung quy định tại Thông tư 45/2013 của Bộ Tài chính.",
        "newRule": "[Căn cứ: Điều 32 TT 133/2016] Doanh nghiệp được căn cứ năng lực tài chính và cường độ sử dụng máy móc để xác định thời gian khấu hao hợp lý, đăng ký một lần với cơ quan thuế.",
        "impactNote": "Kiểu Việt khấu hao nhanh máy móc thi công khi hoạt động 3 ca liên tục tại các công trình cao tốc tiến độ gấp."
      },
      {
        "topic": "Quyền lựa chọn áp dụng Chế độ kế toán Doanh nghiệp (TT 200/99)",
        "type": "added",
        "oldRule": "[Căn cứ: QĐ 48/2006] Doanh nghiệp đã đăng ký áp dụng QĐ 48 thì không được chuyển đổi sang QĐ 15 trừ khi vượt quá quy mô DNNVV.",
        "newRule": "[Căn cứ: Điều 3 TT 133/2016] DNNVV được quyền chủ động lựa chọn áp dụng Thông tư 200/2014 (hoặc Thông tư 99/2025) cho phù hợp với định hướng quản trị, chỉ cần thông báo cho cơ quan thuế.",
        "impactNote": "Kiểu Việt đồng bộ toàn bộ công ty con áp dụng cùng một hệ thống tài khoản với công ty mẹ để hợp nhất BCTC thuận lợi."
      },
      {
        "topic": "Đơn giản hóa phương pháp hạch toán tỷ giá hối đoái",
        "type": "modified",
        "oldRule": "[Căn cứ: QĐ 48/2006] Đánh giá lại tỷ giá theo nhiều bước phức tạp cuối kỳ trên TK 413.",
        "newRule": "[Căn cứ: Điều 52 TT 133/2016] Không mở TK 413 riêng biệt. Chênh lệch tỷ giá đánh giá lại cuối năm được ghi nhận thẳng vào TK 515 (Doanh thu tài chính) hoặc TK 635 (Chi phí tài chính).",
        "impactNote": "Xử lý nhanh chóng các giao dịch mua vật tư nhập ngoại không để lại tồn dư tài khoản trung gian."
      },
      {
        "topic": "Xử lý công nợ nội bộ không cần mở TK 136/336",
        "type": "modified",
        "oldRule": "[Căn cứ: QĐ 48/2006] Bắt buộc mở TK 136 (Phải thu nội bộ) và TK 336 (Phải trả nội bộ) giữa các chi nhánh, xí nghiệp trực thuộc.",
        "newRule": "[Căn cứ: Điều 19 TT 133/2016] Cho phép sử dụng trực tiếp TK 1388 (Phải thu khác) và TK 3388 (Phải trả khác) để phản ánh công nợ luân chuyển vốn nội bộ.",
        "impactNote": "Giảm bớt sự phức tạp khi theo dõi điều chuyển tiền mặt và vật tư giữa các Ban chỉ huy gói thầu."
      },
      {
        "topic": "Phương pháp kế toán hàng tồn kho linh hoạt",
        "type": "modified",
        "oldRule": "[Căn cứ: QĐ 48/2006] Ưu tiên phương pháp kê khai thường xuyên, thủ tục áp dụng phương pháp kiểm kê định kỳ rất khắt khe.",
        "newRule": "[Căn cứ: Điều 23 TT 133/2016] Cho phép áp dụng linh hoạt phương pháp kê khai thường xuyên hoặc kiểm kê định kỳ tùy theo đặc thù kho bãi và tính chất vật liệu cát, đá, đất đắp.",
        "impactNote": "Kiểu Việt áp dụng kiểm kê định kỳ tại các bãi tập kết vật tư mỏ đá, mỏ đất san lấp không thể cân đo từng chuyến xe xuất."
      },
      {
        "topic": "Chứng từ kế toán lao động thời vụ đơn giản hóa",
        "type": "added",
        "oldRule": "[Căn cứ: QĐ 48/2006] Mọi khoản chi trả nhân công đều phải có hợp đồng lao động đầy đủ, bảng chấm công và hồ sơ bảo hiểm bắt buộc.",
        "newRule": "[Căn cứ: Điều 84 TT 133/2016] Cho phép lập Bảng kê thanh toán tiền công thuê ngoài (Mẫu 01-LĐTL) kèm CCCD và cam kết Mẫu 08 đối với lao động phổ thông thời vụ dưới 3 tháng.",
        "impactNote": "Gỡ khó khăn lớn cho Kiểu Việt khi thuê nhân công thời vụ dọn dẹp mặt bằng, đắp taluy tại địa phương."
      },
      {
        "topic": "Đơn giản hóa việc trích lập dự phòng giảm giá đầu tư tài chính",
        "type": "modified",
        "oldRule": "[Căn cứ: QĐ 48/2006] Bắt buộc trích lập dự phòng theo giá thị trường phức tạp có xác nhận của kiểm toán viên.",
        "newRule": "[Căn cứ: Điều 17 TT 133/2016] Cho phép trích lập dự phòng tổn thất đầu tư căn cứ vào BCTC có xác nhận của bên nhận đầu tư, không đòi hỏi kiểm toán độc lập đối với khoản đầu tư nhỏ.",
        "impactNote": "Bảo đảm tính chủ động trích lập dự phòng rủi ro góp vốn của Kiểu Việt vào các HTX khai thác vật liệu."
      },
      {
        "topic": "Bỏ yêu cầu kiểm toán độc lập BCTC hàng năm",
        "type": "removed",
        "oldRule": "[Căn cứ: QĐ 48/2006] Một số trường hợp DNNVV tham gia liên danh đấu thầu nhà nước bị đòi hỏi kiểm toán bắt buộc.",
        "newRule": "[Căn cứ: Điều 86 TT 133/2016] Khẳng định DNNVV không thuộc diện bắt buộc phải kiểm toán BCTC, trừ trường hợp có thỏa thuận riêng trong hồ sơ mời thầu hoặc vay vốn tín dụng.",
        "impactNote": "Tiết kiệm chi phí thuê đơn vị kiểm toán độc lập hàng năm cho các công ty con quy mô nhỏ."
      },
      {
        "topic": "Chuyển đổi số dư tài khoản từ QĐ 48 sang Thông tư 133",
        "type": "added",
        "oldRule": "[Căn cứ: QĐ 48/2006] Hệ thống tài khoản cũ theo QĐ 48.",
        "newRule": "[Căn cứ: Điều 91 TT 133/2016] Hướng dẫn chi tiết: Chuyển toàn bộ số dư TK 621, 622, 627 sang TK 154; chuyển số dư TK 641 sang TK 6421; chuyển số dư TK 142 sang TK 242.",
        "impactNote": "Bảo đảm quá trình số hóa và đồng bộ phần mềm kế toán diễn ra mượt mà, không gián đoạn kỳ kế toán."
      }
    ]
  },
  "tt-46-2025": {
    "decreeId": "tt-46-2025",
    "title": "Thông tư 46/2025/TT-BTC",
    "category": "Sửa đổi Kế toán Doanh nghiệp nhỏ và vừa",
    "compareWith": "Thông tư 133/2016/TT-BTC",
    "summary": "Thông tư 46/2025/TT-BTC sửa đổi, bổ sung Thông tư 133: Cập nhật quy định chữ ký số trên chứng từ kế toán, hướng dẫn lưu trữ điện tử và đồng bộ chuẩn dữ liệu báo cáo tài chính với cổng dịch vụ công thuế quốc gia.",
    "items": [
      {
        "topic": "Bổ sung chuẩn mực hạch toán giao dịch điện tử và tài sản số doanh nghiệp",
        "type": "added",
        "oldRule": "[Căn cứ: TT 200/2014] Chưa có quy định riêng về tài sản số, phần mềm dịch vụ đám mây (SaaS) và các phương tiện thanh toán điện tử mới.",
        "newRule": "[Căn cứ: Điều 5 TT 46/2025] Hướng dẫn chi tiết việc vốn hóa chi phí bản quyền phần mềm quản lý BIM, ERP đám mây vào TSCĐ vô hình (TK 213) hoặc phân bổ qua TK 242; chuẩn hóa hạch toán thanh toán qua cổng điện tử.",
        "impactNote": "Kiểu Việt hạch toán minh bạch chi phí đầu tư hệ thống phần mềm quản lý xe máy GPS và phần mềm dự toán công trình."
      },
      {
        "topic": "Chứng từ kế toán số và chữ ký điện tử tập trung (HSM Cloud)",
        "type": "modified",
        "oldRule": "[Căn cứ: TT 200/2014] Quy định chứng từ điện tử chủ yếu dựa trên chữ ký số USB Token cắm trực tiếp vào máy tính kế toán.",
        "newRule": "[Căn cứ: Điều 8 TT 46/2025] Cho phép ký số tập trung qua dịch vụ ký số từ xa HSM Cloud, xác thực hai lớp (2FA) và tự động ký hàng loạt trên hóa đơn điện tử, phiếu xuất kho điện tử.",
        "impactNote": "Kế toán Kiểu Việt phê duyệt ký số hàng trăm chứng từ xuất vật tư đá, cát ngay trên điện thoại khi ở hiện trường công trường."
      },
      {
        "topic": "Hạch toán chi phí bảo mật dữ liệu và dịch vụ hạ tầng mạng công trường",
        "type": "added",
        "oldRule": "[Căn cứ: TT 200/2014] Chi phí mạng internet và phần mềm thường đưa chung vào chi phí tiếp khách, văn phòng phẩm.",
        "newRule": "[Căn cứ: Điều 12 TT 46/2025] Quy định tiểu khoản riêng phản ánh chi phí an ninh mạng, đường truyền cáp quang và camera giám sát hiện trường vào chi phí chung công trình (TK 1547).",
        "impactNote": "Dự toán chi phí thiết lập ban điều hành công trường cao tốc của Kiểu Việt có căn cứ hạch toán hợp lý đầy đủ."
      },
      {
        "topic": "Phương pháp kiểm kê tài sản cố định bằng công nghệ mã vạch QR Code/RFID",
        "type": "added",
        "oldRule": "[Căn cứ: TT 200/2014] Kiểm kê tài sản bằng phương pháp đếm thủ công và ghi biên bản giấy truyền thống.",
        "newRule": "[Căn cứ: Điều 15 TT 46/2025] Thừa nhận giá trị pháp lý của Biên bản kiểm kê điện tử quét mã QR/RFID gắn trên từng máy đào, xe lu, trạm trộn bê tông; dữ liệu kiểm kê đồng bộ trực tiếp vào sổ cái.",
        "impactNote": "Kiểm kê toàn bộ máy móc cơ giới của Kiểu Việt tại Gia Lai và Đắk Lắk chỉ mất 1 ngày thay vì hàng tuần như trước."
      },
      {
        "topic": "Trình bày Thuyết minh BCTC về rủi ro an ninh thông tin và tài sản số",
        "type": "added",
        "oldRule": "[Căn cứ: TT 200/2014] Thuyết minh BCTC không đề cập đến tài sản dữ liệu hay rủi ro an ninh mạng.",
        "newRule": "[Căn cứ: Điều 18 TT 46/2025] Bổ sung mục thuyết minh riêng về mức độ phụ thuộc công nghệ số và các biện pháp bảo đảm an toàn dữ liệu kế toán tài chính.",
        "impactNote": "Nâng cao uy tín quản trị số của Kiểu Việt trong mắt các nhà đầu tư và ngân hàng tài trợ vốn dự án lớn."
      },
      {
        "topic": "Xử lý chi phí đào tạo chuyển đổi số cho đội ngũ kỹ sư và kế toán",
        "type": "modified",
        "oldRule": "[Căn cứ: TT 200/2014] Chi phí đào tạo nhân viên bị khống chế hoặc tranh chấp tính hợp lý khi hạch toán.",
        "newRule": "[Căn cứ: Điều 9 TT 46/2025] Chi phí tập huấn sử dụng phần mềm quản lý thi công số, hóa đơn điện tử được hạch toán 100% vào chi phí quản lý được trừ thuế TNDN.",
        "impactNote": "Kiểu Việt tự tin đầu tư đào tạo số hóa cho cán bộ công trường mà không lo bị bóc tách chi phí khi quyết toán thuế."
      },
      {
        "topic": "Bãi bỏ thủ tục in sao kê sổ chi tiết bằng giấy cuối năm",
        "type": "removed",
        "oldRule": "[Căn cứ: TT 200/2014] Cuối năm bắt buộc phải in toàn bộ sổ nhật ký chung, sổ cái và các sổ chi tiết tài khoản ra giấy, đóng tập có chữ ký đóng dấu lưu trữ.",
        "newRule": "[Căn cứ: Điều 22 TT 46/2025] Cho phép lưu trữ 100% dưới dạng tệp điện tử mã hóa (PDF/A, XML) có gắn chứng thư số thời gian (Timestamp), bãi bỏ yêu cầu in ra giấy.",
        "impactNote": "Kiểu Việt tiết kiệm hoàn toàn chi phí đóng gáy, in ấn hàng ngàn trang sổ kế toán mỗi năm tài chính."
      },
      {
        "topic": "Quy chuẩn trao đổi dữ liệu kế toán với các cơ quan quản lý nhà nước",
        "type": "added",
        "oldRule": "[Căn cứ: TT 200/2014] Mỗi cơ quan (Thuế, Thống kê, KBNN) yêu cầu nộp báo cáo bằng định dạng biểu mẫu khác nhau.",
        "newRule": "[Căn cứ: Điều 25 TT 46/2025] Thống nhất chuẩn dữ liệu mở XML/JSON kết nối trực tiếp giữa phần mềm kế toán doanh nghiệp với Cổng dịch vụ công quốc gia.",
        "impactNote": "Báo cáo tài chính và báo cáo thống kê của Kiểu Việt được gửi tự động bằng một cú nhấp chuột."
      },
      {
        "topic": "Quản lý dữ liệu lưu trữ kế toán trên đám mây (Cloud Storage)",
        "type": "added",
        "oldRule": "[Căn cứ: TT 200/2014] Bắt buộc lưu trữ máy chủ vật lý đặt tại trụ sở doanh nghiệp tại Việt Nam.",
        "newRule": "[Căn cứ: Điều 20 TT 46/2025] Cho phép thuê hạ tầng đám mây lưu trữ dữ liệu kế toán đáp ứng tiêu chuẩn an toàn thông tin cấp độ 3 của Bộ Thông tin & Truyền thông.",
        "impactNote": "Kiểu Việt bảo đảm an toàn dữ liệu công trình dự phòng rủi ro cháy nổ, hỏng hóc máy chủ văn phòng."
      },
      {
        "topic": "Hiệu lực thi hành và lộ trình áp dụng công nghệ kế toán số",
        "type": "added",
        "oldRule": "[Căn cứ: TT 200/2014] Quy định chuyển tiếp theo văn bản cũ.",
        "newRule": "[Căn cứ: Điều 28 TT 46/2025] Bắt buộc các doanh nghiệp xây lắp và khai khoáng hoàn thành chuyển đổi số chứng từ kế toán trước ngày 31/12/2025.",
        "impactNote": "Kiểu Việt đã sẵn sàng 100% nền tảng công nghệ số đáp ứng đầy đủ lộ trình quy định của Bộ Tài chính."
      }
    ]
  },
  "tt-24-2024-tt-btc": {
    "decreeId": "tt-24-2024-tt-btc",
    "title": "Thông tư 24/2024/TT-BTC",
    "category": "Chế độ Kế toán Hành chính sự nghiệp",
    "compareWith": "Thông tư 107/2017/TT-BTC",
    "summary": "Thông tư 24/2024/TT-BTC (áp dụng từ 01/01/2025) thay thế TT 107/2017: Cải cách chế độ kế toán cho các đơn vị HCSN và Ban Quản lý dự án đầu tư công, đồng bộ hệ thống tài khoản nguồn vốn đầu tư XDCB và thủ tục quyết toán vốn ngân sách.",
    "items": [
      {
        "topic": "Chuẩn hóa hệ thống tài khoản kế toán HCSN thống nhất toàn quốc",
        "type": "modified",
        "oldRule": "[Căn cứ: TT 107/2017] Hệ thống tài khoản HCSN gồm 7 loại tài khoản trong bảng và các tài khoản loại 0 ngoài bảng theo dõi kinh phí dự toán.",
        "newRule": "[Căn cứ: Điều 12-25 TT 24/2024] Tái cơ cấu toàn bộ hệ thống tài khoản kế toán HCSN: Bổ sung các tài khoản quản lý chi tiết nguồn vốn đầu tư công, nguồn vốn ODA và kinh phí sự nghiệp kinh tế giao thông.",
        "impactNote": "Kế toán Kiểu Việt nắm rõ quy trình hạch toán của các Ban QLDA để chuẩn bị hồ sơ nghiệm thu thanh toán khớp đúng tài khoản giải ngân của Chủ đầu tư."
      },
      {
        "topic": "Quy định về hạch toán chi phí quản lý dự án Ban QLDA chuyên ngành giao thông",
        "type": "modified",
        "oldRule": "[Căn cứ: Điều 42 TT 107/2017] Chi phí QLDA được theo dõi chung trong nguồn kinh phí hoạt động thường xuyên của đơn vị.",
        "newRule": "[Căn cứ: Điều 30 TT 24/2024] Bắt buộc tách riêng chi phí QLDA theo từng công trình, dự án; kiểm soát chặt chẽ định mức chi phí giám sát, nghiệm thu khối lượng A-B theo quy định quản lý chi phí xây dựng.",
        "impactNote": "Hồ sơ thanh toán tạm ứng và khối lượng hoàn thành của Kiểu Việt được Ban QLDA thẩm tra và phê duyệt nhanh chóng."
      },
      {
        "topic": "Quy trình thanh toán và rút dự toán Kho bạc điện tử",
        "type": "modified",
        "oldRule": "[Căn cứ: TT 107/2017] Hồ sơ rút dự toán và ủy nhiệm chi chuyển khoản Kho bạc Nhà nước thực hiện phần lớn bằng chứng từ giấy có dấu đỏ.",
        "newRule": "[Căn cứ: Điều 8 TT 24/2024] 100% hồ sơ thanh toán khối lượng xây lắp và rút dự toán vốn đầu tư công được xử lý qua hệ thống Dịch vụ công trực tuyến Kho bạc Nhà nước có ký số HSM.",
        "impactNote": "Dòng tiền thanh toán từ Kho bạc Nhà nước chuyển về tài khoản Kiểu Việt được rút ngắn xuống dưới 3 ngày làm việc."
      },
      {
        "topic": "Hạch toán tiếp nhận và bàn giao tài sản kết cấu hạ tầng giao thông đường bộ",
        "type": "added",
        "oldRule": "[Căn cứ: TT 107/2017] Hạch toán tài sản hạ tầng đường bộ chưa có tài khoản chi tiết riêng, thường ghi nhận chung vào TSCĐ của đơn vị hành chính.",
        "newRule": "[Căn cứ: Điều 36 TT 24/2024] Bổ sung tài khoản theo dõi riêng tài sản hạ tầng giao thông (đường cao tốc, cầu cống, trạm thu phí); quy định rõ quy trình bàn giao từ nhà thầu xây lắp sang đơn vị quản lý khai thác sau khi hết thời hạn bảo hành.",
        "impactNote": "Kiểu Việt hoàn thành thủ tục bàn giao dứt điểm tài sản công trình và thu hồi tiền bảo lãnh bảo hành 5% giá trị hợp đồng."
      },
      {
        "topic": "Kiểm soát tạm ứng và hoàn ứng vốn ngân sách nhà nước",
        "type": "modified",
        "oldRule": "[Căn cứ: TT 107/2017] Việc thu hồi tạm ứng vốn đầu tư công chưa có quy định tỷ lệ khấu trừ cố định trong tài khoản kế toán.",
        "newRule": "[Căn cứ: Điều 28 TT 24/2024] Quy định rõ tỷ lệ thu hồi tạm ứng qua từng lần thanh toán khối lượng hoàn thành Mẫu 03a, bắt buộc thu hồi dứt điểm số dư tạm ứng khi khối lượng nghiệm thu đạt 80% giá trị hợp đồng.",
        "impactNote": "Phòng Tài chính Kiểu Việt chủ động cân đối dòng tiền thi công khi tỷ lệ giải ngân thực tế bị trừ dần tiền tạm ứng đã nhận."
      },
      {
        "topic": "Đơn giản hóa chứng từ chi sự nghiệp và thuê khoán nhân công",
        "type": "modified",
        "oldRule": "[Căn cứ: TT 107/2017] Yêu cầu thủ tục phức tạp đối với các khoản chi thuê khoán, bồi thường giải phóng mặt bằng.",
        "newRule": "[Căn cứ: Điều 10 TT 24/2024] Cho phép sử dụng bảng kê thanh toán điện tử có xác nhận của chính quyền địa phương đối với chi trả đền bù mặt bằng và nhân công địa phương.",
        "impactNote": "Tạo thuận lợi cho Kiểu Việt trong công tác giải phóng mặt bằng đường công vụ và bãi đổ thải mỏ đất đắp."
      },
      {
        "topic": "Bổ sung quy định kế toán số và hóa đơn điện tử trong đơn vị HCSN",
        "type": "added",
        "oldRule": "[Căn cứ: TT 107/2017] Chưa có quy định chi tiết về việc tiếp nhận và đối chiếu hóa đơn điện tử theo NĐ 123.",
        "newRule": "[Căn cứ: Điều 9 TT 24/2024] Bắt buộc các đơn vị HCSN tiếp nhận, kiểm tra tính hợp lệ của hóa đơn điện tử trên Cổng hoadondientu.gdt.gov.vn trước khi lập lệnh chi tiền gửi Kho bạc.",
        "impactNote": "Hóa đơn điện tử Kiểu Việt xuất cho Chủ đầu tư phải bảo đảm tính hợp pháp tuyệt đối, không có sai sót về mã cơ quan thuế."
      },
      {
        "topic": "Quy định về trích lập và sử dụng Quỹ phát triển hoạt động sự nghiệp",
        "type": "modified",
        "oldRule": "[Căn cứ: TT 107/2017] Cơ chế trích lập quỹ tại các Ban QLDA còn nhiều điểm chưa thống nhất giữa chi thường xuyên và chi đầu tư.",
        "newRule": "[Căn cứ: Điều 40 TT 24/2024] Chuẩn hóa tỷ lệ trích lập quỹ từ nguồn thu quản lý dự án và các dịch vụ tư vấn giám sát công trình giao thông.",
        "impactNote": "Minh bạch hóa các khoản chi phí tư vấn giám sát và quản lý dự án trong tổng mức đầu tư công trình Kiểu Việt tham gia."
      },
      {
        "topic": "Quy định về xử lý nợ đọng xây dựng cơ bản tại các đơn vị sự nghiệp",
        "type": "added",
        "oldRule": "[Căn cứ: TT 107/2017] Nợ đọng xây dựng cơ bản treo nhiều năm không có tài khoản riêng để phân loại nợ xấu.",
        "newRule": "[Căn cứ: Điều 32 TT 24/2024] Bắt buộc phân loại chi tiết các khoản nợ đọng nhà thầu xây lắp theo từng năm ngân sách và lập kế hoạch bố trí vốn thanh toán dứt điểm.",
        "impactNote": "Căn cứ pháp lý vững chắc để Kiểu Việt yêu cầu Chủ đầu tư công bố lộ trình giải ngân dứt điểm công nợ thi công tồn đọng."
      },
      {
        "topic": "Thời hạn gửi và công khai Báo cáo tài chính nhà nước tổng hợp",
        "type": "modified",
        "oldRule": "[Căn cứ: TT 107/2017] Thời hạn nộp báo cáo quyết toán kéo dài đến tháng 5 năm sau.",
        "newRule": "[Căn cứ: Điều 55 TT 24/2024] Rút ngắn thời hạn hoàn thành quyết toán vốn đầu tư công dự án hoàn thành, bắt buộc đối chiếu công nợ nhà thầu trước ngày 31/01 hàng năm.",
        "impactNote": "Kế toán Kiểu Việt phải hoàn thiện biên bản đối chiếu công nợ A-B với Chủ đầu tư trong tháng 12 và tháng 1."
      },
      {
        "topic": "Kiểm kê tài sản công định kỳ và xử lý thừa thiếu vật tư dự án",
        "type": "modified",
        "oldRule": "[Căn cứ: TT 107/2017] Quy định kiểm kê tài sản mang tính hình thức, không quy định rõ trách nhiệm vật chất khi thất thoát.",
        "newRule": "[Căn cứ: Điều 48 TT 24/2024] Quy định quy trình kiểm kê hiện trường công trình xây dựng dở dang có sự tham gia bắt buộc của Ban QLDA, Tư vấn giám sát và Nhà thầu thi công.",
        "impactNote": "Bảo đảm số liệu khối lượng dở dang tại hiện trường của Kiểu Việt được các bên ký xác nhận định kỳ hàng quý."
      },
      {
        "topic": "Hướng dẫn chuyển đổi số dư tài khoản kế toán HCSN sang Thông tư 24",
        "type": "added",
        "oldRule": "[Căn cứ: TT 107/2017] Hệ thống tài khoản cũ theo Thông tư 107.",
        "newRule": "[Căn cứ: Điều 65 TT 24/2024] Hướng dẫn chi tiết chuyển đổi số dư toàn bộ tài khoản nguồn vốn và tài sản cố định sang hệ thống tài khoản mới từ ngày 01/01/2025.",
        "impactNote": "Bảo đảm công nợ thi công của Kiểu Việt tại các Chủ đầu tư nhà nước được chuyển giao chính xác, không bị thất lạc số dư."
      }
    ]
  },
  "tt-108-2025": {
    "decreeId": "tt-108-2025",
    "title": "Thông tư 108/2025/TT-BTC",
    "category": "Báo cáo tài chính cơ quan nhà nước",
    "compareWith": "Thông tư 99/2018/TT-BTC",
    "summary": "Thông tư 108/2025/TT-BTC hướng dẫn lập Báo cáo tài chính tổng hợp của các cơ quan quản lý nhà nước cấp trên và Chủ đầu tư dự án: Thẩm tra chặt chẽ số liệu giải ngân vốn đầu tư công và công nợ nhà thầu xây dựng.",
    "items": [
      {
        "topic": "Chuẩn hóa tài khoản hạch toán chi phí công trình trọng điểm quốc gia",
        "type": "added",
        "oldRule": "[Căn cứ: TT 200/2014] Các công trình cao tốc, hạ tầng lớn theo dõi chung trong TK 154 cùng với các hoạt động sản xuất kinh doanh khác.",
        "newRule": "[Căn cứ: Điều 4 TT 108/2025] Bổ sung tài khoản cấp 2 chi tiết chuyên biệt cho công trình hạ tầng giao thông trọng điểm: TK 1548 (Dự án giao thông quốc gia), phân tách chi phí giải phóng mặt bằng, chi phí đất đắp và thảm bê tông nhựa.",
        "impactNote": "Kiểu Việt theo dõi hạch toán riêng biệt gói thầu cao tốc Bắc - Nam, tránh pha trộn chi phí với các công trình dân dụng địa phương."
      },
      {
        "topic": "Hạch toán chi phí khai thác mỏ vật liệu đất đắp giao trực tiếp cho nhà thầu",
        "type": "added",
        "oldRule": "[Căn cứ: TT 200/2014] Chưa có hướng dẫn hạch toán trường hợp nhà thầu xây lắp được giao mỏ đất không qua đấu giá để phục vụ dự án.",
        "newRule": "[Căn cứ: Điều 7 TT 108/2025] Quy định rõ: Toàn bộ chi phí bồi thường cây cối hoa màu, tiền cấp quyền khai thác, phí BVMT và chi phí bóc tầng phủ mỏ đất được hạch toán vào TK 1541 (Chi phí NVL công trình) hoặc phân bổ qua TK 242 theo khối lượng đất đắp thực tế nghiệm thu.",
        "impactNote": "Kiểu Việt có cơ sở kế toán vững chắc để đưa chi phí mỏ đất đắp tại Gia Lai vào giá thành xây dựng được kiểm toán chấp nhận."
      },
      {
        "topic": "Phương pháp trích lập dự phòng rủi ro biến động giá vật liệu xây dựng",
        "type": "added",
        "oldRule": "[Căn cứ: TT 200/2014] Không có tài khoản trích lập dự phòng trượt giá cho hợp đồng đơn giá cố định.",
        "newRule": "[Căn cứ: Điều 11 TT 108/2025] Cho phép trích lập khoản tổn thất dự kiến đối với hợp đồng xây dựng có rủi ro trượt giá vật liệu thép, cát, đá vượt quá biên độ bảo lãnh (Nợ TK 632 / Có TK 3524).",
        "impactNote": "Bảo vệ an toàn tài chính cho Kiểu Việt trước các biến động giá thép và xăng dầu tăng phi mã trong quá trình thi công kéo dài."
      },
      {
        "topic": "Ghi nhận khối lượng thi công phát sinh ngoài hợp đồng đã có biên bản A-B",
        "type": "modified",
        "oldRule": "[Căn cứ: TT 200/2014] Khối lượng phát sinh chưa có phụ lục hợp đồng không được ghi nhận doanh thu, phải treo chi phí dở dang nhiều năm.",
        "newRule": "[Căn cứ: Điều 15 TT 108/2025] Cho phép ghi nhận doanh thu đối với phần khối lượng phát sinh kỹ thuật đã có Biên bản nghiệm thu hiện trường và Tư vấn giám sát xác nhận (Nợ TK 131 / Có TK 511) theo tỷ lệ ước tính thận trọng tối đa 80%.",
        "impactNote": "Giúp Kiểu Việt giải phóng hàng tỷ đồng chi phí xử lý nền đất yếu, đào thay đất phát sinh ngoài hiện trường."
      },
      {
        "topic": "Hạch toán tiền thưởng tiến độ hoàn thành vượt mức hợp đồng",
        "type": "added",
        "oldRule": "[Căn cứ: TT 200/2014] Tiền thưởng hoàn thành vượt tiến độ thường hạch toán vào Thu nhập khác (TK 711).",
        "newRule": "[Căn cứ: Điều 18 TT 108/2025] Quy định rõ tiền thưởng tiến độ theo quyết định của Ban QLDA được tính trực tiếp vào Doanh thu hoạt động xây lắp chính (TK 511), phản ánh năng lực thi công vượt trội của nhà thầu.",
        "impactNote": "Tăng chỉ số doanh thu hoạt động cốt lõi và biên lợi nhuận gộp của Kiểu Việt khi nộp hồ sơ xếp hạng nhà thầu năng lực cao."
      },
      {
        "topic": "Quy trình thanh quyết toán tiền giữ lại bảo hành qua bảo lãnh ngân hàng",
        "type": "modified",
        "oldRule": "[Căn cứ: TT 200/2014] Chủ đầu tư giữ lại 5% bằng tiền mặt trên tài khoản tiền gửi phong tỏa.",
        "newRule": "[Căn cứ: Điều 20 TT 108/2025] Bắt buộc Chủ đầu tư giải tỏa 100% tiền giữ lại bảo hành khi nhà thầu nộp Thư bảo lãnh bảo hành của ngân hàng thương mại; hạch toán dứt điểm công nợ: Nợ TK 112 / Có TK 131.",
        "impactNote": "Kiểu Việt thu hồi ngay 5% dòng tiền mặt (hàng chục tỷ đồng) ngay sau khi cắt băng khánh thành thông xe công trình."
      },
      {
        "topic": "Xử lý chi phí hoàn trả mặt bằng và phục hồi môi trường mỏ khoáng sản",
        "type": "added",
        "oldRule": "[Căn cứ: TT 200/2014] Chi phí đóng cửa mỏ hoàn thổ thường hạch toán dồn vào năm cuối cùng gây lỗ đột biến.",
        "newRule": "[Căn cứ: Điều 23 TT 108/2025] Bắt buộc trích trước chi phí phục hồi môi trường, san gạt hoàn thổ mỏ đất/đá theo từng khối lượng mét khối khoáng sản khai thác: Nợ TK 154 / Có TK 3525.",
        "impactNote": "Chi phí hoàn thổ mỏ đất đắp của Kiểu Việt được tính dần vào giá thành từng mét khối đất, không bị sốc chi phí khi kết thúc dự án."
      },
      {
        "topic": "Kế toán các khoản phạt vi phạm hợp đồng xây dựng",
        "type": "modified",
        "oldRule": "[Căn cứ: TT 200/2014] Mọi khoản phạt hợp đồng ghi nhận vào Chi phí khác (TK 811) và không được trừ thuế.",
        "newRule": "[Căn cứ: Điều 26 TT 108/2025] Phân biệt rõ: Phạt do chậm bàn giao mặt bằng của Chủ đầu tư ghi nhận TK 711; phạt vi phạm hợp đồng thương mại với nhà cung cấp vật tư được bù trừ với khoản bồi thường thiệt hại.",
        "impactNote": "Kiểu Việt hạch toán thu tiền bồi thường từ các nhà cung ứng cát đá chậm trễ tiến độ để bù đắp chi phí máy thi công chờ việc."
      },
      {
        "topic": "Báo cáo tài chính phân đoạn theo từng công trình dự án lớn",
        "type": "added",
        "oldRule": "[Căn cứ: TT 200/2014] Báo cáo bộ phận chỉ bắt buộc đối với công ty niêm yết trên sàn chứng khoán.",
        "newRule": "[Căn cứ: Điều 30 TT 108/2025] Khuyến khích các tổng thầu xây lắp lập Báo cáo tài chính bộ phận chi tiết doanh thu, chi phí, biên lợi nhuận từng gói thầu để phục vụ kiểm toán quyết toán dự án hoàn thành.",
        "impactNote": "Kiểu Việt tự động trích xuất báo cáo tài chính từng gói thầu phục vụ đoàn Kiểm toán Nhà nước chỉ trong vài phút."
      },
      {
        "topic": "Hiệu lực áp dụng và hướng dẫn chuyển tiếp",
        "type": "added",
        "oldRule": "[Căn cứ: TT 200/2014] Quy định cũ.",
        "newRule": "[Căn cứ: Điều 35 TT 108/2025] Thông tư có hiệu lực từ kỳ kế toán năm 2025, áp dụng thống nhất cho các hợp đồng xây lắp đang thực hiện dở dang.",
        "impactNote": "Kiểu Việt áp dụng ngay các hướng dẫn mới để chuẩn hóa hồ sơ thanh quyết toán năm 2025 - 2026."
      }
    ]
  },
  "luat-ke-toan-2015": {
    "decreeId": "luat-ke-toan-2015",
    "title": "Luật Kế toán số 88/2015/QH13",
    "category": "Luật Kế toán",
    "compareWith": "Luật Kế toán số 03/2003/QH11",
    "summary": "Đạo luật nền tảng của hệ thống kế toán Việt Nam: Bổ sung nguyên tắc Giá trị hợp lý, quy định chặt chẽ về chứng từ điện tử, tiêu chuẩn Kế toán trưởng và trách nhiệm pháp lý cá nhân của người làm kế toán.",
    "items": [
      {
        "topic": "Quy định nguyên tắc Giá trị hợp lý (Fair Value) lần đầu tiên trong Luật (Điều 6)",
        "type": "added",
        "oldRule": "[Căn cứ: Luật Kế toán 2003] Chỉ thừa nhận duy nhất nguyên tắc Giá gốc (Historical Cost) trong đo lường giá trị tài sản và nợ phải trả.",
        "newRule": "[Căn cứ: Khoản 1 Điều 6 Luật Kế toán 2015] Bổ sung nguyên tắc Giá trị hợp lý đối với các loại tài sản và nợ phải trả có giá trị biến động thường xuyên theo giá thị trường mà giá trị có thể xác định được một cách đáng tin cậy.",
        "impactNote": "Mở đường cho Kiểu Việt định giá lại tài sản máy móc thiết bị và các khoản đầu tư theo đúng giá trị thị trường."
      },
      {
        "topic": "Quy định về lập và lưu trữ chứng từ kế toán điện tử (Điều 17 & 18)",
        "type": "modified",
        "oldRule": "[Căn cứ: Luật Kế toán 2003] Chứng từ điện tử chỉ mang tính thử nghiệm, bắt buộc phải in ra bản giấy để ký tên đóng dấu lưu trữ.",
        "newRule": "[Căn cứ: Điều 17-18 Luật Kế toán 2015] Khẳng định chứng từ điện tử có giá trị pháp lý như chứng từ giấy nếu bảo đảm tính toàn vẹn, bảo mật và có chữ ký điện tử hợp pháp; được phép lưu trữ trên phương tiện điện tử.",
        "impactNote": "Nền tảng pháp lý cao nhất để Kiểu Việt số hóa 100% hồ sơ nghiệm thu, phiếu xuất kho và hóa đơn điện tử không cần in giấy."
      },
      {
        "topic": "Siết chặt tiêu chuẩn và điều kiện hành nghề Kế toán trưởng (Điều 54)",
        "type": "modified",
        "oldRule": "[Căn cứ: Luật Kế toán 2003] Tiêu chuẩn Kế toán trưởng quy định chung, nhiều trường hợp bổ nhiệm người chưa có chứng chỉ bồi dưỡng Kế toán trưởng.",
        "newRule": "[Căn cứ: Điều 54 Luật Kế toán 2015] Bắt buộc Kế toán trưởng phải có chuyên môn nghiệp vụ kế toán từ bậc đại học trở lên (đối với đơn vị cấp tỉnh/trung ương), có chứng chỉ bồi dưỡng Kế toán trưởng và thời gian công tác thực tế tối thiểu từ 2 - 5 năm.",
        "impactNote": "Bảo đảm vị trí Kế toán trưởng Kiểu Việt luôn đáp ứng đầy đủ chứng chỉ và trình độ theo luật định, tránh rủi ro pháp lý ký duyệt BCTC."
      },
      {
        "topic": "Các hành vi bị nghiêm cấm trong hoạt động kế toán (Điều 13)",
        "type": "modified",
        "oldRule": "[Căn cứ: Luật Kế toán 2003] Quy định nghiêm cấm 7 hành vi cơ bản.",
        "newRule": "[Căn cứ: Điều 13 Luật Kế toán 2015] Mở rộng lên 15 hành vi bị nghiêm cấm: Cấm lập hai hệ thống sổ kế toán tài chính; cấm để ngoài sổ sách tài sản, công nợ; cấm ép buộc người làm kế toán cung cấp thông tin sai sự thật.",
        "impactNote": "Kiểu Việt duy trì tính minh bạch tuyệt đối, chỉ sử dụng một hệ thống sổ kế toán duy nhất phục vụ quản trị, thuế và kiểm toán."
      },
      {
        "topic": "Quy định về thời hạn lưu trữ tài liệu kế toán tối thiểu (Điều 41)",
        "type": "modified",
        "oldRule": "[Căn cứ: Luật Kế toán 2003] Quy định các mức lưu trữ 5 năm, 10 năm và vĩnh viễn nhưng tiêu chí phân loại chưa rõ ràng.",
        "newRule": "[Căn cứ: Điều 41 Luật Kế toán 2015] Quy định rõ: Tối thiểu 5 năm đối với tài liệu quản trị nội bộ; Tối thiểu 10 năm đối với chứng từ kế toán sử dụng trực tiếp để ghi sổ và lập BCTC; Vĩnh viễn đối với tài liệu có tính sử liệu, an ninh quốc phòng.",
        "impactNote": "Hồ sơ quyết toán công trình xây lắp và hóa đơn chứng từ của Kiểu Việt được lưu trữ số hóa an toàn đúng chuẩn 10 năm."
      },
      {
        "topic": "Hệ thống kiểm soát nội bộ và kiểm toán nội bộ bắt buộc (Điều 39)",
        "type": "added",
        "oldRule": "[Căn cứ: Luật Kế toán 2003] Chưa có quy định bắt buộc về kiểm soát nội bộ và kiểm toán nội bộ trong doanh nghiệp.",
        "newRule": "[Căn cứ: Điều 39 Luật Kế toán 2015] Bắt buộc doanh nghiệp phải thiết lập hệ thống kiểm soát nội bộ để bảo vệ an toàn tài sản, ngăn ngừa gian lận và bảo đảm số liệu kế toán trung thực, khách quan.",
        "impactNote": "Ban Kiểm soát Kiểu Việt hoạt động độc lập, thường xuyên rà soát quy trình xuất nhập vật tư và định mức tiêu hao nhiên liệu máy đào."
      },
      {
        "topic": "Áp dụng Chuẩn mực Báo cáo tài chính quốc tế (IFRS) tại Việt Nam (Điều 7)",
        "type": "added",
        "oldRule": "[Căn cứ: Luật Kế toán 2003] Chỉ quy định áp dụng Chuẩn mực kế toán Việt Nam (VAS).",
        "newRule": "[Căn cứ: Điều 7 Luật Kế toán 2015] Bổ sung quy định Bộ Tài chính ban hành chuẩn mực kế toán trên cơ sở chuẩn mực quốc tế phù hợp với điều kiện thực tiễn của Việt Nam.",
        "impactNote": "Giúp Kiểu Việt định hướng chuẩn hóa BCTC theo chuẩn mực quốc tế khi mở rộng liên doanh với các nhà thầu nước ngoài."
      },
      {
        "topic": "Công khai Báo cáo tài chính và thời hạn công khai (Điều 31 & 32)",
        "type": "modified",
        "oldRule": "[Căn cứ: Luật Kế toán 2003] Quy định công khai BCTC chung chung, thiếu chế tài kiểm tra.",
        "newRule": "[Căn cứ: Điều 31-32 Luật Kế toán 2015] Quy định rõ hình thức công khai: Phát hành ấn phẩm, niêm yết công khai tại trụ sở, đăng tải trên trang thông tin điện tử trong thời hạn tối đa 120 ngày kể từ ngày kết thúc năm tài chính.",
        "impactNote": "Kiểu Việt công khai BCTC minh bạch trên website nội bộ đúng hạn, bảo đảm hồ sơ năng lực đấu thầu luôn hợp lệ."
      },
      {
        "topic": "Quyền và trách nhiệm của người làm kế toán (Điều 51 & 52)",
        "type": "modified",
        "oldRule": "[Căn cứ: Luật Kế toán 2003] Quyền độc lập nghề nghiệp của người làm kế toán chưa được pháp luật bảo vệ chặt chẽ.",
        "newRule": "[Căn cứ: Điều 51-52 Luật Kế toán 2015] Người làm kế toán có quyền độc lập về chuyên môn nghiệp vụ; có quyền từ chối thực hiện các yêu cầu trái quy định pháp luật về kế toán và báo cáo bằng văn bản cho người đại diện pháp luật.",
        "impactNote": "Bảo vệ đội ngũ kế toán viên Kiểu Việt luôn tuân thủ chuẩn mực đạo đức nghề nghiệp và pháp luật kế toán."
      },
      {
        "topic": "Quy định về việc thuê dịch vụ làm kế toán, kế toán trưởng (Điều 56)",
        "type": "modified",
        "oldRule": "[Căn cứ: Luật Kế toán 2003] Cá nhân hành nghề kế toán tự do có thể nhận làm dịch vụ kế toán cho nhiều doanh nghiệp.",
        "newRule": "[Căn cứ: Điều 56 Luật Kế toán 2015] Doanh nghiệp chỉ được thuê tổ chức, cá nhân có Giấy chứng nhận đủ điều kiện kinh doanh dịch vụ kế toán do Bộ Tài chính cấp để làm kế toán hoặc kế toán trưởng.",
        "impactNote": "Kiểu Việt kiểm soát chặt chẽ tư cách pháp nhân khi thuê các đơn vị tư vấn thuế, kiểm toán BCTC dự án."
      },
      {
        "topic": "Báo cáo tài chính nhà nước tổng hợp (Điều 30)",
        "type": "added",
        "oldRule": "[Căn cứ: Luật Kế toán 2003] Chưa có khái niệm Báo cáo tài chính nhà nước.",
        "newRule": "[Căn cứ: Điều 30 Luật Kế toán 2015] Bắt buộc lập Báo cáo tài chính nhà nước trên phạm vi toàn quốc và từng địa phương nhằm tổng hợp toàn bộ tài sản công, nguồn lực tài chính nhà nước và nợ công.",
        "impactNote": "Toàn bộ khối lượng công trình hạ tầng do Kiểu Việt thi công hoàn thành được ghi nhận vào tài sản kết cấu hạ tầng quốc gia."
      },
      {
        "topic": "Trách nhiệm của người đại diện theo pháp luật của doanh nghiệp (Điều 50)",
        "type": "modified",
        "oldRule": "[Căn cứ: Luật Kế toán 2003] Trách nhiệm người đại diện pháp luật quy định chưa gắn liền với sai phạm của kế toán.",
        "newRule": "[Căn cứ: Điều 50 Luật Kế toán 2015] Người đại diện theo pháp luật chịu trách nhiệm cuối cùng trước pháp luật về tính chính xác, trung thực của BCTC và việc tổ chức bộ máy kế toán của đơn vị.",
        "impactNote": "Tổng Giám đốc Kiểu Việt trực tiếp phê duyệt và giám sát chặt chẽ hệ thống kiểm soát nội bộ tài chính của công ty."
      }
    ]
  },
  "luat-56-2024": {
    "decreeId": "luat-56-2024",
    "title": "Luật sửa đổi số 56/2024/QH15",
    "category": "Sửa đổi 9 Luật Tài chính & Kế toán",
    "compareWith": "Luật Kế toán 2015 và Luật QLT 2019",
    "summary": "Luật số 56/2024/QH15 (hiệu lực từ 01/01/2025) sửa đổi, bổ sung 9 luật tài chính quan trọng: Đơn giản hóa thủ tục chứng từ kế toán, áp dụng công nghệ số và phân định rõ trách nhiệm của Kế toán trưởng với Người đại diện theo pháp luật.",
    "items": [
      {
        "topic": "Sửa đổi điều kiện khấu trừ thuế GTGT đầu vào không dùng tiền mặt (Điều 1)",
        "type": "modified",
        "oldRule": "[Căn cứ: Luật Thuế GTGT 2008] Hóa đơn từ 20 triệu đồng trở lên bắt buộc phải có chứng từ thanh toán không dùng tiền mặt.",
        "newRule": "[Căn cứ: Điều 1 Luật 56/2024] Hạ ngưỡng bắt buộc thanh toán không dùng tiền mặt xuống còn 5.000.000 đồng đối với toàn bộ hàng hóa, dịch vụ mua vào.",
        "impactNote": "Kiểu Việt chuyển toàn bộ các khoản mua vật tư lẻ tại công trường từ 5 triệu đồng trở lên sang chuyển khoản ngân hàng để bảo đảm 100% được khấu trừ thuế."
      },
      {
        "topic": "Quy định về thời điểm hoàn thành nghĩa vụ nộp thuế của doanh nghiệp",
        "type": "modified",
        "oldRule": "[Căn cứ: Luật QLT 2019] Tính thời điểm nộp thuế khi tiền vào tài khoản Kho bạc Nhà nước.",
        "newRule": "[Căn cứ: Điều 3 Luật 56/2024] Thời điểm nộp thuế được xác định là thời điểm ngân hàng thương mại trích tiền từ tài khoản của người nộp thuế thành công.",
        "impactNote": "Loại bỏ rủi ro Kiểu Việt bị tính tiền chậm nộp 0.03%/ngày do ngân hàng chuyển lệnh sang Kho bạc chậm vào ngày cuối cùng của kỳ hạn nộp thuế."
      },
      {
        "topic": "Bổ sung cơ chế tạm hoãn xuất cảnh đối với người đại diện pháp luật doanh nghiệp nợ thuế",
        "type": "modified",
        "oldRule": "[Căn cứ: Luật QLT 2019] Áp dụng biện pháp tạm hoãn xuất cảnh chung chung đối với cá nhân nợ thuế.",
        "newRule": "[Căn cứ: Điều 5 Luật 56/2024] Quy định rõ ngưỡng nợ thuế và thời gian thông báo trước tối thiểu 30 ngày trước khi ban hành văn bản tạm hoãn xuất cảnh người đại diện pháp luật.",
        "impactNote": "Kiểu Việt luôn duy trì kiểm soát đối chiếu nợ thuế định kỳ hàng tháng trên cổng Thuedientu để bảo đảm lịch công tác nước ngoài của Ban lãnh đạo."
      },
      {
        "topic": "Đơn giản hóa thủ tục hoàn thuế GTGT cho dự án đầu tư xây dựng mới",
        "type": "modified",
        "oldRule": "[Căn cứ: Luật Thuế GTGT 2008] Thủ tục hoàn thuế dự án đầu tư kéo dài nhiều tháng với quy trình kiểm tra trước hoàn thuế sau phức tạp.",
        "newRule": "[Căn cứ: Điều 2 Luật 56/2024] Phân loại hồ sơ hoàn thuế tự động: Doanh nghiệp tuân thủ pháp luật thuế tốt được hoàn thuế trước, kiểm tra sau trong vòng 6 ngày làm việc.",
        "impactNote": "Kiểu Việt thu hồi nhanh tiền hoàn thuế GTGT hàng chục tỷ đồng cho dự án đầu tư mở rộng mỏ khoáng sản và trạm nghiền đá."
      },
      {
        "topic": "Quy định về hóa đơn điện tử khởi tạo từ máy tính tiền kết nối cơ quan thuế",
        "type": "added",
        "oldRule": "[Căn cứ: Luật QLT 2019] Chưa bắt buộc đối với toàn bộ các cơ sở kinh doanh dịch vụ ăn uống, bán lẻ xăng dầu.",
        "newRule": "[Căn cứ: Điều 4 Luật 56/2024] Bắt buộc 100% cửa hàng bán lẻ xăng dầu, dịch vụ vận tải và nhà hàng xuất hóa đơn từng lần bán hàng kết nối trực tiếp cơ quan thuế.",
        "impactNote": "Các lái xe chở đất đá Kiểu Việt khi đổ dầu Diesel tại bất kỳ cây xăng nào đều nhận được hóa đơn điện tử từng lần bơm để thanh toán công tác phí."
      },
      {
        "topic": "Miễn tiền chậm nộp thuế trong trường hợp bất khả kháng do thiên tai, dịch bệnh",
        "type": "added",
        "oldRule": "[Căn cứ: Luật QLT 2019] Quy trình xét miễn tiền chậm nộp rất phức tạp, phải qua nhiều cấp phê duyệt.",
        "newRule": "[Căn cứ: Điều 6 Luật 56/2024] Cơ chế tự động giải quyết miễn tiền chậm nộp căn cứ Biên bản xác nhận thiệt hại của UBND cấp huyện trong vòng 15 ngày.",
        "impactNote": "Bảo vệ Kiểu Việt khi công trình bị ngập lụt, sạt lở đất trong mùa mưa bão tại khu vực Tây Nguyên."
      },
      {
        "topic": "Nâng cao trách nhiệm của sàn thương mại điện tử và cổng thanh toán trung gian",
        "type": "added",
        "oldRule": "[Căn cứ: Luật QLT 2019] Chưa có quy định trách nhiệm khấu trừ thuế của sàn TMĐT.",
        "newRule": "[Căn cứ: Điều 7 Luật 56/2024] Bắt buộc sàn TMĐT và đơn vị trung gian thanh toán khấu trừ và nộp thuế thay cho các hộ kinh doanh, cá nhân kinh doanh trên sàn.",
        "impactNote": "Tạo môi trường cạnh tranh lành mạnh, minh bạch hóa các nhà cung cấp vật tư thiết bị xây dựng trực tuyến."
      },
      {
        "topic": "Quy định về thời hiệu xử phạt vi phạm thủ tục thuế và trốn thuế",
        "type": "modified",
        "oldRule": "[Căn cứ: Luật QLT 2019] Thời hiệu 2 năm đối với thủ tục, 5 năm đối với trốn thuế.",
        "newRule": "[Căn cứ: Điều 8 Luật 56/2024] Giữ nguyên thời hiệu nhưng quy định rõ mốc tính từ ngày người nộp thuế nộp hồ sơ khai thuế bổ sung hoặc ngày cơ quan thuế lập biên bản.",
        "impactNote": "Kế toán Kiểu Việt nắm chắc mốc thời hiệu để giải trình các khoản điều chỉnh hồ sơ quyết toán các năm trước."
      },
      {
        "topic": "Quy định chia sẻ dữ liệu liên thông giữa cơ quan Thuế, Hải quan và Ngân hàng",
        "type": "added",
        "oldRule": "[Căn cứ: Luật QLT 2019] Chia sẻ dữ liệu còn rời rạc, cơ quan thuế phải gửi công văn yêu cầu ngân hàng cung cấp sao kê.",
        "newRule": "[Căn cứ: Điều 9 Luật 56/2024] Kết nối API tự động giữa hệ thống dữ liệu ngành thuế với các ngân hàng thương mại để tra cứu số dư và giao dịch đáng ngờ theo thời gian thực.",
        "impactNote": "Yêu cầu Kiểu Việt phải bảo đảm tuyệt đối tính đồng nhất giữa sổ phụ ngân hàng và sổ cái tiền gửi TK 112."
      },
      {
        "topic": "Hiệu lực thi hành các điều khoản sửa đổi luật thuế và kế toán",
        "type": "added",
        "oldRule": "[Căn cứ: Luật cũ] Quy định theo các luật chuyên ngành.",
        "newRule": "[Căn cứ: Điều 10 Luật 56/2024] Luật có hiệu lực thi hành từ ngày 01/01/2025; các quy định về ngưỡng thanh toán không dùng tiền mặt 5 triệu áp dụng từ kỳ thuế năm 2025.",
        "impactNote": "Toàn bộ hệ thống quản trị chi tiêu Kiểu Việt đã điều chỉnh quy chế tài chính nội bộ đồng bộ với Luật 56."
      }
    ]
  },
  "vas-01": {
    "decreeId": "vas-01",
    "title": "Chuẩn mực Kế toán VAS 01",
    "category": "Chuẩn mực kế toán chung",
    "compareWith": "Các nguyên tắc kế toán truyền thống",
    "summary": "Chuẩn mực số 01 thiết lập 7 nguyên tắc kế toán cơ bản chi phối toàn bộ hoạt động tài chính: Hoạt động liên tục, Cơ sở dồn tích, Giá gốc, Phù hợp, Nhất quán, Thận trọng và Trọng yếu.",
    "items": [
      {
        "topic": "Nguyên tắc Hoạt động liên tục (Going Concern)",
        "type": "modified",
        "oldRule": "[Căn cứ: QĐ 167/2000] Đánh giá khả năng hoạt động liên tục chủ yếu dựa trên lợi nhuận thuần trong kỳ.",
        "newRule": "[Căn cứ: Đoạn 08-11 VAS 01] BCTC phải được lập trên cơ sở giả định doanh nghiệp đang hoạt động liên tục và sẽ tiếp tục hoạt động trong tương lai gần (tối thiểu 12 tháng); nếu có nguy cơ ngừng hoạt động phải lập BCTC theo giá trị thanh lý.",
        "impactNote": "Kiểu Việt lập báo cáo dòng tiền dự báo 12 tháng chứng minh khả năng hoàn thành các gói thầu giao thông dài hạn."
      },
      {
        "topic": "Nguyên tắc Cơ sở dồn tích (Accrual Basis)",
        "type": "modified",
        "oldRule": "[Căn cứ: QĐ 167/2000] Cho phép một số khoản mục nhỏ hạch toán trên cơ sở tiền mặt.",
        "newRule": "[Căn cứ: Đoạn 06-07 VAS 01] Mọi nghiệp vụ kinh tế tài chính liên quan đến tài sản, nợ phải trả, vốn chủ sở hữu, doanh thu và chi phí phải được ghi sổ kế toán vào thời điểm phát sinh, không căn cứ vào thời điểm thực tế thu hoặc chi tiền.",
        "impactNote": "Chi phí nhân công, vật tư cát đá đưa vào công trình Kiểu Việt phải trích trước ghi nhận đúng kỳ thi công dù chưa thanh toán tiền."
      },
      {
        "topic": "Nguyên tắc Giá gốc (Historical Cost)",
        "type": "modified",
        "oldRule": "[Căn cứ: QĐ 167/2000] Giá gốc tài sản cố định bao gồm cả một số khoản chi phí quản lý chung.",
        "newRule": "[Căn cứ: Đoạn 12-14 VAS 01] Tài sản phải được ghi nhận theo giá gốc gồm toàn bộ chi phí mua sắm, bốc dỡ, vận chuyển, lắp đặt chạy thử đưa tài sản vào trạng thái sẵn sàng sử dụng; không được tùy ý điều chỉnh giá gốc trừ trường hợp pháp luật có quy định khác.",
        "impactNote": "Toàn bộ chi phí vận chuyển xe lu, máy ủi từ mỏ về công trường được vốn hóa chuẩn xác vào giá gốc tài sản."
      },
      {
        "topic": "Nguyên tắc Phù hợp (Matching Principle)",
        "type": "modified",
        "oldRule": "[Căn cứ: QĐ 167/2000] Chi phí có thể kết chuyển trước khi doanh thu tương ứng được ghi nhận.",
        "newRule": "[Căn cứ: Đoạn 15-18 VAS 01] Việc ghi nhận doanh thu và chi phí phải phù hợp với nhau. Khi ghi nhận một khoản doanh thu thì phải ghi nhận một khoản chi phí tương ứng liên quan đến việc tạo ra doanh thu đó.",
        "impactNote": "Giá vốn công trình (TK 632) của Kiểu Việt chỉ được kết chuyển tương ứng đúng với phần doanh thu xây lắp (TK 511) đã được chủ đầu tư ký nghiệm thu."
      },
      {
        "topic": "Nguyên tắc Thận trọng (Prudence Principle)",
        "type": "modified",
        "oldRule": "[Căn cứ: QĐ 167/2000] Thận trọng áp dụng tùy nghi, nhiều doanh nghiệp lập quỹ dự phòng quá mức để dìm lợi nhuận.",
        "newRule": "[Căn cứ: Đoạn 19-21 VAS 01] Thận trọng là việc xem xét, cân nhắc, phán đoán cần thiết để lập các ước tính kế toán: Phải lập các khoản dự phòng nhưng không lập quá lớn; không ghi nhận doanh thu khi chưa có bằng chứng chắc chắn.",
        "impactNote": "Kiểu Việt trích lập dự phòng nợ khó đòi đối với các chủ đầu tư chậm thanh toán một cách thận trọng, hợp pháp."
      },
      {
        "topic": "Nguyên tắc Nhất quán (Consistency Principle)",
        "type": "modified",
        "oldRule": "[Căn cứ: QĐ 167/2000] Cho phép thay đổi chính sách kế toán giữa các quý mà không cần thuyết minh.",
        "newRule": "[Căn cứ: Đoạn 22-24 VAS 01] Các chính sách và phương pháp kế toán doanh nghiệp đã chọn phải được áp dụng thống nhất ít nhất trong một kỳ kế toán năm; trường hợp có thay đổi phải thuyết minh rõ lý do và ảnh hưởng định lượng trên BCTC.",
        "impactNote": "Kiểu Việt duy trì phương pháp trích khấu hao và tính giá xuất kho vật tư nhất quán trong suốt vòng đời dự án."
      },
      {
        "topic": "Nguyên tắc Trọng yếu (Materiality)",
        "type": "added",
        "oldRule": "[Căn cứ: QĐ 167/2000] Mọi khoản mục sai sót đều phải sửa chữa bằng phương pháp hồi tố phức tạp.",
        "newRule": "[Căn cứ: Đoạn 25-27 VAS 01] Thông tin được coi là trọng yếu nếu việc thiếu thông tin hoặc sai sót có thể làm sai lệch đáng kể BCTC, làm ảnh hưởng đến quyết định kinh tế của người sử dụng BCTC; các sai sót không trọng yếu được xử lý phi hồi tố.",
        "impactNote": "Kế toán Kiểu Việt tập trung nguồn lực kiểm soát các chỉ tiêu doanh thu, chi phí vật tư lớn, không sa đà vào các sai sót lặt vặt vài trăm ngàn đồng."
      },
      {
        "topic": "Định nghĩa và điều kiện ghi nhận Tài sản (Asset Recognition)",
        "type": "modified",
        "oldRule": "[Căn cứ: QĐ 167/2000] Tài sản định nghĩa gắn liền với quyền sở hữu pháp lý.",
        "newRule": "[Căn cứ: Đoạn 35-43 VAS 01] Tài sản là nguồn lực do doanh nghiệp kiểm soát và dự tính đem lại lợi ích kinh tế trong tương lai; ghi nhận khi chắc chắn thu được lợi ích kinh tế và giá trị được xác định một cách đáng tin cậy.",
        "impactNote": "Kiểu Việt ghi nhận tài sản máy móc thuê tài chính vào BCTC dù chưa hoàn tất thủ tục chuyển quyền sở hữu."
      },
      {
        "topic": "Định nghĩa và điều kiện ghi nhận Nợ phải trả (Liabilities Recognition)",
        "type": "modified",
        "oldRule": "[Căn cứ: QĐ 167/2000] Chỉ ghi nhận nợ phải trả khi đã có hóa đơn hoặc văn bản đòi nợ chính thức.",
        "newRule": "[Căn cứ: Đoạn 44-51 VAS 01] Nợ phải trả là nghĩa vụ hiện tại của doanh nghiệp phát sinh từ các giao dịch và sự kiện đã qua mà doanh nghiệp phải thanh toán từ các nguồn lực của mình; bao gồm cả các khoản nợ ước tính (dự phòng bảo hành công trình).",
        "impactNote": "Kiểu Việt trích trước các khoản chi phí nợ thầu phụ thi công giai đoạn vào nợ phải trả để phản ánh đúng thực trạng tài chính."
      },
      {
        "topic": "Bản chất quan trọng hơn hình thức (Substance Over Form)",
        "type": "added",
        "oldRule": "[Căn cứ: QĐ 167/2000] Ưu tiên hình thức chứng từ pháp lý hơn bản chất kinh tế của giao dịch.",
        "newRule": "[Căn cứ: Đoạn 28 VAS 01] Các giao dịch và sự kiện kinh tế phải được phản ánh theo đúng bản chất kinh tế và thực tế phát sinh, không chỉ căn cứ vào hình thức pháp lý bên ngoài.",
        "impactNote": "Nguyên tắc cốt lõi giúp Kiểu Việt hạch toán đúng các hợp đồng hợp tác đầu tư mỏ khoáng sản và liên danh xây lắp."
      }
    ]
  },
  "vas-02": {
    "decreeId": "vas-02",
    "title": "Chuẩn mực Kế toán VAS 02",
    "category": "Chuẩn mực Hàng tồn kho",
    "compareWith": "Phương pháp kế toán vật tư cũ",
    "summary": "Chuẩn mực số 02 quy định nguyên tắc tính giá trị hàng tồn kho theo Giá gốc và Giá trị thuần có thể thực hiện được (NRV), hướng dẫn phương pháp tính giá xuất kho và trích lập dự phòng giảm giá vật tư xây dựng.",
    "items": [
      {
        "topic": "Xác định giá gốc Hàng tồn kho vật liệu cát, đá, sắt thép (Đoạn 04-10)",
        "type": "modified",
        "oldRule": "[Căn cứ: QĐ 167/2000] Giá gốc hàng tồn kho chỉ gồm giá mua ghi trên hóa đơn.",
        "newRule": "[Căn cứ: Đoạn 04-10 VAS 02] Giá gốc hàng tồn kho bao gồm: Chi phí mua (giá mua, thuế không hoàn lại), chi phí chế biến và chi phí liên quan trực tiếp khác (vận chuyển, bốc xếp, bảo hiểm đường biển, hao hụt định mức).",
        "impactNote": "Toàn bộ chi phí vận chuyển đất đắp từ mỏ về công trường được tính thẳng vào giá gốc vật tư TK 152 của Kiểu Việt."
      },
      {
        "topic": "Không tính vào giá gốc hàng tồn kho các khoản chi phí lãng phí bất thường",
        "type": "added",
        "oldRule": "[Căn cứ: QĐ 167/2000] Toàn bộ hao hụt vật tư tại công trường thường đưa hết vào giá thành sản phẩm.",
        "newRule": "[Căn cứ: Đoạn 13 VAS 02] Chi phí nguyên liệu, vật liệu, chi phí nhân công và chi phí sản xuất khác vượt trên mức bình thường không được tính vào giá gốc hàng tồn kho mà phải hạch toán thẳng vào Giá vốn hàng bán (TK 632) trong kỳ.",
        "impactNote": "Khối lượng đất đắp bị mưa lũ cuốn trôi vượt định mức phải hạch toán vào TK 632/811, không làm tăng giá thành định mức công trình."
      },
      {
        "topic": "Phương pháp tính giá trị hàng tồn kho xuất kho (Đoạn 14-17)",
        "type": "modified",
        "oldRule": "[Căn cứ: QĐ 167/2000] Cho phép áp dụng 4 phương pháp: Bình quân gia quyền, Nhập trước xuất trước (FIFO), Nhập sau xuất trước (LIFO) và Giá thực tế đích danh.",
        "newRule": "[Căn cứ: Đoạn 14-17 VAS 02 & TT 200] Bãi bỏ phương pháp LIFO. Kiểu Việt được lựa chọn: Bình quân gia quyền, FIFO hoặc Giá thực tế đích danh cho từng nhóm vật tư.",
        "impactNote": "Kiểu Việt áp dụng phương pháp Thực tế đích danh cho kết cấu thép cầu đường và Bình quân gia quyền cho xi măng, cát, đá."
      },
      {
        "topic": "Xác định Giá trị thuần có thể thực hiện được (NRV) của hàng tồn kho",
        "type": "modified",
        "oldRule": "[Căn cứ: QĐ 167/2000] Đánh giá giảm giá hàng tồn kho theo giá bán thị trường tự do.",
        "newRule": "[Căn cứ: Đoạn 18-23 VAS 02] Giá trị thuần có thể thực hiện được là giá bán ước tính của hàng tồn kho trong kỳ sản xuất, kinh doanh bình thường trừ chi phí ước tính để hoàn thành và chi phí ước tính cần thiết cho việc tiêu thụ chúng.",
        "impactNote": "Đánh giá lại lô thép tồn kho dự trữ thi công nếu giá thép thị trường giảm sâu cuối năm để trích lập dự phòng giảm giá chính xác."
      },
      {
        "topic": "Nguyên tắc trích lập dự phòng giảm giá hàng tồn kho (Đoạn 24-27)",
        "type": "modified",
        "oldRule": "[Căn cứ: QĐ 167/2000] Trích lập dự phòng tổng thể cho toàn bộ kho hàng.",
        "newRule": "[Căn cứ: Đoạn 24-27 VAS 02] Việc lập dự phòng giảm giá hàng tồn kho phải được thực hiện trên cơ sở từng mặt hàng tồn kho; chỉ được lập dự phòng cho nhóm hàng tương tự khi các mặt hàng cùng loại và không thể tách rời.",
        "impactNote": "Kiểu Việt lập bảng chi tiết trích lập dự phòng riêng cho từng mác xi măng, từng loại thép cuộn/thép thanh."
      },
      {
        "topic": "Ghi nhận chi phí khi xuất kho hàng tồn kho vào thi công (Đoạn 28-29)",
        "type": "modified",
        "oldRule": "[Căn cứ: QĐ 167/2000] Xuất kho ghi thẳng vào chi phí không cần gắn với tiến độ thi công.",
        "newRule": "[Căn cứ: Đoạn 28-29 VAS 02] Khi hàng tồn kho được đưa vào sử dụng thi công xây lắp, giá gốc của hàng tồn kho được hạch toán vào chi phí sản xuất trong kỳ (TK 154) phù hợp với doanh thu được tạo ra.",
        "impactNote": "Xuất kho vật tư cát đá của Kiểu Việt phải có Phiếu xuất kho công trình gắn đúng mã gói thầu và lý trình thi công Km."
      },
      {
        "topic": "Xử lý hàng tồn kho ứ đọng, chậm luân chuyển tại các công trường",
        "type": "added",
        "oldRule": "[Căn cứ: QĐ 167/2000] Chưa có quy định riêng về hàng tồn kho công trình dở dang ngừng trệ.",
        "newRule": "[Căn cứ: Đoạn 22 VAS 02] Vật tư phụ tùng tồn đọng tại các công trình tạm dừng phải được kiểm kê, đánh giá khả năng sử dụng và xem xét thanh lý hoặc điều chuyển sang công trình khác.",
        "impactNote": "Phòng Vật tư Kiểu Việt chủ động điều chuyển thép và phụ gia bê tông giữa các gói thầu, tránh để ẩm ướt gỉ sét gây lãng phí."
      },
      {
        "topic": "Trình bày Thuyết minh BCTC về chính sách hàng tồn kho (Đoạn 30)",
        "type": "modified",
        "oldRule": "[Căn cứ: QĐ 167/2000] Thuyết minh tổng số dư tồn kho cuối kỳ.",
        "newRule": "[Căn cứ: Đoạn 30 VAS 02] Bắt buộc thuyết minh: Các chính sách kế toán áp dụng; phương pháp tính giá trị xuất kho; cơ cấu hàng tồn kho (vật tư, chi phí dở dang, thành phẩm đá); số dự phòng giảm giá đã trích lập và hoàn nhập.",
        "impactNote": "Thuyết minh chi tiết chi phí sản xuất kinh doanh dở dang các dự án cao tốc khẳng định quy mô hoạt động mạnh mẽ của Kiểu Việt."
      },
      {
        "topic": "Kiểm kê định kỳ và xử lý thừa, thiếu hàng tồn kho",
        "type": "modified",
        "oldRule": "[Căn cứ: QĐ 167/2000] Xử lý thừa thiếu hàng tồn kho bù trừ tự do.",
        "newRule": "[Căn cứ: Đoạn 12 VAS 02] Cấm bù trừ tự ý giữa thừa và thiếu hàng tồn kho; phải lập Biên bản kiểm kê xác định rõ trách nhiệm cá nhân thủ kho và hạch toán riêng biệt số thừa (TK 3381) và số thiếu (TK 1381).",
        "impactNote": "Thắt chặt kỷ luật kho bãi tại các kho vật tư trung tâm và lán trại hiện trường của Kiểu Việt."
      },
      {
        "topic": "Hạch toán bao bì luân chuyển và công cụ dụng cụ tại công trường",
        "type": "modified",
        "oldRule": "[Căn cứ: QĐ 167/2000] Cốp pha, giàn giáo hạch toán thẳng vào chi phí xây lắp một lần.",
        "newRule": "[Căn cứ: Đoạn 09 VAS 02] Cốp pha thép, giàn giáo thi công có giá trị lớn và sử dụng nhiều lần phải hạch toán vào TK 153 và phân bổ dần qua TK 242 theo số lần luân chuyển thực tế.",
        "impactNote": "Kiểu Việt phân bổ chuẩn xác chi phí cốp pha trượt thi công mố trụ cầu qua 10-15 đốt đúc, không dồn chi phí vào đốt đầu tiên."
      }
    ]
  },
  "vas-14": {
    "decreeId": "vas-14",
    "title": "Chuẩn mực Kế toán VAS 14",
    "category": "Chuẩn mực Doanh thu và Thu nhập khác",
    "compareWith": "Quy định doanh thu truyền thống",
    "summary": "Chuẩn mực số 14 xác lập 5 điều kiện bắt buộc để ghi nhận doanh thu bán hàng và 4 điều kiện ghi nhận doanh thu dịch vụ / hợp đồng xây dựng; nghiêm cấm ghi nhận doanh thu khi rủi ro chưa được chuyển giao.",
    "items": [
      {
        "topic": "5 điều kiện ghi nhận doanh thu bán thành phẩm đá, cát khai thác (Đoạn 10)",
        "type": "modified",
        "oldRule": "[Căn cứ: QĐ 167/2000] Ghi nhận doanh thu khi ký biên bản giao hàng hoặc thu tiền.",
        "newRule": "[Căn cứ: Đoạn 10 VAS 14] Doanh thu bán hàng chỉ được ghi nhận khi thỏa mãn đồng thời 5 điều kiện: Chuyển giao phần lớn rủi ro và lợi ích; không còn nắm giữ quyền quản lý; doanh thu xác định tương đối chắc chắn; chắc chắn thu được lợi ích kinh tế; xác định được chi phí liên quan.",
        "impactNote": "Kiểu Việt chỉ xuất hóa đơn và ghi nhận doanh thu bán đá hộc, đá base khi xe hàng đã cân tại bàn cân điện tử và khách hàng ký phiếu giao nhận."
      },
      {
        "topic": "4 điều kiện ghi nhận doanh thu cung cấp dịch vụ thi công xây lắp (Đoạn 16)",
        "type": "modified",
        "oldRule": "[Căn cứ: QĐ 167/2000] Ghi nhận doanh thu dịch vụ theo phương pháp thỏa thuận giữa hai bên.",
        "newRule": "[Căn cứ: Đoạn 16 VAS 14] Doanh thu dịch vụ được ghi nhận khi: Doanh thu xác định tương đối chắc chắn; chắc chắn thu được lợi ích kinh tế; xác định được phần công việc đã hoàn thành tại ngày lập BCTC; xác định được chi phí phát sinh cho giao dịch.",
        "impactNote": "Là nền tảng pháp lý để Kiểu Việt ghi nhận doanh thu xây lắp theo từng giai đoạn nghiệm thu hoàn thành Mẫu 03a."
      },
      {
        "topic": "Xác định phần công việc đã hoàn thành của dịch vụ xây dựng (Đoạn 19)",
        "type": "modified",
        "oldRule": "[Căn cứ: QĐ 167/2000] Đánh giá theo ước tính chủ quan của ban giám đốc.",
        "newRule": "[Căn cứ: Đoạn 19 VAS 14] Phần công việc đã hoàn thành được xác định theo 1 trong 3 phương pháp: Đánh giá phần công việc đã hoàn thành; so sánh tỷ lệ giữa chi phí đã phát sinh với tổng chi phí ước tính; tỷ lệ giữa khối lượng đã hoàn thành với tổng khối lượng công việc.",
        "impactNote": "Kiểu Việt áp dụng phương pháp Đánh giá khối lượng hoàn thành thực tế được Tư vấn giám sát nghiệm thu tại hiện trường."
      },
      {
        "topic": "Ghi nhận Doanh thu hoạt động tài chính (Đoạn 24-27)",
        "type": "modified",
        "oldRule": "[Căn cứ: QĐ 167/2000] Tiền lãi tiền gửi ghi nhận khi ngân hàng báo Có tiền về.",
        "newRule": "[Căn cứ: Đoạn 24-27 VAS 14] Doanh thu tiền lãi, cổ tức và lợi nhuận được chia được ghi nhận trên cơ sở dồn tích theo thời gian và lãi suất thực tế của hợp đồng tiền gửi có kỳ hạn.",
        "impactNote": "Kiểu Việt trích trước khoản lãi tiền gửi có kỳ hạn chưa đến ngày đáo hạn tại ngân hàng vào Doanh thu tài chính (TK 515) đúng niên độ kế toán."
      },
      {
        "topic": "Xác định các khoản giảm trừ doanh thu (Đoạn 04-06)",
        "type": "modified",
        "oldRule": "[Căn cứ: QĐ 167/2000] Giảm trừ doanh thu thực hiện tự do không cần biên bản điều chỉnh.",
        "newRule": "[Căn cứ: Đoạn 04-06 VAS 14] Chiết khấu thương mại, giảm giá hàng bán và hàng bán bị trả lại phải có văn bản thỏa thuận, biên bản xác nhận lỗi kỹ thuật và hóa đơn điều chỉnh theo đúng quy định hóa đơn chứng từ.",
        "impactNote": "Bảo đảm các khoản giảm trừ doanh thu do phạt chậm tiến độ hoặc khấu trừ chất lượng của Kiểu Việt có đầy đủ hồ sơ pháp lý thuế."
      },
      {
        "topic": "Ghi nhận Thu nhập khác từ thanh lý tài sản và bồi thường thiệt hại (Đoạn 30)",
        "type": "modified",
        "oldRule": "[Căn cứ: QĐ 167/2000] Thu nhập thanh lý tài sản được bù trừ trực tiếp vào giá vốn.",
        "newRule": "[Căn cứ: Đoạn 30 VAS 14] Thu nhập từ thanh lý, nhượng bán TSCĐ và tiền bồi thường do đối tác vi phạm hợp đồng phải được hạch toán tách biệt vào Thu nhập khác (TK 711), chi phí thanh lý vào Chi phí khác (TK 811).",
        "impactNote": "Minh bạch hóa các khoản thu từ nhượng bán xe máy thi công cũ và bồi thường giải phóng mặt bằng của Kiểu Việt."
      },
      {
        "topic": "Không ghi nhận doanh thu khi lợi ích kinh tế không chắc chắn thu hồi",
        "type": "added",
        "oldRule": "[Căn cứ: QĐ 167/2000] Bắt buộc ghi nhận doanh thu ngay khi xuất hóa đơn bất kể khách hàng có nguy cơ phá sản.",
        "newRule": "[Căn cứ: Đoạn 18 VAS 14] Khi việc thu hồi một khoản tiền đã tính trong doanh thu không còn chắc chắn (khách hàng phá sản, tranh chấp hợp đồng), thì khoản chưa thu được đó phải ghi nhận vào chi phí trong kỳ (trích dự phòng nợ khó đòi), không được điều chỉnh giảm doanh thu đã ghi nhận.",
        "impactNote": "Kiểu Việt trích lập chi phí dự phòng nợ khó đòi đúng chuẩn mực thay vì hủy doanh thu sai quy định."
      },
      {
        "topic": "Doanh thu trao đổi hàng hóa, dịch vụ không tương tự",
        "type": "added",
        "oldRule": "[Căn cứ: QĐ 167/2000] Trao đổi hàng hóa tính theo giá thỏa thuận nội bộ.",
        "newRule": "[Căn cứ: Đoạn 08-09 VAS 14] Khi hàng hóa hoặc dịch vụ được trao đổi để lấy hàng hóa hoặc dịch vụ không tương tự (dùng đá xây dựng đổi lấy xăng dầu), doanh thu được xác định theo Giá trị hợp lý của hàng hóa dịch vụ nhận về.",
        "impactNote": "Kiểu Việt hạch toán đúng giá trị thị trường các giao dịch đối ứng vật tư với các nhà cung ứng xăng dầu."
      },
      {
        "topic": "Trình bày Thuyết minh BCTC về cơ cấu doanh thu theo từng mảng kinh doanh",
        "type": "modified",
        "oldRule": "[Căn cứ: QĐ 167/2000] Thuyết minh doanh thu gộp chung toàn công ty.",
        "newRule": "[Căn cứ: Đoạn 33 VAS 14] Bắt buộc thuyết minh chi tiết doanh thu theo từng loại hoạt động: Doanh thu hợp đồng xây lắp, doanh thu bán khoáng sản đá cát, doanh thu cho thuê máy móc và doanh thu hoạt động tài chính.",
        "impactNote": "BCTC Kiểu Việt thể hiện rõ tỷ trọng đóng góp của mảng xây lắp công trình (70%) và khai thác khoáng sản (30%)."
      },
      {
        "topic": "Thời điểm ghi nhận doanh thu đối với hợp đồng xây dựng có điều khoản giữ lại bảo hành",
        "type": "modified",
        "oldRule": "[Căn cứ: QĐ 167/2000] Nhiều quan điểm cho rằng phải trừ khoản 5% giữ lại bảo hành ra khỏi doanh thu.",
        "newRule": "[Căn cứ: Đoạn 21 VAS 14] Doanh thu được ghi nhận trên 100% giá trị khối lượng nghiệm thu hoàn thành; khoản 5% giữ lại bảo hành là một khoản nợ phải thu của khách hàng (TK 131), không được trừ lùi doanh thu.",
        "impactNote": "Bảo đảm Kiểu Việt phản ánh trọn vẹn 100% quy mô doanh thu hợp đồng xây dựng ngay trong năm hoàn thành nghiệm thu bàn giao."
      }
    ]
  }
};
