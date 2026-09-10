// src/types/medical.ts
// Các thực thể thiết bị y tế, gói thầu và vận hành phòng khám Hòa Đức

import { Verdict } from './compliance';

export type RiskClass = 'A' | 'B' | 'C' | 'D';

export interface MedicalDevice {
  id: string;
  code: string;
  name: string;
  manufacturer: string;
  countryOrigin: string;
  riskClass: RiskClass;
  technicalGroup: number; // 1 đến 6 theo Thông tư 57/2025/TT-BYT
  hsCode: string;
  registrationNumber: string; // Số công bố A/B hoặc Số lưu hành C/D
  registrationExpiry: string; // Ngày hết hạn lưu hành
  declaredPriceVnd: bigint; // Giá kê khai Cổng BYT (NĐ 98 & 07)
  isPriceDeclared: boolean;
  declaredDate?: string;
  hasAuthorizationLetter: boolean; // Giấy ủy quyền bán hàng LOA
  hasIso13485: boolean;
  notes?: string;
}

export interface SpecificationItem {
  id: string;
  criteriaCode: string; // Mã tiêu chí kỹ thuật
  title: string;
  requirement: string; // Yêu cầu của E-HSMT
  offeredSpec: string; // Thông số chào thầu của Kiểu Việt
  offeredModel: string;
  unit: string;
  isMandatory: boolean; // Tiêu chí bắt buộc (Điểm liệt)
  verdict: Verdict;
  deviationNote?: string;
}

export interface TenderPackage {
  id: string;
  tenderCode: string; // Số hiệu E-TBMT
  title: string;
  procuringEntity: string; // Bên mời thầu (Bệnh viện, TTYT)
  location: string; // Bình Định, Gia Lai, Kon Tum, Phú Yên...
  fundingSource: string; // Nguồn vốn (Ngân sách / Nguồn thu KCB BHYT)
  closingTime: string; // Thời điểm đóng thầu
  estimatedBudgetVnd: bigint; // Giá gói thầu dự toán
  bidBondAmountVnd: bigint; // Giá trị bảo lãnh dự thầu
  bidPriceVnd: bigint; // Giá dự thầu đề xuất của Kiểu Việt
  status: 'preparing' | 'submitted' | 'evaluating' | 'won' | 'lost';
  technicalScore?: number;
  specs: SpecificationItem[];
}

export interface HoaDucClinicFinance {
  period: string; // "Quý 3/2026"
  revenueKcbNonTaxable: bigint; // Doanh thu khám chữa bệnh (Không chịu thuế GTGT - Điều 5 TT 219)
  revenueMedicine5Percent: bigint; // Doanh thu bán thuốc (Thuế GTGT 5%)
  revenueSupplements10Percent: bigint; // Doanh thu TPCN / mỹ phẩm (Thuế GTGT 10%)
  totalInputVat: bigint; // Tổng thuế GTGT đầu vào phát sinh trong kỳ
  allocatedInputVatDeductible: bigint; // Thuế GTGT đầu vào được khấu trừ (theo tỷ lệ doanh thu)
  depreciationMedicalEquipment: bigint; // Khấu hao dàn máy xét nghiệm/siêu âm trong kỳ (TK 211/214)
  equipmentLoanInterest: bigint; // Lãi vay mua thiết bị y tế (kiểm soát trần 30% EBITDA - NĐ 132)
}

export interface CriteriaGroup {
  code: string; // MD01 - MD40
  title: string;
  category: 'legal' | 'technical' | 'bidding' | 'delivery' | 'operation';
  description: string;
  legalBasis: string;
  totalChecks: number;
  passedChecks: number;
  verdict: Verdict;
}