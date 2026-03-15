import Link from "next/link";
import type { NewsArticle } from "@/types/news";

type NewsAccordionProps = {
  items?: NewsArticle[];
  title?: string;
};

const getBadgeClassName = (category: string) => {
  switch (category) {
    case "ニュース":
      return "bg-blue-600 text-white";
    case "イベント":
      return "bg-orange-500 text-white";
    case "お知らせ":
      return "bg-emerald-500 text-white";
    case "採用":
      return "bg-rose-500 text-white";
    default:
      return "bg-stone-700 text-white";
  }
};

export function NewsAccordion({
  items = [],
  title = "ニュース",
}: NewsAccordionProps) {
  return (
    <section className="w-full bg-stone-50 py-16 md:py-24">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        <div className="mb-12 text-center md:mb-16">
          <h2 className="text-4xl font-bold tracking-[0.12em] text-red-600 md:text-5xl">
            {title}
          </h2>
        </div>

        <div className="border-t border-stone-300">
          {items.map((item) => (
            <Link
              key={item.id}
              href={`/news/${item.slug}`}
              className="grid items-center gap-3 border-b border-stone-300 py-5 transition-colors duration-200 hover:bg-stone-100 md:grid-cols-[120px_110px_1fr] md:gap-6 md:py-7"
            >
              <div className="text-sm font-medium text-stone-500 md:text-base">
                {item.date}
              </div>

              <div>
                <span
                  className={`inline-flex min-w-[84px] items-center justify-center rounded-full px-3 py-1 text-xs font-bold tracking-wide ${getBadgeClassName(
                    item.category
                  )}`}
                >
                  {item.category}
                </span>
              </div>

              <div className="text-sm font-semibold leading-7 text-stone-900 md:text-base">
                {item.title}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}