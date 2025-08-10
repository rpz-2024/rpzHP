import Image from "next/image";

const Hero = () => {
	return (
		<section aria-label="ヒーロー" className="lg:contents">
			{/* Rail title (optional) left empty for hero to preserve look */}
			<div className="hidden lg:block lg:col-start-2" aria-hidden />
			<div
				id="hero"
				className="lg:col-start-3 pt-6 scroll-mt-28 lg:scroll-mt-32 relative z-10 overflow-visible"
			>
				<div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl shadow-md md:shadow-lg">
					<Image
						src="/images/hero.svg"
						alt="季節の料理のテーブル風景"
						fill
						priority
						sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1760px"
						className="object-cover"
					/>
				</div>
			</div>
		</section>
	);
};

export default Hero;
