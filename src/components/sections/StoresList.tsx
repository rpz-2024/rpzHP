import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import SectionRailTitle from "@/components/ui/SectionRailTitle";
import { STORES } from "@/data/stores";

const StoresList = () => {
	return (
		<section className="lg:contents">
			<div className="hidden lg:block lg:col-start-2">
				<SectionRailTitle>各店舗の情報</SectionRailTitle>
			</div>

			<div
				id="stores"
				className="lg:col-start-3 py-12 scroll-mt-28 lg:scroll-mt-32 relative z-10"
			>
				<div className="lg:hidden block text-red-700 font-extrabold text-2xl md:text-3xl mt-6 mb-3">
					各店舗の情報
				</div>

				<div className="space-y-10 md:space-y-12">
					{STORES.map((s) => (
						<article
							key={s.id}
							className="grid lg:grid-cols-12 gap-6 lg:gap-6 items-stretch lg:min-h-[320px] xl:min-h-[380px]"
						>
							{/* 画像 */}
							<div className="relative lg:col-span-6  xl:max-w-[450px]">
								<div className="relative aspect-[16/14] overflow-hidden rounded-3xl">
									<Image
										src={s.image}
										alt={`${s.name}の店舗画像`}
										fill
										className="object-cover"
										sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 880px"
									/>
								</div>
							</div>

							{/* 本文 */}
							<div className="lg:col-span-6 self-stretch grid grid-rows-[auto_auto_auto_1fr_auto] p-1 md:p-2 min-h-full">
								{/* エリアラベル（店名の上） */}
								<div className="mb-2 md:mb-3">
									<span className="inline-flex items-center rounded-full bg-stone-900 text-white text-sm md:text-base font-semibold px-3 py-1">
										{s.area}
									</span>
								</div>
								<h3 className="mb-2 text-2xl md:text-3xl font-extrabold text-stone-800">
									{s.name}
								</h3>
								<p className="text-red-600 font-bold leading-relaxed mb-4">
									{s.description}
								</p>

								<dl className="space-y-1 text-stone-700 text-base md:text-lg">
									<div>
										<dt className="inline font-semibold">住所：</dt>
										<dd className="inline break-words">{s.address}</dd>
									</div>
									<div>
										<dt className="inline font-semibold">営業時間：</dt>
										<dd className="inline">{s.hours}</dd>
									</div>
									<div>
										<dt className="inline font-semibold">電話番号：</dt>
										<dd className="inline">{s.tel}</dd>
									</div>
								</dl>

								<div className="mt-auto pt-5 flex flex-wrap gap-3">
									{s.instagram && (
										<a
											href={s.instagram}
											target="_blank"
											className="inline-flex items-center"
										>
											<FaInstagram className="mx-auto text-5xl text-red-600 hover:brightness-110 active:brightness-90 focus-visible:outline-red transition-colors" />
										</a>
									)}
									{s.hotpepper && (
										<a
											href={s.hotpepper}
											target="_blank"
											className="inline-flex items-center gap-2 rounded-full bg-[#D30000] hover:brightness-110 active:brightness-90 focus-visible:outline-red px-16 py-2 text-white shadow-sm"
										>
											STORE SITE
										</a>
									)}
								</div>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
};

export default StoresList;
