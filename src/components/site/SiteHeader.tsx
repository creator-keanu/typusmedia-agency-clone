import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { mainNav, site } from "@/content/site";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";

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
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);
  const count = mainNav.length;

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled || open
            ? "border-b border-ink-border bg-ink/80 backdrop-blur-xl"
            : "border-b border-transparent bg-ink"
        } text-ink-foreground`}
      >
        <div className={`mx-auto flex max-w-7xl items-center justify-between px-5 transition-all duration-500 md:px-8 ${scrolled ? "h-16" : "h-16 md:h-24"}`}>
          <Link to="/" aria-label="typusmedia Startseite" onClick={close}>
            <Logo />
          </Link>

          <nav className="hidden items-center gap-1 rounded-full border border-ink-border bg-ink-foreground/[0.03] p-1 lg:flex" aria-label="Hauptnavigation">
            {mainNav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className="rounded-full px-4 py-2 text-sm text-ink-muted transition-colors duration-300 hover:text-ink-foreground"
                activeProps={{ className: "bg-ink-foreground/[0.08] text-ink-foreground!" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-6 lg:flex">
            <a href={site.phoneHref} className="text-sm text-ink-muted transition-colors hover:text-ink-foreground">
              {site.phone}
            </a>
            <Button asChild className="rounded-full px-5"><Link to="/kontakt">Anfragen</Link></Button>
          </div>

          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="rounded-full lg:hidden"
            aria-label={open ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="menu-bars" data-open={open} aria-hidden>
              <span className="menu-bar menu-bar--1" />
              <span className="menu-bar menu-bar--2" />
              <span className="menu-bar menu-bar--3" />
            </span>
          </Button>
        </div>
      </header>

      {/* Rendered outside <header> so the header's backdrop-blur never traps the fixed panel. */}
      <div className="pointer-events-none fixed inset-0 z-40 lg:hidden" aria-hidden={!open}>
        <div className="menu-panel absolute inset-0 flex flex-col bg-ink px-6 pb-10 pt-[84px] md:pt-[116px]" data-open={open} inert={!open}>
          <div className="menu-glow" aria-hidden />
          <nav className="flex flex-col gap-2" aria-label="Mobile Navigation">
            {mainNav.map((item, index) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={close}
                activeOptions={{ exact: item.to === "/" }}
                className="menu-item flex items-baseline gap-4 py-2 font-display text-4xl font-semibold text-ink-muted"
                style={{ transitionDelay: `${open ? 150 + index * 65 : (count - 1 - index) * 45}ms` }}
                activeProps={{ className: "text-ink-foreground!" }}
              >
                <span className="text-xs text-primary">0{index + 1}</span>
                {item.label}
              </Link>
            ))}
          </nav>
          <div
            className="menu-item mt-auto space-y-5"
            style={{ transitionDelay: `${open ? 190 + count * 65 : 0}ms` }}
          >
            <a href={site.phoneHref} className="flex items-center gap-2 text-sm text-ink-muted">
              <Phone className="h-4 w-4" /> {site.phone}
            </a>
            <Button asChild size="lg" className="w-full rounded-full"><Link to="/kontakt" onClick={close}>Projekt anfragen</Link></Button>
          </div>
        </div>
      </div>
    </>
  );
}
