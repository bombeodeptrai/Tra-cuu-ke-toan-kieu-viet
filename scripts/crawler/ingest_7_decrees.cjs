const axios = require('axios');
const cheerio = require('cheerio');
const TurndownService = require('turndown');
const puppeteer = require('puppeteer');
const https = require('https');
const fs = require('fs');
const path = require('path');

const FOLDER_ID = '1X9LkQPj14QtkKjBduZYoL7ICcmS83jdg';
const GAS_URL = 'https://script.google.com/macros/s/AKfycbwkPqx3h1fhA-2vhAB5W4VZnEsKyIEfrUNrnf3WjZ35A48Eido-GvK6IKF9Zu2n3YCG/exec';

const NEW_DECREES = [
  {
    id: 'nd-145-2020',
    number: '145/2020/NĐ-CP',
    decree_number: '145/2020/NĐ-CP',
    title: 'Nghị định 145/2020/NĐ-CP hướng dẫn thi hành Bộ luật Lao động về điều kiện lao động và quan hệ lao động',
    summary: 'Nghị định hướng dẫn toàn diện về hợp đồng lao động, tiền lương, làm thêm giờ, làm đêm, trợ cấp thôi việc, mất việc làm, kỷ luật lao động và giải quyết tranh chấp lao động.',
    category: 'lao-dong-bhxh',
    tax_field: 'Lao động - Tiền lương & BHXH',
    issued_date: '2020-12-14T00:00:00.000Z',
    effective_date: '2021-02-01T00:00:00.000Z',
    status: 'active',
    free_download_url: 'https://hethongphapluat.com/nghi-dinh-145-2020-nd-cp-huong-dan-bo-luat-lao-dong-ve-dieu-kien-lao-dong-va-quan-he-lao-dong.html'
  },
  {
    id: 'nd-12-2022',
    number: '12/2022/NĐ-CP',
    decree_number: '12/2022/NĐ-CP',
    title: 'Nghị định 12/2022/NĐ-CP xử phạt vi phạm hành chính trong lĩnh vực lao động, bảo hiểm xã hội',
    summary: 'Quy định mức phạt vi phạm về giao kết HĐLĐ, thử việc, chậm trả lương, không đóng BHXH, BHYT, BHTN với mức phạt tiền lên đến 150 triệu đồng.',
    category: 'lao-dong-bhxh',
    tax_field: 'Lao động - Tiền lương & BHXH',
    issued_date: '2022-01-17T00:00:00.000Z',
    effective_date: '2022-01-17T00:00:00.000Z',
    status: 'active',
    free_download_url: 'https://hethongphapluat.com/nghi-dinh-12-2022-nd-cp-ve-xu-phat-vi-pham-hanh-chinh-trong-linh-vuc-lao-dong-bao-hiem-xa-hoi-nguoi-lao-dong-viet-nam-di-lam-viec-o-nuoc-ngoai-theo-hop-dong.html'
  },
  {
    id: 'qd-595-2017-bhxh',
    number: '595/QĐ-BHXH',
    decree_number: '595/QĐ-BHXH',
    title: 'Quyết định 595/QĐ-BHXH Quy trình thu bảo hiểm xã hội, BHYT, BHTN và quản lý sổ thẻ',
    summary: 'Văn bản quy định chi tiết toàn bộ nghiệp vụ kế toán về đối tượng đóng, mức đóng, phương thức đóng BHXH, hồ sơ thủ tục báo tăng/giảm lao động và cấp sổ thẻ.',
    category: 'lao-dong-bhxh',
    tax_field: 'Lao động - Tiền lương & BHXH',
    issued_date: '2017-04-14T00:00:00.000Z',
    effective_date: '2017-05-01T00:00:00.000Z',
    status: 'active',
    free_download_url: 'https://hethongphapluat.com/quyet-dinh-595-qd-bhxh-ban-hanh-quy-trinh-thu-bao-hiem-xa-hoi-bao-hiem-y-te-bao-hiem-that-nghiep-bao-hiem-tai-nan-lao-dong-benh-nghe-nghiep-quan-ly-so-bao-hiem-xa-hoi-the-bao-hiem-y-te.html'
  },
  {
    id: 'nd-37-2015',
    number: '37/2015/NĐ-CP',
    decree_number: '37/2015/NĐ-CP',
    title: 'Nghị định 37/2015/NĐ-CP quy định chi tiết về hợp đồng xây dựng',
    summary: 'Quy định chi tiết về ký kết, thực hiện hợp đồng xây dựng, tạm ứng, thanh toán, nghiệm thu khối lượng hoàn thành, thưởng phạt và điều chỉnh giá hợp đồng xây dựng.',
    category: 'xay-dung',
    tax_field: 'Xây dựng - Công trình',
    issued_date: '2015-04-22T00:00:00.000Z',
    effective_date: '2015-06-15T00:00:00.000Z',
    status: 'active',
    free_download_url: 'https://hethongphapluat.com/nghi-dinh-37-2015-nd-cp-huong-dan-ve-hop-dong-xay-dung.html'
  },
  {
    id: 'nd-50-2021',
    number: '50/2021/NĐ-CP',
    decree_number: '50/2021/NĐ-CP',
    title: 'Nghị định 50/2021/NĐ-CP sửa đổi, bổ sung một số điều của Nghị định 37/2015 về hợp đồng xây dựng',
    summary: 'Sửa đổi nguyên tắc điều chỉnh giá hợp đồng xây dựng khi giá nguyên nhiên vật liệu biến động lớn và quy định về tạm ứng hợp đồng đối với các gói thầu xây lắp.',
    category: 'xay-dung',
    tax_field: 'Xây dựng - Công trình',
    issued_date: '2021-06-01T00:00:00.000Z',
    effective_date: '2021-06-01T00:00:00.000Z',
    status: 'active',
    free_download_url: 'https://hethongphapluat.com/nghi-dinh-50-2021-nd-cp-sua-doi-nghi-dinh-37-2015-nd-cp-quy-dinh-chi-tiet-ve-hop-dong-xay-dung.html'
  },
  {
    id: 'nd-10-2021',
    number: '10/2021/NĐ-CP',
    decree_number: '10/2021/NĐ-CP',
    title: 'Nghị định 10/2021/NĐ-CP về quản lý chi phí đầu tư xây dựng',
    summary: 'Quy định về lập, thẩm định dự toán xây dựng công trình, định mức xây dựng, giá vật liệu, đơn giá nhân công, máy thi công và thanh quyết toán vốn đầu tư xây dựng.',
    category: 'xay-dung',
    tax_field: 'Xây dựng - Công trình',
    issued_date: '2021-02-09T00:00:00.000Z',
    effective_date: '2021-02-09T00:00:00.000Z',
    status: 'active',
    free_download_url: 'https://hethongphapluat.com/nghi-dinh-10-2021-nd-cp-ve-quan-ly-chi-phi-dau-tu-xay-dung.html'
  },
  {
    id: 'nd-218-2013',
    number: '218/2013/NĐ-CP',
    decree_number: '218/2013/NĐ-CP',
    title: 'Nghị định 218/2013/NĐ-CP hướng dẫn thi hành Luật Thuế thu nhập doanh nghiệp',
    summary: 'Nghị định gốc hướng dẫn thi hành Luật Thuế TNDN: phương pháp tính thuế, xác định doanh thu tính thuế, điều kiện chi phí được trừ / không được trừ và ưu đãi thuế TNDN.',
    category: 'thue',
    tax_field: 'Chính sách Thuế & Lệ phí',
    issued_date: '2013-12-26T00:00:00.000Z',
    effective_date: '2014-02-15T00:00:00.000Z',
    status: 'active',
    free_download_url: 'https://hethongphapluat.com/nghi-dinh-218-2013-nd-cp-huong-dan-thi-hanh-luat-thue-thu-nhap-doanh-nghiep.html'
  }
];

const turndown = new TurndownService({ headingStyle: 'atx' });

async function getAccessToken() {
  const clasp = JSON.parse(fs.readFileSync('C:/Users/HUY/.clasprc.json', 'utf8'));
  const postData = new URLSearchParams({
    client_id: clasp.tokens.default.client_id,
    client_secret: clasp.tokens.default.client_secret,
    refresh_token: clasp.tokens.default.refresh_token,
    grant_type: 'refresh_token'
  }).toString();

  return new Promise((resolve, reject) => {
    const req = https.request('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    }, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        const data = JSON.parse(body);
        if (data.access_token) resolve(data.access_token);
        else reject(new Error('Token refresh error: ' + body));
      });
    });
    req.write(postData);
    req.end();
  });
}

async function uploadPdfBufferToDrive(token, folderId, buffer, fileName) {
  const fileId = await new Promise((resolve, reject) => {
    const req = https.request('https://www.googleapis.com/drive/v3/files', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
      }
    }, (res) => {
      let body = '';
      res.on('data', c => body += c);
      res.on('end', () => {
        try {
          const data = JSON.parse(body);
          if (data.id) resolve(data.id);
          else reject(new Error('Step 1 failed: ' + body));
        } catch (e) {
          reject(e);
        }
      });
    });
    req.on('error', reject);
    req.write(JSON.stringify({
      name: fileName,
      mimeType: 'application/pdf',
      parents: [folderId]
    }));
    req.end();
  });

  await new Promise((resolve, reject) => {
    const req = https.request(`https://www.googleapis.com/upload/drive/v3/files/${fileId}?uploadType=media`, {
      method: 'PATCH',
      headers: {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/pdf',
        'Content-Length': buffer.length
      }
    }, (res) => {
      let body = '';
      res.on('data', c => body += c);
      res.on('end', () => {
        if (res.statusCode === 200) resolve();
        else reject(new Error('Step 2 failed (' + res.statusCode + '): ' + body));
      });
    });
    req.on('error', reject);
    req.write(buffer);
    req.end();
  });

  return fileId;
}

async function generatePdfFromMarkdown(browser, title, number, mdContent) {
  const page = await browser.newPage();
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        @page { size: A4; margin: 20mm 15mm 20mm 20mm; }
        body { font-family: 'Times New Roman', serif; font-size: 13pt; line-height: 1.4; color: #000; margin: 0; padding: 0; }
        .header { text-align: center; margin-bottom: 25px; }
        .country { font-weight: bold; font-size: 13pt; text-transform: uppercase; }
        .motto { font-size: 12pt; border-bottom: 1px solid #000; display: inline-block; padding-bottom: 4px; margin-bottom: 15px; }
        .number { font-size: 12pt; margin-bottom: 15px; font-weight: bold; }
        .title { font-weight: bold; font-size: 14pt; margin: 15px 0; text-transform: uppercase; }
        .content { text-align: justify; white-space: pre-wrap; font-size: 12.5pt; }
      </style>
    </head>
    <body>
      <div class="header">
        <div class="country">CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</div>
        <div class="motto">Độc lập - Tự do - Hạnh phúc</div>
        <div class="number">Số: ${number || ''}</div>
        <div class="title">${title}</div>
      </div>
      <div class="content">${mdContent.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</div>
    </body>
    </html>
  `;

  await page.setContent(html, { waitUntil: 'domcontentloaded', timeout: 0 });
  const buffer = await page.pdf({
    format: 'A4',
    printBackground: true,
    timeout: 0,
    margin: { top: '20mm', bottom: '20mm', left: '20mm', right: '15mm' }
  });
  await page.close();
  return buffer;
}

async function main() {
  console.log('=== TIẾN HÀNH THU THẬP TOÀN VĂN SẠCH & ĐỒNG BỘ DRIVE CHO 7 VĂN BẢN ===');
  const token = await getAccessToken();
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });

  const decreesPath = 'public/data/decrees.json';
  const currentDecrees = JSON.parse(fs.readFileSync(decreesPath, 'utf8'));

  for (let i = 0; i < NEW_DECREES.length; i++) {
    const doc = NEW_DECREES[i];
    console.log(`\n[${i + 1}/${NEW_DECREES.length}] Đang xử lý: ${doc.number} (${doc.id})...`);

    // 1. Tải HTML từ hethongphapluat.com
    console.log(` -> Tải HTML từ: ${doc.free_download_url}`);
    const res = await axios.get(doc.free_download_url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' },
      timeout: 30000
    });

    // 2. Lọc sạch rác
    const $ = cheerio.load(res.data);
    $('.model_prompt, script, style, .ads, .comment, noscript, header, footer, nav').remove();
    const rawHtml = $('#tab_noi_dung_vb').html() || $('article').html() || $('.content').html() || '';
    const cleanMarkdown = turndown.turndown(rawHtml).trim();

    console.log(` -> Đã làm sạch toàn văn: ${cleanMarkdown.length.toLocaleString()} ký tự`);

    // 3. Lưu file Markdown
    const mdFileName = `${doc.id}.md`;
    const mdFilePath = path.join('public/data/content', mdFileName);
    fs.writeFileSync(mdFilePath, cleanMarkdown, 'utf8');
    doc.content_url = `/data/content/${mdFileName}`;
    console.log(` -> Đã ghi file Markdown: ${mdFilePath}`);

    // 4. Sinh file PDF chuẩn
    const pdfFileName = `${doc.id}.pdf`;
    const pdfFilePath = path.join('public/data/pdfs', pdfFileName);
    const pdfBuffer = await generatePdfFromMarkdown(browser, doc.title, doc.number, cleanMarkdown);
    fs.writeFileSync(pdfFilePath, pdfBuffer);
    doc.pdf_url = `/data/pdfs/${pdfFileName}`;
    console.log(` -> Đã sinh file PDF chuẩn (${(pdfBuffer.length / 1024).toFixed(1)} KB)`);

    // 5. Upload lên Google Drive
    const driveFileId = await uploadPdfBufferToDrive(token, FOLDER_ID, pdfBuffer, pdfFileName);
    doc.pdf_drive_id = driveFileId;
    console.log(` -> Đã tải lên Google Drive thành công! Drive ID: ${driveFileId}`);

    // 6. Cập nhật vào danh sách decrees
    const existingIndex = currentDecrees.findIndex(d => d.id === doc.id);
    if (existingIndex >= 0) {
      currentDecrees[existingIndex] = { ...currentDecrees[existingIndex], ...doc };
    } else {
      currentDecrees.push(doc);
    }
  }

  await browser.close();

  // 7. Lưu lại decrees.json
  fs.writeFileSync(decreesPath, JSON.stringify(currentDecrees, null, 2), 'utf8');
  console.log(`\n🎉 ĐÃ CẬP NHẬT decrees.json (Tổng cộng: ${currentDecrees.length} văn bản)!`);

  // 8. Đồng bộ lên Google Sheet
  console.log('\nĐang đồng bộ danh sách mới lên Google Sheet...');
  const fetch = (...args) => import('node-fetch').then(({ default: f }) => f(...args));
  try {
    await fetch(GAS_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify({ action: 'reset' })
    });

    for (let j = 0; j < currentDecrees.length; j += 15) {
      const chunk = currentDecrees.slice(j, j + 15);
      await fetch(GAS_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain' },
        body: JSON.stringify(chunk)
      });
    }
    console.log('✅ ĐÃ ĐỒNG BỘ 100% LÊN GOOGLE SHEET!');
  } catch (err) {
    console.error('Lỗi đồng bộ Google Sheet:', err.message);
  }
}

main().catch(console.error);
