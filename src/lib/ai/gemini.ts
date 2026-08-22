export class GeminiService {
  private apiKey: string;
  private endpoint = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:streamGenerateContent';

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

    const url = `${this.endpoint}?key=${this.apiKey}&alt=sse`;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Gemini API Error (${response.status}): ${errorText}`);
    }

    if (!response.body) {
      throw new Error('Response body is null');
    }

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
    try {
      const response = await fetch(`${this.endpoint}?key=${this.apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: 'Hello' }] }],
          generationConfig: { maxOutputTokens: 10 }
        })
      });
      return response.ok;
    } catch {
      return false;
    }
  }
}
