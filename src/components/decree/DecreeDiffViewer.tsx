import React, { useState } from 'react';
import { ArrowRightLeft, Sparkles, CheckCircle, AlertCircle, Trash2, PlusCircle, RefreshCw, FileText, Bot, Layers, ArrowUpRight } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

interface DiffItem {
  topic: string;
  type: 'added' | 'modified' | 'removed';
  oldRule: string;
  newRule: string;
  impactNote: string;
}

interface DecreeDiffData {
  decreeId: string;
  title: string;
  category: string;
  compareWith: string;
  summary: string;
  items: DiffItem[];
}

export const DIFF_DATABASE: Record<string, DecreeDiffData> = {
  // 1. KẾ TOÁN DOANH NGHIỆP
  'tt-99-2025': {
    decreeId: 'tt-99-2025',
    title: 'Thông tư 99/2025/TT-BTC',
    category: 'Kế toán doanh nghiệp',
    compareWith: 'Thông tư 200/2014/TT-BTC',
    summary: 'Thông tư 99/2025/TT-BTC hiện đại hóa hệ thống tài khoản kế toán, bãi bỏ các tài khoản trung gian rườm rà, và tiệm cận chuẩn mực báo cáo tài chính quốc tế IFRS.',
    items: [
      {
        topic: 'Hệ thống tài khoản chi phí xây lắp & sản xuất',
        type: 'modified',
        oldRule: 'Theo dõi chi tiết tách biệt TK 621 (NVL trực tiếp), TK 622 (Nhân công trực tiếp), TK 623 (Máy thi công), TK 627 (Sản xuất chung) rồi kết chuyển sang TK 154.',
        newRule: 'Cho phép doanh nghiệp tinh giản và linh hoạt gom nhóm theo dõi trực tiếp trên các tiểu khoản cấp 2 của TK 154 hoặc hạch toán linh hoạt theo chuẩn IFRS.',
        impactNote: 'Kế toán Xây lắp Kiểu Việt giảm tải 40% chứng từ kết chuyển cuối tháng, thuận tiện quản lý giá thành từng hạng mục công trình.'
      },
      {
        topic: 'Tài khoản 112 - Tiền gửi ngân hàng',
        type: 'modified',
        oldRule: 'Chỉ ghi nhận số dư tiền gửi tại các tổ chức tín dụng trong nước theo phương thức truyền thống.',
        newRule: 'Bổ sung tiểu khoản chi tiết cho tiền gửi thanh toán số, ví điện tử doanh nghiệp và tài khoản tiền gửi đặc thù theo quy định NHNN.',
        impactNote: 'Doanh nghiệp dễ dàng đối soát các dòng tiền nộp thuế điện tử và giao dịch qua cổng công.'
      },
      {
        topic: 'Mẫu Báo cáo lưu chuyển tiền tệ (LCTT)',
        type: 'modified',
        oldRule: 'Phân loại dòng tiền chặt chẽ theo 3 hoạt động truyền thống, bắt buộc thuyết minh phức tạp.',
        newRule: 'Đơn giản hóa một số chỉ tiêu dòng tiền từ hoạt động đầu tư, chuẩn hóa cách xử lý lãi vay vốn hóa vào tài sản dở dang (TK 241).',
        impactNote: 'Tạo thuận lợi cho các doanh nghiệp xây dựng có chu kỳ dự án kéo dài nhiều năm như Kiểu Việt.'
      },
      {
        topic: 'Bãi bỏ các tài khoản ngoài bảng rườm rà',
        type: 'removed',
        oldRule: 'Sử dụng hệ thống tài khoản loại 0 (TK 001, 002, 004, 007...) để theo dõi tài sản thuê ngoài, vật tư giữ hộ.',
        newRule: 'Xóa bỏ việc ghi nhận đơn trên tài khoản loại 0, chuyển sang hình thức theo dõi trên sổ chi tiết và thuyết minh trực tiếp trên BCTC.',
        impactNote: 'Phần mềm kế toán không còn phải chạy song song 2 hệ thống định khoản kép và đơn.'
      }
    ]
  },

  // 2. THUẾ THU NHẬP CÁ NHÂN
  'luat-109-2025-tncn': {
    decreeId: 'luat-109-2025-tncn',
    title: 'Luật Thuế TNCN 109/2025/QH15',
    category: 'Thuế thu nhập cá nhân',
    compareWith: 'Luật Thuế TNCN 2007 (sửa đổi 2012, 2014 & NQ 954/2020)',
    summary: 'Cải cách lớn nhất về Thuế TNCN trong 10 năm qua: Nâng mạnh mức giảm trừ gia cảnh và rút gọn biểu thuế lũy tiến từ 7 bậc xuống còn 5 bậc (áp dụng từ 01/07/2026).',
    items: [
      {
        topic: 'Mức giảm trừ gia cảnh bản thân',
        type: 'added',
        oldRule: '11.000.000 đ/tháng (132 triệu đ/năm).',
        newRule: '15.500.000 đ/tháng (186 triệu đ/năm), tăng 40.9%!',
        impactNote: 'Hơn 70% người lao động có mức lương trung bình sẽ không còn phải nộp thuế TNCN.'
      },
      {
        topic: 'Mức giảm trừ cho mỗi người phụ thuộc',
        type: 'added',
        oldRule: '4.400.000 đ/tháng/người.',
        newRule: '6.200.000 đ/tháng/người, tăng 40.9%!',
        impactNote: 'Giảm bớt gánh nặng chi phí nuôi con nhỏ và phụ dưỡng cha mẹ già.'
      },
      {
        topic: 'Rút gọn biểu thuế lũy tiến từng phần',
        type: 'modified',
        oldRule: '7 bậc thuế: 5% (≤5tr), 10% (5-10tr), 15% (10-18tr), 20% (18-32tr), 25% (32-52tr), 30% (52-80tr), 35% (>80tr).',
        newRule: '5 bậc thuế: 5% (≤10tr), 10% (10-30tr), 20% (30-60tr), 30% (60-100tr), 35% (>100tr). Bỏ bậc 15% và bậc 25%!',
        impactNote: 'Giảm số thuế phải nộp rõ rệt cho mức thu nhập từ 15 đến 60 triệu đồng/tháng.'
      }
    ]
  },

  // 3. TIỀN LƯƠNG CƠ SỞ & TRẦN BHXH
  'nd-73-2024': {
    decreeId: 'nd-73-2024',
    title: 'Nghị định 73/2024/NĐ-CP',
    category: 'Lương & Bảo hiểm xã hội',
    compareWith: 'Nghị định 24/2023/NĐ-CP (Lương cơ sở 1.8tr)',
    summary: 'Quy định tăng mức lương cơ sở từ 1.800.000đ lên 2.340.000đ/tháng từ ngày 01/07/2024, tác động trực tiếp đến mức trần đóng BHXH, BHYT của toàn thể doanh nghiệp.',
    items: [
      {
        topic: 'Mức lương cơ sở làm căn cứ đóng',
        type: 'added',
        oldRule: '1.800.000 đ/tháng.',
        newRule: '2.340.000 đ/tháng, tăng thêm 30%!',
        impactNote: 'Tăng mức hưởng các chế độ ốm đau, thai sản, trợ cấp dưỡng sức và tai nạn lao động.'
      },
      {
        topic: 'Mức trần đóng BHXH, BHYT bắt buộc',
        type: 'modified',
        oldRule: 'Tối đa 20 lần lương cơ sở cũ = 36.000.000 đ/tháng.',
        newRule: 'Tối đa 20 lần lương cơ sở mới = 46.800.000 đ/tháng (tăng thêm 10.800.000 đ mức lương tính đóng).',
        impactNote: 'Nhân sự cấp quản lý có lương trên 36 triệu sẽ phải trích đóng BHXH cao hơn, chi phí bảo hiểm của doanh nghiệp cũng tăng tương ứng.'
      }
    ]
  },

  // 4. HỢP ĐỒNG XÂY DỰNG (SỬA ĐỔI)
  'nd-50-2021': {
    decreeId: 'nd-50-2021',
    title: 'Nghị định 50/2021/NĐ-CP',
    category: 'Hợp đồng xây dựng',
    compareWith: 'Nghị định 37/2015/NĐ-CP (Hợp đồng xây dựng)',
    summary: 'Nới lỏng và chuẩn hóa quy định về tạm ứng hợp đồng xây dựng, điều chỉnh đơn giá và giải quyết phát sinh khối lượng công việc.',
    items: [
      {
        topic: 'Mức tạm ứng tối thiểu hợp đồng xây lắp',
        type: 'modified',
        oldRule: 'Quy định cứng nhắc các mốc giá trị gói thầu (dưới 10 tỷ tạm ứng 20%, 10-50 tỷ tạm ứng 15%, trên 50 tỷ tạm ứng 10%).',
        newRule: 'Linh hoạt thỏa thuận giữa chủ đầu tư và nhà thầu theo tiến độ giải phóng mặt bằng, mức tạm ứng tối đa lên đến 50% giá trị hợp đồng.',
        impactNote: 'Cực kỳ có lợi cho nhà thầu Kiểu Việt để xoay vòng vốn mua vật tư và huy động máy móc sớm.'
      },
      {
        topic: 'Điều chỉnh giá hợp đồng trọn gói',
        type: 'added',
        oldRule: 'Hợp đồng trọn gói gần như không được điều chỉnh giá trừ trường hợp bất khả kháng.',
        newRule: 'Cho phép điều chỉnh trong trường hợp bổ sung khối lượng công việc ngoài phạm vi hợp đồng đã ký hoặc khi nhà nước thay đổi chính sách.',
        impactNote: 'Bảo vệ quyền lợi nhà thầu thi công khi có phát sinh thiết kế thực tế tại công trường.'
      }
    ]
  },

  // 5. NGHỊ ĐỊNH GỐC HỢP ĐỒNG XÂY DỰNG
  'nd-37-2015': {
    decreeId: 'nd-37-2015',
    title: 'Nghị định 37/2015/NĐ-CP',
    category: 'Hợp đồng xây dựng',
    compareWith: 'Nghị định 48/2010/NĐ-CP',
    summary: 'Khung pháp lý nền tảng điều chỉnh toàn bộ hợp đồng xây dựng tại Việt Nam, phân định rõ quyền hạn giữa Chủ đầu tư và Nhà thầu thi công xây lắp.',
    items: [
      {
        topic: 'Thời hạn thanh toán hợp đồng xây dựng',
        type: 'modified',
        oldRule: 'Thời hạn thanh toán do hai bên tự thỏa thuận nhưng không quá 30 ngày.',
        newRule: 'Quy định chặt chẽ: Chủ đầu tư phải thanh toán trong vòng 14 ngày làm việc kể từ khi nhận đủ hồ sơ thanh toán hợp lệ.',
        impactNote: 'Giúp Kiểu Việt có căn cứ pháp lý đòi nợ đọng xây dựng cơ bản và tính lãi chậm trả.'
      },
      {
        topic: 'Bảo lãnh thực hiện hợp đồng và bảo hành',
        type: 'added',
        oldRule: 'Mức bảo lãnh bảo hành không phân biệt rõ cấp công trình.',
        newRule: 'Quy định bảo hành: 5% giá trị hợp đồng với công trình cấp đặc biệt và cấp I; 3% đối với các công trình còn lại.',
        impactNote: 'Tối ưu hóa nguồn tiền bảo lãnh nằm tại ngân hàng, giảm chi phí phí bảo lãnh cho Kiểu Việt.'
      }
    ]
  },

  // 6. QUẢN LÝ CHI PHÍ ĐẦU TƯ XÂY DỰNG
  'nd-10-2021': {
    decreeId: 'nd-10-2021',
    title: 'Nghị định 10/2021/NĐ-CP',
    category: 'Chi phí xây dựng',
    compareWith: 'Nghị định 68/2019/NĐ-CP',
    summary: 'Quy định quản lý chi phí đầu tư xây dựng: xác định tổng mức đầu tư, dự toán xây dựng, định mức và giá ca máy.',
    items: [
      {
        topic: 'Xác định định mức dự toán xây dựng',
        type: 'modified',
        oldRule: 'Thủ tục thỏa thuận định mức mới với Bộ Xây dựng rườm rà, kéo dài nhiều tháng.',
        newRule: 'Phân cấp mạnh mẽ cho Chủ đầu tư tổ chức lập, thẩm định và phê duyệt định mức dự toán mới hoặc điều chỉnh.',
        impactNote: 'Tạo thuận lợi cho Kiểu Việt khi áp dụng công nghệ thi công mới hoặc vật liệu mới tại địa phương.'
      },
      {
        topic: 'Chi phí quản lý dự án và tư vấn',
        type: 'modified',
        oldRule: 'Khống chế cứng nhắc theo tỷ lệ phần trăm định mức.',
        newRule: 'Cho phép lập dự toán chi tiết khi các công việc tư vấn chưa có định mức tỷ lệ hoặc có tính chất đặc thù.',
        impactNote: 'Giúp mảng tư vấn thiết kế và giám sát của Kiểu Việt hạch toán đúng và đủ doanh thu.'
      }
    ]
  },

  // 7. HƯỚNG DẪN BỘ LUẬT LAO ĐỘNG
  'nd-145-2020': {
    decreeId: 'nd-145-2020',
    title: 'Nghị định 145/2020/NĐ-CP',
    category: 'Lao động & Tiền lương',
    compareWith: 'Nghị định 05/2015/NĐ-CP & NĐ 45/2013/NĐ-CP',
    summary: 'Hướng dẫn thi hành Bộ luật Lao động về điều kiện lao động, tiền lương, làm thêm giờ, kỷ luật và bảo vệ lao động nữ.',
    items: [
      {
        topic: 'Cách tính tiền lương làm thêm giờ',
        type: 'modified',
        oldRule: 'Tính theo đơn giá tiền lương hoặc tiền lương thực trả của công việc đang làm.',
        newRule: 'Quy định công thức cụ thể: Tiền lương giờ thực trả = Tiền lương thực trả của tháng / Tổng số giờ làm việc thực tế.',
        impactNote: 'Phòng Nhân sự và Kế toán tiền lương Kiểu Việt có công thức chuẩn để tính lương tăng ca cho công nhân tại nhà máy và công trường.'
      },
      {
        topic: 'Số giờ làm thêm tối đa trong năm',
        type: 'added',
        oldRule: 'Khống chế 200 giờ/năm, một số ngành đặc thù được tối đa 300 giờ.',
        newRule: 'Quy định chi tiết các trường hợp được làm thêm đến 300 giờ/năm (sản xuất VLXD, thi công công trình tiến độ cấp bách) và thủ tục thông báo Sở LĐ-TB&XH.',
        impactNote: 'Kiểu Việt hoàn toàn hợp pháp khi huy động tăng ca mùa cao điểm thi công công trình.'
      }
    ]
  },

  // 8. XỬ PHẠT VI PHẠM LAO ĐỘNG & BHXH
  'nd-12-2022': {
    decreeId: 'nd-12-2022',
    title: 'Nghị định 12/2022/NĐ-CP',
    category: 'Xử phạt lao động & BHXH',
    compareWith: 'Nghị định 28/2020/NĐ-CP',
    summary: 'Tăng mạnh mức xử phạt hành chính đối với các hành vi vi phạm pháp luật về lao động, BHXH, BHYT và an toàn vệ sinh lao động.',
    items: [
      {
        topic: 'Xử phạt hành vi chậm đóng, trốn đóng BHXH',
        type: 'modified',
        oldRule: 'Phạt tiền từ 12% đến 15% tổng số tiền phải đóng.',
        newRule: 'Phạt tiền từ 18% đến 20% tổng số tiền phải đóng (tối đa 75 triệu đồng đối với cá nhân, 150 triệu đối với tổ chức), buộc nộp đủ số tiền chậm đóng kèm lãi suất.',
        impactNote: 'Doanh nghiệp bắt buộc phải trích nộp BHXH đúng hạn hàng tháng, tránh rủi ro thanh tra liên ngành.'
      },
      {
        topic: 'Xử phạt vi phạm an toàn vệ sinh lao động (ATVSLĐ)',
        type: 'added',
        oldRule: 'Mức phạt nhẹ từ 1 đến 5 triệu đồng đối với thiếu trang bị bảo hộ.',
        newRule: 'Tăng mức phạt lên 20 - 40 triệu đồng nếu không huấn luyện ATVSLĐ hoặc không cấp phát đủ trang bị bảo hộ tại công trường.',
        impactNote: 'Kiểu Việt phải siết chặt quy trình trang bị mũ, giầy, dây đai an toàn cho 100% công nhân công trường.'
      }
    ]
  },

  // 9. QUY TRÌNH THU BHXH 595
  'qd-595-2017-bhxh': {
    decreeId: 'qd-595-2017-bhxh',
    title: 'Quyết định 595/QĐ-BHXH',
    category: 'Bảo hiểm xã hội',
    compareWith: 'Quyết định 959/QĐ-BHXH',
    summary: 'Quy trình chuẩn hóa toàn bộ nghiệp vụ thu BHXH, BHYT, BHTN, bảo hiểm tai nạn lao động và quản lý sổ thẻ của ngành BHXH Việt Nam.',
    items: [
      {
        topic: 'Thời hạn nộp tiền BHXH hàng tháng',
        type: 'modified',
        oldRule: 'Nộp chậm nhất vào ngày làm việc cuối cùng của tháng.',
        newRule: 'Doanh nghiệp nông nghiệp, lâm nghiệp, xây dựng được lựa chọn phương thức đóng hằng tháng, 03 tháng hoặc 06 tháng một lần.',
        impactNote: 'Doanh nghiệp xây lắp Kiểu Việt có thể đăng ký đóng BHXH theo quý cho công nhân thời vụ.'
      },
      {
        topic: 'Hồ sơ cấp lại sổ BHXH, thẻ BHYT số hóa',
        type: 'added',
        oldRule: 'Bắt buộc nộp hồ sơ giấy kèm theo công văn xác nhận của đơn vị.',
        newRule: 'Chuyển sang giao dịch điện tử 100% qua phần mềm VssID và cổng dịch vụ công BHXH, cấp mã số BHXH duy nhất.',
        impactNote: 'Kế toán không còn phải lên trực tiếp cơ quan BHXH tỉnh Gia Lai để nộp hồ sơ giấy.'
      }
    ]
  },

  // 10. HÓA ĐƠN ĐIỆN TỬ
  'nd-123-2020': {
    decreeId: 'nd-123-2020',
    title: 'Nghị định 123/2020/NĐ-CP & TT 78/2021',
    category: 'Hóa đơn chứng từ',
    compareWith: 'Nghị định 51/2010/NĐ-CP & Thông tư 39/2014',
    summary: 'Bắt buộc 100% doanh nghiệp toàn quốc xóa bỏ hoàn toàn hóa đơn giấy, chuyển đổi sang hóa đơn điện tử có mã hoặc không có mã của cơ quan thuế.',
    items: [
      {
        topic: 'Bãi bỏ hóa đơn giấy và báo cáo BC26',
        type: 'removed',
        oldRule: 'Sử dụng hóa đơn đặt in/tự in, định kỳ hàng quý phải nộp Báo cáo tình hình sử dụng hóa đơn mẫu BC26/AC.',
        newRule: 'Bãi bỏ 100% hóa đơn giấy và báo cáo BC26. Mọi hóa đơn được truyền tự động về máy chủ cơ quan thuế.',
        impactNote: 'Loại bỏ hoàn toàn rủi ro bị phạt tiền từ 4 đến 8 triệu đồng do chậm nộp BC26/AC.'
      },
      {
        topic: 'Xử lý hóa đơn sai sót',
        type: 'modified',
        oldRule: 'Lập biên bản hủy hóa đơn giấy và xuất hóa đơn mới thay thế.',
        newRule: 'Nộp Mẫu 04/SS-HĐĐT và lựa chọn: Lập hóa đơn điều chỉnh HOẶC lập hóa đơn thay thế mới có ghi chú rõ ràng.',
        impactNote: 'Kế toán Kiểu Việt phải tuân thủ nghiêm ngặt quy trình gửi Mẫu 04/SS trước khi xuất hóa đơn điều chỉnh.'
      }
    ]
  },

  // 11. XỬ PHẠT VI PHẠM THUẾ
  'nd-125-2020': {
    decreeId: 'nd-125-2020',
    title: 'Nghị định 125/2020/NĐ-CP',
    category: 'Xử phạt vi phạm thuế',
    compareWith: 'Nghị định 129/2013/NĐ-CP',
    summary: 'Quy định xử phạt vi phạm hành chính về thuế và hóa đơn, tăng mạnh mức phạt chậm nộp hồ sơ khai thuế và lập hóa đơn sai thời điểm.',
    items: [
      {
        topic: 'Phạt chậm nộp hồ sơ khai thuế',
        type: 'modified',
        oldRule: 'Phạt cảnh cáo hoặc phạt từ 1 đến 5 triệu đồng.',
        newRule: 'Tăng mức phạt kịch khung lên từ 8 đến 15 triệu đồng (nếu chậm trên 60 ngày) và từ 15 đến 25 triệu đồng (nếu phát sinh số thuế phải nộp).',
        impactNote: 'Kế toán Kiểu Việt phải cài đặt lịch nhắc nộp tờ khai thuế GTGT, TNCN, TNDN trước ngày 20 hàng tháng hoặc ngày cuối quý.'
      },
      {
        topic: 'Phạt lập hóa đơn sai thời điểm trong xây lắp',
        type: 'added',
        oldRule: 'Chỉ phạt tiền từ 200.000 đến 1.000.000 đồng.',
        newRule: 'Phạt từ 4.000.000 đến 8.000.000 đồng đối với hành vi lập hóa đơn không đúng thời điểm theo quy định.',
        impactNote: 'Hợp đồng xây dựng nghiệm thu giai đoạn nào phải xuất hóa đơn ngay trong ngày ký biên bản nghiệm thu.'
      }
    ]
  },

  // 12. LUẬT QUẢN LÝ THUẾ
  'luat-quan-ly-thue-2019': {
    decreeId: 'luat-quan-ly-thue-2019',
    title: 'Luật Quản lý thuế số 38/2019/QH14',
    category: 'Quản lý thuế',
    compareWith: 'Luật Quản lý thuế số 78/2006/QH11',
    summary: 'Hiện đại hóa toàn diện công tác quản lý thuế, kéo dài thời hạn nộp quyết toán thuế TNDN và quy định mức phạt chậm nộp 0.03%/ngày.',
    items: [
      {
        topic: 'Thời hạn nộp hồ sơ quyết toán thuế năm',
        type: 'modified',
        oldRule: 'Chậm nhất là ngày thứ 90 kể từ ngày kết thúc năm dương lịch hoặc năm tài chính.',
        newRule: 'Kéo dài thêm 1 tháng đối với cá nhân: Cá nhân tự quyết toán nộp chậm nhất là ngày cuối cùng của tháng thứ 4 (30/04).',
        impactNote: 'Kế toán Kiểu Việt có thêm 30 ngày để hỗ trợ người lao động quyết toán thuế TNCN sau khi hoàn thành quyết toán công ty.'
      },
      {
        topic: 'Tiền phạt chậm nộp thuế 0.03%/ngày',
        type: 'modified',
        oldRule: 'Từng áp dụng 0.05% hoặc 0.07%/ngày tùy thời kỳ.',
        newRule: 'Thống nhất mức tiền chậm nộp là 0.03%/ngày tính trên số tiền thuế chậm nộp.',
        impactNote: 'Đã được tích hợp trực tiếp vào Máy tính Tiền phạt Chậm nộp trong mục Tiện ích của hệ thống Kiểu Việt.'
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
      {/* Selector: Cho phép chuyển đổi nhanh giữa các bảng đối chiếu */}
      <div className="bg-card border border-border p-4 rounded-xl shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Layers className="h-4 w-4 text-emerald-600" />
          <span className="text-xs font-bold text-foreground uppercase tracking-wide">Chọn văn bản xem đối chiếu:</span>
        </div>
        <select
          value={selectedId}
          onChange={(e) => setSelectedId(e.target.value)}
          className="text-xs bg-muted/50 border border-border rounded-lg px-3 py-2 text-foreground font-medium focus:ring-1 focus:ring-emerald-500 max-w-full sm:max-w-md"
        >
          <optgroup label="Kế toán doanh nghiệp">
            <option value="tt-99-2025">Thông tư 99/2025/TT-BTC (vs TT 200/2014)</option>
          </optgroup>
          <optgroup label="Thuế & Lương 2026">
            <option value="luat-109-2025-tncn">Luật Thuế TNCN 109/2025/QH15 (vs Luật cũ 2007)</option>
            <option value="nd-73-2024">Nghị định 73/2024/NĐ-CP (Lương cơ sở 2.34tr vs 1.8tr)</option>
            <option value="nd-145-2020">Nghị định 145/2020/NĐ-CP (Hướng dẫn Bộ luật Lao động)</option>
            <option value="nd-12-2022">Nghị định 12/2022/NĐ-CP (Xử phạt lao động & BHXH)</option>
            <option value="qd-595-2017-bhxh">Quyết định 595/QĐ-BHXH (Quy trình thu bảo hiểm)</option>
          </optgroup>
          <optgroup label="Hợp đồng & Chi phí Xây lắp Kiểu Việt">
            <option value="nd-50-2021">Nghị định 50/2021/NĐ-CP (Sửa đổi Hợp đồng XD)</option>
            <option value="nd-37-2015">Nghị định 37/2015/NĐ-CP (Gốc Hợp đồng xây dựng)</option>
            <option value="nd-10-2021">Nghị định 10/2021/NĐ-CP (Quản lý chi phí đầu tư XD)</option>
          </optgroup>
          <optgroup label="Hóa đơn & Quản lý thuế">
            <option value="nd-123-2020">Nghị định 123/2020 & TT 78 (Hóa đơn điện tử)</option>
            <option value="nd-125-2020">Nghị định 125/2020/NĐ-CP (Xử phạt vi phạm thuế)</option>
            <option value="luat-quan-ly-thue-2019">Luật Quản lý thuế 38/2019/QH14</option>
          </optgroup>
        </select>
      </div>

      {diffData ? (
        <>
          {/* Banner giới thiệu so sánh */}
          <div className="bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-50 dark:from-emerald-950/40 dark:via-teal-950/20 dark:to-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-xl p-5 shadow-xs space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-300 font-bold text-sm">
                <Sparkles className="h-4 w-4 text-emerald-600" />
                <span>{diffData.title}</span>
                <span className="text-muted-foreground font-normal">đối chiếu với:</span>
                <span className="underline decoration-emerald-500 underline-offset-4">{diffData.compareWith}</span>
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
              Văn bản này hiện chưa nằm trong bộ 12 bảng đối chiếu mẫu có sẵn. Bạn có thể yêu cầu Trợ lý AI pháp lý đọc toàn văn và bóc tách các điểm thay đổi ngay lập tức!
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
