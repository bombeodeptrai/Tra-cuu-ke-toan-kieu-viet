import { DecreeDiffData } from '../diff-types';

export const group3CorporatePersonalTax: Record<string, DecreeDiffData> = {
  "luat-67-2025-tndn": {
    "decreeId": "luat-67-2025-tndn",
    "title": "Luật Thuế TNDN số 67/2025/QH15",
    "category": "Luật Thuế Thu nhập doanh nghiệp mới",
    "compareWith": "Luật Thuế TNDN số 14/2008/QH12",
    "summary": "Luật Thuế TNDN 67/2025/QH15 cải cách căn bản chính sách thuế: Nội luật hóa Thuế tối thiểu toàn cầu (GMT 15%), mở rộng chi phí khấu trừ cho chuyển đổi số và R&D, cơ chế thuế suất ưu đãi phân bậc cho DNNVV.",
    "items": [
      {
        "topic": "Áp dụng cơ chế Thuế tối thiểu toàn cầu (Pillar 2) tỷ lệ 15% (Điều 7)",
        "type": "added",
        "oldRule": "[Căn cứ: Luật Thuế TNDN 2008] Doanh nghiệp hưởng thuế suất ưu đãi đặc biệt 5%, 10% trong thời gian 15-30 năm và miễn thuế 4 năm, giảm 50% trong 9 năm tiếp theo.",
        "newRule": "[Căn cứ: Điều 7 Luật 67/2025] Bổ sung quy định Thuế thu nhập doanh nghiệp bổ sung tối thiểu nội địa đạt chuẩn (QDMTT) với thuế suất tối thiểu 15% áp dụng cho các tập đoàn đa quốc gia có doanh thu hợp nhất từ 750 triệu EUR trở lên.",
        "impactNote": "Kiểu Việt đánh giá vị thế khi liên danh tổng thầu với các tập đoàn FDI lớn (như Hyundai E&C, Lotte E&C), bảo đảm cơ chế tính giá thầu không bị ảnh hưởng bởi nghĩa vụ bù thuế 15%."
      },
      {
        "topic": "Siết chặt điều kiện thanh toán không dùng tiền mặt từ 5 triệu đồng (Điều 9 Khoản 1 Điểm b)",
        "type": "modified",
        "oldRule": "[Căn cứ: Khoản 1 Điều 9 Luật 14/2008 & TT 96/2015] Hóa đơn mua hàng hóa, dịch vụ từng lần có giá trị từ 20.000.000 đồng trở lên (đã bao gồm thuế GTGT) bắt buộc phải có chứng từ thanh toán không dùng tiền mặt.",
        "newRule": "[Căn cứ: Điều 9 Khoản 1 Điểm b Luật 67/2025] Hạ ngưỡng thanh toán bắt buộc không dùng tiền mặt xuống còn 5.000.000 đồng (đã gồm VAT) đối với mọi khoản chi phí mua hàng hóa, dịch vụ; thanh toán tiền mặt từ 5 triệu trở lên bị loại 100% chi phí được trừ.",
        "impactNote": "Kế toán Kiểu Việt chỉ đạo các Đội trưởng công trường: Mọi khoản mua cát, đá dăm, vật tư phụ, sửa chữa máy móc từ 5 triệu đồng trở lên bắt buộc phải chuyển khoản qua tài khoản ngân hàng của Công ty Kiểu Việt."
      },
      {
        "topic": "Khống chế trần chi phí quảng cáo, tiếp khách, khánh thành công trình (Điều 9)",
        "type": "modified",
        "oldRule": "[Căn cứ: Luật 14/2008 & Luật 71/2014] Đã bãi bỏ mức khống chế 15% chi phí quảng cáo, tiếp tân, khánh thành từ năm 2015.",
        "newRule": "[Căn cứ: Điều 9 Luật 67/2025] Tiếp tục cho phép trừ 100% chi phí tiếp khách, hội nghị khách hàng, lễ khởi công, thông xe công trình thực tế phát sinh liên quan đến hoạt động SXKD có đủ hóa đơn hợp pháp và chứng từ thanh toán qua ngân hàng.",
        "impactNote": "Kiểu Việt lập đầy đủ Kế hoạch tổ chức Lễ thông xe gói thầu cao tốc và hóa đơn thuê âm thanh, nhà bạt có thanh toán ủy nhiệm chi để bảo vệ 100% chi phí thuế."
      },
      {
        "topic": "Ưu đãi thuế TNDN cho dự án đầu tư xây dựng hạ tầng giao thông và mỏ vật liệu xanh (Điều 13)",
        "type": "added",
        "oldRule": "[Căn cứ: Luật 14/2008] Ưu đãi thuế chỉ tập trung vào công nghệ cao, phần mềm và địa bàn kinh tế xã hội đặc biệt khó khăn.",
        "newRule": "[Căn cứ: Điều 13 Luật 67/2025] Bổ sung ưu đãi thuế suất 10% trong 15 năm, miễn thuế 4 năm và giảm 50% trong 9 năm tiếp theo đối với dự án đầu tư công trình hạ tầng giao thông trọng điểm quốc gia và dự án chế biến khoáng sản cát nghiền nhân tạo thay thế cát tự nhiên.",
        "impactNote": "Dự án đầu tư dây chuyền sản xuất cát nghiền nhân tạo từ đá mỏ của Kiểu Việt tại Gia Lai được hưởng ưu đãi thuế TNDN 10%, tiết kiệm hàng chục tỷ đồng tiền thuế."
      },
      {
        "topic": "Bù trừ lỗ giữa chuyển nhượng bất động sản và hoạt động sản xuất kinh doanh xây lắp (Điều 7)",
        "type": "modified",
        "oldRule": "[Căn cứ: Luật 14/2008 & Luật 71/2014] Lỗ từ chuyển nhượng bất động sản, chuyển nhượng dự án chỉ được bù trừ với lãi của chuyển nhượng BĐS, không được bù trừ với lãi của hoạt động sản xuất kinh doanh thông thường.",
        "newRule": "[Căn cứ: Điều 7 Luật 67/2025] Cho phép bù trừ hai chiều: Doanh nghiệp được bù trừ số lỗ từ hoạt động chuyển nhượng dự án, chuyển nhượng quyền khai thác khoáng sản với số lãi từ hoạt động thi công xây lắp và ngược lại.",
        "impactNote": "Kiểu Việt tận dụng khoản lỗ chi phí đầu tư ban đầu của mỏ khoáng sản mới để bù trừ giảm trực tiếp số thuế TNDN phải nộp từ doanh thu xây lắp cao tốc."
      },
      {
        "topic": "Chi phí tài trợ giáo dục, y tế, xây dựng nhà tình nghĩa cho đồng bào nghèo (Điều 9)",
        "type": "modified",
        "oldRule": "[Căn cứ: Luật 14/2008] Chỉ cho phép trừ chi phí tài trợ giáo dục, y tế theo danh mục hẹp.",
        "newRule": "[Căn cứ: Điều 9 Luật 67/2025] Mở rộng chi phí tài trợ hợp lý: Tài trợ làm đường giao thông nông thôn, cầu dân sinh, nhà đại đoàn kết tại các địa bàn khó khăn được tính 100% vào chi phí được trừ khi có biên bản giao nhận tài trợ theo mẫu của Bộ Tài chính.",
        "impactNote": "Các hoạt động từ thiện làm đường nông thôn cho bà con vùng sâu tỉnh Gia Lai của Kiểu Việt được tính hợp pháp vào chi phí giảm thuế TNDN."
      },
      {
        "topic": "Quy định trích lập Quỹ Phát triển Khoa học & Công nghệ tối đa 10% thu nhập tính thuế (Điều 17)",
        "type": "modified",
        "oldRule": "[Căn cứ: Luật 14/2008] Trích tối đa 10% thu nhập tính thuế nhưng thủ tục giải ngân quỹ rất phức tạp.",
        "newRule": "[Căn cứ: Điều 17 Luật 67/2025] Cho phép Kiểu Việt trích lập tối đa 10% thu nhập chịu thuế TNDN hàng năm vào Quỹ KH&CN; quỹ được dùng để mua sắm công nghệ đầm nén thông minh, hệ thống định vị vệ tinh máy ủi và phần mềm mô phỏng BIM.",
        "impactNote": "Kiểu Việt giữ lại tới 10% lợi nhuận trước thuế tái đầu tư đổi mới công nghệ thi công mà không phải nộp thuế TNDN ngay."
      },
      {
        "topic": "Thời gian chuyển lỗ tối đa liên tục 05 năm (Điều 7)",
        "type": "modified",
        "oldRule": "[Căn cứ: Luật 14/2008] Chuyển lỗ liên tục không quá 5 năm kể từ năm tiếp sau năm phát sinh lỗ.",
        "newRule": "[Căn cứ: Điều 7 Luật 67/2025] Giữ nguyên thời hạn chuyển lỗ tối đa 05 năm liên tục; quy định rõ phương pháp chuyển lỗ toàn bộ và liên tục vào thu nhập chịu thuế của các năm sau theo từng dự án độc lập.",
        "impactNote": "Kiểu Việt phân bổ số lỗ của các năm mùa mưa kéo dài sang các năm khô ráo thi công thần tốc để tối ưu hóa nghĩa vụ thuế."
      },
      {
        "topic": "Chi phí lãi vay đối với vốn điều lệ còn thiếu (Điều 9)",
        "type": "modified",
        "oldRule": "[Căn cứ: TT 96/2015] Không được trừ chi phí lãi vay tương ứng với phần vốn điều lệ đã đăng ký còn thiếu.",
        "newRule": "[Căn cứ: Điều 9 Luật 67/2025] Khẳng định nghiêm cấm tính vào chi phí được trừ đối với phần chi phí trả lãi tiền vay tương ứng với phần vốn điều lệ đã đăng ký còn thiếu theo tiến độ góp vốn ghi trong Điều lệ công ty.",
        "impactNote": "Các cổ đông Kiểu Việt luôn hoàn thành góp đủ 100% vốn điều lệ đã đăng ký đúng hạn, bảo đảm toàn bộ lãi vay ngân hàng phục vụ công trình được trừ thuế."
      },
      {
        "topic": "Thuế suất thuế TNDN đối với hoạt động khai thác khoáng sản vật liệu xây dựng (Điều 10)",
        "type": "modified",
        "oldRule": "[Căn cứ: Luật 14/2008] Thuế suất khai thác khoáng sản áp dụng từ 32% đến 50%.",
        "newRule": "[Căn cứ: Điều 10 Luật 67/2025] Thuế suất thuế TNDN đối với khai thác dầu khí từ 25% - 50%; khai thác khoáng sản vật liệu xây dựng thông thường (đá, cát, đất đắp) của các nhà thầu hạ tầng áp dụng thuế suất phổ thông 20%.",
        "impactNote": "Xác nhận rõ ràng Kiểu Việt khai thác mỏ đất phục vụ cao tốc chỉ chịu thuế suất TNDN 20%, không bị áp mức thuế suất khoáng sản quý hiếm 32-50%."
      },
      {
        "topic": "Chi phí trang phục cho người lao động bằng tiền và hiện vật (Điều 9)",
        "type": "modified",
        "oldRule": "[Căn cứ: TT 96/2015] Chi tiền trang phục khống chế không quá 5.000.000 đồng/người/năm; chi bằng hiện vật không khống chế.",
        "newRule": "[Căn cứ: Điều 9 Luật 67/2025] Nâng mức chi trang phục bằng tiền mặt lên tối đa 7.000.000 đồng/người/năm; chi mua sắm bảo hộ lao động hiện trường (áo phản quang, mũ bảo hộ, giày mũi sắt) bằng hiện vật được trừ 100% theo thực tế.",
        "impactNote": "Kiểu Việt trang cấp đầy đủ bảo hộ lao động đạt chuẩn cho hàng trăm công nhân trên tuyến cao tốc và hạch toán trọn vẹn vào chi phí thuế."
      },
      {
        "topic": "Thuế TNDN từ chuyển nhượng quyền khai thác khoáng sản và quyền thuê đất (Điều 14)",
        "type": "modified",
        "oldRule": "[Căn cứ: Luật 14/2008] Kê khai chung trong tờ khai quyết toán năm.",
        "newRule": "[Căn cứ: Điều 14 Luật 67/2025] Bắt buộc kê khai và nộp thuế TNDN riêng theo từng lần phát sinh chuyển nhượng quyền thăm dò, khai thác mỏ khoáng sản với thuế suất 20% trên thu nhập chịu thuế.",
        "impactNote": "Kiểu Việt hạch toán riêng biệt khi chuyển nhượng cổ phần hoặc hợp tác chuyển giao mỏ vật liệu, bảo đảm tính minh bạch nghĩa vụ thuế."
      },
      {
        "topic": "Điều kiện xác định chi phí khấu hao TSCĐ có chứng từ thanh toán ngân hàng (Điều 9)",
        "type": "added",
        "oldRule": "[Căn cứ: Luật 14/2008] Khấu hao tính theo sổ sách TSCĐ.",
        "newRule": "[Căn cứ: Điều 9 Luật 67/2025] Máy móc thiết bị mua sắm có giá trị từ 5 triệu đồng trở lên bắt buộc phải có chứng từ thanh toán không dùng tiền mặt mới đủ điều kiện trích khấu hao tính vào chi phí được trừ khi xác định thuế TNDN.",
        "impactNote": "Kiểu Việt chuyển khoản 100% tiền mua sắm linh kiện máy đào, đầu kéo, tuyệt đối không trả tiền mặt để bảo vệ chi phí khấu hao."
      },
      {
        "topic": "Quy định về thuế TNDN đối với doanh nghiệp xây dựng có cơ sở phụ thuộc ngoại tỉnh (Điều 12)",
        "type": "modified",
        "oldRule": "[Căn cứ: Luật 14/2008] Nộp thuế tập trung tại trụ sở chính.",
        "newRule": "[Căn cứ: Điều 12 Luật 67/2025] Doanh nghiệp có các chi nhánh, xí nghiệp thi công hoặc mỏ khoáng sản phụ thuộc tại các tỉnh khác bắt buộc phải phân bổ số thuế TNDN tạm nộp và quyết toán cho từng địa phương theo tỷ lệ luật định.",
        "impactNote": "Kiểu Việt phân bổ chuẩn xác tiền thuế TNDN cho ngân sách các tỉnh Tây Nguyên nơi công ty đóng quân thi công dự án."
      },
      {
        "topic": "Hiệu lực thi hành Luật Thuế thu nhập doanh nghiệp số 67/2025/QH15",
        "type": "added",
        "oldRule": "[Căn cứ: Luật 14/2008] Luật Thuế TNDN cũ.",
        "newRule": "[Căn cứ: Điều 20 Luật 67/2025] Luật có hiệu lực thi hành từ ngày 01/01/2026; các quy định về chuẩn hóa chi phí không dùng tiền mặt 5 triệu áp dụng từ kỳ tính thuế năm 2026.",
        "impactNote": "Kiểu Việt chuẩn bị toàn diện quy chế tài chính đón đầu Luật Thuế TNDN mới, bảo đảm an toàn tối đa cho ngân sách doanh nghiệp."
      }
    ]
  },
  "luat-thue-tndn": {
    "decreeId": "luat-thue-tndn",
    "title": "Luật Thuế TNDN số 14/2008/QH12",
    "category": "Luật Thuế Thu nhập doanh nghiệp",
    "compareWith": "Luật Thuế TNDN số 09/2003/QH11",
    "summary": "Cột mốc cải cách thuế doanh nghiệp lớn nhất lịch sử: Hạ thuế suất phổ thông từ 28% xuống 25% (sau đó về 20%), bãi bỏ quy định khống chế chi phí quảng cáo 10-15% và mở rộng quyền tự quyết chi phí doanh nghiệp.",
    "items": [
      {
        "topic": "Hạ mức thuế suất thuế Thu nhập doanh nghiệp phổ thông từ 28% xuống 20% (Điều 10)",
        "type": "modified",
        "oldRule": "[Căn cứ: Luật 09/2003] Thuế suất thuế TNDN phổ thông ở mức rất cao là 28%.",
        "newRule": "[Căn cứ: Điều 10 Luật 14/2008 & Luật 32/2013] Hạ thuế suất thuế TNDN phổ thông từ 28% xuống 25% (từ 2009) và tiếp tục hạ xuống 20% (từ 01/01/2016 đến nay).",
        "impactNote": "Kiểu Việt tiết kiệm 8% lợi nhuận trước thuế mỗi năm so với thời kỳ áp dụng thuế 28%, giữ lại hàng chục tỷ đồng để tái đầu tư trang thiết bị xe máy."
      },
      {
        "topic": "Bãi bỏ hoàn toàn quy định khống chế trần chi phí quảng cáo, tiếp thị 15% (Điều 9)",
        "type": "removed",
        "oldRule": "[Căn cứ: Luật 09/2003 & Luật 14/2008] Khống chế chi phí quảng cáo, tiếp thị, khuyến mại, tiếp khách tối đa không quá 10% (sau đó là 15%) tổng số chi phí được trừ.",
        "newRule": "[Căn cứ: Luật số 71/2014/QH13 sửa đổi Điều 9 Luật 14/2008] Bãi bỏ hoàn toàn mức khống chế trần 15% chi phí quảng cáo, tiếp tân, khánh tiết. Mọi chi phí tiếp khách, hội nghị khách hàng có hóa đơn, chứng từ hợp pháp đều được tính vào chi phí được trừ.",
        "impactNote": "Kế toán Kiểu Việt được tính trọn vẹn chi phí tiếp khách, tổ chức lễ khởi công, khánh thành công trình vào chi phí hợp lý mà không lo bị vượt trần."
      },
      {
        "topic": "Quy định điều kiện thanh toán không dùng tiền mặt đối với hóa đơn từ 20 triệu đồng (Điều 9)",
        "type": "added",
        "oldRule": "[Căn cứ: Luật 09/2003] Cho phép thanh toán tiền mặt đối với mọi giá trị hóa đơn nếu có Phiếu chi có đầy đủ chữ ký.",
        "newRule": "[Căn cứ: Khoản 1 Điều 9 Luật 14/2008 & Luật 32/2013] Đối với hóa đơn mua hàng hóa, dịch vụ từng lần có giá trị từ 20 triệu đồng trở lên (đã bao gồm thuế GTGT) bắt buộc phải có chứng từ thanh toán không dùng tiền mặt (Ủy nhiệm chi qua ngân hàng).",
        "impactNote": "Cảnh báo sống còn: 100% hóa đơn mua xi măng, sắt thép, xăng dầu trên 20 triệu của Kiểu Việt phải chuyển khoản từ tài khoản công ty, tuyệt đối cấm chi tiền mặt."
      },
      {
        "topic": "Quy định trích lập Quỹ phát triển khoa học và công nghệ tối đa 10% thu nhập tính thuế (Điều 17)",
        "type": "added",
        "oldRule": "[Căn cứ: Luật 09/2003] Chưa có cơ chế cho phép doanh nghiệp trích trước lợi nhuận trước thuế để lập quỹ nghiên cứu khoa học.",
        "newRule": "[Căn cứ: Điều 17 Luật 14/2008] Doanh nghiệp được trích tối đa 10% thu nhập tính thuế hàng năm để lập Quỹ phát triển khoa học và công nghệ của doanh nghiệp, khoản trích này được tính vào chi phí được trừ khi tính thuế TNDN.",
        "impactNote": "Kiểu Việt trích lập quỹ để nghiên cứu công nghệ bê tông đầm lăn và xử lý phụ gia đá mỏ nâng cao chất lượng nền đường cao tốc."
      },
      {
        "topic": "Nguyên tắc xác định chi phí khấu hao tài sản cố định hợp lý (Điều 9)",
        "type": "modified",
        "oldRule": "[Căn cứ: Luật 09/2003] Khấu hao theo quy định nội bộ của doanh nghiệp.",
        "newRule": "[Căn cứ: Điều 9 Luật 14/2008] Tài sản cố định phải sử dụng phục vụ cho hoạt động SXKD, có hóa đơn chứng từ hợp pháp và trích khấu hao theo đúng khung quy định của Bộ Tài chính mới được tính vào chi phí được trừ.",
        "impactNote": "Kiểu Việt kiểm soát chặt chẽ hồ sơ trích khấu hao dàn xe ben Howo và trạm nghiền đá theo Thông tư 45/2013 của Bộ Tài chính."
      },
      {
        "topic": "Thời hạn chuyển lỗ liên tục tối đa không quá 05 năm (Điều 7)",
        "type": "modified",
        "oldRule": "[Căn cứ: Luật 09/2003] Thời gian chuyển lỗ tối đa 3-5 năm tùy từng ngành nghề.",
        "newRule": "[Căn cứ: Điều 7 Luật 14/2008] Quy định thống nhất: Doanh nghiệp bị lỗ được chuyển lỗ sang các năm sau; số lỗ này được trừ vào thu nhập tính thuế; thời gian chuyển lỗ không quá 05 năm kể từ năm tiếp sau năm phát sinh lỗ.",
        "impactNote": "Kiểu Việt chủ động lập kế hoạch chuyển số lỗ năm đầu tư mua sắm máy móc sang các năm doanh thu nghiệm thu công trình đạt đỉnh."
      },
      {
        "topic": "Chi phí tiền lương, tiền công và các khoản phụ cấp trả cho người lao động (Điều 9)",
        "type": "modified",
        "oldRule": "[Căn cứ: Luật cũ] Quy định khống chế mức lương tối đa theo đơn giá tiền lương nhà nước.",
        "newRule": "[Căn cứ: Điều 9 Luật 14/2008 & Luật 71/2014] Doanh nghiệp được tự quyết toán chi phí tiền lương, tiền thưởng theo Hợp đồng lao động, Thỏa ước LĐTT và Quy chế tài chính của công ty, miễn là có chi trả thực tế trước thời hạn nộp hồ sơ quyết toán thuế năm.",
        "impactNote": "Kiểu Việt ban hành Quy chế thưởng tiến độ vượt kế hoạch cho các Đội thi công công trình và hạch toán 100% vào chi phí thuế TNDN hợp lệ."
      },
      {
        "topic": "Thuế suất ưu đãi 10% trong 15 năm cho dự án hạ tầng giao thông và địa bàn khó khăn (Điều 13)",
        "type": "added",
        "oldRule": "[Căn cứ: Luật 09/2003] Danh mục ưu đãi hẹp và thời gian ưu đãi ngắn.",
        "newRule": "[Căn cứ: Điều 13 Luật 14/2008] Áp dụng thuế suất 10% trong 15 năm, miễn thuế 4 năm và giảm 50% trong 9 năm tiếp theo đối với thu nhập của doanh nghiệp từ thực hiện dự án đầu tư mới trong lĩnh vực phát triển hạ tầng kinh tế kỹ thuật tại địa bàn có điều kiện kinh tế - xã hội đặc biệt khó khăn.",
        "impactNote": "Kiểu Việt tận dụng chính sách ưu đãi khi thành lập Ban điều hành dự án và chi nhánh thi công hạ tầng tại các huyện miền núi Tây Nguyên."
      },
      {
        "topic": "Tách riêng thu nhập từ chuyển nhượng bất động sản và chuyển nhượng dự án (Điều 14)",
        "type": "modified",
        "oldRule": "[Căn cứ: Luật cũ] Kê khai gộp chung vào thu nhập kinh doanh thông thường.",
        "newRule": "[Căn cứ: Điều 14 Luật 14/2008] Doanh nghiệp có thu nhập từ chuyển nhượng bất động sản, chuyển nhượng dự án đầu tư phải hạch toán riêng để kê khai nộp thuế TNDN theo mức thuế suất 20%, không được hưởng ưu đãi thuế TNDN của ngành nghề chính.",
        "impactNote": "Kế toán Kiểu Việt mở sổ theo dõi riêng thu nhập và chi phí của hoạt động chuyển nhượng quyền thuê mặt bằng kho bãi để tránh bị phạt phân bổ sai."
      },
      {
        "topic": "Khống chế trần chi phí lãi vay tương ứng với phần vốn góp còn thiếu (Điều 9)",
        "type": "added",
        "oldRule": "[Căn cứ: Luật cũ] Cho phép tính lãi vay vào chi phí kể cả khi chưa góp đủ vốn.",
        "newRule": "[Căn cứ: Điều 9 Luật 14/2008] Không được tính vào chi phí được trừ phần chi phí trả lãi tiền vay tương ứng với phần vốn điều lệ đã đăng ký còn thiếu theo tiến độ ghi trong điều lệ doanh nghiệp.",
        "impactNote": "HĐQT Kiểu Việt luôn đôn đốc cổ đông hoàn tất vốn góp trước khi ký các hợp đồng vay vốn ngân hàng thương mại tài trợ mua xe máy chuyên dùng."
      },
      {
        "topic": "Các khoản tài trợ từ thiện được tính vào chi phí hợp lý (Điều 9)",
        "type": "added",
        "oldRule": "[Căn cứ: Luật cũ] Mọi khoản tài trợ từ thiện đều bị loại khỏi chi phí tính thuế.",
        "newRule": "[Căn cứ: Điều 9 Luật 14/2008] Cho phép tính vào chi phí được trừ các khoản tài trợ cho giáo dục, y tế, khắc phục hậu quả thiên tai và xây nhà tình nghĩa cho người nghèo theo đúng quy định của pháp luật.",
        "impactNote": "Kiểu Việt tài trợ sửa chữa trường học và làm cầu dân sinh tại địa phương nơi thi công, có xác nhận của chính quyền xã để được giảm trừ thuế."
      },
      {
        "topic": "Nghĩa vụ tạm nộp thuế TNDN hàng quý và quyết toán năm (Điều 12)",
        "type": "modified",
        "oldRule": "[Căn cứ: Luật cũ] Kê khai tờ khai tạm tính hàng quý theo Mẫu 01A/TNDN.",
        "newRule": "[Căn cứ: Điều 12 Luật 14/2008 & Luật 71/2014] Bãi bỏ tờ khai thuế TNDN tạm tính hàng quý; doanh nghiệp tự tạm nộp số tiền thuế TNDN của quý chậm nhất vào ngày 30 của tháng đầu quý sau và quyết toán năm trước ngày 31/03 năm sau.",
        "impactNote": "Giảm áp lực kê khai hàng quý cho Kế toán Kiểu Việt, chỉ cần tính toán dòng tiền tạm nộp đủ tỷ lệ luật định."
      }
    ]
  },
  "nd-218-2013": {
    "decreeId": "nd-218-2013",
    "title": "Nghị định 218/2013/NĐ-CP",
    "category": "Hướng dẫn Luật Thuế TNDN",
    "compareWith": "Nghị định 124/2008/NĐ-CP",
    "summary": "Nghị định 218/2013/NĐ-CP hướng dẫn chi tiết thi hành Luật Thuế TNDN: Quy định danh mục chi phí không được trừ, nguyên tắc trích khấu hao TSCĐ, thu nhập chịu thuế khác và điều kiện ưu đãi thuế.",
    "items": [
      {
        "topic": "Quy định chi tiết các khoản chi phí được trừ và không được trừ khi tính thuế TNDN (Điều 9)",
        "type": "modified",
        "oldRule": "[Căn cứ: NĐ 124/2008] Quy định khung chi phí chung.",
        "newRule": "[Căn cứ: Điều 9 NĐ 218/2013] Chi tiết 3 điều kiện chi phí được trừ: Phát sinh thực tế liên quan đến SXKD; có đủ hóa đơn, chứng từ hợp pháp; có chứng từ thanh toán không dùng tiền mặt đối với hóa đơn từ 20 triệu đồng trở lên.",
        "impactNote": "Bộ cẩm nang thực thi chi phí cốt lõi của Phòng Kế toán Kiểu Việt khi kiểm soát toàn bộ chứng từ thanh quyết toán từ các công trường."
      },
      {
        "topic": "Thời điểm ghi nhận doanh thu tính thuế TNDN đối với hoạt động xây dựng, lắp đặt (Điều 5)",
        "type": "modified",
        "oldRule": "[Căn cứ: NĐ 124/2008] Doanh thu xác định theo tiến độ nghiệm thu hoặc giá trị hợp đồng.",
        "newRule": "[Căn cứ: Điều 5 Khoản 2 Điểm m NĐ 218/2013] Đối với hoạt động xây dựng, lắp đặt là giá trị công trình, hạng mục công trình hoặc khối lượng công trình xây dựng, lắp đặt được nghiệm thu bàn giao; trường hợp có bao thầu nguyên vật liệu thì doanh thu bao gồm cả giá trị nguyên vật liệu.",
        "impactNote": "Kiểu Việt hạch toán doanh thu tính thuế TNDN trùng khớp tuyệt đối với kỳ nghiệm thu giai đoạn A-B có chữ ký của Chủ đầu tư."
      },
      {
        "topic": "Chi phí khấu hao đối với máy móc thi công đi thuê tài chính và tự mua (Điều 9)",
        "type": "modified",
        "oldRule": "[Căn cứ: NĐ 124/2008] Chỉ quy định khấu hao TSCĐ tự có.",
        "newRule": "[Căn cứ: Điều 9 Khoản 2 Điểm a NĐ 218/2013] Cho phép trích khấu hao đối với TSCĐ đi thuê tài chính; hướng dẫn chi tiết hồ sơ chứng minh quyền sở hữu và trích khấu hao theo tiến độ thực tế thi công công trình.",
        "impactNote": "Kiểu Việt tận dụng kênh thuê tài chính mua sắm xe lu rung, trạm trộn bê tông nhựa nóng và trích khấu hao giảm thuế TNDN hợp pháp."
      },
      {
        "topic": "Quy định mức khống chế chi trả lãi tiền vay sản xuất kinh doanh theo lãi suất cơ bản (Điều 9)",
        "type": "modified",
        "oldRule": "[Căn cứ: NĐ 124/2008] Khống chế lãi vay của đối tượng không phải tổ chức tín dụng không quá 150% lãi suất cơ bản do NHNN công bố.",
        "newRule": "[Căn cứ: Điều 9 Khoản 2 Điểm d NĐ 218/2013] Khẳng định phần chi phí trả lãi tiền vay vốn sản xuất kinh doanh của đối tượng không phải là tổ chức tín dụng vượt quá 150% mức lãi suất cơ bản do Ngân hàng Nhà nước Việt Nam công bố tại thời điểm vay thì không được trừ.",
        "impactNote": "Kiểu Việt quản lý các hợp đồng vay vốn cá nhân hoặc đối tác ngoài ngân hàng luôn tuân thủ dưới trần 150% lãi suất cơ bản."
      },
      {
        "topic": "Quy định trích lập các khoản dự phòng giảm giá hàng tồn kho và nợ phải thu khó đòi (Điều 9)",
        "type": "modified",
        "oldRule": "[Căn cứ: NĐ 124/2008] Doanh nghiệp tự ước tính dự phòng.",
        "newRule": "[Căn cứ: Điều 9 Khoản 2 Điểm c NĐ 218/2013] Khoản trích lập các khoản dự phòng (dự phòng nợ khó đòi, dự phòng bảo hành công trình, dự phòng giảm giá hàng tồn kho) được tính vào chi phí được trừ nếu thực hiện đúng theo hướng dẫn của Bộ Tài chính.",
        "impactNote": "Kiểu Việt trích lập dự phòng bảo hành công trình xây dựng (từ 3% - 5% giá trị nghiệm thu) vào chi phí thuế TNDN hợp lý trong năm."
      },
      {
        "topic": "Chi phí tiền lương không được trừ do không có chứng từ chi trả trước hạn quyết toán (Điều 9)",
        "type": "modified",
        "oldRule": "[Căn cứ: NĐ 124/2008] Nợ lương công nhân kéo dài vẫn được tính chi phí.",
        "newRule": "[Căn cứ: Điều 9 Khoản 2 Điểm b NĐ 218/2013] Tiền lương, tiền công đã hạch toán vào chi phí SXKD trong kỳ nhưng thực tế không chi trả hoặc không có chứng từ thanh toán trước hạn chót nộp hồ sơ quyết toán thuế năm (31/03) sẽ bị loại khỏi chi phí được trừ (trừ trường hợp trích lập quỹ dự phòng tiền lương tối đa 17%).",
        "impactNote": "Kiểu Việt thành lập Quỹ dự phòng tiền lương 17% hợp lệ để bảo vệ chi phí lương thưởng Tết chi trả muộn cho công nhân."
      },
      {
        "topic": "Quy định bù trừ lãi lỗ giữa hoạt động chuyển nhượng dự án và hoạt động SXKD xây lắp (Điều 7)",
        "type": "modified",
        "oldRule": "[Căn cứ: NĐ 124/2008] Lỗ từ chuyển nhượng bất động sản không được bù trừ với lãi hoạt động chính.",
        "newRule": "[Căn cứ: Điều 7 Khoản 2 NĐ 218/2013] Doanh nghiệp trong kỳ tính thuế có các hoạt động chuyển nhượng bất động sản, chuyển nhượng dự án đầu tư bị lỗ thì số lỗ này được bù trừ với lãi của hoạt động sản xuất kinh doanh (bao gồm cả thu nhập khác).",
        "impactNote": "Cơ sở pháp lý vững chắc giúp Kiểu Việt bù trừ linh hoạt kết quả tài chính giữa đầu tư hạ tầng và thi công xây lắp."
      },
      {
        "topic": "Điều kiện xác định chi phí tài trợ xây dựng nhà tình nghĩa, đường dân sinh (Điều 9)",
        "type": "added",
        "oldRule": "[Căn cứ: NĐ cũ] Quy định thủ tục chung chung.",
        "newRule": "[Căn cứ: Điều 9 Khoản 2 Điểm e NĐ 218/2013] Chi tiết hồ sơ tài trợ được tính vào chi phí hợp lý gồm: Biên bản xác nhận tài trợ theo Mẫu số 04 ban hành kèm Nghị định, có chữ ký của người đại diện Kiểu Việt và đại diện UBND cấp xã hoặc đơn vị thụ hưởng tài trợ.",
        "impactNote": "Kế toán Kiểu Việt hoàn thiện đầy đủ mẫu biểu 04 có chữ ký và con dấu đỏ của UBND xã nơi thi công dự án để bảo đảm 100% chi phí từ thiện được trừ thuế."
      },
      {
        "topic": "Chi phí thuê tài sản của cá nhân không có hóa đơn nhưng có hợp đồng và chứng từ (Điều 9)",
        "type": "modified",
        "oldRule": "[Căn cứ: NĐ cũ] Cá nhân phải lên cơ quan thuế mua hóa đơn lẻ.",
        "newRule": "[Căn cứ: Điều 9 NĐ 218/2013] Doanh nghiệp thuê tài sản (máy đào, bãi đổ đất, nhà trọ công nhân) của cá nhân có doanh thu dưới 100 triệu/năm chỉ cần có Hợp đồng thuê, chứng từ thanh toán và bảng kê thu mua Mẫu 01/TNDN là được tính vào chi phí hợp lý.",
        "impactNote": "Giúp Kiểu Việt hạch toán hàng trăm triệu đồng chi phí thuê mặt bằng đổ đất thải và lán trại công nhân từ các hộ dân địa phương thuận tiện."
      },
      {
        "topic": "Phương pháp xác định ưu đãi thuế TNDN theo địa bàn kinh tế xã hội khó khăn (Điều 15)",
        "type": "modified",
        "oldRule": "[Căn cứ: NĐ cũ] Ưu đãi theo danh mục cũ.",
        "newRule": "[Căn cứ: Điều 15 và 16 NĐ 218/2013] Quy định cụ thể danh mục địa bàn ưu đãi thuế TNDN: Doanh nghiệp thực hiện dự án đầu tư mới tại địa bàn khó khăn được áp dụng thuế suất 17% trong 10 năm, địa bàn đặc biệt khó khăn áp dụng thuế suất 10% trong 15 năm.",
        "impactNote": "Kiểu Việt hưởng trọn vẹn ưu đãi thuế TNDN khi trúng thầu thi công các đoạn cao tốc đi qua vùng đồng bào dân tộc thiểu số tại Gia Lai, Đắk Lắk."
      },
      {
        "topic": "Xử lý khoản chi phí không tương ứng với doanh thu ghi nhận trong kỳ (Điều 9)",
        "type": "modified",
        "oldRule": "[Căn cứ: NĐ cũ] Loại chi phí nếu chưa có doanh thu.",
        "newRule": "[Căn cứ: Điều 9 NĐ 218/2013] Chi phí xây dựng dở dang liên quan trực tiếp đến công trình chưa nghiệm thu được treo trên tài khoản chi phí dở dang (TK 154) và được kết chuyển tính vào chi phí được trừ tương ứng tại thời điểm nghiệm thu công trình.",
        "impactNote": "Kiểu Việt quản lý chi phí dở dang theo từng gói thầu, bảo đảm nguyên tắc phù hợp giữa doanh thu và chi phí khi quyết toán thuế."
      },
      {
        "topic": "Hiệu lực thi hành và quy định chuyển tiếp của Nghị định 218/2013/NĐ-CP (Điều 20)",
        "type": "added",
        "oldRule": "[Căn cứ: NĐ 124/2008] Hết hiệu lực thi hành.",
        "newRule": "[Căn cứ: Điều 20 NĐ 218/2013] Nghị định có hiệu lực thi hành từ ngày 15/02/2014 và áp dụng cho kỳ tính thuế TNDN từ năm 2014 trở đi, tạo hành lang pháp lý thông thoáng và ổn định cho cộng đồng doanh nghiệp Việt Nam.",
        "impactNote": "Nghị định nền tảng đồng hành cùng sự phát triển lớn mạnh của Công ty Cổ phần Kiểu Việt trong suốt hơn một thập kỷ qua."
      }
    ]
  },
  "tt-96-2015": {
    "decreeId": "tt-96-2015",
    "title": "Thông tư 96/2015/TT-BTC",
    "category": "Chi phí được trừ thuế TNDN",
    "compareWith": "Thông tư 78/2014/TT-BTC",
    "summary": "Thông tư 96/2015/TT-BTC sửa đổi Thông tư 78: Cởi trói hàng loạt quy định chi phí thuế TNDN: Nâng mức khoán công tác phí, tiền trang phục 5 triệu/năm, tiền ăn ca, chi phí phúc lợi cho người lao động tối đa 01 tháng lương bình quân.",
    "items": [
      {
        "topic": "Bãi bỏ mức khống chế trần chi phí quảng cáo, tiếp khách 15% (Điều 6)",
        "type": "removed",
        "oldRule": "[Căn cứ: TT 78/2014] Tổng số chi quảng cáo, tiếp thị, khuyến mại, tiếp khách bị khống chế tối đa không quá 15% tổng số chi phí được trừ.",
        "newRule": "[Căn cứ: Điều 6 Khoản 2 Điểm 2.21 TT 96/2015] Bãi bỏ hoàn toàn mức khống chế 15%. Toàn bộ chi phí tiếp khách, tổ chức hội nghị, lễ khởi công công trình được trừ 100% nếu có đầy đủ hóa đơn hợp pháp và chứng từ thanh toán không dùng tiền mặt.",
        "impactNote": "Kiểu Việt hạch toán trọn vẹn chi phí tiếp đón các đoàn công tác của Chủ đầu tư, Tư vấn giám sát mà không lo bị vượt trần 15%."
      },
      {
        "topic": "Khấu hao đối với xe ô tô chở người từ 9 chỗ trở xuống trên 1.6 tỷ đồng (Điều 4)",
        "type": "modified",
        "oldRule": "[Căn cứ: TT 78/2014] Xe ô tô trên 1.6 tỷ đồng bị loại toàn bộ phần khấu hao tương ứng nguyên giá vượt 1.6 tỷ.",
        "newRule": "[Căn cứ: Điều 4 Khoản 2 Điểm 2.2 TT 96/2015] Khẳng định phần trích khấu hao tương ứng với nguyên giá vượt trên 1.6 tỷ đồng không được tính vào chi phí được trừ (trừ xe chuyên kinh doanh du lịch, khách sạn).",
        "impactNote": "Kiểu Việt mua xe bán tải Ford Ranger và xe SUV dưới 1.6 tỷ phục vụ kỹ sư công trường để được khấu trừ 100% chi phí thuế."
      },
      {
        "topic": "Chi phí tiền lương của chủ doanh nghiệp tư nhân và công ty TNHH một thành viên (Điều 4)",
        "type": "modified",
        "oldRule": "[Căn cứ: TT 78/2014] Tiền lương của chủ sở hữu công ty TNHH MTV không được tính vào chi phí được trừ.",
        "newRule": "[Căn cứ: Điều 4 Khoản 2 Điểm 2.6 TT 96/2015] Khẳng định tiền lương, tiền công của chủ DNTN, chủ công ty TNHH MTV (do một cá nhân làm chủ) không được tính vào chi phí được trừ khi xác định thuế TNDN.",
        "impactNote": "Công ty Cổ phần Kiểu Việt có nhiều cổ đông sáng lập nên toàn bộ tiền lương của Ban Giám đốc và HĐQT đều được tính vào chi phí hợp lý 100%."
      },
      {
        "topic": "Chi phí tài trợ công trình giao thông nông thôn và y tế giáo dục (Điều 4)",
        "type": "modified",
        "oldRule": "[Căn cứ: TT 78/2014] Chỉ cho phép tài trợ y tế, giáo dục theo hồ sơ xác nhận hạn chế.",
        "newRule": "[Căn cứ: Điều 4 Khoản 2 Điểm 2.22-2.26 TT 96/2015] Bổ sung chi phí tài trợ xây dựng cầu cống, đường giao thông nông thôn, nhà tình nghĩa có Biên bản giao nhận tài trợ theo Mẫu số 04/TNDN được tính 100% vào chi phí được trừ.",
        "impactNote": "Kiểu Việt tài trợ làm đường dân sinh tại các buôn làng Tây Nguyên được hạch toán giảm thuế TNDN hợp pháp."
      },
      {
        "topic": "Chứng từ thanh toán không dùng tiền mặt đối với hóa đơn mua vào từ 20 triệu đồng (Điều 4)",
        "type": "modified",
        "oldRule": "[Căn cứ: TT 78/2014] Thanh toán nhiều hóa đơn mua cùng một ngày từ một nhà cung cấp tổng cộng trên 20 triệu bằng tiền mặt vẫn được chấp nhận.",
        "newRule": "[Căn cứ: Điều 4 Khoản 1 Điểm b TT 96/2015] Quy định siết chặt: Trường hợp mua hàng hóa, dịch vụ từng lần có giá trị từ 20 triệu đồng trở lên hoặc mua nhiều lần trong cùng một ngày của một khách hàng có tổng giá trị từ 20 triệu đồng trở lên bắt buộc phải chuyển khoản qua ngân hàng.",
        "impactNote": "Kế toán Kiểu Việt gom các hóa đơn mua vật tư lẻ trong ngày từ cùng một đại lý để chuyển khoản ngân hàng, tránh bị xuất toán chi phí."
      },
      {
        "topic": "Thời điểm trích khấu hao máy móc thi công chờ việc tạm thời (Điều 4)",
        "type": "modified",
        "oldRule": "[Căn cứ: TT 78/2014] Máy ngừng hoạt động không được tính chi phí khấu hao.",
        "newRule": "[Căn cứ: Điều 4 Khoản 2 Điểm 2.2 TT 96/2015] TSCĐ tạm ngừng do mùa vụ dưới 9 tháng hoặc tạm ngừng sửa chữa dưới 12 tháng vẫn được trích khấu hao tính vào chi phí được trừ thuế TNDN nếu có lưu giữ hồ sơ theo dõi máy móc.",
        "impactNote": "Kiểu Việt lập hồ sơ bảo dưỡng xe máy thi công trong mùa mưa để duy trì quyền trích khấu hao tính vào chi phí thuế."
      },
      {
        "topic": "Chi phí trang phục chi bằng tiền mặt khống chế 5.000.000 đồng/người/năm (Điều 4)",
        "type": "modified",
        "oldRule": "[Căn cứ: TT 78/2014] Mức chi trang phục bằng tiền mặt tối đa 5 triệu đồng/người/năm.",
        "newRule": "[Căn cứ: Điều 4 Khoản 2 Điểm 2.7 TT 96/2015] Giữ nguyên mức 5 triệu đồng/người/năm nếu chi bằng tiền mặt; trường hợp chi bằng hiện vật (mua áo bảo hộ, giày, mũ công trường) thì có hóa đơn hợp pháp được trừ toàn bộ.",
        "impactNote": "Kiểu Việt mua sắm đồng phục bảo hộ lao động bằng hiện vật cho kỹ sư công trường để được trừ thuế 100% không bị giới hạn 5 triệu."
      },
      {
        "topic": "Khoản chi có tính chất phúc lợi chi trực tiếp cho người lao động (Điều 4)",
        "type": "added",
        "oldRule": "[Căn cứ: TT 78/2014] Chỉ cho phép các khoản chi phúc lợi trong quỹ khen thưởng phúc lợi sau thuế.",
        "newRule": "[Căn cứ: Điều 4 Khoản 2 Điểm 2.30 TT 96/2015] Cho phép tính vào chi phí được trừ các khoản chi có tính chất phúc lợi trực tiếp cho người lao động (hiếu hỉ, sinh nhật, nghỉ mát, học phí con công nhân) tối đa không quá 01 tháng lương bình quân thực tế trong năm.",
        "impactNote": "Kiểu Việt hạch toán chi phí nghỉ mát hè và thăm hỏi ốm đau cho cán bộ nhân viên vào chi phí được trừ thuế TNDN lên tới cả tỷ đồng."
      },
      {
        "topic": "Thu nhập từ chuyển nhượng dự án đầu tư và quyền khai thác khoáng sản (Điều 8)",
        "type": "modified",
        "oldRule": "[Căn cứ: TT 78/2014] Phân loại thu nhập khác chịu thuế.",
        "newRule": "[Căn cứ: Điều 8 Khoản 1 TT 96/2015] Thu nhập từ chuyển nhượng dự án đầu tư, chuyển nhượng quyền thăm dò, khai thác khoáng sản phải kê khai nộp thuế riêng với thuế suất 20%, không được hưởng ưu đãi thuế TNDN.",
        "impactNote": "Kiểu Việt kê khai minh bạch các thương vụ chuyển nhượng quyền khai thác mỏ vật liệu theo đúng quy định chuyên ngành."
      },
      {
        "topic": "Điều kiện trích lập chi phí trích trước bảo hành công trình xây dựng (Điều 4)",
        "type": "modified",
        "oldRule": "[Căn cứ: TT 78/2014] Trích trước chi phí bảo hành phải theo tỷ lệ cứng nhắc.",
        "newRule": "[Căn cứ: Điều 4 Khoản 2 Điểm 2.20 TT 96/2015] Chi phí trích trước bảo hành công trình xây dựng được tính vào chi phí được trừ nếu có hợp đồng xây dựng quy định rõ nghĩa vụ bảo hành và có biên bản nghiệm thu bàn giao; hết hạn bảo hành phải hoàn nhập nếu không chi hết.",
        "impactNote": "Kiểu Việt trích trước 3-5% chi phí bảo hành gói thầu vào chi phí công trình và theo dõi đối trừ khi thực hiện nghĩa vụ bảo hành."
      },
      {
        "topic": "Xử lý chi phí lãi vay tương ứng với khoản vay cá nhân không vượt quá 150% lãi suất cơ bản (Điều 4)",
        "type": "modified",
        "oldRule": "[Căn cứ: TT 78/2014] Khống chế trần lãi vay 150% lãi suất cơ bản do NHNN công bố.",
        "newRule": "[Căn cứ: Điều 4 Khoản 2 Điểm 2.17 TT 96/2015] Giữ nguyên mức khống chế 150% lãi suất cơ bản của NHNN khi vay vốn của cá nhân, tổ chức không phải là tổ chức tín dụng; đồng thời vốn điều lệ phải đã góp đủ.",
        "impactNote": "Kiểu Việt vay vốn ngân hàng thương mại để được trừ chi phí lãi vay thực tế theo hợp đồng tín dụng, tránh vay cá nhân bị khống chế lãi suất."
      },
      {
        "topic": "Hiệu lực thi hành Thông tư 96/2015/TT-BTC",
        "type": "added",
        "oldRule": "[Căn cứ: TT 78/2014] Các quy định cũ.",
        "newRule": "[Căn cứ: Điều 14 TT 96/2015] Thông tư có hiệu lực từ ngày 06/08/2015 và áp dụng cho kỳ tính thuế TNDN từ năm 2015 trở đi, tháo gỡ nhiều rào cản chi phí cho doanh nghiệp.",
        "impactNote": "Bộ cẩm nang kế toán thuế Kiểu Việt cập nhật toàn diện TT 96 bảo đảm tối ưu hóa chi phí hợp lý được trừ."
      }
    ]
  },
  "luat-109-2025-tncn": {
    "decreeId": "luat-109-2025-tncn",
    "title": "Luật Thuế TNCN số 109/2025/QH15",
    "category": "Luật Thuế Thu nhập cá nhân mới",
    "compareWith": "Luật Thuế TNCN số 04/2007/QH12",
    "summary": "Luật Thuế TNCN 109/2025/QH15 mang tính đột phá an sinh: Nâng mức giảm trừ gia cảnh lên 15,5 triệu đồng/tháng cho bản thân và 6,2 triệu đồng/tháng cho người phụ thuộc, rút gọn Biểu thuế lũy tiến từng phần từ 7 bậc xuống 5 bậc.",
    "items": [
      {
        "topic": "Nâng mức giảm trừ gia cảnh bản thân lên 15.5 triệu đồng và người phụ thuộc 6.2 triệu đồng (Điều 1)",
        "type": "modified",
        "oldRule": "[Căn cứ: NQ 954/2020] Giảm trừ gia cảnh cho bản thân người nộp thuế là 11.000.000 đồng/tháng (132 triệu/năm); mức giảm trừ cho mỗi người phụ thuộc là 4.400.000 đồng/tháng.",
        "newRule": "[Căn cứ: Điều 1 Luật 109/2025] Nâng mức giảm trừ gia cảnh cho bản thân lên 15.500.000 đồng/tháng (186 triệu/năm); mức giảm trừ cho mỗi người phụ thuộc lên 6.200.000 đồng/tháng (74.4 triệu/năm).",
        "impactNote": "Hơn 90% kỹ sư, công nhân lái máy thi công Kiểu Việt có mức lương 15-20 triệu đồng sẽ không phải nộp thuế TNCN hoặc giảm số thuế phải nộp tới 60%, nâng cao thu nhập thực nhận."
      },
      {
        "topic": "Rút gọn biểu thuế lũy tiến từng phần từ 7 bậc xuống còn 5 bậc (Điều 3)",
        "type": "modified",
        "oldRule": "[Căn cứ: Luật 04/2007] Biểu thuế lũy tiến gồm 7 bậc quá dày: 5%, 10%, 15%, 20%, 25%, 30%, 35% (bậc 1 chỉ đến 5 triệu, bậc 2 từ 5-10 triệu).",
        "newRule": "[Căn cứ: Điều 3 Luật 109/2025] Tinh giản biểu thuế còn 5 bậc: Bậc 1 (đến 10 triệu: 5%), Bậc 2 (10 - 30 triệu: 10%), Bậc 3 (30 - 60 triệu: 20%), Bậc 4 (60 - 100 triệu: 28%), Bậc 5 (trên 100 triệu: 35%).",
        "impactNote": "Kế toán tiền lương Kiểu Việt giảm bớt tính toán phức tạp, bậc thuế giãn cách rộng giúp các Chỉ huy trưởng công trường giữ được thu nhập cao sau thuế."
      },
      {
        "topic": "Miễn thuế TNCN đối với phụ cấp làm việc tại công trường vùng sâu, vùng xa (Điều 2)",
        "type": "added",
        "oldRule": "[Căn cứ: TT 111/2013] Phụ cấp thu hút, phụ cấp khu vực chỉ được miễn thuế theo định mức hạn chế của Nhà nước.",
        "newRule": "[Căn cứ: Điều 2 Luật 109/2025] Miễn thuế TNCN toàn bộ đối với các khoản phụ cấp lưu động, phụ cấp ăn ở dã ngoại tại hiện trường công trình giao thông vùng đặc biệt khó khăn, hải đảo.",
        "impactNote": "Kiểu Việt mạnh dạn chi trả phụ cấp công trường cao (3-5 triệu/tháng) cho cán bộ bám trụ tuyến cao tốc mà người lao động không bị trừ thuế TNCN."
      },
      {
        "topic": "Quy định về thuế TNCN đối với nhân công thuê khoán thời vụ dưới 3 tháng (Điều 4)",
        "type": "modified",
        "oldRule": "[Căn cứ: TT 111/2013] Chi trả thu nhập từ 2.000.000 đồng/lần trở lên bắt buộc phải khấu trừ 10% thuế TNCN trừ khi có cam kết Mẫu 08/CK-TNCN.",
        "newRule": "[Căn cứ: Điều 4 Luật 109/2025] Nâng ngưỡng bắt buộc khấu trừ thuế lên 3.000.000 đồng/lần chi trả; cho phép người lao động có duy nhất một nguồn thu nhập ký cam kết điện tử tích hợp trên cổng VNeID.",
        "impactNote": "Kiểu Việt giải quyết chế độ chi trả tiền công thuê khoán hàng ngày cho nhân công đào đất, đổ bê tông địa phương nhanh gọn, hợp lệ."
      },
      {
        "topic": "Miễn thuế TNCN cho tiền làm thêm giờ, làm ca đêm công trình (Điều 2)",
        "type": "modified",
        "oldRule": "[Căn cứ: Luật 04/2007] Phần tiền lương trả cao hơn do làm thêm giờ được miễn thuế.",
        "newRule": "[Căn cứ: Điều 2 Luật 109/2025] Khẳng định: Toàn bộ phần chênh lệch tiền lương trả cao hơn do làm thêm giờ, làm ca đêm (hệ số 150%, 200%, 300%) được miễn thuế TNCN 100%; tiền ăn ca đêm không tính vào thu nhập chịu thuế.",
        "impactNote": "Khuyến khích công nhân Kiểu Việt hăng hái thi công xuyên đêm '3 ca 4 kíp' đẩy nhanh tiến độ dự án mà vẫn tối ưu hóa quyền lợi tài chính."
      },
      {
        "topic": "Tự động xác thực người phụ thuộc qua Cơ sở dữ liệu quốc gia về dân cư (Điều 5)",
        "type": "added",
        "oldRule": "[Căn cứ: TT 111/2013] Nộp hồ sơ giấy chứng minh người phụ thuộc (giấy khai sinh, xác nhận của UBND xã).",
        "newRule": "[Căn cứ: Điều 5 Luật 109/2025] Bãi bỏ toàn bộ hồ sơ giấy chứng minh người phụ thuộc; hệ thống thuế tự động xác thực mối quan hệ nhân thân (con cái, bố mẹ già) qua số định danh cá nhân CCCD gắn chip trên VNeID.",
        "impactNote": "Phòng Nhân sự Kiểu Việt đăng ký người phụ thuộc cho cán bộ nhân viên chỉ mất 30 giây qua cổng dịch vụ công trực tuyến."
      },
      {
        "topic": "Khấu trừ chi phí đóng bảo hiểm hưu trí tự nguyện và bảo hiểm y tế bổ sung (Điều 6)",
        "type": "modified",
        "oldRule": "[Căn cứ: TT 111/2013] Mức đóng bảo hiểm hưu trí tự nguyện được trừ tối đa 1.000.000 đồng/tháng.",
        "newRule": "[Căn cứ: Điều 6 Luật 109/2025] Nâng mức khấu trừ vào thu nhập chịu thuế tối đa lên 3.000.000 đồng/tháng (36 triệu/năm) cho các khoản bảo hiểm hưu trí tự nguyện doanh nghiệp mua cho người lao động.",
        "impactNote": "Kiểu Việt mua các gói bảo hiểm hưu trí tích lũy cho đội ngũ quản lý cấp cao vừa giữ chân nhân tài vừa tối ưu thuế cho người lao động."
      },
      {
        "topic": "Quy định về ủy quyền quyết toán thuế TNCN điện tử (Điều 7)",
        "type": "modified",
        "oldRule": "[Căn cứ: TT 111/2013] Người lao động phải ký bản cam kết ủy quyền quyết toán Mẫu 08 bằng giấy.",
        "newRule": "[Căn cứ: Điều 7 Luật 109/2025] Cho phép người lao động thực hiện ủy quyền quyết toán thuế TNCN cho doanh nghiệp trực tiếp qua ứng dụng eTax Mobile hoặc xác thực trên phần mềm HRM nội bộ.",
        "impactNote": "100% cán bộ nhân viên Kiểu Việt ủy quyền quyết toán thuế online, không còn phải thu thập hàng trăm tờ giấy ký tay cuối năm."
      },
      {
        "topic": "Kéo dài thời hạn nộp hồ sơ quyết toán thuế TNCN cho cá nhân đến 30/04 (Điều 8)",
        "type": "modified",
        "oldRule": "[Căn cứ: Luật cũ] Hạn cuối nộp hồ sơ là 31/03.",
        "newRule": "[Căn cứ: Điều 8 Luật 109/2025] Khẳng định thời hạn nộp hồ sơ quyết toán thuế TNCN trực tiếp của cá nhân là ngày 30/04 hàng năm; không bị xử phạt chậm nộp nếu có số thuế nộp thừa đề nghị hoàn.",
        "impactNote": "Bảo đảm người lao động Kiểu Việt có đủ thời gian chuẩn bị chứng từ khấu trừ thuế nếu có thu nhập vãng lai ở nhiều nơi."
      },
      {
        "topic": "Chi phí tiền nhà ở tại công trường do doanh nghiệp chi trả (Điều 2)",
        "type": "modified",
        "oldRule": "[Căn cứ: TT 111/2013] Tiền nhà ở tính vào thu nhập chịu thuế tối đa không quá 15% tổng thu nhập chịu thuế.",
        "newRule": "[Căn cứ: Điều 2 Luật 109/2025] Khoản tiền thuê nhà, xây dựng lán trại tại hiện trường công trình xây dựng cho người lao động di chuyển theo công trình được miễn tính vào thu nhập chịu thuế TNCN.",
        "impactNote": "Kiểu Việt đầu tư xây dựng khu nhà container điều hòa khang trang cho cán bộ kỹ sư tại công trường mà không làm tăng tiền thuế TNCN của anh em."
      },
      {
        "topic": "Quy định về hoàn thuế TNCN tự động vào tài khoản ngân hàng (Điều 9)",
        "type": "added",
        "oldRule": "[Căn cứ: Luật cũ] Thủ tục hoàn thuế TNCN kéo dài hàng tháng.",
        "newRule": "[Căn cứ: Điều 9 Luật 109/2025] Cơ quan thuế thực hiện hoàn thuế TNCN nộp thừa tự động vào tài khoản ngân hàng chính chủ của người nộp thuế trong vòng 03 ngày làm việc kể từ ngày nhận được hồ sơ quyết toán hợp lệ.",
        "impactNote": "Cán bộ công nhân viên Kiểu Việt nhận tiền hoàn thuế nhanh chóng vào tài khoản ATM cá nhân."
      },
      {
        "topic": "Hiệu lực thi hành Luật Thuế thu nhập cá nhân số 109/2025/QH15",
        "type": "added",
        "oldRule": "[Căn cứ: Luật 04/2007, NQ 954/2020] Các quy định cũ.",
        "newRule": "[Căn cứ: Điều 10 Luật 109/2025] Luật có hiệu lực thi hành từ ngày 01/01/2026; mức giảm trừ gia cảnh mới 15.5 triệu/tháng áp dụng ngay từ kỳ tính thuế tháng 01/2026.",
        "impactNote": "Phòng Nhân sự và Kế toán Kiểu Việt đã sẵn sàng biểu tính thuế mới, nâng cao đời sống và tinh thần làm việc của toàn thể người lao động."
      }
    ]
  },
  "tt-111-2013": {
    "decreeId": "tt-111-2013",
    "title": "Thông tư 111/2013/TT-BTC",
    "category": "Hướng dẫn Thuế Thu nhập cá nhân",
    "compareWith": "Thông tư 84/2008/TT-BTC",
    "summary": "Thông tư 111/2013/TT-BTC là văn bản hướng dẫn cốt lõi về thuế TNCN: Quy định các khoản phụ cấp không tính vào thu nhập chịu thuế (tiền ăn ca 730k, công tác phí, trang phục 5tr), khấu trừ 10% và thủ tục ủy quyền quyết toán thuế.",
    "items": [
      {
        "topic": "Quy định các khoản phụ cấp, trợ cấp công trình không tính vào thu nhập chịu thuế TNCN (Điều 2)",
        "type": "modified",
        "oldRule": "[Căn cứ: TT 84/2008] Phụ cấp độc hại, lưu động quy định mức hạn chế theo khu vực nhà nước.",
        "newRule": "[Căn cứ: Điều 2 Khoản 2 Điểm b TT 111/2013] Các khoản phụ cấp độc hại nguy hiểm công trường; phụ cấp lưu động thi công xa nhà; tiền ăn giữa ca không vượt quá mức quy định của Bộ LĐ-TB&XH được miễn thuế TNCN.",
        "impactNote": "Kiểu Việt xây dựng Quy chế lương chi trả đầy đủ phụ cấp lưu động và tiền ăn ca cho công nhân mà không làm tăng tiền thuế TNCN."
      },
      {
        "topic": "Khấu trừ thuế TNCN 10% đối với lao động thời vụ không ký hợp đồng lao động (Điều 25)",
        "type": "modified",
        "oldRule": "[Căn cứ: TT 84/2008] Khấu trừ 10% với người có MST và 20% với người chưa có MST.",
        "newRule": "[Căn cứ: Điều 25 Khoản 1 Điểm i TT 111/2013] Khấu trừ thuế TNCN theo tỷ lệ 10% thống nhất trên thu nhập từ 2.000.000 đồng/lần trở lên; cho phép làm Bản cam kết Mẫu 08/CK-TNCN nếu chỉ có duy nhất một nguồn thu nhập và ước tính tổng thu nhập trong năm chưa đến mức phải nộp thuế.",
        "impactNote": "Kiểu Việt hướng dẫn nhân công địa phương ký cam kết Mẫu 08 để nhận trọn vẹn 100% tiền công thuê khoán hàng tuần."
      },
      {
        "topic": "Điều kiện và hồ sơ chứng minh người phụ thuộc để giảm trừ gia cảnh (Điều 9)",
        "type": "modified",
        "oldRule": "[Căn cứ: TT 84/2008] Hồ sơ chứng minh người phụ thuộc quy định phức tạp qua nhiều cơ quan.",
        "newRule": "[Căn cứ: Điều 9 Khoản 1 Điểm g TT 111/2013] Quy định cụ thể hồ sơ cho từng đối tượng: Con dưới 18 tuổi chỉ cần bản sao Giấy khai sinh; con trên 18 tuổi bị khuyết tật hoặc đang học đại học cần thẻ sinh viên; cha mẹ già ngoài độ tuổi lao động có xác nhận không có thu nhập.",
        "impactNote": "Kiểu Việt hỗ trợ cán bộ nhân viên lập hồ sơ giảm trừ gia cảnh kịp thời, tối ưu hóa tiền lương thực nhận."
      },
      {
        "topic": "Miễn thuế TNCN cho phần tiền lương làm việc ban đêm, làm thêm giờ (Điều 3)",
        "type": "modified",
        "oldRule": "[Căn cứ: TT 84/2008] Miễn thuế phần chênh lệch trả cao hơn.",
        "newRule": "[Căn cứ: Điều 3 Khoản 1 Điểm i TT 111/2013] Phần tiền lương, tiền công trả cao hơn do phải làm việc ban đêm, làm thêm giờ được miễn thuế TNCN; doanh nghiệp phải lập bảng kê chi tiết giờ làm thêm và đơn giá lương ca đêm.",
        "impactNote": "Bảo đảm Kiểu Việt chi trả lương tăng ca tiến độ công trình cao tốc cho anh em kỹ sư được hưởng trọn vẹn lợi ích miễn thuế."
      },
      {
        "topic": "Quy định về ủy quyền quyết toán thuế TNCN cho doanh nghiệp (Điều 21)",
        "type": "modified",
        "oldRule": "[Căn cứ: TT 84/2008] Người lao động phải tự đi quyết toán nếu có thu nhập vãng lai nhỏ.",
        "newRule": "[Căn cứ: Điều 21 Khoản 3 TT 111/2013] Người lao động ký hợp đồng từ 3 tháng trở lên được ủy quyền quyết toán qua công ty nếu chỉ có thu nhập tại công ty hoặc có thêm thu nhập vãng lai bình quân không quá 10 triệu đồng/tháng đã khấu trừ 10%.",
        "impactNote": "Phòng Kế toán Kiểu Việt quyết toán thay cho 95% nhân sự công ty, giúp người lao động yên tâm bám sát công trường."
      },
      {
        "topic": "Tiền thuê nhà cho người lao động làm việc xa nhà (Điều 2)",
        "type": "modified",
        "oldRule": "[Căn cứ: TT 84/2008] Tiền nhà tính toàn bộ vào thu nhập chịu thuế.",
        "newRule": "[Căn cứ: Điều 2 Khoản 2 Điểm đ.1 TT 111/2013] Khoản tiền thuê nhà do doanh nghiệp trả thay tính vào thu nhập chịu thuế theo số thực tế chi trả nhưng không vượt quá 15% tổng thu nhập chịu thuế (chưa bao gồm tiền thuê nhà).",
        "impactNote": "Kiểu Việt thuê nhà trọ hoặc văn phòng điều hành công trường cho đội ngũ kỹ sư với mức chi phí hợp lý được trừ thuế an toàn."
      },
      {
        "topic": "Thuế TNCN từ đầu tư vốn và chuyển nhượng vốn góp (Điều 10 & 11)",
        "type": "modified",
        "oldRule": "[Căn cứ: TT 84/2008] Thuế suất đầu tư vốn 5%, chuyển nhượng vốn 20%.",
        "newRule": "[Căn cứ: Điều 10 & 11 TT 111/2013] Thuế suất 5% đối với lợi tức cổ phần, lợi nhuận chia cho cổ đông Kiểu Việt; thuế suất 20% trên thu nhập chịu thuế khi chuyển nhượng phần vốn góp trong công ty TNHH/CP.",
        "impactNote": "Kiểu Việt thực hiện khấu trừ 5% thuế TNCN trước khi chi trả cổ tức cho các cổ đông theo đúng luật định."
      },
      {
        "topic": "Xác định thu nhập chịu thuế đối với chuyên gia nước ngoài (Điều 1)",
        "type": "modified",
        "oldRule": "[Căn cứ: TT 84/2008] Tiêu chí cá nhân cư trú dựa trên 183 ngày.",
        "newRule": "[Căn cứ: Điều 1 TT 111/2013] Cá nhân cư trú nếu có mặt tại Việt Nam từ 183 ngày trở lên hoặc có nơi ở thường xuyên; áp dụng biểu thuế lũy tiến từng phần; cá nhân không cư trú áp dụng thuế suất cố định 20% trên thu nhập phát sinh tại Việt Nam.",
        "impactNote": "Kiểu Việt kê khai thuế TNCN đúng chuẩn khi thuê chuyên gia cơ giới người nước ngoài bảo dưỡng thiết bị máy đào."
      },
      {
        "topic": "Các khoản đóng góp bảo hiểm bắt buộc được trừ khi tính thuế TNCN (Điều 9)",
        "type": "modified",
        "oldRule": "[Căn cứ: TT 84/2008] Trừ các khoản BHXH, BHYT bắt buộc.",
        "newRule": "[Căn cứ: Điều 9 Khoản 2 TT 111/2013] Các khoản đóng BHXH, BHYT, BHTN, bảo hiểm trách nhiệm nghề nghiệp bắt buộc và bảo hiểm hưu trí tự nguyện (tối đa 1 triệu/tháng) được trừ 100% trước khi tính thuế TNCN.",
        "impactNote": "Bảo đảm toàn bộ phần trích bảo hiểm 10.5% trừ vào lương của người lao động Kiểu Việt được giảm trừ thuế đầy đủ."
      },
      {
        "topic": "Thủ tục cấp mã số thuế cá nhân cho người lao động mới (Điều 24)",
        "type": "modified",
        "oldRule": "[Căn cứ: TT 84/2008] Đăng ký mã số thuế bằng hồ sơ giấy.",
        "newRule": "[Căn cứ: Điều 24 TT 111/2013] Doanh nghiệp tổng hợp danh sách CCCD/CMND của người lao động mới nộp qua Cổng thuedientu; cơ quan thuế trả mã số thuế cá nhân tự động trong vòng 24 giờ.",
        "impactNote": "100% nhân viên mới gia nhập Kiểu Việt đều có mã số thuế cá nhân ngay trong tháng đầu tiên thử việc."
      },
      {
        "topic": "Trách nhiệm cấp Chứng từ khấu trừ thuế TNCN điện tử (Điều 25)",
        "type": "modified",
        "oldRule": "[Căn cứ: TT 84/2008] Cấp chứng từ khấu trừ thuế bằng cuốn biên lai giấy mua của Chi cục Thuế.",
        "newRule": "[Căn cứ: Điều 25 TT 111/2013 & TT 78/2021] Bắt buộc doanh nghiệp phải phát hành Chứng từ khấu trừ thuế TNCN điện tử giao cho người lao động khi chấm dứt hợp đồng hoặc quyết toán riêng.",
        "impactNote": "Kiểu Việt phát hành chứng từ khấu trừ thuế TNCN điện tử qua email cho các kỹ sư nghỉ việc, phục vụ họ tự quyết toán thuế dễ dàng."
      },
      {
        "topic": "Hiệu lực thi hành Thông tư 111/2013/TT-BTC",
        "type": "added",
        "oldRule": "[Căn cứ: TT 84/2008, TT 62/2009] Các thông tư cũ.",
        "newRule": "[Căn cứ: Điều 28 TT 111/2013] Thông tư có hiệu lực từ ngày 01/10/2013, thay thế Thông tư 84/2008 và là cẩm nang hướng dẫn thuế TNCN toàn diện nhất.",
        "impactNote": "Kiểu Việt vận hành hệ thống tính lương và thuế TNCN chuẩn mực theo TT 111 trong suốt hơn 12 năm qua."
      }
    ]
  },
  "luat-thue-gtgt": {
    "decreeId": "luat-thue-gtgt",
    "title": "Luật Thuế GTGT số 13/2008/QH12",
    "category": "Luật Thuế Giá trị gia tăng",
    "compareWith": "Luật Thuế GTGT số 02/1997/QH10",
    "summary": "Đạo luật thuế gián thu then chốt: Chuẩn hóa 3 mức thuế suất 0%, 5%, 10%; quy định điều kiện bắt buộc khấu trừ thuế GTGT đầu vào và nguyên tắc hoàn thuế cho dự án đầu tư xây dựng.",
    "items": [
      {
        "topic": "Quy định 3 mức thuế suất thuế Giá trị gia tăng: 0%, 5% và 10% (Điều 8)",
        "type": "modified",
        "oldRule": "[Căn cứ: Luật 02/1997] Biểu thuế GTGT gồm 4 mức: 0%, 5%, 10% và 20%.",
        "newRule": "[Căn cứ: Điều 8 Luật 13/2008/QH12] Bãi bỏ mức thuế suất 20%, thống nhất 3 mức thuế suất: 0% (hàng xuất khẩu), 5% (hàng hóa thiết yếu, nước sạch) và 10% (thuế suất phổ thông cho xây dựng, vận tải, thương mại).",
        "impactNote": "Hoạt động thi công xây lắp và sản xuất đá mỏ của Kiểu Việt áp dụng thuế suất thuế GTGT 10% chuẩn mực."
      },
      {
        "topic": "Điều kiện khấu trừ thuế GTGT đầu vào đối với hóa đơn từ 20 triệu đồng (Điều 12)",
        "type": "added",
        "oldRule": "[Căn cứ: Luật 02/1997] Chỉ cần có hóa đơn GTGT hợp pháp là được khấu trừ thuế đầu vào, thanh toán tiền mặt vẫn được khấu trừ.",
        "newRule": "[Căn cứ: Điều 12 Khoản 2 Điểm b Luật 13/2008/QH12] Bắt buộc phải có chứng từ thanh toán không dùng tiền mặt đối với hàng hóa, dịch vụ mua vào (bao gồm cả hàng nhập khẩu) từ 20 triệu đồng trở lên.",
        "impactNote": "100% chứng từ thanh toán tiền vật tư xi măng sắt thép của Kiểu Việt phải chuyển khoản qua ngân hàng, nếu thanh toán tiền mặt sẽ mất toàn bộ quyền khấu trừ thuế GTGT đầu vào."
      },
      {
        "topic": "Bỏ thời hạn 6 tháng khống chế kê khai khấu trừ hóa đơn GTGT đầu vào (Điều 12)",
        "type": "modified",
        "oldRule": "[Căn cứ: Luật 13/2008 ban đầu] Hóa đơn GTGT đầu vào phát sinh trong tháng nào thì kê khai khấu trừ trong tháng đó; trường hợp sót chỉ được kê khai bổ sung trong vòng tối đa 06 tháng.",
        "newRule": "[Căn cứ: Luật số 31/2013/QH13 sửa đổi Điều 12 Luật 13/2008] Bãi bỏ thời hạn khống chế 06 tháng; doanh nghiệp phát hiện hóa đơn GTGT đầu vào bị bỏ sót được kê khai khấu trừ bổ sung bất kỳ lúc nào trước khi cơ quan thuế công bố quyết định thanh tra, kiểm tra thuế tại trụ sở.",
        "impactNote": "Cứu cánh tuyệt vời cho Kiểu Việt: Hóa đơn cung cấp vật tư công trường gửi muộn nhiều tháng vẫn được kê khai khấu trừ bình thường, không bị mất tiền thuế."
      },
      {
        "topic": "Thời điểm xác định thuế GTGT đối với hoạt động xây dựng, lắp đặt (Điều 8)",
        "type": "modified",
        "oldRule": "[Căn cứ: Luật cũ] Quy định chung theo thời điểm xuất hóa đơn.",
        "newRule": "[Căn cứ: Điều 8 Luật 13/2008] Thời điểm xác định thuế GTGT đối với xây dựng, lắp đặt là thời điểm nghiệm thu, bàn giao công trình, hạng mục công trình, khối lượng xây dựng, lắp đặt hoàn thành, không phân biệt đã thu được tiền hay chưa thu được tiền.",
        "impactNote": "Chỉ đạo quan trọng: Ngay khi Chủ đầu tư ký Biên bản nghiệm thu khối lượng A-B giai đoạn, Kế toán Kiểu Việt phải xuất hóa đơn GTGT ngay trong ngày, không được chờ đến khi nhận được tiền giải ngân."
      },
      {
        "topic": "Quy định điều kiện áp dụng thuế suất thuế GTGT 0% cho công trình xuất khẩu ra nước ngoài (Điều 8)",
        "type": "modified",
        "oldRule": "[Căn cứ: Luật cũ] Hàng xuất khẩu áp thuế 0%.",
        "newRule": "[Căn cứ: Điều 8 Luật 13/2008 & Luật 31/2013] Hoạt động xây dựng, lắp đặt công trình ở nước ngoài hoặc tại khu phi thuế quan được áp dụng thuế suất thuế GTGT 0% nếu có Hợp đồng, Biên bản nghiệm thu và chứng từ thanh toán qua ngân hàng.",
        "impactNote": "Kiểu Việt xuất hóa đơn thuế suất 0% cho các gói thầu thi công hạ tầng trong khu kinh tế mở phi thuế quan, được hoàn 100% thuế GTGT đầu vào."
      },
      {
        "topic": "Chính sách hoàn thuế GTGT cho dự án đầu tư mới đang trong giai đoạn đầu tư (Điều 13)",
        "type": "modified",
        "oldRule": "[Căn cứ: Luật 13/2008 ban đầu] Hoàn thuế khi lũy kế 3 tháng âm liên tục.",
        "newRule": "[Căn cứ: Luật số 106/2016/QH13 sửa đổi Điều 13 Luật 13/2008] Cơ sở kinh doanh có dự án đầu tư mới đang trong giai đoạn đầu tư có số thuế GTGT đầu vào chưa được khấu trừ từ 300 triệu đồng trở lên thì được hoàn thuế GTGT.",
        "impactNote": "Kiểu Việt lập hồ sơ đề nghị cơ quan thuế hoàn hàng tỷ đồng thuế GTGT đầu vào của dự án xây dựng trạm nghiền đá mới trước khi đưa vào vận hành thương mại."
      },
      {
        "topic": "Bãi bỏ cơ chế hoàn thuế GTGT đối với trường hợp âm thuế liên tục 12 tháng (Điều 13)",
        "type": "removed",
        "oldRule": "[Căn cứ: Luật 13/2008] Doanh nghiệp có số thuế GTGT đầu vào chưa được khấu trừ hết liên tục 12 tháng hoặc 4 quý thì được làm thủ tục xét hoàn thuế.",
        "newRule": "[Căn cứ: Luật số 106/2016/QH13] Bãi bỏ quy định hoàn thuế khi âm thuế 12 tháng; số thuế GTGT chưa khấu trừ hết của hoạt động SXKD thông thường chỉ được chuyển sang kỳ sau để tiếp tục khấu trừ, không được hoàn tiền mặt.",
        "impactNote": "Kế toán Kiểu Việt lưu ý quản lý dòng tiền khấu trừ thuế GTGT qua các quý, tập trung vào hoàn thuế dự án đầu tư thay vì hoàn thuế hàng tháng."
      },
      {
        "topic": "Khấu trừ thuế GTGT đối với tài sản cố định mua sắm có giá trị lớn (Điều 12)",
        "type": "modified",
        "oldRule": "[Căn cứ: Luật cũ] Khấu trừ theo từng tháng phân bổ.",
        "newRule": "[Căn cứ: Điều 12 Luật 13/2008] Thuế GTGT đầu vào của tài sản cố định sử dụng cho sản xuất kinh doanh hàng hóa chịu thuế GTGT được khấu trừ toàn bộ 100% ngay trong kỳ tính thuế phát sinh hóa đơn.",
        "impactNote": "Kiểu Việt mua dàn xe lu, máy ủi trị giá 20 tỷ đồng được khấu trừ ngay 2 tỷ tiền thuế GTGT trong tháng phát sinh hóa đơn tài chính."
      },
      {
        "topic": "Phân bổ thuế GTGT đầu vào dùng chung cho hoạt động chịu thuế và không chịu thuế (Điều 12)",
        "type": "modified",
        "oldRule": "[Căn cứ: Luật cũ] Tự xác định theo ước tính.",
        "newRule": "[Căn cứ: Điều 12 Luật 13/2008] Thuế GTGT đầu vào dùng chung cho sản xuất kinh doanh hàng hóa chịu thuế và không chịu thuế chỉ được khấu trừ số thuế GTGT của hàng hóa chịu thuế, doanh nghiệp phải hạch toán riêng; nếu không tách riêng được thì phân bổ theo tỷ lệ (%) doanh thu.",
        "impactNote": "Kiểu Việt tách bạch riêng vật tư dùng cho công trình hạ tầng chịu thuế GTGT và các hoạt động đền bù giải phóng mặt bằng không thuộc đối tượng chịu thuế."
      },
      {
        "topic": "Quy định thuế GTGT đối với sản phẩm khoáng sản khai thác chưa chế biến (Điều 5)",
        "type": "modified",
        "oldRule": "[Căn cứ: Luật cũ] Áp thuế 10%.",
        "newRule": "[Căn cứ: Luật 106/2016 sửa đổi Điều 5 Luật 13/2008] Sản phẩm xuất khẩu là tài nguyên, khoáng sản khai thác chưa chế biến thành sản phẩm khác không thuộc đối tượng được áp dụng thuế suất thuế GTGT 0% và không được khấu trừ thuế GTGT đầu vào.",
        "impactNote": "Kiểu Việt tập trung chế biến sâu đá mỏ thành đá dăm tiêu chuẩn và cát nghiền nhân tạo phục vụ xây dựng nội địa để bảo toàn quyền khấu trừ thuế GTGT."
      },
      {
        "topic": "Quy định hóa đơn thương mại và chứng từ bù trừ công nợ xây dựng (Điều 12)",
        "type": "modified",
        "oldRule": "[Căn cứ: Luật cũ] Quy định thanh toán ngân hàng cứng nhắc.",
        "newRule": "[Căn cứ: Điều 12 Luật 13/2008 & các thông tư hướng dẫn] Các trường hợp bù trừ công nợ ba bên, cấn trừ khối lượng thi công với vật tư xi măng sắt thép do Chủ đầu tư cấp được công nhận là chứng từ thanh toán không dùng tiền mặt hợp lệ để khấu trừ thuế GTGT.",
        "impactNote": "Kiểu Việt lập Biên bản đối trừ công nợ vật tư A cấp có xác nhận chữ ký số của Ban QLDA để bảo vệ quyền khấu trừ thuế GTGT đầu vào."
      },
      {
        "topic": "Ngưỡng doanh thu áp dụng phương pháp khấu trừ thuế GTGT từ 1 tỷ đồng trở lên (Điều 10)",
        "type": "modified",
        "oldRule": "[Căn cứ: Luật 13/2008 ban đầu] Mọi doanh nghiệp có mã số thuế đều được áp dụng phương pháp khấu trừ.",
        "newRule": "[Căn cứ: Luật số 31/2013/QH13 sửa đổi Điều 10 Luật 13/2008] Doanh nghiệp có doanh thu hàng năm từ 1 tỷ đồng trở lên bắt buộc áp dụng phương pháp khấu trừ thuế; doanh nghiệp mới thành lập được tự nguyện đăng ký áp dụng phương pháp khấu trừ.",
        "impactNote": "Công ty Cổ phần Kiểu Việt có quy mô doanh thu hàng trăm tỷ đồng áp dụng phương pháp khấu trừ thuế GTGT chuẩn mực và ổn định lâu dài."
      }
    ]
  },
  "tt-219-2013": {
    "decreeId": "tt-219-2013",
    "title": "Thông tư 219/2013/TT-BTC",
    "category": "Hướng dẫn Thuế Giá trị gia tăng",
    "compareWith": "Thông tư 06/2012/TT-BTC",
    "summary": "Thông tư 219/2013/TT-BTC là văn bản hướng dẫn toàn diện nhất về thuế GTGT: Quy định chi tiết giá tính thuế xây dựng lắp đặt (không bao gồm giá trị đất), thời điểm xác định thuế GTGT xây lắp và khấu trừ thuế mua vào.",
    "items": [
      {
        "topic": "Thời điểm xác định thuế GTGT đối với hoạt động xây dựng, lắp đặt (Điều 8 Khoản 5)",
        "type": "modified",
        "oldRule": "[Căn cứ: TT 06/2012] Thời điểm tính thuế là ngày lập hóa đơn hoặc ngày nghiệm thu.",
        "newRule": "[Căn cứ: Điều 8 Khoản 5 TT 219/2013] Thời điểm xác định thuế GTGT đối với xây dựng, lắp đặt (bao gồm cả đóng tàu) là thời điểm nghiệm thu, bàn giao công trình, hạng mục công trình, khối lượng xây dựng, lắp đặt hoàn thành, không phân biệt đã thu được tiền hay chưa thu được tiền.",
        "impactNote": "Căn cứ pháp lý cốt lõi: Kiểu Việt phải kê khai thuế GTGT đầu ra ngay trong kỳ có Biên bản nghiệm thu khối lượng hoàn thành A-B."
      },
      {
        "topic": "Thuế suất thuế GTGT 10% áp dụng cho thi công xây dựng, lắp đặt công trình (Điều 11)",
        "type": "modified",
        "oldRule": "[Căn cứ: TT 06/2012] Áp dụng thuế suất 10% chung.",
        "newRule": "[Căn cứ: Điều 11 TT 219/2013] Dịch vụ xây dựng, lắp đặt không bao thầu nguyên vật liệu hoặc có bao thầu nguyên vật liệu đều áp dụng thuế suất thuế GTGT 10% (trừ các giai đoạn được Quốc hội quyết định giảm 2% còn 8%).",
        "impactNote": "Kiểu Việt áp dụng đúng thuế suất 10% (hoặc 8% theo các Nghị định giảm thuế từng thời kỳ) trên các hợp đồng thi công giao thông."
      },
      {
        "topic": "Thuế suất thuế GTGT đối với khoáng sản cát, đá, đất đắp khai thác bán ra (Điều 11)",
        "type": "modified",
        "oldRule": "[Căn cứ: TT 06/2012] Khoáng sản thô chịu thuế 10%.",
        "newRule": "[Căn cứ: Điều 11 TT 219/2013] Khoáng sản đá xây dựng, cát san lấp, đất đắp công trình đã qua sàng tuyển, nghiền nát áp dụng thuế suất thuế GTGT 10%.",
        "impactNote": "Kiểu Việt xuất hóa đơn bán đá 1x2, đá base và cát nghiền nhân tạo chịu thuế GTGT 10% đầy đủ."
      },
      {
        "topic": "Điều kiện khấu trừ thuế GTGT đầu vào: Hóa đơn hợp pháp và chứng từ ngân hàng (Điều 15)",
        "type": "modified",
        "oldRule": "[Căn cứ: TT 06/2012] Bắt buộc có hóa đơn GTGT và chứng từ thanh toán không dùng tiền mặt từ 20 triệu.",
        "newRule": "[Căn cứ: Điều 15 TT 219/2013 (sửa đổi bởi TT 173/2016)] Có hóa đơn GTGT hợp pháp; có chứng từ thanh toán không dùng tiền mặt đối với hàng hóa, dịch vụ mua vào từ 20 triệu đồng trở lên; thanh toán bù trừ công nợ phải được quy định rõ trong hợp đồng kinh tế.",
        "impactNote": "Kiểu Việt lập đầy đủ Phụ lục bù trừ công nợ vật tư với nhà thầu phụ để đủ điều kiện khấu trừ thuế GTGT đầu vào hợp lệ."
      },
      {
        "topic": "Hoàn thuế GTGT đối với dự án đầu tư mới đang trong giai đoạn xây dựng (Điều 18)",
        "type": "modified",
        "oldRule": "[Căn cứ: TT 06/2012] Hoàn thuế khi số thuế lũy kế 3 tháng trên 200 triệu.",
        "newRule": "[Căn cứ: Điều 18 TT 219/2013 (sửa đổi bởi TT 130/2016)] Doanh nghiệp có dự án đầu tư mới đang trong giai đoạn đầu tư có số thuế GTGT đầu vào chưa được khấu trừ từ 300.000.000 đồng trở lên được xét hoàn thuế GTGT cho dự án đầu tư.",
        "impactNote": "Dự án mở rộng mỏ đá Kiểu Việt có số thuế GTGT máy móc trạm nghiền trên 300 triệu được hoàn thuế nhanh chóng."
      },
      {
        "topic": "Thuế GTGT đối với khoản tiền tạm ứng hợp đồng xây dựng (Điều 8)",
        "type": "added",
        "oldRule": "[Căn cứ: TT 06/2012] Nhận tiền tạm ứng xây dựng nhiều nơi yêu cầu xuất hóa đơn.",
        "newRule": "[Căn cứ: Điều 8 Khoản 5 TT 219/2013] Trường hợp doanh nghiệp nhận tiền tạm ứng hợp đồng để thi công công trình xây dựng thì chưa phải kê khai, nộp thuế GTGT tại thời điểm nhận tiền tạm ứng; chỉ kê khai thuế khi nghiệm thu khối lượng hoàn thành.",
        "impactNote": "Bảo vệ dòng tiền Kiểu Việt: Nhận tiền tạm ứng 20-50% giá trị gói thầu từ Chủ đầu tư không phải xuất hóa đơn và không phải nộp thuế GTGT ngay."
      },
      {
        "topic": "Khấu trừ thuế GTGT đối với tài sản cố định mua vào là xe ô tô dưới 9 chỗ (Điều 15)",
        "type": "modified",
        "oldRule": "[Căn cứ: TT 06/2012] Không khống chế số thuế GTGT được khấu trừ.",
        "newRule": "[Căn cứ: Điều 15 Khoản 3 TT 219/2013] Xe ô tô chở người từ 9 chỗ ngồi trở xuống có giá trị vượt trên 1.6 tỷ đồng thì số thuế GTGT đầu vào tương ứng với phần trị giá vượt trên 1.6 tỷ đồng không được khấu trừ.",
        "impactNote": "Kiểu Việt tối ưu hóa số thuế khấu trừ bằng cách mua xe phục vụ điều hành dự án trong tầm giá dưới 1.6 tỷ đồng."
      },
      {
        "topic": "Phương pháp tính thuế GTGT trực tiếp trên giá trị gia tăng đối với khoáng sản (Điều 13)",
        "type": "modified",
        "oldRule": "[Căn cứ: TT 06/2012] Áp dụng phương pháp trực tiếp theo tỷ lệ % doanh thu.",
        "newRule": "[Căn cứ: Điều 13 TT 219/2013] Hoạt động mua bán, chế tác vàng bạc đá quý áp dụng phương pháp tính trực tiếp trên GTGT (giá bán trừ giá mua); khai thác vật liệu xây dựng áp dụng phương pháp khấu trừ thông thường nếu có đủ sổ sách kế toán.",
        "impactNote": "Kiểu Việt áp dụng phương pháp khấu trừ thuế GTGT để được hoàn thuế và khấu trừ toàn bộ chi phí máy móc thiết bị mỏ mua vào."
      },
      {
        "topic": "Thuế GTGT đối với hàng hóa, vật tư điều chuyển nội bộ giữa các công trình (Điều 5)",
        "type": "modified",
        "oldRule": "[Căn cứ: TT 06/2012] Điều chuyển vật tư giữa các chi nhánh phải xuất hóa đơn GTGT.",
        "newRule": "[Căn cứ: Điều 5 Khoản 7 TT 219/2013] Điều chuyển vật tư, máy móc thiết bị giữa các chi nhánh, ban điều hành công trường trực thuộc hạch toán phụ thuộc không phải kê khai, nộp thuế GTGT; sử dụng Lệnh điều động kiêm Phiếu xuất kho nội bộ.",
        "impactNote": "Kiểu Việt luân chuyển xe lu, máy xúc giữa công trình Gia Lai và Đắk Lắk hoàn toàn miễn thuế GTGT."
      },
      {
        "topic": "Xác định giá tính thuế GTGT đối với dịch vụ xây dựng bao thầu nguyên vật liệu (Điều 7)",
        "type": "modified",
        "oldRule": "[Căn cứ: TT 06/2012] Giá tính thuế không bao gồm chi phí vật tư do chủ đầu tư cấp.",
        "newRule": "[Căn cứ: Điều 7 Khoản 9 TT 219/2013] Xây dựng, lắp đặt có bao thầu nguyên vật liệu là giá xây dựng, lắp đặt bao gồm cả giá trị nguyên vật liệu chưa có thuế GTGT; trường hợp không bao thầu thì giá tính thuế là giá trị xây dựng không bao gồm giá trị nguyên vật liệu.",
        "impactNote": "Kiểu Việt bóc tách rõ hợp đồng bao thầu trọn gói hay hợp đồng nhân công để xác định doanh thu tính thuế GTGT chính xác."
      },
      {
        "topic": "Khai bổ sung hồ sơ khai thuế GTGT khi phát hiện sai sót (Điều 15)",
        "type": "modified",
        "oldRule": "[Căn cứ: TT 06/2012] Chỉ được khai bổ sung trong vòng 6 tháng.",
        "newRule": "[Căn cứ: Điều 15 TT 219/2013 & Luật QLT] Người nộp thuế được khai bổ sung hồ sơ khai thuế GTGT bất cứ thời điểm nào trước khi cơ quan thuế công bố quyết định kiểm tra, thanh tra thuế tại trụ sở.",
        "impactNote": "Kiểu Việt chủ động rà soát hóa đơn đầu vào bỏ sót để khai bổ sung khấu trừ thuế kịp thời, không bị mất quyền lợi thuế."
      },
      {
        "topic": "Thuế GTGT đối với hoạt động chuyển nhượng quyền thuê đất và quyền khai thác mỏ (Điều 5)",
        "type": "modified",
        "oldRule": "[Căn cứ: TT 06/2012] Chuyển nhượng quyền thuê đất chịu thuế 10%.",
        "newRule": "[Căn cứ: Điều 5 Khoản 4 TT 219/2013] Chuyển nhượng quyền sử dụng đất thuộc đối tượng không chịu thuế GTGT; chuyển nhượng tài sản gắn liền với đất và máy móc mỏ khoáng sản chịu thuế GTGT 10%.",
        "impactNote": "Kiểu Việt phân tách rõ giá trị quyền sử dụng đất (không thuế) và giá trị nhà xưởng máy nghiền đá (chịu thuế 10%) trong hợp đồng chuyển nhượng."
      },
      {
        "topic": "Thuế GTGT đối với chi phí bảo hành công trình giữ lại (Điều 8)",
        "type": "added",
        "oldRule": "[Căn cứ: TT 06/2012] Chưa quy định rõ thời điểm tính thuế phần tiền giữ lại bảo hành.",
        "newRule": "[Căn cứ: Điều 8 TT 219/2013] Thuế GTGT được tính trên toàn bộ 100% giá trị nghiệm thu bàn giao giai đoạn; khoản 5% giữ lại bảo hành không được hoãn nghĩa vụ nộp thuế GTGT.",
        "impactNote": "Kiểu Việt xuất hóa đơn và nộp thuế GTGT đủ 100% khi nghiệm thu, không trừ lùi tiền bảo hành công trình."
      },
      {
        "topic": "Hiệu lực thi hành Thông tư 219/2013/TT-BTC",
        "type": "added",
        "oldRule": "[Căn cứ: TT 06/2012, TT 65/2013] Các thông tư cũ.",
        "newRule": "[Căn cứ: Điều 22 TT 219/2013] Thông tư có hiệu lực từ ngày 01/01/2014, là văn bản nền tảng điều chỉnh toàn bộ hoạt động khai nộp thuế GTGT của doanh nghiệp Việt Nam.",
        "impactNote": "Kiểu Việt áp dụng nhất quán Thông tư 219 trong suốt 12 năm qua, bảo đảm tính liên tục và an toàn pháp lý tuyệt đối."
      }
    ]
  },
  "nd-180-2024-nd-cp": {
    "decreeId": "nd-180-2024-nd-cp",
    "title": "Nghị định 180/2024/NĐ-CP",
    "category": "Chính sách Giảm 2% thuế GTGT (2025)",
    "compareWith": "Nghị định 72/2024/NĐ-CP và Nghị định 94/2023/NĐ-CP",
    "summary": "Nghị định 180/2024/NĐ-CP tiếp tục gia hạn giảm 2% thuế suất thuế GTGT (từ 10% xuống 8%) từ ngày 01/01/2025 đến hết ngày 30/06/2025: Hướng dẫn chi tiết áp dụng cho ngành xây lắp và vật liệu xây dựng.",
    "items": [
      {
        "topic": "Gia hạn chính sách giảm 2% thuế GTGT xuống 8% đến hết ngày 31/12/2024 (Điều 1)",
        "type": "modified",
        "oldRule": "[Căn cứ: NĐ 94/2023] Chính sách giảm 2% thuế GTGT chỉ áp dụng đến hết ngày 30/06/2024.",
        "newRule": "[Căn cứ: Điều 1 NĐ 180/2024] Kéo dài thời gian áp dụng giảm 2% thuế suất thuế GTGT (từ 10% xuống 8%) đối với các nhóm hàng hóa, dịch vụ đang áp dụng mức thuế suất 10% đến hết ngày 31/12/2024.",
        "impactNote": "Kiểu Việt tiếp tục áp dụng thuế suất 8% cho các hợp đồng xây lắp và bán đá cát trong nửa cuối năm 2024, tiết kiệm chi phí đầu vào."
      },
      {
        "topic": "Danh mục hàng hóa không được giảm thuế GTGT (Phụ lục I, II, III)",
        "type": "modified",
        "oldRule": "[Căn cứ: NĐ 94/2023] Quy định danh mục loại trừ.",
        "newRule": "[Căn cứ: Phụ lục I, II, III ban hành kèm NĐ 180/2024] Không giảm thuế đối với các ngành: Viễn thông, hoạt động tài chính, ngân hàng, chứng khoán, bảo hiểm, kinh doanh bất động sản, kim loại và sản phẩm từ kim loại đúc sẵn, khoáng sản khai thác thô (than, dầu mỏ, quặng kim loại).",
        "impactNote": "Kiểu Việt tra cứu kỹ mã ngành sản phẩm: Đá xây dựng đã qua nghiền sàng được giảm 8%, trong khi kim loại sắt thép xây dựng giữ nguyên 10%."
      },
      {
        "topic": "Phương pháp lập hóa đơn GTGT giảm 8% (Điều 1 Khoản 3)",
        "type": "modified",
        "oldRule": "[Căn cứ: NĐ 44/2023] Lập hóa đơn thuế suất 8% theo hướng dẫn cũ.",
        "newRule": "[Căn cứ: Điều 1 Khoản 3 NĐ 180/2024] Khi lập hóa đơn GTGT cung cấp hàng hóa, dịch vụ thuộc diện giảm thuế, tại dòng thuế suất thuế GTGT ghi '8%'; tiền thuế GTGT; tổng số tiền người mua phải thanh toán.",
        "impactNote": "Kế toán Kiểu Việt chọn đúng mức thuế suất '8%' trên phần mềm hóa đơn điện tử cho các gói thầu giao thông hoàn thành trước 31/12/2024."
      },
      {
        "topic": "Trường hợp doanh nghiệp tính thuế theo phương pháp tỷ lệ % trên doanh thu",
        "type": "modified",
        "oldRule": "[Căn cứ: NĐ 94/2023] Giảm 20% mức tỷ lệ tính thuế.",
        "newRule": "[Căn cứ: Điều 1 Khoản 3 Điểm b NĐ 180/2024] Cơ sở kinh doanh tính thuế theo tỷ lệ % trên doanh thu được giảm 20% mức tỷ lệ % để tính thuế GTGT khi xuất hóa đơn bán hàng.",
        "impactNote": "Các nhà thầu phụ là hộ kinh doanh cá thể hợp tác với Kiểu Việt được giảm 20% tỷ lệ thuế, giảm giá thành thi công cho dự án."
      },
      {
        "topic": "Xử lý hóa đơn xuất sai thuế suất 10% đối với hàng hóa được giảm 8%",
        "type": "modified",
        "oldRule": "[Căn cứ: NĐ 94/2023] Phải lập hóa đơn điều chỉnh.",
        "newRule": "[Căn cứ: Điều 1 Khoản 5 NĐ 180/2024] Trường hợp cơ sở kinh doanh đã lập hóa đơn và đã kê khai theo mức thuế suất chưa được giảm (10%) thì người bán và người mua phải lập văn bản thỏa thuận hoặc lập hóa đơn điều chỉnh giảm thuế suất về 8%.",
        "impactNote": "Kiểu Việt chủ động rà soát hóa đơn đầu vào của các nhà cung cấp, yêu cầu điều chỉnh ngay các hóa đơn xuất nhầm 10% để tối ưu thuế."
      },
      {
        "topic": "Thời điểm lập hóa đơn để được hưởng chính sách giảm thuế 8%",
        "type": "modified",
        "oldRule": "[Căn cứ: NĐ 94/2023] Thời điểm lập hóa đơn trước 30/06/2024.",
        "newRule": "[Căn cứ: Điều 1 NĐ 180/2024] Thời điểm lập hóa đơn và nghiệm thu dịch vụ xây dựng phải phát sinh từ ngày 01/07/2024 đến hết ngày 31/12/2024; công trình nghiệm thu sau ngày 31/12/2024 quay lại thuế suất 10% (trừ khi có nghị quyết mới).",
        "impactNote": "Kiểu Việt đôn đốc nghiệm thu thanh toán khối lượng xây dựng hoàn thành trong tháng 12/2024 để kịp hưởng ưu đãi thuế suất 8%."
      },
      {
        "topic": "Kê khai các hàng hóa, dịch vụ được giảm thuế trên Tờ khai thuế GTGT",
        "type": "added",
        "oldRule": "[Căn cứ: NĐ 94/2023] Nộp kèm Phụ lục giảm thuế Mẫu 01.",
        "newRule": "[Căn cứ: Điều 1 Khoản 4 NĐ 180/2024] Doanh nghiệp bắt buộc nộp kèm Phụ lục giảm thuế giá trị gia tăng theo Nghị quyết của Quốc hội cùng với Tờ khai thuế GTGT Mẫu 01/GTGT tại kỳ kê khai tương ứng.",
        "impactNote": "Kế toán Kiểu Việt tích dấu nộp đầy đủ Phụ lục giảm thuế 8% trên hệ thống thuế điện tử eTax, tránh bị cơ quan thuế thông báo thiếu hồ sơ."
      },
      {
        "topic": "Tác động của việc giảm thuế GTGT đối với dự toán gói thầu xây lắp",
        "type": "added",
        "oldRule": "[Căn cứ: NĐ 94/2023] Điều chỉnh dự toán gói thầu.",
        "newRule": "[Căn cứ: Điều 2 NĐ 180/2024] Chủ đầu tư và nhà thầu phải rà soát, điều chỉnh giá trị thanh toán hợp đồng xây dựng tương ứng với mức thuế suất 8% cho phần khối lượng thi công thực hiện trong thời gian giảm thuế.",
        "impactNote": "Kiểu Việt tính toán chính xác đơn giá sau thuế 8% trên Bảng thanh toán Mẫu 03a nộp Kho bạc Nhà nước, tránh bị Kho bạc từ chối lệnh thanh toán."
      },
      {
        "topic": "Kiểm tra sau hoàn thuế đối với các doanh nghiệp áp dụng giảm thuế 8%",
        "type": "added",
        "oldRule": "[Căn cứ: NĐ cũ] Kiểm tra chung.",
        "newRule": "[Căn cứ: Điều 2 NĐ 180/2024] Cơ quan thuế tăng cường hậu kiểm đối chiếu hóa đơn 8% nhằm ngăn chặn việc lợi dụng giảm thuế để xuất khống hóa đơn đối với các ngành không thuộc diện được giảm.",
        "impactNote": "Kiểu Việt lưu trữ bảng tra cứu mã ngành sản phẩm đá cát chứng minh 100% sản phẩm của công ty thuộc đúng đối tượng được giảm thuế 8%."
      },
      {
        "topic": "Hiệu lực thi hành Nghị định 180/2024/NĐ-CP",
        "type": "added",
        "oldRule": "[Căn cứ: NĐ 94/2023] Hết hiệu lực ngày 30/06/2024.",
        "newRule": "[Căn cứ: Điều 2 NĐ 180/2024] Nghị định có hiệu lực thi hành từ ngày 01/07/2024 đến hết ngày 31/12/2024, tạo động lực phục hồi sản xuất kinh doanh hạ tầng.",
        "impactNote": "Kiểu Việt đã thực thi hiệu quả chính sách giảm thuế, tiết kiệm hàng tỷ đồng tiền thuế GTGT cho các dự án giao thông trọng điểm."
      }
    ]
  },
  "nd-15-2022": {
    "decreeId": "nd-15-2022",
    "title": "Nghị định 15/2022/NĐ-CP",
    "category": "Gói phục hồi kinh tế & Giảm thuế GTGT 2%",
    "compareWith": "Các chính sách thuế thông thường",
    "summary": "Nghị định 15/2022/NĐ-CP ban hành gói chính sách tài khóa hỗ trợ Chương trình phục hồi kinh tế: Khởi đầu chính sách giảm 2% thuế GTGT và cho phép tính trọn vẹn chi phí ủng hộ phòng chống dịch Covid-19 vào thuế TNDN.",
    "items": [
      {
        "topic": "Chính sách giảm thuế GTGT lần đầu tiên từ 10% xuống 8% theo Nghị quyết 43/2022/QH15 (Điều 1)",
        "type": "added",
        "oldRule": "[Căn cứ: Luật Thuế GTGT 2008] Thuế suất GTGT áp dụng cố định 10% cho toàn bộ hoạt động xây lắp và thương mại thông thường.",
        "newRule": "[Căn cứ: Điều 1 NĐ 15/2022] Lần đầu tiên giảm 2% thuế suất thuế GTGT (từ 10% xuống 8%) từ ngày 01/02/2022 đến hết ngày 31/12/2022 nhằm phục hồi và phát triển kinh tế sau đại dịch Covid-19.",
        "impactNote": "Kiểu Việt tiên phong điều chỉnh hệ thống kế toán ERP, áp dụng thuế suất 8% cho toàn bộ hợp đồng thi công và cung ứng đá cát năm 2022."
      },
      {
        "topic": "Chi phí ủng hộ, tài trợ phòng chống dịch Covid-19 được trừ thuế TNDN (Điều 2)",
        "type": "added",
        "oldRule": "[Căn cứ: Luật Thuế TNDN 2008] Chi tài trợ phòng chống dịch không nằm trong danh mục chi phí được trừ cố định.",
        "newRule": "[Căn cứ: Điều 2 NĐ 15/2022] Cho phép tính vào chi phí được trừ khi xác định thu nhập chịu thuế TNDN đối với toàn bộ các khoản chi ủng hộ, tài trợ bằng tiền, hiện vật cho các hoạt động phòng, chống dịch Covid-19 tại Việt Nam.",
        "impactNote": "Kiểu Việt hạch toán hàng trăm triệu đồng tiền tài trợ khẩu trang, thiết bị y tế và quỹ vắc-xin vào chi phí được trừ thuế TNDN hợp pháp."
      },
      {
        "topic": "Phân loại chi tiết hàng hóa dịch vụ không được giảm thuế GTGT (Phụ lục I, II, III)",
        "type": "added",
        "oldRule": "[Căn cứ: Luật Thuế GTGT] Chưa từng có tiền lệ phân loại danh mục giảm thuế theo mã ngành cấp 7.",
        "newRule": "[Căn cứ: Phụ lục ban hành kèm NĐ 15/2022] Xây dựng bộ danh mục mã sản phẩm hàng hóa theo Quyết định 43/2018/QĐ-TTg để xác định chính xác mặt hàng nào được giảm 8%, mặt hàng nào giữ nguyên 10%.",
        "impactNote": "Kiểu Việt xây dựng bảng mã vật tư nội bộ, chuẩn hóa thuế suất từng loại đá dăm, cát bê tông, xi măng, nhựa đường."
      },
      {
        "topic": "Quy định xuất hóa đơn riêng cho hàng hóa dịch vụ được giảm thuế 8% (Điều 1)",
        "type": "modified",
        "oldRule": "[Căn cứ: NĐ 123/2020] Cho phép xuất chung nhiều thuế suất trên một hóa đơn.",
        "newRule": "[Căn cứ: Điều 1 Khoản 4 NĐ 15/2022] Thời kỳ đầu yêu cầu cơ sở kinh doanh phải lập hóa đơn riêng cho hàng hóa, dịch vụ được giảm thuế GTGT 8%; không lập chung trên cùng một hóa đơn với hàng hóa 10% (sau này đã được tháo gỡ bởi NĐ 41/2022).",
        "impactNote": "Kiểu Việt đã thực hiện tách hóa đơn đúng quy định trong giai đoạn đầu năm 2022, tránh bị cơ quan thuế xử phạt vi phạm lập hóa đơn."
      },
      {
        "topic": "Xử lý sai sót hóa đơn đã lập theo thuế suất 10% trong thời gian giảm thuế (Điều 1)",
        "type": "added",
        "oldRule": "[Căn cứ: NĐ 123/2020] Quy trình điều chỉnh chung.",
        "newRule": "[Căn cứ: Điều 1 Khoản 5 NĐ 15/2022] Hướng dẫn chi tiết: Nếu đã xuất hóa đơn 10% thì hai bên lập biên bản hoặc thỏa thuận bằng văn bản ghi rõ sai sót, người bán lập hóa đơn điều chỉnh giảm tiền thuế tương ứng 2%.",
        "impactNote": "Kiểu Việt điều chỉnh kịp thời các hóa đơn cung ứng vật tư xuất nhầm 10%, hoàn trả tiền thừa cho các đối tác nhà thầu phụ."
      },
      {
        "topic": "Giảm 20% mức tỷ lệ tính thuế GTGT cho hộ kinh doanh và doanh nghiệp tính thuế trực tiếp",
        "type": "added",
        "oldRule": "[Căn cứ: Luật Thuế GTGT] Tỷ lệ tính thuế cố định theo ngành nghề.",
        "newRule": "[Căn cứ: Điều 1 Khoản 2 Điểm b NĐ 15/2022] Giảm 20% mức tỷ lệ % để tính thuế GTGT khi thực hiện xuất hóa đơn đối với cơ sở kinh doanh áp dụng phương pháp tỷ lệ % trên doanh thu.",
        "impactNote": "Tạo điều kiện thuận lợi cho các đội thầu nhân công địa phương hợp tác với Kiểu Việt giảm bớt gánh nặng thuế."
      },
      {
        "topic": "Hồ sơ chứng minh khoản tài trợ Covid-19 hợp lệ (Điều 2)",
        "type": "added",
        "oldRule": "[Căn cứ: TT 78/2014] Hồ sơ tài trợ chung.",
        "newRule": "[Căn cứ: Điều 2 Khoản 3 NĐ 15/2022] Hồ sơ gồm: Biên bản xác nhận tài trợ (theo Mẫu số 02 ban hành kèm theo Nghị định) có chữ ký đóng dấu của đại diện đơn vị tài trợ và đơn vị tiếp nhận tài trợ kèm hóa đơn chứng từ mua hàng.",
        "impactNote": "Kiểu Việt lưu trữ trọn bộ hồ sơ biên bản tài trợ phòng chống dịch đầy đủ, bảo vệ chi phí thuế trước đoàn thanh tra."
      },
      {
        "topic": "Tác động giảm thuế GTGT đối với thanh quyết toán hợp đồng xây lắp theo đơn giá trọn gói",
        "type": "modified",
        "oldRule": "[Căn cứ: NĐ 37/2015] Hợp đồng trọn gói không điều chỉnh giá khi thay đổi chính sách thuế.",
        "newRule": "[Căn cứ: Điều 1 NĐ 15/2022] Khẳng định: Thuế GTGT là khoản thuế gián thu do người mua chi trả; khi Nhà nước giảm thuế GTGT thì giá trị thanh toán sau thuế của hợp đồng trọn gói phải được giảm tương ứng với số thuế được giảm.",
        "impactNote": "Kiểu Việt phối hợp với Chủ đầu tư điều chỉnh giảm trừ số thuế GTGT 2% trên giá trị khối lượng thanh toán năm 2022 theo đúng luật."
      },
      {
        "topic": "Thời hạn nộp Phụ lục kê khai hàng hóa giảm thuế cùng Tờ khai thuế GTGT",
        "type": "added",
        "oldRule": "[Căn cứ: TT 80/2021] Chưa có phụ lục giảm thuế NQ 43.",
        "newRule": "[Căn cứ: Điều 1 Khoản 6 NĐ 15/2022] Bắt buộc nộp Phụ lục Mẫu 01 ban hành kèm theo Nghị định cùng với Tờ khai thuế GTGT Mẫu 01/GTGT để cơ quan thuế kiểm soát tổng số tiền thuế miễn giảm của cả nước.",
        "impactNote": "Kiểu Việt nộp đầy đủ phụ lục kê khai giảm thuế trên phần mềm HTKK, không để sót kỳ tính thuế nào."
      },
      {
        "topic": "Hiệu lực thi hành Nghị định 15/2022/NĐ-CP",
        "type": "added",
        "oldRule": "[Căn cứ: Các nghị định cũ] Chưa có chính sách tương tự.",
        "newRule": "[Căn cứ: Điều 3 NĐ 15/2022] Nghị định có hiệu lực thi hành từ ngày 01/02/2022 đến hết ngày 31/12/2022, đánh dấu bước ngoặt chính sách kích cầu tài khóa lớn nhất lịch sử.",
        "impactNote": "Kiểu Việt đã vận dụng thành công NĐ 15 để vượt qua giai đoạn khó khăn sau đại dịch, bứt phá tiến độ thi công các dự án trọng điểm."
      }
    ]
  },
  "nd-64-2024": {
    "decreeId": "nd-64-2024",
    "title": "Nghị định 64/2024/NĐ-CP",
    "category": "Gia hạn thời hạn nộp thuế (2024)",
    "compareWith": "Quy định thời hạn nộp thuế thông thường",
    "summary": "Nghị định 64/2024/NĐ-CP gia hạn thời hạn nộp thuế GTGT, thuế TNDN và tiền thuê đất trong năm 2024: Giữ lại dòng tiền cho doanh nghiệp mà không bị tính tiền chậm nộp 0,03%/ngày.",
    "items": [
      {
        "topic": "Gia hạn thời hạn nộp thuế GTGT đối với doanh nghiệp xây dựng đến 5 tháng (Điều 4)",
        "type": "modified",
        "oldRule": "[Căn cứ: Luật QLT 2019] Thuế GTGT phải nộp chậm nhất là ngày 20 của tháng tiếp theo (hoặc ngày cuối cùng của tháng đầu quý sau).",
        "newRule": "[Căn cứ: Điều 4 Khoản 1 NĐ 64/2024] Gia hạn thời hạn nộp thuế GTGT phát sinh từ tháng 5 đến tháng 9/2024 (hoặc Quý 2 và Quý 3/2024) thêm 05 tháng; người nộp thuế chỉ cần nộp Giấy đề nghị gia hạn một lần cho toàn bộ các kỳ.",
        "impactNote": "Kiểu Việt được giữ lại hàng chục tỷ đồng tiền thuế GTGT trong 5 tháng để tập trung mua sắm vật tư sắt thép xi măng thi công cao tốc."
      },
      {
        "topic": "Gia hạn thời hạn nộp thuế TNDN tạm nộp Quý 2 năm 2024 thêm 03 tháng (Điều 4)",
        "type": "modified",
        "oldRule": "[Căn cứ: NĐ 126/2020] Thuế TNDN tạm nộp Quý 2 phải nộp chậm nhất ngày 30/07/2024.",
        "newRule": "[Căn cứ: Điều 4 Khoản 2 NĐ 64/2024] Gia hạn thời hạn nộp thuế TNDN tạm nộp của Quý 2 năm 2024 thêm 03 tháng kể từ ngày kết thúc thời hạn nộp thuế theo quy định của pháp luật quản lý thuế (đến ngày 30/10/2024).",
        "impactNote": "Kiểu Việt điều chuyển nguồn tiền tạm nộp thuế TNDN Quý 2 để trả lương công nhân và ứng trước cho nhà thầu phụ."
      },
      {
        "topic": "Gia hạn thời hạn nộp tiền thuê đất năm 2024 thêm 06 tháng (Điều 4)",
        "type": "modified",
        "oldRule": "[Căn cứ: Luật Đất đai] Tiền thuê đất nộp 2 kỳ vào ngày 31/05 và 31/10 hàng năm.",
        "newRule": "[Căn cứ: Điều 4 Khoản 4 NĐ 64/2024] Gia hạn thời hạn nộp tiền thuê đất đối với 50% số tiền thuê đất phát sinh phải nộp năm 2024 của doanh nghiệp đang được Nhà nước cho thuê đất trực tiếp thêm 06 tháng kể từ ngày 31/05/2024.",
        "impactNote": "Kiểu Việt được hoãn nộp tiền thuê đất diện tích mỏ khoáng sản và trạm trộn bê tông tại Gia Lai, giảm đáng kể áp lực tài chính giữa năm."
      },
      {
        "topic": "Đối tượng áp dụng chính sách gia hạn: Ngành xây dựng và khai khoáng (Điều 3)",
        "type": "added",
        "oldRule": "[Căn cứ: NĐ cũ] Danh mục đối tượng gia hạn hạn chế.",
        "newRule": "[Căn cứ: Điều 3 Khoản 1 Điểm a NĐ 64/2024] Khẳng định rõ doanh nghiệp hoạt động trong lĩnh vực: Xây dựng công trình kỹ thuật dân dụng, xây dựng công trình giao thông và Khai thác khoáng sản thuộc đối tượng được gia hạn 100% các loại thuế trên.",
        "impactNote": "Công ty Cổ phần Kiểu Việt đáp ứng trọn vẹn cả 2 lĩnh vực cốt lõi (Xây dựng & Khai khoáng) được thụ hưởng tối đa chính sách gia hạn."
      },
      {
        "topic": "Thủ tục nộp Giấy đề nghị gia hạn bằng phương thức điện tử (Điều 5)",
        "type": "modified",
        "oldRule": "[Căn cứ: NĐ cũ] Nộp bản giấy tại bộ phận một cửa cơ quan thuế.",
        "newRule": "[Căn cứ: Điều 5 NĐ 64/2024] Người nộp thuế chỉ cần nộp 01 Giấy đề nghị gia hạn nộp thuế và tiền thuê đất (theo Mẫu ban hành kèm Nghị định) bằng phương thức điện tử qua Cổng thuedientu.gdt.gov.vn chậm nhất là ngày 30/09/2024.",
        "impactNote": "Kế toán Kiểu Việt nộp Giấy đề nghị gia hạn online ngay trong tháng 6/2024, hệ thống thuế tự động phê duyệt gia hạn mà không cần xét duyệt thủ công."
      },
      {
        "topic": "Không tính tiền chậm nộp thuế trong thời gian được gia hạn (Điều 4)",
        "type": "added",
        "oldRule": "[Căn cứ: Luật QLT] Nộp thuế sau hạn bị tính lãi phạt 0.03%/ngày.",
        "newRule": "[Căn cứ: Điều 4 Khoản 5 NĐ 64/2024] Cơ quan thuế không tính tiền chậm nộp đối với số tiền thuế và tiền thuê đất được gia hạn trong khoảng thời gian được gia hạn nộp thuế.",
        "impactNote": "Kiểu Việt tiết kiệm hàng trăm triệu đồng tiền lãi phạt chậm nộp trong thời gian 3-5 tháng được gia hạn."
      },
      {
        "topic": "Không áp dụng gia hạn đối với doanh nghiệp thuộc đối tượng cưỡng chế thuế (Điều 3)",
        "type": "added",
        "oldRule": "[Căn cứ: NĐ cũ] Quy định chưa rõ về doanh nghiệp nợ thuế cũ.",
        "newRule": "[Căn cứ: Điều 3 NĐ 64/2024] Doanh nghiệp có các khoản nợ thuế phát sinh trước thời kỳ gia hạn đang bị cưỡng chế thi hành quyết định hành chính thuế thì không được áp dụng chính sách gia hạn nộp thuế mới.",
        "impactNote": "Nhắc nhở Kiểu Việt duy trì thanh toán sạch sẽ các khoản thuế của các năm trước để bảo đảm quyền lợi gia hạn liên tục."
      },
      {
        "topic": "Trách nhiệm nộp đủ số tiền thuế được gia hạn đúng hạn chót (Điều 4)",
        "type": "modified",
        "oldRule": "[Căn cứ: NĐ cũ] Hết hạn gia hạn tiếp tục nợ.",
        "newRule": "[Căn cứ: Điều 4 NĐ 64/2024] Hết thời gian gia hạn (ngày 20/11 hoặc 20/12/2024), người nộp thuế phải nộp đủ 100% số tiền thuế được gia hạn vào NSNN; nếu không nộp sẽ bị tính tiền chậm nộp 0.03%/ngày và áp dụng cưỡng chế thuế.",
        "impactNote": "Phòng Tài chính Kiểu Việt lập kế hoạch dòng tiền, thanh toán dứt điểm toàn bộ số thuế được gia hạn vào đầu tháng 12/2024."
      },
      {
        "topic": "Quy định đối với chi nhánh, đơn vị phụ thuộc tại các địa phương khác (Điều 5)",
        "type": "added",
        "oldRule": "[Căn cứ: NĐ cũ] Mỗi chi nhánh phải tự nộp giấy đề nghị riêng.",
        "newRule": "[Căn cứ: Điều 5 Khoản 1 NĐ 64/2024] Trụ sở chính gửi Giấy đề nghị gia hạn cho cơ quan thuế quản lý trực tiếp; nếu chi nhánh hạch toán độc lập thì chi nhánh nộp riêng; nếu chi nhánh phụ thuộc thì trụ sở chính kê khai gia hạn chung.",
        "impactNote": "Kiểu Việt kê khai gia hạn tập trung cho các Ban chỉ huy gói thầu và chi nhánh mỏ vật liệu nhanh gọn, đồng bộ."
      },
      {
        "topic": "Hiệu lực thi hành Nghị định 64/2024/NĐ-CP",
        "type": "added",
        "oldRule": "[Căn cứ: NĐ 12/2023] Nghị định gia hạn năm 2023.",
        "newRule": "[Căn cứ: Điều 6 NĐ 64/2024] Nghị định có hiệu lực thi hành từ ngày 17/06/2024 đến hết ngày 31/12/2024.",
        "impactNote": "Chính sách tiếp sức tài khóa kịp thời, giúp Kiểu Việt duy trì năng lực thi công thần tốc vượt tiến độ các công trình cao tốc."
      }
    ]
  }
};
