import React, { useState } from 'react';
import { ArrowRightLeft, Sparkles, PlusCircle, RefreshCw, Trash2, Bot, Layers, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { DecreeDiffAIChat } from './DecreeDiffAIChat';

import { DIFF_DATABASE, DecreeDiffData, DiffItem } from '@/data/diff-database';
export type { DecreeDiffData, DiffItem };
export { DIFF_DATABASE };

interface DecreeDiffViewerProps {
  decreeId: string;
}

export function DecreeDiffViewer({ decreeId }: DecreeDiffViewerProps) {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedId, setSelectedId] = useState(decreeId);

  React.useEffect(() => {
    if (decreeId && DIFF_DATABASE[decreeId]) {
      setSelectedId(decreeId);
    }
  }, [decreeId]);

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
          <optgroup label="1. 📊 Chế độ Kế toán & Chuẩn mực VAS (13 văn bản)">
            <option value="tt-99-2025">Thông tư 99/2025/TT-BTC (Chế độ KT mới vs TT 200/2014 & TT 133)</option>
            <option value="tt-200-2014">Thông tư 200/2014/TT-BTC (Chế độ KT Doanh nghiệp vs QĐ 15/2006)</option>
            <option value="tt-133-2016">Thông tư 133/2016/TT-BTC (Kế toán DNNVV vs QĐ 48/2006)</option>
            <option value="tt-46-2025">Thông tư 46/2025/TT-BTC (Sửa đổi TT 133/2016)</option>
            <option value="tt-24-2024-tt-btc">Thông tư 24/2024/TT-BTC (Kế toán HCSN vs TT 107/2017)</option>
            <option value="tt-108-2025">Thông tư 108/2025/TT-BTC (BCTC cơ quan nhà nước vs TT 99/2018)</option>
            <option value="luat-ke-toan-2015">Luật Kế toán 88/2015/QH13 (Chuẩn mực chung vs Luật 2003)</option>
            <option value="luat-56-2024">Luật sửa đổi 56/2024/QH15 (Sửa 9 Luật Tài chính & Kế toán)</option>
            <option value="nd-174-2016">Nghị định 174/2016/NĐ-CP (Hướng dẫn Luật Kế toán vs NĐ 128)</option>
            <option value="nd-41-2018">Nghị định 41/2018/NĐ-CP (Xử phạt Kế toán – Kiểm toán vs NĐ 105)</option>
            <option value="vas-01">Chuẩn mực VAS 01 (Chuẩn mực kế toán chung)</option>
            <option value="vas-02">Chuẩn mực VAS 02 (Hàng tồn kho & NRV)</option>
            <option value="vas-14">Chuẩn mực VAS 14 (Doanh thu xây lắp & dịch vụ)</option>
          </optgroup>

          <optgroup label="2. 🏢 Thuế Thu nhập Doanh nghiệp - TNDN (5 văn bản)">
            <option value="luat-67-2025-tndn">Luật Thuế TNDN 67/2025/QH15 (Thuế tối thiểu toàn cầu 15% vs Luật 14)</option>
            <option value="luat-thue-tndn">Luật Thuế TNDN 14/2008/QH12 (Thuế suất 20% vs 28% Luật 09)</option>
            <option value="nd-218-2013">Nghị định 218/2013/NĐ-CP (Hướng dẫn Luật Thuế TNDN vs NĐ 124)</option>
            <option value="tt-96-2015">Thông tư 96/2015/TT-BTC (Chi phí được trừ thuế TNDN vs TT 78/2014)</option>
            <option value="nd-132-2020">Nghị định 132/2020/NĐ-CP (Giao dịch liên kết, trần lãi vay 30% EBITDA)</option>
          </optgroup>

          <optgroup label="3. 🧾 Thuế Giá trị Gia tăng - GTGT (5 văn bản)">
            <option value="luat-thue-gtgt">Luật Thuế GTGT 13/2008/QH12 (Khấu trừ thuế vs Luật 1997)</option>
            <option value="tt-219-2013">Thông tư 219/2013/TT-BTC (Thuế GTGT xây lắp vs TT 06/2012)</option>
            <option value="nd-180-2024-nd-cp">Nghị định 180/2024/NĐ-CP (Giảm 2% thuế GTGT xuống 8% vs NĐ 72)</option>
            <option value="nd-15-2022">Nghị định 15/2022/NĐ-CP (Gói giảm thuế GTGT 2% phục hồi kinh tế)</option>
            <option value="nd-64-2024">Nghị định 64/2024/NĐ-CP (Gia hạn nộp thuế GTGT, TNDN, tiền thuê đất)</option>
          </optgroup>

          <optgroup label="4. 💻 Hóa đơn điện tử & Quản lý Thuế (7 văn bản)">
            <option value="nd-123-2020">Nghị định 123/2020/NĐ-CP (Hóa đơn điện tử bắt buộc vs HĐ giấy NĐ 51)</option>
            <option value="tt-78-2021">Thông tư 78/2021/TT-BTC (Hóa đơn điện tử Mẫu 04/SS vs TT 39)</option>
            <option value="nd-70-2025">Nghị định 70/2025/NĐ-CP (Chứng từ khấu trừ TNCN điện tử, VNeID)</option>
            <option value="nd-125-2020">Nghị định 125/2020/NĐ-CP (Phạt vi phạm Thuế & Hóa đơn vs NĐ 129)</option>
            <option value="luat-quan-ly-thue-2019">Luật Quản lý thuế 38/2019/QH14 (Phạt chậm nộp 0.03%/ngày vs Luật 78)</option>
            <option value="nd-126-2020">Nghị định 126/2020/NĐ-CP (Tạm nộp 80% thuế TNDN 4 quý vs NĐ 83)</option>
            <option value="tt-80-2021">Thông tư 80/2021/TT-BTC (Phân bổ thuế xây dựng vãng lai 1% vs TT 156)</option>
          </optgroup>

          <optgroup label="5. 👥 Thuế TNCN, Tiền lương & BHXH (9 văn bản)">
            <option value="luat-109-2025-tncn">Luật Thuế TNCN 109/2025/QH15 (Giảm trừ 15.5tr/6.2tr vs Luật 04)</option>
            <option value="tt-111-2013">Thông tư 111/2013/TT-BTC (Khoán chi ăn ca, trang phục công trường vs TT 84)</option>
            <option value="nd-293-2025">Nghị định 293/2025/NĐ-CP (Lương tối thiểu vùng năm 2026 vs NĐ 74)</option>
            <option value="blld-45-2019">Bộ luật Lao động 45/2019/QH14 (Bỏ HĐLĐ mùa vụ, thêm nghỉ Quốc khánh)</option>
            <option value="nd-73-2024">Nghị định 73/2024/NĐ-CP (Lương cơ sở 2.34tr tăng trần BHXH 46.8tr)</option>
            <option value="nd-145-2020">Nghị định 145/2020/NĐ-CP (Lương tăng ca, trần 300h xây dựng vs NĐ 05)</option>
            <option value="nd-12-2022">Nghị định 12/2022/NĐ-CP (Xử phạt trốn đóng BHXH & ATVSLĐ vs NĐ 28)</option>
            <option value="luat-41-2024">Luật Bảo hiểm xã hội 41/2024/QH15 (Đóng 15 năm hưởng hưu vs Luật 58)</option>
            <option value="qd-595-2017-bhxh">Quyết định 595/QĐ-BHXH (Quy trình thu nộp BHXH doanh nghiệp xây dựng)</option>
          </optgroup>

          <optgroup label="6. 🏗️ Hợp đồng Xây dựng & Quản lý Dự toán (3 văn bản)">
            <option value="nd-37-2015">Nghị định 37/2015/NĐ-CP (Thời hạn CĐT thanh toán 14 ngày vs NĐ 48)</option>
            <option value="nd-50-2021">Nghị định 50/2021/NĐ-CP (Tạm ứng 50%, bù giá trọn gói vs NĐ 37)</option>
            <option value="nd-10-2021">Nghị định 10/2021/NĐ-CP (Quản lý dự toán, định mức XD vs NĐ 68)</option>
          </optgroup>

          <optgroup label="7. ⛏️ Khai thác Mỏ, Thuế Tài nguyên & Phí BVMT (7 văn bản)">
            <option value="luat-54-2024-khoangsan">Luật Địa chất và Khoáng sản 54/2024 (Phân 4 nhóm khoáng sản vs Luật 2010)</option>
            <option value="nd-193-2025-khoangsan">Nghị định 193/2025/NĐ-CP (Cơ chế mỏ đất đắp cao tốc vs NĐ 158)</option>
            <option value="qd-87-2025-gialai">Quyết định 87/2025/QĐ-UBND (Bảng giá tính thuế tài nguyên 2026 Gia Lai)</option>
            <option value="nd-27-2023">Nghị định 27/2023/NĐ-CP (Phí BVMT khai thác khoáng sản vs NĐ 164)</option>
            <option value="tt-152-2015">Thông tư 152/2015/TT-BTC (Thuế Tài nguyên đá mỏ cát đất vs TT 105)</option>
            <option value="nd-67-2019">Nghị định 67/2019/NĐ-CP (Tiền cấp quyền khai thác khoáng sản vs NĐ 203)</option>
            <option value="tt-44-2017">Thông tư 44/2017/TT-BTC (Khung giá tính thuế tài nguyên toàn quốc)</option>
          </optgroup>

          <optgroup label="8. 📑 TSCĐ, Dự phòng & Lệ phí khác (6 văn bản)">
            <option value="tt-45-2013">Thông tư 45/2013/TT-BTC (Khung khấu hao TSCĐ máy móc vs TT 203)</option>
            <option value="tt-48-2019">Thông tư 48/2019/TT-BTC (Trích lập dự phòng nợ xấu, hàng tồn kho vs TT 228)</option>
            <option value="nd-139-2016">Nghị định 139/2016/NĐ-CP (3 Bậc mức thu lệ phí môn bài vs Pháp lệnh 1983)</option>
            <option value="nd-22-2020">Nghị định 22/2020/NĐ-CP (Miễn lệ phí môn bài năm đầu thành lập vs NĐ 139)</option>
            <option value="luat-gd-dien-tu-20-2023">Luật Giao dịch điện tử 20/2023 (Chữ ký số & HĐ điện tử vs Luật 2005)</option>
            <option value="luat-thue-xnk-107-2016">Luật Thuế XNK 107/2016 (Miễn thuế nhập khẩu máy móc TSCĐ vs Luật 2005)</option>
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
              <div className="flex items-center gap-1.5">
                <Badge variant="outline" className="bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-[11px] font-semibold border-emerald-300">
                  Cùng Sắc Thuế / Chuyên Đề
                </Badge>
                <Badge variant="outline" className="bg-white/80 dark:bg-background/80 text-emerald-700 dark:text-emerald-300 text-[11px]">
                  {diffData.category}
                </Badge>
              </div>
            </div>
            <p className="text-xs md:text-sm text-foreground/80 leading-relaxed">
              {diffData.summary}
            </p>
          </div>

          {/* AI Box Chat Đối Chiếu Pháp Lý Tức Thời */}
          <DecreeDiffAIChat currentDiff={diffData} />

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
