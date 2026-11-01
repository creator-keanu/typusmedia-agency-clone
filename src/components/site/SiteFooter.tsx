import { Link } from "@tanstack/react-router";
import { mainNav, site } from "@/content/site";
import { Logo } from "./Logo";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="border-b border-ink-border pb-12">
          <p className="eyebrow">Haben wir Ihr Interesse geweckt?</p>
          <p className="mt-4 max-w-3xl font-display text-3xl font-bold md:text-5xl">
            Es wäre uns ein großes Vergnügen, Sie persönlich kennen zu lernen.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a href={site.phoneHref} className="font-display text-2xl font-bold text-primary">
              Tel: 0531 88 92 74 60
            </a>
            <Link
              to="/kontakt"
              className="w-fit rounded-sm border border-ink-border px-5 py-3 text-sm font-bold hover:border-primary hover:text-primary"
            >
              Zum Kontaktformular
            </Link>
          </div>
        </div>

        <div className="grid gap-10 pt-12 md:grid-cols-3">
          <div>
            <Logo />
            <p className="mt-4 text-sm text-ink-muted">Full-Service Werbeagentur aus Braunschweig. Werbung ist unsere Art.</p>
          </div>
          <address className="not-italic text-sm leading-7 text-ink-muted">
            <span className="font-semibold text-ink-foreground">{site.owner}</span>
            <br />
            {site.street}
            <br />
            {site.city}
            <br />
            <a href={site.phoneHref} className="link-underline">{site.phone}</a>
            <br />
            <a href={`mailto:${site.email}`} className="link-underline">{site.email}</a>
          </address>
          <nav className="flex flex-col gap-2 text-sm text-ink-muted" aria-label="Footer">
            {mainNav.map((i) => (
              <Link key={i.to} to={i.to} className="w-fit hover:text-ink-foreground">{i.label}</Link>
            ))}
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-ink-border pt-6 text-xs text-ink-muted sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} typusmedia Werbeagentur Braunschweig</span>
          <span>
            <Link to="/impressum" className="hover:text-ink-foreground">Impressum</Link>
            {"  I  "}
            <Link to="/datenschutz" className="hover:text-ink-foreground">Datenschutz</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
