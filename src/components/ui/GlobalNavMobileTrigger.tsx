"use client";
import { useEffect, useState } from "react";

export default function GlobalNavMobileTrigger() {
	const [open, setOpen] = useState(false);

	// 外部からのメニュー状態変更を監視
	useEffect(() => {
		const onChange = (e: Event) => {
			const ce = e as CustomEvent<boolean>;
			if (typeof ce.detail === "boolean") setOpen(ce.detail);
		};
		window.addEventListener(
			"mobile-menu-open-changed",
			onChange as EventListener,
		);
		return () =>
			window.removeEventListener(
				"mobile-menu-open-changed",
				onChange as EventListener,
			);
	}, []);

	const onClick = () => {
		window.dispatchEvent(new CustomEvent("toggle-mobile-menu"));
	};

	return (
		<button
			id="mobile-menu-trigger"
			type="button"
			aria-label={open ? "メニューを閉じる" : "メニューを開く"}
			aria-expanded={open}
			aria-controls="mobile-menu"
			onClick={onClick}
			className="fixed right-3 top-3 z-[9999] grid h-11 w-11 place-items-center rounded-full bg-[#D30000] text-white shadow-soft transition hover:brightness-110 active:brightness-90 focus-visible:outline-red md:hidden lg:hidden xl:hidden 2xl:hidden"
		>
			<span aria-hidden className={`hamburger ${open ? "is-open" : ""}`}>
				<i></i>
			</span>
		</button>
	);
}
