<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Site copy and contact data live in src/content/site.ts; pages read from it so content swaps happen in one place.
- Shared header/footer render in src/routes/__root.tsx around <Outlet />.
- Downloaded original media is referenced through imported src/assets/*.asset.json pointers; keep binary downloads outside the repository to use CDN delivery.
- Core page content and portfolio projects are static and exported from src/content/site.ts; project details use exact slug lookup and never invent client challenges or measured outcomes absent from the original source.
- Portfolio categories are validated URL search parameters so filtered galleries survive reloads and browser navigation; project detail routes use an un-nested filename to render beside the gallery.
- Contact inquiries use a public write-only server function with a shared validation schema and private Cloud storage; no visitor can read submissions, and request UUIDs make retries idempotent.
- Global presentation colors use semantic CSS tokens; shared intersection-based entrance motion preserves visible content without JavaScript and respects reduced-motion preferences.
