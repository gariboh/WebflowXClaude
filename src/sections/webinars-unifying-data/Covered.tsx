"use client";

import { Reveal } from "@/components/primitives/Reveal";

/**
 * What the session covers. Written for someone who has never seen the deck and
 * has one minute, and ordered by the board's Webinar Sales Framework: the
 * problem, the hidden reason, why it is serious now, the one change (the
 * belief), what it means for AI, and a safe way to start. Each line is a claim
 * that makes you want the answer, not a topic label, and nothing is about how
 * other teams do it. Earlier lines Anzelika rejected: "How to see which ads
 * really bring you sales" ("check Google Ads obviously"), two "How to stop"
 * lines in a row, and the discount example ("any normal business has the
 * setup"). First section after the hero. White that fades into lavender.
 */
const POINTS: React.ReactNode[] = [
  // the problem, so the reader feels seen
  "Why the sales number in your shop never matches Google Analytics",
  // the hidden reason, in plain words ("take credit for the same sale" was
  // not understood: "what credits, is it really a problem")
  "Why your ads report more sales than you actually made",
  // why it is serious now. "in time and ad budget" sits on the second line
  // (Anzelika, 2026-11-23): a forced break, and the phrase is held whole.
  <>
    What mismatched numbers cost you every week,
    <br />
    <span className="whitespace-nowrap">in time and ad budget</span>
  </>,
  // the one belief, as a promise (the how stays in the session). Was "...makes
  // every report show the same number": "what same number? nobody will guess".
  "The one change that makes all your reports agree",
  // the cost of adding AI on top of it
  "Why AI gives confident answers from the wrong numbers",
  // fit and safety
  "Where to start, with the tools you already have",
];

export function Covered() {
  return (
    <section
      id="what-well-cover"
      className="relative py-24 md:py-32 overflow-hidden scroll-mt-20"
      style={{
        background:
          "linear-gradient(180deg, #ffffff 0%, #ffffff 45%, #f1f1fb 100%)",
      }}
    >
      <div className="wrap relative">
        <div className="grid gap-10 md:gap-14 lg:grid-cols-[1fr_1.35fr] lg:items-start">
          <Reveal delay={0.05}>
            <h2 className="font-head font-bold text-[var(--sw-black)] text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] leading-[1.05] tracking-[-0.015em]">
              <span className="block">What we&apos;ll cover</span>
              <span className="block text-[var(--sw-blue)]">during the webinar</span>
            </h2>
          </Reveal>

          <ol className="flex flex-col">
            {POINTS.map((item, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <li className="group flex items-baseline gap-5 md:gap-7 border-t border-[rgba(126,131,160,0.3)] py-4 md:py-5 last:border-b">
                  <span
                    aria-hidden
                    className="w-6 shrink-0 font-head font-semibold text-[var(--sw-blue)] text-[15px] md:text-[17px] tabular-nums"
                  >
                    {i + 1}
                  </span>
                  <span className="font-head font-semibold text-[var(--sw-black)] text-[17px] md:text-[21px] leading-snug text-pretty transition-transform duration-300 ease-out group-hover:translate-x-1.5">
                    {item}
                  </span>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
