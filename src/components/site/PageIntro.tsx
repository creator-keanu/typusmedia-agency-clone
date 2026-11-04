import type { ReactNode } from "react";

export function PageIntro({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return (
    <section className="page-intro border-b border-border bg-ink text-ink-foreground">
      <div className="mx-auto max-w-7xl px-5 pb-14 pt-14 md:px-8 md:pb-20 md:pt-20">
        <p className="eyebrow flex items-center gap-3"><span className="h-px w-8 bg-primary" aria-hidden="true" />{eyebrow}</p>
        <h1 className="mt-6 max-w-5xl break-words text-4xl font-semibold leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">{title}</h1>
        {children && <div className="mt-6 max-w-2xl text-lg leading-8 text-ink-muted">{children}</div>}
      </div>
    </section>
  );
}
