import type { Metadata } from "next";
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";

import localFont from "next/font/local";
import type { PropsWithChildren } from "react";
import "@/styles/globals.css";

const pixelMplus = localFont({
  src: [
    {
      path: "./fonts/pixelmplus/PixelMplus12-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/pixelmplus/PixelMplus12-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-pixelmplus",
  display: "swap",
  preload: false,
});

const sans = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-serif",
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "RPZ",
  description:
    "生成りの空間で味わう季節の料理とお酒。落ち着いた和のひとときをお楽しみください。",
  icons: { icon: "/favicon.ico" },
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html
      lang="ja"
      className={[
        sans.variable,
        serif.variable,
        pixelMplus.variable,
        "bg-kinari text-stone-800 antialiased scroll-smooth",
      ].join(" ")}
    >
      <body className="min-h-screen font-sans text-base leading-relaxed overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
