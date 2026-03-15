export type NewsArticle = {
  id: string;
  slug: string;
  title: string;
  date: string; // 例: 2025/7/8
  category: string;
  excerpt?: string;
  heroImage?: string;
  contentHtml: string;
};