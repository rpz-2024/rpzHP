import type { ContactEnvVars } from "@/types/api";

/**
 * honeypot フィールドをチェックする
 * spam bot が自動入力することを検知する
 */
export function checkHoneypot(honeypotValue: string | undefined): boolean {
  // honeypot フィールドに値が入っている場合はspam
  return honeypotValue?.trim() !== "";
}

/**
 * 必要な環境変数が設定されているかチェックする
 */
export function validateEnvVars(): {
  isValid: boolean;
  missingVars: string[];
  envVars?: ContactEnvVars;
} {
  const missingVars: string[] = [];

  if (!process.env.RESEND_API_KEY) {
    missingVars.push("RESEND_API_KEY");
  }

  if (!process.env.CONTACT_TO) {
    missingVars.push("CONTACT_TO");
  }

  if (!process.env.CONTACT_FROM) {
    missingVars.push("CONTACT_FROM");
  }

  if (missingVars.length > 0) {
    return {
      isValid: false,
      missingVars,
    };
  }

  return {
    isValid: true,
    missingVars: [],
    envVars: {
      RESEND_API_KEY: process.env.RESEND_API_KEY!,
      CONTACT_TO: process.env.CONTACT_TO!,
      CONTACT_FROM: process.env.CONTACT_FROM!,
    },
  };
}

/**
 * セキュアなエラーメッセージを生成する
 * 内部エラーの詳細を外部に漏らさない
 */
export function createSecureErrorMessage(
  error: unknown,
  fallbackMessage = "処理中にエラーが発生しました"
): string {
  // 本番環境では詳細なエラーメッセージを隠す
  if (process.env.NODE_ENV === "production") {
    return fallbackMessage;
  }

  // 開発環境では詳細なエラーメッセージを表示
  if (error instanceof Error) {
    return error.message;
  }

  return fallbackMessage;
}
