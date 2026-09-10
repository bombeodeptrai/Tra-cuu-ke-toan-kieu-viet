// src/pages/GuidePage.tsx
import React from 'react';
import {
  BookOpen,
  CheckCircle2,
  AlertTriangle,
  Building2,
  Stethoscope,
  Scale,
  CloudUpload,
  Receipt,
  FileCheck2,
  FileText,
  HelpCircle,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const GuidePage: React.FC = () => {
  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-teal-950 to-slate-900 text-white p-6 sm:p-8 shadow-sm">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-semibold border border-teal-500/30">
            <Building2 className="w-3.5 h-3.5" />
            CÔNG TY CỔ PHẦN KIỂU VIỆT - PHÒNG KHÁM HÒA ĐỨC
          </div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
            Cẩm Nang Nghiệp Vụ Đấu Thầu TBYT & Vận Hành Phòng Khám
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Sổ tay hướng dẫn thực chiến dành cho Ban Giám đốc, Ban Đấu thầu, Kỹ sư thiết bị y tế và Kế toán trưởng tuân thủ 100% chuẩn mực pháp lý năm 2026.
          </p>
        </div>
      </div>

      {/* Guide Modules */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Module 1: 7 Bước E-HSMT */}
        <Card className="bg-white border-slate-200/90 shadow-xs rounded-2xl">
          <CardHeader className="pb-3 border-b border-slate-100">
            <CardTitle className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Scale className="w-5 h-5 text-teal-600" />
              1. Quy Trình 7 Bước Tham Gia E-HSMT (NĐ 214/2025)
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4 space-y-3 text-xs">
            <div className="space-y-2">
              {[
                { step: 'Bước 1', title: 'Tải & Bóc tách E-HSMT', desc: 'Kiểm tra phân nhóm TT 57/2025, yêu cầu xuất xứ, hạn bảo lãnh, tiến độ giao hàng.' },
                { step: 'Bước 2', title: 'Lập Thư bảo lãnh điện tử', desc: 'Bắt buộc phát hành qua API ngân hàng liên kết với Hệ thống e-GP trước đóng thầu 48h (Điều 20 NĐ 214).' },
                { step: 'Bước 3', title: 'Khớp Catalogue & Bảng đáp ứng kỹ thuật', desc: 'Chứng minh từng thông số kỹ thuật theo catalogue gốc của hãng; không chỉnh sửa sai lệch.' },
                { step: 'Bước 4', title: 'Chuẩn bị Bộ 6 chứng từ pháp lý', desc: 'Số lưu hành, ISO 13485, CFS, LOA ủy quyền bán hàng, cam kết bảo hành SLA.' },
                { step: 'Bước 5', title: 'Ký số & Nộp E-HSDT', desc: 'Kiểm tra tính toàn vẹn chữ ký số hợp lệ và xác nhận thời gian nộp thành công.' },
                { step: 'Bước 6', title: 'Làm rõ & Đàm phán kỹ thuật', desc: 'Giải trình kịp thời trên mạng đấu thầu trong vòng 24 - 48h khi có yêu cầu.' },
                { step: 'Bước 7', title: 'Giao hàng, Lắp đặt & Bàn giao', desc: 'Đối chiếu số serial/lô thực tế, tem kiểm định QR TT 24/2026 và ký biên bản nghiệm thu.' }
              ].map((item, idx) => (
                <div key={idx} className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                  <span className="font-mono text-[10px] font-black px-2 py-0.5 rounded bg-teal-100 text-teal-900 shrink-0">
                    {item.step}
                  </span>
                  <div>
                    <div className="font-bold text-slate-900">{item.title}</div>
                    <div className="text-slate-600 text-[11px] leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Module 2: Lộ trình kiểm định TT 24 & Phân nhóm TT 57 */}
        <Card className="bg-white border-slate-200/90 shadow-xs rounded-2xl">
          <CardHeader className="pb-3 border-b border-slate-100">
            <CardTitle className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Stethoscope className="w-5 h-5 text-teal-600" />
              2. Tiêu Chuẩn 6 Nhóm TT 57 & Kiểm Định TT 24
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4 space-y-3 text-xs">
            <div className="p-3.5 rounded-xl bg-teal-50 border border-teal-200 space-y-1">
              <div className="font-bold text-teal-900 text-xs">Phân định 6 nhóm kỹ thuật TT 57/2025:</div>
              <p className="text-[11px] text-slate-700 leading-relaxed">
                • <strong>Nhóm 1:</strong> Sản xuất tại nước tham chiếu (Mỹ, EU, Nhật...) VÀ có CFS/FDA/CE tại nước đó.
                <br />• <strong>Nhóm 2:</strong> Chủ sở hữu tại nước tham chiếu, sản xuất tại cơ sở đạt ISO 13485 ở nước thứ ba.
                <br />• <strong>Nhóm 3 - 6:</strong> Các nước khác và sản xuất nội địa.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 space-y-1">
              <div className="font-bold text-emerald-900 text-xs">Lộ trình kiểm định an toàn TT 24/2026:</div>
              <p className="text-[11px] text-slate-700 leading-relaxed">
                • <strong>Máy mua trước 01/07/2027:</strong> Phòng khám Hòa Đức hoàn thành kiểm định trước 01/01/2028.
                <br />• <strong>Máy mua sau 30/06/2027:</strong> Bắt buộc kiểm định trước khi đưa vào vận hành lần đầu.
                <br />• <strong>Tem kiểm định:</strong> Dán tem QR và đồng bộ cổng dữ liệu quốc gia trong 03 ngày.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Module 3: Thuế Hòa Đức TT 219 & NĐ 132 */}
        <Card className="bg-white border-slate-200/90 shadow-xs rounded-2xl">
          <CardHeader className="pb-3 border-b border-slate-100">
            <CardTitle className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Receipt className="w-5 h-5 text-teal-600" />
              3. Thuế Phòng Khám Hòa Đức & Giao Dịch Liên Kết
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4 space-y-3 text-xs">
            <div className="space-y-2">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <div className="font-bold text-slate-900">Phân bổ thuế GTGT đầu vào dùng chung (Điều 14 TT 219):</div>
                <p className="text-slate-600 text-[11px] leading-relaxed">
                  Doanh thu khám chữa bệnh không chịu thuế GTGT. Doanh thu bán lẻ thuốc/TBYT chịu thuế 5%/10%. Thuế GTGT đầu vào dùng chung phân bổ theo tỷ lệ doanh thu chịu thuế / tổng doanh thu. Phần không khấu trừ được đưa vào chi phí TK 642 tính thuế TNDN.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 space-y-1">
                <div className="font-bold text-amber-900">Trần chi phí lãi vay 30% EBITDA (Điều 16 NĐ 132):</div>
                <p className="text-slate-700 text-[11px] leading-relaxed">
                  Kiểu Việt và Hòa Đức là 2 bên có quan hệ liên kết (góp vốn trên 25% / người điều hành chung). Tổng chi phí lãi vay được trừ không vượt quá 30% EBITDA. Lãi vay vượt trần được chuyển sang 5 năm sau.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Module 4: Kho Google Drive */}
        <Card className="bg-white border-slate-200/90 shadow-xs rounded-2xl">
          <CardHeader className="pb-3 border-b border-slate-100">
            <CardTitle className="text-base font-bold text-slate-900 flex items-center gap-2">
              <CloudUpload className="w-5 h-5 text-teal-600" />
              4. Kho Lưu Trữ Google Drive & Đồng Bộ Tài Sản
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4 space-y-3 text-xs">
            <p className="text-slate-600 text-[11px] leading-relaxed">
              Hệ thống đã kết nối trực tiếp với Google Drive của anh Huy qua OAuth token, tạo cấu trúc thư mục tự động:
            </p>
            <div className="font-mono text-[11px] bg-slate-900 text-teal-300 p-3 rounded-xl space-y-1">
              <div>📁 Kiểu Việt - TBYT & Phòng Khám Hòa Đức (ID: 1qd6CPEccJJETjj12XJLQsekAJJ-FoCyH)</div>
              <div>&nbsp;&nbsp;├── 📁 01_BanGoc_PDF_DOCX (ID: 19OJb0JjjCjT2hZSd2ydKKHZHWjjA1Qls)</div>
              <div>&nbsp;&nbsp;├── 📁 02_ToanVan_PhanTich (ID: 1P3RpW-LA-YllbSsuKwET0QQK9PzbySQF)</div>
              <div>&nbsp;&nbsp;└── 📁 03_14_BieuMau_ThucChien (ID: 14CNSDisqUJ7fisno49jDUj1uH-Q9i0ph)</div>
            </div>
            <p className="text-slate-500 text-[10px]">
              Tất cả tài liệu hồ sơ gốc, phụ lục kỹ thuật và biểu mẫu xuất ra đều được đồng bộ hai chiều với kho lưu trữ đám mây an toàn của Kiểu Việt.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
export default GuidePage;
