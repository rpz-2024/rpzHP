import type { Navigation } from "@/types/navigation";

export const MAIN_NAVIGATION: Navigation[] = [
  { href: "/Aboutus", label: "RPZの想い" },
  { href: "/company", label: "会社概要" },
  { href: "/brands", label: "ブランド一覧" },
  { href: "/news", label: "ニュース" },
  { href: "/careers", label: "採用情報" },
  { href: "/contact", label: "お問い合わせ" },
];

export const EXTERNAL_URLS = {
  INSTAGRAM: "https://www.instagram.com/",
} as const;
