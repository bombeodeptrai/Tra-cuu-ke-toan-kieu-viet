// src/data/mock-medical.ts
// Dữ liệu thực chiến: Danh mục TBYT Kiểu Việt, Gói thầu bệnh viện miền Trung - Tây Nguyên & Tài chính Phòng khám Đa khoa Hòa Đức

import { MedicalDevice, TenderPackage, HoaDucClinicFinance } from '@/types/medical';

export const MOCK_MEDICAL_DEVICES: MedicalDevice[] = [
  {
    id: 'med-01',
    code: 'KV-BIO-01',
    name: 'Hệ thống máy xét nghiệm sinh hóa tự động Cobas c502',
    manufacturer: 'Roche Diagnostics GmbH',
    countryOrigin: 'Đức (G7)',
    riskClass: 'C',
    technicalGroup: 1, // Nhóm 1 theo TT 57/2025/TT-BYT (xuất xứ G7/EU, có CFS uy tín)
    hsCode: '9027.80.30',
    registrationNumber: '2200145/ĐKLH/BYT-TB-CT',
    registrationExpiry: '2028-12-31',
    declaredPriceVnd: 2850000000n,
    isPriceDeclared: true,
    declaredDate: '2026-01-15',
    hasAuthorizationLetter: true,
    hasIso13485: true,
    notes: 'Thiết bị chủ lực cung cấp cho Bệnh viện Đa khoa Tỉnh và đặt tại Phòng khám Hòa Đức'
  },
  {
    id: 'med-02',
    code: 'KV-HEM-02',
    name: 'Máy xét nghiệm huyết học tự động 26 thông số Sysmex XN-550',
    manufacturer: 'Sysmex Corporation',
    countryOrigin: 'Nhật Bản (G7)',
    riskClass: 'B',
    technicalGroup: 1,
    hsCode: '9027.80.30',
    registrationNumber: '2100892/ĐKLH/BYT-TB-CT',
    registrationExpiry: '2027-11-20',
    declaredPriceVnd: 1250000000n,
    isPriceDeclared: true,
    declaredDate: '2026-02-10',
    hasAuthorizationLetter: true,
    hasIso13485: true,
    notes: 'Kèm bộ thuốc thử và hóa chất tiêu chuẩn đóng'
  },
  {
    id: 'med-03',
    code: 'KV-US-03',
    name: 'Hệ thống máy siêu âm Doppler màu chuyên tim mạch và sản 4D Voluson S8 Touch',
    manufacturer: 'GE Healthcare Austria GmbH & Co OG',
    countryOrigin: 'Áo (EU)',
    riskClass: 'B',
    technicalGroup: 1,
    hsCode: '9018.12.00',
    registrationNumber: '2300054/ĐKLH/BYT-TB-CT',
    registrationExpiry: '2029-06-30',
    declaredPriceVnd: 1950000000n,
    isPriceDeclared: true,
    declaredDate: '2026-01-20',
    hasAuthorizationLetter: true,
    hasIso13485: true,
    notes: 'Trang bị 04 đầu dò: Convex đa tần, Tim chuyên sâu, Linear mạch máu và Khối 4D'
  },
  {
    id: 'med-04',
    code: 'KV-XR-04',
    name: 'Máy X-quang kỹ thuật số cao tần treo trần Carestream DRX-Evolution Plus',
    manufacturer: 'Carestream Health Inc.',
    countryOrigin: 'Hoa Kỳ (G7)',
    riskClass: 'C',
    technicalGroup: 1,
    hsCode: '9022.14.00',
    registrationNumber: '2000312/ĐKLH/BYT-TB-CT',
    registrationExpiry: '2027-09-15',
    declaredPriceVnd: 4200000000n,
    isPriceDeclared: true,
    declaredDate: '2025-12-05',
    hasAuthorizationLetter: true,
    hasIso13485: true,
    notes: 'Yêu cầu kiểm định an toàn bức xạ theo Thông tư liên tịch 13/2014 và TT 24/2026'
  },
  {
    id: 'med-05',
    code: 'KV-IMM-05',
    name: 'Máy xét nghiệm miễn dịch hóa phát quang tự động Architect i1000SR',
    manufacturer: 'Abbott Laboratories',
    countryOrigin: 'Hoa Kỳ (G7)',
    riskClass: 'C',
    technicalGroup: 1,
    hsCode: '9027.80.30',
    registrationNumber: '2200678/ĐKLH/BYT-TB-CT',
    registrationExpiry: '2028-05-18',
    declaredPriceVnd: 2100000000n,
    isPriceDeclared: true,
    declaredDate: '2026-03-01',
    hasAuthorizationLetter: true,
    hasIso13485: true,
    notes: 'Sử dụng công nghệ CMIA, công suất 100 xét nghiệm/giờ'
  },
  {
    id: 'med-06',
    code: 'KV-ENT-06',
    name: 'Hệ thống nội soi tai mũi họng vi phẫu Full HD Medtrix HD-800',
    manufacturer: 'Medtrix Medical Systems',
    countryOrigin: 'Hàn Quốc',
    riskClass: 'B',
    technicalGroup: 2, // Nhóm 2 theo TT 57/2025
    hsCode: '9018.90.90',
    registrationNumber: '2400115/ĐKLH/BYT-TB-CT',
    registrationExpiry: '2029-10-12',
    declaredPriceVnd: 680000000n,
    isPriceDeclared: true,
    declaredDate: '2026-02-18',
    hasAuthorizationLetter: true,
    hasIso13485: true,
    notes: 'Nguồn sáng LED 100W, Camera cảm biến Sony CMOS 1/2.8 inch'
  },
  {
    id: 'med-07',
    code: 'KV-AUT-07',
    name: 'Nồi hấp tiệt trùng hơi nước áp suất cao buồng đôi 250 lít Autoclave SA-300VF',
    manufacturer: 'Sturdy Industrial Co., Ltd.',
    countryOrigin: 'Đài Loan',
    riskClass: 'B',
    technicalGroup: 3, // Nhóm 3
    hsCode: '8419.20.00',
    registrationNumber: '2100412/ĐKLH/BYT-TB-CT',
    registrationExpiry: '2026-11-30',
    declaredPriceVnd: 450000000n,
    isPriceDeclared: true,
    declaredDate: '2025-11-10',
    hasAuthorizationLetter: true,
    hasIso13485: true,
    notes: 'Kiểm định an toàn thiết bị áp lực hàng năm trước khi đưa vào vận hành'
  },
  {
    id: 'med-08',
    code: 'KV-ECG-08',
    name: 'Máy điện tim 12 cần kỹ thuật số màn hình cảm ứng ECG-2350',
    manufacturer: 'Nihon Kohden Corporation',
    countryOrigin: 'Nhật Bản (G7)',
    riskClass: 'A',
    technicalGroup: 1,
    hsCode: '9018.11.00',
    registrationNumber: '2300019/CB-A/BYT-TB-CT',
    registrationExpiry: '2030-12-31',
    declaredPriceVnd: 185000000n,
    isPriceDeclared: true,
    declaredDate: '2026-01-05',
    hasAuthorizationLetter: true,
    hasIso13485: true,
    notes: 'Công bố loại A trên cổng Dịch vụ công Bộ Y tế'
  }
];

export const MOCK_TENDER_PACKAGES: TenderPackage[] = [
  {
    id: 'tender-01',
    tenderCode: 'IB2600041289-00',
    title: 'Gói thầu số 01: Mua sắm trang thiết bị xét nghiệm chuyên sâu và chẩn đoán hình ảnh năm 2026',
    procuringEntity: 'Bệnh viện Đa khoa Tỉnh Bình Định',
    location: 'TP. Quy Nhơn, Tỉnh Bình Định',
    fundingSource: 'Nguồn thu dịch vụ KCB và Quỹ phát triển hoạt động sự nghiệp',
    closingTime: '2026-09-25 09:00:00',
    estimatedBudgetVnd: 8500000000n,
    bidBondAmountVnd: 127500000n, // 1.5% giá gói thầu
    bidPriceVnd: 8150000000n, // Tiết kiệm 4.1%
    status: 'preparing',
    technicalScore: 96.5,
    specs: [
      {
        id: 'spec-01',
        criteriaCode: 'TCKT-01',
        title: 'Công suất phân tích sinh hóa',
        requirement: '≥ 800 test quang học/giờ; điện giải ISE ≥ 600 test/giờ',
        offeredSpec: 'Cobas c502: 1000 test quang/giờ; ISE 800 test/giờ (Vượt chuẩn)',
        offeredModel: 'Cobas c502 (Roche - Đức)',
        unit: 'Hệ thống',
        isMandatory: true,
        verdict: 'pass'
      },
      {
        id: 'spec-02',
        criteriaCode: 'TCKT-02',
        title: 'Phần mềm quản lý kết nối LIS/HIS hai chiều',
        requirement: 'Chuẩn giao thức ASTM/HL7, tích hợp mã vạch barcode 2D tự động',
        offeredSpec: 'Tích hợp phần mềm Roche Data Manager (RDM) chuẩn HL7 quốc tế',
        offeredModel: 'RDM Software v4.2',
        unit: 'Bản quyền',
        isMandatory: true,
        verdict: 'pass'
      },
      {
        id: 'spec-03',
        criteriaCode: 'TCKT-03',
        title: 'Đầu dò siêu âm tim Matrix & 4D sản khoa',
        requirement: '04 đầu dò công nghệ đơn tinh thể Single Crystal, dải tần 1.5 - 12 MHz',
        offeredSpec: 'Voluson S8 Touch: 04 đầu dò Active Matrix chuẩn G7',
        offeredModel: 'Voluson S8 (GE Healthcare - Áo)',
        unit: 'Hệ thống',
        isMandatory: true,
        verdict: 'pass'
      },
      {
        id: 'spec-04',
        criteriaCode: 'TCKT-04',
        title: 'Thời gian bảo hành và cam kết kỹ sư thường trú',
        requirement: 'Bảo hành ≥ 24 tháng; kỹ sư hỗ trợ tại chỗ trong vòng tối đa 04 giờ',
        offeredSpec: 'Bảo hành 36 tháng; Kiểu Việt có trạm kỹ thuật tại 04 Đinh Công Tráng, Quy Nhơn (cam kết có mặt ≤ 2h)',
        offeredModel: 'SLA-KV-2H',
        unit: 'Gói cam kết',
        isMandatory: true,
        verdict: 'pass'
      }
    ]
  },
  {
    id: 'tender-02',
    tenderCode: 'IB2600038914-00',
    title: 'Gói thầu thiết bị y tế nâng cao năng lực khám chữa bệnh Trung tâm Y tế An Nhơn',
    procuringEntity: 'Trung tâm Y tế Thị xã An Nhơn',
    location: 'TX. An Nhơn, Tỉnh Bình Định',
    fundingSource: 'Nguồn vốn Ngân sách Nhà nước tỉnh Bình Định',
    closingTime: '2026-09-18 14:30:00',
    estimatedBudgetVnd: 3200000000n,
    bidBondAmountVnd: 48000000n,
    bidPriceVnd: 3040000000n,
    status: 'submitted',
    technicalScore: 94.0,
    specs: [
      {
        id: 'spec-05',
        criteriaCode: 'TCKT-AN-01',
        title: 'Máy xét nghiệm huyết học laser bán dẫn',
        requirement: '26 thông số, phân tích 5 thành phần bạch cầu, công suất ≥ 60 mẫu/giờ',
        offeredSpec: 'Sysmex XN-550: 26 thông số + IG, công suất 60 mẫu/giờ, có nắp mở khay tự động',
        offeredModel: 'Sysmex XN-550 (Nhật Bản)',
        unit: 'Hệ thống',
        isMandatory: true,
        verdict: 'pass'
      },
      {
        id: 'spec-06',
        criteriaCode: 'TCKT-AN-02',
        title: 'Nồi hấp tiệt trùng dung tích ≥ 200 lít',
        requirement: 'Nồi hấp tiệt trùng hơi nước bão hòa, cảm biến áp suất số, buồng tiệt trùng Inox 316L',
        offeredSpec: 'Sturdy SA-300VF: Dung tích 250 lít, chất liệu Inox 316L chịu lực chuẩn ASME',
        offeredModel: 'SA-300VF (Sturdy - Đài Loan)',
        unit: 'Máy',
        isMandatory: true,
        verdict: 'pass'
      }
    ]
  },
  {
    id: 'tender-03',
    tenderCode: 'IB2600029980-00',
    title: 'Gói thầu trang bị hệ thống xét nghiệm miễn dịch Bệnh viện Đa khoa Khu vực Bồng Sơn',
    procuringEntity: 'Bệnh viện Đa khoa Khu vực Bồng Sơn',
    location: 'TX. Hoài Nhơn, Tỉnh Bình Định',
    fundingSource: 'Quỹ phát triển sự nghiệp bệnh viện',
    closingTime: '2026-08-30 09:30:00',
    estimatedBudgetVnd: 2500000000n,
    bidBondAmountVnd: 37500000n,
    bidPriceVnd: 2380000000n,
    status: 'won',
    technicalScore: 98.0,
    specs: [
      {
        id: 'spec-07',
        criteriaCode: 'TCKT-BS-01',
        title: 'Hệ thống miễn dịch tự động công nghệ CMIA',
        requirement: 'Đo dấu ấn khối u, tuyến giáp, tim mạch, viêm gan; độ nhạy quang học cao',
        offeredSpec: 'Architect i1000SR (Abbott - Mỹ): Đầy đủ panel dấu ấn khối u, độ nhạy cao',
        offeredModel: 'Architect i1000SR',
        unit: 'Hệ thống',
        isMandatory: true,
        verdict: 'pass'
      }
    ]
  }
];

export const MOCK_HOA_DUC_FINANCE: HoaDucClinicFinance[] = [
  {
    period: 'Quý 3/2026 (Ước tính)',
    revenueKcbNonTaxable: 4200000000n,
    revenueMedicine5Percent: 850000000n,
    revenueSupplements10Percent: 250000000n,
    totalInputVat: 480000000n,
    allocatedInputVatDeductible: 99622641n, // (1.1B / 5.3B) * 480M
    depreciationMedicalEquipment: 245000000n,
    equipmentLoanInterest: 65000000n
  },
  {
    period: 'Quý 2/2026',
    revenueKcbNonTaxable: 3850000000n,
    revenueMedicine5Percent: 780000000n,
    revenueSupplements10Percent: 220000000n,
    totalInputVat: 430000000n,
    allocatedInputVatDeductible: 88762886n,
    depreciationMedicalEquipment: 245000000n,
    equipmentLoanInterest: 68000000n
  },
  {
    period: 'Quý 1/2026',
    revenueKcbNonTaxable: 3500000000n,
    revenueMedicine5Percent: 720000000n,
    revenueSupplements10Percent: 180000000n,
    totalInputVat: 390000000n,
    allocatedInputVatDeductible: 79545454n,
    depreciationMedicalEquipment: 245000000n,
    equipmentLoanInterest: 72000000n
  }
];

export const HOA_DUC_RELATED_TRANSACTIONS = [
  {
    id: 'rel-01',
    contractNumber: 'HD-01/2026/KV-HD',
    title: 'Hợp đồng mượn và cung ứng thiết bị xét nghiệm tự động Cobas c502',
    counterparty: 'Phòng khám Đa khoa Hòa Đức (Bên liên kết theo NĐ 132/2020)',
    relationship: 'Chung cổ đông sáng lập & người điều hành chủ chốt',
    effectiveDate: '2026-01-01',
    nature: 'Mượn thiết bị kèm cam kết sản lượng tiêu thụ hóa chất, vật tư xét nghiệm',
    annualValueVnd: 1850000000n,
    armsLengthMethod: 'Phương pháp so sánh giá giao dịch độc lập (CUP)',
    complianceStatus: 'Đã lập Hồ sơ thông tin tập đoàn & Báo cáo giao dịch liên kết Mẫu 01/NĐ 132'
  },
  {
    id: 'rel-02',
    contractNumber: 'HD-02/2026/KV-HD',
    title: 'Hợp đồng dịch vụ bảo trì định kỳ, kiểm chuẩn và hiệu chuẩn thiết bị chẩn đoán hình ảnh',
    counterparty: 'Phòng khám Đa khoa Hòa Đức',
    relationship: 'Bên liên kết',
    effectiveDate: '2026-01-15',
    nature: 'Bảo dưỡng định kỳ 3 tháng/lần máy X-quang, máy siêu âm Voluson S8',
    annualValueVnd: 240000000n,
    armsLengthMethod: 'Phương pháp tỷ suất lợi nhuận gộp (Resale Price Method)',
    complianceStatus: 'Đảm bảo tỷ suất lợi nhuận phù hợp với dải giao dịch độc lập (15% - 22%)'
  },
  {
    id: 'rel-03',
    contractNumber: 'HD-03/2026/KV-HD',
    title: 'Hợp đồng cho vay hỗ trợ vốn lưu động mua sắm hóa chất vật tư y tế',
    counterparty: 'Phòng khám Đa khoa Hòa Đức',
    relationship: 'Bên liên kết theo Khoản 2 Điều 5 NĐ 132',
    effectiveDate: '2026-02-01',
    nature: 'Dư nợ vay liên kết 2.5 tỷ VND, lãi suất 7.5%/năm',
    annualValueVnd: 187500000n,
    armsLengthMethod: 'So sánh lãi suất huy động và cho vay bình quân các NHTM tại Bình Định',
    complianceStatus: 'Tổng chi phí lãi vay kiểm soát dưới trần 30% EBITDA theo Khoản 3 Điều 16 NĐ 132'
  }
];
