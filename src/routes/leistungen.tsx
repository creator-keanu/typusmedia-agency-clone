import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "@/components/site/PageIntro";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/leistungen")({
  head: () => ({ meta: pageMeta("Unsere Leistungen | typusmedia Braunschweig", "Webdesign, CMS Contao, Branding und Printdesign aus einer Hand.") }),
  component: Page,
});

function Page() {
  return <PageIntro eyebrow="Leistungen" title="Unsere Leistungen">Webdesign, CMS Contao, Branding und Printdesign aus einer Hand.</PageIntro>;
}
