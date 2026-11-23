"use client";

import { Check } from "lucide-react";
import { motion } from "motion/react";
import { Reveal } from "@/components/primitives/Reveal";
import { assetUrl } from "@/lib/assets";
import { CountUp } from "./CountUp";

/**
 * The gift: the deck's offer slide, "Your dashboard prototype, free", with its
 * three steps and three conditions word for word. Beside it sits a small
 * dashboard built from the deck's own example ("First use, reports everyone
 * trusts"), so the offer is something you can see. The deck leaves the number
 * of slots per month open, so the page says only that they are limited.
 *
 * A full-width dark section with the wave texture and a blue glow. (Earlier
 * versions: a flat brand-blue band, then a dark card inside a white section;
 * Anzelika asked for a whole section.)
 */
const STEPS: { lead: string; body: string }[] = [
  {
    lead: "60-minute call",
    body: "We agree the three questions that matter most to you",
  },
  { lead: "We build it", body: "A working prototype, built on sample data" },
  {
    lead: "You see the vision",
    body: "What your reports could look like, and a plan to get there",
  },
];

const TERMS = ["Free", "No commitment", "No access to your data needed"];

const KPIS: {
  label: string;
  prefix?: string;
  to: number;
  suffix?: string;
  change: string;
  meaning: string;
  source: string;
}[] = [
  {
    label: "Revenue in October",
    prefix: "€",
    to: 200,
    suffix: "k",
    change: "+4%",
    meaning: "Paid orders minus refunds",
    source: "From shop and finance",
  },
  {
    label: "Orders in October",
    to: 4760,
    change: "+3%",
    meaning: "Paid orders, online and in store",
    source: "From shop and store tills",
  },
];

const CHANNELS: { name: string; value: number }[] = [
  { name: "Google Ads", value: 70 },
  { name: "Meta", value: 50 },
  { name: "Email", value: 45 },
  { name: "Direct", value: 35 },
];
const TOP = Math.max(...CHANNELS.map((c) => c.value));

function Dashboard() {
  return (
    <div className="rounded-[4px] bg-white p-5 sm:p-6 md:p-8 text-[var(--sw-black)] shadow-[0_24px_60px_-28px_rgba(16,19,44,0.55)]">
      <div className="grid gap-3 sm:grid-cols-2">
        {KPIS.map((k) => (
          <div
            key={k.label}
            className="rounded-[4px] border border-[var(--sw-black)]/10 p-4 md:p-5"
          >
            <div className="text-[var(--sw-black)]/60 text-[13px] md:text-[14px] leading-tight">
              {k.label}
            </div>
            <div className="mt-2.5 flex items-baseline gap-2.5">
              <span className="font-head font-semibold text-[30px] md:text-[38px] leading-none tracking-[-0.02em]">
                <CountUp to={k.to} prefix={k.prefix} suffix={k.suffix} />
              </span>
              <span className="rounded-[2px] bg-[var(--sw-mint)] px-1.5 py-0.5 font-head text-[12px] md:text-[13px] font-semibold leading-none">
                {k.change}
              </span>
            </div>
            <div className="mt-3 text-[var(--sw-black)]/80 text-[13px] md:text-[14px] leading-snug">
              {k.meaning}
            </div>
            <div className="mt-0.5 text-[var(--sw-black)]/50 text-[12px] md:text-[13px] leading-snug">
              {k.source}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-3 rounded-[4px] border border-[var(--sw-black)]/10 p-4 md:p-5">
        <div className="text-[var(--sw-black)]/60 text-[13px] md:text-[14px] leading-tight">
          Revenue by channel, &euro;k
        </div>
        <ul className="mt-4 flex flex-col gap-3">
          {CHANNELS.map((c, i) => (
            <li
              key={c.name}
              className="grid grid-cols-[5.5rem_1fr_2rem] items-center gap-3 text-[13px] md:text-[14px]"
            >
              <span className="text-[var(--sw-black)]/80">{c.name}</span>
              <span className="h-2.5 rounded-[2px] bg-[var(--sw-black)]/[0.07]">
                {/* the bar grows from the left when the panel comes into view */}
                <motion.span
                  className="block h-full origin-left rounded-[2px] bg-[var(--sw-blue)]"
                  style={{ width: `${(c.value / TOP) * 100}%` }}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{
                    duration: 0.9,
                    delay: 0.15 + i * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                />
              </span>
              <span className="text-right font-head font-semibold tabular-nums">
                {c.value}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-4 text-[var(--sw-black)]/55 text-[12px] md:text-[13px] leading-snug">
        Example from the session, with sample data
      </p>
    </div>
  );
}

export function Gift() {
  return (
    // A whole section, edge to edge (Anzelika, 2026-11-23: "it should be a
    // whole section not a block"): navy, the wave image and a blue glow.
    <section
      id="dashboard-prototype"
      className="relative overflow-hidden py-24 md:py-32 scroll-mt-20"
      style={{
        background:
          "radial-gradient(1100px 620px at 86% 14%, rgba(63,74,175,0.7) 0%, rgba(63,74,175,0) 62%), #10132c",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={assetUrl("/webinars/unifying-data/hero-waves.webp")}
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-70"
      />

      <div className="wrap relative">
        <div className="relative grid gap-10 lg:gap-14 lg:grid-cols-[1.12fr_0.88fr] lg:items-center">
          <div>
            {/* two lines from lg up; the size follows the column so each line
                stays whole beside the dashboard */}
            <h2 className="font-head font-bold text-white text-[28px] sm:text-[36px] md:text-[44px] lg:text-[clamp(30px,3.1vw,46px)] leading-[1.06] tracking-[-0.015em]">
              <span className="block text-balance lg:whitespace-nowrap">Every attendee can book</span>
              <span className="block text-balance lg:whitespace-nowrap" style={{ color: "var(--sw-mint)" }}>
                {/* the last two words stay together, so "prototype" never sits alone */}
                a free <span className="whitespace-nowrap">dashboard prototype</span>
              </span>
            </h2>

            {/* one line from lg up (Anzelika, 2026-11-23); phones balance it */}
            <p className="mt-5 md:mt-6 text-white/85 text-[16px] md:text-[18px] lg:text-[clamp(14px,1.33vw,18px)] leading-[1.5] text-balance lg:whitespace-nowrap">
              See what your own reports could look like on one screen.
            </p>

            <ol className="mt-7 md:mt-9 flex flex-col">
              {STEPS.map((s, i) => (
                <Reveal key={s.lead} delay={0.1 + i * 0.08}>
                  <li className="flex gap-5 border-t border-white/20 py-4 md:py-5">
                    <span
                      aria-hidden
                      className="font-head font-semibold text-[var(--sw-mint)] text-[17px] md:text-[19px] leading-tight tabular-nums"
                    >
                      {i + 1}
                    </span>
                    <div>
                      <div className="font-head font-bold text-white text-[17px] md:text-[20px] leading-tight">
                        {s.lead}
                      </div>
                      <p className="mt-1.5 text-white/80 text-[15px] md:text-[16px] leading-snug text-pretty">
                        {s.body}
                      </p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>

            <Reveal delay={0.35}>
              <ul className="flex flex-wrap gap-x-7 gap-y-2.5 border-t border-white/20 pt-5 md:pt-6">
                {TERMS.map((t) => (
                  <li
                    key={t}
                    className="flex items-center gap-2 text-white text-[15px] md:text-[16px] leading-snug"
                  >
                    <Check
                      className="h-[18px] w-[18px] shrink-0 text-[var(--sw-mint)]"
                      strokeWidth={2.2}
                    />
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.18}>
            <Dashboard />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
