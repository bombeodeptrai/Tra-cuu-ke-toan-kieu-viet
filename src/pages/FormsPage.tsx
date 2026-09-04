import React, { useState } from 'react';
import { 
  Download, FileSpreadsheet, FileText, File, Search, CheckCircle2,
  Building2, Sparkles, Filter, Eye, X
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FORMS_DATA, FormItem } from '@/lib/utils/forms';
import { useToast } from '@/components/ui/use-toast';

const CATEGORIES = [
  'Tất cả',
  'Tiền tệ',
  'Lao động',
  'Thuế',
  'Hóa đơn',
  'TSCĐ',
  'Vật tư',
  'Hợp đồng'
];

export function FormsPage() {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tất cả');
  const [previewForm, setPreviewForm] = useState<FormItem | null>(null);

  const filteredForms = FORMS_DATA.filter(f => {
    const matchSearch = f.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      f.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      f.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchCategory = selectedCategory === 'Tất cả' || f.type === selectedCategory;
    return matchSearch && matchCategory;
  });

  const handleDownload = (form: FormItem) => {
    const basePath = import.meta.env.BASE_URL || '/';
    const fullUrl = basePath.replace(/\/$/, '') + form.fileUrl;

    const link = document.createElement('a');
    link.href = fullUrl;
    link.download = form.fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast({
      title: 'Tải xuống thành công!',
      description: `Đang tải file ${form.fileName} chuẩn mẫu Công ty Kiểu Việt về máy của bạn.`
    });
  };

  const getFormatBadge = (format: string) => {
    if (format === 'Excel') {
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-300/60">
          <FileSpreadsheet className="h-3.5 w-3.5 text-emerald-600" />
          Excel (.xls)
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-300 border border-blue-300/60">
        <FileText className="h-3.5 w-3.5 text-blue-600" />
        Word (.doc)
      </span>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-in fade-in duration-300">
      {/* Header Kiểu Việt Brand */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-800 via-emerald-700 to-teal-800 text-white p-6 sm:p-8 md:p-10 shadow-lg">
        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-emerald-100 text-xs font-semibold border border-white/20">
            <Building2 className="h-3.5 w-3.5 text-emerald-300" />
            KHO BIỂU MẪU CHỨNG TỪ NỘI BỘ KIỂU VIỆT
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight">
            Thư Viện Biểu Mẫu Kế Toán Kiểu Việt
          </h1>
          <p className="text-sm md:text-base text-emerald-100/90 leading-relaxed font-normal">
            Tải xuống 100% miễn phí các biểu mẫu phiếu thu, phiếu chi, bảng lương, tờ khai thuế GTGT/TNDN/TNCN và biên bản nghiệm thu công trình chuẩn hoá theo Thông tư 99/2025, Thông tư 200 và Thông tư 80.
          </p>
          <div className="pt-1 flex flex-wrap items-center gap-3 text-xs text-emerald-200">
            <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> {FORMS_DATA.length} Biểu mẫu chuẩn</span>
            <span>•</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> Hỗ trợ xem trước trực quan</span>
            <span>•</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> Đã điền sẵn thông tin Công ty Kiểu Việt</span>
          </div>
        </div>
      </div>

      {/* Bộ Lọc & Thanh Tìm Kiếm */}
      <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center gap-4 bg-card p-4 rounded-2xl border border-border/80 shadow-xs">
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-emerald-600 text-white font-bold shadow-xs'
                  : 'bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative w-full md:w-80 shrink-0">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Tìm theo tên mẫu, số hiệu, mã mẫu..." 
            className="pl-9 bg-background text-xs"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Danh Sách Biểu Mẫu */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredForms.map((form) => (
          <div 
            key={form.id} 
            className="bg-card rounded-2xl border border-border/80 p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group hover:border-emerald-500/50"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                {getFormatBadge(form.format)}
                <Badge variant="outline" className="text-[11px] font-normal">
                  {form.type}
                </Badge>
              </div>

              <div>
                <span className="text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-800">
                  Mẫu số {form.code}
                </span>
                <h3 className="font-bold text-base mt-2 text-foreground group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                  {form.name}
                </h3>
              </div>

              <p className="text-xs text-muted-foreground leading-relaxed">
                {form.description}
              </p>
            </div>

            <div className="pt-5 mt-4 border-t border-border/60 grid grid-cols-2 gap-2">
              <Button 
                variant="outline"
                className="gap-1.5 text-xs border-border"
                onClick={() => setPreviewForm(form)}
              >
                <Eye className="h-3.5 w-3.5" /> Xem trước
              </Button>
              <Button 
                className="gap-1.5 text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs" 
                onClick={() => handleDownload(form)}
              >
                <Download className="h-3.5 w-3.5" /> Tải về
              </Button>
            </div>
          </div>
        ))}
      </div>
      
      {filteredForms.length === 0 && (
        <div className="text-center py-16 bg-card border border-dashed border-border rounded-2xl space-y-2">
          <p className="text-sm font-semibold text-foreground">Không tìm thấy biểu mẫu nào khớp với "{searchTerm}"</p>
          <p className="text-xs text-muted-foreground">Vui lòng thử tìm kiếm theo từ khóa khác hoặc chọn mục "Tất cả".</p>
        </div>
      )}

      {/* MODAL XEM TRƯỚC BIỂU MẪU */}
      {previewForm && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-card border border-border rounded-3xl p-6 max-w-2xl w-full shadow-2xl space-y-5 animate-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col justify-between">
            <div className="flex items-start justify-between border-b border-border pb-3">
              <div>
                <div className="flex items-center gap-2">
                  <Badge className="bg-emerald-600 text-white text-xs">
                    Mẫu số: {previewForm.code}
                  </Badge>
                  <span className="text-xs text-muted-foreground">
                    Định dạng: {previewForm.format}
                  </span>
                </div>
                <h3 className="font-bold text-lg text-foreground mt-1.5">
                  {previewForm.name}
                </h3>
              </div>
              <Button 
                size="icon" 
                variant="ghost" 
                className="rounded-full" 
                onClick={() => setPreviewForm(null)}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Khung mô phỏng văn bản thực tế */}
            <div className="flex-1 overflow-y-auto p-5 bg-background border border-border/80 rounded-2xl space-y-4 font-serif text-xs leading-relaxed custom-scrollbar">
              <div className="flex justify-between items-start border-b border-border/60 pb-3 font-sans">
                <div>
                  <strong className="text-xs text-foreground uppercase">CÔNG TY CỔ PHẦN KIỂU VIỆT</strong><br />
                  <span className="text-[11px] text-muted-foreground">Mã số thuế: 4101487688</span><br />
                  <span className="text-[11px] text-muted-foreground">Địa chỉ: KĐT An Phú Thịnh, P. Nhơn Bình, TP. Quy Nhơn, Bình Định</span>
                </div>
                <div className="text-right font-sans">
                  <strong className="text-xs text-foreground">Mẫu số: {previewForm.code}</strong><br />
                  <span className="text-[11px] text-muted-foreground italic">(Ban hành kèm theo chế độ kế toán hiện hành)</span>
                </div>
              </div>

              <div className="text-center py-2 space-y-1">
                <h4 className="font-bold text-base text-emerald-800 dark:text-emerald-400 font-sans tracking-tight">
                  {previewForm.name.toUpperCase()}
                </h4>
                <p className="text-[11px] text-muted-foreground italic">
                  Ngày ..... tháng ..... năm 202...
                </p>
              </div>

              <div className="p-3.5 bg-muted/30 rounded-xl space-y-2 font-sans text-xs">
                <span className="font-semibold text-foreground">Nội dung tóm tắt biểu mẫu:</span>
                <p className="text-muted-foreground leading-relaxed">{previewForm.description}</p>
                <div className="pt-2 text-[11px] text-emerald-700 dark:text-emerald-400">
                  ✓ Tích hợp đầy đủ các trường thông tin: Mã nhân viên/Đối tác, Lý do, Số tiền, Chữ ký phân quyền Người lập, Kế toán trưởng và Giám đốc phê duyệt.
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 pt-6 text-center font-sans text-xs font-semibold text-muted-foreground border-t border-border/60">
                <div>
                  Người lập biểu<br />
                  <span className="text-[10px] font-normal italic">(Ký, họ tên)</span>
                </div>
                <div>
                  Kế toán trưởng<br />
                  <span className="text-[10px] font-normal italic">(Ký, họ tên)</span>
                </div>
                <div>
                  Giám đốc phê duyệt<br />
                  <span className="text-[10px] font-normal italic">(Ký, đóng dấu)</span>
                </div>
              </div>
            </div>

            {/* Footer Modal */}
            <div className="flex items-center justify-between pt-2 border-t border-border">
              <span className="text-xs text-muted-foreground">
                Tên file tải: <code className="text-foreground font-mono">{previewForm.fileName}</code>
              </span>
              <div className="flex items-center gap-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setPreviewForm(null)}
                >
                  Đóng
                </Button>
                <Button 
                  size="sm"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white gap-1.5"
                  onClick={() => {
                    handleDownload(previewForm);
                    setPreviewForm(null);
                  }}
                >
                  <Download className="h-4 w-4" /> Tải file {previewForm.format}
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}