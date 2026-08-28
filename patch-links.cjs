const axios = require('axios');
const fs = require('fs');
const path = require('path');

async function run() {
  const dataPath = path.join(__dirname, 'public/data/decrees.json');
  const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
  
  // The ones we already know manually
  const manualLinks = {
    "89/2026/TT-BTC": "https://hethongphapluat.com/thong-tu-89-2026-tt-btc-huong-dan-luat-quan-ly-thue-va-nghi-dinh-252-2026-nd-cp-huong-dan-luat-quan-ly-thue-do-bo-truong-bo-tai-chinh-ban-hanh.html",
    "46/2025/TT-BTC": "https://hethongphapluat.com/thong-tu-46-2025-tt-btc-sua-doi-bai-bo-cac-thong-tu-trong-linh-vuc-ke-toan-kiem-toan-de-day-manh-phan-cap-phan-quyen-va-sap-xep-to-chuc-chinh-quyen-dia-phuong-02-cap-do-bo-truong-bo-tai-chinh-ban-hanh.html",
    "180/2024/NĐ-CP": "https://hethongphapluat.com/nghi-dinh-180-2024-nd-cp-quy-dinh-chinh-sach-giam-thue-gia-tri-gia-tang-theo-nghi-quyet-174-2024-qh15.html",
    "24/2024/TT-BTC": "https://hethongphapluat.com/thong-tu-24-2024-tt-btc-huong-dan-che-do-ke-toan-hanh-chinh-su-nghiep-do-bo-truong-bo-tai-chinh-ban-hanh.html",
    "87/2025/QĐ-UBND": "https://hethongphapluat.com/quyet-dinh-87-2025-qd-ubnd-phan-cap-tham-quyen-trong-cong-tac-quan-ly-can-bo-cong-chuc-vien-chuc-nguoi-lao-dong-thuoc-tham-quyen-quan-ly-cua-uy-ban-nhan-dan-tinh-nghe-an.html",
    "152/2015/TT-BTC": "https://hethongphapluat.com/thong-tu-152-2015-tt-btc-huong-dan-ve-thue-tai-nguyen-do-bo-truong-bo-tai-chinh-ban-hanh.html",
    "27/2023/NĐ-CP": "https://hethongphapluat.com/nghi-dinh-27-2023-nd-cp-quy-dinh-phi-bao-ve-moi-truong-doi-voi-khai-thac-khoang-san.html",
    "54/2024/QH15": "https://hethongphapluat.com/luat-dia-chat-va-khoang-san-2024.html",
    "67/2019/NĐ-CP": "https://hethongphapluat.com/nghi-dinh-67-2019-nd-cp-quy-dinh-ve-phuong-phap-tinh-muc-thu-tien-cap-quyen-khai-thac-khoang-san.html",
    "44/2017/TT-BTC": "https://hethongphapluat.com/thong-tu-44-2017-tt-btc-quy-dinh-ve-khung-gia-tinh-thue-tai-nguyen-doi-voi-nhom-loai-tai-nguyen-co-tinh-chat-ly-hoa-giong-nhau-do-bo-truong-bo-tai-chinh-ban-hanh.html",
    "56/2024/QH15": "https://hethongphapluat.com/luat-sua-doi-bo-sung-mot-so-dieu-cua-luat-chung-khoan-luat-ke-toan-luat-kiem-toan-doc-lap-luat-ngan-sach-nha-nuoc-luat-quan-ly-su-dung-tai-san-cong-luat-quan-ly-thue-luat-thue-thu-nhap-ca-nhan-luat-du-tru-quoc-gia-luat-xu-ly-vi-pham-hanh-chinh.html",
    "70/2025/NĐ-CP": "https://hethongphapluat.com/nghi-dinh-70-2025-nd-cp-sua-doi-nghi-dinh-123-2020-nd-cp-quy-dinh-ve-hoa-don-chung-tu.html",
    "88/2015/QH13": "https://hethongphapluat.com/luat-ke-toan-nam-2015.html",
    "38/2019/QH14": "https://hethongphapluat.com/luat-quan-ly-thue-nam-2019.html",
    "14/2008/QH12": "https://hethongphapluat.com/luat-thue-thu-nhap-doanh-nghiep-nam-2008.html",
    "13/2008/QH12": "https://hethongphapluat.com/luat-thue-gia-tri-gia-tang-nam-2008.html",
    "174/2016/NĐ-CP": "https://hethongphapluat.com/nghi-dinh-174-2016-nd-cp-huong-dan-luat-ke-toan.html",
    "123/2020/NĐ-CP": "https://hethongphapluat.com/nghi-dinh-123-2020-nd-cp-quy-dinh-ve-hoa-don-chung-tu.html",
    "41/2018/NĐ-CP": "https://hethongphapluat.com/nghi-dinh-41-2018-nd-cp-quy-dinh-ve-xu-phat-vi-pham-hanh-chinh-trong-linh-vuc-ke-toan-kiem-toan-doc-lap.html",
    "132/2020/NĐ-CP": "https://hethongphapluat.com/nghi-dinh-132-2020-nd-cp-quy-dinh-ve-quan-ly-thue-doi-voi-doanh-nghiep-co-giao-dich-lien-ket.html",
    "219/2013/TT-BTC": "https://hethongphapluat.com/thong-tu-219-2013-tt-btc-huong-dan-luat-thue-gia-tri-gia-tang-va-nghi-dinh-209-2013-nd-cp-do-bo-truong-bo-tai-chinh-ban-hanh.html",
    "78/2021/TT-BTC": "https://hethongphapluat.com/thong-tu-78-2021-tt-btc-huong-dan-thuc-hien-luat-quan-ly-thue-nghi-dinh-123-2020-nd-cp-quy-dinh-ve-hoa-don-chung-tu-do-bo-truong-bo-tai-chinh-ban-hanh.html",
    "45/2013/TT-BTC": "https://hethongphapluat.com/thong-tu-45-2013-tt-btc-huong-dan-che-do-quan-ly-su-dung-va-trich-khau-hao-tai-san-co-dinh-do-bo-truong-bo-tai-chinh-ban-hanh.html",
    "48/2019/TT-BTC": "https://hethongphapluat.com/thong-tu-48-2019-tt-btc-huong-dan-viec-trich-lap-va-xu-ly-cac-khoan-du-phong-giam-gia-hang-ton-kho-ton-that-cac-khoan-dau-tu-no-phai-thu-kho-doi-va-bao-hanh-san-pham-hang-hoa-dich-vu-cong-trinh-xay-dung-tai-doanh-nghiep-do-bo.html",
    "Chuẩn mực kế toán VAS 01": "https://hethongphapluat.com/quyet-dinh-165-2002-qd-btc.html",
    "Chuẩn mực kế toán VAS 02": "https://hethongphapluat.com/quyet-dinh-149-2001-qd-btc.html",
    "Chuẩn mực kế toán VAS 14": "https://hethongphapluat.com/quyet-dinh-149-2001-qd-btc.html"
  };

  let updatedCount = 0;
  for (let i = 0; i < data.length; i++) {
    const decree = data[i];
    if (manualLinks[decree.decree_number]) {
      data[i].free_download_url = manualLinks[decree.decree_number];
      updatedCount++;
    } else if (!decree.free_download_url) {
      // Use DuckDuckGo Lite without quotes!
      try {
        console.log(`[DDG] Searching ${decree.decree_number}...`);
        await new Promise(r => setTimeout(r, 2000));
        const query = encodeURIComponent(`site:hethongphapluat.com ${decree.decree_number}`);
        const res = await axios.post('https://lite.duckduckgo.com/lite/', `q=${query}`, {
          headers: { 
            'Content-Type': 'application/x-www-form-urlencoded',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
          }
        });
        const m = res.data.match(/hethongphapluat\.com[^<"'\s]+/g);
        if (m && m.length > 0) {
          const htmlLink = m.find(link => link.endsWith('.html'));
          if (htmlLink) {
            data[i].free_download_url = 'https://' + htmlLink;
            console.log(`=> Found: https://${htmlLink}`);
            updatedCount++;
          }
        }
      } catch (e) { console.log(e.message); }
    }
  }

  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
  console.log(`Finished! Updated ${updatedCount} links.`);
}
run();
