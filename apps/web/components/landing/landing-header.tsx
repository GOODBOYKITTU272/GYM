"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { BRAND, CTA, NAV_LINKS } from "@/lib/landing-content";
import { TelegramCta } from "./telegram-cta";

export function LandingHeader() {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Escape closes, and focus returns to the trigger rather than being dropped
  // at the top of the document.
  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
        return;
      }

      if (event.key !== "Tab") return;

      const focusables = panelRef.current?.querySelectorAll<HTMLElement>(
        "a[href], button:not([disabled])",
      );
      if (!focusables?.length) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-nw-border/70 bg-nw-cream/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-4 sm:px-6">
        <a
          href="#hero"
          className="flex min-h-11 items-center gap-2 rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nw-violet"
        >
          <span className="grid size-8 place-items-center rounded-lg bg-nw-violet text-sm font-bold text-white">
            N
          </span>
          <span className="text-lg font-bold tracking-tight text-nw-ink">
            {BRAND.name}
          </span>
        </a>

        <nav aria-label="Main" className="ml-auto hidden lg:block">
          <ul className="flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-nw-muted transition-colors hover:bg-nw-violet-soft hover:text-nw-violet-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nw-violet"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:ml-0">
          <TelegramCta
            label={CTA.activeShort}
            className="hidden sm:inline-flex"
          />

          <button
            ref={triggerRef}
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-11 place-items-center rounded-xl border border-nw-border bg-white text-nw-ink transition-colors hover:bg-nw-violet-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nw-violet lg:hidden"
          >
            {open ? (
              <X className="size-5" aria-hidden="true" />
            ) : (
              <Menu className="size-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <div
        id={menuId}
        ref={panelRef}
        hidden={!open}
        className="border-t border-nw-border bg-nw-cream px-4 pb-6 pt-2 lg:hidden"
      >
        <nav aria-label="Mobile">
          <ul className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex min-h-[3rem] items-center rounded-lg px-3 text-base font-medium text-nw-ink",
                    "hover:bg-nw-violet-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nw-violet",
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <TelegramCta className="mt-4 w-full" />
      </div>
    </header>
  );
}
