"use client";
import { useEffect, useRef } from "react";

export function useAvoidFooter<T extends HTMLElement>() {
	const ref = useRef<T | null>(null);
	useEffect(() => {
		const el = ref.current;
		const footer = document.querySelector("footer");
		if (!el || !footer) return;
		const io = new IntersectionObserver(
			([entry]) => {
				if (!el || !entry) return;
				if (entry.isIntersecting) {
					const h = entry.boundingClientRect.height;
					el.style.bottom = `${Math.ceil(h) + 16}px`;
					el.style.position = "fixed";
					const rect = el.getBoundingClientRect();
					el.style.left = `${rect.left}px`;
				} else {
					el.style.bottom = "";
					el.style.position = "";
					el.style.left = "";
				}
			},
			{ root: null, threshold: 0 },
		);
		io.observe(footer);
		return () => io.disconnect();
	}, []);
	return ref;
}
