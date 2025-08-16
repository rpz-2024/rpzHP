"use client";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

export const NAV = [
	{ href: "/omoi", label: "RPZの思い" },
	{ href: "/company", label: "会社概要" },
	{ href: "/brands", label: "ブランド一覧" },
	{ href: "/news", label: "ニュース" },
	{ href: "/careers", label: "採用情報" },
	{ href: "/contact", label: "お問い合わせ" },
];

export default function Sidebar() {
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
						className="mx-auto"
					/>
				</a>
				<nav className="space-y-3">
					{NAV.map((i) => (
						<Link
							key={i.href}
							href={i.href}
							className="block text-center rounded-full bg-[#D30000] text-white py-5 px-3 font-semibold hover:brightness-110 active:brightness-90 focus-visible:outline-red transition text-xl"
						>
							{i.label}
						</Link>
					))}
				</nav>
				<a
					href="https://www.instagram.com/"
					target="_blank"
					rel="noopener"
					aria-label="Instagram"
					className="block text-center"
				>
					<FaInstagram className="mx-auto text-4xl text-[#D30000] hover:brightness-110 active:brightness-90 focus-visible:outline-red transition-colors" />
				</a>
			</div>
		</aside>
	);
}
