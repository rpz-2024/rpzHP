"use client";

import { aboutusContent } from "@/data/aboutus";

export function AboutusSection() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      {/* 上部キャッチコピー */}
      <div className="mb-10 text-center">
        <h1 className="text-2xl font-bold text-stone-800 md:text-3xl">
          {aboutusContent.kicker}
        </h1>
      </div>

      {/* 本文ボックス */}
      <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-stone-200">
        {aboutusContent.body.map((paragraph, i) => (
          <p
            key={i}
            className="mb-6 text-stone-700 leading-relaxed whitespace-pre-line"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}