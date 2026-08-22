import { Decree, Category } from '@/types/decree';

export class GoogleSheetsService {
  private apiKey: string;
  private spreadsheetId: string;
  
  constructor(apiKey: string, spreadsheetId: string) {
    this.apiKey = apiKey;
    this.spreadsheetId = spreadsheetId;
  }
  
  async fetchSheet(sheetName: string): Promise<string[][]> {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${this.spreadsheetId}/values/${sheetName}?key=${this.apiKey}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch sheet ${sheetName}: ${response.statusText}`);
    }
    const data = await response.json();
    return data.values || [];
  }
  
  async fetchDecrees(): Promise<Decree[]> {
    const rows = await this.fetchSheet('decrees');
    if (rows.length === 0) return [];
    
    const headers = rows[0];
    const dataRows = rows.slice(1);
    
    return this.parseRows<Decree>(headers, dataRows).map(d => ({
      ...d,
      id: d.id || crypto.randomUUID()
    }));
  }
  
  async fetchCategories(): Promise<Category[]> {
    const rows = await this.fetchSheet('categories');
    if (rows.length === 0) return [];
    
    const headers = rows[0];
    const dataRows = rows.slice(1);
    
    return this.parseRows<Category>(headers, dataRows);
  }
  
  private parseRows<T>(headers: string[], rows: string[][]): T[] {
    return rows.map(row => {
      const obj: any = {};
      headers.forEach((header, index) => {
        obj[header] = row[index] || '';
      });
      return obj as T;
    });
  }
}
