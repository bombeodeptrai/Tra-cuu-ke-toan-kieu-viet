export interface FormItem {
  id: string;
  code: string;
  name: string;
  type: string;
  format: 'Excel' | 'Word' | 'PDF';
  fileName: string;
  fileUrl: string;
  description: string;
}

export const FORMS_DATA: FormItem[] = [
  {
    "id": "f1",
    "code": "01-TT",
    "name": "Phiếu thu (Mẫu số 01-TT)",
    "type": "Tiền tệ",
    "format": "Excel",
    "fileName": "Phieu_thu_Mau_01_TT.xls",
    "fileUrl": "/data/forms/Phieu_thu_Mau_01_TT.xls",
    "description": "Xác định số tiền mặt thực tế nhập quỹ Kiểu Việt và làm căn cứ để thủ quỹ thu tiền, ghi sổ quỹ."
  },
  {
    "id": "f2",
    "code": "02-TT",
    "name": "Phiếu chi (Mẫu số 02-TT)",
    "type": "Tiền tệ",
    "format": "Excel",
    "fileName": "Phieu_chi_Mau_02_TT.xls",
    "fileUrl": "/data/forms/Phieu_chi_Mau_02_TT.xls",
    "description": "Xác định các khoản tiền mặt thực tế xuất quỹ thi công/văn phòng và làm căn cứ ghi sổ quỹ."
  },
  {
    "id": "f3",
    "code": "03-TT",
    "name": "Giấy đề nghị tạm ứng (Mẫu số 03-TT)",
    "type": "Tiền tệ",
    "format": "Word",
    "fileName": "Giay_de_nghi_tam_ung_Mau_03_TT.doc",
    "fileUrl": "/data/forms/Giay_de_nghi_tam_ung_Mau_03_TT.doc",
    "description": "Cơ sở để Ban Giám đốc Kiểu Việt xét duyệt tạm ứng tiền mặt thực hiện công việc hoặc mua sắm vật tư."
  },
  {
    "id": "f4",
    "code": "04-TT",
    "name": "Giấy thanh toán tiền tạm ứng (Mẫu số 04-TT)",
    "type": "Tiền tệ",
    "format": "Excel",
    "fileName": "Giay_thanh_toan_tam_ung_Mau_04_TT.xls",
    "fileUrl": "/data/forms/Giay_thanh_toan_tam_ung_Mau_04_TT.xls",
    "description": "Bảng đối chiếu tổng số tiền đã tạm ứng và chi phí thực tế phát sinh tại Công ty Kiểu Việt."
  },
  {
    "id": "f5",
    "code": "05-TT",
    "name": "Giấy đề nghị thanh toán (Mẫu số 05-TT)",
    "type": "Tiền tệ",
    "format": "Word",
    "fileName": "Giay_de_nghi_thanh_toan_Mau_05_TT.doc",
    "fileUrl": "/data/forms/Giay_de_nghi_thanh_toan_Mau_05_TT.doc",
    "description": "Văn bản đề xuất thanh toán các chi phí mua ngoài, tiếp khách, sửa chữa máy móc thiết bị."
  },
  {
    "id": "f6",
    "code": "01a-LĐTL",
    "name": "Bảng chấm công (Mẫu 01a-LĐTL)",
    "type": "Lao động",
    "format": "Excel",
    "fileName": "Bang_cham_cong_Mau_01a_LDTL.xls",
    "fileUrl": "/data/forms/Bang_cham_cong_Mau_01a_LDTL.xls",
    "description": "Theo dõi ngày công thực tế làm việc, tăng ca, nghỉ lễ của cán bộ nhân viên Công ty Kiểu Việt."
  },
  {
    "id": "f7",
    "code": "02-LĐTL",
    "name": "Bảng thanh toán tiền lương & phụ cấp (Mẫu 02-LĐTL)",
    "type": "Lao động",
    "format": "Excel",
    "fileName": "Bang_thanh_toan_luong_Mau_02_LDTL.xls",
    "fileUrl": "/data/forms/Bang_thanh_toan_luong_Mau_02_LDTL.xls",
    "description": "Bảng tính lương chi tiết: lương cơ bản, phụ cấp, trích trừ BHXH/BHYT (10.5%), thuế TNCN và thực lĩnh."
  },
  {
    "id": "f8",
    "code": "01-TSCĐ",
    "name": "Biên bản giao nhận TSCĐ (Mẫu 01-TSCĐ)",
    "type": "TSCĐ",
    "format": "Word",
    "fileName": "Bien_ban_giao_nhan_TSCD_Mau_01_TSCD.doc",
    "fileUrl": "/data/forms/Bien_ban_giao_nhan_TSCD_Mau_01_TSCD.doc",
    "description": "Xác nhận nghiệm thu đưa máy móc thiết bị vào quản lý và sử dụng tại Công ty Kiểu Việt."
  },
  {
    "id": "f9",
    "code": "01/GTGT",
    "name": "Tờ khai thuế GTGT (Mẫu số 01/GTGT - TT 80)",
    "type": "Thuế",
    "format": "Excel",
    "fileName": "To_khai_thue_GTGT_Mau_01_GTGT_TT80.xls",
    "fileUrl": "/data/forms/To_khai_thue_GTGT_Mau_01_GTGT_TT80.xls",
    "description": "Tờ khai thuế Giá trị gia tăng khấu trừ chính thức theo Thông tư 80/2021/TT-BTC, chuẩn chỉ tiêu [21] đến [43]."
  },
  {
    "id": "f10",
    "code": "03/TNDN",
    "name": "Tờ khai quyết toán thuế TNDN (Mẫu 03/TNDN)",
    "type": "Thuế",
    "format": "Excel",
    "fileName": "To_khai_quyet_toan_TNDN_Mau_03_TNDN.xls",
    "fileUrl": "/data/forms/To_khai_quyet_toan_TNDN_Mau_03_TNDN.xls",
    "description": "Tờ khai quyết toán thuế TNDN năm cho Công ty Kiểu Việt theo quy định TT 80."
  },
  {
    "id": "f11",
    "code": "05/KK-TNCN",
    "name": "Tờ khai khấu trừ thuế TNCN (Mẫu 05/KK-TNCN)",
    "type": "Thuế",
    "format": "Excel",
    "fileName": "To_khai_khau_tru_TNCN_Mau_05_KK_TNCN.xls",
    "fileUrl": "/data/forms/To_khai_khau_tru_TNCN_Mau_05_KK_TNCN.xls",
    "description": "Tờ khai khấu trừ thuế Thu nhập cá nhân kỳ quý/tháng cho toàn thể lao động Công ty Kiểu Việt."
  },
  {
    "id": "f12",
    "code": "BC26/AC",
    "name": "Báo cáo tình hình sử dụng hóa đơn (BC26/AC)",
    "type": "Hóa đơn",
    "format": "Excel",
    "fileName": "Bao_cao_su_dung_hoa_don_BC26_AC.xls",
    "fileUrl": "/data/forms/Bao_cao_su_dung_hoa_don_BC26_AC.xls",
    "description": "Báo cáo tình hình sử dụng hóa đơn điện tử trong kỳ theo Nghị định 123/2020 và Thông tư 78/2021."
  },
  {
    "id": "f13",
    "code": "01/VT",
    "name": "Phiếu nhập kho vật tư (Mẫu 01-VT)",
    "type": "Vật tư",
    "format": "Excel",
    "fileName": "Phieu_nhap_kho_Mau_01_VT.xls",
    "fileUrl": "/data/forms/Phieu_nhap_kho_Mau_01_VT.xls",
    "description": "Ghi nhận nhập kho vật tư, nguyên vật liệu, thiết bị của Công ty Kiểu Việt."
  },
  {
    "id": "f14",
    "code": "02/VT",
    "name": "Phiếu xuất kho vật tư (Mẫu 02-VT)",
    "type": "Vật tư",
    "format": "Excel",
    "fileName": "Phieu_xuat_kho_Mau_02_VT.xls",
    "fileUrl": "/data/forms/Phieu_xuat_kho_Mau_02_VT.xls",
    "description": "Xuất kho vật tư phục vụ sản xuất kinh doanh, căn cứ hạch toán TK 154 theo TT 99/2025."
  },
  {
    "id": "f15",
    "code": "03a-KL",
    "name": "Bảng xác định giá trị KL công việc hoàn thành (Mẫu 03a)",
    "type": "Hợp đồng",
    "format": "Excel",
    "fileName": "Bang_xac_dinh_KL_hoan_thanh_Mau_03a.xls",
    "fileUrl": "/data/forms/Bang_xac_dinh_KL_hoan_thanh_Mau_03a.xls",
    "description": "Bảng thanh toán khối lượng hoàn thành giai đoạn theo hợp đồng kinh tế của Công ty Kiểu Việt."
  },
  {
    "id": "f16",
    "code": "BBNT-XD",
    "name": "Biên bản nghiệm thu hoàn thành công việc / dịch vụ",
    "type": "Hợp đồng",
    "format": "Word",
    "fileName": "Bien_ban_nghiem_thu_xay_dung_BBNT.doc",
    "fileUrl": "/data/forms/Bien_ban_nghiem_thu_xay_dung_BBNT.doc",
    "description": "Biên bản nghiệm thu kỹ thuật đưa hạng mục công việc vào thanh quyết toán theo hợp đồng Kiểu Việt."
  }
];
