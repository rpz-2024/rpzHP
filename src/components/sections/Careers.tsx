"use client";

import * as React from "react";
import { CAREERS_CONTENT } from "@/data/careers";
import type { Occupation } from "@/types/careers";

// 汎用 UI（最小）
const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">{children}</h1>
);

const SectionLead: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="mt-2 text-neutral-600 text-sm md:text-base">{children}</p>
);

const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <div className={`rounded-3xl border border-neutral-200 bg-white p-5 md:p-6 shadow-sm ${className ?? ""}`}>
    {children}
  </div>
);

const PillAnchorNav: React.FC<{ items: { href: string; label: string }[] }> = ({ items }) => (
  <nav className="flex flex-wrap gap-2 md:gap-3 mb-6 md:mb-8">
    {items.map((it) => (
      <a key={it.href} href={it.href} className="px-3 py-1.5 rounded-full border border-neutral-300 text-sm hover:bg-neutral-50 transition">
        {it.label}
      </a>
    ))}
  </nav>
);

const ResponsibilityList: React.FC<{ items: string[] }> = ({ items }) => (
  <ul className="list-disc pl-5 space-y-1 text-sm md:text-base text-neutral-800">
    {items.map((x, i) => (
      <li key={i}>{x}</li>
    ))}
  </ul>
);

const CareerTimeline: React.FC<{ steps: Occupation["steps"] }> = ({ steps }) => (
  <ol className="relative border-l border-neutral-200 pl-4 md:pl-6 space-y-6">
    {steps.map((s, i) => (
      <li key={i} className="ml-2">
        <div className="absolute -left-[6px] mt-1 h-3 w-3 rounded-full bg-neutral-300" />
        <h4 className="text-base md:text-lg font-semibold">{s.title}</h4>
        <p className="mt-1 text-sm md:text-base text-neutral-700 whitespace-pre-line">{s.body}</p>
      </li>
    ))}
  </ol>
);

const OccupationCard: React.FC<{ data: Occupation }> = ({ data }) => (
  <section id={data.id} className="scroll-mt-24">
    <Card>
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
        {/* 左：テキスト */}
        <div className="flex-1">
          <div className="flex items-baseline gap-3">
            <h3 className="text-xl md:text-2xl font-extrabold">{data.title}</h3>
            {data.enTitle && (
              <span className="text-xs md:text-sm tracking-widest text-neutral-500 uppercase">{data.enTitle}</span>
            )}
          </div>
          <p className="mt-3 text-sm md:text-base text-neutral-800 leading-relaxed">{data.summary}</p>

          <div className="mt-6">
            <h4 className="text-sm md:text-base font-bold mb-2">主な担当領域</h4>
            <ResponsibilityList items={data.responsibilities} />
          </div>

          <div className="mt-6">
            <h4 className="text-sm md:text-base font-bold mb-2">キャリアパス</h4>
            <CareerTimeline steps={data.steps} />
          </div>
        </div>

        {/* 右：イメージ（任意） */}
        <div className="w-full md:w-72 lg:w-80 shrink-0">
          <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-neutral-100 border border-neutral-200">
            {data.image ? (
              // next/image に差し替え可
              <img src={data.image} alt={`${data.title} イメージ`} className="h-full w-full object-cover" />
            ) : (
              <div className="h-full w-full grid place-items-center text-neutral-400 text-sm">No Image</div>
            )}
          </div>
        </div>
      </div>
    </Card>
  </section>
);

export function CareersSection() {
  const c = CAREERS_CONTENT;
  return (
    <div className="space-y-8 md:space-y-10">
      {/* ヒーロー（太文字） */}
      <header>
        <SectionTitle>{c.heroTitle}</SectionTitle>
        {c.heroLead && <SectionLead>{c.heroLead}</SectionLead>}
      </header>

      {/* 募集要項カード */}
      <div>
        <h2 className="text-xl md:text-2xl font-extrabold mb-3">{c.jobSpecsTitle}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {c.jobSpecs.map((it, idx) => (
            <Card key={idx}>
              <div className="text-[11px] tracking-widest text-neutral-500 font-semibold uppercase">{it.label}</div>
              <div className="mt-1 text-[15px] md:text-base font-medium text-neutral-900">{it.value}</div>
            </Card>
          ))}
        </div>
      </div>

      {/* 職種見出し＋ピルナビ */}
      <div>
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-2">{c.occupationsTitle}</h2>
        <p className="text-neutral-600 text-sm md:text-base mb-4">それぞれの役割とキャリアのステップを紹介します。</p>
        <PillAnchorNav items={c.occupations.map((o) => ({ href: `#${o.id}`, label: o.title }))} />
      </div>

      {/* 職種カード */}
      <div className="space-y-8 md:space-y-10">
        {c.occupations.map((o) => (
          <OccupationCard key={o.id} data={o} />
        ))}
      </div>

      {/* CTA */}
      {(c.ctaText && c.ctaHref) ? (
        <div className="mt-2 md:mt-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-lg md:text-xl font-bold">エントリー</h3>
            <p className="text-sm md:text-base text-neutral-600">ご興味のある方は、募集職種を明記のうえエントリーフォームよりご応募ください。</p>
          </div>
          <a href={c.ctaHref} className="inline-flex items-center justify-center rounded-xl border border-neutral-200 bg-black px-5 py-3 text-white font-semibold shadow-sm hover:opacity-90">
            {c.ctaText}
          </a>
        </div>
      ) : null}
    </div>
  );
}


