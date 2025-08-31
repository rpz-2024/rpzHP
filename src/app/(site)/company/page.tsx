import type { Metadata } from "next";
import { CompanySection } from "@/components/sections/Company";

// ✅ SEOメタ情報を追加
export const metadata: Metadata = {
	title: "会社概要 | 株式会社RPZ - 飲食を通じて感動体験を提供する企業",
	description:
		"株式会社RPZの会社概要ページです。飲食を通じて感動体験を提供する企業として、理念、沿革、事業内容、会社情報をご紹介します。",
	openGraph: {
		title: "会社概要 | 株式会社RPZ",
		description:
			"株式会社RPZの会社概要ページ。飲食を通じて感動体験を提供する企業としての理念、沿革、事業内容をご紹介します。",
		url: "https://rpz.jp/company",
		siteName: "株式会社RPZ",
		locale: "ja_JP",
		type: "website",
	},
};

export default function Page() {
	return (
		<main className="min-h-[60vh] grid place-items-center py-16">
			<div className="text-center">
				<CompanySection />
			</div>
		</main>
	);
}