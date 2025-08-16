import type { Course } from "@/types/courses";

export const courses: Course[] = [
	{
		name: "3,000円コース",
		price: 3000,
		description: "季節の小鉢・お造り・揚げ物・食事",
	},
	{
		name: "4,000円コース",
		price: 4000,
		description: "前菜・お造り・焼き物・逸品・食事",
	},
	{
		name: "5,000円コース",
		price: 5000,
		description: "料理長おまかせ・贅沢な全七品",
	},
];

export const freeDrinks = [
	{ name: "Free Drink 90min", price: 1500 },
	{ name: "Free Drink 120min", price: 2000 },
];
