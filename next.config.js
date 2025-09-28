// next.config.js
// @ts-check

/** @typedef {import('next').NextConfig} NextConfig */
/** @typedef {import('next/dist/lib/load-custom-routes').Redirect} Redirect */
/** @typedef {import('next/dist/lib/load-custom-routes').RouteHas} RouteHas */

const isProd = process.env.VERCEL_ENV === "production";

/** @type {NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // experimental の型を明示（JSでも型エラーを防ぐ）
  /** @type {NonNullable<NextConfig['experimental']>} */
  experimental: {
    typedRoutes: true,
  },

  async redirects() {
    /** @type {Redirect[]} */
    const redirects = [
      // --- 大文字 → 小文字 ---
      { source: "/Aboutus", destination: "/aboutus", permanent: true },
      { source: "/AboutUs", destination: "/aboutus", permanent: true },
      { source: "/ABOUTUS", destination: "/aboutus", permanent: true },
      { source: "/News", destination: "/news", permanent: true },

      // --- 旧パス保険 ---
      { source: "/about", destination: "/aboutus", permanent: true },
      { source: "/About", destination: "/aboutus", permanent: true },

      // --- 末尾スラッシュ統一 ---
      { source: "/aboutus/", destination: "/aboutus", permanent: true },
      { source: "/company/", destination: "/company", permanent: true },
      { source: "/careers/", destination: "/careers", permanent: true },
      { source: "/brands/", destination: "/brands", permanent: true },
      { source: "/contact/", destination: "/contact", permanent: true },
      { source: "/news/", destination: "/news", permanent: true },

      // --- 旧 index.html を / に寄せる ---
      { source: "/index.html", destination: "/", permanent: true },
    ];

    if (isProd) {
      /** @type {Redirect} */
      const wwwToApex = {
        source: "/:path*",
        /** @type {RouteHas[]} */
        has: [{ type: "host", value: "www.rpz.jp" }],
        destination: "https://rpz.jp/:path*",
        permanent: true,
      };
      redirects.push(wwwToApex);
    }

    return redirects;
  },
};

module.exports = nextConfig;