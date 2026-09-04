import { DecreeDiffData } from '../diff-types';

export const group2InvoicesTaxAdmin: Record<string, DecreeDiffData> = {
  "nd-123-2020": {
    "decreeId": "nd-123-2020",
    "title": "Nghị định 123/2020/NĐ-CP",
    "category": "Hóa đơn & Chứng từ",
    "compareWith": "Nghị định 51/2010/NĐ-CP & 04/2014/NĐ-CP",
    "summary": "Cách mạng số hóa hóa đơn tại Việt Nam: Xóa bỏ 100% hóa đơn giấy, bắt buộc áp dụng hóa đơn điện tử có mã hoặc không có mã của cơ quan thuế, quy định chặt chẽ thời điểm xuất hóa đơn xây lắp và quy trình xử lý hóa đơn sai sót.",
    "items": [
      {
        "topic": "Xóa bỏ hoàn toàn hóa đơn giấy, 100% bắt buộc hóa đơn điện tử",
        "type": "modified",
        "oldRule": "Doanh nghiệp vẫn được sử dụng song song hóa đơn tự in, hóa đơn đặt in bằng giấy và hóa đơn điện tử theo NĐ 51/2010.",
        "newRule": "Bắt buộc 100% doanh nghiệp, tổ chức kinh tế phải chuyển sang sử dụng Hóa đơn điện tử từ ngày 01/07/2022; toàn bộ hóa đơn giấy cũ hết hiệu lực.",
        "impactNote": "Kiểu Việt số hóa toàn diện quy trình xuất hóa đơn bán hàng và lưu trữ dữ liệu hóa đơn điện tử an toàn trên phần mềm kế toán."
      },
      {
        "topic": "Thời điểm lập hóa đơn đối với hoạt động xây dựng, lắp đặt",
        "type": "modified",
        "oldRule": "Cho phép xuất hóa đơn chậm khi chủ đầu tư giải ngân hoặc khi thanh toán hợp đồng xây dựng.",
        "newRule": "Thời điểm lập hóa đơn là thời điểm nghiệm thu, bàn giao công trình, hạng mục công trình, khối lượng xây dựng hoàn thành, không phân biệt đã thu được tiền hay chưa.",
        "impactNote": "Kế toán Kiểu Việt bắt buộc xuất hóa đơn ngay trong ngày ký Biên bản nghiệm thu A-B, tránh bị phạt từ 4 - 8 triệu đồng vì lập sai thời điểm."
      },
      {
        "topic": "Phân loại HĐĐT có mã của CQT vs HĐĐT không có mã",
        "type": "added",
        "oldRule": "Chưa phân định cơ chế cấp mã xác thực từng hóa đơn của Cơ quan thuế.",
        "newRule": "Phân loại rõ ràng: HĐĐT có mã của CQT (áp dụng cho hầu hết doanh nghiệp, rủi ro cao) và HĐĐT không có mã (áp dụng cho doanh nghiệp lớn, tuân thủ tốt).",
        "impactNote": "Kiểu Việt duy trì lịch sử tuân thủ thuế chuẩn mực để được áp dụng hình thức HĐĐT không có mã giúp xuất hóa đơn nhanh chóng."
      },
      {
        "topic": "Quy trình xử lý hóa đơn điện tử có sai sót (Mẫu 04/SS-HĐĐT)",
        "type": "modified",
        "oldRule": "Lập biên bản hủy hóa đơn và xuất hóa đơn mới thay thế một cách tùy tiện.",
        "newRule": "Bắt buộc gửi Thông báo sai sót Mẫu 04/SS-HĐĐT đến Cơ quan thuế, sau đó lập Hóa đơn điều chỉnh hoặc Hóa đơn thay thế; tuyệt đối cấm tự ý xóa bỏ hóa đơn.",
        "impactNote": "Kiểu Việt kiểm soát chặt chẽ quy trình lập Mẫu 04/SS gửi CQT trước khi xuất hóa đơn điều chỉnh giảm trừ khối lượng thi công."
      },
      {
        "topic": "Triển khai hóa đơn điện tử khởi tạo từ máy tính tiền",
        "type": "added",
        "oldRule": "Hóa đơn bán lẻ in từ máy tính tiền không có giá trị khấu trừ thuế GTGT đầu vào.",
        "newRule": "Hóa đơn điện tử khởi tạo từ máy tính tiền có kết nối chuyển dữ liệu với CQT có đầy đủ giá trị pháp lý làm chứng từ khấu trừ thuế và tính chi phí hợp lý.",
        "impactNote": "Kiểu Việt dễ dàng đưa các chi phí vé cầu đường, ăn uống tiếp khách, mua vật tư nhỏ có hóa đơn máy tính tiền vào chi phí được trừ."
      },
      {
        "topic": "Quy định về chứng từ khấu trừ thuế TNCN điện tử",
        "type": "added",
        "oldRule": "Sử dụng chứng từ khấu trừ thuế TNCN mua tại cơ quan thuế dạng giấy than 3 liên.",
        "newRule": "Doanh nghiệp tự cấp chứng từ khấu trừ thuế TNCN điện tử cho người lao động thời vụ, vãng lai theo định dạng XML chuẩn của Tổng cục Thuế.",
        "impactNote": "Kiểu Việt chủ động cấp chứng từ điện tử cho các thợ thi công nhật, nhân công thời vụ phục vụ quyết toán thuế TNCN cuối năm."
      }
    ]
  },
  "tt-78-2021": {
    "decreeId": "tt-78-2021",
    "title": "Thông tư 78/2021/TT-BTC",
    "category": "Hóa đơn & Chứng từ",
    "compareWith": "Thông tư 32/2011/TT-BTC & 39/2014/TT-BTC",
    "summary": "Hướng dẫn chi tiết thi hành Nghị định 123/2020/NĐ-CP về hóa đơn, chuẩn hóa cấu trúc ký hiệu hóa đơn 7 ký tự (1C26TAA), tiêu chí sử dụng HĐĐT có mã không thu tiền và kỹ thuật xử lý hóa đơn điều chỉnh.",
    "items": [
      {
        "topic": "Cấu trúc Ký hiệu mẫu số hóa đơn và Ký hiệu hóa đơn chuẩn mới",
        "type": "modified",
        "oldRule": "Ký hiệu hóa đơn cũ gồm 11 ký tự phức tạp (ví dụ: 01GTKT3/001 - AA/14P).",
        "newRule": "Quy định thống nhất 7 ký tự: 1 chữ số loại hóa đơn (1-GTGT, 2-Bán hàng) + 6 ký tự ký hiệu (C: có mã, K: không mã; 2 số năm ví dụ 26; 1 chữ cái loại hình T/M/B/G/H; 2 chữ cái quản lý AA).",
        "impactNote": "Kế toán Kiểu Việt nắm vững ký hiệu '1K26TKV' để kiểm tra tính hợp lệ của hóa đơn đầu vào từ nhà cung cấp sắt thép, xi măng."
      },
      {
        "topic": "Quy định ghi nội dung trên Hóa đơn điều chỉnh hoặc thay thế",
        "type": "modified",
        "oldRule": "Ghi nội dung điều chỉnh chung chung, không bắt buộc dẫn chiếu số hóa đơn gốc bị điều chỉnh.",
        "newRule": "Bắt buộc phải ghi rõ dòng chữ: 'Điều chỉnh cho hóa đơn Mẫu số... Ký hiệu... Số... Ngày... tháng... năm...' và ghi rõ số tiền điều chỉnh tăng (+) hoặc giảm (-).",
        "impactNote": "Tránh sai sót khi lập hóa đơn điều chỉnh giảm giá trị quyết toán A-B, bảo đảm cơ quan thuế chấp nhận khấu trừ hợp lệ."
      },
      {
        "topic": "Xử lý chuyển tiếp và tiêu hủy hóa đơn giấy tồn kho",
        "type": "modified",
        "oldRule": "Cho phép lưu giữ hóa đơn giấy chưa sử dụng đến khi hết thời hạn in.",
        "newRule": "Bắt buộc doanh nghiệp phải thực hiện thủ tục hủy hóa đơn giấy tồn chưa sử dụng theo Mẫu TB03/AC chậm nhất trong vòng 30 ngày kể từ ngày chuyển sang HĐĐT.",
        "impactNote": "Kiểu Việt hoàn tất thủ tục tiêu hủy toàn bộ các quyển hóa đơn giấy cũ, không còn rủi ro thất lạc phôi hóa đơn."
      },
      {
        "topic": "Tiêu chuẩn kết nối và truyền nhận dữ liệu qua tổ chức T-VAN",
        "type": "added",
        "oldRule": "Doanh nghiệp tự gửi file dữ liệu qua email cho cơ quan thuế mà không có tiêu chuẩn kỹ thuật thống nhất.",
        "newRule": "Quy định tiêu chuẩn định dạng dữ liệu XML chuẩn và trách nhiệm của các tổ chức cung cấp dịch vụ truyền nhận hóa đơn điện tử (T-VAN).",
        "impactNote": "Dữ liệu hóa đơn của Kiểu Việt được truyền thông suốt, tự động đồng bộ sang hệ thống Cổng thông tin Hóa đơn điện tử quốc gia."
      },
      {
        "topic": "Quy định trường hợp ngừng sử dụng hóa đơn điện tử",
        "type": "added",
        "oldRule": "Quy định ngừng hóa đơn chưa đồng bộ với các biện pháp cưỡng chế nợ thuế của Luật Quản lý thuế.",
        "newRule": "Cơ quan thuế tự động khóa chức năng phát hành hóa đơn đối với doanh nghiệp bỏ trốn, ngừng hoạt động chưa hoàn tất thủ tục đóng MST hoặc bị cưỡng chế nợ thuế.",
        "impactNote": "Kế toán Kiểu Việt bắt buộc tra cứu tình trạng mã số thuế của đối tác trên trahoadon.gdt.gov.vn trước khi ký hợp đồng mua vật tư lớn."
      }
    ]
  },
  "nd-70-2025": {
    "decreeId": "nd-70-2025",
    "title": "Nghị định 70/2025/NĐ-CP",
    "category": "Hóa đơn & Quản lý rủi ro",
    "compareWith": "Nghị định 123/2020/NĐ-CP",
    "summary": "Nâng cấp hệ thống giám sát hóa đơn điện tử quốc gia bằng trí tuệ nhân tạo (AI), tự động phát hiện doanh nghiệp rủi ro cao về mua bán hóa đơn khống và siết chặt thời hạn thông báo sai sót.",
    "items": [
      {
        "topic": "Hệ thống AI tự động phân tích đối chiếu Doanh thu - Giá vốn",
        "type": "added",
        "oldRule": "Kiểm tra đối chiếu hóa đơn thủ công qua thanh tra, kiểm tra định kỳ tại trụ sở người nộp thuế.",
        "newRule": "Cơ quan thuế ứng dụng trí tuệ nhân tạo (AI) quét tự động tỷ lệ Doanh thu xuất ra so với Vật tư/Giá vốn mua vào; tự động phát cảnh báo rủi ro nếu phát sinh bất thường.",
        "impactNote": "Kiểu Việt quản trị chặt chẽ hồ sơ đầu vào: Mọi hóa đơn vật tư cát, đá, sắt thép mua vào phải có hợp đồng, biên bản giao nhận và phiếu cân xe thực tế."
      },
      {
        "topic": "Rút ngắn thời hạn nộp Thông báo sai sót Mẫu 04/SS-HĐĐT",
        "type": "modified",
        "oldRule": "Được nộp Mẫu 04/SS bất cứ thời điểm nào trước ngày nộp hồ sơ quyết toán thuế TNDN năm.",
        "newRule": "Bắt buộc phải gửi Thông báo Mẫu 04/SS-HĐĐT chậm nhất là ngày cuối cùng của kỳ kê khai thuế phát sinh sai sót hóa đơn.",
        "impactNote": "Kế toán Kiểu Việt phải rà soát và xử lý sai sót hóa đơn ngay trong tháng/quý phát sinh, không được để dồn tích đến cuối năm."
      },
      {
        "topic": "Mở rộng bắt buộc xuất hóa đơn từng lần đối với vận tải và xây dựng",
        "type": "modified",
        "oldRule": "Cho phép gom xuất hóa đơn tổng hợp cuối ngày hoặc cuối tháng đối với một số dịch vụ vận chuyển vật tư.",
        "newRule": "Bắt buộc xuất hóa đơn điện tử cho từng chuyến vận chuyển vật liệu xây dựng rời (đất đắp, cát, sỏi) gắn liền với phiếu cân tải trọng.",
        "impactNote": "Các nhà xe vận chuyển vật tư cho Kiểu Việt phải xuất hóa đơn điện tử từng đợt vận chuyển để bảo đảm tính hợp pháp của chi phí thi công."
      },
      {
        "topic": "Liên thông dữ liệu hóa đơn với hệ thống Ngân hàng và Đăng kiểm",
        "type": "added",
        "oldRule": "Dữ liệu hóa đơn hoạt động độc lập, cơ quan thuế phải gửi công văn yêu cầu ngân hàng cung cấp sao kê khi nghi vấn.",
        "newRule": "Thiết lập cơ chế chia sẻ dữ liệu tự động giữa cơ quan thuế với hệ thống ngân hàng thương mại và cục đăng kiểm xe máy chuyên dùng.",
        "impactNote": "Chứng từ thanh toán ngân hàng của Kiểu Việt phải khớp đúng 100% về số tiền, tên đơn vị thụ hưởng và nội dung ghi trên hóa đơn."
      }
    ]
  },
  "luat-quan-ly-thue-2019": {
    "decreeId": "luat-quan-ly-thue-2019",
    "title": "Luật Quản lý thuế số 38/2019/QH14",
    "category": "Quản lý thuế",
    "compareWith": "Luật Quản lý thuế số 78/2006/QH11",
    "summary": "Bước ngoặt cải cách thủ tục thuế: Kéo dài thời hạn quyết toán thuế năm, thiết lập nguyên tắc bản chất quyết định hình thức trong giao dịch liên kết và chế tài cưỡng chế nợ thuế qua tạm hoãn xuất cảnh.",
    "items": [
      {
        "topic": "Kéo dài thời hạn nộp hồ sơ quyết toán thuế năm",
        "type": "modified",
        "oldRule": "Thời hạn nộp hồ sơ quyết toán thuế TNDN và TNCN năm là ngày thứ 90 kể từ ngày kết thúc năm tài chính (thường là 31/03).",
        "newRule": "Quy định linh hoạt: Ngày cuối cùng của tháng thứ 3 kể từ ngày kết thúc năm tài chính đối với doanh nghiệp (31/03); và ngày cuối cùng của tháng thứ 4 đối với cá nhân tự quyết toán (30/04).",
        "impactNote": "Kiểu Việt có thêm thời gian rà soát, đối chiếu công nợ và hoàn thiện BCTC kiểm toán trước khi chốt nộp quyết toán thuế."
      },
      {
        "topic": "Chế tài tạm hoãn xuất cảnh đối với người đại diện pháp luật nợ thuế",
        "type": "added",
        "oldRule": "Chưa áp dụng biện pháp tạm hoãn xuất cảnh đối với cá nhân là người đại diện pháp luật của doanh nghiệp nợ thuế.",
        "newRule": "Cơ quan thuế có quyền gửi văn bản đề nghị Cục Quản lý Xuất nhập cảnh tạm hoãn xuất cảnh đối với người đại diện theo pháp luật của doanh nghiệp chưa hoàn thành nghĩa vụ nộp thuế.",
        "impactNote": "Nhắc nhở Ban Giám đốc Kiểu Việt: Luôn kiểm tra tình trạng hoàn thành nghĩa vụ nộp thuế của công ty để tránh rủi ro bị dừng xuất cảnh khi đi công tác nước ngoài."
      },
      {
        "topic": "Nguyên tắc bản chất quyết định hình thức (Substance over Form)",
        "type": "added",
        "oldRule": "Chủ yếu kiểm tra tính hợp lệ về mặt hình thức chứng từ (đủ hóa đơn, hợp đồng là chấp nhận chi phí).",
        "newRule": "Áp dụng nguyên tắc bản chất hoạt động kinh tế quyết định nghĩa vụ thuế; cơ quan thuế có quyền ấn định thuế nếu giao dịch không có bản chất kinh tế thực tế.",
        "impactNote": "Mọi hợp đồng thầu phụ, nhân công của Kiểu Việt phải chứng minh được công việc thực tế diễn ra tại công trường (nhật ký thi công, ảnh chụp, bảng chấm công)."
      },
      {
        "topic": "Trách nhiệm của Ngân hàng thương mại trong quản lý thuế",
        "type": "added",
        "oldRule": "Ngân hàng chỉ phong tỏa tài khoản khi có quyết định cưỡng chế bằng văn bản giấy từ cơ quan thuế.",
        "newRule": "Ngân hàng có trách nhiệm khấu trừ, nộp thay nghĩa vụ thuế của người nộp thuế theo Lệnh thu điện tử của cơ quan quản lý thuế và cung cấp dữ liệu tài khoản định kỳ.",
        "impactNote": "Kiểu Việt duy trì kế hoạch dòng tiền nộp thuế đúng hạn, tránh để phát sinh lệnh trích nợ tự động từ tài khoản ngân hàng."
      },
      {
        "topic": "Cơ chế Thỏa thuận trước về phương pháp xác định giá tính thuế (APA)",
        "type": "added",
        "oldRule": "Doanh nghiệp có giao dịch liên kết luôn đối mặt với rủi ro bị ấn định thuế hồi tố khi thanh tra.",
        "newRule": "Cho phép doanh nghiệp đề xuất ký Thỏa thuận trước về phương pháp xác định giá tính thuế (APA) với cơ quan thuế có thời hạn tối đa 3 năm.",
        "impactNote": "Tạo cơ sở pháp lý vững chắc cho các giao dịch liên kết của Kiểu Việt với các công ty con, công ty thành viên."
      }
    ]
  },
  "nd-126-2020": {
    "decreeId": "nd-126-2020",
    "title": "Nghị định 126/2020/NĐ-CP",
    "category": "Quản lý thuế",
    "compareWith": "Nghị định 83/2013/NĐ-CP",
    "summary": "Quy định chi tiết Luật Quản lý thuế: Tỷ lệ tạm nộp thuế TNDN 4 quý tối thiểu 80%, cơ chế phân bổ thuế xây dựng vãng lai ngoại tỉnh và các trường hợp không phải nộp hồ sơ khai thuế.",
    "items": [
      {
        "topic": "Tỷ lệ tạm nộp thuế TNDN 4 quý tối thiểu 80% số quyết toán năm",
        "type": "modified",
        "oldRule": "Quy định cũ (tại NĐ 126 ban đầu) yêu cầu tạm nộp 3 quý đầu năm không được thấp hơn 75% số thuế quyết toán năm (gây khó khăn lớn cho doanh nghiệp).",
        "newRule": "Sửa đổi (theo NĐ 91/2022 sửa đổi NĐ 126): Tổng số thuế TNDN đã tạm nộp của 4 quý không được thấp hơn 80% số thuế TNDN phải nộp theo quyết toán năm.",
        "impactNote": "Kiểu Việt chủ động ước tính lợi nhuận cả năm để tạm nộp đủ 80% thuế TNDN chậm nhất vào ngày 30/01 năm sau, tránh bị phạt tiền chậm nộp 0.03%/ngày."
      },
      {
        "topic": "Quy định phân bổ thuế GTGT công trình xây dựng ngoại tỉnh",
        "type": "modified",
        "oldRule": "Nộp thuế GTGT vãng lai 2% tại từng địa phương nơi thi công công trình và khấu trừ lại tại trụ sở chính.",
        "newRule": "Xác định rõ cơ chế phân bổ thuế GTGT cho địa bàn cấp tỉnh nơi có công trình xây dựng liên tỉnh hoặc ngoại tỉnh với tỷ lệ 1% trên doanh thu chưa thuế GTGT.",
        "impactNote": "Kế toán Kiểu Việt khai tờ khai phân bổ Phụ lục 01-6/GTGT nộp cho Kho bạc địa phương nơi thi công công trình hạ tầng chuẩn xác."
      },
      {
        "topic": "Các trường hợp không phải nộp hồ sơ khai thuế định kỳ",
        "type": "added",
        "oldRule": "Dù không phát sinh doanh thu hay tạm ngừng kinh doanh vẫn phải nộp tờ khai thuế trắng định kỳ hàng tháng/quý.",
        "newRule": "Người nộp thuế không phải nộp hồ sơ khai thuế trong thời gian tạm ngừng kinh doanh hợp pháp có văn bản thông báo hoặc doanh nghiệp chỉ có hoạt động không chịu thuế.",
        "impactNote": "Tiết kiệm thời gian lập hồ sơ khai báo định kỳ cho các chi nhánh dự án tạm dừng thi công của Kiểu Việt."
      },
      {
        "topic": "Trình tự các biện pháp cưỡng chế thi hành quyết định hành chính thuế",
        "type": "modified",
        "oldRule": "Các biện pháp cưỡng chế áp dụng rời rạc, chưa có thứ tự ưu tiên rõ ràng.",
        "newRule": "Quy định 7 biện pháp cưỡng chế áp dụng tuần tự: Trích tiền tài khoản -> Khấu trừ lương -> Ngừng làm thủ tục hải quan -> Ngừng sử dụng hóa đơn -> Kê biên tài sản -> Thu hồi nợ bên thứ ba -> Thu hồi Giấy phép kinh doanh.",
        "impactNote": "Kiểu Việt tuyệt đối không để công nợ thuế kéo dài quá 90 ngày để tránh bị áp dụng biện pháp cưỡng chế ngừng sử dụng hóa đơn."
      }
    ]
  },
  "tt-80-2021": {
    "decreeId": "tt-80-2021",
    "title": "Thông tư 80/2021/TT-BTC",
    "category": "Quản lý thuế & Mẫu biểu",
    "compareWith": "Thông tư 156/2013/TT-BTC",
    "summary": "Cẩm nang quy trình quản lý thuế chi tiết nhất hiện nay: Ban hành hệ thống tờ khai điện tử mới toàn diện (01/GTGT, 03/TNDN), hướng dẫn phân bổ số thuế phải nộp, hoàn thuế và thủ tục miễn giảm thuế.",
    "items": [
      {
        "topic": "Hệ thống biểu mẫu tờ khai thuế điện tử hoàn toàn mới",
        "type": "modified",
        "oldRule": "Áp dụng hệ thống mẫu biểu tờ khai cũ theo Thông tư 156/2013 có nhiều chỉ tiêu thủ công, chưa đồng bộ mã định danh.",
        "newRule": "Ban hành toàn bộ mẫu biểu mới: Tờ khai thuế GTGT Mẫu 01/GTGT (chuẩn chỉ tiêu [21] đến [43]), Tờ khai quyết toán TNDN Mẫu 03/TNDN kèm các phụ lục phân bổ chi tiết.",
        "impactNote": "Kiểu Việt cập nhật phần mềm kế toán theo đúng định dạng mẫu biểu của TT 80 để nộp tờ khai qua Cổng thuedientu.gdt.gov.vn không bị lỗi cấu trúc."
      },
      {
        "topic": "Phương pháp phân bổ nghĩa vụ thuế TNDN cho cơ sở phụ thuộc",
        "type": "modified",
        "oldRule": "Doanh nghiệp tự phân bổ số thuế TNDN theo tỷ lệ chi phí phát sinh tại từng chi nhánh.",
        "newRule": "Quy định nguyên tắc phân bổ thuế TNDN căn cứ theo tỷ lệ chi phí của từng cơ sở sản xuất, thi công trên tổng chi phí của toàn doanh nghiệp.",
        "impactNote": "Bảo đảm số thuế TNDN tạm nộp tại các tỉnh có công trường thi công của Kiểu Việt được cơ quan thuế chấp thuận thanh quyết toán."
      },
      {
        "topic": "Quy trình hoàn thuế GTGT điện tử (Phân loại hồ sơ hoàn thuế)",
        "type": "modified",
        "oldRule": "Hồ sơ hoàn thuế gửi bằng giấy, thời gian thẩm định và kiểm tra trước hoàn thuế kéo dài nhiều tháng.",
        "newRule": "100% hồ sơ hoàn thuế nộp trực tuyến; phân loại rõ ràng: Hoàn thuế trước, kiểm tra sau (thời hạn 6 ngày làm việc) vs Kiểm tra trước, hoàn thuế sau (thời hạn 40 ngày).",
        "impactNote": "Kiểu Việt duy trì hồ sơ kế toán vật tư dự án minh bạch để được áp dụng cơ chế hoàn thuế trước, thu hồi nhanh dòng tiền thuế GTGT dự án đầu tư."
      },
      {
        "topic": "Cơ chế bù trừ nghĩa vụ thuế tự động trên hệ thống TMS",
        "type": "added",
        "oldRule": "Khoản thuế nộp thừa tại chi nhánh tỉnh này không thể tự bù trừ cho khoản thuế còn nợ tại tỉnh khác.",
        "newRule": "Hệ thống Quản lý thuế tập trung (TMS) tự động bù trừ số tiền thuế nộp thừa của sắc thuế này cho sắc thuế khác hoặc nghĩa vụ thuế phát sinh kỳ sau.",
        "impactNote": "Kiểu Việt không còn lo lắng việc tiền thuế bị đọng vốn tại các địa phương vãng lai."
      }
    ]
  },
  "nd-125-2020": {
    "decreeId": "nd-125-2020",
    "title": "Nghị định 125/2020/NĐ-CP",
    "category": "Xử phạt vi phạm hành chính Thuế & Hóa đơn",
    "compareWith": "Nghị định 129/2013/NĐ-CP & 41/2018/NĐ-CP",
    "summary": "Bộ luật xử phạt hành chính về thuế và hóa đơn nghiêm khắc nhất: Tăng mạnh khung tiền phạt, phân loại mức phạt theo số ngày chậm nộp, áp dụng nguyên tắc phạt tiền đối với tổ chức gấp 2 lần cá nhân.",
    "items": [
      {
        "topic": "Nâng mức tiền phạt khai sai không dẫn đến thiếu số thuế",
        "type": "modified",
        "oldRule": "Khung tiền phạt cũ từ 1.000.000 đến 3.000.000 đồng đối với hành vi khai sai các chỉ tiêu trên tờ khai thuế.",
        "newRule": "Nâng khung phạt lên từ 5.000.000 đến 8.000.000 đồng; trường hợp có từ 2 tình tiết tăng nặng trở lên phạt tối đa đến 15.000.000 đồng.",
        "impactNote": "Kế toán Kiểu Việt phải rà soát tuyệt đối chính xác từng chỉ tiêu trên Tờ khai GTGT và TNDN, tránh lỗi bất cẩn làm phát sinh tiền phạt lớn."
      },
      {
        "topic": "Khung phạt tiền chậm nộp hồ sơ khai thuế theo số ngày vi phạm",
        "type": "modified",
        "oldRule": "Phạt chung chung từ 1 đến 5 triệu đồng mà không phân định rõ ràng các mốc thời gian vi phạm.",
        "newRule": "Chia 5 bậc xử phạt rõ ràng: 1-5 ngày có giảm nhẹ (Cảnh cáo); 1-30 ngày (2-5 triệu); 31-60 ngày (5-8 triệu); 61-90 ngày (8-15 triệu); trên 90 ngày có số thuế phải nộp (15-25 triệu đồng).",
        "impactNote": "Tuân thủ nghiêm ngặt Lịch nộp thuế của Kiểu Việt: Nộp tờ khai trước hạn ít nhất 1-2 ngày, tuyệt đối không để quá hạn sang ngày hôm sau."
      },
      {
        "topic": "Mức phạt đối với hành vi trốn thuế (từ 1 đến 3 lần số thuế trốn)",
        "type": "modified",
        "oldRule": "Chủ yếu phạt 1 lần số thuế trốn đối với vi phạm lần đầu.",
        "newRule": "Quy định thang phạt nghiêm ngặt: Phạt 1 lần (không có tình tiết tăng nặng); phạt 1.5 lần (có 1 tình tiết tăng nặng); phạt 2 lần; 2.5 lần và tối đa 3 lần số thuế trốn nếu tái phạm nhiều lần.",
        "impactNote": "Cảnh báo pháp lý nghiêm trọng: Mọi khoản chi phí thi công của Kiểu Việt phải bảo đảm có chứng từ hợp pháp, cấm tuyệt đối việc sử dụng hóa đơn khống."
      },
      {
        "topic": "Xử phạt hành vi lập hóa đơn không đúng thời điểm",
        "type": "added",
        "oldRule": "Chưa quy định chi tiết mức phạt riêng cho hành vi lập hóa đơn sai thời điểm đối với ngành xây dựng.",
        "newRule": "Phạt tiền từ 3.000.000 đến 5.000.000 đồng (nếu không làm chậm nghĩa vụ thuế); phạt từ 4.000.000 đến 8.000.000 đồng nếu lập sai thời điểm dẫn đến chậm nộp thuế.",
        "impactNote": "Kiểu Việt kiểm soát chặt chẽ: Ngày trên hóa đơn GTGT xuất ra phải trùng khớp hoàn toàn với ngày ký nghiệm thu A-B."
      },
      {
        "topic": "Biện pháp khắc phục hậu quả bắt buộc kèm theo tiền phạt",
        "type": "added",
        "oldRule": "Chủ yếu nộp phạt tiền hành chính, việc truy thu thuế thực hiện qua thông báo riêng.",
        "newRule": "Buộc nộp đủ số tiền thuế trốn, tiền thuế thiếu vào NSNN; buộc nộp tiền chậm nộp tính theo mức 0.03%/ngày trên số tiền thuế chậm nộp; buộc điều chỉnh lại sổ kế toán.",
        "impactNote": "Số tiền phạt và tiền chậm nộp không được tính vào chi phí hợp lý khi quyết toán thuế TNDN, gây thiệt hại trực tiếp vào lợi nhuận Kiểu Việt."
      }
    ]
  },
  "nd-41-2018": {
    "decreeId": "nd-41-2018",
    "title": "Nghị định 41/2018/NĐ-CP",
    "category": "Xử phạt vi phạm hành chính Kế toán & Kiểm toán",
    "compareWith": "Nghị định 105/2013/NĐ-CP",
    "summary": "Khung chế tài xử phạt hành vi vi phạm pháp luật kế toán: Tăng gấp 3 lần mức phạt tiền đối với hành vi làm sai lệch sổ sách, vi phạm chữ ký chứng từ và chậm nộp Báo cáo tài chính.",
    "items": [
      {
        "topic": "Phạt hành vi lập chứng từ không đầy đủ chữ ký hoặc ký khống",
        "type": "modified",
        "oldRule": "Phạt tiền từ 1.000.000 đến 3.000.000 đồng đối với chứng từ thiếu chữ ký theo NĐ 105.",
        "newRule": "Nâng mức phạt lên từ 5.000.000 đến 10.000.000 đồng; hành vi giả mạo chữ ký hoặc ký chứng từ khi chưa ghi đầy đủ nội dung phạt từ 20.000.000 đến 30.000.000 đồng.",
        "impactNote": "Kiểu Việt kiểm soát nghiêm ngặt: Phiếu thu, Phiếu chi, Phiếu kho phải có đầy đủ chữ ký sống hoặc chữ ký số của Thủ quỹ, Kế toán và Giám đốc trước khi giải ngân."
      },
      {
        "topic": "Xử phạt vi phạm về mở và ghi sổ kế toán doanh nghiệp",
        "type": "modified",
        "oldRule": "Mức phạt nhẹ từ 2 đến 5 triệu đồng, ít khi áp dụng biện pháp khắc phục hậu quả.",
        "newRule": "Phạt tiền từ 5.000.000 đến 10.000.000 đồng đối với hành vi mở sổ kế toán chậm hoặc không ghi sổ kịp thời; phạt từ 20.000.000 đến 30.000.000 đồng nếu để ngoài sổ kế toán tài sản công ty.",
        "impactNote": "Kế toán Kiểu Việt ghi nhận nghiệp vụ phát sinh hàng ngày trên phần mềm, cấm để dồn chứng từ thi công cuối quý mới nhập liệu."
      },
      {
        "topic": "Xử phạt vi phạm thời hạn nộp và công khai Báo cáo tài chính",
        "type": "modified",
        "oldRule": "Phạt từ 5 đến 10 triệu đồng nếu nộp chậm Báo cáo tài chính.",
        "newRule": "Phạt từ 10.000.000 đến 20.000.000 đồng nếu nộp chậm BCTC từ 1 đến 3 tháng; phạt từ 20.000.000 đến 30.000.000 đồng nếu nộp chậm trên 3 tháng; phạt đến 50.000.000 đồng nếu không nộp BCTC.",
        "impactNote": "Kiểu Việt luôn hoàn thành kiểm toán và nộp Báo cáo tài chính cho Cơ quan thuế, Cơ quan Thống kê và Sở KH&ĐT đúng hạn ngày 31/03."
      },
      {
        "topic": "Trách nhiệm bảo quản, lưu trữ tài liệu kế toán",
        "type": "added",
        "oldRule": "Chưa quy định mức phạt đối với việc để mất chứng từ kế toán trong thời hạn lưu trữ.",
        "newRule": "Phạt tiền từ 10.000.000 đến 20.000.000 đồng đối với hành vi làm mất mát, hư hỏng tài liệu kế toán trong thời hạn lưu trữ bắt buộc (10 năm).",
        "impactNote": "Kiểu Việt thực hiện sao lưu dữ liệu kế toán đám mây định kỳ hàng tuần và đóng tập chứng từ giấy vào tủ chống ẩm, chống cháy an toàn."
      }
    ]
  },
  "nd-132-2020": {
    "decreeId": "nd-132-2020",
    "title": "Nghị định 132/2020/NĐ-CP",
    "category": "Giao dịch liên kết & Quản lý thuế",
    "compareWith": "Nghị định 20/2017/NĐ-CP & 68/2020/NĐ-CP",
    "summary": "Quy định cốt tử về Quản lý thuế đối với doanh nghiệp có giao dịch liên kết: Khống chế trần chi phí lãi vay (EBITDA 30%), mở rộng định nghĩa bên liên kết qua quan hệ bảo lãnh tín dụng và nghĩa vụ kê khai 4 phụ lục giao dịch liên kết.",
    "items": [
      {
        "topic": "Mức trần khống chế chi phí lãi vay được trừ (Trần EBITDA 30%)",
        "type": "modified",
        "oldRule": "Nghị định 20/2017 khống chế trần lãi vay ở mức 20% EBITDA, sau đó Nghị định 68 nâng lên 30% nhưng chưa cho phép chuyển chi phí lãi vay vượt trần.",
        "newRule": "Áp dụng trần khống chế 30% tổng lợi nhuận thuần từ hoạt động kinh doanh cộng chi phí lãi vay và chi phí khấu hao (EBITDA); cho phép chuyển chi phí lãi vay vượt trần sang 5 năm tiếp theo.",
        "impactNote": "Kiểu Việt tối ưu hóa cơ cấu vốn vay: Cân đối chi phí lãi vay ngân hàng phục vụ thi công công trình không vượt quá ngưỡng 30% EBITDA để được tính toàn bộ vào chi phí hợp lý."
      },
      {
        "topic": "Tiêu chí xác định quan hệ liên kết qua bảo lãnh và cho vay nợ",
        "type": "modified",
        "oldRule": "Chỉ tính quan hệ liên kết khi có góp vốn trực tiếp hoặc quan hệ gia đình trực hệ giữa các cổ đông sáng lập.",
        "newRule": "Mở rộng quan hệ liên kết: Một doanh nghiệp bảo lãnh hoặc cho một doanh nghiệp khác vay vốn dưới bất kỳ hình thức nào với điều kiện khoản vốn vay ít nhất bằng 25% vốn góp chủ sở hữu và chiếm trên 50% tổng dư nợ.",
        "impactNote": "Rất nhiều doanh nghiệp xây dựng vô tình trở thành bên liên kết với ngân hàng thương mại hoặc đối tác bảo lãnh; Kiểu Việt phải rà soát kỹ tiêu chí này để kê khai đúng."
      },
      {
        "topic": "Bắt buộc nộp 4 Phụ lục thông tin giao dịch liên kết kèm tờ khai",
        "type": "added",
        "oldRule": "Chỉ nộp báo cáo giao dịch liên kết khi có yêu cầu thanh tra kiểm tra của cơ quan thuế.",
        "newRule": "Bắt buộc phải kê khai và nộp đồng thời 4 Phụ lục (Mục I, II, III, IV) cùng Tờ khai quyết toán thuế TNDN Mẫu 03/TNDN chậm nhất vào ngày 31/03.",
        "impactNote": "Kế toán Kiểu Việt tuyệt đối không quên nộp Phụ lục giao dịch liên kết để tránh bị phạt vi phạm hành chính và bị ấn định thuế."
      },
      {
        "topic": "Các trường hợp được miễn kê khai, miễn lập Hồ sơ xác định giá liên kết",
        "type": "added",
        "oldRule": "Mọi doanh nghiệp có quan hệ liên kết đều bắt buộc phải lập Hồ sơ xác định giá chuyển nhượng (Local file/Master file) tốn kém hàng trăm triệu đồng.",
        "newRule": "Miễn lập Hồ sơ nếu: Doanh thu dưới 50 tỷ đồng và tổng giá trị giao dịch liên kết dưới 30 tỷ đồng; hoặc ký thỏa thuận APA; hoặc chỉ kinh doanh trong nước với mức thuế suất bằng nhau.",
        "impactNote": "Kiểu Việt tận dụng các điều kiện miễn lập hồ sơ để tiết kiệm chi phí tư vấn mà vẫn bảo đảm tuân thủ 100% luật thuế."
      }
    ]
  },
  "nd-174-2016": {
    "decreeId": "nd-174-2016",
    "title": "Nghị định 174/2016/NĐ-CP",
    "category": "Hướng dẫn Luật Kế toán",
    "compareWith": "Nghị định 128/2004/NĐ-CP",
    "summary": "Hướng dẫn chi tiết thi hành một số điều của Luật Kế toán: Tiêu chuẩn bổ nhiệm Kế toán trưởng, đối tượng không được làm kế toán, quy định niêm phong tài liệu và trách nhiệm của người đại diện pháp luật.",
    "items": [
      {
        "topic": "Tiêu chuẩn và điều kiện bắt buộc để bổ nhiệm Kế toán trưởng",
        "type": "modified",
        "oldRule": "Quy định tiêu chuẩn kế toán trưởng chung chung, chưa bắt buộc chứng chỉ bồi dưỡng kế toán trưởng thống nhất.",
        "newRule": "Kế toán trưởng phải có phẩm chất đạo đức, chứng chỉ bồi dưỡng KTT, chuyên môn tài chính kế toán từ đại học trở lên và có ít nhất 2 năm công tác kế toán thực tế.",
        "impactNote": "Kiểu Việt ban hành Quyết định bổ nhiệm Kế toán trưởng đáp ứng đủ tiêu chuẩn pháp lý, nộp thông báo cho Cơ quan thuế và Ngân hàng giao dịch."
      },
      {
        "topic": "Quy định những người không được làm kế toán trong doanh nghiệp",
        "type": "added",
        "oldRule": "Chưa quy định chặt chẽ về quan hệ thân thuộc giữa người quản lý điều hành và người làm kế toán.",
        "newRule": "Bố đẻ, mẹ đẻ, vợ, chồng, con đẻ, anh chị em ruột của người đại diện theo pháp luật, của Chủ tịch HĐQT, Giám đốc không được làm Kế toán trưởng hoặc Thủ quỹ tại cùng một doanh nghiệp.",
        "impactNote": "Kiểu Việt bố trí nhân sự kế toán độc lập, khách quan, tránh các mối quan hệ gia đình trực hệ để phòng ngừa xung đột lợi ích nội bộ."
      },
      {
        "topic": "Quy trình niêm phong và mở niêm phong tài liệu kế toán",
        "type": "added",
        "oldRule": "Chưa có quy trình chuẩn khi cơ quan điều tra, thanh tra tạm giữ chứng từ sổ sách kế toán.",
        "newRule": "Quy định biên bản niêm phong tài liệu kế toán bắt buộc phải có chữ ký của người đại diện pháp luật, kế toán trưởng và đại diện cơ quan niêm phong kèm theo bảng kê chi tiết.",
        "impactNote": "Kiểu Việt bảo vệ quyền lợi hợp pháp của công ty khi cơ quan chức năng tiến hành thanh tra, kiểm tra thực tế."
      },
      {
        "topic": "Trách nhiệm liên đới của Người đại diện theo pháp luật",
        "type": "modified",
        "oldRule": "Kế toán trưởng chịu trách nhiệm chính về mọi sai sót sổ sách kế toán của doanh nghiệp.",
        "newRule": "Người đại diện theo pháp luật của doanh nghiệp chịu trách nhiệm tối cao và liên đới đối với tính trung thực, chính xác và đầy đủ của toàn bộ Báo cáo tài chính.",
        "impactNote": "Ban Giám đốc Kiểu Việt định kỳ họp duyệt cùng bộ phận kế toán để nắm chắc số liệu tài chính trước khi ký duyệt BCTC nộp ra ngoài."
      }
    ]
  }
};
