import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { portfolio } from "@/content/site";
import { adjacentProjects, findProject } from "@/lib/portfolio";
import { pageMeta } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { ProjectImages } from "@/components/site/ProjectImages";
import { MissingProject, PageError } from "@/components/site/RouteFeedback";

export const Route = createFileRoute("/referenzen_/$slug")({
  loader: ({ params }) => {
    const project = findProject(portfolio.projects, params.slug);
    if (!project) throw notFound();
    return project;
  },
  head: ({ loaderData }) => ({ meta: loaderData ? pageMeta(`${loaderData.title} | Referenzen typusmedia`, loaderData.text) : [...pageMeta("Projekt nicht verfügbar | typusmedia", "Referenzen der typusmedia Werbeagentur Braunschweig."), { name: "robots", content: "noindex" }] }),
  component: ProjectPage,
  errorComponent: PageError,
  notFoundComponent: MissingProject,
});

function ProjectPage() {
  const project = Route.useLoaderData();
  const { previous, next } = adjacentProjects(portfolio.projects, project.slug);
  return <>
    <section className="mx-auto max-w-7xl px-5 pb-16 pt-8 md:px-8 md:pb-24">
      <Button asChild variant="link" className="mb-8 px-0"><Link to="/referenzen" search={{ category: project.category }}><ArrowLeft /> {project.category} / Referenzen</Link></Button>
      <p className="eyebrow">{project.category}</p>
      <h1 className="mt-4 max-w-4xl break-words text-4xl font-extrabold leading-tight md:text-6xl">{project.title}</h1>
      <div className="mt-10 grid items-start gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16">
        <ProjectImages key={project.slug} title={project.title} images={project.images} />
        <div>
          <h2 className="text-2xl font-bold">Das Projekt</h2>
          <p className="mt-5 leading-8 text-muted-foreground">{project.text}</p>
          {project.features.length > 0 && <><h2 className="mt-8 text-xl font-bold">Leistungen & Umsetzung</h2><ul className="mt-5 space-y-4">{project.features.map((feature) => <li key={feature} className="flex gap-3 leading-7 text-muted-foreground"><Check aria-hidden="true" className="mt-1.5 size-4 shrink-0 text-primary" /><span>{feature}</span></li>)}</ul></>}
          <Button asChild className="mt-8"><Link to="/kontakt">Projekt anfragen <ArrowRight /></Link></Button>
        </div>
      </div>
    </section>
    <nav aria-label="Projektnavigation" className="border-t bg-muted">
      <div className="mx-auto grid max-w-7xl gap-6 px-5 py-10 sm:grid-cols-2 md:px-8">
        {previous ? <Link to="/referenzen/$slug" params={{ slug: previous.slug }} className="group flex items-center gap-4"><ArrowLeft className="size-5 shrink-0 text-primary" /><span><span className="block text-xs text-muted-foreground">Vorheriges Projekt</span><span className="mt-2 block font-bold group-hover:text-primary">{previous.title}</span></span></Link> : <span />}
        {next && <Link to="/referenzen/$slug" params={{ slug: next.slug }} className="group flex items-center gap-4 sm:justify-end"><span><span className="block text-xs text-muted-foreground">Nächstes Projekt</span><span className="mt-2 block font-bold group-hover:text-primary">{next.title}</span></span><ArrowRight className="size-5 shrink-0 text-primary" /></Link>}
      </div>
    </nav>
  </>;
}