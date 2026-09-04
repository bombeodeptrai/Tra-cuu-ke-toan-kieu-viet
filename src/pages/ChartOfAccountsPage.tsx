import React, { useState } from 'react';
import { 
  Search, BookOpen, Layers, ArrowRightLeft, Copy, Check, Info,
  Building2, Sparkles, HelpCircle, FileText, ChevronRight, X
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { 
  CHART_OF_ACCOUNTS_TT99, AccountTT99, 
  ACCOUNTING_GUIDES_TT99, AccountingGuideTT99 
} from '@/lib/utils/accounts-tt99';
import { useToast } from '@/components/ui/use-toast';

const ACCOUNT_TYPES = [
  'Tất cả',
  'Tài sản',
  'Nợ phải trả',
  'Vốn chủ sở hữu',
  'Doanh thu',
  'Chi phí sản xuất, kinh doanh',
  'Chi phí quản lý, bán hàng',
  'Thu nhập khác',
  'Chi phí khác',
  'Xác định kết quả kinh doanh'
];

export function ChartOfAccountsPage() {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('Tất cả');
  const [selectedAccount, setSelectedAccount] = useState<AccountTT99 | null>(null);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const filteredAccounts = CHART_OF_ACCOUNTS_TT99.filter(acc => {
    const matchSearch = acc.code.includes(searchTerm) || 
      acc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      acc.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchType = selectedType === 'Tất cả' || acc.type === selectedType;
    return matchSearch && matchType;
  });

  const handleCopyCode = (code: string, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    toast({
      title: 'Đã sao chép mã tài khoản!',
      description: `Mã "${code}" đã sẵn sàng dán vào phần mềm kế toán hoặc Excel.`
    });
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-in fade-in duration-300">
      {/* Banner Tiêu Đề */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-800 via-emerald-700 to-teal-800 text-white p-6 sm:p-8 md:p-10 shadow-lg">
        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-emerald-100 text-xs font-semibold border border-white/20">
            <Building2 className="h-3.5 w-3.5 text-emerald-300" />
            CÔNG TY CỔ PHẦN KIỂU VIỆT — HỆ THỐNG KẾ TOÁN 2026
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight">
            Hệ Thống Tài Khoản & Sơ Đồ Định Khoản TT 99/2025/TT-BTC
          </h1>
          <p className="text-sm md:text-base text-emerald-100/90 leading-relaxed font-normal">
            Tra cứu toàn bộ danh mục tài khoản mới có hiệu lực từ 01/01/2026, đối chiếu thay đổi so với Thông tư 200 và hướng dẫn hạch toán chi phí trực tiếp vào TK 154 cho Công ty Kiểu Việt.
          </p>
        </div>
      </div>

      {/* TABS: DANH MỤC TÀI KHOẢN & SƠ ĐỒ HẠCH TOÁN */}
      <Tabs defaultValue="list" className="space-y-6">
        <TabsList className="bg-muted p-1 rounded-2xl w-full sm:w-auto grid grid-cols-2 sm:inline-flex">
          <TabsTrigger value="list" className="rounded-xl gap-2 font-semibold text-xs sm:text-sm">
            <BookOpen className="h-4 w-4" /> Danh mục Tài khoản ({filteredAccounts.length})
          </TabsTrigger>
          <TabsTrigger value="guides" className="rounded-xl gap-2 font-semibold text-xs sm:text-sm">
            <Layers className="h-4 w-4" /> Sơ đồ Định khoản Nghiệp vụ (5 Bộ mẫu)
          </TabsTrigger>
        </TabsList>

        {/* TAB 1: DANH MỤC TÀI KHOẢN */}
        <TabsContent value="list" className="space-y-6">
          {/* Lọc & Tìm kiếm */}
          <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center gap-4 bg-card p-4 rounded-2xl border border-border/80 shadow-xs">
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
              {ACCOUNT_TYPES.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all ${
                    selectedType === type
                      ? 'bg-emerald-600 text-white font-bold shadow-xs'
                      : 'bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-80 shrink-0">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Tìm mã TK (111, 154...), tên..." 
                className="pl-9 bg-background text-xs"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Bảng Dữ Liệu Tài Khoản */}
          <div className="bg-card rounded-2xl border border-border/80 shadow-xs overflow-hidden">
            <div className="p-3 bg-muted/40 border-b border-border text-xs text-muted-foreground flex items-center justify-between">
              <span>Bấm vào hàng để xem chi tiết kết cấu Nợ/Có. Bấm biểu tượng để sao chép mã TK.</span>
              <span className="font-semibold text-emerald-700 dark:text-emerald-300">Đang hiển thị {filteredAccounts.length} tài khoản</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[700px] text-sm text-left">
                <thead className="bg-muted/60 text-muted-foreground text-xs uppercase tracking-wider">
                  <tr>
                    <th className="px-4 py-3.5 font-bold w-28">Mã TK</th>
                    <th className="px-4 py-3.5 font-bold w-64">Tên tài khoản</th>
                    <th className="px-4 py-3.5 font-bold w-48">Phân loại</th>
                    <th className="px-4 py-3.5 font-bold">Mô tả hạch toán theo TT 99/2025</th>
                    <th className="px-4 py-3.5 font-bold w-20 text-center">Sao chép</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {filteredAccounts.length > 0 ? (
                    filteredAccounts.map((acc) => {
                      const isLevel1 = acc.code.length === 3;
                      return (
                        <tr 
                          key={acc.code} 
                          onClick={() => setSelectedAccount(acc)}
                          className={`cursor-pointer transition-colors ${
                            isLevel1 
                              ? 'bg-muted/15 font-semibold hover:bg-emerald-50/50 dark:hover:bg-emerald-950/30' 
                              : 'hover:bg-muted/30'
                          }`}
                        >
                          <td className="px-4 py-3.5 font-mono">
                            <span className={`inline-block px-2 py-0.5 rounded ${
                              isLevel1 
                                ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 font-bold' 
                                : 'text-foreground'
                            }`}>
                              {acc.code}
                            </span>
                          </td>
                          <td className="px-4 py-3.5 text-foreground">
                            {acc.name}
                          </td>
                          <td className="px-4 py-3.5">
                            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-normal bg-secondary text-secondary-foreground">
                              {acc.type}
                            </span>
                          </td>
                          <td className="px-4 py-3.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                            {acc.description}
                          </td>
                          <td className="px-4 py-3.5 text-center">
                            <Button
                              size="icon"
                              variant="ghost"
                              className="h-7 w-7 rounded-lg text-muted-foreground hover:text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-950/40"
                              onClick={(e) => handleCopyCode(acc.code, e)}
                              title="Sao chép mã tài khoản"
                            >
                              {copiedCode === acc.code ? (
                                <Check className="h-3.5 w-3.5 text-emerald-600" />
                              ) : (
                                <Copy className="h-3.5 w-3.5" />
                              )}
                            </Button>
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td colSpan={5} className="px-6 py-12 text-center text-muted-foreground">
                        Không tìm thấy tài khoản nào khớp với từ khóa "{searchTerm}".
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </TabsContent>

        {/* TAB 2: SƠ ĐỒ ĐỊNH KHOẢN NGHIỆP VỤ */}
        <TabsContent value="guides" className="space-y-6">
          <div className="grid grid-cols-1 gap-6">
            {ACCOUNTING_GUIDES_TT99.map((guide) => (
              <div 
                key={guide.id}
                className="bg-card rounded-2xl border border-border/80 p-6 shadow-xs space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border/60 pb-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-emerald-600 text-white hover:bg-emerald-700 text-xs">
                        {guide.badge}
                      </Badge>
                      <h3 className="font-bold text-lg text-foreground">
                        {guide.title}
                      </h3>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      {guide.subtitle}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="p-3.5 bg-muted/40 rounded-xl space-y-1">
                    <span className="font-bold text-foreground">Cốt lõi quy định:</span>
                    <p className="text-muted-foreground leading-relaxed">{guide.summary}</p>
                  </div>
                  <div className="p-3.5 bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200/80 dark:border-emerald-800/60 rounded-xl space-y-1">
                    <span className="font-bold text-emerald-900 dark:text-emerald-200">Điểm mới so với TT 200:</span>
                    <p className="text-emerald-800/90 dark:text-emerald-300 leading-relaxed whitespace-pre-line">{guide.ruleChange}</p>
                  </div>
                </div>

                {/* Bảng Định Khoản Nợ / Có */}
                <div className="space-y-2 pt-2">
                  <h4 className="font-bold text-xs uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                    <Sparkles className="h-3.5 w-3.5 text-emerald-600" />
                    Các Bút Toán Định Khoản Tiêu Biểu:
                  </h4>
                  <div className="space-y-2.5">
                    {guide.entries.map((entry, idx) => (
                      <div key={idx} className="p-3.5 bg-background rounded-xl border border-border/80 text-xs space-y-2">
                        <div className="font-semibold text-foreground flex items-start gap-2">
                          <span className="w-4 h-4 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                            {idx + 1}
                          </span>
                          <span>{entry.desc}</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-6">
                          <div className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 font-mono text-xs">
                            <span className="font-bold text-emerald-800 dark:text-emerald-300">NỢ: </span>
                            <span className="text-foreground">{entry.debit}</span>
                          </div>
                          <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/60 font-mono text-xs">
                            <span className="font-bold text-blue-800 dark:text-blue-300">CÓ: </span>
                            <span className="text-foreground">{entry.credit}</span>
                          </div>
                        </div>
                        {entry.note && (
                          <p className="text-[11px] text-muted-foreground italic pl-6">
                            * Chứng từ kèm theo: {entry.note}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Lời khuyên thực chiến cho Kiểu Việt */}
                <div className="p-3 bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/60 rounded-xl text-xs space-y-1">
                  <span className="font-bold text-amber-900 dark:text-amber-200">💡 Lưu ý thực chiến kế toán Kiểu Việt:</span>
                  <p className="text-amber-800 dark:text-amber-300 leading-relaxed">
                    {guide.practicalAdvice}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* MODAL CHI TIẾT TÀI KHOẢN KHI BẤM VÀO HÀNG */}
      {selectedAccount && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-card border border-border rounded-3xl p-6 max-w-lg w-full shadow-2xl space-y-5 animate-in zoom-in-95 duration-200">
            <div className="flex items-start justify-between">
              <div>
                <span className="px-2.5 py-1 rounded-md font-mono font-bold text-sm bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                  TK {selectedAccount.code}
                </span>
                <h3 className="font-bold text-xl text-foreground mt-2">
                  {selectedAccount.name}
                </h3>
                <span className="text-xs text-muted-foreground">
                  Phân loại: {selectedAccount.type}
                </span>
              </div>
              <Button 
                size="icon" 
                variant="ghost" 
                className="rounded-full" 
                onClick={() => setSelectedAccount(null)}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            <div className="p-4 bg-muted/40 rounded-2xl border border-border/80 space-y-2 text-xs">
              <span className="font-bold text-foreground">Nội dung & Mô tả hạch toán:</span>
              <p className="text-muted-foreground leading-relaxed">
                {selectedAccount.description}
              </p>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <Button
                variant="outline"
                className="gap-1.5 text-xs"
                onClick={(e) => handleCopyCode(selectedAccount.code, e)}
              >
                <Copy className="h-4 w-4" /> Sao chép mã TK
              </Button>
              <Button 
                className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs"
                onClick={() => setSelectedAccount(null)}
              >
                Đóng
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}