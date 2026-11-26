# Crawler pháp luật tự động

`legal-crawler.mjs` quét nguồn chính thức, chỉ đưa văn bản vào thư viện khi đã xác minh đủ:
metadata ở trang chi tiết → PDF gốc hợp lệ → chữ trích đủ mọi trang → đã lưu Google Drive (đọc lại kích thước + MD5).

## Nguồn

| Nguồn | Vai trò | Endpoint đã kiểm tra (16/11/2026) |
|---|---|---|
| vanban.chinhphu.vn | Bắt buộc | `GET /he-thong-van-ban?classid=1&mode=1&typegroupid=3` (Luật), `4` (Nghị định), `5` (Quyết định), `6` (Thông tư), `GET /he-thong-van-ban?classid=509&mode=1` (50 dòng mới nhất, `table.search-result`); chi tiết `GET /?pageid=27160&docid=<id>` (`td.col1` nhãn/giá trị) |
| datafiles.chinhphu.vn | Tệp PDF gốc | Link trong "Tài liệu đính kèm" của trang chi tiết |

Danh sách chỉ phân trang qua ASP.NET postback, nên crawler đọc trang 1 và **bắt buộc** dòng cũ nhất trang 1 cũ hơn
ngày bắt đầu khoảng quét. Nếu không phủ đủ (ví dụ lâu ngày không quét thành công), kết quả là `failed`, không phải "không có văn bản mới".
Không dùng website bên thứ ba, không dùng Puppeteer Stealth.

## Kết quả và mã thoát

| result | Khi nào | Mã thoát | Workflow |
|---|---|---|---|
| `updated` | Có văn bản mới đạt mọi cổng, đã lưu website + Drive | 0 | xanh, commit + deploy |
| `no_changes` | Mọi danh sách parse được, phủ đủ khoảng quét, không có văn bản mới thuộc phạm vi | 0 | xanh |
| `review_required` | Có văn bản liên quan nhưng metadata/PDF/toàn văn/phạm vi chưa đạt cổng tự động | 2 | **đỏ**, artifact chứa PDF + log |
| `failed` | Nguồn lỗi/đổi cấu trúc/không phủ đủ, tải Drive lỗi | 1 | **đỏ** |

Trạng thái ghi ở `public/data/legal-crawl-status.json` (hiện trên trang Thư viện). Hồ sơ chờ rà soát được giữ và xử lý lại
mỗi lần chạy cho đến khi nhập xong hoặc chủ dự án thêm số hiệu vào `relevance.json → dismissedNumbers`.

## Phạm vi

`relevance.json`: từ khóa trích yếu (`include`), từ khóa buộc rà soát (`reviewOnly`), cơ quan ban hành theo dõi (`issuers`).
Văn bản có trích yếu nêu số hiệu một văn bản đang có trong thư viện (sửa đổi/bãi bỏ) luôn chuyển rà soát.

## Toàn văn và PDF scan (tự động, không làm tay)

1. Trích lớp chữ từng trang bằng `pdfjs-dist`.
2. Trang ít hơn 30 ký tự (scan) → OCR tiếng Việt bằng Tesseract ngay trên GitHub Actions.
3. Cổng tự động — **chặn** khi: thiếu/sai thứ tự trang; còn trang không có chữ sau OCR; không xác nhận được số hiệu;
   OCR kém trên diện rộng (trung bình < 70% hoặc > 25% số trang OCR dưới 80%).
4. **Đạt** thì tự nhập: `text_status = "ocr-review"`, ghi chú nêu số trang OCR, confidence trung bình và từng trang dưới 80%
   (trong toàn văn có dòng ⚠️ ở đầu các trang đó) — cùng cách thư viện đang công bố TT99/TT91. PDF gốc luôn là căn cứ.
5. PDF ký số vẽ số hiệu dạng hình (ví dụ NĐ 399/2026): crawler tự OCR riêng trang 1 để xác nhận số hiệu.

## Google Drive (không chặn website, tự bù)

GitHub Secrets: `GDRIVE_SERVICE_ACCOUNT_JSON`, `GDRIVE_FOLDER_ID` (thư mục trong Shared Drive, chia quyền Content manager
cho email Service Account). Có secret: PDF gốc được tải lên và đọc lại kích thước + MD5 trước khi ghi link.
Chưa có secret: văn bản vẫn đăng website, tệp đánh dấu `drivePending`, trạng thái và Actions hiện cảnh báo;
mỗi lần chạy sau khi có secret, crawler tự tải bù và ghi link Drive. Không bao giờ ghi link Drive giả.

## Lệnh

```bash
npm run test:crawler        # kiểm thử offline bằng snapshot trong fixtures/
npm run crawl               # chạy thật (cần mạng tới vanban.chinhphu.vn; Drive qua secrets)
npm run crawl:verify        # gate dữ liệu crawler (cũng chạy trong scripts/verify-audit-assets.mjs)
npm run crawl:sync-initial  # sinh lại src/data/initial-decrees.ts từ decrees.json
```
