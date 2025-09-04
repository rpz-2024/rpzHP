import { z } from "zod";
import type { ContactFormData } from "@/types/contact";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "お名前は2文字以上で入力してください")
    .max(40, "お名前は40文字以内で入力してください"),
  furigana: z
    .string()
    .max(60, "ふりがなは60文字以内で入力してください")
    .refine((val) => {
      if (val === "") return true;
      return /^[あ-んー゙゚ゝゞ\s]+$/.test(val);
    }, "ふりがなはひらがなで入力してください")
    .optional(),
  phone: z
    .string()
    .min(1, "電話番号は必須項目です")
    .regex(
      /^0\d{1,4}-?\d{1,4}-?\d{3,4}$/,
      "正しい電話番号の形式で入力してください"
    ),
  email: z
    .string()
    .min(1, "メールアドレスは必須項目です")
    .email("正しいメールアドレスの形式で入力してください")
    .max(254, "メールアドレスは254文字以内で入力してください"),
  inquiryTypes: z
    .array(z.string())
    .min(1, "お問い合わせ種別を1つ以上選択してください"),
  content: z
    .string()
    .min(10, "お問い合わせ内容は10文字以上で入力してください")
    .max(1000, "お問い合わせ内容は1000文字以内で入力してください"),
  privacyAgreement: z
    .boolean()
    .refine((val) => val === true, "個人情報の取り扱いに同意してください"),
  website: z.string().optional(), // honeypot field
}) satisfies z.ZodType<ContactFormData>;

// 型の整合性を確保するための型チェック
export type ContactFormDataInferred = z.infer<typeof contactSchema>;
