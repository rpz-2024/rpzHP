import Link from "next/link";
import { FloatingTopButton } from "@/components/sections/FloatingTopButton";
import { Hero } from "@/components/sections/Hero";
import { NewsAccordion } from "@/components/sections/NewsAccordion";
import { StoresList } from "@/components/sections/StoresList";
import { latestNews } from "@/data/news";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "株式会社RPZ | 公式サイト",
	description:
		"素材の旨味を活かす“蒸し”と季節のアテを京都駅前で。株式会社RPZの公式サイトです。ブランド・店舗情報、会社概要、ニュース、採用情報、お問い合わせはこちらからご覧いただけます。",
	alternates: { canonical: "/" },
};

export default function Page() {
	return (
		<main className="w-full bg-stone-50">
			<section className="w-full">
				<Hero />
			</section>

			<section className="w-full">
				<NewsAccordion items={latestNews} title="ニュース" />
				<div className="bg-stone-50 pb-16 text-center md:pb-24">
					<Link
						href="/news"
						className="inline-flex min-h-[56px] min-w-[180px] items-center justify-center rounded-full border border-stone-900 bg-transparent px-8 text-sm font-bold tracking-[0.08em] text-stone-900 transition-all duration-200 hover:bg-stone-900 hover:text-stone-50"
					>
						もっと見る
					</Link>
				</div>
			</section>

			<section className="w-full">
				<StoresList />
			</section>

			<FloatingTopButton />
		</main>
	);
}