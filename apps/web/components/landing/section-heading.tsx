import { cn } from "@/lib/utils";

/**
 * Shared section intro. Renders an <h2> and wires the section's aria-labelledby
 * target, so every section gets a consistent, correctly-levelled heading.
 */
export function SectionHeading({
  id,
  eyebrow,
  heading,
  body,
  align = "center",
  tone = "light",
}: {
  id: string;
  eyebrow?: string;
  heading: string;
  body?: string;
  align?: "center" | "start";
  tone?: "light" | "dark";
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3.5",
        align === "center" ? "items-center text-center" : "items-start",
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "rounded-full px-3 py-1 text-xs font-semibold tracking-wide uppercase",
            tone === "dark"
              ? "bg-white/10 text-white/80"
              : "bg-nw-violet-soft text-nw-violet-dark",
          )}
        >
          {eyebrow}
        </span>
      )}

      <h2
        id={id}
        className={cn(
          "text-balance text-3xl font-bold tracking-tight sm:text-4xl",
          tone === "dark" ? "text-white" : "text-nw-ink",
        )}
      >
        {heading}
      </h2>

      {body && (
        <p
          className={cn(
            "max-w-2xl text-pretty text-base leading-relaxed sm:text-lg",
            tone === "dark" ? "text-white/70" : "text-nw-muted",
          )}
        >
          {body}
        </p>
      )}
    </div>
  );
}
