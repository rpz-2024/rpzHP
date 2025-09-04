import type { ContactFormData } from "./contact";

// メール送信関連の型定義
export type EmailTemplate = {
  html: string;
  text: string;
};

export type EmailData = {
  from: string;
  to: string;
  subject: string;
  html: string;
  text: string;
};

export type EmailSendResult = {
  id?: string;
  error?: string;
};

// メール生成に必要なメタデータ
export type EmailMetadata = {
  ip: string;
  userAgent: string;
  timestamp: Date;
};

// メール件名生成用の設定
export type SubjectConfig = {
  prefix: string;
  includeInquiryTypes: boolean;
};

// メール本文生成の入力データ
export type EmailGenerationInput = {
  formData: ContactFormData;
  metadata: EmailMetadata;
  inquiryTypeLabels: string[];
};
