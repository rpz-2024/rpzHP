// src/app/(site)/news/page.tsx
import type { Metadata } from "next";
import NewsMain from "@/components/sections/NewsMain"; // ← default import に修正

export const metadata: Metadata = {
	title: "ニュース｜株式会社RPZ",
	description:
		"株式会社RPZのお知らせ・プレスリリース・イベント情報を一覧でご確認いただけます。",
	alternates: { canonical: "/news" },
};


export default function Page() {
	return (
		<main className="min-h-[60vh] grid place-items-center py-16">
			<div className="text-center">
				<h1 className="text-3xl font-extrabold mb-2">Coming soon</h1>
				<p className="text-stone-600">このページは準備中です。</p>
			</div>
		</main>
	);
}
// export default function Page() {
// 	return (
// 		<main className="min-h-[60vh] py-12">
// 			<div className="mx-auto max-w-[1100px] px-4 md:px-6">
// 				<NewsMain />
// 			</div>
// 		</main>
// 	);
// }