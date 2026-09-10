# 🤝 HƯỚNG DẪN PHỐI HỢP: CODEX (ARCHITECT) & ANTIGRAVITY (EXECUTOR)
> **Dự án**: Hệ Thống Tra Cứu Kế Toán & Thanh Tra Thuế — Công Ty Cổ Phần Kiểu Việt
> **Website doanh nghiệp**: https://kieuviet.com.vn | **MST**: 5901168128
> **Live Web App**: https://bombeodeptrai.github.io/Tra-cuu-ke-toan-kieu-viet/

---

## 🏛️ 1. BỐI CẢNH & CƠ CẤU DOANH NGHIỆP KIỂU VIỆT
Kiểu Việt là hệ sinh thái sản xuất - xây dựng - tư vấn khép kín tại Miền Trung & Tây Nguyên với 4 mảng cốt lõi:
1. **🪑 Nội thất Kiểu Việt (Nhà máy Phú Tài 4.5 ha)**: Bàn ghế hội trường, ghế chủ trì đại biểu (mẫu 1/2/3), bục Bác, nội thất phòng lãnh đạo; thiết bị giáo dục, bàn ghế thí nghiệm; thiết bị y tế chuyên dụng.
2. **🧱 VLXD & Bê tông thương phẩm**: Trạm trộn bê tông tươi (M150-M400), cống hộp, cống ly tâm, bó vỉa, rãnh U, gạch block, thi công ép cọc cừ Larsen, mỏ đá cát.
3. **🏗️ Thi công Xây lắp liên tỉnh**: Trụ sở Cục Hải quan Bình Định, Hải quan Phú Yên, Văn phòng Đoàn ĐBQH & HĐND Gia Lai, QL19 Becamex VSIP...
4. **📐 Tư vấn Xây dựng & Dự án**: Lập dự án, thiết kế kỹ thuật, thẩm tra, giám sát thi công & đấu thầu.

---

## 🔄 2. PHÂN VAI & QUY TRÌNH PHỐI HỢP 2 AI

### 🧠 VAI TRÒ CỦA BẠN (OPENAI CODEX - SENIOR ARCHITECT / PLANNER):
- Khi anh Huy giao cho bạn một bài toán khó hoặc yêu cầu tái cấu trúc/bổ sung tính năng lớn:
  1. Bạn nghiên cứu toàn bộ mã nguồn tại thư mục này (src/, public/data/).
  2. Phân tích sâu sắc về mặt kiến trúc, logic nghiệp vụ kế toán/thuế Kiểu Việt và kỹ thuật React/TypeScript.
  3. **Viết kế hoạch hành động chi tiết vào tệp:** CODEX_WALKTHROUGH.md (nằm ngay tại thư mục gốc dự án).
  4. Trong CODEX_WALKTHROUGH.md, ghi rõ:
     - Mục tiêu & giải pháp kiến trúc.
     - Danh sách file cần chỉnh sửa hoặc tạo mới.
     - Nội dung code cụ thể (diff hoặc code blocks rõ ràng).
     - Điều kiện kiểm thử và nghiệm thu.

### ⚡ VAI TRÒ CỦA ANTIGRAVITY (GOOGLE AGENT - LEAD EXECUTOR):
- Antigravity sẽ đọc trực tiếp tệp CODEX_WALKTHROUGH.md do Codex lập.
- Antigravity sẽ tự tay:
  1. Thực hiện các chỉnh sửa file theo đúng chỉ dẫn của Codex.
  2. Chạy lệnh 
pm run build kiểm tra biên dịch TypeScript.
  3. Đẩy commit lên GitHub và theo dõi deploy.
  4. Mở trình duyệt Puppeteer không đầu (headless browser) kiểm thử tự động trên live site để đảm bảo: Console Errors = 0, Page Crashes = 0.
  5. Báo cáo hoàn thành gọn gàng cho anh Huy.

---

## ⛔ 4 NGUYÊN TẮC BẮT BUỘC KHÔNG ĐƯỢC VI PHẠM (QUY TẮC CÔNG TY):
1. **ĐỦ 100% 55 VĂN BẢN**: Mọi module pháp luật phải bao phủ đủ toàn bộ 55 văn bản hiện hành trong hệ thống, không cắt xén.
2. **CHUẨN 4 MẢNG HOẠT ĐỘNG**: Luôn bám sát 4 mảng: Nội thất Phú Tài, VLXD Bê tông/Cừ Larsen, Xây lắp liên tỉnh, và Tư vấn dự án.
3. **KHÔNG DÙNG LINK THƯ VIỆN PHÁP LUẬT (	huvienphapluat.vn)**: Chỉ dùng link miễn phí từ hethongphapluat.com hoặc link Google Drive nội bộ.
4. **THỰC NGHIỆM TRÊN LIVE**: Code xong bắt buộc phải build pass và test live đạt 0 lỗi.
