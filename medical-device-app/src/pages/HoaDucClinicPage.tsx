import React, { useState } from 'react';
import {
  Building2,
  Calculator,
  AlertTriangle,
  Layers,
  Info,
  CheckCircle2,
  Stethoscope,
  PenTool,
  Clock
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

// --- MOCK DATA ---
const DEMO_PRODUCTS = [
  { id: 'prod-01', name: 'Máy huyết học tự động Sysmex XN-550', manufacturer: 'Sysmex', model: 'XN-550', config: 'Chuẩn', legalBasis: '123/BYT' },
];

const DEMO_ASSETS = [
  { 
    id: 'ast-10', productId: 'prod-01', serialNumber: 'SN-SYS-2026', location: 'Phòng Khám Hòa Đức - Tầng 1', ownership: 'Owned', receiptDate: '2026-03-01',
    services: [
      { id: 'srv-10', type: 'maintenance', basis: 'Quy định hãng', lastPerformedAt: '2026-05-01', intervalMonths: 6 },
      { id: 'srv-11', type: 'calibration', basis: 'Thông tư đo lường', lastPerformedAt: '2026-03-01', intervalMonths: 12 }
    ]
  },
  { 
    id: 'ast-11', productId: 'prod-01', serialNumber: '', location: 'Phòng Khám Hòa Đức - Tầng 2', ownership: 'Leased', receiptDate: '2026-08-01',
    services: [
      { id: 'srv-12', type: 'regulatory inspection', basis: 'TT Kiểm định', lastPerformedAt: '2026-08-01', intervalMonths: 12 }
    ]
  }
];

const calculateNextDue = (lastPerformedAt: string, intervalMonths: number) => {
  const date = new Date(lastPerformedAt);
  date.setMonth(date.getMonth() + intervalMonths);
  return date;
};

const getStatusColor = (dueDate: Date) => {
  const now = new Date('2026-09-20');
  const diffDays = (dueDate.getTime() - now.getTime()) / (1000 * 3600 * 24);
  if (diffDays < 0) return 'text-red-600 bg-red-50 border-red-200';
  if (diffDays < 30) return 'text-amber-600 bg-amber-50 border-amber-200';
  return 'text-emerald-600 bg-emerald-50 border-emerald-200';
};

const getStatusText = (dueDate: Date) => {
  const now = new Date('2026-09-20');
  const diffDays = (dueDate.getTime() - now.getTime()) / (1000 * 3600 * 24);
  if (diffDays < 0) return 'Quá hạn';
  if (diffDays < 30) return 'Sắp đến hạn';
  return 'Bình thường';
};

export const HoaDucClinicPage: React.FC = () => {
  const [incidents, setIncidents] = useState([
    { id: 'inc-10', assetId: 'ast-10', description: 'Máy kêu to khi khởi động', status: 'temp_fix', createdAt: '2026-09-10' }
  ]);
  const [newIncidentDesc, setNewIncidentDesc] = useState('');

  const handleCreateIncident = (assetId: string) => {
    if (!newIncidentDesc.trim()) return;
    setIncidents([...incidents, { id: `inc-${Date.now()}`, assetId, description: newIncidentDesc, status: 'open', createdAt: '2026-09-20' }]);
    setNewIncidentDesc('');
  };

  const updateIncidentStatus = (id: string, newStatus: string) => {
    setIncidents(incidents.map(inc => inc.id === id ? { ...inc, status: newStatus } : inc));
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900 flex items-center gap-2">
            <Building2 className="w-6 h-6 text-teal-600" />
            Tài Chính & Quản Lý Tài Sản Hòa Đức (Demo Namespace)
          </h1>
        </div>
      </div>

      <Tabs defaultValue="assets" className="space-y-4">
        <TabsList className="bg-slate-100 border border-slate-200 p-1 rounded-xl">
          <TabsTrigger value="assets">Tài Sản & Sự Cố (Assets)</TabsTrigger>
          <TabsTrigger value="finance">Tài Chính NĐ132</TabsTrigger>
        </TabsList>

        <TabsContent value="assets" className="space-y-4">
          {DEMO_ASSETS.map(asset => {
            const product = DEMO_PRODUCTS.find(p => p.id === asset.productId);
            const assetIncidents = incidents.filter(i => i.assetId === asset.id);
            return (
              <Card key={asset.id} className="shadow-sm">
                <CardHeader className="bg-slate-50 border-b pb-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-base text-slate-900">{product?.name}</CardTitle>
                      <CardDescription>Vị trí: {asset.location} | Sở hữu: {asset.ownership}</CardDescription>
                    </div>
                    {asset.serialNumber ? (
                      <Badge variant="outline" className="font-mono bg-white">{asset.serialNumber}</Badge>
                    ) : (
                      <Badge variant="destructive" className="animate-pulse">Chưa nhập Serial - Yêu cầu nhập liệu</Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="pt-4 space-y-4 text-sm">
                  {/* Services */}
                  <div>
                    <strong className="block mb-2">Bảo trì & Kiểm định:</strong>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {asset.services.map(srv => {
                        const nextDue = calculateNextDue(srv.lastPerformedAt, srv.intervalMonths || 12);
                        return (
                          <div key={srv.id} className="p-2 border rounded bg-slate-50 flex justify-between items-center">
                            <div>
                              <span className="font-bold capitalize">{srv.type}</span> 
                              <span className="text-xs text-slate-500 block">Cơ sở: {srv.basis}</span>
                            </div>
                            <div className={`text-xs px-2 py-1 rounded font-bold ${getStatusColor(nextDue)}`}>
                              Hạn: {nextDue.toISOString().split('T')[0]} ({getStatusText(nextDue)})
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  {/* Incidents */}
                  <div className="pt-2 border-t">
                    <strong className="block mb-2 text-amber-700">Theo dõi sự cố (Incident Tracking):</strong>
                    <div className="space-y-2 mb-2">
                      {assetIncidents.map(inc => (
                        <div key={inc.id} className="flex items-center justify-between p-2 bg-amber-50 border border-amber-200 rounded">
                          <span>{inc.description} <span className="text-xs text-slate-500">({inc.createdAt})</span></span>
                          <select 
                            value={inc.status} 
                            onChange={(e) => updateIncidentStatus(inc.id, e.target.value)}
                            className="text-xs p-1 border rounded bg-white"
                          >
                            <option value="open">Khởi tạo</option>
                            <option value="linked">Đã liên kết</option>
                            <option value="temp_fix">Sửa tạm</option>
                            <option value="report_uploaded">Tải báo cáo</option>
                            <option value="review">Chờ duyệt</option>
                            <option value="closed">Đóng</option>
                          </select>
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Input 
                        placeholder="Nhập sự cố mới..." 
                        value={newIncidentDesc} 
                        onChange={e => setNewIncidentDesc(e.target.value)}
                        className="h-8"
                      />
                      <Button onClick={() => handleCreateIncident(asset.id)} size="sm" className="h-8">Tạo mới</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </TabsContent>
        <TabsContent value="finance">
          <Card>
            <CardHeader><CardTitle>Dữ liệu Tài chính tĩnh</CardTitle></CardHeader>
            <CardContent>Phần mô phỏng dữ liệu tài chính NĐ 132 được giữ nguyên hoặc chuyển sang backend. (Demo)</CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
