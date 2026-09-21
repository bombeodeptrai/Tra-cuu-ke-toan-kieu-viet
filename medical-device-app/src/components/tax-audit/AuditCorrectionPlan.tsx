import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { AuditIssue } from '../../types/audit-issues';
import { Save, Check } from 'lucide-react';

interface AuditCorrectionPlanProps {
  issue: AuditIssue;
  onSavePlan?: (issueId: string, plan: any) => void;
}

export function AuditCorrectionPlan({ issue, onSavePlan }: AuditCorrectionPlanProps) {
  const [plan, setPlan] = useState(issue.resolutionPlan || {
    cause: '',
    actionRequired: '',
    assignee: '',
    deadline: '',
    impactTax: '',
    impactInvoice: '',
    status: 'draft' as const
  });

  const handleChange = (field: string, value: string) => {
    setPlan(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = (status: 'draft' | 'approved') => {
    const updatedPlan = { ...plan, status };
    setPlan(updatedPlan);
    if (onSavePlan) {
      onSavePlan(issue.id, updatedPlan);
    }
  };

  return (
    <Card className="mt-6 border-blue-200 shadow-sm">
      <CardHeader className="bg-blue-50/50 pb-4">
        <CardTitle className="text-lg text-blue-900">Phương án xử lý sự vụ</CardTitle>
        <CardDescription>
          Xác định nguyên nhân, phân công người khắc phục và đánh giá ảnh hưởng
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6 space-y-4">
        <div className="space-y-2">
          <Label htmlFor="cause">Nguyên nhân chênh lệch</Label>
          <Textarea 
            id="cause" 
            placeholder="Ví dụ: Bán hàng thấp hơn giá vốn do xả hàng tồn kho cận date..."
            value={plan.cause}
            onChange={(e) => handleChange('cause', e.target.value)}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="actionRequired">Hành động khắc phục / Chứng từ cần bổ sung</Label>
          <Textarea 
            id="actionRequired" 
            placeholder="Ví dụ: Bổ sung Biên bản kiểm kê kho xác nhận hàng cận date, Tờ trình xin giảm giá..."
            value={plan.actionRequired}
            onChange={(e) => handleChange('actionRequired', e.target.value)}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="assignee">Người phụ trách</Label>
            <Input 
              id="assignee" 
              placeholder="VD: Nguyễn Văn A"
              value={plan.assignee}
              onChange={(e) => handleChange('assignee', e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="deadline">Hạn chót bổ sung</Label>
            <Input 
              id="deadline" 
              type="date"
              value={plan.deadline}
              onChange={(e) => handleChange('deadline', e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 border-t pt-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="impactTax" className="text-destructive">Ảnh hưởng Thuế (VND)</Label>
            <Input 
              id="impactTax" 
              placeholder="+15,000,000 TNDN phải nộp thêm"
              value={plan.impactTax}
              onChange={(e) => handleChange('impactTax', e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="impactInvoice">Ảnh hưởng Hóa đơn</Label>
            <Input 
              id="impactInvoice" 
              placeholder="Cần xuất hóa đơn điều chỉnh giảm"
              value={plan.impactInvoice}
              onChange={(e) => handleChange('impactInvoice', e.target.value)}
            />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between border-t bg-muted/20 p-4">
        <div className="text-sm text-muted-foreground">
          Trạng thái: <span className="font-medium text-foreground">
            {plan.status === 'approved' ? 'Đã duyệt' : 'Đang nháp'}
          </span>
        </div>
        <div className="space-x-2">
          <Button variant="outline" onClick={() => handleSave('draft')}>
            <Save className="w-4 h-4 mr-2" />
            Lưu nháp
          </Button>
          <Button variant="default" className="bg-blue-600 hover:bg-blue-700" onClick={() => handleSave('approved')}>
            <Check className="w-4 h-4 mr-2" />
            Duyệt phương án
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
