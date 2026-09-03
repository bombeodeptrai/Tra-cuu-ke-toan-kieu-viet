import React, { useState } from 'react';
import { ArrowRightLeft, Sparkles, PlusCircle, RefreshCw, Trash2, Bot, Layers, CheckCircle, HelpCircle } from 'lucide-react';
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
  // ==========================================
  // NHÓM 1: CÁC THÔNG TƯ KẾ TOÁN & TÀI CHÍNH
  // ==========================================
  'tt-99-2025': {
    decreeId: 'tt-99-2025',
    title: 'Thông tư 99/2025/TT-BTC',
    category: 'Kế toán doanh nghiệp',
    compareWith: 'Thông tư 200/2014/TT-BTC',
    summary: 'Thông tư 99/2025/TT-BTC hiện đại hóa hệ thống tài khoản kế toán, bãi bỏ các tài khoản trung gian rườm rà, áp dụng giá trị hợp lý (Fair Value) và tiệm cận chuẩn mực quốc tế IFRS.',
    items: [
      {
        topic: 'Hệ thống tài khoản chi phí xây lắp & sản xuất',
        type: 'modified',
        oldRule: 'Bắt buộc theo dõi tách biệt 4 tài khoản 621 (NVL), 622 (Nhân công), 623 (Máy thi công), 627 (Sản xuất chung) rồi cuối tháng kết chuyển sang TK 154.',
        newRule: 'Cho phép doanh nghiệp tinh giản, linh hoạt gom nhóm theo dõi trực tiếp trên các tiểu khoản cấp 2 của TK 154 hoặc hạch toán tinh gọn.',
        impactNote: 'Kế toán Kiểu Việt giảm tải 40% khối lượng chứng từ kết chuyển định kỳ, quản lý giá thành từng gói thầu công trình trực quan hơn.'
      },
      {
        topic: 'Ghi nhận theo Giá trị hợp lý (Fair Value)',
        type: 'added',
        oldRule: 'Chủ yếu hạch toán theo nguyên tắc giá gốc (Historical Cost), ít đánh giá lại tài sản.',
        newRule: 'Quy định cụ thể việc đánh giá lại tài sản tài chính, công cụ nợ theo giá trị thị trường tại ngày lập Báo cáo tài chính.',
        impactNote: 'Phản ánh trung thực giá trị tài sản và nguồn vốn của công ty khi huy động vốn đầu tư.'
      },
      {
        topic: 'Xóa bỏ toàn bộ hệ thống tài khoản ngoài bảng (Loại 0)',
        type: 'removed',
        oldRule: 'Duy trì các tài khoản loại 0 (TK 001, 002, 004, 007...) để ghi đơn vật tư giữ hộ, tài sản thuê ngoài, ngoại tệ.',
        newRule: 'Bãi bỏ hoàn toàn việc ghi đơn trên tài khoản loại 0, chuyển sang quản lý chi tiết trên sổ kế toán nội bộ và thuyết minh trên BCTC.',
        impactNote: 'Phần mềm kế toán không còn bị lỗi lệch số dư kép - đơn.'
      }
    ]
  },

  'tt-200-2014': {
    decreeId: 'tt-200-2014',
    title: 'Thông tư 200/2014/TT-BTC',
    category: 'Kế toán doanh nghiệp',
    compareWith: 'Quyết định 15/2006/QĐ-BTC',
    summary: 'Cột mốc lịch sử trao quyền tự chủ tối đa cho doanh nghiệp trong thiết kế chứng từ, mẫu sổ kế toán và phương pháp hạch toán linh hoạt.',
    items: [
      {
        topic: 'Tính bắt buộc của mẫu biểu chứng từ kế toán',
        type: 'modified',
        oldRule: 'Bắt buộc phải áp dụng chuẩn xác theo 100% mẫu biểu chứng từ do Bộ Tài chính ban hành.',
        newRule: 'Mẫu chứng từ mang tính chất hướng dẫn. Doanh nghiệp được tự thiết kế mẫu phù hợp đặc thù, chỉ cần đáp ứng đủ 7 nội dung bắt buộc của Luật Kế toán.',
        impactNote: 'Kiểu Việt hoàn toàn chủ động thiết kế phiếu xuất kho vật tư, biên bản nghiệm thu khối lượng công trường theo mẫu riêng của công ty.'
      },
      {
        topic: 'Hạch toán chênh lệch tỷ giá hối đoái (TK 413)',
        type: 'modified',
        oldRule: 'Treo chênh lệch tỷ giá giai đoạn trước hoạt động trên TK 413 rồi phân bổ dần tối đa 5 năm.',
        newRule: 'Toàn bộ chênh lệch tỷ giá phát sinh trong kỳ đều đưa ngay vào doanh thu tài chính (TK 515) hoặc chi phí tài chính (TK 635).',
        impactNote: 'Báo cáo KQKD phản ánh tức thì biến động ngoại tệ, không còn chi phí treo phân bổ.'
      }
    ]
  },

  'tt-133-2016': {
    decreeId: 'tt-133-2016',
    title: 'Thông tư 133/2016/TT-BTC',
    category: 'Kế toán DNNVV',
    compareWith: 'Quyết định 48/2006/QĐ-BTC',
    summary: 'Chế độ kế toán dành riêng cho Doanh nghiệp nhỏ và vừa, cắt giảm tối đa thủ tục hành chính, không bắt buộc lập Báo cáo lưu chuyển tiền tệ.',
    items: [
      {
        topic: 'Đơn giản hóa hệ thống tài khoản tập hợp chi phí',
        type: 'modified',
        oldRule: 'Vẫn duy trì các tài khoản loại 6 phức tạp.',
        newRule: 'Không sử dụng các tài khoản 621, 622, 623, 627. Toàn bộ chi phí sản xuất, thi công công trình tập hợp thẳng vào TK 154 (Chi phí SXKD dở dang).',
        impactNote: 'Rất phù hợp cho các nhà thầu phụ, tổ đội thi công nhỏ liên kết của Kiểu Việt hạch toán nhanh gọn.'
      },
      {
        topic: 'Lập Báo cáo lưu chuyển tiền tệ (LCTT)',
        type: 'removed',
        oldRule: 'Bắt buộc nộp Báo cáo LCTT cùng Bảng cân đối kế toán và Báo cáo KQKD.',
        newRule: 'Không bắt buộc nộp Báo cáo LCTT cho cơ quan thuế (chỉ khuyến khích lập phục vụ quản trị).',
        impactNote: 'Giảm 50% áp lực lập BCTC cuối năm cho các công ty con quy mô nhỏ của Kiểu Việt.'
      }
    ]
  },

  'tt-45-2013': {
    decreeId: 'tt-45-2013',
    title: 'Thông tư 45/2013/TT-BTC',
    category: 'Khấu hao TSCĐ',
    compareWith: 'Thông tư 203/2009/TT-BTC',
    summary: 'Quy định tiêu chuẩn nhận biết và khung thời gian trích khấu hao tài sản cố định (máy đào, máy ủi, trạm trộn bê tông, xe tải...).',
    items: [
      {
        topic: 'Tiêu chuẩn nguyên giá ghi nhận TSCĐ',
        type: 'modified',
        oldRule: 'Tài sản có giá trị từ 10.000.000 đồng trở lên đã phải ghi nhận là TSCĐ.',
        newRule: 'Nâng mức nguyên giá lên từ 30.000.000 đồng trở lên mới đủ điều kiện là TSCĐ hữu hình hoặc vô hình.',
        impactNote: 'Các thiết bị công trường dưới 30 triệu (máy khoan, máy hàn, đầm cóc...) được đưa thẳng vào CCDC phân bổ qua TK 242 tối đa 3 năm.'
      },
      {
        topic: 'Trích khấu hao nhanh cho máy móc xây dựng',
        type: 'added',
        oldRule: 'Khấu hao đều theo đường thẳng, điều kiện trích khấu hao nhanh rất ngặt nghèo.',
        newRule: 'Doanh nghiệp kinh doanh có hiệu quả kinh tế cao được quyền trích khấu hao nhanh tối đa 2 lần mức khấu hao đường thẳng.',
        impactNote: 'Kiểu Việt tận dụng khấu hao nhanh máy móc thi công trong các năm có lãi lớn để giảm số thuế TNDN phải nộp hợp pháp.'
      }
    ]
  },

  'tt-48-2019': {
    decreeId: 'tt-48-2019',
    title: 'Thông tư 48/2019/TT-BTC',
    category: 'Trích lập dự phòng',
    compareWith: 'Thông tư 228/2009/TT-BTC',
    summary: 'Hướng dẫn trích lập và xử lý các khoản dự phòng giảm giá hàng tồn kho, tổn thất đầu tư, nợ phải thu khó đòi tại doanh nghiệp.',
    items: [
      {
        topic: 'Mức trích lập dự phòng nợ phải thu khó đòi',
        type: 'modified',
        oldRule: 'Chưa quy định chi tiết tỷ lệ từng mốc thời gian quá hạn.',
        newRule: 'Quy định rõ 4 mốc: 30% (quá hạn từ 6 tháng đến dưới 1 năm), 50% (từ 1 đến dưới 2 năm), 70% (từ 2 đến dưới 3 năm), 100% (từ 3 năm trở lên).',
        impactNote: 'Kiểu Việt có cơ sở pháp lý vững chắc để trích dự phòng cho các khoản công nợ đọng kéo dài từ các chủ đầu tư, tính vào chi phí hợp lý.'
      },
      {
        topic: 'Bãi bỏ dự phòng bảo hành công trình xây dựng theo TT 228',
        type: 'removed',
        oldRule: 'Cho phép trích lập dự phòng bảo hành công trình xây lắp tính vào chi phí được trừ khi xác định thuế TNDN.',
        newRule: 'Chỉ cho phép trích dự phòng đối với sản phẩm hàng hóa thông thường, công trình xây lắp chi phí bảo hành thực tế phát sinh kỳ nào hạch toán kỳ đó.',
        impactNote: 'Kế toán không trích trước chi phí bảo hành công trình nếu chưa phát sinh thực tế để tránh bị cơ quan thuế bóc tách.'
      }
    ]
  },

  // ==========================================
  // NHÓM 2: CÁC THÔNG TƯ VỀ THUẾ & HÓA ĐƠN
  // ==========================================
  'tt-96-2015': {
    decreeId: 'tt-96-2015',
    title: 'Thông tư 96/2015/TT-BTC',
    category: 'Thuế TNDN',
    compareWith: 'Thông tư 78/2014/TT-BTC',
    summary: 'Cẩm nang cốt lõi về Chi phí được trừ và Chi phí không được trừ khi quyết toán thuế TNDN, bãi bỏ trần khống chế chi phí quảng cáo, tiếp thị.',
    items: [
      {
        topic: 'Khống chế chi phí quảng cáo, tiếp thị, hoa hồng',
        type: 'removed',
        oldRule: 'Khống chế trần tối đa không quá 15% tổng chi phí được trừ.',
        newRule: 'Dỡ bỏ hoàn toàn trần 15%. Doanh nghiệp chi bao nhiêu quảng cáo, hội nghị, tiếp khách đều được tính vào chi phí hợp lý nếu có đủ hóa đơn hợp lệ.',
        impactNote: 'Tạo thuận lợi cho Kiểu Việt tiếp cận chủ đầu tư và quảng bá năng lực thi công công trình.'
      },
      {
        topic: 'Chi phí phúc lợi cho người lao động',
        type: 'added',
        oldRule: 'Chưa có quy định cụ thể mức khống chế chi phúc lợi trực tiếp.',
        newRule: 'Cho phép tính vào chi phí được trừ các khoản phúc lợi (hiếu hỉ, sinh nhật, nghỉ mát, học phí con em) tối đa không quá 1 tháng lương bình quân thực tế.',
        impactNote: 'Kiểu Việt được chi tối đa 1 tháng lương bình quân cho chế độ phúc lợi nhân viên mà không lo bị xuất toán thuế.'
      },
      {
        topic: 'Điều kiện chứng từ thanh toán không dùng tiền mặt',
        type: 'modified',
        oldRule: 'Hóa đơn từ 20 triệu trở lên bắt buộc thanh toán qua ngân hàng.',
        newRule: 'Quy định chặt chẽ: Hóa đơn mua hàng từng lần từ 20 triệu trở lên (đã gồm VAT) bắt buộc phải có ủy nhiệm chi hoặc chứng từ chuyển khoản từ tài khoản công ty.',
        impactNote: 'Tuyệt đối không dùng tài khoản cá nhân thanh toán các hóa đơn vật tư sắt thép xi măng từ 20 triệu.'
      }
    ]
  },

  'tt-219-2013': {
    decreeId: 'tt-219-2013',
    title: 'Thông tư 219/2013/TT-BTC',
    category: 'Thuế GTGT',
    compareWith: 'Thông tư 06/2012/TT-BTC',
    summary: 'Xương sống hướng dẫn Luật Thuế Giá trị gia tăng: Căn cứ tính thuế, thuế suất 0%, 5%, 10% và nguyên tắc khấu trừ hoàn thuế GTGT đầu vào.',
    items: [
      {
        topic: 'Thời điểm xác định thuế GTGT trong xây lắp',
        type: 'modified',
        oldRule: 'Xác định khi thu tiền của chủ đầu tư.',
        newRule: 'Thời điểm xác định thuế GTGT là thời điểm nghiệm thu, bàn giao công trình, hạng mục công trình hoặc khối lượng xây lắp hoàn thành, không phân biệt đã thu được tiền hay chưa.',
        impactNote: 'Kế toán Kiểu Việt phải xuất hóa đơn GTGT ngay khi ký biên bản nghiệm thu giai đoạn A-B, không được chờ chủ đầu tư giải ngân mới xuất.'
      },
      {
        topic: 'Điều kiện hoàn thuế GTGT dự án đầu tư',
        type: 'added',
        oldRule: 'Hoàn thuế theo định kỳ tháng/quý khi lũy kế thuế đầu vào trên 200 triệu.',
        newRule: 'Quy định riêng cho dự án đầu tư mới: Thuế GTGT đầu vào chưa được khấu trừ từ 300 triệu đồng trở lên được xét hoàn thuế riêng.',
        impactNote: 'Giúp Kiểu Việt thu hồi dòng tiền thuế GTGT khi đầu tư xây dựng nhà máy, mua sắm dàn xe cơ giới mới.'
      }
    ]
  },

  'tt-78-2021': {
    decreeId: 'tt-78-2021',
    title: 'Thông tư 78/2021/TT-BTC',
    category: 'Hóa đơn điện tử',
    compareWith: 'Thông tư 39/2014 & Thông tư 32/2011',
    summary: 'Quy định chi tiết thi hành Nghị định 123/2020: Mẫu số, ký hiệu hóa đơn (1C22TAA...), quy trình giải trình hóa đơn sai sót Mẫu 04/SS-HĐĐT.',
    items: [
      {
        topic: 'Ký hiệu hóa đơn điện tử chuẩn hóa toàn quốc',
        type: 'added',
        oldRule: 'Ký hiệu do doanh nghiệp tự đặt theo hướng dẫn cũ (AA/11P, AB/12T...).',
        newRule: 'Chuẩn hóa ký hiệu: 1C (Hóa đơn có mã), 1K (Hóa đơn không mã), 2 ký tự năm (26), 1 ký tự loại hóa đơn (T: Doanh nghiệp, D: Đặc thù).',
        impactNote: 'Kiểu Việt sử dụng ký hiệu chuẩn xác khi cấu hình phần mềm hóa đơn điện tử.'
      },
      {
        topic: 'Quy trình xử lý hóa đơn điện tử có sai sót',
        type: 'modified',
        oldRule: 'Lập biên bản hủy hóa đơn giấy, xuất lại số hóa đơn mới.',
        newRule: 'Gửi Thông báo sai sót Mẫu 04/SS-HĐĐT đến cơ quan thuế, sau đó chọn: Xuất hóa đơn điều chỉnh HOẶC xuất hóa đơn thay thế.',
        impactNote: 'Kế toán phải kiểm tra mã cơ quan thuế tiếp nhận Mẫu 04/SS thành công trước khi xuất hóa đơn thay thế.'
      }
    ]
  },

  'tt-80-2021': {
    decreeId: 'tt-80-2021',
    title: 'Thông tư 80/2021/TT-BTC',
    category: 'Quản lý thuế & Kê khai',
    compareWith: 'Thông tư 156/2013/TT-BTC',
    summary: 'Hướng dẫn chi tiết Luật Quản lý thuế: Thủ tục khai thuế, nộp thuế, hoàn thuế và đặc biệt là quy tắc phân bổ nghĩa vụ thuế cho các công trình xây dựng vãng lai ngoại tỉnh.',
    items: [
      {
        topic: 'Phân bổ thuế GTGT vãng lai xây dựng ngoại tỉnh',
        type: 'modified',
        oldRule: 'Nộp vãng lai 2% trên doanh thu xây dựng chưa thuế nếu công trình khác tỉnh đóng trụ sở.',
        newRule: 'Giảm tỷ lệ phân bổ xuống còn 1% trên doanh thu công trình xây dựng, lắp đặt chuyển giao ngoại tỉnh.',
        impactNote: 'Kiểu Việt (trụ sở Gia Lai) khi thi công công trình tại Bình Định, Kon Tum, Đắk Lắk chỉ phải nộp phân bổ 1% thay vì 2%, giảm áp lực đọng vốn.'
      },
      {
        topic: 'Phân bổ thuế TNDN cho cơ sở phụ thuộc ngoại tỉnh',
        type: 'modified',
        oldRule: 'Tính theo tỷ lệ chi phí sản xuất kinh doanh của từng chi nhánh.',
        newRule: 'Quy định công thức phân bổ rõ ràng theo doanh thu hoặc tỷ lệ chi phí của địa bàn được hưởng ưu đãi thuế.',
        impactNote: 'Thuận tiện tính toán khi quyết toán thuế TNDN cuối năm giữa trụ sở chính và các ban điều hành công trường.'
      }
    ]
  },

  'tt-111-2013': {
    decreeId: 'tt-111-2013',
    title: 'Thông tư 111/2013/TT-BTC',
    category: 'Thuế TNCN',
    compareWith: 'Thông tư 84/2008/TT-BTC',
    summary: 'Quy định chi tiết các khoản thu nhập chịu thuế, thu nhập được miễn thuế và các khoản phụ cấp khoán chi không tính vào thu nhập chịu thuế TNCN.',
    items: [
      {
        topic: 'Khoán chi tiền ăn giữa ca, tiền trang phục',
        type: 'added',
        oldRule: 'Khống chế trần rất thấp (tiền ăn 450.000đ/tháng, trang phục 1.000.000đ/năm).',
        newRule: 'Tiền trang phục bằng tiền tối đa 5.000.000 đ/người/năm (bằng hiện vật không khống chế trần); tiền ăn ca theo quy định Bộ LĐ-TB&XH (hiện là 730.000đ/tháng).',
        impactNote: 'Kiểu Việt tối ưu hóa quy chế lương thưởng, chi đúng mức trần trang phục và ăn ca để giảm thuế TNCN cho kỹ sư và công nhân.'
      },
      {
        topic: 'Khấu trừ thuế TNCN 10% lao động thời vụ',
        type: 'modified',
        oldRule: 'Khấu trừ 10% nếu có MST, 20% nếu không có MST đối với khoản chi từ 500.000đ.',
        newRule: 'Mọi khoản chi trả cho cá nhân không ký HĐLĐ từ 2.000.000 đ/lần trở lên phải khấu trừ 10% tại nguồn (trừ khi làm cam kết 08/CK-TNCN nếu đủ điều kiện).',
        impactNote: 'Áp dụng trực tiếp khi trả công cho thợ nề, thợ sắt thời vụ tại công trường xây dựng.'
      }
    ]
  },

  'tt-152-2015': {
    decreeId: 'tt-152-2015',
    title: 'Thông tư 152/2015/TT-BTC',
    category: 'Thuế Tài nguyên',
    compareWith: 'Thông tư 105/2010/TT-BTC',
    summary: 'Hướng dẫn về Thuế Tài nguyên đối với khoáng sản kim loại, phi kim loại (đất san lấp, cát xây dựng, đá dăm, đá hộc phục vụ công trình xây lắp).',
    items: [
      {
        topic: 'Căn cứ tính thuế tài nguyên khoáng sản khai thác',
        type: 'modified',
        oldRule: 'Tính theo sản lượng thực tế kê khai với biểu giá ước tính.',
        newRule: 'Bắt buộc áp dụng theo Khung giá tính thuế tài nguyên do UBND tỉnh ban hành (như QĐ 87/2025/QĐ-UBND tỉnh Gia Lai).',
        impactNote: 'Kiểu Việt khi khai thác mỏ đất, mỏ đá phục vụ công trình phải áp đúng bảng giá tính thuế tài nguyên của tỉnh sở tại.'
      },
      {
        topic: 'Phương pháp quy đổi sản lượng khoáng sản nguyên khai',
        type: 'added',
        oldRule: 'Chưa có hệ số quy đổi thống nhất giữa thể tích đá nguyên khai và đá sau nghiền sàng.',
        newRule: 'Ban hành hệ số nở rời và công thức quy đổi từ thể tích đo đạc sang khối lượng thành phẩm.',
        impactNote: 'Tránh bị đoàn thanh tra Sở TN&MT truy thu thuế tài nguyên do sai số hệ số quy đổi mỏ.'
      }
    ]
  },

  // ==========================================
  // NHÓM 3: LUẬT & NGHỊ ĐỊNH THUẾ - LƯƠNG - BHXH
  // ==========================================
  'luat-109-2025-tncn': {
    decreeId: 'luat-109-2025-tncn',
    title: 'Luật Thuế TNCN 109/2025/QH15',
    category: 'Thuế TNCN',
    compareWith: 'Luật Thuế TNCN 2007 (sửa đổi 2012, 2014 & NQ 954/2020)',
    summary: 'Cải cách thuế TNCN lớn nhất trong 10 năm: Nâng mạnh giảm trừ gia cảnh lên 15.5tr/6.2tr và rút gọn từ 7 bậc xuống còn 5 bậc lũy tiến.',
    items: [
      {
        topic: 'Mức giảm trừ gia cảnh bản thân',
        type: 'added',
        oldRule: '11.000.000 đ/tháng (132 triệu đ/năm).',
        newRule: '15.500.000 đ/tháng (186 triệu đ/năm), tăng 40.9%!',
        impactNote: 'Đại đa số công nhân viên Kiểu Việt có thu nhập dưới 15.5 triệu sẽ hoàn toàn không phải nộp thuế TNCN.'
      },
      {
        topic: 'Mức giảm trừ cho mỗi người phụ thuộc',
        type: 'added',
        oldRule: '4.400.000 đ/tháng/người.',
        newRule: '6.200.000 đ/tháng/người, tăng 40.9%!',
        impactNote: 'Giảm bớt gánh nặng chi phí phụ dưỡng con cái và cha mẹ cho người lao động.'
      },
      {
        topic: 'Rút gọn biểu thuế lũy tiến từng phần',
        type: 'modified',
        oldRule: '7 bậc thuế: 5% (≤5tr), 10% (5-10tr), 15% (10-18tr), 20% (18-32tr), 25% (32-52tr), 30% (52-80tr), 35% (>80tr).',
        newRule: '5 bậc thuế: 5% (≤10tr), 10% (10-30tr), 20% (30-60tr), 30% (60-100tr), 35% (>100tr). Bỏ hoàn toàn bậc 15% và bậc 25%!',
        impactNote: 'Giảm số thuế rõ rệt cho các kỹ sư, chỉ huy trưởng công trình có thu nhập từ 20 đến 50 triệu/tháng.'
      }
    ]
  },

  'nd-73-2024': {
    decreeId: 'nd-73-2024',
    title: 'Nghị định 73/2024/NĐ-CP',
    category: 'Lương & BHXH',
    compareWith: 'Nghị định 24/2023/NĐ-CP (Lương cơ sở 1.8tr)',
    summary: 'Tăng mức lương cơ sở từ 1.800.000đ lên 2.340.000đ/tháng từ 01/07/2024, đẩy trần đóng BHXH, BHYT lên 46.800.000đ/tháng.',
    items: [
      {
        topic: 'Mức lương cơ sở làm căn cứ đóng',
        type: 'added',
        oldRule: '1.800.000 đ/tháng.',
        newRule: '2.340.000 đ/tháng, tăng thêm 30%!',
        impactNote: 'Tăng mức trợ cấp ốm đau, thai sản, dưỡng sức sau sinh cho người lao động.'
      },
      {
        topic: 'Mức trần đóng BHXH, BHYT bắt buộc',
        type: 'modified',
        oldRule: 'Tối đa 20 lần lương cơ sở cũ = 36.000.000 đ/tháng.',
        newRule: 'Tối đa 20 lần lương cơ sở mới = 46.800.000 đ/tháng (tăng thêm 10.800.000 đ mức tính đóng).',
        impactNote: 'Nhân sự cấp quản lý có lương trên 36 triệu phải trích đóng BHXH cao hơn, chi phí đóng bảo hiểm của công ty Kiểu Việt cũng tăng theo.'
      }
    ]
  },

  'nd-145-2020': {
    decreeId: 'nd-145-2020',
    title: 'Nghị định 145/2020/NĐ-CP',
    category: 'Lao động & Tiền lương',
    compareWith: 'Nghị định 05/2015/NĐ-CP & NĐ 45/2013/NĐ-CP',
    summary: 'Hướng dẫn thi hành Bộ luật Lao động về tiền lương, trả lương làm thêm giờ, số giờ tăng ca tối đa và kỷ luật lao động.',
    items: [
      {
        topic: 'Cách tính tiền lương làm thêm giờ',
        type: 'modified',
        oldRule: 'Tính theo đơn giá tiền lương hoặc tiền lương thực trả của công việc đang làm.',
        newRule: 'Quy định công thức chuẩn: Tiền lương giờ thực trả = Tiền lương thực trả của tháng / Tổng số giờ làm việc thực tế.',
        impactNote: 'Phòng Kế toán Kiểu Việt có căn cứ pháp lý rõ ràng để tính lương tăng ca cho công nhân tại nhà máy và công trường.'
      },
      {
        topic: 'Số giờ làm thêm tối đa trong năm',
        type: 'added',
        oldRule: 'Khống chế cứng 200 giờ/năm, một số ngành đặc thù được 300 giờ.',
        newRule: 'Quy định chi tiết các trường hợp được làm thêm đến 300 giờ/năm (trong đó có thi công công trình theo tiến độ cấp bách) và thủ tục thông báo Sở LĐ-TB&XH.',
        impactNote: 'Kiểu Việt hoàn toàn hợp pháp khi huy động tăng ca ban đêm để đổ bê tông hoặc ép cọc hoàn thành tiến độ dự án.'
      }
    ]
  },

  'nd-12-2022': {
    decreeId: 'nd-12-2022',
    title: 'Nghị định 12/2022/NĐ-CP',
    category: 'Xử phạt lao động & BHXH',
    compareWith: 'Nghị định 28/2020/NĐ-CP',
    summary: 'Tăng mạnh mức xử phạt hành chính đối với các hành vi vi phạm về tiền lương, trốn đóng BHXH và vi phạm an toàn vệ sinh lao động tại công trường.',
    items: [
      {
        topic: 'Xử phạt hành vi chậm đóng, trốn đóng BHXH',
        type: 'modified',
        oldRule: 'Phạt tiền từ 12% đến 15% tổng số tiền phải đóng.',
        newRule: 'Phạt tiền từ 18% đến 20% tổng số tiền phải đóng (tối đa 150 triệu đối với tổ chức), buộc truy nộp đủ tiền kèm lãi suất chậm nộp.',
        impactNote: 'Bắt buộc kế toán Kiểu Việt phải trích nộp BHXH đều đặn hàng tháng, tránh rủi ro thanh tra liên ngành.'
      },
      {
        topic: 'Xử phạt vi phạm an toàn vệ sinh lao động (ATVSLĐ)',
        type: 'added',
        oldRule: 'Phạt tiền từ 1 đến 5 triệu đồng nếu thiếu trang bị bảo hộ.',
        newRule: 'Phạt từ 20 đến 40 triệu đồng nếu không huấn luyện ATVSLĐ hoặc không trang bị đủ mũ bảo hộ, dây đai an toàn tại công trường.',
        impactNote: 'Ban điều hành công trường Kiểu Việt phải kiểm tra 100% trang bị bảo hộ trước khi công nhân bước vào thi công.'
      }
    ]
  },

  'qd-595-2017-bhxh': {
    decreeId: 'qd-595-2017-bhxh',
    title: 'Quyết định 595/QĐ-BHXH',
    category: 'Bảo hiểm xã hội',
    compareWith: 'Quyết định 959/QĐ-BHXH',
    summary: 'Quy trình thu BHXH, BHYT, BHTN, bảo hiểm tai nạn lao động bệnh nghề nghiệp và quản lý sổ bảo hiểm, thẻ BHYT số hóa.',
    items: [
      {
        topic: 'Thời hạn nộp tiền BHXH cho đơn vị xây dựng',
        type: 'modified',
        oldRule: 'Bắt buộc nộp chậm nhất vào ngày làm việc cuối cùng của tháng.',
        newRule: 'Doanh nghiệp nông nghiệp, lâm nghiệp, xây dựng được quyền lựa chọn phương thức đóng hằng tháng, 03 tháng hoặc 06 tháng một lần.',
        impactNote: 'Kiểu Việt có thể đăng ký đóng BHXH theo quý cho công nhân thi công theo thời vụ gói thầu.'
      },
      {
        topic: 'Hồ sơ cấp lại sổ BHXH, thẻ BHYT điện tử',
        type: 'added',
        oldRule: 'Phải nộp hồ sơ giấy kèm công văn xác nhận của đơn vị.',
        newRule: 'Giao dịch điện tử 100% qua cổng Dịch vụ công BHXH và ứng dụng VssID.',
        impactNote: 'Kế toán xử lý thủ tục online tức thì, không cần phải lên nộp hồ sơ giấy tại cơ quan BHXH.'
      }
    ]
  },

  // ==========================================
  // NHÓM 4: NGHỊ ĐỊNH HỢP ĐỒNG & CHI PHÍ XÂY DỰNG
  // ==========================================
  'nd-50-2021': {
    decreeId: 'nd-50-2021',
    title: 'Nghị định 50/2021/NĐ-CP',
    category: 'Hợp đồng xây dựng',
    compareWith: 'Nghị định 37/2015/NĐ-CP',
    summary: 'Sửa đổi, bổ sung quy định về tạm ứng hợp đồng xây dựng lên đến 50%, điều chỉnh giá hợp đồng trọn gói khi phát sinh khối lượng.',
    items: [
      {
        topic: 'Mức tạm ứng tối đa hợp đồng xây lắp',
        type: 'modified',
        oldRule: 'Quy định mốc cứng (tạm ứng 10% - 20% tùy quy mô gói thầu).',
        newRule: 'Cho phép thỏa thuận mức tạm ứng tối đa lên đến 50% giá trị hợp đồng xây dựng.',
        impactNote: 'Kiểu Việt đàm phán nhận tạm ứng tối đa để mua trước vật tư sắt thép xi măng, tránh rủi ro biến động giá.'
      },
      {
        topic: 'Điều chỉnh giá hợp đồng trọn gói',
        type: 'added',
        oldRule: 'Hợp đồng trọn gói không được điều chỉnh giá trừ thiên tai, dịch bệnh.',
        newRule: 'Cho phép điều chỉnh khi có phát sinh khối lượng công việc ngoài phạm vi hợp đồng đã ký hoặc khi nhà nước thay đổi chính sách.',
        impactNote: 'Bảo vệ quyền lợi nhà thầu Kiểu Việt khi chủ đầu tư yêu cầu thi công thêm hạng mục ngoài thiết kế ban đầu.'
      }
    ]
  },

  'nd-37-2015': {
    decreeId: 'nd-37-2015',
    title: 'Nghị định 37/2015/NĐ-CP',
    category: 'Hợp đồng xây dựng',
    compareWith: 'Nghị định 48/2010/NĐ-CP',
    summary: 'Khung pháp lý nền tảng quy định chi tiết về hợp đồng xây dựng: Tạm ứng, thanh toán, bảo lãnh, phạt hợp đồng và giải quyết tranh chấp.',
    items: [
      {
        topic: 'Thời hạn Chủ đầu tư phải thanh toán',
        type: 'modified',
        oldRule: 'Thời hạn thanh toán do hai bên thỏa thuận chung chung.',
        newRule: 'Chủ đầu tư bắt buộc phải thanh toán trong vòng 14 ngày làm việc kể từ ngày nhận đủ hồ sơ thanh toán hợp lệ của nhà thầu.',
        impactNote: 'Căn cứ pháp lý then chốt để Kiểu Việt thu hồi công nợ xây dựng cơ bản và tính lãi phạt chậm thanh toán.'
      },
      {
        topic: 'Tỷ lệ bảo lãnh bảo hành công trình',
        type: 'added',
        oldRule: 'Quy định bảo hành chung 5% giá trị hợp đồng.',
        newRule: 'Phân loại rõ: 5% đối với công trình cấp đặc biệt và cấp I; 3% đối với các công trình còn lại.',
        impactNote: 'Giảm số tiền bảo lãnh bảo hành phải phong tỏa tại ngân hàng đối với công trình cấp II, III của Kiểu Việt.'
      }
    ]
  },

  'nd-10-2021': {
    decreeId: 'nd-10-2021',
    title: 'Nghị định 10/2021/NĐ-CP',
    category: 'Chi phí xây dựng',
    compareWith: 'Nghị định 68/2019/NĐ-CP',
    summary: 'Quản lý chi phí đầu tư xây dựng: Sơ bộ tổng mức đầu tư, dự toán xây dựng, định mức dự toán và đơn giá xây dựng công trình.',
    items: [
      {
        topic: 'Thẩm quyền phê duyệt định mức dự toán mới',
        type: 'modified',
        oldRule: 'Phải xin ý kiến thỏa thuận của Bộ Xây dựng kéo dài nhiều tháng.',
        newRule: 'Phân cấp cho Chủ đầu tư tổ chức lập, thẩm định và phê duyệt định mức dự toán mới hoặc điều chỉnh.',
        impactNote: 'Tạo thuận lợi cho Kiểu Việt khi áp dụng công nghệ thi công mới hoặc định mức vật liệu đặc thù tại địa phương.'
      },
      {
        topic: 'Quản lý giá ca máy và thiết bị thi công',
        type: 'added',
        oldRule: 'Áp theo bảng giá ca máy cứng do địa phương công bố định kỳ.',
        newRule: 'Cho phép khảo sát giá thuê máy thực tế trên thị trường tại thời điểm lập dự toán khi giá công bố không phù hợp.',
        impactNote: 'Dự toán phản ánh sát giá thị trường máy xúc, cần cẩu, máy ép cọc của Kiểu Việt.'
      }
    ]
  },

  'nd-123-2020': {
    decreeId: 'nd-123-2020',
    title: 'Nghị định 123/2020/NĐ-CP',
    category: 'Hóa đơn chứng từ',
    compareWith: 'Nghị định 51/2010/NĐ-CP & NĐ 119/2018',
    summary: 'Chấm dứt hoàn toàn kỷ nguyên hóa đơn giấy, bắt buộc 100% doanh nghiệp toàn quốc áp dụng Hóa đơn điện tử có mã hoặc không có mã của cơ quan thuế.',
    items: [
      {
        topic: 'Chấm dứt sử dụng hóa đơn giấy & Báo cáo BC26',
        type: 'removed',
        oldRule: 'Sử dụng hóa đơn giấy tự in, định kỳ hàng quý nộp Báo cáo tình hình sử dụng hóa đơn mẫu BC26/AC.',
        newRule: 'Bãi bỏ 100% hóa đơn giấy và báo cáo BC26. Mọi hóa đơn được truyền thẳng về máy chủ cơ quan thuế.',
        impactNote: 'Loại bỏ hoàn toàn rủi ro bị phạt tiền từ 4 đến 8 triệu đồng do nộp chậm báo cáo BC26.'
      },
      {
        topic: 'Thời điểm lập hóa đơn cung cấp dịch vụ xây dựng',
        type: 'modified',
        oldRule: 'Cho phép xuất hóa đơn chậm khi hoàn thành thanh toán tiền.',
        newRule: 'Bắt buộc lập hóa đơn tại thời điểm hoàn thành việc cung ứng dịch vụ hoặc thời điểm nghiệm thu bàn giao khối lượng, bất kể đã thu tiền hay chưa.',
        impactNote: 'Nghiệm thu giai đoạn công trình ngày nào phải xuất hóa đơn HĐĐT ngay ngày đó.'
      }
    ]
  },

  'nd-125-2020': {
    decreeId: 'nd-125-2020',
    title: 'Nghị định 125/2020/NĐ-CP',
    category: 'Xử phạt vi phạm thuế',
    compareWith: 'Nghị định 129/2013/NĐ-CP',
    summary: 'Tăng mạnh khung tiền phạt vi phạm hành chính về thuế, hóa đơn; quy định phạt kịch khung đối với hành vi xuất hóa đơn sai thời điểm.',
    items: [
      {
        topic: 'Phạt xuất hóa đơn sai thời điểm trong xây lắp',
        type: 'added',
        oldRule: 'Mức phạt nhẹ từ 200.000 đ đến 1.000.000 đ.',
        newRule: 'Phạt từ 4.000.000 đ đến 8.000.000 đ đối với hành vi lập hóa đơn không đúng thời điểm theo quy định.',
        impactNote: 'Kế toán Kiểu Việt phải phối hợp chặt chẽ với Ban chỉ huy công trường để xuất hóa đơn ngay trong ngày ký nghiệm thu A-B.'
      },
      {
        topic: 'Phạt chậm nộp tờ khai thuế',
        type: 'modified',
        oldRule: 'Phạt cảnh cáo hoặc phạt từ 1 đến 5 triệu đồng.',
        newRule: 'Tăng mức phạt kịch khung lên từ 8 đến 15 triệu (chậm trên 60 ngày) và từ 15 đến 25 triệu (nếu phát sinh số thuế phải nộp).',
        impactNote: 'Luôn kiểm tra lịch nộp tờ khai thuế GTGT, TNCN, TNDN trước hạn chót hàng tháng/quý.'
      }
    ]
  },

  'luat-quan-ly-thue-2019': {
    decreeId: 'luat-quan-ly-thue-2019',
    title: 'Luật Quản lý thuế số 38/2019/QH14',
    category: 'Quản lý thuế',
    compareWith: 'Luật Quản lý thuế số 78/2006/QH11',
    summary: 'Hiện đại hóa toàn diện công tác quản lý thuế, giao dịch điện tử 100%, kéo dài hạn nộp quyết toán thuế TNCN và quy định lãi phạt chậm nộp 0.03%/ngày.',
    items: [
      {
        topic: 'Thời hạn nộp hồ sơ quyết toán thuế năm',
        type: 'modified',
        oldRule: 'Chậm nhất là ngày thứ 90 kể từ ngày kết thúc năm tài chính cho cả tổ chức và cá nhân.',
        newRule: 'Tổ chức nộp chậm nhất là ngày cuối cùng của tháng thứ 3; cá nhân tự quyết toán được kéo dài thêm 1 tháng (chậm nhất ngày cuối tháng thứ 4 - 30/04).',
        impactNote: 'Kế toán Kiểu Việt có thêm 30 ngày để tập trung hỗ trợ người lao động quyết toán thuế TNCN sau khi xong quyết toán doanh nghiệp.'
      },
      {
        topic: 'Mức tiền phạt chậm nộp thuế 0.03%/ngày',
        type: 'modified',
        oldRule: 'Từng áp dụng 0.05% hoặc 0.07%/ngày tùy thời kỳ.',
        newRule: 'Thống nhất áp dụng mức 0.03%/ngày tính trên số tiền thuế chậm nộp.',
        impactNote: 'Đã tích hợp trong Máy tính Tiền phạt Chậm nộp tại mục Tiện ích của hệ thống Kiểu Việt.'
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

  // Use selectedId if exists in database, or fallback to passed decreeId
  const currentDiffId = DIFF_DATABASE[selectedId] ? selectedId : (DIFF_DATABASE[decreeId] ? decreeId : null);
  const diffData = currentDiffId ? DIFF_DATABASE[currentDiffId] : null;

  return (
    <div className="space-y-6">
      {/* Selector: Cho phép chuyển đổi nhanh giữa 18 bộ bảng đối chiếu cốt lõi */}
      <div className="bg-card border border-border p-4 rounded-xl shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Layers className="h-4 w-4 text-emerald-600 shrink-0" />
          <span className="text-xs font-bold text-foreground uppercase tracking-wide">
            Kho Đối Chiếu Điểm Mới (18 Văn Bản Cốt Lõi):
          </span>
        </div>
        <select
          value={selectedId}
          onChange={(e) => setSelectedId(e.target.value)}
          className="text-xs bg-muted/50 border border-border rounded-lg px-3 py-2 text-foreground font-medium focus:ring-1 focus:ring-emerald-500 max-w-full sm:max-w-md cursor-pointer"
        >
          <optgroup label="1. Thông tư Kế toán & Tài sản (6 văn bản)">
            <option value="tt-99-2025">Thông tư 99/2025/TT-BTC (Chế độ KT mới vs TT 200)</option>
            <option value="tt-200-2014">Thông tư 200/2014/TT-BTC (Chế độ KT Doanh nghiệp vs QĐ 15)</option>
            <option value="tt-133-2016">Thông tư 133/2016/TT-BTC (Kế toán DNNVV vs QĐ 48)</option>
            <option value="tt-45-2013">Thông tư 45/2013/TT-BTC (Trích Khấu hao TSCĐ vs TT 203)</option>
            <option value="tt-48-2019">Thông tư 48/2019/TT-BTC (Trích lập Dự phòng nợ vs TT 228)</option>
          </optgroup>
          <optgroup label="2. Thông tư Thuế & Hóa đơn (5 văn bản)">
            <option value="tt-96-2015">Thông tư 96/2015/TT-BTC (Chi phí được trừ thuế TNDN vs TT 78)</option>
            <option value="tt-219-2013">Thông tư 219/2013/TT-BTC (Thuế GTGT xây lắp vs TT 06)</option>
            <option value="tt-78-2021">Thông tư 78/2021/TT-BTC (Hóa đơn điện tử vs TT 39 & 32)</option>
            <option value="tt-80-2021">Thông tư 80/2021/TT-BTC (Phân bổ thuế xây dựng vãng lai vs TT 156)</option>
            <option value="tt-111-2013">Thông tư 111/2013/TT-BTC (Thuế TNCN, phụ cấp ăn ca vs TT 84)</option>
            <option value="tt-152-2015">Thông tư 152/2015/TT-BTC (Thuế Tài nguyên đá cát sỏi vs TT 105)</option>
          </optgroup>
          <optgroup label="3. Luật & Nghị định Thuế - Lương - BHXH (5 văn bản)">
            <option value="luat-109-2025-tncn">Luật Thuế TNCN 109/2025/QH15 (Giảm trừ 15.5tr vs Luật cũ)</option>
            <option value="nd-73-2024">Nghị định 73/2024/NĐ-CP (Lương cơ sở 2.34tr tăng trần BHXH)</option>
            <option value="nd-145-2020">Nghị định 145/2020/NĐ-CP (Tính lương tăng ca 300h vs NĐ 05)</option>
            <option value="nd-12-2022">Nghị định 12/2022/NĐ-CP (Xử phạt lao động & BHXH vs NĐ 28)</option>
            <option value="qd-595-2017-bhxh">Quyết định 595/QĐ-BHXH (Quy trình thu bảo hiểm theo quý)</option>
          </optgroup>
          <optgroup label="4. Nghị định Hợp đồng & Chi phí Xây lắp Kiểu Việt (4 văn bản)">
            <option value="nd-50-2021">Nghị định 50/2021/NĐ-CP (Tạm ứng 50%, bù giá trọn gói vs NĐ 37)</option>
            <option value="nd-37-2015">Nghị định 37/2015/NĐ-CP (Thời hạn CĐT thanh toán 14 ngày vs NĐ 48)</option>
            <option value="nd-10-2021">Nghị định 10/2021/NĐ-CP (Quản lý dự toán, định mức XD vs NĐ 68)</option>
            <option value="nd-123-2020">Nghị định 123/2020/NĐ-CP (Thời điểm xuất HĐ xây lắp vs NĐ 51)</option>
            <option value="nd-125-2020">Nghị định 125/2020/NĐ-CP (Phạt xuất HĐ sai thời điểm vs NĐ 129)</option>
            <option value="luat-quan-ly-thue-2019">Luật Quản lý thuế 38/2019/QH14 (Phạt chậm nộp 0.03%/ngày)</option>
          </optgroup>
        </select>
      </div>

      {diffData ? (
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
      ) : (
        /* Fallback: AI Deep Analysis */
        <div className="p-8 text-center bg-card border border-border rounded-2xl shadow-xs space-y-4">
          <div className="p-3 bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300 rounded-2xl inline-flex">
            <Bot className="h-8 w-8" />
          </div>
          <div className="space-y-1 max-w-lg mx-auto">
            <h4 className="font-bold text-base text-foreground">Trợ Lý AI Sẵn Sàng Phân Tích Điểm Mới</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Văn bản này hiện chưa nằm trong bộ 18 bảng đối chiếu mẫu có sẵn. Bạn có thể yêu cầu Trợ lý AI pháp lý đọc toàn văn và bóc tách các điểm thay đổi ngay lập tức!
            </p>
          </div>
          <Button 
            onClick={() => navigate(`/hoi-dap-ai?q=${encodeURIComponent(`Hãy phân tích các điểm mới, điểm sửa đổi thay thế và tác động thực tế đối với doanh nghiệp xây lắp Kiểu Việt của văn bản ${decreeId}`)}`)}
            className="bg-emerald-600 hover:bg-emerald-700 text-white gap-2 font-semibold"
          >
            <Sparkles className="h-4 w-4" /> Yêu Cầu AI Phân Tích Điểm Mới
          </Button>
        </div>
      )}
    </div>
  );
}
