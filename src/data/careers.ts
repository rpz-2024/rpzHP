import type { CareersContent } from "@/types/careers";

export const CAREERS_CONTENT: CareersContent = {
  heroTitle: "募集要項",
  heroLead: "私たちと一緒に、“食×RPZ体験”をつくりませんか。",

  jobSpecsTitle: "募集要項",
  jobSpecs: [
    { label: "雇用形態", value: "正社員 / 契約社員 / アルバイト" },
    { label: "給与", value: "月給 24万円〜（経験・能力を考慮）" },
    { label: "勤務地", value: "京都（配属先による）" },
    { label: "勤務時間", value: "シフト制（例: 17:00–23:00 / 13:00–23:00）" },
    { label: "休日・休暇", value: "週休2日・年末年始休暇  ほか" },
    { label: "福利厚生", value: "各種保険完備 / 交通費支給  ほか" },
  ],

  occupationsTitle: "職種 OCCUPATION",
  occupations: [
    {
      id: "kitchen",
      title: "キッチン",
      enTitle: "KITCHEN STAFF",
      summary:
        "未経験からでも段階的にスキルアップできる環境です。衛生・仕込み・調理・メニュー提案まで先輩が丁寧にフォローします。",
      image: "/images/recruit/kitchen.jpg",
      responsibilities: [
        "料理の仕込み・調理",
        "衛生・品質管理",
        "在庫・食材管理",
        "効率的なキッチン運営",
        "メニュー開発補助",
      ],
      steps: [
        {
          title: "新人社員",
          body: "基本オペレーションと衛生基準を習得。現場に慣れます。",
        },
        {
          title: "一般社員",
          body: "仕込み・調理を主体的に担当。後輩サポートにも関与。",
        },
        {
          title: "料理長",
          body: "厨房全体の衛生・コスト管理とメニュー企画を担います。",
        },
        {
          title: "エリア料理長 / マネージャー",
          body: "複数店舗のクオリティ統括、人材育成、標準化を推進。",
        },
      ],
    },
    {
      id: "hall",
      title: "ホール",
      enTitle: "HALL STAFF",
      summary:
        "接客・配膳・予約対応などを通じて、お客様の体験価値を生み出します。",
      image: "/images/recruit/hall.jpg",
      responsibilities: [
        "接客・配膳・レジ対応",
        "予約・席案内・フロア運用",
        "顧客要望のヒアリング・改善提案",
        "売場づくり・POP整備",
        "SNS発信 / イベント運営（任意）",
      ],
      steps: [
        {
          title: "新人社員",
          body: "基本接客とホスピタリティ基準を習得。現場に慣れます。",
        },
        { title: "一般社員", body: "店舗運営・マニュアル管理・スタッフ育成。" },
        {
          title: "副店長 / 店長",
          body: "売上・人員・在庫・CS を統合的にマネジメント。",
        },
        {
          title: "スーパーバイザー / マネージャー",
          body: "複数店舗の数値管理・教育設計・施策展開を担います。",
        },
      ],
    },
    {
      id: "hq",
      title: "本社業務",
      enTitle: "HEADQUARTERS",
      summary:
        "管理・企画部門として、現場と連携し会社全体の仕組みづくりを行います。",
      image: "/images/recruit/hq.jpg",
      responsibilities: [
        "採用・人事制度運用",
        "広報・SNS・ブランディング",
        "販促企画・新業態運営",
        "数値管理・オペレーション標準化",
        "ツール導入・改善提案",
      ],
      steps: [
        {
          title: "アシスタント",
          body: "基礎業務を習得し、課題把握とドキュメント化を担当。",
        },
        {
          title: "担当 / リーダー",
          body: "小〜中規模プロジェクトを主担当として推進。",
        },
        {
          title: "マネージャー",
          body: "KPI 設計・効果検証・人材育成で全社最適化を図る。",
        },
      ],
    },
  ],

  ctaText: "応募フォームへ",
  ctaHref: "/contact",
};
