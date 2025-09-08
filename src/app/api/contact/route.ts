import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { Resend } from "resend";

// Types
import type { ContactFormData } from "@/types/contact";
import type { ApiResponse, ApiError } from "@/types/api";
import type { EmailMetadata } from "@/types/email";

// Validation
import { contactSchema } from "@/lib/ validations";

// Data
import { inquiryTypeOptions } from "@/data/contact";

// Utils
import { getClientIP, checkRateLimit } from "@/lib/rateLimit";
import {
  checkHoneypot,
  validateEnvVars,
  createSecureErrorMessage,
} from "@/lib/security";
import { generateEmailTemplate, generateEmailSubject } from "@/lib/email";

export const runtime = "nodejs";

/**
 * メール送信処理
 */
async function sendContactEmail(
  formData: ContactFormData,
  metadata: EmailMetadata,
  resend: Resend,
  envVars: { CONTACT_FROM: string; CONTACT_TO: string }
) {
  // お問い合わせ種別のラベルを取得
  const inquiryTypeLabels = formData.inquiryTypes.map((type: string) => {
    const option = inquiryTypeOptions.find((opt) => opt.value === type);
    return option ? option.label : type;
  });

  // メール件名の生成
  const subject = generateEmailSubject(formData.name, inquiryTypeLabels);

  // メール本文の生成
  const { html, text } = generateEmailTemplate({
    formData,
    metadata,
    inquiryTypeLabels,
  });

  // Resend でメール送信
  const emailResult = await resend.emails.send({
    from: envVars.CONTACT_FROM,
    to: envVars.CONTACT_TO,
    subject,
    html,
    text,
  });

  if (emailResult.error) {
    throw new Error(`メール送信エラー: ${emailResult.error.message}`);
  }

  return emailResult;
}

/**
 * お問い合わせフォームのPOSTハンドラー
 */
export async function POST(
  request: NextRequest
): Promise<NextResponse<ApiResponse>> {
  try {
    // 環境変数のバリデーション
    const envValidation = validateEnvVars();
    if (!envValidation.isValid || !envValidation.envVars) {
      console.error("環境変数が不足しています:", envValidation.missingVars);
      const error: ApiError = {
        success: false,
        error: "サーバーの設定に問題があります",
      };
      return NextResponse.json(error, { status: 500 });
    }

    const { envVars } = envValidation;

    // IP アドレス取得とレート制限チェック
    const clientIP = getClientIP(request);
    if (!checkRateLimit(clientIP)) {
      const error: ApiError = {
        success: false,
        error:
          "送信が頻繁すぎます。しばらく時間をおいてから再度お試しください。",
      };
      return NextResponse.json(error, { status: 429 });
    }

    // JSON データを受信
    const body: unknown = await request.json();

    // honeypot チェック
    if (typeof body === "object" && body !== null && "website" in body) {
      const websiteValue = (body as { website?: unknown }).website;
      if (
        checkHoneypot(
          typeof websiteValue === "string" ? websiteValue : undefined
        )
      ) {
        console.log("Honeypot field filled, likely spam:", websiteValue);
        const error: ApiError = {
          success: false,
          error: "不正な送信です",
        };
        return NextResponse.json(error, { status: 400 });
      }
    }

    // zod でバリデーション
    const validationResult = contactSchema.safeParse(body);
    if (!validationResult.success) {
      const errors = validationResult.error.issues.map(
        (issue) => issue.message
      );
      const error: ApiError = {
        success: false,
        error: errors.join(", "),
      };
      return NextResponse.json(error, { status: 400 });
    }

    const formData = validationResult.data;

    // メタデータの準備
    const metadata: EmailMetadata = {
      ip: clientIP,
      userAgent: request.headers.get("user-agent") ?? "Unknown",
      timestamp: new Date(),
    };

    // Resend インスタンスの作成
    const resend = new Resend(envVars.RESEND_API_KEY);

    // メール送信
    const emailResult = await sendContactEmail(
      formData,
      metadata,
      resend,
      envVars
    );

    console.log("Email sent successfully:", emailResult.data);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form submission error:", error);
    const errorMessage = createSecureErrorMessage(
      error,
      "送信中にエラーが発生しました"
    );

    const apiError: ApiError = {
      success: false,
      error: errorMessage,
    };

    return NextResponse.json(apiError, { status: 500 });
  }
}
