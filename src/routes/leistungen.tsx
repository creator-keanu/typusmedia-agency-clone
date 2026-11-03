import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "@/components/site/PageIntro";
import { pageMeta } from "@/lib/seo";
import { servicePage } from "@/content/site";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check } from "lucide-react";

export const Route = createFileRoute("/leistungen")({
  head: () => ({ meta: pageMeta("Unsere Leistungen | typusmedia Braunschweig", "Webdesign, CMS Contao, Branding und Printdesign aus einer Hand.", servicePage.image) }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageIntro eyebrow="Leistungen" title={servicePage.title}>{servicePage.subtitle}</PageIntro>
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
          <figure className="lg:sticky lg:top-28">
            <img src={servicePage.image} alt={servicePage.imageAlt} width={580} height={435} className="aspect-[4/3] w-full object-contain" />
            <figcaption className="mt-5 font-display text-xl font-bold">{servicePage.subtitle}</figcaption>
          </figure>
          <Accordion type="multiple" defaultValue={servicePage.sections.map((section) => section.title)}>
            {servicePage.sections.map((section, index) => (
              <AccordionItem key={section.title} value={section.title}>
                <AccordionTrigger className="gap-4 py-6 font-display text-xl font-bold hover:no-underline md:text-2xl">
                  <span className="flex items-start gap-4"><span className="pt-1 text-sm text-primary">0{index + 1}</span>{section.title}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-7">
                  <ul className="space-y-3">
                    {section.items.map((item) => <li key={item} className="flex gap-3 leading-6 text-muted-foreground"><Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-primary" /><span>{item}</span></li>)}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
}
