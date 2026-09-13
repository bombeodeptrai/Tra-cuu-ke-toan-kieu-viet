// Bộ Mẫu Biểu & Văn Bản Giải Trình Thực Chiến Tiếp Đoàn Kiểm Tra Thuế
// Doanh nghiệp: CÔNG TY CỔ PHẦN KIỂU VIỆT (Nội Thất — Vật Liệu Xây Dựng — Thi Công Xây Lắp)
// Website: kieuviet.com.vn | Slogan: "Xây bền vững - Dựng tương lai"

export interface AuditTemplate {
  id: string;
  code: string;
  title: string;
  category: string;
  targetRisk: string;
  legalBase: string;
  description: string;
  templateContent: string;
}

export const AUDIT_TEMPLATES: AuditTemplate[] = [
  {
    "id": "mau-01",
    "code": "MẪU 01/GT-DT",
    "title": "Đối chiếu doanh thu 511, hóa đơn và tờ khai",
    "category": "Doanh thu",
    "targetRisk": "Đối chiếu doanh thu 511, hóa đơn và tờ khai",
    "legalBase": "GTGT, TNDN và chế độ kế toán áp dụng theo kỳ; phân biệt doanh thu bán hàng với thu nhập chịu thuế.",
    "description": "Mẫu làm việc nội bộ có ô trống; điền dữ kiện và đính kèm chứng từ trước khi trình ký.",
    "templateContent": "BẢN NHÁP LÀM VIỆC — CHƯA PHẢI VĂN BẢN ĐÃ KÝ\nĐỐI CHIẾU DOANH THU 511, HÓA ĐƠN VÀ TỜ KHAI\nPháp nhân: [điền theo hồ sơ]\nMã số thuế: [điền]\nĐợt kiểm tra/quyết định: [điền, chưa có để trống]\nKỳ số liệu: [điền]\nMảng hoạt động, hợp đồng/công trình/lô: [điền]\nNgười lập / người rà / ngày rà: [điền]\n\n1. DỮ KIỆN VÀ PHẠM VI\nYêu cầu cần trả lời: [điền nguyên văn, số văn bản và ngày nhận]\nNguồn số liệu và thời điểm chốt: [điền tên file/sổ, kỳ, phiên bản]\n\n2. BẢNG ĐỐI CHIẾU\nKỳ | Mảng | Hợp đồng | 511 | Hóa đơn chưa GTGT | Doanh thu kê khai GTGT | Chênh lệch | Nguyên nhân | Chứng từ\n[Điền từng dòng thực tế; không dùng số liệu minh họa làm số công ty]\n\n3. CÁCH RÀ\nTách 4 mảng: nội thất gỗ, bê tông/VLXD, xây lắp và tư vấn.\nKhông coi chỉ tiêu B1 tờ khai TNDN là doanh thu.\nLập dòng riêng cho giảm trừ, doanh thu tài chính, giao dịch không kê khai GTGT và chênh lệch thời điểm.\nCổ tức/lợi nhuận được chia phải xét riêng điều kiện miễn thuế, không mặc định chịu TNDN.\nĐối chiếu ngày giao hàng/nghiệm thu với nghĩa vụ hóa đơn, không lấy ngày chốt thanh toán để dời doanh thu.\n\n4. CĂN CỨ\nGTGT, TNDN và chế độ kế toán áp dụng theo kỳ; phân biệt doanh thu bán hàng với thu nhập chịu thuế.\nĐiều/khoản cụ thể đã đọc, ngày hiệu lực và chuyển tiếp: [điền sau khi kiểm bản gốc]\n\n5. CHỨNG TỪ ĐÍNH KÈM\nSTT | Tên | Số/ngày | File hoặc vị trí bản giấy | Người rà | Nội dung chứng minh\n[Liệt kê thực tế; ghi rõ bản gốc/bản sao và tài liệu còn thiếu]\n\n6. KẾT QUẢ VÀ VIỆC CÒN THIẾU\nSố đã đối chiếu: [điền]\nChênh lệch và nguyên nhân có chứng cứ: [điền]\nNội dung chưa đủ căn cứ: [điền]\nĐiều chỉnh/khai bổ sung cần xem xét: [điền]\nNgười xử lý / hạn thực tế: [điền]\nKết luận đề xuất: [người có thẩm quyền rà và quyết định]\nKhông suy từ phép tính khớp rằng hồ sơ đã đủ điều kiện thuế."
  },
  {
    "id": "mau-02",
    "code": "MẪU 02/ĐM-KT",
    "title": "Rà định mức tiêu hao vật tư và phế liệu",
    "category": "Giá thành",
    "targetRisk": "Rà định mức tiêu hao vật tư và phế liệu",
    "legalBase": "Định mức kỹ thuật nội bộ được phê duyệt, hồ sơ sản xuất và quy định thuế đúng kỳ.",
    "description": "Mẫu làm việc nội bộ có ô trống; điền dữ kiện và đính kèm chứng từ trước khi trình ký.",
    "templateContent": "BẢN NHÁP LÀM VIỆC — CHƯA PHẢI VĂN BẢN ĐÃ KÝ\nRÀ ĐỊNH MỨC TIÊU HAO VẬT TƯ VÀ PHẾ LIỆU\nPháp nhân: [điền theo hồ sơ]\nMã số thuế: [điền]\nĐợt kiểm tra/quyết định: [điền, chưa có để trống]\nKỳ số liệu: [điền]\nMảng hoạt động, hợp đồng/công trình/lô: [điền]\nNgười lập / người rà / ngày rà: [điền]\n\n1. DỮ KIỆN VÀ PHẠM VI\nYêu cầu cần trả lời: [điền nguyên văn, số văn bản và ngày nhận]\nNguồn số liệu và thời điểm chốt: [điền tên file/sổ, kỳ, phiên bản]\n\n2. BẢNG ĐỐI CHIẾU\nĐơn hàng | Sản phẩm | Đơn vị quy đổi | Sản lượng | Định mức | Xuất dùng | Trả kho | Phế liệu | Chênh lệch | Lý do\n[Điền từng dòng thực tế; không dùng số liệu minh họa làm số công ty]\n\n3. CÁCH RÀ\nGhi phiên bản định mức, ngày duyệt thật, người có thẩm quyền và thời gian áp dụng.\nTách gỗ, sơn, phụ kiện; không cộng m³ với kg.\nĐối chiếu lệnh sản xuất, phiếu xuất, bảng cắt, nhập thành phẩm và phế liệu bán ra.\nVật tư bất thường phải có biên bản nguyên nhân thực tế; không lập định mức hồi tố để hợp thức chi phí.\nBảng này là hồ sơ rà soát, không tự ban hành quyết định hoặc thay chữ ký.\n\n4. CĂN CỨ\nĐịnh mức kỹ thuật nội bộ được phê duyệt, hồ sơ sản xuất và quy định thuế đúng kỳ.\nĐiều/khoản cụ thể đã đọc, ngày hiệu lực và chuyển tiếp: [điền sau khi kiểm bản gốc]\n\n5. CHỨNG TỪ ĐÍNH KÈM\nSTT | Tên | Số/ngày | File hoặc vị trí bản giấy | Người rà | Nội dung chứng minh\n[Liệt kê thực tế; ghi rõ bản gốc/bản sao và tài liệu còn thiếu]\n\n6. KẾT QUẢ VÀ VIỆC CÒN THIẾU\nSố đã đối chiếu: [điền]\nChênh lệch và nguyên nhân có chứng cứ: [điền]\nNội dung chưa đủ căn cứ: [điền]\nĐiều chỉnh/khai bổ sung cần xem xét: [điền]\nNgười xử lý / hạn thực tế: [điền]\nKết luận đề xuất: [người có thẩm quyền rà và quyết định]\nKhông suy từ phép tính khớp rằng hồ sơ đã đủ điều kiện thuế."
  },
  {
    "id": "mau-03",
    "code": "MẪU 03/TT-335",
    "title": "Rà chi phí trích trước và dở dang 154/335",
    "category": "Dở dang",
    "targetRisk": "Rà chi phí trích trước và dở dang 154/335",
    "legalBase": "Chế độ kế toán và điều kiện chi phí được trừ theo kỳ; kiểm bản chất nghĩa vụ.",
    "description": "Mẫu làm việc nội bộ có ô trống; điền dữ kiện và đính kèm chứng từ trước khi trình ký.",
    "templateContent": "BẢN NHÁP LÀM VIỆC — CHƯA PHẢI VĂN BẢN ĐÃ KÝ\nRÀ CHI PHÍ TRÍCH TRƯỚC VÀ DỞ DANG 154/335\nPháp nhân: [điền theo hồ sơ]\nMã số thuế: [điền]\nĐợt kiểm tra/quyết định: [điền, chưa có để trống]\nKỳ số liệu: [điền]\nMảng hoạt động, hợp đồng/công trình/lô: [điền]\nNgười lập / người rà / ngày rà: [điền]\n\n1. DỮ KIỆN VÀ PHẠM VI\nYêu cầu cần trả lời: [điền nguyên văn, số văn bản và ngày nhận]\nNguồn số liệu và thời điểm chốt: [điền tên file/sổ, kỳ, phiên bản]\n\n2. BẢNG ĐỐI CHIẾU\nHợp đồng | Hạng mục | 154 đầu kỳ | Tăng | Kết chuyển 155/632 | 154 cuối kỳ | Trích 335 | Thực tế sau kỳ | Chênh lệch\n[Điền từng dòng thực tế; không dùng số liệu minh họa làm số công ty]\n\n3. CÁCH RÀ\nTách chi phí đã thực hiện nhưng chưa có hóa đơn khỏi dự toán chưa phát sinh.\nKèm hợp đồng thầu phụ, nghiệm thu thực tế, căn cứ ước tính và lịch nhận chứng từ.\nNội thất hoàn thành nhập 155 phải được theo dõi, không mặc định chuyển toàn bộ 154 vào 632.\nRà hoàn nhập/điều chỉnh trích trước sau khi có số thực tế.\nKhông kết luận số treo lâu năm là hợp lệ chỉ vì chưa thu được tiền.\n\n4. CĂN CỨ\nChế độ kế toán và điều kiện chi phí được trừ theo kỳ; kiểm bản chất nghĩa vụ.\nĐiều/khoản cụ thể đã đọc, ngày hiệu lực và chuyển tiếp: [điền sau khi kiểm bản gốc]\n\n5. CHỨNG TỪ ĐÍNH KÈM\nSTT | Tên | Số/ngày | File hoặc vị trí bản giấy | Người rà | Nội dung chứng minh\n[Liệt kê thực tế; ghi rõ bản gốc/bản sao và tài liệu còn thiếu]\n\n6. KẾT QUẢ VÀ VIỆC CÒN THIẾU\nSố đã đối chiếu: [điền]\nChênh lệch và nguyên nhân có chứng cứ: [điền]\nNội dung chưa đủ căn cứ: [điền]\nĐiều chỉnh/khai bổ sung cần xem xét: [điền]\nNgười xử lý / hạn thực tế: [điền]\nKết luận đề xuất: [người có thẩm quyền rà và quyết định]\nKhông suy từ phép tính khớp rằng hồ sơ đã đủ điều kiện thuế."
  },
  {
    "id": "mau-04",
    "code": "MẪU 04/NC-TV",
    "title": "Rà nhân công xưởng và công trường",
    "category": "Nhân công",
    "targetRisk": "Rà nhân công xưởng và công trường",
    "legalBase": "Pháp luật lao động, BHXH và TNCN theo kỳ; chỉ dùng cam kết khi đủ điều kiện.",
    "description": "Mẫu làm việc nội bộ có ô trống; điền dữ kiện và đính kèm chứng từ trước khi trình ký.",
    "templateContent": "BẢN NHÁP LÀM VIỆC — CHƯA PHẢI VĂN BẢN ĐÃ KÝ\nRÀ NHÂN CÔNG XƯỞNG VÀ CÔNG TRƯỜNG\nPháp nhân: [điền theo hồ sơ]\nMã số thuế: [điền]\nĐợt kiểm tra/quyết định: [điền, chưa có để trống]\nKỳ số liệu: [điền]\nMảng hoạt động, hợp đồng/công trình/lô: [điền]\nNgười lập / người rà / ngày rà: [điền]\n\n1. DỮ KIỆN VÀ PHẠM VI\nYêu cầu cần trả lời: [điền nguyên văn, số văn bản và ngày nhận]\nNguồn số liệu và thời điểm chốt: [điền tên file/sổ, kỳ, phiên bản]\n\n2. BẢNG ĐỐI CHIẾU\nNgười lao động | Hợp đồng | Công việc | Ngày công | Tổng chi trả | Khấu trừ | BHXH | Thanh toán | Hồ sơ thiếu\n[Điền từng dòng thực tế; không dùng số liệu minh họa làm số công ty]\n\n3. CÁCH RÀ\nĐối chiếu danh sách với chấm công, lệnh sản xuất/công trường và người thực nhận.\nPhân biệt quan hệ lao động với khoán việc theo bản chất, không theo tên hợp đồng.\nCam kết thu nhập phải xét từng cá nhân và năm, không thay chứng từ chi trả hay nghĩa vụ BHXH.\nKhông đưa thông tin cá nhân vào bản gửi ngoài nếu không cần cho nội dung yêu cầu.\nGhi số cần khai bổ sung và người kiểm tra; không viết sẵn mọi lao động đã đủ điều kiện.\n\n4. CĂN CỨ\nPháp luật lao động, BHXH và TNCN theo kỳ; chỉ dùng cam kết khi đủ điều kiện.\nĐiều/khoản cụ thể đã đọc, ngày hiệu lực và chuyển tiếp: [điền sau khi kiểm bản gốc]\n\n5. CHỨNG TỪ ĐÍNH KÈM\nSTT | Tên | Số/ngày | File hoặc vị trí bản giấy | Người rà | Nội dung chứng minh\n[Liệt kê thực tế; ghi rõ bản gốc/bản sao và tài liệu còn thiếu]\n\n6. KẾT QUẢ VÀ VIỆC CÒN THIẾU\nSố đã đối chiếu: [điền]\nChênh lệch và nguyên nhân có chứng cứ: [điền]\nNội dung chưa đủ căn cứ: [điền]\nĐiều chỉnh/khai bổ sung cần xem xét: [điền]\nNgười xử lý / hạn thực tế: [điền]\nKết luận đề xuất: [người có thẩm quyền rà và quyết định]\nKhông suy từ phép tính khớp rằng hồ sơ đã đủ điều kiện thuế."
  },
  {
    "id": "mau-05",
    "code": "MẪU 05/VL-TT80",
    "title": "Đối chiếu nghĩa vụ thuế tại địa phương ngoài tỉnh",
    "category": "Phân bổ thuế",
    "targetRisk": "Đối chiếu nghĩa vụ thuế tại địa phương ngoài tỉnh",
    "legalBase": "TT80/2021 cùng văn bản sửa đổi và quy định đúng kỳ; GTGT và TNDN xét riêng.",
    "description": "Mẫu làm việc nội bộ có ô trống; điền dữ kiện và đính kèm chứng từ trước khi trình ký.",
    "templateContent": "BẢN NHÁP LÀM VIỆC — CHƯA PHẢI VĂN BẢN ĐÃ KÝ\nĐỐI CHIẾU NGHĨA VỤ THUẾ TẠI ĐỊA PHƯƠNG NGOÀI TỈNH\nPháp nhân: [điền theo hồ sơ]\nMã số thuế: [điền]\nĐợt kiểm tra/quyết định: [điền, chưa có để trống]\nKỳ số liệu: [điền]\nMảng hoạt động, hợp đồng/công trình/lô: [điền]\nNgười lập / người rà / ngày rà: [điền]\n\n1. DỮ KIỆN VÀ PHẠM VI\nYêu cầu cần trả lời: [điền nguyên văn, số văn bản và ngày nhận]\nNguồn số liệu và thời điểm chốt: [điền tên file/sổ, kỳ, phiên bản]\n\n2. BẢNG ĐỐI CHIẾU\nCông trình/đơn hàng | Tỉnh | Bản chất giao dịch | Kỳ | Doanh thu | Căn cứ phân bổ | Phải nộp | Đã nộp | Còn lệch\n[Điền từng dòng thực tế; không dùng số liệu minh họa làm số công ty]\n\n3. CÁCH RÀ\nPhân loại bán nội thất đơn thuần, gia công, xây lắp và cơ sở sản xuất.\nChỉ tính nghĩa vụ khi xác định thuộc phạm vi phân bổ tương ứng.\nKhông áp TNDN vãng lai 1% cho mọi công trình ngoài tỉnh.\nĐính kèm giấy nộp ngân sách đúng cơ quan thu, tiểu mục và bảng đối chiếu tờ khai.\nRà kê khai trùng/bù trừ trùng và thủ tục xử lý nếu có chênh lệch.\n\n4. CĂN CỨ\nTT80/2021 cùng văn bản sửa đổi và quy định đúng kỳ; GTGT và TNDN xét riêng.\nĐiều/khoản cụ thể đã đọc, ngày hiệu lực và chuyển tiếp: [điền sau khi kiểm bản gốc]\n\n5. CHỨNG TỪ ĐÍNH KÈM\nSTT | Tên | Số/ngày | File hoặc vị trí bản giấy | Người rà | Nội dung chứng minh\n[Liệt kê thực tế; ghi rõ bản gốc/bản sao và tài liệu còn thiếu]\n\n6. KẾT QUẢ VÀ VIỆC CÒN THIẾU\nSố đã đối chiếu: [điền]\nChênh lệch và nguyên nhân có chứng cứ: [điền]\nNội dung chưa đủ căn cứ: [điền]\nĐiều chỉnh/khai bổ sung cần xem xét: [điền]\nNgười xử lý / hạn thực tế: [điền]\nKết luận đề xuất: [người có thẩm quyền rà và quyết định]\nKhông suy từ phép tính khớp rằng hồ sơ đã đủ điều kiện thuế."
  },
  {
    "id": "mau-06",
    "code": "MẪU 06/KS-GL",
    "title": "Đối chiếu vật liệu mua ngoài và khai thác thực tế",
    "category": "VLXD",
    "targetRisk": "Đối chiếu vật liệu mua ngoài và khai thác thực tế",
    "legalBase": "Luật tài nguyên/khoáng sản, thuế tài nguyên và phí BVMT chỉ áp khi có hoạt động thuộc phạm vi.",
    "description": "Mẫu làm việc nội bộ có ô trống; điền dữ kiện và đính kèm chứng từ trước khi trình ký.",
    "templateContent": "BẢN NHÁP LÀM VIỆC — CHƯA PHẢI VĂN BẢN ĐÃ KÝ\nĐỐI CHIẾU VẬT LIỆU MUA NGOÀI VÀ KHAI THÁC THỰC TẾ\nPháp nhân: [điền theo hồ sơ]\nMã số thuế: [điền]\nĐợt kiểm tra/quyết định: [điền, chưa có để trống]\nKỳ số liệu: [điền]\nMảng hoạt động, hợp đồng/công trình/lô: [điền]\nNgười lập / người rà / ngày rà: [điền]\n\n1. DỮ KIỆN VÀ PHẠM VI\nYêu cầu cần trả lời: [điền nguyên văn, số văn bản và ngày nhận]\nNguồn số liệu và thời điểm chốt: [điền tên file/sổ, kỳ, phiên bản]\n\n2. BẢNG ĐỐI CHIẾU\nNguồn vật liệu | Mua/khai thác | Nhà cung cấp/giấy phép | Sản lượng | Hóa đơn/phiếu cân | Nhập kho | Xuất trạm | Chênh lệch\n[Điền từng dòng thực tế; không dùng số liệu minh họa làm số công ty]\n\n3. CÁCH RÀ\nXác nhận Kiểu Việt có trực tiếp khai thác không; không suy từ việc sử dụng cát đá tại trạm bê tông.\nMua ngoài: đối chiếu hóa đơn, giao nhận, nguồn hàng và thanh toán.\nKhai thác: kiểm giấy phép, địa điểm, loại khoáng sản, sản lượng và căn cứ tính nghĩa vụ đúng kỳ.\nTách nguyên khai, thành phẩm, tồn bãi và hao hụt có căn cứ.\nKhông ghi sẵn công ty có mỏ hoặc đã nộp đủ nghĩa vụ.\n\n4. CĂN CỨ\nLuật tài nguyên/khoáng sản, thuế tài nguyên và phí BVMT chỉ áp khi có hoạt động thuộc phạm vi.\nĐiều/khoản cụ thể đã đọc, ngày hiệu lực và chuyển tiếp: [điền sau khi kiểm bản gốc]\n\n5. CHỨNG TỪ ĐÍNH KÈM\nSTT | Tên | Số/ngày | File hoặc vị trí bản giấy | Người rà | Nội dung chứng minh\n[Liệt kê thực tế; ghi rõ bản gốc/bản sao và tài liệu còn thiếu]\n\n6. KẾT QUẢ VÀ VIỆC CÒN THIẾU\nSố đã đối chiếu: [điền]\nChênh lệch và nguyên nhân có chứng cứ: [điền]\nNội dung chưa đủ căn cứ: [điền]\nĐiều chỉnh/khai bổ sung cần xem xét: [điền]\nNgười xử lý / hạn thực tế: [điền]\nKết luận đề xuất: [người có thẩm quyền rà và quyết định]\nKhông suy từ phép tính khớp rằng hồ sơ đã đủ điều kiện thuế."
  },
  {
    "id": "mau-07",
    "code": "MẪU 07/LS-GO",
    "title": "Hồ sơ nguồn gốc gỗ theo lô sản xuất nội thất",
    "category": "Nội thất gỗ",
    "targetRisk": "Hồ sơ nguồn gốc gỗ theo lô sản xuất nội thất",
    "legalBase": "NĐ102/2020, NĐ120/2024; TT26/2022 lịch sử; TT26/2025, TT84/2025 và bản hợp nhất 04/2026, đối chiếu theo thời điểm.",
    "description": "Mẫu làm việc nội bộ có ô trống; điền dữ kiện và đính kèm chứng từ trước khi trình ký.",
    "templateContent": "BẢN NHÁP LÀM VIỆC — CHƯA PHẢI VĂN BẢN ĐÃ KÝ\nHỒ SƠ NGUỒN GỐC GỖ THEO LÔ SẢN XUẤT NỘI THẤT\nPháp nhân: [điền theo hồ sơ]\nMã số thuế: [điền]\nĐợt kiểm tra/quyết định: [điền, chưa có để trống]\nKỳ số liệu: [điền]\nMảng hoạt động, hợp đồng/công trình/lô: [điền]\nNgười lập / người rà / ngày rà: [điền]\n\n1. DỮ KIỆN VÀ PHẠM VI\nYêu cầu cần trả lời: [điền nguyên văn, số văn bản và ngày nhận]\nNguồn số liệu và thời điểm chốt: [điền tên file/sổ, kỳ, phiên bản]\n\n2. BẢNG ĐỐI CHIẾU\nLô gỗ | Loài | Nguồn trong nước/nhập khẩu | Nhà cung cấp | Hồ sơ lâm sản | Hóa đơn | Đơn vị | Nhập | Xuất | Tồn | Đơn hàng\n[Điền từng dòng thực tế; không dùng số liệu minh họa làm số công ty]\n\n3. CÁCH RÀ\nLập liên kết từ hồ sơ nguồn gỗ đến phiếu nhập 152, lệnh sản xuất, 154, 155 và giao hàng.\nKiểm mẫu bảng kê đúng thời kỳ và loại nguồn; bảng này không thay biểu mẫu pháp định.\nGỗ nhập khẩu cần hồ sơ hải quan và chứng từ thuộc trường hợp áp dụng.\nChênh lệch đơn vị/thể tích/khối lượng cần bảng quy đổi có căn cứ.\nĐánh dấu từng chứng từ chưa nhận; không ghi sẵn toàn bộ gỗ hợp pháp.\n\n4. CĂN CỨ\nNĐ102/2020, NĐ120/2024; TT26/2022 lịch sử; TT26/2025, TT84/2025 và bản hợp nhất 04/2026, đối chiếu theo thời điểm.\nĐiều/khoản cụ thể đã đọc, ngày hiệu lực và chuyển tiếp: [điền sau khi kiểm bản gốc]\n\n5. CHỨNG TỪ ĐÍNH KÈM\nSTT | Tên | Số/ngày | File hoặc vị trí bản giấy | Người rà | Nội dung chứng minh\n[Liệt kê thực tế; ghi rõ bản gốc/bản sao và tài liệu còn thiếu]\n\n6. KẾT QUẢ VÀ VIỆC CÒN THIẾU\nSố đã đối chiếu: [điền]\nChênh lệch và nguyên nhân có chứng cứ: [điền]\nNội dung chưa đủ căn cứ: [điền]\nĐiều chỉnh/khai bổ sung cần xem xét: [điền]\nNgười xử lý / hạn thực tế: [điền]\nKết luận đề xuất: [người có thẩm quyền rà và quyết định]\nKhông suy từ phép tính khớp rằng hồ sơ đã đủ điều kiện thuế."
  },
  {
    "id": "mau-08",
    "code": "MẪU 08/CP-BT",
    "title": "Đối chiếu cấp phối và giao nhận bê tông",
    "category": "Bê tông",
    "targetRisk": "Đối chiếu cấp phối và giao nhận bê tông",
    "legalBase": "Hồ sơ cấp phối đã duyệt, yêu cầu hợp đồng và quy định kế toán/thuế theo kỳ.",
    "description": "Mẫu làm việc nội bộ có ô trống; điền dữ kiện và đính kèm chứng từ trước khi trình ký.",
    "templateContent": "BẢN NHÁP LÀM VIỆC — CHƯA PHẢI VĂN BẢN ĐÃ KÝ\nĐỐI CHIẾU CẤP PHỐI VÀ GIAO NHẬN BÊ TÔNG\nPháp nhân: [điền theo hồ sơ]\nMã số thuế: [điền]\nĐợt kiểm tra/quyết định: [điền, chưa có để trống]\nKỳ số liệu: [điền]\nMảng hoạt động, hợp đồng/công trình/lô: [điền]\nNgười lập / người rà / ngày rà: [điền]\n\n1. DỮ KIỆN VÀ PHẠM VI\nYêu cầu cần trả lời: [điền nguyên văn, số văn bản và ngày nhận]\nNguồn số liệu và thời điểm chốt: [điền tên file/sổ, kỳ, phiên bản]\n\n2. BẢNG ĐỐI CHIẾU\nNgày/ca | Mẻ trộn | Cấp phối | Xi măng/cát/đá | Khối lượng xuất trạm | Giao nhận | Trả về | Hao hụt | Hóa đơn\n[Điền từng dòng thực tế; không dùng số liệu minh họa làm số công ty]\n\n3. CÁCH RÀ\nĐối chiếu phiếu cân, xuất kho, nhật ký trạm, chuyến xe và ký nhận công trường.\nPhân biệt hao hụt kỹ thuật, hàng trả về, hủy và sai cân đong; kèm biên bản thực tế.\nĐối chiếu lượng sản xuất với 154/155/632 và doanh thu 511.\nChỉ viện dẫn tiêu chuẩn khi xác định đúng số hiệu, phiên bản và nội dung hợp đồng áp dụng.\nKhông tự đặt tỷ lệ hao hụt được cơ quan thuế chấp nhận.\n\n4. CĂN CỨ\nHồ sơ cấp phối đã duyệt, yêu cầu hợp đồng và quy định kế toán/thuế theo kỳ.\nĐiều/khoản cụ thể đã đọc, ngày hiệu lực và chuyển tiếp: [điền sau khi kiểm bản gốc]\n\n5. CHỨNG TỪ ĐÍNH KÈM\nSTT | Tên | Số/ngày | File hoặc vị trí bản giấy | Người rà | Nội dung chứng minh\n[Liệt kê thực tế; ghi rõ bản gốc/bản sao và tài liệu còn thiếu]\n\n6. KẾT QUẢ VÀ VIỆC CÒN THIẾU\nSố đã đối chiếu: [điền]\nChênh lệch và nguyên nhân có chứng cứ: [điền]\nNội dung chưa đủ căn cứ: [điền]\nĐiều chỉnh/khai bổ sung cần xem xét: [điền]\nNgười xử lý / hạn thực tế: [điền]\nKết luận đề xuất: [người có thẩm quyền rà và quyết định]\nKhông suy từ phép tính khớp rằng hồ sơ đã đủ điều kiện thuế."
  }
];
