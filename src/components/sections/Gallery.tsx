import Image from "next/image";
import SectionRailTitle from "@/components/ui/SectionRailTitle";

const imgs = Array.from({ length: 9 }).map(
	(_, i) => `/images/gallery-0${i + 1}.svg`,
);

const Gallery = () => {
	return (
		<section className="lg:contents">
			<div className="hidden lg:block lg:col-start-2">
				<SectionRailTitle>店内</SectionRailTitle>
			</div>
			<div
				id="gallery"
				className="lg:col-start-3 py-12 scroll-mt-28 lg:scroll-mt-32 relative z-10 overflow-visible"
			>
				<div className="lg:hidden block text-red-700 font-extrabold text-2xl md:text-3xl mt-6 mb-3">
					店内
				</div>
				<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{imgs.map((src, i) => (
						<div
							key={src}
							className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-md md:shadow-lg"
						>
							<Image
								src={src}
								alt={`店内写真 ${i + 1}`}
								fill
								className="object-cover"
								sizes="(max-width: 1024px) 100vw, 400px"
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Gallery;
