import React, { useState } from 'react';
import { FileCheck, Plus, CheckCircle2, Clock, AlertCircle, UserCheck, Calendar } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AuditRequestLogItem } from '@/types/tax-audit';

const INITIAL_LOGS: AuditRequestLogItem[] = [
  {
    id: 'req-01',
    caseId: 'case-2026-10',
    requestTime: '10/10/2026 09:00',
    requestContent: 'Xuất trình Hợp đồng vay vốn & Bảng tính chi phí lãi vay liên kết 37 tỷ (Cty TNHH Kiểu Việt)',
    requestedBy: 'Đoàn kiểm tra thuế - Trưởng đoàn',
    legalBasis: 'Nghị định 132/2020/NĐ-CP Điều 16',
    deadline: '11/10/2026 17:00',
    assignee: 'Kế toán trưởng & Kế toán tổng hợp',
    status: 'preparing',
    deliveredVersion: 'Draft v1.0',
    notes: 'Đã lập bảng tính EBITDA, đang gom phụ lục hợp đồng vay và sao kê thanh toán lãi.'
  },
  {
    id: 'req-02',
    caseId: 'case-2026-10',
    requestTime: '10/10/2026 14:00',
    requestContent: 'Bảng phân bổ chi phí và Biên bản kiểm kê hiện trường 26 tỷ dở dang TK 154',
    requestedBy: 'Cán bộ thanh tra phụ trách xây dựng',
    legalBasis: 'Thông tư 96/2015/TT-BTC & Chuẩn mực VAS 14',
    deadline: '12/10/2026 11:30',
    assignee: 'Kế toán công trình & Kỹ thuật hiện trường',
    status: 'received',
    notes: 'Cần trích xuất bảng kê vật tư gỗ xưởng Phú Tài và nhật trình ca máy công trình Gia Lai/Kon Tum.'
  },
  {
    id: 'req-03',
    caseId: 'case-2026-10',
    requestTime: '08/10/2026 15:30',
    requestContent: 'Hồ sơ pháp lý, Biên bản đối chiếu công nợ để trích lập 3.11 tỷ nợ xấu bê tông',
    requestedBy: 'Cán bộ thanh tra quản lý thuế TNDN',
    legalBasis: 'Thông tư 48/2019/TT-BTC Điều 6',
    deadline: '09/10/2026 16:00',
    assignee: 'Kế toán công nợ',
    status: 'submitted',
    deliveredVersion: 'Bản chính thức v2.1',
    notes: 'Đã bàn giao đầy đủ: 03 Biên bản đối chiếu có ký nhận + Giấy báo đòi nợ qua bưu điện.'
  }
];

export const AuditRequestLog: React.FC = () => {
  const [logs, setLogs] = useState<AuditRequestLogItem[]>(INITIAL_LOGS);

  const getStatusBadge = (status: AuditRequestLogItem['status']) => {
    switch (status) {
      case 'received':
        return <Badge variant="outline" className="bg-slate-100 text-slate-700">Mới tiếp nhận</Badge>;
      case 'preparing':
        return <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-300">Đang chuẩn bị hồ sơ</Badge>;
      case 'submitted':
        return <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-300">Đã bàn giao cho Đoàn</Badge>;
      case 'approved':
        return <Badge variant="outline" className="bg-emerald-100 text-emerald-800 border-emerald-300">Đoàn đã chấp thuận</Badge>;
    }
  };

  return (
    <Card className="border shadow-sm">
      <CardHeader className="pb-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <CardTitle className="text-xl font-bold flex items-center gap-2">
              <FileCheck className="w-5 h-5 text-blue-600" />
              Sổ Nhật Ký Yêu Cầu & Bàn Giao Hồ Sơ Cho Đoàn Kiểm Tra
            </CardTitle>
            <CardDescription className="text-sm mt-1">
              Theo dõi chi tiết từng biên bản làm việc, yêu cầu giải trình, người phụ trách và phiên bản hồ sơ đã nộp cho đoàn thanh tra.
            </CardDescription>
          </div>
          <Badge variant="outline" className="bg-blue-50 text-blue-700 self-start sm:self-auto">
            {logs.length} Yêu cầu giải trình
          </Badge>
        </div>
      </CardHeader>

      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b bg-muted/40 font-semibold text-muted-foreground">
                <th className="p-3">Thời gian</th>
                <th className="p-3">Nội dung Đoàn kiểm tra yêu cầu</th>
                <th className="p-3">Căn cứ pháp lý</th>
                <th className="p-3">Người phụ trách</th>
                <th className="p-3">Hạn nộp (Deadline)</th>
                <th className="p-3">Trạng thái hồ sơ</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {logs.map((log) => (
                <tr key={log.id} className="hover:bg-muted/30 transition-colors">
                  <td className="p-3 whitespace-nowrap text-muted-foreground font-mono">{log.requestTime}</td>
                  <td className="p-3 max-w-xs">
                    <div className="font-semibold text-foreground">{log.requestContent}</div>
                    <div className="text-[11px] text-muted-foreground mt-0.5">Yêu cầu bởi: {log.requestedBy}</div>
                    {log.notes && (
                      <div className="text-[11px] text-blue-600 dark:text-blue-400 mt-1 italic">
                        Ghi chú: {log.notes}
                      </div>
                    )}
                  </td>
                  <td className="p-3 whitespace-nowrap">
                    <span className="bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded text-foreground font-mono">
                      {log.legalBasis || 'Theo QĐ kiểm tra'}
                    </span>
                  </td>
                  <td className="p-3 whitespace-nowrap text-foreground font-medium">{log.assignee}</td>
                  <td className="p-3 whitespace-nowrap font-mono text-amber-700 dark:text-amber-300 font-semibold">
                    {log.deadline}
                  </td>
                  <td className="p-3 whitespace-nowrap">
                    {getStatusBadge(log.status)}
                    {log.deliveredVersion && (
                      <div className="text-[10px] text-muted-foreground mt-0.5">Bản: {log.deliveredVersion}</div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};