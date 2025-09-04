import type { Metadata } from "next";
import { StoresList } from "@/components";

// ✅ SEOメタ情報を追加
export const metadata: Metadata = {
  title: "ブランド一覧 | 株式会社RPZ - 飲食を通じて感動体験を",
  description:
    "株式会社RPZが展開するブランド一覧ページです。飲食を通じて感動体験を届ける各店舗やブランドの特徴をご紹介します。",
  openGraph: {
    title: "ブランド一覧 | 株式会社RPZ",
    description:
      "RPZが展開するブランド・店舗情報一覧。飲食を通じて感動体験を提供する各ブランドの魅力をご紹介します。",
    url: "https://rpz.jp/brands",
    siteName: "株式会社RPZ",
    locale: "ja_JP",
    type: "website",
  },
};

export default function Page() {
  return (
    <main className="min-h-[60vh] grid place-items-center py-16">
      <div className="text-center">
        <StoresList />
      </div>
    </main>
  );
}
