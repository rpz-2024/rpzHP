"use client";

// Smooth scroll to top with prefers-reduced-motion support and easeOutCubic.
export function smoothScrollToTop(duration = 700) {
	if (window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches) {
		window.scrollTo({ top: 0 });
		return;
	}
	const start = window.scrollY || window.pageYOffset;
	const t0 = performance.now();
	const ease = (t: number) => 1 - (1 - t) ** 3; // easeOutCubic
	function frame(now: number) {
		const p = Math.min(1, (now - t0) / duration);
		const y = Math.round(start * (1 - ease(p)));
		window.scrollTo(0, y);
		if (p < 1) requestAnimationFrame(frame);
	}
	requestAnimationFrame(frame);
}
