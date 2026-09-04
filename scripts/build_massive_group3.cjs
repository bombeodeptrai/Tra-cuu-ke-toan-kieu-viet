const fs = require('fs');
const path = require('path');

const g3Path = path.join(__dirname, '..', 'src', 'data', 'diffs', 'group3_corporate_personal_tax.ts');
const raw = fs.readFileSync(g3Path, 'utf8');
const jsonStr = raw.replace(/import[^;]+;/, '').replace(/export const \w+[^=]+=/, '').replace(/;\s*$/, '');
const g3 = eval('(' + jsonStr + ')');

// 1. luat-67-2025-tndn: 15 points
g3['luat-67-2025-tndn'].items = [
  {
    topic: "Áp dụng cơ chế Thuế tối thiểu toàn cầu (Pillar 2) tỷ lệ 15% (Điều 7)",
    type: "added",
    oldRule: "[Căn cứ: Luật Thuế TNDN 2008] Doanh nghiệp hưởng thuế suất ưu đãi đặc biệt 5%, 10% trong thời gian 15-30 năm và miễn thuế 4 năm, giảm 50% trong 9 năm tiếp theo.",
    newRule: "[Căn cứ: Điều 7 Luật 67/2025] Bổ sung quy định Thuế thu nhập doanh nghiệp bổ sung tối thiểu nội địa đạt chuẩn (QDMTT) với thuế suất tối thiểu 15% áp dụng cho các tập đoàn đa quốc gia có doanh thu hợp nhất từ 750 triệu EUR trở lên.",
    impactNote: "Kiểu Việt đánh giá vị thế khi liên danh tổng thầu với các tập đoàn FDI lớn (như Hyundai E&C, Lotte E&C), bảo đảm cơ chế tính giá thầu không bị ảnh hưởng bởi nghĩa vụ bù thuế 15%."
  },
  {
    topic: "Siết chặt điều kiện thanh toán không dùng tiền mặt từ 5 triệu đồng (Điều 9 Khoản 1 Điểm b)",
    type: "modified",
    oldRule: "[Căn cứ: Khoản 1 Điều 9 Luật 14/2008 & TT 96/2015] Hóa đơn mua hàng hóa, dịch vụ từng lần có giá trị từ 20.000.000 đồng trở lên (đã bao gồm thuế GTGT) bắt buộc phải có chứng từ thanh toán không dùng tiền mặt.",
    newRule: "[Căn cứ: Điều 9 Khoản 1 Điểm b Luật 67/2025] Hạ ngưỡng thanh toán bắt buộc không dùng tiền mặt xuống còn 5.000.000 đồng (đã gồm VAT) đối với mọi khoản chi phí mua hàng hóa, dịch vụ; thanh toán tiền mặt từ 5 triệu trở lên bị loại 100% chi phí được trừ.",
    impactNote: "Kế toán Kiểu Việt chỉ đạo các Đội trưởng công trường: Mọi khoản mua cát, đá dăm, vật tư phụ, sửa chữa máy móc từ 5 triệu đồng trở lên bắt buộc phải chuyển khoản qua tài khoản ngân hàng của Công ty Kiểu Việt."
  },
  {
    topic: "Khống chế trần chi phí quảng cáo, tiếp khách, khánh thành công trình (Điều 9)",
    type: "modified",
    oldRule: "[Căn cứ: Luật 14/2008 & Luật 71/2014] Đã bãi bỏ mức khống chế 15% chi phí quảng cáo, tiếp tân, khánh thành từ năm 2015.",
    newRule: "[Căn cứ: Điều 9 Luật 67/2025] Tiếp tục cho phép trừ 100% chi phí tiếp khách, hội nghị khách hàng, lễ khởi công, thông xe công trình thực tế phát sinh liên quan đến hoạt động SXKD có đủ hóa đơn hợp pháp và chứng từ thanh toán qua ngân hàng.",
    impactNote: "Kiểu Việt lập đầy đủ Kế hoạch tổ chức Lễ thông xe gói thầu cao tốc và hóa đơn thuê âm thanh, nhà bạt có thanh toán ủy nhiệm chi để bảo vệ 100% chi phí thuế."
  },
  {
    topic: "Ưu đãi thuế TNDN cho dự án đầu tư xây dựng hạ tầng giao thông và mỏ vật liệu xanh (Điều 13)",
    type: "added",
    oldRule: "[Căn cứ: Luật 14/2008] Ưu đãi thuế chỉ tập trung vào công nghệ cao, phần mềm và địa bàn kinh tế xã hội đặc biệt khó khăn.",
    newRule: "[Căn cứ: Điều 13 Luật 67/2025] Bổ sung ưu đãi thuế suất 10% trong 15 năm, miễn thuế 4 năm và giảm 50% trong 9 năm tiếp theo đối với dự án đầu tư công trình hạ tầng giao thông trọng điểm quốc gia và dự án chế biến khoáng sản cát nghiền nhân tạo thay thế cát tự nhiên.",
    impactNote: "Dự án đầu tư dây chuyền sản xuất cát nghiền nhân tạo từ đá mỏ của Kiểu Việt tại Gia Lai được hưởng ưu đãi thuế TNDN 10%, tiết kiệm hàng chục tỷ đồng tiền thuế."
  },
  {
    topic: "Bù trừ lỗ giữa chuyển nhượng bất động sản và hoạt động sản xuất kinh doanh xây lắp (Điều 7)",
    type: "modified",
    oldRule: "[Căn cứ: Luật 14/2008 & Luật 71/2014] Lỗ từ chuyển nhượng bất động sản, chuyển nhượng dự án chỉ được bù trừ với lãi của chuyển nhượng BĐS, không được bù trừ với lãi của hoạt động sản xuất kinh doanh thông thường.",
    newRule: "[Căn cứ: Điều 7 Luật 67/2025] Cho phép bù trừ hai chiều: Doanh nghiệp được bù trừ số lỗ từ hoạt động chuyển nhượng dự án, chuyển nhượng quyền khai thác khoáng sản với số lãi từ hoạt động thi công xây lắp và ngược lại.",
    impactNote: "Kiểu Việt tận dụng khoản lỗ chi phí đầu tư ban đầu của mỏ khoáng sản mới để bù trừ giảm trực tiếp số thuế TNDN phải nộp từ doanh thu xây lắp cao tốc."
  },
  {
    topic: "Chi phí tài trợ giáo dục, y tế, xây dựng nhà tình nghĩa cho đồng bào nghèo (Điều 9)",
    type: "modified",
    oldRule: "[Căn cứ: Luật 14/2008] Chỉ cho phép trừ chi phí tài trợ giáo dục, y tế theo danh mục hẹp.",
    newRule: "[Căn cứ: Điều 9 Luật 67/2025] Mở rộng chi phí tài trợ hợp lý: Tài trợ làm đường giao thông nông thôn, cầu dân sinh, nhà đại đoàn kết tại các địa bàn khó khăn được tính 100% vào chi phí được trừ khi có biên bản giao nhận tài trợ theo mẫu của Bộ Tài chính.",
    impactNote: "Các hoạt động từ thiện làm đường nông thôn cho bà con vùng sâu tỉnh Gia Lai của Kiểu Việt được tính hợp pháp vào chi phí giảm thuế TNDN."
  },
  {
    topic: "Quy định trích lập Quỹ Phát triển Khoa học & Công nghệ tối đa 10% thu nhập tính thuế (Điều 17)",
    type: "modified",
    oldRule: "[Căn cứ: Luật 14/2008] Trích tối đa 10% thu nhập tính thuế nhưng thủ tục giải ngân quỹ rất phức tạp.",
    newRule: "[Căn cứ: Điều 17 Luật 67/2025] Cho phép Kiểu Việt trích lập tối đa 10% thu nhập chịu thuế TNDN hàng năm vào Quỹ KH&CN; quỹ được dùng để mua sắm công nghệ đầm nén thông minh, hệ thống định vị vệ tinh máy ủi và phần mềm mô phỏng BIM.",
    impactNote: "Kiểu Việt giữ lại tới 10% lợi nhuận trước thuế tái đầu tư đổi mới công nghệ thi công mà không phải nộp thuế TNDN ngay."
  },
  {
    topic: "Thời gian chuyển lỗ tối đa liên tục 05 năm (Điều 7)",
    type: "modified",
    oldRule: "[Căn cứ: Luật 14/2008] Chuyển lỗ liên tục không quá 5 năm kể từ năm tiếp sau năm phát sinh lỗ.",
    newRule: "[Căn cứ: Điều 7 Luật 67/2025] Giữ nguyên thời hạn chuyển lỗ tối đa 05 năm liên tục; quy định rõ phương pháp chuyển lỗ toàn bộ và liên tục vào thu nhập chịu thuế của các năm sau theo từng dự án độc lập.",
    impactNote: "Kiểu Việt phân bổ số lỗ của các năm mùa mưa kéo dài sang các năm khô ráo thi công thần tốc để tối ưu hóa nghĩa vụ thuế."
  },
  {
    topic: "Chi phí lãi vay đối với vốn điều lệ còn thiếu (Điều 9)",
    type: "modified",
    oldRule: "[Căn cứ: TT 96/2015] Không được trừ chi phí lãi vay tương ứng với phần vốn điều lệ đã đăng ký còn thiếu.",
    newRule: "[Căn cứ: Điều 9 Luật 67/2025] Khẳng định nghiêm cấm tính vào chi phí được trừ đối với chi phí trả lãi tiền vay tương ứng với phần vốn điều lệ đã đăng ký còn thiếu theo tiến độ góp vốn ghi trong Điều lệ công ty.",
    impactNote: "Các cổ đông Kiểu Việt luôn hoàn thành góp đủ 100% vốn điều lệ đã đăng ký đúng hạn, bảo đảm toàn bộ lãi vay ngân hàng phục vụ công trình được trừ thuế."
  },
  {
    topic: "Thuế suất thuế TNDN đối với hoạt động tìm kiếm thăm dò và khai thác khoáng sản (Điều 10)",
    type: "modified",
    oldRule: "[Căn cứ: Luật 14/2008] Thuế suất khai thác khoáng sản áp dụng từ 32% đến 50%.",
    newRule: "[Căn cứ: Điều 10 Luật 67/2025] Thuế suất thuế TNDN đối với khai thác dầu khí từ 25% - 50%; khai thác khoáng sản vật liệu xây dựng thông thường (đá, cát, đất đắp) của các nhà thầu hạ tầng áp dụng thuế suất phổ thông 20%.",
    impactNote: "Xác nhận rõ ràng Kiểu Việt khai thác mỏ đất phục vụ cao tốc chỉ chịu thuế suất TNDN 20%, không bị áp mức thuế suất khoáng sản quý hiếm 32-50%."
  },
  {
    topic: "Chi phí trang phục cho người lao động bằng tiền và hiện vật (Điều 9)",
    type: "modified",
    oldRule: "[Căn cứ: TT 96/2015] Chi tiền trang phục khống chế không quá 5.000.000 đồng/người/năm; chi bằng hiện vật không khống chế.",
    newRule: "[Căn cứ: Điều 9 Luật 67/2025] Nâng mức chi trang phục bằng tiền mặt lên tối đa 7.000.000 đồng/người/năm; chi mua sắm bảo hộ lao động hiện trường (áo phản quang, mũ bảo hộ, giày mũi sắt) bằng hiện vật được trừ 100% theo thực tế.",
    impactNote: "Kiểu Việt trang cấp đầy đủ bảo hộ lao động đạt chuẩn cho hàng trăm công nhân trên tuyến cao tốc và hạch toán trọn vẹn vào chi phí thuế."
  },
  {
    topic: "Thuế TNDN từ chuyển nhượng quyền khai thác khoáng sản và quyền thuê đất (Điều 14)",
    type: "modified",
    oldRule: "[Căn cứ: Luật 14/2008] Kê khai chung trong tờ khai quyết toán năm.",
    newRule: "[Căn cứ: Điều 14 Luật 67/2025] Bắt buộc kê khai và nộp thuế TNDN riêng theo từng lần phát sinh chuyển nhượng quyền thăm dò, khai thác mỏ khoáng sản với thuế suất 20% trên thu nhập chịu thuế.",
    impactNote: "Kiểu Việt hạch toán riêng biệt khi chuyển nhượng cổ phần hoặc hợp tác chuyển giao mỏ vật liệu, bảo đảm tính minh bạch nghĩa vụ thuế."
  },
  {
    topic: "Điều kiện xác định chi phí khấu hao TSCĐ có chứng từ thanh toán ngân hàng (Điều 9)",
    type: "added",
    oldRule: "[Căn cứ: Luật 14/2008] Khấu hao tính theo sổ sách TSCĐ.",
    newRule: "[Căn cứ: Điều 9 Luật 67/2025] Máy móc thiết bị mua sắm có giá trị từ 5 triệu đồng trở lên bắt buộc phải có chứng từ thanh toán không dùng tiền mặt mới đủ điều kiện trích khấu hao tính vào chi phí được trừ khi xác định thuế TNDN.",
    impactNote: "Kiểu Việt chuyển khoản 100% tiền mua sắm linh kiện máy đào, đầu kéo, tuyệt đối không trả tiền mặt để bảo vệ chi phí khấu hao."
  },
  {
    topic: "Quy định về thuế TNDN đối với doanh nghiệp xây dựng có cơ sở phụ thuộc ngoại tỉnh (Điều 12)",
    type: "modified",
    oldRule: "[Căn cứ: Luật 14/2008] Nộp thuế tập trung tại trụ sở chính.",
    newRule: "[Căn cứ: Điều 12 Luật 67/2025] Doanh nghiệp có các chi nhánh, xí nghiệp thi công hoặc mỏ khoáng sản phụ thuộc tại các tỉnh khác bắt buộc phải phân bổ số thuế TNDN tạm nộp và quyết toán cho từng địa phương theo tỷ lệ luật định.",
    impactNote: "Kiểu Việt phân bổ chuẩn xác tiền thuế TNDN cho ngân sách các tỉnh Tây Nguyên nơi công ty đóng quân thi công dự án."
  },
  {
    topic: "Hiệu lực thi hành Luật Thuế thu nhập doanh nghiệp số 67/2025/QH15",
    type: "added",
    oldRule: "[Căn cứ: Luật 14/2008] Luật Thuế TNDN cũ.",
    newRule: "[Căn cứ: Điều 20 Luật 67/2025] Luật có hiệu lực thi hành từ ngày 01/01/2026; các quy định về chuẩn hóa chi phí không dùng tiền mặt 5 triệu áp dụng từ kỳ tính thuế năm 2026.",
    impactNote: "Kiểu Việt chuẩn bị toàn diện quy chế tài chính đón đầu Luật Thuế TNDN mới, bảo đảm an toàn tối đa cho ngân sách doanh nghiệp."
  }
];

// 2. luat-109-2025-tncn: 12 points
g3['luat-109-2025-tncn'].items = [
  {
    topic: "Nâng mức giảm trừ gia cảnh bản thân lên 15.5 triệu đồng và người phụ thuộc 6.2 triệu đồng (Điều 1)",
    type: "modified",
    oldRule: "[Căn cứ: NQ 954/2020] Giảm trừ gia cảnh cho bản thân người nộp thuế là 11.000.000 đồng/tháng (132 triệu/năm); mức giảm trừ cho mỗi người phụ thuộc là 4.400.000 đồng/tháng.",
    newRule: "[Căn cứ: Điều 1 Luật 109/2025] Nâng mức giảm trừ gia cảnh cho bản thân lên 15.500.000 đồng/tháng (186 triệu/năm); mức giảm trừ cho mỗi người phụ thuộc lên 6.200.000 đồng/tháng (74.4 triệu/năm).",
    impactNote: "Hơn 90% kỹ sư, công nhân lái máy thi công Kiểu Việt có mức lương 15-20 triệu đồng sẽ không phải nộp thuế TNCN hoặc giảm số thuế phải nộp tới 60%, nâng cao thu nhập thực nhận."
  },
  {
    topic: "Rút gọn biểu thuế lũy tiến từng phần từ 7 bậc xuống còn 5 bậc (Điều 3)",
    type: "modified",
    oldRule: "[Căn cứ: Luật 04/2007] Biểu thuế lũy tiến gồm 7 bậc quá dày: 5%, 10%, 15%, 20%, 25%, 30%, 35% (bậc 1 chỉ đến 5 triệu, bậc 2 từ 5-10 triệu).",
    newRule: "[Căn cứ: Điều 3 Luật 109/2025] Tinh giản biểu thuế còn 5 bậc: Bậc 1 (đến 10 triệu: 5%), Bậc 2 (10 - 30 triệu: 10%), Bậc 3 (30 - 60 triệu: 20%), Bậc 4 (60 - 100 triệu: 28%), Bậc 5 (trên 100 triệu: 35%).",
    impactNote: "Kế toán tiền lương Kiểu Việt giảm bớt tính toán phức tạp, bậc thuế giãn cách rộng giúp các Chỉ huy trưởng công trường giữ được thu nhập cao sau thuế."
  },
  {
    topic: "Miễn thuế TNCN đối với phụ cấp làm việc tại công trường vùng sâu, vùng xa (Điều 2)",
    type: "added",
    oldRule: "[Căn cứ: TT 111/2013] Phụ cấp thu hút, phụ cấp khu vực chỉ được miễn thuế theo định mức hạn chế của Nhà nước.",
    newRule: "[Căn cứ: Điều 2 Luật 109/2025] Miễn thuế TNCN toàn bộ đối với các khoản phụ cấp lưu động, phụ cấp ăn ở dã ngoại tại hiện trường công trình giao thông vùng đặc biệt khó khăn, hải đảo.",
    impactNote: "Kiểu Việt mạnh dạn chi trả phụ cấp công trường cao (3-5 triệu/tháng) cho cán bộ bám trụ tuyến cao tốc mà người lao động không bị trừ thuế TNCN."
  },
  {
    topic: "Quy định về thuế TNCN đối với nhân công thuê khoán thời vụ dưới 3 tháng (Điều 4)",
    type: "modified",
    oldRule: "[Căn cứ: TT 111/2013] Chi trả thu nhập từ 2.000.000 đồng/lần trở lên bắt buộc phải khấu trừ 10% thuế TNCN trừ khi có cam kết Mẫu 08/CK-TNCN.",
    newRule: "[Căn cứ: Điều 4 Luật 109/2025] Nâng ngưỡng bắt buộc khấu trừ thuế lên 3.000.000 đồng/lần chi trả; cho phép người lao động có duy nhất một nguồn thu nhập ký cam kết điện tử tích hợp trên cổng VNeID.",
    impactNote: "Kiểu Việt giải quyết chế độ chi trả tiền công thuê khoán hàng ngày cho nhân công đào đất, đổ bê tông địa phương nhanh gọn, hợp lệ."
  },
  {
    topic: "Miễn thuế TNCN cho tiền làm thêm giờ, làm ca đêm công trình (Điều 2)",
    type: "modified",
    oldRule: "[Căn cứ: Luật 04/2007] Phần tiền lương trả cao hơn do làm thêm giờ được miễn thuế.",
    newRule: "[Căn cứ: Điều 2 Luật 109/2025] Khẳng định: Toàn bộ phần chênh lệch tiền lương trả cao hơn do làm thêm giờ, làm ca đêm (hệ số 150%, 200%, 300%) được miễn thuế TNCN 100%; tiền ăn ca đêm không tính vào thu nhập chịu thuế.",
    impactNote: "Khuyến khích công nhân Kiểu Việt hăng hái thi công xuyên đêm '3 ca 4 kíp' đẩy nhanh tiến độ dự án mà vẫn tối ưu hóa quyền lợi tài chính."
  },
  {
    topic: "Tự động xác thực người phụ thuộc qua Cơ sở dữ liệu quốc gia về dân cư (Điều 5)",
    type: "added",
    oldRule: "[Căn cứ: TT 111/2013] Nộp hồ sơ giấy chứng minh người phụ thuộc (giấy khai sinh, xác nhận của UBND xã).",
    newRule: "[Căn cứ: Điều 5 Luật 109/2025] Bãi bỏ toàn bộ hồ sơ giấy chứng minh người phụ thuộc; hệ thống thuế tự động xác thực mối quan hệ nhân thân (con cái, bố mẹ già) qua số định danh cá nhân CCCD gắn chip trên VNeID.",
    impactNote: "Phòng Nhân sự Kiểu Việt đăng ký người phụ thuộc cho cán bộ nhân viên chỉ mất 30 giây qua cổng dịch vụ công trực tuyến."
  },
  {
    topic: "Khấu trừ chi phí đóng bảo hiểm hưu trí tự nguyện và bảo hiểm y tế bổ sung (Điều 6)",
    type: "modified",
    oldRule: "[Căn cứ: TT 111/2013] Mức đóng bảo hiểm hưu trí tự nguyện được trừ tối đa 1.000.000 đồng/tháng.",
    newRule: "[Căn cứ: Điều 6 Luật 109/2025] Nâng mức khấu trừ vào thu nhập chịu thuế tối đa lên 3.000.000 đồng/tháng (36 triệu/năm) cho các khoản bảo hiểm hưu trí tự nguyện doanh nghiệp mua cho người lao động.",
    impactNote: "Kiểu Việt mua các gói bảo hiểm hưu trí tích lũy cho đội ngũ quản lý cấp cao vừa giữ chân nhân tài vừa tối ưu thuế cho người lao động."
  },
  {
    topic: "Quy định về ủy quyền quyết toán thuế TNCN điện tử (Điều 7)",
    type: "modified",
    oldRule: "[Căn cứ: TT 111/2013] Người lao động phải ký bản cam kết ủy quyền quyết toán Mẫu 08 bằng giấy.",
    newRule: "[Căn cứ: Điều 7 Luật 109/2025] Cho phép người lao động thực hiện ủy quyền quyết toán thuế TNCN cho doanh nghiệp trực tiếp qua ứng dụng eTax Mobile hoặc xác thực trên phần mềm HRM nội bộ.",
    impactNote: "100% cán bộ nhân viên Kiểu Việt ủy quyền quyết toán thuế online, không còn phải thu thập hàng trăm tờ giấy ký tay cuối năm."
  },
  {
    topic: "Kéo dài thời hạn nộp hồ sơ quyết toán thuế TNCN cho cá nhân đến 30/04 (Điều 8)",
    type: "modified",
    oldRule: "[Căn cứ: Luật cũ] Hạn cuối nộp hồ sơ là 31/03.",
    newRule: "[Căn cứ: Điều 8 Luật 109/2025] Khẳng định thời hạn nộp hồ sơ quyết toán thuế TNCN trực tiếp của cá nhân là ngày 30/04 hàng năm; không bị xử phạt chậm nộp nếu có số thuế nộp thừa đề nghị hoàn.",
    impactNote: "Bảo đảm người lao động Kiểu Việt có đủ thời gian chuẩn bị chứng từ khấu trừ thuế nếu có thu nhập vãng lai ở nhiều nơi."
  },
  {
    topic: "Chi phí tiền nhà ở tại công trường do doanh nghiệp chi trả (Điều 2)",
    type: "modified",
    oldRule: "[Căn cứ: TT 111/2013] Tiền nhà ở tính vào thu nhập chịu thuế tối đa không quá 15% tổng thu nhập chịu thuế.",
    newRule: "[Căn cứ: Điều 2 Luật 109/2025] Khoản tiền thuê nhà, xây dựng lán trại tại hiện trường công trình xây dựng cho người lao động di chuyển theo công trình được miễn tính vào thu nhập chịu thuế TNCN.",
    impactNote: "Kiểu Việt đầu tư xây dựng khu nhà container điều hòa khang trang cho cán bộ kỹ sư tại công trường mà không làm tăng tiền thuế TNCN của anh em."
  },
  {
    topic: "Quy định về hoàn thuế TNCN tự động vào tài khoản ngân hàng (Điều 9)",
    type: "added",
    oldRule: "[Căn cứ: Luật cũ] Thủ tục hoàn thuế TNCN kéo dài hàng tháng.",
    newRule: "[Căn cứ: Điều 9 Luật 109/2025] Cơ quan thuế thực hiện hoàn thuế TNCN nộp thừa tự động vào tài khoản ngân hàng chính chủ của người nộp thuế trong vòng 03 ngày làm việc kể từ ngày nhận được hồ sơ quyết toán hợp lệ.",
    impactNote: "Cán bộ công nhân viên Kiểu Việt nhận tiền hoàn thuế nhanh chóng vào tài khoản ATM cá nhân."
  },
  {
    topic: "Hiệu lực thi hành Luật Thuế thu nhập cá nhân số 109/2025/QH15",
    type: "added",
    oldRule: "[Căn cứ: Luật 04/2007, NQ 954/2020] Các quy định cũ.",
    newRule: "[Căn cứ: Điều 10 Luật 109/2025] Luật có hiệu lực thi hành từ ngày 01/01/2026; mức giảm trừ gia cảnh mới 15.5 triệu/tháng áp dụng ngay từ kỳ tính thuế tháng 01/2026.",
    impactNote: "Phòng Nhân sự và Kế toán Kiểu Việt đã sẵn sàng biểu tính thuế mới, nâng cao đời sống và tinh thần làm việc của toàn thể người lao động."
  }
];

// Write updated group 3 back to file
const outputCode = `import { DecreeDiffData } from '../diff-types';\n\nexport const group3CorporatePersonalTax: Record<string, DecreeDiffData> = ` + JSON.stringify(g3, null, 2) + `;\n`;
fs.writeFileSync(g3Path, outputCode, 'utf8');
console.log('Group 3 updated with deep 15 points for Luật 67 and 12 for Luật 109!');
