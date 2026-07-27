/**
 * Single source of truth for every string on the landing page.
 *
 * Components in `components/landing/` stay presentational and import from here.
 * Keeping copy in one module is what makes `__tests__/landing-content.test.ts`
 * able to enforce the compliance rules (no unsupported claims, no dead anchors)
 * across the whole page instead of one component at a time.
 *
 * Claims here are limited to what the product actually does. See
 * docs/01-PRD.md and docs/02-TRD.md before adding any new promise.
 */

export const SECTION_IDS = {
  hero: "hero",
  moments: "moments",
  capabilities: "capabilities",
  howItWorks: "how-it-works",
  productDecision: "product-decision",
  weeklyStory: "weekly-story",
  privacy: "privacy",
  accuracy: "accuracy",
  finalCta: "final-cta",
} as const;

export type SectionId = (typeof SECTION_IDS)[keyof typeof SECTION_IDS];

/** Desktop/mobile navigation. `Admin login` and `For teams` are deliberately absent. */
export const NAV_LINKS = [
  { label: "How it works", href: `#${SECTION_IDS.howItWorks}` },
  { label: "What NowWise helps with", href: `#${SECTION_IDS.capabilities}` },
  { label: "Weekly story", href: `#${SECTION_IDS.weeklyStory}` },
  { label: "Privacy", href: `#${SECTION_IDS.privacy}` },
  { label: "About", href: `#${SECTION_IDS.accuracy}` },
] as const;

export const BRAND = {
  name: "NowWise",
  tagline: "Telegram-first, voice-first lifestyle assistant",
} as const;

// --------------------------------------------------------------- Telegram CTA

/**
 * Resolved at module scope because Next.js inlines NEXT_PUBLIC_* at build time;
 * a dynamic `process.env[key]` lookup would not be replaced.
 *
 * No fallback URL by design: a generic t.me link is a dead end that looks like a
 * working product. When the bot does not exist, the CTA renders disabled.
 */
export const TELEGRAM_BOT_URL =
  process.env.NEXT_PUBLIC_TELEGRAM_BOT_URL ?? null;

export const CTA = {
  active: "Open NowWise in Telegram",
  activeShort: "Open in Telegram",
  pending: "Telegram launch coming soon",
  secondary: "See how it works",
  final: "Start on Telegram",
} as const;

// ---------------------------------------------------------------------- hero

export const HERO = {
  eyebrow: "Voice first · Telegram first · Privacy by design",
  headingLead: "Life happens fast.",
  headingHighlight: "Eat, shop and live a little wiser.",
  body: "Speak or type to log food, check products, create reminders and understand your weekly habits — all inside Telegram.",
  secondary:
    "No complicated forms. No calorie obsession. No separate app to learn.",
  trustNotes: [
    "Works entirely inside Telegram",
    "Raw voice audio deleted after transcription by default",
    "We do not sell personal lifestyle data",
    "A person reviews results the AI is unsure about",
  ],
} as const;

export type ChatMessage = {
  from: "user" | "bot";
  /** Marks a voice note so the bubble can show a mic affordance. */
  voice?: boolean;
  lines: readonly string[];
  meta?: string;
  buttons?: readonly string[];
};

export const HERO_CONVERSATION: readonly ChatMessage[] = [
  {
    from: "user",
    voice: true,
    lines: ["I had two idlis and sambar for breakfast."],
    meta: "Voice note · 0:04",
  },
  {
    from: "bot",
    lines: [
      "Logged as breakfast at 9:41 AM.",
      "Good start. Add some protein later this morning if possible.",
    ],
    buttons: ["Correct", "Add more", "View today"],
  },
] as const;

/** Small cards floating around the phone. Three, not five — see plan §2. */
export const HERO_FLOATING_CARDS = [
  { icon: "Mic", label: "Breakfast logged", detail: "9:41 AM · voice note" },
  {
    icon: "Package",
    label: "Product checked",
    detail: "Unsalted is better today",
  },
  { icon: "Bell", label: "Isabgol reminder", detail: "9:30 PM · with water" },
] as const;

// ------------------------------------------------------------------- moments

export type Moment = {
  id: string;
  time: string;
  title: string;
  icon: string;
  conversation: readonly ChatMessage[];
};

export const MOMENTS: readonly Moment[] = [
  {
    id: "morning",
    time: "9:41 AM",
    title: "Morning",
    icon: "Sunrise",
    conversation: [
      { from: "user", voice: true, lines: ["I had idli and sambar."] },
      {
        from: "bot",
        lines: [
          "Logged as breakfast.",
          "Add a protein source later this morning.",
        ],
      },
    ],
  },
  {
    id: "store",
    time: "6:12 PM",
    title: "At the store",
    icon: "ShoppingCart",
    conversation: [
      { from: "user", lines: ["Can I buy these sunflower seeds?"] },
      {
        from: "bot",
        lines: [
          "Unsalted is the better option today.",
          "You already had salty snacks twice this week.",
        ],
      },
    ],
  },
  {
    id: "restaurant",
    time: "8:30 PM",
    title: "At a restaurant",
    icon: "Utensils",
    conversation: [
      { from: "user", lines: ["Biryani or grilled chicken?"] },
      {
        from: "bot",
        lines: [
          "Grilled chicken fits your day better.",
          "Choose biryani occasionally and skip the sweet drink.",
        ],
      },
    ],
  },
  {
    id: "habit",
    time: "9:30 PM",
    title: "Habit reminder",
    icon: "Bell",
    conversation: [
      {
        from: "bot",
        lines: ["Time for Isabgol.", "Please take it with enough water."],
        buttons: ["Taken", "Later", "Skip"],
      },
    ],
  },
  {
    id: "weekly",
    time: "Sunday",
    title: "Weekly story",
    icon: "CalendarDays",
    conversation: [
      {
        from: "bot",
        lines: [
          "You logged meals consistently this week.",
          "Your next focus is adding vegetables to dinner three times.",
        ],
      },
    ],
  },
] as const;

export const MOMENTS_SECTION = {
  eyebrow: "A day with NowWise",
  heading: "Life happens in moments",
  body: "Not in dashboards. NowWise meets you at the moment the decision actually happens.",
} as const;

// -------------------------------------------------------------- capabilities

export type Capability = {
  icon: string;
  title: string;
  description: string;
};

export const CAPABILITIES: readonly Capability[] = [
  {
    icon: "Mic",
    title: "Speak your meal",
    description:
      "Send a voice note or type what you ate. NowWise understands the time and meal context automatically.",
  },
  {
    icon: "Package",
    title: "Check a product",
    description:
      "Ask about a packaged product and get advice based on its ingredients, nutrition and your recent habits.",
  },
  {
    icon: "Utensils",
    title: "Decide what to order",
    description:
      "Compare restaurant options using the context of what you have already eaten today.",
  },
  {
    icon: "Bell",
    title: "Build useful habits",
    description:
      "Create reminders in plain language and answer with Taken, Later or Skip. No streak pressure.",
  },
  {
    icon: "CalendarDays",
    title: "Understand your week",
    description:
      "Get a simple story about repeated sweets, low protein, vegetables and habit completion.",
  },
  {
    icon: "Shield",
    title: "Stay in control",
    description:
      "Review what NowWise stores, change your privacy settings, and ask for an export or deletion.",
  },
] as const;

export const CAPABILITIES_SECTION = {
  eyebrow: "Capabilities",
  heading: "What NowWise helps with",
  body: "Six everyday jobs, all through one Telegram chat.",
} as const;

// ------------------------------------------------------------- how it works

export const HOW_IT_WORKS = {
  eyebrow: "How it works",
  heading: "Three steps, no learning curve",
  steps: [
    {
      icon: "MessageSquare",
      title: "Speak, type or send",
      description:
        "Use Telegram the way you already do. No long forms and no separate app.",
    },
    {
      icon: "Sparkles",
      title: "NowWise understands the moment",
      description:
        "It works out whether you are logging food, checking a product, asking for advice or setting a reminder.",
    },
    {
      icon: "CheckCircle",
      title: "Get one useful next action",
      description:
        "NowWise answers using your goal, your recent activity and what it already knows you prefer.",
    },
  ],
  diagram: [
    "Telegram message",
    "NowWise understanding",
    "Personal next action",
  ],
} as const;

// -------------------------------------------------------- product decision

export type DecisionLevel = "good" | "occasional" | "skip";

export const DECISION_LABELS: Record<DecisionLevel, string> = {
  good: "Good today",
  occasional: "Occasionally",
  skip: "Better to skip today",
};

export const PRODUCT_DECISION = {
  eyebrow: "Product intelligence",
  heading: "A real answer, not a health score",
  body: "NowWise reads the product and your recent week, then gives one clear call you can act on in the aisle.",
  question: "Should I buy these salted sunflower seeds today?",
  context: [
    { label: "Your goal", value: "Improve everyday food habits" },
    { label: "Salty snacks this week", value: "2" },
    { label: "Product variant", value: "Salted" },
    { label: "Time of day", value: "Evening" },
  ],
  decision: "occasional" as DecisionLevel,
  recommendation:
    "Choose the unsalted version today. If you buy this one, keep it to a small handful.",
  levels: ["good", "occasional", "skip"] as readonly DecisionLevel[],
} as const;

// ---------------------------------------------------------- weekly story

export const WEEKLY_STORY = {
  eyebrow: "Your weekly story",
  heading: "Progress you can actually read",
  body: "A short story about your week, written in sentences instead of charts you have to decode.",
  narrative:
    "You logged dinner consistently this week. Sweets appeared on five days, while vegetables appeared on two. Next week, focus on adding vegetables to dinner three times.",
  stats: [
    { label: "Meals logged", value: 18, max: 21, unit: "" },
    { label: "Product checks", value: 6, max: 10, unit: "" },
    { label: "Reminders completed", value: 4, max: 7, unit: " days" },
    { label: "Sweets", value: 5, max: 7, unit: " days" },
    { label: "Vegetables", value: 2, max: 7, unit: " days" },
  ],
  bestImprovement: {
    label: "Best improvement",
    value: "You logged dinner consistently.",
  },
  nextFocus: {
    label: "Next week focus",
    value: "Add vegetables to dinner three times.",
  },
} as const;

// -------------------------------------------------------------- privacy

export const PRIVACY = {
  eyebrow: "Privacy by design",
  heading: "Your lifestyle data should work for you — not against you.",
  body: "Privacy is a default here, not a settings page you have to go and find.",
  promises: [
    {
      icon: "Mic",
      title: "Raw voice audio is deleted",
      description:
        "Voice notes are removed after transcription by default. You choose if anything is kept.",
    },
    {
      icon: "Lock",
      title: "Private media storage",
      description:
        "Photos and receipts go to private storage. Nothing is served from a public bucket.",
    },
    {
      icon: "Users",
      title: "Partner sharing is off",
      description:
        "Sharing with any partner is disabled by default and only changes if you turn it on.",
    },
    {
      icon: "Download",
      title: "Export and deletion",
      description:
        "You can request a copy of your data or ask for it to be deleted. Support handles the request.",
    },
    {
      icon: "Ban",
      title: "No sale of your data",
      description:
        "We do not sell individual lifestyle data. It is not part of the business model.",
    },
    {
      icon: "ClipboardCheck",
      title: "A person checks uncertain results",
      description:
        "When the AI is not confident, the result goes to a reviewer before it becomes advice.",
    },
  ],
  disclaimer:
    "NowWise provides lifestyle guidance and habit support. It does not diagnose, treat or replace qualified medical advice.",
} as const;

// -------------------------------------------------------------- accuracy

export const ACCURACY = {
  eyebrow: "Behind the scenes",
  heading: "How we improve accuracy",
  body: "Authorised NowWise team members use an internal dashboard to keep results honest. It is an internal tool, not a product we sell.",
  points: [
    "Review results the AI was not confident about",
    "Correct product matches that came back wrong",
    "Keep packaged product information up to date",
    "Monitor whether reminders were actually delivered",
    "Process export and deletion requests",
  ],
} as const;

// -------------------------------------------------------------- final CTA

export const FINAL_CTA = {
  heading: "Your next better decision is one message away.",
  body: "Open NowWise in Telegram and start by telling it what you ate today.",
  note: "No separate app required.",
} as const;

// ---------------------------------------------------------------- footer

/**
 * Anchor links only. About/Terms/Support/Admin login are omitted on purpose:
 * those routes do not exist, and a 404 on a page arguing for trustworthiness
 * costs more than a missing link.
 */
export const FOOTER_LINKS = [
  { label: "How it works", href: `#${SECTION_IDS.howItWorks}` },
  { label: "Features", href: `#${SECTION_IDS.capabilities}` },
  { label: "Weekly story", href: `#${SECTION_IDS.weeklyStory}` },
  { label: "Privacy", href: `#${SECTION_IDS.privacy}` },
] as const;

export const FOOTER = {
  description:
    "A calm, voice-first lifestyle assistant that lives in the chat app you already use.",
  disclaimer: PRIVACY.disclaimer,
  copyright: `© ${new Date().getFullYear()} ${BRAND.name}. All rights reserved.`,
} as const;

// ------------------------------------------------------------- metadata

export const METADATA = {
  title: "NowWise — Speak to it before you eat, shop or forget a habit",
  description:
    "NowWise is a voice-first lifestyle assistant inside Telegram. Log meals, check packaged products, set habit reminders and understand your week — without another app to learn.",
} as const;
