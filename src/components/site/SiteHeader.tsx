import { Link } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";
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

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled ? "border-b border-ink-border bg-ink/80 backdrop-blur-xl" : "border-b border-transparent bg-ink"
      } text-ink-foreground`}
    >
      <div className={`mx-auto flex max-w-7xl items-center justify-between px-5 transition-all duration-500 md:px-8 ${scrolled ? "h-16" : "h-16 md:h-24"}`}>
        <Link to="/" aria-label="typusmedia Startseite" onClick={() => setOpen(false)}>
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
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {open && (
        <div className="fixed inset-x-0 top-16 bottom-0 z-40 flex flex-col bg-ink px-6 pb-10 pt-10 animate-in fade-in duration-300 lg:hidden">
          <nav className="flex flex-col gap-2" aria-label="Mobile Navigation">
            {mainNav.map((item, i) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: item.to === "/" }}
                className="flex items-baseline gap-4 py-2 font-display text-4xl font-semibold text-ink-muted animate-in fade-in slide-in-from-bottom-2 fill-mode-both"
                style={{ animationDelay: `${i * 60}ms` }}
                activeProps={{ className: "text-ink-foreground!" }}
              >
                <span className="text-xs text-primary">0{i + 1}</span>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto space-y-5">
            <a href={site.phoneHref} className="flex items-center gap-2 text-sm text-ink-muted">
              <Phone className="h-4 w-4" /> {site.phone}
            </a>
            <Button asChild size="lg" className="w-full rounded-full"><Link to="/kontakt" onClick={() => setOpen(false)}>Projekt anfragen</Link></Button>
          </div>
        </div>
      )}
    </header>
  );
}
