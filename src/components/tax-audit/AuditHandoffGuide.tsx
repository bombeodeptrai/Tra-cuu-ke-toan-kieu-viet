import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { 
  ShieldCheck, AlertTriangle, CheckCircle2, Clock, 
  FileText, ExternalLink, Scale, UserCheck, BookOpen, 
  FolderArchive, ArrowRight, Sparkles, Building2, Flame
} from 'lucide-react';

export function AuditHandoffGuide({ 
  openWork, 
  openLaws 
}: { 
  openWork: () => void; 
  openLaws: () => void; 
}) {
  const stages = [
    {
      number: '1',
      title: 'Giai đoạn 1: Tiếp nhận Quyết định & Thiết lập Phòng làm việc độc lập',
      icon: Building2,
      color: 'blue',
      rows: [
        'Kiểm tra tính pháp lý của Quyết định kiểm tra thuế: Người ký phải là Cục trưởng hoặc Chi cục trưởng; kiểm tra chính xác niên độ kế toán bị thanh tra và danh sách thành viên đoàn theo Điều 110, 111 Luật Quản lý thuế 38/2019.',
        'Bố trí phòng làm việc riêng biệt cho Đoàn kiểm tra: Cách ly hoàn toàn với phòng Kế toán và khu vực làm việc chung; trang bị máy in, máy scan riêng, có camera an ninh để đảm bảo an toàn hồ sơ gốc.',
        'Ban hành Quyết định cử Đầu mối làm việc duy nhất: Chỉ duy nhất Kế toán trưởng hoặc người được Tổng Giám đốc ủy quyền bằng văn bản mới được trực tiếp đối thoại và cung cấp tài liệu cho đoàn.'
      ],
      output: 'Bộ hồ sơ phân công đầu mối + Biên bản bàn giao phòng làm việc độc lập cho đoàn kiểm tra.'
    },
    {
      number: '2',
      title: 'Giai đoạn 2: Quản lý Yêu cầu cung cấp hồ sơ & Nguyên tắc "Hỏi gì đáp nấy"',
      icon: FileText,
      color: 'emerald',
      rows: [
        'Mọi yêu cầu cung cấp tài liệu từ kiểm tra viên phải lập thành Phiếu yêu cầu (ghi rõ người yêu cầu, nội dung tài liệu, ngày nhận và hạn bàn giao). Nhập ngay vào "Sổ Nhật Ký Đoàn" trên hệ thống.',
        'Nguyên tắc cung cấp chứng từ: Chỉ cung cấp chính xác chứng từ được yêu cầu trong niên độ thanh tra; tuyệt đối không cung cấp thêm các tài liệu ngoài niên độ hoặc hồ sơ dự toán nội bộ chưa hoàn thiện.',
        'Nếu hồ sơ phức tạp cần thời gian tập hợp (như phiếu cân xe, hợp đồng thầu phụ cũ): Kế toán trưởng lập văn bản xin gia hạn thời gian cung cấp từ 3 - 5 ngày làm việc theo Điều 16 Luật Quản lý thuế.'
      ],
      output: 'Sổ nhật ký ghi nhận 100% yêu cầu của đoàn, có phân công người thực hiện và hạn bàn giao cụ thể.'
    },
    {
      number: '3',
      title: 'Giai đoạn 3: Phân loại 3 nhóm rủi ro & Kỹ thuật đối thoại phản biện',
      icon: Scale,
      color: 'purple',
      rows: [
        'Nhóm 1 — Hồ sơ chuẩn chỉ 100%: Xuất trình ngay tài liệu gốc (Hợp đồng, Hóa đơn, Ủy nhiệm chi, Bảng kê lâm sản) để đoàn kiểm tra xác nhận tuân thủ và đóng nội dung rà soát.',
        'Nhóm 2 — Hồ sơ thiếu sót thủ tục hành chính: Rà soát và hoàn thiện ngay trong thời gian thanh tra (bổ sung bản cam kết 08/CK-TNCN, quyết định định mức xưởng mộc, kết quả nén mẫu R28 bê tông).',
        'Nhóm 3 — Khoản chi phí có nguy cơ bị bóc tách (Hao hụt mùn cưa xưởng gỗ, trích trước TK 335, mỏ đá): Sử dụng 8 Kịch bản phản biện mẫu trong mục AI Chat, đối thoại dựa trên bản chất kinh tế (Substance over Form) và trích dẫn điều luật miễn trừ.'
      ],
      output: 'Bảng phân loại chi phí 3 nhóm và các bản giải trình chuyên đề ký đóng dấu công ty.'
    },
    {
      number: '4',
      title: 'Giai đoạn 4: Bàn giao chứng từ có ký nhận & Quản lý chặt chẽ bản gốc',
      icon: FolderArchive,
      color: 'amber',
      rows: [
        'Ưu tiên cung cấp bản sao chụp (photo) có đóng dấu treo của Công ty Cổ phần Kiểu Việt. Đánh số thứ tự từng trang chứng từ để tránh thất lạc.',
        'Khi đoàn yêu cầu đối chiếu bản gốc (Sổ đỏ, Hợp đồng tín dụng, Hóa đơn giấy cũ): Lập Biên bản giao nhận hồ sơ gốc ghi rõ số lượng, tình trạng và thời hạn đoàn phải hoàn trả lại cho doanh nghiệp.',
        'Cập nhật trạng thái "Đã bàn giao" trên hệ thống để lưu trữ lịch sử phiên bản tài liệu đã nộp cho đoàn.'
      ],
      output: 'Biên bản bàn giao tài liệu có chữ ký xác nhận của Trưởng đoàn / Thành viên đoàn kiểm tra.'
    },
    {
      number: '5',
      title: 'Giai đoạn 5: Rà soát Dự thảo Biên bản & Thực hiện quyền "Bảo lưu ý kiến"',
      icon: ShieldCheck,
      color: 'rose',
      rows: [
        'Đọc kỹ từng câu chữ trong Dự thảo Biên bản kiểm tra thuế: Đối chiếu lại từng khoản mục truy thu thuế GTGT, TNDN, TNCN và tiền phạt chậm nộp xem có khớp với số liệu đã giải trình hay không.',
        'Thời hạn giải trình biên bản: Doanh nghiệp có quyền gửi văn bản giải trình bổ sung trong vòng 05 ngày làm việc kể từ ngày nhận dự thảo biên bản theo quy định của Luật Quản lý thuế.',
        'Thực hiện quyền Bảo lưu ý kiến (Điều 16 & 112 Luật Quản lý thuế 38/2019): Nếu đoàn vẫn bảo lưu quan điểm xuất toán chi phí hợp lý của Kiểu Việt, Tổng Giám đốc ghi rõ ý kiến không đồng ý trực tiếp vào Biên bản trước khi ký, làm căn cứ khiếu nại lên Cục Thuế Gia Lai hoặc Tổng cục Thuế.'
      ],
      output: 'Biên bản kiểm tra chính thức kèm Bản bảo lưu ý kiến pháp lý của Công ty Cổ phần Kiểu Việt.'
    }
  ];

  return (
    <section className="space-y-6" aria-label="Cẩm nang tiếp đoàn kiểm tra thuế">
      {/* HEADER BANNER */}
      <div className="rounded-2xl border border-border bg-gradient-to-r from-slate-900 via-purple-950 to-slate-900 text-white p-6 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 text-xs font-bold flex items-center gap-1.5">
                <Flame className="h-3.5 w-3.5 text-amber-400" /> Cẩm Nang Tiếp Đoàn Thực Chiến
              </span>
              <Badge variant="outline" className="bg-white/10 text-white border-white/20 text-xs">
                5 Giai Đoạn Vàng
              </Badge>
            </div>
            <h2 className="text-xl md:text-2xl font-bold tracking-tight text-white">
              Quy Trình 5 Giai Đoạn Tiếp Đoàn Kiểm Tra Thuế & Kỹ Năng Bảo Vệ Doanh Nghiệp
            </h2>
            <p className="text-sm text-slate-300 max-w-3xl leading-relaxed">
              Chiến lược làm việc chuyên nghiệp, khôn khéo và đúng luật giúp Ban Giám đốc và Kế toán trưởng Công ty Cổ phần Kiểu Việt làm chủ buổi kiểm tra, bảo vệ tối đa quyền lợi hợp pháp và giảm thiểu rủi ro bị truy thu, xử phạt.
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5 self-start md:self-auto">
            <Button onClick={openWork} size="sm" className="h-9 text-xs bg-purple-600 hover:bg-purple-700 text-white gap-1.5 shadow-xs">
              <FolderArchive className="h-4 w-4" />
              <span>Mở Sổ Nhật Ký Bàn Giao</span>
            </Button>
            <Button onClick={openLaws} variant="outline" size="sm" className="h-9 text-xs bg-white/10 hover:bg-white/20 text-white border-white/20 gap-1.5">
              <BookOpen className="h-4 w-4" />
              <span>Mở Kho Căn Cứ Luật</span>
            </Button>
          </div>
        </div>
      </div>

      {/* 5 GIAI ĐOẠN HÀNH ĐỘNG CHI TIẾT */}
      <div className="space-y-4">
        {stages.map((st) => {
          const Icon = st.icon;
          return (
            <Card key={st.title} className="border-border shadow-xs hover:border-slate-400 dark:hover:border-slate-600 transition-all">
              <CardHeader className="p-5 pb-3">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300 font-black text-sm">
                      {st.number}
                    </div>
                    <CardTitle className="text-base sm:text-lg font-bold text-foreground">
                      {st.title}
                    </CardTitle>
                  </div>
                  <Badge variant="outline" className="text-xs font-semibold px-2.5 py-1">
                    Giai đoạn cốt tử
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="p-5 pt-1 space-y-4">
                <ul className="space-y-2.5 text-xs sm:text-sm text-muted-foreground leading-relaxed pl-1">
                  {st.rows.map((row, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-2.5 bg-muted/40 p-3 rounded-xl border border-border">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{row}</span>
                    </li>
                  ))}
                </ul>

                <div className="rounded-xl bg-purple-50/50 dark:bg-purple-950/30 border border-purple-200/60 dark:border-purple-800/60 p-3 text-xs text-purple-900 dark:text-purple-200 flex items-start gap-2">
                  <span className="font-bold text-purple-700 dark:text-purple-300 flex-shrink-0">📦 Sản phẩm đầu ra bắt buộc:</span>
                  <span>{st.output}</span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
