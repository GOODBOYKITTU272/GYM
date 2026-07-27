import { Mic } from "lucide-react";

import { cn } from "@/lib/utils";
import type { ChatMessage } from "@/lib/landing-content";

/**
 * One Telegram message. Shared by the hero mockup and the day-in-the-life
 * moments so the conversation styling stays identical across the page.
 */
export function ChatBubble({ message }: { message: ChatMessage }) {
  const isUser = message.from === "user";

  return (
    <div className={cn("flex", isUser ? "justify-end" : "justify-start")}>
      <div
        className={cn(
          "max-w-[85%] rounded-2xl px-3.5 py-2.5 text-[0.9375rem] leading-relaxed",
          isUser
            ? "rounded-br-sm bg-nw-violet text-white"
            : "rounded-bl-sm bg-white text-nw-ink shadow-[0_1px_2px_rgba(16,24,40,0.08)]",
        )}
      >
        {message.voice && (
          <span
            className={cn(
              "mb-1.5 flex items-center gap-1.5 text-xs font-medium",
              isUser ? "text-white/80" : "text-nw-muted",
            )}
          >
            <Mic className="size-3.5" aria-hidden="true" strokeWidth={2} />
            Voice note
          </span>
        )}

        {message.lines.map((line) => (
          <p key={line} className="[&+p]:mt-1.5">
            {line}
          </p>
        ))}

        {message.meta && (
          <p
            className={cn(
              "mt-1.5 text-xs",
              isUser ? "text-white/70" : "text-nw-muted",
            )}
          >
            {message.meta}
          </p>
        )}

        {message.buttons && (
          // Presentational only: this is a picture of Telegram, not a control
          // surface, so these are spans rather than buttons.
          <div className="mt-2.5 flex flex-wrap gap-1.5">
            {message.buttons.map((button) => (
              <span
                key={button}
                className="rounded-lg bg-nw-violet-soft px-2.5 py-1 text-xs font-medium text-nw-violet-dark"
              >
                {button}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/** A phone-ish frame around a conversation. */
export function ChatWindow({
  children,
  className,
  label,
}: {
  children: React.ReactNode;
  className?: string;
  label: string;
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className={cn(
        "rounded-[1.75rem] border border-nw-border bg-[#EFEAF7] p-3 shadow-[0_24px_60px_-24px_rgba(16,24,40,0.35)]",
        className,
      )}
    >
      <div className="mb-3 flex items-center gap-2 px-1.5 pt-1">
        <span className="grid size-7 place-items-center rounded-full bg-nw-violet text-xs font-bold text-white">
          N
        </span>
        <span className="text-sm font-semibold text-nw-ink">NowWise</span>
        <span className="ml-auto text-xs text-nw-muted">online</span>
      </div>
      <div className="space-y-2.5">{children}</div>
    </div>
  );
}
