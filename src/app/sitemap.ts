// src/app/sitemap.ts
import type { MetadataRoute } from "next";

// 環境変数が無い時でも動くようにデフォルトを用意
const SITE_URL = process.env.SITE_URL || "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE_URL}/`, changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE_URL}/aboutus`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/brands`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/careers`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/company`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/contact`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/news`, changeFrequency: "daily", priority: 0.7 },
  ];
}
