"use client";

import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

import { EXTERNAL_URLS, MAIN_NAVIGATION } from "@/constants/navigation";

export function Sidebar() {
	return (
		<aside className="hidden lg:flex fixed top-6 left-3 md:left-4 z-[90] w-[220px] xl:w-[240px] h-[calc(100vh-1.5rem)] flex-col">
			<div className="space-y-4">
				<a
					href="/"
					onClick={(e) => {
						if (
							typeof window !== "undefined" &&
							window.location.pathname === "/"
						) {
							e.preventDefault();
							window.scrollTo(0, 0);
						}
					}}
					className="block text-center"
				>
					<Image
						src="/logo.svg"
						alt="五十棲"
						width={140}
						height={40}
						className="mx-auto w-auto h-auto"
					/>
				</a>
				<nav className="space-y-3">
					{MAIN_NAVIGATION.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className="block text-center rounded-full bg-[#D30000] text-white py-5 px-3 font-pixel font-semibold hover:brightness-110 active:brightness-90 focus-visible:outline-red transition text-xl"
						>
							{item.label}
						</Link>
					))}
				</nav>
				<a
					href={EXTERNAL_URLS.INSTAGRAM}
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Instagram"
					className="block text-center"
				>
					<FaInstagram className="mx-auto text-4xl text-[#D30000] hover:brightness-110 active:brightness-90 focus-visible:outline-red transition-colors" />
				</a>
			</div>
		</aside>
	);
}
