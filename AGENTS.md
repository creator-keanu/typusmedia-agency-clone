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
- Core page content is static and shared from src/content/site.ts; portfolio filtering and case-study routes are reserved for the portfolio phase to keep phase checkpoints separate.
