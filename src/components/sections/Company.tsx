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
        <ol className="relative border-l border-neutral-200 pl-4 md:pl-6">
          {COMPANY_CONTENT.history.map((h, i) => (
            <li key={i} className="ml-2 py-3">
              <div className="absolute -left-[6px] mt-2 h-3 w-3 rounded-full bg-neutral-300" />
              <div className="text-sm text-neutral-500">
                {h.year}
                {h.month ? `.${h.month}` : ""}
              </div>
              <div className="font-medium text-neutral-900">{h.text}</div>
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
    <div className="space-y-10 md:space-y-12">
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
