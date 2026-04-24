import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllWpNewsSlugs, getWpNewsBySlug } from "@/lib/wordpress-news";

type NewsDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const slugs = await getAllWpNewsSlugs();

  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: NewsDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getWpNewsBySlug(slug);

  if (!article) {
    return {
      title: "ニュース | 株式会社RPZ",
      description: "株式会社RPZのニュースページです。",
    };
  }

  return {
    title: `${article.title} | 株式会社RPZ`,
    description: article.excerpt ?? article.title,
  };
}

export default async function NewsDetailPage({
  params,
}: NewsDetailPageProps) {
  const { slug } = await params;
  const article = await getWpNewsBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="bg-stone-50 py-16 md:py-24">
      <article className="mx-auto w-full max-w-4xl px-6 md:px-10">
        <div className="mb-8">
          <Link
            href="/news"
            className="mb-6 inline-block text-sm font-medium text-stone-500 transition hover:text-red-600"
          >
            ← ニュース一覧に戻る
          </Link>

          <p className="mb-4 text-sm font-medium text-stone-500 md:text-base">
            {article.date}
          </p>

          <div className="mb-4">
            <span className="inline-flex rounded-full bg-red-600 px-4 py-1 text-xs font-bold text-white">
              {article.category}
            </span>
          </div>

          <h1 className="text-3xl font-bold leading-tight text-stone-900 md:text-5xl md:leading-tight">
            {article.title}
          </h1>
        </div>

        {article.heroImage && (
          <div className="relative mb-10 aspect-[16/9] w-full overflow-hidden rounded-2xl">
            <Image
              src={article.heroImage}
              alt={article.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        <div
          className="prose prose-stone max-w-none prose-headings:mt-10 prose-headings:mb-4 prose-p:leading-8"
          dangerouslySetInnerHTML={{ __html: article.contentHtml }}
        />
      </article>
    </main>
  );
}