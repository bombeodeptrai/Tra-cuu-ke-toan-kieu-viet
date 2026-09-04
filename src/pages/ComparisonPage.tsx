import React, { useState, useMemo } from 'react';
import { 
  ArrowRightLeft, Sparkles, BookOpen, Layers, ShieldCheck, 
  FileSpreadsheet, CheckCircle2, AlertTriangle, Filter, Building2,
  Receipt, Calculator, Users, HardHat, Mountain, Landmark, FileText
} from 'lucide-react';
import { DecreeDiffViewer } from '@/components/decree/DecreeDiffViewer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface TaxCategory {
  id: string;
  name: string;
  icon: any;
  count: number;
  description: string;
  decrees: { id: string; label: string; sub: string; compareWith: string }[];
}

const TAX_CATEGORIES: TaxCategory[] = [
  {
    id: 'all',
    name: 'Tất cả sắc thuế',
    icon: Layers,
    count: 55,
    description: 'Toàn bộ 55 văn bản pháp luật kế toán, thuế và xây lắp được đối chiếu chuẩn mực',
    decrees: []
  },
  {
    id: 'ke-toan',
    name: 'Chế độ Kế toán & VAS',
    icon: Calculator,
    count: 13,
    description: 'Chế độ kế toán doanh nghiệp, bảng hệ thống tài khoản và chuẩn mực kế toán Việt Nam',
    decrees: [
      { id: 'tt-99-2025', label: 'Thông tư 99/2025/TT-BTC', sub: 'Chế độ kế toán mới nhất', compareWith: 'TT 200/2014 & TT 133/2016' },
      { id: 'tt-200-2014', label: 'Thông tư 200/2014/TT-BTC', sub: 'Chế độ kế toán Doanh nghiệp', compareWith: 'Quyết định 15/2006/QĐ-BTC' },
      { id: 'tt-133-2016', label: 'Thông tư 133/2016/TT-BTC', sub: 'Chế độ kế toán DNNVV', compareWith: 'Quyết định 48/2006/QĐ-BTC' },
      { id: 'tt-46-2025', label: 'Thông tư 46/2025/TT-BTC', sub: 'Sửa đổi TT 133/2016', compareWith: 'Thông tư 133/2016/TT-BTC' },
      { id: 'tt-24-2024-tt-btc', label: 'Thông tư 24/2024/TT-BTC', sub: 'Chế độ kế toán HCSN', compareWith: 'Thông tư 107/2017/TT-BTC' },
      { id: 'tt-108-2025', label: 'Thông tư 108/2025/TT-BTC', sub: 'BCTC cơ quan nhà nước', compareWith: 'Thông tư 99/2018/TT-BTC' },
      { id: 'luat-ke-toan-2015', label: 'Luật Kế toán 88/2015/QH13', sub: 'Luật Kế toán hiện hành', compareWith: 'Luật Kế toán 2003' },
      { id: 'luat-56-2024', label: 'Luật sửa đổi 56/2024/QH15', sub: 'Sửa 9 luật tài chính & kế toán', compareWith: 'Các quy định kế toán cũ' },
      { id: 'nd-174-2016', label: 'Nghị định 174/2016/NĐ-CP', sub: 'Hướng dẫn Luật Kế toán', compareWith: 'Nghị định 128/2004/NĐ-CP' },
      { id: 'nd-41-2018', label: 'Nghị định 41/2018/NĐ-CP', sub: 'Xử phạt Kế toán – Kiểm toán', compareWith: 'Nghị định 105/2013/NĐ-CP' },
      { id: 'vas-01', label: 'Chuẩn mực VAS 01', sub: 'Chuẩn mực kế toán chung', compareWith: 'Quy định kế toán trước đây' },
      { id: 'vas-02', label: 'Chuẩn mực VAS 02', sub: 'Hàng tồn kho & NRV', compareWith: 'Quy định kế toán trước đây' },
      { id: 'vas-14', label: 'Chuẩn mực VAS 14', sub: 'Doanh thu & Dịch vụ xây lắp', compareWith: 'Quy định kế toán trước đây' },
    ]
  },
  {
    id: 'tndn',
    name: 'Thuế TNDN',
    icon: Building2,
    count: 5,
    description: 'Chính sách thuế Thu nhập doanh nghiệp, trần chi phí được trừ và giao dịch liên kết',
    decrees: [
      { id: 'luat-67-2025-tndn', label: 'Luật Thuế TNDN 67/2025/QH15', sub: 'Thuế tối thiểu toàn cầu 15%', compareWith: 'Luật Thuế TNDN 14/2008/QH12' },
      { id: 'luat-thue-tndn', label: 'Luật Thuế TNDN 14/2008/QH12', sub: 'Thuế suất 20% vs 28%', compareWith: 'Luật Thuế TNDN 09/2003/QH11' },
      { id: 'nd-218-2013', label: 'Nghị định 218/2013/NĐ-CP', sub: 'Hướng dẫn thi hành Thuế TNDN', compareWith: 'Nghị định 124/2008/NĐ-CP' },
      { id: 'tt-96-2015', label: 'Thông tư 96/2015/TT-BTC', sub: 'Chi phí được trừ thuế TNDN', compareWith: 'Thông tư 78/2014/TT-BTC' },
      { id: 'nd-132-2020', label: 'Nghị định 132/2020/NĐ-CP', sub: 'Giao dịch liên kết, trần lãi vay 30%', compareWith: 'Nghị định 20/2017 & NĐ 68/2020' },
    ]
  },
  {
    id: 'gtgt',
    name: 'Thuế GTGT',
    icon: Receipt,
    count: 5,
    description: 'Chính sách thuế Giá trị gia tăng trong xây lắp, hoàn thuế và các gói giảm thuế 2%',
    decrees: [
      { id: 'luat-thue-gtgt', label: 'Luật Thuế GTGT 13/2008/QH12', sub: 'Khấu trừ thuế vs Luật 1997', compareWith: 'Luật Thuế GTGT 02/1997/QH10' },
      { id: 'tt-219-2013', label: 'Thông tư 219/2013/TT-BTC', sub: 'Thuế GTGT thi công xây lắp', compareWith: 'Thông tư 06/2012/TT-BTC' },
      { id: 'nd-180-2024-nd-cp', label: 'Nghị định 180/2024/NĐ-CP', sub: 'Giảm 2% thuế GTGT xuống 8%', compareWith: 'Nghị định 72/2024 & NĐ 94/2023' },
      { id: 'nd-15-2022', label: 'Nghị định 15/2022/NĐ-CP', sub: 'Gói phục hồi kinh tế giảm thuế 2%', compareWith: 'Quy định thuế GTGT thông thường' },
      { id: 'nd-64-2024', label: 'Nghị định 64/2024/NĐ-CP', sub: 'Gia hạn nộp thuế GTGT, TNDN 2024', compareWith: 'Quy định thời hạn nộp thuế thông thường' },
    ]
  },
  {
    id: 'hoa-don',
    name: 'Hóa đơn & QL Thuế',
    icon: FileText,
    count: 7,
    description: 'Hóa đơn điện tử có mã, biên bản điều chỉnh Mẫu 04/SS và xử phạt vi phạm thuế',
    decrees: [
      { id: 'nd-123-2020', label: 'Nghị định 123/2020/NĐ-CP', sub: 'Hóa đơn điện tử bắt buộc', compareWith: 'Nghị định 51/2010 & NĐ 04/2014' },
      { id: 'tt-78-2021', label: 'Thông tư 78/2021/TT-BTC', sub: 'Hướng dẫn HĐĐT Mẫu 04/SS', compareWith: 'Thông tư 39/2014 & TT 32/2011' },
      { id: 'nd-70-2025', label: 'Nghị định 70/2025/NĐ-CP', sub: 'Chứng từ TNCN điện tử, VNeID', compareWith: 'Chứng từ khấu trừ TNCN giấy cũ' },
      { id: 'nd-125-2020', label: 'Nghị định 125/2020/NĐ-CP', sub: 'Xử phạt vi phạm Thuế & Hóa đơn', compareWith: 'Nghị định 129/2013 & NĐ 109/2013' },
      { id: 'luat-quan-ly-thue-2019', label: 'Luật Quản lý thuế 38/2019/QH14', sub: 'Phạt chậm nộp 0.03%/ngày', compareWith: 'Luật Quản lý thuế 78/2006/QH11' },
      { id: 'nd-126-2020', label: 'Nghị định 126/2020/NĐ-CP', sub: 'Tạm nộp 80% thuế TNDN 4 quý', compareWith: 'Nghị định 83/2013/NĐ-CP' },
      { id: 'tt-80-2021', label: 'Thông tư 80/2021/TT-BTC', sub: 'Phân bổ thuế xây dựng vãng lai 1%', compareWith: 'Thông tư 156/2013/TT-BTC' },
    ]
  },
  {
    id: 'tncn-luong-bhxh',
    name: 'Thuế TNCN, Lương & BHXH',
    icon: Users,
    count: 9,
    description: 'Chính sách thuế TNCN mới, lương tối thiểu vùng, lương cơ sở và quy trình thu nộp BHXH',
    decrees: [
      { id: 'luat-109-2025-tncn', label: 'Luật Thuế TNCN 109/2025/QH15', sub: 'Giảm trừ gia cảnh 15.5tr/6.2tr', compareWith: 'Luật Thuế TNCN 04/2007/QH12' },
      { id: 'tt-111-2013', label: 'Thông tư 111/2013/TT-BTC', sub: 'Hướng dẫn Thuế TNCN công trường', compareWith: 'Thông tư 84/2008/TT-BTC' },
      { id: 'nd-293-2025', label: 'Nghị định 293/2025/NĐ-CP', sub: 'Lương tối thiểu vùng năm 2026', compareWith: 'Nghị định 74/2024 & NĐ 38/2022' },
      { id: 'blld-45-2019', label: 'Bộ luật Lao động 45/2019/QH14', sub: 'Bãi bỏ HĐLĐ mùa vụ', compareWith: 'Bộ luật Lao động 10/2012/QH13' },
      { id: 'nd-73-2024', label: 'Nghị định 73/2024/NĐ-CP', sub: 'Lương cơ sở 2.34tr tăng trần BHXH', compareWith: 'Nghị định 24/2023/NĐ-CP' },
      { id: 'nd-145-2020', label: 'Nghị định 145/2020/NĐ-CP', sub: 'Lương tăng ca, trần 300h xây dựng', compareWith: 'Nghị định 05/2015/NĐ-CP' },
      { id: 'nd-12-2022', label: 'Nghị định 12/2022/NĐ-CP', sub: 'Xử phạt trốn đóng BHXH & ATLĐ', compareWith: 'Nghị định 28/2020/NĐ-CP' },
      { id: 'luat-41-2024', label: 'Luật Bảo hiểm xã hội 41/2024/QH15', sub: 'Đóng 15 năm hưởng lương hưu', compareWith: 'Luật Bảo hiểm xã hội 58/2014/QH13' },
      { id: 'qd-595-2017-bhxh', label: 'Quyết định 595/QĐ-BHXH', sub: 'Quy trình thu BHXH xây dựng', compareWith: 'Quyết định 959/QĐ-BHXH' },
    ]
  },
  {
    id: 'xay-dung',
    name: 'Hợp đồng XD & Dự toán',
    icon: HardHat,
    count: 3,
    description: 'Quản lý hợp đồng xây dựng, tạm ứng thanh toán khối lượng nghiệm thu và định mức dự toán',
    decrees: [
      { id: 'nd-37-2015', label: 'Nghị định 37/2015/NĐ-CP', sub: 'Thời hạn thanh toán CĐT 14 ngày', compareWith: 'Nghị định 48/2010/NĐ-CP' },
      { id: 'nd-50-2021', label: 'Nghị định 50/2021/NĐ-CP', sub: 'Tạm ứng hợp đồng 50%, bù giá', compareWith: 'Nghị định 37/2015/NĐ-CP' },
      { id: 'nd-10-2021', label: 'Nghị định 10/2021/NĐ-CP', sub: 'Quản lý dự toán, định mức XD', compareWith: 'Nghị định 68/2019/NĐ-CP' },
    ]
  },
  {
    id: 'khoang-san-tai-nguyen',
    name: 'Khoáng sản & Thuế TN',
    icon: Mountain,
    count: 7,
    description: 'Luật Địa chất mới, cơ chế cấp mỏ vật liệu cao tốc, bảng giá tính thuế tài nguyên Gia Lai và phí BVMT',
    decrees: [
      { id: 'luat-54-2024-khoangsan', label: 'Luật Địa chất & Khoáng sản 54/2024', sub: 'Phân 4 nhóm khoáng sản mới', compareWith: 'Luật Khoáng sản 60/2010/QH12' },
      { id: 'nd-193-2025-khoangsan', label: 'Nghị định 193/2025/NĐ-CP', sub: 'Cơ chế mỏ đất đắp cao tốc', compareWith: 'Nghị định 158/2016/NĐ-CP' },
      { id: 'qd-87-2025-gialai', label: 'Quyết định 87/2025/QĐ-UBND', sub: 'Bảng giá thuế tài nguyên 2026 Gia Lai', compareWith: 'Quyết định giá tính thuế TN cũ' },
      { id: 'nd-27-2023', label: 'Nghị định 27/2023/NĐ-CP', sub: 'Phí BVMT khai thác khoáng sản', compareWith: 'Nghị định 164/2016/NĐ-CP' },
      { id: 'tt-152-2015', label: 'Thông tư 152/2015/TT-BTC', sub: 'Thuế Tài nguyên đá mỏ cát đất', compareWith: 'Thông tư 105/2010/TT-BTC' },
      { id: 'nd-67-2019', label: 'Nghị định 67/2019/NĐ-CP', sub: 'Tiền cấp quyền khai thác khoáng sản', compareWith: 'Nghị định 203/2013/NĐ-CP' },
      { id: 'tt-44-2017', label: 'Thông tư 44/2017/TT-BTC', sub: 'Khung giá tính thuế TN toàn quốc', compareWith: 'Khung giá tính thuế tài nguyên cũ' },
    ]
  },
  {
    id: 'tscd-phap-ly',
    name: 'TSCĐ, Dự phòng & Khác',
    icon: Landmark,
    count: 6,
    description: 'Trích khấu hao máy móc công trình, trích lập dự phòng nợ xấu, lệ phí môn bài và chữ ký số',
    decrees: [
      { id: 'tt-45-2013', label: 'Thông tư 45/2013/TT-BTC', sub: 'Khung khấu hao TSCĐ máy móc', compareWith: 'Thông tư 203/2009/TT-BTC' },
      { id: 'tt-48-2019', label: 'Thông tư 48/2019/TT-BTC', sub: 'Trích lập dự phòng nợ khó đòi', compareWith: 'Thông tư 228/2009/TT-BTC' },
      { id: 'nd-139-2016', label: 'Nghị định 139/2016/NĐ-CP', sub: '3 bậc mức thu lệ phí môn bài', compareWith: 'Pháp lệnh Thuế Môn bài 1983' },
      { id: 'nd-22-2020', label: 'Nghị định 22/2020/NĐ-CP', sub: 'Miễn lệ phí môn bài năm đầu', compareWith: 'Nghị định 139/2016/NĐ-CP' },
      { id: 'luat-gd-dien-tu-20-2023', label: 'Luật Giao dịch điện tử 20/2023', sub: 'Chữ ký số & HĐ điện tử', compareWith: 'Luật Giao dịch điện tử 2005' },
      { id: 'luat-thue-xnk-107-2016', label: 'Luật Thuế XNK 107/2016/QH13', sub: 'Miễn thuế NK máy móc TSCĐ', compareWith: 'Luật Thuế XNK 45/2005/QH11' },
    ]
  }
];

export function ComparisonPage() {
  const [selectedTaxCategory, setSelectedTaxCategory] = useState('all');
  const [selectedDecreeId, setSelectedDecreeId] = useState('tt-99-2025');

  // Filter decrees based on active category
  const activeCategory = useMemo(() => {
    return TAX_CATEGORIES.find(c => c.id === selectedTaxCategory) || TAX_CATEGORIES[0];
  }, [selectedTaxCategory]);

  const displayedDecrees = useMemo(() => {
    if (selectedTaxCategory === 'all') {
      // Flatten all decrees from all groups
      const all: { id: string; label: string; sub: string; compareWith: string; catName: string }[] = [];
      TAX_CATEGORIES.filter(c => c.id !== 'all').forEach(c => {
        c.decrees.forEach(d => {
          all.push({ ...d, catName: c.name });
        });
      });
      return all;
    }
    return activeCategory.decrees.map(d => ({ ...d, catName: activeCategory.name }));
  }, [selectedTaxCategory, activeCategory]);

  const handleSelectCategory = (catId: string) => {
    setSelectedTaxCategory(catId);
    const targetCat = TAX_CATEGORIES.find(c => c.id === catId);
    if (targetCat && targetCat.decrees.length > 0) {
      // Automatically select the first decree in this tax category
      setSelectedDecreeId(targetCat.decrees[0].id);
    }
  };

  return (
    <div className="container max-w-6xl mx-auto px-4 py-8 space-y-8 animate-in fade-in duration-300">
      {/* Header Kiểu Việt Brand */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-border pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 text-xs font-semibold mb-2">
            <ArrowRightLeft className="h-3.5 w-3.5 text-emerald-600" />
            Kiểu Việt Legal Comparison Hub
          </div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground flex items-center gap-2">
            Trung Tâm Đối Chiếu Pháp Lý Theo Sắc Thuế & Chuyên Đề
          </h1>
          <p className="text-sm text-muted-foreground mt-1 max-w-3xl">
            Cơ sở dữ liệu 662 điểm thay đổi chuyên sâu trên <strong>100% cả 55 văn bản pháp luật</strong>. Toàn bộ đối chiếu được phân nhóm chặt chẽ theo từng <strong>sắc thuế và lĩnh vực nghiệp vụ tương ứng</strong>, chỉ so sánh giữa văn bản hiện hành và văn bản tiền nhiệm cùng lĩnh vực.
          </p>
        </div>
      </div>

      {/* Principle Callout Box: Cùng sắc thuế / cùng chủ đề */}
      <div className="bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-300 dark:border-emerald-800 rounded-xl p-4 shadow-xs flex items-start gap-3.5">
        <ShieldCheck className="h-6 w-6 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
        <div className="space-y-1 text-xs md:text-sm text-emerald-900 dark:text-emerald-200">
          <div className="font-bold text-emerald-950 dark:text-emerald-100 flex items-center gap-2">
            <span>NGUYÊN TẮC ĐỐI CHIẾU CHUẨN MỰC PHÁP LÝ (CÙNG SẮC THUẾ & LĨNH VỰC NGHIỆP VỤ):</span>
          </div>
          <p className="leading-relaxed">
            Hệ thống <strong>tuyệt đối không so sánh chéo</strong> giữa các sắc thuế không liên quan. Mỗi văn bản được ghép cặp đối chiếu chính xác 1:1 với chính văn bản tiền nhiệm thay thế của nó:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 pt-1 text-xs">
            <div className="bg-white/80 dark:bg-card/80 p-2 rounded border border-emerald-200 dark:border-emerald-800/60">
              <span className="font-bold text-emerald-700 dark:text-emerald-300">📊 Kế toán:</span> TT 99/2025 vs TT 200 & TT 133
            </div>
            <div className="bg-white/80 dark:bg-card/80 p-2 rounded border border-emerald-200 dark:border-emerald-800/60">
              <span className="font-bold text-emerald-700 dark:text-emerald-300">🏢 Thuế TNDN:</span> Luật 67/2025 vs Luật 14/2008
            </div>
            <div className="bg-white/80 dark:bg-card/80 p-2 rounded border border-emerald-200 dark:border-emerald-800/60">
              <span className="font-bold text-emerald-700 dark:text-emerald-300">🧾 Hóa đơn ĐT:</span> NĐ 123/2020 vs NĐ 51/2010
            </div>
            <div className="bg-white/80 dark:bg-card/80 p-2 rounded border border-emerald-200 dark:border-emerald-800/60">
              <span className="font-bold text-emerald-700 dark:text-emerald-300">⛏️ Thuế TN Gia Lai:</span> QĐ 87/2025 vs QĐ cũ
            </div>
          </div>
        </div>
      </div>

      {/* Tax Category Filter Tabs */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="text-xs font-bold text-muted-foreground uppercase tracking-wide flex items-center gap-1.5">
            <Filter className="h-3.5 w-3.5 text-emerald-600" />
            Lọc theo Sắc thuế & Nhóm nghiệp vụ ({TAX_CATEGORIES.length - 1} nhóm chuyên đề):
          </div>
          <Badge variant="outline" className="text-xs border-emerald-300 text-emerald-700 dark:text-emerald-300">
            {activeCategory.name}: {activeCategory.count} văn bản
          </Badge>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
          {TAX_CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedTaxCategory === cat.id;
            return (
              <Button
                key={cat.id}
                variant={isSelected ? "default" : "outline"}
                size="sm"
                onClick={() => handleSelectCategory(cat.id)}
                className={`h-auto py-2.5 px-3 flex items-center gap-2 rounded-xl text-left transition-all ${
                  isSelected
                    ? 'bg-emerald-600 hover:bg-emerald-700 text-white font-semibold shadow-xs ring-2 ring-emerald-500/20'
                    : 'bg-card hover:bg-muted/60 border-border hover:border-emerald-300 text-foreground'
                }`}
              >
                <Icon className={`h-4 w-4 shrink-0 ${isSelected ? 'text-white' : 'text-emerald-600'}`} />
                <div className="flex-1 min-w-0">
                  <div className="text-xs truncate">{cat.name}</div>
                  <div className={`text-[10px] ${isSelected ? 'text-emerald-100' : 'text-muted-foreground'}`}>
                    {cat.count} văn bản
                  </div>
                </div>
              </Button>
            );
          })}
        </div>
      </div>

      {/* Quick Select Decree within Active Category */}
      <div className="space-y-2 bg-muted/40 p-4 rounded-xl border border-border">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="text-xs font-bold text-foreground flex items-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5 text-emerald-600" />
            Chọn văn bản cần xem đối chiếu trong nhóm "{activeCategory.name}":
          </div>
          <span className="text-[11px] text-muted-foreground">
            Bấm chọn để xem chi tiết đối chiếu và hỏi đáp AI Boxchat
          </span>
        </div>

        <div className="flex flex-wrap gap-2 pt-1 max-h-[160px] overflow-y-auto">
          {displayedDecrees.map((d) => {
            const isSelected = selectedDecreeId === d.id;
            return (
              <button
                key={d.id}
                onClick={() => setSelectedDecreeId(d.id)}
                className={`text-left text-xs py-1.5 px-3 rounded-lg border transition-all cursor-pointer flex flex-col gap-0.5 ${
                  isSelected
                    ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs font-medium'
                    : 'bg-card hover:bg-emerald-50 dark:hover:bg-emerald-950/40 border-border hover:border-emerald-300 text-foreground'
                }`}
              >
                <div className="flex items-center gap-1.5">
                  <span>{d.label}</span>
                  {isSelected && <CheckCircle2 className="h-3 w-3 text-white" />}
                </div>
                <div className={`text-[10px] ${isSelected ? 'text-emerald-100' : 'text-muted-foreground'}`}>
                  vs. {d.compareWith}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Diff Viewer Component */}
      <div className="pt-2">
        <DecreeDiffViewer decreeId={selectedDecreeId} key={selectedDecreeId} />
      </div>
    </div>
  );
}
