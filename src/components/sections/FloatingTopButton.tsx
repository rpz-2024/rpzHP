"use client";

import type { ReactElement } from "react";
import { useEffect, useRef } from "react";

import { scrollTopInstant } from "@/lib/scrollTopInstant";

export function FloatingTopButton(): ReactElement {
	const ref = useRef<HTMLButtonElement | null>(null);

	useEffect(() => {
		const btn = ref.current;
		const footer = document.querySelector("footer");
		if (!btn || !footer) return;

		const io = new IntersectionObserver(
			([entry]) => {
				if (!btn || !entry) return;
				if (entry.isIntersecting) {
					const h = entry.target.getBoundingClientRect().height;
					btn.style.bottom = `${Math.ceil(h) + 16}px`;
				} else {
					btn.style.bottom = "24px";
				}
			},
			{ root: null, threshold: 0 },
		);
		io.observe(footer);
		return () => io.disconnect();
	}, []);

	return (
		<button
			type="button"
			ref={ref}
			aria-label="ページの先頭へ戻る"
			onClick={scrollTopInstant}
			className="fixed bottom-6 right-3 md:right-6 z-10 grid h-12 w-12 place-items-center rounded-full cursor-pointer bg-[#D30000] text-white shadow-soft transition hover:brightness-110 active:brightness-90 focus-visible:outline-red"
		>
			↑
		</button>
	);
}
