import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "@/components/site/PageIntro";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({ meta: pageMeta("Datenschutz | typusmedia Braunschweig", "Informationen zur Verarbeitung personenbezogener Daten auf dieser Website.") }),
  component: Page,
});

function Page() {
  return <PageIntro eyebrow="Rechtliches" title="Datenschutz">Informationen zur Verarbeitung personenbezogener Daten auf dieser Website.</PageIntro>;
}
