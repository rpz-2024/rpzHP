"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import SectionRailTitle from "@/components/ui/SectionRailTitle";
import { drinks, foods } from "@/data/menu";

const images = [
	"/images/dish-hero.svg",
	"/images/dish-hero.svg",
	"/images/dish-hero.svg",
].map((src, index) => ({ src, id: `dish-${index}` }));

const FoodDrink = () => {
	const [index, setIndex] = useState(0);
	const timer = useRef<number | null>(null);
	const reduce =
		typeof window !== "undefined" &&
		window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

	useEffect(() => {
		if (reduce) return;
		if (timer.current) window.clearInterval(timer.current);
		timer.current = window.setInterval(() => {
			setIndex((i) => (i + 1) % images.length);
		}, 3000);
		return () => {
			if (timer.current) window.clearInterval(timer.current);
		};
	}, [reduce]);

	return (
		<section className="lg:contents">
			<div className="hidden lg:block lg:col-start-2">
				<SectionRailTitle>食と飲み物</SectionRailTitle>
			</div>
			<div
				id="food"
				className="lg:col-start-3 py-12 scroll-mt-28 lg:scroll-mt-32 relative z-10 overflow-visible"
			>
				<div className="lg:hidden block text-red-700 font-extrabold text-2xl md:text-3xl mt-6 mb-3">
					食と飲み物
				</div>
				<div className="grid items-start gap-8 lg:grid-cols-2">
					{/* Slider */}
					<div className="">
						<div
							className="relative w-full aspect-[3/2] rounded-3xl overflow-hidden shadow-md md:shadow-lg"
							aria-live="polite"
						>
							{images.map((image, i) => (
								<Image
									key={image.id}
									src={image.src}
									alt=""
									fill
									sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1760px"
									priority={i === 0}
									className={`absolute inset-0 object-cover transition-opacity duration-[1600ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
										index === i ? "opacity-100" : "opacity-0"
									}`}
								/>
							))}
							<div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
								{images.map((image, i) => (
									<span
										key={image.id}
										className={`h-1.5 w-1.5 rounded-full ${
											i === index ? "bg-white/90" : "bg-white/50"
										}`}
									/>
								))}
							</div>
						</div>
					</div>
					{/* Menu */}
					<div className="text-[17px] md:text-[18px] leading-7">
						<h3 className="mb-2 font-serif text-xl font-bold">メニュー</h3>
						<div className="grid grid-cols-2 gap-6">
							<div>
								<h4 className="mb-2 font-serif text-lg font-semibold">
									ドリンク
								</h4>
								<ul className="divide-y divide-line/70">
									{drinks.map((d) => (
										<li
											key={d.name}
											className="flex items-baseline justify-between py-2"
										>
											<span>{d.name}</span>
											<span>￥{d.price.toLocaleString()}</span>
										</li>
									))}
								</ul>
							</div>
							<div>
								<h4 className="mb-2 font-serif text-lg font-semibold">
									フード
								</h4>
								<ul className="divide-y divide-line/70">
									{foods.map((f) => (
										<li
											key={f.name}
											className="flex items-baseline justify-between py-2"
										>
											<span>{f.name}</span>
											<span>￥{f.price.toLocaleString()}</span>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FoodDrink;
