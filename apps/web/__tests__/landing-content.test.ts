import { describe, expect, it } from "vitest";

import * as content from "@/lib/landing-content";
import {
  CAPABILITIES,
  FOOTER_LINKS,
  NAV_LINKS,
  PRIVACY,
  SECTION_IDS,
} from "@/lib/landing-content";

/** Every string exported from the content module, flattened. */
function collectStrings(value: unknown, out: string[] = []): string[] {
  if (typeof value === "string") {
    out.push(value);
  } else if (Array.isArray(value)) {
    value.forEach((item) => collectStrings(item, out));
  } else if (value && typeof value === "object") {
    Object.values(value).forEach((item) => collectStrings(item, out));
  }
  return out;
}

const ALL_COPY = collectStrings(content);
const SECTION_ID_VALUES = new Set<string>(Object.values(SECTION_IDS));

describe("landing anchors", () => {
  it("every nav link points at a section that exists", () => {
    const broken = NAV_LINKS.filter(
      (link) => !SECTION_ID_VALUES.has(link.href.replace("#", "")),
    );
    expect(broken.map((link) => link.href)).toEqual([]);
  });

  it("every footer link points at a section that exists", () => {
    const broken = FOOTER_LINKS.filter(
      (link) => !SECTION_ID_VALUES.has(link.href.replace("#", "")),
    );
    expect(broken.map((link) => link.href)).toEqual([]);
  });

  it("ships no absolute links to routes that do not exist yet", () => {
    const internal = [...NAV_LINKS, ...FOOTER_LINKS].filter((link) =>
      link.href.startsWith("/"),
    );
    expect(internal).toEqual([]);
  });
});

describe("claim compliance", () => {
  // Approved content rules. Each of these was either unsupported by
  // docs/01-PRD.md and docs/02-TRD.md, or explicitly banned in the brief.
  const BANNED = [
    "end-to-end",
    "end to end",
    "no credit card",
    "medical grade",
    "medical-grade",
    "clinically",
    "prevents disease",
    "prevent disease",
    "on your device",
    "on-device",
    "hipaa",
    "guaranteed",
    "cure",
    "diagnose your",
  ];

  it.each(BANNED)("never claims %s", (phrase) => {
    const offenders = ALL_COPY.filter((line) =>
      line.toLowerCase().includes(phrase),
    );
    expect(offenders).toEqual([]);
  });

  it("uses no fabricated ratings, user counts or testimonials", () => {
    // e.g. "10,000 users", "4.8 stars", "rated 5"
    const pattern =
      /\d[\d,.]*\s*(\+)?\s*(users|customers|reviews|ratings?|stars)/i;
    const offenders = ALL_COPY.filter((line) => pattern.test(line));
    expect(offenders).toEqual([]);
  });

  it("carries the medical disclaimer", () => {
    expect(PRIVACY.disclaimer).toContain("does not diagnose");
    expect(ALL_COPY).toContain(PRIVACY.disclaimer);
  });

  it("never falls back to a generic Telegram link", () => {
    const offenders = ALL_COPY.filter((line) =>
      /^https:\/\/t\.me\/?$/.test(line),
    );
    expect(offenders).toEqual([]);
  });

  it("keeps B2B language off the public navigation", () => {
    const labels = NAV_LINKS.map((link) => link.label.toLowerCase());
    expect(labels).not.toContain("for teams");
    expect(labels).not.toContain("admin login");
  });
});

describe("content shape", () => {
  it("gives every capability an icon, title and description", () => {
    for (const capability of CAPABILITIES) {
      expect(capability.icon).toBeTruthy();
      expect(capability.title).toBeTruthy();
      expect(capability.description.length).toBeGreaterThan(20);
    }
  });

  it("gives every privacy promise an icon, title and description", () => {
    for (const promise of PRIVACY.promises) {
      expect(promise.icon).toBeTruthy();
      expect(promise.title).toBeTruthy();
      expect(promise.description).toBeTruthy();
    }
  });
});
