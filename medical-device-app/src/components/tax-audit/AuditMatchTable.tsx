import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { MatchDetail } from '../../types/audit-issues';
import { FileText, AlertTriangle, CheckCircle } from 'lucide-react';
import { Button } from '../ui/button';

interface AuditMatchTableProps {
  details: MatchDetail[];
  onViewSource?: (source: any) => void;
}

export function AuditMatchTable({ details, onViewSource }: AuditMatchTableProps) {
  if (!details || details.length === 0) {
    return (
      <Card>
        <CardContent className="p-6 text-center text-muted-foreground">
          Không có dữ liệu đối chiếu.
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Bảng đối chiếu dòng sự vụ</CardTitle>
        <CardDescription>
          So sánh số liệu trên sổ kế toán và chứng từ thực tế để phát hiện chênh lệch.
        </CardDescription>
      </CardHeader>
      <CardContent className="p-0 overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="bg-muted text-muted-foreground">
            <tr>
              <th className="px-4 py-3 font-medium border-b">Chỉ tiêu</th>
              <th className="px-4 py-3 font-medium border-b">Số trên Sổ kế toán</th>
              <th className="px-4 py-3 font-medium border-b">Số Thực tế / Hóa đơn</th>
              <th className="px-4 py-3 font-medium border-b">Chênh lệch</th>
              <th className="px-4 py-3 font-medium border-b">Trạng thái</th>
              <th className="px-4 py-3 font-medium border-b text-right">Chứng từ</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {details.map((detail) => {
              const diffValue = Number(detail.bookValue) - Number(detail.actualValue);
              const isNumeric = !isNaN(diffValue);
              
              return (
                <tr key={detail.id} className="hover:bg-muted/50 transition-colors">
                  <td className="px-4 py-3 font-medium">{detail.field}</td>
                  <td className="px-4 py-3">{detail.bookValue}</td>
                  <td className="px-4 py-3">{detail.actualValue}</td>
                  <td className="px-4 py-3">
                    {isNumeric && !detail.isMatched ? (
                      <span className="text-destructive font-semibold">
                        {diffValue > 0 ? '+' : ''}{diffValue}
                      </span>
                    ) : (
                      <span className="text-muted-foreground">-</span>
                    )}
                  </td>
                  <td className="px-4 py-3">
                    {detail.isMatched ? (
                      <span className="inline-flex items-center text-green-600 bg-green-50 px-2 py-1 rounded-full text-xs font-medium">
                        <CheckCircle className="w-3 h-3 mr-1" /> Khớp
                      </span>
                    ) : (
                      <span className="inline-flex items-center text-destructive bg-destructive/10 px-2 py-1 rounded-full text-xs font-medium">
                        <AlertTriangle className="w-3 h-3 mr-1" /> Lệch
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-right">
                    {(detail.bookSource || detail.actualSource) && (
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => onViewSource && onViewSource(detail.actualSource || detail.bookSource)}
                      >
                        <FileText className="w-4 h-4 mr-1" /> Xem
                      </Button>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
}
