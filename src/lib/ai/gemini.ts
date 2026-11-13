export class GeminiService {
  private apiKey: string;
  private fallbackModels = [
    'gemini-3.8-flash',
    'gemini-3.7-flash',
    'gemini-3.6-flash',
    'gemini-3.5-flash',
    'gemini-3.5-flash-lite',
    'gemini-3.1-flash-lite'
  ];

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  async *streamChat(
    messages: { role: string; content: string; imageData?: string; imageMimeType?: string }[],
    systemPrompt: string
  ): AsyncGenerator<string> {
    const contents = messages.map(msg => {
      const parts: any[] = [{ text: msg.content }];
      
      if (msg.imageData && msg.imageMimeType) {
        // Strip data:image/...;base64, if present
        const base64Data = msg.imageData.includes('base64,') 
          ? msg.imageData.split('base64,')[1] 
          : msg.imageData;
          
        parts.push({
          inlineData: {
            mimeType: msg.imageMimeType,
            data: base64Data
          }
        });
      }

      return {
        role: msg.role === 'assistant' ? 'model' : 'user',
        parts
      };
    });

    const body = {
      contents,
      systemInstruction: {
        parts: [{ text: systemPrompt }]
      },
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 8192
      }
    };

    let response: Response | null = null;
    let usedModel = '';
    let lastError = '';

    for (const model of this.fallbackModels) {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:streamGenerateContent?key=${this.apiKey}&alt=sse`;
      
      try {
        const res = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body)
        });

        if (res.ok) {
          response = res;
          usedModel = model;
          break; // Success, exit fallback loop
        } else {
          const errorText = await res.text();
          lastError = `[${model}] Error ${res.status}: ${errorText}`;
          // Model fallback is expected (for example, an unavailable model alias).
          // If it's a 400 Bad Request for something like invalid image format, falling back might not help,
          // but we do it anyway. If it's 429 Too Many Requests or 404 Not Found, fallback is perfect.
        }
      } catch (e: any) {
        lastError = `[${model}] Network error: ${e.message}`;
        // Preserve the last error for the final user-facing failure message.
      }
    }

    if (!response) {
      throw new Error(`Tất cả các mô hình AI đều đang bận hoặc quá tải. Lỗi cuối cùng: ${lastError}`);
    }

    if (!response.body) {
      throw new Error(`Response body is null (Model used: ${usedModel})`);
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder('utf-8');
    let buffer = '';

    const parseEvent = (event: string): string[] => {
      const data = event
        .split(/\r?\n/)
        .filter(line => line.startsWith('data:'))
        .map(line => line.slice(5).replace(/^ /, ''))
        .join('\n');
      if (!data || data === '[DONE]') return [];
      try {
        const payload = JSON.parse(data);
        const candidate = payload.candidates?.[0];
        const parts = candidate?.content?.parts || [];
        return parts.filter((part: any) => typeof part.text === 'string').map((part: any) => part.text);
      } catch {
        throw new Error('Gemini trả về một sự kiện dữ liệu không đọc được.');
      }
    };

    try {
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        let boundary = buffer.search(/\r?\n\r?\n/);
        while (boundary >= 0) {
          const event = buffer.slice(0, boundary);
          const delimiter = buffer.slice(boundary).match(/^\r?\n\r?\n/)?.[0] || '\n\n';
          buffer = buffer.slice(boundary + delimiter.length);
          for (const text of parseEvent(event)) yield text;
          boundary = buffer.search(/\r?\n\r?\n/);
        }
      }
      buffer += decoder.decode();
      if (buffer.trim()) {
        for (const text of parseEvent(buffer)) yield text;
      }
    } finally {
      reader.releaseLock();
    }
  }

  async testConnection(): Promise<boolean> {
    for (const model of this.fallbackModels) {
      try {
        const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${this.apiKey}`;
        const response = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: 'Hello' }] }],
            generationConfig: { maxOutputTokens: 10 }
          })
        });
        
        if (response.ok) {
          return true; // Return true as soon as one model works
        }
      } catch {
        continue;
      }
    }
    return false;
  }
}
