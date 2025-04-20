// Basic types for the Model Context Protocol

export interface ModelContext {
  id: string;
  name: string;
  description?: string;
  parameters: Record<string, any>;
  metadata: Record<string, any>;
}

export interface ModelContextResponse {
  success: boolean;
  context?: ModelContext;
  error?: string;
}

export interface ModelContextOptions {
  baseUrl?: string;
  apiKey?: string;
  timeout?: number;
}