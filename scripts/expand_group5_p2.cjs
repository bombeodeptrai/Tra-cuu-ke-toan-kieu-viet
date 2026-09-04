const fs = require('fs');
const path = require('path');

const g5Path = path.join(__dirname, '..', 'src', 'data', 'diffs', 'group5_resources_fees_general.ts');
const raw = fs.readFileSync(g5Path, 'utf8');
const jsonStr = raw.replace(/import[^;]+;/, '').replace(/export const \w+[^=]+=/, '').replace(/;\s*$/, '');
const g5 = eval('(' + jsonStr + ')');

// 7. tt-44-2017: 10 items
g5['tt-44-2017'].items = [
  {
    topic: "Quy định Khung giá tính thuế tài nguyên áp dụng thống nhất toàn quốc (Điều 3)",
    type: "modified",
    oldRule: "[Căn cứ: TT 152/2015] Các địa phương tự ban hành khung giá dẫn đến chênh lệch lớn giữa các tỉnh giáp ranh.",
    newRule: "[Căn cứ: Điều 3 và Phụ lục ban hành kèm TT 44/2017/TT-BTC] Bộ Tài chính ban hành Khung giá tính thuế tài nguyên thống nhất toàn quốc gồm mức giá tối thiểu và giá tối đa cho từng nhóm khoáng sản phi kim loại, kim loại và tài nguyên thiên nhiên.",
    impactNote: "UBND tỉnh Gia Lai căn cứ Khung giá của Bộ Tài chính tại TT 44/2017 để ban hành Bảng giá tính thuế tài nguyên địa phương cho Kiểu Việt."
  },
  {
    topic: "Mức giá tối thiểu và tối đa đối với Đá xây dựng thông thường (Phụ lục I)",
    type: "modified",
    oldRule: "[Căn cứ: Khung cũ] Giá tối thiểu thấp.",
    newRule: "[Căn cứ: Phụ lục I TT 44/2017 & TT 05/2020/TT-BTC] Đá hộc: Khung từ 70.000đ đến 200.000đ/m3; Đá dăm (1x2, 2x4): Khung từ 120.000đ đến 300.000đ/m3; Đá mạt, đá mi: Khung từ 60.000đ đến 180.000đ/m3.",
    impactNote: "Mức giá tính thuế đá dăm của Gia Lai (220.000đ/m3) nằm hoàn toàn trong khung cho phép của Bộ Tài chính, bảo đảm tính pháp lý vững chắc."
  },
  {
    topic: "Mức giá tối thiểu và tối đa đối với Cát sỏi xây dựng (Phụ lục I)",
    type: "modified",
    oldRule: "[Căn cứ: Khung cũ] Giá tối thiểu cát thấp.",
    newRule: "[Căn cứ: Phụ lục I TT 44/2017] Cát vàng tự nhiên: Khung từ 150.000đ đến 400.000đ/m3; Cát xây tô: Khung từ 100.000đ đến 250.000đ/m3; Cát nghiền nhân tạo: Khung từ 80.000đ đến 220.000đ/m3.",
    impactNote: "Khung giá xác nhận mức giá cát nghiền nhân tạo hợp lý giúp Kiểu Việt khẳng định lợi thế cạnh tranh sản xuất cát mỏ."
  },
  {
    topic: "Mức giá tối thiểu và tối đa đối với Đất san lấp, đất đắp nền (Phụ lục I)",
    type: "modified",
    oldRule: "[Căn cứ: Khung cũ] Đất đắp khung 20k - 50k.",
    newRule: "[Căn cứ: Phụ lục I TT 44/2017] Đất khai thác làm vật liệu san lấp, đắp nền công trình: Khung từ 29.000đ đến 70.000đ/m3.",
    impactNote: "Giá tính thuế đất san lấp tỉnh Gia Lai quy định 55.000đ/m3 hoàn toàn phù hợp với khung giá quy định của Bộ Tài chính."
  },
  {
    topic: "Trường hợp giá thị trường địa phương biến động vượt quá 20% so với Khung giá của Bộ Tài chính (Điều 5)",
    type: "modified",
    oldRule: "[Căn cứ: TT cũ] Địa phương tự quyết định.",
    newRule: "[Căn cứ: Điều 5 Khoản 2 TT 44/2017] Trường hợp giá tài nguyên tại địa phương biến động tăng trên 20% so với giá tối đa hoặc giảm trên 20% so với giá tối thiểu của Khung giá thì UBND cấp tỉnh phải có văn bản báo cáo Bộ Tài chính để điều chỉnh khung trước khi ban hành.",
    impactNote: "Kiểu Việt kiến nghị thông qua Hiệp hội Doanh nghiệp tỉnh nếu giá thị trường cát đá biến động mạnh để Bộ Tài chính xem xét điều chỉnh khung giá."
  },
  {
    topic: "Quy định điều chỉnh, bổ sung Khung giá tính thuế tài nguyên định kỳ hàng năm (Điều 6)",
    type: "modified",
    oldRule: "[Căn cứ: TT cũ] Khung giá cố định nhiều năm.",
    newRule: "[Căn cứ: Điều 6 TT 44/2017] Tổng cục Thuế chủ trì định kỳ hàng năm rà soát biến động giá thị trường của các loại tài nguyên để trình Bộ Tài chính ban hành Thông tư sửa đổi, bổ sung Khung giá tính thuế tài nguyên.",
    impactNote: "Kế toán Kiểu Việt luôn theo dõi các văn bản sửa đổi bổ sung TT 44 của Bộ Tài chính (như TT 05/2020) để cập nhật kịp thời."
  },
  {
    topic: "Nguyên tắc xây dựng Bảng giá tính thuế tài nguyên của UBND cấp tỉnh (Điều 4)",
    type: "modified",
    oldRule: "[Căn cứ: TT cũ] Quy định nguyên tắc chung.",
    newRule: "[Căn cứ: Điều 4 TT 44/2017] Giá tính thuế tài nguyên tại Bảng giá của địa phương phải nằm trong biên độ Khung giá do Bộ Tài chính ban hành; trường hợp địa phương có loại tài nguyên chưa có trong khung thì UBND tỉnh tạm thời quy định và báo cáo Bộ Tài chính.",
    impactNote: "Đảm bảo tính pháp lý xuyên suốt từ cấp Trung ương xuống địa phương, loại trừ rủi ro bị cơ quan kiểm toán nhà nước xuất toán tiền thuế."
  },
  {
    topic: "Trách nhiệm đối chiếu giá tính thuế tài nguyên với giá bán trên hóa đơn điện tử (Điều 7)",
    type: "added",
    oldRule: "[Căn cứ: TT cũ] Đối chiếu hóa đơn giấy.",
    newRule: "[Căn cứ: Điều 7 TT 44/2017 & TT 78/2021] Cơ quan thuế đối chiếu giá tính thuế trên bảng giá với dữ liệu hóa đơn điện tử xuất bán tài nguyên của doanh nghiệp; nếu giá trên hóa đơn cao hơn bảng giá thì tính thuế theo giá hóa đơn.",
    impactNote: "Kiểu Việt kiểm soát đơn giá bán trên hóa đơn GTGT đá mỏ, đảm bảo khớp đúng với quy định tính thuế."
  },
  {
    topic: "Quy định quy đổi giá tính thuế tài nguyên đối với tài nguyên ướt, khô (Điều 4)",
    type: "added",
    oldRule: "[Căn cứ: TT cũ] Không tính độ ẩm.",
    newRule: "[Căn cứ: Điều 4 Khoản 3 TT 44/2017] Trường hợp tài nguyên khai thác có lẫn nước, độ ẩm cao (như cát ướt hút từ lòng sông) thì giá tính thuế được quy đổi về trạng thái khô tự nhiên theo tỷ lệ độ ẩm tiêu chuẩn.",
    impactNote: "Giúp Kiểu Việt tính toán độ ẩm cát và đá rửa, loại trừ phần trọng lượng nước ra khỏi sản lượng tính thuế tài nguyên."
  },
  {
    topic: "Hiệu lực thi hành của Thông tư 44/2017/TT-BTC (Điều 8)",
    type: "added",
    oldRule: "[Căn cứ: TT cũ] Hết hiệu lực.",
    newRule: "[Căn cứ: Điều 8 TT 44/2017] Thông tư có hiệu lực thi hành kể từ ngày 01 tháng 07 năm 2017; là văn bản khung chuẩn hóa toàn bộ hệ thống giá tính thuế tài nguyên tại 63 tỉnh thành Việt Nam.",
    impactNote: "Văn bản nền tảng quy định mức sàn và trần thuế tài nguyên khoáng sản của Công ty Cổ phần Kiểu Việt."
  }
];

// 8. tt-48-2019: 12 items
g5['tt-48-2019'].items = [
  {
    topic: "Quy định điều kiện và tỷ lệ trích lập dự phòng nợ phải thu khó đòi theo thời gian quá hạn (Điều 6)",
    type: "modified",
    oldRule: "[Căn cứ: TT 228/2009] Quá hạn từ 6 tháng đến dưới 1 năm: 30%; từ 1 đến dưới 2 năm: 50%; từ 2 đến dưới 3 năm: 70%; từ 3 năm trở lên: 100%.",
    newRule: "[Căn cứ: Điều 6 Khoản 2 TT 48/2019/TT-BTC] Giữ nguyên tỷ lệ: 30% (từ 6 tháng - dưới 1 năm); 50% (từ 1 - dưới 2 năm); 70% (từ 2 - dưới 3 năm); 100% (từ 3 năm trở lên); bổ sung quy định nợ chưa đến hạn nhưng khách nợ phá sản, bỏ trốn cũng được trích 100%.",
    impactNote: "Kiểu Việt trích lập dự phòng nợ khó đòi đối với các khoản nợ đọng công trình xây dựng quá hạn của Chủ đầu tư vào chi phí được trừ thuế TNDN hợp pháp."
  },
  {
    topic: "Hồ sơ chứng minh khoản nợ phải thu khó đòi đủ điều kiện trích lập dự phòng (Điều 6)",
    type: "modified",
    oldRule: "[Căn cứ: TT 228/2009] Hồ sơ xác nhận nợ đơn giản.",
    newRule: "[Căn cứ: Điều 6 Khoản 1 TT 48/2019] Bắt buộc phải có: Hợp đồng kinh tế; Biên bản đối chiếu công nợ có chữ ký của người đại diện hợp pháp hai bên (hoặc văn bản đòi nợ có bưu tá xác nhận gửi); Hóa đơn GTGT và chứng từ xuất kho/nghiệm thu bàn giao.",
    impactNote: "Kế toán Kiểu Việt định kỳ gửi Thư đối chiếu công nợ có ký nhận bưu điện tới 100% các Ban QLDA để bảo đảm trọn vẹn hồ sơ trích lập dự phòng."
  },
  {
    topic: "Thời điểm trích lập và hoàn nhập các khoản dự phòng tại ngày kết thúc năm tài chính (Điều 3)",
    type: "modified",
    oldRule: "[Căn cứ: TT 228/2009] Trích lập tại thời điểm lập BCTC quý hoặc năm.",
    newRule: "[Căn cứ: Điều 3 TT 48/2019] Doanh nghiệp thực hiện trích lập và hoàn nhập các khoản dự phòng tại thời điểm lập Báo cáo tài chính năm (ngày 31/12); không bắt buộc trích lập trong các quý giữa năm.",
    impactNote: "Kiểu Việt rà soát tổng thể tuổi nợ và chất lượng hàng tồn kho vào tháng 12 hàng năm để tiến hành trích lập dự phòng đồng bộ."
  },
  {
    topic: "Quy định trích lập dự phòng giảm giá hàng tồn kho vật tư, đá mỏ (Điều 4)",
    type: "modified",
    oldRule: "[Căn cứ: TT 228/2009] Trích lập theo giá thị trường tự xác định.",
    newRule: "[Căn cứ: Điều 4 TT 48/2019] Mức trích = Lượng tồn kho thực tế x (Giá gốc ghi sổ - Giá trị thuần có thể thực hiện được); giá trị thuần là giá bán ước tính trừ (-) chi phí hoàn thiện và chi phí bán hàng; vật tư phục vụ thi công nếu giá thành công trình không bị lỗ thì không trích lập.",
    impactNote: "Kiểu Việt không cần trích dự phòng cho sắt thép, xi măng dự trữ công trường nếu hợp đồng xây dựng tổng thể vẫn ghi nhận có lãi."
  },
  {
    topic: "Quy định trích lập dự phòng tổn thất các khoản đầu tư tài chính vào công ty liên kết (Điều 5)",
    type: "modified",
    oldRule: "[Căn cứ: TT cũ] Tính theo vốn chủ sở hữu chung.",
    newRule: "[Căn cứ: Điều 5 TT 48/2019 sửa đổi bởi TT 24/2022] Mức trích lập dự phòng tổn thất đầu tư tính theo tỷ lệ sở hữu vốn điều lệ nhân với phần vốn chủ sở hữu bị âm của bên nhận đầu tư trên BCTC đã kiểm toán độc lập.",
    impactNote: "Kiểu Việt đánh giá chính xác giá trị các khoản vốn góp đầu tư vào các công ty liên doanh sản xuất bê tông thương phẩm và trích lập dự phòng bảo toàn vốn."
  },
  {
    topic: "Quy định trích lập dự phòng bảo hành sản phẩm, hàng hóa, công trình xây dựng (Điều 7)",
    type: "modified",
    oldRule: "[Căn cứ: TT cũ] Doanh nghiệp tự ước tính không quá 5%.",
    newRule: "[Căn cứ: Điều 7 TT 48/2019] Doanh nghiệp xây lắp được trích lập dự phòng bảo hành công trình xây dựng theo cam kết hợp đồng (từ 3% đến 5% giá trị nghiệm thu); dự phòng trích cho từng công trình riêng biệt và hoàn nhập khi hết hạn bảo hành.",
    impactNote: "Kiểu Việt trích lập dự phòng bảo hành 3% - 5% cho các gói thầu cao tốc vào chi phí thi công (Nợ TK 641/TK 154 / Có TK 3522), giảm trực tiếp thuế TNDN trong năm bàn giao."
  },
  {
    topic: "Xử lý xóa nợ đối với các khoản nợ phải thu không thể thu hồi được (Điều 6)",
    type: "modified",
    oldRule: "[Căn cứ: TT 228/2009] Quyết định xóa nợ của HĐQT.",
    newRule: "[Căn cứ: Điều 6 Khoản 4 TT 48/2019] Nợ khó đòi sau khi đã trích lập 100% dự phòng mà khách nợ bị tuyên bố phá sản, mất tích hoặc cơ quan thi hành án xác nhận không còn tài sản thì HĐQT ra quyết định xử lý xóa nợ và theo dõi ngoài sổ sách trong 10 năm.",
    impactNote: "HĐQT Kiểu Việt xử lý xóa sổ dứt điểm các khoản nợ xấu tồn đọng lâu năm sau khi đã thực hiện đầy đủ các biện pháp đòi nợ pháp lý."
  },
  {
    topic: "Xử lý khoản tiền thu hồi được từ khoản nợ khó đòi đã xóa sổ trước đây (Điều 6)",
    type: "added",
    oldRule: "[Căn cứ: TT cũ] Ghi giảm chi phí.",
    newRule: "[Căn cứ: Điều 6 Khoản 4 TT 48/2019 & TT 200/2014] Số tiền thu hồi được từ khoản nợ khó đòi đã được xử lý xóa sổ trước đây được hạch toán trực tiếp vào Thu nhập khác (TK 711) và tính 100% vào thu nhập chịu thuế TNDN của năm thu được tiền.",
    impactNote: "Kế toán Kiểu Việt ghi nhận Nợ TK 112 / Có TK 711 khi thu hồi thành công các khoản nợ công trình cũ sau nhiều năm kiên trì đòi nợ."
  },
  {
    topic: "Quy định không được trích lập dự phòng đối với nợ phải thu của các bên liên kết (Điều 6)",
    type: "added",
    oldRule: "[Căn cứ: TT cũ] Cho phép trích lập bình thường.",
    newRule: "[Căn cứ: Điều 6 Khoản 1 TT 48/2019] Doanh nghiệp không được trích lập dự phòng nợ phải thu khó đòi đối với các khoản nợ phát sinh giữa các bên có quan hệ liên kết (công ty mẹ - con, các đơn vị có chung cổ đông kiểm soát).",
    impactNote: "Kiểu Việt thu hồi công nợ dứt điểm giữa công ty mẹ và các đơn vị thành viên, không để phát sinh nợ quá hạn nội bộ."
  },
  {
    topic: "Thẩm quyền thành lập Hội đồng xử lý nợ và Hội đồng thẩm định hàng tồn kho (Điều 8)",
    type: "added",
    oldRule: "[Căn cứ: TT cũ] Kế toán tự lập biên bản.",
    newRule: "[Căn cứ: Điều 8 TT 48/2019] Doanh nghiệp phải thành lập Hội đồng xử lý vật tư ứ đọng, nợ khó đòi do Tổng Giám đốc làm Chủ tịch hội đồng, Kế toán trưởng và Trưởng phòng Kỹ thuật/Vật tư làm ủy viên để thẩm định tính pháp lý từng khoản trích lập.",
    impactNote: "Tổng Giám đốc Kiểu Việt ký Quyết định thành lập Hội đồng xử lý nợ và vật tư công trường hàng năm, bảo đảm tính pháp lý chuẩn mực trước cơ quan thuế."
  },
  {
    topic: "Quy định nguyên tắc hoàn nhập dự phòng làm giảm chi phí trong kỳ (Điều 3)",
    type: "modified",
    oldRule: "[Căn cứ: TT 228/2009] Hoàn nhập ghi vào thu nhập khác.",
    newRule: "[Căn cứ: Điều 3 Khoản 3 TT 48/2019] Số dự phòng phải trích năm nay nhỏ hơn số dư dự phòng đã trích năm trước thì số chênh lệch được hoàn nhập ghi giảm chi phí SXKD (ghi Có TK 642, TK 635, TK 154) trong kỳ.",
    impactNote: "Kiểu Việt hoàn nhập dự phòng bảo hành công trình khi hết hạn 24 tháng bảo hành, ghi giảm chi phí quản lý doanh nghiệp đúng chuẩn mực."
  },
  {
    topic: "Hiệu lực thi hành của Thông tư 48/2019/TT-BTC (Điều 9)",
    type: "added",
    oldRule: "[Căn cứ: TT 228/2009/TT-BTC] Hết hiệu lực thi hành.",
    newRule: "[Căn cứ: Điều 9 TT 48/2019] Thông tư có hiệu lực thi hành từ ngày 25 tháng 10 năm 2019 và áp dụng từ năm tài chính 2019; thay thế toàn bộ Thông tư số 228/2009/TT-BTC.",
    impactNote: "Văn bản xương sống hướng dẫn quản trị rủi ro tài chính, trích lập dự phòng và làm sạch bảng cân đối kế toán của Công ty Cổ phần Kiểu Việt."
  }
];

// 9. luat-gd-dien-tu-20-2023: 12 items
g5['luat-gd-dien-tu-20-2023'].items = [
  {
    topic: "Thừa nhận giá trị pháp lý đầy đủ của Thông điệp dữ liệu tương đương văn bản gốc (Điều 9 - 12)",
    type: "modified",
    oldRule: "[Căn cứ: Luật GDĐT 2005] Nhiều thủ tục vẫn bắt buộc phải có văn bản giấy có con dấu đỏ trực tiếp.",
    newRule: "[Căn cứ: Điều 9, 10, 11, 12 Luật Giao dịch điện tử số 20/2023/QH15] Thông điệp dữ liệu có giá trị như văn bản, có giá trị như bản gốc và có giá trị làm chứng cứ nếu thông tin có thể truy cập, sử dụng được và bảo đảm tính toàn vẹn.",
    impactNote: "Kiểu Việt chuyển đổi toàn bộ Hợp đồng kinh tế, Hồ sơ nghiệm thu công trình sang định dạng thông điệp dữ liệu điện tử, có giá trị pháp lý tuyệt đối trước tòa án và trọng tài."
  },
  {
    topic: "Phân loại 03 cấp độ Chữ ký điện tử: Chuyên dùng, Chuyên dùng bảo đảm và Số (Điều 21 - 25)",
    type: "modified",
    oldRule: "[Căn cứ: Luật 2005] Quy định chữ ký điện tử chung chung.",
    newRule: "[Căn cứ: Điều 21, 22, 23 Luật 20/2023] Phân định rõ 3 loại: Chữ ký điện tử chuyên dùng; Chữ ký điện tử chuyên dùng bảo đảm an toàn; Chữ ký số (có chứng thư số công cộng). Khẳng định chữ ký số có giá trị pháp lý như chữ ký tay và con dấu của tổ chức.",
    impactNote: "Kiểu Việt trang bị Chữ ký số HSM máy chủ và USB Token Viettel/VNPT cho Ban Giám đốc và Kế toán trưởng ký số phê duyệt hồ sơ thầu, nghiệm thu tức thì."
  },
  {
    topic: "Quy định chuyển đổi giữa chứng từ giấy và chứng từ điện tử hai chiều (Điều 12)",
    type: "added",
    oldRule: "[Căn cứ: Luật 2005] Chưa có quy định chi tiết điều kiện chuyển đổi ngược từ điện tử sang giấy.",
    newRule: "[Căn cứ: Điều 12 Luật 20/2023] Chứng từ điện tử chuyển đổi sang chứng từ giấy phải có ký hiệu nhận biết đã chuyển đổi, họ tên người chuyển đổi và giữ nguyên nội dung; chứng từ giấy chuyển đổi sang điện tử phải scan chữ ký số bảo đảm toàn vẹn.",
    impactNote: "Kiểu Việt số hóa toàn bộ kho hồ sơ thanh quyết toán công trình từ năm 2015 đến nay lên hệ thống lưu trữ điện tử, giảm 90% diện tích kho lưu trữ giấy."
  },
  {
    topic: "Công nhận Hợp đồng điện tử trong hoạt động đấu thầu và xây dựng (Điều 34 - 38)",
    type: "modified",
    oldRule: "[Căn cứ: Luật 2005] Hợp đồng xây dựng vẫn ký giấy.",
    newRule: "[Căn cứ: Điều 34 đến 38 Luật 20/2023] Hợp đồng điện tử được giao kết và thực hiện toàn bộ trên môi trường mạng thông qua hệ thống mạng đấu thầu quốc gia (muasamcong.mpi.gov.vn) và các nền tảng ký kết hợp đồng số chuyên dụng.",
    impactNote: "Kiểu Việt thực hiện ký Hợp đồng thi công gói thầu hạ tầng trực tiếp trên Hệ thống mạng đấu thầu quốc gia bằng chữ ký số trong vòng 5 phút."
  },
  {
    topic: "Quy định dịch vụ tin cậy: Dịch vụ cấp dấu thời gian (Timestamp) và Dịch vụ chứng thực thông điệp (Điều 28 - 32)",
    type: "added",
    oldRule: "[Căn cứ: Luật 2005] Chưa có khung pháp lý cho dịch vụ cấp dấu thời gian.",
    newRule: "[Căn cứ: Điều 28 đến 32 Luật 20/2023] Bổ sung Dịch vụ tin cậy gồm: Dịch vụ cấp dấu thời gian (Timestamping); Dịch vụ chứng thực thông điệp dữ liệu; Dịch vụ chữ ký số công cộng; chứng nhận tính xác thực về thời gian lập chứng từ.",
    impactNote: "Hóa đơn điện tử và biên bản nghiệm thu của Kiểu Việt được đóng dấu thời gian Timestamp chống chối bỏ, bảo đảm không bị nghi ngờ gian lận thời điểm lập."
  },
  {
    topic: "Bảo đảm an toàn thông tin và lưu trữ thông điệp dữ liệu kế toán điện tử (Điều 13)",
    type: "modified",
    oldRule: "[Căn cứ: Luật 2005] Lưu trữ dữ liệu đơn giản.",
    newRule: "[Căn cứ: Điều 13 Luật 20/2023] Doanh nghiệp lưu trữ thông điệp dữ liệu phải bảo đảm: Dữ liệu có thể truy cập và sử dụng lại được; nội dung được giữ nguyên trạng; có thể xác định được nguồn gốc, người gửi, người nhận và thời gian gửi nhận.",
    impactNote: "Kiểu Việt sao lưu dữ liệu hóa đơn, chứng từ kế toán định kỳ lên hệ thống đám mây Cloud có mã hóa AES-256 an toàn tuyệt đối."
  },
  {
    topic: "Giao kết hợp đồng tự động thông qua hệ thống thông tin thông minh (Điều 36)",
    type: "added",
    oldRule: "[Căn cứ: Luật 2005] Hợp đồng bắt buộc phải do con người trực tiếp xác nhận từng bước.",
    newRule: "[Căn cứ: Điều 36 Luật 20/2023] Thừa nhận giá trị của Hợp đồng tự động (Smart Contract) được khởi tạo và thực hiện tự động bởi hệ thống thông tin khi đáp ứng đủ các điều kiện lập trình thiết lập sẵn.",
    impactNote: "Mở đường cho Kiểu Việt triển khai hệ thống quản trị tự động đặt hàng vật tư xi măng sắt thép với nhà máy khi lượng tồn kho chạm ngưỡng an toàn."
  },
  {
    topic: "Quy định trách nhiệm của cơ quan nhà nước chấp nhận giao dịch điện tử (Điều 44)",
    type: "added",
    oldRule: "[Căn cứ: Luật cũ] Cơ quan nhà nước thường yêu cầu bổ sung bản giấy đối chiếu.",
    newRule: "[Căn cứ: Điều 44 Luật 20/2023] Nghiêm cấm cơ quan nhà nước từ chối tiếp nhận thông điệp dữ liệu hợp lệ; không được yêu cầu nộp thêm bản giấy đối với các tài liệu đã có chữ ký số hợp pháp.",
    impactNote: "Bảo vệ Kiểu Việt trước tình trạng nhũng nhiễu, buộc Kho bạc và Ban QLDA phải tiếp nhận 100% hồ sơ thanh toán điện tử."
  },
  {
    topic: "Quy định gửi nhận chứng từ điện tử qua bên thứ ba trung gian (Điều 15 - 19)",
    type: "modified",
    oldRule: "[Căn cứ: Luật cũ] Gửi trực tiếp qua email cá nhân.",
    newRule: "[Căn cứ: Điều 15 đến 19 Luật 20/2023] Quy định cụ thể thời điểm gửi và nhận thông điệp dữ liệu qua hệ thống thông tin chỉ định; xác lập trách nhiệm của đơn vị truyền nhận trung gian (như nhà cung cấp giải pháp e-Invoice).",
    impactNote: "Kiểu Việt hợp tác với nhà mạng viễn thông lớn truyền nhận dữ liệu hóa đơn thông suốt, có biên bản xác nhận gửi nhận tức thì."
  },
  {
    topic: "Chế tài xử phạt hành vi làm sai lệch, phá hoại thông điệp dữ liệu kế toán (Điều 7)",
    type: "added",
    oldRule: "[Căn cứ: Luật cũ] Phạt hành chính nhẹ.",
    newRule: "[Căn cứ: Điều 7 Luật 20/2023 & Bộ luật Hình sự] Hành vi giả mạo, làm sai lệch hoặc phá hủy thông điệp dữ liệu kế toán điện tử bị xử phạt nặng và truy cứu trách nhiệm hình sự về tội xâm nhập mạng máy tính trái phép.",
    impactNote: "Kiểu Việt thiết lập chính sách phân quyền bảo mật nhiều lớp, quản trị rủi ro an ninh thông tin nội bộ nghiêm ngặt."
  },
  {
    topic: "Quy định công nhận chữ ký điện tử và chứng thư chữ ký số nước ngoài (Điều 26)",
    type: "added",
    oldRule: "[Căn cứ: Luật 2005] Chưa công nhận chữ ký số quốc tế.",
    newRule: "[Căn cứ: Điều 26 Luật 20/2023] Công nhận giá trị pháp lý của chữ ký điện tử nước ngoài và chứng thư chữ ký số nước ngoài tại Việt Nam khi đáp ứng các tiêu chuẩn bảo mật quốc tế và điều ước quốc tế mà Việt Nam tham gia.",
    impactNote: "Giúp Kiểu Việt ký kết hợp đồng mua bán máy móc thiết bị thi công trực tiếp với các nhà sản xuất tại Nhật Bản, Hàn Quốc, Đức bằng chữ ký số quốc tế DocuSign."
  },
  {
    topic: "Hiệu lực thi hành của Luật Giao dịch điện tử số 20/2023/QH15 (Điều 53)",
    type: "added",
    oldRule: "[Căn cứ: Luật GDĐT số 51/2005/QH11] Hết hiệu lực thi hành.",
    newRule: "[Căn cứ: Điều 53 Luật 20/2023] Luật có hiệu lực thi hành từ ngày 01 tháng 07 năm 2024; thay thế toàn bộ Luật Giao dịch điện tử số 51/2005/QH11.",
    impactNote: "Bộ khung pháp lý nền móng thúc đẩy công cuộc chuyển đổi số toàn diện và văn phòng không giấy tờ tại Công ty Cổ phần Kiểu Việt."
  }
];

// 10. nd-139-2016: 10 items
g5['nd-139-2016'].items = [
  {
    topic: "Quy định chuyển đổi từ Thuế Môn bài sang Lệ phí Môn bài thống nhất (Điều 1)",
    type: "modified",
    oldRule: "[Căn cứ: Pháp lệnh Thuế môn bài 1983] Áp dụng thuế môn bài gồm 4 bậc theo vốn đăng ký kinh doanh.",
    newRule: "[Căn cứ: Điều 1 và 4 NĐ 139/2016/NĐ-CP] Chuyển đổi tên gọi và bản chất pháp lý sang 'Lệ phí môn bài'; rút gọn mức thu đối với tổ chức hoạt động SXKD còn 3 bậc: Vốn trên 10 tỷ (3 triệu/năm), vốn từ 10 tỷ trở xuống (2 triệu/năm), chi nhánh/VĐD (1 triệu/năm).",
    impactNote: "Công ty Cổ phần Kiểu Việt có vốn điều lệ trên 10 tỷ đồng thực hiện nộp lệ phí môn bài bậc 1 là 3.000.000 đồng/năm."
  },
  {
    topic: "Mức thu lệ phí môn bài đối với Chi nhánh, Văn phòng đại diện, Địa điểm kinh doanh (Điều 4)",
    type: "modified",
    oldRule: "[Căn cứ: Quy định cũ] Mức thu chi nhánh theo bậc vốn.",
    newRule: "[Căn cứ: Điều 4 Khoản 1 Điểm c NĐ 139/2016] Mức thu lệ phí môn bài đối với Chi nhánh, Văn phòng đại diện, Địa điểm kinh doanh, đơn vị sự nghiệp, tổ chức kinh tế khác áp dụng cố định là 1.000.000 đồng/năm.",
    impactNote: "Kiểu Việt nộp lệ phí môn bài 1.000.000 đồng/năm cho mỗi Ban điều hành gói thầu hoặc Chi nhánh mỏ đá tại các huyện ngoại tỉnh."
  },
  {
    topic: "Căn cứ xác định mức thu lệ phí môn bài theo Vốn điều lệ ghi trên Giấy chứng nhận ĐKDN (Điều 4)",
    type: "modified",
    oldRule: "[Căn cứ: Quy định cũ] Tính theo vốn chủ sở hữu trên bảng cân đối kế toán năm trước.",
    newRule: "[Căn cứ: Điều 4 Khoản 1 NĐ 139/2016] Căn cứ xác định mức thu là Vốn điều lệ ghi trong Giấy chứng nhận đăng ký doanh nghiệp; trường hợp không có vốn điều lệ thì căn cứ vào Vốn đầu tư ghi trong Giấy chứng nhận đăng ký đầu tư.",
    impactNote: "Xác định mức thu lệ phí môn bài của Kiểu Việt chuẩn mực theo vốn điều lệ đăng ký trên Giấy phép kinh doanh do Sở KH&ĐT cấp."
  },
  {
    topic: "Thời hạn nộp lệ phí môn bài hàng năm chậm nhất là ngày 30 tháng 01 (Điều 5)",
    type: "modified",
    oldRule: "[Căn cứ: Quy định cũ] Nộp trước ngày 30/01.",
    newRule: "[Căn cứ: Điều 5 Khoản 2 NĐ 139/2016] Thời hạn nộp lệ phí môn bài hàng năm chậm nhất là ngày 30 tháng 01 hàng năm; không phải nộp hồ sơ khai lệ phí môn bài nếu không có thay đổi về vốn điều lệ.",
    impactNote: "Kế toán Kiểu Việt chủ động lập ủy nhiệm chi nộp lệ phí môn bài cho Trụ sở chính và các Chi nhánh ngay tuần đầu tiên của tháng 1 hàng năm."
  },
  {
    topic: "Quy định mức thu lệ phí môn bài đối với doanh nghiệp thành lập trong 6 tháng cuối năm (Điều 4)",
    type: "modified",
    oldRule: "[Căn cứ: Quy định cũ] Tính nguyên năm.",
    newRule: "[Căn cứ: Điều 4 Khoản 3 NĐ 139/2016] Doanh nghiệp thành lập trong 6 tháng đầu năm nộp 100% mức lệ phí môn bài cả năm; thành lập trong 6 tháng cuối năm (từ 01/07 đến 31/12) chỉ phải nộp 50% mức lệ phí môn bài cả năm.",
    impactNote: "Kiểu Việt tiết kiệm 50% tiền lệ phí môn bài khi thành lập các chi nhánh dự án mới vào giai đoạn nửa cuối năm."
  },
  {
    topic: "Hồ sơ và thời hạn nộp Tờ khai lệ phí môn bài lần đầu (Điều 5)",
    type: "modified",
    oldRule: "[Căn cứ: Quy định cũ] Khai tờ khai hàng năm.",
    newRule: "[Căn cứ: Điều 5 Khoản 1 NĐ 139/2016] Doanh nghiệp chỉ phải nộp Tờ khai lệ phí môn bài một lần duy nhất khi mới thành lập chậm nhất là ngày cuối cùng của tháng bắt đầu hoạt động sản xuất kinh doanh.",
    impactNote: "Cắt giảm gánh nặng hành chính: Kiểu Việt không phải nộp lại tờ khai lệ phí môn bài hàng năm nếu không thay đổi vốn điều lệ."
  },
  {
    topic: "Thời hạn nộp hồ sơ khai lệ phí môn bài khi có thay đổi vốn điều lệ (Điều 5)",
    type: "modified",
    oldRule: "[Căn cứ: Quy định cũ] Khai ngay khi đổi vốn.",
    newRule: "[Căn cứ: Điều 5 Khoản 1 NĐ 139/2016] Trường hợp trong năm có thay đổi về vốn điều lệ dẫn đến thay đổi bậc nộp lệ phí môn bài thì người nộp thuế nộp hồ sơ khai lệ phí môn bài chậm nhất là ngày 30 tháng 01 của năm tiếp theo năm có thay đổi.",
    impactNote: "Kiểu Việt tăng vốn điều lệ trong năm thì đến tháng 1 năm sau mới phải nộp tờ khai điều chỉnh bậc môn bài."
  },
  {
    topic: "Các trường hợp được miễn lệ phí môn bài (Điều 3)",
    type: "added",
    oldRule: "[Căn cứ: Quy định cũ] Danh mục miễn thuế hạn chế.",
    newRule: "[Căn cứ: Điều 3 NĐ 139/2016] Quy định miễn lệ phí môn bài cho: Hộ kinh doanh có doanh thu dưới 100 triệu đồng/năm; tổ chức hoạt động nuôi trồng đánh bắt thủy hải sản và dịch vụ hậu cần nghề cá.",
    impactNote: "Kiểu Việt nắm vững danh mục để tư vấn hỗ trợ cho các nhà thầu phụ là hộ kinh doanh cá thể địa phương."
  },
  {
    topic: "Hạch toán kế toán lệ phí môn bài vào chi phí quản lý doanh nghiệp (Điều 4)",
    type: "added",
    oldRule: "[Căn cứ: TT cũ] Hạch toán chung.",
    newRule: "[Căn cứ: TT 200/2014 & NĐ 139/2016] Lệ phí môn bài được hạch toán vào chi phí quản lý doanh nghiệp: Nợ TK 6425 / Có TK 3338 (Lệ phí môn bài) và được tính 100% vào chi phí được trừ khi xác định thuế TNDN.",
    impactNote: "Kế toán Kiểu Việt hạch toán Nợ TK 6425 / Có TK 3338 và nộp tiền Nợ TK 3338 / Có TK 112 chuẩn mực ngay đầu năm tài chính."
  },
  {
    topic: "Hiệu lực thi hành của Nghị định 139/2016/NĐ-CP (Điều 6)",
    type: "added",
    oldRule: "[Căn cứ: Pháp lệnh Thuế Môn bài 1983] Bãi bỏ toàn bộ.",
    newRule: "[Căn cứ: Điều 6 NĐ 139/2016] Nghị định có hiệu lực thi hành từ ngày 01 tháng 01 năm 2017; mở đầu cho quy chế quản lý lệ phí môn bài hiện đại, đơn giản tại Việt Nam.",
    impactNote: "Căn cứ pháp lý nền tảng thực hiện nghĩa vụ môn bài liên tục nhiều năm của Công ty Cổ phần Kiểu Việt."
  }
];

// 11. nd-22-2020: 10 items
g5['nd-22-2020'].items = [
  {
    topic: "Miễn lệ phí môn bài trong năm đầu thành lập cho doanh nghiệp mới thành lập (Điều 1)",
    type: "added",
    oldRule: "[Căn cứ: NĐ 139/2016 Điều 3] Doanh nghiệp thành lập mới phải nộp lệ phí môn bài ngay trong năm đầu tiên (nộp 100% hoặc 50% tùy tháng thành lập).",
    newRule: "[Căn cứ: Điều 1 Khoản 1 NĐ 22/2020/NĐ-CP sửa đổi Điều 3 NĐ 139/2016] Miễn lệ phí môn bài trong năm đầu thành lập hoặc ra hoạt động sản xuất, kinh doanh (từ ngày 01/01 đến ngày 31/12) đối với tổ chức thành lập mới.",
    impactNote: "Chính sách ưu đãi tuyệt vời: Các công ty con hoặc chi nhánh mới do Kiểu Việt thành lập được miễn 100% lệ phí môn bài trong toàn bộ năm đầu tiên hoạt động."
  },
  {
    topic: "Miễn lệ phí môn bài cho Chi nhánh, Văn phòng đại diện thành lập trong thời gian công ty mẹ được miễn (Điều 1)",
    type: "added",
    oldRule: "[Căn cứ: NĐ 139/2016] Chi nhánh lập mới phải nộp 1 triệu đồng/năm ngay.",
    newRule: "[Căn cứ: Điều 1 Khoản 1 NĐ 22/2020] Trong thời gian tổ chức được miễn lệ phí môn bài, chi nhánh, văn phòng đại diện, địa điểm kinh doanh được thành lập trong thời gian này cũng được miễn lệ phí môn bài.",
    impactNote: "Kiểu Việt thành lập đồng loạt các Ban điều hành gói thầu và chi nhánh phụ thuộc trong năm đầu được miễn toàn bộ lệ phí môn bài."
  },
  {
    topic: "Miễn lệ phí môn bài trong 03 năm cho doanh nghiệp nhỏ và vừa chuyển đổi từ hộ kinh doanh (Điều 1)",
    type: "added",
    oldRule: "[Căn cứ: NĐ 139/2016] Không có chính sách hỗ trợ chuyển đổi hộ kinh doanh.",
    newRule: "[Căn cứ: Điều 1 Khoản 1 NĐ 22/2020] Doanh nghiệp nhỏ và vừa chuyển đổi từ hộ kinh doanh được miễn lệ phí môn bài trong thời hạn 03 năm kể từ ngày được cấp Giấy chứng nhận đăng ký doanh nghiệp lần đầu.",
    impactNote: "Khuyến khích các đội thầu phụ là hộ kinh doanh hợp tác lâu năm của Kiểu Việt chuyển đổi lên mô hình doanh nghiệp để hưởng ưu đãi 3 năm miễn lệ phí."
  },
  {
    topic: "Quy định thời hạn nộp Tờ khai lệ phí môn bài cho tổ chức mới thành lập chậm nhất là 30/01 năm sau (Điều 1)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ 139/2016 Điều 5] Nộp tờ khai chậm nhất vào ngày cuối cùng của tháng bắt đầu hoạt động.",
    newRule: "[Căn cứ: Điều 1 Khoản 3 NĐ 22/2020 sửa đổi Điều 5 NĐ 139/2016] Người nộp lệ phí mới thành lập (bao gồm cả doanh nghiệp nhỏ và vừa chuyển đổi từ hộ kinh doanh) nộp hồ sơ khai lệ phí môn bài chậm nhất là ngày 30 tháng 01 năm sau năm thành lập.",
    impactNote: "Kéo dài thời hạn kê khai: Giúp Kiểu Việt có trọn vẹn 1 năm tập trung tổ chức bộ máy sản xuất trước khi phải nộp tờ khai môn bài vào đầu năm sau."
  },
  {
    topic: "Thời hạn nộp lệ phí môn bài của tổ chức kết thúc thời gian miễn lệ phí môn bài (Điều 1)",
    type: "added",
    oldRule: "[Căn cứ: NĐ cũ] Chưa quy định thời hạn khi hết thời gian miễn.",
    newRule: "[Căn cứ: Điều 1 Khoản 3 NĐ 22/2020] Doanh nghiệp nhỏ và vừa chuyển đổi từ hộ kinh doanh khi kết thúc thời gian được miễn lệ phí môn bài (năm thứ tư) nộp lệ phí môn bài chậm nhất là ngày 30 tháng 01 của năm liền kề năm kết thúc thời gian miễn.",
    impactNote: "Quy định thời hạn nộp tiền rõ ràng, không lo bị nhầm lẫn thời điểm bắt đầu phải nộp thuế môn bài."
  },
  {
    topic: "Miễn lệ phí môn bài đối với cơ sở giáo dục phổ thông và mầm non công lập, tư thục (Điều 1)",
    type: "added",
    oldRule: "[Căn cứ: NĐ 139/2016] Cơ sở giáo dục ngoài công lập vẫn phải nộp.",
    newRule: "[Căn cứ: Điều 1 Khoản 1 NĐ 22/2020] Bổ sung đối tượng miễn lệ phí môn bài: Cơ sở giáo dục mầm non và cơ sở giáo dục phổ thông công lập và ngoài công lập.",
    impactNote: "Chính sách nhân văn khuyến khích các dự án xã hội hóa giáo dục của các tập đoàn đối tác."
  },
  {
    topic: "Thời điểm nộp tiền lệ phí môn bài khi thành lập chi nhánh trong năm được miễn (Điều 1)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ cũ] Nộp tiền trong 30 ngày.",
    newRule: "[Căn cứ: Điều 1 Khoản 3 NĐ 22/2020] Chi nhánh thành lập trong thời gian được miễn thì không phải nộp tiền lệ phí môn bài của năm đó; chỉ phải nộp tiền từ ngày 01 đến ngày 30 tháng 01 của năm tiếp theo.",
    impactNote: "Tiết kiệm dòng tiền mặt quý báu cho các ban chỉ huy công trường mới mở của Kiểu Việt."
  },
  {
    topic: "Quy định địa điểm nộp hồ sơ khai lệ phí môn bài đối với chi nhánh khác tỉnh (Điều 1)",
    type: "modified",
    oldRule: "[Căn cứ: NĐ 139/2016] Nộp tại cơ quan thuế quản lý trực tiếp chi nhánh.",
    newRule: "[Căn cứ: Điều 1 NĐ 22/2020 & TT 80/2021] Chi nhánh hạch toán phụ thuộc ở khác tỉnh nộp hồ sơ khai lệ phí môn bài và nộp lệ phí môn bài tại cơ quan thuế quản lý trực tiếp chi nhánh đó bằng phương thức điện tử.",
    impactNote: "Kiểu Việt nộp lệ phí môn bài cho các chi nhánh ngoại tỉnh trực tiếp trên cổng thuedientu.gdt.gov.vn thuận tiện, chính xác."
  },
  {
    topic: "Hiệu lực thi hành của Nghị định 22/2020/NĐ-CP (Điều 2)",
    type: "added",
    oldRule: "[Căn cứ: NĐ 139/2016] Quy định cũ trước ngày 25/02/2020.",
    newRule: "[Căn cứ: Điều 2 NĐ 22/2020] Nghị định có hiệu lực thi hành từ ngày 25 tháng 02 năm 2020; các tổ chức thành lập từ ngày 25/02/2020 được áp dụng ngay chính sách miễn lệ phí môn bài năm đầu.",
    impactNote: "Chính sách kích cầu phát triển doanh nghiệp kịp thời của Chính phủ đem lại lợi ích thiết thực cho cộng đồng doanh nghiệp."
  },
  {
    topic: "Bảo đảm quyền lợi chuyển tiếp cho các doanh nghiệp thành lập đầu năm 2020 (Điều 2)",
    type: "added",
    oldRule: "[Căn cứ: NĐ 139/2016] Đã nộp môn bài trước 25/02/2020.",
    newRule: "[Căn cứ: Điều 2 Khoản 2 NĐ 22/2020] Doanh nghiệp thành lập từ ngày 01/01/2020 đến trước ngày 25/02/2020 đã nộp lệ phí môn bài thì được cơ quan thuế bù trừ số tiền đã nộp vào số lệ phí môn bài phải nộp của năm tiếp theo.",
    impactNote: "Bảo đảm nguyên tắc công bằng pháp lý tuyệt đối cho người nộp thuế."
  }
];

// 12. luat-thue-xnk-107-2016: 10 items
g5['luat-thue-xnk-107-2016'].items = [
  {
    topic: "Miễn thuế nhập khẩu đối với máy móc, thiết bị tạo tài sản cố định của dự án ưu đãi đầu tư (Điều 16)",
    type: "modified",
    oldRule: "[Căn cứ: Luật Thuế XNK 2005 Điều 12] Miễn thuế cho dự án đầu tư theo danh mục hẹp.",
    newRule: "[Căn cứ: Điều 16 Khoản 11 Luật Thuế xuất khẩu, thuế nhập khẩu số 107/2016/QH13] Miễn thuế nhập khẩu đối với hàng hóa nhập khẩu để tạo tài sản cố định của đối tượng được hưởng ưu đãi đầu tư gồm: Máy móc, thiết bị; phương tiện vận tải chuyên dùng trong dây chuyền công nghệ; linh kiện, chi tiết, bộ phận rời trong nước chưa sản xuất được.",
    impactNote: "Kiểu Việt nhập khẩu dàn xe lu rung Hamm, máy trải nhựa Vogele và trạm nghiền đá hiện đại từ châu Âu được miễn 100% thuế nhập khẩu, tiết kiệm hàng tỷ đồng."
  },
  {
    topic: "Quy định điều kiện kiểm tra trong nước đã sản xuất được hay chưa (Điều 16)",
    type: "modified",
    oldRule: "[Căn cứ: Luật cũ] Tự chứng minh hoặc xin xác nhận Bộ ngành.",
    newRule: "[Căn cứ: Điều 16 Luật 107/2016] Căn cứ xác định hàng hóa trong nước chưa sản xuất được là Danh mục máy móc, thiết bị, dây chuyền công nghệ trong nước đã sản xuất được do Bộ Kế hoạch và Đầu tư ban hành.",
    impactNote: "Kế toán Kiểu Việt tra cứu Danh mục của Bộ KH&ĐT trước khi mở tờ khai hải quan nhập khẩu máy móc công trình để hưởng trọn vẹn chính sách miễn thuế."
  },
  {
    topic: "Thời hạn nộp thuế đối với hàng hóa nhập khẩu phải nộp trước khi thông quan (Điều 9)",
    type: "modified",
    oldRule: "[Căn cứ: Luật 2005] Được ân hạn thời hạn nộp thuế 30 ngày kể từ ngày đăng ký tờ khai.",
    newRule: "[Căn cứ: Điều 9 Luật 107/2016] Bãi bỏ thời hạn ân hạn thuế 30 ngày; người nộp thuế phải nộp đủ tiền thuế nhập khẩu, thuế GTGT hàng nhập khẩu trước khi thông quan hoặc giải phóng hàng hóa (trừ trường hợp có bảo lãnh ngân hàng).",
    impactNote: "Kiểu Việt thu xếp Bảo lãnh nộp thuế của Ngân hàng BIDV để thông quan nhanh phụ tùng máy xúc nhập khẩu mà không phải nộp tiền mặt ngay tại cảng."
  },
  {
    topic: "Miễn thuế nhập khẩu đối với nguyên liệu, vật tư nhập khẩu phục vụ thi công công trình dầu khí, hạ tầng trọng điểm (Điều 16)",
    type: "added",
    oldRule: "[Căn cứ: Luật cũ] Thủ tục xét miễn thuế từng lần.",
    newRule: "[Căn cứ: Điều 16 Khoản 12 Luật 107/2016] Miễn thuế nhập khẩu đối với hàng hóa nhập khẩu là nguyên liệu, vật tư trong nước chưa sản xuất được phục vụ trực tiếp cho hoạt động nghiên cứu phát triển và công trình hạ tầng trọng điểm.",
    impactNote: "Tạo điều kiện cho Kiểu Việt nhập khẩu các phụ gia đặc chủng chống nứt bê tông nhựa polyme với chi phí thuế 0%."
  },
  {
    topic: "Quy định phương pháp tính thuế theo tỷ lệ phần trăm và phương pháp tính thuế tuyệt đối (Điều 5)",
    type: "modified",
    oldRule: "[Căn cứ: Luật cũ] Áp dụng thuế suất theo % là chủ yếu.",
    newRule: "[Căn cứ: Điều 5 và Điều 6 Luật 107/2016] Quy định 3 phương pháp tính thuế: Phương pháp tính thuế theo tỷ lệ phần trăm (Số tiền thuế = Trị giá tính thuế x Thuế suất); Phương pháp tính thuế tuyệt đối (Số lượng x Mức thuế tuyệt đối); Phương pháp tính thuế hỗn hợp.",
    impactNote: "Áp dụng phương pháp tính thuế theo tỷ lệ phần trăm (%) chuẩn xác trên giá CIF của phụ tùng máy đào nhập khẩu từ Nhật Bản."
  },
  {
    topic: "Hoàn thuế nhập khẩu đối với hàng hóa nhập khẩu tái xuất hoặc không sử dụng hết (Điều 19)",
    type: "modified",
    oldRule: "[Căn cứ: Luật cũ] Thời gian hoàn thuế kéo dài.",
    newRule: "[Căn cứ: Điều 19 Luật 107/2016] Hàng hóa nhập khẩu đã nộp thuế nhưng chưa qua sử dụng phải tái xuất ra nước ngoài hoặc hàng tạm nhập tái xuất phục vụ thi công công trình trong thời hạn nhất định được hoàn lại 100% số thuế nhập khẩu đã nộp.",
    impactNote: "Kiểu Việt tạm nhập các thiết bị đo đạc địa chất chuyên sâu phục vụ khảo sát công trình hầm và được hoàn thuế nhập khẩu khi tái xuất thiết bị."
  },
  {
    topic: "Quy định về thời hạn bảo lãnh nộp thuế nhập khẩu của tổ chức tín dụng (Điều 9)",
    type: "modified",
    oldRule: "[Căn cứ: Luật cũ] Bảo lãnh chung chung.",
    newRule: "[Căn cứ: Điều 9 Khoản 1 Luật 107/2016] Thời hạn bảo lãnh thông quan hàng hóa tối đa là 30 ngày; nếu hết thời hạn bảo lãnh người nộp thuế chưa nộp thuế thì tổ chức tín dụng bảo lãnh có trách nhiệm nộp thay số tiền thuế và tiền chậm nộp.",
    impactNote: "Kiểu Việt thanh toán thuế cho Kho bạc Nhà nước trước hạn bảo lãnh 5 ngày, bảo đảm uy tín tín dụng hoàn hảo với ngân hàng bảo lãnh."
  },
  {
    topic: "Xử phạt hành vi khai sai thuế nhập khẩu và trốn thuế nhập khẩu (Điều 18)",
    type: "modified",
    oldRule: "[Căn cứ: Luật cũ] Xử phạt theo pháp luật hải quan cũ.",
    newRule: "[Căn cứ: Điều 18 Luật 107/2016 & Luật QLT 2019] Khai sai dẫn đến thiếu số tiền thuế phải nộp bị phạt 20% trên số tiền thuế khai thiếu; hành vi gian lận mã HS code trốn thuế bị phạt từ 1 đến 3 lần số tiền thuế trốn và truy thu đủ số thuế.",
    impactNote: "Phòng Xuất nhập khẩu Kiểu Việt tra cứu chính xác mã HS code và chứng nhận xuất xứ C/O Form E/Form AK để hưởng ưu đãi thuế suất hợp pháp."
  },
  {
    topic: "Chính sách ưu đãi thuế quan theo các Hiệp định thương mại tự do FTA (Điều 5)",
    type: "added",
    oldRule: "[Căn cứ: Luật cũ] Biểu thuế ưu đãi hạn chế.",
    newRule: "[Căn cứ: Điều 5 Khoản 3 Luật 107/2016] Hàng hóa có Giấy chứng nhận xuất xứ (C/O) hợp lệ từ các nước tham gia Hiệp định FTA với Việt Nam (CPTPP, EVFTA, VKFTA, ACFTA) được áp dụng mức thuế suất thuế nhập khẩu ưu đãi đặc biệt 0% đối với máy móc cơ giới.",
    impactNote: "Kiểu Việt tận dụng triệt để C/O ưu đãi để nhập khẩu xe máy đào Komatsu, Hitachi với mức thuế suất thuế nhập khẩu 0%."
  },
  {
    topic: "Hiệu lực thi hành của Luật Thuế xuất khẩu, thuế nhập khẩu số 107/2016/QH13 (Điều 22)",
    type: "added",
    oldRule: "[Căn cứ: Luật Thuế XNK số 45/2005/QH11] Hết hiệu lực thi hành.",
    newRule: "[Căn cứ: Điều 22 Luật 107/2016] Luật có hiệu lực thi hành kể từ ngày 01 tháng 09 năm 2016; thay thế toàn bộ Luật Thuế xuất khẩu, thuế nhập khẩu số 45/2005/QH11.",
    impactNote: "Hành lang pháp lý bảo vệ và hỗ trợ Công ty Cổ phần Kiểu Việt tối ưu hóa chuỗi cung ứng vật tư thiết bị thi công xây dựng quốc tế."
  }
];

// Write updated group 5 back to file
const outputCode = `import { DecreeDiffData } from '../diff-types';\n\nexport const group5ResourcesFeesGeneral: Record<string, DecreeDiffData> = ` + JSON.stringify(g5, null, 2) + `;\n`;
fs.writeFileSync(g5Path, outputCode, 'utf8');
console.log('Group 5 Part 2 expanded! All 12 decrees in Group 5 are now fully completed with 10-14 items.');
