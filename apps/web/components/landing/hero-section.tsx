import { Check } from "lucide-react";

import { CTA, HERO, SECTION_IDS } from "@/lib/landing-content";
import { TelegramCta } from "./telegram-cta";
import { TelegramDemo } from "./telegram-demo";

export function HeroSection() {
  return (
    <section
      id={SECTION_IDS.hero}
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-nw-cream"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 pb-20 pt-14 sm:px-6 sm:pb-24 sm:pt-20 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:pb-28">
        <div className="flex flex-col items-start gap-6">
          <span className="rounded-full border border-nw-border bg-white px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-nw-violet-dark">
            {HERO.eyebrow}
          </span>

          <h1
            id="hero-heading"
            className="text-balance text-4xl font-bold leading-[1.08] tracking-tight text-nw-ink sm:text-5xl lg:text-6xl"
          >
            {HERO.headingLead}{" "}
            <span className="bg-gradient-to-r from-nw-violet to-nw-coral bg-clip-text text-transparent">
              {HERO.headingHighlight}
            </span>
          </h1>

          <p className="max-w-xl text-pretty text-lg leading-relaxed text-nw-muted">
            {HERO.body}
          </p>
          <p className="max-w-xl text-base font-medium text-nw-ink">
            {HERO.secondary}
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <TelegramCta size="large" />
            <a
              href={`#${SECTION_IDS.howItWorks}`}
              className="inline-flex min-h-[3.25rem] items-center justify-center rounded-full border border-nw-border bg-white px-7 text-base font-semibold text-nw-ink transition-colors hover:bg-nw-violet-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nw-violet"
            >
              {CTA.secondary}
            </a>
          </div>

          <ul className="mt-2 flex flex-col gap-2.5">
            {HERO.trustNotes.map((note) => (
              <li
                key={note}
                className="flex items-start gap-2.5 text-sm text-nw-muted"
              >
                <span className="mt-0.5 grid size-[18px] shrink-0 place-items-center rounded-full bg-nw-good-soft text-nw-good">
                  <Check
                    className="size-3"
                    aria-hidden="true"
                    strokeWidth={3}
                  />
                </span>
                {note}
              </li>
            ))}
          </ul>
        </div>

        <TelegramDemo />
      </div>
    </section>
  );
}
