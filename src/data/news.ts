
import type { NewsArticle } from "@/types/news";

export const news: NewsArticle[] = [
  {
    id: "2026-03-13",
    slug: "tabelog-hotrst",
    title: "食べログホットレストラン2026に選出されました",
    date: "2026/3/13",
    category: "ニュース",
    excerpt:
      "『蒸とアテふぅふぅ 京都駅前店』が食べログホットレストラン2026に選出されました。",
    contentHtml: 
    `
    <a class="text-blue-500" href="https://s.tabelog.com/hot-restaurant/" ">食べログホットレストラン2026</a>
    `
     
  },
  
  {
    id: "2026-01-08",
    slug: "jokigen-yasutomo-tv",
    title: "『蒸キゲン〜jokigen〜』やすとも・友近のキメツケ!に登場しました",
    date: "2026/1/8",
    category: "ニュース",
    excerpt: "『蒸キゲン〜jokigen〜』やすとも・友近のキメツケ!に登場しました。",
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
    contentHtml: `
    `,
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