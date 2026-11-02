import { Link, useRouter, type ErrorComponentProps } from "@tanstack/react-router";
import { ArrowLeft, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

export function MissingProject() {
  return <section className="mx-auto max-w-7xl px-5 py-24 md:px-8"><p className="eyebrow">404</p><h1 className="mt-4 text-4xl font-bold">Projekt nicht gefunden</h1><Button asChild className="mt-8"><Link to="/referenzen"><ArrowLeft /> Zurück zu den Referenzen</Link></Button></section>;
}
export function PageError({ reset }: ErrorComponentProps) {
  const router = useRouter();
  return <section className="mx-auto max-w-7xl px-5 py-24 md:px-8"><h1 className="text-3xl font-bold">Diese Seite konnte nicht geladen werden.</h1><Button className="mt-8" onClick={() => { void router.invalidate(); reset(); }}><RotateCcw /> Erneut versuchen</Button></section>;
}