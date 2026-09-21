import express from 'express';
const router = express.Router();
import * as aiService from '../services/ai.js';

// POST /api/chat/messages
router.post('/messages', async (req, res) => {
  try {
    const { sessionId, clientMessageId, caseId, question: q, history, message, history, selectedDocumentVersionIds } = req.body;
    const q = question || message;
    
    // Do NOT read tenant from body (assume it's from auth middleware)
    const tenantId = req.tenantId || req.user?.tenantId; 

    if (!q) {
      return res.status(400).json({ error: 'Question is required' });
    }

    const stream = await aiService.streamChatResponse({
      sessionId,
      caseId,
      question: q, history,
      selectedDocumentVersionIds,
      tenantId
    });

    // Setup headers for streaming
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.setHeader('Transfer-Encoding', 'chunked');

    for await (const chunk of stream) {
      const chunkText = chunk.text();
      res.write(chunkText);
    }
    
    res.end();
  } catch (error) {
    console.error('Error in chat stream route:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
