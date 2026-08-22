export class GeminiService {
  private apiKey: string;
  private fallbackModels = [
    'gemini-3.5-flash',
    'gemini-3.1-flash-lite',
    'gemini-2.5-flash',
    'gemini-2.5-flash-lite'
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
          console.warn(`⚠️ [AI Fallback] ${model} failed. Trying next model...`, lastError);
          // If it's a 400 Bad Request for something like invalid image format, falling back might not help,
          // but we do it anyway. If it's 429 Too Many Requests or 404 Not Found, fallback is perfect.
        }
      } catch (e: any) {
        lastError = `[${model}] Network error: ${e.message}`;
        console.warn(`⚠️ [AI Fallback] ${model} network error. Trying next model...`, e);
      }
    }

    if (!response) {
      throw new Error(`Tất cả các mô hình AI đều đang bận hoặc quá tải. Lỗi cuối cùng: ${lastError}`);
    }

    if (!response.body) {
      throw new Error(`Response body is null (Model used: ${usedModel})`);
    }

    console.log(`✅ [AI] Successfully connected using model: ${usedModel}`);

    const reader = response.body.getReader();
    const decoder = new TextDecoder('utf-8');
    let buffer = '';

    try {
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        
        buffer = lines.pop() || '';

        for (const line of lines) {
          if (line.startsWith('data: ')) {
            const dataStr = line.slice(6);
            if (dataStr === '[DONE]') continue;

            try {
              const data = JSON.parse(dataStr);
              if (data.candidates && data.candidates[0]?.content?.parts?.[0]?.text) {
                yield data.candidates[0].content.parts[0].text;
              }
            } catch (e) {
              console.warn('Error parsing SSE chunk:', e);
            }
          }
        }
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
