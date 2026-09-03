/**
 * GOOGLE APPS SCRIPT - HỆ THỐNG TRA CỨU KẾ TOÁN KIỂU VIỆT
 * Tích hợp:
 * 1. API đọc danh sách văn bản cho Web App
 * 2. Tiếp nhận phản ánh / yêu cầu bổ sung văn bản mới
 * 3. Thẩm định tự động & Gửi Email HTML kèm nút tương tác cho Admin
 * 4. Xử lý hành động DUYỆT / TỪ CHỐI trực tiếp khi Admin click nút trong Email
 */

const ADMIN_EMAIL = 'nguyenthanhtrongnhan14@gmail.com';
const SHEET_FEEDBACK = 'Phan_Hoi';
const SHEET_DECREES = 'Decrees';

// ==========================================
// 1. XỬ LÝ GET (Đọc dữ liệu & Xử lý Click nút từ Email)
// ==========================================
function doGet(e) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const action = e && e.parameter ? e.parameter.action : null;

  // Xử lý khi Admin nhấn nút DUYỆT trong Email
  if (action === 'approve_request') {
    const reqId = e.parameter.id;
    const docNumber = e.parameter.number || '';
    const docTitle = e.parameter.title || '';
    return handleApproveAction(ss, reqId, docNumber, docTitle);
  }

  // Xử lý khi Admin nhấn nút TỪ CHỐI trong Email
  if (action === 'reject_request') {
    const reqId = e.parameter.id;
    return handleRejectAction(ss, reqId);
  }

  // Mặc định: Trả về danh sách văn bản dạng JSON cho Web App
  return getDecreesJson(ss);
}

// ==========================================
// 2. XỬ LÝ POST (Nhận dữ liệu từ Web App)
// ==========================================
function doPost(e) {
  try {
    const contents = e.postData.contents;
    const payload = JSON.parse(contents);
    const ss = SpreadsheetApp.getActiveSpreadsheet();

    // Xử lý nạp dữ liệu decrees ban đầu (nếu có reset)
    if (payload.action === 'reset') {
      const sheet = ss.getSheetByName(SHEET_DECREES) || ss.insertSheet(SHEET_DECREES);
      sheet.clearContents();
      return ContentService.createTextOutput(JSON.stringify({ status: 'cleared' })).setMimeType(ContentService.MimeType.JSON);
    }

    // Xử lý thêm đơn lẻ văn bản
    if (payload.action === 'add_decree') {
      const decree = payload.decree;
      saveDecreeToSheet(ss, decree);
      return ContentService.createTextOutput(JSON.stringify({ success: true })).setMimeType(ContentService.MimeType.JSON);
    }

    // Xử lý lưu ghi chú cá nhân
    if (payload.action === 'save_note') {
      saveNoteToSheet(ss, payload);
      return ContentService.createTextOutput(JSON.stringify({ success: true })).setMimeType(ContentService.MimeType.JSON);
    }

    // Xử lý lưu lịch sử tìm kiếm
    if (payload.action === 'save_search') {
      saveSearchToSheet(ss, payload);
      return ContentService.createTextOutput(JSON.stringify({ success: true })).setMimeType(ContentService.MimeType.JSON);
    }

    // ====================================================
    // TÍNH NĂNG CHÍNH: TIẾP NHẬN PHẢN ÁNH & GỬI EMAIL THẨM ĐỊNH
    // ====================================================
    if (payload.action === 'submit_feedback') {
      return handleFeedbackSubmission(ss, payload);
    }

    // Fallback: Chèn mảng dữ liệu văn bản
    if (Array.isArray(payload)) {
      saveBatchDecrees(ss, payload);
      return ContentService.createTextOutput(JSON.stringify({ status: 'inserted', count: payload.length })).setMimeType(ContentService.MimeType.JSON);
    }

    return ContentService.createTextOutput(JSON.stringify({ status: 'unknown_action' })).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ error: err.toString() })).setMimeType(ContentService.MimeType.JSON);
  }
}

// ====================================================
// 3. TIẾP NHẬN PHẢN ÁNH & BẮN EMAIL TƯƠNG TÁC
// ====================================================
function handleFeedbackSubmission(ss, payload) {
  const feedback = payload.feedback || {};
  const audit = payload.verification || {};
  const recipientEmail = payload.admin_email || ADMIN_EMAIL;
  const reqId = feedback.id || 'REQ-' + Utilities.formatDate(new Date(), 'GMT+7', 'yyyyMMdd-HHmmss');

  // 1. Lưu vào Google Sheet 'Phan_Hoi'
  let sheet = ss.getSheetByName(SHEET_FEEDBACK);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_FEEDBACK);
    sheet.appendRow([
      'Mã Yêu Cầu', 'Thời Gian', 'Người Gửi', 'Liên Hệ',
      'Phân Loại', 'Tiêu Đề / Số Hiệu', 'Chi Tiết Yêu Cầu',
      'Số Hiệu Nhận Diện', 'Đã Có Trong CSDL', 'Lĩnh Vực',
      'Đánh Giá Thẩm Định', 'Khuyến Nghị', 'Trạng Thái Duyệt', 'Ghi Chú'
    ]);
    sheet.getRange('1:1').setFontWeight('bold').setBackground('#f1f5f9');
  }

  sheet.appendRow([
    reqId,
    feedback.created_at || Utilities.formatDate(new Date(), 'GMT+7', 'yyyy-MM-dd HH:mm:ss'),
    feedback.username || 'Ẩn danh',
    feedback.contact || 'Không có',
    feedback.type || 'missing',
    feedback.title || '',
    feedback.description || '',
    audit.detectedNumber || '',
    audit.isExisting ? 'CÓ' : 'CHƯA',
    audit.relevantField || '',
    audit.summary || '',
    audit.recommendation || 'REVIEW',
    'CHỜ DUYỆT',
    ''
  ]);

  // 2. Tạo link duyệt trực tiếp
  const execUrl = ScriptApp.getService().getUrl();
  const approveUrl = execUrl + '?action=approve_request&id=' + encodeURIComponent(reqId) + 
    '&number=' + encodeURIComponent(audit.detectedNumber || '') + 
    '&title=' + encodeURIComponent(feedback.title || '');
  const rejectUrl = execUrl + '?action=reject_request&id=' + encodeURIComponent(reqId);
  const sheetUrl = ss.getUrl();

  // 3. Soạn Email HTML
  const subject = `[Kiểu Việt Tra Cứu] ⚖️ Yêu cầu bổ sung văn bản: ${feedback.title} (${audit.recommendation === 'APPROVE' ? 'Đề xuất DUYỆT' : 'Đề xuất TỪ CHỐI'})`;
  
  const recBadgeColor = audit.recommendation === 'APPROVE' ? '#16a34a' : (audit.recommendation === 'REJECT' ? '#dc2626' : '#d97706');
  const recBadgeText = audit.recommendation === 'APPROVE' ? '✅ KHUYẾN NGHỊ DUYỆT' : (audit.recommendation === 'REJECT' ? '❌ KHUYẾN NGHỊ TỪ CHỐI' : '⚠️ CẦN XEM XÉT THỦ CÔNG');

  const htmlBody = `
  <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 650px; margin: 0 auto; background: #f8fafc; padding: 24px; border-radius: 16px; color: #1e293b;">
    <div style="text-align: center; margin-bottom: 24px;">
      <h2 style="color: #0f172a; margin: 0 0 4px 0; font-size: 22px;">Tra Cứu Kế Toán Kiểu Việt</h2>
      <p style="margin: 0; color: #64748b; font-size: 14px;">Hệ thống thẩm định & duyệt yêu cầu văn bản tự động</p>
    </div>

    <!-- KHỐI THẨM ĐỊNH HỆ THỐNG -->
    <div style="background: #ffffff; border: 2px solid ${recBadgeColor}; border-radius: 12px; padding: 20px; margin-bottom: 20px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
        <span style="font-size: 13px; font-weight: bold; text-transform: uppercase; color: #64748b; letter-spacing: 0.5px;">KẾT QUẢ THẨM ĐỊNH TỰ ĐỘNG</span>
        <span style="background: ${recBadgeColor}; color: white; padding: 4px 12px; border-radius: 9999px; font-size: 12px; font-weight: bold;">${recBadgeText}</span>
      </div>
      <p style="margin: 0 0 12px 0; font-size: 15px; line-height: 1.5; color: #334155;">
        <strong>Đánh giá hệ thống:</strong> ${audit.summary || 'Đã ghi nhận yêu cầu.'}
      </p>
      <div style="background: #f1f5f9; border-radius: 8px; padding: 12px; font-size: 13px; line-height: 1.6;">
        <div><strong>Số hiệu nhận diện:</strong> ${audit.detectedNumber || 'Không rõ'}</div>
        <div><strong>Loại văn bản:</strong> ${audit.docType || 'Chưa rõ'}</div>
        <div><strong>Lĩnh vực:</strong> ${audit.relevantField || 'Kế toán'}</div>
        <div><strong>Tồn tại trong CSDL:</strong> ${audit.isExisting ? '⚠️ Đã có sẵn' : '✅ Chưa có (Hợp lệ để bổ sung)'}</div>
      </div>
    </div>

    <!-- KHỐI NỘI DUNG NGƯỜI DÙNG GỬI -->
    <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; margin-bottom: 24px;">
      <h3 style="margin: 0 0 12px 0; font-size: 16px; color: #0f172a; border-bottom: 1px solid #e2e8f0; padding-bottom: 8px;">Chi tiết phản ánh từ người dùng</h3>
      <table style="width: 100%; font-size: 14px; line-height: 1.6; border-collapse: collapse;">
        <tr>
          <td style="width: 140px; color: #64748b; padding: 6px 0;">Người gửi:</td>
          <td style="font-weight: 600; color: #0f172a;">${feedback.username || 'Ẩn danh'}</td>
        </tr>
        <tr>
          <td style="color: #64748b; padding: 6px 0;">Thông tin liên hệ:</td>
          <td style="color: #0f172a;">${feedback.contact || 'Không để lại'}</td>
        </tr>
        <tr>
          <td style="color: #64748b; padding: 6px 0;">Phân loại:</td>
          <td style="color: #0f172a;">${feedback.type === 'missing' ? 'Yêu cầu bổ sung văn bản mới' : (feedback.type === 'error' ? 'Báo lỗi văn bản' : 'Góp ý khác')}</td>
        </tr>
        <tr>
          <td style="color: #64748b; padding: 6px 0;">Tiêu đề/Số hiệu:</td>
          <td style="font-weight: 600; color: #2563eb;">${feedback.title || ''}</td>
        </tr>
        <tr>
          <td style="color: #64748b; padding: 6px 0; vertical-align: top;">Ghi chú chi tiết:</td>
          <td style="background: #f8fafc; padding: 10px; border-radius: 6px; color: #334155; font-style: italic;">"${feedback.description || ''}"</td>
        </tr>
      </table>
    </div>

    <!-- NÚT HÀNH ĐỘNG CỦA ADMIN -->
    <div style="text-align: center; margin-bottom: 24px;">
      <p style="margin: 0 0 16px 0; font-size: 14px; font-weight: 600; color: #475569;">Nhấn vào nút bên dưới để hệ thống thực thi hành động:</p>
      <div style="display: inline-block;">
        <a href="${approveUrl}" target="_blank" style="display: inline-block; background-color: #16a34a; color: #ffffff; text-decoration: none; padding: 14px 28px; border-radius: 8px; font-weight: bold; font-size: 15px; margin: 0 8px 10px 8px; box-shadow: 0 4px 6px -1px rgba(22, 163, 74, 0.3);">
          ✅ DUYỆT BỔ SUNG VĂN BẢN
        </a>
        <a href="${rejectUrl}" target="_blank" style="display: inline-block; background-color: #dc2626; color: #ffffff; text-decoration: none; padding: 14px 28px; border-radius: 8px; font-weight: bold; font-size: 15px; margin: 0 8px 10px 8px; box-shadow: 0 4px 6px -1px rgba(220, 38, 38, 0.3);">
          ❌ TỪ CHỐI YÊU CẦU
        </a>
      </div>
      <div style="margin-top: 12px;">
        <a href="${sheetUrl}" target="_blank" style="color: #475569; font-size: 13px; text-decoration: underline;">
          📊 Mở Google Sheet để xem toàn bộ danh sách phản ánh
        </a>
      </div>
    </div>

    <div style="text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0; padding-top: 16px;">
      Email được gửi tự động từ Hệ thống Tra Cứu Kế Toán Kiểu Việt • Mã yêu cầu: ${reqId}
    </div>
  </div>
  `;

  // Gửi Email
  MailApp.sendEmail({
    to: recipientEmail,
    subject: subject,
    htmlBody: htmlBody
  });

  return ContentService.createTextOutput(JSON.stringify({
    success: true,
    message: 'Đã lưu phản ánh và gửi email thẩm định tới Admin',
    req_id: reqId
  })).setMimeType(ContentService.MimeType.JSON);
}

// ==========================================
// 4. XỬ LÝ KHI CLICK DUYỆT TỪ EMAIL
// ==========================================
function handleApproveAction(ss, reqId, docNumber, docTitle) {
  const sheet = ss.getSheetByName(SHEET_FEEDBACK);
  let found = false;

  if (sheet) {
    const data = sheet.getDataRange().getValues();
    for (let i = 1; i < data.length; i++) {
      if (data[i][0] == reqId) {
        sheet.getRange(i + 1, 13).setValue('ĐÃ DUYỆT'); // Cột Trạng thái duyệt
        sheet.getRange(i + 1, 14).setValue('Đã duyệt qua Email lúc ' + Utilities.formatDate(new Date(), 'GMT+7', 'dd/MM/yyyy HH:mm:ss'));
        found = true;
        break;
      }
    }
  }

  // Tự động tạo bản ghi chờ nạp toàn văn trong sheet Decrees (nếu có số hiệu)
  let decreeSheet = ss.getSheetByName(SHEET_DECREES);
  if (!decreeSheet) {
    decreeSheet = ss.insertSheet(SHEET_DECREES);
  }

  const generatedId = (docNumber || 'doc')
    .toLowerCase()
    .replace(/[\/\.]/g, '-')
    .replace(/[^a-z0-9\-]/g, '');

  decreeSheet.appendRow([
    generatedId,
    docNumber || 'Chưa rõ',
    docTitle || 'Văn bản bổ sung theo yêu cầu',
    'khac',
    'khac',
    Utilities.formatDate(new Date(), 'GMT+7', 'yyyy-MM-dd'),
    Utilities.formatDate(new Date(), 'GMT+7', 'yyyy-MM-dd'),
    'active',
    'Văn bản được Admin duyệt bổ sung. Đang chờ quét toàn văn.',
    '',
    ''
  ]);

  const htmlResponse = `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <title>Xác nhận Duyệt Yêu Cầu</title>
    <style>
      body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #f8fafc; display: flex; align-items: center; justify-content: center; min-height: 100vh; margin: 0; padding: 20px; box-sizing: border-box; }
      .card { background: white; max-width: 500px; width: 100%; padding: 40px; border-radius: 16px; box-shadow: 0 10px 25px -5px rgba(0,0,0,0.05); text-align: center; border: 1px solid #e2e8f0; }
      .icon { width: 64px; height: 64px; background: #dcfce7; color: #16a34a; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 32px; margin: 0 auto 20px auto; }
      h1 { font-size: 22px; color: #0f172a; margin: 0 0 12px 0; }
      p { font-size: 15px; color: #475569; line-height: 1.6; margin: 0 0 24px 0; }
      .badge { background: #f1f5f9; padding: 12px 16px; border-radius: 8px; font-size: 14px; color: #334155; margin-bottom: 24px; text-align: left; }
      .btn { display: inline-block; background: #2563eb; color: white; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: 600; font-size: 14px; }
    </style>
  </head>
  <body>
    <div class="card">
      <div class="icon">✓</div>
      <h1>ĐÃ DUYỆT THÀNH CÔNG!</h1>
      <p>Yêu cầu <strong>${reqId}</strong> đã được phê duyệt. Hệ thống đã cập nhật trạng thái trong Google Sheet và tạo sẵn hàng mục chờ nạp văn bản toàn văn.</p>
      <div class="badge">
        <div><strong>Số hiệu:</strong> ${docNumber || 'Không có'}</div>
        <div><strong>Tiêu đề:</strong> ${docTitle || 'Văn bản yêu cầu'}</div>
        <div><strong>Trạng thái:</strong> ĐÃ DUYỆT & ĐƯA VÀO HÀNG ĐỢI</div>
      </div>
      <a href="${ss.getUrl()}" target="_blank" class="btn">Mở Google Sheet Quản Trị</a>
    </div>
  </body>
  </html>
  `;

  return HtmlService.createHtmlOutput(htmlResponse).setTitle('Xác nhận Duyệt Thành Công');
}

// ==========================================
// 5. XỬ LÝ KHI CLICK TỪ CHỐI TỪ EMAIL
// ==========================================
function handleRejectAction(ss, reqId) {
  const sheet = ss.getSheetByName(SHEET_FEEDBACK);
  if (sheet) {
    const data = sheet.getDataRange().getValues();
    for (let i = 1; i < data.length; i++) {
      if (data[i][0] == reqId) {
        sheet.getRange(i + 1, 13).setValue('ĐÃ TỪ CHỐI');
        sheet.getRange(i + 1, 14).setValue('Đã từ chối qua Email lúc ' + Utilities.formatDate(new Date(), 'GMT+7', 'dd/MM/yyyy HH:mm:ss'));
        break;
      }
    }
  }

  const htmlResponse = `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <title>Xác nhận Từ Chối</title>
    <style>
      body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #f8fafc; display: flex; align-items: center; justify-content: center; min-height: 100vh; margin: 0; padding: 20px; box-sizing: border-box; }
      .card { background: white; max-width: 500px; width: 100%; padding: 40px; border-radius: 16px; box-shadow: 0 10px 25px -5px rgba(0,0,0,0.05); text-align: center; border: 1px solid #e2e8f0; }
      .icon { width: 64px; height: 64px; background: #fee2e2; color: #dc2626; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 32px; margin: 0 auto 20px auto; }
      h1 { font-size: 22px; color: #0f172a; margin: 0 0 12px 0; }
      p { font-size: 15px; color: #475569; line-height: 1.6; margin: 0 0 24px 0; }
      .btn { display: inline-block; background: #475569; color: white; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: 600; font-size: 14px; }
    </style>
  </head>
  <body>
    <div class="card">
      <div class="icon">✕</div>
      <h1>ĐÃ TỪ CHỐI YÊU CẦU</h1>
      <p>Yêu cầu <strong>${reqId}</strong> đã được đánh dấu là <strong>TỪ CHỐI</strong> trong Google Sheet. Hệ thống sẽ không thêm văn bản này.</p>
      <a href="${ss.getUrl()}" target="_blank" class="btn">Mở Google Sheet</a>
    </div>
  </body>
  </html>
  `;

  return HtmlService.createHtmlOutput(htmlResponse).setTitle('Xác nhận Từ Chối');
}

// ==========================================
// 6. CÁC HÀM PHỤ TRỢ (Decrees, Notes, Search)
// ==========================================
function getDecreesJson(ss) {
  let sheet = ss.getSheetByName(SHEET_DECREES);
  if (!sheet) {
    return ContentService.createTextOutput(JSON.stringify([])).setMimeType(ContentService.MimeType.JSON);
  }
  const rows = sheet.getDataRange().getValues();
  if (rows.length <= 1) {
    return ContentService.createTextOutput(JSON.stringify([])).setMimeType(ContentService.MimeType.JSON);
  }

  const headers = rows[0].map(h => String(h).trim().toLowerCase());
  const list = [];

  for (let i = 1; i < rows.length; i++) {
    const row = rows[i];
    if (!row[0]) continue;
    const item = {};
    for (let j = 0; j < headers.length; j++) {
      item[headers[j]] = row[j];
    }
    list.push(item);
  }

  return ContentService.createTextOutput(JSON.stringify(list)).setMimeType(ContentService.MimeType.JSON);
}

function saveDecreeToSheet(ss, decree) {
  let sheet = ss.getSheetByName(SHEET_DECREES) || ss.insertSheet(SHEET_DECREES);
  sheet.appendRow([
    decree.id || '',
    decree.number || decree.decree_number || '',
    decree.title || '',
    decree.category || 'khac',
    decree.tax_field || 'khac',
    decree.issued_date || '',
    decree.effective_date || '',
    decree.status || 'active',
    decree.summary || '',
    decree.content_url || '',
    decree.pdf_url || decree.free_download_url || ''
  ]);
}

function saveBatchDecrees(ss, list) {
  let sheet = ss.getSheetByName(SHEET_DECREES) || ss.insertSheet(SHEET_DECREES);
  const rows = list.map(d => [
    d.id || '',
    d.number || d.decree_number || '',
    d.title || '',
    d.category || 'khac',
    d.tax_field || 'khac',
    d.issued_date || '',
    d.effective_date || '',
    d.status || 'active',
    d.summary || '',
    d.content_url || '',
    d.pdf_url || d.free_download_url || ''
  ]);
  if (rows.length > 0) {
    sheet.getRange(sheet.getLastRow() + 1, 1, rows.length, rows[0].length).setValues(rows);
  }
}

function saveNoteToSheet(ss, payload) {
  let sheet = ss.getSheetByName('Ghi_Chu') || ss.insertSheet('Ghi_Chu');
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Thời Gian', 'Văn Bản ID', 'Đoạn Trích', 'Ghi Chú Người Dùng']);
  }
  sheet.appendRow([
    new Date(),
    payload.decree_id || '',
    payload.selected_text || '',
    payload.user_note || ''
  ]);
}

function saveSearchToSheet(ss, payload) {
  let sheet = ss.getSheetByName('Lich_Su_Tim_Kiem') || ss.insertSheet('Lich_Su_Tim_Kiem');
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Thời Gian', 'Từ Khóa']);
  }
  sheet.appendRow([
    new Date(),
    payload.keyword || ''
  ]);
}
