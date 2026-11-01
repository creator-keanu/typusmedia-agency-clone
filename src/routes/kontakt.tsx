import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "@/components/site/PageIntro";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/kontakt")({
  head: () => ({ meta: pageMeta("So erreichen Sie uns … | typusmedia Braunschweig", "Wolfenbütteler Straße 84, 38102 Braunschweig · (0531) 88 92 74 60 · keke28517@gmail.com") }),
  component: Page,
});

function Page() {
  return <PageIntro eyebrow="Kontakt" title="So erreichen Sie uns …">Wolfenbütteler Straße 84, 38102 Braunschweig · (0531) 88 92 74 60 · keke28517@gmail.com</PageIntro>;
}
