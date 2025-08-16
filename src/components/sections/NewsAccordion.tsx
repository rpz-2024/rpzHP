"use client";

import type { ReactElement } from "react";
import { useState } from "react";

import { SectionRailTitle } from "@/components/ui/SectionRailTitle";
import { news } from "@/data/news";

export function NewsAccordion(): ReactElement {
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
					{news.map((newsItem) => {
						const isOpen = openId === newsItem.id;
						const isHeading =
							newsItem.title === "会社沿革" || /年$/.test(newsItem.title);
						return (
							<li key={newsItem.id}>
								{isHeading ? (
									<h3 className="px-5 py-3 text-stone-800 font-extrabold leading-tight text-lg md:text-xl">
										{newsItem.title}
									</h3>
								) : (
									<>
										<button
											type="button"
											aria-expanded={isOpen}
											onClick={() => setOpenId(isOpen ? null : newsItem.id)}
											className="w-full text-left px-5 py-4 cursor-pointer hover:bg-stone-100/60 focus-visible:outline-2 focus-visible:outline-red/60 flex items-center justify-between"
										>
											<span className="text-base md:text-lg font-semibold">
												{newsItem.title}
											</span>
											<span
												aria-hidden
												className="ml-4 text-stone-400 text-xl leading-none"
											>
												{isOpen ? "ー" : "＋"}
											</span>
										</button>
										{isOpen && (
											<div className="px-5 pb-5 text-sm text-stone-700">
												{newsItem.body ?? "詳細は準備中です。"}
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
}
