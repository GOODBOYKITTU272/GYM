import { Info } from "lucide-react";

import { PRIVACY, SECTION_IDS } from "@/lib/landing-content";
import { Icon } from "./icon";
import { SectionHeading } from "./section-heading";

export function PrivacySection() {
  return (
    <section
      id={SECTION_IDS.privacy}
      aria-labelledby="privacy-heading"
      className="bg-nw-ink py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          id="privacy-heading"
          eyebrow={PRIVACY.eyebrow}
          heading={PRIVACY.heading}
          body={PRIVACY.body}
          tone="dark"
        />

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PRIVACY.promises.map((promise) => (
            <li
              key={promise.title}
              className="flex flex-col gap-3 rounded-3xl border border-white/10 bg-white/[0.04] p-6"
            >
              <span className="grid size-11 place-items-center rounded-2xl bg-nw-lime/15 text-nw-lime">
                <Icon name={promise.icon} className="size-5" />
              </span>
              <h3 className="text-lg font-bold text-white">{promise.title}</h3>
              <p className="text-[0.9375rem] leading-relaxed text-white/70">
                {promise.description}
              </p>
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-10 flex max-w-3xl items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-sm leading-relaxed text-white/70">
          <Info
            className="mt-0.5 size-4 shrink-0 text-white/50"
            aria-hidden="true"
          />
          {PRIVACY.disclaimer}
        </p>
      </div>
    </section>
  );
}
