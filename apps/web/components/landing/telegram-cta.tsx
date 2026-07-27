import { cn } from "@/lib/utils";
import { CTA, TELEGRAM_BOT_URL } from "@/lib/landing-content";

/** Telegram's paper-plane glyph. Lucide's `Send` is a different mark. */
function TelegramGlyph({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M21.94 4.6 18.9 19.2c-.23 1.02-.84 1.27-1.7.79l-4.7-3.46-2.27 2.18c-.25.25-.46.46-.94.46l.33-4.78 8.7-7.86c.38-.34-.08-.53-.59-.19l-10.75 6.77-4.63-1.45c-1.01-.31-1.03-1.01.21-1.5l18.1-6.98c.84-.31 1.57.19 1.3 1.43Z" />
    </svg>
  );
}

type Props = {
  /** `pending` copy differs per placement; hero uses the long form. */
  label?: string;
  className?: string;
  size?: "default" | "large";
};

/**
 * Renders an anchor when NEXT_PUBLIC_TELEGRAM_BOT_URL is set, and a disabled
 * button otherwise.
 *
 * There is deliberately no fallback URL. A generic t.me link looks like a
 * working product and dead-ends the one action the whole page exists to drive.
 */
export function TelegramCta({ label, className, size = "default" }: Props) {
  const base = cn(
    "inline-flex items-center justify-center gap-2.5 rounded-full font-semibold",
    "transition-[transform,box-shadow,background-color] duration-200",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nw-violet-dark",
    // 44px minimum tap target, per the accessibility checklist.
    size === "large"
      ? "min-h-[3.25rem] px-7 text-base"
      : "min-h-[2.75rem] px-5 text-[0.9375rem]",
    className,
  );

  if (!TELEGRAM_BOT_URL) {
    return (
      <button
        type="button"
        disabled
        aria-disabled="true"
        className={cn(
          base,
          "cursor-not-allowed border border-nw-border bg-white text-nw-muted",
        )}
      >
        <TelegramGlyph className="size-[1.15em] opacity-60" />
        {CTA.pending}
      </button>
    );
  }

  return (
    <a
      href={TELEGRAM_BOT_URL}
      className={cn(
        base,
        "bg-nw-violet text-white shadow-[0_6px_20px_-6px_rgba(109,62,242,0.7)]",
        "hover:-translate-y-0.5 hover:bg-nw-violet-dark hover:shadow-[0_10px_28px_-8px_rgba(109,62,242,0.8)]",
      )}
    >
      <TelegramGlyph className="size-[1.15em]" />
      {label ?? CTA.active}
    </a>
  );
}
