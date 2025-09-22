// next.config.js (ESM)
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    typedRoutes: true,
  },

  async redirects() {
    return [
      // --- ドメイン正規化 ---
      // www あり → なし（常に https://rpz.jp へ）
      // ※「has: host」は Vercel 本番で有効。ローカル開発では効きません。
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.rpz.jp" }],
        destination: "https://rpz.jp/:path*",
        permanent: true,
      },

      // --- 旧パス/大文字表記 → 現行パス ---
      { source: "/Aboutus", destination: "/aboutus", permanent: true },
      { source: "/AboutUs", destination: "/aboutus", permanent: true },
      { source: "/ABOUTUS", destination: "/aboutus", permanent: true },

      { source: "/News", destination: "/news", permanent: true },

      // もし「/about」系を過去に使っていた場合の保険
      { source: "/about", destination: "/aboutus", permanent: true },
      { source: "/About", destination: "/aboutus", permanent: true },

      // --- 末尾スラッシュの揺れを統一（現在はスラッシュなしに正規化）---
      { source: "/aboutus/", destination: "/aboutus", permanent: true },
      { source: "/company/", destination: "/company", permanent: true },
      { source: "/careers/", destination: "/careers", permanent: true },
      { source: "/brands/", destination: "/brands", permanent: true },
      { source: "/contact/", destination: "/contact", permanent: true },
      { source: "/news/", destination: "/news", permanent: true },

      // --- 旧静的トップページファイルの直アクセスを / に寄せる ---
      { source: "/index.html", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;