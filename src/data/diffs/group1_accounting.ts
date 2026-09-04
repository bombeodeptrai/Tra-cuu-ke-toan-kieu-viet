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
        "topic": "Tập hợp chi phí thi công xây lắp & sản xuất (TK 154 thay thế 621, 622, 623, 627)",
        "type": "modified",
        "oldRule": "[Căn cứ: Điều 86-90 TT 200/2014] Bắt buộc mở và theo dõi tách biệt 4 tài khoản chi phí: 621 (Chi phí NVL trực tiếp), 622 (Nhân công trực tiếp), 623 (Máy thi công), 627 (Sản xuất chung). Cuối tháng phải lập bút toán kết chuyển Nợ TK 154 / Có TK 621, 622, 623, 627.",
        "newRule": "[Căn cứ: Điều 28-32 TT 99/2025] Cho phép doanh nghiệp tinh giản quy trình: Hạch toán trực tiếp chi phí xây lắp vào các tiểu khoản chi tiết của TK 154 (1541-NVL trực tiếp, 1542-Nhân công thi công, 1543-Máy thi công, 1547-Sản xuất chung). Định khoản trực tiếp: Nợ TK 154 / Có TK 112, 331, 334, 214.",
        "impactNote": "Kế toán Kiểu Việt giảm bớt hơn 40% khối lượng chứng từ kết chuyển trung gian cuối tháng, giá thành từng hạng mục gói thầu công trình được cập nhật tức thời theo thời gian thực."
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
        "topic": "Áp dụng nguyên tắc Giá trị hợp lý (Fair Value) trong đo lường tài sản và công nợ",
        "type": "added",
        "oldRule": "[Căn cứ: Điều 13 TT 200/2014] Hạch toán cứng nhắc theo nguyên tắc Giá gốc (Historical Cost). Việc đánh giá lại tài sản chỉ được thực hiện khi có quyết định cổ phần hóa hoặc định giá của cơ quan nhà nước có thẩm quyền.",
        "newRule": "[Căn cứ: Điều 12 & Điều 24 TT 99/2025] Bổ sung khung pháp lý cho phép đo lường tài sản tài chính, công cụ nợ, bất động sản đầu tư theo Giá trị hợp lý tại ngày lập BCTC (nếu có thị trường niêm yết đáng tin cậy). Chênh lệch đánh giá lại được ghi nhận vào Doanh thu tài chính (TK 515) hoặc Chi phí tài chính (TK 635).",
        "impactNote": "Tài sản máy móc chuyên dùng và các khoản đầu tư của Kiểu Việt được định giá sát với giá trị thị trường, nâng cao năng lực tài chính khi nộp hồ sơ dự thầu các dự án cao tốc trọng điểm."
      },
      {
        "topic": "Tự chủ hoàn toàn thiết kế mẫu biểu chứng từ và hệ thống sổ kế toán điện tử",
        "type": "modified",
        "oldRule": "[Căn cứ: Điều 117-119 TT 200/2014] Danh mục chứng từ và sổ kế toán mang tính chất hướng dẫn nhưng khi quyết toán, đoàn thanh tra thuế thường yêu cầu mẫu biểu phải khớp tuyệt đối với biểu mẫu in sẵn kèm theo Thông tư.",
        "newRule": "[Căn cứ: Điều 8 & Phụ lục II TT 99/2025] Doanh nghiệp có toàn quyền tự thiết kế hệ thống chứng từ và sổ kế toán điện tử phù hợp với đặc thù sản xuất kinh doanh, chỉ cần bảo đảm tối thiểu 7 nội dung bắt buộc theo Điều 16 Luật Kế toán 2015.",
        "impactNote": "Kiểu Việt tự do số hóa Biên bản nghiệm thu công việc xây dựng, Phiếu xuất kho vật tư kiêm vận chuyển nội bộ và Bảng kê khối lượng hoàn thành Mẫu 03a có gắn chữ ký số HSM."
      },
      {
        "topic": "Cải cách toàn diện hệ thống Báo cáo tài chính (B01-DN, B02-DN, B03-DN, B09-DN)",
        "type": "modified",
        "oldRule": "[Căn cứ: Điều 100-111 TT 200/2014] Hệ thống BCTC gồm Bảng cân đối kế toán, Báo cáo KQKD, Báo cáo LCTT và Thuyết minh BCTC với nhiều chỉ tiêu trùng lặp, thiếu thông tin về rủi ro dòng tiền ngắn hạn.",
        "newRule": "[Căn cứ: Điều 50-65 TT 99/2025] Đổi tên thành Báo cáo tình hình tài chính (Mẫu B01-DN). Bổ sung các chỉ tiêu phân tích dòng tiền thi công dở dang, thuyết minh chi tiết các khoản bảo lãnh ngân hàng thực hiện hợp đồng xây dựng và cam kết bảo hành công trình.",
        "impactNote": "Ban Tổng Giám đốc Kiểu Việt kiểm soát chặt chẽ cơ cấu vốn lưu động, chỉ tiêu thanh toán nhanh và quản trị rủi ro nợ đọng vốn ngân sách."
      },
      {
        "topic": "Xử lý chuyển đổi số dư tài khoản khi chuyển tiếp từ TT 200 sang TT 99",
        "type": "added",
        "oldRule": "[Căn cứ: Điều 127 TT 200/2014] Hướng dẫn chuyển đổi số dư từ Quyết định 15 sang TT 200 theo bảng đối chiếu chuyển tiếp cũ.",
        "newRule": "[Căn cứ: Điều 70 TT 99/2025] Quy định chi tiết bảng chuyển đổi số dư: Số dư các tài khoản chi phí dở dang 621, 622, 623, 627 chuyển toàn bộ sang TK 154 tương ứng; số dư tài khoản loại 0 được tất toán và mở sổ theo dõi riêng; điều chỉnh số dư dự phòng nợ phải thu khó đòi theo phân loại mới.",
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
        "topic": "Bãi bỏ tài khoản Chi phí trả trước ngắn hạn (TK 142), hợp nhất vào TK 242",
        "type": "removed",
        "oldRule": "[Căn cứ: QĐ 15/2006] Phân tách thành 2 tài khoản riêng biệt: TK 142 (Chi phí trả trước ngắn hạn dưới 12 tháng) và TK 242 (Chi phí trả trước dài hạn trên 12 tháng). Kế toán phải định kỳ rà soát phân loại lại số dư.",
        "newRule": "[Căn cứ: Điều 47 TT 200/2014] Xóa bỏ hoàn toàn TK 142. Mọi chi phí trả trước (tiền thuê đất, chi phí lán trại tạm, công cụ dụng cụ xuất dùng) được theo dõi chung trên TK 242 (Chi phí trả trước), cuối kỳ lập BCTC mới tách ngắn hạn / dài hạn.",
        "impactNote": "Kế toán Kiểu Việt giảm 50% thời gian phân bổ chi phí lán trại, giàn giáo coppha công trình, tập trung theo dõi thời gian phân bổ thực tế."
      },
      {
        "topic": "Hợp nhất các tài khoản Dự phòng vào TK 229 (Dự phòng tổn thất tài sản)",
        "type": "modified",
        "oldRule": "[Căn cứ: QĐ 15/2006] Sử dụng 4 tài khoản dự phòng riêng biệt: TK 129 (Dự phòng giảm giá chứng khoán), TK 139 (Dự phòng nợ khó đòi), TK 159 (Dự phòng giảm giá hàng tồn kho), TK 229 (Dự phòng tổn thất đầu tư tài chính dài hạn).",
        "newRule": "[Căn cứ: Điều 45 TT 200/2014] Gom toàn bộ vào TK 229 gồm 4 tiểu khoản cấp 2: 2291 (Giảm giá đầu tư tài chính), 2292 (Tổn thất đầu tư vào đơn vị khác), 2293 (Nợ phải thu khó đòi), 2294 (Giảm giá hàng tồn kho).",
        "impactNote": "Hệ thống tài khoản Kiểu Việt gọn gàng, trích lập dự phòng công nợ khách hàng nợ đọng công trình được quản lý tập trung trên TK 2293."
      },
      {
        "topic": "Bãi bỏ việc theo dõi riêng Quỹ dự phòng tài chính (TK 415)",
        "type": "removed",
        "oldRule": "[Căn cứ: QĐ 15/2006] Bắt buộc trích lập Quỹ dự phòng tài chính (TK 415) từ lợi nhuận sau thuế theo tỷ lệ quy định.",
        "newRule": "[Căn cứ: Điều 67 TT 200/2014] Bãi bỏ TK 415 do Luật Doanh nghiệp không còn bắt buộc trích lập quỹ này. Số dư quỹ dự phòng tài chính được kết chuyển toàn bộ sang Quỹ đầu tư phát triển (TK 414).",
        "impactNote": "Kiểu Việt chuyển toàn bộ nguồn quỹ tài chính sang Quỹ đầu tư phát triển (TK 414) để bổ sung nguồn vốn mua sắm máy xúc, máy ủi và dây chuyền thi công."
      },
      {
        "topic": "Ghi nhận doanh thu xây dựng theo hợp đồng (Chuẩn hóa TK 337 và TK 511)",
        "type": "modified",
        "oldRule": "[Căn cứ: QĐ 15/2006] Doanh thu xây lắp thường chỉ được ghi nhận khi công trình đã bàn giao đưa vào sử dụng toàn bộ hoặc theo hóa đơn xuất ra.",
        "newRule": "[Căn cứ: Điều 79 & Điều 59 TT 200/2014] Quy định rõ 2 phương pháp: Theo giá trị khối lượng thực hiện được nghiệm thu (hóa đơn) hoặc Theo tỷ lệ phần trăm công việc hoàn thành. Nếu nghiệm thu trước khi lập hóa đơn: Ghi nhận doanh thu qua TK 337 (Thanh toán theo tiến độ kế hoạch hợp đồng xây dựng).",
        "impactNote": "Kiểu Việt phản ánh đúng doanh thu thi công trong kỳ, không bị cơ quan thuế xử phạt chậm xuất hóa đơn hoặc lệch doanh thu kế toán - thuế."
      },
      {
        "topic": "Nguyên tắc 'Bản chất quan trọng hơn hình thức' (Substance over Form)",
        "type": "added",
        "oldRule": "[Căn cứ: QĐ 15/2006] Hạch toán nặng về hình thức chứng từ giấy tờ, nếu thiếu chứng từ cứng nhắc thì không được ghi nhận dù nghiệp vụ kinh tế đã phát sinh thực tế.",
        "newRule": "[Căn cứ: Điều 4 TT 200/2014] Quy định rõ nguyên tắc bản chất quan trọng hơn hình thức: Giao dịch phải được ghi nhận và trình bày phù hợp với bản chất kinh tế chứ không chỉ căn cứ vào hình thức pháp lý.",
        "impactNote": "Bảo vệ Kiểu Việt trong các vụ việc tranh chấp chi phí xây dựng dở dang, nghiệm thu khối lượng thực tế tại công trường khi hồ sơ giấy tờ bị chậm trễ từ phía Chủ đầu tư."
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
        "topic": "Bãi bỏ toàn bộ tài khoản chi phí sản xuất loại 6 (621, 622, 623, 627)",
        "type": "removed",
        "oldRule": "[Căn cứ: QĐ 48/2006] Vẫn quy định các tài khoản 621, 622, 623, 627 làm cho DNNVV phải thực hiện quá nhiều bút toán kết chuyển cuối kỳ.",
        "newRule": "[Căn cứ: Điều 27 TT 133/2016] DNNVV không sử dụng tài khoản loại 6 để tập hợp chi phí sản xuất xây lắp. Toàn bộ chi phí NVL, nhân công, máy thi công được hạch toán trực tiếp vào TK 154 (Chi phí SXKD dở dang) qua các tiểu khoản: 1541, 1542, 1543, 1544.",
        "impactNote": "Các công ty con, chi nhánh quy mô vừa và nhỏ thuộc hệ sinh thái Kiểu Việt áp dụng chế độ hạch toán tinh gọn, tiết kiệm 50% thời gian đóng sổ kế toán tháng."
      },
      {
        "topic": "Bãi bỏ tài khoản Chiết khấu thương mại (TK 521), ghi nhận trực tiếp vào TK 511",
        "type": "removed",
        "oldRule": "[Căn cứ: QĐ 48/2006] Mở riêng TK 521 để hạch toán giảm trừ doanh thu.",
        "newRule": "[Căn cứ: Điều 56 TT 133/2016] Bãi bỏ TK 521. Mọi khoản chiết khấu thương mại, giảm giá hàng bán được ghi Nợ trực tiếp vào TK 511 (Nợ TK 511 / Có TK 131, 112).",
        "impactNote": "Đơn giản hóa công tác kế toán tiêu thụ vật tư, giảm trừ khối lượng thi công."
      },
      {
        "topic": "Báo cáo lưu chuyển tiền tệ là báo cáo không bắt buộc (Khuyến khích lập)",
        "type": "modified",
        "oldRule": "[Căn cứ: QĐ 48/2006] Bắt buộc 100% doanh nghiệp nhỏ và vừa phải nộp Báo cáo lưu chuyển tiền tệ kèm theo Báo cáo tài chính năm.",
        "newRule": "[Căn cứ: Điều 71 TT 133/2016] Báo cáo lưu chuyển tiền tệ (Mẫu B03-DNN) không bắt buộc trong hồ sơ BCTC nộp cơ quan thuế, chỉ mang tính khuyến khích quản trị.",
        "impactNote": "Giảm áp lực lập báo cáo phức tạp cho các đơn vị trực thuộc Kiểu Việt khi quyết toán năm."
      },
      {
        "topic": "Linh hoạt lựa chọn áp dụng Chế độ kế toán TT 200 hoặc TT 133",
        "type": "added",
        "oldRule": "[Căn cứ: QĐ 48/2006] Doanh nghiệp có quy mô nhỏ bắt buộc phải tuân theo QĐ 48, nếu muốn áp dụng QĐ 15 phải làm công văn xin phép bằng văn bản gửi cơ quan thuế.",
        "newRule": "[Căn cứ: Điều 3 TT 133/2016] DNNVV được quyền tự do lựa chọn áp dụng TT 200/2014 nhưng phải thông báo cho cơ quan thuế quản lý trực tiếp và áp dụng nhất quán trong năm tài chính.",
        "impactNote": "Công ty Cổ phần Kiểu Việt thống nhất áp dụng toàn diện Chế độ TT 200 (và chuyển tiếp sang TT 99) cho toàn công ty để đồng bộ số liệu đấu thầu xây dựng."
      },
      {
        "topic": "Đơn giản hóa phương pháp trích lập dự phòng phải thu khó đòi",
        "type": "modified",
        "oldRule": "[Căn cứ: QĐ 48/2006] Yêu cầu hồ sơ chứng minh nợ khó đòi phức tạp như doanh nghiệp lớn (biên bản đối chiếu công nợ từng tháng, xác nhận của chính quyền địa phương).",
        "newRule": "[Căn cứ: Điều 20 TT 133/2016] Cho phép doanh nghiệp căn cứ vào tuổi nợ quá hạn thực tế theo quy định của Bộ Tài chính để trích lập dự phòng mà không đòi hỏi thủ tục xác minh quá rườm rà.",
        "impactNote": "Bảo đảm trích lập chi phí dự phòng hợp lý khi tính thuế TNDN cho các khoản công nợ tồn đọng."
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
        "topic": "Quy chuẩn hóa chữ ký điện tử trên chứng từ kế toán số của DNNVV",
        "type": "added",
        "oldRule": "[Căn cứ: Điều 7 TT 133/2016] Chỉ quy định chung về chứng từ điện tử theo Luật Kế toán, chưa có hướng dẫn kỹ thuật chi tiết về chữ ký số từ xa (Remote Signing) và mã xác thực OTP.",
        "newRule": "[Căn cứ: Điều 1 Thông tư 46/2025] Quy định rõ chứng từ kế toán điện tử được ký bằng chữ ký số hợp chuẩn (token USB hoặc ký số đám mây HSM) của người đại diện theo pháp luật và kế toán trưởng có giá trị pháp lý tương đương chữ ký tươi.",
        "impactNote": "Kiểu Việt triển khai hệ thống ký số điện tử trên thiết bị di động cho các Chỉ huy trưởng công trường ký phê duyệt chứng từ vật tư từ xa."
      },
      {
        "topic": "Đồng bộ định dạng tệp báo cáo tài chính điện tử theo chuẩn XML/JSON",
        "type": "modified",
        "oldRule": "[Căn cứ: Phụ lục III TT 133/2016] Cho phép nộp BCTC bằng file PDF scan hoặc bảng tính Excel qua mạng.",
        "newRule": "[Căn cứ: Điều 3 Thông tư 46/2025] Bắt buộc nộp BCTC theo định dạng cấu trúc dữ liệu XML/JSON tích hợp mã vạch hai chiều, kết nối trực tiếp với Cơ sở dữ liệu quốc gia về Đăng ký kinh doanh và Cổng Thuế điện tử.",
        "impactNote": "Phần mềm kế toán Kiểu Việt trích xuất tự động file XML chuẩn dữ liệu, loại bỏ 100% lỗi sai định dạng khi nộp báo cáo cho Cục Thuế."
      },
      {
        "topic": "Quy định thời hạn lưu trữ chứng từ kế toán số hóa trên nền tảng đám mây",
        "type": "added",
        "oldRule": "[Căn cứ: Điều 11 TT 133/2016] Chỉ quy định chung về thời hạn lưu trữ 5 năm và 10 năm theo tài liệu giấy.",
        "newRule": "[Căn cứ: Điều 2 Thông tư 46/2025] Cho phép doanh nghiệp lưu trữ tài liệu kế toán điện tử trên dịch vụ lưu trữ đám mây (Cloud Storage) tại Việt Nam với điều kiện bảo đảm tính toàn vẹn, chống truy cập trái phép và khả năng tra cứu trong 10 năm.",
        "impactNote": "Kiểu Việt tiết kiệm hàng trăm triệu đồng chi phí kho lưu trữ hồ sơ công trình bằng cách số hóa toàn bộ chứng từ thanh toán."
      },
      {
        "topic": "Xử lý hóa đơn điều chỉnh và hóa đơn thay thế trong hạch toán kế toán DNNVV",
        "type": "modified",
        "oldRule": "[Căn cứ: Điều 15 TT 133/2016] Chưa có quy định tương thích với quy trình xử lý hóa đơn điện tử sai sót theo Nghị định 123/2020 và Thông tư 78/2021.",
        "newRule": "[Căn cứ: Điều 4 Thông tư 46/2025] Hướng dẫn chi tiết: Khi nhận hóa đơn điều chỉnh hoặc hóa đơn thay thế, kế toán hạch toán bổ sung hoặc ghi âm trực tiếp vào kỳ phát sinh hóa đơn điều chỉnh mà không hồi tố sổ sách kỳ trước nếu không trọng yếu.",
        "impactNote": "Quy trình xử lý hóa đơn vật tư xây dựng sai sót của Kiểu Việt trở nên thông suốt, tránh sai lệch sổ sách thuế."
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
        "topic": "Tái cấu trúc hệ thống tài khoản theo dõi vốn đầu tư XDCB (Ban QLDA)",
        "type": "modified",
        "oldRule": "[Căn cứ: TT 107/2017/TT-BTC] Hệ thống tài khoản nguồn vốn đầu tư XDCB phức tạp, tách rời giữa kế toán đơn vị chủ đầu tư và đơn vị sự nghiệp có thu.",
        "newRule": "[Căn cứ: Điều 15 & Phụ lục I TT 24/2024/TT-BTC] Cập nhật danh mục tài khoản chuyên dụng theo dõi nguồn vốn ngân sách cấp cho dự án đầu tư công, phân định rõ vốn tạm ứng hợp đồng và vốn thanh toán khối lượng hoàn thành.",
        "impactNote": "Kiểu Việt nắm bắt chính xác quy trình hạch toán giải ngân của các Ban Quản lý dự án (Chủ đầu tư) để lập hồ sơ nghiệm thu thanh toán giải ngân vốn công nhanh chóng."
      },
      {
        "topic": "Bắt buộc chuyển đổi số và lập chứng từ kế toán điện tử tại Ban QLDA công",
        "type": "added",
        "oldRule": "[Căn cứ: Điều 5 TT 107/2017] Vẫn ưu tiên luân chuyển hồ sơ chứng từ giấy qua nhiều khâu ký duyệt thủ công của Ban QLDA và Kho bạc.",
        "newRule": "[Căn cứ: Điều 7 TT 24/2024/TT-BTC] 100% hồ sơ tạm ứng, thanh toán khối lượng hoàn thành công trình công được số hóa, gửi qua Cổng Dịch vụ công trực tuyến của Kho bạc Nhà nước.",
        "impactNote": "Rút ngắn thời gian Chủ đầu tư chuyển tiền thanh toán từ Kho bạc về tài khoản Kiểu Việt từ 10 ngày xuống còn 2-3 ngày làm việc."
      },
      {
        "topic": "Chuẩn hóa quy trình đối chiếu số liệu giải ngân vốn đầu tư công hàng tháng",
        "type": "modified",
        "oldRule": "[Căn cứ: Điều 22 TT 107/2017] Đối chiếu số liệu vốn cấp theo quý, dẫn đến chênh lệch kéo dài giữa số liệu của nhà thầu xây lắp và Kho bạc.",
        "newRule": "[Căn cứ: Điều 18 TT 24/2024/TT-BTC] Định kỳ hàng tháng, Ban QLDA và nhà thầu phải thực hiện đối chiếu xác nhận số dư vốn tạm ứng và khối lượng hoàn thành lũy kế trên hệ thống dịch vụ công Kho bạc.",
        "impactNote": "Kế toán Kiểu Việt chủ động kiểm soát số dư tạm ứng hợp đồng, tránh bị phạt chậm hoàn ứng theo quy định quản lý ngân sách nhà nước."
      },
      {
        "topic": "Quy định khấu hao và hao mòn tài sản kết cấu hạ tầng công trình",
        "type": "modified",
        "oldRule": "[Căn cứ: Điều 14 TT 107/2017] Tài sản công trình hạ tầng bàn giao cho Ban QLDA quản lý tính hao mòn theo phương pháp thủ công cuối năm.",
        "newRule": "[Căn cứ: Điều 12 TT 24/2024/TT-BTC] Quy định chi tiết tỷ lệ tính hao mòn hàng năm đối với từng nhóm công trình cầu, đường bộ, hạ tầng kỹ thuật theo thời gian sử dụng hữu ích chuẩn.",
        "impactNote": "Hỗ trợ Kiểu Việt lập hồ sơ bàn giao tài sản công trình hoàn thành cho cơ quan quản lý nhà nước đúng quy chuẩn kỹ thuật và giá trị tài sản."
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
        "topic": "Tổng hợp số liệu vốn đầu tư công và công nợ tạm ứng nhà thầu xây lắp",
        "type": "modified",
        "oldRule": "[Căn cứ: TT 99/2018/TT-BTC] Báo cáo tài chính tổng hợp chỉ phản ánh số liệu tài chính chung của cơ quan hành chính, thiếu chi tiết về công nợ xây dựng cơ bản.",
        "newRule": "[Căn cứ: Điều 8 TT 108/2025/TT-BTC] Bắt buộc tách bạch chỉ tiêu: Vốn đầu tư xây dựng cơ bản dở dang, số tiền tạm ứng cho nhà thầu quá hạn chưa thu hồi và các khoản nợ đọng xây dựng cơ bản.",
        "impactNote": "Chủ đầu tư bắt buộc phải giải ngân và thu hồi tạm ứng đúng hạn theo hợp đồng, giảm thiểu rủi ro bị chiếm dụng vốn hoặc chậm thanh toán cho Kiểu Việt."
      },
      {
        "topic": "Ứng dụng hệ thống cơ sở dữ liệu Báo cáo tài chính nhà nước thống nhất",
        "type": "added",
        "oldRule": "[Căn cứ: TT 99/2018/TT-BTC] Báo cáo tổng hợp nộp bằng phương thức thủ công hoặc gửi file qua email nội bộ giữa các cấp ngân sách.",
        "newRule": "[Căn cứ: Điều 14 TT 108/2025/TT-BTC] Dữ liệu BCTC được đẩy trực tiếp lên Hệ thống Thông tin quản lý Ngân sách và Kho bạc (TABMIS) nâng cấp, minh bạch hóa toàn bộ tiến độ giải ngân từng dự án.",
        "impactNote": "Kiểu Việt có thể theo dõi tiến độ bố trí vốn đầu tư công của các dự án đang thi công thông qua thông tin công khai của Kho bạc."
      },
      {
        "topic": "Xử lý chênh lệch số liệu kiểm toán độc lập và số liệu quyết toán vốn công",
        "type": "modified",
        "oldRule": "[Căn cứ: TT 99/2018/TT-BTC] Khi có kết luận Kiểm toán Nhà nước, thủ tục điều chỉnh sổ sách kéo dài qua nhiều kỳ kế toán.",
        "newRule": "[Căn cứ: Điều 20 TT 108/2025/TT-BTC] Trong vòng 30 ngày kể từ ngày nhận kết luận Kiểm toán Nhà nước, Chủ đầu tư phải thực hiện điều chỉnh số liệu trên BCTC tổng hợp và thông báo cho nhà thầu điều chỉnh hóa đơn giá trị gia tăng tương ứng.",
        "impactNote": "Kế toán Kiểu Việt kịp thời xuất hóa đơn điều chỉnh khối lượng theo kết luận kiểm toán, không bị phạt vi phạm hành chính về thuế."
      },
      {
        "topic": "Minh bạch hóa các khoản bảo lãnh bảo hành công trình xây dựng",
        "type": "added",
        "oldRule": "[Căn cứ: TT 99/2018/TT-BTC] Tiền bảo hành công trình giữ lại (5%) chỉ được theo dõi ngoại bảng đơn giản.",
        "newRule": "[Căn cứ: Điều 11 TT 108/2025/TT-BTC] Quy định hạch toán và theo dõi riêng biệt nghĩa vụ hoàn trả tiền bảo hành công trình hoặc giải tỏa thư bảo lãnh ngân hàng cho nhà thầu sau khi hết thời hạn bảo hành.",
        "impactNote": "Kiểu Việt thu hồi đúng hạn 5% tiền bảo hành công trình hoặc giải tỏa hạn mức bảo lãnh tại ngân hàng BIDV, Vietinbank."
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
        "topic": "Bổ sung nguyên tắc Giá trị hợp lý (Fair Value) vào hệ thống pháp luật kế toán",
        "type": "added",
        "oldRule": "[Căn cứ: Điều 6 Luật Kế toán 2003] Chỉ thừa nhận duy nhất nguyên tắc Giá gốc (Historical Cost) trong việc tính toán giá trị tài sản và công nợ.",
        "newRule": "[Căn cứ: Điều 6 Luật Kế toán 2015] Quy định: Giá trị tài sản và nợ phải trả được ghi nhận ban đầu theo giá gốc. Sau đó, đối với một số loại tài sản và nợ phải trả mà giá trị biến động theo thị trường thì được đánh giá lại theo Giá trị hợp lý.",
        "impactNote": "Mở đường cho các doanh nghiệp xây dựng lớn như Kiểu Việt đánh giá lại tài sản máy móc thiết bị thi công theo giá trị thị trường phục vụ định giá doanh nghiệp."
      },
      {
        "topic": "Công nhận giá trị pháp lý đầy đủ của Chứng từ kế toán điện tử",
        "type": "added",
        "oldRule": "[Căn cứ: Điều 17 Luật Kế toán 2003] Chứng từ điện tử chỉ được coi là bản sao của chứng từ giấy, khi thanh tra quyết toán vẫn bắt buộc phải in ra giấy và đóng dấu tươi.",
        "newRule": "[Căn cứ: Điều 17 & Điều 18 Luật Kế toán 2015] Chứng từ điện tử có giá trị như chứng từ bằng giấy khi có chữ ký điện tử hợp pháp và bảo đảm an toàn dữ liệu số trong suốt thời gian lưu trữ.",
        "impactNote": "Kiểu Việt số hóa 100% quy trình ký hóa đơn điện tử, ủy nhiệm chi ngân hàng điện tử và hợp đồng xây dựng mà không cần in giấy lưu kho."
      },
      {
        "topic": "Nâng cao tiêu chuẩn và điều kiện hành nghề Kế toán trưởng doanh nghiệp",
        "type": "modified",
        "oldRule": "[Căn cứ: Điều 53 Luật Kế toán 2003] Tiêu chuẩn Kế toán trưởng đơn giản, chỉ cần chứng chỉ bồi dưỡng kế toán trưởng chung.",
        "newRule": "[Căn cứ: Điều 54 Luật Kế toán 2015] Kế toán trưởng phải có phẩm chất đạo đức nghề nghiệp, bằng cử nhân chuyên ngành, chứng chỉ Kế toán trưởng và có thời gian công tác thực tế về kế toán ít nhất 02 năm (đối với đại học) hoặc 03 năm (đối với cao đẳng).",
        "impactNote": "Nhân sự Kế toán trưởng Kiểu Việt được chuẩn hóa bằng cấp và cập nhật kiến thức kế toán định kỳ theo quy định của Bộ Tài chính."
      },
      {
        "topic": "Quy định cấm kiêm nhiệm và các hành vi bị nghiêm cấm trong công tác kế toán",
        "type": "modified",
        "oldRule": "[Căn cứ: Điều 14 Luật Kế toán 2003] Quy định cấm kiêm nhiệm còn lỏng lẻo đối với doanh nghiệp ngoài quốc doanh.",
        "newRule": "[Căn cứ: Điều 13 & Điều 52 Luật Kế toán 2015] Nghiêm cấm: Bố trí người quản lý, điều hành, thủ kho, thủ quỹ kiêm nhiệm làm kế toán; lập hai hệ thống sổ kế toán trở lên hoặc để ngoài sổ kế toán tài sản, nợ phải trả.",
        "impactNote": "Kiểu Việt tuân thủ minh bạch duy nhất 01 hệ thống sổ kế toán tài chính, bảo đảm an toàn pháp lý tuyệt đối cho Ban Lãnh đạo."
      },
      {
        "topic": "Thời hạn lưu trữ tài liệu kế toán tối thiểu từ 5 năm đến vĩnh viễn",
        "type": "modified",
        "oldRule": "[Căn cứ: Điều 40 Luật Kế toán 2003] Phân loại thời hạn lưu trữ chưa thực sự tương thích với hồ sơ hoàn công xây dựng.",
        "newRule": "[Căn cứ: Điều 41 Luật Kế toán 2015] Tối thiểu 05 năm đối với chứng từ quản trị; tối thiểu 10 năm đối với chứng từ sử dụng trực tiếp để ghi sổ kế toán và BCTC; lưu trữ vĩnh viễn đối với hồ sơ tài liệu có tính chất lịch sử hoặc công trình xây dựng có ý nghĩa quốc phòng an ninh.",
        "impactNote": "Hồ sơ nghiệm thu thanh quyết toán công trình của Kiểu Việt được lập quy chế lưu trữ an toàn tối thiểu 10 năm để phục vụ thanh tra, kiểm toán."
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
        "topic": "Phân định rõ trách nhiệm pháp lý cá nhân giữa Kế toán trưởng và Chủ tịch/TGĐ",
        "type": "modified",
        "oldRule": "[Căn cứ: Điều 50 Luật Kế toán 2015] Quy định trách nhiệm liên đới chung chung giữa Kế toán trưởng và Người đại diện theo pháp luật khi xảy ra sai phạm số liệu kế toán.",
        "newRule": "[Căn cứ: Điều 2 Luật 56/2024/QH15] Quy định rõ: Người đại diện theo pháp luật chịu trách nhiệm toàn diện về tính trung thực, hợp pháp của chứng từ kế toán đầu vào do các bộ phận cung cấp; Kế toán trưởng chịu trách nhiệm về tính chính xác của việc hạch toán và số liệu trên Báo cáo tài chính.",
        "impactNote": "Kế toán trưởng Kiểu Việt được bảo vệ pháp lý khi thực hiện hạch toán đúng chứng từ nghiệm thu hợp lệ do Ban Chỉ huy công trường trình duyệt."
      },
      {
        "topic": "Cho phép ký số tập trung (Batch Signing) trên chứng từ kế toán điện tử",
        "type": "added",
        "oldRule": "[Căn cứ: Điều 19 Luật Kế toán 2015] Mỗi chứng từ kế toán phải được ký duyệt riêng lẻ từng bản một, gây tốn thời gian khi doanh nghiệp có hàng nghìn hóa đơn.",
        "newRule": "[Căn cứ: Điều 2 Luật 56/2024/QH15] Cho phép áp dụng chữ ký số theo lô / ký số tập trung (Batch Signing) đối với các chứng từ kế toán cùng loại trong cùng một kỳ giao dịch trên phần mềm kế toán đã được kiểm duyệt.",
        "impactNote": "Tăng tốc độ ký duyệt chứng từ thanh toán vật tư tại Kiểu Việt lên gấp 10 lần, đáp ứng tiến độ thi công cao điểm."
      },
      {
        "topic": "Đơn giản hóa thủ tục hủy tài liệu kế toán hết thời hạn lưu trữ",
        "type": "modified",
        "oldRule": "[Căn cứ: Điều 45 Luật Kế toán 2015] Thủ tục thành lập Hội đồng tiêu hủy tài liệu kế toán phức tạp, phải lập biên bản kiểm kê chi tiết từng tờ chứng từ.",
        "newRule": "[Căn cứ: Điều 2 Luật 56/2024/QH15] Doanh nghiệp được quyền tự quyết định hình thức tiêu hủy tài liệu giấy đã hết hạn lưu trữ (nếu đã có bản số hóa lưu trữ điện tử) và lưu lại Biên bản tiêu hủy tổng hợp.",
        "impactNote": "Giải phóng mặt bằng kho lưu trữ hồ sơ giấy cũ trên 10 năm tại trụ sở công ty Kiểu Việt một cách hợp pháp."
      },
      {
        "topic": "Thừa nhận chứng từ kế toán kết xuất từ dữ liệu lớn (Big Data) và AI",
        "type": "added",
        "oldRule": "[Căn cứ: Luật Kế toán 2015] Chưa có điều khoản điều chỉnh đối với các bảng kê tự động tạo ra từ thuật toán máy học hoặc camera nhận diện vật tư.",
        "newRule": "[Căn cứ: Điều 2 Luật 56/2024/QH15] Cho phép sử dụng các bảng kê dữ liệu tự động kết xuất từ hệ thống trạm cân điện tử, camera giám sát công trường làm chứng từ kế toán căn cứ ban đầu nếu có chữ ký số của người quản lý trạm.",
        "impactNote": "Kiểu Việt tích hợp dữ liệu trạm cân xe chở đất đá mỏ Gia Lai tự động đẩy vào phần mềm kế toán, loại bỏ rủi ro gian lận khối lượng."
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
        "topic": "Nguyên tắc Cơ sở dồn tích (Accrual Basis) trong ghi nhận chi phí xây lắp",
        "type": "added",
        "oldRule": "Kế toán thực thu - thực chi (Cash Basis): Chỉ ghi nhận chi phí khi tiền đã chi ra khỏi tài khoản và ghi nhận doanh thu khi tiền đã về.",
        "newRule": "[Căn cứ: Đoạn 03-04 VAS 01] Mọi nghiệp vụ kinh tế tài chính phải được ghi sổ kế toán vào thời điểm phát sinh, không căn cứ vào thời điểm thực tế thu hoặc thực tế chi tiền.",
        "impactNote": "Kiểu Việt phải trích trước chi phí thi công (TK 335) tương ứng với khối lượng đã hoàn thành trong kỳ dù chưa có hóa đơn thanh toán của nhà thầu phụ."
      },
      {
        "topic": "Nguyên tắc Hoạt động liên tục (Going Concern) và đánh giá khả năng thanh toán",
        "type": "added",
        "oldRule": "Chưa quy định nghĩa vụ của Ban Giám đốc phải đánh giá khả năng hoạt động liên tục trong vòng 12 tháng tới khi lập Báo cáo tài chính.",
        "newRule": "[Căn cứ: Đoạn 05-06 VAS 01] Báo cáo tài chính phải được lập trên cơ sở giả định doanh nghiệp đang và sẽ tiếp tục hoạt động trong tương lai gần (tối thiểu 12 tháng). Nếu có nguy cơ phá sản phải lập BCTC theo giá thanh lý.",
        "impactNote": "Hồ sơ năng lực tài chính Kiểu Việt chứng minh khả năng duy trì dòng tiền ổn định để bảo lãnh đấu thầu các dự án nhóm A."
      },
      {
        "topic": "Nguyên tắc Phù hợp (Matching Concept) giữa Doanh thu và Chi phí công trình",
        "type": "added",
        "oldRule": "Ghi nhận doanh thu và chi phí tách rời nhau, dẫn đến tình trạng doanh thu tăng vọt nhưng chi phí dồn vào quý sau gây méo mó kết quả kinh doanh.",
        "newRule": "[Căn cứ: Đoạn 08-09 VAS 01] Việc ghi nhận doanh thu và chi phí phải phù hợp với nhau. Khi ghi nhận một khoản doanh thu thì phải ghi nhận một khoản chi phí tương ứng có liên quan đến việc tạo ra doanh thu đó.",
        "impactNote": "Kế toán Kiểu Việt tập hợp đầy đủ chi phí nhân công, ca máy, vật tư tương ứng với từng biên bản nghiệm thu giai đoạn A-B để xác định chính xác lãi/lỗ từng gói thầu."
      },
      {
        "topic": "Nguyên tắc Thận trọng (Prudence) trong trích lập dự phòng rủi ro bảo hành",
        "type": "added",
        "oldRule": "Doanh nghiệp thường đánh giá quá cao tài sản và không ghi nhận các khoản chi phí phát sinh tiềm tàng để làm đẹp báo cáo vay vốn ngân hàng.",
        "newRule": "[Căn cứ: Đoạn 11-12 VAS 01] Phải lập các khoản dự phòng nhưng không lập quá lớn; không đánh giá cao hơn giá trị của các tài sản và các khoản thu nhập; không đánh giá thấp hơn giá trị của các khoản nợ phải trả và chi phí.",
        "impactNote": "Kiểu Việt trích lập đầy đủ chi phí bảo hành công trình xây dựng (TK 352: từ 1% - 3% giá trị hợp đồng) theo nguyên tắc thận trọng để phòng ngừa sự cố kỹ thuật."
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
        "topic": "Đo lường Hàng tồn kho theo Giá thấp hơn giữa Giá gốc và Giá trị thuần (NRV)",
        "type": "added",
        "oldRule": "Hàng tồn kho (sắt thép, xi măng, cát đá) luôn giữ nguyên theo giá gốc trên sổ sách dù giá thị trường ngoài công trường đã sụt giảm nghiêm trọng.",
        "newRule": "[Căn cứ: Đoạn 03 & 21-27 VAS 02] Hàng tồn kho phải được tính theo giá thấp hơn giữa Giá gốc và Giá trị thuần có thể thực hiện được (Net Realizable Value - NRV). Khi NRV thấp hơn giá gốc, bắt buộc phải trích lập Dự phòng giảm giá HTK (TK 2294).",
        "impactNote": "Kiểu Việt rà soát giá thép xây dựng và vật tư dự trữ tồn kho cuối năm; nếu giá thép giảm mạnh, lập dự phòng ghi vào Giá vốn hàng bán (Nợ TK 632 / Có TK 2294) để tối ưu thuế TNDN."
      },
      {
        "topic": "Quy định chi phí không được tính vào Giá gốc hàng tồn kho xây dựng",
        "type": "modified",
        "oldRule": "Kế toán thường gom toàn bộ chi phí lưu kho, hao hụt bất thường vào đơn giá nhập kho vật tư công trình.",
        "newRule": "[Căn cứ: Đoạn 12-13 VAS 02] Không được tính vào giá gốc: Chi phí NVL, nhân công lãng phí ở mức bất thường; chi phí bảo quản lưu kho (trừ khi cần thiết cho quá trình sản xuất tiếp theo); chi phí bán hàng và QLDN. Các chi phí này phải hạch toán thẳng vào chi phí thời kỳ.",
        "impactNote": "Kế toán Kiểu Việt bóc tách chi phí hao hụt vật tư cát đá vượt định mức nhà nước ra khỏi giá thành công trình, tránh bị kiểm toán bóc tách."
      },
      {
        "topic": "Lựa chọn phương pháp tính giá trị hàng tồn kho xuất kho thi công",
        "type": "modified",
        "oldRule": "Áp dụng tùy tiện nhiều phương pháp tính giá xuất kho (Bình quân, Nhập sau - Xuất trước LIFO, Thực tế đích danh) trong cùng một năm tài chính.",
        "newRule": "[Căn cứ: Đoạn 19-20 VAS 02] Chỉ được chọn một trong các phương pháp: Bình quân gia quyền, Nhập trước - Xuất trước (FIFO) hoặc Giá đích danh; phải áp dụng nhất quán ít nhất trong 01 niên độ kế toán.",
        "impactNote": "Kiểu Việt áp dụng phương pháp Bình quân gia quyền liên hoàn để phản ánh chính xác chi phí vật liệu xuất dùng tại từng công trường thi công theo từng ngày."
      },
      {
        "topic": "Xử lý phế liệu thu hồi và hoàn trả vật tư thừa sau khi kết thúc công trình",
        "type": "added",
        "oldRule": "Vật tư sắt vụn, ván coppha hỏng thu hồi tại công trường thường không được nhập kho mà để công nhân bán tự do không hóa đơn.",
        "newRule": "[Căn cứ: Đoạn 10 & 28 VAS 02] Toàn bộ vật liệu thừa thu hồi, phế liệu sắt thép phải lập Biên bản thu hồi nhập kho (Nợ TK 152 / Có TK 154) theo giá trị có thể thu hồi ước tính, hoặc ghi giảm chi phí công trình.",
        "impactNote": "Kiểu Việt kiểm soát 100% phế liệu sắt thép công trình, thu hồi tiền bán phế liệu nộp quỹ công ty và hạch toán vào Thu nhập khác (TK 711) minh bạch."
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
        "topic": "Bốn điều kiện ghi nhận Doanh thu cung cấp dịch vụ và hợp đồng xây lắp",
        "type": "added",
        "oldRule": "Chỉ căn cứ vào việc đã xuất hóa đơn tài chính hoặc nhận được tiền của Chủ đầu tư là ghi nhận ngay doanh thu.",
        "newRule": "[Căn cứ: Đoạn 15-20 VAS 14] Doanh thu hợp đồng xây dựng chỉ được ghi nhận khi thỏa mãn đồng thời 4 điều kiện: 1) Doanh thu được xác định tương đối chắc chắn; 2) Có khả năng thu được lợi ích kinh tế; 3) Xác định được phần công việc đã hoàn thành tại ngày lập BCTC; 4) Xác định được chi phí phát sinh cho hợp đồng và chi phí để hoàn thành hợp đồng.",
        "impactNote": "Kiểu Việt bảo đảm mọi biên bản nghiệm thu khối lượng giai đoạn A-B có chữ ký của Tư vấn giám sát và Chủ đầu tư mới đủ điều kiện ghi nhận doanh thu hợp pháp."
      },
      {
        "topic": "Xác định phần công việc đã hoàn thành theo Phương pháp tỷ lệ phần trăm",
        "type": "added",
        "oldRule": "Không có công thức chuẩn để ước tính tỷ lệ hoàn thành đối với công trình thi công dở dang vắt qua 2 năm tài chính.",
        "newRule": "[Căn cứ: Đoạn 18-19 VAS 14] Quy định 3 phương pháp đo lường tiến độ: 1) Tỷ lệ chi phí đã phát sinh so với tổng chi phí ước tính của hợp đồng; 2) Đánh giá phần công việc đã thực hiện trên hiện trường; 3) Tỷ lệ phần trăm giữa khối lượng công việc đã hoàn thành so với tổng khối lượng hợp đồng.",
        "impactNote": "Kế toán Kiểu Việt phối hợp với Ban Chỉ huy công trường đo đạc khối lượng thực tế cuối quý để ước tính doanh thu lũy kế chính xác, không bị cơ quan thuế ấn định thuế."
      },
      {
        "topic": "Xử lý doanh thu khi phát sinh biến động giá trị hợp đồng (Phát sinh tăng/giảm)",
        "type": "modified",
        "oldRule": "Khối lượng phát sinh thêm ngoài hợp đồng thường ghi nhận doanh thu ngay dù Chủ đầu tư chưa phê duyệt dự toán bổ sung.",
        "newRule": "[Căn cứ: Đoạn 16 VAS 14] Các khoản tiền thưởng hợp đồng, tiền bồi thường hoặc khối lượng phát sinh ngoài phạm vi hợp đồng chỉ được đưa vào doanh thu khi Chủ đầu tư đã chấp thuận bằng văn bản và số tiền được xác định đáng tin cậy.",
        "impactNote": "Kiểu Việt chỉ ghi nhận doanh thu khối lượng phát sinh khi đã có Phụ lục hợp đồng ký kết hoặc Biên bản phê duyệt dự toán của Chủ đầu tư, tránh rủi ro treo công nợ xấu."
      },
      {
        "topic": "Nguyên tắc ghi nhận Doanh thu tiền lãi và Thu nhập tài chính",
        "type": "modified",
        "oldRule": "Tiền lãi tiền gửi ngân hàng, lãi cho vay chỉ hạch toán khi đã thực tế rút tiền mặt hoặc có giấy báo có của ngân hàng.",
        "newRule": "[Căn cứ: Đoạn 23-25 VAS 14] Doanh thu tiền lãi tiền gửi ngân hàng, lãi cho vay phải được ghi nhận trên cơ sở dồn tích theo thời gian và lãi suất thực tế từng kỳ.",
        "impactNote": "Kiểu Việt định kỳ hạch toán lãi tiền gửi có kỳ hạn của công ty tại ngân hàng thương mại vào Doanh thu hoạt động tài chính (Nợ TK 1388 / Có TK 515) đúng kỳ kế toán."
      }
    ]
  }
};
