import type { ReactNode } from "react";

export function PageIntro({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return (
    <section className="bg-ink text-ink-foreground">
      <div className="mx-auto max-w-7xl px-5 pb-16 pt-14 md:px-8 md:pb-24 md:pt-24">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-extrabold leading-[1.05] md:text-7xl">{title}</h1>
        {children && <div className="mt-6 max-w-2xl text-lg text-ink-muted">{children}</div>}
      </div>
    </section>
  );
}
