"use client";
import { useEffect, useMemo, useState } from "react";

type Item = { id: string; label: string };

const items: Item[] = [
	{ id: "intro", label: "ごあいさつ" },
	{ id: "gallery", label: "店内" },
	{ id: "food", label: "食と飲み物" },
	{ id: "courses", label: "コース" },
	{ id: "access", label: "アクセス" },
];

const SidePillNav = () => {
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
		const ids = items.map((i) => i.id);
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
				onClick={() => {
					try {
						window.scrollTo({ top: 0, behavior: "smooth" });
					} catch {
						window.scrollTo(0, 0);
					}
				}}
				className="mb-4 select-none text-center font-serif text-xl font-semibold text-red focus:outline-none focus-visible:outline-red cursor-pointer"
			>
				五十棲
			</button>
			{items.map((item) => (
				<a
					key={item.id}
					href={`#${item.id}`}
					onClick={(e) => {
						e.preventDefault();
						const el = document.getElementById(item.id);
						if (!el) return;
						el.scrollIntoView({ behavior: "smooth", block: "start" });
						setTimeout(() => {
							try {
								window.scrollBy({ top: -16, behavior: "auto" });
							} catch {}
						}, 320);
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
};

export default SidePillNav;
