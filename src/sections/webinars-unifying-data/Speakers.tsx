"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { assetUrl } from "@/lib/assets";
import { SPEAKERS } from "./details";

/**
 * The two hosts, with the one line the deck's "Your hosts today" slide gives
 * each of them. White section, lavender tiles, as the tiles on
 * scandiweb.com/services.
 */
export function Speakers() {
  return (
    <section
      id="speakers"
      className="relative bg-white py-24 md:py-32 overflow-hidden scroll-mt-20"
    >
      <div className="wrap relative">
        <Reveal delay={0.05}>
          <h2 className="font-head font-bold text-[var(--sw-black)] text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] leading-[1.05] tracking-[-0.015em]">
            <span className="block">Hosted by scandiweb&apos;s</span>
            <span className="block text-[var(--sw-blue)]">analytics team</span>
          </h2>
        </Reveal>

        <div className="mt-10 md:mt-14 grid gap-3 md:gap-4 md:grid-cols-2">
          {SPEAKERS.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.08} className="h-full">
              <div className="group flex h-full items-center gap-5 md:gap-7 rounded-[4px] border border-[rgba(126,131,160,0.3)] bg-[#f3f3fa] p-5 md:p-7 transition-transform duration-300 ease-out hover:-translate-y-1">
                <div className="h-28 w-28 md:h-40 md:w-40 shrink-0 overflow-hidden rounded-[4px]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={assetUrl(s.photo)}
                    alt={`${s.name}, ${s.title}`}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="min-w-0">
                  <div className="font-head font-bold text-[var(--sw-black)] text-[19px] md:text-[24px] leading-tight">
                    {s.name}
                  </div>
                  <div className="mt-1.5 font-head font-semibold text-[var(--sw-blue)] text-[14px] md:text-[16px] leading-snug text-pretty">
                    {s.title}
                  </div>
                  <p className="mt-3 md:mt-4 text-[var(--sw-black)]/80 text-[15px] md:text-[17px] leading-snug text-pretty">
                    {s.bio}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
