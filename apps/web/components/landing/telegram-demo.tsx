import { HERO_CONVERSATION, HERO_FLOATING_CARDS } from "@/lib/landing-content";
import { ChatBubble, ChatWindow } from "./chat-bubble";
import { Icon } from "./icon";

/**
 * Hero visual: the Telegram conversation, with three supporting moment cards.
 *
 * The cards sit in a row beneath the conversation rather than floating beside
 * it. Absolutely positioned cards were tried first and collided at every
 * width — with the bot's reply on one side and the hero copy on the other,
 * since a centred `max-w-sm` chat leaves under 120px of clearance in this
 * two-column layout. In a row they also survive to mobile, where the floating
 * version had to be hidden entirely.
 */
export function TelegramDemo() {
  return (
    <div className="relative">
      <ChatWindow
        label="A NowWise chat in Telegram. The user sends a voice note saying they had two idlis and sambar for breakfast. NowWise replies that it logged breakfast at 9:41 AM and suggests adding protein later in the morning."
        className="relative z-10 mx-auto max-w-sm"
      >
        {HERO_CONVERSATION.map((message, index) => (
          <ChatBubble key={index} message={message} />
        ))}
      </ChatWindow>

      <ul className="relative z-10 mx-auto mt-4 grid max-w-sm gap-2.5 sm:max-w-md sm:grid-cols-3">
        {HERO_FLOATING_CARDS.map((card) => (
          <li
            key={card.label}
            className="flex items-center gap-2.5 rounded-2xl border border-nw-border bg-white/95 px-3 py-2.5 shadow-[0_8px_24px_-16px_rgba(16,24,40,0.4)] sm:flex-col sm:items-start sm:gap-2"
          >
            <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-nw-violet-soft text-nw-violet-dark">
              <Icon name={card.icon} className="size-[18px]" />
            </span>
            <span className="flex flex-col">
              <span className="text-sm font-semibold text-nw-ink">
                {card.label}
              </span>
              <span className="text-xs text-nw-muted">{card.detail}</span>
            </span>
          </li>
        ))}
      </ul>

      {/* Soft brand glow behind the conversation. */}
      <div
        aria-hidden="true"
        className="absolute inset-x-4 top-8 -z-10 h-72 rounded-full bg-nw-violet/25 blur-3xl"
      />
    </div>
  );
}
