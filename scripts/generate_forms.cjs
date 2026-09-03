const fs = require('fs');
const path = require('path');

const FORMS_DIR = path.resolve(__dirname, '../public/data/forms');
if (!fs.existsSync(FORMS_DIR)) {
  fs.mkdirSync(FORMS_DIR, { recursive: true });
}

// Helper to generate XML Excel template
function createExcelXml(title, subTitle, columns, sampleRows = []) {
  let headerCols = columns.map(c => `<Cell ss:StyleID="Header"><Data ss:Type="String">${c}</Data></Cell>`).join('');
  let rowsXml = '';
  
  for (let i = 0; i < 10; i++) {
    const rowData = sampleRows[i] || [];
    let cells = columns.map((_, colIdx) => {
      const val = rowData[colIdx] || '';
      return `<Cell ss:StyleID="Data"><Data ss:Type="String">${val}</Data></Cell>`;
    }).join('');
    rowsXml += `<Row>${cells}</Row>\n`;
  }

  return `<?xml version="1.0" encoding="UTF-8"?>
<?mso-application progid="Excel.Sheet"?>
<Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet"
 xmlns:o="urn:schemas-microsoft-com:office:office"
 xmlns:x="urn:schemas-microsoft-com:office:excel"
 xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet">
 <Styles>
  <Style ss:ID="Default" ss:Name="Normal">
   <Alignment ss:Vertical="Center"/>
   <Font ss:FontName="Times New Roman" ss:Size="11"/>
  </Style>
  <Style ss:ID="Company">
   <Font ss:FontName="Times New Roman" ss:Size="11" ss:Bold="1"/>
  </Style>
  <Style ss:ID="Title">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Font ss:FontName="Times New Roman" ss:Size="16" ss:Bold="1" ss:Color="#006633"/>
  </Style>
  <Style ss:ID="SubTitle">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Font ss:FontName="Times New Roman" ss:Size="11" ss:Italic="1"/>
  </Style>
  <Style ss:ID="Header">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center" ss:WrapText="1"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
   </Borders>
   <Font ss:FontName="Times New Roman" ss:Size="11" ss:Bold="1" ss:Color="#FFFFFF"/>
   <Interior ss:Color="#006633" ss:Pattern="Solid"/>
  </Style>
  <Style ss:ID="Data">
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#CCCCCC"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#CCCCCC"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#CCCCCC"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#CCCCCC"/>
   </Borders>
   <Font ss:FontName="Times New Roman" ss:Size="11"/>
  </Style>
  <Style ss:ID="Sign">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
   <Font ss:FontName="Times New Roman" ss:Size="11" ss:Bold="1"/>
  </Style>
 </Styles>
 <Worksheet ss:Name="Bieu_Mau_Kieu_Viet">
  <Table>
   <Column ss:Width="40"/>
   <Column ss:Width="150"/>
   <Column ss:Width="100"/>
   <Column ss:Width="100"/>
   <Column ss:Width="120"/>
   <Column ss:Width="120"/>
   <Row>
    <Cell ss:StyleID="Company"><Data ss:Type="String">CÔNG TY CỔ PHẦN XÂY LẮP KIỂU VIỆT</Data></Cell>
   </Row>
   <Row>
    <Cell><Data ss:Type="String">Địa chỉ: Lô 01, KĐT An Phú Thịnh, P. Nhơn Bình, TP. Quy Nhơn, Bình Định</Data></Cell>
   </Row>
   <Row ss:Height="10"/>
   <Row ss:Height="25">
    <Cell ss:MergeAcross="${columns.length - 1}" ss:StyleID="Title"><Data ss:Type="String">${title.toUpperCase()}</Data></Cell>
   </Row>
   <Row>
    <Cell ss:MergeAcross="${columns.length - 1}" ss:StyleID="SubTitle"><Data ss:Type="String">${subTitle}</Data></Cell>
   </Row>
   <Row ss:Height="10"/>
   <Row ss:Height="28">
    ${headerCols}
   </Row>
   ${rowsXml}
   <Row ss:Height="20"/>
   <Row>
    <Cell ss:StyleID="Sign"><Data ss:Type="String">Người lập biểu</Data></Cell>
    <Cell ss:StyleID="Sign"><Data ss:Type="String">Kế toán trưởng</Data></Cell>
    <Cell><Data ss:Type="String"></Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="Sign"><Data ss:Type="String">Giám đốc duyệt</Data></Cell>
   </Row>
   <Row>
    <Cell ss:StyleID="SubTitle"><Data ss:Type="String">(Ký, họ tên)</Data></Cell>
    <Cell ss:StyleID="SubTitle"><Data ss:Type="String">(Ký, họ tên)</Data></Cell>
    <Cell><Data ss:Type="String"></Data></Cell>
    <Cell ss:MergeAcross="1" ss:StyleID="SubTitle"><Data ss:Type="String">(Ký, đóng dấu, họ tên)</Data></Cell>
   </Row>
  </Table>
 </Worksheet>
</Workbook>`;
}

// Helper to generate Word Doc HTML template
function createWordDoc(title, code, contentHtml) {
  return `<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
<head>
<meta charset="utf-8">
<title>${title}</title>
<style>
body { font-family: 'Times New Roman', serif; font-size: 13pt; line-height: 1.4; margin: 30px; }
.header { width: 100%; margin-bottom: 20px; }
.header td { vertical-align: top; }
.title { text-align: center; font-size: 16pt; font-weight: bold; color: #006633; margin: 20px 0 5px 0; }
.code { text-align: center; font-style: italic; font-size: 11pt; margin-bottom: 25px; }
table.data { width: 100%; border-collapse: collapse; margin: 15px 0; }
table.data th, table.data td { border: 1px solid #333; padding: 6px 8px; font-size: 11pt; }
table.data th { background-color: #006633; color: white; text-align: center; }
.signatures { width: 100%; margin-top: 40px; text-align: center; }
.signatures td { vertical-align: top; width: 33%; font-weight: bold; }
.italic { font-style: italic; font-weight: normal; font-size: 10pt; }
</style>
</head>
<body>
<table class="header">
  <tr>
    <td style="width: 50%;">
      <strong>CÔNG TY CỔ PHẦN XÂY LẮP KIỂU VIỆT</strong><br>
      <em>Mã số thuế: 4101487688</em><br>
      <em>Địa chỉ: TP. Quy Nhơn, Tỉnh Bình Định</em>
    </td>
    <td style="width: 50%; text-align: right;">
      <strong>Mẫu số: ${code}</strong><br>
      <em>(Ban hành theo chế độ kế toán hiện hành)</em>
    </td>
  </tr>
</table>

<div class="title">${title.toUpperCase()}</div>
<div class="code">Ngày ..... tháng ..... năm 202...</div>

${contentHtml}

<table class="signatures">
  <tr>
    <td>
      Người đề nghị / Người lập<br>
      <span class="italic">(Ký, ghi rõ họ tên)</span>
      <br><br><br><br>
    </td>
    <td>
      Kế toán trưởng<br>
      <span class="italic">(Ký, ghi rõ họ tên)</span>
      <br><br><br><br>
    </td>
    <td>
      Giám đốc phê duyệt<br>
      <span class="italic">(Ký, đóng dấu, ghi rõ họ tên)</span>
      <br><br><br><br>
    </td>
  </tr>
</table>
</body>
</html>`;
}

// Define the full list of forms
const forms = [
  {
    id: "f1",
    code: "01-TT",
    name: "Phiếu thu (Mẫu số 01-TT)",
    type: "Tiền tệ",
    format: "Excel",
    fileName: "Phieu_thu_Mau_01_TT.xls",
    description: "Xác định số tiền mặt thực tế nhập quỹ Kiểu Việt và làm căn cứ để thủ quỹ thu tiền, ghi sổ quỹ.",
    generate: () => createExcelXml(
      "PHIẾU THU (MẪU SỐ 01-TT)",
      "Quyển số: ....... - Số: PT....... - Nợ TK: 111 - Có TK: .......",
      ["STT", "Họ và tên người nộp tiền", "Địa chỉ / Bộ phận", "Lý do nộp tiền", "Số tiền (VNĐ)", "Ghi chú"]
    )
  },
  {
    id: "f2",
    code: "02-TT",
    name: "Phiếu chi (Mẫu số 02-TT)",
    type: "Tiền tệ",
    format: "Excel",
    fileName: "Phieu_chi_Mau_02_TT.xls",
    description: "Xác định các khoản tiền mặt thực tế xuất quỹ thi công/văn phòng và làm căn cứ ghi sổ quỹ.",
    generate: () => createExcelXml(
      "PHIẾU CHI (MẪU SỐ 02-TT)",
      "Quyển số: ....... - Số: PC....... - Nợ TK: ....... - Có TK: 111",
      ["STT", "Họ và tên người nhận tiền", "Địa chỉ / Bộ phận", "Lý do chi tiền", "Số tiền (VNĐ)", "Kèm theo chứng từ gốc"]
    )
  },
  {
    id: "f3",
    code: "03-TT",
    name: "Giấy đề nghị tạm ứng (Mẫu số 03-TT)",
    type: "Tiền tệ",
    format: "Word",
    fileName: "Giay_de_nghi_tam_ung_Mau_03_TT.doc",
    description: "Cơ sở để Ban Giám đốc Kiểu Việt xét duyệt tạm ứng tiền mặt thi công công trình hoặc mua sắm vật tư.",
    generate: () => createWordDoc(
      "GIẤY ĐỀ NGHỊ TẠM ỨNG",
      "03-TT",
      `<p>Kính gửi: <strong>Ban Giám đốc & Phòng Kế toán Công ty CP Xây Lắp Kiểu Việt</strong></p>
       <p>- Tên tôi là: ...................................................................................................................................</p>
       <p>- Bộ phận / Công trình: ...................................................................................................................</p>
       <p>- Đề nghị cho tạm ứng số tiền: .................................................... đồng.</p>
       <p><em>(Bằng chữ: ...................................................................................................................................)</em></p>
       <p>- Mục đích sử dụng tạm ứng: ........................................................................................................</p>
       <p>- Thời hạn thanh toán tạm ứng: Ngày ..... / ..... / 202...</p>`
    )
  },
  {
    id: "f4",
    code: "04-TT",
    name: "Giấy thanh toán tiền tạm ứng (Mẫu số 04-TT)",
    type: "Tiền tệ",
    format: "Excel",
    fileName: "Giay_thanh_toan_tam_ung_Mau_04_TT.xls",
    description: "Bảng đối chiếu tổng số tiền đã tạm ứng và chi phí thực tế phát sinh tại công trường Kiểu Việt.",
    generate: () => createExcelXml(
      "GIẤY THANH TOÁN TIỀN TẠM ỨNG (MẪU 04-TT)",
      "Người thanh toán: ................................. - Công trình: .................................",
      ["STT", "Số hiệu chứng từ", "Ngày chứng từ", "Nội dung diễn giải chi tiêu", "Số tiền đã tạm ứng", "Số tiền thực chi", "Chênh lệch thừa/thiếu"]
    )
  },
  {
    id: "f5",
    code: "05-TT",
    name: "Giấy đề nghị thanh toán (Mẫu số 05-TT)",
    type: "Tiền tệ",
    format: "Word",
    fileName: "Giay_de_nghi_thanh_toan_Mau_05_TT.doc",
    description: "Văn bản đề xuất thanh toán các chi phí mua ngoài, tiếp khách, sửa chữa máy móc thiết bị công trình.",
    generate: () => createWordDoc(
      "GIẤY ĐỀ NGHỊ THANH TOÁN",
      "05-TT",
      `<p>Kính gửi: <strong>Ban Giám đốc & Phòng Tài chính Kế toán Kiểu Việt</strong></p>
       <p>- Họ và tên người đề nghị thanh toán: .........................................................................................</p>
       <p>- Bộ phận / Đội thi công: ............................................................................................................</p>
       <p>- Nội dung thanh toán: ...............................................................................................................</p>
       <p>- Tổng số tiền đề nghị thanh toán: .................................................... đồng.</p>
       <p><em>(Viết bằng chữ: ..........................................................................................................................)</em></p>
       <p>- Kèm theo: .......... chứng từ gốc (hóa đơn GTGT, biên bản nghiệm thu, bảng kê...).</p>`
    )
  },
  {
    id: "f6",
    code: "01a-LĐTL",
    name: "Bảng chấm công công trình (Mẫu 01a-LĐTL)",
    type: "Lao động",
    format: "Excel",
    fileName: "Bang_cham_cong_Mau_01a_LDTL.xls",
    description: "Theo dõi ngày công thực tế làm việc, tăng ca, nghỉ lễ của cán bộ kỹ sư và công nhân công trường.",
    generate: () => createExcelXml(
      "BẢNG CHẤM CÔNG CÔNG TRÌNH (MẪU 01a-LĐTL)",
      "Tháng ...... Năm 202... - Đơn vị thi công: Công ty CP Xây Lắp Kiểu Việt",
      ["STT", "Mã NV", "Họ và tên", "Chức vụ / Tổ đội", "Công làm việc (ngày)", "Tăng ca (giờ)", "Nghỉ phép", "Tổng công quy đổi"]
    )
  },
  {
    id: "f7",
    code: "02-LĐTL",
    name: "Bảng thanh toán tiền lương & phụ cấp (Mẫu 02-LĐTL)",
    type: "Lao động",
    format: "Excel",
    fileName: "Bang_thanh_toan_luong_Mau_02_LDTL.xls",
    description: "Bảng tính lương chi tiết: lương cơ bản, phụ cấp công trình, trích trừ BHXH/BHYT (10.5%), thuế TNCN và thực lĩnh.",
    generate: () => createExcelXml(
      "BẢNG THANH TOÁN LƯƠNG & CÁC KHOẢN PHỤ CẤP",
      "Tháng ...... Năm 202... - Đơn vị: Công ty CP Xây Lắp Kiểu Việt",
      ["STT", "Họ tên", "Lương hợp đồng", "Phụ cấp công trình", "Tổng thu nhập", "Trừ BHXH (10.5%)", "Thuế TNCN", "Thực lĩnh", "Ký nhận"]
    )
  },
  {
    id: "f8",
    code: "01-TSCĐ",
    name: "Biên bản giao nhận TSCĐ (Mẫu 01-TSCĐ)",
    type: "TSCĐ",
    format: "Word",
    fileName: "Bien_ban_giao_nhan_TSCD_Mau_01_TSCD.doc",
    description: "Xác nhận nghiệm thu đưa máy móc thiết bị thi công xây lắp (xe xúc, cẩu tháp, xe ủi) vào sử dụng.",
    generate: () => createWordDoc(
      "BIÊN BẢN GIAO NHẬN TÀI SẢN CỐ ĐỊNH",
      "01-TSCĐ",
      `<p>Căn cứ Quyết định đầu tư số: ......../QĐ-KV của Giám đốc Công ty CP Xây Lắp Kiểu Việt</p>
       <p>Hôm nay, ngày ..... tháng ..... năm 202..., Ban giao nhận gồm có:</p>
       <p><strong>I. Bên giao:</strong> Ông/Bà: ....................................... Chức vụ: .................................................</p>
       <p><strong>II. Bên nhận:</strong> Ông/Bà: ..................................... Chức vụ: Chỉ huy trưởng công trình .........</p>
       <table class="data">
         <tr><th>STT</th><th>Tên TSCĐ</th><th>Số hiệu</th><th>Nước sản xuất</th><th>Năm SX</th><th>Nguyên giá (VNĐ)</th></tr>
         <tr><td>1</td><td>Máy xúc thủy lực bánh xích</td><td>MX-01</td><td>Nhật Bản</td><td>2024</td><td>1.850.000.000</td></tr>
         <tr><td>2</td><td>Xe lu rung thi công nền đường</td><td>LR-02</td><td>Hàn Quốc</td><td>2023</td><td>920.000.000</td></tr>
       </table>
       <p>Kết luận: Tài sản bàn giao đúng thông số kỹ thuật, chạy thử tốt, đủ điều kiện đưa vào thi công.</p>`
    )
  },
  {
    id: "f9",
    code: "01/GTGT",
    name: "Tờ khai thuế GTGT (Mẫu số 01/GTGT - TT 80)",
    type: "Thuế",
    format: "Excel",
    fileName: "To_khai_thue_GTGT_Mau_01_GTGT_TT80.xls",
    description: "Tờ khai thuế Giá trị gia tăng khấu trừ chính thức theo Thông tư 80/2021/TT-BTC, chuẩn chỉ tiêu [21] đến [43].",
    generate: () => createExcelXml(
      "TỜ KHAI THUẾ GIÁ TRỊ GIA TĂNG (MẪU 01/GTGT)",
      "(Ban hành kèm theo Thông tư số 80/2021/TT-BTC) - Kỳ tính thuế: Quý ..... Năm 202...",
      ["Chỉ tiêu", "Mã chỉ tiêu", "Nội dung chỉ tiêu", "Doanh thu chưa thuế", "Thuế GTGT (VNĐ)"]
    )
  },
  {
    id: "f10",
    code: "03/TNDN",
    name: "Tờ khai quyết toán thuế TNDN (Mẫu 03/TNDN)",
    type: "Thuế",
    format: "Excel",
    fileName: "To_khai_quyet_toan_TNDN_Mau_03_TNDN.xls",
    description: "Tờ khai quyết toán thuế TNDN năm cho doanh nghiệp xây lắp Kiểu Việt theo quy định TT 80.",
    generate: () => createExcelXml(
      "TỜ KHAI QUYẾT TOÁN THUẾ TNDN (MẪU 03/TNDN)",
      "(Áp dụng cho phương pháp doanh thu - chi phí) - Năm tính thuế 202...",
      ["Mã chỉ tiêu", "Chỉ tiêu", "Kê khai theo sổ sách kế toán", "Điều chỉnh tăng/giảm", "Thu nhập chịu thuế"]
    )
  },
  {
    id: "f11",
    code: "05/KK-TNCN",
    name: "Tờ khai khấu trừ thuế TNCN (Mẫu 05/KK-TNCN)",
    type: "Thuế",
    format: "Excel",
    fileName: "To_khai_khau_tru_TNCN_Mau_05_KK_TNCN.xls",
    description: "Tờ khai khấu trừ thuế Thu nhập cá nhân kỳ quý/tháng cho toàn thể lao động Công ty Kiểu Việt.",
    generate: () => createExcelXml(
      "TỜ KHAI KHẤU TRỪ THUẾ TNCN (MẪU 05/KK-TNCN)",
      "(Kèm theo TT 80/2021/TT-BTC) - Kỳ kê khai: Quý ..... Năm 202...",
      ["Mã chỉ tiêu", "Chỉ tiêu", "Số người lao động", "Tổng thu nhập trả cho NLĐ", "Tổng số thuế TNCN đã khấu trừ"]
    )
  },
  {
    id: "f12",
    code: "BC26/AC",
    name: "Báo cáo tình hình sử dụng hóa đơn (BC26/AC)",
    type: "Hóa đơn",
    format: "Excel",
    fileName: "Bao_cao_su_dung_hoa_don_BC26_AC.xls",
    description: "Báo cáo tình hình sử dụng hóa đơn điện tử trong kỳ theo Nghị định 123/2020 và Thông tư 78/2021.",
    generate: () => createExcelXml(
      "BÁO CÁO TÌNH HÌNH SỬ DỤNG HÓA ĐƠN (BC26/AC)",
      "Đơn vị: CÔNG TY CỔ PHẦN XÂY LẮP KIỂU VIỆT - MST: 4101487688",
      ["STT", "Ký hiệu mẫu hóa đơn", "Ký hiệu hóa đơn", "Tổng số sử dụng", "Số lượng đã lập", "Số lượng xóa bỏ/hủy"]
    )
  },
  {
    id: "f13",
    code: "01/VT",
    name: "Phiếu nhập kho vật tư công trình (Mẫu 01-VT)",
    type: "Vật tư",
    format: "Excel",
    fileName: "Phieu_nhap_kho_Mau_01_VT.xls",
    description: "Ghi nhận nhập kho xi măng, sắt thép, cát đá phục vụ thi công công trình của Kiểu Việt.",
    generate: () => createExcelXml(
      "PHIẾU NHẬP KHO VẬT TƯ (MẪU 01-VT)",
      "Nhập tại kho công trình: ................................. - Theo HĐ số: .................................",
      ["STT", "Tên nhãn hiệu vật tư", "Mã số", "Đơn vị tính", "Số lượng chứng từ", "Số lượng thực nhập", "Đơn giá", "Thành tiền"]
    )
  },
  {
    id: "f14",
    code: "02/VT",
    name: "Phiếu xuất kho vật tư thi công (Mẫu 02-VT)",
    type: "Vật tư",
    format: "Excel",
    fileName: "Phieu_xuat_kho_Mau_02_VT.xls",
    description: "Xuất kho vật tư trực tiếp cho đội thi công công trường, căn cứ hạch toán TK 154 theo TT 99/2025.",
    generate: () => createExcelXml(
      "PHIẾU XUẤT KHO VẬT TƯ (MẪU 02-VT)",
      "Xuất cho hạng mục: ................................. - Công trình: .................................",
      ["STT", "Tên nhãn hiệu vật tư", "Mã số", "ĐVT", "Số lượng yêu cầu", "Số lượng thực xuất", "Đơn giá", "Thành tiền"]
    )
  },
  {
    id: "f15",
    code: "03a-KL",
    name: "Bảng xác định giá trị KL công việc hoàn thành (Mẫu 03a)",
    type: "Xây lắp",
    format: "Excel",
    fileName: "Bang_xac_dinh_KL_hoan_thanh_Mau_03a.xls",
    description: "Bảng thanh toán khối lượng A-B hoàn thành giai đoạn theo Nghị định 99/2021 và hợp đồng Kiểu Việt.",
    generate: () => createExcelXml(
      "BẢNG XÁC ĐỊNH GIÁ TRỊ KHỐI LƯỢNG CÔNG VIỆC HOÀN THÀNH (MẪU 03a)",
      "Công trình: ................................. - Giai đoạn thanh toán đợt: .....",
      ["STT", "Nội dung công việc", "Đơn vị", "Khối lượng theo HĐ", "Khối lượng lũy kế kỳ trước", "Khối lượng kỳ này", "Đơn giá HĐ", "Thành tiền kỳ này"]
    )
  },
  {
    id: "f16",
    code: "BBNT-XD",
    name: "Biên bản nghiệm thu hạng mục công trình xây dựng",
    type: "Xây lắp",
    format: "Word",
    fileName: "Bien_ban_nghiem_thu_xay_dung_BBNT.doc",
    description: "Biên bản nghiệm thu kỹ thuật A-B đưa hạng mục xây lắp vào thanh quyết toán theo NĐ 06/2021.",
    generate: () => createWordDoc(
      "BIÊN BẢN NGHIỆM THU HẠNG MỤC CÔNG TRÌNH XÂY DỰNG",
      "BBNT-XD",
      `<p><strong>Công trình:</strong> .....................................................................................................................</p>
       <p><strong>Hạng mục nghiệm thu:</strong> ........................................................................................................</p>
       <p><strong>1. Thành phần tham gia nghiệm thu:</strong></p>
       <p>- Đại diện Chủ đầu tư: Ông/Bà .................................... Chức vụ: ...............................................</p>
       <p>- Đại diện Đơn vị Tư vấn Giám sát: Ông/Bà ................. Chức vụ: ...............................................</p>
       <p>- Đại diện Nhà thầu thi công (Công ty CP Xây Lắp Kiểu Việt):</p>
       <p>&nbsp;&nbsp;&nbsp;&nbsp;+ Ông/Bà: ......................................................... Chức vụ: Chỉ huy trưởng công trường</p>
       <p><strong>2. Đánh giá công việc xây dựng đã thực hiện:</strong></p>
       <p>- Về kích thước hình học, tim trục: Đạt yêu cầu hồ sơ thiết kế bản vẽ thi công.</p>
       <p>- Về chất lượng vật liệu (bê tông, cốt thép, đá dăm): Có đầy đủ chứng chỉ CO/CQ và kết quả thí nghiệm nén mẫu đạt mác thiết kế.</p>
       <p><strong>3. Kết luận:</strong> Chấp thuận nghiệm thu giai đoạn để triển khai các bước tiếp theo.</p>`
    )
  }
];

// Generate each file
for (const f of forms) {
  const filePath = path.join(FORMS_DIR, f.fileName);
  const content = f.generate();
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Generated: ${f.fileName} (${content.length} bytes)`);
}

// Generate the forms.ts data file
const formsTsContent = `export interface FormItem {
  id: string;
  code: string;
  name: string;
  type: string;
  format: 'Excel' | 'Word' | 'PDF';
  fileName: string;
  fileUrl: string;
  description: string;
}

export const FORMS_DATA: FormItem[] = ${JSON.stringify(
  forms.map(f => ({
    id: f.id,
    code: f.code,
    name: f.name,
    type: f.type,
    format: f.format,
    fileName: f.fileName,
    fileUrl: `/data/forms/${f.fileName}`,
    description: f.description
  })),
  null,
  2
)};
`;

fs.writeFileSync(path.resolve(__dirname, '../src/lib/utils/forms.ts'), formsTsContent, 'utf8');
console.log('Updated src/lib/utils/forms.ts successfully!');
