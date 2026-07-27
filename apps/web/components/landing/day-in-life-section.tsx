"use client";

import { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";
import { MOMENTS, MOMENTS_SECTION, SECTION_IDS } from "@/lib/landing-content";
import { ChatBubble } from "./chat-bubble";
import { Icon } from "./icon";
import { SectionHeading } from "./section-heading";

/**
 * Scroll-driven reveal using IntersectionObserver — no animation library.
 *
 * The effect drives the DOM directly instead of React state: revealing is a
 * visual side effect with no bearing on rendered output, so routing it through
 * state would cause a re-render per moment for nothing.
 *
 * Items render revealed by default. The effect hides them only once it has
 * confirmed JS is running and motion is welcome, so server output, no-JS
 * clients and reduced-motion users all get the fully visible page.
 */
export function DayInLifeSection() {
  const containerRef = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const items =
      containerRef.current?.querySelectorAll<HTMLElement>("[data-moment]");
    if (!items?.length) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    items.forEach((item) => {
      item.dataset.revealed = "false";
    });

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          (entry.target as HTMLElement).dataset.revealed = "true";
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -15% 0px", threshold: 0.25 },
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={SECTION_IDS.moments}
      aria-labelledby="moments-heading"
      className="bg-white py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          id="moments-heading"
          eyebrow={MOMENTS_SECTION.eyebrow}
          heading={MOMENTS_SECTION.heading}
          body={MOMENTS_SECTION.body}
        />

        <div className="relative mt-14">
          {/* Timeline spine, desktop only. */}
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-nw-border to-transparent lg:block"
          />

          <ol ref={containerRef} className="flex flex-col gap-10 lg:gap-14">
            {MOMENTS.map((moment, index) => (
              <li
                key={moment.id}
                data-moment={moment.id}
                className={cn(
                  "relative transition-all duration-700 ease-out",
                  "data-[revealed=false]:translate-y-6 data-[revealed=false]:opacity-0",
                )}
              >
                <div
                  className={cn(
                    "grid items-center gap-5 lg:grid-cols-2 lg:gap-16",
                    index % 2 === 1 && "lg:[&>*:first-child]:order-2",
                  )}
                >
                  <div
                    className={cn(
                      "flex flex-col gap-2",
                      index % 2 === 1
                        ? "lg:pl-14"
                        : "lg:items-end lg:pr-14 lg:text-right",
                    )}
                  >
                    <span className="flex items-center gap-2.5 text-nw-violet-dark">
                      <span className="grid size-10 place-items-center rounded-2xl bg-nw-violet-soft">
                        <Icon name={moment.icon} className="size-5" />
                      </span>
                      <span className="text-sm font-semibold uppercase tracking-wide">
                        {moment.time}
                      </span>
                    </span>
                    <h3 className="text-2xl font-bold text-nw-ink">
                      {moment.title}
                    </h3>
                  </div>

                  <div
                    className={cn(
                      "space-y-2.5 rounded-3xl border border-nw-border bg-nw-cream p-4 sm:p-5",
                      index % 2 === 1 ? "lg:mr-14" : "lg:ml-14",
                    )}
                  >
                    {moment.conversation.map((message, messageIndex) => (
                      <ChatBubble key={messageIndex} message={message} />
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
