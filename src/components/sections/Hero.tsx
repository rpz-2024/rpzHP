import type { ReactElement } from "react";

export function Hero(): ReactElement {
	return (
		<section aria-label="ヒーロー" className="lg:contents">
			<div className="hidden lg:block lg:col-start-2" aria-hidden />
			<div
				id="hero"
				className="lg:col-start-3 pt-6 scroll-mt-28 lg:scroll-mt-32 relative z-10 overflow-visible"
			>
				<div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl shadow-md md:shadow-lg">
					<video
						src="/videos/Hero.mp4"
						autoPlay
						loop
						muted
						playsInline
						className="w-full h-full object-cover"
						aria-label="季節の料理とお酒の動画"
					>
						<track kind="captions" />
					</video>
				</div>
			</div>
		</section>
	);
}
