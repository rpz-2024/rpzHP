import type { PropsWithChildren } from "react";

import { Footer } from "@/components/layout/Footer";
import { HeaderMobile } from "@/components/layout/HeaderMobile";
import { Sidebar } from "@/components/layout/Sidebar";
import { GlobalNavMobileTrigger } from "@/components/ui/GlobalNavMobileTrigger";
import { SidePillNavMobile } from "@/components/ui/SidePillNavMobile";

export default function SiteLayout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen flex flex-col">
      <HeaderMobile />
      <GlobalNavMobileTrigger />

      <main className="flex-1">
        <Sidebar />
        <div className="w-full lg:pl-[244px] xl:pl-[268px]">
          <div className="mx-auto max-w-[1760px] 2xl:max-w-[1920px] px-3 md:px-6">
            <div className="lg:grid ">{children}</div>
          </div>
        </div>
      </main>

      <Footer />
      <SidePillNavMobile />
    </div>
  );
}
