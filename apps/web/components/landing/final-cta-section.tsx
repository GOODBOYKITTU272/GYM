import { CTA, FINAL_CTA, SECTION_IDS } from "@/lib/landing-content";
import { TelegramCta } from "./telegram-cta";

export function FinalCtaSection() {
  return (
    <section
      id={SECTION_IDS.finalCta}
      aria-labelledby="final-cta-heading"
      className="relative overflow-hidden bg-gradient-to-br from-nw-violet to-nw-violet-dark py-20 sm:py-24"
    >
      {/* Soft coral bloom, purely decorative. */}
      <div
        aria-hidden="true"
        className="absolute -right-24 -top-24 size-80 rounded-full bg-nw-coral/25 blur-3xl"
      />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-6 px-4 text-center sm:px-6">
        <h2
          id="final-cta-heading"
          className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl"
        >
          {FINAL_CTA.heading}
        </h2>
        <p className="max-w-xl text-pretty text-lg leading-relaxed text-white/80">
          {FINAL_CTA.body}
        </p>

        <TelegramCta
          size="large"
          label={CTA.final}
          className="bg-white text-nw-violet-dark shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] hover:bg-nw-cream focus-visible:outline-white"
        />

        <p className="text-sm text-white/70">{FINAL_CTA.note}</p>
      </div>
    </section>
  );
}
