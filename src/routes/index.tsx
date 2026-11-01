import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { services } from "@/content/site";
import { pageMeta } from "@/lib/seo";

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
      <section className="bg-ink text-ink-foreground">
        <div className="mx-auto max-w-7xl px-5 pb-20 pt-16 md:px-8 md:pb-32 md:pt-28">
          <p className="eyebrow">Werbeagentur Braunschweig</p>
          <h1 className="mt-5 text-5xl font-black leading-[0.95] md:text-8xl">
            Werbung ist<br />unsere <span className="text-primary">Art.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg text-ink-muted">Webdesign-Agentur & Printdesign-Agentur — Ihre Full-Service Werbeagentur aus Braunschweig.</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/kontakt" className="inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3.5 font-bold text-primary-foreground transition-transform hover:-translate-y-0.5">
              Projekt anfragen <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/referenzen" className="rounded-sm border border-ink-border px-6 py-3.5 font-bold hover:border-primary">Referenzen</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:grid-cols-2 md:px-8 md:py-28">
        <div>
          <p className="eyebrow">Typus (lat.)</p>
          <h2 className="mt-4 text-3xl font-extrabold md:text-5xl">Art, Form, Figur, Vorbild, Gattungscharakter.</h2>
        </div>
        <div className="space-y-4 text-muted-foreground">
          <p>Diejenige Form, in welcher die Eigenschaften einer Reihe verwandter Formen am vollkommensten repräsentiert sind.</p>
          <p><strong className="text-foreground">Ein Name, der verpflichtet.</strong> Werbung und Design erfüllt unser Leben, Tag für Tag. Unsere Kunden bei ihrem Weg als Unternehmer hilfreich zu beraten und mit kommunikativer Vielfalt, Kreativität und der Passion zum expliziten Design erfolgreich zu begleiten, ist genau unser Ding. Das ist der Stoff, aus dem typusmedia ist. Unser Name ist unser Programm. <strong className="text-foreground">Werbung ist unsere Art.</strong></p>
        </div>
      </section>

      <section className="bg-muted">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
          <p className="eyebrow">Auf den Punkt.</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-extrabold md:text-5xl">Die Kompetenzen der typusmedia Werbeagentur Braunschweig</h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-sm border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <Link key={s.title} to="/leistungen" className="group bg-card p-8 transition-colors hover:bg-ink hover:text-ink-foreground">
                <span className="font-display text-sm font-bold text-primary">0{i + 1}</span>
                <h3 className="mt-6 text-2xl font-bold">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground group-hover:text-ink-muted">{s.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
