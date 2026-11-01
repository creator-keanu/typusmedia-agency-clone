import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "@/components/site/PageIntro";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/impressum")({
  head: () => ({ meta: pageMeta("Impressum | typusmedia Braunschweig", "typusmedia - Werbeagentur Oliver Olbert, Wolfenbütteler Straße 84, 38102 Braunschweig. USt-IdNr.: DE189144698.") }),
  component: Page,
});

function Page() {
  return <PageIntro eyebrow="Rechtliches" title="Impressum">typusmedia - Werbeagentur Oliver Olbert, Wolfenbütteler Straße 84, 38102 Braunschweig. USt-IdNr.: DE189144698.</PageIntro>;
}
