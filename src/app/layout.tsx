import type { Metadata } from "next";
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";

import localFont from "next/font/local";
import type { PropsWithChildren } from "react";
import "@/styles/globals.css";

const pixelMplus = localFont({
	src: [
		{
			path: "./fonts/pixelmplus/PixelMplus12-Regular.ttf",
			weight: "400",
			style: "normal",
		},
		{
			path: "./fonts/pixelmplus/PixelMplus12-Bold.ttf",
			weight: "700",
			style: "normal",
		},
	],
	variable: "--font-pixelmplus",
	display: "swap",
	preload: false,
});

const sans = Noto_Sans_JP({
	subsets: ["latin"],
	weight: ["400", "500", "700"],
	variable: "--font-sans",
	display: "swap",
});

const serif = Noto_Serif_JP({
	subsets: ["latin"],
	weight: ["600"],
	variable: "--font-serif",
	display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
	metadataBase: new URL(SITE_URL),
	title: "株式会社RPZ | 京都から特別な体験を届ける飲食ブランド",
	description:
		"株式会社RPZは京都を拠点に「鉄板とアテ ふぅふぅ」など独自ブランドを展開し、感動体験をお届けする飲食企業です。素材を活かした料理と落ち着いた空間で特別な時間をお楽しみください。",
	icons: { icon: "/favicon.ico" },
	alternates: { canonical: "/" },
};

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<html
			lang="ja"
			className={[
				sans.variable,
				serif.variable,
				pixelMplus.variable,
				"bg-kinari text-stone-800 antialiased scroll-smooth",
			].join(" ")}
		>
			<body className="min-h-screen font-sans text-base leading-relaxed overflow-x-hidden">
				{children}
			</body>
		</html>
	);
}
