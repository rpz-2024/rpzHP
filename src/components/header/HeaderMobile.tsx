"use client";
import Image from "next/image";

export default function HeaderMobile() {
	return (
		<header className="inset-x-0 z-[100] bg-[#FBF5EF]/95 backdrop-blur supports-[backdrop-filter]:bg-[#FBF5EF]/80 lg:hidden">
			<div className="h-14 px-4 flex items-center justify-between">
				<a href="/" aria-label="ホームへ" className="shrink-0">
					<Image
						src="/logo-horizontal.svg"
						alt="五十棲グループ"
						width={140}
						height={28}
						className="h-8 w-auto"
						priority
					/>
				</a>
			</div>
		</header>
	);
}
