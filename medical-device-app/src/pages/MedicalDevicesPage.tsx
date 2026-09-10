// src/pages/MedicalDevicesPage.tsx
import React, { useState } from 'react';
import {
  Stethoscope,
  Search,
  Filter,
  CheckCircle2,
  AlertCircle,
  FileCheck,
  ShieldCheck,
  Building,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { MOCK_MEDICAL_DEVICES } from '@/data/mock-medical';
import { MedicalDevice, RiskClass } from '@/types/medical';
import { formatVnd, formatDate } from '@/lib/utils';

export const MedicalDevicesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRisk, setSelectedRisk] = useState<string>('ALL');
  const [selectedGroup, setSelectedGroup] = useState<string>('ALL');
  const [selectedDevice, setSelectedDevice] = useState<MedicalDevice | null>(MOCK_MEDICAL_DEVICES[0]);

  const filteredDevices = MOCK_MEDICAL_DEVICES.filter((d) => {
    const matchSearch =
      d.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      d.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      d.manufacturer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      d.registrationNumber.toLowerCase().includes(searchTerm.toLowerCase());

    const matchRisk = selectedRisk === 'ALL' || d.riskClass === selectedRisk;
    const matchGroup = selectedGroup === 'ALL' || d.technicalGroup.toString() === selectedGroup;

    return matchSearch && matchRisk && matchGroup;
  });

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900 flex items-center gap-2">
            <Stethoscope className="w-6 h-6 text-teal-600" />
            Danh Mục Trang Thiết Bị Y Tế Chủ Lực
          </h1>
          <p className="text-xs sm:text-sm text-slate-500">
            Quản trị phân loại rủi ro A/B/C/D theo Nghị định 98/2021 & VBHN 08, phân 6 nhóm kỹ thuật theo{' '}
            <span className="text-teal-700 font-semibold">Thông tư 57/2025/TT-BYT</span> và số lưu hành cổng BYT.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="border-cyan-300 text-cyan-700 bg-cyan-50 px-3 py-1 font-semibold text-xs">
            <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
            100% Đã Kê Khai Giá BYT
          </Badge>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-3">
        <div className="flex flex-col md:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
            <Input
              placeholder="Tìm theo tên máy, model, hãng sản xuất, số lưu hành..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9 bg-slate-50 border-slate-200 text-xs text-slate-900 focus:bg-white"
            />
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {/* Risk filter */}
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl border border-slate-200 text-xs">
              <span className="text-slate-500 px-2 text-[11px] font-semibold">Rủi ro:</span>
              {(['ALL', 'A', 'B', 'C', 'D'] as const).map((r) => (
                <button
                  key={r}
                  onClick={() => setSelectedRisk(r)}
                  className={`px-2.5 py-1 rounded-lg font-bold text-xs transition-colors ${
                    selectedRisk === r
                      ? 'bg-teal-700 text-white shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {r === 'ALL' ? 'Tất cả' : `Loại ${r}`}
                </button>
              ))}
            </div>

            {/* TT 57 Group filter */}
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl border border-slate-200 text-xs">
              <span className="text-slate-500 px-2 text-[11px] font-semibold">Nhóm TT 57:</span>
              {['ALL', '1', '2', '3'].map((g) => (
                <button
                  key={g}
                  onClick={() => setSelectedGroup(g)}
                  className={`px-2.5 py-1 rounded-lg font-bold text-xs transition-colors ${
                    selectedGroup === g
                      ? 'bg-cyan-700 text-white shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {g === 'ALL' ? 'Tất cả' : `Nhóm ${g}`}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid: Device List & Detail Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Device List (2 Cols) */}
        <div className="lg:col-span-2 space-y-3">
          <div className="text-xs text-slate-500 flex items-center justify-between font-medium px-1">
            <span>Hiển thị <strong className="text-slate-900">{filteredDevices.length}</strong> / {MOCK_MEDICAL_DEVICES.length} thiết bị</span>
            <span className="text-teal-700">Tiêu chuẩn: ISO 13485 & Đủ LOA</span>
          </div>

          <div className="space-y-3">
            {filteredDevices.map((device) => {
              const isSelected = selectedDevice?.id === device.id;
              return (
                <div
                  key={device.id}
                  onClick={() => setSelectedDevice(device)}
                  className={`p-4 rounded-2xl cursor-pointer border transition-all text-left ${
                    isSelected
                      ? 'bg-teal-50/80 border-teal-500 shadow-xs'
                      : 'bg-white border-slate-200/90 hover:border-slate-300 hover:bg-slate-50/50'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-slate-100 text-teal-800 border border-slate-200">
                        {device.code}
                      </span>
                      <Badge
                        variant="outline"
                        className={`text-[10px] font-bold ${
                          device.riskClass === 'C' || device.riskClass === 'D'
                            ? 'border-amber-300 text-amber-700 bg-amber-50'
                            : 'border-emerald-300 text-emerald-700 bg-emerald-50'
                        }`}
                      >
                        Loại {device.riskClass} ({device.riskClass === 'A' ? 'Rủi ro Thấp' : device.riskClass === 'B' ? 'Trung Bình Thấp' : device.riskClass === 'C' ? 'Trung Bình Cao' : 'Cao'})
                      </Badge>
                      <Badge
                        variant="outline"
                        className="text-[10px] font-bold border-cyan-300 text-cyan-700 bg-cyan-50"
                      >
                        TT 57: Nhóm {device.technicalGroup}
                      </Badge>
                    </div>
                    <div className="text-sm font-black text-teal-700 font-mono">
                      {formatVnd(device.declaredPriceVnd)}
                    </div>
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 mb-1">
                    {device.name}
                  </h3>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-slate-500 mt-2 pt-2 border-t border-slate-100">
                    <div>
                      Hãng SX: <span className="text-slate-800 font-medium">{device.manufacturer}</span>
                    </div>
                    <div>
                      Xuất xứ: <span className="text-teal-700 font-bold">{device.countryOrigin}</span>
                    </div>
                    <div>
                      Số lưu hành: <span className="text-slate-700 font-mono text-[11px] font-semibold">{device.registrationNumber}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Device Deep Profile (1 Col) */}
        {selectedDevice && (
          <div className="space-y-4">
            <Card className="bg-white border-slate-200/90 shadow-sm sticky top-20 rounded-2xl">
              <CardHeader className="pb-3 border-b border-slate-100">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-teal-800 font-bold px-2 py-0.5 rounded bg-teal-50 border border-teal-200">
                    {selectedDevice.code}
                  </span>
                  <Badge className="bg-teal-50 text-teal-700 border-teal-200 text-[10px] font-bold">
                    Sẵn Sàng Dự Thầu
                  </Badge>
                </div>
                <CardTitle className="text-base font-bold text-slate-900 mt-2">
                  {selectedDevice.name}
                </CardTitle>
                <CardDescription className="text-xs text-slate-500">
                  {selectedDevice.manufacturer} • {selectedDevice.countryOrigin}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-4 space-y-4 text-xs">
                {/* Specs list */}
                <div className="space-y-2.5">
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">Phân loại rủi ro:</span>
                    <span className="font-bold text-slate-900">Mức {selectedDevice.riskClass}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">Phân nhóm kỹ thuật (TT 57/2025):</span>
                    <span className="font-bold text-cyan-700">Nhóm {selectedDevice.technicalGroup} (Ưu tiên thầu)</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">Mã phân loại HS:</span>
                    <span className="font-mono text-slate-800 font-semibold">{selectedDevice.hsCode}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">Số tiếp nhận lưu hành:</span>
                    <span className="font-mono text-teal-700 font-bold">{selectedDevice.registrationNumber}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">Hạn hiệu lực số lưu hành:</span>
                    <span className="text-slate-800 font-medium">{formatDate(selectedDevice.registrationExpiry)}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">Giá kê khai Cổng Bộ Y tế:</span>
                    <span className="font-mono font-black text-emerald-700">{formatVnd(selectedDevice.declaredPriceVnd)}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">Ngày kê khai gần nhất:</span>
                    <span className="text-slate-800 font-medium">{formatDate(selectedDevice.declaredDate)}</span>
                  </div>
                </div>

                {/* Compliance Checklist */}
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="text-[11px] font-bold text-slate-600 uppercase tracking-wide">
                    Điều Kiện Tham Gia Dự Thầu
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Thư ủy quyền bán hàng (LOA) chính hãng</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Hệ thống quản lý ISO 13485:2016</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Cam kết kỹ thuật thường trú tại Bình Định/Gia Lai</span>
                    </div>
                  </div>
                </div>

                {/* Operational Notes */}
                {selectedDevice.notes && (
                  <div className="p-3.5 rounded-xl bg-teal-50 border border-teal-200 text-[11px] text-teal-900 leading-relaxed">
                    <strong>Ghi chú triển khai:</strong> {selectedDevice.notes}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};
