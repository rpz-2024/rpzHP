import Image from "next/image";
import type { ReactElement } from "react";

import { SectionRailTitle } from "@/components/ui/SectionRailTitle";
import { courses, freeDrinks } from "@/data/courses";

export function Courses(): ReactElement {
	return (
		<section className="lg:contents">
			<div className="hidden lg:block lg:col-start-2">
				<SectionRailTitle>コース</SectionRailTitle>
			</div>
			<div
				id="courses"
				className="lg:col-start-3 py-12 scroll-mt-28 lg:scroll-mt-32 relative z-10 overflow-visible"
			>
				<div className="lg:hidden block text-red-700 font-pixel text-2xl md:text-3xl mt-6 mb-3">
					コース
				</div>
				<div className="grid items-start gap-8 lg:grid-cols-2">
					<div className="relative">
						<div className="relative aspect-[3/2] overflow-hidden rounded-3xl shadow-md md:shadow-lg">
							<Image
								src="/images/course.svg"
								alt="コース料理の一皿"
								fill
								className="object-cover"
								sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1760px"
							/>
							<span className="absolute left-3 top-3 rounded-full bg-red px-3 py-1 text-xs text-white shadow">
								isozumi course
							</span>
						</div>
					</div>
					<div>
						<h3 className="mb-3 font-serif text-xl font-bold">コース</h3>
						<ul className="mb-4 space-y-2">
							{courses.map((course) => (
								<li
									key={course.name}
									className="flex items-baseline justify-between rounded-3xl bg-white/40 px-4 py-3 shadow-sm ring-1 ring-line/70"
								>
									<div>
										<div className="font-medium">{course.name}</div>
										<div className="text-xs text-subtext">
											{course.description}
										</div>
									</div>
									<div className="font-bold text-red">
										￥{course.price.toLocaleString()}
									</div>
								</li>
							))}
						</ul>
						<div className="flex flex-wrap items-center gap-2">
							{freeDrinks.map((drink) => (
								<span
									key={drink.name}
									className="rounded-full bg-red/10 px-3 py-1 text-xs text-red ring-1 ring-red/30"
								>
									+ {drink.name} ￥{drink.price.toLocaleString()}
								</span>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
