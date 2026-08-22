import Fuse from 'fuse.js';
import { Decree } from '@/types/decree';
import { RAG_CONTEXT_TEMPLATE } from './prompts';

export function findRelevantDecrees(query: string, decrees: Decree[], topK = 3): Decree[] {
  if (!query || decrees.length === 0) return [];

  const fuse = new Fuse(decrees, {
    keys: ['title', 'decree_number', 'content', 'summary'],
    includeScore: true,
    threshold: 0.4,
  });

  const results = fuse.search(query);
  return results.slice(0, topK).map(result => result.item);
}

export function buildRAGContext(query: string, decrees: Decree[]): string {
  const relevantDecrees = findRelevantDecrees(query, decrees);
  
  if (relevantDecrees.length === 0) return query;

  const contextStr = relevantDecrees
    .map(d => `Văn bản: ${d.decree_number}\nTiêu đề: ${d.title}\nTóm tắt: ${d.summary}\nNội dung chính: ${d.content}`)
    .join('\n\n---\n\n');

  return RAG_CONTEXT_TEMPLATE.replace('{context}', contextStr) + `\n\nCâu hỏi: ${query}`;
}
