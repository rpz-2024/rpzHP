"use client";

import type { ReactElement } from "react";
import { useEffect, useMemo, useState } from "react";

import { smoothScrollToTop } from "@/lib/smooth";

type NavigationItem = { id: string; label: string };

const NAVIGATION_ITEMS: NavigationItem[] = [
	{ id: "intro", label: "ごあいさつ" },
	{ id: "gallery", label: "店内" },
	{ id: "food", label: "食と飲み物" },
	{ id: "courses", label: "コース" },
	{ id: "access", label: "アクセス" },
];

export function SidePillNav(): ReactElement {
	const [active, setActive] = useState<string>("intro");

	const observer = useMemo(() => {
		if (typeof window === "undefined") return null;
		return new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) setActive(entry.target.id);
				});
			},
			{ rootMargin: "-30% 0px -60% 0px", threshold: [0.1, 0.25, 0.6] },
		);
	}, []);

	useEffect(() => {
		if (!observer) return;
		const ids = NAVIGATION_ITEMS.map((item) => item.id);
		const els = ids
			.map((id) => document.getElementById(id))
			.filter(Boolean) as Element[];
		els.forEach((el) => observer.observe(el));
		return () => els.forEach((el) => observer.unobserve(el));
	}, [observer]);

	return (
		<nav
			aria-label="セクションナビゲーション"
			className="z-30 hidden w-[200px] xl:w-[220px] lg:sticky lg:top-6 lg:flex lg:flex-col lg:gap-4"
		>
			<button
				type="button"
				aria-label="ページの先頭へ"
				onClick={() => smoothScrollToTop(900)}
				className="mb-4 select-none text-center font-serif text-xl font-semibold text-red focus:outline-none focus-visible:outline-red cursor-pointer"
			>
				五十棲
			</button>
			{NAVIGATION_ITEMS.map((item) => (
				<a
					key={item.id}
					href={`#${item.id}`}
					onClick={(e) => {
						const href = (e.currentTarget.getAttribute("href") || "").trim();
						if (!href.startsWith("#")) return;
						const id = href.slice(1);
						const el = document.getElementById(id);
						if (!el) return;
						e.preventDefault();
						el.scrollIntoView({ behavior: "smooth", block: "start" });
					}}
					className={`w-full h-[64px] flex items-center justify-center text-center rounded-full bg-red px-6 leading-tight text-lg md:text-xl font-bold tracking-wide text-white shadow-sm transition hover:brightness-110 active:brightness-90 focus-visible:outline-red ${
						active === item.id ? "ring-2 ring-red/40 shadow-soft" : ""
					}`}
				>
					{item.label}
				</a>
			))}
		</nav>
	);
}
