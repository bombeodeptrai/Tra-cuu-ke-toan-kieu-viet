import React, { useState } from 'react';
import { 
  FolderArchive, FileText, CheckCircle2, Clock, AlertTriangle, 
  ExternalLink, Filter, Search, Tag, Eye, ShieldCheck
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { AuditEvidence, Pillar, PILLAR_LABELS } from '@/types/tax-audit';

const INITIAL_EVIDENCES: AuditEvidence[] = [
  {
    id: 'evi-01',
    caseId: 'case-2026-10',
    title: 'Hợp đồng tín dụng nội bộ & Khế ước vay 37 tỷ giữa Kiểu Việt và Cty TNHH Kiểu Việt',
    pillar: 'construction',
    kind: 'contract',
    referenceNumber: 'HĐV-01/2023/KV-TNHHKV',
    issueDate: '15/03/2023',
    amountVnd: '37.000.000.000 đ',
    storageType: 'paper',
    locationNote: 'Kẹp hồ sơ Vay vốn - Tủ lưu trữ Kế toán Trưởng, Phòng TCKT',
    verified: true,
    notes: 'Đã bổ sung Phụ lục gia hạn lãi suất và sao kê giao dịch tài khoản ngân hàng BIDV.'
  },
  {
    id: 'evi-02',
    caseId: 'case-2026-10',
    title: 'Biên bản nghiệm thu khối lượng xây lắp A-B hoàn thành giai đoạn & Bảng phân bổ 154',
    pillar: 'construction',
    kind: 'acceptance_slip',
    referenceNumber: 'BBNT-08/2024/DA-GL',
    issueDate: '28/12/2024',
    amountVnd: '18.500.000.000 đ',
    storageType: 'drive_link',
    locationNote: 'Google Drive Nội bộ Kiểu Việt: /Ho-so-nghiem-thu/2024/',
    verified: true,
    notes: 'Có chữ ký đầy đủ Ban Quản lý dự án, Chủ đầu tư và Tư vấn giám sát.'
  },
  {
    id: 'evi-03',
    caseId: 'case-2026-10',
    title: 'Hồ sơ đối chiếu công nợ & Thông báo thu hồi 3.11 tỷ nợ xấu trạm bê tông',
    pillar: 'concrete_materials',
    kind: 'reconciliation_memo',
    referenceNumber: 'BB-DCCN-311/2024',
    issueDate: '15/01/2025',
    amountVnd: '3.110.000.000 đ',
    storageType: 'paper',
    locationNote: 'Kẹp hồ sơ Công nợ khó đòi - Kế toán Công nợ',
    verified: true,
    notes: 'Đã kèm 03 bưu gửi bảo đảm đòi nợ hợp lệ theo Điều 6 Thông tư 48/2019/TT-BTC.'
  },
  {
    id: 'evi-04',
    caseId: 'case-2026-10',
    title: 'Bảng kê lâm sản, Nguồn gốc gỗ nhập khẩu Xưởng sản xuất Nội thất Phú Tài',
    pillar: 'interior',
    kind: 'invoice',
    referenceNumber: 'BKLS-PT-2024/09',
    issueDate: '20/09/2024',
    amountVnd: '9.450.000.000 đ',
    storageType: 'local_file',
    locationNote: 'Máy chủ nội bộ Kế toán Kho: /Phu-Tai/Lam-San-2024.xlsx',
    verified: true,
    notes: 'Khớp đúng định mức tiêu hao nguyên vật liệu theo Thông tư 96/2015/TT-BTC.'
  },
  {
    id: 'evi-05',
    caseId: 'case-2026-10',
    title: 'Hồ sơ sản phẩm tư vấn, Báo cáo khảo sát địa chất & Bàn giao sản phẩm thiết kế',
    pillar: 'consulting',
    kind: 'acceptance_slip',
    referenceNumber: 'BB-BG-TV-04/2024',
    issueDate: '10/11/2024',
    amountVnd: '1.200.000.000 đ',
    storageType: 'paper',
    locationNote: 'Phòng Kỹ thuật - Hồ sơ bàn giao sản phẩm tư vấn',
    verified: true,
    notes: 'Kèm chứng chỉ hành nghề của các kiến trúc sư, kỹ sư chủ trì theo NĐ 15/2021.'
  }
];

export const EvidencePanel: React.FC = () => {
  const [selectedPillar, setSelectedPillar] = useState<string>('all');
  const [search, setSearch] = useState<string>('');

  const filtered = INITIAL_EVIDENCES.filter(e => {
    const matchPillar = selectedPillar === 'all' || e.pillar === selectedPillar;
    const matchSearch = !search || 
      e.title.toLowerCase().includes(search.toLowerCase()) ||
      e.referenceNumber.toLowerCase().includes(search.toLowerCase()) ||
      e.locationNote?.toLowerCase().includes(search.toLowerCase());
    return matchPillar && matchSearch;
  });

  return (
    <Card className="border shadow-sm">
      <CardHeader className="pb-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <CardTitle className="text-xl font-bold flex items-center gap-2">
              <FolderArchive className="w-5 h-5 text-blue-600" />
              Hồ Sơ & Chứng Từ Gốc Sẵn Sàng Xuất Trình Đoàn Kiểm Tra
            </CardTitle>
            <CardDescription className="text-sm mt-1">
              Quản lý vị trí lưu trữ hồ sơ giấy, liên kết Drive nội bộ và mức độ xác minh chứng từ cho 4 mảng hoạt động của Kiểu Việt.
            </CardDescription>
          </div>
          <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-300 self-start sm:self-auto">
            100% Hồ sơ đã định vị vị trí lưu trữ
          </Badge>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t mt-4">
          <div className="flex-1">
            <Input
              placeholder="Tìm kiếm chứng từ, số hợp đồng, biên bản, tủ lưu..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="text-xs"
            />
          </div>
          <div className="flex flex-wrap gap-1.5">
            <Button
              size="sm"
              variant={selectedPillar === 'all' ? 'default' : 'outline'}
              onClick={() => setSelectedPillar('all')}
              className="text-xs"
            >
              Tất cả mảng
            </Button>
            <Button
              size="sm"
              variant={selectedPillar === 'interior' ? 'default' : 'outline'}
              onClick={() => setSelectedPillar('interior')}
              className="text-xs"
            >
              Nội thất Phú Tài
            </Button>
            <Button
              size="sm"
              variant={selectedPillar === 'concrete_materials' ? 'default' : 'outline'}
              onClick={() => setSelectedPillar('concrete_materials')}
              className="text-xs"
            >
              Bê tông & Đá
            </Button>
            <Button
              size="sm"
              variant={selectedPillar === 'construction' ? 'default' : 'outline'}
              onClick={() => setSelectedPillar('construction')}
              className="text-xs"
            >
              Xây lắp
            </Button>
            <Button
              size="sm"
              variant={selectedPillar === 'consulting' ? 'default' : 'outline'}
              onClick={() => setSelectedPillar('consulting')}
              className="text-xs"
            >
              Tư vấn
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filtered.map(evi => (
            <div key={evi.id} className="p-4 rounded-xl border bg-card hover:border-blue-300 transition-all space-y-3">
              <div className="flex items-start justify-between gap-2">
                <div className="space-y-1">
                  <Badge variant="outline" className="text-[10px] bg-slate-50 text-slate-700">
                    {PILLAR_LABELS[evi.pillar]}
                  </Badge>
                  <h4 className="font-semibold text-sm text-foreground leading-snug">{evi.title}</h4>
                </div>
                <Badge className={evi.verified ? 'bg-emerald-600' : 'bg-amber-600'}>
                  {evi.verified ? 'ĐÃ XÁC MINH' : 'CHỜ DUYỆT'}
                </Badge>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground pt-1 border-t">
                <div>
                  <span className="font-medium">Số hiệu:</span> <span className="font-mono text-foreground">{evi.referenceNumber}</span>
                </div>
                <div>
                  <span className="font-medium">Ngày lập:</span> <span className="font-mono text-foreground">{evi.issueDate}</span>
                </div>
                {evi.amountVnd && (
                  <div className="col-span-2">
                    <span className="font-medium">Giá trị:</span> <span className="font-bold text-blue-600 dark:text-blue-400">{evi.amountVnd}</span>
                  </div>
                )}
              </div>

              <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900 border text-xs space-y-1">
                <div className="flex items-center gap-1.5 font-medium text-foreground">
                  <span className="text-blue-600">📁 Vị trí hồ sơ:</span>
                  <span>{evi.locationNote}</span>
                </div>
                {evi.notes && (
                  <p className="text-[11px] text-muted-foreground italic pl-4">{evi.notes}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};