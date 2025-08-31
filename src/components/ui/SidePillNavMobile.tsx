"use client";

import Link from "next/link";
import type { ReactElement } from "react";
import { useEffect, useRef, useState } from "react";

import { MAIN_NAVIGATION } from "@/constants/navigation";

export function SidePillNavMobile(): ReactElement {
  const [isOpen, setIsOpen] = useState(false);
  const firstBtnRef = useRef<HTMLAnchorElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onToggle = () => setIsOpen((v) => !v);
    window.addEventListener("toggle-mobile-menu", onToggle);
    return () => window.removeEventListener("toggle-mobile-menu", onToggle);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => firstBtnRef.current?.focus(), 0);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
      if (e.key === "Tab" && panelRef.current) {
        const focusable = panelRef.current.querySelectorAll<HTMLElement>(
          'button, [href], [tabindex]:not([tabindex="-1"])',
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last!.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first!.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    window.dispatchEvent(
      new CustomEvent("mobile-menu-open-changed", { detail: true }),
    );
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
      window.dispatchEvent(
        new CustomEvent("mobile-menu-open-changed", { detail: false }),
      );
      clearTimeout(t);
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    // フォーカスをトリガーボタンに戻す
    setTimeout(() => {
      const trigger = document.getElementById(
        "mobile-menu-trigger",
      ) as HTMLButtonElement | null;
      if (trigger) {
        trigger.focus();
      }
    }, 100);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
    // フォーカスをトリガーボタンに戻す
    setTimeout(() => {
      const trigger = document.getElementById(
        "mobile-menu-trigger",
      ) as HTMLButtonElement | null;
      if (trigger) {
        trigger.focus();
      }
    }, 100);
  };

  return (
    <>
      {/* Fullscreen overlay + panel (left gap zero) */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        className={`fixed inset-0 z-[10] lg:hidden transition-opacity ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={handleClose}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            handleClose();
          }
        }}
      >
        <div
          ref={panelRef}
          role="menu"
          className={`fixed inset-0 bg-[#FBF5EF] transform transition-transform duration-300 ease-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.stopPropagation();
            }
          }}
        >
          <nav className="h-full w-full flex flex-col items-center justify-center gap-6 text-2xl font-semibold px-6">
            {MAIN_NAVIGATION.map((navItem, idx) => (
              <Link
                key={navItem.href}
                href={navItem.href}
                ref={idx === 0 ? firstBtnRef : undefined}
                onClick={handleLinkClick}
                className="h-12 rounded-full bg-[url('/background/background4.png')] bg-cover bg-center px-6 font-pixel text-white shadow-sm transition hover:brightness-110 active:brightness-90 tracking-wide grid place-items-center w-full max-w-[360px]"
              >
                {navItem.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
