import Image from "next/image";
import type { ReactElement } from "react";
import { FaInstagram } from "react-icons/fa";

import { SectionRailTitle } from "@/components/ui/SectionRailTitle";
import { store } from "@/data/stores";

export function StoresList(): ReactElement {
  return (
    <section className="lg:contents">
      <div className="hidden lg:block lg:col-start-2">
        <SectionRailTitle>各店舗の情報</SectionRailTitle>
      </div>

      <div
        id="stores"
        className="lg:col-start-3 py-12 scroll-mt-28 lg:scroll-mt-32 relative z-10"
      >
        <div className="lg:hidden block text-red-700 font-pixel text-2xl md:text-3xl mt-6 mb-3">
          各店舗の情報
        </div>

        <div className="space-y-10 md:space-y-12">
          {store.map((storeItem) => (
            <article
              key={storeItem.id}
              className="grid lg:grid-cols-12 gap-6 lg:gap-6 items-stretch lg:min-h-[320px] xl:min-h-[380px]"
            >
              {/* 画像 */}
              <div className="relative lg:col-span-6  xl:max-w-[450px]">
                <div className="relative aspect-[16/14] overflow-hidden rounded-3xl">
                  <Image
                    src={storeItem.image} // ← ここで image プロパティを参照
                    alt={`${storeItem.name}のロゴ`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 880px"
                  />
                </div>
              </div>

              {/* 本文 */}
              <div className="lg:col-span-6 self-stretch grid grid-rows-[auto_auto_auto_1fr_auto] p-1 md:p-2 min-h-full">
                {/* エリアラベル（店名の上） */}
                <div className="mb-2 md:mb-3">
                  <span className="inline-flex items-center rounded-full bg-stone-900 text-white text-sm md:text-base font-semibold px-3 py-1">
                    {storeItem.area}
                  </span>
                </div>
                <h3 className="mb-2 text-2xl md:text-3xl font-extrabold text-stone-800">
                  {storeItem.name}
                </h3>
                <p className="text-red-600 font-bold leading-relaxed mb-4">
                  {storeItem.description}
                </p>

                <dl className="space-y-1 text-stone-700 text-base md:text-lg">
                  <div>
                    <dt className="inline font-semibold">住所：</dt>
                    <dd className="inline break-words">{storeItem.address}</dd>
                  </div>
                  <div>
                    <dt className="inline font-semibold">営業時間：</dt>
                    <dd className="inline whitespace-pre-line">
                      {storeItem.hours.replace(/<br\s*\/?>/gi, "\n")}
                    </dd>
                  </div>
                  <div>
                    <dt className="inline font-semibold">電話番号：</dt>
                    <dd className="inline">{storeItem.tel}</dd>
                  </div>
                </dl>

                <div className="mt-auto pt-5 flex flex-wrap gap-3">
                  {storeItem.instagram && (
                    <a
                      href={storeItem.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center"
                    >
                      <FaInstagram className="mx-auto text-5xl text-red-600 hover:brightness-110 active:brightness-90 focus-visible:outline-red transition-colors" />
                    </a>
                  )}
                  {storeItem.hotpepper && (
                    <a
                      href={storeItem.hotpepper}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full font-pixel bg-[#D30000] hover:brightness-110 active:brightness-90 focus-visible:outline-red px-16 py-2 text-white shadow-sm"
                    >
                      STORE SITE
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
