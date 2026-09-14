// 15 Kịch Bản Phản Biện Thực Chiến & Kho Tri Thức Đối Đáp Thanh Tra Thuế Kiểu Việt
// Doanh nghiệp: CÔNG TY CỔ PHẦN KIỂU VIỆT (Gia Lai)
// Nội thất gỗ — Bê tông thương phẩm — Khai thác mỏ đá — Thi công hạ tầng xây lắp

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
  },
  {
    "id": "kb-09",
    "title": "Đoàn kiểm tra đòi bóc chi phí dở dang cuối kỳ TK 154 xưởng mộc do không có biên bản kiểm kê chi tiết từng thanh gỗ",
    "category": "Gỗ & Nội thất",
    "threat": "Kiểm tra viên cho rằng số dư 2.15 tỷ đồng chi phí dở dang xưởng mộc tại ngày 31/12 là cố tình để treo chi phí nhằm điều tiết lãi lỗ, dọa xuất toán 100% chi phí dở dang vào thu nhập chịu thuế TNDN năm kiểm tra.",
    "decreeId": "vas-02",
    "articleNum": 1,
    "decreeLabel": "Chuẩn mực VAS 02 — Hàng tồn kho",
    "legalReference": "Chuẩn mực Kế toán VAS 02; Thông tư 200/2014/TT-BTC Điều 27; Thông tư 99/2025/TT-BTC",
    "keyArguments": [
      "Theo Chuẩn mực VAS 02 và Chế độ kế toán DN: Chi phí dở dang cuối kỳ là giá trị các sản phẩm đang trong quá trình chế biến dở dang tại ngày khóa sổ tài chính, được phản ánh trên TK 154 theo chi phí NVL trực tiếp thực tế phát sinh.",
      "Xưởng mộc Kiểu Việt thực hiện các đơn hàng nội thất thiết kế theo dự án (khách sạn, biệt thự), chu kỳ gia công từ phôi thô đến chà nhám, sơn lót kéo dài qua thời điểm 31/12. Hội đồng kiểm kê gồm Trưởng xưởng, Kế toán giá thành và Ban Kiểm soát đã lập biên bản đo đạc khối lượng thực địa có hình ảnh chi tiết kèm theo.",
      "Nếu loại chi phí dở dang khỏi TK 154 để tính vào thu nhập chịu thuế năm nay thì năm sau khi xuất bán thành phẩm ghi nhận doanh thu sẽ không có giá vốn đối ứng, vi phạm nghiêm trọng nguyên tắc phù hợp giữa doanh thu và chi phí theo Điều 4 Thông tư 96/2015/TT-BTC."
    ],
    "requiredDossiers": [
      "Quyết định thành lập Hội đồng kiểm kê tài sản, vật tư cuối năm của Tổng Giám đốc.",
      "Biên bản kiểm kê sản phẩm dở dang xưởng mộc ngày 31/12/2024 kèm nhật ký sản xuất từng tổ đội.",
      "Thẻ tính giá thành sản phẩm chi tiết đơn hàng (TK 154) và Thuyết minh Báo cáo tài chính.",
      "Hình ảnh chụp hiện trường các lô bán thành phẩm mộc đang gia công tại ngày kiểm kê."
    ],
    "dialogueScript": "Thưa Trưởng đoàn, số dư TK 154 của xưởng mộc phản ánh chính xác các bộ bàn ghế họp, cửa gỗ và vách ốp khách sạn đang lắp ráp dở dang tại ngày 31/12/2024. Chúng tôi có Biên bản kiểm kê thực tế do Hội đồng kiểm kê ký tại xưởng kèm hình ảnh hiện trường. Theo Chuẩn mực VAS 02 và nguyên tắc phù hợp tại Thông tư 96, chi phí này phải gắn với doanh thu năm 2025 khi bàn giao công trình. Nếu bóc chi phí này khỏi năm 2024, năm 2025 doanh nghiệp sẽ bị thiếu giá vốn hợp lệ đối ứng với doanh thu đã kê khai nộp thuế đầy đủ."
  },
  {
    "id": "kb-10",
    "title": "Đoàn kiểm tra đòi xuất toán chi phí xăng dầu xe bồn & máy mỏ đá vì nghi ngờ vượt định mức tiêu hao",
    "category": "Vật liệu xây dựng & Bê tông",
    "threat": "Đoàn kiểm tra so sánh định mức tiêu hao xăng dầu của Kiểu Việt với xe tải vận tải đường trường thông thường, cho rằng mức tiêu hao 42 lít DO/100km của xe bồn bê tông là vượt định mức, dự kiến loại 850 triệu đồng chi phí nhiên liệu.",
    "decreeId": "tt-96-2015",
    "articleNum": 4,
    "decreeLabel": "Thông tư 96/2015/TT-BTC — Điều 4 K2.3",
    "legalReference": "Khoản 2.3 Điều 4 Thông tư 96/2015/TT-BTC; Thông tư 12/2021/TT-BXD của Bộ Xây dựng; Tiêu chuẩn định mức ca máy xây dựng",
    "keyArguments": [
      "Xe bồn bê tông 10m3 bắt buộc phải dùng động cơ trích công suất (PTO) để quay thùng trộn liên tục với tốc độ 4-6 vòng/phút trong suốt quá trình chạy xe và thời gian chờ bơm tại công trường để chống đông kết bê tông. Do đó không thể so sánh với xe tải chở hàng khô tắt máy khi chờ hàng.",
      "Địa hình Gia Lai đồi núi dốc quanh co, cự ly vận chuyển 15-35km từ trạm trộn đến các công trình vùng sâu vùng xa tiêu hao nhiên liệu cao hơn 25-30% so với đường đồng bằng theo hệ số địa hình tại Thông tư 12/2021/TT-BXD của Bộ Xây dựng.",
      "100% lượng nhiên liệu tiêu thụ đều khớp đúng với nhật trình hành trình GPS hộp đen và số km lăn bánh thực tế, toàn bộ hóa đơn điện tử mua từ Petrolimex Gia Lai và thanh toán chuyển khoản qua BIDV."
    ],
    "requiredDossiers": [
      "Quyết định ban hành Quy chế định mức nhiên liệu xe máy thiết bị của Tổng Giám đốc từ đầu năm 2024.",
      "Dữ liệu GPS hành trình và số giờ quay bồn trích xuất từ phần mềm giám sát phương tiện.",
      "Nhật trình chạy xe từng ngày của tài xế và Phiếu cấp phát nhiên liệu nội bộ có xác nhận của kho bãi.",
      "Hóa đơn GTGT điện tử mua dầu DO 0.05S từ Petrolimex và sao kê ngân hàng đối chiếu."
    ],
    "dialogueScript": "Thưa Đoàn kiểm tra, xe bồn bê tông tươi không thể tắt máy khi dừng, mà phải nổ máy quay bồn liên tục suốt 2-3 tiếng để tránh bê tông bị đóng cứng làm hỏng cả khối bê tông và bồn trộn. Định mức 42 lít/100km của chúng tôi đã tính cả nhiên liệu quay bồn và bơm cần tại chân công trình, hoàn toàn phù hợp với Tiêu chuẩn Định mức ca máy Thông tư 12/2021 của Bộ Xây dựng cho địa bàn đồi dốc Gia Lai. Hộp đen GPS ghi lại từng mét đường lăn bánh và giờ động cơ chạy. Do đó, đây là chi phí sản xuất thực tế hợp lý hợp lệ theo Điều 4 Thông tư 96/2015."
  },
  {
    "id": "kb-11",
    "title": "Đoàn kiểm tra nghi ngờ điều kiện thanh toán không dùng tiền mặt đối với biên bản cấn trừ công nợ bù trừ hai chiều",
    "category": "Thanh toán & Ngân hàng",
    "threat": "Đoàn kiểm tra cho rằng việc bù trừ công nợ giữa tiền bán bê tông và tiền mua cát sỏi xây dựng không có dòng tiền chảy qua ngân hàng nên không đủ điều kiện khấu trừ 350 triệu đồng thuế GTGT đầu vào và chi phí TNDN.",
    "decreeId": "tt-219-2013",
    "articleNum": 15,
    "decreeLabel": "Thông tư 219/2013/TT-BTC — Điều 15 K3",
    "legalReference": "Khoản 3 Điều 15 Thông tư 219/2013/TT-BTC; Điều 6 Thông tư 78/2014/TT-BTC; Điều 4 Thông tư 96/2015/TT-BTC",
    "keyArguments": [
      "Căn cứ Khoản 3 Điều 15 Thông tư 219/2013/TT-BTC: Hình thức bù trừ công nợ giữa hàng hóa, dịch vụ mua vào với bán ra được công nhận là thanh toán không dùng tiền mặt hợp pháp nếu phương thức bù trừ được quy định rõ trong hợp đồng kinh tế và có biên bản đối chiếu công nợ có xác nhận của hai bên.",
      "Hợp đồng hợp tác kinh tế giữa Kiểu Việt và đối tác cung ứng cát sỏi có Điều khoản số 7 quy định cụ thể về việc thanh toán bằng hình thức đối trừ công nợ định kỳ.",
      "Biên bản cấn trừ công nợ lập chi tiết từng số hóa đơn mua vào - bán ra, ngày lập, giá trị trước thuế và tiền thuế GTGT. Phần công nợ chênh lệch chưa bù trừ hết đều đã được Kiểu Việt chuyển khoản thanh toán qua ngân hàng BIDV đầy đủ."
    ],
    "requiredDossiers": [
      "Hợp đồng kinh tế gốc có điều khoản thỏa thuận phương thức bù trừ công nợ hai chiều.",
      "Biên bản cấn trừ công nợ có chữ ký người đại diện pháp luật và đóng dấu đỏ của hai pháp nhân.",
      "Hóa đơn GTGT đầu ra (bán bê tông) và Hóa đơn GTGT đầu vào (mua cát sỏi).",
      "Ủy nhiệm chi ngân hàng thanh toán cho phần giá trị chênh lệch còn lại sau bù trừ."
    ],
    "dialogueScript": "Thưa Trưởng đoàn, Khoản 3 Điều 15 Thông tư 219/2013/TT-BTC quy định rất rõ: Trường hợp hàng hóa mua vào bù trừ với hàng hóa bán ra thì được coi là thanh toán không dùng tiền mặt, miễn là hợp đồng có quy định và có biên bản bù trừ công nợ. Chúng tôi xin xuất trình Hợp đồng có Điều 7 thỏa thuận đối trừ, Biên bản cấn trừ công nợ liệt kê chi tiết từng số hóa đơn và Giấy báo Nợ ngân hàng thanh toán phần chênh lệch. Hồ sơ này hoàn toàn tuân thủ đúng quy định của Bộ Tài chính, đề nghị Đoàn ghi nhận đầy đủ quyền khấu trừ thuế GTGT của doanh nghiệp."
  },
  {
    "id": "kb-12",
    "title": "Đoàn kiểm tra đòi loại chi phí trích lập dự phòng nợ phải thu khó đòi TK 2293 vì thiếu thư xác nhận công nợ của con nợ",
    "category": "Chi phí & Quản lý tài chính",
    "threat": "Kiểm tra viên cho rằng khách hàng nợ tiền bê tông từ năm 2022 không ký biên bản đối chiếu công nợ năm 2024 thì không đủ điều kiện trích lập 450 triệu đồng dự phòng nợ khó đòi vào chi phí TK 642.",
    "decreeId": "tt-48-2019",
    "articleNum": 6,
    "decreeLabel": "Thông tư 48/2019/TT-BTC — Điều 6 K1",
    "legalReference": "Khoản 1 Điều 6 Thông tư 48/2019/TT-BTC sửa đổi bởi Thông tư 24/2022/TT-BTC",
    "keyArguments": [
      "Theo Điểm a Khoản 1 Điều 6 Thông tư 48/2019/TT-BTC: Trường hợp con nợ không ký biên bản đối chiếu công nợ thì doanh nghiệp phải có văn bản đôn đốc thu hồi nợ gửi qua đường bưu điện kèm biên nhận gửi bảo đảm, hoặc tài liệu chứng minh đã áp dụng các biện pháp thu hồi nợ.",
      "Công ty Kiểu Việt đã gửi 03 công văn đôn đốc thanh toán kèm phiếu gửi bảo đảm của Bưu điện Gia Lai có chữ ký nhận của người phụ trách bên mua.",
      "Khoản nợ đã quá hạn 26 tháng, mức trích lập 50% là đúng khung tỷ lệ (từ 02 năm đến dưới 03 năm trích lập tối đa 70%) và đã được Hội đồng trích lập dự phòng thông qua theo đúng quy trình tài chính nội bộ."
    ],
    "requiredDossiers": [
      "Hợp đồng kinh tế và hóa đơn chứng minh thời hạn thanh toán đã quá hạn 26 tháng.",
      "Biên bản đối chiếu công nợ lần gần nhất và 03 công văn đôn đốc thu hồi nợ gửi qua bưu điện.",
      "Phiếu gửi bưu điện bảo đảm và biên lai báo phát có xác nhận của bưu tá.",
      "Biên bản họp Hội đồng trích lập dự phòng của Ban Tổng Giám đốc Kiểu Việt ngày 31/12/2024."
    ],
    "dialogueScript": "Thưa Trưởng đoàn, Thông tư 48/2019/TT-BTC tại Điều 6 đã dự liệu rất rõ trường hợp khách hàng chây ì không chịu ký đối chiếu công nợ. Doanh nghiệp chỉ cần xuất trình văn bản đôn đốc thu hồi nợ gửi bảo đảm qua bưu điện là đủ điều kiện trích lập. Đây là 3 phiếu gửi bảo đảm có dấu bưu điện và mã vận đơn theo dõi phát thành công. Chúng tôi đã làm đúng từng câu chữ trong Thông tư 48, việc trích lập dự phòng này là hoàn toàn hợp pháp để phản ánh trung thực rủi ro tài chính của doanh nghiệp."
  },
  {
    "id": "kb-13",
    "title": "Đoàn kiểm tra đòi xuất toán chi phí thí nghiệm nén mẫu R28 & kiểm định chất lượng LAS-XD",
    "category": "Vật liệu xây dựng & Bê tông",
    "threat": "Kiểm tra viên cho rằng chi phí thí nghiệm nén mẫu bê tông 28 ngày (R28) và kiểm định cốt liệu cát đá tại Trung tâm kiểm định LAS-XD là chi phí của bên tư vấn hoặc chủ đầu tư, dọa bóc 220 triệu đồng chi phí hợp lý.",
    "decreeId": "tt-96-2015",
    "articleNum": 4,
    "decreeLabel": "Thông tư 96/2015/TT-BTC — Điều 4",
    "legalReference": "Luật Xây dựng 50/2014/QH13; Nghị định 06/2021/NĐ-CP về Quản lý chất lượng công trình; Điều 4 Thông tư 96/2015/TT-BTC",
    "keyArguments": [
      "Theo Điều 12 Nghị định 06/2021/NĐ-CP của Chính phủ: Nhà thầu sản xuất, cung ứng vật liệu và thi công xây dựng có nghĩa vụ tổ chức thí nghiệm, kiểm định chất lượng sản phẩm trước khi đưa vào công trình và chịu chi phí kiểm tra chất lượng sản phẩm xuất xưởng.",
      "Kết quả nén mẫu R28 là điều kiện bắt buộc trong hồ sơ hoàn công để Chủ đầu tư ký Biên bản nghiệm thu thanh toán khối lượng bê tông và dầm đúc sẵn.",
      "Chi phí thuê phòng thí nghiệm LAS-XD có hợp đồng kiểm định, kết quả thí nghiệm gốc, hóa đơn GTGT điện tử và phục vụ trực tiếp cho hoạt động bán bê tông đạt chuẩn chất lượng."
    ],
    "requiredDossiers": [
      "Hợp đồng nguyên tắc kiểm định chất lượng thí nghiệm mẫu giữa Kiểu Việt và Trung tâm Thí nghiệm LAS-XD.",
      "Phiếu kết quả thử nghiệm cường độ nén mẫu bê tông 7 ngày, 28 ngày (R7, R28) của từng hạng mục.",
      "Hóa đơn GTGT và chứng từ thanh toán tiền thí nghiệm kiểm định định kỳ.",
      "Biên bản nghiệm thu hoàn thành công việc của Chủ đầu tư có đính kèm kết quả nén mẫu."
    ],
    "dialogueScript": "Thưa Trưởng đoàn, theo Nghị định 06/2021/NĐ-CP về quản lý chất lượng xây dựng, nhà cung cấp bê tông bắt buộc phải lưu mẫu và thử nghiệm nén mẫu R28 để chứng minh mác bê tông đạt chuẩn thiết kế thì Chủ đầu tư mới nghiệm thu thanh toán tiền. Không có phiếu kết quả thí nghiệm LAS-XD này thì chúng tôi không thể xuất hóa đơn thu 40 tỷ doanh thu bê tông trong năm. Đây là chi phí bắt buộc theo quy chuẩn xây dựng, phục vụ trực tiếp tạo ra doanh thu chịu thuế theo Điều 4 Thông tư 96/2015."
  },
  {
    "id": "kb-14",
    "title": "Đoàn kiểm tra nghi ngờ chi phí thuê cừ larsen và giàn giáo công trình kéo dài quá tiến độ dự toán ban đầu",
    "category": "Thi công xây lắp",
    "threat": "Kiểm tra viên cho rằng thời gian thuê cừ larsen 120 ngày vượt 45 ngày so với bảng tiến độ dự toán ban đầu (75 ngày), đòi bóc tách 280 triệu đồng chi phí thuê thiết bị thi công.",
    "decreeId": "tt-96-2015",
    "articleNum": 4,
    "decreeLabel": "Thông tư 96/2015/TT-BTC — Điều 4",
    "legalReference": "Khoản 1 Điều 6 Thông tư 78/2014/TT-BTC; Điều 4 Thông tư 96/2015/TT-BTC; Bộ luật Dân sự 91/2015/QH13 về Sự kiện bất khả kháng",
    "keyArguments": [
      "Thời gian thuê kéo dài do sự kiện bất khả kháng: Mưa bão kéo dài tại Gia Lai làm ngập hố móng trụ cầu, Tư vấn giám sát đã ban hành văn bản Lệnh dừng thi công và yêu cầu duy trì hệ cừ larsen bảo vệ an toàn công trình.",
      "Việc duy trì cừ larsen là biện pháp kỹ thuật bắt buộc để chống sạt lở hố móng, bảo vệ an toàn tính mạng người lao động và tài sản dự án.",
      "Chi phí phát sinh thực tế có xác nhận của Tư vấn giám sát và Ban QLDA trong Nhật ký thi công, có hợp đồng thuê, biên bản bàn giao và hóa đơn hợp pháp phục vụ trực tiếp công trình đã hoàn thành bàn giao."
    ],
    "requiredDossiers": [
      "Hợp đồng thuê cừ larsen và giàn giáo kèm phụ lục gia hạn thời gian thuê do thời tiết.",
      "Văn bản chỉ đạo của Tư vấn giám sát yêu cầu tạm dừng thi công và duy trì hệ cừ chống đỡ hố móng.",
      "Nhật ký thi công công trình ghi nhận chi tiết các ngày mưa lũ không thể thi công.",
      "Biên bản nghiệm thu ca máy, hóa đơn GTGT và ủy nhiệm chi thanh toán tiền thuê thiết bị."
    ],
    "dialogueScript": "Thưa Trưởng đoàn, dự toán ban đầu được lập trong điều kiện thời tiết lý tưởng. Tuy nhiên thực tế thi công tại Tây Nguyên gặp 2 cơn bão liên tiếp gây ngập sâu hố móng trụ cầu. Nếu nhổ cừ larsen lên theo đúng 75 ngày dự toán thì hố móng sẽ sạt lở hoàn toàn, gây sập công trình và thiệt hại hàng tỷ đồng. Tư vấn giám sát đã có văn bản yêu cầu giữ nguyên hệ cừ để đảm bảo an toàn. Toàn bộ chi phí thuê thêm 45 ngày là chi phí thực tế khách quan, phục vụ bảo vệ công trình và đã được Chủ đầu tư nghiệm thu giai đoạn đưa vào sử dụng."
  },
  {
    "id": "kb-15",
    "title": "Đoàn kiểm tra chất vấn nguồn gốc lâm sản gỗ vườn nhà thu mua của các hộ dân địa phương tại Gia Lai",
    "category": "Lâm sản & Gỗ",
    "threat": "Kiểm tra viên nghi ngờ các lô gỗ keo, tràm, muồng đen thu mua từ các hộ dân trồng xen canh vườn nhà không đủ điều kiện hạch toán chi phí đầu vào, dọa loại 620 triệu đồng giá vốn xưởng mộc.",
    "decreeId": "tt-26-2022-lamsan",
    "articleNum": 15,
    "decreeLabel": "Thông tư 26/2022/TT-BNNPTNT — Điều 15",
    "legalReference": "Điều 15 Thông tư 26/2022/TT-BNNPTNT; Thông tư 78/2014/TT-BTC Điều 6 (Bảng kê 01/TNDN)",
    "keyArguments": [
      "Theo Điều 15 Thông tư 26/2022/TT-BNNPTNT của Bộ NN&PTNT: Gỗ khai thác từ cây trồng phân tán, cây vườn nhà của hộ gia đình, cá nhân không thuộc loài thực vật rừng nguy cấp, quý, hiếm thì chủ lâm sản tự lập Bảng kê lâm sản, không cần xác nhận của Cơ quan Kiểm lâm sở tại.",
      "Theo Điều 6 Thông tư 78/2014/TT-BTC và Điều 4 Thông tư 96/2015/TT-BTC: Doanh nghiệp mua nông, lâm sản của người trực tiếp sản xuất, đánh bắt bán ra được lập Bảng kê thu mua hàng hóa dịch vụ Mẫu 01/TNDN kèm Chứng minh nhân dân/CCCD và chứng từ chi tiền.",
      "Kiểu Việt lưu trữ đầy đủ Bảng kê lâm sản Mẫu số 01 kèm CCCD của từng chủ vườn cây, biên bản giao nhận gỗ tại xưởng và phiếu chi tiền mặt có chữ ký nhận đầy đủ."
    ],
    "requiredDossiers": [
      "Bảng kê lâm sản theo Mẫu số 01 ban hành kèm Thông tư 26/2022/TT-BNNPTNT do chủ hộ lập.",
      "Bảng kê thu mua hàng hóa không có hóa đơn Mẫu 01/TNDN theo Thông tư 78/2014/TT-BTC.",
      "Bản photo Căn cước công dân và Giấy chứng nhận quyền sử dụng đất/xác nhận vườn nhà của UBND xã.",
      "Phiếu chi tiền mặt và Phiếu nhập kho gỗ nguyên liệu xưởng mộc Kiểu Việt."
    ],
    "dialogueScript": "Thưa Trưởng đoàn, Thông tư 26/2022 của Bộ Nông nghiệp quy định rất rõ: Gỗ keo, gỗ muồng vườn nhà do người dân tự trồng phân tán thì không phải xin xác nhận của Hạt Kiểm lâm, mà chỉ cần người bán tự lập Bảng kê lâm sản. Đồng thời, theo Thông tư 96/2015 của Bộ Tài chính, Kiểu Việt thu mua trực tiếp của người dân nên được lập Bảng kê 01/TNDN. Chúng tôi có đầy đủ CCCD của từng hộ nông dân, Bảng kê lâm sản gốc, phiếu cân gỗ và phiếu chi tiền. Hồ sơ này hoàn toàn hợp pháp và bảo vệ quyền lợi chính đáng của người trồng rừng địa phương theo đúng chính sách khuyến khích lâm nghiệp của Nhà nước."
  }
];
