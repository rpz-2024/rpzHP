import type { PropsWithChildren } from "react";

import "@/styles/globals.css";

export const metadata = {
	metadataBase: new URL("https://example.com"),
	title: {
		default: "五十棲 | 季節の料理とお酒",
		template: "%s | 五十棲",
	},
	description:
		"生成りの空間で味わう季節の料理とお酒。落ち着いた和のひとときをお楽しみください。",
	icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<html lang="ja" className="bg-kinari text-text antialiased scroll-smooth">
			<body className="font-sans text-base leading-relaxed min-h-screen overflow-x-hidden font-medium text-stone-800">
				{children}
			</body>
		</html>
	);
}
