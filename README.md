# Typusmedia Agency Clone

BRAND_NAME        = "Typusmedia"
APP_SLUG          = "typusmedia-clone"
PRODUCTION_URL    = "https://typusmedia.de"
CONTACT_EMAIL     = {{CONTACT_EMAIL}}       # e.g. "hallo@typusmedia.de"
EMAIL_FROM        = {{EMAIL_FROM}}          # e.g. "Typusmedia kontakt@typusmedia.de"





---



## 0. Your role and the mission



You are a senior full-stack engineer and UI/UX expert. Build **{{BRAND_NAME}}**, an exact, production-grade clone of **typusmedia.de**: a full-service advertising agency website based in Braunschweig, showcasing their branding, web development, marketing, and media production services, portfolio case studies, local agency flair, and fully functional lead-generation forms.



It must look and feel like typusmedia.de (layout, typography, dark/light premium aesthetic, interactive elements, smooth scrolling), run on the stack below, and replicate every public page, section, and interaction from the live site. It must not be an unfinished demo. Every visible control, menu, filter, and contact form must work from start to finish.



### Stack (locked, do not substitute)



| Concern | Choice |

|---|---|

| Framework | **Next.js** (App Router, latest 16.x), React 19, TypeScript strict |

| Styling/UI | Tailwind v4 + shadcn/ui primitives, `lucide-react` icons, Framer Motion for animations |

| Forms & Email | **React Hook Form** + **Zod**, **Resend** for sending consultation/project inquiry emails |

| Content Storage | Static MDX or typed JSON structure mimicking the real site's content architecture |

| Deployment Config | Vercel-ready with optimal image optimization and SEO metadata |



### How to work



1. Work in the **phases** in §12. At the end of each phase, stop and give me a short report: what works, what you verified and how, and what's next. Continue only after I reply.

2. **Scrape or inspect the live site:** Fetch the live structure, text, hierarchy, and design patterns of `https://typusmedia.de` to ensure an exact 1:1 match in information architecture and copywriting tone.

3. Strict TypeScript. `any`, `@ts-ignore` and `@ts-expect-error` are not fixes. `pnpm typecheck`, `pnpm lint` and `pnpm build` must pass at the end of every phase.



---



## 1. Ground-truth sources (read these before writing code)



### The live site: `https://typusmedia.de` (the UI and structure to copy)

Open `https://typusmedia.de` in a browser, take screenshots at 1440px and 390px wide, map out every subpage in the navigation, and document:

- Header navigation (logo, dropdown menus, CTA "Projekt anfragen" / contact button)

- Footer structure (legal links, social channels, Braunschweig address/contact details)

- Typography scale, color palette (brand primaries, accent tones, dark/light contrasts)

- Animation and transition styles (scroll triggers, hover states on portfolio cards)



---



## 2. Target architecture



Browser (client components)

│  interactive menus, filterable portfolio grid, contact calculator / modal

▼

Next.js server (server actions + API route handlers)

├─ submitInquiry(): validate form via Zod → send email via Resend to agency

└─ newsletter/lead capture handling

▼

Resend (Transactional emails for client inquiries and internal notifications)





---



## 3. Site Architecture & Pages (Complete Clone)



Replicate every page and section present on the live Typusmedia website:



- **`/` (Startseite):** 

  - High-impact Hero section with bold typography and local reference ("Werbeagentur Braunschweig").

  - Quick intro / agency philosophy.

  - Core services teaser grid.

  - Selected reference projects / recent case studies with rich image hover effects.

  - Client logos / social proof.

  - Interactive call-to-action banner for project starts.



- **`/leistungen` (Leistungen / Services):**

  - Detailed overview of all agency pillars (e.g. Branding & Design, Webdevelopment, Online-Marketing / SEO / Ads, Content Production).

  - Sub-pages or dedicated accordion/tabs for specific service details.



- **`/referenzen` (Projekte / Case Studies):**

  - Filterable gallery (by category: Web, Brand, Marketing).

  - Individual case study detail pages (`/referenzen/[slug]`) featuring client challenge, strategic approach, and final results.



- **`/agentur` or `/ueber-uns` (Über uns):**

  - Story, team presentation, core values, workspace insights, local connection to Braunschweig (Region 38).



- **`/kontakt` (Kontakt):**

  - Comprehensive contact form / project configurator (budget selection, service interest, message).

  - Direct contact details (Phone, Email, Address in Braunschweig, Google Maps integration placeholder).



- **Legal Pages:**

  - `/impressum` and `/datenschutz` compliant with German standards.



---



## 4. UI spec & Visual Polish



- **Design Language:** Modern, professional agency aesthetic with sleek dark/light contrasts, sharp micro-interactions, and high-performance layout shifts.

- **Navigation:** Sticky header with mobile hamburger drawer menu, smooth anchor scrolling where applicable, and active route highlights.

- **Media Assets:** Use high-quality placeholder images or placeholders structured for easy swapping with real Typusmedia assets.

- **Accessibility & Responsiveness:** Fully fluid layout from 390px mobile screens up to 1440px+ desktop displays.



---



## 5. Environment variables (`.env.example`)



APP_URL=http://localhost:3000

NEXT_PUBLIC_BRAND_NAME=Typusmedia

CONTACT_EMAIL=hallo@typusmedia.de

RESEND_API_KEY=

EMAIL_FROM="Typusmedia kontakt@typusmedia.de"





---



## 6. Phases and checkpoints



| Phase | Scope | Checkpoint proof |

|---|---|---|

| **1. Scaffold & Layout** | Next.js setup, Tailwind v4, shadcn/ui, global layout, Header & Footer matching Typusmedia | Nav and footer render perfectly on mobile and desktop |

| **2. Core Content Pages** | Build Home (`/`), Services (`/leistungen`), and About (`/agentur`) pages with exact copy structure | All static pages render matching the agency look |

| **3. Portfolio / Case Studies** | Build dynamic `/referenzen` gallery and detail views (`/referenzen/[slug]`) | Clicking a project opens its case study view |

| **4. Contact & Lead Flows** | Implement interactive contact form with Zod validation and Resend email action | Test submission successfully sends an email |

| **5. Polish & Deploy** | Responsive tuning, SEO metadata, performance audit, legal pages | `pnpm build` passes and lighthouse score is 95+ |



---



## 7. Definition of done



- Every core page of `typusmedia.de` is fully cloned and operational.

- The visual presentation matches the agency's exact branding and style.

- Contact and project inquiry forms are fully functional with backend email dispatch.

- `pnpm typecheck && pnpm lint && pnpm build` pass completely without errors.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/cb87c0c9-2bc9-4240-87e2-14bab2d01a47).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
