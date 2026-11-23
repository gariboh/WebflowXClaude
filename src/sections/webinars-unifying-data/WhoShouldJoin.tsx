"use client";

import { ArrowUpRight } from "lucide-react";
import { DrawnPath } from "@/components/primitives/DrawnPath";
import { Reveal } from "@/components/primitives/Reveal";
import { assetUrl } from "@/lib/assets";

/**
 * The four signs from the deck's "Is it worth doing now?" slide. The deck
 * describes the audience by what their week looks like rather than by job
 * title, so this section does the same.
 *
 * Laid out like "How we partner" on scandiweb.com/services: the lavender wave
 * background, the heading and one button on the left, and a curved line with a
 * dot per item on the right. Below lg the curve becomes a straight line.
 */
const SIGNS: React.ReactNode[] = [
  "You open 3 or more tools to answer one question",
  // "hand every week" on the second line, and only those words (Anzelika,
  // 2026-11-23): a forced break, with the phrase held whole.
  <>
    The same report is rebuilt by
    <br />
    <span className="whitespace-nowrap">hand every week</span>
  </>,
  // "revenue than you made" on the second line (Anzelika, 2026-11-23)
  <>
    Your channels claim more
    <br />
    <span className="whitespace-nowrap">revenue than you made</span>
  </>,
  // "shop platform, or AI" on the second line (Anzelika, 2026-11-23)
  <>
    You plan a new email tool,
    <br />
    <span className="whitespace-nowrap">shop platform, or AI</span>
  </>,
];

/* The curve, in the SVG's own units (240 wide, 480 tall): it starts top left,
   swings out to the right and comes back. Dots sit on it at four even steps. */
const P = [
  [30, 0],
  [250, 130],
  [250, 350],
  [30, 480],
] as const;
const CURVE = `M ${P[0][0]} ${P[0][1]} C ${P[1][0]} ${P[1][1]}, ${P[2][0]} ${P[2][1]}, ${P[3][0]} ${P[3][1]}`;
function at(t: number): [number, number] {
  const u = 1 - t;
  const k = [u * u * u, 3 * u * u * t, 3 * u * t * t, t * t * t];
  return [0, 1].map((i) =>
    k.reduce((sum, w, j) => sum + w * P[j][i], 0),
  ) as [number, number];
}
const STOPS = [0.14, 0.38, 0.62, 0.86].map(at);

function Dot() {
  return (
    <span
      aria-hidden
      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[var(--sw-black)]/40 bg-white"
    >
      <span className="h-[18px] w-[18px] rounded-full bg-[var(--sw-blue)]" />
    </span>
  );
}

export function WhoShouldJoin() {
  return (
    <section
      id="who-should-join"
      className="relative bg-white py-24 md:py-32 overflow-hidden scroll-mt-20"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={assetUrl("/webinars/unifying-data/bg-lavender-waves.webp")}
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-1/3"
        style={{ background: "linear-gradient(180deg, #ffffff, rgba(255,255,255,0))" }}
      />

      <div className="wrap relative">
        <div className="grid gap-12 lg:gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <Reveal delay={0.05}>
              {/* Two full lines, so no word is left alone ("join" used to sit by
                  itself on the second line). Same size as the other headings. */}
              <h2 className="font-head font-bold text-[var(--sw-black)] text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] leading-[1.05] tracking-[-0.015em]">
                <span className="block whitespace-nowrap text-[var(--sw-blue)]">Who should join</span>
                <span className="block whitespace-nowrap">this webinar</span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              {/* one line from lg up (Anzelika, 2026-11-23): the size follows the
                  column so the sentence never has to break; phones balance it */}
              <p className="mt-5 md:mt-6 text-[var(--sw-black)]/75 text-[16px] md:text-[18px] lg:text-[clamp(14px,1.33vw,18px)] leading-[1.5] text-balance lg:whitespace-nowrap">
                It is for you if any of these sounds like your week.
              </p>
            </Reveal>

            <Reveal delay={0.16}>
              <a
                href="#cta"
                className="mt-7 md:mt-9 inline-flex items-center gap-2 rounded-[2px] bg-[var(--sw-blue)] px-8 py-3.5 font-head font-semibold text-white text-[16px] leading-none transition-colors duration-200 hover:bg-[var(--sw-black)]"
              >
                Save your seat
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </Reveal>
          </div>

          {/* lg and up: the curve */}
          <div className="relative hidden lg:block" style={{ height: 480 }}>
            <svg
              aria-hidden
              viewBox="0 0 260 480"
              className="absolute left-0 top-0 h-full"
              style={{ width: 260 }}
              fill="none"
            >
              <DrawnPath d={CURVE} stroke="var(--sw-black)" strokeWidth={1.5} strokeOpacity={0.55} duration={1.6} />
            </svg>
            <ul>
              {SIGNS.map((s, i) => (
                <li
                  key={i}
                  className="absolute flex items-center gap-5"
                  style={{ left: STOPS[i][0] - 14, top: STOPS[i][1] - 14 }}
                >
                  <Reveal delay={0.25 + i * 0.14} className="flex items-center gap-5">
                    <Dot />
                    <span className="max-w-[26ch] font-head font-bold text-[var(--sw-black)] text-[19px] xl:text-[21px] leading-[1.25] text-pretty">
                      {s}
                    </span>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>

          {/* below lg: a straight line */}
          <ul className="relative flex flex-col gap-6 lg:hidden">
            <span
              aria-hidden
              className="absolute left-[13px] top-3 bottom-3 w-px bg-[var(--sw-black)]/35"
            />
            {SIGNS.map((s, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <li className="relative flex items-center gap-4">
                  <Dot />
                  <span className="font-head font-bold text-[var(--sw-black)] text-[17px] sm:text-[19px] leading-[1.3] text-pretty">
                    {s}
                  </span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
