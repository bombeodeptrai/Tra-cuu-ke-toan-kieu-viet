// 8 Kịch Bản Phản Biện Thực Chiến & Kho Tri Thức Đối Đáp Thanh Tra Thuế Kiểu Việt
// Doanh nghiệp: CÔNG TY CỔ PHẦN KIỂU VIỆT (Gia Lai)

export interface DefenseScenario {
  id: string;
  title: string;
  category: string;
  threat: string;
  decreeId: string;
  articleNum: number;
  decreeLabel: string;
  legalReference: string;
  keyArguments: string[];
  requiredDossiers: string[];
  dialogueScript: string;
}

export const DEFENSE_SCENARIOS: DefenseScenario[] = [
  {
    "id": "kb-01",
    "title": "Đoàn kiểm tra đòi bóc chi phí gỗ xẻ & sơn PU xưởng mộc do nghi ngờ hao hụt mùn cưa cao",
    "category": "Gỗ & Nội thất",
    "threat": "Đoàn kiểm tra cho rằng tỷ lệ hao hụt mùn cưa, dăm bào 20.6% của xưởng mộc Kiểu Việt là quá cao so với mức thông thường (10-12%), dự kiến loại 1.8 tỷ đồng chi phí gỗ nguyên liệu và sơn PU.",
    "decreeId": "tt-96-2015",
    "articleNum": 4,
    "decreeLabel": "Thông tư 96/2015/TT-BTC — Điều 4 K2.3",
    "legalReference": "Khoản 2.3 Điều 4 Thông tư 96/2015/TT-BTC; Chuẩn mực Kế toán số 02 (VAS 02 - Hàng tồn kho); Thông tư 200/2014/TT-BTC & Thông tư 99/2025/TT-BTC",
    "keyArguments": [
      "Căn cứ Khoản 2.3 Điều 4 Thông tư 96/2015/TT-BTC: Pháp luật thuế trao quyền cho doanh nghiệp tự xây dựng và quản lý định mức tiêu hao nguyên liệu, vật liệu từ đầu năm tài chính và lưu tại trụ sở, không phải đăng ký hay nộp cho cơ quan thuế.",
      "Sản phẩm nội thất của Kiểu Việt là hàng đặt đóng theo thiết kế kiến trúc riêng biệt (bàn họp oval, vách ốp lượn sóng, tủ văn phòng góc cong), phôi thô phải qua nhiều công đoạn xẻ rong, bào 4 mặt, tạo mộng và chà nhám nên tỷ lệ hao hụt kỹ thuật 18% - 22% là hoàn toàn tất yếu theo Quyết định định mức số 02/QĐ-KV/2024.",
      "Toàn bộ phế liệu mùn cưa, dăm bào, đầu mẩu thu hồi đều được thu gom vào silo và định kỳ xuất bán cho các cơ sở sản xuất viên nén năng lượng, có hóa đơn GTGT đầy đủ và hạch toán vào TK 711 nộp thuế TNDN 20% đúng luật."
    ],
    "requiredDossiers": [
      "Quyết định số 02/QĐ-KV/2024 ban hành Hệ thống Định mức Kinh tế - Kỹ thuật xưởng mộc từ đầu năm 2024.",
      "Bản vẽ thiết kế kỹ thuật chi tiết (Shop drawing) và Bảng bóc tách khối lượng vật tư (BOM) từng đơn hàng.",
      "Lệnh sản xuất xưởng mộc, Phiếu xuất kho nguyên liệu gỗ xẻ TK 152 và Thẻ tính giá thành sản phẩm TK 154/155.",
      "Bảng tổng hợp nhập - xuất phế liệu mùn cưa và 12 hóa đơn GTGT xuất bán phế liệu thu hồi ghi nhận TK 711."
    ],
    "dialogueScript": "Thưa Trưởng đoàn, căn cứ Khoản 2.3 Điều 4 Thông tư 96/2015/TT-BTC, định mức vật tư do DN tự ban hành và chịu trách nhiệm. Kiểu Việt sản xuất nội thất mỹ nghệ cao cấp từ gỗ tự nhiên nguyên khối, không phải gỗ công nghiệp cắt phẳng đại trà. Định mức này đã được Tổng Giám đốc duyệt từ ngày 05/01/2024 trước khi sản xuất. Hơn nữa, toàn bộ phế liệu mùn cưa thu hồi chúng tôi đều xuất hóa đơn bán thu tiền và đã kê khai nộp thuế TNDN trên TK 711 đầy đủ, không hề làm giảm nghĩa vụ thuế đối với Nhà nước."
  },
  {
    "id": "kb-02",
    "title": "Đoàn kiểm tra soi định mức cấp phối bê tông thương phẩm & đòi bóc chi phí hao hụt xe bồn 2.0%",
    "category": "Bê tông thương phẩm",
    "threat": "Kiểm tra viên nghi ngờ trạm trộn Kiểu Việt gian lận xi măng hoặc tính trùng chi phí hao hụt xe bồn và trạm trộn (2.0%), dọa xuất toán 1.4 tỷ đồng giá vốn bê tông năm 2024.",
    "decreeId": "tt-96-2015",
    "articleNum": 4,
    "decreeLabel": "Thông tư 96/2015/TT-BTC — Điều 4",
    "legalReference": "Tiêu chuẩn Quốc gia TCVN 9382:2012; Thông tư 12/2021/TT-BXD của Bộ Xây dựng; Khoản 2.3 Điều 4 Thông tư 96/2015/TT-BTC",
    "keyArguments": [
      "Cấp phối bê tông của Trạm trộn Kiểu Việt (M200, M250, M300, M350) hoàn toàn dựa trên Thiết kế cấp phối của Phòng thí nghiệm chuyên ngành xây dựng LAS-XD 124, sử dụng xi măng PCB40 Sông Gianh và đá dăm mỏ Kiểu Việt.",
      "Theo Bảng 2 Phụ lục II Thông tư 12/2021/TT-BXD của Bộ Xây dựng: Định mức hao hụt bê tông thương phẩm trong khâu vận chuyển bằng xe bồn và bơm cần vào khối đổ cho phép từ 1.5% đến 2.5%. Với địa hình đồi dốc Gia Lai cự ly vận chuyển 15 - 35km, mức hao hụt 2.0% là hoàn toàn hợp lý.",
      "Toàn bộ các mẻ bê tông xuất xưởng đều được nghiệm thu bằng kết quả nén mẫu R28 đạt từ 102% - 115% mác thiết kế, chứng minh 100% lượng xi măng và cốt liệu đã được đưa vào sản xuất thực tế."
    ],
    "requiredDossiers": [
      "Bảng thiết kế cấp phối bê tông chuẩn của Phòng thí nghiệm LAS-XD được Chủ đầu tư phê duyệt.",
      "Nhật ký mẻ trộn tự động trích xuất từ phần mềm điều khiển PLC trạm trộn (ghi nhận kg xi măng, cát, đá, nước, phụ gia).",
      "Giấy chứng nhận kiểm định trạm cân điện tử tự động của Chi cục Tiêu chuẩn Đo lường Chất lượng Gia Lai.",
      "Phiếu giao nhận bê tông thương phẩm ký nhận tại chân công trình và Phiếu kết quả thử nghiệm nén mẫu R28."
    ],
    "dialogueScript": "Thưa Đoàn kiểm tra, tỷ lệ hao hụt bê tông 2.0% của chúng tôi nằm hoàn toàn trong khung cho phép 1.5% - 2.5% theo Thông tư 12/2021/TT-BXD của Bộ Xây dựng. Địa bàn Gia Lai đường đồi dốc, cự ly vận chuyển xa nên dính bám thùng quay là yếu tố bất khả kháng. Đặc biệt, kết quả nén mẫu R28 độc lập của Trung tâm Kiểm định Gia Lai cho thấy 100% mẻ đổ đều đạt và vượt mác, chứng minh chúng tôi dùng đủ xi măng cốt liệu thật, kính đề nghị đoàn không xuất toán khoản này."
  },
  {
    "id": "kb-03",
    "title": "Đoàn kiểm tra đòi xuất toán chi phí trích trước TK 335 công trình xây lắp đã hoàn thành bàn giao",
    "category": "Xây dựng & Chi phí trích trước",
    "threat": "Tại ngày 31/12, công trình đã bàn giao ghi nhận doanh thu nhưng thầu phụ chưa kịp xuất hóa đơn, Kiểu Việt trích trước 2.15 tỷ đồng vào TK 335. Đoàn kiểm tra dọa loại toàn bộ khoản này khỏi chi phí được trừ.",
    "decreeId": "tt-96-2015",
    "articleNum": 4,
    "decreeLabel": "Thông tư 96/2015/TT-BTC — Điều 4 K2.20",
    "legalReference": "Điểm 2.20 Khoản 2 Điều 4 Thông tư 96/2015/TT-BTC; Chuẩn mực Kế toán số 01 (VAS 01); Chuẩn mực Kế toán số 14 (VAS 14)",
    "keyArguments": [
      "Điểm 2.20 Khoản 2 Điều 4 Thông tư 96/2015/TT-BTC nêu rõ: Đối với hoạt động xây dựng đã ghi nhận doanh thu thì ĐƯỢC PHÉP TRÍCH TRƯỚC GIÁ VỐN tương ứng với doanh thu đã ghi nhận theo nguyên tắc phù hợp.",
      "Công trình đường Chư Prông và dự án nội thất trường học đã bàn giao A-B đưa vào sử dụng trong tháng 12 và đã kê khai 100% vào Doanh thu tính thuế TNDN năm 2024. Nếu loại trừ chi phí trích trước giá vốn sẽ vi phạm nghiêm trọng nguyên tắc phù hợp của Luật Kế toán và Chuẩn mực VAS 01.",
      "Toàn bộ hóa đơn GTGT của các thầu phụ đã được phát hành và nhận đầy đủ trong tháng 1, tháng 2 năm tiếp theo, TRƯỚC THỜI HẠN NỘP HỒ SƠ QUYẾT TOÁN THUẾ TNDN (31/03) kèm theo UNC chuyển khoản ngân hàng."
    ],
    "requiredDossiers": [
      "Biên bản nghiệm thu hoàn thành bàn giao đưa vào sử dụng A-B với Chủ đầu tư trong năm tính thuế.",
      "Hợp đồng giao thầu phụ kèm Biên bản nghiệm thu khối lượng hoàn thành giai đoạn giữa Kiểu Việt và thầu phụ.",
      "Bảng tính chi tiết giá vốn trích trước theo dự toán kỹ thuật tương ứng khối lượng đã bàn giao.",
      "Hóa đơn điện tử của thầu phụ phát hành trước ngày 31/03 năm tiếp theo và Ủy nhiệm chi thanh toán qua ngân hàng."
    ],
    "dialogueScript": "Kính thưa Trưởng đoàn, theo Điểm 2.20 Khoản 2 Điều 4 Thông tư 96/2015/TT-BTC, hoạt động xây dựng đã ghi nhận doanh thu thì bắt buộc phải trích trước giá vốn tương ứng. Chúng tôi đã kê khai toàn bộ 16.8 tỷ doanh thu của 2 công trình này vào năm 2024. Đồng thời, toàn bộ 3 nhà thầu phụ đã xuất hóa đơn cho Kiểu Việt trước ngày 31/03/2025, trước khi nộp tờ khai quyết toán thuế TNDN. Đây là chi phí thực tế có đầy đủ hóa đơn, chứng từ thanh toán ngân hàng, kính đề nghị Đoàn công nhận chi phí được trừ theo đúng quy định."
  },
  {
    "id": "kb-04",
    "title": "Đoàn kiểm tra đòi truy thu 10% thuế TNCN và phạt chậm nộp đối với nhân công thời vụ xưởng mộc & trạm trộn",
    "category": "Thuế TNCN & Lao động",
    "threat": "Đoàn kiểm tra cho rằng các khoản chi trả tiền công cho 32 thợ mộc thời vụ và nhân công đổ bê tông (tổng 840 triệu) phải khấu trừ 10% tại nguồn, đòi truy thu 84 triệu và phạt hành chính.",
    "decreeId": "tt-111-2013",
    "articleNum": 25,
    "decreeLabel": "Thông tư 111/2013/TT-BTC — Điều 25",
    "legalReference": "Điểm i Khoản 1 Điều 25 Thông tư 111/2013/TT-BTC; Mẫu 08/CK-TNCN Thông tư 80/2021/TT-BTC; Nghị định 125/2020/NĐ-CP",
    "keyArguments": [
      "Căn cứ Điểm i Khoản 1 Điều 25 Thông tư 111/2013/TT-BTC: Cá nhân có thu nhập từ 2 triệu đồng/lần trở lên nhưng chỉ có duy nhất thu nhập tại Kiểu Việt và ước tính tổng thu nhập trong năm chưa đến mức phải nộp thuế (dưới 132 triệu/năm sau giảm trừ gia cảnh) thì được làm Cam kết Mẫu 08/CK-TNCN để tạm thời không khấu trừ 10%.",
      "100% trong số 32 lao động thời vụ đều ĐÃ CÓ MÃ SỐ THUẾ CÁ NHÂN trước thời điểm lập bản cam kết theo đúng quy định bắt buộc.",
      "Công ty Kiểu Việt đã tổng hợp danh sách đầy đủ 32 cá nhân này vào Phụ lục 05-2/BK-QTT-TNCN của Tờ khai quyết toán thuế TNCN năm 2024 nộp cho cơ quan thuế, không che giấu bất kỳ thông tin nào."
    ],
    "requiredDossiers": [
      "Hợp đồng giao khoán công việc theo vụ việc hoặc Hợp đồng lao động thời vụ dưới 03 tháng.",
      "Bản cam kết Mẫu 08/CK-TNCN ban hành theo Thông tư 80/2021/TT-BTC kèm bản sao CCCD gắn chip.",
      "Bảng tra cứu mã số thuế cá nhân của 32 lao động trên hệ thống Thuế điện tử trước ngày ký cam kết.",
      "Bảng chấm công, Bảng thanh toán tiền lương có chữ ký nhận tiền thực tế của người lao động và Phụ lục 05-2/BK-QTT-TNCN."
    ],
    "dialogueScript": "Thưa Đoàn kiểm tra, căn cứ Điểm i Khoản 1 Điều 25 Thông tư 111/2013/TT-BTC, doanh nghiệp căn cứ vào Cam kết Mẫu 08/CK-TNCN của người lao động để tạm thời chưa khấu trừ 10% thuế TNCN. Toàn bộ 32 lao động này đều có MST cá nhân hợp lệ trước ngày ký cam kết, có CCCD đầy đủ và Kiểu Việt đã kê khai quyết toán minh bạch trên phụ lục 05-2/BK. Người lao động chịu trách nhiệm trước pháp luật về tính trung thực của cam kết. Doanh nghiệp thực hiện đúng vai trò tổ chức chi trả theo luật định, không có căn cứ để truy thu thuế TNCN đối với doanh nghiệp."
  },
  {
    "id": "kb-05",
    "title": "Đoàn kiểm tra khống chế chi phí lãi vay vượt trần 30% EBITDA theo Nghị định 132/2020 do mượn tiền giám đốc/cổ đông",
    "category": "Giao dịch liên kết & Lãi vay",
    "threat": "Kiểm tra viên nhận định Kiểu Việt mượn tiền Giám đốc trên 10% vốn chủ sở hữu cấu thành giao dịch liên kết theo Điểm l Khoản 2 Điều 5 NĐ 132/2020, dự kiến loại 650 triệu lãi vay ngân hàng vượt 30% EBITDA.",
    "decreeId": "nd-132-2020",
    "articleNum": 16,
    "decreeLabel": "Nghị định 132/2020/NĐ-CP — Điều 16",
    "legalReference": "Điều 5, Điều 16 Nghị định 132/2020/NĐ-CP; Nghị định 20/2017/NĐ-CP; Thông tư 96/2015/TT-BTC",
    "keyArguments": [
      "Rà soát bản chất quan hệ mượn tiền: Kiểm tra số dư tài khoản vay mượn cá nhân Giám đốc/cổ đông. Nếu là khoản mượn tiền không tính lãi (lãi suất 0%) phục vụ lưu động đột xuất của công ty thì cần phân tích xem có thỏa mãn điều kiện \"vay nợ ít nhất bằng 10% vốn góp và chiếm trên 50% tổng các khoản nợ\" hay không.",
      "Nếu bắt buộc phải áp dụng trần 30% EBITDA theo Khoản 3 Điều 16 Nghị định 132/2020/NĐ-CP: Phần chi phí lãi vay không được trừ (650 triệu) ĐƯỢC CHUYỂN TIẾP SANG KỲ TÍNH THUẾ TIẾP THEO trong thời gian không quá 05 năm liên tục kể từ năm tiếp sau năm phát sinh.",
      "Đảm bảo lập đầy đủ Phụ lục I (Thông tin về quan hệ liên kết và giao dịch liên kết) nộp kèm Tờ khai quyết toán TNDN để không bị xử phạt vi phạm hành chính về kê khai giao dịch liên kết."
    ],
    "requiredDossiers": [
      "Hợp đồng vay mượn tiền cá nhân Giám đốc/cổ đông (nêu rõ điều khoản lãi suất, kỳ hạn hoàn trả).",
      "Báo cáo tài chính năm đã kiểm toán / Bảng cân đối tài khoản chi tiết TK 3411, TK 3388, TK 112.",
      "Bảng tính EBITDA chi tiết theo công thức Điều 16 NĐ 132/2020: Lợi nhuận thuần HĐKD + Chi phí lãi vay + Khấu hao TSCĐ.",
      "Phụ lục kê khai giao dịch liên kết Mẫu 01 ban hành kèm theo Nghị định 132/2020/NĐ-CP."
    ],
    "dialogueScript": "Thưa Đoàn kiểm tra, chúng tôi thống nhất quan điểm xác định giao dịch liên kết theo Nghị định 132/2020/NĐ-CP. Tuy nhiên, căn cứ Điểm b Khoản 3 Điều 16 Nghị định 132/2020/NĐ-CP, phần chi phí lãi vay không được trừ vượt trần 30% EBITDA được chuyển sang kỳ tính thuế tiếp theo khi xác định tổng chi phí lãi vay được trừ của 5 năm liên tục tiếp theo. Kính đề nghị Đoàn kiểm tra ghi nhận số liệu 650 triệu này vào mục chi phí lãi vay được chuyển tiếp sang các năm sau, không ấn định xem đây là khoản chi phí bị xuất toán vĩnh viễn."
  },
  {
    "id": "kb-06",
    "title": "Đoàn kiểm tra Cục Thuế Gia Lai đòi truy thu thuế GTGT đối với công trình xây lắp ngoại tỉnh đã nộp vãng lai 1%",
    "category": "Kê khai & Phân bổ thuế",
    "threat": "Đoàn kiểm tra cho rằng Kiểu Việt bù trừ chỉ tiêu [39] thuế vãng lai đã nộp tại Kon Tum sai quy định hoặc hợp đồng lắp đặt nội thất tại Đắk Lắk chưa nộp thuế vãng lai.",
    "decreeId": "tt-80-2021",
    "articleNum": 13,
    "decreeLabel": "Thông tư 80/2021/TT-BTC — Điều 13",
    "legalReference": "Điều 12, Điều 13 Thông tư 80/2021/TT-BTC; Nghị định 126/2020/NĐ-CP; Luật Quản lý thuế số 38/2019/QH14",
    "keyArguments": [
      "Căn cứ Điểm c Khoản 1 Điều 13 Thông tư 80/2021/TT-BTC: Công ty xây dựng độc lập tại Kon Tum đã kê khai Tờ khai 05/GTGT và nộp 1% doanh thu vào KBNN Kon Tum. Số thuế này được bù trừ hợp pháp vào nghĩa vụ thuế GTGT phải nộp tại trụ sở chính Gia Lai trên chỉ tiêu [39] của Tờ khai 01/GTGT.",
      "Đối với hợp đồng nội thất tại Đắk Lắk: Bản chất hợp đồng là Mua bán hàng hóa kèm dịch vụ kê đặt hoàn thiện đơn thuần (sản xuất sẵn tại nhà máy Gia Lai rồi mang đến lắp đặt). Theo Điều 13 Thông tư 80, hoạt động bán hàng hóa này KHÔNG THUỘC DIỆN XÂY DỰNG VÃNG LAI 1%, mà kê khai và nộp thuế 100% tại Cục Thuế Gia Lai.",
      "Nếu Cục Thuế Gia Lai đòi truy thu hoặc không cho bù trừ thì sẽ dẫn đến việc đánh thuế trùng hai lần trên cùng một doanh thu phát sinh."
    ],
    "requiredDossiers": [
      "Hợp đồng kinh tế và Bảng phân tích phạm vi công việc (Xây lắp độc lập vs Bán hàng lắp đặt nội thất).",
      "Giấy nộp tiền vào NSNN tại KBNN Kon Tum (có chữ ký, dấu mộc xác nhận ngân hàng/KBNN).",
      "Tờ khai thuế GTGT Mẫu 05/GTGT đã nộp thành công qua mạng cho Cục Thuế tỉnh Kon Tum.",
      "Bảng kê chứng từ nộp thuế vãng lai ngoại tỉnh đối chiếu khớp đúng với Chỉ tiêu [39] trên Tờ khai 01/GTGT tại Gia Lai."
    ],
    "dialogueScript": "Kính thưa Trưởng đoàn, căn cứ Điều 13 Thông tư 80/2021/TT-BTC, khoản thuế 54 triệu nộp tại Kon Tum là hoạt động xây lắp độc lập, có Giấy nộp tiền KBNN đầy đủ và chúng tôi bù trừ chỉ tiêu [39] tại Gia Lai là hoàn toàn chuẩn xác theo mẫu biểu của Bộ Tài chính. Còn dự án nội thất Đắk Lắk là hàng hóa đóng sẵn tại xưởng Gia Lai đem giao, toàn bộ tiền thuế GTGT đã nộp đủ 100% cho Cục Thuế Gia Lai chúng ta, không gây thất thoát bất kỳ đồng thuế nào cho tỉnh nhà."
  },
  {
    "id": "kb-07",
    "title": "Đoàn kiểm tra rà soát hóa đơn bên bán có dấu hiệu rủi ro cao / bỏ trốn khỏi địa chỉ kinh doanh sau ngày giao dịch",
    "category": "Hóa đơn & Rủi ro nhà cung cấp",
    "threat": "Đoàn kiểm tra thông báo 02 nhà cung cấp cát, đá, xi măng của Kiểu Việt đã bị cơ quan thuế thông báo ngừng hoạt động/bỏ trốn trong năm 2025, yêu cầu giải trình và đòi loại 920 triệu chi phí kèm phạt 20%.",
    "decreeId": "nd-123-2020",
    "articleNum": 34,
    "decreeLabel": "Nghị định 123/2020/NĐ-CP — Điều 34",
    "legalReference": "Điều 34 Nghị định 123/2020/NĐ-CP; Công văn 1798/TCT-TTKT ngày 16/05/2023 của Tổng cục Thuế; Điều 4 Thông tư 96/2015/TT-BTC",
    "keyArguments": [
      "Căn cứ Công văn 1798/TCT-TTKT và hướng dẫn của Bộ Tài chính: Không mặc định xuất toán chi phí và khấu trừ thuế GTGT đối với hóa đơn của doanh nghiệp bỏ trốn nếu giao dịch mua bán là có thật và diễn ra trước thời điểm cơ quan thuế ban hành thông báo người nộp thuế không hoạt động tại địa chỉ đăng ký.",
      "Tại thời điểm Kiểu Việt ký hợp đồng và nhận hóa đơn điện tử: Nhà cung cấp đang hoạt động bình thường, hóa đơn có mã hợp lệ của cơ quan thuế trên hệ thống Hóa đơn điện tử quốc gia.",
      "Doanh nghiệp có đầy đủ bộ hồ sơ 5 bước chứng minh giao dịch mua bán có thật: Hợp đồng mua bán, Phiếu cân xe tải tại trạm cân, Phiếu nhập kho vật tư, Biên bản giao nhận vật tư tại hiện trường công trình và Ủy nhiệm chi chuyển khoản qua ngân hàng từ tài khoản công ty Kiểu Việt."
    ],
    "requiredDossiers": [
      "Ảnh chụp tra cứu trạng thái người nộp thuế của bên bán tại thời điểm ký hợp đồng và xuất hóa đơn (trạng thái: Đang hoạt động).",
      "Hóa đơn điện tử định dạng XML gốc có mã cơ quan thuế tra cứu khớp đúng trên hệ thống hoadondientu.gdt.gov.vn.",
      "Hợp đồng mua bán nguyên vật liệu, Phiếu cân trạm cân điện tử, Phiếu nhập kho TK 152 và Nhật ký công trình sử dụng vật tư.",
      "Chứng từ thanh toán qua ngân hàng (Ủy nhiệm chi, Sổ phụ ngân hàng có dấu xác nhận) vào đúng số tài khoản bên bán đăng ký với cơ quan thuế."
    ],
    "dialogueScript": "Thưa Đoàn kiểm tra, căn cứ Công văn 1798/TCT-TTKT của Tổng cục Thuế, tại thời điểm xuất hóa đơn năm 2024, nhà cung cấp hoàn toàn hoạt động bình thường và hóa đơn đã được cấp mã xác thực hợp lệ trên cổng hóa đơn điện tử quốc gia. Việc họ ngừng hoạt động vào cuối năm 2025 là việc phát sinh sau đó mà bên mua không thể biết trước. Kiểu Việt có đầy đủ Phiếu cân trạm cân, Phiếu nhập kho và toàn bộ số cát đá này đã đổ vào mố cầu công trình giao thông có biên bản nghiệm thu A-B, thanh toán 100% qua ngân hàng. Kính đề nghị đoàn kiểm tra xác nhận giao dịch có thật và chấp nhận chi phí theo quy định."
  },
  {
    "id": "kb-08",
    "title": "Đoàn kiểm tra truy thu Thuế Tài nguyên & Phí BVMT do đối chiếu sản lượng đá nổ mìn và đá dăm thành phẩm",
    "category": "Khoáng sản & Mỏ đá Gia Lai",
    "threat": "Kiểm tra viên cho rằng sản lượng đá thành phẩm bán ra (140.000 m³) cao hơn khối lượng nguyên khai nổ mìn kê khai thuế (112.500 m³), dọa ấn định sản lượng và truy thu tiền thuế theo Quyết định 87/2025/QĐ-UBND Gia Lai.",
    "decreeId": "qd-87-2025-gialai",
    "articleNum": 1,
    "decreeLabel": "Quyết định 87/2025/QĐ-UBND Gia Lai",
    "legalReference": "Quyết định 87/2025/QĐ-UBND của UBND tỉnh Gia Lai; Nghị định 27/2023/NĐ-CP; Thông tư 152/2015/TT-BTC; Luật Địa chất và Khoáng sản số 54/2024/QH15",
    "keyArguments": [
      "Chênh lệch giữa số khối nổ mìn nguyên khối và đá thành phẩm rời là do ĐẶC ĐIỂM CƠ LÝ NỞ RỜI CỦA ĐẤT ĐÁ KHI ĐẬP VỠ. Căn cứ Hồ sơ Thiết kế cơ sở mỏ đá Kiểu Việt do Viện KHCN Mỏ lập và được Sở Xây dựng Gia Lai thẩm định, hệ số nở rời đá nổ mìn qua nghiền sàng dao động từ 1.20 đến 1.35.",
      "Sản lượng nổ mìn nguyên khai thực tế năm 2024 là 112.500 m³ nguyên khối x Hệ số nở rời thực tế 1.244 = 140.000 m³ đá dăm rời (1x2, 2x4, 4x6, base). Số liệu này trùng khớp tuyệt đối về mặt khoa học kỹ thuật mỏ.",
      "Doanh nghiệp thực hiện kê khai nộp thuế tài nguyên theo đúng sản lượng nguyên khai khai thác tại mỏ và áp đúng đơn giá quy định tại Quyết định 87/2025/QĐ-UBND của UBND tỉnh Gia Lai, nộp đủ phí BVMT 4.000 đ/m³ theo NĐ 27/2023/NĐ-CP."
    ],
    "requiredDossiers": [
      "Bản đồ hiện trạng mỏ và Báo cáo đo vẽ thống kê khối lượng khai thác khoáng sản hàng năm nộp Sở TN&MT.",
      "Hộ chiếu nổ mìn các đợt trong năm có phê duyệt của cơ quan chức năng và Chỉ huy nổ mìn.",
      "Thuyết minh Dự án đầu tư xây dựng công trình khai thác mỏ đá có chương về Hệ số nở rời của đá.",
      "Biên bản nộp Tờ khai 01/TAIN, 01/PBVMT và Giấy nộp tiền thuế tài nguyên, phí BVMT tại KBNN Ia Grai."
    ],
    "dialogueScript": "Kính thưa Đoàn kiểm tra, đá nguyên khối trong lòng núi khi nổ mìn đập vỡ thành đá dăm 1x2, 2x4 sẽ tạo ra các khe hở giữa các hạt cốt liệu, làm tăng thể tích đo được. Đó là định luật vật lý cơ mỏ và hệ số nở rời k = 1.244 hoàn toàn nằm trong thiết kế kỹ thuật mỏ được Sở Xây dựng Gia Lai thẩm định (k = 1.20 - 1.35). Chúng tôi đã kê khai nộp thuế tài nguyên theo đúng 112.500 m³ đá nguyên khai theo Quyết định 87/2025/QĐ-UBND của tỉnh, truyền camera và dữ liệu trạm cân về Sở TN&MT 24/24. Kính đề nghị Đoàn ghi nhận tính chính xác và khoa học của số liệu."
  }
];
