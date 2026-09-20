const base = (import.meta.env.VITE_API_BASE_URL ?? '').replace(/\/$/, '');

export const apiClient = {
  postStream: async (path: string, body: any, options?: RequestInit) => {
    const response = await fetch(`${base}${path}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Bypass-Tunnel-Reminder': 'true',
        ...options?.headers,
      },
      body: JSON.stringify(body),
      ...options,
    });
    if (!response.ok) throw new Error(`API Error: ${response.statusText}`);
    return response;
  },
  get: async (path: string, options?: RequestInit) => {
    const response = await fetch(`${base}${path}`, {
      ...options,
      headers: {
        'Bypass-Tunnel-Reminder': 'true',
        ...options?.headers,
      }
    });
    if (!response.ok) throw new Error(`API Error: ${response.statusText}`);
    return response.json();
  },
  post: async (path: string, body: any, options?: RequestInit) => {
    const response = await fetch(`${base}${path}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Bypass-Tunnel-Reminder': 'true',
        ...options?.headers,
      },
      body: JSON.stringify(body),
      ...options,
    });
    if (!response.ok) throw new Error(`API Error: ${response.statusText}`);
    return response.json();
  },
  getDocuments: async () => {
    const response = await fetch(`${base}/api/documents`, { headers: { 'Bypass-Tunnel-Reminder': 'true' }});
    if (!response.ok) throw new Error(`API Error: ${response.statusText}`);
    return response.json();
  },
  getDocumentById: async (id: string) => {
    const response = await fetch(`${base}/api/documents/${id}`, { headers: { 'Bypass-Tunnel-Reminder': 'true' }});
    if (!response.ok) throw new Error(`API Error: ${response.statusText}`);
    return response.json();
  }
};
