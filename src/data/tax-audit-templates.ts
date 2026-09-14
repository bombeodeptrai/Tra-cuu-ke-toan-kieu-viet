// Bộ Mẫu Biểu & Văn Bản Giải Trình Thực Chiến Tiếp Đoàn Kiểm Tra Thuế
// Doanh nghiệp: CÔNG TY CỔ PHẦN KIỂU VIỆT (Nội Thất — Vật Liệu Xây Dựng — Khai Thác Đá — Thi Công Xây Lắp)
// Website: kieuviet.com.vn | Slogan: "Xây bền vững - Dựng tương lai"

export interface AuditTemplate {
  id: string;
  code: string;
  title: string;
  category: string;
  targetRisk: string;
  legalBase: string;
  decreeId: string;
  articleNum?: number;
  decreeLabel: string;
  description: string;
  requiredDossier: string[];
  defenseArguments: string[];
  templateContent: string;
}

export const AUDIT_TEMPLATES: AuditTemplate[] = [
  {
    "id": "mau-01",
    "code": "MẪU 01/GT-DT",
    "title": "Công văn giải trình đối chiếu chênh lệch Doanh thu 511, Hóa đơn GTGT và Tờ khai thuế",
    "category": "Doanh thu & Thuế TNDN",
    "targetRisk": "Lệch doanh thu giữa Tờ khai thuế GTGT và Doanh thu tính thuế TNDN (TK 511) do thời điểm nghiệm thu công trình, giảm trừ doanh thu hoặc cung cấp dịch vụ kéo dài",
    "legalBase": "Khoản 2 Điều 5 Thông tư 219/2013/TT-BTC; Điều 8 Thông tư 78/2014/TT-BTC; Điều 3 Thông tư 96/2015/TT-BTC; Điều 9 Nghị định 123/2020/NĐ-CP",
    "decreeId": "tt-96-2015",
    "articleNum": 3,
    "decreeLabel": "Thông tư 96/2015/TT-BTC — Điều 3",
    "description": "Dùng khi đoàn thanh tra phát hiện chênh lệch giữa tổng doanh thu kê khai trên 01/GTGT với doanh thu trên Báo cáo tài chính (TK 511) và Tờ khai quyết toán 03/TNDN.",
    "requiredDossier": [
      "Biên bản nghiệm thu khối lượng hoàn thành A-B (bản gốc có chữ ký, đóng dấu 2 bên).",
      "Bảng đối chiếu doanh thu từng tháng/quý giữa Sổ cái TK 511, Tờ khai 01/GTGT và Tờ khai 03/TNDN.",
      "Hợp đồng kinh tế và phụ lục quy định rõ tiến độ bàn giao, phương thức thanh toán.",
      "Bảng kê các khoản giảm trừ doanh thu (chiết khấu thương mại, hàng trả lại) kèm hóa đơn điều chỉnh."
    ],
    "defenseArguments": [
      "Thời điểm xác định doanh thu tính thuế TNDN đối với xây dựng, lắp đặt là thời điểm bàn giao, nghiệm thu công trình theo Điểm m Khoản 3 Điều 5 Thông tư 78/2014/TT-BTC và Điều 3 Thông tư 96/2015/TT-BTC.",
      "Chênh lệch phát sinh do hợp đồng thi công bàn giao vào ngày 30/12 nhưng hóa đơn bên mua yêu cầu xuất vào ngày 05/01 năm sau theo tiến độ giải ngân kho bạc, DN đã ghi nhận trước doanh thu TK 511 theo chuẩn mực VAS 14 và điều chỉnh chỉ tiêu B4 trên tờ khai Quyết toán TNDN.",
      "Các khoản chiết khấu thanh toán được hạch toán vào chi phí tài chính TK 635, không làm giảm trừ doanh thu TK 511 theo đúng quy định Thông tư 200/2014/TT-BTC và Thông tư 99/2025/TT-BTC."
    ],
    "templateContent": "BẢN NHÁP NỘI BỘ — CÔNG TY CỔ PHẦN KIỂU VIỆT\nCỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM\nĐộc lập - Tự do - Hạnh phúc\n-------------------------\n\nCÔNG TY CỔ PHẦN KIỂU VIỆT\nSố: 45/CV-KV/2026\nV/v: Giải trình chênh lệch số liệu Doanh thu giữa Tờ khai thuế GTGT và Báo cáo Quyết toán thuế TNDN năm 2024\n\n                                            Gia Lai, ngày 15 tháng 04 năm 2026\n\nKính gửi: ĐOÀN KIỂM TRA THUẾ THEO QUYẾT ĐỊNH SỐ 128/QĐ-CTGLA\n         CỤC THUẾ TỈNH GIA LAI\n\n- Tên doanh nghiệp: CÔNG TY CỔ PHẦN KIỂU VIỆT\n- Mã số thuế: 5900... (Mã số thuế Kiểu Việt)\n- Địa chỉ trụ sở: Đường Trường Chinh, Phường Phù Đổng, TP. Pleiku, Tỉnh Gia Lai\n- Ngành nghề chính: Sản xuất đồ gỗ nội thất, bê tông thương phẩm, khai thác đá và thi công xây lắp hạ tầng\n\nThực hiện Quyết định kiểm tra thuế số 128/QĐ-CTGLA ngày 05/04/2026 của Cục trưởng Cục Thuế tỉnh Gia Lai, qua quá trình làm việc và rà soát Biên bản làm việc số 02/BBLV ngày 12/04/2026 của Đoàn kiểm tra về nội dung: Chênh lệch số liệu Doanh thu giữa Tờ khai thuế GTGT (01/GTGT) và Báo cáo kết quả hoạt động kinh doanh (TK 511)/Tờ khai quyết toán TNDN (03/TNDN) năm 2024, Công ty Cổ phần Kiểu Việt xin trân trọng giải trình chi tiết như sau:\n\nI. SỐ LIỆU ĐỐI CHIẾU THỰC TẾ NĂM 2024:\n1. Doanh thu kê khai trên các Tờ khai thuế GTGT năm 2024:\n   - Doanh thu chịu thuế 8%:   18.520.000.000 đồng\n   - Doanh thu chịu thuế 10%:  24.360.000.000 đồng\n   - Tổng Doanh thu trên 01/GTGT: 42.880.000.000 đồng\n\n2. Doanh thu bán hàng và cung cấp dịch vụ trên BCTC (TK 511):\n   - Tổng doanh thu ghi nhận trên Sổ cái TK 511: 44.380.000.000 đồng\n   - Doanh thu tính thuế TNDN trên Chỉ tiêu [A1] Tờ khai 03/TNDN: 44.380.000.000 đồng\n\n3. Chênh lệch Doanh thu:\n   - Chênh lệch (TK 511 - Doanh thu 01/GTGT): +1.500.000.000 đồng (Doanh thu BCTC cao hơn Doanh thu GTGT)\n\nII. NGUYÊN NHÂN CHÊNH LỆCH VÀ CƠ SỞ PHÁP LÝ BẢO VỆ:\n\n1. Chênh lệch 1.200.000.000 đồng từ Gói thầu Thi công Nội thất Trụ sở Ngân hàng BIDV Gia Lai:\n- Biên bản nghiệm thu bàn giao khối lượng hoàn thành A-B ký ngày 30/12/2024.\n- Căn cứ Chuẩn mực kế toán số 14 (Doanh thu) và Chuẩn mực kế toán số 01 (Cơ sở dồn tích): Công ty Kiểu Việt đã thực hiện hạch toán ghi nhận doanh thu vào năm 2024 trên TK 511 và kết chuyển giá vốn tương ứng trên TK 632.\n- Căn cứ Điểm m Khoản 3 Điều 5 Thông tư 78/2014/TT-BTC và Điều 3 Thông tư 96/2015/TT-BTC: Thời điểm xác định doanh thu tính thuế TNDN đối với hoạt động xây lắp, cung cấp lắp đặt thiết bị là thời điểm nghiệm thu, bàn giao hạng mục công trình. Do đó, Công ty đã kê khai đầy đủ vào Doanh thu tính thuế TNDN năm 2024 trên chỉ tiêu [A1] tờ khai 03/TNDN.\n- Về thuế GTGT: Do thủ tục đối soát hóa đơn qua ngân hàng hoàn tất vào ngày 03/01/2025, Hóa đơn điện tử số 00000456 được xuất vào ngày 03/01/2025 và đã kê khai thuế GTGT vào Quý 1/2025 theo đúng quy định tại Điều 9 Nghị định 123/2020/NĐ-CP.\n=> Kết luận: Doanh nghiệp không làm thất thoát tiền thuế của Nhà nước, thậm chí đã tự giác ghi nhận nộp thuế TNDN sớm hơn kỳ xuất hóa đơn GTGT.\n\n2. Chênh lệch 300.000.000 đồng do Giảm trừ doanh thu hàng bán bị trả lại:\n- Đơn hàng xuất bán ván dăm nội thất cho Công ty TNHH Mộc Tây Nguyên ngày 15/11/2024 trị giá 300.000.000 đồng bị lỗi kỹ thuật, bên mua trả lại hàng ngày 20/12/2024.\n- Công ty đã xuất hóa đơn điều chỉnh/giảm trừ theo Điều 19 Nghị định 123/2020/NĐ-CP, hạch toán giảm trừ doanh thu trên TK 521/511 nhưng trên tờ khai GTGT thực hiện bù trừ trực tiếp vào doanh số phát sinh.\n\nIII. DANH MỤC HỒ SƠ GỐC KÈM THEO:\n1. Hợp đồng kinh tế số 18/HĐ-BIDV/2024 ngày 15/06/2024.\n2. Biên bản nghiệm thu bàn giao đưa vào sử dụng ngày 30/12/2024 (Bản gốc có dấu đỏ).\n3. Hóa đơn điện tử GTGT số 00000456 ngày 03/01/2025 và Tờ khai thuế GTGT Quý 1/2025.\n4. Sổ phụ ngân hàng xác nhận giao dịch thanh toán chuyển khoản qua tài khoản BIDV.\n5. Biên bản trả lại hàng và hóa đơn điều chỉnh số 00000389 ngày 20/12/2024.\n\nIV. ĐỀ NGHỊ CỦA DOANH NGHIỆP:\nCông ty Cổ phần Kiểu Việt kính đề nghị Đoàn kiểm tra thuế ghi nhận tính hợp pháp, hợp lý của khoản chênh lệch nêu trên, không thực hiện truy thu hoặc xử phạt đối với chỉ tiêu doanh thu năm 2024.\n\nKính báo cáo Đoàn kiểm tra xem xét!\n\n                                            CÔNG TY CỔ PHẦN KIỂU VIỆT\n        KẾ TOÁN TRƯỞNG                             TỔNG GIÁM ĐỐC\n     (Ký, ghi rõ họ tên)                      (Ký tên, đóng dấu)"
  },
  {
    "id": "mau-02",
    "code": "MẪU 02/ĐM-KT",
    "title": "Bản giải trình định mức tiêu hao nguyên vật liệu gỗ xẻ, ván MFC/MDF, sơn PU và tỷ lệ hao hụt mùn cưa",
    "category": "Giá thành & Sản xuất",
    "targetRisk": "Đoàn kiểm tra nghi ngờ định mức tiêu hao gỗ xẻ, sơn PU và keo dán xưởng mộc Nội thất Kiểu Việt cao hơn mức trung bình ngành, dọa loại chi phí nguyên vật liệu vượt định mức",
    "legalBase": "Khoản 2.3 Điều 4 Thông tư 96/2015/TT-BTC; Chuẩn mực Kế toán số 02 (VAS 02 - Hàng tồn kho); Thông tư 200/2014/TT-BTC & Thông tư 99/2025/TT-BTC",
    "decreeId": "tt-96-2015",
    "articleNum": 4,
    "decreeLabel": "Thông tư 96/2015/TT-BTC — Điều 4 K2.3",
    "description": "Dùng để bảo vệ toàn bộ chi phí gỗ tròn, gỗ xẻ, ván MFC/MDF phủ Melamine và sơn PU đưa vào sản xuất đồ gỗ nội thất phòng làm việc, hội trường.",
    "requiredDossier": [
      "Quyết định ban hành Định mức kinh tế - kỹ thuật nội bộ xưởng sản xuất gỗ Kiểu Việt do Tổng Giám đốc phê duyệt từ đầu năm tài chính.",
      "Lệnh sản xuất kèm Phiếu xuất kho nguyên vật liệu tương ứng từng đơn hàng / hợp đồng công trình.",
      "Bảng tính giá thành sản phẩm (Thẻ tính giá thành từng mã sản phẩm hoàn thành nhập kho 155).",
      "Biên bản thu gom và thanh lý phế liệu mùn cưa, dăm bào, ván đầu mẩu (kèm hóa đơn xuất bán phế liệu TK 711)."
    ],
    "defenseArguments": [
      "Theo Thông tư 96/2015/TT-BTC, doanh nghiệp tự xây dựng định mức tiêu hao nguyên liệu, vật liệu từ đầu năm hoặc đầu kỳ sản xuất sản phẩm và lưu tại doanh nghiệp, không phải nộp cho cơ quan thuế.",
      "Đặc thù sản phẩm đồ gỗ nội thất văn phòng theo thiết kế riêng biệt (bàn họp oval, vách ốp cong) có tỷ lệ phoi bào mùn cưa thực tế dao động từ 15% - 22% tùy chủng loại gỗ tự nhiên (sồi, xoan đào, gõ đỏ), hoàn toàn nằm trong biên độ định mức kỹ thuật đã ban hành.",
      "Toàn bộ phế liệu thu hồi đã được cân đo nhập kho phế liệu và định kỳ xuất bán có hóa đơn GTGT, ghi nhận đầy đủ vào tài khoản thu nhập khác 711 tính thuế TNDN theo quy định."
    ],
    "templateContent": "BẢN NHÁP NỘI BỘ — CÔNG TY CỔ PHẦN KIỂU VIỆT\nCỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM\nĐộc lập - Tự do - Hạnh phúc\n-------------------------\n\nCÔNG TY CỔ PHẦN KIỂU VIỆT\nSố: 46/CV-KV/2026\nV/v: Giải trình định mức tiêu hao nguyên vật liệu gỗ và tỷ lệ hao hụt mùn cưa xưởng Nội thất Kiểu Việt\n\n                                            Gia Lai, ngày 16 tháng 04 năm 2026\n\nKính gửi: ĐOÀN KIỂM TRA THUẾ THEO QUYẾT ĐỊNH SỐ 128/QĐ-CTGLA\n         CỤC THUẾ TỈNH GIA LAI\n\nCăn cứ nội dung trao đổi tại Biên bản kiểm tra kỹ thuật số 03/BB-KT ngày 14/04/2026 của Đoàn kiểm tra về việc rà soát định mức tiêu hao nguyên vật liệu chính (Gỗ tự nhiên xẻ sấy, Ván dăm phủ Melamine MFC/MDF, Sơn PU) phục vụ sản xuất các đơn hàng nội thất công sở năm 2024, Công ty Cổ phần Kiểu Việt xin trân trọng giải trình như sau:\n\nI. CĂN CỨ PHÁP LÝ VỀ ĐỊNH MỨC KINH TẾ KỸ THUẬT:\n1. Căn cứ Khoản 2.3 Điều 4 Thông tư 96/2015/TT-BTC (sửa đổi, bổ sung Điều 6 Thông tư 78/2014/TT-BTC):\n   \"Doanh nghiệp tự xây dựng, quản lý định mức tiêu hao nguyên liệu, vật liệu, nhiên liệu, năng lượng, hàng hóa sử dụng vào sản xuất, kinh doanh. Định mức này được xây dựng từ đầu năm hoặc đầu kỳ sản xuất sản phẩm và lưu tại doanh nghiệp.\"\n2. Quy định hiện hành KHÔNG BẮT BUỘC doanh nghiệp phải nộp bảng định mức tiêu hao vật tư cho cơ quan thuế trực tiếp quản lý, mà doanh nghiệp tự chịu trách nhiệm trước pháp luật về tính chính xác, trung thực của định mức xây dựng.\n3. Ngày 05/01/2024, Tổng Giám đốc Công ty Cổ phần Kiểu Việt đã ký Quyết định số 02/QĐ-KV/2024 ban hành Hệ thống Định mức Kinh tế - Kỹ thuật áp dụng cho Nhà máy Chế biến Gỗ và Xưởng Nội thất Kiểu Việt cho năm tài chính 2024.\n\nII. BẢNG PHÂN TÍCH ĐỊNH MỨC VÀ HAO HỤT THỰC TẾ:\n1. Đối với Gỗ tự nhiên (Gỗ Sồi, Gỗ Gõ Đỏ, Xoan Đào):\n   - Quy cách sản phẩm: Bàn làm việc lãnh đạo, Bàn họp hội trường chân hộp, Vách ốp gỗ trang trí.\n   - Định mức kỹ thuật ban hành: 1,22 - 1,28 m³ gỗ phôi thô cho 1,0 m³ thành phẩm (Tỷ lệ hao hụt dăm bào, mùn cưa, cắt đầu mẩu: 18% - 22%).\n   - Thực tế sản xuất năm 2024: Tổng lượng gỗ thô xuất kho 320 m³ ➔ Sản xuất ra 254 m³ thành phẩm ➔ Tỷ lệ hao hụt trung bình 20,6%, hoàn toàn nằm trong khung định mức kỹ thuật đã phê duyệt.\n\n2. Đối với Sơn PU (Sơn lót, Sơn bóng, Chất đóng rắn, Dung môi Butyl/Thinner):\n   - Định mức kỹ thuật ban hành: 0,35 kg hỗn hợp sơn/m² bề mặt hoàn thiện (gồm 3 lớp lót + 1 lớp màu + 2 lớp bóng bảo vệ chống ẩm nhiệt đới Gia Lai).\n   - Thực tế tiêu hao: 0,338 kg/m², thấp hơn mức trần kỹ thuật cho phép.\n\nIII. QUẢN LÝ PHẾ LIỆU THU HỒI VÀ THU NHẬP KHÁC:\n- Toàn bộ mùn cưa, dăm bào, ván đầu mẩu phát sinh trong quá trình cưa xẻ, bào cuốn, chà nhám đều được hệ thống hút bụi trung tâm thu gom vào silo chứa phế liệu.\n- Định kỳ hàng tháng, Công ty xuất bán phế liệu mùn cưa cho các cơ sở sản xuất nấm và viên nén mùn cưa trên địa bàn Gia Lai.\n- Năm 2024, tổng doanh thu bán phế liệu thu hồi là 145.200.000 đồng, đã xuất hóa đơn GTGT đầy đủ và hạch toán vào TK 711 (Thu nhập khác) để tính thuế TNDN 20%, nộp đủ vào NSNN.\n\nIV. HỒ SƠ CHỨNG MINH KÈM THEO:\n1. Quyết định số 02/QĐ-KV/2024 ngày 05/01/2024 ban hành định mức tiêu hao vật tư.\n2. Hồ sơ kỹ thuật, bản vẽ thiết kế bóc tách chi tiết (BOM - Bill of Materials) của các công trình trọng điểm.\n3. Lệnh sản xuất, Phiếu xuất kho vật tư và Thẻ tính giá thành sản phẩm TK 154/155.\n4. Bảng tổng hợp nhập - xuất - tồn phế liệu và 12 tờ Hóa đơn điện tử xuất bán phế liệu TK 711.\n\nCông ty Kiểu Việt cam kết số liệu định mức hoàn toàn phù hợp với thực tế dây chuyền công nghệ hiện có và tuân thủ đúng quy định thuế. Kính đề nghị Đoàn kiểm tra chấp nhận toàn bộ chi phí vật tư nêu trên.\n\n                                            CÔNG TY CỔ PHẦN KIỂU VIỆT\n        GIÁM ĐỐC XƯỞNG NỘI THẤT                    TỔNG GIÁM ĐỐC\n          (Ký, ghi rõ họ tên)                   (Ký tên, đóng dấu)"
  },
  {
    "id": "mau-03",
    "code": "MẪU 03/TT-335",
    "title": "Công văn giải trình và Bảng kê chi phí trích trước giá vốn công trình hoàn thành (TK 335) chưa có hóa đơn thầu phụ",
    "category": "Chi phí & Giá vốn",
    "targetRisk": "Đoàn kiểm tra đòi xuất toán chi phí trích trước TK 335 của công trình xây lắp và hạng mục nội thất đã bàn giao nghiệm thu đưa vào sử dụng trong năm nhưng bên bán/thầu phụ chưa xuất hóa đơn",
    "legalBase": "Điểm 2.20 Khoản 2 Điều 4 Thông tư 96/2015/TT-BTC; Chuẩn mực Kế toán số 01 (VAS 01) và Chuẩn mực Kế toán số 14 (VAS 14)",
    "decreeId": "tt-96-2015",
    "articleNum": 4,
    "decreeLabel": "Thông tư 96/2015/TT-BTC — Điều 4 K2.20",
    "description": "Bảo vệ nguyên tắc phù hợp giữa doanh thu và chi phí giá vốn: Công trình đã ghi nhận doanh thu trong kỳ thì bắt buộc phải trích trước giá vốn tương ứng đối với khối lượng công việc đã hoàn thành.",
    "requiredDossier": [
      "Biên bản nghiệm thu khối lượng xây dựng hoàn thành giai đoạn giữa Kiểu Việt và Nhà thầu phụ.",
      "Hợp đồng thầu phụ / hợp đồng cung cấp vật tư dịch vụ có quy định rõ đơn giá và trách nhiệm xuất hóa đơn.",
      "Bảng dự toán chi phí chi tiết tương ứng với khối lượng đã hoàn thành cần trích trước.",
      "Toàn bộ hóa đơn GTGT của thầu phụ phát sinh trong thời hạn nộp hồ sơ quyết toán thuế TNDN (trước 31/03 năm sau)."
    ],
    "defenseArguments": [
      "Căn cứ Điểm 2.20 Khoản 2 Điều 4 Thông tư 96/2015/TT-BTC: Các khoản trích trước để hạch toán vào chi phí được trừ phải bảo đảm tương ứng với doanh thu đã ghi nhận trong kỳ tính thuế theo nguyên tắc phù hợp.",
      "Tại thời điểm quyết toán thuế TNDN, các nhà thầu phụ đã xuất hóa đơn đầy đủ trước ngày 31/03 năm tiếp theo và công ty đã thanh toán qua ngân hàng, bảo đảm 100% điều kiện được trừ của chi phí.",
      "Đối với các khoản có chênh lệch giữa số trích trước và số thực tế phát sinh trên hóa đơn, Kiểu Việt đã thực hiện điều chỉnh tăng/giảm giá vốn vào kỳ sau theo đúng quy định kế toán."
    ],
    "templateContent": "BẢN NHÁP NỘI BỘ — CÔNG TY CỔ PHẦN KIỂU VIỆT\nCỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM\nĐộc lập - Tự do - Hạnh phúc\n-------------------------\n\nCÔNG TY CỔ PHẦN KIỂU VIỆT\nSố: 47/CV-KV/2026\nV/v: Giải trình chi phí trích trước giá vốn (TK 335) công trình xây dựng và nội thất hoàn thành bàn giao năm 2024\n\n                                            Gia Lai, ngày 17 tháng 04 năm 2026\n\nKính gửi: ĐOÀN KIỂM TRA THUẾ THEO QUYẾT ĐỊNH SỐ 128/QĐ-CTGLA\n         CỤC THUẾ TỈNH GIA LAI\n\nLiên quan đến nội dung kiểm tra số dư Tài khoản 335 - Chi phí phải trả tại thời điểm 31/12/2024 số tiền 2.150.000.000 đồng, Đoàn kiểm tra dự kiến loại khỏi chi phí được trừ khi tính thuế TNDN do thời điểm 31/12/2024 chưa có hóa đơn GTGT đầu vào của các thầu phụ, Công ty Cổ phần Kiểu Việt xin giải trình căn cứ pháp lý và thực tế như sau:\n\nI. BẢN CHẤT GIAO DỊCH VÀ NGUYÊN TẮC KẾ TOÁN PHÙ HỢP:\n1. Dự án Đường giao thông liên xã Chư Prông và Hạng mục Cung cấp thiết bị nội thất Trường Dân tộc Nội trú:\n   - Cả 2 công trình nêu trên đã hoàn thành thi công, được Chủ đầu tư nghiệm thu A-B và bàn giao đưa vào sử dụng lần lượt vào ngày 15/12/2024 và 28/12/2024.\n   - Doanh thu của 2 công trình này đã được Kiểu Việt ghi nhận toàn bộ vào Doanh thu bán hàng năm 2024 (TK 511) và phản ánh đầy đủ trên Chỉ tiêu [A1] của Tờ khai quyết toán thuế TNDN năm 2024 với tổng số tiền 16.800.000.000 đồng.\n2. Để đảm bảo \"Nguyên tắc phù hợp giữa doanh thu và chi phí\" theo Chuẩn mực kế toán số 01 (VAS 01), Luật Kế toán số 88/2015/QH13 và Điểm 2.20 Khoản 2 Điều 4 Thông tư 96/2015/TT-BTC: Công ty bắt buộc phải trích trước chi phí giá vốn tương ứng của khối lượng xây lắp/vật tư đã hoàn thành mà thầu phụ chưa kịp xuất hóa đơn tài chính tại thời điểm 31/12/2024.\n\nII. CĂN CỨ PHÁP LUẬT THUẾ TNDN:\nCăn cứ Điểm 2.20 Khoản 2 Điều 4 Thông tư 96/2015/TT-BTC quy định các khoản không được trừ, trong đó có ngoại lệ:\n\"Các khoản trích trước vào chi phí không đúng quy định của pháp luật: Trích trước các chi phí theo chu kỳ, chi phí bảo hành công trình xây dựng... trích trước chi phí đối với những hoạt động sản xuất kinh doanh đã ghi nhận doanh thu nhưng còn tiếp tục phải thực hiện nghĩa vụ theo hợp đồng... ĐỐI VỚI DOANH NGHIỆP CÓ HOẠT ĐỘNG XÂY DỰNG ĐÃ GHI NHẬN DOANH THU THÌ ĐƯỢC TRÍCH TRƯỚC GIÁ VỐN TƯƠNG ỨNG VỚI DOANH THU ĐÃ GHI NHẬN.\"\n\nIII. THỰC TẾ HÓA ĐƠN ĐẦU VÀO ĐÃ CÓ TRƯỚC HẠN QUYẾT TOÁN THUẾ TNDN:\nToàn bộ số tiền 2.150.000.000 đồng trích trước nêu trên thuộc về 3 gói thầu phụ:\n1. Thầu phụ San gạt nền đường: 850.000.000 đồng. Đã nhận Hóa đơn điện tử số 00000125 ngày 25/01/2025.\n2. Thầu phụ Thảm bê tông nhựa: 920.000.000 đồng. Đã nhận Hóa đơn điện tử số 00000098 ngày 18/02/2025.\n3. Đơn vị Gia công khung sắt sơn tĩnh điện: 380.000.000 đồng. Đã nhận Hóa đơn điện tử số 00000210 ngày 10/03/2025.\nTất cả các hóa đơn này ĐỀU ĐƯỢC PHÁT HÀNH TRƯỚC NGÀY 31/03/2025 (Thời hạn nộp hồ sơ quyết toán thuế TNDN năm 2024), kèm theo Ủy nhiệm chi thanh toán qua tài khoản ngân hàng của Công ty Kiểu Việt, đáp ứng đầy đủ 3 điều kiện của chi phí được trừ theo Điều 4 Thông tư 96/2015/TT-BTC.\n\nIV. KIẾN NGHỊ:\nKính đề nghị Đoàn kiểm tra chấp thuận chi phí giá vốn trích trước tài khoản 335 nêu trên là chi phí được trừ hợp pháp của năm tài chính 2024.\n\n                                            CÔNG TY CỔ PHẦN KIỂU VIỆT\n        KẾ TOÁN TRƯỞNG                             TỔNG GIÁM ĐỐC\n     (Ký, ghi rõ họ tên)                      (Ký tên, đóng dấu)"
  },
  {
    "id": "mau-04",
    "code": "MẪU 04/NC-TV",
    "title": "Bản giải trình chi phí nhân công thời vụ xưởng mộc, trạm bê tông và công trường xây lắp kèm Cam kết 08/CK-TNCN",
    "category": "Nhân sự & Thuế TNCN",
    "targetRisk": "Đoàn kiểm tra đòi truy thu 10% thuế TNCN và tiền chậm nộp đối với các khoản chi trả nhân công khoán việc, thời vụ xưởng mộc và thi công hiện trường dưới 2 triệu/lần hoặc trên 2 triệu có cam kết 08/CK-TNCN",
    "legalBase": "Điểm i Khoản 1 Điều 25 Thông tư 111/2013/TT-BTC; Mẫu 08/CK-TNCN Thông tư 80/2021/TT-BTC; Nghị định 125/2020/NĐ-CP",
    "decreeId": "tt-111-2013",
    "articleNum": 25,
    "decreeLabel": "Thông tư 111/2013/TT-BTC — Điều 25",
    "description": "Chứng minh tính hợp pháp của chi phí nhân công trực tiếp sản xuất đồ gỗ và công trình xây dựng, bảo vệ việc không khấu trừ 10% TNCN theo đúng cam kết của người lao động.",
    "requiredDossier": [
      "Hợp đồng giao khoán công việc / Hợp đồng lao động dưới 03 tháng ký trực tiếp với từng cá nhân hoặc tổ trưởng có giấy ủy quyền hợp pháp.",
      "Bản cam kết thu nhập cá nhân Mẫu 08/CK-TNCN kèm bản photo Căn cước công dân gắn chip của từng lao động.",
      "Bảng chấm công chi tiết và Bảng thanh toán tiền lương/tiền công có chữ ký nhận tiền thực tế của người lao động.",
      "Hồ sơ đăng ký mã số thuế cá nhân của 100% lao động thời vụ trước thời điểm lập cam kết."
    ],
    "defenseArguments": [
      "Cá nhân lao động thời vụ có ước tính tổng mức thu nhập chịu thuế sau khi trừ gia cảnh chưa đến mức phải nộp thuế và đã làm Bản cam kết Mẫu 08/CK-TNCN theo quy định tại Thông tư 111/2013/TT-BTC và Thông tư 80/2021/TT-BTC.",
      "Tất cả cá nhân làm cam kết đều có mã số thuế thu nhập cá nhân tại thời điểm cam kết theo đúng quy định.",
      "Công ty Kiểu Việt đã tổng hợp danh sách và kê khai quyết toán thuế TNCN cuối năm thay cho người lao động trên Phụ lục 05-2/BK-QTT-TNCN đầy đủ."
    ],
    "templateContent": "BẢN NHÁP NỘI BỘ — CÔNG TY CỔ PHẦN KIỂU VIỆT\nCỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM\nĐộc lập - Tự do - Hạnh phúc\n-------------------------\n\nCÔNG TY CỔ PHẦN KIỂU VIỆT\nSố: 48/CV-KV/2026\nV/v: Giải trình hồ sơ thuế TNCN và tính hợp lệ của chi phí nhân công thời vụ, khoán việc năm 2024\n\n                                            Gia Lai, ngày 18 tháng 04 năm 2026\n\nKính gửi: ĐOÀN KIỂM TRA THUẾ THEO QUYẾT ĐỊNH SỐ 128/QĐ-CTGLA\n         CỤC THUẾ TỈNH GIA LAI\n\nThực hiện yêu cầu giải trình của Đoàn kiểm tra về việc khấu trừ 10% thuế TNCN đối với các khoản chi trả tiền công cho lao động thời vụ xưởng mộc, nhân công đổ bê tông và thợ phụ xây lắp công trường năm 2024 với tổng số tiền 840.000.000 đồng, Công ty Cổ phần Kiểu Việt xin giải trình như sau:\n\nI. CĂN CỨ QUY ĐỊNH PHÁP LUẬT VỀ CAM KẾT KHÔNG KHẤU TRỪ THUẾ:\nCăn cứ Điểm i Khoản 1 Điều 25 Thông tư 111/2013/TT-BTC của Bộ Tài chính:\n\"Các tổ chức, cá nhân trả tiền công, tiền thù lao, tiền chi khác cho cá nhân cư trú không ký hợp đồng lao động... hoặc ký hợp đồng lao động dưới ba (03) tháng có tổng mức trả thu nhập từ hai triệu (2.000.000) đồng/lần trở lên thì phải khấu trừ thuế theo mức 10% trên thu nhập trước khi trả cho cá nhân.\nTrường hợp cá nhân chỉ có duy nhất thu nhập thuộc đối tượng phải khấu trừ thuế theo tỷ lệ nêu trên nhưng ước tính tổng mức thu nhập chịu thuế của cá nhân sau khi trừ gia cảnh chưa đến mức phải nộp thuế thì cá nhân có thu nhập làm cam kết (theo mẫu ban hành kèm theo văn bản hướng dẫn về quản lý thuế) gửi tổ chức trả thu nhập để tổ chức trả thu nhập làm căn cứ tạm thời chưa khấu trừ thuế thu nhập cá nhân.\"\n\nII. TÌNH HÌNH HỒ SƠ NHÂN CÔNG THỰC TẾ TẠI CÔNG TY KIỂU VIỆT:\n1. Về mã số thuế:\n   100% lao động thời vụ (32 người) ký bản cam kết đều ĐÃ ĐƯỢC CẤP MÃ SỐ THUẾ CÁ NHÂN trước thời điểm ký cam kết theo đúng quy định.\n2. Về biểu mẫu cam kết:\n   Công ty áp dụng đúng Mẫu 08/CK-TNCN ban hành kèm theo Thông tư 80/2021/TT-BTC. Bản cam kết được lập riêng cho từng cá nhân, ghi rõ số CCCD, ngày cấp, nơi cư trú và cam kết chỉ có duy nhất nguồn thu nhập tại Kiểu Việt chưa đến mức chịu thuế sau khi trừ gia cảnh 132.000.000 đồng/năm (11 triệu/tháng).\n3. Về tính xác thực của chi phí nhân công:\n   - Có Hợp đồng giao khoán công việc theo khối lượng (khoán gia công chà nhám đồ gỗ, khoán đổ bê tông móng, bốc xếp cát đá).\n   - Có Bảng chấm công theo dõi ngày công thực tế tại công trường/xưởng mộc.\n   - Có Bảng thanh toán tiền lương có đầy đủ chữ ký trực tiếp của người lao động.\n   - Định kỳ cuối năm, Công ty đã tổng hợp toàn bộ danh sách 32 cá nhân này vào Phụ lục 05-2/BK-QTT-TNCN của Tờ khai quyết toán thuế TNCN năm 2024 nộp Cục Thuế tỉnh Gia Lai.\n\nIII. KẾT LUẬN:\nViệc Công ty Kiểu Việt tạm thời không khấu trừ 10% thuế TNCN của các lao động nêu trên là hoàn toàn tuân thủ đúng quy định tại Thông tư 111/2013/TT-BTC và Thông tư 80/2021/TT-BTC. Chi phí nhân công được hạch toán vào chi phí hợp lý được trừ khi xác định thuế TNDN. Kính đề nghị Đoàn kiểm tra không thực hiện truy thu thuế TNCN và tiền chậm nộp đối với nội dung này.\n\n                                            CÔNG TY CỔ PHẦN KIỂU VIỆT\n        TRƯỞNG PHÒNG NHÂN SỰ                      TỔNG GIÁM ĐỐC\n         (Ký, ghi rõ họ tên)                   (Ký tên, đóng dấu)"
  },
  {
    "id": "mau-05",
    "code": "MẪU 05/VL-TT80",
    "title": "Bản giải trình và Bảng phân bổ nghĩa vụ thuế GTGT vãng lai 1% cho công trình thi công, lắp đặt nội thất ngoài tỉnh Gia Lai",
    "category": "Kê khai & Phân bổ thuế",
    "targetRisk": "Đoàn kiểm tra Cục Thuế Gia Lai truy thu số thuế GTGT đã nộp tại các tỉnh khác (Kon Tum, Đắk Lắk, Bình Định) hoặc đòi truy phạt do không nộp thuế xây dựng vãng lai 1% tại nơi có công trình",
    "legalBase": "Điều 12, Điều 13 Thông tư 80/2021/TT-BTC; Nghị định 126/2020/NĐ-CP; Khoản 6 Điều 3 Luật Quản lý thuế số 38/2019/QH14",
    "decreeId": "tt-80-2021",
    "articleNum": 13,
    "decreeLabel": "Thông tư 80/2021/TT-BTC — Điều 13",
    "description": "Giải trình việc kê khai và nộp thuế GTGT 1% vãng lai đối với công trình xây dựng hoặc chứng minh hợp đồng chỉ là cung cấp lắp đặt nội thất không thuộc diện nộp thuế vãng lai.",
    "requiredDossier": [
      "Hợp đồng kinh tế phân tích rõ phạm vi công việc: Hợp đồng mua bán hàng hóa kèm dịch vụ lắp đặt nội thất thông thường hay Hợp đồng thi công xây dựng công trình.",
      "Tờ khai thuế GTGT Mẫu 05/GTGT nộp cho cơ quan thuế nơi có công trình ngoài tỉnh.",
      "Giấy nộp tiền vào ngân sách nhà nước có đóng dấu xác nhận của Kho bạc Nhà nước hoặc Ngân hàng thương mại.",
      "Bảng kê phân bổ thuế GTGT kèm Tờ khai 01/GTGT chính tại Cục Thuế tỉnh Gia Lai chứng minh việc bù trừ số thuế đã nộp."
    ],
    "defenseArguments": [
      "Đối với các hợp đồng sản xuất tại xưởng Gia Lai rồi vận chuyển đến công trình ngoài tỉnh chỉ để lắp đặt hoàn thiện: Căn cứ Điều 13 Thông tư 80/2021/TT-BTC, hoạt động này là bán hàng hóa kèm dịch vụ lắp ráp, kê khai nộp thuế 100% tại trụ sở chính Gia Lai, không thuộc đối tượng nộp thuế GTGT xây dựng vãng lai 1%.",
      "Đối với các gói thầu thi công xây lắp độc lập ngoài tỉnh, Kiểu Việt đã nộp 1% thuế GTGT trên doanh thu chưa thuế vào KBNN nơi có công trình và thực hiện bù trừ hợp pháp vào chỉ tiêu [39] trên Tờ khai 01/GTGT nộp Cục Thuế Gia Lai."
    ],
    "templateContent": "BẢN NHÁP NỘI BỘ — CÔNG TY CỔ PHẦN KIỂU VIỆT\nCỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM\nĐộc lập - Tự do - Hạnh phúc\n-------------------------\n\nCÔNG TY CỔ PHẦN KIỂU VIỆT\nSố: 49/CV-KV/2026\nV/v: Giải trình nghĩa vụ thuế GTGT vãng lai các công trình thi công, lắp đặt nội thất ngoài tỉnh năm 2024\n\n                                            Gia Lai, ngày 19 tháng 04 năm 2026\n\nKính gửi: ĐOÀN KIỂM TRA THUẾ THEO QUYẾT ĐỊNH SỐ 128/QĐ-CTGLA\n         CỤC THUẾ TỈNH GIA LAI\n\nCông ty Cổ phần Kiểu Việt xin trân trọng báo cáo và giải trình về việc thực hiện nghĩa vụ thuế đối với các hợp đồng cung cấp nội thất và xây lắp thực hiện tại các tỉnh ngoài địa bàn Gia Lai (Kon Tum và Đắk Lắk) trong năm 2024 như sau:\n\nI. CĂN CỨ PHÁP LÝ THEO THÔNG TƯ 80/2021/TT-BTC:\nCăn cứ Điểm c Khoản 1 Điều 13 Thông tư 80/2021/TT-BTC của Bộ Tài chính quy định về phân bổ thuế GTGT đối với hoạt động xây dựng:\n1. \"Người nộp thuế có hoạt động xây dựng... tại địa bàn tỉnh khác nơi người nộp thuế có trụ sở chính nhưng không thành lập đơn vị phụ thuộc, địa điểm kinh doanh... thì người nộp thuế thực hiện khai thuế giá trị gia tăng phần bổ theo tỷ lệ 1% doanh thu chưa có thuế giá trị gia tăng đối với hoạt động xây dựng tại từng tỉnh.\"\n2. Đối với hoạt động sản xuất hàng hóa tại trụ sở chính rồi mang đi lắp đặt đơn thuần (như bàn, ghế, tủ, giường đóng sẵn tại xưởng Gia Lai chuyển đến công trình): KHÔNG PHẢI LÀ HOẠT ĐỘNG XÂY DỰNG VÃNG LAI, không phải nộp 1% thuế GTGT tại tỉnh ngoài, mà toàn bộ nghĩa vụ thuế GTGT được kê khai và nộp 100% tại cơ quan thuế trụ sở chính (Cục Thuế tỉnh Gia Lai).\n\nII. PHÂN LOẠI CÁC CÔNG TRÌNH THỰC TẾ NĂM 2024:\n1. Gói thầu Thi công Nhà điều hành Thủy điện tại huyện Sa Thầy, Tỉnh Kon Tum:\n   - Bản chất: Hoạt động thi công xây dựng công trình độc lập.\n   - Doanh thu chưa thuế nghiệm thu năm 2024: 5.400.000.000 đồng.\n   - Nghĩa vụ thuế GTGT vãng lai 1%: 54.000.000 đồng.\n   - Tình hình nộp thuế: Công ty đã nộp Tờ khai 05/GTGT cho Cục Thuế tỉnh Kon Tum và nộp đủ 54.000.000 đồng vào KBNN tỉnh Kon Tum theo Giấy nộp tiền số 458921 ngày 15/10/2024.\n   - Bù trừ thuế tại Gia Lai: Công ty đã kê khai số thuế 54.000.000 đồng đã nộp tại Kon Tum vào Chỉ tiêu [39] (Thuế GTGT đã nộp ở địa phương khác) trên Tờ khai 01/GTGT kỳ Quý 3/2024 nộp Cục Thuế Gia Lai theo đúng hướng dẫn Thông tư 80/2021/TT-BTC.\n\n2. Hợp đồng Sản xuất và Lắp đặt Nội thất Khách sạn Mường Thanh TP. Buôn Ma Thuột, Tỉnh Đắk Lắk:\n   - Bản chất: Hợp đồng mua bán và lắp đặt hàng hóa nội thất gỗ hoàn thiện đóng tại Nhà máy Kiểu Việt (Gia Lai).\n   - Công ty không thi công xây dựng kết cấu tại hiện trường mà chỉ vận chuyển đồ gỗ đã gia công xong sang kê đặt vào phòng.\n   - Căn cứ quy định, Kiểu Việt đã xuất hóa đơn GTGT và kê khai toàn bộ doanh thu 3.200.000.000 đồng cùng tiền thuế GTGT 256.000.000 đồng tại Cục Thuế tỉnh Gia Lai, không phát sinh nghĩa vụ nộp vãng lai tại Đắk Lắk.\n\nIII. CHỨNG TỪ ĐÍNH KÈM:\n1. Bản sao Giấy nộp tiền vào NSNN tại KBNN Kon Tum kèm Tờ khai 05/GTGT.\n2. Hợp đồng kinh tế và Biên bản bàn giao sản phẩm nội thất tại Buôn Ma Thuột.\n3. Bảng kê đối chiếu chỉ tiêu [39] trên Tờ khai thuế GTGT tại Cục Thuế Gia Lai.\n\nKính đề nghị Đoàn kiểm tra ghi nhận việc tuân thủ pháp luật thuế của Công ty Kiểu Việt.\n\n                                            CÔNG TY CỔ PHẦN KIỂU VIỆT\n        KẾ TOÁN TRƯỞNG                             TỔNG GIÁM ĐỐC\n     (Ký, ghi rõ họ tên)                      (Ký tên, đóng dấu)"
  },
  {
    "id": "mau-06",
    "code": "MẪU 06/KS-GL",
    "title": "Bảng đối chiếu sản lượng đá nguyên khai khai thác mỏ, tỷ lệ qua máy nghiền sàng và nghĩa vụ Thuế Tài nguyên, Phí BVMT tại Gia Lai",
    "category": "Tài nguyên & Môi trường",
    "targetRisk": "Đoàn kiểm tra nghi ngờ sản lượng đá nổ mìn nguyên khai thực tế cao hơn sản lượng kê khai thuế tài nguyên, dọa ấn định sản lượng và áp giá tính thuế theo Quyết định 87/2025/QĐ-UBND Gia Lai",
    "legalBase": "Quyết định 87/2025/QĐ-UBND ngày 15/01/2025 của UBND tỉnh Gia Lai; Nghị định 27/2023/NĐ-CP; Thông tư 152/2015/TT-BTC; Luật Khoáng sản số 54/2024/QH15",
    "decreeId": "qd-87-2025-gialai",
    "articleNum": 1,
    "decreeLabel": "Quyết định 87/2025/QĐ-UBND Gia Lai",
    "description": "Bảo vệ số liệu khai thác khoáng sản mỏ đá Kiểu Việt, chứng minh hệ số nở rời đá nổ mìn sang đá dăm (1x2, 2x4, 4x6, base) và đá hộc phù hợp với thiết kế mỏ được Sở TN&MT phê duyệt.",
    "requiredDossier": [
      "Giấy phép khai thác khoáng sản do UBND tỉnh Gia Lai cấp kèm Bản đồ hiện trạng mỏ đo vẽ định kỳ hàng năm.",
      "Hộ chiếu nổ mìn từng đợt có xác nhận của Cảnh sát QLHC về TTXH và Lệnh nổ mìn của Chỉ huy nổ mìn.",
      "Nhật ký trạm cân điện tử tự động và dữ liệu camera giám sát truyền về Sở TN&MT.",
      "Báo cáo thống kê sản lượng khai thác hàng tháng nộp Sở TN&MT và Tờ khai thuế Tài nguyên Mẫu 01/TAIN, Phí BVMT Mẫu 01/PBVMT."
    ],
    "defenseArguments": [
      "Hệ số quy đổi từ đá nguyên khai sang đá thành phẩm qua trạm nghiền sàng tuân thủ đúng Thiết kế mỏ và Dự án đầu tư đã được Sở Xây dựng và Sở TN&MT tỉnh Gia Lai thẩm định, phê duyệt (hệ số k = 1.35 - 1.45).",
      "Doanh nghiệp kê khai nộp thuế tài nguyên theo đúng giá tính thuế do UBND tỉnh Gia Lai ban hành tại Quyết định số 87/2025/QĐ-UBND, không có trường hợp áp sai mã tài nguyên hoặc tính thiếu khối lượng.",
      "Số liệu trạm cân điện tử được kiểm định định kỳ bởi Trung tâm Tiêu chuẩn Đo lường Chất lượng và camera giám sát hoạt động 24/24h đảm bảo tính trung thực khách quan."
    ],
    "templateContent": "BẢN NHÁP NỘI BỘ — CÔNG TY CỔ PHẦN KIỂU VIỆT\nCỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM\nĐộc lập - Tự do - Hạnh phúc\n-------------------------\n\nCÔNG TY CỔ PHẦN KIỂU VIỆT\nSố: 50/CV-KV/2026\nV/v: Giải trình sản lượng khai thác đá mỏ, hệ số quy đổi nghiền sàng và nghĩa vụ Thuế Tài nguyên, Phí BVMT năm 2024\n\n                                            Gia Lai, ngày 20 tháng 04 năm 2026\n\nKính gửi: ĐOÀN KIỂM TRA THUẾ THEO QUYẾT ĐỊNH SỐ 128/QĐ-CTGLA\n         CỤC THUẾ TỈNH GIA LAI\n\nĐể làm rõ nội dung đối chiếu giữa sản lượng đá nguyên khai nổ mìn và sản lượng đá thành phẩm xuất bán qua trạm nghiền sàng mỏ đá Kiểu Việt năm 2024, Công ty Cổ phần Kiểu Việt xin báo cáo chi tiết như sau:\n\nI. CĂN CỨ GIẤY PHÉP VÀ QUY ĐỊNH PHÁP LUẬT:\n1. Giấy phép khai thác khoáng sản số 68/GP-UBND do UBND tỉnh Gia Lai cấp cho phép Kiểu Việt khai thác đá xây dựng tại mỏ đá xã Ia Der, huyện Ia Grai, công suất khai thác 150.000 m³ đá nguyên khai/năm.\n2. Căn cứ Bảng giá tính thuế tài nguyên ban hành kèm theo Quyết định số 87/2025/QĐ-UBND của UBND tỉnh Gia Lai và Thông tư 152/2015/TT-BTC của Bộ Tài chính:\n   - Nhóm tài nguyên: Đá xây dựng thông thường.\n   - Giá tính thuế tài nguyên đá nguyên khai: Theo đúng khung giá quy định của UBND tỉnh Gia Lai tại thời điểm kê khai.\n   - Mức thu phí bảo vệ môi trường: Thực hiện theo Nghị định 27/2023/NĐ-CP (4.000 đồng/m³ đá nguyên khai).\n\nII. BẢNG TỔNG HỢP SẢN LƯỢNG VÀ HỆ SỐ NỞ RỜI QUA TRẠM NGHIỀN:\n1. Sản lượng khai thác nổ mìn nguyên khai năm 2024:\n   - Tổng khối lượng đất đá nổ mìn nguyên khai: 112.500 m³ (Xác nhận qua Hộ chiếu nổ mìn và Bản đồ hiện trạng mỏ do đơn vị đo đạc địa chất lập).\n2. Sản lượng thành phẩm xuất bán qua trạm nghiền sàng (đo bằng trạm cân điện tử tự động):\n   - Đá dăm 1x2:         42.300 m³\n   - Đá dăm 2x4:         28.500 m³\n   - Đá dăm 4x6:         15.200 m³\n   - Đá mi sàng / bụi:   35.400 m³\n   - Đá hộc kè móng:     18.600 m³\n   - Tổng sản lượng thành phẩm rời: 140.000 m³\n3. Hệ số quy đổi (nở rời) từ đá nguyên khối sang đá rời qua nghiền:\n   - Hệ số k thực tế: 140.000 m³ / 112.500 m³ = 1,244.\n   - Đối chiếu với Thiết kế cơ sở và Báo cáo kinh tế kỹ thuật mỏ do Viện KHCN Mỏ lập và được Sở Xây dựng Gia Lai thẩm định: Hệ số nở rời cho phép từ 1,20 đến 1,35. Do đó, số liệu thực tế hoàn toàn trùng khớp với hồ sơ thiết kế kỹ thuật mỏ được phê duyệt.\n\nIII. NGHĨA VỤ THUẾ ĐÃ NỘP VÀO NGÂN SÁCH NHÀ NƯỚC NĂM 2024:\n1. Thuế Tài nguyên (Mẫu 01/TAIN):\n   - Đã kê khai và nộp: 1.687.500.000 đồng vào KBNN huyện Ia Grai.\n2. Phí Bảo vệ môi trường đối với khai thác khoáng sản (NĐ 27/2023):\n   - Đã nộp: 450.000.000 đồng (112.500 m³ x 4.000 đ/m³).\n3. Tiền cấp quyền khai thác khoáng sản (NĐ 67/2019):\n   - Đã nộp đủ 100% thông báo thuế của Cục Thuế tỉnh Gia Lai: 520.000.000 đồng.\n\nIV. KIẾN NGHỊ:\nCông ty Kiểu Việt thực hiện nghiêm túc việc truyền dữ liệu camera và trạm cân về Sở TN&MT, kê khai thuế tài nguyên đúng sản lượng nguyên khai khai thác. Kính đề nghị Đoàn kiểm tra xác nhận doanh nghiệp đã hoàn thành đúng và đủ nghĩa vụ tài chính khoáng sản năm 2024.\n\n                                            CÔNG TY CỔ PHẦN KIỂU VIỆT\n        GIÁM ĐỐC ĐIỀU HÀNH MỎ                      TỔNG GIÁM ĐỐC\n          (Ký, ghi rõ họ tên)                   (Ký tên, đóng dấu)"
  },
  {
    "id": "mau-07",
    "code": "MẪU 07/LS-GO",
    "title": "Bộ hồ sơ giải trình nguồn gốc hợp pháp lâm sản gỗ tự nhiên và gỗ rừng trồng chế biến nội thất Kiểu Việt",
    "category": "Lâm sản & Hồ sơ nguồn gốc",
    "targetRisk": "Đoàn kiểm tra chuyển hồ sơ sang cơ quan kiểm lâm hoặc dọa loại chi phí mua gỗ tròn, gỗ hộp xẻ do nghi ngờ hồ sơ lâm sản không hợp pháp theo quy định mới",
    "legalBase": "Thông tư 26/2025/TT-BNNPTNT; Thông tư 84/2025/TT-BNNPTNT; Nghị định 102/2020/NĐ-CP; Nghị định 120/2024/NĐ-CP; Luật Lâm nghiệp",
    "decreeId": "tt-96-2015",
    "articleNum": 4,
    "decreeLabel": "Quy định nguồn gốc lâm sản hợp pháp",
    "description": "Chứng minh 100% khối lượng gỗ xẻ, gỗ thanh, ván bóc đưa vào xưởng mộc Kiểu Việt là lâm sản hợp pháp, có hóa đơn điện tử và bảng kê lâm sản xác nhận.",
    "requiredDossier": [
      "Bảng kê lâm sản (Mẫu theo Thông tư 26/2025/TT-BNNPTNT hoặc Thông tư 26/2022 tùy thời điểm mua) có xác nhận của Kiểm lâm sở tại (đối với gỗ tự nhiên trong nước).",
      "Tờ khai hải quan thông quan và Chứng thư kiểm dịch thực vật (đối với gỗ nhập khẩu: Gõ đỏ Nam Phi, Sồi Mỹ, Ash Tần bì).",
      "Hóa đơn giá trị gia tăng hợp pháp của bên bán kèm Giấy nộp tiền/UNC thanh toán qua ngân hàng.",
      "Sổ theo dõi nhập - xuất - chế biến lâm sản (Mẫu số 06) cập nhật hàng ngày tại xưởng mộc Kiểu Việt."
    ],
    "defenseArguments": [
      "100% các lô gỗ đưa vào sản xuất đều có nguồn gốc hợp pháp, hồ sơ chuỗi hành trình lâm sản khép kín từ khâu mua nguyên liệu đến thành phẩm đồ gỗ nội thất xuất xưởng.",
      "Đối với gỗ rừng trồng (tràm, keo, cao su), công ty thực hiện lập Bảng kê lâm sản theo đúng phân cấp và tự chịu trách nhiệm theo quy định của Bộ Nông nghiệp & PTNT.",
      "Toàn bộ giao dịch đều thanh toán qua tài khoản ngân hàng của Công ty Cổ phần Kiểu Việt, hàng hóa được vận chuyển có lệnh điều động xe và phiếu cân thực tế."
    ],
    "templateContent": "BẢN NHÁP NỘI BỘ — CÔNG TY CỔ PHẦN KIỂU VIỆT\nCỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM\nĐộc lập - Tự do - Hạnh phúc\n-------------------------\n\nCÔNG TY CỔ PHẦN KIỂU VIỆT\nSố: 51/CV-KV/2026\nV/v: Giải trình nguồn gốc hợp pháp nguồn nguyên liệu gỗ phục vụ sản xuất đồ gỗ nội thất năm 2024\n\n                                            Gia Lai, ngày 21 tháng 04 năm 2026\n\nKính gửi: ĐOÀN KIỂM TRA THUẾ THEO QUYẾT ĐỊNH SỐ 128/QĐ-CTGLA\n         CỤC THUẾ TỈNH GIA LAI\n\nNhằm phục vụ công tác kiểm tra tính hợp pháp, hợp lệ của chi phí nguyên vật liệu gỗ đưa vào sản xuất đồ gỗ nội thất năm 2024 của Công ty Cổ phần Kiểu Việt với tổng giá trị 12.850.000.000 đồng, Công ty xin giải trình chi tiết về nguồn gốc lâm sản và chuỗi hồ sơ pháp lý như sau:\n\nI. CĂN CỨ QUY ĐỊNH PHÁP LUẬT VỀ QUẢN LÝ LÂM SẢN:\n1. Nghị định số 102/2020/NĐ-CP của Chính phủ quy định Hệ thống bảo đảm gỗ hợp pháp Việt Nam (VNTLAS).\n2. Nghị định số 120/2024/NĐ-CP sửa đổi Nghị định 102/2020/NĐ-CP về phân loại doanh nghiệp chế biến và xuất khẩu gỗ.\n3. Thông tư số 26/2022/TT-BNNPTNT và Thông tư cập nhật số 26/2025/TT-BNNPTNT, Thông tư 84/2025/TT-BNNPTNT của Bộ Nông nghiệp & PTNT quy định về quản lý, truy xuất nguồn gốc lâm sản.\n\nII. PHÂN LOẠI NGUỒN GỖ NGUYÊN LIỆU ĐƯA VÀO SẢN XUẤT NĂM 2024:\n1. Nhóm 1: Gỗ tự nhiên nhập khẩu chính ngạch (Gỗ Gõ Đỏ Nam Phi, Gỗ Sồi Mỹ, Gỗ Ash Tần bì):\n   - Tổng khối lượng nhập kho: 185 m³. Giá trị: 6.200.000.000 đồng.\n   - Hồ sơ pháp lý chứng minh:\n     + Hóa đơn GTGT của các nhà nhập khẩu uy tín (Công ty CP Gỗ Việt Nam, Công ty XNK Lâm sản Hải Phòng).\n     + Bản sao Tờ khai hải quan hàng hóa nhập khẩu thông quan tại Cảng Quy Nhơn / Cảng Cát Lái.\n     + Giấy chứng nhận kiểm dịch thực vật (Phytosanitary Certificate) và Giấy chứng nhận xuất xứ hàng hóa (C/O).\n     + Bảng kê lâm sản nguồn gốc gỗ nhập khẩu có xác nhận mã số của Hạt Kiểm lâm cửa khẩu/cảng biển.\n\n2. Nhóm 2: Gỗ rừng trồng trong nước (Gỗ Cao su thanh lý, Keo lai xẻ sấy):\n   - Tổng khối lượng nhập kho: 340 m³. Giá trị: 3.450.000.000 đồng.\n   - Nguồn gốc: Thu mua từ các Nông trường Cao su Gia Lai và hộ trồng rừng có xác nhận nguồn gốc của UBND cấp xã hoặc Hạt Kiểm lâm khu vực Chư Păh, Ia Grai.\n   - Có Bảng kê lâm sản gỗ rừng trồng theo đúng mẫu quy định kèm hóa đơn điện tử hoặc Bảng kê thu mua hàng hóa nông lâm sản không có hóa đơn Mẫu 01/TNDN (đối với hộ gia đình trực tiếp khai thác bán ra) kèm CCCD.\n\n3. Nhóm 3: Ván công nghiệp MDF, HDF, MFC phủ Melamine/Veneer:\n   - Tổng giá trị: 3.200.000.000 đồng mua từ Nhà máy Gỗ An Cường và Nhà máy VRG Dongwha.\n   - Hóa đơn điện tử GTGT 100%, chứng nhận đạt chuẩn phát thải formaldehyde E1/CARB-P2.\n\nIII. QUẢN LÝ TẠI XƯỞNG VÀ TRUY XUẤT NGUỒN GỐC:\n- Xưởng mộc Kiểu Việt duy trì Sổ theo dõi nhập - xuất - chế biến lâm sản (Mẫu 06) có đóng dấu giáp lai của Hạt Kiểm lâm TP. Pleiku.\n- Mỗi đơn hàng nội thất xuất xưởng đều có Thẻ kho gắn mã QR code liên kết trực tiếp với lô gỗ nguyên liệu đầu vào.\n\nIV. ĐỀ NGHỊ:\nHồ sơ nguồn gốc lâm sản của Kiểu Việt hoàn toàn hợp pháp, minh bạch và đáp ứng đầy đủ điều kiện tính chi phí được trừ khi tính thuế TNDN theo quy định tại Thông tư 96/2015/TT-BTC. Kính mong Đoàn kiểm tra xác nhận.\n\n                                            CÔNG TY CỔ PHẦN KIỂU VIỆT\n        QUẢN LÝ KHO LÂM SẢN                        TỔNG GIÁM ĐỐC\n         (Ký, ghi rõ họ tên)                   (Ký tên, đóng dấu)"
  },
  {
    "id": "mau-08",
    "code": "MẪU 08/CP-BT",
    "title": "Bản giải trình định mức cấp phối bê tông thương phẩm (xi măng, cát, đá, phụ gia R7) và biên bản đối chiếu hao hụt xe bồn",
    "category": "Bê tông & Xây dựng",
    "targetRisk": "Đoàn kiểm tra nghi ngờ trạm trộn bê tông Kiểu Việt rút bớt xi măng hoặc tính dư chi phí hao hụt vận chuyển xe bồn (transit mixer), dọa bóc tách chi phí giá vốn",
    "legalBase": "Tiêu chuẩn Quốc gia TCVN 9382:2012; Định mức dự toán xây dựng công trình theo Thông tư 12/2021/TT-BXD; Khoản 2.3 Điều 4 Thông tư 96/2015/TT-BTC",
    "decreeId": "tt-96-2015",
    "articleNum": 4,
    "decreeLabel": "Thông tư 96/2015/TT-BTC — Điều 4",
    "description": "Bảo vệ giá thành bê tông thương phẩm mác 200, 250, 300, 350 của Trạm trộn bê tông Kiểu Việt cung cấp cho các dự án hạ tầng và dân dụng.",
    "requiredDossier": [
      "Thiết kế cấp phối bê tông chuẩn do Phòng thí nghiệm hợp chuẩn LAS-XD lập và được Chủ đầu tư/Tư vấn giám sát phê duyệt.",
      "Nhật ký mẻ trộn tự động xuất từ phần mềm điều khiển trạm trộn (ghi nhận chính xác từng kg xi măng, cát, đá, nước, phụ gia).",
      "Phiếu giao nhận bê tông thương phẩm có chữ ký của tài xế xe bồn và cán bộ kỹ thuật nhận tại hiện trường công trình.",
      "Kết quả thí nghiệm nén mẫu bê tông 7 ngày và 28 ngày đạt cường độ mác quy định."
    ],
    "defenseArguments": [
      "Cấp phối sản xuất thực tế tại trạm trộn Kiểu Việt được kiểm soát bằng cân điện tử tự động kết nối máy tính điều khiển, tuân thủ nghiêm ngặt thiết kế cấp phối của Phòng thí nghiệm LAS-XD.",
      "Tỷ lệ hao hụt trong quá trình trộn và vận chuyển xe bồn (rơi vãi, dính thùng bồn, thời gian vận chuyển đường đèo dốc Gia Lai) được xác định ở mức 1.5% - 2.0%, hoàn toàn phù hợp với Định mức Nhà nước ban hành tại Thông tư 12/2021/TT-BXD.",
      "Chất lượng bê tông đều được nghiệm thu bằng kết quả nén mẫu R28 đạt và vượt mác thiết kế, chứng minh vật tư đưa vào sản xuất là thực tế và hợp lý."
    ],
    "templateContent": "BẢN NHÁP NỘI BỘ — CÔNG TY CỔ PHẦN KIỂU VIỆT\nCỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM\nĐộc lập - Tự do - Hạnh phúc\n-------------------------\n\nCÔNG TY CỔ PHẦN KIỂU VIỆT\nSố: 52/CV-KV/2026\nV/v: Giải trình định mức cấp phối vật tư bê tông thương phẩm và tỷ lệ hao hụt vận chuyển xe bồn năm 2024\n\n                                            Gia Lai, ngày 22 tháng 04 năm 2026\n\nKính gửi: ĐOÀN KIỂM TRA THUẾ THEO QUYẾT ĐỊNH SỐ 128/QĐ-CTGLA\n         CỤC THUẾ TỈNH GIA LAI\n\nCăn cứ yêu cầu của Đoàn kiểm tra tại Biên bản làm việc số 05/BBLV ngày 19/04/2026 về việc giải trình định mức tiêu hao xi măng, cát, đá, phụ gia và tỷ lệ hao hụt vận chuyển bê tông thương phẩm từ Trạm trộn Bê tông Kiểu Việt (TP. Pleiku) đến chân các công trình xây dựng năm 2024, Công ty Cổ phần Kiểu Việt trân trọng giải trình như sau:\n\nI. CĂN CỨ PHÁP LÝ VÀ TIÊU CHUẨN KỸ THUẬT:\n1. Tiêu chuẩn Quốc gia TCVN 9382:2012 \"Chọn thành phần bê tông nặng - Hướng dẫn cơ bản\".\n2. Định mức hao hụt vật tư trong thi công xây dựng ban hành kèm theo Thông tư số 12/2021/TT-BXD của Bộ Xây dựng.\n3. Khoản 2.3 Điều 4 Thông tư 96/2015/TT-BTC của Bộ Tài chính về định mức tiêu hao nguyên vật liệu phục vụ sản xuất.\n\nII. HỆ THỐNG THIẾT KẾ CẤP PHỐI CHUẨN CỦA TRẠM TRỘN KIỂU VIỆT:\n1. Toàn bộ các mác bê tông thương phẩm (M200, M250, M300, M350) đều có Bảng Thiết kế thành phần cấp phối bê tông do Phòng thí nghiệm chuyên ngành xây dựng (LAS-XD 124) lập bằng phương pháp thực nghiệm cơ lý cát, đá mỏ Kiểu Việt và Xi măng PCB40 Vicem Sông Gianh.\n2. Ví dụ cụ thể đối với mác Bê tông phổ biến nhất M250 (Độ sụt 12 ± 2 cm, dùng phụ gia hóa dẻo chậm đông kết Sikament R7):\n   - Xi măng PCB40:           345 kg/m³\n   - Cát vàng sông Ayun:      0,48 m³ (680 kg/m³)\n   - Đá dăm 1x2 mỏ Kiểu Việt: 0,82 m³ (1.180 kg/m³)\n   - Nước sạch:               175 lít\n   - Phụ gia R7:              2,8 lít\n3. Hệ thống cân định lượng của Trạm trộn được điều khiển tự động bằng PLC phần mềm máy tính, định kỳ 06 tháng/lần được Trung tâm Kỹ thuật Tiêu chuẩn Đo lường Chất lượng kiểm định cấp giấy chứng nhận sai số cân dưới 1%.\n\nIII. GIẢI TRÌNH VỀ TỶ LỆ HAO HỤT VẬN CHUYỂN XE BỒN:\n1. Đoàn kiểm tra đặt nghi vấn về tỷ lệ hao hụt bê tông từ trạm trộn đến công trường là 2,0%:\n2. Công ty xin làm rõ:\n   - Theo Bảng 2 Phụ lục II Thông tư 12/2021/TT-BXD của Bộ Xây dựng: Định mức hao hụt bê tông thương phẩm trong khâu vận chuyển bằng xe bồn và bơm bê tông vào vị trí kết cấu cho phép hao hụt từ 1,5% đến 2,5% (gồm hao hụt bám dính thành bồn trộn, hao hụt bám dính ống bơm cần bê tông và hao hụt thử độ sụt hiện trường).\n   - Địa hình vận chuyển tại tỉnh Gia Lai có nhiều đèo dốc và đường gồ ghề (vận chuyển đi Chư Prông, Đak Đoa, Mang Yang cự ly trung bình 15 - 35 km), thời gian xe bồn quay trộn trên đường kéo dài làm tăng độ bay hơi nước và dính bám thành thùng.\n   - Do đó, tỷ lệ hao hụt 2,0% là hoàn toàn khách quan, phù hợp với thực tiễn sản xuất và định mức kinh tế kỹ thuật của Bộ Xây dựng.\n\nIV. CHỨNG MINH BẰNG KẾT QUẢ THÍ NGHIỆM ĐỘNG CƠ:\n- 100% các mẻ bê tông giao nhận tại hiện trường đều được đúc mẫu nén 150x150x150 mm.\n- Kết quả thí nghiệm nén mẫu tại tuổi 28 ngày (R28) của Trung tâm Kiểm định Chất lượng Xây dựng Gia Lai đều đạt từ 102% đến 115% cường độ thiết kế. Điều này chứng minh Công ty Kiểu Việt đưa đủ 100% lượng xi măng và cốt liệu vào mẻ trộn, hoàn toàn không có việc rút bớt vật tư làm sai lệch giá thành.\n\nV. HỒ SƠ LƯU KÈM THEO:\n1. Kết quả thí nghiệm thiết kế cấp phối của Phòng LAS-XD.\n2. Dữ liệu trích xuất tự động từ máy tính trạm trộn cho từng mẻ hàng.\n3. Phiếu giao nhận bê tông thương phẩm có ký nhận khối lượng của Tư vấn giám sát.\n4. Phiếu kết quả thử nghiệm cường độ nén bê tông R28.\n\nKính đề nghị Đoàn kiểm tra chấp thuận chi phí giá vốn bê tông thương phẩm của Công ty Cổ phần Kiểu Việt.\n\n                                            CÔNG TY CỔ PHẦN KIỂU VIỆT\n        KỸ SƯ TRƯỞNG TRẠM BÊ TÔNG                  TỔNG GIÁM ĐỐC\n           (Ký, ghi rõ họ tên)                  (Ký tên, đóng dấu)"
  },
  {
    "id": "mau-09",
    "code": "MẪU 09/LV-LK",
    "title": "Công văn giải trình chi phí lãi vay giao dịch liên kết và tính toán khống chế trần 30% EBITDA",
    "category": "Giao dịch liên kết & Lãi vay",
    "targetRisk": "Đoàn kiểm tra áp trần 30% EBITDA theo Nghị định 132/2020/NĐ-CP do phát sinh giao dịch vay/mượn vốn từ cá nhân Giám đốc hoặc cổ đông điều hành chiếm trên 10% vốn góp, đòi loại toàn bộ chi phí lãi vay phát sinh.",
    "legalBase": "Điểm a Khoản 2 Điều 5 và Khoản 3 Điều 16 Nghị định 132/2020/NĐ-CP; Thông tư 96/2015/TT-BTC",
    "decreeId": "nd-132-2020",
    "articleNum": 16,
    "decreeLabel": "Nghị định 132/2020/NĐ-CP — Điều 16 K3",
    "description": "Dùng để giải trình khi DN có vay mượn cá nhân là người đại diện pháp luật hoặc ngân hàng, chứng minh mối quan hệ độc lập hoặc tính toán đúng EBITDA loại trừ lãi vay hợp lệ chuyển sang 5 năm tiếp theo.",
    "requiredDossier": [
      "Hợp đồng vay vốn kinh doanh và các phụ lục gia hạn (nếu có).",
      "Chứng từ giải ngân qua tài khoản ngân hàng của Công ty Kiểu Việt.",
      "Bảng tính toán EBITDA (Lợi nhuận thuần + Chi phí tài chính lãi vay + Khấu hao TSCĐ) năm tài chính kèm Báo cáo tài chính đã kiểm toán.",
      "Bảng theo dõi chi phí lãi vay không được trừ chuyển sang 5 kỳ tính thuế tiếp theo theo Phụ lục I NĐ 132/2020."
    ],
    "defenseArguments": [
      "Khoản vay mượn từ Giám đốc/Cổ đông là khoản tài trợ vốn lưu động ngắn hạn khẩn cấp phục vụ trực tiếp việc nhập gỗ và mua xi măng, lãi suất bằng 0% hoặc thấp hơn lãi suất ngân hàng thương mại tại Gia Lai, không làm phát sinh chi phí lãi vay tính vào giá thành làm giảm thuế TNDN.",
      "Đối với các khoản vay ngân hàng thương mại, ngân hàng là tổ chức tín dụng độc lập hoạt động theo Luật Các tổ chức tín dụng, không phải là bên liên kết theo Điểm d Khoản 2 Điều 5 NĐ 132/2020 nếu số dư nợ vay không vượt quá 25% vốn góp chủ sở hữu và không chiếm trên 50% tổng các khoản nợ.",
      "Trường hợp thuộc phạm vi NĐ 132/2020, phần chi phí lãi vay vượt mức 30% EBITDA được kết chuyển vào chi phí sản xuất kinh doanh của kỳ tính thuế tiếp theo trong thời hạn 5 năm liên tục theo đúng Khoản 3 Điều 16 NĐ 132/2020."
    ],
    "templateContent": "BẢN NHÁP NỘI BỘ — CÔNG TY CỔ PHẦN KIỂU VIỆT\nCỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM\nĐộc lập - Tự do - Hạnh phúc\n-------------------------\n\nCÔNG TY CỔ PHẦN KIỂU VIỆT\nSố: 52/CV-KV/2026\nV/v: Giải trình chi phí lãi vay và xác định quan hệ liên kết theo Nghị định số 132/2020/NĐ-CP năm 2024\n\n                                            Gia Lai, ngày 18 tháng 04 năm 2026\n\nKính gửi: ĐOÀN KIỂM TRA THUẾ THEO QUYẾT ĐỊNH SỐ 128/QĐ-CTGLA\n         CỤC THUẾ TỈNH GIA LAI\n\n- Tên doanh nghiệp: CÔNG TY CỔ PHẦN KIỂU VIỆT\n- Mã số thuế: 5900... (Mã số thuế Kiểu Việt)\n- Trụ sở: Đường Trường Chinh, Phường Phù Đổng, TP. Pleiku, Tỉnh Gia Lai\n\nVề nội dung rà soát chi phí tài chính (lãi vay) và xác định giao dịch liên kết theo Nghị định 132/2020/NĐ-CP, Công ty Cổ phần Kiểu Việt xin trân trọng giải trình cụ thể như sau:\n\nI. SỐ LIỆU CHI PHÍ TÀI CHÍNH VÀ VAY VỐN NĂM 2024:\n1. Tổng chi phí lãi vay phát sinh trong năm 2024 (TK 635): 1.850.000.000 đồng.\n2. Nguồn vốn vay:\n   - Vay Ngân hàng BIDV Chi nhánh Gia Lai: 1.850.000.000 đồng tiền lãi. Dư nợ bình quân 18 tỷ đồng (Vốn điều lệ thực góp của DN: 45 tỷ đồng).\n   - Vay mượn cá nhân Giám đốc điều hành: Mượn vốn lưu động ngắn hạn bổ sung mua nguyên liệu gỗ và đá nổ mìn, lãi suất 0% (không phát sinh chi phí lãi vay).\n3. Xác định chỉ số EBITDA năm 2024:\n   - Lợi nhuận thuần từ HĐKD: 3.200.000.000 đồng.\n   - Chi phí tài chính (lãi vay): 1.850.000.000 đồng.\n   - Chi phí khấu hao TSCĐ (TK 214): 2.450.000.000 đồng.\n   => Tổng EBITDA = 3.200.000.000 + 1.850.000.000 + 2.450.000.000 = 7.500.000.000 đồng.\n   => Mức trần chi phí lãi vay được trừ (30% EBITDA) = 7.500.000.000 x 30% = 2.250.000.000 đồng.\n\nII. KẾT LUẬN VÀ CĂN CỨ PHÁP LÝ:\n1. Mức trần 30% EBITDA của Công ty Kiểu Việt là 2.250.000.000 đồng, trong khi tổng chi phí lãi vay thực tế phát sinh chỉ là 1.850.000.000 đồng. Toàn bộ chi phí lãi vay đều nằm dưới mức trần 30% EBITDA.\n2. Đối với khoản mượn vốn của Giám đốc với lãi suất 0%, Công ty không ghi nhận chi phí lãi vay, không làm giảm thu nhập chịu thuế TNDN, do đó không vi phạm nguyên tắc giao dịch độc lập.\n3. Kính đề nghị Đoàn kiểm tra chấp thuận toàn bộ chi phí tài chính hợp lý của Công ty.\n\n                                            CÔNG TY CỔ PHẦN KIỂU VIỆT\n        KẾ TOÁN TRƯỞNG                             TỔNG GIÁM ĐỐC\n     (Ký, ghi rõ họ tên)                      (Ký tên, đóng dấu)"
  },
  {
    "id": "mau-10",
    "code": "MẪU 10/HD-RR",
    "title": "Báo cáo giải trình tính có thật và hợp pháp của hóa đơn GTGT đầu vào từ đối tác có cảnh báo rủi ro",
    "category": "Hóa đơn & Thuế GTGT",
    "targetRisk": "Đoàn kiểm tra tra cứu hệ thống phát hiện doanh nghiệp bên bán bỏ trốn khỏi địa chỉ kinh doanh hoặc bị cơ quan thuế tạm ngừng mã số thuế sau ngày phát sinh giao dịch, dọa bóc thuế GTGT và xuất toán chi phí TNDN.",
    "legalBase": "Điều 4 Thông tư 96/2015/TT-BTC; Khoản 2 Điều 15 Thông tư 219/2013/TT-BTC; Công văn 11797/BTC-TCT",
    "decreeId": "tt-96-2015",
    "articleNum": 4,
    "decreeLabel": "Thông tư 96/2015/TT-BTC — Điều 4",
    "description": "Sử dụng khi cơ quan thuế gửi danh sách hóa đơn từ các doanh nghiệp có rủi ro cao, chứng minh nghiệp vụ mua bán là có thật, giao nhận đầy đủ và thanh toán ngân hàng hợp pháp.",
    "requiredDossier": [
      "Hợp đồng kinh tế và biên bản thương thảo mua vật tư (xi măng, sắt thép, phụ gia).",
      "Biên bản giao nhận hàng hóa tại kho xưởng hoặc chân công trình kèm phiếu cân xe tải.",
      "Ủy nhiệm chi và Giấy báo Nợ ngân hàng thanh toán đúng tài khoản bên bán đăng ký.",
      "Thông báo tình trạng hoạt động của người nộp thuế tại thời điểm ký kết hợp đồng và xuất hóa đơn."
    ],
    "defenseArguments": [
      "Tại thời điểm Công ty Kiểu Việt thực hiện giao dịch và tiếp nhận hóa đơn điện tử, doanh nghiệp bên bán vẫn đang hoạt động bình thường trên Cổng thông tin Tổng cục Thuế, không thuộc trạng thái cưỡng chế hay đóng mã số thuế.",
      "Hàng hóa mua vào (cát, sỏi, sắt thép xây dựng) đã được đưa vào trạm trộn và công trường thực tế, có nhật ký thi công, kết quả thí nghiệm nén mẫu và nghiệm thu của Chủ đầu tư.",
      "Toàn bộ tiền hàng đều được thanh toán qua tài khoản ngân hàng của Công ty Kiểu Việt sang tài khoản doanh nghiệp bên bán theo đúng Điều 15 Thông tư 219/2013/TT-BTC, không có hiện tượng rút tiền mặt quay vòng."
    ],
    "templateContent": "BẢN NHÁP NỘI BỘ — CÔNG TY CỔ PHẦN KIỂU VIỆT\nCỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM\nĐộc lập - Tự do - Hạnh phúc\n-------------------------\n\nCÔNG TY CỔ PHẦN KIỂU VIỆT\nSố: 55/CV-KV/2026\nV/v: Giải trình tính có thật và hợp pháp của các giao dịch mua hàng theo Hóa đơn GTGT đầu vào năm 2024\n\n                                            Gia Lai, ngày 19 tháng 04 năm 2026\n\nKính gửi: ĐOÀN KIỂM TRA THUẾ CỤC THUẾ TỈNH GIA LAI\n\nCông ty Cổ phần Kiểu Việt xin giải trình về tính có thật của các hóa đơn mua vật tư (đá xây dựng, phụ gia hóa dẻo) từ bên bán có cảnh báo rủi ro:\n\n1. THỜI ĐIỂM GIAO DỊCH:\n- Các hóa đơn GTGT phát sinh từ tháng 03/2024 đến tháng 06/2024.\n- Tại thời điểm này, bên bán hoàn toàn hoạt động bình thường, hóa đơn có mã của cơ quan thuế hợp lệ. Cơ quan thuế chỉ phát thông báo người nộp thuế không hoạt động tại địa chỉ đăng ký sau ngày giao dịch 5 tháng.\n\n2. CHỨNG TỪ GIAO NHẬN THỰC TẾ:\n- Toàn bộ 450 tấn phụ gia đã được vận chuyển đến Trạm trộn Kiểu Việt, có phiếu cân xe, chữ ký của thủ kho và tài xế.\n- Toàn bộ khối lượng đã được đưa vào sản xuất bê tông M300 cung ứng cho công trình Đường tránh TP. Pleiku đã được Sở GTVT nghiệm thu.\n\n3. THANH TOÁN NGÂN HÀNG:\n- 100% tiền hàng được thanh toán chuyển khoản từ TK BIDV của Kiểu Việt sang TK của bên bán, kèm sao kê ngân hàng đối chiếu.\n\nĐề nghị Đoàn kiểm tra ghi nhận giao dịch kinh tế có thật và không bóc tách chi phí hợp lý của Công ty.\n\n                                            CÔNG TY CỔ PHẦN KIỂU VIỆT\n        KẾ TOÁN TRƯỞNG                             TỔNG GIÁM ĐỐC\n     (Ký, ghi rõ họ tên)                      (Ký tên, đóng dấu)"
  },
  {
    "id": "mau-11",
    "code": "MẪU 11/DD-154",
    "title": "Bản giải trình phương pháp kiểm kê và đánh giá chi phí dở dang cuối kỳ TK 154 xưởng mộc và công trình",
    "category": "Giá thành & Sản xuất",
    "targetRisk": "Đoàn kiểm tra nghi ngờ chi phí dở dang cuối kỳ TK 154 để treo chi phí hoặc kết chuyển khống vào giá vốn 632 để giảm trừ nghĩa vụ thuế TNDN trong năm.",
    "legalBase": "Chuẩn mực kế toán Việt Nam số 02 (VAS 02); Thông tư 200/2014/TT-BTC; Thông tư 99/2025/TT-BTC",
    "decreeId": "vas-02",
    "decreeLabel": "Chuẩn mực Kế toán VAS 02 — Hàng tồn kho",
    "description": "Giải trình phương pháp đánh giá sản phẩm dở dang theo chi phí nguyên vật liệu trực tiếp hoặc khối lượng xây lắp dở dang tại ngày 31/12.",
    "requiredDossier": [
      "Biên bản kiểm kê sản phẩm dở dang xưởng mộc ngày 31/12.",
      "Bảng xác định tỷ lệ hoàn thành theo từng công đoạn sản xuất (mộc thô, chà nhám, sơn lót, phụ kiện).",
      "Bảng phân bổ chi phí dở dang chi tiết theo từng đơn hàng/công trình.",
      "Bảng đối chiếu giá trị dở dang TK 154 trên Bảng cân đối tài khoản và BCTC."
    ],
    "defenseArguments": [
      "Công ty Kiểu Việt áp dụng phương pháp đánh giá sản phẩm dở dang xưởng mộc theo Chi phí nguyên vật liệu trực tiếp đã được đăng ký nhất quán trong Thuyết minh BCTC.",
      "Đối với các công trình thi công xây dựng kéo dài, giá trị dở dang TK 154 phản ánh trung thực toàn bộ chi phí vật tư, nhân công, ca máy lũy kế chưa được Chủ đầu tư nghiệm thu A-B giai đoạn.",
      "Tại ngày 31/12 hàng năm, Hội đồng kiểm kê gồm Trưởng xưởng sản xuất, Kế toán giá thành và Ban Kiểm soát đều tiến hành đo đạc thực địa và lập Biên bản kiểm kê có xác nhận đầy đủ."
    ],
    "templateContent": "BẢN NHÁP NỘI BỘ — CÔNG TY CỔ PHẦN KIỂU VIỆT\nCỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM\nĐộc lập - Tự do - Hạnh phúc\n-------------------------\n\nCÔNG TY CỔ PHẦN KIỂU VIỆT\nSố: 58/CV-KV/2026\nV/v: Giải trình phương pháp đánh giá và số dư chi phí SXKD dở dang TK 154 tại ngày 31/12/2024\n\n                                            Gia Lai, ngày 20 tháng 04 năm 2026\n\nKính gửi: ĐOÀN KIỂM TRA THUẾ CỤC THUẾ TỈNH GIA LAI\n\nCông ty Cổ phần Kiểu Việt xin báo cáo chi tiết về phương pháp tập hợp và đánh giá chi phí dở dang cuối kỳ TK 154 năm 2024:\n\n1. TỔNG GIÁ TRỊ DỞ DANG TẠI NGÀY 31/12/2024: 6.420.000.000 đồng.\n   - Xưởng mộc nội thất: 2.150.000.000 đồng.\n   - Công trình xây lắp hạ tầng Khu dân cư Chư Sê: 4.270.000.000 đồng.\n\n2. NGUYÊN TẮC VÀ PHƯƠNG PHÁP ĐÁNH GIÁ:\n   - Xưởng mộc: Áp dụng phương pháp đánh giá theo Chi phí NVL trực tiếp (Gỗ nguyên khối + Ván MDF chống ẩm E1 + Sơn PU). Chi phí nhân công và SXC được kết chuyển toàn bộ vào kỳ sản phẩm hoàn thành nhập kho theo Chuẩn mực VAS 02.\n   - Công trình xây lắp: Tập hợp theo từng hạng mục theo Thông tư 200/2014/TT-BTC. Tại ngày 31/12, các hạng mục nền móng và cừ larsen đã hoàn thành nhưng chưa đến kỳ nghiệm thu giai đoạn thanh toán theo Hợp đồng, nên toàn bộ chi phí thực tế phát sinh được lưu giữ trung thực trên TK 154, không kết chuyển vội vào TK 632.\n\n3. HỒ SƠ CHỨNG MINH:\n   - Biên bản kiểm kê hiện trường ngày 31/12/2024 có hình ảnh chụp thực tế từng cụm sản phẩm mộc thô.\n   - Sổ chi tiết tài khoản 154 khớp đúng 100% với Bảng cân đối kế toán.\n\n                                            CÔNG TY CỔ PHẦN KIỂU VIỆT\n        KẾ TOÁN GIÁ THÀNH                          TỔNG GIÁM ĐỐC\n     (Ký, ghi rõ họ tên)                      (Ký tên, đóng dấu)"
  },
  {
    "id": "mau-12",
    "code": "MẪU 12/NL-XB",
    "title": "Bản giải trình định mức tiêu hao nhiên liệu (dầu DO, xăng) cho đoàn xe bồn bê tông, xe bơm và máy mỏ đá",
    "category": "Vật liệu xây dựng & Bê tông",
    "targetRisk": "Đoàn kiểm tra nghi ngờ chi phí xăng dầu vượt định mức quy định, cho rằng doanh nghiệp mua khống hóa đơn dầu diesel để tăng chi phí hợp lý.",
    "legalBase": "Khoản 2.3 Điều 4 Thông tư 96/2015/TT-BTC; Thông tư 12/2021/TT-BXD của Bộ Xây dựng",
    "decreeId": "tt-96-2015",
    "articleNum": 4,
    "decreeLabel": "Thông tư 96/2015/TT-BTC — Điều 4 K2.3",
    "description": "Giải trình định mức tiêu hao dầu diesel theo ca máy, cự ly vận chuyển và độ sụt bê tông, chứng minh bằng dữ liệu GPS giám sát hành trình.",
    "requiredDossier": [
      "Quy chế quản lý và Định mức tiêu hao nhiên liệu năm 2024 của Tổng Giám đốc Kiểu Việt phê duyệt.",
      "Dữ liệu hành trình GPS trích xuất từ hộp đen của 12 xe bồn bê tông và 02 xe bơm cần.",
      "Nhật trình chạy xe và Phiếu cấp phát xăng dầu nội bộ có chữ ký tài xế và thủ kho.",
      "Hóa đơn điện tử mua dầu DO từ Tập đoàn Xăng dầu Petrolimex hoặc đại lý chính thức."
    ],
    "defenseArguments": [
      "Định mức nhiên liệu của Kiểu Việt được xây dựng căn cứ theo Thông tư 12/2021/TT-BXD của Bộ Xây dựng, có tính đến hệ số đường đồi dốc Tây Nguyên (độ dốc >10%) và thời gian xe bồn phải nổ máy quay thùng liên tục để chống đông kết bê tông.",
      "Toàn bộ 100% xe bồn, xe tải ben đều lắp đặt thiết bị giám sát hành trình hợp chuẩn, trích xuất chính xác km xe chạy và số giờ bơm cần vận hành.",
      "Chi phí dầu diesel phục vụ mỏ đá (máy xúc bánh xích, máy khoan đá tự hành) được kiểm soát nghiêm ngặt qua đồng hồ đo giờ máy làm việc (hour-meter)."
    ],
    "templateContent": "BẢN NHÁP NỘI BỘ — CÔNG TY CỔ PHẦN KIỂU VIỆT\nCỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM\nĐộc lập - Tự do - Hạnh phúc\n-------------------------\n\nCÔNG TY CỔ PHẦN KIỂU VIỆT\nSố: 61/CV-KV/2026\nV/v: Giải trình định mức tiêu hao nhiên liệu dầu DO 0.05S đoàn xe bồn bê tông và máy mỏ đá năm 2024\n\n                                            Gia Lai, ngày 21 tháng 04 năm 2026\n\nKính gửi: ĐOÀN KIỂM TRA THUẾ CỤC THUẾ TỈNH GIA LAI\n\nCông ty Cổ phần Kiểu Việt xin trân trọng giải trình định mức và chi phí nhiên liệu dầu DO 0.05S năm 2024:\n\n1. ĐẶC THÙ VẬN HÀNH ĐOÀN XE KIỂU VIỆT:\n- Đội xe bồn vận chuyển bê tông thương phẩm (dung tích bồn 10m3): Khác với xe tải chở hàng thông thường, xe bồn bê tông bắt buộc phải vận hành động cơ PTO lai bồn trộn quay liên tục với tốc độ 4-6 vòng/phút trong toàn bộ hành trình vận chuyển và thời gian chờ tại công trường.\n- Địa hình Gia Lai đặc thù nhiều dốc đèo, cự ly vận chuyển bình quân 25km/chuyến.\n\n2. ĐỊNH MỨC KINH TẾ KỸ THUẬT BAN HÀNH:\n- Căn cứ Quyết định số 05/QĐ-KV/2024 ngày 08/01/2024:\n  + Định mức xe bồn 10m3 có tải: 42 lít DO/100km.\n  + Định mức quay bồn chờ đổ và bơm cần: 8 lít DO/giờ hoạt động.\n  + Mức tiêu hao này hoàn toàn phù hợp với Tiêu chuẩn định mức ca máy theo Thông tư 12/2021/TT-BXD của Bộ Xây dựng.\n\n3. ĐỐI CHIẾU DỮ LIỆU GPS VÀ HÓA ĐƠN:\n- Tổng số lít dầu tiêu thụ: 185.400 lít (Trị giá 3.420.000.000 đồng).\n- Số km vận hành trích xuất từ hệ thống giám sát hành trình GPS: 412.000 km.\n- Số giờ bơm bê tông và quay thùng tại công trình: 1.540 giờ.\n=> Tỷ lệ tiêu hao thực tế đạt 98.6% so với định mức phê duyệt. Toàn bộ hóa đơn mua dầu đều do Petrolimex Gia Lai xuất trực tiếp, thanh toán chuyển khoản đầy đủ.\n\n                                            CÔNG TY CỔ PHẦN KIỂU VIỆT\n        ĐỘI TRƯỞNG VẬN TẢI                          TỔNG GIÁM ĐỐC\n     (Ký, ghi rõ họ tên)                      (Ký tên, đóng dấu)"
  },
  {
    "id": "mau-13",
    "code": "MẪU 13/TT-NH",
    "title": "Bảng kê và Hồ sơ giải trình điều kiện thanh toán không dùng tiền mặt qua ngân hàng và bù trừ công nợ",
    "category": "Thanh toán & Ngân hàng",
    "targetRisk": "Đoàn kiểm tra soi các giao dịch thanh toán trên 20 triệu đồng bị thiếu ủy nhiệm chi, thanh toán sai tài khoản hoặc biên bản cấn trừ công nợ không đủ điều kiện pháp lý, đòi bóc thuế GTGT đầu vào.",
    "legalBase": "Điều 15 Thông tư 219/2013/TT-BTC; Điều 6 Thông tư 78/2014/TT-BTC; Điều 4 Thông tư 96/2015/TT-BTC",
    "decreeId": "tt-219-2013",
    "articleNum": 15,
    "decreeLabel": "Thông tư 219/2013/TT-BTC — Điều 15",
    "description": "Giải trình tính hợp lệ của các hình thức thanh toán không dùng tiền mặt: chuyển khoản ngân hàng, cấn trừ công nợ hai chiều, ủy quyền thanh toán ba bên đúng luật.",
    "requiredDossier": [
      "Ủy nhiệm chi ngân hàng và Giấy báo Nợ bản gốc có dấu ngân hàng.",
      "Biên bản đối chiếu và thỏa thuận bù trừ công nợ có chữ ký người đại diện pháp luật hai bên.",
      "Điều khoản thanh toán quy định rõ phương thức bù trừ hoặc thanh toán qua bên thứ ba trong Hợp đồng kinh tế.",
      "Sao kê tài khoản ngân hàng thể hiện rõ ràng các dòng tiền giao dịch."
    ],
    "defenseArguments": [
      "Theo Khoản 3 Điều 15 Thông tư 219/2013/TT-BTC: Hàng hóa, dịch vụ mua vào từng lần theo hóa đơn từ 20 triệu đồng trở lên được coi là thanh toán không dùng tiền mặt khi thực hiện bù trừ công nợ giữa hàng hóa mua vào và bán ra, với điều kiện phương thức này được quy định cụ thể trong hợp đồng.",
      "Toàn bộ các biên bản bù trừ công nợ của Kiểu Việt đều lập bằng văn bản, đối chiếu công nợ chi tiết đến từng số hóa đơn.",
      "Các tài khoản thanh toán của nhà cung cấp đều là tài khoản mở tại tổ chức tín dụng hợp pháp và đã được thông báo trên cổng thông tin cơ quan thuế."
    ],
    "templateContent": "BẢN NHÁP NỘI BỘ — CÔNG TY CỔ PHẦN KIỂU VIỆT\nCỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM\nĐộc lập - Tự do - Hạnh phúc\n-------------------------\n\nCÔNG TY CỔ PHẦN KIỂU VIỆT\nSố: 64/CV-KV/2026\nV/v: Giải trình hồ sơ thanh toán không dùng tiền mặt và biên bản bù trừ công nợ mua bán vật tư năm 2024\n\n                                            Gia Lai, ngày 22 tháng 04 năm 2026\n\nKính gửi: ĐOÀN KIỂM TRA THUẾ CỤC THUẾ TỈNH GIA LAI\n\nCông ty Cổ phần Kiểu Việt xin trân trọng giải trình về điều kiện chứng từ thanh toán không dùng tiền mặt đối với các giao dịch trên 20 triệu đồng:\n\n1. ĐỐI VỚI HÌNH THỨC CHUYỂN KHOẢN NGÂN HÀNG:\n- 100% các hóa đơn từ 20 triệu đồng trở lên đều được thanh toán từ tài khoản thanh toán mở tại BIDV Gia Lai của Công ty Kiểu Việt sang đúng số tài khoản của bên bán ghi trên hóa đơn và hợp đồng.\n- Kèm theo là toàn bộ Giấy báo Nợ và Sổ phụ ngân hàng có đóng dấu xác nhận của BIDV.\n\n2. ĐỐI VỚI HÌNH THỨC BÙ TRỪ CÔNG NỢ HAI CHIỀU:\n- Căn cứ Hợp đồng có điều khoản quy định rõ: Hai bên được quyền đối trừ công nợ định kỳ hàng quý.\n- Biên bản cấn trừ công nợ ghi rõ chi tiết từng số hóa đơn mua vào - bán ra, số tiền bù trừ và phần chênh lệch chuyển khoản qua ngân hàng.\n- Căn cứ Khoản 3 Điều 15 Thông tư 219/2013/TT-BTC, hồ sơ này hoàn toàn đủ điều kiện khấu trừ thuế GTGT đầu vào và tính vào chi phí được trừ khi xác định thuế TNDN.\n\n                                            CÔNG TY CỔ PHẦN KIỂU VIỆT\n        KẾ TOÁN THANH TOÁN                         TỔNG GIÁM ĐỐC\n     (Ký, ghi rõ họ tên)                      (Ký tên, đóng dấu)"
  },
  {
    "id": "mau-14",
    "code": "MẪU 14/DP-229",
    "title": "Báo cáo xử lý và Hồ sơ trích lập dự phòng nợ phải thu khó đòi (TK 2293) theo Thông tư 48/2019/TT-BTC",
    "category": "Chi phí & Quản lý tài chính",
    "targetRisk": "Đoàn kiểm tra đòi loại chi phí trích lập dự phòng nợ khó đòi đưa vào chi phí quản lý (TK 642), cho rằng thiếu biên bản đối chiếu công nợ hoặc chưa quá hạn theo quy định.",
    "legalBase": "Điều 6 Thông tư 48/2019/TT-BTC; Thông tư 24/2022/TT-BTC của Bộ Tài chính",
    "decreeId": "tt-48-2019",
    "articleNum": 6,
    "decreeLabel": "Thông tư 48/2019/TT-BTC — Điều 6",
    "description": "Hồ sơ chứng minh các khoản nợ quá hạn từ 6 tháng đến trên 3 năm đủ điều kiện trích lập từ 30% đến 100% theo đúng quy định pháp luật.",
    "requiredDossier": [
      "Biên bản đối chiếu công nợ hoặc văn bản đôn đốc đòi nợ gửi bảo đảm qua bưu điện.",
      "Hợp đồng kinh tế và hóa đơn chứng minh thời hạn thanh toán đã quá hạn.",
      "Biên bản họp Hội đồng trích lập dự phòng của Ban Tổng Giám đốc Kiểu Việt.",
      "Bảng tính toán mức trích lập chi tiết từng con nợ tại thời điểm lập BCTC 31/12."
    ],
    "defenseArguments": [
      "Theo Điều 6 Thông tư 48/2019/TT-BTC: Khoản nợ phải thu quá hạn thanh toán từ 06 tháng đến dưới 01 năm được trích lập 30%; từ 01 năm đến dưới 02 năm trích lập 50%; từ 02 năm đến dưới 03 năm trích lập 70%; từ 03 năm trở lên trích lập 100%.",
      "Trường hợp khách hàng không ký biên bản đối chiếu công nợ, Công ty đã gửi công văn đôn đốc thu hồi nợ qua bưu điện kèm phiếu gửi bảo đảm (có chữ ký nhận của bưu tá), hoàn toàn đủ điều kiện trích lập theo Khoản 1 Điều 6 Thông tư 48/2019/TT-BTC.",
      "Khoản dự phòng đã hoàn nhập đúng quy định vào thu nhập khác khi khách hàng trả nợ trong năm tiếp theo, không trốn tránh nghĩa vụ thuế."
    ],
    "templateContent": "BẢN NHÁP NỘI BỘ — CÔNG TY CỔ PHẦN KIỂU VIỆT\nCỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM\nĐộc lập - Tự do - Hạnh phúc\n-------------------------\n\nCÔNG TY CỔ PHẦN KIỂU VIỆT\nSố: 68/CV-KV/2026\nV/v: Giải trình hồ sơ trích lập dự phòng nợ phải thu khó đòi năm 2024 theo Thông tư 48/2019/TT-BTC\n\n                                            Gia Lai, ngày 23 tháng 04 năm 2026\n\nKính gửi: ĐOÀN KIỂM TRA THUẾ CỤC THUẾ TỈNH GIA LAI\n\nCông ty Cổ phần Kiểu Việt xin trân trọng giải trình về khoản trích lập dự phòng nợ phải thu khó đòi (TK 2293) ghi nhận vào chi phí quản lý doanh nghiệp năm 2024:\n\n1. TỔNG SỐ TRÍCH LẬP: 450.000.000 đồng.\n- Đối tượng: Công ty Xây dựng Minh Phát (Khách hàng mua bê tông tươi năm 2022).\n- Số dư nợ gốc: 900.000.000 đồng. Hạn thanh toán theo hợp đồng: 31/10/2022.\n- Tính đến 31/12/2024: Thời gian quá hạn là 26 tháng (từ 02 năm đến dưới 03 năm).\n- Tỷ lệ trích lập theo Điểm c Khoản 1 Điều 6 Thông tư 48/2019/TT-BTC: 70% dự kiến, tuy nhiên Hội đồng quản trị Kiểu Việt thận trọng chỉ trích lập 50% tương ứng 450.000.000 đồng.\n\n2. HỒ SƠ CHỨNG TỪ THEO KHOẢN 1 ĐIỀU 6 THÔNG TƯ 48/2019/TT-BTC:\n- Hợp đồng kinh tế số 45/HĐ-BT/2022 ký ngày 10/05/2022.\n- 05 Hóa đơn GTGT xuất bán bê tông kèm Phiếu giao nhận hàng tại chân công trình.\n- Biên bản đối chiếu công nợ xác nhận số dư nợ 900 triệu đồng.\n- 03 Thông báo đôn đốc thanh toán nợ gửi qua đường bưu điện có vận đơn chuyển phát bảo đảm.\n=> Hồ sơ đầy đủ cơ sở pháp lý, kính đề nghị Đoàn kiểm tra chấp thuận toàn bộ chi phí dự phòng nêu trên.\n\n                                            CÔNG TY CỔ PHẦN KIỂU VIỆT\n        KẾ TOÁN TRƯỞNG                             TỔNG GIÁM ĐỐC\n     (Ký, ghi rõ họ tên)                      (Ký tên, đóng dấu)"
  },
  {
    "id": "mau-15",
    "code": "MẪU 15/TB-LS",
    "title": "Bản giải trình chi phí thuê ca máy, thiết bị thi công, cừ larsen và giàn giáo nền móng công trình",
    "category": "Thi công xây lắp & Ca máy",
    "targetRisk": "Đoàn kiểm tra nghi ngờ chi phí thuê máy móc thiết bị thi công (cừ larsen, máy ép cọc, giàn giáo) bị kéo dài quá thời hạn so với dự toán ban đầu, đòi cắt giảm chi phí thi công.",
    "legalBase": "Điều 4 Thông tư 96/2015/TT-BTC; Thông tư 12/2021/TT-BXD của Bộ Xây dựng",
    "decreeId": "tt-96-2015",
    "articleNum": 4,
    "decreeLabel": "Thông tư 96/2015/TT-BTC — Điều 4",
    "description": "Giải trình lý do thời gian thuê máy thi công và cừ larsen kéo dài do thời tiết mưa bão Tây Nguyên, có nhật ký công trình và xác nhận của Tư vấn giám sát.",
    "requiredDossier": [
      "Hợp đồng thuê thiết bị, cừ larsen và giàn giáo xây dựng.",
      "Biên bản bàn giao thiết bị tại hiện trường và biên bản nghiệm thu ca máy hàng tháng.",
      "Nhật ký thi công công trình có xác nhận của Tư vấn Giám sát và Ban Quản lý dự án về ngày dừng thi công do mưa lũ.",
      "Hóa đơn GTGT và ủy nhiệm chi thanh toán tiền thuê thiết bị."
    ],
    "defenseArguments": [
      "Theo Điều 4 Thông tư 96/2015/TT-BTC, mọi chi phí thực tế phát sinh liên quan đến hoạt động sản xuất kinh doanh của doanh nghiệp, có đủ hóa đơn chứng từ hợp pháp đều được tính vào chi phí được trừ.",
      "Thời gian thuê cừ larsen và máy thi công nền móng kéo dài thêm 45 ngày do mùa mưa lũ tại Gia Lai sạt lở hố móng, bắt buộc phải duy trì hệ cừ chống đỡ bảo vệ an toàn công trình.",
      "Chi phí thuê phát sinh có sự đồng thuận bằng văn bản của Chủ đầu tư và được hạch toán trực tiếp vào giá thành công trình TK 154 theo đúng tiến độ thực tế."
    ],
    "templateContent": "BẢN NHÁP NỘI BỘ — CÔNG TY CỔ PHẦN KIỂU VIỆT\nCỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM\nĐộc lập - Tự do - Hạnh phúc\n-------------------------\n\nCÔNG TY CỔ PHẦN KIỂU VIỆT\nSố: 72/CV-KV/2026\nV/v: Giải trình chi phí thuê ca máy thi công và hệ cừ larsen gia cố hố móng Dự án Cầu Ia Grai năm 2024\n\n                                            Gia Lai, ngày 24 tháng 04 năm 2026\n\nKính gửi: ĐOÀN KIỂM TRA THUẾ CỤC THUẾ TỈNH GIA LAI\n\nCông ty Cổ phần Kiểu Việt xin trân trọng giải trình về chi phí thuê thiết bị thi công nền móng (hệ cừ larsen và máy búa rung ép cừ) năm 2024:\n\n1. NỘI DUNG CHI PHÍ:\n- Tổng giá trị thuê ca máy và cừ larsen: 780.000.000 đồng (TK 623/154).\n- Đoàn kiểm tra nêu ý kiến: Thời gian thuê thực tế 120 ngày vượt 45 ngày so với Tiến độ dự kiến ban đầu trong Hợp đồng (75 ngày).\n\n2. NGUYÊN NHÂN THỰC TẾ VÀ HỒ SƠ CHỨNG MINH:\n- Trong tháng 08 và 09/2024, khu vực Tây Nguyên chịu ảnh hưởng liên tiếp của mưa bão kéo dài, mực nước sông dâng cao làm ngập hố móng trụ cầu. Để đảm bảo an toàn kết cấu và chống sạt lở đường dân sinh, Tư vấn giám sát đã ban hành Lệnh tạm dừng đổ bê tông bệ móng và yêu cầu duy trì đóng cọc cừ bao quanh hố móng.\n- Chi phí thuê ca máy duy trì cừ larsen trong giai đoạn này là bắt buộc, phục vụ trực tiếp cho việc bảo vệ tài sản công trình của Dự án.\n- Nhật ký thi công các ngày mưa bão đều có ghi nhận chi tiết về mực nước và hiện trạng bảo vệ hố móng có chữ ký của Kỹ sư trưởng Ban QLDA.\n- Khi thời tiết ổn định, Kiểu Việt đã triển khai bơm nước và hoàn thành đổ bê tông móng, được Chủ đầu tư nghiệm thu giai đoạn 1.\n\n3. KẾT LUẬN:\nKhoản chi phí thuê thiết bị 780.000.000 đồng là chi phí thực tế, khách quan, phục vụ trực tiếp công trình tạo ra doanh thu. Kính đề nghị Đoàn kiểm tra công nhận toàn bộ chi phí hợp lý nêu trên.\n\n                                            CÔNG TY CỔ PHẦN KIỂU VIỆT\n        CHỈ HUY TRƯỞNG CÔNG TRƯỜNG                 TỔNG GIÁM ĐỐC\n     (Ký, ghi rõ họ tên)                      (Ký tên, đóng dấu)"
  }
];
