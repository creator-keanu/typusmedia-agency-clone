import { Link } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { mainNav, site } from "@/content/site";
import { Logo } from "./Logo";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled ? "border-ink-border bg-ink/95 backdrop-blur" : "border-transparent bg-ink"
      } text-ink-foreground`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-8">
        <Link to="/" aria-label="typusmedia Startseite" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Hauptnavigation">
          {mainNav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="text-sm font-semibold text-ink-muted transition-colors hover:text-ink-foreground"
              activeProps={{ className: "text-ink-foreground! [box-shadow:inset_0_-2px_0_var(--primary)]" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a href={site.phoneHref} className="flex items-center gap-2 text-sm text-ink-muted hover:text-ink-foreground">
            <Phone className="h-4 w-4" /> {site.phone}
          </a>
          <Link
            to="/kontakt"
            className="rounded-sm bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Projekt anfragen
          </Link>
        </div>

        <button
          type="button"
          className="p-2 lg:hidden"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="fixed inset-x-0 top-16 bottom-0 z-40 flex flex-col bg-ink px-5 pb-10 pt-6 lg:hidden">
          <nav className="flex flex-col" aria-label="Mobile Navigation">
            {mainNav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: item.to === "/" }}
                className="border-b border-ink-border py-4 font-display text-2xl font-bold text-ink-muted"
                activeProps={{ className: "text-primary!" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto space-y-4">
            <a href={site.phoneHref} className="flex items-center gap-2 text-ink-muted">
              <Phone className="h-4 w-4" /> {site.phone}
            </a>
            <Link
              to="/kontakt"
              onClick={() => setOpen(false)}
              className="block rounded-sm bg-primary px-5 py-3.5 text-center font-bold text-primary-foreground"
            >
              Projekt anfragen
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
