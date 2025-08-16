import Access from "@/components/sections/Access";
import Courses from "@/components/sections/Courses";
import FloatingTopButton from "@/components/sections/FloatingTopButton";
import FoodDrink from "@/components/sections/FoodDrink";
import Gallery from "@/components/sections/Gallery";
import Hero from "@/components/sections/Hero";
import Intro from "@/components/sections/Intro";
import NewsAccordion from "@/components/sections/NewsAccordion";
import StoresList from "@/components/sections/StoresList";

const Page = () => {
	return (
		<main className="lg:contents">
			<Hero />
			<Intro />
			<Gallery />
			<FoodDrink />
			<Courses />
			<Access />
			<NewsAccordion />
			<StoresList />
			<FloatingTopButton />
		</main>
	);
};

export default Page;
