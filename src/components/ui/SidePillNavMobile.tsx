"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { NAV } from "@/components/sidebar/Sidebar";

const SidePillNavMobile = () => {
	const [open, setOpen] = useState(false);
	const firstBtnRef = useRef<HTMLAnchorElement | null>(null);
	const panelRef = useRef<HTMLDivElement | null>(null);

	// Listen for external trigger, manage focus/scroll lock when open
	useEffect(() => {
		const onToggle = () => setOpen((v) => !v);
		window.addEventListener("toggle-mobile-menu", onToggle);
		return () => window.removeEventListener("toggle-mobile-menu", onToggle);
	}, []);

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
		window.dispatchEvent(
			new CustomEvent("mobile-menu-open-changed", { detail: true }),
		);
		return () => {
			document.body.style.overflow = prev;
			window.removeEventListener("keydown", onKey);
			window.dispatchEvent(
				new CustomEvent("mobile-menu-open-changed", { detail: false }),
			);
			clearTimeout(t);
		};
	}, [open]);

	const handleClose = () => {
		setOpen(false);
		// フォーカスをトリガーボタンに戻す
		setTimeout(() => {
			const trigger = document.getElementById(
				"mobile-menu-trigger",
			) as HTMLButtonElement | null;
			if (trigger) {
				trigger.focus();
			}
		}, 100);
	};

	const handleLinkClick = () => {
		setOpen(false);
		// フォーカスをトリガーボタンに戻す
		setTimeout(() => {
			const trigger = document.getElementById(
				"mobile-menu-trigger",
			) as HTMLButtonElement | null;
			if (trigger) {
				trigger.focus();
			}
		}, 100);
	};

	return (
		<>
			{/* Fullscreen overlay + panel (left gap zero) */}
			<div
				id="mobile-menu"
				role="dialog"
				aria-modal="true"
				className={`fixed inset-0 z-[10] lg:hidden transition-opacity ${
					open ? "opacity-100" : "pointer-events-none opacity-0"
				}`}
				onClick={handleClose}
				onKeyDown={(e) => {
					if (e.key === "Enter" || e.key === " ") {
						handleClose();
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
						{NAV.map((i, idx) => (
							<Link
								key={i.href}
								href={i.href}
								ref={idx === 0 ? (firstBtnRef as any) : undefined}
								onClick={handleLinkClick}
								className="h-12 rounded-full bg-[#D30000] px-6 text-white shadow-sm transition hover:brightness-110 active:brightness-90 tracking-wide grid place-items-center w-full max-w-[360px]"
							>
								{i.label}
							</Link>
						))}
					</nav>
				</div>
			</div>
		</>
	);
};

export default SidePillNavMobile;
