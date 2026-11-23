"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { CountUp } from "./CountUp";

/**
 * The problem, said in plain words and then shown as the conversation it is in
 * real life: a manager asks one question and three tools answer differently
 * (the deck's Monday slide). Beside it, what that costs every week (the deck's
 * "What waiting costs" slide), which is the framework's "why it is serious
 * now".
 *
 * Third design of this section. The first two were a dark slab with boxes
 * inside boxes and an orange line; Anzelika: "the design is SHIT AF" and "no
 * orange color". This one is light: the copy on the left, one lavender panel
 * with the conversation on the right, no orange anywhere.
 */
const ANSWERS: { source: string; value: number; unit: string }[] = [
  { source: "Online shop", value: 1240, unit: "orders" },
  { source: "Google Analytics", value: 1050, unit: "purchases" },
  { source: "Finance spreadsheet", value: 1180, unit: "orders" },
];

const COSTS: { what: string; how: string }[] = [
  { what: "Time", how: "Every new report is rebuilt by hand." },
  { what: "Revenue", how: "Ads and emails keep learning from the wrong numbers." },
  { what: "AI", how: "Every AI tool you add reads the same mess." },
];

export function Problem() {
  return (
    <section
      id="the-problem"
      className="relative bg-white py-24 md:py-32 overflow-hidden scroll-mt-20"
    >
      <div className="wrap relative">
        <div className="grid gap-12 lg:gap-16 lg:grid-cols-2 lg:items-center">
          {/* LEFT · the words */}
          <div>
            <Reveal delay={0.05}>
              {/* two sentences, each whole on its own line: from lg the size
                  follows the column so neither sentence has to break */}
              <h2 className="font-head font-bold text-[var(--sw-black)] text-[28px] sm:text-[36px] md:text-[44px] lg:text-[clamp(30px,3vw,44px)] leading-[1.05] tracking-[-0.015em]">
                <span className="block lg:whitespace-nowrap">One simple question.</span>
                <span className="block text-balance lg:whitespace-nowrap text-[var(--sw-blue)]">
                  Three different answers.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-5 md:mt-6 max-w-[42ch] text-[var(--sw-black)]/75 text-[16px] md:text-[18px] leading-[1.5] text-balance">
                Each tool counts orders in its own way, so nobody knows which
                number is right.
              </p>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="mt-9 md:mt-11 font-head font-bold text-[var(--sw-black)] text-[17px] md:text-[19px] leading-tight">
                What it costs you every week
              </div>
            </Reveal>
            <ul className="mt-3 md:mt-4 flex flex-col">
              {COSTS.map((c, i) => (
                <Reveal key={c.what} delay={0.2 + i * 0.07}>
                  <li className="grid grid-cols-[5.5rem_1fr] items-baseline gap-4 border-t border-[rgba(126,131,160,0.3)] py-3.5 md:py-4">
                    <span className="font-head font-bold text-[var(--sw-blue)] text-[15px] md:text-[16px] leading-snug">
                      {c.what}
                    </span>
                    <span className="text-[var(--sw-black)]/85 text-[15px] md:text-[17px] leading-snug text-pretty">
                      {c.how}
                    </span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          {/* RIGHT · the conversation */}
          <Reveal delay={0.12}>
            <div className="rounded-[4px] border border-[rgba(126,131,160,0.3)] bg-[#f3f3fa] p-5 sm:p-7 md:p-9">
              {/* the question */}
              <Reveal delay={0.2}>
                <div className="max-w-[88%]">
                  <div className="mb-2 font-head text-[12px] md:text-[13px] font-semibold text-[var(--sw-black)]/60">
                    Your manager
                  </div>
                  <div className="inline-block rounded-[4px] bg-[var(--sw-black)] px-4 py-3 md:px-5 md:py-4 font-head text-white text-[17px] sm:text-[19px] md:text-[22px] leading-[1.25] text-balance">
                    How many orders did we get last week?
                  </div>
                </div>
              </Reveal>

              {/* the three answers */}
              <ul className="mt-5 md:mt-6 flex flex-col gap-2.5 md:gap-3">
                {ANSWERS.map((a, i) => (
                  <Reveal key={a.source} delay={0.45 + i * 0.22}>
                    <li className="ml-auto flex w-[88%] items-center justify-between gap-4 rounded-[4px] border border-[rgba(126,131,160,0.3)] bg-white px-4 py-3 md:px-5 md:py-4">
                      <span className="text-[var(--sw-black)]/75 text-[14px] md:text-[16px] leading-tight">
                        {a.source}
                      </span>
                      <span className="flex items-baseline gap-2 whitespace-nowrap">
                        <span className="font-head font-bold text-[var(--sw-black)] text-[26px] sm:text-[30px] md:text-[36px] leading-none tracking-[-0.02em]">
                          <CountUp to={a.value} duration={1 + i * 0.12} />
                        </span>
                        <span className="text-[var(--sw-black)]/60 text-[13px] md:text-[15px] leading-none">
                          {a.unit}
                        </span>
                      </span>
                    </li>
                  </Reveal>
                ))}
              </ul>

              <Reveal delay={1.15}>
                <p className="mt-5 md:mt-6 font-head font-semibold text-[var(--sw-blue)] text-[15px] md:text-[17px] leading-snug">
                  Same week, same question. Which number do you report?
                </p>
              </Reveal>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
