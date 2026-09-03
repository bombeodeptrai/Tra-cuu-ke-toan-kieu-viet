import React, { useState } from 'react';
import { 
  BookOpen, Search, MessageSquareText, Edit3, Bookmark, LayoutDashboard,
  Calculator, FileText, Download, ShieldCheck, ArrowRightLeft, Sparkles,
  Building2, HelpCircle, CheckCircle2, ChevronRight, AlertTriangle, Layers,
  Printer, Copy, ZoomIn, FileSpreadsheet, Eye, CloudUpload, ArrowUpRight
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { useNavigate } from 'react-router-dom';

export function GuidePage() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('overview');

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const tableOfContents = [
    { id: 'overview', title: '1. Tổng quan & Kiến trúc hệ thống', icon: LayoutDashboard },
    { id: 'search-library', title: '2. Thư viện 55 văn bản & Tải PDF Drive', icon: LibraryIcon },
    { id: 'smart-toc', title: '3. Mục lục thông minh & Đọc luật đa cỡ chữ', icon: FileText },
    { id: 'legal-diff', title: '4. Bảng đối chiếu điểm mới (Diff Viewer)', icon: ArrowRightLeft },
    { id: 'calculators', title: '5. Bộ tiện ích tính thuế & lương 2026', icon: Calculator },
    { id: 'chart-accounts', title: '6. Hệ thống tài khoản TT 99/2025', icon: BookOpen },
    { id: 'ai-assistant', title: '7. Trợ lý AI hỏi đáp pháp lý & bóc tách ảnh/PDF', icon: MessageSquareText },
    { id: 'notes-handbook', title: '8. Bôi đen trích dẫn & Sổ tay kế toán', icon: Edit3 },
    { id: 'pdf-audit', title: '9. Góp ý & Tự động bóc tách PDF trên trình duyệt', icon: CloudUpload },
    { id: 'faqs', title: '10. Câu hỏi thường gặp (FAQs)', icon: HelpCircle },
  ];

  function LibraryIcon(props: any) {
    return <Layers {...props} />;
  }

  return (
    <div className="container max-w-6xl mx-auto px-4 py-8 space-y-10 animate-in fade-in duration-300">
      {/* Banner Tiêu Đề Doanh Nghiệp */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-800 via-emerald-700 to-teal-800 text-white p-8 md:p-12 shadow-lg">
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-emerald-100 text-xs font-semibold border border-white/20">
            <Building2 className="h-3.5 w-3.5 text-emerald-300" />
            CÔNG TY CỔ PHẦN XÂY LẮP KIỂU VIỆT
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
            Cẩm Nang Hướng Dẫn Sử Dụng Hệ Thống Tra Cứu Kế Toán & Pháp Luật
          </h1>
          <p className="text-sm md:text-base text-emerald-100/90 leading-relaxed font-normal">
            Tài liệu hướng dẫn toàn diện dành riêng cho Ban Giám đốc, Kế toán trưởng, Kế toán viên và Cán bộ quản lý dự án công trình Kiểu Việt khai thác 100% hiệu năng của hệ thống số hóa pháp luật 2026.
          </p>
          <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-emerald-200">
            <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> 55 Văn bản Toàn văn Chuẩn</span>
            <span>•</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> 100% PDF Google Drive</span>
            <span>•</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> Đồng bộ 2 chiều Google Sheets</span>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 translate-x-12 translate-y-12 w-96 h-96 bg-white/5 rounded-full blur-2xl pointer-events-none"></div>
      </div>

      {/* Grid: Mục lục nhanh bên hông & Nội dung chính */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* CỘT TRÁI: MỤC LỤC TRUY CẬP NHANH (STICKY TOC) */}
        <div className="lg:col-span-4 space-y-4">
          <div className="lg:sticky lg:top-24 bg-card border border-border/70 rounded-2xl p-5 shadow-sm space-y-3">
            <h3 className="font-bold text-sm text-foreground uppercase tracking-wider flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-emerald-600" />
              Mục lục hướng dẫn
            </h3>
            <div className="h-px bg-border/60"></div>
            <nav className="space-y-1 text-xs">
              {tableOfContents.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-all flex items-center gap-2.5 font-medium ${
                      activeSection === item.id 
                        ? 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-800 dark:text-emerald-300 font-bold border-l-2 border-emerald-600' 
                        : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                    }`}
                  >
                    <Icon className="h-4 w-4 shrink-0 text-emerald-600" />
                    <span className="truncate">{item.title}</span>
                  </button>
                );
              })}
            </nav>

            <div className="pt-4 border-t border-border/50 space-y-2">
              <div className="p-3 bg-muted/40 rounded-xl text-xs space-y-1 text-muted-foreground">
                <div className="font-semibold text-foreground">Hỗ trợ kỹ thuật nội bộ:</div>
                <p>Phòng Kế toán & IT Kiểu Việt</p>
                <p>Hotline: <strong>(0256) 3947 003</strong></p>
                <p>Email: <strong>Kieuviet2006@gmail.com</strong></p>
              </div>
            </div>
          </div>
        </div>

        {/* CỘT PHẢI: NỘI DUNG HƯỚNG DẪN CHI TIẾT */}
        <div className="lg:col-span-8 space-y-12 text-foreground">
          
          {/* PHẦN 1: TỔNG QUAN HỆ THỐNG */}
          <section id="overview" className="space-y-4 scroll-mt-24">
            <div className="flex items-center gap-2 border-b border-border pb-3">
              <div className="p-2 rounded-xl bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300">
                <LayoutDashboard className="h-5 w-5" />
              </div>
              <h2 className="text-xl md:text-2xl font-bold tracking-tight">1. Tổng Quan & Kiến Trúc Hệ Thống</h2>
            </div>
            
            <p className="text-sm leading-relaxed text-muted-foreground">
              Hệ thống Tra Cứu Kế Toán Kiểu Việt là nền tảng quản trị và tra cứu văn bản pháp luật nội bộ được xây dựng chuyên biệt cho mô hình tập đoàn đa lĩnh vực của Kiểu Việt (Tư vấn xây dựng, Thi công xây lắp, Sản xuất vật liệu xây dựng, Khai thác khoáng sản).
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs pt-2">
              <div className="p-4 rounded-xl border border-emerald-200/80 bg-emerald-50/40 dark:bg-emerald-950/20 space-y-2">
                <span className="font-bold text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4" /> 100% Văn bản chuẩn
                </span>
                <p className="text-muted-foreground leading-relaxed">
                  Lưu trữ toàn văn đầy đủ từ Quốc hiệu đến Chữ ký, loại bỏ 100% quảng cáo và tường phí của các trang thương mại.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-blue-200/80 bg-blue-50/40 dark:bg-blue-950/20 space-y-2">
                <span className="font-bold text-blue-800 dark:text-blue-300 flex items-center gap-1.5">
                  <FileSpreadsheet className="h-4 w-4" /> Đồng bộ Google Sheet
                </span>
                <p className="text-muted-foreground leading-relaxed">
                  Kết nối trực tiếp vào Google Sheet `Database Tra Cuu Ke Toan`, cho phép Admin thêm sửa xóa trực quan từ xa.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-teal-200/80 bg-teal-50/40 dark:bg-teal-950/20 space-y-2">
                <span className="font-bold text-teal-800 dark:text-teal-300 flex items-center gap-1.5">
                  <CloudUpload className="h-4 w-4" /> Kho PDF Google Drive
                </span>
                <p className="text-muted-foreground leading-relaxed">
                  Toàn bộ 55 file PDF lưu trữ công khai trên Google Drive công ty Kiểu Việt, tải tốc độ cao, không bị lỗi link.
                </p>
              </div>
            </div>
          </section>

          {/* PHẦN 2: THƯ VIỆN & TẢI PDF DRIVE */}
          <section id="search-library" className="space-y-4 scroll-mt-24">
            <div className="flex items-center gap-2 border-b border-border pb-3">
              <div className="p-2 rounded-xl bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-300">
                <Layers className="h-5 w-5" />
              </div>
              <h2 className="text-xl md:text-2xl font-bold tracking-tight">2. Thư Viện 55 Văn Bản & Cơ Chế Tải PDF Drive</h2>
            </div>

            <p className="text-sm leading-relaxed text-muted-foreground">
              Kho thư viện bao phủ 4 trục nghiệp vụ cốt lõi: <strong>Kế toán doanh nghiệp</strong>, <strong>Chính sách thuế</strong>, <strong>Lao động tiền lương & BHXH</strong>, và <strong>Hợp đồng xây dựng</strong>.
            </p>

            <div className="space-y-3 text-xs">
              <div className="p-4 bg-muted/40 border border-border rounded-xl space-y-2">
                <h4 className="font-bold text-foreground text-sm flex items-center gap-2">
                  <Download className="h-4 w-4 text-emerald-600" />
                  3 Nút tải văn bản tại trang chi tiết:
                </h4>
                <div className="space-y-2 pl-2">
                  <div>
                    <strong className="text-blue-700 dark:text-blue-300">• Tải PDF & Phụ lục (Google Drive):</strong>
                    <span className="text-muted-foreground ml-1">Tải file PDF chính thức được lưu trên thư mục Google Drive của Kiểu Việt (`Kiểu Việt - Kho Văn Bản PDF`). Tốc độ tải tối đa, mở được trên mọi thiết bị.</span>
                  </div>
                  <div>
                    <strong className="text-emerald-700 dark:text-emerald-300">• Tải File Biểu Mẫu (Miễn Phí):</strong>
                    <span className="text-muted-foreground ml-1">Mở liên kết tải trực tiếp các biểu mẫu Word/Excel, phụ lục đính kèm từ Hệ thống Pháp luật Việt Nam.</span>
                  </div>
                  <div>
                    <strong className="text-foreground">• Hỏi AI về văn bản này:</strong>
                    <span className="text-muted-foreground ml-1">Tự động điền câu hỏi thẩm định văn bản vào Trợ lý AI để tóm tắt các điểm rủi ro và các bút toán định khoản kế toán cần chú ý.</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* PHẦN 3: MỤC LỤC THÔNG MINH & ĐỌC LUẬT */}
          <section id="smart-toc" className="space-y-4 scroll-mt-24">
            <div className="flex items-center gap-2 border-b border-border pb-3">
              <div className="p-2 rounded-xl bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300">
                <FileText className="h-5 w-5" />
              </div>
              <h2 className="text-xl md:text-2xl font-bold tracking-tight">3. Mục Lục Điều Khoản Thông Minh & Trình Đọc Luật Đa Cỡ Chữ</h2>
            </div>

            <p className="text-sm leading-relaxed text-muted-foreground">
              Giải quyết triệt để vấn đề kế toán phải cuộn chuột hàng chục trang để tìm 1 điều khoản trong các văn bản dài 50 - 300 trang (như Thông tư 80, Thông tư 200, Nghị định 145).
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-4 bg-card border border-border rounded-xl space-y-2">
                <div className="font-bold text-sm text-foreground flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  Mục lục cây điều khoản (Sticky TOC)
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  • Ghim cố định ở cột phải màn hình Desktop.
                  <br />• Tự động bóc tách từng <strong>Chương</strong> và từng <strong>Điều khoản</strong>.
                  <br />• Có ô tìm kiếm: gõ <em>"Điều 15"</em> hoặc <em>"khấu trừ"</em> để lọc ngay lập tức.
                  <br />• Bấm vào điều nào ➔ Màn hình trượt mượt mà đến đúng điều đó và nhấp nháy đèn vàng nhận diện.
                  <br />• Trên điện thoại: Có nút tròn nổi <strong>"Mục lục"</strong> ở góc dưới để mở ngăn kéo xem bất kỳ lúc nào.
                </p>
              </div>

              <div className="p-4 bg-card border border-border rounded-xl space-y-2">
                <div className="font-bold text-sm text-foreground flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  Thanh công cụ đọc luật chuyên nghiệp
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  • <strong>Bộ chỉnh cỡ chữ:</strong> Nút `[ A- | 16px | A+ ]` cho phép phóng to thu nhỏ văn bản từ 13px đến 24px, tự động lưu vào bộ nhớ máy để đọc luật nhiều giờ không mỏi mắt.
                  <br />• <strong>Sao chép trích dẫn:</strong> 1-click để copy ngay số hiệu và trích dẫn chuẩn xác, thuận tiện paste vào email hoặc báo cáo gửi Sếp.
                </p>
              </div>
            </div>
          </section>

          {/* PHẦN 4: DIFF COMPARISON */}
          <section id="legal-diff" className="space-y-4 scroll-mt-24">
            <div className="flex items-center gap-2 border-b border-border pb-3">
              <div className="p-2 rounded-xl bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300">
                <ArrowRightLeft className="h-5 w-5" />
              </div>
              <h2 className="text-xl md:text-2xl font-bold tracking-tight">4. Bảng Đối Chiếu Điểm Mới (Legal Diff Viewer)</h2>
            </div>

            <p className="text-sm leading-relaxed text-muted-foreground">
              Tab <strong>"Điểm mới & So sánh"</strong> tại trang chi tiết giúp kế toán viên nắm bắt ngay những thay đổi mà không phải so sánh thủ công giữa 2 cuốn văn bản:
            </p>

            <div className="p-4 bg-card border border-border rounded-xl space-y-3 text-xs">
              <div className="font-bold text-foreground text-sm">Các bộ đối chiếu trọng tâm được tích hợp sẵn:</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3 bg-muted/40 rounded-lg space-y-1">
                  <strong className="text-emerald-700 dark:text-emerald-400">• TT 99/2025 vs TT 200/2014:</strong>
                  <p className="text-muted-foreground">Bỏ các TK chi phí trung gian (621, 622, 623, 627), bỏ tài khoản loại 0, quản lý TK 112 số hóa.</p>
                </div>
                <div className="p-3 bg-muted/40 rounded-lg space-y-1">
                  <strong className="text-emerald-700 dark:text-emerald-400">• Luật Thuế TNCN 109/2025 vs Luật cũ:</strong>
                  <p className="text-muted-foreground">Tăng giảm trừ gia cảnh lên 15.5tr/6.2tr, rút gọn biểu thuế lũy tiến từ 7 bậc thành 5 bậc.</p>
                </div>
                <div className="p-3 bg-muted/40 rounded-lg space-y-1">
                  <strong className="text-emerald-700 dark:text-emerald-400">• Nghị định 73/2024 vs NĐ 24/2023:</strong>
                  <p className="text-muted-foreground">Lương cơ sở 2.34tr tăng trần đóng BHXH/BHYT lên 46.8 triệu/tháng.</p>
                </div>
                <div className="p-3 bg-muted/40 rounded-lg space-y-1">
                  <strong className="text-emerald-700 dark:text-emerald-400">• Nghị định 50/2021 vs NĐ 37/2015:</strong>
                  <p className="text-muted-foreground">Tạm ứng hợp đồng xây lắp lên đến 50% và nguyên tắc điều chỉnh trượt giá hợp đồng trọn gói.</p>
                </div>
              </div>
            </div>
          </section>

          {/* PHẦN 5: BỘ TIỆN ÍCH TÍNH TOÁN */}
          <section id="calculators" className="space-y-4 scroll-mt-24">
            <div className="flex items-center gap-2 border-b border-border pb-3">
              <div className="p-2 rounded-xl bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300">
                <Calculator className="h-5 w-5" />
              </div>
              <h2 className="text-xl md:text-2xl font-bold tracking-tight">5. Bộ Tiện Ích Kế Toán Thực Chiến (`/tien-ich`)</h2>
            </div>

            <p className="text-sm leading-relaxed text-muted-foreground">
              Trang công cụ tính toán tự động chuẩn xác theo luật định, loại bỏ hoàn toàn việc tính toán thủ công trên Excel:
            </p>

            <div className="space-y-4 text-xs">
              {/* Tiện ích 1 */}
              <div className="p-4 bg-emerald-50/40 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800 rounded-xl space-y-2">
                <div className="flex items-center justify-between">
                  <strong className="text-sm text-emerald-900 dark:text-emerald-200">1. Máy tính Thuế Thu Nhập Cá Nhân (TNCN)</strong>
                  <Badge variant="outline" className="border-emerald-500 text-emerald-700 dark:text-emerald-300">Luật 109/2025</Badge>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Nhập Tổng thu nhập + Số người phụ thuộc + Bảo hiểm ➔ Hệ thống tự tính ra số thuế phải nộp.
                  <br />Đặc biệt: Cho phép <strong>So sánh song song</strong> giữa Biểu thuế hiện hành và Biểu mới 2026, tính ra chính xác số tiền thuế người lao động tiết kiệm được mỗi tháng và mỗi năm.
                </p>
              </div>

              {/* Tiện ích 2 */}
              <div className="p-4 bg-blue-50/40 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-xl space-y-2">
                <div className="flex items-center justify-between">
                  <strong className="text-sm text-blue-900 dark:text-blue-200">2. Máy tính Lương Gross ➔ Net & Chi Phí Doanh Nghiệp</strong>
                  <Badge variant="outline" className="border-blue-500 text-blue-700 dark:text-blue-300">Trần 2.34tr - NĐ 73</Badge>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Tự động áp dụng mức trần đóng BHXH/BHYT mới theo mức lương cơ sở 2.340.000đ (trần 46.800.000đ) và lương tối thiểu 4 vùng.
                  <br />Bóc tách 2 bảng rõ ràng: <strong>Phần trừ lương NLĐ (10.5%)</strong> và <strong>Tổng chi phí thực tế Công ty Kiểu Việt phải chi trả (23.5%)</strong>.
                </p>
              </div>

              {/* Tiện ích 3 */}
              <div className="p-4 bg-red-50/40 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-xl space-y-2">
                <div className="flex items-center justify-between">
                  <strong className="text-sm text-red-900 dark:text-red-200">3. Máy tính Tiền Phạt Chậm Nộp Thuế</strong>
                  <Badge variant="outline" className="border-red-500 text-red-700 dark:text-red-300">0.03%/ngày - Luật 38/2019</Badge>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Nhập số tiền nợ thuế, ngày đến hạn và ngày thực nộp ➔ Tự động tính ra số ngày chậm và tiền chậm nộp theo công thức `Tiền nợ × 0.03% × Ngày`.
                  <br />Kèm nhắc nhở nghiệp vụ: Tiền chậm nộp thuế KHÔNG được tính vào chi phí được trừ khi tính thuế TNDN.
                </p>
              </div>
            </div>
          </section>

          {/* PHẦN 6: HỆ THỐNG TÀI KHOẢN TT99 */}
          <section id="chart-accounts" className="space-y-4 scroll-mt-24">
            <div className="flex items-center gap-2 border-b border-border pb-3">
              <div className="p-2 rounded-xl bg-purple-100 text-purple-800 dark:bg-purple-950/60 dark:text-purple-300">
                <BookOpen className="h-5 w-5" />
              </div>
              <h2 className="text-xl md:text-2xl font-bold tracking-tight">6. Hệ Thống Tài Khoản Kế Toán TT 99/2025/TT-BTC (`/tai-khoan`)</h2>
            </div>

            <p className="text-sm leading-relaxed text-muted-foreground">
              Thông tư 99/2025/TT-BTC có hiệu lực chính thức từ ngày 01/01/2026, thay thế toàn bộ Thông tư 200/2014. Trang <strong>"Hệ thống TK (TT99)"</strong> số hóa toàn bộ danh mục tài khoản:
            </p>

            <div className="p-4 bg-card border border-border rounded-xl space-y-2 text-xs">
              <p className="text-muted-foreground leading-relaxed">
                • Tra cứu nhanh theo mã tài khoản (111, 112, 154, 331, 333, 621...) hoặc tên gọi.
                <br />• Lọc theo 9 loại tài khoản kế toán: Tài sản ngắn hạn, Tài sản dài hạn, Nợ phải trả, Vốn CSH, Doanh thu, Chi phí sản xuất, Chi phí quản lý, Thu nhập khác và Xác định KQKD.
                <br />• Có chú thích rõ ràng những tài khoản được giữ lại, tài khoản mới bổ sung và tài khoản được bãi bỏ.
              </p>
            </div>
          </section>

          {/* PHẦN 7: TRỢ LÝ AI HỎI ĐÁP */}
          <section id="ai-assistant" className="space-y-4 scroll-mt-24">
            <div className="flex items-center gap-2 border-b border-border pb-3">
              <div className="p-2 rounded-xl bg-indigo-100 text-indigo-800 dark:bg-indigo-950/60 dark:text-indigo-300">
                <MessageSquareText className="h-5 w-5" />
              </div>
              <h2 className="text-xl md:text-2xl font-bold tracking-tight">7. Trợ Lý AI Pháp Lý & Bóc Tách Văn Bản Hình Ảnh/PDF</h2>
            </div>

            <p className="text-sm leading-relaxed text-muted-foreground">
              Được trang bị mô hình trí tuệ nhân tạo chuyên sâu về pháp luật kế toán và xây dựng Việt Nam:
            </p>

            <div className="space-y-3 text-xs">
              <div className="p-4 bg-muted/40 rounded-xl space-y-2 border border-border">
                <h4 className="font-bold text-foreground">3 Phương thức tương tác thông minh với AI:</h4>
                <ul className="space-y-1.5 pl-3 list-disc text-muted-foreground">
                  <li><strong>Hỏi đáp tự nhiên:</strong> Gõ trực tiếp câu hỏi (ví dụ: <em>"Hợp đồng trọn gói xây lắp có được điều chỉnh giá khi giá thép tăng không?"</em>), AI sẽ viện dẫn chính xác Điều 3 Nghị định 50/2021 và Điều 37 Nghị định 37/2015.</li>
                  <li><strong>Dán ảnh chụp văn bản (<kbd className="bg-muted px-1 rounded border">Ctrl + V</kbd>):</strong> Chụp một đoạn công văn, hóa đơn hoặc biên bản nghiệm thu dán thẳng vào khung chat ➔ AI tự bóc tách chữ và tư vấn rủi ro thuế.</li>
                  <li><strong>Đính kèm file PDF:</strong> Tải văn bản bản scan lên để AI đọc và tóm tắt nội dung chính.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* PHẦN 8: SỔ TAY KẾ TOÁN */}
          <section id="notes-handbook" className="space-y-4 scroll-mt-24">
            <div className="flex items-center gap-2 border-b border-border pb-3">
              <div className="p-2 rounded-xl bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300">
                <Edit3 className="h-5 w-5" />
              </div>
              <h2 className="text-xl md:text-2xl font-bold tracking-tight">8. Bôi Đen Trích Dẫn & Sổ Tay Kế Toán Cá Nhân (`/so-tay`)</h2>
            </div>

            <p className="text-sm leading-relaxed text-muted-foreground">
              Tính năng ghi chú thông minh cho phép kế toán viên cá nhân hóa kiến thức nghiệp vụ:
            </p>

            <div className="p-4 bg-card border border-border rounded-xl space-y-2 text-xs">
              <p className="text-muted-foreground leading-relaxed">
                1. Khi đang đọc bất kỳ văn bản nào, dùng chuột <strong>bôi đen đoạn văn bản quan trọng</strong> (trên 10 ký tự).
                <br />2. Một nút nổi <strong>"Lưu Ghi chú"</strong> sẽ tự động xuất hiện ngay phía trên con trỏ chuột.
                <br />3. Nhập ghi chú nghiệp vụ riêng (ví dụ: <em>"Áp dụng cho dự án Đường ven biển Quy Nhơn"</em>) và nhấn Lưu.
                <br />4. Toàn bộ trích dẫn và ghi chú sẽ được gom tại mục <strong>"Sổ tay Kế toán"</strong> và đồng bộ an toàn lên Google Sheets.
              </p>
            </div>
          </section>

          {/* PHẦN 9: GÓP Ý & BÓC TÁCH PDF TRÊN TRÌNH DUYỆT */}
          <section id="pdf-audit" className="space-y-4 scroll-mt-24">
            <div className="flex items-center gap-2 border-b border-border pb-3">
              <div className="p-2 rounded-xl bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300">
                <CloudUpload className="h-5 w-5" />
              </div>
              <h2 className="text-xl md:text-2xl font-bold tracking-tight">9. Góp Ý & Tự Động Bóc Tách PDF Trực Tiếp Trên Trình Duyệt</h2>
            </div>

            <p className="text-sm leading-relaxed text-muted-foreground">
              Khi cán bộ nhân viên phát hiện một văn bản mới của địa phương hoặc bộ ngành cần bổ sung vào kho nội bộ:
            </p>

            <div className="p-4 bg-card border border-border rounded-xl space-y-2 text-xs">
              <p className="text-muted-foreground leading-relaxed">
                • Bấm vào biểu tượng nổi <strong>Góp ý & Bổ sung văn bản</strong> ở góc dưới màn hình.
                <br />• <strong>Kéo thả file PDF văn bản vào:</strong> Hệ thống sử dụng công nghệ WebAssembly tự động bóc tách text trực tiếp trong trình duyệt mà không cần gửi file đi đâu, bảo mật 100%.
                <br />• Hệ thống tự động nhận diện số hiệu văn bản từ nội dung file.
                <br />• Tự động gửi kết quả thẩm định kèm tóm tắt nội dung về Email cho Kế toán trưởng/Admin xét duyệt.
              </p>
            </div>
          </section>

          {/* PHẦN 10: FAQS */}
          <section id="faqs" className="space-y-4 scroll-mt-24">
            <div className="flex items-center gap-2 border-b border-border pb-3">
              <div className="p-2 rounded-xl bg-muted text-foreground">
                <HelpCircle className="h-5 w-5 text-emerald-600" />
              </div>
              <h2 className="text-xl md:text-2xl font-bold tracking-tight">10. Câu Hỏi Thường Gặp (FAQs)</h2>
            </div>

            <div className="space-y-3 text-xs">
              {[
                {
                  q: '1. Tôi có thể sử dụng hệ thống khi không có kết nối Internet không?',
                  a: 'Có! Hệ thống được tối ưu dưới dạng Single Page Application (PWA). Một khi đã tải trang lần đầu, các dữ liệu văn bản Toàn văn, danh mục tài khoản TT99 và bộ công cụ tính toán sẽ hoạt động bình thường kể cả khi mất mạng internet.'
                },
                {
                  q: '2. File PDF tải về từ Google Drive có đầy đủ các Phụ lục biểu mẫu không?',
                  a: '100% đầy đủ! Toàn bộ 55 file PDF lưu trữ trên thư mục Google Drive của Kiểu Việt được trích xuất từ văn bản gốc công báo chính phủ, bao gồm trọn vẹn phần nội dung điều khoản và toàn bộ các biểu mẫu, phụ lục chi tiết.'
                },
                {
                  q: '3. Tại sao mức trần đóng BHXH/BHYT lại là 46.800.000 đồng?',
                  a: 'Căn cứ theo Nghị định số 73/2024/NĐ-CP của Chính phủ, mức lương cơ sở áp dụng từ ngày 01/07/2024 là 2.340.000 đồng/tháng. Luật BHXH và BHYT quy định mức tiền lương tháng đóng BHXH, BHYT tối đa bằng 20 lần mức lương cơ sở: 20 × 2.340.000đ = 46.800.000 đồng.'
                },
                {
                  q: '4. Khi áp dụng Thông tư 99/2025, kế toán Kiểu Việt cần lưu ý gì nhất?',
                  a: 'Điểm mấu chốt là Thông tư 99/2025 bãi bỏ việc tập hợp chi phí riêng lẻ qua các tài khoản 621, 622, 623, 627. Kế toán xây lắp có thể hạch toán thẳng vào các tiểu khoản chi tiết của TK 154 (Chi phí sản xuất kinh doanh dở dang), giúp tinh giản hơn 40% khối lượng chứng từ kết chuyển cuối kỳ.'
                },
                {
                  q: '5. Dữ liệu ghi chú trong Sổ tay kế toán có bị mất khi đổi máy tính không?',
                  a: 'Không lo bị mất! Khi bạn đăng nhập tài khoản nội bộ Kiểu Việt, toàn bộ ghi chú và đoạn trích dẫn được đồng bộ tự động lên Google Sheets của công ty, giúp bạn truy cập liền mạch trên cả máy tính bàn tại văn phòng và điện thoại cá nhân.'
                }
              ].map((faq, idx) => (
                <div key={idx} className="border border-border/80 rounded-xl p-4 bg-card shadow-xs transition-all">
                  <h4 className="font-bold text-sm text-foreground mb-1.5 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    {faq.q}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed pl-3.5 border-l border-emerald-300 dark:border-emerald-800">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Action Box Cuối Trang */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 border border-emerald-200 dark:border-emerald-800/60 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-bold text-base text-foreground">Bạn đã sẵn sàng sử dụng hệ thống?</h4>
              <p className="text-xs text-muted-foreground mt-0.5">Khám phá ngay bộ tiện ích tính thuế hoặc tra cứu thư viện văn bản</p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <Button onClick={() => navigate('/tien-ich')} className="bg-emerald-600 hover:bg-emerald-700 text-white gap-2">
                <Calculator className="h-4 w-4" /> Mở Bộ Tiện Ích
              </Button>
              <Button variant="outline" onClick={() => navigate('/thu-vien')} className="border-emerald-300">
                Mở Thư Viện
              </Button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
