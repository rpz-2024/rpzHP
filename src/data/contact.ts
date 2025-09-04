import type {
  FormPlaceholders,
  InquiryTypeOption,
  PrivacyPolicyContent,
} from "@/types/contact";

export const inquiryTypeOptions: InquiryTypeOption[] = [
  { value: "company", label: "会社について" },
  { value: "recruitment", label: "求人について" },
  { value: "property", label: "物件について" },
  { value: "stores", label: "各店舗について" },
  { value: "other", label: "その他" },
];

export const privacyPolicyContent: PrivacyPolicyContent = {
  title: "個人情報の取り扱いについて",
  description:
    "お客様からご提供いただいた個人情報は、以下の目的で利用いたします：",
  purposes: [
    "お問い合わせへの回答・対応",
    "サービスに関する情報提供",
    "お客様満足度向上のための分析",
  ],
  notice:
    "個人情報は適切に管理し、法令に基づく場合を除き、第三者への提供は行いません。詳細については、当社のプライバシーポリシーをご確認ください。",
};

export const formPlaceholders: FormPlaceholders = {
  name: "山田太郎",
  furigana: "やまだたろう",
  phone: "09012345678",
  email: "example@email.com",
};
