"use client";

import { ArrowUpRight, Gift } from "lucide-react";
import { btnPrimary } from "@/components/primitives/buttonStyles";
import { Reveal } from "@/components/primitives/Reveal";
import { assetUrl } from "@/lib/assets";
import { Eyebrow } from "@/sections/webinars-legacy-bridge/Eyebrow";
import { TrustBar } from "@/sections/webinars-legacy-bridge/TrustBar";
import { EYEBROW_PARTS, SPEAKERS } from "./details";

/**
 * The background of the sign-up block at the foot of the page (CTA.tsx), which
 * Anzelika picked for the hero on 2026-11-23: "we can use this bg and just make
 * bright blur under highlighted text". The blur was dropped together with the
 * colour on the words; the background stays, identical to CTA.tsx.
 */
function HeroBg() {
  return (
    <>
      <div
        aria-hidden
        className="absolute inset-0 -z-20"
        style={{
          background:
            "radial-gradient(900px 600px at 20% 20%, #2a3380 0%, transparent 55%)," +
            "radial-gradient(800px 580px at 85% 82%, #070a1e 0%, transparent 52%)," +
            "radial-gradient(1400px 900px at 50% 50%, #1a2060 0%, #141a48 35%, #10132c 70%, #0a0d24 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-70 mix-blend-overlay"
        style={{
          background:
            "radial-gradient(620px 900px at 28% 62%, rgba(7, 10, 30, 0.85), transparent 60%)," +
            "radial-gradient(540px 720px at 72% 28%, rgba(63, 74, 175, 0.22), transparent 60%)",
          filter: "blur(50px)",
        }}
      />
    </>
  );
}

/** The offer, boxed and in the accent colour. It is the strongest reason to attend. */
function OfferLine() {
  return (
    <div className="flex h-full min-h-12 items-center gap-3 rounded-[4px] border border-[var(--sw-mint)]/40 bg-[var(--sw-mint)]/[0.07] px-4 py-2.5 md:px-5">
      <span
        aria-hidden
        className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-[4px] border border-[var(--sw-mint)]/35 text-[var(--sw-mint)]"
      >
        <Gift className="h-3.5 w-3.5" strokeWidth={1.9} />
      </span>
      <p className="font-head font-semibold text-white text-[13.5px] sm:text-[14px] md:text-[15px] leading-[1.35]">
        {/* was "Attendees can book a free dashboard prototype afterwards":
            "too long" (Anzelika, 2026-11-23) */}
        Get a free dashboard prototype
      </p>
    </div>
  );
}

/**
 * The two hosts, one box each, the way the CDP webinar hero shows its panel.
 * This is the only thing beside the copy: the worked example that used to sit
 * here made the hero busy.
 */
function Hosts() {
  return (
    <div className="grid grid-cols-2 gap-4 md:gap-5 max-w-[400px] lg:ml-auto">
      {SPEAKERS.map((s) => (
        <div
          key={s.name}
          className="flex h-full flex-col rounded-[4px] border border-white/12 bg-white/[0.04] p-2.5 md:p-3"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={assetUrl(s.photo)}
            alt={s.name}
            className="w-full aspect-square rounded-[2px] object-cover"
          />
          {/* The cards are equal in height and "scandiweb" is pushed to the foot,
              so it sits on the same line in both, whether the role above it
              takes one line or two (Anzelika, 2026-11-23: "why not same line?"). */}
          <div className="mt-2.5 flex flex-1 flex-col">
            <div className="font-head text-white text-[13px] md:text-[14px] leading-[1.2]">
              {s.name}
            </div>
            <div className="mt-1.5 text-white/70 text-[11px] md:text-[12px] leading-snug text-pretty">
              {s.title}
            </div>
            <div className="mt-auto text-white/55 text-[11px] md:text-[12px] leading-snug">
              scandiweb
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function Hero() {
  return (
    // hero-fill plus the trust bar as the last child: landing on the page shows
    // everything down to and including the client logo row, without scrolling.
    <section
      id="hero"
      className="relative -mt-[60px] md:-mt-[75px] overflow-hidden hero-fill flex flex-col"
    >
      <HeroBg />

      <div className="flex-1 flex items-start lg:items-center">
        <div className="wrap relative z-10 pt-[calc(116px+clamp(10px,2.4vh,34px))] md:pt-[calc(124px+clamp(12px,3vh,40px))] pb-[clamp(16px,2.6vh,44px)] w-full">
          <div className="grid gap-8 md:gap-10 lg:gap-12 lg:grid-cols-[1.34fr_0.66fr] lg:items-center">
            {/* LEFT · copy. Everything here starts on the same left edge. */}
            <div className="max-w-[50rem]">
              <Reveal>
                <Eyebrow parts={EYEBROW_PARTS} className="mb-[clamp(12px,2.2vh,24px)]" />
              </Reveal>

              <Reveal delay={0.05}>
                {/* Title chosen by Anzelika on 2026-11-23, after "2.9x greater yearly
                    revenue growth for companies with a unified customer view"
                    felt too long and not painful. It is the same finding read
                    from the losing side (the 11 Nov deck's "The cost of
                    scattered data" slide: 14.7% yearly growth against 5.1%),
                    plus the question she added so the reader places themselves.
                    Two sentences, so both keep their end marks. */}
                <h1 className="font-head text-white text-[30px] sm:text-[40px] md:text-[46px] lg:text-[clamp(34px,min(6.2vh,3.6vw),52px)] leading-[1.08] tracking-[-0.02em]">
                  {/* "data grow 2.9x slower." is line 2, and only those words
                      (Anzelika, 2026-11-23): a forced break from sm up, with
                      the line held whole. Phones are too narrow for line 1 on
                      one line, so there the statement balances instead. */}
                  <span className="block text-balance sm:[text-wrap:initial]">
                    Companies with scattered
                    <br className="hidden sm:block" />{" "}
                    <span className="sm:whitespace-nowrap">
                      data grow{" "}
                      {/* "2.9x slower." in the exact brand orange, letters only
                          (Anzelika, 2026-11-23: "let's color orange?"). Orange is
                          the brand colour for bad news and reads on navy, which
                          the brand blue does not: a box, a tint, a light hero and
                          two blurs were all tried for blue and rejected. This is
                          the only orange on the page. */}
                      <span className="text-[var(--sw-orange)]">2.9x slower.</span>
                    </span>
                  </span>
                  <span className="block">Are you one of them?</span>
                </h1>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="mt-[clamp(12px,2vh,22px)] max-w-[60ch] text-[15px] sm:text-[16px] md:text-[17px] leading-[1.5] text-white/85 text-balance">
                  {/* two sentences, one per line from sm up */}
                  <span className="sm:block">Your sales and customer data sit in different tools.</span>{" "}
                  <span className="sm:block">Learn how to bring them together.</span>
                </p>
              </Reveal>

              {/* The button and the offer sit on one line, so the payoff reads
                  as part of the action rather than a separate claim above it. */}
              <Reveal delay={0.18}>
                <div className="mt-[clamp(28px,5vh,56px)] flex flex-col sm:flex-row sm:items-stretch gap-3 md:gap-4">
                  <a
                    href="#cta"
                    className={`${btnPrimary} shrink-0 py-3`}
                    style={{ height: "auto" }}
                  >
                    Save your seat
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                  {/* no flex-1: the box hugs its two lines instead of
                      stretching to the end of the column */}
                  <div className="flex">
                    <OfferLine />
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.26}>
                <p className="mt-[clamp(10px,1.6vh,18px)] text-white/60 text-[13px] md:text-[14px] leading-relaxed">
                  Can&apos;t join live? Register, and we&apos;ll send you the
                  recording.
                </p>
              </Reveal>
            </div>

            {/* RIGHT · the two hosts, nothing else */}
            <Reveal delay={0.12}>
              <Hosts />
            </Reveal>
          </div>
        </div>
      </div>

      <TrustBar />
    </section>
  );
}
