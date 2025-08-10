import Image from "next/image";
import SectionRailTitle from "@/components/ui/SectionRailTitle";

const Access = () => {
	return (
		<section className="lg:contents">
			<div className="hidden lg:block lg:col-start-2">
				<SectionRailTitle>アクセス</SectionRailTitle>
			</div>
			<div
				id="access"
				className="lg:col-start-3 pt-12 pb-0 scroll-mt-28 lg:scroll-mt-32 relative z-10 overflow-visible"
			>
				<div className="relative mb-8 leading-none">
					<iframe
						title="五十棲の地図"
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
						src="https://www.google.com/maps?q=京都市中京区河原町通り四条上る米屋町388&output=embed"
						className="block w-full aspect-[16/9] rounded-3xl border border-stone-200 shadow-md"
					></iframe>
				</div>
				<div className="grid gap-6 text-lg md:text-xl md:grid-cols-[auto_1fr] md:items-center leading-relaxed">
					<div className="flex items-center justify-center md:justify-start">
						<Image
							src="/images/logo-vertical.svg"
							alt="五十棲ロゴ"
							width={40}
							height={100}
						/>
					</div>
					<div className="space-y-1">
						<div className="font-serif text-lg">五十棲</div>
						<div>〒000-0000 東京都〇〇区〇〇 0-0-0</div>
						<div>営業時間 17:00-23:00（L.O. 22:00）/ 定休 火</div>
						<div>TEL 03-1234-5678</div>
						<div className="pt-2">
							<a
								href="/"
								className="inline-flex items-center gap-2 rounded-full bg-red px-6 py-2.5 text-base font-semibold tracking-wide text-white shadow-sm transition hover:brightness-110 active:brightness-90 focus-visible:outline-red"
							>
								WEB予約はこちら
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Access;
