const base = (import.meta.env.VITE_API_BASE_URL ?? '').replace(/\/$/, '');

export const apiClient = {
  postStream: async (path: string, body: any, options?: RequestInit) => {
    const response = await fetch(${base}, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      body: JSON.stringify(body),
      ...options,
    });
    if (!response.ok) throw new Error(API Error:  );
    return response;
  },
  get: async (path: string, options?: RequestInit) => {
    const response = await fetch(${base}, options);
    if (!response.ok) throw new Error(API Error:  );
    return response.json();
  },
  post: async (path: string, body: any, options?: RequestInit) => {
    const response = await fetch(${base}, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      body: JSON.stringify(body),
      ...options,
    });
    if (!response.ok) throw new Error(API Error:  );
    return response.json();
  },
  getDocuments: async () => {
    const response = await fetch(${base}/api/documents);
    if (!response.ok) throw new Error(API Error:  );
    return response.json();
  },
  getDocumentById: async (id: string) => {
    const response = await fetch(${base}/api/documents/);
    if (!response.ok) throw new Error(API Error:  );
    return response.json();
  }
};
