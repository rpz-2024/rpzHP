import type { Metadata } from "next";
import { CareersSection } from "@/components/sections/Careers";

// ✅ SEOメタ情報を追加
export const metadata: Metadata = {
  title: "採用情報 | 株式会社RPZ - 飲食を通じて感動体験を共に創る仲間を募集",
  description:
    "株式会社RPZの採用情報ページです。飲食を通じて感動体験を提供する仲間を募集しています。未経験者歓迎、研修制度あり。求人情報はこちらから。",
  openGraph: {
    title: "採用情報 | 株式会社RPZ",
    description:
      "株式会社RPZの採用情報。飲食を通じて感動体験を共に創る仲間を募集。未経験者歓迎、充実の研修制度あり。",
    url: "https://rpz.jp/careers",
    siteName: "株式会社RPZ",
    locale: "ja_JP",
    type: "website",
  },
};

export default function Page() {
  return (
    <main className="min-h-[60vh] grid place-items-center py-16">
      <div className="text-center">
        <CareersSection />
      </div>
    </main>
  );
}
