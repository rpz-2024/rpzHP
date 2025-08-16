import type { Navigation } from "@/types/navigation";

export const MAIN_NAVIGATION: Navigation[] = [
	{ href: "/omoi", label: "RPZの思い" },
	{ href: "/company", label: "会社概要" },
	{ href: "/brands", label: "ブランド一覧" },
	{ href: "/news", label: "ニュース" },
	{ href: "/careers", label: "採用情報" },
	{ href: "/contact", label: "お問い合わせ" },
];

export const EXTERNAL_URLS = {
	GITHUB: "https://github.com",
	INSTAGRAM: "https://www.instagram.com/",
	TWITTER: "https://twitter.com",
} as const;
