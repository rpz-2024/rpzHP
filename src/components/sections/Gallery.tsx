import Image from "next/image";
import type { ReactElement } from "react";

import { SectionRailTitle } from "@/components/ui/SectionRailTitle";

const GALLERY_IMAGES = Array.from({ length: 9 })
  .map((_, i) => `/images/gallery0${i + 1}.svg`)
  .slice(0, 8);

export function Gallery(): ReactElement {
  return (
    <section className="lg:contents">
      <div className="hidden lg:block lg:col-start-2">
        <SectionRailTitle>店内</SectionRailTitle>
      </div>
      <div
        id="gallery"
        className="lg:col-start-3 py-12 scroll-mt-28 lg:scroll-mt-32 relative z-10"
      >
        <div className="lg:hidden block text-red-700 font-pixel text-2xl md:text-3xl mt-6 mb-3">
          店内
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-5">
          {GALLERY_IMAGES.map((src, i) => (
            <div
              key={src}
              className="relative w-full aspect-[4/3] overflow-hidden rounded-3xl shadow-md md:shadow-lg"
            >
              <Image
                src={src}
                alt={`店内写真 ${i + 1}`}
                fill
                className="object-cover"
                sizes="(max-width:768px) 50vw, (max-width:1280px) 50vw, 50vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
