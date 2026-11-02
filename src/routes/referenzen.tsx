import { createFileRoute, Link, type SearchSchemaInput } from "@tanstack/react-router";
import { PageIntro } from "@/components/site/PageIntro";
import { pageMeta } from "@/lib/seo";
import { portfolio } from "@/content/site";
import { filterProjects, parsePortfolioCategory, portfolioCategories } from "@/lib/portfolio";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/referenzen")({
  validateSearch: (search: { category?: unknown } & SearchSchemaInput) => ({ category: parsePortfolioCategory(search.category) }),
  head: () => ({ meta: pageMeta("Referenzen Webdesign & Printdesign | typusmedia Braunschweig", "Ausgewählte Projekte der typusmedia Werbeagentur aus Braunschweig.") }),
  component: Page,
});

function Page() {
  const { category } = Route.useSearch();
  const projects = filterProjects(portfolio.projects, category);
  return (
    <>
      <PageIntro eyebrow="Referenzen" title={portfolio.title}>{portfolio.subtitle}</PageIntro>
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <p className="max-w-4xl leading-8 text-muted-foreground">{portfolio.introduction}</p>
        <nav aria-label="Projektkategorien" className="mt-10 flex flex-wrap gap-2 border-b pb-5">
          {portfolioCategories.map((item) => <Button key={item} asChild variant={category === item ? "default" : "ghost"}><Link to="/referenzen" search={{ category: item }} resetScroll={false} aria-current={category === item ? "page" : undefined}>{item}</Link></Button>)}
        </nav>
        <p className="mt-5 text-sm text-muted-foreground" aria-live="polite">{projects.length} Projekte · {category}</p>
        <div className="mt-8 grid items-start gap-x-8 gap-y-14 md:grid-cols-2">
          {projects.map((project) => (
            <article key={project.title}>
              <Link to="/referenzen/$slug" params={{ slug: project.slug }} className="group block focus-visible:outline-2 focus-visible:outline-ring">
              <div className="overflow-hidden bg-muted"><img src={project.image} alt={`${project.title} – ${project.category} von typusmedia`} width={800} height={600} loading="lazy" className="aspect-[4/3] w-full object-contain transition-transform duration-500 motion-safe:group-hover:scale-[1.025]" /></div>
              <p className="eyebrow mt-6">{project.category}</p>
              <h2 className="mt-2 flex items-start justify-between gap-4 text-2xl font-bold group-hover:text-primary">{project.title}<ArrowUpRight aria-hidden="true" className="mt-1 size-5 shrink-0 text-primary" /></h2>
              </Link>
              <p className="mt-3 max-w-xl leading-7 text-muted-foreground">{project.text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
