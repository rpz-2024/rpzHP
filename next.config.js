// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { typedRoutes: true },

  async redirects() {
    return [
      // 大文字 → 小文字
      { source: "/Aboutus", destination: "/aboutus", permanent: true },
      { source: "/AboutUs", destination: "/aboutus", permanent: true },
      { source: "/ABOUTUS", destination: "/aboutus", permanent: true },
      { source: "/News", destination: "/news", permanent: true },

      // 旧パス保険
      { source: "/about", destination: "/aboutus", permanent: true },
      { source: "/About", destination: "/aboutus", permanent: true },

      // 末尾スラッシュ統一
      { source: "/aboutus/", destination: "/aboutus", permanent: true },
      { source: "/company/", destination: "/company", permanent: true },
      { source: "/careers/", destination: "/careers", permanent: true },
      { source: "/brands/", destination: "/brands", permanent: true },
      { source: "/contact/", destination: "/contact", permanent: true },
      { source: "/news/", destination: "/news", permanent: true },

      // 旧 index.html
      { source: "/index.html", destination: "/", permanent: true },
    ];
  },
};

module.exports = nextConfig;