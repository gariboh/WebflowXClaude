"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { assetUrl } from "@/lib/assets";
import { CountUp } from "./CountUp";

/**
 * Proof, turned towards the reader. "What changed for three businesses" got
 * "changed after what? how is that important to me? I am happy for them but I
 * don't give a shit" (Anzelika, 2026-11-23), so each card now leads with what
 * the reader could have, and the client and its number sit under it as the
 * evidence. The businesses are unnamed in the deck, so they are unnamed here. The cards follow the client quotes on
 * scandiweb.com/services: dark navy with the wave texture, on a white section.
 */
const STORIES: {
  outcome: string;
  to: number;
  decimals?: number;
  suffix?: string;
  unit: string;
  who: string;
}[] = [
  {
    outcome: "Ads that learn from real revenue",
    to: 5,
    unit: "sources joined in one place",
    who: "Private clinic",
  },
  {
    outcome: "Every customer seen once, online and in store",
    to: 1.49,
    decimals: 2,
    suffix: " million",
    unit: "customer profiles in one view",
    who: "US retailer",
  },
  {
    outcome: "Demand forecast a year ahead",
    to: 52,
    suffix: " weeks",
    unit: "forecast for every room, refreshed weekly",
    who: "UK nursery group",
  },
];

export function Stories() {
  return (
    <section
      id="client-stories"
      className="relative bg-white py-24 md:py-32 overflow-hidden scroll-mt-20"
    >
      <div className="wrap relative">
        {/* title, then its one line under it, on the same left edge as the cards
            (the line used to sit alone in a right-hand column) */}
        <Reveal delay={0.05}>
          <h2 className="font-head font-bold text-[var(--sw-black)] text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] leading-[1.05] tracking-[-0.015em]">
            <span className="block">What becomes possible</span>
            <span className="block text-[var(--sw-blue)]">when your numbers agree</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-5 md:mt-6 max-w-[60ch] text-[var(--sw-black)]/75 text-[16px] md:text-[18px] leading-[1.5] text-pretty">
            Three things businesses did once their data was in one place.
          </p>
        </Reveal>

        {/* One picture runs through all three cards (Anzelika, 2026-11-23): each
            card shows its own slice of the same wave image, so the picture
            carries on from the first box to the last instead of repeating.
            The image is as wide as the whole row (three cards and two gaps)
            and shifted left by the card's position; on phones, where the
            cards stack, the same is done downwards. auto-rows-fr keeps the
            stacked cards the same height so the slices line up. */}
        <ul className="mt-10 md:mt-14 grid auto-rows-fr gap-[var(--g)] [--g:12px] md:[--g:16px] md:grid-cols-3">
          {STORIES.map((s, i) => (
            <Reveal key={s.outcome} delay={i * 0.08} className="h-full">
              <li
                className="relative flex h-full flex-col overflow-hidden rounded-[4px] bg-[var(--sw-black)] p-6 md:p-8"
                style={{ "--i": i } as React.CSSProperties}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={assetUrl("/webinars/unifying-data/hero-waves.webp")}
                  alt=""
                  aria-hidden
                  className="pointer-events-none absolute max-w-none object-cover left-0 w-full top-[calc(var(--i)_*_-1_*_(100%_+_var(--g)))] h-[calc(300%_+_2_*_var(--g))] md:top-0 md:h-full md:left-[calc(var(--i)_*_-1_*_(100%_+_var(--g)))] md:w-[calc(300%_+_2_*_var(--g))]"
                />
                <div className="relative flex h-full flex-col">
                  {/* what the reader could have, first and largest */}
                  <p className="font-head font-bold text-white text-[22px] md:text-[26px] lg:text-[30px] leading-[1.15] tracking-[-0.01em] text-balance">
                    {s.outcome}
                  </p>

                  {/* the evidence: who did it, and the number */}
                  <div className="mt-auto pt-12 md:pt-16">
                    <div
                      className="font-head font-bold text-[30px] md:text-[36px] leading-none tracking-[-0.02em] whitespace-nowrap"
                      style={{ color: "var(--sw-mint)" }}
                    >
                      <CountUp to={s.to} decimals={s.decimals} suffix={s.suffix} />
                    </div>
                    <div className="mt-2 text-white/80 text-[14px] md:text-[16px] leading-snug text-pretty">
                      {s.unit}
                    </div>
                    <div className="mt-4 font-head text-[11px] md:text-[12px] font-semibold uppercase tracking-[0.14em] text-white/55">
                      {s.who}
                    </div>
                  </div>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
