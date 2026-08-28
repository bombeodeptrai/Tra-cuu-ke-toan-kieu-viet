import Fuse from 'fuse.js';
import { Decree } from '@/types/decree';
import { RAG_CONTEXT_TEMPLATE } from './prompts';

export function findRelevantDecrees(query: string, decrees: Decree[], topK = 15): Decree[] {
  if (!query || decrees.length === 0) return [];

  const lowerQuery = query.toLowerCase();
  // Extract numbers from query to boost exact matches (e.g., "200" in "thông tư 200")
  const numbers = lowerQuery.match(/\d+/g) || [];

  const scored = decrees.map(d => {
    let score = 0;
    const searchString = `${d.decree_number} ${d.title} ${d.summary}`.toLowerCase();
    
    // Direct substring match gives a huge boost
    if (searchString.includes(lowerQuery)) score += 100;
    
    // Check for number matches (very important for legal docs)
    for (const num of numbers) {
      if (d.decree_number.includes(num)) score += 50;
      else if (searchString.includes(num)) score += 10;
    }

    // Keyword matching
    const words = lowerQuery.split(' ').filter(w => w.length > 2);
    for (const word of words) {
      if (d.decree_number.toLowerCase().includes(word)) score += 20;
      else if (d.title.toLowerCase().includes(word)) score += 5;
      else if (searchString.includes(word)) score += 1;
    }

    return { item: d, score };
  });

  scored.sort((a, b) => b.score - a.score);
  
  // Return topK items that have at least some relevance (score > 0)
  return scored.filter(s => s.score > 0).slice(0, topK).map(s => s.item);
}

export async function buildRAGContext(query: string, decrees: Decree[]): Promise<string> {
  const relevantDecrees = findRelevantDecrees(query, decrees);
  
  if (relevantDecrees.length === 0) return query;

  // We only fetch full text for the TOP 2 decrees to avoid token overflow and slow response.
  // The rest will only provide their summaries.
  const decreesWithContext = await Promise.all(
    relevantDecrees.map(async (d, index) => {
      let fullContent = '';
      if (index < 2 && d.content_url) {
        try {
          const basePath = import.meta.env.BASE_URL || '/';
          const fetchUrl = basePath.replace(/\/$/, '') + d.content_url;
          const res = await fetch(fetchUrl);
          if (res.ok) {
            fullContent = await res.text();
          }
        } catch (e) {
          console.warn('Failed to fetch full text for RAG', d.decree_number);
        }
      }
      return `Văn bản: ${d.decree_number}\nTiêu đề: ${d.title}\nTóm tắt: ${d.summary}\nNội dung chính:\n${fullContent || '(Chỉ có tóm tắt)'}`;
    })
  );

  const contextStr = decreesWithContext.join('\n\n---\n\n');

  return RAG_CONTEXT_TEMPLATE.replace('{context}', contextStr) + `\n\nCâu hỏi: ${query}`;
}
