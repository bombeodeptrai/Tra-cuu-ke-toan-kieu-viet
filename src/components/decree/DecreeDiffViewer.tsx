import React, { useState } from 'react';
import { ArrowRightLeft, Sparkles, CheckCircle, AlertCircle, Trash2, PlusCircle, RefreshCw, FileText } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';

interface DiffItem {
  topic: string;
  type: 'added' | 'modified' | 'removed';
  oldRule: string;
  newRule: string;
  impactNote: string;
}

interface DecreeDiffData {
  decreeId: string;
  compareWith: string;
  summary: string;
  items: DiffItem[];
}

const DIFF_DATABASE: Record<string, DecreeDiffData> = {
  'tt-99-2025': {
    decreeId: 'tt-99-2025',
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
  'luat-109-2025-tncn': {
    decreeId: 'luat-109-2025-tncn',
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
  'nd-73-2024': {
    decreeId: 'nd-73-2024',
    compareWith: 'Nghị định 24/2023/NĐ-CP (Lương cơ sở)',
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
  'nd-50-2021': {
    decreeId: 'nd-50-2021',
    compareWith: 'Nghị định 37/2015/NĐ-CP (Hợp đồng xây dựng)',
    summary: 'Nới lỏng và chuẩn hóa quy định về tạm ứng hợp đồng xây dựng, điều chỉnh đơn giá và giải quyết phát sinh khối lượng công việc.',
    items: [
      {
        topic: 'Mức tạm ứng tối thiểu hợp đồng xây lắp',
        type: 'modified',
        oldRule: 'Quy định cứng nhắc các mốc giá trị gói thầu (dưới 10 tỷ tạm ứng 20%, 10-50 tỷ tạm ứng 15%, trên 50 tỷ tạm ứng 10%).',
        newRule: 'Linh hoạt thỏa thuận giữa chủ đầu tư và nhà thầu theo tiến độ giải phóng mặt bằng, mức tạm ứng tối đa lên đến 50% giá trị hợp đồng (hoặc cao hơn nếu Thủ tướng cho phép).',
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
  }
};

interface DecreeDiffViewerProps {
  decreeId: string;
}

export function DecreeDiffViewer({ decreeId }: DecreeDiffViewerProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const diffData = DIFF_DATABASE[decreeId];

  if (!diffData) {
    return (
      <div className="p-8 text-center bg-muted/20 border border-dashed border-border rounded-xl space-y-3">
        <div className="p-3 bg-muted/50 rounded-full inline-flex text-muted-foreground">
          <ArrowRightLeft className="h-6 w-6" />
        </div>
        <h4 className="font-semibold text-foreground">Chưa có bảng đối chiếu cho văn bản này</h4>
        <p className="text-xs text-muted-foreground max-w-md mx-auto">
          Hiện tại tính năng so sánh trực quan đang được tối ưu cho các văn bản trọng yếu: 
          <strong> TT 99/2025, Luật TNCN 109/2025, NĐ 73/2024, NĐ 50/2021</strong>.
        </p>
      </div>
    );
  }

  const filteredItems = diffData.items.filter(item => 
    item.topic.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.newRule.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.impactNote.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Banner giới thiệu so sánh */}
      <div className="bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-50 dark:from-emerald-950/40 dark:via-teal-950/20 dark:to-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-xl p-5 shadow-sm space-y-2">
        <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-300 font-bold text-sm">
          <Sparkles className="h-4 w-4 text-emerald-600" />
          Đối Chiếu Điểm Mới Với: {diffData.compareWith}
        </div>
        <p className="text-xs md:text-sm text-foreground/80 leading-relaxed">
          {diffData.summary}
        </p>
      </div>

      {/* Thanh tìm kiếm nhanh */}
      <div className="flex items-center justify-between gap-4">
        <div className="text-xs font-semibold text-muted-foreground">
          Hiển thị <strong>{filteredItems.length}</strong> điểm thay đổi cốt lõi
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
        {filteredItems.map((item, index) => {
          const badgeConfig = {
            added: { label: 'BỔ SUNG MỚI', bg: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-200', icon: PlusCircle },
            modified: { label: 'SỬA ĐỔI / THAY THẾ', bg: 'bg-blue-100 text-blue-800 dark:bg-blue-900/60 dark:text-blue-200', icon: RefreshCw },
            removed: { label: 'BÃI BỎ', bg: 'bg-red-100 text-red-800 dark:bg-red-900/60 dark:text-red-200', icon: Trash2 },
          }[item.type];

          const Icon = badgeConfig.icon;

          return (
            <Card key={index} className="border-border shadow-sm overflow-hidden">
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
    </div>
  );
}
