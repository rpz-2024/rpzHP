// src/lib/wordpress-news.ts
import type { News } from "@/types/news";

type WpRendered = {
  rendered: string;
};

type WpPost = {
  id: number;
  slug: string;
  date: string;
  title: WpRendered;
  excerpt: WpRendered;
  content: WpRendered;
  categories: number[];
};

type WpCategory = {
  id: number;
  name: string;
  slug: string;
};

const WP_BASE = process.env.WORDPRESS_API_BASE_URL;

if (!WP_BASE) {
  throw new Error("WORDPRESS_API_BASE_URL is not set");
}

async function wpFetch(path: string) {
  return fetch(`${WP_BASE}${path}`, {
    next: { revalidate: 300 },
  });
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "").replace(/&nbsp;/g, " ").trim();
}

function decodeHtml(text: string): string {
  return text
    .replace(/&#8217;/g, "'")
    .replace(/&#8220;/g, "“")
    .replace(/&#8221;/g, "”")
    .replace(/&#8230;/g, "…")
    .replace(/&#038;/g, "&")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"');
}

function formatDateToJp(dateString: string): string {
  const date = new Date(dateString);
  const y = date.getFullYear();
  const m = date.getMonth() + 1;
  const d = date.getDate();
  return `${y}/${m}/${d}`;
}

async function getCategoryMap(): Promise<Map<number, WpCategory>> {
  const res = await wpFetch("/categories?per_page=100");

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  const categories = (await res.json()) as WpCategory[];
  return new Map(categories.map((cat) => [cat.id, cat]));
}

function mapWpPostToNews(post: WpPost, categoryMap: Map<number, WpCategory>): News {
  const firstCategoryId = post.categories?.[0];
  const categoryName = firstCategoryId
    ? categoryMap.get(firstCategoryId)?.name ?? "ニュース"
    : "ニュース";

  return {
    id: String(post.id),
    slug: post.slug,
    title: decodeHtml(stripHtml(post.title.rendered)),
    date: formatDateToJp(post.date),
    category: categoryName,
    excerpt: decodeHtml(stripHtml(post.excerpt.rendered)),
    contentHtml: post.content.rendered,
  };
}

export async function getWpTotalNewsPages(perPage = 10): Promise<number> {
  const res = await wpFetch(`/posts?page=1&per_page=${perPage}&orderby=date&order=desc`);

  if (!res.ok) {
    throw new Error("Failed to fetch total pages");
  }

  const totalPages = Number(res.headers.get("X-WP-TotalPages") ?? "1");
  return Number.isNaN(totalPages) ? 1 : totalPages;
}

export async function getLatestWpNews(limit = 3): Promise<News[]> {
  const [postsRes, categoryMap] = await Promise.all([
    wpFetch(`/posts?per_page=${limit}&orderby=date&order=desc`),
    getCategoryMap(),
  ]);

  if (!postsRes.ok) {
    throw new Error("Failed to fetch latest posts");
  }

  const posts = (await postsRes.json()) as WpPost[];
  return posts.map((post) => mapWpPostToNews(post, categoryMap));
}

export async function getWpNewsPage(
  page = 1,
  perPage = 10
): Promise<{
  items: News[];
  totalPages: number;
}> {
  const [postsRes, categoryMap] = await Promise.all([
    wpFetch(`/posts?page=${page}&per_page=${perPage}&orderby=date&order=desc`),
    getCategoryMap(),
  ]);

  if (!postsRes.ok) {
    throw new Error("Failed to fetch paged posts");
  }

  const totalPages = Number(postsRes.headers.get("X-WP-TotalPages") ?? "1");
  const posts = (await postsRes.json()) as WpPost[];

  return {
    items: posts.map((post) => mapWpPostToNews(post, categoryMap)),
    totalPages: Number.isNaN(totalPages) ? 1 : totalPages,
  };
}

export async function getWpNewsBySlug(slug: string): Promise<News | null> {
  const [postsRes, categoryMap] = await Promise.all([
    wpFetch(`/posts?slug=${slug}`),
    getCategoryMap(),
  ]);

  if (!postsRes.ok) {
    throw new Error("Failed to fetch post by slug");
  }

  const posts = (await postsRes.json()) as WpPost[];
  const post = posts[0];

  if (!post) return null;

  return mapWpPostToNews(post, categoryMap);
}

export async function getAllWpNewsSlugs(): Promise<string[]> {
  const perPage = 100;
  const firstRes = await wpFetch(`/posts?page=1&per_page=${perPage}&orderby=date&order=desc`);

  if (!firstRes.ok) {
    throw new Error("Failed to fetch first posts page");
  }

  const totalPages = Number(firstRes.headers.get("X-WP-TotalPages") ?? "1");
  const firstPosts = (await firstRes.json()) as WpPost[];

  const allPosts = [...firstPosts];

  for (let page = 2; page <= totalPages; page += 1) {
    const res = await wpFetch(`/posts?page=${page}&per_page=${perPage}&orderby=date&order=desc`);

    if (!res.ok) {
      throw new Error(`Failed to fetch posts page ${page}`);
    }

    const posts = (await res.json()) as WpPost[];
    allPosts.push(...posts);
  }

  return allPosts.map((post) => post.slug);
}