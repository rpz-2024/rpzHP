// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { typedRoutes: true },

  // 末尾スラッシュは付けない運用（/aboutus/ → /aboutus は Next の既定挙動に任せる）
  trailingSlash: false,

  async redirects() {
    return [
      // 大文字 → 小文字（片方向のみ）
      { source: "/Aboutus", destination: "/aboutus", permanent: true },
      { source: "/AboutUs", destination: "/aboutus", permanent: true },
      { source: "/ABOUTUS", destination: "/aboutus", permanent: true },
      { source: "/News", destination: "/news", permanent: true },

      // 旧パス保険（/about → /aboutus だけ残す）
      { source: "/about", destination: "/aboutus", permanent: true },
      { source: "/About", destination: "/aboutus", permanent: true },

      // 旧 index.html の片付け
      { source: "/index.html", destination: "/", permanent: true },
    ];
  },
};

module.exports = nextConfig;