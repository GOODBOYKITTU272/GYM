import { SECTION_IDS, WEEKLY_STORY } from "@/lib/landing-content";
import { SectionHeading } from "./section-heading";

export function WeeklyStorySection() {
  return (
    <section
      id={SECTION_IDS.weeklyStory}
      aria-labelledby="weekly-story-heading"
      className="bg-white py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          id="weekly-story-heading"
          eyebrow={WEEKLY_STORY.eyebrow}
          heading={WEEKLY_STORY.heading}
          body={WEEKLY_STORY.body}
        />

        <div className="mx-auto mt-14 grid max-w-4xl gap-6 lg:grid-cols-[1.1fr_1fr]">
          <div className="rounded-3xl border border-nw-border bg-nw-cream p-6 sm:p-7">
            <h3 className="text-sm font-bold uppercase tracking-wide text-nw-muted">
              Your week
            </h3>
            <dl className="mt-5 flex flex-col gap-4">
              {WEEKLY_STORY.stats.map((stat) => (
                <div key={stat.label}>
                  <div className="flex items-baseline justify-between gap-3">
                    <dt className="text-sm font-medium text-nw-ink">
                      {stat.label}
                    </dt>
                    <dd className="text-sm font-bold tabular-nums text-nw-ink">
                      {stat.value}
                      {stat.unit}
                    </dd>
                  </div>
                  {/* Decorative: the numbers above already carry the value. */}
                  <div
                    aria-hidden="true"
                    className="mt-1.5 h-2 overflow-hidden rounded-full bg-white"
                  >
                    <div
                      className="h-full rounded-full bg-nw-violet"
                      style={{
                        width: `${Math.round((stat.value / stat.max) * 100)}%`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </dl>
          </div>

          <div className="flex flex-col gap-4">
            <blockquote className="rounded-3xl border border-nw-border bg-nw-mint/60 p-6 text-[1.0625rem] leading-relaxed text-nw-ink">
              {WEEKLY_STORY.narrative}
            </blockquote>

            {[WEEKLY_STORY.bestImprovement, WEEKLY_STORY.nextFocus].map(
              (item) => (
                <div
                  key={item.label}
                  className="rounded-3xl border border-nw-border bg-white p-5"
                >
                  <p className="text-xs font-bold uppercase tracking-wide text-nw-violet-dark">
                    {item.label}
                  </p>
                  <p className="mt-1.5 text-[0.9375rem] font-medium text-nw-ink">
                    {item.value}
                  </p>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
