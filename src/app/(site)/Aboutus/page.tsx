import type { Metadata } from "next";
import { AboutusSection } from "@/components/sections/Aboutus";

// ✅ SEOメタ情報を追加
export const metadata: Metadata = {
	title: "RPZの想い | 株式会社RPZ - 飲食を通じて感動体験を",
	description:
		"株式会社RPZは「人を想い、人々を支え、志ある目標に挑む組織」を理念に掲げています。飲食を通じてお客様へ感動体験を届け、多様な個性と経験を活かしたチームで成長を続けています。",
	openGraph: {
		title: "RPZの想い | 株式会社RPZ",
		description:
			"飲食を通じて感動体験を届けるRPZの理念。人を想い、人々を支え、仲間と共に志ある目標に挑みます。",
		url: "https://rpz.jp/Aboutus",
		siteName: "株式会社RPZ",
		locale: "ja_JP",
		type: "website",
	},
};

export default function Page() {
	return (
		<main className="min-h-[60vh] grid place-items-center py-16">
			<div className="text-center">
				<AboutusSection />
			</div>
		</main>
	);
}