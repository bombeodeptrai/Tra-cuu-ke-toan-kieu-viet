export function money(raw: string): bigint {
  const s = raw.trim();
  if (!/^-?(?:\d+|\d{1,3}(?:[., ]\d{3})+)$/.test(s)) throw new Error(`Số tiền không hợp lệ: ${raw || '(trống)'}. Dùng số nguyên VND; không dùng ký hiệu tỷ/triệu.`);
  if (s.includes('.') && s.includes(',')) throw new Error('Không trộn dấu chấm và dấu phẩy.');
  return BigInt(s.replace(/[., ]/g,''));
}
export const fmt = (v: bigint) => v.toLocaleString('vi-VN') + ' đ';
export const abs = (v: bigint) => v < 0n ? -v : v;
export type ToolKind = 'revenue' | 'wip' | 'inventory' | 'interest' | 'debt' | 'payment' | 'wood';
export const TOOLS: { id: ToolKind; title: string; instruction: string; fields: [string,string][] }[] = [
  { id:'revenue', title:'511 – Hóa đơn – Tờ khai', instruction:'Cùng kỳ, cùng phạm vi, giá trị chưa GTGT. Điều chỉnh có dấu: dương làm tăng số hóa đơn kỳ vọng, âm làm giảm. Khớp số không chứng minh đúng thời điểm xuất hóa đơn.', fields:[['ledger','Doanh thu 511'],['invoices','Doanh thu trên hóa đơn'],['adjustment','Chênh lệch thời điểm/giảm trừ có dấu'],['declaration','Doanh thu kê khai GTGT']] },
  { id:'wip', title:'154 – 155/632: dở dang theo đơn hàng/công trình', instruction:'Nội thất hoàn thành có thể chuyển 154 sang 155, không mặc định chuyển hết vào 632. Tổng giảm gồm mọi chuyển khoản, hoàn trả và điều chỉnh giảm trong kỳ.', fields:[['opening','Dở dang đầu kỳ'],['increase','Tập hợp chi phí tăng'],['decrease','Tổng giảm/kết chuyển 155, 632 và khác'],['closing','Dở dang cuối kỳ theo sổ']] },
  { id:'inventory', title:'152/155/156, 131/331: cầu nối số dư', instruction:'Chọn một tài khoản và đối tượng trong tên bảng tính. Với công nợ phải thu/phải trả, dùng tăng và giảm số dư cùng tính chất; không bù trừ giữa các khách hàng.', fields:[['opening','Số dư đầu kỳ'],['increase','Tăng trong kỳ'],['decrease','Giảm trong kỳ'],['closing','Số dư cuối kỳ']] },
  { id:'interest', title:'Lãi vay: mô phỏng giới hạn 30%', instruction:'Chỉ là phép tính khi đã xác nhận thuộc phạm vi NĐ132 và sửa đổi. Khoản phải thu 37 tỷ không tự chứng minh là khoản vay. Không tự xác nhận chuyển lãi vay sang năm sau.', fields:[['profit','Lợi nhuận thuần từ hoạt động kinh doanh'],['interest','Chi phí lãi vay sau trừ lãi tiền gửi/cho vay'],['depreciation','Khấu hao trong kỳ']] },
  { id:'debt', title:'Công nợ khó đòi: tuổi nợ và dự phòng', instruction:'Mô phỏng tỷ lệ theo tuổi nợ 6/12/24/36 tháng. Chưa kết luận được trừ TNDN; cần hợp đồng, hạn gốc, thanh toán, đối chiếu, đòi nợ và điều kiện áp dụng đúng kỳ.', fields:[['debt','Số nợ còn phải thu'],['months','Số tháng quá hạn'],['existing','Dự phòng đã ghi sổ']] },
  { id:'payment', title:'331 – 112 – Tiền mặt – Cấn trừ', instruction:'Đối chiếu dòng tiền; chưa kết luận khấu trừ GTGT hay chi phí TNDN. Hai sắc thuế có điều kiện/kỳ khác nhau. Tiền còn nợ không được tự coi là đã trả tiền mặt.', fields:[['invoice','Tổng phải thanh toán'],['bank','Đã chuyển khoản'],['offset','Đã cấn trừ'],['cash','Đã trả tiền mặt']] },
  { id:'wood', title:'Định mức gỗ/xi măng – thực tế xuất dùng', instruction:'Nhập cùng một đơn vị quy đổi dạng số nguyên (ví dụ gram hoặc cm³), không nhập m³ lẫn kg. Mức hao hụt chỉ lấy từ định mức kỹ thuật đã phê duyệt; không tự xem chênh lệch là chi phí bị loại.', fields:[['issued','Lượng xuất cho sản xuất'],['returned','Lượng trả lại kho'],['standard','Lượng theo định mức cho sản lượng thực tế'],['scrap','Phế liệu thu hồi (cùng đơn vị)']] },
];
export function calculate(kind: ToolKind, values: Record<string,string>): string {
  const tool = TOOLS.find(t => t.id === kind)!;
  const v: Record<string,bigint> = Object.fromEntries(tool.fields.map(([key]) => [key,money(values[key] || '')]));
  if (Object.entries(v).some(([k,n]) => n < 0n && !['profit','interest','adjustment','opening','closing'].includes(k))) throw new Error('Giá trị tăng/giảm, số lượng và thanh toán phải không âm.');
  if (kind === 'revenue') return `Hóa đơn kỳ vọng: ${fmt(v.ledger + v.adjustment)}\nLệch hóa đơn – kỳ vọng: ${fmt(v.invoices-v.ledger-v.adjustment)}\nLệch tờ khai – hóa đơn: ${fmt(v.declaration-v.invoices)}\nCần bảng giải thích từng chênh lệch và chứng từ. Không suy ra số thuế từ chênh lệch doanh thu.`;
  if (kind === 'wip' || kind === 'inventory') return `Cuối kỳ tính lại: ${fmt(v.opening+v.increase-v.decrease)}\nLệch cuối kỳ sổ – tính lại: ${fmt(v.closing-v.opening-v.increase+v.decrease)}\n${v.closing-v.opening-v.increase+v.decrease === 0n ? 'Khớp phép cộng trừ; cần kiểm kê và chứng từ để kết luận.' : 'Cần tìm bút toán/chứng từ chênh lệch.'}`;
  if (kind === 'interest') {
    const ebitda = v.profit+v.interest+v.depreciation; const cap = ebitda > 0n ? ebitda*30n/100n : 0n;
    const excess = v.interest > cap ? v.interest-cap : 0n;
    return `EBITDA theo dữ liệu nhập: ${fmt(ebitda)}\n30% EBITDA (làm tròn xuống VND): ${fmt(cap)}\nPhần vượt trong mô phỏng: ${fmt(excess)}\nChưa phải chi phí bị loại đã xác nhận; kiểm phạm vi, miễn trừ, kỳ và bảng theo dõi chuyển tiếp riêng.`;
  }
  if (kind === 'debt') { const rate = v.months>=36n ? 100n : v.months>=24n ? 70n : v.months>=12n ? 50n : v.months>=6n ? 30n : 0n; const expected = v.debt*rate/100n;
    return `Tỷ lệ mô phỏng: ${rate}%\nDự phòng tính thử: ${fmt(expected)}\nChênh lệch so dự phòng đã ghi: ${fmt(expected-v.existing)}\nChưa xác nhận điều kiện trích lập/được trừ; trường hợp đặc biệt phải rà riêng.`; }
  if (kind === 'wood') return `Xuất dùng thuần: ${v.issued-v.returned}\nChênh lệch so định mức: ${v.issued-v.returned-v.standard}\nPhế liệu thu hồi: ${v.scrap}\nKhông trừ phế liệu lần nữa khỏi lượng xuất dùng. Đối chiếu nhập kho phế liệu, bán phế liệu và hóa đơn riêng.`;
  const remaining = v.invoice-v.bank-v.offset-v.cash;
  return `Tổng đã thanh toán/cấn trừ: ${fmt(v.bank+v.offset+v.cash)}\nCòn phải trả: ${fmt(remaining)}\n${remaining < 0n ? 'Dữ liệu trả vượt hóa đơn: kiểm tra phân bổ hoặc trả trước.' : remaining > 0n ? 'Chưa thanh toán hết; kiểm hạn hợp đồng và chứng từ sau ngày khóa sổ.' : 'Khớp số tiền; chưa chứng minh phương thức thanh toán hợp lệ.'}\nCấn trừ cần hợp đồng và đối chiếu; phân tích GTGT/TNDN theo kỳ riêng.`;
}

// RFC4180 quoted fields, including embedded commas/newlines. No silent row drops.
export function parseCsv(text: string): string[][] {
  const rows: string[][] = []; let row: string[] = []; let cell = ''; let quoted = false;
  text = text.replace(/^\ufeff/,'');
  const delimiter = text.split(/\r?\n/)[0].includes(';') ? ';' : ',';
  for (let i=0;i<text.length;i++) {
    const c=text[i];
    if (c==='"') { if (quoted && text[i+1]==='"') { cell+='"'; i++; } else quoted=!quoted; }
    else if (!quoted && (c===delimiter || c==='\n')) { row.push(cell.replace(/\r$/,'')); cell=''; if(c==='\n') { rows.push(row); row=[]; } }
    else cell+=c;
  }
  if (quoted) throw new Error('CSV có dấu ngoặc kép chưa đóng.');
  if (cell || row.length) { row.push(cell.replace(/\r$/,'')); rows.push(row); }
  return rows.filter(r => r.some(c => c.trim()));
}
export function inspectJournal(text: string) {
  const rows = parseCsv(text); const header = rows.shift()?.map(h => h.trim().toLowerCase());
  const required = ['date','voucher','account','debit','credit','object','pillar'];
  if (!header || required.some(h => !header.includes(h))) throw new Error('CSV cần đủ cột: ' + required.join(', '));
  const results: { row:number; voucher:string; issue:string }[]=[]; const sums = new Map<string,{debit:bigint;credit:bigint}>(); const seen=new Set<string>();
  const vouchers = new Map<string,bigint>(); let accepted=0;
  rows.forEach((r,index) => {
    const get = (key:string) => (r[header.indexOf(key)] || '').trim();
    try {
      if (r.length !== header.length) throw new Error('Số cột không khớp.');
      if (!/^\d{4}-\d{2}-\d{2}$/.test(get('date')) || new Date(get('date')).toISOString().slice(0,10) !== get('date')) throw new Error('Ngày phải YYYY-MM-DD và có thực.');
      if (!get('voucher') || !/^\d{3,}$/.test(get('account'))) throw new Error('Thiếu số chứng từ hoặc sai tài khoản.');
      if (!['interior','concrete_materials','construction','consulting'].includes(get('pillar'))) throw new Error('Mã mảng không hợp lệ.');
      const debit=money(get('debit')), credit=money(get('credit'));
      if (debit<0n || credit<0n || (debit>0n && credit>0n)) throw new Error('Dòng phải có Nợ/Có không âm, không đồng thời hai bên.');
      const key=JSON.stringify(r); if(seen.has(key)) results.push({row:index+2,voucher:get('voucher'),issue:'Dòng trùng: vẫn cộng để đối chiếu sổ, cần xác minh trước khi loại.'}); seen.add(key);
      const account=get('account'); const sum=sums.get(account) || {debit:0n,credit:0n}; sum.debit+=debit; sum.credit+=credit; sums.set(account,sum);
      const voucherKey=`${get('date')} / ${get('voucher')}`; vouchers.set(voucherKey,(vouchers.get(voucherKey)||0n)+debit-credit); accepted++;
      if (/^(131|331|154)/.test(account) && !get('object')) results.push({row:index+2,voucher:get('voucher'),issue:'Thiếu khách hàng/nhà cung cấp/đơn hàng/công trình.'});
    } catch(e) { results.push({row:index+2,voucher:get('voucher'),issue:e instanceof Error?e.message:'Dòng không hợp lệ.'}); }
  });
  for(const [voucher,diff] of vouchers) if(diff!==0n) results.push({row:0,voucher,issue:`Nợ – Có lệch ${fmt(diff)} trong phạm vi file nhập; nếu chỉ xuất một tài khoản thì chưa đủ sổ để kiểm tra cân đối.`});
  return { total:rows.length, accepted, rejected:rows.length-accepted, findings:results, accounts:Array.from(sums,([account,v])=>({account,debit:v.debit.toString(),credit:v.credit.toString()})) };
}
