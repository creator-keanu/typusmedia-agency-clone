import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "@/components/site/PageIntro";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/referenzen")({
  head: () => ({ meta: pageMeta("Referenzen Webdesign & Printdesign | typusmedia Braunschweig", "Ausgewählte Projekte der typusmedia Werbeagentur aus Braunschweig.") }),
  component: Page,
});

function Page() {
  return <PageIntro eyebrow="Referenzen" title="Referenzen Webdesign & Printdesign">Ausgewählte Projekte der typusmedia Werbeagentur aus Braunschweig.</PageIntro>;
}
