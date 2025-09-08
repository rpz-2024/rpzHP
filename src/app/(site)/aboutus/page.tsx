import type { Metadata } from "next";
import { AboutusSection } from "@/components/sections/aboutus";

export const metadata: Metadata = {
	title: "RPZの想い｜株式会社RPZ",
	description:
		"株式会社RPZは「人を想い人々を支え志の高い目標を立ち向かえる組織」として、飲食を通じて皆様に感動体験を提供し続けています。",
	alternates: { canonical: "/aboutus" },
};

export default function Page() {
	return (
		<main className="bg-stone-50">
			<AboutusSection />
		</main>
	);
}