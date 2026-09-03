import React, { useState } from 'react';
import { ArrowRightLeft, Sparkles, PlusCircle, RefreshCw, Trash2, Bot, Layers, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export interface DiffItem {
  topic: string;
  type: 'added' | 'modified' | 'removed';
  oldRule: string;
  newRule: string;
  impactNote: string;
}

export interface DecreeDiffData {
  decreeId: string;
  title: string;
  category: string;
  compareWith: string;
  summary: string;
  items: DiffItem[];
}

export const DIFF_DATABASE: Record<string, DecreeDiffData> = {
  "tt-99-2025": {
    "decreeId": "tt-99-2025",
    "title": "Thông tư 99/2025/TT-BTC",
    "category": "Kế toán doanh nghiệp",
    "compareWith": "Thông tư 200/2014/TT-BTC",
    "summary": "Thông tư 99/2025/TT-BTC hiện đại hóa hệ thống tài khoản kế toán, bãi bỏ các tài khoản trung gian rườm rà, áp dụng giá trị hợp lý (Fair Value) và tiệm cận chuẩn mực quốc tế IFRS.",
    "items": [
      {
        "topic": "Hệ thống tài khoản chi phí xây lắp & sản xuất",
        "type": "modified",
        "oldRule": "Bắt buộc theo dõi tách biệt 4 tài khoản 621 (NVL), 622 (Nhân công), 623 (Máy thi công), 627 (Sản xuất chung) rồi cuối tháng kết chuyển sang TK 154.",
        "newRule": "Cho phép doanh nghiệp tinh giản, linh hoạt gom nhóm theo dõi trực tiếp trên các tiểu khoản cấp 2 của TK 154 hoặc hạch toán tinh gọn.",
        "impactNote": "Kế toán Kiểu Việt giảm tải 40% khối lượng chứng từ kết chuyển định kỳ, quản lý giá thành từng gói thầu công trình trực quan hơn."
      },
      {
        "topic": "Ghi nhận theo Giá trị hợp lý (Fair Value)",
        "type": "added",
        "oldRule": "Chủ yếu hạch toán theo nguyên tắc giá gốc (Historical Cost), ít đánh giá lại tài sản.",
        "newRule": "Quy định cụ thể việc đánh giá lại tài sản tài chính, công cụ nợ theo giá trị thị trường tại ngày lập Báo cáo tài chính.",
        "impactNote": "Phản ánh trung thực giá trị tài sản và nguồn vốn của công ty khi huy động vốn đầu tư."
      },
      {
        "topic": "Xóa bỏ toàn bộ hệ thống tài khoản ngoài bảng (Loại 0)",
        "type": "removed",
        "oldRule": "Duy trì các tài khoản loại 0 (TK 001, 002, 004, 007...) để ghi đơn vật tư giữ hộ, tài sản thuê ngoài, ngoại tệ.",
        "newRule": "Bãi bỏ hoàn toàn việc ghi đơn trên tài khoản loại 0, chuyển sang quản lý chi tiết trên sổ kế toán nội bộ và thuyết minh trên BCTC.",
        "impactNote": "Phần mềm kế toán không còn bị lỗi lệch số dư kép - đơn."
      }
    ]
  },
  "tt-200-2014": {
    "decreeId": "tt-200-2014",
    "title": "Thông tư 200/2014/TT-BTC",
    "category": "Kế toán doanh nghiệp",
    "compareWith": "Quyết định 15/2006/QĐ-BTC",
    "summary": "Cột mốc lịch sử trao quyền tự chủ tối đa cho doanh nghiệp trong thiết kế chứng từ, mẫu sổ kế toán và phương pháp hạch toán linh hoạt.",
    "items": [
      {
        "topic": "Tính bắt buộc của mẫu biểu chứng từ kế toán",
        "type": "modified",
        "oldRule": "Bắt buộc phải áp dụng chuẩn xác theo 100% mẫu biểu chứng từ do Bộ Tài chính ban hành.",
        "newRule": "Mẫu chứng từ mang tính chất hướng dẫn. Doanh nghiệp được tự thiết kế mẫu phù hợp đặc thù, chỉ cần đáp ứng đủ 7 nội dung bắt buộc của Luật Kế toán.",
        "impactNote": "Kiểu Việt hoàn toàn chủ động thiết kế phiếu xuất kho vật tư, biên bản nghiệm thu khối lượng công trường theo mẫu riêng của công ty."
      },
      {
        "topic": "Hạch toán chênh lệch tỷ giá hối đoái (TK 413)",
        "type": "modified",
        "oldRule": "Treo chênh lệch tỷ giá giai đoạn trước hoạt động trên TK 413 rồi phân bổ dần tối đa 5 năm.",
        "newRule": "Toàn bộ chênh lệch tỷ giá phát sinh trong kỳ đều đưa ngay vào doanh thu tài chính (TK 515) hoặc chi phí tài chính (TK 635).",
        "impactNote": "Báo cáo KQKD phản ánh tức thì biến động ngoại tệ, không còn chi phí treo phân bổ."
      }
    ]
  },
  "tt-133-2016": {
    "decreeId": "tt-133-2016",
    "title": "Thông tư 133/2016/TT-BTC",
    "category": "Kế toán DNNVV",
    "compareWith": "Quyết định 48/2006/QĐ-BTC",
    "summary": "Chế độ kế toán dành riêng cho Doanh nghiệp nhỏ và vừa, cắt giảm tối đa thủ tục hành chính, không bắt buộc lập Báo cáo lưu chuyển tiền tệ.",
    "items": [
      {
        "topic": "Đơn giản hóa hệ thống tài khoản tập hợp chi phí",
        "type": "modified",
        "oldRule": "Vẫn duy trì các tài khoản loại 6 phức tạp.",
        "newRule": "Không sử dụng các tài khoản 621, 622, 623, 627. Toàn bộ chi phí sản xuất, thi công công trình tập hợp thẳng vào TK 154 (Chi phí SXKD dở dang).",
        "impactNote": "Rất phù hợp cho các nhà thầu phụ, tổ đội thi công nhỏ liên kết của Kiểu Việt hạch toán nhanh gọn."
      },
      {
        "topic": "Lập Báo cáo lưu chuyển tiền tệ (LCTT)",
        "type": "removed",
        "oldRule": "Bắt buộc nộp Báo cáo LCTT cùng Bảng cân đối kế toán và Báo cáo KQKD.",
        "newRule": "Không bắt buộc nộp Báo cáo LCTT cho cơ quan thuế (chỉ khuyến khích lập phục vụ quản trị).",
        "impactNote": "Giảm 50% áp lực lập BCTC cuối năm cho các công ty con quy mô nhỏ của Kiểu Việt."
      }
    ]
  },
  "tt-46-2025": {
    "decreeId": "tt-46-2025",
    "title": "Thông tư 46/2025/TT-BTC",
    "category": "Kế toán DNNVV (Sửa đổi)",
    "compareWith": "Thông tư 133/2016/TT-BTC",
    "summary": "Sửa đổi, bổ sung Chế độ kế toán doanh nghiệp nhỏ và vừa: Đồng bộ hóa với giao dịch số, hóa đơn điện tử và quy định kê khai thuế trực tuyến.",
    "items": [
      {
        "topic": "Số hóa chứng từ và lưu trữ điện tử",
        "type": "added",
        "oldRule": "Ưu tiên lưu trữ sổ sách và chứng từ giấy đóng tập theo niên độ kế toán.",
        "newRule": "Công nhận tính pháp lý của toàn bộ chứng từ số, chữ ký số nội bộ và sổ sách lưu trữ trên máy chủ đám mây an toàn.",
        "impactNote": "Kiểu Việt và các đối tác DNNVV có thể số hóa 100% tài liệu kế toán, tiết kiệm kho lưu trữ."
      },
      {
        "topic": "Điều chỉnh tiêu chí phân loại quy mô doanh nghiệp",
        "type": "modified",
        "oldRule": "Căn cứ cứng theo vốn điều lệ và số lao động đóng BHXH theo Nghị định 39/2018.",
        "newRule": "Cập nhật tiêu chí linh hoạt theo doanh thu bán hàng và tổng nguồn vốn, hỗ trợ doanh nghiệp chuyển tiếp lên áp dụng chuẩn kế toán lớn khi đủ điều kiện.",
        "impactNote": "Giúp ban lãnh đạo chủ động định hướng lộ trình nâng cấp hệ thống kế toán công ty."
      }
    ]
  },
  "tt-45-2013": {
    "decreeId": "tt-45-2013",
    "title": "Thông tư 45/2013/TT-BTC",
    "category": "Khấu hao TSCĐ",
    "compareWith": "Thông tư 203/2009/TT-BTC",
    "summary": "Quy định tiêu chuẩn nhận biết và khung thời gian trích khấu hao tài sản cố định (máy đào, máy ủi, trạm trộn bê tông, xe tải...).",
    "items": [
      {
        "topic": "Tiêu chuẩn nguyên giá ghi nhận TSCĐ",
        "type": "modified",
        "oldRule": "Tài sản có giá trị từ 10.000.000 đồng trở lên đã phải ghi nhận là TSCĐ.",
        "newRule": "Nâng mức nguyên giá lên từ 30.000.000 đồng trở lên mới đủ điều kiện là TSCĐ hữu hình hoặc vô hình.",
        "impactNote": "Các thiết bị công trường dưới 30 triệu (máy khoan, máy hàn, đầm cóc...) được đưa thẳng vào CCDC phân bổ qua TK 242 tối đa 3 năm."
      },
      {
        "topic": "Trích khấu hao nhanh cho máy móc xây dựng",
        "type": "added",
        "oldRule": "Khấu hao đều theo đường thẳng, điều kiện trích khấu hao nhanh rất ngặt nghèo.",
        "newRule": "Doanh nghiệp kinh doanh có hiệu quả kinh tế cao được quyền trích khấu hao nhanh tối đa 2 lần mức khấu hao đường thẳng.",
        "impactNote": "Kiểu Việt tận dụng khấu hao nhanh máy móc thi công trong các năm có lãi lớn để giảm số thuế TNDN phải nộp hợp pháp."
      }
    ]
  },
  "tt-48-2019": {
    "decreeId": "tt-48-2019",
    "title": "Thông tư 48/2019/TT-BTC",
    "category": "Trích lập dự phòng",
    "compareWith": "Thông tư 228/2009/TT-BTC",
    "summary": "Hướng dẫn trích lập và xử lý các khoản dự phòng giảm giá hàng tồn kho, tổn thất đầu tư, nợ phải thu khó đòi tại doanh nghiệp.",
    "items": [
      {
        "topic": "Mức trích lập dự phòng nợ phải thu khó đòi",
        "type": "modified",
        "oldRule": "Chưa quy định chi tiết tỷ lệ từng mốc thời gian quá hạn.",
        "newRule": "Quy định rõ 4 mốc: 30% (quá hạn từ 6 tháng đến dưới 1 năm), 50% (từ 1 đến dưới 2 năm), 70% (từ 2 đến dưới 3 năm), 100% (từ 3 năm trở lên).",
        "impactNote": "Kiểu Việt có cơ sở pháp lý vững chắc để trích dự phòng cho các khoản công nợ đọng kéo dài từ các chủ đầu tư, tính vào chi phí hợp lý."
      },
      {
        "topic": "Bãi bỏ dự phòng bảo hành công trình xây dựng theo TT 228",
        "type": "removed",
        "oldRule": "Cho phép trích lập dự phòng bảo hành công trình xây lắp tính vào chi phí được trừ khi xác định thuế TNDN.",
        "newRule": "Chỉ cho phép trích dự phòng đối với sản phẩm hàng hóa thông thường, công trình xây lắp chi phí bảo hành thực tế phát sinh kỳ nào hạch toán kỳ đó.",
        "impactNote": "Kế toán không trích trước chi phí bảo hành công trình nếu chưa phát sinh thực tế để tránh bị cơ quan thuế bóc tách."
      }
    ]
  },
  "tt-96-2015": {
    "decreeId": "tt-96-2015",
    "title": "Thông tư 96/2015/TT-BTC",
    "category": "Thuế TNDN",
    "compareWith": "Thông tư 78/2014/TT-BTC",
    "summary": "Cẩm nang cốt lõi về Chi phí được trừ và Chi phí không được trừ khi quyết toán thuế TNDN, bãi bỏ trần khống chế chi phí quảng cáo, tiếp thị.",
    "items": [
      {
        "topic": "Khống chế chi phí quảng cáo, tiếp thị, hoa hồng",
        "type": "removed",
        "oldRule": "Khống chế trần tối đa không quá 15% tổng chi phí được trừ.",
        "newRule": "Dỡ bỏ hoàn toàn trần 15%. Doanh nghiệp chi bao nhiêu quảng cáo, hội nghị, tiếp khách đều được tính vào chi phí hợp lý nếu có đủ hóa đơn hợp lệ.",
        "impactNote": "Tạo thuận lợi cho Kiểu Việt tiếp cận chủ đầu tư và quảng bá năng lực thi công công trình."
      },
      {
        "topic": "Chi phí phúc lợi cho người lao động",
        "type": "added",
        "oldRule": "Chưa có quy định cụ thể mức khống chế chi phúc lợi trực tiếp.",
        "newRule": "Cho phép tính vào chi phí được trừ các khoản phúc lợi (hiếu hỉ, sinh nhật, nghỉ mát, học phí con em) tối đa không quá 1 tháng lương bình quân thực tế.",
        "impactNote": "Kiểu Việt được chi tối đa 1 tháng lương bình quân cho chế độ phúc lợi nhân viên mà không lo bị xuất toán thuế."
      },
      {
        "topic": "Điều kiện chứng từ thanh toán không dùng tiền mặt",
        "type": "modified",
        "oldRule": "Hóa đơn từ 20 triệu trở lên bắt buộc thanh toán qua ngân hàng.",
        "newRule": "Quy định chặt chẽ: Hóa đơn mua hàng từng lần từ 20 triệu trở lên (đã gồm VAT) bắt buộc phải có ủy nhiệm chi hoặc chứng từ chuyển khoản từ tài khoản công ty.",
        "impactNote": "Tuyệt đối không dùng tài khoản cá nhân thanh toán các hóa đơn vật tư sắt thép xi măng từ 20 triệu."
      }
    ]
  },
  "tt-219-2013": {
    "decreeId": "tt-219-2013",
    "title": "Thông tư 219/2013/TT-BTC",
    "category": "Thuế GTGT",
    "compareWith": "Thông tư 06/2012/TT-BTC",
    "summary": "Xương sống hướng dẫn Luật Thuế Giá trị gia tăng: Căn cứ tính thuế, thuế suất 0%, 5%, 10% và nguyên tắc khấu trừ hoàn thuế GTGT đầu vào.",
    "items": [
      {
        "topic": "Thời điểm xác định thuế GTGT trong xây lắp",
        "type": "modified",
        "oldRule": "Xác định khi thu tiền của chủ đầu tư.",
        "newRule": "Thời điểm xác định thuế GTGT là thời điểm nghiệm thu, bàn giao công trình, hạng mục công trình hoặc khối lượng xây lắp hoàn thành, không phân biệt đã thu được tiền hay chưa.",
        "impactNote": "Kế toán Kiểu Việt phải xuất hóa đơn GTGT ngay khi ký biên bản nghiệm thu giai đoạn A-B, không được chờ chủ đầu tư giải ngân mới xuất."
      },
      {
        "topic": "Điều kiện hoàn thuế GTGT dự án đầu tư",
        "type": "added",
        "oldRule": "Hoàn thuế theo định kỳ tháng/quý khi lũy kế thuế đầu vào trên 200 triệu.",
        "newRule": "Quy định riêng cho dự án đầu tư mới: Thuế GTGT đầu vào chưa được khấu trừ từ 300 triệu đồng trở lên được xét hoàn thuế riêng.",
        "impactNote": "Giúp Kiểu Việt thu hồi dòng tiền thuế GTGT khi đầu tư xây dựng nhà máy, mua sắm dàn xe cơ giới mới."
      }
    ]
  },
  "tt-78-2021": {
    "decreeId": "tt-78-2021",
    "title": "Thông tư 78/2021/TT-BTC",
    "category": "Hóa đơn điện tử",
    "compareWith": "Thông tư 39/2014 & Thông tư 32/2011",
    "summary": "Quy định chi tiết thi hành Nghị định 123/2020: Mẫu số, ký hiệu hóa đơn (1C22TAA...), quy trình giải trình hóa đơn sai sót Mẫu 04/SS-HĐĐT.",
    "items": [
      {
        "topic": "Ký hiệu hóa đơn điện tử chuẩn hóa toàn quốc",
        "type": "added",
        "oldRule": "Ký hiệu do doanh nghiệp tự đặt theo hướng dẫn cũ (AA/11P, AB/12T...).",
        "newRule": "Chuẩn hóa ký hiệu: 1C (Hóa đơn có mã), 1K (Hóa đơn không mã), 2 ký tự năm (26), 1 ký tự loại hóa đơn (T: Doanh nghiệp, D: Đặc thù).",
        "impactNote": "Kiểu Việt sử dụng ký hiệu chuẩn xác khi cấu hình phần mềm hóa đơn điện tử."
      },
      {
        "topic": "Quy trình xử lý hóa đơn điện tử có sai sót",
        "type": "modified",
        "oldRule": "Lập biên bản hủy hóa đơn giấy, xuất lại số hóa đơn mới.",
        "newRule": "Gửi Thông báo sai sót Mẫu 04/SS-HĐĐT đến cơ quan thuế, sau đó chọn: Xuất hóa đơn điều chỉnh HOẶC xuất hóa đơn thay thế.",
        "impactNote": "Kế toán phải kiểm tra mã cơ quan thuế tiếp nhận Mẫu 04/SS thành công trước khi xuất hóa đơn thay thế."
      }
    ]
  },
  "tt-80-2021": {
    "decreeId": "tt-80-2021",
    "title": "Thông tư 80/2021/TT-BTC",
    "category": "Quản lý thuế & Kê khai",
    "compareWith": "Thông tư 156/2013/TT-BTC",
    "summary": "Hướng dẫn chi tiết Luật Quản lý thuế: Thủ tục khai thuế, nộp thuế, hoàn thuế và đặc biệt là quy tắc phân bổ nghĩa vụ thuế cho các công trình xây dựng vãng lai ngoại tỉnh.",
    "items": [
      {
        "topic": "Phân bổ thuế GTGT vãng lai xây dựng ngoại tỉnh",
        "type": "modified",
        "oldRule": "Nộp vãng lai 2% trên doanh thu xây dựng chưa thuế nếu công trình khác tỉnh đóng trụ sở.",
        "newRule": "Giảm tỷ lệ phân bổ xuống còn 1% trên doanh thu công trình xây dựng, lắp đặt chuyển giao ngoại tỉnh.",
        "impactNote": "Kiểu Việt (trụ sở Gia Lai) khi thi công công trình tại Bình Định, Kon Tum, Đắk Lắk chỉ phải nộp phân bổ 1% thay vì 2%, giảm áp lực đọng vốn."
      },
      {
        "topic": "Phân bổ thuế TNDN cho cơ sở phụ thuộc ngoại tỉnh",
        "type": "modified",
        "oldRule": "Tính theo tỷ lệ chi phí sản xuất kinh doanh của từng chi nhánh.",
        "newRule": "Quy định công thức phân bổ rõ ràng theo doanh thu hoặc tỷ lệ chi phí của địa bàn được hưởng ưu đãi thuế.",
        "impactNote": "Thuận tiện tính toán khi quyết toán thuế TNDN cuối năm giữa trụ sở chính và các ban điều hành công trường."
      }
    ]
  },
  "tt-111-2013": {
    "decreeId": "tt-111-2013",
    "title": "Thông tư 111/2013/TT-BTC",
    "category": "Thuế TNCN",
    "compareWith": "Thông tư 84/2008/TT-BTC",
    "summary": "Quy định chi tiết các khoản thu nhập chịu thuế, thu nhập được miễn thuế và các khoản phụ cấp khoán chi không tính vào thu nhập chịu thuế TNCN.",
    "items": [
      {
        "topic": "Khoán chi tiền ăn giữa ca, tiền trang phục",
        "type": "added",
        "oldRule": "Khống chế trần rất thấp (tiền ăn 450.000đ/tháng, trang phục 1.000.000đ/năm).",
        "newRule": "Tiền trang phục bằng tiền tối đa 5.000.000 đ/người/năm (bằng hiện vật không khống chế trần); tiền ăn ca theo quy định Bộ LĐ-TB&XH (hiện là 730.000đ/tháng).",
        "impactNote": "Kiểu Việt tối ưu hóa quy chế lương thưởng, chi đúng mức trần trang phục và ăn ca để giảm thuế TNCN cho kỹ sư và công nhân."
      },
      {
        "topic": "Khấu trừ thuế TNCN 10% lao động thời vụ",
        "type": "modified",
        "oldRule": "Khấu trừ 10% nếu có MST, 20% nếu không có MST đối với khoản chi từ 500.000đ.",
        "newRule": "Mọi khoản chi trả cho cá nhân không ký HĐLĐ từ 2.000.000 đ/lần trở lên phải khấu trừ 10% tại nguồn (trừ khi làm cam kết 08/CK-TNCN nếu đủ điều kiện).",
        "impactNote": "Áp dụng trực tiếp khi trả công cho thợ nề, thợ sắt thời vụ tại công trường xây dựng."
      }
    ]
  },
  "tt-152-2015": {
    "decreeId": "tt-152-2015",
    "title": "Thông tư 152/2015/TT-BTC",
    "category": "Thuế Tài nguyên",
    "compareWith": "Thông tư 105/2010/TT-BTC",
    "summary": "Hướng dẫn về Thuế Tài nguyên đối với khoáng sản kim loại, phi kim loại (đất san lấp, cát xây dựng, đá dăm, đá hộc phục vụ công trình xây lắp).",
    "items": [
      {
        "topic": "Căn cứ tính thuế tài nguyên khoáng sản khai thác",
        "type": "modified",
        "oldRule": "Tính theo sản lượng thực tế kê khai với biểu giá ước tính.",
        "newRule": "Bắt buộc áp dụng theo Khung giá tính thuế tài nguyên do UBND tỉnh ban hành (như QĐ 87/2025/QĐ-UBND tỉnh Gia Lai).",
        "impactNote": "Kiểu Việt khi khai thác mỏ đất, mỏ đá phục vụ công trình phải áp đúng bảng giá tính thuế tài nguyên của tỉnh sở tại."
      },
      {
        "topic": "Phương pháp quy đổi sản lượng khoáng sản nguyên khai",
        "type": "added",
        "oldRule": "Chưa có hệ số quy đổi thống nhất giữa thể tích đá nguyên khai và đá sau nghiền sàng.",
        "newRule": "Ban hành hệ số nở rời và công thức quy đổi từ thể tích đo đạc sang khối lượng thành phẩm.",
        "impactNote": "Tránh bị đoàn thanh tra Sở TN&MT truy thu thuế tài nguyên do sai số hệ số quy đổi mỏ."
      }
    ]
  },
  "tt-44-2017": {
    "decreeId": "tt-44-2017",
    "title": "Thông tư 44/2017/TT-BTC",
    "category": "Khung giá tính thuế tài nguyên",
    "compareWith": "Quy định các thời kỳ trước",
    "summary": "Ban hành Khung giá tính thuế tài nguyên đối với nhóm khoáng sản không kim loại làm vật liệu xây dựng thông thường trên toàn quốc.",
    "items": [
      {
        "topic": "Khung giá sàn và trần cho khoáng sản xây dựng",
        "type": "added",
        "oldRule": "Các địa phương tự xác định giá tính thuế tài nguyên dẫn đến chênh lệch lớn giữa các tỉnh giáp ranh.",
        "newRule": "Bộ Tài chính ban hành mức giá tối thiểu và tối đa cho từng nhóm: cát san lấp, cát vàng bê tông, đá xây dựng các loại.",
        "impactNote": "Kiểu Việt kiểm soát được chi phí thuế tài nguyên khi đấu thầu mỏ vật liệu tại các tỉnh Tây Nguyên."
      }
    ]
  },
  "tt-108-2025": {
    "decreeId": "tt-108-2025",
    "title": "Thông tư 108/2025/TT-BTC",
    "category": "BCTC hợp nhất cơ quan NN",
    "compareWith": "Chế độ báo cáo tài chính nhà nước cũ",
    "summary": "Quy định lập Báo cáo tài chính hợp nhất cho các cơ quan, đơn vị sự nghiệp công lập và dự án đầu tư công.",
    "items": [
      {
        "topic": "Chuẩn hóa quy trình hợp nhất nguồn vốn đầu tư công",
        "type": "modified",
        "oldRule": "Báo cáo quyết toán dự án đầu tư công hoàn thành riêng biệt với BCTC tổng thể.",
        "newRule": "Tích hợp số liệu vốn đầu tư xây dựng cơ bản vào BCTC hợp nhất của các Ban Quản lý dự án chuyên ngành.",
        "impactNote": "Hồ sơ quyết toán A-B của Kiểu Việt với các Ban QLDA được đối soát nhanh chóng hơn."
      }
    ]
  },
  "tt-24-2024-tt-btc": {
    "decreeId": "tt-24-2024-tt-btc",
    "title": "Thông tư 24/2024/TT-BTC",
    "category": "Kế toán Hành chính sự nghiệp",
    "compareWith": "Thông tư 107/2017/TT-BTC",
    "summary": "Thay thế Thông tư 107/2017/TT-BTC, cải cách toàn diện chế độ kế toán cho các cơ quan hành chính, đơn vị sự nghiệp công lập và Ban QLDA đầu tư.",
    "items": [
      {
        "topic": "Hệ thống tài khoản phản ánh nguồn vốn đầu tư XDCB",
        "type": "modified",
        "oldRule": "Quy định phân tán nguồn vốn ngân sách cấp và vốn đối ứng qua nhiều tài khoản trung gian.",
        "newRule": "Chuẩn hóa tài khoản theo dõi vốn đầu tư công, giải ngân theo từng mã dự án mã công trình.",
        "impactNote": "Tạo thuận lợi cho Kiểu Việt khi giải ngân các gói thầu vốn ngân sách nhà nước."
      }
    ]
  },
  "luat-109-2025-tncn": {
    "decreeId": "luat-109-2025-tncn",
    "title": "Luật Thuế TNCN 109/2025/QH15",
    "category": "Thuế TNCN",
    "compareWith": "Luật Thuế TNCN 2007 (sửa đổi 2012, 2014 & NQ 954/2020)",
    "summary": "Cải cách thuế TNCN lớn nhất trong 10 năm: Nâng mạnh giảm trừ gia cảnh lên 15.5tr/6.2tr và rút gọn từ 7 bậc xuống còn 5 bậc lũy tiến.",
    "items": [
      {
        "topic": "Mức giảm trừ gia cảnh bản thân",
        "type": "added",
        "oldRule": "11.000.000 đ/tháng (132 triệu đ/năm).",
        "newRule": "15.500.000 đ/tháng (186 triệu đ/năm), tăng 40.9%!",
        "impactNote": "Đại đa số công nhân viên Kiểu Việt có thu nhập dưới 15.5 triệu sẽ hoàn toàn không phải nộp thuế TNCN."
      },
      {
        "topic": "Mức giảm trừ cho mỗi người phụ thuộc",
        "type": "added",
        "oldRule": "4.400.000 đ/tháng/người.",
        "newRule": "6.200.000 đ/tháng/người, tăng 40.9%!",
        "impactNote": "Giảm bớt gánh nặng chi phí phụ dưỡng con cái và cha mẹ cho người lao động."
      },
      {
        "topic": "Rút gọn biểu thuế lũy tiến từng phần",
        "type": "modified",
        "oldRule": "7 bậc thuế: 5% (≤5tr), 10% (5-10tr), 15% (10-18tr), 20% (18-32tr), 25% (32-52tr), 30% (52-80tr), 35% (>80tr).",
        "newRule": "5 bậc thuế: 5% (≤10tr), 10% (10-30tr), 20% (30-60tr), 30% (60-100tr), 35% (>100tr). Bỏ hoàn toàn bậc 15% và bậc 25%!",
        "impactNote": "Giảm số thuế rõ rệt cho các kỹ sư, chỉ huy trưởng công trình có thu nhập từ 20 đến 50 triệu/tháng."
      }
    ]
  },
  "luat-67-2025-tndn": {
    "decreeId": "luat-67-2025-tndn",
    "title": "Luật Thuế TNDN 67/2025/QH15",
    "category": "Thuế TNDN",
    "compareWith": "Luật Thuế TNDN số 14/2008/QH12",
    "summary": "Hiện đại hóa toàn diện Luật Thuế Thu nhập doanh nghiệp, cập nhật quy tắc Thuế tối thiểu toàn cầu 15%, mở rộng diện ưu đãi thuế cho công nghệ xanh.",
    "items": [
      {
        "topic": "Thuế suất ưu đãi cho doanh nghiệp công nghệ & vật liệu xanh",
        "type": "added",
        "oldRule": "Chủ yếu ưu đãi cho địa bàn khó khăn hoặc khu công nghiệp.",
        "newRule": "Bổ sung gói ưu đãi thuế suất 10% - 15% cho doanh nghiệp áp dụng công nghệ xây dựng xanh, tiết kiệm năng lượng và giảm phát thải.",
        "impactNote": "Kiểu Việt có cơ hội tiếp cận gói ưu đãi thuế khi triển khai các dự án công trình xanh và vật liệu không nung."
      },
      {
        "topic": "Nguyên tắc chuyển lỗ kinh doanh",
        "type": "modified",
        "oldRule": "Chuyển lỗ liên tục không quá 5 năm kể từ năm tiếp sau năm phát sinh lỗ.",
        "newRule": "Chuẩn hóa quy trình bù trừ lỗ giữa các hoạt động kinh doanh (được bù trừ lỗ từ chuyển nhượng BĐS với lãi từ hoạt động SXKD thông thường).",
        "impactNote": "Tạo thuận lợi cho kế toán Kiểu Việt cân đối số thuế phải nộp khi công ty hoạt động đa ngành."
      }
    ]
  },
  "luat-56-2024": {
    "decreeId": "luat-56-2024",
    "title": "Luật sửa đổi số 56/2024/QH15",
    "category": "Sửa đổi Kế toán & Thuế",
    "compareWith": "Luật Kế toán 2015 & các Luật Thuế",
    "summary": "Một luật sửa đổi đồng thời 9 đạo luật tài chính quan trọng: Tháo gỡ các vướng mắc về chứng từ điện tử, phân cấp thẩm quyền tài chính công.",
    "items": [
      {
        "topic": "Giá trị pháp lý chứng từ kế toán số",
        "type": "added",
        "oldRule": "Chứng từ điện tử khi chuyển đổi sang chứng từ giấy phải có chữ ký tươi của người đại diện.",
        "newRule": "Chứng từ điện tử có giá trị độc lập và tương đương chứng từ giấy gốc, không cần in lưu bản cứng nếu đáp ứng chữ ký số.",
        "impactNote": "Giúp Kiểu Việt giảm bớt hàng ngàn trang in chứng từ kế toán mỗi năm."
      }
    ]
  },
  "luat-54-2024-khoangsan": {
    "decreeId": "luat-54-2024-khoangsan",
    "title": "Luật Địa chất và Khoáng sản 54/2024/QH15",
    "category": "Luật Khoáng sản 2024",
    "compareWith": "Luật Khoáng sản số 60/2010/QH12",
    "summary": "Phân nhóm 4 nhóm khoáng sản, cải cách thủ tục cấp phép mỏ vật liệu xây dựng thông thường phục vụ các công trình hạ tầng giao thông.",
    "items": [
      {
        "topic": "Phân loại 4 nhóm khoáng sản theo tính chất",
        "type": "added",
        "oldRule": "Chỉ phân biệt khoáng sản kim loại và phi kim loại.",
        "newRule": "Phân thành 4 nhóm rõ ràng (Nhóm IV là đất đá cát sỏi vật liệu xây dựng thông thường), thủ tục cấp phép nhóm IV được cắt giảm 50% thời gian.",
        "impactNote": "Tạo điều kiện thuận lợi cho Kiểu Việt xin cấp mỏ đất đắp mỏ đá phục vụ các dự án giao thông cấp bách."
      }
    ]
  },
  "luat-41-2024": {
    "decreeId": "luat-41-2024",
    "title": "Luật Bảo hiểm xã hội số 41/2024/QH15",
    "category": "Bảo hiểm xã hội 2024",
    "compareWith": "Luật Bảo hiểm xã hội số 58/2014/QH13",
    "summary": "Cải cách chế độ BHXH (hiệu lực từ 01/07/2025): Giảm thời gian đóng tối thiểu từ 20 năm xuống 15 năm để hưởng lương hưu.",
    "items": [
      {
        "topic": "Thời gian đóng BHXH tối thiểu để hưởng lương hưu",
        "type": "modified",
        "oldRule": "Bắt buộc đóng tối thiểu đủ 20 năm BHXH.",
        "newRule": "Giảm xuống chỉ cần đóng tối thiểu đủ 15 năm BHXH là đủ điều kiện hưởng lương hưu hàng tháng khi đến tuổi nghỉ hưu.",
        "impactNote": "Rất nhiều công nhân xây dựng lớn tuổi của Kiểu Việt có cơ hội nhận lương hưu thay vì rút BHXH 1 lần."
      },
      {
        "topic": "Chế độ trợ cấp thai sản cho lao động không đủ điều kiện đóng BHXH",
        "type": "added",
        "oldRule": "Chỉ lao động đóng BHXH từ đủ 6 tháng mới có chế độ.",
        "newRule": "Bổ sung trợ cấp thai sản do ngân sách nhà nước bảo đảm cho lao động nữ tham gia BHXH tự nguyện.",
        "impactNote": "Chính sách an sinh xã hội nhân văn cho người lao động."
      }
    ]
  },
  "luat-gd-dien-tu-20-2023": {
    "decreeId": "luat-gd-dien-tu-20-2023",
    "title": "Luật Giao dịch điện tử số 20/2023/QH15",
    "category": "Giao dịch điện tử",
    "compareWith": "Luật Giao dịch điện tử số 51/2005/QH11",
    "summary": "Khung pháp lý vững chắc cho chữ ký số, hợp đồng điện tử và dữ liệu kế toán số hóa trên không gian mạng.",
    "items": [
      {
        "topic": "Giá trị pháp lý của chữ ký số chuyên dùng và công cộng",
        "type": "modified",
        "oldRule": "Quy định chung chung, còn nhiều nghi ngại khi đối soát tại tòa án hoặc cơ quan thuế.",
        "newRule": "Quy định chữ ký số an toàn có giá trị tương đương chữ ký tay và con dấu đóng dấu đỏ của pháp nhân.",
        "impactNote": "Hợp đồng thi công xây dựng ký online qua chữ ký số giữa Kiểu Việt và Chủ đầu tư có hiệu lực tuyệt đối."
      }
    ]
  },
  "luat-thue-xnk-107-2016": {
    "decreeId": "luat-thue-xnk-107-2016",
    "title": "Luật Thuế XNK số 107/2016/QH13",
    "category": "Thuế Xuất nhập khẩu",
    "compareWith": "Luật Thuế Xuất nhập khẩu số 45/2005/QH11",
    "summary": "Quy định thuế quan, miễn thuế thiết bị công nghệ tạo tài sản cố định cho dự án đầu tư xây dựng.",
    "items": [
      {
        "topic": "Miễn thuế nhập khẩu máy móc thiết bị tạo TSCĐ",
        "type": "added",
        "oldRule": "Thủ tục xét miễn thuế phức tạp, phải xin xác nhận từ nhiều bộ ngành.",
        "newRule": "Miễn thuế nhập khẩu trực tiếp cho dây chuyền máy móc công nghệ trong nước chưa sản xuất được để tạo TSCĐ của dự án ưu đãi đầu tư.",
        "impactNote": "Kiểu Việt tận dụng khi nhập khẩu trạm nghiền sàng đá hoặc thiết bị thi công hiện đại."
      }
    ]
  },
  "luat-ke-toan-2015": {
    "decreeId": "luat-ke-toan-2015",
    "title": "Luật Kế toán số 88/2015/QH13",
    "category": "Luật Kế toán",
    "compareWith": "Luật Kế toán số 03/2003/QH11",
    "summary": "Luật nền tảng điều chỉnh toàn bộ công tác kế toán Việt Nam, công nhận nguyên tắc Giá trị hợp lý và kiểm soát nội bộ bắt buộc.",
    "items": [
      {
        "topic": "Nguyên tắc Giá trị hợp lý (Fair Value)",
        "type": "added",
        "oldRule": "Chỉ thừa nhận duy nhất nguyên tắc giá gốc (Historical Cost).",
        "newRule": "Chính thức đưa nguyên tắc Giá trị hợp lý vào luật làm căn cứ đánh giá lại tài sản theo giá trị thị trường.",
        "impactNote": "Mở đường cho hệ thống Thông tư 99/2025 sau này."
      },
      {
        "topic": "Hệ thống kiểm soát nội bộ",
        "type": "added",
        "oldRule": "Chưa quy định trách nhiệm thiết lập kiểm soát nội bộ.",
        "newRule": "Bắt buộc người đại diện pháp luật phải tổ chức xây dựng và duy trì hệ thống kiểm soát nội bộ phòng ngừa gian lận tài chính.",
        "impactNote": "Ban Giám đốc Kiểu Việt phải ban hành quy chế kiểm soát chi phí và phê duyệt tài chính rõ ràng."
      }
    ]
  },
  "luat-quan-ly-thue-2019": {
    "decreeId": "luat-quan-ly-thue-2019",
    "title": "Luật Quản lý thuế số 38/2019/QH14",
    "category": "Quản lý thuế",
    "compareWith": "Luật Quản lý thuế số 78/2006/QH11",
    "summary": "Hiện đại hóa toàn diện công tác quản lý thuế, giao dịch điện tử 100%, kéo dài hạn nộp quyết toán thuế TNCN và quy định lãi phạt chậm nộp 0.03%/ngày.",
    "items": [
      {
        "topic": "Thời hạn nộp hồ sơ quyết toán thuế năm",
        "type": "modified",
        "oldRule": "Chậm nhất là ngày thứ 90 kể từ ngày kết thúc năm tài chính cho cả tổ chức và cá nhân.",
        "newRule": "Tổ chức nộp chậm nhất là ngày cuối cùng của tháng thứ 3; cá nhân tự quyết toán được kéo dài thêm 1 tháng (chậm nhất ngày cuối tháng thứ 4 - 30/04).",
        "impactNote": "Kế toán Kiểu Việt có thêm 30 ngày để tập trung hỗ trợ người lao động quyết toán thuế TNCN sau khi xong quyết toán doanh nghiệp."
      },
      {
        "topic": "Mức tiền phạt chậm nộp thuế 0.03%/ngày",
        "type": "modified",
        "oldRule": "Từng áp dụng 0.05% hoặc 0.07%/ngày tùy thời kỳ.",
        "newRule": "Thống nhất áp dụng mức 0.03%/ngày tính trên số tiền thuế chậm nộp.",
        "impactNote": "Đã tích hợp trong Máy tính Tiền phạt Chậm nộp tại mục Tiện ích của hệ thống Kiểu Việt."
      }
    ]
  },
  "luat-thue-tndn": {
    "decreeId": "luat-thue-tndn",
    "title": "Luật Thuế TNDN 14/2008/QH12 (sửa đổi)",
    "category": "Thuế TNDN",
    "compareWith": "Luật Thuế TNDN năm 2003",
    "summary": "Hạ thuế suất phổ thông từ 28% xuống 25%, sau đó xuống 22% và hiện nay là 20%, tạo động lực phát triển cho doanh nghiệp.",
    "items": [
      {
        "topic": "Thuế suất thuế TNDN phổ thông",
        "type": "modified",
        "oldRule": "Áp dụng mức thuế suất 28%.",
        "newRule": "Giảm xuống mức 20% đối với hầu hết các ngành sản xuất, xây lắp và kinh doanh thương mại dịch vụ.",
        "impactNote": "Tiết kiệm đáng kể nghĩa vụ thuế thu nhập doanh nghiệp cho công ty Kiểu Việt."
      }
    ]
  },
  "luat-thue-gtgt": {
    "decreeId": "luat-thue-gtgt",
    "title": "Luật Thuế GTGT 13/2008/QH12 (sửa đổi)",
    "category": "Thuế GTGT",
    "compareWith": "Luật Thuế GTGT năm 1997",
    "summary": "Hoàn thiện cơ chế khấu trừ thuế đầu vào, phân định rõ các nhóm đối tượng không chịu thuế và chịu thuế suất 0%, 5%, 10%.",
    "items": [
      {
        "topic": "Phương pháp tính thuế khấu trừ",
        "type": "modified",
        "oldRule": "Nhiều thủ tục hoàn thuế phức tạp và điều kiện khấu trừ khắt khe.",
        "newRule": "Cho phép doanh nghiệp có doanh thu từ 1 tỷ đồng trở lên hoặc tự nguyện đăng ký được áp dụng phương pháp khấu trừ thuế.",
        "impactNote": "Kiểu Việt khấu trừ toàn bộ VAT đầu vào của máy móc, xe tải và vật liệu xây dựng."
      }
    ]
  },
  "blld-45-2019": {
    "decreeId": "blld-45-2019",
    "title": "Bộ luật Lao động 45/2019/QH14",
    "category": "Bộ luật Lao động",
    "compareWith": "Bộ luật Lao động số 10/2012/QH13",
    "summary": "Chỉ còn 2 loại Hợp đồng lao động (bãi bỏ HĐLĐ mùa vụ), tăng tuổi nghỉ hưu theo lộ trình và thêm 1 ngày nghỉ lễ Quốc khánh 02/09.",
    "items": [
      {
        "topic": "Bãi bỏ hình thức Hợp đồng lao động mùa vụ",
        "type": "removed",
        "oldRule": "Cho phép ký Hợp đồng lao động theo mùa vụ hoặc theo một công việc nhất định dưới 12 tháng.",
        "newRule": "Chỉ còn 2 loại HĐLĐ: Không xác định thời hạn và Xác định thời hạn (tối đa 36 tháng).",
        "impactNote": "Kế toán Kiểu Việt phải chuyển toàn bộ thợ công trường sang ký HĐLĐ xác định thời hạn kèm thỏa thuận khoán việc hợp lệ."
      },
      {
        "topic": "Tăng thêm 1 ngày nghỉ lễ Quốc khánh 02/09",
        "type": "added",
        "oldRule": "Chỉ nghỉ 1 ngày (ngày 02/09).",
        "newRule": "Nghỉ 2 ngày (ngày 02/09 và 1 ngày liền kề trước hoặc sau).",
        "impactNote": "Tính lương làm thêm giờ 300% khi công nhân trực thi công trong những ngày nghỉ lễ này."
      }
    ]
  },
  "nd-293-2025": {
    "decreeId": "nd-293-2025",
    "title": "Nghị định 293/2025/NĐ-CP",
    "category": "Lương tối thiểu vùng",
    "compareWith": "Nghị định 38/2022/NĐ-CP",
    "summary": "Tăng lương tối thiểu vùng từ năm 2026 thêm 6%, nâng mức sàn tính đóng BHTN cho người lao động.",
    "items": [
      {
        "topic": "Mức lương tối thiểu tháng tại các vùng",
        "type": "modified",
        "oldRule": "Vùng 1: 4.680.000đ; Vùng 2: 4.160.000đ; Vùng 3: 3.640.000đ; Vùng 4: 3.250.000đ.",
        "newRule": "Vùng 1: 4.960.000đ; Vùng 2: 4.410.000đ; Vùng 3: 3.860.000đ; Vùng 4: 3.450.000đ (tăng 6%).",
        "impactNote": "Mức lương đóng BHXH thấp nhất cho công nhân Kiểu Việt không được thấp hơn mức lương tối thiểu vùng tương ứng."
      }
    ]
  },
  "nd-180-2024-nd-cp": {
    "decreeId": "nd-180-2024-nd-cp",
    "title": "Nghị định 180/2024/NĐ-CP",
    "category": "Giảm thuế GTGT 2%",
    "compareWith": "Nghị quyết 174/2024/QH15",
    "summary": "Chính sách giảm thuế GTGT từ 10% xuống 8% áp dụng cho nhóm hàng hóa, dịch vụ đang chịu thuế suất 10% (trừ BĐS, tài chính, khoáng sản).",
    "items": [
      {
        "topic": "Giảm 2% thuế GTGT đầu ra và đầu vào",
        "type": "added",
        "oldRule": "Áp dụng mức thuế suất 10% theo quy định chung.",
        "newRule": "Giảm còn 8% đối với các dịch vụ xây lắp, thi công hoàn thiện công trình không gắn liền với chuyển nhượng bất động sản.",
        "impactNote": "Kế toán xuất hóa đơn xây lắp thuế suất 8% theo đúng phụ lục danh mục hàng hóa được giảm thuế."
      }
    ]
  },
  "nd-193-2025-khoangsan": {
    "decreeId": "nd-193-2025-khoangsan",
    "title": "Nghị định 193/2025/NĐ-CP",
    "category": "Địa chất & Khoáng sản 2025",
    "compareWith": "Nghị định 158/2016/NĐ-CP",
    "summary": "Quy định chi tiết thi hành Luật Địa chất và Khoáng sản 2024: Đấu giá quyền khai thác mỏ vật liệu xây dựng thông thường, quản lý đất san lấp.",
    "items": [
      {
        "topic": "Quy trình cấp phép khai thác đất san lấp cho công trình giao thông",
        "type": "modified",
        "oldRule": "Phải lập dự án đầu tư và đánh giá tác động môi trường (ĐTM) kéo dài 12 - 18 tháng.",
        "newRule": "Cơ chế đặc thù cho phép khai thác mỏ đất phục vụ công trình trọng điểm theo hồ sơ rút gọn, nộp tiền cấp quyền sau.",
        "impactNote": "Giúp Kiểu Việt chủ động nguồn đất đắp nền đường, không lo thiếu vật tư khi đẩy nhanh tiến độ."
      }
    ]
  },
  "nd-70-2025": {
    "decreeId": "nd-70-2025",
    "title": "Nghị định 70/2025/NĐ-CP",
    "category": "Hóa đơn chứng từ (Sửa đổi)",
    "compareWith": "Nghị định 123/2020/NĐ-CP",
    "summary": "Sửa đổi, bổ sung một số điều của Nghị định 123/2020 về hóa đơn, chứng từ: Quy định về hóa đơn điện tử khởi tạo từ máy tính tiền và chứng từ khấu trừ TNCN điện tử.",
    "items": [
      {
        "topic": "Bắt buộc sử dụng Chứng từ khấu trừ thuế TNCN điện tử",
        "type": "modified",
        "oldRule": "Doanh nghiệp vẫn được mua và cấp chứng từ khấu trừ thuế TNCN giấy từ cơ quan thuế.",
        "newRule": "Chấm dứt hoàn toàn chứng từ giấy, 100% chứng từ khấu trừ thuế TNCN cho lao động thời vụ phải xuất dưới dạng điện tử.",
        "impactNote": "Kiểu Việt cấu hình phần mềm chứng từ khấu trừ TNCN điện tử để cấp cho công nhân thời vụ khi quyết toán thuế."
      }
    ]
  },
  "nd-27-2023": {
    "decreeId": "nd-27-2023",
    "title": "Nghị định 27/2023/NĐ-CP",
    "category": "Phí BVMT khoáng sản",
    "compareWith": "Nghị định 164/2016/NĐ-CP",
    "summary": "Quy định mức thu, chế độ thu, nộp, quản lý và sử dụng phí bảo vệ môi trường đối với khai thác khoáng sản.",
    "items": [
      {
        "topic": "Mức thu phí BVMT đối với đất sỏi, đá xây dựng",
        "type": "modified",
        "oldRule": "Mức phí thấp từ 1.000 đ đến 3.000 đ/m3.",
        "newRule": "Khung mức phí tăng lên: Đất khai thác san lấp 1.000 - 2.000 đ/m3; Đá sỏi xây dựng 5.000 - 10.000 đ/m3.",
        "impactNote": "Kế toán dự toán Kiểu Việt phải tính đủ chi phí phí BVMT vào đơn giá dự thầu mỏ vật liệu."
      }
    ]
  },
  "nd-67-2019": {
    "decreeId": "nd-67-2019",
    "title": "Nghị định 67/2019/NĐ-CP",
    "category": "Tiền cấp quyền khai thác khoáng sản",
    "compareWith": "Nghị định 203/2013/NĐ-CP",
    "summary": "Quy định phương pháp tính, mức thu tiền cấp quyền khai thác khoáng sản (đá, cát, đất đắp công trình xây dựng).",
    "items": [
      {
        "topic": "Công thức tính tiền cấp quyền (M)",
        "type": "modified",
        "oldRule": "Chưa trừ chi phí bồi thường giải phóng mặt bằng khu vực mỏ.",
        "newRule": "Cho phép khấu trừ chi phí bồi thường GPMB vào số tiền cấp quyền khai thác khoáng sản phải nộp.",
        "impactNote": "Tiết kiệm dòng tiền đóng nộp ngân sách cho mỏ khai thác của công ty."
      }
    ]
  },
  "nd-22-2020": {
    "decreeId": "nd-22-2020",
    "title": "Nghị định 22/2020/NĐ-CP",
    "category": "Lệ phí môn bài (Sửa đổi)",
    "compareWith": "Nghị định 139/2016/NĐ-CP",
    "summary": "Sửa đổi, bổ sung các trường hợp được miễn lệ phí môn bài trong năm đầu thành lập hoặc mở thêm chi nhánh.",
    "items": [
      {
        "topic": "Miễn lệ phí môn bài năm đầu thành lập",
        "type": "added",
        "oldRule": "Doanh nghiệp mới thành lập nộp 50% nếu thành lập 6 tháng cuối năm, 100% nếu 6 tháng đầu năm.",
        "newRule": "Miễn 100% lệ phí môn bài trong năm đầu thành lập (từ ngày 01/01 đến ngày 31/12); các chi nhánh thành lập trong thời gian này cũng được miễn.",
        "impactNote": "Áp dụng cho các chi nhánh hoặc văn phòng điều hành công trình mới mở của Kiểu Việt."
      }
    ]
  },
  "nd-139-2016": {
    "decreeId": "nd-139-2016",
    "title": "Nghị định 139/2016/NĐ-CP",
    "category": "Lệ phí môn bài",
    "compareWith": "Pháp lệnh Phí và Lệ phí cũ",
    "summary": "Chính thức đổi tên từ Thuế môn bài sang Lệ phí môn bài, quy định 3 bậc lệ phí môn bài theo vốn điều lệ.",
    "items": [
      {
        "topic": "3 Bậc mức thu lệ phí môn bài",
        "type": "added",
        "oldRule": "Phân chia thành nhiều bậc nhỏ phức tạp theo vốn đăng ký cũ.",
        "newRule": "Bậc 1 (vốn trên 10 tỷ): 3.000.000 đ/năm; Bậc 2 (vốn từ 10 tỷ trở xuống): 2.000.000 đ/năm; Bậc 3 (Chi nhánh, VPĐD): 1.000.000 đ/năm.",
        "impactNote": "Hạn chót nộp lệ phí môn bài hàng năm là ngày 30/01."
      }
    ]
  },
  "nd-174-2016": {
    "decreeId": "nd-174-2016",
    "title": "Nghị định 174/2016/NĐ-CP",
    "category": "Hướng dẫn Luật Kế toán",
    "compareWith": "Nghị định 128/2004/NĐ-CP",
    "summary": "Hướng dẫn chi tiết Luật Kế toán: Tiêu chuẩn bổ nhiệm Kế toán trưởng, quy định chữ ký điện tử và lưu trữ chứng từ.",
    "items": [
      {
        "topic": "Tiêu chuẩn và điều kiện Kế toán trưởng",
        "type": "modified",
        "oldRule": "Chỉ yêu cầu chứng chỉ bồi dưỡng kế toán trưởng chung chung.",
        "newRule": "Quy định thời gian công tác thực tế tối thiểu: 2 năm đối với chuyên môn đại học, 3 năm đối với trung cấp/cao đẳng và chứng chỉ bồi dưỡng KTT còn hạn.",
        "impactNote": "Căn cứ bổ nhiệm Kế toán trưởng hợp pháp cho Công ty Kiểu Việt."
      }
    ]
  },
  "nd-41-2018": {
    "decreeId": "nd-41-2018",
    "title": "Nghị định 41/2018/NĐ-CP",
    "category": "Xử phạt Kế toán – Kiểm toán",
    "compareWith": "Nghị định 105/2013/NĐ-CP",
    "summary": "Tăng mạnh mức xử phạt vi phạm hành chính trong lĩnh vực kế toán, chữ ký trên chứng từ, làm sai lệch sổ sách kế toán.",
    "items": [
      {
        "topic": "Xử phạt hành vi ký khống hoặc tẩy xóa chứng từ",
        "type": "added",
        "oldRule": "Phạt tiền từ 1 đến 3 triệu đồng.",
        "newRule": "Phạt từ 10 đến 20 triệu đồng nếu giả mạo chữ ký hoặc tẩy xóa sửa chữa số liệu trên chứng từ kế toán.",
        "impactNote": "Kiểm soát chặt chẽ chữ ký của thủ kho, thủ quỹ và chỉ huy trưởng công trình trên phiếu giao nhận vật tư."
      }
    ]
  },
  "nd-132-2020": {
    "decreeId": "nd-132-2020",
    "title": "Nghị định 132/2020/NĐ-CP",
    "category": "Giao dịch liên kết",
    "compareWith": "Nghị định 20/2017/NĐ-CP",
    "summary": "Nới trần khống chế chi phí lãi vay từ 20% lên 30% EBITDA trong giao dịch liên kết và cho phép chuyển tiếp chi phí lãi vay sang các năm sau.",
    "items": [
      {
        "topic": "Trần khống chế chi phí lãi vay được trừ",
        "type": "modified",
        "oldRule": "Khống chế trần chi phí lãi vay thuần không vượt quá 20% EBITDA.",
        "newRule": "Nâng trần lên 30% EBITDA, phần lãi vay vượt mức được chuyển tiếp sang 5 năm tiếp theo.",
        "impactNote": "Rất có lợi cho Kiểu Việt khi vay vốn ngân hàng để thi công các dự án quy mô lớn có tài sản bảo đảm của các bên liên kết."
      }
    ]
  },
  "nd-126-2020": {
    "decreeId": "nd-126-2020",
    "title": "Nghị định 126/2020/NĐ-CP",
    "category": "Hướng dẫn Quản lý thuế",
    "compareWith": "Nghị định 83/2013/NĐ-CP",
    "summary": "Quy định tạm nộp 80% thuế TNDN của 4 quý, trách nhiệm của ngân hàng cung cấp sao kê tài khoản cho cơ quan thuế.",
    "items": [
      {
        "topic": "Tỷ lệ tạm nộp thuế TNDN các quý trong năm",
        "type": "modified",
        "oldRule": "Tạm nộp đủ 80% số thuế TNDN cả năm trước ngày 15/11 (quý 3).",
        "newRule": "Sửa đổi thuận lợi hơn: Tổng số thuế TNDN tạm nộp của 4 quý không được thấp hơn 80% số thuế phải nộp theo quyết toán năm.",
        "impactNote": "Kế toán Kiểu Việt có thời gian đến ngày 30/01 năm sau để nộp đủ 80% thuế TNDN tạm nộp, tránh bị phạt chậm nộp."
      }
    ]
  },
  "nd-15-2022": {
    "decreeId": "nd-15-2022",
    "title": "Nghị định 15/2022/NĐ-CP",
    "category": "Giảm thuế GTGT 2022",
    "compareWith": "Nghị quyết 43/2022/QH15",
    "summary": "Gói hỗ trợ tài khóa đầu tiên giảm 2% thuế GTGT kích cầu kinh tế phục hồi sau đại dịch Covid-19.",
    "items": [
      {
        "topic": "Căn cứ áp dụng thuế suất 8%",
        "type": "added",
        "oldRule": "Áp dụng đồng loạt mức 10%.",
        "newRule": "Giảm thuế suất từ 10% xuống 8% cho các nhóm vật liệu, dịch vụ xây lắp thông thường.",
        "impactNote": "Tiền đề cho các chính sách giảm thuế 2% liên tục các năm 2023, 2024, 2025, 2026."
      }
    ]
  },
  "nd-64-2024": {
    "decreeId": "nd-64-2024",
    "title": "Nghị định 64/2024/NĐ-CP",
    "category": "Gia hạn nộp thuế & tiền thuê đất",
    "compareWith": "Nghị định 12/2023/NĐ-CP",
    "summary": "Chính sách gia hạn nộp thuế GTGT (5 tháng), thuế TNDN (3 tháng) và tiền thuê đất 50% trong năm 2024.",
    "items": [
      {
        "topic": "Gia hạn thời hạn nộp thuế GTGT và TNDN",
        "type": "added",
        "oldRule": "Nộp theo thời hạn quy định thông thường (ngày 20 hoặc ngày cuối tháng tiếp sau).",
        "newRule": "Gia hạn thêm 3 - 5 tháng tiền thuế GTGT và thuế TNDN tạm nộp quý 1, quý 2.",
        "impactNote": "Giúp Kiểu Việt giữ lại dòng tiền mặt phục vụ thi công công trình mà không bị tính tiền chậm nộp."
      }
    ]
  },
  "nd-218-2013": {
    "decreeId": "nd-218-2013",
    "title": "Nghị định 218/2013/NĐ-CP",
    "category": "Hướng dẫn Thuế TNDN",
    "compareWith": "Nghị định 124/2008/NĐ-CP",
    "summary": "Khung pháp lý nền tảng quy định chi tiết thi hành Luật Thuế TNDN, các khoản thu nhập được miễn thuế và ưu đãi thuế suất.",
    "items": [
      {
        "topic": "Xác định doanh thu tính thuế TNDN xây lắp",
        "type": "modified",
        "oldRule": "Doanh thu xây lắp xác định theo số tiền thực thu.",
        "newRule": "Doanh thu là giá trị công trình, hạng mục công trình nghiệm thu bàn giao được chủ đầu tư chấp thuận.",
        "impactNote": "Nguyên tắc hạch toán doanh thu tương ứng với chi phí dở dang trong cùng một kỳ kế toán."
      }
    ]
  },
  "qd-87-2025-gialai": {
    "decreeId": "qd-87-2025-gialai",
    "title": "Quyết định 87/2025/QĐ-UBND tỉnh Gia Lai",
    "category": "Bảng giá thuế tài nguyên Gia Lai",
    "compareWith": "Quyết định năm 2024 của UBND tỉnh Gia Lai",
    "summary": "Bảng giá tính thuế tài nguyên năm 2026 áp dụng trên địa bàn tỉnh Gia Lai đối với đá xây dựng, cát sỏi, đất san lấp.",
    "items": [
      {
        "topic": "Bảng giá tính thuế tài nguyên đất đắp và đá xây dựng",
        "type": "modified",
        "oldRule": "Áp dụng theo khung giá năm 2024.",
        "newRule": "Cập nhật đơn giá tính thuế tài nguyên theo sát giá thị trường cung ứng vật liệu tại các huyện và TP. Pleiku.",
        "impactNote": "Kế toán mỏ Kiểu Việt tại Gia Lai bắt buộc dùng đúng bảng giá này để kê khai thuế tài nguyên hàng tháng."
      }
    ]
  },
  "vas-01": {
    "decreeId": "vas-01",
    "title": "VAS 01 - Chuẩn mực chung",
    "category": "Chuẩn mực kế toán",
    "compareWith": "Hệ thống định khoản truyền thống cũ",
    "summary": "Thiết lập 7 nguyên tắc kế toán cơ bản: Dồn tích, Hoạt động liên tục, Giá gốc, Phù hợp, Nhất quán, Thận trọng và Trọng yếu.",
    "items": [
      {
        "topic": "Nguyên tắc Phù hợp (Matching Concept) trong xây dựng",
        "type": "added",
        "oldRule": "Hạch toán chi phí khi có tiền trả, doanh thu khi nhận được tiền.",
        "newRule": "Ghi nhận doanh thu và chi phí phải phù hợp với nhau. Khi ghi nhận doanh thu xây lắp kỳ nào thì toàn bộ chi phí dở dang tương ứng phải được kết chuyển trong kỳ đó.",
        "impactNote": "Tránh tình trạng ghi nhận doanh thu công trình ở năm trước nhưng chi phí vật tư sắt thép lại để dồn sang năm sau."
      }
    ]
  },
  "vas-02": {
    "decreeId": "vas-02",
    "title": "VAS 02 - Hàng tồn kho",
    "category": "Chuẩn mực kế toán",
    "compareWith": "Quy định định giá tồn kho cũ",
    "summary": "Quy định nguyên tắc xác định giá trị hàng tồn kho theo giá thấp hơn giữa giá gốc và giá trị thuần có thể thực hiện được (NRV).",
    "items": [
      {
        "topic": "Xác định giá trị thuần có thể thực hiện được (NRV)",
        "type": "added",
        "oldRule": "Chỉ ghi nhận hàng tồn kho theo giá mua ban đầu bất chấp biến động giảm giá.",
        "newRule": "Nếu giá thị trường vật tư giảm thấp hơn giá gốc, bắt buộc trích lập dự phòng giảm giá hàng tồn kho tính vào giá vốn hàng bán.",
        "impactNote": "Áp dụng khi tồn kho số lượng lớn sắt thép xây dựng vào giai đoạn thị trường sắt thép giảm giá sâu."
      }
    ]
  },
  "vas-14": {
    "decreeId": "vas-14",
    "title": "VAS 14 - Doanh thu và Thu nhập khác",
    "category": "Chuẩn mực kế toán",
    "compareWith": "Nguyên tắc kế toán thu tiền cũ",
    "summary": "Quy định 5 điều kiện ghi nhận doanh thu bán hàng và 4 điều kiện ghi nhận doanh thu cung cấp dịch vụ, hợp đồng xây dựng.",
    "items": [
      {
        "topic": "Điều kiện ghi nhận doanh thu hợp đồng xây dựng",
        "type": "modified",
        "oldRule": "Chỉ ghi nhận doanh thu khi công trình hoàn thành toàn bộ và bàn giao đưa vào sử dụng.",
        "newRule": "Doanh thu được ghi nhận theo tỷ lệ phần trăm khối lượng công việc hoàn thành nếu kết quả hợp đồng được ước tính một cách đáng tin cậy.",
        "impactNote": "Kiểu Việt được phép ghi nhận doanh thu từng đợt nghiệm thu giai đoạn của dự án kéo dài nhiều năm."
      }
    ]
  },
  "nd-73-2024": {
    "decreeId": "nd-73-2024",
    "title": "Nghị định 73/2024/NĐ-CP",
    "category": "Lương & BHXH",
    "compareWith": "Nghị định 24/2023/NĐ-CP (Lương cơ sở 1.8tr)",
    "summary": "Tăng mức lương cơ sở từ 1.800.000đ lên 2.340.000đ/tháng từ 01/07/2024, đẩy trần đóng BHXH, BHYT lên 46.800.000đ/tháng.",
    "items": [
      {
        "topic": "Mức lương cơ sở làm căn cứ đóng",
        "type": "added",
        "oldRule": "1.800.000 đ/tháng.",
        "newRule": "2.340.000 đ/tháng, tăng thêm 30%!",
        "impactNote": "Tăng mức trợ cấp ốm đau, thai sản, dưỡng sức sau sinh cho người lao động."
      },
      {
        "topic": "Mức trần đóng BHXH, BHYT bắt buộc",
        "type": "modified",
        "oldRule": "Tối đa 20 lần lương cơ sở cũ = 36.000.000 đ/tháng.",
        "newRule": "Tối đa 20 lần lương cơ sở mới = 46.800.000 đ/tháng (tăng thêm 10.800.000 đ mức tính đóng).",
        "impactNote": "Nhân sự cấp quản lý có lương trên 36 triệu phải trích đóng BHXH cao hơn, chi phí đóng bảo hiểm của công ty Kiểu Việt cũng tăng theo."
      }
    ]
  },
  "nd-145-2020": {
    "decreeId": "nd-145-2020",
    "title": "Nghị định 145/2020/NĐ-CP",
    "category": "Lao động & Tiền lương",
    "compareWith": "Nghị định 05/2015/NĐ-CP & NĐ 45/2013/NĐ-CP",
    "summary": "Hướng dẫn thi hành Bộ luật Lao động về tiền lương, trả lương làm thêm giờ, số giờ tăng ca tối đa và kỷ luật lao động.",
    "items": [
      {
        "topic": "Cách tính tiền lương làm thêm giờ",
        "type": "modified",
        "oldRule": "Tính theo đơn giá tiền lương hoặc tiền lương thực trả của công việc đang làm.",
        "newRule": "Quy định công thức chuẩn: Tiền lương giờ thực trả = Tiền lương thực trả của tháng / Tổng số giờ làm việc thực tế.",
        "impactNote": "Phòng Kế toán Kiểu Việt có căn cứ pháp lý rõ ràng để tính lương tăng ca cho công nhân tại nhà máy và công trường."
      },
      {
        "topic": "Số giờ làm thêm tối đa trong năm",
        "type": "added",
        "oldRule": "Khống chế cứng 200 giờ/năm, một số ngành đặc thù được 300 giờ.",
        "newRule": "Quy định chi tiết các trường hợp được làm thêm đến 300 giờ/năm (trong đó có thi công công trình theo tiến độ cấp bách) và thủ tục thông báo Sở LĐ-TB&XH.",
        "impactNote": "Kiểu Việt hoàn toàn hợp pháp khi huy động tăng ca ban đêm để đổ bê tông hoặc ép cọc hoàn thành tiến độ dự án."
      }
    ]
  },
  "nd-12-2022": {
    "decreeId": "nd-12-2022",
    "title": "Nghị định 12/2022/NĐ-CP",
    "category": "Xử phạt lao động & BHXH",
    "compareWith": "Nghị định 28/2020/NĐ-CP",
    "summary": "Tăng mạnh mức xử phạt hành chính đối với các hành vi vi phạm về tiền lương, trốn đóng BHXH và vi phạm an toàn vệ sinh lao động tại công trường.",
    "items": [
      {
        "topic": "Xử phạt hành vi chậm đóng, trốn đóng BHXH",
        "type": "modified",
        "oldRule": "Phạt tiền từ 12% đến 15% tổng số tiền phải đóng.",
        "newRule": "Phạt tiền từ 18% đến 20% tổng số tiền phải đóng (tối đa 150 triệu đối với tổ chức), buộc truy nộp đủ tiền kèm lãi suất chậm nộp.",
        "impactNote": "Bắt buộc kế toán Kiểu Việt phải trích nộp BHXH đều đặn hàng tháng, tránh rủi ro thanh tra liên ngành."
      },
      {
        "topic": "Xử phạt vi phạm an toàn vệ sinh lao động (ATVSLĐ)",
        "type": "added",
        "oldRule": "Phạt tiền từ 1 đến 5 triệu đồng nếu thiếu trang bị bảo hộ.",
        "newRule": "Phạt từ 20 đến 40 triệu đồng nếu không huấn luyện ATVSLĐ hoặc không trang bị đủ mũ bảo hộ, dây đai an toàn tại công trường.",
        "impactNote": "Ban điều hành công trường Kiểu Việt phải kiểm tra 100% trang bị bảo hộ trước khi công nhân bước vào thi công."
      }
    ]
  },
  "qd-595-2017-bhxh": {
    "decreeId": "qd-595-2017-bhxh",
    "title": "Quyết định 595/QĐ-BHXH",
    "category": "Bảo hiểm xã hội",
    "compareWith": "Quyết định 959/QĐ-BHXH",
    "summary": "Quy trình thu BHXH, BHYT, BHTN, bảo hiểm tai nạn lao động bệnh nghề nghiệp và quản lý sổ bảo hiểm, thẻ BHYT số hóa.",
    "items": [
      {
        "topic": "Thời hạn nộp tiền BHXH cho đơn vị xây dựng",
        "type": "modified",
        "oldRule": "Bắt buộc nộp chậm nhất vào ngày làm việc cuối cùng của tháng.",
        "newRule": "Doanh nghiệp nông nghiệp, lâm nghiệp, xây dựng được quyền lựa chọn phương thức đóng hằng tháng, 03 tháng hoặc 06 tháng một lần.",
        "impactNote": "Kiểu Việt có thể đăng ký đóng BHXH theo quý cho công nhân thi công theo thời vụ gói thầu."
      },
      {
        "topic": "Hồ sơ cấp lại sổ BHXH, thẻ BHYT điện tử",
        "type": "added",
        "oldRule": "Phải nộp hồ sơ giấy kèm công văn xác nhận của đơn vị.",
        "newRule": "Giao dịch điện tử 100% qua cổng Dịch vụ công BHXH và ứng dụng VssID.",
        "impactNote": "Kế toán xử lý thủ tục online tức thì, không cần phải lên nộp hồ sơ giấy tại cơ quan BHXH."
      }
    ]
  },
  "nd-50-2021": {
    "decreeId": "nd-50-2021",
    "title": "Nghị định 50/2021/NĐ-CP",
    "category": "Hợp đồng xây dựng",
    "compareWith": "Nghị định 37/2015/NĐ-CP",
    "summary": "Sửa đổi, bổ sung quy định về tạm ứng hợp đồng xây dựng lên đến 50%, điều chỉnh giá hợp đồng trọn gói khi phát sinh khối lượng.",
    "items": [
      {
        "topic": "Mức tạm ứng tối đa hợp đồng xây lắp",
        "type": "modified",
        "oldRule": "Quy định mốc cứng (tạm ứng 10% - 20% tùy quy mô gói thầu).",
        "newRule": "Cho phép thỏa thuận mức tạm ứng tối đa lên đến 50% giá trị hợp đồng xây dựng.",
        "impactNote": "Kiểu Việt đàm phán nhận tạm ứng tối đa để mua trước vật tư sắt thép xi măng, tránh rủi ro biến động giá."
      },
      {
        "topic": "Điều chỉnh giá hợp đồng trọn gói",
        "type": "added",
        "oldRule": "Hợp đồng trọn gói không được điều chỉnh giá trừ thiên tai, dịch bệnh.",
        "newRule": "Cho phép điều chỉnh khi có phát sinh khối lượng công việc ngoài phạm vi hợp đồng đã ký hoặc khi nhà nước thay đổi chính sách.",
        "impactNote": "Bảo vệ quyền lợi nhà thầu Kiểu Việt khi chủ đầu tư yêu cầu thi công thêm hạng mục ngoài thiết kế ban đầu."
      }
    ]
  },
  "nd-37-2015": {
    "decreeId": "nd-37-2015",
    "title": "Nghị định 37/2015/NĐ-CP",
    "category": "Hợp đồng xây dựng",
    "compareWith": "Nghị định 48/2010/NĐ-CP",
    "summary": "Khung pháp lý nền tảng quy định chi tiết về hợp đồng xây dựng: Tạm ứng, thanh toán, bảo lãnh, phạt hợp đồng và giải quyết tranh chấp.",
    "items": [
      {
        "topic": "Thời hạn Chủ đầu tư phải thanh toán",
        "type": "modified",
        "oldRule": "Thời hạn thanh toán do hai bên thỏa thuận chung chung.",
        "newRule": "Chủ đầu tư bắt buộc phải thanh toán trong vòng 14 ngày làm việc kể từ ngày nhận đủ hồ sơ thanh toán hợp lệ của nhà thầu.",
        "impactNote": "Căn cứ pháp lý then chốt để Kiểu Việt thu hồi công nợ xây dựng cơ bản và tính lãi phạt chậm thanh toán."
      },
      {
        "topic": "Tỷ lệ bảo lãnh bảo hành công trình",
        "type": "added",
        "oldRule": "Quy định bảo hành chung 5% giá trị hợp đồng.",
        "newRule": "Phân loại rõ: 5% đối với công trình cấp đặc biệt và cấp I; 3% đối với các công trình còn lại.",
        "impactNote": "Giảm số tiền bảo lãnh bảo hành phải phong tỏa tại ngân hàng đối với công trình cấp II, III của Kiểu Việt."
      }
    ]
  },
  "nd-10-2021": {
    "decreeId": "nd-10-2021",
    "title": "Nghị định 10/2021/NĐ-CP",
    "category": "Chi phí xây dựng",
    "compareWith": "Nghị định 68/2019/NĐ-CP",
    "summary": "Quản lý chi phí đầu tư xây dựng: Sơ bộ tổng mức đầu tư, dự toán xây dựng, định mức dự toán và đơn giá xây dựng công trình.",
    "items": [
      {
        "topic": "Thẩm quyền phê duyệt định mức dự toán mới",
        "type": "modified",
        "oldRule": "Phải xin ý kiến thỏa thuận của Bộ Xây dựng kéo dài nhiều tháng.",
        "newRule": "Phân cấp cho Chủ đầu tư tổ chức lập, thẩm định và phê duyệt định mức dự toán mới hoặc điều chỉnh.",
        "impactNote": "Tạo thuận lợi cho Kiểu Việt khi áp dụng công nghệ thi công mới hoặc định mức vật liệu đặc thù tại địa phương."
      },
      {
        "topic": "Quản lý giá ca máy và thiết bị thi công",
        "type": "added",
        "oldRule": "Áp theo bảng giá ca máy cứng do địa phương công bố định kỳ.",
        "newRule": "Cho phép khảo sát giá thuê máy thực tế trên thị trường tại thời điểm lập dự toán khi giá công bố không phù hợp.",
        "impactNote": "Dự toán phản ánh sát giá thị trường máy xúc, cần cẩu, máy ép cọc của Kiểu Việt."
      }
    ]
  },
  "nd-123-2020": {
    "decreeId": "nd-123-2020",
    "title": "Nghị định 123/2020/NĐ-CP",
    "category": "Hóa đơn chứng từ",
    "compareWith": "Nghị định 51/2010/NĐ-CP & NĐ 119/2018",
    "summary": "Chấm dứt hoàn toàn kỷ nguyên hóa đơn giấy, bắt buộc 100% doanh nghiệp toàn quốc áp dụng Hóa đơn điện tử có mã hoặc không có mã của cơ quan thuế.",
    "items": [
      {
        "topic": "Chấm dứt sử dụng hóa đơn giấy & Báo cáo BC26",
        "type": "removed",
        "oldRule": "Sử dụng hóa đơn giấy tự in, định kỳ hàng quý nộp Báo cáo tình hình sử dụng hóa đơn mẫu BC26/AC.",
        "newRule": "Bãi bỏ 100% hóa đơn giấy và báo cáo BC26. Mọi hóa đơn được truyền thẳng về máy chủ cơ quan thuế.",
        "impactNote": "Loại bỏ hoàn toàn rủi ro bị phạt tiền từ 4 đến 8 triệu đồng do nộp chậm báo cáo BC26."
      },
      {
        "topic": "Thời điểm lập hóa đơn cung cấp dịch vụ xây dựng",
        "type": "modified",
        "oldRule": "Cho phép xuất hóa đơn chậm khi hoàn thành thanh toán tiền.",
        "newRule": "Bắt buộc lập hóa đơn tại thời điểm hoàn thành việc cung ứng dịch vụ hoặc thời điểm nghiệm thu bàn giao khối lượng, bất kể đã thu tiền hay chưa.",
        "impactNote": "Nghiệm thu giai đoạn công trình ngày nào phải xuất hóa đơn HĐĐT ngay ngày đó."
      }
    ]
  },
  "nd-125-2020": {
    "decreeId": "nd-125-2020",
    "title": "Nghị định 125/2020/NĐ-CP",
    "category": "Xử phạt vi phạm thuế",
    "compareWith": "Nghị định 129/2013/NĐ-CP",
    "summary": "Tăng mạnh khung tiền phạt vi phạm hành chính về thuế, hóa đơn; quy định phạt kịch khung đối với hành vi xuất hóa đơn sai thời điểm.",
    "items": [
      {
        "topic": "Phạt xuất hóa đơn sai thời điểm trong xây lắp",
        "type": "added",
        "oldRule": "Mức phạt nhẹ từ 200.000 đ đến 1.000.000 đ.",
        "newRule": "Phạt từ 4.000.000 đ đến 8.000.000 đ đối với hành vi lập hóa đơn không đúng thời điểm theo quy định.",
        "impactNote": "Kế toán Kiểu Việt phải phối hợp chặt chẽ với Ban chỉ huy công trường để xuất hóa đơn ngay trong ngày ký nghiệm thu A-B."
      },
      {
        "topic": "Phạt chậm nộp tờ khai thuế",
        "type": "modified",
        "oldRule": "Phạt cảnh cáo hoặc phạt từ 1 đến 5 triệu đồng.",
        "newRule": "Tăng mức phạt kịch khung lên từ 8 đến 15 triệu (chậm trên 60 ngày) và từ 15 đến 25 triệu (nếu phát sinh số thuế phải nộp).",
        "impactNote": "Luôn kiểm tra lịch nộp tờ khai thuế GTGT, TNCN, TNDN trước hạn chót hàng tháng/quý."
      }
    ]
  }
};

interface DecreeDiffViewerProps {
  decreeId: string;
}

export function DecreeDiffViewer({ decreeId }: DecreeDiffViewerProps) {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedId, setSelectedId] = useState(decreeId);

  const currentDiffId = DIFF_DATABASE[selectedId] ? selectedId : (DIFF_DATABASE[decreeId] ? decreeId : 'tt-99-2025');
  const diffData = DIFF_DATABASE[currentDiffId];

  return (
    <div className="space-y-6">
      {/* Selector: Cho phép chuyển đổi giữa TOÀN BỘ 55 VĂN BẢN */}
      <div className="bg-card border border-border p-4 rounded-xl shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Layers className="h-4 w-4 text-emerald-600 shrink-0" />
          <span className="text-xs font-bold text-foreground uppercase tracking-wide">
            Kho Đối Chiếu Điểm Mới (Toàn Bộ 55 Văn Bản):
          </span>
        </div>
        <select
          value={currentDiffId}
          onChange={(e) => setSelectedId(e.target.value)}
          className="text-xs bg-muted/50 border border-border rounded-lg px-3 py-2 text-foreground font-medium focus:ring-1 focus:ring-emerald-500 max-w-full sm:max-w-md cursor-pointer"
        >
          <optgroup label="1. Chế độ Kế toán & Tài sản (15 Thông tư & Chuẩn mực)">
            <option value="tt-99-2025">Thông tư 99/2025/TT-BTC (Chế độ KT mới vs TT 200)</option>
            <option value="tt-200-2014">Thông tư 200/2014/TT-BTC (Chế độ KT Doanh nghiệp vs QĐ 15)</option>
            <option value="tt-133-2016">Thông tư 133/2016/TT-BTC (Kế toán DNNVV vs QĐ 48)</option>
            <option value="tt-46-2025">Thông tư 46/2025/TT-BTC (Sửa đổi TT 133)</option>
            <option value="tt-45-2013">Thông tư 45/2013/TT-BTC (Khấu hao TSCĐ 30tr vs TT 203)</option>
            <option value="tt-48-2019">Thông tư 48/2019/TT-BTC (Trích lập Dự phòng nợ vs TT 228)</option>
            <option value="tt-24-2024-tt-btc">Thông tư 24/2024/TT-BTC (Kế toán HCSN vs TT 107)</option>
            <option value="tt-108-2025">Thông tư 108/2025/TT-BTC (BCTC hợp nhất cơ quan NN)</option>
            <option value="luat-ke-toan-2015">Luật Kế toán 88/2015/QH13 (Chuẩn mực chung vs Luật 2003)</option>
            <option value="luat-56-2024">Luật sửa đổi 56/2024/QH15 (Sửa 9 Luật Tài chính & Kế toán)</option>
            <option value="nd-174-2016">Nghị định 174/2016/NĐ-CP (Hướng dẫn Luật Kế toán)</option>
            <option value="nd-41-2018">Nghị định 41/2018/NĐ-CP (Xử phạt Kế toán – Kiểm toán)</option>
            <option value="vas-01">Chuẩn mực VAS 01 (Chuẩn mực kế toán chung)</option>
            <option value="vas-02">Chuẩn mực VAS 02 (Hàng tồn kho & NRV)</option>
            <option value="vas-14">Chuẩn mực VAS 14 (Doanh thu xây lắp & dịch vụ)</option>
          </optgroup>

          <optgroup label="2. Thuế & Hóa đơn điện tử (15 văn bản)">
            <option value="luat-67-2025-tndn">Luật Thuế TNDN 67/2025/QH15 (Thuế tối thiểu toàn cầu 15%)</option>
            <option value="luat-thue-tndn">Luật Thuế TNDN 14/2008 (Thuế suất 20% vs 28%)</option>
            <option value="nd-218-2013">Nghị định 218/2013/NĐ-CP (Hướng dẫn Thuế TNDN)</option>
            <option value="tt-96-2015">Thông tư 96/2015/TT-BTC (Chi phí được trừ thuế TNDN vs TT 78)</option>
            <option value="luat-thue-gtgt">Luật Thuế GTGT 13/2008 (Khấu trừ thuế vs Luật 1997)</option>
            <option value="tt-219-2013">Thông tư 219/2013/TT-BTC (Thuế GTGT xây lắp vs TT 06)</option>
            <option value="nd-180-2024-nd-cp">Nghị định 180/2024/NĐ-CP (Giảm 2% thuế GTGT xuống 8%)</option>
            <option value="nd-15-2022">Nghị định 15/2022/NĐ-CP (Gói giảm thuế GTGT 2% phục hồi)</option>
            <option value="nd-64-2024">Nghị định 64/2024/NĐ-CP (Gia hạn nộp thuế GTGT, TNDN, tiền thuê đất)</option>
            <option value="nd-123-2020">Nghị định 123/2020/NĐ-CP (Hóa đơn điện tử bắt buộc vs HĐ giấy)</option>
            <option value="tt-78-2021">Thông tư 78/2021/TT-BTC (Hóa đơn điện tử Mẫu 04/SS vs TT 39)</option>
            <option value="nd-70-2025">Nghị định 70/2025/NĐ-CP (Chứng từ khấu trừ TNCN điện tử)</option>
            <option value="nd-125-2020">Nghị định 125/2020/NĐ-CP (Phạt xuất HĐ sai thời điểm vs NĐ 129)</option>
            <option value="luat-quan-ly-thue-2019">Luật Quản lý thuế 38/2019/QH14 (Phạt chậm nộp 0.03%/ngày)</option>
            <option value="nd-126-2020">Nghị định 126/2020/NĐ-CP (Tạm nộp 80% thuế TNDN 4 quý)</option>
            <option value="tt-80-2021">Thông tư 80/2021/TT-BTC (Phân bổ thuế xây dựng vãng lai 1% vs 2%)</option>
            <option value="nd-132-2020">Nghị định 132/2020/NĐ-CP (Giao dịch liên kết, trần lãi vay 30% EBITDA)</option>
          </optgroup>

          <optgroup label="3. Lao động, Tiền lương & BHXH (7 văn bản)">
            <option value="luat-109-2025-tncn">Luật Thuế TNCN 109/2025/QH15 (Giảm trừ 15.5tr/6.2tr vs Luật cũ)</option>
            <option value="tt-111-2013">Thông tư 111/2013/TT-BTC (Khoán chi ăn ca 730k, trang phục 5tr vs TT 84)</option>
            <option value="blld-45-2019">Bộ luật Lao động 45/2019/QH14 (Bỏ HĐLĐ mùa vụ, thêm nghỉ Quốc khánh)</option>
            <option value="nd-73-2024">Nghị định 73/2024/NĐ-CP (Lương cơ sở 2.34tr tăng trần BHXH 46.8tr)</option>
            <option value="nd-293-2025">Nghị định 293/2025/NĐ-CP (Lương tối thiểu vùng tăng 6% năm 2026)</option>
            <option value="nd-145-2020">Nghị định 145/2020/NĐ-CP (Lương tăng ca, trần 300h xây dựng vs NĐ 05)</option>
            <option value="nd-12-2022">Nghị định 12/2022/NĐ-CP (Xử phạt chậm đóng BHXH & ATVSLĐ vs NĐ 28)</option>
            <option value="luat-41-2024">Luật Bảo hiểm xã hội 41/2024/QH15 (Đóng 15 năm hưởng hưu vs 20 năm)</option>
            <option value="qd-595-2017-bhxh">Quyết định 595/QĐ-BHXH (Doanh nghiệp xây dựng đóng BHXH theo quý)</option>
          </optgroup>

          <optgroup label="4. Hợp đồng xây dựng & Chi phí đầu tư (3 văn bản)">
            <option value="nd-50-2021">Nghị định 50/2021/NĐ-CP (Tạm ứng 50%, bù giá trọn gói vs NĐ 37)</option>
            <option value="nd-37-2015">Nghị định 37/2015/NĐ-CP (Thời hạn CĐT thanh toán 14 ngày vs NĐ 48)</option>
            <option value="nd-10-2021">Nghị định 10/2021/NĐ-CP (Quản lý dự toán, định mức XD vs NĐ 68)</option>
          </optgroup>

          <optgroup label="5. Khoáng sản, Tài nguyên & Lệ phí khác (12 văn bản)">
            <option value="luat-54-2024-khoangsan">Luật Địa chất và Khoáng sản 54/2024 (Phân 4 nhóm khoáng sản vs Luật 2010)</option>
            <option value="nd-193-2025-khoangsan">Nghị định 193/2025/NĐ-CP (Cấp phép mỏ đất đắp công trình trọng điểm)</option>
            <option value="qd-87-2025-gialai">Quyết định 87/2025/QĐ-UBND (Bảng giá tính thuế tài nguyên 2026 Gia Lai)</option>
            <option value="tt-152-2015">Thông tư 152/2015/TT-BTC (Thuế Tài nguyên đá cát đất vs TT 105)</option>
            <option value="tt-44-2017">Thông tư 44/2017/TT-BTC (Khung giá tính thuế tài nguyên toàn quốc)</option>
            <option value="nd-27-2023">Nghị định 27/2023/NĐ-CP (Phí bảo vệ môi trường khoáng sản vs NĐ 164)</option>
            <option value="nd-67-2019">Nghị định 67/2019/NĐ-CP (Tiền cấp quyền khai thác khoáng sản vs NĐ 203)</option>
            <option value="nd-22-2020">Nghị định 22/2020/NĐ-CP (Miễn lệ phí môn bài năm đầu thành lập)</option>
            <option value="nd-139-2016">Nghị định 139/2016/NĐ-CP (3 Bậc mức thu lệ phí môn bài)</option>
            <option value="luat-gd-dien-tu-20-2023">Luật Giao dịch điện tử 20/2023 (Chữ ký số & Hợp đồng điện tử)</option>
            <option value="luat-thue-xnk-107-2016">Luật Thuế XNK 107/2016 (Miễn thuế nhập khẩu máy móc TSCĐ)</option>
          </optgroup>
        </select>
      </div>

      {diffData && (
        <>
          {/* Banner giới thiệu so sánh */}
          <div className="bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-50 dark:from-emerald-950/40 dark:via-teal-950/20 dark:to-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-xl p-5 shadow-xs space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-300 font-bold text-sm">
                <Sparkles className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>{diffData.title}</span>
                <span className="text-muted-foreground font-normal">đối chiếu với:</span>
                <span className="underline decoration-emerald-500 underline-offset-4 font-semibold">{diffData.compareWith}</span>
              </div>
              <Badge variant="outline" className="bg-white/80 dark:bg-background/80 text-emerald-700 dark:text-emerald-300 text-[11px]">
                {diffData.category}
              </Badge>
            </div>
            <p className="text-xs md:text-sm text-foreground/80 leading-relaxed">
              {diffData.summary}
            </p>
          </div>

          {/* Thanh tìm kiếm nhanh */}
          <div className="flex items-center justify-between gap-4">
            <div className="text-xs font-semibold text-muted-foreground">
              Hiển thị <strong>{diffData.items.length}</strong> điểm thay đổi cốt lõi
            </div>
            <div className="w-64">
              <Input 
                placeholder="Lọc điểm thay đổi..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="h-9 text-xs"
              />
            </div>
          </div>

          {/* Danh sách các khối so sánh */}
          <div className="space-y-4">
            {diffData.items
              .filter(item => 
                item.topic.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.newRule.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.impactNote.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((item, index) => {
                const badgeConfig = {
                  added: { label: 'BỔ SUNG MỚI', bg: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-200', icon: PlusCircle },
                  modified: { label: 'SỬA ĐỔI / THAY THẾ', bg: 'bg-blue-100 text-blue-800 dark:bg-blue-900/60 dark:text-blue-200', icon: RefreshCw },
                  removed: { label: 'BÃI BỎ', bg: 'bg-red-100 text-red-800 dark:bg-red-900/60 dark:text-red-200', icon: Trash2 },
                }[item.type];

                const Icon = badgeConfig.icon;

                return (
                  <Card key={index} className="border-border shadow-xs overflow-hidden hover:border-emerald-300 transition-colors">
                    <div className="bg-muted/30 px-4 py-2.5 border-b border-border/60 flex items-center justify-between">
                      <span className="font-bold text-sm text-foreground">{item.topic}</span>
                      <span className={`inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full ${badgeConfig.bg}`}>
                        <Icon className="h-3 w-3" />
                        {badgeConfig.label}
                      </span>
                    </div>
                    <CardContent className="p-4 space-y-3">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                        {/* Cột Quy định cũ */}
                        <div className="p-3 bg-red-50/40 dark:bg-red-950/20 border border-red-100 dark:border-red-900/30 rounded-lg space-y-1">
                          <span className="text-[11px] font-bold text-red-700 dark:text-red-400 uppercase tracking-wide">
                            Quy định trước đây ({diffData.compareWith})
                          </span>
                          <p className="text-foreground/80 leading-relaxed">{item.oldRule}</p>
                        </div>

                        {/* Cột Quy định mới */}
                        <div className="p-3 bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800/40 rounded-lg space-y-1">
                          <span className="text-[11px] font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wide">
                            Quy định mới áp dụng
                          </span>
                          <p className="text-foreground/90 font-medium leading-relaxed">{item.newRule}</p>
                        </div>
                      </div>

                      {/* Tác động thực tiễn cho Kiểu Việt */}
                      <div className="p-3 bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-900/30 rounded-lg text-xs text-amber-900 dark:text-amber-200 flex items-start gap-2">
                        <span className="font-bold shrink-0">💡 Tác động nghiệp vụ Kiểu Việt:</span>
                        <span>{item.impactNote}</span>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
          </div>
        </>
      )}
    </div>
  );
}
