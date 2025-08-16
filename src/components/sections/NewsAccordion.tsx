"use client";

import { useState } from "react";
import SectionRailTitle from "@/components/ui/SectionRailTitle";
import { NEWS } from "@/data/news";

const NewsAccordion = () => {
	const [openId, setOpenId] = useState<string | null>(null);

	return (
		<section className="lg:contents">
			{/* PC: 左の縦レール見出し */}
			<div className="hidden lg:block lg:col-start-2">
				<SectionRailTitle>ニュース</SectionRailTitle>
			</div>

			{/* 本体 */}
			<div
				id="news"
				className="lg:col-start-3 py-12 scroll-mt-28 lg:scroll-mt-32 relative z-10"
			>
				{/* SP/Tablet: 横見出し */}
				<div className="lg:hidden block text-red-700 font-extrabold text-2xl md:text-3xl mt-6 mb-3">
					ニュース
				</div>

				<ul className="divide-y divide-stone-200">
					{NEWS.map((n) => {
						const open = openId === n.id;
						const isHeading = n.title === "会社沿革" || /年$/.test(n.title);
						return (
							<li key={n.id}>
								{isHeading ? (
									<h3 className="px-5 py-3 text-stone-800 font-extrabold leading-tight text-lg md:text-xl">
										{n.title}
									</h3>
								) : (
									<>
										<button
											type="button"
											aria-expanded={open}
											onClick={() => setOpenId(open ? null : n.id)}
											className="w-full text-left px-5 py-4 cursor-pointer hover:bg-stone-100/60 focus-visible:outline-2 focus-visible:outline-red/60 flex items-center justify-between"
										>
											<span className="text-base md:text-lg font-semibold">
												{n.title}
											</span>
											<span
												aria-hidden
												className="ml-4 text-stone-400 text-xl leading-none"
											>
												{open ? "ー" : "＋"}
											</span>
										</button>
										{open && (
											<div className="px-5 pb-5 text-sm text-stone-700">
												{n.body ?? "詳細は準備中です。"}
											</div>
										)}
									</>
								)}
							</li>
						);
					})}
				</ul>
			</div>
		</section>
	);
};

export default NewsAccordion;
