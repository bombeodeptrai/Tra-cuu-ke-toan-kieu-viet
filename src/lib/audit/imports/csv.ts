export interface CsvParseOptions {
  decimalFormat?: 'vi' | 'en'; // 'vi': 1.234,50 ; 'en': 1,234.50
  delimiter?: string;
}

export interface CsvParseResult {
  headers: string[];
  rows: Record<string, string>[];
  totalRows: number;
  detectedDelimiter: string;
}

export function detectDelimiter(headerLine: string): string {
  // Count delimiters outside quotes
  let inQuotes = false;
  let commas = 0;
  let semicolons = 0;
  let tabs = 0;

  for (let i = 0; i < headerLine.length; i++) {
    const char = headerLine[i];
    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (!inQuotes) {
      if (char === ',') commas++;
      else if (char === ';') semicolons++;
      else if (char === '\t') tabs++;
    }
  }

  if (semicolons > commas && semicolons > tabs) return ';';
  if (tabs > commas && tabs > semicolons) return '\t';
  return ',';
}

export function parseCsvLine(line: string, delimiter: string): string[] {
  const fields: string[] = [];
  let current = '';
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (char === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === delimiter && !inQuotes) {
      fields.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }
  fields.push(current.trim());
  return fields;
}

export function parseCsv(text: string, options: CsvParseOptions = {}): CsvParseResult {
  // Remove BOM if present
  let clean = text.replace(/^\uFEFF/, '');
  const lines = clean.split(/\r\n|\n|\r/).filter(l => l.trim().length > 0);

  if (lines.length === 0) {
    return { headers: [], rows: [], totalRows: 0, detectedDelimiter: ',' };
  }

  const delimiter = options.delimiter || detectDelimiter(lines[0]);
  const headers = parseCsvLine(lines[0], delimiter).map(h => h.replace(/^["']|["']$/g, '').trim());

  const rows: Record<string, string>[] = [];
  for (let i = 1; i < lines.length; i++) {
    const fields = parseCsvLine(lines[i], delimiter);
    const row: Record<string, string> = {};
    headers.forEach((h, idx) => {
      row[h] = fields[idx] !== undefined ? fields[idx].replace(/^["']|["']$/g, '') : '';
    });
    rows.push(row);
  }

  return {
    headers,
    rows,
    totalRows: rows.length,
    detectedDelimiter: delimiter
  };
}

export function parseNumberString(val: string, format: 'vi' | 'en' = 'vi'): string {
  if (!val) return '0';
  let s = val.trim();
  // Handle parentheses as negative: (100) -> -100
  if (s.startsWith('(') && s.endsWith(')')) {
    s = '-' + s.slice(1, -1).trim();
  }

  if (format === 'vi') {
    // 1.234.567,89 -> 1234567.89
    s = s.replace(/\./g, '').replace(/,/g, '.');
  } else {
    // 1,234,567.89 -> 1234567.89
    s = s.replace(/,/g, '');
  }

  const num = parseFloat(s);
  return isNaN(num) ? '0' : s;
}
