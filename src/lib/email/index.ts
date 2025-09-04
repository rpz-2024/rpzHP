import type {
  EmailTemplate,
  EmailGenerationInput,
  SubjectConfig,
} from "@/types/email";

/**
 * HTMLメール本文を生成する
 */
export function generateHTMLContent(input: EmailGenerationInput): string {
  const { formData, metadata, inquiryTypeLabels } = input;

  const sendTime = metadata.timestamp.toLocaleString("ja-JP", {
    timeZone: "Asia/Tokyo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return `
		<html>
			<head>
				<meta charset="UTF-8">
				<style>
					body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
					.container { max-width: 600px; margin: 0 auto; padding: 20px; }
					.header { background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin-bottom: 20px; }
					.field { margin-bottom: 15px; }
					.label { font-weight: bold; color: #555; }
					.value { margin-top: 5px; }
					.content-box { background-color: #f8f9fa; padding: 15px; border-radius: 5px; white-space: pre-wrap; }
					.meta { margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 0.9em; color: #666; }
				</style>
			</head>
			<body>
				<div class="container">
					<div class="header">
						<h2>お問い合わせフォームからの送信</h2>
					</div>

                    <br />

					<div class="field">
						<div class="label">お名前</div>
						<div class="value">${formData.name}</div>
                        ${
                          formData.furigana
                            ? `
					<div class="value">${formData.furigana}</div>
					`
                            : ""
                        }
					</div>
					
                    <br />
					
					<div class="field">
						<div class="label">電話番号</div>
						<div class="value">${formData.phone}</div>
					</div>

                    <br />

					<div class="field">
						<div class="label">メールアドレス</div>
						<div class="value">${formData.email}</div>
					</div>

                    <br />

					<div class="field">
						<div class="label">お問い合わせ種別</div>
						<div class="value">${inquiryTypeLabels.join(" / ")}</div>
					</div>

                    <br />

					<div class="field">
						<div class="label">お問い合わせ内容</div>
						<div class="content-box">${formData.content}</div>
					</div>

                    <br />
					
					<div class="meta">
						<div><strong>送信時刻:</strong> ${sendTime}</div>
						<div><strong>送信者IP:</strong> ${metadata.ip}</div>
						<div><strong>ユーザーエージェント:</strong> ${metadata.userAgent}</div>
					</div>
				</div>
			</body>
		</html>
	`;
}

/**
 * テキストメール本文を生成する
 */
export function generateTextContent(input: EmailGenerationInput): string {
  const { formData, metadata, inquiryTypeLabels } = input;

  const sendTime = metadata.timestamp.toLocaleString("ja-JP", {
    timeZone: "Asia/Tokyo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return `
お問い合わせフォームからの送信

【お名前】
${formData.name}

${
  formData.furigana
    ? `【ふりがな】
${formData.furigana}

`
    : ""
}【電話番号】
${formData.phone}

【メールアドレス】
${formData.email}

【お問い合わせ種別】
${inquiryTypeLabels.join(" / ")}

【お問い合わせ内容】
${formData.content}

──────────────────────────
送信時刻: ${sendTime}
送信者IP: ${metadata.ip}
ユーザーエージェント: ${metadata.userAgent}
	`.trim();
}

/**
 * メール件名を生成する
 */
export function generateEmailSubject(
  name: string,
  inquiryTypeLabels: string[],
  config: SubjectConfig = {
    prefix: "[お問い合わせ]",
    includeInquiryTypes: true,
  }
): string {
  const { prefix, includeInquiryTypes } = config;

  if (includeInquiryTypes && inquiryTypeLabels.length > 0) {
    return `${prefix} ${name} さん (${inquiryTypeLabels.join(" / ")})`;
  }

  return `${prefix} ${name} さん`;
}

/**
 * メールテンプレートを生成する
 */
export function generateEmailTemplate(
  input: EmailGenerationInput
): EmailTemplate {
  return {
    html: generateHTMLContent(input),
    text: generateTextContent(input),
  };
}
