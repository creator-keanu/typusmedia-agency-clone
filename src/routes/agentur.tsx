import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "@/components/site/PageIntro";
import { pageMeta } from "@/lib/seo";
import { agency } from "@/content/site";
import { Check } from "lucide-react";

export const Route = createFileRoute("/agentur")({
  head: () => ({ meta: pageMeta("Die Agentur | typusmedia Braunschweig", "Full-Service Werbeagentur mit Herz für die Region 38.", agency.image) }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageIntro eyebrow="Agentur" title={agency.title}>{agency.subtitle}</PageIntro>
      <section className="mx-auto grid max-w-7xl items-start gap-12 px-5 py-16 md:grid-cols-[0.65fr_1.35fr] md:px-8 md:py-24 lg:gap-24">
        <figure className="max-w-sm">
          <img src={agency.image} alt={`${agency.owner} – ${agency.ownerRole}`} width={240} height={240} className="aspect-square w-full object-cover" />
          <figcaption className="mt-5"><p className="font-display text-xl font-bold">{agency.owner}</p><p className="mt-1 text-sm text-muted-foreground">{agency.ownerRole}</p></figcaption>
        </figure>
        <div className="text-muted-foreground">
          <h2 className="mb-6 text-3xl font-bold text-foreground">{agency.subtitle}</h2>
          <p className="leading-8">{agency.introduction}</p>
          <ul className="my-7 grid gap-3 sm:grid-cols-2">
            {agency.clients.map((client) => <li key={client} className="flex items-center gap-3"><Check aria-hidden="true" className="size-4 shrink-0 text-primary" />{client}</li>)}
          </ul>
          <p>{agency.closing}</p>
        </div>
      </section>
      <section className="bg-muted">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-[0.65fr_1.35fr] md:px-8 md:py-24 lg:gap-24">
          <h2 className="max-w-sm text-3xl font-extrabold md:text-4xl">{agency.philosophyTitle}</h2>
          <div className="space-y-6 leading-8 text-muted-foreground">{agency.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        </div>
      </section>
    </>
  );
}
