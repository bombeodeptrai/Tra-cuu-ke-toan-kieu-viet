export interface ParsedXmlInvoice {
  sellerTaxId: string;
  sellerName: string;
  buyerTaxId: string;
  buyerName: string;
  series: string;
  invoiceNumber: string;
  invoiceDate: string;
  totalBeforeTax: string;
  taxAmount: string;
  totalAmount: string;
  items: {
    lineNo: number;
    itemName: string;
    unit: string;
    quantity: string;
    unitPrice: string;
    total: string;
    vatRate: string;
  }[];
}

export function parseInvoiceXml(xmlText: string): ParsedXmlInvoice {
  // Reject XML containing dangerous DTD or entity expansions
  if (xmlText.includes('<!DOCTYPE') || xmlText.includes('<!ENTITY')) {
    throw new Error('XML chứa khai báo DTD / Entity không được phép vì lý do an toàn.');
  }

  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlText, 'text/xml');

  const parserError = xmlDoc.querySelector('parsererror');
  if (parserError) {
    throw new Error('Định dạng XML hóa đơn không hợp lệ: ' + parserError.textContent);
  }

  const getText = (selector: string): string => {
    const el = xmlDoc.querySelector(selector);
    return el?.textContent?.trim() || '';
  };

  // TT78 / ND123 XML Tag Mapping
  const series = getText('KHMSHDon') + getText('KHHDon') || getText('khmshdon') || getText('khhdon') || getText('Series');
  const invoiceNumber = getText('SHDon') || getText('shdon') || getText('InvoiceNumber');
  const invoiceDate = getText('NLap') || getText('nlap') || getText('InvoiceDate');

  const sellerTaxId = getText('NBan > MST') || getText('nban > mst') || getText('SellerTaxCode');
  const sellerName = getText('NBan > Ten') || getText('nban > ten') || getText('SellerName');

  const buyerTaxId = getText('NMua > MST') || getText('nmua > mst') || getText('BuyerTaxCode');
  const buyerName = getText('NMua > Ten') || getText('nmua > ten') || getText('BuyerName');

  const totalBeforeTax = getText('TToan > TgTCThue') || getText('ttoan > tgtcthue') || getText('TotalBeforeTax');
  const taxAmount = getText('TToan > TgTThue') || getText('ttoan > tgtthue') || getText('TaxAmount');
  const totalAmount = getText('TToan > TgTTTBSo') || getText('ttoan > tgtttbso') || getText('TotalAmount');

  const itemNodes = xmlDoc.querySelectorAll('DSHHDVu > HHDVu, dshhdvu > hhdvu, InvoiceItems > Item');
  const items: ParsedXmlInvoice['items'] = [];

  itemNodes.forEach((node, idx) => {
    const getChild = (tag: string): string => {
      const el = node.querySelector(tag);
      return el?.textContent?.trim() || '';
    };

    items.push({
      lineNo: parseInt(getChild('STT') || getChild('stt') || String(idx + 1), 10),
      itemName: getChild('THHDVu') || getChild('thhdvu') || getChild('ItemName'),
      unit: getChild('DVTinh') || getChild('dvtinh') || getChild('Unit'),
      quantity: getChild('SLuong') || getChild('sluong') || getChild('Quantity') || '1',
      unitPrice: getChild('DGia') || getChild('dgia') || getChild('UnitPrice') || '0',
      total: getChild('ThTien') || getChild('thtien') || getChild('Amount') || '0',
      vatRate: getChild('TSuat') || getChild('tsuat') || getChild('VATRate') || '10%'
    });
  });

  return {
    sellerTaxId,
    sellerName,
    buyerTaxId,
    buyerName,
    series,
    invoiceNumber,
    invoiceDate,
    totalBeforeTax,
    taxAmount,
    totalAmount,
    items
  };
}
