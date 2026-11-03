import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "@/components/site/PageIntro";
import { pageMeta } from "@/lib/seo";
import { site, contact } from "@/content/site";
import { ContactForm } from "@/components/site/ContactForm";
import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/kontakt")({
  head: () => ({ meta: pageMeta(`${contact.title} | typusmedia Braunschweig`, `${site.street}, ${site.city} · ${site.phone} · ${site.email}`) }),
  component: Page,
});

function Page() {
  return <><PageIntro eyebrow="Kontakt" title={contact.title}>{contact.subtitle}</PageIntro><section className="mx-auto grid max-w-7xl gap-14 px-5 py-16 md:px-8 lg:grid-cols-[1fr_1.5fr] lg:gap-24 lg:py-24"><aside className="min-w-0"><p className="eyebrow">typusmedia · Braunschweig</p><h2 className="mt-4 text-3xl font-bold">Direkt in Kontakt.</h2><address className="mt-8 space-y-6 not-italic"><a href={site.phoneHref} className="flex items-center gap-3 hover:text-primary"><Phone className="size-5 shrink-0 text-primary" />{site.phone}</a><a href={`mailto:${site.email}`} className="flex items-center gap-3 break-all hover:text-primary"><Mail className="size-5 shrink-0 text-primary" />{site.email}</a><div className="flex items-start gap-3"><MapPin className="size-5 shrink-0 text-primary" /><p>{site.street}<br />{site.city}</p></div></address><Button asChild variant="outline" className="mt-8"><a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${site.street}, ${site.city}`)}`} target="_blank" rel="noopener noreferrer">Route planen <ArrowUpRight /></a></Button></aside><ContactForm /></section></>;
}
