import Access from "@/components/sections/Access";
import Courses from "@/components/sections/Courses";
import FloatingTopButton from "@/components/sections/FloatingTopButton";
import FoodDrink from "@/components/sections/FoodDrink";
import Gallery from "@/components/sections/Gallery";
import Hero from "@/components/sections/Hero";
import Intro from "@/components/sections/Intro";
import SidePillNavMobile from "@/components/ui/SidePillNavMobile";

const Page = () => {
	return (
		<main className="lg:contents">
			<Hero />
			<Intro />
			<Gallery />
			<FoodDrink />
			<Courses />
			<Access />
			<SidePillNavMobile />
			<FloatingTopButton />
		</main>
	);
};

export default Page;
