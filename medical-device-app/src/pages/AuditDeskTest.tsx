import React from 'react';
import { AuditMatchTable } from '../components/tax-audit/AuditMatchTable';
import { AuditCorrectionPlan } from '../components/tax-audit/AuditCorrectionPlan';
import { AuditIssue } from '../types/audit-issues';

const MOCK_ISSUE: AuditIssue = {
  id: 'ISSUE-001',
  caseId: 'CASE-2026',
  scenarioId: 'S02',
  pillar: 'TNDN',
  title: 'Hóa đơn xuất thấp hơn giá thực tế',
  periodFrom: '2026-01-01',
  periodTo: '2026-01-31',
  owner: 'Nguyen Van A',
  status: 'investigating',
  description: 'Phát hiện hóa đơn số 1234 xuất cho KH B thấp hơn bảng giá công bố.',
  matchDetails: [
    {
      id: 'M1',
      field: 'Đơn giá Thép cuộn D10',
      bookValue: 12000,
      actualValue: 15500,
      isMatched: false,
    },
    {
      id: 'M2',
      field: 'Số lượng Thép cuộn D10',
      bookValue: 100,
      actualValue: 100,
      isMatched: true,
    }
  ]
};

export default function AuditDeskTest() {
  return (
    <div className="container mx-auto py-8 max-w-5xl">
      <h1 className="text-2xl font-bold mb-2">Bàn Xử Lý Sự Vụ (Test)</h1>
      <p className="text-muted-foreground mb-8">
        Giao diện mẫu dành cho quy trình đối chiếu và lập phương án xử lý kế toán.
      </p>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">1. Bảng Đối Chiếu</h2>
        <AuditMatchTable 
          details={MOCK_ISSUE.matchDetails} 
          onViewSource={(s) => alert('Mở chứng từ gốc')}
        />
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">2. Phương Án Xử Lý</h2>
        <AuditCorrectionPlan 
          issue={MOCK_ISSUE}
          onSavePlan={(id, plan) => alert('Đã lưu phương án: ' + plan.status)}
        />
      </div>
    </div>
  );
}
