import { ArrowRight } from "lucide-react";

import { HOW_IT_WORKS, SECTION_IDS } from "@/lib/landing-content";
import { Icon } from "./icon";
import { SectionHeading } from "./section-heading";

export function HowItWorksSection() {
  return (
    <section
      id={SECTION_IDS.howItWorks}
      aria-labelledby="how-it-works-heading"
      className="bg-white py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          id="how-it-works-heading"
          eyebrow={HOW_IT_WORKS.eyebrow}
          heading={HOW_IT_WORKS.heading}
        />

        <ol className="mt-14 grid gap-6 lg:grid-cols-3">
          {HOW_IT_WORKS.steps.map((step, index) => (
            <li
              key={step.title}
              className="relative flex flex-col gap-3.5 rounded-3xl border border-nw-border bg-nw-cream p-6"
            >
              <span className="flex items-center gap-3">
                <span className="grid size-11 place-items-center rounded-2xl bg-nw-violet text-white">
                  <Icon name={step.icon} className="size-5" />
                </span>
                <span className="text-sm font-bold uppercase tracking-wide text-nw-muted">
                  Step {index + 1}
                </span>
              </span>
              <h3 className="text-xl font-bold text-nw-ink">{step.title}</h3>
              <p className="text-[0.9375rem] leading-relaxed text-nw-muted">
                {step.description}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-10 flex flex-col items-center gap-3 rounded-3xl border border-nw-border bg-nw-mint/50 px-5 py-6 sm:flex-row sm:justify-center sm:gap-4">
          {HOW_IT_WORKS.diagram.map((node, index) => (
            <div key={node} className="flex items-center gap-3 sm:gap-4">
              <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-nw-ink shadow-[0_1px_2px_rgba(16,24,40,0.06)]">
                {node}
              </span>
              {index < HOW_IT_WORKS.diagram.length - 1 && (
                <ArrowRight
                  className="size-4 shrink-0 rotate-90 text-nw-violet sm:rotate-0"
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
