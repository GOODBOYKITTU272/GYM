import { cn } from "@/lib/utils";
import {
  DECISION_LABELS,
  PRODUCT_DECISION,
  SECTION_IDS,
  type DecisionLevel,
} from "@/lib/landing-content";
import { Icon } from "./icon";
import { SectionHeading } from "./section-heading";

/**
 * Each state pairs a colour with a distinct icon so the meaning never rests on
 * colour alone (docs/04 §13.1). Tones are deliberately calm — no risk meters.
 */
const DECISION_STYLES: Record<
  DecisionLevel,
  { icon: string; active: string; idle: string }
> = {
  good: {
    icon: "CheckCircle",
    active: "border-nw-good/40 bg-nw-good-soft text-nw-good",
    idle: "border-nw-border bg-white text-nw-muted",
  },
  occasional: {
    icon: "MinusCircle",
    active: "border-nw-occasional/40 bg-nw-occasional-soft text-nw-occasional",
    idle: "border-nw-border bg-white text-nw-muted",
  },
  skip: {
    icon: "XCircle",
    active: "border-nw-skip/40 bg-nw-skip-soft text-nw-skip",
    idle: "border-nw-border bg-white text-nw-muted",
  },
};

export function ProductDecisionSection() {
  const { decision } = PRODUCT_DECISION;

  return (
    <section
      id={SECTION_IDS.productDecision}
      aria-labelledby="product-decision-heading"
      className="bg-nw-cream py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          id="product-decision-heading"
          eyebrow={PRODUCT_DECISION.eyebrow}
          heading={PRODUCT_DECISION.heading}
          body={PRODUCT_DECISION.body}
        />

        <div className="mx-auto mt-14 grid max-w-4xl gap-6 lg:grid-cols-[1fr_1.15fr]">
          <div className="flex flex-col gap-4 rounded-3xl border border-nw-border bg-white p-6">
            <h3 className="text-sm font-bold uppercase tracking-wide text-nw-muted">
              What NowWise looked at
            </h3>
            <dl className="flex flex-col gap-3">
              {PRODUCT_DECISION.context.map((item) => (
                <div
                  key={item.label}
                  className="flex items-baseline justify-between gap-4 border-b border-nw-border pb-3 last:border-0 last:pb-0"
                >
                  <dt className="text-sm text-nw-muted">{item.label}</dt>
                  <dd className="text-right text-sm font-semibold text-nw-ink">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="flex flex-col gap-5 rounded-3xl border border-nw-border bg-white p-6">
            <div className="rounded-2xl bg-nw-violet px-4 py-3 text-[0.9375rem] text-white">
              {PRODUCT_DECISION.question}
            </div>

            <div className="flex flex-col gap-2.5">
              {PRODUCT_DECISION.levels.map((level) => {
                const style = DECISION_STYLES[level];
                const isActive = level === decision;
                return (
                  <div
                    key={level}
                    className={cn(
                      "flex items-center gap-2.5 rounded-2xl border px-4 py-3 text-sm font-semibold transition-colors",
                      isActive ? style.active : style.idle,
                    )}
                  >
                    <Icon name={style.icon} className="size-[18px]" />
                    {DECISION_LABELS[level]}
                    {isActive && (
                      <span className="ml-auto rounded-full bg-white/70 px-2.5 py-0.5 text-xs font-bold uppercase tracking-wide">
                        NowWise says
                      </span>
                    )}
                  </div>
                );
              })}
            </div>

            <p className="text-[0.9375rem] leading-relaxed text-nw-ink">
              {PRODUCT_DECISION.recommendation}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
