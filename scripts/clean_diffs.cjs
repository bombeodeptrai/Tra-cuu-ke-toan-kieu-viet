const fs = require('fs');

// Clean group3
let g3 = fs.readFileSync('src/data/diffs/group3_corporate_personal_tax.ts', 'utf8');

// The item was added twice with unquoted keys:
// topic: "Xử lý hóa đơn xuất sai thuế suất trong thời gian áp dụng chính sách giảm thuế",
const item3 = `      {
        "topic": "Xử lý hóa đơn xuất sai thuế suất trong thời gian áp dụng chính sách giảm thuế",
        "type": "added",
        "oldRule": "Chưa có quy định xử lý khi người bán lỡ xuất hóa đơn 10% cho mặt hàng được giảm thuế 8%.",
        "newRule": "Trường hợp đã lập hóa đơn và đã kê khai theo mức thuế suất 10% thì người bán và người mua phải lập biên bản ghi rõ sai sót, người bán lập hóa đơn điều chỉnh sai sót giảm 2% thuế suất và giao cho người mua.",
        "impactNote": "Kiểu Việt yêu cầu các nhà thầu phụ xuất hóa đơn điều chỉnh giảm 2% thuế suất đối với các khối lượng xây lắp nghiệm thu trong kỳ để hạch toán đúng thuế GTGT đầu vào."
      }`;

// Replace duplicate nd-15 items
const nd15Regex = /("nd-15-2022": \{[\s\S]*?"items": \[[\s\S]*?\}\n)([\s\S]*?)(\s*\]\s*\n\s*\})/;
const m3 = g3.match(nd15Regex);
if (m3) {
  // Let's inspect items of nd-15
  // We want exactly 4 items in nd-15
}

console.log('Inspecting cleaning...');
