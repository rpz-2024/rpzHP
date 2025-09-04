// API関連の型定義
export type ApiResponse<T = unknown> = {
  success: boolean;
  data?: T;
  error?: string;
};

export type ApiError = {
  success: false;
  error: string;
};

export type ApiSuccess<T = unknown> = {
  success: true;
  data?: T;
};

// レート制限関連
export type RateLimitEntry = {
  timestamp: number;
  count: number;
};

export type RateLimitConfig = {
  windowMs: number;
  maxRequests: number;
};

// 環境変数の型
export type ContactEnvVars = {
  RESEND_API_KEY: string;
  CONTACT_TO: string;
  CONTACT_FROM: string;
};
