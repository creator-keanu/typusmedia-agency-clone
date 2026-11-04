import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowDown, ArrowUpRight } from "lucide-react";
import { home, portfolio, services } from "@/content/site";
import { pageMeta } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/orange-paper-sculpture.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: pageMeta(
      "typusmedia I Werbeagentur aus Braunschweig",
      "Webdesign-Agentur & Printdesign-Agentur aus Braunschweig. Werbung ist unsere Art.",
    ),
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="home-hero relative isolate overflow-hidden border-b border-ink-border bg-ink text-ink-foreground">
        <img src={heroImage} alt="" width={1600} height={1008} fetchPriority="high" className="hero-art absolute inset-0 -z-20 h-full w-full object-cover" />
        <div className="hero-scrim absolute inset-0 -z-10" />
        <div className="relative mx-auto max-w-7xl px-5 pb-12 pt-16 md:px-8 md:pb-10 md:pt-24">
          <p className="eyebrow flex items-center gap-3"><span className="h-px w-8 bg-primary" aria-hidden="true" />Werbeagentur Braunschweig</p>
          <h1 className="mt-7 break-words text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl lg:text-8xl">{home.title}<span className="text-primary">.</span></h1>
          <p className="mt-6 max-w-lg font-display text-3xl font-light leading-tight text-ink-muted md:text-5xl">{home.slogan}</p>
          <p className="mt-7 max-w-sm text-base leading-7 text-ink-muted md:text-lg">{home.subtitle}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild size="lg" className="h-12"><Link to="/kontakt">Projekt anfragen <ArrowRight /></Link></Button>
            <Button asChild variant="outline" size="lg" className="h-12 border-ink-border bg-transparent hover:bg-ink-foreground hover:text-ink"><Link to="/referenzen">{home.references}</Link></Button>
          </div>
          <div className="mt-16 flex items-center justify-between border-t border-ink-border pt-5 md:mt-24">
            <span className="text-xs font-medium uppercase text-ink-muted">Webdesign / Branding / Printdesign</span>
            <Button asChild variant="ghost" size="icon"><a href="#typus" aria-label="Weiter zur Agenturvorstellung"><ArrowDown /></a></Button>
          </div>
        </div>
      </section>

      <section id="typus" className="mx-auto grid max-w-7xl scroll-mt-24 gap-10 px-5 py-20 md:grid-cols-2 md:px-8 md:py-24">
        <div>
          <p className="eyebrow">Typus (lat.)</p>
          <h2 className="mt-4 text-3xl font-extrabold md:text-5xl">{home.definitionTitle}</h2>
        </div>
        <div className="space-y-4 text-muted-foreground">
          <p>{home.definition}</p>
          <p><strong className="text-foreground">Ein Name, der verpflichtet.</strong> {home.philosophy} <strong className="text-foreground">{home.slogan}</strong></p>
          <p>{home.invitation}</p>
        </div>
      </section>

      <section className="bg-muted">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <p className="eyebrow">Auf den Punkt.</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-extrabold md:text-5xl">{home.competencies}</h2>
          <div className="mt-12 grid gap-px overflow-hidden border-y bg-border sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <Link key={s.title} to="/leistungen" className="group bg-card p-7 transition-colors duration-300 hover:bg-accent">
                <span className="flex items-center justify-between font-display text-sm font-bold text-primary">0{i + 1}<ArrowUpRight className="size-5 transition-transform motion-safe:group-hover:-translate-y-1 motion-safe:group-hover:translate-x-1" /></span>
                <h3 className="mt-6 text-2xl font-bold">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground group-hover:text-ink-muted">{s.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="flex flex-wrap items-center justify-between gap-5">
          <h2 className="text-3xl font-extrabold md:text-5xl">{home.references}</h2>
          <Button asChild variant="link"><Link to="/referenzen">{portfolio.subtitle} <ArrowRight /></Link></Button>
        </div>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {portfolio.projects.filter((project) => ["der-butler", "bonus-buch", "solis-yoga"].includes(project.slug)).map((project) => (
            <article key={project.title}>
              <Link to="/referenzen/$slug" params={{ slug: project.slug }} className="group block focus-visible:outline-2 focus-visible:outline-ring">
                <div className="overflow-hidden bg-muted"><img src={project.image} alt={project.title} width={800} height={600} loading="lazy" className="aspect-[4/3] w-full object-contain transition-transform duration-500 motion-safe:group-hover:scale-[1.025]" /></div>
                <p className="eyebrow mt-5">{project.category}</p>
                <h3 className="mt-2 flex items-center justify-between gap-3 text-xl font-bold">{project.title}<ArrowRight aria-hidden="true" className="size-4 shrink-0 text-primary" /></h3>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
