# Bàn giao thực thi — bổ sung sau walkthrough ngày 19/09

Đọc `../CODEX_WALKTHROUGH_MEDICAL.md` trước. File này quy định cách triển khai và cách nộp bằng chứng; không thay phạm vi trong walkthrough.

## 1. Chạy cổng kiểm nghiệm thu

Đã có chương trình thực thi `acceptance-gate.mjs`, không chỉ yêu cầu bằng văn bản. Chạy từ thư mục gốc:

```powershell
node medical-design/remediation-2026-09-19/acceptance-gate.mjs medical-design/acceptance/RELEASE/acceptance-report.json medical-design/acceptance/RELEASE/acceptance-scope.json medical-design/acceptance/RELEASE/evidence
```

Thay RELEASE bằng releaseId thực. Exit 0 nghĩa là hồ sơ báo cáo đủ cấu trúc, đúng phạm vi và file bằng chứng khớp hash; exit 1 là chưa đạt; exit 2 là tham số hoặc file đầu vào lỗi. Không thêm `|| true`, bỏ qua exit code hoặc in câu thành công cố định trong CI.

Baseline trong `acceptance-scope.json` có **12 văn bản, 40 MD, 14 mẫu, 32 nhóm kiểm thử và 2 deployment**. Copy baseline vào thư mục release, bổ sung tài liệu và attachment mới theo inventory đã chốt. Không được xóa mục baseline. Giữ scope trong commit review trước lần chạy nghiệm thu; SHA scope lấy từ `sha256(JSON.stringify(scope))`, không phải hash tùy ý của một file định dạng khác. Nếu thêm luật, cổng sẽ yêu cầu thêm kết quả tương ứng. Không chốt 12 là đủ pháp luật.

`acceptance-report.json` có cấu trúc:

```json
{
  "schemaVersion": 1,
  "sourceCommit": "SHA_40_KY_TU_THUC_TE",
  "corpusVersion": "CORPUS_VERSION_THUC_TE",
  "scopeSha256": "SHA256_CUA_JSON_STRINGIFY_SCOPE",
  "documents": [
    {
      "id": "tt-57-2025",
      "status": "passed",
      "sourceCommit": "CUNG_SHA_SOURCE",
      "corpusVersion": "CUNG_CORPUS_VERSION",
      "evidence": [
        { "path": "drive/tt-57-2025-readback.json", "sha256": "HASH_FILE_BAO_CAO_THUC" },
        { "path": "corpus/tt-57-2025-pages.json", "sha256": "HASH_FILE_KIEM_TRANG_THUC" }
      ]
    }
  ],
  "rules": [],
  "templates": [],
  "checks": [],
  "deployments": []
}
```

Ví dụ trên cố ý chưa đủ và sẽ thất bại. Các mảng còn lại phải chứa mọi ID trong scope, cùng cấu trúc record. ID deployment là URL đầy đủ trong scope. Mỗi record có status `passed`, `failed`, `blocked` hoặc `not_tested`; chỉ `passed` mới vượt gate. Không biến “không áp dụng” của một tiêu chí nghiệp vụ thành bỏ test: test applicability vẫn cần chạy và có kết quả.

Đường dẫn evidence tương đối với thư mục evidence. Cổng đọc bytes thực, kiểm SHA256, chặn path ra ngoài thư mục kể cả qua realpath/symlink, file trống, record trùng, lệch version và thiếu mục. Không nhúng hồ sơ riêng vào GitHub; evidence có nội dung nhạy cảm lưu ở kho nội bộ được phép, báo cáo công khai chỉ đưa chỉ mục đã lược bỏ thông tin riêng.

**Giới hạn quan trọng:** cổng kiểm toàn vẹn hồ sơ báo cáo, không xác nhận nội dung một screenshot/JSON là thật, không kiểm tính đúng của pháp luật, không tự vào Drive tải file. CI phải sinh report từ runner và giữ artifact gốc; reviewer mở bằng chứng, đối chiếu runId và bước kiểm. Không được sửa code gate, baseline hoặc tự điền boolean để làm xanh. Một file giả dù hash khớp vẫn không phải nghiệm thu hợp lệ.

## 2. Cần thu bằng chứng gì, theo nhóm

| Nhóm record | File bằng chứng tối thiểu phải sinh từ runner |
|---|---|
| documents | Metadata nguồn, report upload/readback với Drive fileId/parent/hash/size, inventory từng trang/phụ lục, report discrepancy và quyết định publish |
| rules | Input fixture độc lập, actual verdict, expected verdict, legal/evidence references và test applicability/thiếu/mâu thuẫn; mỗi MD có test riêng |
| templates | File output đúng định dạng, extract/render kiểm tra trường/case/bảng, SHA bản lưu Drive nếu có |
| checks | Runner result với tên test/thời gian/assertions/expected/actual; khi lỗi có screenshot/trace; NAV-01 phải gồm mọi viewport×entry×deployment, không chỉ một ảnh |
| deployments | Build-info lấy tại URL live, SHA/corpus khớp, run E2E trên URL đó, console/network report không chứa secret |

Các bằng chứng không được gộp thành một tệp “all passed” không có từng ca. Các nhóm compound như PDF-01, MD-03, NAV-01 cần report con N/N theo inventory, không dùng status tổng để bỏ qua trường hợp con.

## 3. Gói công việc cụ thể cho Antigravity

Thực hiện liên tục theo phụ thuộc, không chờ anh Huy xác nhận mỗi gói. Không gửi code kế toán cùng commit medical.

| Ticket | File chính | Việc phải nộp trước ticket sau |
|---|---|---|
| M00 | source-baseline.json, CI/build-info | Checkout canonical tái tạo UI live; giải thích chênh source/bundle; SHA thật |
| M01 | routes.ts, App.tsx, AppLayout.tsx | Test các điểm vào so sánh, trace lỗi nếu thoát medical; NotFound; giữ query/back/refresh |
| M02 | server auth/DB/jobs/Drive adapter | Migration + server thực; file test upload/readback khớp hash, retry không trùng, quyền sai bị chặn |
| M03 | registry, ingestion worker, corpus store | Đủ inventory scope; mọi file nguyên bản/converted phân biệt rõ; source conflict chưa duyệt không publish |
| M04 | library/reader/search | Reader/TOC/search dùng một cây; 12+ nút tải đúng file; không fallback summary; phụ lục tìm được |
| M05 | comparison engine/page | Ba chế độ, nguồn hai bên, coverage hai phía, split/merge/move; mọi cặp đã công bố được kiểm |
| M06 | tender import, cases, evidence, evaluator | Gói bất kỳ import được; MD01–40 không verdict tĩnh; task và chứng cứ lưu/reload đúng |
| M07 | products/assets/service/incidents | CRUD model/serial, ba lịch service, chứng từ và thu hồi theo lot; không dữ liệu giả production |
| M08 | templates/tools/export | T03 LOA/T04 matrix/T06 tiến độ thống nhất; 14 file hợp lệ và bảng tính có dữ kiện thực |
| M09 | chat API/prompt/citations/history | Câu ngoài mẫu, nhiều attachments, citations mở được, lỗi API trung thực, history persistent |
| M10 | acceptance/CI/deploy | Hai URL cùng release, mọi báo cáo N/N, cổng kiểm trả 0 và người rà kiểm nội dung bằng chứng |

M01 và M02 có thể thực hiện không phụ thuộc corpus; M04 cần M03; M05/M06 cần nguồn đã kiểm; M09 cần evidence store và evaluator. Không đợi một trang bị chặn để ngừng mọi phần khác. M00 không cho phép reset hoặc dọn checkout của người dùng.

## 4. Truy lỗi chuyển sang kế toán mà không đoán

Source cục bộ hiện map sidebar/bottom nav `/so-sanh` tới `ComparisonPage`, nên chưa có bằng chứng là bản route đó tự chuyển app. Không thay cả router kế toán. Khi tái hiện:

1. Ghi URL, viewport, sourceCommit, corpusVersion, service worker/cache version trước thao tác.
2. Ghi nhãn nút, href thực và điểm click; chụp trước/sau. Kiểm nút overlay/PortalSwitcher ở mobile.
3. Nếu pathname đổi sang root kế toán: truy callsite/link đó, sửa thành route medical dùng builder. Nếu pathname giữ medical nhưng nội dung thuế: kiểm selected pair/category/context và dữ liệu fallback. Đây là hai lỗi khác nhau.
4. Kiểm citation và link trong nội dung Markdown, không chỉ menu. Dùng resolver có namespace medical, không lấy link `/so-sanh` của accounting package.
5. Nếu chỉ cache cũ tái hiện: deploy đúng artifact, invalidation namespace medical; giữ notes/history của người dùng.
6. Test lại mọi entry thuộc NAV-01. Nếu không tái hiện đủ bằng chứng, report `not_reproduced`, không ghi `fixed`; R01 vẫn cần hoàn tất regression matrix.

## 5. Kiểm thử bộ hỗ trợ

```powershell
node medical-design/remediation-2026-09-19/contracts.test.mjs
node medical-design/remediation-2026-09-19/acceptance-gate.test.mjs
```

Lần bổ sung này: 17/17 test mới của gate đạt. Bộ 29 test hợp đồng trước đó vẫn là test tham chiếu. Fixture gate là dữ liệu tổng hợp, có nhãn SYNTHETIC, không lưu thành acceptance-report production. Không báo website đạt chỉ vì hai lệnh này chạy xanh.
