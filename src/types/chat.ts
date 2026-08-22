export interface ChatAttachment {
  type: 'image' | 'file'
  name: string
  url?: string
  data?: string // base64
  mimeType?: string
  size?: number
}

export interface ChatMessage {
  id: string
  role: 'user' | 'assistant'
  content: string
  attachments?: ChatAttachment[]
  timestamp: string | number
}

export interface ChatSession {
  id: string
  title: string
  messages: ChatMessage[]
  createdAt: string | number
  updatedAt: string | number
}
