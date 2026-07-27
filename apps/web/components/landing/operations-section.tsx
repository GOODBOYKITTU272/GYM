import { Check } from "lucide-react";

import { ACCURACY, SECTION_IDS } from "@/lib/landing-content";

/**
 * Deliberately the smallest section on the page. This describes an internal
 * tool, not a product being sold — docs/01-PRD.md defers B2B until later.
 */
export function OperationsSection() {
  return (
    <section
      id={SECTION_IDS.accuracy}
      aria-labelledby="accuracy-heading"
      className="bg-white py-16"
    >
      <div className="mx-auto grid max-w-4xl gap-6 rounded-3xl border border-nw-border bg-nw-cream px-6 py-8 sm:px-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <div className="flex flex-col gap-2.5">
          <span className="text-xs font-bold uppercase tracking-wide text-nw-violet-dark">
            {ACCURACY.eyebrow}
          </span>
          <h2
            id="accuracy-heading"
            className="text-2xl font-bold tracking-tight text-nw-ink"
          >
            {ACCURACY.heading}
          </h2>
          <p className="text-[0.9375rem] leading-relaxed text-nw-muted">
            {ACCURACY.body}
          </p>
        </div>

        <ul className="flex flex-col gap-2.5">
          {ACCURACY.points.map((point) => (
            <li
              key={point}
              className="flex items-start gap-2.5 text-[0.9375rem] text-nw-ink"
            >
              <span className="mt-0.5 grid size-[18px] shrink-0 place-items-center rounded-full bg-nw-violet-soft text-nw-violet-dark">
                <Check className="size-3" aria-hidden="true" strokeWidth={3} />
              </span>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
