"use client";

import * as React from "react";
import { ABOUTUS_CONTENT } from "@/data/aboutus";

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">{children}</h1>
);

const SectionLead: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="mt-4 text-lg md:text-xl font-bold text-neutral-800 leading-relaxed">{children}</p>
);

export function AboutusSection() {
  const c = ABOUTUS_CONTENT;
  return (
    <div className="space-y-6 md:space-y-8">
      <header>
        <SectionTitle>{c.title}</SectionTitle>
        <SectionLead>{c.lead}</SectionLead>
      </header>
      <div className="text-neutral-700 text-base md:text-lg leading-relaxed whitespace-pre-line">
        {c.body}
      </div>
    </div>
  );
}
