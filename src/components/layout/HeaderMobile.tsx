"use client";

import Image from "next/image";
import Link from "next/link";

export function HeaderMobile() {
  return (
    <header className="inset-x-0 z-[100] bg-[#FBF5EF]/95 backdrop-blur supports-[backdrop-filter]:bg-[#FBF5EF]/80 lg:hidden">
      <div className="h-14 px-4 flex items-center justify-between">
        <Link href="/" aria-label="ホームへ" className="shrink-0">
          <Image
            src="/RPZlogo.png"
            alt="五十棲グループ"
            width={140}
            height={40}
            className="h-8 w-auto"
            priority
          />
        </Link>
      </div>
    </header>
  );
}
