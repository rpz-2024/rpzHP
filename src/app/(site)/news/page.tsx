import type { Metadata } from "next";
import Link from "next/link";
import { NewsAccordion } from "@/components/sections/NewsAccordion";
import { getNewsPage, getTotalNewsPages } from "@/data/news";

type NewsPageProps = {
	searchParams: Promise<{
		page?: string;
	}>;
};

export const metadata: Metadata = {
	title: "ニュース | 株式会社RPZ",
	description: "株式会社RPZの最新ニュース、お知らせ、イベント情報を掲載しています。",
};

export default async function NewsPage({ searchParams }: NewsPageProps) {
	const resolvedSearchParams = await searchParams;
	const rawPage = Number(resolvedSearchParams.page ?? "1");
	const totalPages = getTotalNewsPages();

	const currentPage =
		Number.isNaN(rawPage) || rawPage < 1
			? 1
			: rawPage > totalPages
				? totalPages
				: rawPage;

	const currentItems = getNewsPage(currentPage);

	return (
		<main className="w-full bg-stone-50">
			<NewsAccordion items={currentItems} title="ニュース" />

			{totalPages > 1 && (
				<div className="pb-16 md:pb-24">
					<div className="mx-auto flex max-w-6xl items-center justify-center gap-2 px-6 md:px-10">
						{Array.from({ length: totalPages }, (_, index) => {
							const pageNumber = index + 1;
							const isActive = pageNumber === currentPage;

							return (
								<Link
									key={pageNumber}
									href={`/news?page=${pageNumber}`}
									className={`inline-flex h-10 min-w-10 items-center justify-center rounded-full border px-4 text-sm font-bold transition ${isActive
											? "border-red-600 bg-red-600 text-white"
											: "border-stone-300 bg-white text-stone-700 hover:border-stone-900 hover:text-stone-900"
										}`}
								>
									{pageNumber}
								</Link>
							);
						})}
					</div>
				</div>
			)}
		</main>
	);
}