import type { Metadata } from "next";
import { AboutusSection } from "@/components/sections/aboutus";

export const metadata: Metadata = {
	title: "RPZの想い | 株式会社RPZ - 飲食を通じて感動体験を",
	description:
		"株式会社RPZの由来とこれらの目標などの「想い」をご紹介します",
	openGraph: {
		title: "RPZの想い | 株式会社RPZ",
		description:
			"株式会社RPZの由来とこれらの目標などの「想い」をご紹介します。",
		url: "https://rpz.jp/aboutus",
		siteName: "株式会社RPZ",
		locale: "ja_JP",
		type: "website",
	},
};

export default function Page() {
	return (
		<main className="bg-stone-50">
			<AboutusSection />
		</main>
	);
}
