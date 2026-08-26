const fs = require('fs');
let content = fs.readFileSync('src/components/layout/Sidebar.tsx', 'utf8');

// The original file has these exact strings right now
content = content.replace("label: 'Trang ch?'", "label: 'Trang chủ'");
content = content.replace("label: 'Th? vi?n ngh? ??nh'", "label: 'Thư viện nghị định'");
content = content.replace("label: 'Tra c?u'", "label: 'Tra cứu'");
content = content.replace("label: 'H? th?ng T?i kho?n'", "label: 'Hệ thống Tài khoản'");
content = content.replace("label: 'Bi?u m?u'", "label: 'Biểu mẫu'");
content = content.replace("label: 'H?i ??p AI'", "label: 'Hỏi đáp AI'");
content = content.replace("label: 'C?i ??t'", "label: 'Cài đặt'");

// Also fix the headers and titles
content = content.replace("Tra C?u K? To?n", "Tra Cứu Kế Toán");
content = content.replace("N?i b? Ki?u Vi?t", "Nội bộ Kiều Việt");
content = content.replace("Ph?n t?ch T?i ch?nh (New)", "Phân tích Tài chính (New)");
content = content.replace("Phi?n b?n 1.0", "Phiên bản 1.0");

fs.writeFileSync('src/components/layout/Sidebar.tsx', content, 'utf8');