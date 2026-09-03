import * as pdfjsLib from 'pdfjs-dist';
// @ts-ignore
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.min.mjs?url';

if (typeof window !== 'undefined' && pdfjsLib.GlobalWorkerOptions) {
  pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;
}

export interface ExtractedPdfData {
  fileName: string;
  fileSize: string;
  numPages: number;
  extractedText: string;
  detectedNumber?: string;
  previewSnippet: string;
}

export async function extractTextFromPdf(file: File): Promise<ExtractedPdfData> {
  const arrayBuffer = await file.arrayBuffer();
  const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer });
  const pdfDoc = await loadingTask.promise;
  const numPages = pdfDoc.numPages;

  let fullText = '';
  // Trích xuất tối đa 20 trang đầu để đảm bảo hiệu năng và đủ toàn bộ nội dung pháp lý chính
  const maxPagesToExtract = Math.min(numPages, 20);

  for (let pageNum = 1; pageNum <= maxPagesToExtract; pageNum++) {
    const page = await pdfDoc.getPage(pageNum);
    const textContent = await page.getTextContent();
    const pageText = textContent.items
      .map((item: any) => item.str || '')
      .join(' ');
    fullText += pageText + '\n\n';
  }

  const cleanedText = fullText.replace(/\s+/g, ' ').trim();

  // Thử nhận diện số hiệu văn bản trực tiếp từ nội dung PDF
  const numberRegex = /(\d+[\/\-]\d{4}[\/\-][A-ZĐa-zđ0-9\-]+)/i;
  const match = cleanedText.match(numberRegex);
  const detectedNumber = match ? match[1].toUpperCase() : undefined;

  // Format file size
  const sizeInKb = (file.size / 1024).toFixed(1);
  const fileSize = file.size > 1024 * 1024 
    ? `${(file.size / (1024 * 1024)).toFixed(2)} MB` 
    : `${sizeInKb} KB`;

  // Đoạn trích xem trước (250 ký tự đầu)
  const previewSnippet = cleanedText.substring(0, 300) + (cleanedText.length > 300 ? '...' : '');

  return {
    fileName: file.name,
    fileSize,
    numPages,
    extractedText: cleanedText,
    detectedNumber,
    previewSnippet,
  };
}
