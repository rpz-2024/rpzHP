// next.config.js（ホスト正規化は削除し、パス系だけ残す）
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { typedRoutes: true },
  async redirects() {
    return [
      { source: "/Aboutus", destination: "/aboutus", permanent: true },
      { source: "/AboutUs", destination: "/aboutus", permanent: true },
      { source: "/ABOUTUS", destination: "/aboutus", permanent: true },
      { source: "/News", destination: "/news", permanent: true },
      { source: "/about", destination: "/aboutus", permanent: true },
      { source: "/About", destination: "/aboutus", permanent: true },
      { source: "/aboutus/", destination: "/aboutus", permanent: true },
      { source: "/company/", destination: "/company", permanent: true },
      { source: "/careers/", destination: "/careers", permanent: true },
      { source: "/brands/", destination: "/brands", permanent: true },
      { source: "/contact/", destination: "/contact", permanent: true },
      { source: "/news/", destination: "/news", permanent: true },
      { source: "/index.html", destination: "/", permanent: true },
    ];
  },
};
module.exports = nextConfig;