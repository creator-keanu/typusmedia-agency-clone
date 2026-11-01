import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "@/components/site/PageIntro";
import { pageMeta } from "@/lib/seo";
import { portfolio } from "@/content/site";

export const Route = createFileRoute("/referenzen")({
  head: () => ({ meta: pageMeta("Referenzen Webdesign & Printdesign | typusmedia Braunschweig", "Ausgewählte Projekte der typusmedia Werbeagentur aus Braunschweig.") }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageIntro eyebrow="Referenzen" title={portfolio.title}>{portfolio.subtitle}</PageIntro>
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <p className="max-w-4xl leading-8 text-muted-foreground">{portfolio.introduction}</p>
        <div className="mt-14 grid items-start gap-x-8 gap-y-14 md:grid-cols-2">
          {portfolio.projects.map((project) => (
            <article key={project.title}>
              <div className="overflow-hidden bg-muted"><img src={project.image} alt={`${project.title} – ${project.category} von typusmedia`} width={800} height={600} loading="lazy" className="aspect-[4/3] w-full object-contain transition-transform duration-500 motion-safe:hover:scale-[1.025]" /></div>
              <p className="eyebrow mt-6">{project.category}</p>
              <h2 className="mt-2 text-2xl font-bold">{project.title}</h2>
              <p className="mt-3 max-w-xl leading-7 text-muted-foreground">{project.text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
