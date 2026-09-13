# Kiểm tra thuế Kiểu Việt — hồ sơ vận hành và hướng dẫn chi tiết

Cập nhật 14/09/2026. Tài liệu riêng cho nhánh kế toán; không thay đặc tả thiết bị y tế trong CODEX_WALKTHROUGH.md.

## 1. Vấn đề thực tế đã phát hiện

Trang có nhiều nội dung nhưng chưa dẫn người dùng từ câu hỏi đến hồ sơ có thể kiểm chứng. Các mẫu và câu trả lời dự phòng trong bản trước còn tự điền mã số thuế, quyết định, ngày, tỷ lệ hao hụt, số tiền xuất toán và khẳng định công ty đã tuân thủ. Nội dung đó không được dùng làm dữ liệu công ty.

Không giải quyết bằng cách viết thêm đoạn văn chung. Cần mỗi nghiệp vụ có: phạm vi → chứng từ → bước rà → đầu ra → xử lý ngoại lệ → người phụ trách → bản giải trình → bàn giao.

## 2. Phạm vi đã thực hiện

15 quy trình, 60 bước nghiệp vụ, 15 bảng CSV và 15 mẫu nháp tương ứng. Giữ nguyên danh mục 55 văn bản cũ. Không sửa kho hoặc app y tế.

| Quy trình | Điểm phải kiểm | Đầu ra |
|---|---|---|
| Gỗ theo lô | Nguồn mua, lâm sản, nhập 152, xuất đơn hàng, thành phẩm | Chuỗi lô → sản phẩm → giao hàng |
| Định mức nội thất | BOM, sản lượng, xuất/trả, phế liệu | Chênh lệch lượng và giá trị có căn cứ |
| 154/335 | Công việc thực hiện, nghiệm thu, kết chuyển 155/632, trích trước | Cầu nối dở dang và bảng trích–thực tế |
| Doanh thu | Sổ 511, hóa đơn, tờ khai, giao nhận | Bảng từng nguyên nhân chênh lệch |
| Đầu vào/thanh toán | Mua–nhận–hạch toán–trả tiền | GTGT và TNDN rà riêng theo kỳ |
| Liên quan/lãi vay | Quan hệ và bản chất công nợ, phạm vi, miễn trừ | Bảng công nợ và mô phỏng có điều kiện |
| Nợ bê tông | Hạn hợp đồng, thu hồi, hồ sơ đòi nợ, 2293 | Tuổi nợ và dự phòng cần rà |
| Nhân công/642 | Người–việc–chi trả, tài khoản, phân bổ | Bảng chi phí gắn đối tượng |
| Bê tông thương phẩm | Cấp phối, cân, mẻ, xe, ký nhận, trả/hủy | Cầu nối sản xuất–giao hàng–doanh thu |
| Tư vấn/ngoài tỉnh | Sản phẩm, nghiệm thu, chi phí, kê khai | Hồ sơ dự án và nghĩa vụ theo trường hợp |
| Vật liệu mua ngoài | Cát/đá/xi măng/thép, cân nhận, giá mua/cước | Bảng lượng–giá–điểm sử dụng |
| Cấu kiện đúc sẵn | Quy cách, lô, KCS, hỏng, 154/155/632 | Giá thành cống/bó vỉa/gạch theo lô |
| Xe và dầu | Chuyến/ca, km/giờ, cấp dầu, cước/bơm | Chi phí xe phân bổ theo đối tượng |
| Cừ Larsen | Bán/thuê/ép nhổ, xuất/thu hồi, mất hỏng | Vị trí cừ và giá trị luân chuyển |
| Khai thác khoáng sản | Pháp nhân/giấy phép, nguyên khai/chế biến, dùng nội bộ | Sản lượng và nghĩa vụ có phạm vi xác nhận |

VLXD có 7 quy trình riêng: nợ bê tông, bê tông thương phẩm, vật liệu mua, cấu kiện, xe/dầu, cừ Larsen, khoáng sản. Nội dung được đọc ngay và lọc riêng, không chỉ thêm tên ngành vào mẫu về gỗ.

## 3. Các file thực thi

### src/data/audit-procedures.ts

Nguồn dữ liệu duy nhất cho 15 hướng dẫn, mẫu và kịch bản. Mỗi quy trình có `records`, `steps[{title,action,output}]`, `exceptions`, `completion`, `columns`, `laws` và `pillar`.

`procedureDraft()` tạo nháp có ô trống: kỳ, đối tượng, kết quả từng bước, căn cứ đã đọc, chênh lệch, tài liệu thiếu, đề xuất và người rà. Tuyệt đối không đặt sẵn số hợp đồng, người ký, kết quả đoàn hay số liệu minh họa dưới danh nghĩa Kiểu Việt.

### src/components/tax-audit/AuditPreparationDesk.tsx

Tab đầu tiên của trang. Hiển thị 5 phần A–E, 4 bước mỗi hồ sơ, lọc 4 mảng, xuất CSV đúng cột của quy trình.

Tạo việc bằng Dexie transaction, gồm `work` và `events`:

```ts
const id = `${caseId}:procedure:${procedure.id}`;
await auditDb.transaction('rw', auditDb.work, auditDb.events, async () => {
  if (await auditDb.work.get(id)) throw Error('Đã lập hồ sơ');
  await auditDb.work.add({
    id, caseId, kind: 'task', title: procedure.title,
    pillar: procedure.pillar, owner, deadline,
    requestedBy: 'Chuẩn bị nội bộ', receivedAt: '',
    status: 'preparing', evidenceIds: [],
    response: procedureDraft(procedure, period),
    receipt: '', submittedAt: '', deliveries: [],
  });
  await logEvent(caseId, 'Lập hồ sơ theo quy trình', id);
});
```

ID ổn định chặn trùng. Người phụ trách bắt buộc; hạn chưa rõ để trống. Hồ sơ hiện có mở về nhật ký để chỉnh sửa và gắn chứng từ. Chỉ đếm số việc đã lập; không biến tỷ lệ đó thành mức tuân thủ thuế.

### src/components/tax-audit/AuditHandoffGuide.tsx

Thay nội dung tiếp đoàn tự khẳng định hạn hoặc “thương lượng 50/50” bằng 5 giai đoạn: xác định phạm vi; ghi yêu cầu; rà chênh lệch; lưu bàn giao; rà biên bản/kết quả. Từng giai đoạn có việc thực hiện và đầu ra. Nút mở nhật ký/kho luật hoạt động thật.

### src/data/tax-audit-templates.ts và tax-audit-defense-scenarios.ts

Sinh 15 mẫu và 15 hướng dẫn từ cùng nguồn dữ liệu. Giữ các trường mà giao diện đang dùng. Điều/khoản chưa xác minh cho kỳ để trống; link mở văn bản thay vì tạo `?dieu=undefined`. Các mẫu là tài liệu nội bộ, không giả biểu mẫu pháp định.

### src/components/tax-audit/TaxAuditAIChat.tsx

Bỏ `getOfflineDefenseResponse` và mọi câu trả lời tài chính viết sẵn như thể đã phân tích công ty. Thiếu key trả trạng thái chưa cấu hình. API lỗi hoặc không trả nội dung không sinh kết luận thay thế. Badge chỉ báo đã/chưa cấu hình, không khẳng định API đang hoạt động. Không thêm cơ chế tự gửi hồ sơ riêng lên AI.

### src/pages/TaxAuditPage.tsx

Tabs dùng state `auditTab`, mở mặc định `preparation`. Nút từ hướng dẫn chuyển chính xác sang `evidence-log`, `reconcile`, `legal-corpus`. Hiển thị số mẫu theo mảng dữ liệu thay vì số 8 cố định. Giữ bộ checklist cũ và chức năng hồ sơ/công cụ đã có.

## 4. Căn cứ và giới hạn nghiệp vụ

Trong lần kiểm cuối phát hiện thư mục `public/data/accounting-laws` không còn ở bản mã hiện tại dù component vẫn tham chiếu. Đã bổ sung quy trình khôi phục 29 văn bản/34 PDF gốc/1.251 trang từ nguồn Chính phủ, metadata ngày ban hành/hiệu lực, bản chép từng trang và liên kết tới các file Drive đã lưu. Không tải trùng 31 file đã có; 3 bản bổ sung được tải mới và đọc lại kiểm dung lượng. Hash xác minh bản local; việc đọc lại Drive trước đó chỉ kiểm dung lượng, không được gọi là đã so hash Drive.

Các script duy trì: `restore-accounting-laws.mjs` giải URL đính kèm chính thức, kiểm số hiệu và chữ ký định dạng PDF; `ocr-accounting-corpus.mjs` đọc các trang scan, giữ chất lượng OCR và cờ chưa rà; `verify-audit-assets.mjs` kiểm file, SHA256 và thứ tự trang. CI chạy kiểm tài sản trước build để chặn phát hành component trỏ tới thư mục luật đã mất. Khi chạy lại phục hồi phải giữ bản chép đã OCR cùng hash, không thay bằng tóm tắt AI.

Đã kiểm lại thuộc tính nguồn Chính phủ của [Luật Quản lý thuế 108/2025/QH15](https://vanban.chinhphu.vn/?docid=216541&pageid=27160) và [Nghị định 320/2025/NĐ-CP](https://vanban.chinhphu.vn/?docid=216219&pageid=27160). Việc có văn bản không đủ để kết luận áp dụng cho toàn bộ các kỳ. Kỳ kiểm tra của doanh nghiệp vẫn phải lấy từ quyết định thực tế.

Không gán tỷ lệ hao hụt, ngưỡng thanh toán, thuế suất hay hạn thủ tục cố định trong hướng dẫn. Không mặc định TNDN vãng lai 1% cho mọi công trình. Không xem khoản phải thu liên quan là vay. Không xem mọi vật liệu cát đá mua ngoài là hoạt động khai thác.

Dữ liệu công việc và file hiện vẫn lưu trên trình duyệt; cần dùng sao lưu để chuyển máy. Trạng thái bàn giao là nhật ký nội bộ, không tự gửi hồ sơ tới cơ quan thuế. Trang luật OCR chưa rõ vẫn phải mở bản PDF gốc; đợt sửa này không chứng nhận toàn bộ kho đã đúng hiệu lực/đủ chất lượng OCR.

## 5. Kiểm thử và điều kiện tiếp tục cho Antigravity

Chạy:

```powershell
npm run build
node scripts/test-audit-procedures.cjs
$env:AUDIT_TEST_URL = 'https://bombeodeptrai.github.io/Tra-cuu-ke-toan-kieu-viet/'
node scripts/test-audit-procedures.cjs
```

Script dùng trình duyệt kiểm thử riêng và tên nhân sự thử nghiệm. Kiểm toàn bộ 15 quy trình/60 bước; tạo 15 hồ sơ, tải 15 CSV; lưu qua reload; lọc đủ 7 VLXD; mở công việc; mẫu không có mã số thuế giả; nhánh thiếu API key không trả lời giả; tách đợt; mobile 390px không tràn ngang; thu console errors/page errors.

Báo cáo ghi tại `test-results/audit-20260914/local.json` và `live.json`, kèm ảnh desktop/mobile. Chỉ chốt live khi báo cáo live của bản phát hành mới không có lỗi. Kiểm thử thiếu key không thay kiểm định độ đúng câu trả lời của mô hình đang dùng.

Không chạy lại các script biến đổi một lần `fix-audit-content-20260914.cjs`/`integrate-audit-guide.cjs` trên mã đã sửa. Khi phát triển tiếp, sửa nguồn TypeScript và chạy test. Không phục hồi fallback giả để làm test chat “có câu trả lời”. Không thêm số doanh nghiệp vào các mẫu bằng AI.

## Bổ sung chuỗi xử phạt và hướng dẫn nhập liệu

Đã tải bản gốc NĐ 102/2021 (docid 204477), NĐ 310/2025 (216102), NĐ 291/2026 (218956) từ vanban.chinhphu.vn; lưu local và Drive, chép đủ 45 trang. Khi đối chiếu NĐ 125/2020 phải xét chuỗi sửa đổi và thời điểm hành vi; không tự dùng bản mới cho mọi kỳ cũ.

`AuditCalculations.tsx` bổ sung hướng dẫn nguồn chứng từ, chuẩn hóa đầu vào và đọc kết quả cho cả 7 công cụ. Không nhập số dư cuối kỳ TK 511 sau kết chuyển thay doanh thu; đối chiếu 154 phải xét luân chuyển qua 155; công nợ đến hạn và điều kiện dự phòng cần kiểm riêng.

Kho bổ sung có 1 trang OCR chưa đọc đủ (TT 91/2026, trang 52); bản PDF gốc vẫn có đủ trang. Các trang OCR độ tin cậy thấp phải đối chiếu bản gốc, không chứng nhận bản chép là toàn văn đã kiểm duyệt.
