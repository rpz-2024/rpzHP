import { FloatingTopButton } from "@/components/sections/FloatingTopButton";
import { Hero } from "@/components/sections/Hero";
import { NewsAccordion } from "@/components/sections/NewsAccordion";
import { StoresList } from "@/components/sections/StoresList";

export default function Page() {
	return (
		<main className="lg:contents">
			<NewsAccordion />
			<StoresList />
			<FloatingTopButton />
		</main>
	);
}
