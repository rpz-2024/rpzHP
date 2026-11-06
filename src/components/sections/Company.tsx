"use client";

import * as React from "react";
import { COMPANY_CONTENT } from "@/data/company";

// 共通ミニ UI
const SectionTitle: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
    {children}
  </h2>
);
const SectionLead: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="mt-2 text-neutral-600">{children}</p>
);
const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => (
  <div
    className={`rounded-3xl border border-neutral-200 bg-white p-6 md:p-8 shadow-sm ${className ?? ""}`}
  >
    {children}
  </div>
);

// Key-Value 行
const KvRow = ({
  label,
  value,
}: {
  label: string;
  value?: React.ReactNode;
}) => (
  <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-2 md:gap-4 py-3 border-b border-neutral-200">
    <div className="text-neutral-500">{label}</div>
    <div className="font-medium break-words">{value ?? "-"}</div>
  </div>
);

// 沿革
const HistoryBlock = () => {
  if (!COMPANY_CONTENT.history?.length) return null;
  return (
    <section>
      <SectionTitle>{COMPANY_CONTENT.historyTitle ?? "沿革"}</SectionTitle>
      <Card className="mt-4">
        <ol className="min-w-0 border-l border-neutral-200 pl-5 text-left sm:pl-7">
          {COMPANY_CONTENT.history.map((h, i) => (
            <li
              key={i}
              className="group relative grid min-w-0 gap-2 border-b border-neutral-100 py-5 first:pt-0 last:border-b-0 last:pb-0 sm:grid-cols-[5.5rem_minmax(0,1fr)] sm:gap-6"
            >
              <div aria-hidden="true" className="absolute -left-[26px] top-6 h-3 w-3 rounded-full border-2 border-white bg-red-700 group-first:top-1 sm:-left-[34px]" />
              <div className="pt-0.5 text-sm font-semibold tabular-nums leading-7 text-neutral-500">
                {h.year}
                {h.month ? `.${h.month}` : ""}
              </div>
              <p className="min-w-0 font-medium leading-8 text-neutral-900 [overflow-wrap:anywhere]">
                {h.text.split(/(?<=,)/u).map((part, index) => (
                  <span key={index} className="mr-2 inline-block max-w-full align-top last:mr-0">
                    {part}
                  </span>
                ))}
              </p>
            </li>
          ))}
        </ol>
      </Card>
    </section>
  );
};

export function CompanySection() {
  const c = COMPANY_CONTENT;
  return (
    <div className="min-w-0 space-y-10 md:space-y-12">
      {/* Hero */}
      <header>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          {c.title}
        </h1>
        {c.lead && <SectionLead>{c.lead}</SectionLead>}
      </header>

      {/* 会社情報 */}
      <section>
        <SectionTitle>{c.profileTitle}</SectionTitle>
        <Card className="mt-4">
          {c.profile.map((kv, i) => (
            <KvRow key={i} label={kv.label} value={kv.value} />
          ))}
        </Card>
      </section>

      {/* 沿革 */}
      <HistoryBlock />
    </div>
  );
}
