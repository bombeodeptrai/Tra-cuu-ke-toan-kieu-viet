const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'public/data/decrees.json');
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

// === BƯỚC 1: Cập nhật status các văn bản cũ/hết hạn ===
const updates = {
  'luat-thue-tndn': { status: 'replaced', replacedBy: '67/2025/QH15' },
  'nd-15-2022': { status: 'expired' },
  'nd-64-2024': { status: 'expired' },
  'tt-200-2014': { status: 'replaced', replacedBy: '99/2025/TT-BTC' },
};

for (let i = 0; i < data.length; i++) {
  if (updates[data[i].id]) {
    const u = updates[data[i].id];
    data[i].status = u.status;
    if (u.replacedBy) {
      data[i].summary = (data[i].summary || '') + `\n\n⚠️ **Đã hết hiệu lực** — thay thế bởi **${u.replacedBy}**. Giữ lại để đối chiếu.`;
    }
    console.log(`Updated: ${data[i].decree_number} → ${u.status}`);
  }
}

// Cập nhật TT111 thêm ghi chú về Luật TNCN mới
const tt111 = data.find(d => d.id === 'tt-111-2013');
if (tt111) {
  tt111.summary = tt111.summary + '\n\n📢 **Cập nhật 2026:** Luật Thuế TNCN số 109/2025/QH15 (hiệu lực 01/07/2026) thay đổi: giảm trừ bản thân **15,5 triệu/tháng** (tăng từ 11 triệu), người phụ thuộc **6,2 triệu/tháng** (tăng từ 4,4 triệu), biểu thuế rút từ 7 bậc xuống **5 bậc**.';
  console.log('Updated TT111 summary');
}

// Cập nhật NĐ125 thêm ghi chú NĐ310
const nd125 = data.find(d => d.id === 'nd-125-2020');
if (nd125) {
  nd125.summary = nd125.summary + '\n\n📢 **Sửa đổi bởi NĐ 310/2025** (hiệu lực 16/01/2026): Bổ sung nguyên tắc "phạt gộp" (chỉ phạt hành vi có mức phạt cao nhất khi nhiều vi phạm xảy ra cùng ngày), chuyển sang phạt lũy tiến theo số lượng hóa đơn vi phạm, mức phạt tối đa lên đến 70-80 triệu đồng.';
  console.log('Updated NĐ125 summary');
}

// === BƯỚC 2: Thêm các văn bản mới ===
const newDecrees = [
  {
    id: 'luat-67-2025-tndn',
    decree_number: '67/2025/QH15',
    title: 'Luật Thuế Thu nhập doanh nghiệp số 67/2025/QH15 (Thay thế Luật 14/2008)',
    category: 'luat',
    issued_date: '2025-06-14',
    effective_date: '2025-10-01',
    status: 'active',
    source_url: '',
    pdf_url: '',
    summary: 'Luật Thuế TNDN 2025 (số 67/2025/QH15) thay thế hoàn toàn Luật 14/2008 và các lần sửa đổi, hiệu lực từ 01/10/2025.\n\n**Mức thuế suất mới:**\n- Thuế suất phổ thông: **20%**\n- DN có doanh thu ≤ 3 tỷ đồng/năm: **15%** (mới)\n- DN có doanh thu từ 3 tỷ đến 50 tỷ đồng/năm: **17%** (mới)\n- Hoạt động khai thác khoáng sản quý hiếm: **40–50%**\n\n**Điểm mới quan trọng:**\n- Mở rộng đối tượng nộp thuế: công ty nước ngoài kinh doanh thương mại điện tử/nền tảng số tại VN\n- Ưu đãi thuế 10% trong 15 năm cho trung tâm dữ liệu AI, chip bán dẫn\n- Bổ sung thu nhập từ tín chỉ carbon, chứng chỉ giảm phát thải được miễn thuế\n- Bù trừ lỗ từ BĐS vào thu nhập kinh doanh\n\n**Văn bản hướng dẫn:** NĐ 320/2025/NĐ-CP (hiệu lực 15/12/2025) thay thế NĐ 218/2013, NĐ 91/2014, NĐ 12/2015.',
    content_url: '/data/content/luat-67-2025-tndn.md',
    free_download_url: 'https://hethongphapluat.com/luat-thue-thu-nhap-doanh-nghiep-2025.html'
  },
  {
    id: 'luat-109-2025-tncn',
    decree_number: '109/2025/QH15',
    title: 'Luật Thuế Thu nhập cá nhân số 109/2025/QH15 (Hiệu lực từ 01/07/2026)',
    category: 'luat',
    issued_date: '2025-12-10',
    effective_date: '2026-07-01',
    status: 'active',
    source_url: '',
    pdf_url: '',
    summary: 'Luật Thuế TNCN mới (số 109/2025/QH15) thay thế luật cũ, hiệu lực từ 01/07/2026. Áp dụng từ kỳ tính thuế năm 2026.\n\n**Thay đổi lớn nhất — Mức giảm trừ gia cảnh (từ 01/01/2026):**\n- Bản thân người nộp thuế: **15,5 triệu đồng/tháng** (tăng từ 11 triệu)\n- Mỗi người phụ thuộc: **6,2 triệu đồng/tháng** (tăng từ 4,4 triệu)\n\n**Biểu thuế TNCN rút gọn từ 7 bậc → 5 bậc:**\n- Bậc 1: ≤ 10 triệu/tháng → 5%\n- Bậc 2: 10–30 triệu → 15%\n- Bậc 3: 30–60 triệu → 25%\n- Bậc 4: 60–100 triệu → 30%\n- Bậc 5: Trên 100 triệu → 35%\n\n**Ngưỡng hộ kinh doanh không phải nộp thuế:** Tăng từ 200 triệu lên **500 triệu đồng/năm**.\n\n**Lưu ý quyết toán 2025:** Vẫn dùng mức giảm trừ cũ (11 tr + 4,4 tr). Mức mới áp dụng từ kỳ 2026.',
    content_url: '/data/content/luat-109-2025-tncn.md',
    free_download_url: 'https://hethongphapluat.com/luat-thue-thu-nhap-ca-nhan-2025.html'
  },
  {
    id: 'nd-293-2025',
    decree_number: '293/2025/NĐ-CP',
    title: 'Nghị định 293/2025/NĐ-CP Lương tối thiểu vùng năm 2026',
    category: 'nhan-su',
    issued_date: '2025-11-10',
    effective_date: '2026-01-01',
    status: 'active',
    source_url: '',
    pdf_url: '',
    summary: 'Nghị định 293/2025/NĐ-CP thay thế NĐ 74/2024, quy định mức lương tối thiểu vùng áp dụng từ 01/01/2026, tăng bình quân 7,2% so với năm 2025.\n\n**Mức lương tối thiểu tháng từ 01/01/2026:**\n| Vùng | Theo tháng | Theo giờ |\n|---|---|---|\n| Vùng I (HN, HCM, ĐN, HP) | 5.310.000đ | 25.500đ |\n| Vùng II | 4.730.000đ | 22.700đ |\n| Vùng III | 4.140.000đ | 20.000đ |\n| Vùng IV (nông thôn) | 3.700.000đ | 17.800đ |\n\n**Ảnh hưởng kế toán tiền lương:**\n- Trần đóng BHXH = 20 × lương cơ sở (hiện 2,34 triệu) = **46.800.000đ/tháng**\n- Lương tối thiểu vùng là căn cứ ký hợp đồng lao động và thang bảng lương\n- Doanh nghiệp tại khu công nghiệp trên nhiều vùng → áp dụng vùng có mức cao nhất',
    content_url: '/data/content/nd-293-2025.md',
    free_download_url: 'https://hethongphapluat.com/nghi-dinh-293-2025-nd-cp-quy-dinh-muc-luong-toi-thieu-doi-voi-nguoi-lao-dong-lam-viec-theo-hop-dong-lao-dong.html'
  },
  {
    id: 'blld-45-2019',
    decree_number: '45/2019/QH14',
    title: 'Bộ luật Lao động số 45/2019/QH14',
    category: 'nhan-su',
    issued_date: '2019-11-20',
    effective_date: '2021-01-01',
    status: 'active',
    source_url: '',
    pdf_url: '',
    summary: 'Bộ luật Lao động 2019 (số 45/2019/QH14) là nền tảng pháp lý điều chỉnh toàn bộ quan hệ lao động tại Việt Nam, gồm 17 Chương, 220 Điều.\n\n**Điểm kế toán - nhân sự cần nắm:**\n- Hợp đồng lao động: Bỏ loại HĐLĐ theo mùa vụ, chỉ còn 2 loại: **xác định thời hạn** (tối đa 36 tháng) và **không xác định thời hạn**\n- Thử việc: Tối đa 180 ngày với vị trí quản lý; 60 ngày với lao động phổ thông\n- Làm thêm giờ: Tối đa **40 giờ/tháng** và **200 giờ/năm** (một số ngành được 300 giờ/năm)\n- Nghỉ hàng năm: Tối thiểu 12 ngày/năm, làm thêm 5 năm được thêm 1 ngày\n- Trợ cấp thôi việc: 0,5 tháng lương/năm làm việc (với thời gian trước 01/01/2009)\n- Trợ cấp mất việc: 1 tháng lương/năm làm việc, tối thiểu 2 tháng\n\n**Phụ cấp, trợ cấp:** Tiền lương làm thêm giờ = Lương giờ thực tế × Số giờ làm thêm × Hệ số (150%, 200%, 300%).',
    content_url: '/data/content/blld-45-2019.md',
    free_download_url: 'https://hethongphapluat.com/bo-luat-lao-dong-2019.html'
  },
  {
    id: 'nd-310-2025',
    decree_number: '310/2025/NĐ-CP',
    title: 'Nghị định 310/2025/NĐ-CP sửa đổi quy định xử phạt thuế, hóa đơn',
    category: 'thue',
    issued_date: '2025-12-02',
    effective_date: '2026-01-16',
    status: 'active',
    source_url: '',
    pdf_url: '',
    summary: 'Nghị định 310/2025/NĐ-CP sửa đổi NĐ 125/2020 về xử phạt vi phạm hành chính trong lĩnh vực thuế và hóa đơn, hiệu lực từ 16/01/2026.\n\n**Thay đổi quan trọng nhất:**\n1. **Nguyên tắc "phạt gộp":** Cùng ngày có nhiều vi phạm thủ tục thuế tương tự → chỉ phạt hành vi có mức phạt cao nhất (thay vì phạt từng lần riêng lẻ)\n2. **Phạt hóa đơn lũy tiến theo số lượng:** Phạt theo số hóa đơn vi phạm (chậm xuất, sai thời điểm...), mức tối đa lên tới **70-80 triệu đồng**\n3. **Mở rộng phạm vi:** Bổ sung các khoản thu do CQT quản lý: tiền sử dụng đất, thuê đất, tiền cấp quyền khai thác khoáng sản\n4. **Bãi bỏ phạt hóa đơn đặt in:** Phù hợp xu hướng 100% hóa đơn điện tử\n5. **Bổ sung trường hợp bất khả kháng:** Thiên tai, dịch bệnh, hỏa hoạn... được miễn/giảm xử phạt\n\n**Văn bản hợp nhất:** 27/2026/VBHN-NĐ-BTC (ngày 27/08/2026) hợp nhất NĐ125 và NĐ310.',
    content_url: '/data/content/nd-310-2025.md',
    free_download_url: 'https://hethongphapluat.com/nghi-dinh-310-2025-nd-cp-sua-doi-nghi-dinh-125-2020-nd-cp-quy-dinh-xu-phat-vi-pham-hanh-chinh-ve-thue-hoa-don.html'
  },
  {
    id: 'nd-193-2025-khoangsan',
    decree_number: '193/2025/NĐ-CP',
    title: 'Nghị định 193/2025/NĐ-CP hướng dẫn thi hành Luật Địa chất và Khoáng sản 2024',
    category: 'khoang-san',
    issued_date: '2025-07-02',
    effective_date: '2025-07-02',
    status: 'active',
    source_url: '',
    pdf_url: '',
    summary: 'Nghị định 193/2025/NĐ-CP hướng dẫn chi tiết thi hành Luật Địa chất và Khoáng sản 2024 (Luật 54/2024/QH15), gồm 11 chương 155 điều, hiệu lực từ 02/07/2025.\n\n**4 nhóm khoáng sản theo luật mới:**\n- Nhóm I: Khoáng sản chiến lược, quý hiếm (đất hiếm, uranium) — Bộ TNMT cấp phép\n- Nhóm II: Khoáng sản công nghiệp (sắt, đồng, bauxite) — Bộ TNMT cấp phép\n- Nhóm III: Vật liệu xây dựng thông thường (đá, cát, sỏi, đất san lấp) — UBND tỉnh cấp phép\n- Nhóm IV: Khoáng sản quy mô nhỏ — Đơn giản hóa thủ tục\n\n**Điểm mới quan trọng với kế toán khai khoáng:**\n- Tăng cường phân cấp cho UBND tỉnh → thủ tục cấp phép nhanh hơn\n- Đơn giản hóa hồ sơ thăm dò, khai thác mỏ đất san lấp, cát sỏi\n- Quy định chặt về phục hồi môi trường và đóng cửa mỏ\n- Cho phép thực hiện thủ tục trực tuyến\n\n**Lưu ý:** Đã được sửa đổi bởi NĐ 21/2026/NĐ-CP (16/01/2026).',
    content_url: '/data/content/nd-193-2025-khoangsan.md',
    free_download_url: 'https://hethongphapluat.com/nghi-dinh-193-2025-nd-cp-quy-dinh-chi-tiet-mot-so-dieu-va-bien-phap-thi-hanh-luat-dia-chat-va-khoang-san.html'
  }
];

// Thêm vào đầu danh sách (văn bản mới nhất lên trên)
newDecrees.reverse().forEach(d => data.unshift(d));

fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
console.log(`Done! Total: ${data.length} văn bản`);
console.log('Summary of changes:');
console.log('- Status updated: luat-thue-tndn, nd-15-2022, nd-64-2024, tt-200-2014');
console.log('- Summary updated: tt-111-2013, nd-125-2020');
console.log('- New entries added:', newDecrees.map(d=>d.decree_number).join(', '));
