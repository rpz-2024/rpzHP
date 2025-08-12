"use client";
export function smoothScrollToTop(duration = 900) {
	const reduce = window.matchMedia?.(
		"(prefers-reduced-motion: reduce)",
	)?.matches;
	if (reduce) {
		window.scrollTo({ top: 0 });
		return;
	}
	const start = window.scrollY;
	const t0 = performance.now();
	const ease = (t: number) => 1 - (1 - t) ** 3; // easeOutCubic
	const step = (now: number) => {
		const p = Math.min(1, (now - t0) / duration);
		window.scrollTo(0, Math.round(start * (1 - ease(p))));
		if (p < 1) requestAnimationFrame(step);
	};
	requestAnimationFrame(step);
}
