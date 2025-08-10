"use client";
import { useEffect, useRef, useState } from "react";

const items = [
	{ id: "hero", label: "トップ" },
	{ id: "intro", label: "ごあいさつ" },
	{ id: "gallery", label: "店内" },
	{ id: "food", label: "食と飲み物" },
	{ id: "courses", label: "コース" },
	{ id: "access", label: "アクセス" },
];

const SidePillNavMobile = () => {
	const [open, setOpen] = useState(false);
	const firstBtnRef = useRef<HTMLAnchorElement | null>(null);
	const panelRef = useRef<HTMLDivElement | null>(null);

	// Focus first item, close on Esc, and lock body scroll while open
	useEffect(() => {
		if (!open) return;
		const prev = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		const t = setTimeout(() => firstBtnRef.current?.focus(), 0);
		const onKey = (e: KeyboardEvent) => {
			if (e.key === "Escape") setOpen(false);
			if (e.key === "Tab" && panelRef.current) {
				const focusable = panelRef.current.querySelectorAll<HTMLElement>(
					'button, [href], [tabindex]:not([tabindex="-1"])',
				);
				if (focusable.length === 0) return;
				const first = focusable[0];
				const last = focusable[focusable.length - 1];
				if (e.shiftKey && document.activeElement === first) {
					e.preventDefault();
					(last as HTMLElement).focus();
				} else if (!e.shiftKey && document.activeElement === last) {
					e.preventDefault();
					(first as HTMLElement).focus();
				}
			}
		};
		window.addEventListener("keydown", onKey);
		return () => {
			document.body.style.overflow = prev;
			window.removeEventListener("keydown", onKey);
			clearTimeout(t);
		};
	}, [open]);

	return (
		<>
			<button
				type="button"
				aria-label={open ? "メニューを閉じる" : "メニューを開く"}
				aria-expanded={open}
				aria-controls="mobile-menu"
				onClick={() => setOpen((v) => !v)}
				className="fixed top-4 right-4 z-[100] grid h-11 w-11 place-items-center rounded-full bg-red text-white shadow-soft transition hover:brightness-110 active:brightness-90 focus-visible:outline-red lg:hidden"
			>
				<span aria-hidden className={`hamburger ${open ? "is-open" : ""}`}>
					<i></i>
				</span>
			</button>
			{/* Fullscreen overlay + panel (left gap zero) */}
			<div
				id="mobile-menu"
				role="dialog"
				aria-modal="true"
				className={`fixed inset-0 z-[90] lg:hidden transition-opacity ${
					open ? "opacity-100" : "pointer-events-none opacity-0"
				}`}
				onClick={() => setOpen(false)}
				onKeyDown={(e) => {
					if (e.key === "Enter" || e.key === " ") {
						setOpen(false);
					}
				}}
			>
				<div
					ref={panelRef}
					role="menu"
					className={`fixed inset-0 bg-[#FBF5EF] transform transition-transform duration-300 ease-out ${
						open ? "translate-x-0" : "translate-x-full"
					}`}
					onClick={(e) => e.stopPropagation()}
					onKeyDown={(e) => {
						if (e.key === "Enter" || e.key === " ") {
							e.stopPropagation();
						}
					}}
				>
					<nav className="h-full w-full flex flex-col items-center justify-center gap-6 text-2xl font-semibold px-6">
						{items.map((i, idx) => (
							<a
								key={i.id}
								href={`#${i.id}`}
								ref={idx === 0 ? firstBtnRef : undefined}
								onClick={(e) => {
									e.preventDefault();
									setOpen(false);
									const el = document.getElementById(i.id);
									if (!el) return;
									setTimeout(() => {
										el.scrollIntoView({ behavior: "smooth", block: "start" });
										try {
											window.scrollBy({ top: -16, behavior: "auto" });
										} catch {}
									}, 10);
								}}
								className="h-12 rounded-full bg-red px-6 text-white shadow-sm transition hover:brightness-110 active:brightness-90 tracking-wide grid place-items-center w-full max-w-[360px]"
							>
								{i.label}
							</a>
						))}
					</nav>
				</div>
			</div>
		</>
	);
};

export default SidePillNavMobile;
