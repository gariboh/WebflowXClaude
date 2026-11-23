"use client";

import { MotionConfig } from "motion/react";
import { HashScroll } from "@/components/site/HashScroll";
import { Hero } from "@/sections/webinars-unifying-data/Hero";
import { Problem } from "@/sections/webinars-unifying-data/Problem";
import { Covered } from "@/sections/webinars-unifying-data/Covered";
import { Stories } from "@/sections/webinars-unifying-data/Stories";
import { Speakers } from "@/sections/webinars-unifying-data/Speakers";
import { WhoShouldJoin } from "@/sections/webinars-unifying-data/WhoShouldJoin";
import { Gift } from "@/sections/webinars-unifying-data/Gift";
import { CTA } from "@/sections/webinars-unifying-data/CTA";

/**
 * scandiweb webinar on unifying eCommerce data, hosted by the analytics team.
 * Written for a visitor who has never seen the speakers' deck and has a minute:
 * every line names their problem or what they get, and the page teases the
 * session instead of retelling it. The deck is the source for every fact.
 *
 * The order follows the board's Webinar Sales Framework: promise, what the
 * session covers, the problem, proof, who it is for, the hosts, the offer, one
 * action. The look follows scandiweb.com/services: white sections, lavender
 * waves and tiles, dark navy cards, instead of alternating dark and light bands.
 *
 * Not ready to advertise yet: the date is "to be confirmed" and the sign-up
 * block shows a placeholder until a HubSpot form id is set in details.ts. The
 * layout keeps the page out of search engines (robots noindex) until then.
 * MotionConfig drops the scroll-in movement for prefers-reduced-motion.
 */
export default function Page() {
  return (
    <MotionConfig reducedMotion="user">
      <main className="min-h-screen flex flex-col">
        <HashScroll />
        <Hero />
        <Covered />
        <Problem />
        <Stories />
        <WhoShouldJoin />
        <Speakers />
        <Gift />
        <CTA />
      </main>
    </MotionConfig>
  );
}
