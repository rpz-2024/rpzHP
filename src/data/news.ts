
import type { NewsArticle } from "@/types/news";

export const news: NewsArticle[] = [
  {
    id: "2026-03-13",
    slug: "tabelog-hotrst",
    title: "HOTレストラン2026に選出されました",
    date: "2026/3/13",
    category: "ニュース",
    excerpt:
      "『蒸とアテふぅふぅ 京都駅前店』がHOTレストラン2026に選出されました。",
    heroImage: "/images/news/1200x675.png",
    contentHtml: `
     
    `,
  },
  {
    id: "2026-02-27",
    slug: "pokupoku-open",
    title: "『鉄板スタンド酒場 ぽくぽーく』オープンのお知らせ",
    date: "2026/2/27",
    category: "お知らせ",
    excerpt:
      "『鉄板スタンド酒場 ぽくぽーく』がオープンしました。",
    heroImage: "/images/news/1600x900.png",
    contentHtml: `
     
    `,
  },
  {
    id: "2026-02-01",
    slug: "jokigen-toyota-open",
    title: "『蒸キゲン〜jokigen〜』豊田店オープンのお知らせ",
    date: "2026/2/1",
    category: "お知らせ",
    excerpt:
      "『蒸キゲン〜jokigen〜』豊田店がオープンしました。",
    contentHtml: `
     
    `,
  },
  {
    id: "2026-01-08",
    slug: "jokigen-yasutomo-tv",
    title: "『蒸キゲン〜jokigen〜』やすとも・友近のキメツケ!に登場しました",
    date: "2026/1/8",
    category: "ニュース",
    excerpt: "『蒸キゲン〜jokigen〜』やすとも・友近のキメツケ!に登場しました。",
    heroImage: "/images/news/1200x675.png",
    contentHtml: `
     
    `,
  },
  {
    id: "2025-09-12",
    slug: "jokigen-karasumaoike-open",
    title: "『蒸キゲン〜jokigen〜』烏丸御池店オープンのお知らせ",
    date: "2025/9/12",
    category: "お知らせ",
    excerpt: "『蒸キゲン〜jokigen〜』烏丸御池店がオープンしました。",
    heroImage: "/images/news/1600x900.png",
    contentHtml: `
    `,
  },
  {
    id: "2025-08-19",
    slug: "fufu-rokkaku-yastutomo-tv",
    title: "『蒸とアテふぅふぅ 烏丸六角店』やすとも・友近のキメツケ!に登場しました",
    date: "2025/6/18",
    category: "お知らせ",
    excerpt: "『蒸とアテふぅふぅ 烏丸六角店』やすとも・友近のキメツケ!に登場しました。",
    heroImage: "/images/news/1600x900.png",
    contentHtml: `
    `,
  },

  // ↓ ここから追加していけばOK
  {
    id: "2025-06-02",
    slug: "corporate-site-renewal",
    title: "株式会社RPZ コーポレートサイトをリニューアルしました",
    date: "2025/6/2",
    category: "ニュース",
    excerpt: "コーポレートサイトをリニューアルしました。",
    heroImage: "/images/news/corporate-site-renewal.jpg",
    contentHtml: `<p>このたびコーポレートサイトをリニューアルいたしました。</p>`,
  },
  {
    id: "2025-05-09",
    slug: "recruit-update",
    title: "採用情報を更新しました",
    date: "2025/5/9",
    category: "採用",
    excerpt: "採用ページの情報を更新しました。",
    heroImage: "/images/news/recruit-update.jpg",
    contentHtml: `<p>採用情報を更新しました。</p>`,
  },
  {
    id: "2025-05-07",
    slug: "spring-fair",
    title: "春のおすすめフェア開催のお知らせ",
    date: "2025/5/7",
    category: "イベント",
    excerpt: "春のおすすめフェアを開催します。",
    heroImage: "/images/news/spring-fair.jpg",
    contentHtml: `<p>春のおすすめフェアを開催します。</p>`,
  },
  {
    id: "2025-04-30",
    slug: "gw-schedule",
    title: "GW期間中の営業スケジュールについて",
    date: "2025/4/30",
    category: "お知らせ",
    excerpt: "GW期間中の営業スケジュールをご案内します。",
    heroImage: "/images/news/gw-schedule.jpg",
    contentHtml: `<p>GW期間中の営業スケジュールをご案内します。</p>`,
  },
  {
    id: "2025-04-03",
    slug: "jokigen-new-store",
    title: "『蒸キゲン〜jokigen〜』新店舗準備開始のお知らせ",
    date: "2025/4/3",
    category: "ニュース",
    excerpt: "新店舗準備開始のお知らせです。",
    heroImage: "/images/news/jokigen-new-store.jpg",
    contentHtml: `<p>新店舗準備を開始しました。</p>`,
  },
  {
    id: "2025-03-19",
    slug: "new-brand-launch",
    title: "新ブランド立ち上げに関するお知らせ",
    date: "2025/3/19",
    category: "ニュース",
    excerpt: "新ブランド立ち上げに関するお知らせです。",
    heroImage: "/images/news/new-brand-launch.jpg",
    contentHtml: `<p>新ブランド立ち上げに関するお知らせです。</p>`,
  },
  {
    id: "2025-03-05",
    slug: "price-revision",
    title: "一部メニュー価格改定のお知らせ",
    date: "2025/3/5",
    category: "お知らせ",
    excerpt: "一部メニュー価格改定についてのお知らせです。",
    heroImage: "/images/news/price-revision.jpg",
    contentHtml: `<p>一部メニュー価格改定についてのお知らせです。</p>`,
  },
];

const parseNewsDate = (date: string) => {
  const parts = date.split("/");

  if (parts.length !== 3) return 0;

  const year = Number(parts[0]);
  const month = Number(parts[1]);
  const day = Number(parts[2]);

  if (Number.isNaN(year) || Number.isNaN(month) || Number.isNaN(day)) {
    return 0;
  }

  return new Date(year, month - 1, day).getTime();
};

export const sortedNews = [...news].sort(
  (a, b) => parseNewsDate(b.date) - parseNewsDate(a.date)
);

export const latestNews = sortedNews.slice(0, 3);

export const NEWS_PER_PAGE = 10;

export const getNewsPage = (page: number) => {
  const start = (page - 1) * NEWS_PER_PAGE;
  return sortedNews.slice(start, start + NEWS_PER_PAGE);
};

export const getTotalNewsPages = () => {
  return Math.ceil(sortedNews.length / NEWS_PER_PAGE);
};

export const getNewsBySlug = (slug: string) => {
  return sortedNews.find((item) => item.slug === slug);
};