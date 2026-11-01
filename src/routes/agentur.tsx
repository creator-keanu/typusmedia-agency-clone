import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "@/components/site/PageIntro";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/agentur")({
  head: () => ({ meta: pageMeta("Die Agentur | typusmedia Braunschweig", "Full-Service Werbeagentur mit Herz für die Region 38.") }),
  component: Page,
});

function Page() {
  return <PageIntro eyebrow="Agentur" title="Die Agentur">Full-Service Werbeagentur mit Herz für die Region 38.</PageIntro>;
}
