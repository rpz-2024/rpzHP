export type JobSpecItem = {
  label: string; // 例: "雇用形態"
  value: string; // 例: "正社員 / 契約社員 / アルバイト"
};

export type CareerStep = {
  title: string; // 例: "新人社員"
  body: string; // 段落テキスト（改行は\n）
};

export type Occupation = {
  id: string; // アンカーID （kebab-case 推奨）
  title: string; // 日本語タイトル 例: "キッチンスタッフ"
  enTitle?: string; // 英語表記 例: "KITCHEN STAFF"
  summary: string; // リード文
  image?: string; // public 配下の相対パス（例: "/images/recruit/kitchen.jpg"）
  responsibilities: string[]; // 箇条書き
  steps: CareerStep[]; // タイムライン
};

export type CareersContent = {
  heroTitle: string; // ページ見出し（太文字）
  heroLead?: string; // リード文
  jobSpecsTitle: string; // "募集要項" 等
  jobSpecs: JobSpecItem[]; // 募集要項カード
  occupationsTitle: string; // "職種 OCCUPATION" 等
  occupations: Occupation[]; // 職種データ
  ctaText?: string; // CTA ボタン文言
  ctaHref?: string; // CTA リンク
};
