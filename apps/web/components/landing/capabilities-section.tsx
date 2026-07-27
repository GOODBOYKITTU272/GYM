import { Card, CardContent } from "@/components/ui/card";
import {
  CAPABILITIES,
  CAPABILITIES_SECTION,
  SECTION_IDS,
} from "@/lib/landing-content";
import { Icon } from "./icon";
import { SectionHeading } from "./section-heading";

export function CapabilitiesSection() {
  return (
    <section
      id={SECTION_IDS.capabilities}
      aria-labelledby="capabilities-heading"
      className="bg-nw-cream py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          id="capabilities-heading"
          eyebrow={CAPABILITIES_SECTION.eyebrow}
          heading={CAPABILITIES_SECTION.heading}
          body={CAPABILITIES_SECTION.body}
        />

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CAPABILITIES.map((capability) => (
            <li key={capability.title}>
              <Card className="h-full border-nw-border bg-white transition-all duration-200 hover:-translate-y-1 hover:border-nw-violet/40 hover:shadow-[0_16px_40px_-20px_rgba(109,62,242,0.45)]">
                <CardContent className="flex flex-col gap-3.5 p-6">
                  <span className="grid size-11 place-items-center rounded-2xl bg-nw-violet-soft text-nw-violet-dark">
                    <Icon name={capability.icon} className="size-5" />
                  </span>
                  <h3 className="text-lg font-bold text-nw-ink">
                    {capability.title}
                  </h3>
                  <p className="text-[0.9375rem] leading-relaxed text-nw-muted">
                    {capability.description}
                  </p>
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
