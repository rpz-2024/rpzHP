import Image from "next/image";
import SectionRailTitle from "@/components/ui/SectionRailTitle";

const Intro = () => {
	return (
		<section className="lg:contents">
			<div className="hidden lg:block lg:col-start-2">
				<SectionRailTitle>ごあいさつ</SectionRailTitle>
			</div>
			<div
				id="intro"
				className="lg:col-start-3 py-12 scroll-mt-28 lg:scroll-mt-32 relative z-10 overflow-visible"
			>
				<div className="lg:hidden block text-red-700 font-extrabold text-2xl md:text-3xl mt-6 mb-3">
					ごあいさつ
				</div>
				<div className="mb-6 grid place-items-center">
					<Image
						src="/images/logo-vertical.svg"
						alt="五十棲 ロゴ"
						width={76}
						height={176}
						className="opacity-90"
						priority
					/>
				</div>
				<div className="grid gap-6 md:grid-cols-5 md:items-start">
					<div className="md:col-span-3">
						<div className="relative aspect-[3/2] overflow-hidden rounded-3xl shadow-md md:shadow-lg">
							<Image
								src="/images/intro.svg"
								alt="店内の風景"
								fill
								sizes="(max-width: 1024px) 100vw, 720px"
								className="object-cover"
							/>
						</div>
					</div>
					<div className="md:col-span-2 md:pl-8">
						<h2 className="mb-2 font-serif text-xl font-bold">
							五十棲について
						</h2>
						<p className="max-w-[70ch] text-subtext text-lg md:text-xl leading-relaxed">
							大切な方々と肩の力を抜いて集まれる、日常に寄り添う和食店。旬の食材を丁寧に仕立て、土の香りや出汁の余韻まで感じられる料理とお酒をご用意しています。気取らずお腹も心も満ちる、そんな時間をお過ごしください。
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Intro;
