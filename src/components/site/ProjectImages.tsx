import { useState } from "react";
import { ArrowLeft, ArrowRight, Expand } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";

export function ProjectImages({ title, images }: { title: string; images: readonly string[] }) {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);
  const image = images[active];
  if (!image) return null;
  const change = (direction: number) => setActive((value) => (value + direction + images.length) % images.length);
  return <>
    <figure>
      <div className="relative bg-muted">
        <img src={image} alt={`${title} – Ansicht ${active + 1}`} width={1200} height={900} className="aspect-[4/3] w-full object-contain" />
        <Button variant="secondary" size="icon" className="absolute bottom-3 right-3" aria-label="Bild vergrößern" title="Bild vergrößern" onClick={() => setOpen(true)}><Expand /></Button>
      </div>
      {images.length > 1 && <div className="mt-4 flex flex-wrap gap-3">{images.map((src, index) => <Button key={src} variant={active === index ? "default" : "outline"} className="h-16 w-20 p-1" aria-label={`Ansicht ${index + 1}`} aria-pressed={active === index} onClick={() => setActive(index)}><img src={src} alt="" className="h-full w-full object-contain" loading="lazy" /></Button>)}</div>}
    </figure>
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="w-[calc(100%-2rem)] max-w-6xl gap-3 p-4 pt-12" onKeyDown={(event) => { if (event.key === "ArrowLeft") change(-1); if (event.key === "ArrowRight") change(1); }}>
        <DialogTitle className="pr-8 leading-6">{title}</DialogTitle>
        <DialogDescription className="sr-only">Projektansicht {active + 1} von {images.length}</DialogDescription>
        <img src={image} alt={`${title} – Ansicht ${active + 1}`} className="max-h-[65dvh] w-full object-contain" />
        {images.length > 1 && <div className="flex items-center justify-center gap-5"><Button variant="outline" size="icon" aria-label="Vorheriges Bild" onClick={() => change(-1)}><ArrowLeft /></Button><span className="text-sm text-muted-foreground">{active + 1} / {images.length}</span><Button variant="outline" size="icon" aria-label="Nächstes Bild" onClick={() => change(1)}><ArrowRight /></Button></div>}
      </DialogContent>
    </Dialog>
  </>;
}