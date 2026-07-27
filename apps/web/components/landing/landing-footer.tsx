import { BRAND, FOOTER, FOOTER_LINKS } from "@/lib/landing-content";

/**
 * Anchor links only. About, Terms, Support and Admin login are omitted because
 * those routes do not exist yet — a 404 on a page whose argument is
 * trustworthiness costs more than a missing link.
 */
export function LandingFooter() {
  return (
    <footer className="border-t border-nw-border bg-nw-cream">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-8 sm:flex-row sm:justify-between">
          <div className="flex max-w-sm flex-col gap-3">
            <span className="flex items-center gap-2">
              <span className="grid size-8 place-items-center rounded-lg bg-nw-violet text-sm font-bold text-white">
                N
              </span>
              <span className="text-lg font-bold tracking-tight text-nw-ink">
                {BRAND.name}
              </span>
            </span>
            <p className="text-sm leading-relaxed text-nw-muted">
              {FOOTER.description}
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className="text-xs font-bold uppercase tracking-wide text-nw-ink">
              Product
            </h2>
            <ul className="mt-3 flex flex-col gap-1">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    // 44px target kept through tablet widths, which are still
                    // touch; only relaxed at lg where input is usually a pointer.
                    className="inline-flex min-h-11 items-center text-sm text-nw-muted transition-colors hover:text-nw-violet-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nw-violet lg:min-h-0 lg:py-1"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-nw-border pt-6">
          <p className="text-xs leading-relaxed text-nw-muted">
            {FOOTER.disclaimer}
          </p>
          <p className="text-xs text-nw-muted">{FOOTER.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
