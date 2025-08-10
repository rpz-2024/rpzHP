const prefersReduced = () =>
	typeof window !== "undefined" &&
	window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const easeOutBack = (t: number) => {
	// Reduced overshoot to minimize bounce
	const c1 = 0.6;
	const c3 = c1 + 1;
	return 1 + c3 * (t - 1) ** 3 + c1 * (t - 1) ** 2;
};

export function scrollToTopWithOvershoot(duration = 600) {
	if (typeof window === "undefined") return;
	if (prefersReduced()) {
		window.scrollTo({ top: 0 });
		return;
	}
	const start = window.scrollY || window.pageYOffset;
	const startTime = performance.now();

	const animate = (now: number) => {
		const elapsed = now - startTime;
		const t = Math.min(1, elapsed / duration);
		const eased = easeOutBack(t);
		// Clamp final position to 0 to avoid negative overshoot
		const next = Math.round(start * (1 - eased));
		const y = Math.max(0, next);
		window.scrollTo(0, y);
		if (t < 1 && y > 0) requestAnimationFrame(animate);
	};
	requestAnimationFrame(animate);
}

export function scrollToId(id: string, duration = 700) {
	if (typeof window === "undefined") return;
	const el = document.getElementById(id);
	if (!el) return;
	if (prefersReduced()) {
		el.scrollIntoView({ block: "start" });
		return;
	}
	const start = window.scrollY || window.pageYOffset;
	const rect = el.getBoundingClientRect();
	const target = rect.top + start - 24; // slight offset
	const dist = target - start;
	const startTime = performance.now();

	const step = (now: number) => {
		const elapsed = now - startTime;
		const t = Math.min(1, elapsed / duration);
		const eased = easeOutBack(t);
		const y = Math.round(start + dist * eased);
		window.scrollTo(0, y);
		if (t < 1) requestAnimationFrame(step);
	};

	requestAnimationFrame(step);
}
