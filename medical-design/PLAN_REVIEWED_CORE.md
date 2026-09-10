# Kế hoạch hoàn thiện web thiết bị y tế Kiểu Việt theo web kế toán thực tế

## A. Quyết định triển khai sau khi đọc code và kiểm tra live

Đích bàn giao là một webapp dùng được: Antigravity tự tải file luật thật, lưu vào Google Drive của anh Huy, đọc lại file đã lưu, trích và hiển thị toàn văn trong app; trên đó có thư viện, tìm kiếm, ghi chú, biểu mẫu, so sánh và chatbot AI tương đương web kế toán. Thêm nghiệp vụ mua bán–dự thầu–giao lắp–bảo hành và nhập khẩu–đứng tên lưu hành–phân phối. Không bàn giao danh sách link thay cho tài liệu và chức năng.

**Đã có app y tế trên live tại `/Tra-cuu-ke-toan-kieu-viet/med-app/`. Tiếp tục hoàn thiện app này, không tự tạo một website thứ ba.** Trong checkout hiện tại chưa tìm thấy source project y tế; checkout `C:/Users/HUY/Documents/Codex/Tra-cuu-ke-toan-kieu-viet` có bản build tại `public/med-app/`. Antigravity phải tìm đúng source/build job đã tạo bản live, xác định commit và package trước khi sửa. Không chỉnh trực tiếp JS minified rồi xem đó là source. Nếu source chưa được đưa vào repo, đưa source hiện có vào repo có build tái lập; chỉ scaffold khi đã xác nhận không còn source, giữ URL `/med-app/` và dữ liệu đang có.

Trong các phụ lục phía sau, `medical-device-app/` là tên thư mục đề xuất trước khi thấy bản live. Nay dùng `MEDICAL_ROOT` trỏ tới source thực tế được xác minh. Các file `src/...`, `server/...`, `data/...` thuộc MEDICAL_ROOT; không sửa nhầm app kế toán. Mục A–L là kế hoạch thực thi chính; phụ lục giữ code engine, 40 nhóm, 14 mẫu và nghiên cứu nguồn để triển khai đầy đủ.

Không coi tên phòng khám, thiết bị, số lưu hành, gói thầu, doanh thu hoặc nhãn “đạt” đang hiện trên live là dữ liệu doanh nghiệp đã được xác minh. Giữ phần Phòng khám Hòa Đức đang có; không xóa hoặc tự mở rộng thành phần mềm chẩn đoán. Phân biệt dữ liệu minh họa/chưa xác minh/thực tế có chứng từ trước khi tính kết quả. Không sửa app kế toán hoặc dữ liệu Drive kế toán trong nhiệm vụ thiết kế y tế này.

## B. Bằng chứng kiểm tra hiện trạng

Kiểm ngày10/09/2026 bằng trình duyệt trên hai app và đọc source ở workspace. Các nhận định dưới đây là kiểm chức năng/cách tổ chức nội dung; không phải xác nhận tính đúng của mọi phát biểu pháp luật đang xuất hiện trên web.

| Phần đã xem | App đang làm gì | Hệ quả cho kế hoạch |
|---|---|---|
| Trang chủ kế toán | Tìm nhanh, danh mục, tiện ích, văn bản mới; tiêu đề55 nhưng một thẻ ghi39 | Mọi bộ đếm từ cùng manifest, không hardcode nhiều chỗ |
| Thư viện kế toán | Lọc lĩnh vực, loại, năm; list/grid; xem trước và bookmark | Kế thừa trải nghiệm này, thêm tình trạng bản gốc/Drive/toàn văn |
| TT99 trên live | Có tab Toàn văn gốc/Tóm tắt AI/Điểm mới; tải Drive; mục lục; A-/A+; hỏi AI | Giữ đủ chức năng; thay nguồn nội dung và xử lý fallback |
| Nội dung TT99 đã đọc | Cuối vùng Toàn văn gốc có dòng tự ghi “văn bản giả lập cho năm 2025”; có tiêu đề “TOÀN VĂN ... (TRÍCH YẾU)” | Chứng cứ cụ thể rằng nhãn Toàn văn không bảo đảm nội dung gốc; phải kiểm lineage từ file |
| So sánh kế toán | UI ghi662 điểm/55 văn bản, chọn nhóm, trước/sau, tác động, ví dụ, nhảy Điều và chat riêng | Giữ các lớp tương tác, kiểm riêng nguồn của từng bên; không lấy số lượng điểm làm độ đúng |
| Checklist thuế |55 mục/8 nhóm, ưu tiên, mở rộng chi tiết, hồ sơ, bước rà soát, rủi ro và giải trình | Mỗi tiêu chí y tế phải có chiều sâu tương tự, thêm fact/evidence và5 trạng thái |
| Trang kiểm tra thuế |8 tab: đối chiếu số liệu, hồ sơ/sổ yêu cầu, checklist, rủi ro, lộ trình, quyền,8 mẫu, AI | Map sang công việc y tế tại mụcD; không làm40 thẻ mô tả là xong |
| Biểu mẫu kế toán |25 mẫu, lọc, tìm, preview, tải | Giữ preview/tải; nghiệm thu file thật thay toast thành công khi mới click |
| Tiện ích kế toán |5 tab: lịch, khấu hao, TNCN, Gross–Net, chậm nộp | Y tế cần công cụ có input/output/căn cứ, không chỉ bài hướng dẫn |
| Chat kế toán |Session/lịch sử, gợi ý, file/ảnh, dán ảnh, streaming | Kế thừa đầy đủ; bổ sung retrieval toàn kho và xử lý tất cả attachments |
| Sổ tay/hướng dẫn |Quote+note, lịch sử tìm; cẩm nang; widget góp ý/PDF | Giữ và làm đồng bộ thật, widget không được gửi snippet thay lưu file |
| Trang y tế hiện tại |7 menu chính, chưa thấy menu chat/sổ tay/so sánh riêng | Bổ sung chức năng còn thiếu, không đổi tên tính năng để coi đã có |
| Thư viện y tế live |Ghi12/12 toàn văn; VBHN08 chỉ có nút Điều4/21/44, các mục khác1–2 điều; link nguồn ngoài | Đây là trích đoạn/diễn giải, chưa đáp ứng toàn văn từ Drive |
| Dashboard y tế và MD |Dashboard ghi40/40 pass; trang MD hiển thị39 đạt+1 cần rà soát | Tính cùng nguồn assessment; không mặc định đạt |
| Đấu thầu y tế |3 gói, ma trận mẫu4 tiêu chí, tab giá/bảo lãnh và hồ sơ | Chuyển từ nội dung hiển thị sang nhập E-HSMT/catalogue, đối chiếu có chứng cứ |
| Danh mục y tế |8 model, phân loại, nhóm, giá, số lưu hành, LOA | Xác minh nguồn từng trường; không suy dữ liệu đã đúng vì đang hiện sẵn |

**Giới hạn kiểm tra:** đã mở các màn hình và thao tác tab/chi tiết, đọc code luồng liên quan; chưa thử hết25 download, chưa xác minh quyền/tất cả file Drive, chưa gửi hồ sơ thật vào AI, chưa kiểm đúng/sai toàn bộ luật, chưa kiểm live mọi nút/console. Vì vậy không gọi lần rà soát này là nghiệm thu app hoặc “0 lỗi live”.

## C. Nguyên nhân cần sửa có vị trí code

| Nguồn source kế toán | Vấn đề quan sát được | Cách sửa ở y tế |
|---|---|---|
| `DecreeDetailPage.tsx:181–183` | Nhánh Pure analysis gán cùng text cho summary và fulltext | Endpoint/schema riêng, không suy loại nội dung bằng heading |
| `DecreeDetailPage.tsx:212` | Tải Markdown lỗi thì dùng content hoặc summary làm fulltext | Hiện lỗi tải + retry + bản gốc; tuyệt đối không đổi summary thành fulltext |
| `TableOfContents.tsx` | Parse bằng regex, ID `dieu-N`, fallback tìm text | Anchor gồm document/version/section/Điều; tránh Điều5 nhảy Điều50 và Điều trùng |
| `scripts/full_sync_drive.cjs:193` | Thiếu PDF thì tạo PDF từ Markdown | Loại nhánh tạo bản gốc; chỉ upload bytes nguồn đã kiểm |
| `scripts/full_sync_drive.cjs:224` | Log đủ100% vô điều kiện | Tính từ records readback/hash verified, thiếu thì exit lỗi |
| `scripts/generate-full-content.js` | Ghép summary và toàn văn chung Markdown, giữ nội dung cũ khi fetch lỗi | Pipeline typed, lineage, version; không lồng tóm tắt qua nhiều lần chạy |
| `pdf-extractor.ts:26` | Chỉ lấy20 trang đầu và dồn whitespace | Worker parse tất cả trang; giữ layout bảng/phụ lục; OCR trang scan |
| `FeedbackWidget.tsx` | Payload đính kèm gửi metadata+previewSnippet, không bytes file gốc; có gửi email | Upload file thật và job ingest; không xem gửi góp ý là nhập luật; không sao chép tự gửi email |
| `rag.ts:52` | Chỉ lấy fulltext cho2 văn bản đầu | Index toàn corpus, truy hồi đúng đoạn theo câu hỏi/ngày/role |
| `useChat.ts` | Chọn attachment đầu tiên; nhánh file bỏ qua RAG | Xử lý tất cả attachment được nhận và kết hợp corpus; file lỗi phải báo từng file |
| `notes-store.ts` | Local rồi POST Sheets, catch chỉ warn; delete local | Sync state pending/synced/failed, readback và retry; delete đồng bộ theo quyền |
| `FormsPage.tsx` | Toast thành công ngay khi tạo click download | Ghi bắt đầu tải; verify tải thật trong test, tránh hứa hoàn thành trước response |
| `decree-store.ts` | Merge JSON/Sheets, chuẩn hóa ID lỏng, blacklist ID, tự gán lĩnh vực | Manifest phát hành một nguồn; mapping ID chuẩn; nguồn mới staging trước publish |
| `EvidencePanel.tsx`, `AuditRequestLog.tsx` | Có INITIAL data và verified/status sẵn trong source | Demo tách dữ liệu thật; trạng thái lấy từ sự kiện/bằng chứng, không seed pass |

Tên “fakeIds” trong code không phải căn cứ xác định văn bản giả về pháp lý. Không sao chép blacklist hoặc dữ liệu mô tả của app cũ thành sự thật trong app mới.

## D. Ma trận kế thừa chức năng và màn hình đích

Giữ logo, bố cục sidebar/header, thao tác dễ dùng, cỡ chữ đọc luật và cách nhảy căn cứ của kế toán. Trang chủ y tế ưu tiên tìm luật/hỏi AI và việc phải xử lý; số liệu doanh nghiệp chỉ hiện khi có dữ liệu hợp lệ. Menu gom nhóm để không thành hàng dài trên mobile.

| Màn hình đích | Hành vi phải có | Nguồn kế thừa |
|---|---|---|
| Tổng quan |Tìm nhanh, văn bản mới kiểm chứng, việc thiếu hồ sơ/hạn, truy hồ sơ chặn thu tiền |HomePage + dashboard y tế |
| Thư viện pháp luật |Lọc loại/chuyên đề/năm/hiệu lực/đã số hóa, grid/list, preview, yêu thích |LibraryPage/DecreeCard |
| Chi tiết văn bản |Toàn văn mặc định; mục lục; tìm mọi nội dung; A-/A+; in; tải file+phụ lục; lưu quote; hỏi AI; version |DecreeDetailPage/TableOfContents |
| Tra cứu toàn kho |Tìm số hiệu lẫn nội dung điều khoản/phụ lục; snippet có nguồn; URL giữ filter; lịch sử |SearchPage/useDecrees |
| So sánh pháp lý |Cũ–mới, liên văn bản, hồ sơ–yêu cầu; chọn nhóm/văn bản; quote hai bên; tác động+việc làm; chat theo cặp |ComparisonPage/DiffViewer/DiffAIChat |
| Hỏi đáp AI |Chat chung, chat văn bản, chat so sánh, chat hồ sơ; history, tiếp nối, attach file/ảnh, paste, stream/stop/retry |ChatAIPage/useChat/TaxAuditAIChat |
| Sổ tay |Bookmark, quote+note gắn version, lịch sử tìm, tìm/lọc, mở lại đúng đoạn, sync trạng thái |NotesPage/notes-store |
| Biểu mẫu |Preview, điền, xuất đúng định dạng, gắn vào case, version và nguồn mẫu |FormsPage + templates |
| Tiện ích |Giá vốn/báo giá theo cấu hình; tính bảo lãnh từ điều kiện gói; lịch giấy tờ; tiến độ giao; bảo hành; VAT theo căn cứ |ToolsPage cách bố trí input/result |
| Hồ sơ tuân thủ |40 nhóm chi tiết, scope, evidence, verdict, người/hạn, mở rộng/in/export |TaxAuditPage + EvidencePanel |
| Đấu thầu |Nhập E-HSMT+catalogue, chọn model/config, ma trận, làm rõ, bảo lãnh/giá, xuất |Bản y tế hiện có + ReconciliationPanel |
| Thiết bị/giao nhận/bảo hành |Model/config, serial/lô, hồ sơ lưu hành, giao lắp, nghiệm thu, recall |Bản y tế hiện có + nghiệp vụ mới |
| Hướng dẫn/cài đặt/quản trị |Cẩm nang đúng app đã làm; người/quyền; trạng thái Drive/ingest/AI; quản trị nguồn |GuidePage/SettingsPage/FeedbackWidget |

Trong hồ sơ tuân thủ, mỗi nhóm bắt buộc có: (1) phạm vi và ngày áp dụng; (2) hồ sơ phải có; (3) bước kiểm từng trường; (4) lỗi hay gặp; (5) dữ kiện đang có; (6) kết quả kèm điều khoản; (7) hướng xử lý/giải trình ở dạng nháp; (8) owner/deadline và mẫu liên quan. Không mặc định giấy tờ đều bắt buộc cho mọi vai trò; không lấy số dòng văn mẫu làm độ sâu.

Map8 tab thuế sang y tế: Đối chiếu dữ liệu/cấu hình; Hồ sơ và sổ yêu cầu bổ sung; Checklist tuân thủ; Đánh giá vấn đề chưa giải quyết; Lộ trình theo hạn giao/thầu; Quy trình làm rõ và trách nhiệm; Mẫu hồ sơ; AI phản biện. Tính timeline từ ngày thực tế của case, không cố định tháng10 hoặc hạn30/09 của kiểm tra thuế.

## E. Tải thật, lưu Drive thật, đọc đúng file đã lưu

### E1. Khởi tạo đúng kết nối

Tìm cấu hình Drive đang dùng bằng code và metadata, kiểm đúng tài khoản/thư mục của anh Huy, quyền ghi hiện có. Không in secret, không chạy script cũ nguyên khối vì có reset Sheets/thay đổi sharing. Tạo thư mục y tế con tại vị trí đã xác minh; không ghi đè thư mục kế toán. Chỉ khi thiếu kết nối/quyền mới gom hỏi đúng thông tin đó một lần; không nhờ người dùng tự tải hàng chục văn bản.

Thư mục: `KieuViet_ThietBiYTe/01_BanGoc/<doc>/<version>/`, `02_ToanVan/`, `03_PhuLuc/`, `04_KiemChung/`. File PDF/DOC/DOCX gốc giữ nguyên byte. File dẫn xuất HTML/JSON/OCR/PDF chuyển đổi ghi rõ loại, nguồn Drive ID và hash; không gọi PDF tạo từ Markdown là bản gốc. Drive không tự bật public. Backend phục vụ theo quyền hoặc cache đã kiểm; người đọc vẫn đọc trực tiếp trên app.

### E2. Job ingest toàn danh mục

1. Tạo corpus manifest đầy đủ từ phạm vi pháp luật ở phụ lục, mở rộng chuỗi sửa đổi/phụ lục cần thiết. Không cố định12 vì live đang có12; không ép55 vì kế toán có55.
2. Tìm nguồn và tải file gốc thật. Giữ chính sách nguồn/link của Kiểu Việt: link người dùng hethongphapluat hoặc Drive; không dùng nguồn bị cấm. Bản gốc có nguồn chính thức được xác minh phải có provenance, không tự dựng đường dẫn.
3. Inspect bytes/MIME/parser/số hiệu/phiên bản; loại HTML challenge HTTP200, file rỗng, sai luật, bản tóm tắt.
4. Upload vào Drive theo documentId+versionId+hash; nhận fileId thật. Read metadata, tải lại từ Drive, so hash. Có ID không đủ chứng minh thành công.
5. Parse chính file đọc lại từ Drive. PDF text lấy mọi trang, PDF ảnh/mixed OCR theo trang; DOC/DOCX dùng parser phù hợp. Giữ thứ tự đoạn, bảng, footnote, phụ lục, dấu câu và locator. Không Math.min20; không flatten toàn bộ whitespace.
6. Đối soát với original: trang, mục lục, bảng/phụ lục, chữ/số trọng yếu, đoạn cuối. Expected inventory lập từ bản gốc độc lập với output parser. Lỗi OCR chờ sửa có đối chiếu; AI không tự viết đoạn thiếu.
7. Upload toàn văn+report về Drive, ghi database; dựng cache và chỉ mục theo sourceHash. Duyệt nội dung rồi publish version nguyên tử; lỗi giữ version cũ.
8. Duyệt web từng tài liệu/phần; tải file từ nút app, kiểm lại hash; thử tìm điều/phụ lục và citation chatbot. Báo N/N thực tế.

Mỗi bước lưu checkpoint/inputHash/outputHash/error/attempt. Khi lỗi bước7, resume từ7, không tải/upload lại toàn bộ. Có khóa job chống hai lần chạy tạo bản trùng. Reuse file chỉ khi metadata/hash/parent/version đúng, không reuse chỉ vì cùng tên.

### E3. Antibot và nguồn lỗi

403/CAPTCHA/paywall: ghi lỗi cụ thể và chuyển nguồn được phép, không retry cùng cách vô hạn, không vượt kiểm soát truy cập.429/5xx/lỗi mạng: retry hữu hạn có backoff/Retry-After. Trình duyệt thông thường có thể tải khi được truy cập hợp lệ. Tiếp tục các văn bản độc lập, gom danh sách còn vướng; không tự giảm mẫu số, không bịa toàn văn, không báo xong. Website đã nhập dữ liệu đọc bản nội bộ, nên nguồn ngoài chặn lại không làm mất chức năng.

### E4. Contract tài liệu

Lưu `documentId`, `versionId`, `originalDriveFileId`, `fullTextDriveFileId`, `attachmentDriveIds`, `sourceHash`, `fullTextHash`, `originalMimeType`, `originalBytes`, `sourceRecordId`, `pageCount`, `sectionInventory`, `verificationRecordId`, `releaseId`. Tách acquisition/extraction/publication khỏi hiệu lực luật. FullText có cấu trúc sections/blocks/tables/attachments, mỗi block gắn trang/locator và nguồn.

Toàn văn và commentary là hai loại tài sản/API khác nhau. Fetch fulltext thất bại thì hiện lỗi+retry+bản gốc, không dùng summary. Không kiểm loại nội dung bằng dấu “CỘNG HÒA” vì summary/PDF giả cũng chèn được. Không xóa dòng “giả lập” rồi giữ phần còn lại để lách kiểm; thay bằng nội dung trích từ bản thật có bằng chứng.

## F. Thiết kế đọc luật và tìm kiếm

`LegalDocumentPage`: header tên/số hiệu/hiệu lực/phiên bản/trạng thái số hóa; các nút tải bản gốc, phụ lục, in, yêu thích và hỏi AI. Tabs: Toàn văn / Phân tích / Đối chiếu; không có bản thật thì trạng thái rõ, không nội dung giả. Desktop mục lục bên trái, nội dung chính và panel hỏi AI mở theo nhu cầu. Mobile mục lục dạng drawer, toolbar gọn, chữ14–16px trở lên; bảng cuộn riêng.

Anchor dùng documentId/versionId/path, ví dụ `doc:version:chapter:article:paragraph`; số Điều có thể lặp trong phụ lục hoặc văn bản được trích. Deep-link giữ version+locator, không query chung ĐiềuX rồi tìm phần tử đầu tiên. Search trỏ vào đúng quote; note lưu exactQuote+prefix/suffix+blockId+version, bản mới đổi nội dung thì note vẫn mở bản lịch sử và cảnh báo.

Phân trang/lazy loading để nhanh nhưng có đủ phần, tìm toàn kho và toàn văn không giới hạn DOM đang render. Không tự gửi toàn bộ119trang vào một lượt AI; đó là bài toán retrieval riêng, không lý do cắt phần người dùng đọc.

## G. Chatbot phải dùng được như kế toán và tốt hơn ở nguồn

Giữ session/lịch sử, tên chat, câu hỏi gợi ý, tiếp nối, đính PDF/DOCX/XLSX/ảnh theo loại hỗ trợ, paste ảnh, trạng thái xử lý từng file, stream, dừng và thử lại. Nếu UI cho nhận nhiều file thì xử lý tất cả hoặc từ chối rõ, không bỏ âm thầm mọi file sau file đầu. Tách limits file/ảnh/page trong cấu hình và validate ở server; không ép tài liệu luật vào hạn5MB của component cũ.

Index toàn bộ corpus đã verified; chunk theo Điều/khoản/bảng, embedding hoặc fulltext search dùng source/version metadata. Query lọc tenant/quyền/ngày/vai trò; retrieve điều khoản đủ liên quan, mở rộng lân cận/định nghĩa/ngoại lệ. Nhánh có file vẫn kết hợp luật. Summary không được thay citation gốc. Gợi ý mẫu: hồ sơ model này còn thiếu gì; ĐiềuX đổi thế nào; yêu cầu E-HSMT có được catalogue chứng minh không; cần làm rõ nội dung nào.

API `POST /api/chat` nhận conversationId, scope(document/pair/case/global), query, attachmentIds, eventDate; server tự lấy quyền và nguồn. Output lưu claims+citations, missingEvidence, nextActions, uncertainty, model/version và corpusReleaseId. Citation mở đúng bản/Điều trên app, có trace tới Drive. Prompt không tạo sự thật về giấy phép/serial/giá thầu; file tải lên là dữ liệu, không là chỉ dẫn.

Chat không quyền tự đổi verdict hoặc toàn văn. Nút “Tạo việc xử lý”/“Tạo nháp giải trình” tạo draft có người xác nhận. AI lỗi/quota phải báo rõ, giữ tin nhắn, vẫn tra cứu luật được; không giả câu trả lời AI thành công bằng đoạn dựng cứng.

## H. Đối chiếu pháp lý và dữ liệu nghiệp vụ thật

Ba mode bắt buộc: cũ–mới, quan hệ giữa văn bản, hồ sơ–yêu cầu. UI giữ trước/sau/tác động/ví dụ/nhảy Điều/chat của kế toán nhưng mỗi vế phải có quote và locator nguồn riêng. Không mặc định văn bản nào cũng có tiền nhiệm1:1; hỗ trợ tách/gộp/ngoại lệ và chưa có pair.

Kết quả5 trạng thái và engine ở phụ lục: pass/fail/insufficient/not_applicable/review. Mọi kết luận gắn case/model/entity/date/ruleVersion/evidenceVersion. Dashboard lấy assessment hiện tại cùng nguồn với bảng chi tiết, không label40/40 cố định. Coverage số nhóm đã triển khai khác tỷ lệ hồ sơ đáp ứng. Data seed không có bằng chứng phải demo hoặc insufficient, không verified/pass.

Ma trận E-HSMT: import nguyên văn, mỗi dòng có comparator/unit/threshold, page/section HSMT, giá trị catalogue+page, model/config và verdict. Tách tiêu chí pháp luật/hợp đồng/hãng/nội bộ. Chưa có E-HSMT thật không gọi các con số đang có là gói thầu thật. Các thời hạn24–36tháng, có mặt2–4giờ, chạy72giờ phải lấy từ tài liệu của gói/hãng, không hardcode thành nghĩa vụ chung.

Danh mục hiện có MD01–MD40 và14 mẫu trên live khác nội dung mapping trong bản kế hoạch trước. **Không ghi đè theo số thứ tự.** Tạo `legacyRuleMap` và `legacyTemplateMap` dựa trên ý nghĩa; giữ ID/version cũ, tách/gộp bằng mapping; hồ sơ mới dùng rulepack mới, hồ sơ cũ không bị đổi nghĩa âm thầm. Mẫu liên danh/LOA hiện có không xóa để ép tổng14;14 mẫu phụ lục là mức tối thiểu chức năng, bổ sung/giữ mẫu hữu ích đã có và thống kê theo manifest thực.

## I. Kế hoạch sửa từng file theo thứ tự

Antigravity ghi `reports/source-baseline.json` gồm MEDICAL_ROOT, source commit, package, build command, baseURL và manifest assets đang live. Nếu tên file thực khác bảng, map và ghi lại; không tạo file không được import chỉ để đạt checklist.

| Nhóm file trong MEDICAL_ROOT | Việc thực thi cụ thể |
|---|---|
| package/vite/router/deploy workflow | GiữURL/med-app; lazy routes; build reproducible; backend config riêng; preserve app kế toán |
| adapters/drive/{client,folders,upload,download,metadata} | Quyền server, đúng folder, upload/readback/hash, không public mặc định |
| jobs/ingestLegalCorpus; services/legal/{acquire,inspectAsset,extractFullText,verifyCompleteness,publishCorpus} | Thực hiện E1–E4, tất cả tài liệu/phụ lục, checkpoint/resume |
| db migrations/assets/documents/versions/blocks/releases | Drive lineage, hash, typed tài sản, immutable versions, tenant và indexes |
| routes/legalContent,legalDownload | Đọc đúng fulltext; stream fileDrive/cache với quyền, MIME/tên đúng; không fallback summary |
| pages/LegalLibraryPage,LegalDocumentPage; components/FullTextViewer,OriginalDocumentViewer,TableOfContents | UI đọc luật F, preview, version, download, quote |
| pages/SearchPage; services/search | Full corpus index, exact ID, nội dung/phụ lục, search hits+anchors |
| pages/ComparePage; components/ClauseCompare,RelationsPanel,DiffChat | Ba mode, cặp có nguồn, chọn nhóm, tác động, hỏi AI |
| pages/ChatAIPage; hooks/useChat; services/ai | Chat G, all attachments, corpus, cancel/retry, citation validation, server key |
| pages/NotesPage; services/notes; sync queue | Sync trạng thái thật, version quote, phân quyền, readback/retry |
| pages/TemplatesPage; services/export; data/templates | Preview/điền/file thật, mapping mẫu cũ, template version; không hứa download thành công trước kiểm |
| pages/ToolsPage; services/calculators | Input/output units/currency, date/ruleVersion, export; không nhúng số liệu mẫu vào production |
| pages/ComplianceCasePage; services/evaluate/applicability/summarize | Đủ40 nhóm sâu theo D,5verdict, required rules, facts/approvals |
| pages/TenderPage,DeviceDetailPage,DeliveryPage,ServicePage | CRUD thật, upload chứng cứ, matrix, gate giao/recall, serial/lô |
| pages/GuidePage,SettingsPage,admin/IngestionPage | Hướng dẫn đúng chức năng; source statuses; cấu hình quyền/Drive/AI; không expose secrets |
| data/demo và legacy mappings | Tách dữ liệu chưa xác minh, giữ lịch sử, chuyển model/thầu/nhóm đúng nghĩa |
| scripts/verify-drive-corpus,verify-corpus,audit-corpus-live | Toànmanifest,N/N thật; hash/body/tab/anchor/download/chat |

Phụ lục code phía sau cung cấp types, evaluator và summarize. API cần runtime validation/RBAC/idempotency/optimistic concurrency; code mẫu không thay phần tích hợp database và xác minh nguồn.

## J. Thứ tự triển khai không làm nhỏ giọt

1. **Chốt source và snapshot hiện trạng:** xác định source của/med-app, backup manifest/build/dữ liệu; kiểm nguồn các trạng thái/giá/giấy phép đang có, không xóa dữ liệu gốc.
2. **Dựng pipeline và chạy cả corpus:** upload Drive thật/readback/trích toàn văn/completeness; chạy theo manifest toàn bộ. Xử lý hết hàng đợi nguồn, không dừng ở12 đoạn minh họa.
3. **Thư viện–đọc–tìm–ghi chú:** nhập đủ dữ liệu đã kiểm, toàn văn đúngfile, anchor/notes/search/download. Đây là nền cho đối chiếu và AI.
4. **Đối chiếu và chatbot:** truy corpus đúngversion; ba mode; file/ảnh và lịch sử; citation bấm được; không copy fallback sai của kế toán.
5. **Hoàn thiện nghiệp vụ:** mapping legacy,40nhóm, mẫu cũ+14mẫu tối thiểu, công cụ, thầu, giao/bảo hành/thu hồi/dòng tiền; dữ liệu thực có quyền.
6. **Kiểm nghiệm toàn bộ và triển khai:** build/test/live theo K; giữURL hiện có, không báo hoàn thành riêng vài màn hình rồi bỏ phần còn lại.

Trong mỗi giai đoạn có test để phát hiện sớm; các giai đoạn không phải xin anh Huy duyệt từng bước hoặc chia nhỏ bàn giao. Thông tin chưa có quyền truy cập được gom đúng vấn đề; không thay nhiệm vụ thực thi bằng bài giải thích vì sao antibot khó.

## K. Nghiệm thu cụ thể, bằng chứng máy kiểm được

| Lớp | Điều kiện bắt buộc |
|---|---|
| Source/build | Build từ source đúngcommit tái lập, manifest live đúngrelease; app kế toán không bị thay nội dung |
| Drive | N/N originals tải lại được, ID/parent/MIME/size/hash đúng; không chỉ link tồn tại |
| Fulltext | N/N đối soát phần/trang/bảng/phụ lục và source lineage; không summary/giả lập dưới nhãn gốc |
| Web | N/N đọc/tìm đầu–giữa–cuối/phụ lục; anchor chính xác; in/tải/note/preview hoạt động |
| Chat | Corpus indexed đầy đủ; Q&A trên nguồn đầu/cuối/phụ lục, nhiều văn bản, ngày khác, thiếu nguồn, sai tiền đề; citations đúng quote |
| Files/AI | Test2+attachments, một lỗi/một tốt, scan dài>20trang; báo từngfile; không bỏ file cuối |
| Nghiệp vụ | Không bằng chứng→insufficient; một fail bắt buộc chặn; stale approval chặn; dashboard khớp chi tiết |
| Mẫu | Mỗi template có preview và output parse được đúngđịnh dạng; data khớp input; không mẫu giả gọi chính thức |
| Quyền/sync | Tenant isolation, Drive private, notes pending/synced/failed, readback và retry, concurrency409 |
| Trình duyệt | Desktop1440/mobile390/zoom200%, không tràn toàn trang; Console Errors0/Page Crashes0 qua toàn bộ luồng |

Bắt buộc fixture hồi quy: (a) summary-only; (b) HTTP200 HTML challenge; (c) file119trang mất trang cuối; (d) đủtrang nhưng thiếuphụlục; (e) file giả lập có quốc hiệu; (f) fulltext404; (g) Driveupload có ID nhưng readback sai; (h) Điều5/50 và Điều lặp; (i) tất cả N/A; (j) metadata source ngoài bị chặn sau nhập; (k) MDlegacy đổi nghĩa; (l) Drive/auth lỗi giữa job và resume.

Script `verify:corpus` phải exit khác0 nếu thiếu item, original/hash/fulltext/review/attachment. Test UI không được chỉ kiểm không console rồi pass. Hiển thị số tài liệu phải đạt, số đã hoàn thành từng bước và danh sách thiếu. Không tự sửa expected bằng số đã thành công.

Bàn giao `reports/source-baseline.json`, `drive-manifest.json`, `corpus-completeness.json`, `legacy-migration.json`, `feature-parity.json`, `live-report.json`, screenshots và URLDrive/web đã xác minh. Report chứa commit/timestamp/corpusRelease, không secrets. Các bộ40nhóm và mẫu được lập manifest, test không chỉ đếm đủ ID mà kiểm nghiệp vụ.

## L. Ranh giới công việc đã làm của bản kế hoạch này

Đã đọc source luồng dữ liệu–Drive–toàn văn–AI–ghi chú–mẫu–checklist và quan sát live kế toán/y tế, có bằng chứng nêu ở B/C. Không đổi app source hoặc upload tài liệu thật trong lượt lập kế hoạch. Chưa có bằng chứng Drive readback/download đầy đủ hay chatbot end-to-end của y tế. Antigravity phải thực hiện J/K trước khi báo hoàn thành.

Các phụ lục sau là một phần yêu cầu triển khai:40nhóm, types/code,API,14mẫu,AI và nguồn luật. Áp dụng mapping source/legacy ở A/H, không tạo apptrùng hoặc giới hạn14mẫu khi dữ liệu đã có thêm mẫu hữu ích.

---

# Phụ lục kỹ thuật và nghiệp vụ
