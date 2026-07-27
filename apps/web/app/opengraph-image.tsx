import { ImageResponse } from "next/og";

import { HERO, METADATA } from "@/lib/landing-content";

export const alt = METADATA.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Generated at build time rather than committed as a binary, so the social card
 * cannot drift out of sync with the hero copy it quotes.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "linear-gradient(135deg, #6D3EF2 0%, #4F28C8 100%)",
        padding: 80,
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <div
          style={{
            width: 56,
            height: 56,
            borderRadius: 16,
            background: "#FFFFFF",
            color: "#4F28C8",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 32,
            fontWeight: 700,
          }}
        >
          N
        </div>
        <div style={{ color: "#FFFFFF", fontSize: 34, fontWeight: 700 }}>
          NowWise
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <div
          style={{
            color: "#FFFFFF",
            fontSize: 68,
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: -1.5,
          }}
        >
          {/* One text node: Satori requires an explicit display on any element
              with more than one child, and interpolation would create three. */}
          {`${HERO.headingLead} ${HERO.headingHighlight}`}
        </div>
        <div
          style={{
            color: "rgba(255,255,255,0.75)",
            fontSize: 30,
            lineHeight: 1.4,
          }}
        >
          {HERO.secondary}
        </div>
      </div>

      <div
        style={{
          color: "rgba(255,255,255,0.7)",
          fontSize: 24,
          letterSpacing: 1,
          textTransform: "uppercase",
        }}
      >
        {HERO.eyebrow}
      </div>
    </div>,
    size,
  );
}
