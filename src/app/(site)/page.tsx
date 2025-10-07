import { FloatingTopButton } from "@/components/sections/FloatingTopButton";
import { Hero } from "@/components/sections/Hero";
import { NewsAccordion } from "@/components/sections/NewsAccordion";
import { StoresList } from "@/components/sections/StoresList";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "株式会社RPZ | 公式サイト",
	description:
		"素材の旨味を活かす“蒸し”と季節のアテを京都駅前で。株式会社RPZの公式サイトです。ブランド・店舗情報、会社概要、ニュース、採用情報、お問い合わせはこちらからご覧いただけます。",
	alternates: { canonical: "/" },
};

export default function Page() {
	return (
		<main className="lg:contents">
			<Hero />
			<NewsAccordion />
			<StoresList />
			<FloatingTopButton />
		</main>
	);
}
