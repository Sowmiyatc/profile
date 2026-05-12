# Design log — Resume website

## User prompt (latest)

> i want to publish this to github page

## Decisions

- **GitHub Pages:** Workflow **`.github/workflows/deploy-pages.yml`** — on push to **`main`**, **`npm ci`** + **`npm run build`**, then **`upload-pages-artifact`** + **`deploy-pages`**. Repo **Settings → Pages → Build and deployment** must use **GitHub Actions** (not “Deploy from branch”).
- **Vite `base` (`vite.config.ts`):** In CI, **`GITHUB_REPOSITORY`** (set by Actions) drives **`/<repo>/`** so assets load under **`https://<user>.github.io/<repo>/`**. If repo name is **`<user>.github.io`**, **`base`** is **`/`** (user site at domain root). Local dev: unset env → **`base: '/'`**.
- **Public URLs (`site.ts`):** **`resumePath`** and **`profileImage`** use **`import.meta.env.BASE_URL`** via **`publicAsset()`** so resume/photo work under a subpath.
- **JSON-LD (`JsonLd.tsx`):** **`url`** uses **`origin + BASE_URL`** (trimmed) so the Person URL matches the deployed path.
- **Contact copy feedback (`ContactSection.tsx`):** `copyResetTimeoutRef` clears/reschedules the **Copied** reset timeout; cleanup on unmount and on clipboard error.
- **ContactSection file:** Was **0 bytes** (broken import); restored full section UI plus the timeout fix.
- **Employer copy:** **`Cognizant Technology Solutions`** in **`site.ts`**, **`experience.ts`**, **`index.html`**, and relevant section subtitles.
- **PSNA:** **`PSNA College of Engineering and Technology`** (lowercase **and**) in **`experience.ts`**; Experience section subtitle spells out the school name.
- **Section titles:** **About Me**, **Accomplishments & Languages**, **Featured Projects**; Skills subtitle notes **self-assessed** bars and **end-to-end** hyphenation.
- **Nav:** **`sectionNav`** includes **`highlights`** with label **Highlights** (after About).
- **Contact:** LinkedIn column has heading, short body copy, and CTA **Open profile**.
- **Photo fallback:** Shared **`NameFallback`** (`src/components/NameFallback.tsx`) — first name on line one, remainder on line two (hero + about); no **STC** monogram.
- **Footer copyright (`Footer.tsx`):** No trailing period after **`site.name`**.
- **Navbar brand (`Navbar.tsx`):** **`site.name`** + **Portfolio**; no STC monogram.
- **Skill levels (`skills.ts`):** **Python** and **Power BI** at **70**.
- **Languages & scripting (`skills.ts`):** **PySpark → SQL → Unix scripting → Python** (Python last).
- **Experience tenure:** **`site.experienceTenure`** = **`5 years 7 months`**; summary uses **5 years and 7 months**.
- **No GitHub on site;** projects **`md:grid-cols-2`**; LAN **`vite.config.ts`**; resume + profile image via **`publicAsset()`**; contact email as in **`site.ts`**; LinkedIn + **`public/profile.png`**.
- **Highlights:** `id="highlights"` — accomplishments + languages; in **`SECTION_IDS`** and **navbar**.
- **Experience:** Cognizant Oct 2020—Present + PSNA BE ECE; expandable panels.
- **Certifications:** DP-900 + Databricks DE Associate.
- **Stack:** Vite, React 19, TypeScript, Tailwind v4, Framer Motion, Lucide.

## Assistant response (latest)

Added **GitHub Pages** deployment: **`.github/workflows/deploy-pages.yml`** (build artifact + **deploy-pages**). **`vite.config.ts`** sets **`base`** from **`GITHUB_REPOSITORY`** in CI (`/<repo>/`, or **`/`** for **`<user>.github.io`** repos). **`site.ts`** uses **`publicAsset()`** for **`resumePath`** / **`profileImage`**; **`JsonLd`** Person **`url`** includes the subpath. After the first successful workflow run, set the repo **Pages** source to **GitHub Actions** if prompted; the site URL will be **`https://<github-username>.github.io/profile/`** for repo **`profile`**. **`npm run build`** passes locally with and without **`GITHUB_REPOSITORY`**.

## Implementation notes

- **GitHub Pages:** After the first deploy, open **Settings → Pages** and set **Build and deployment** source to **GitHub Actions** (once). Live URL: **`https://<user>.github.io/<repo>/`** (e.g. **`https://sowmiyatc.github.io/profile/`** if the repo is **`Sowmiyatc/profile`**).
- Resume: **`public/Sowmiya_TC_Resume.pdf`** — `site.resumePath` uses **`publicAsset()`** (works with **`base`** on GitHub Pages).
- **LAN dev:** Run `npm run dev`; use the **Network** URL from the terminal on phones/other PCs (same subnet). If the page does not load, allow **Node.js** through Windows Firewall for private networks.
- Add `credentialUrl` on certification rows when you have verify links.
- PSNA entry uses **Degree program** for dates until you add graduation year.

## Changelog

- **2026-05-12:** GitHub Pages: **`deploy-pages`** workflow, Vite **`base`** from **`GITHUB_REPOSITORY`**, **`publicAsset`** + JSON-LD URL (`vite.config.ts`, `site.ts`, `JsonLd.tsx`, `.github/workflows/deploy-pages.yml`).
- **2026-05-12:** Contact: **`copyEmail`** clears/reschedules reset timeout; restore **`ContactSection.tsx`** (file had been empty).
- **2026-05-12:** Review follow-through: **Cognizant Technology Solutions**; PSNA **and**; nav **Highlights**; section title case; Skills self-assessment copy; Contact LinkedIn column; **`NameFallback`** hero/about (`site.ts`, `experience.ts`, `index.html`, `AboutSection`, `HeroSection`, `HighlightsSection`, `ExperienceSection`, `ProjectsSection`, `SkillsSection`, `ContactSection`, `useActiveSection.ts`, `NameFallback.tsx`).
- **2026-05-12:** Footer: removed period after copyright name (`Footer.tsx`).
- **2026-05-12:** Navbar: **`site.name`** (**Sowmiya T C**) + **Portfolio**; no STC monogram (`Navbar.tsx`).
- **2026-05-12:** Skills: **Python** and **Power BI** levels set to **70** (`skills.ts`).
- **2026-05-12:** Skills: **Languages & scripting** — Python moved to last (`skills.ts`).
- **2026-05-12:** Experience: **`experienceTenure: "5 years 7 months"`** (`site.ts`, hero); removed **`yearsExperience`**.
- **2026-05-12:** Footer: removed “Crafted with React & Tailwind” (`Footer.tsx`).
- **2026-05-12:** Removed GitHub links/icons and **`site.github`** (hero, contact, footer, JSON-LD, project cards, `vite-env`).
- **2026-05-12:** Projects section layout + card structure refactor (`ProjectsSection`, `projects.ts` — removed **`span`**).
- **2026-05-12:** Removed **GitHub activity** and **Testimonials** sections (`App.tsx`, scroll spy, deleted section files + `testimonials.ts`).
- **2026-05-12:** Projects: added **Azure data ingestion** alongside Oracle migration (`projects.ts`, subtitle).
- **2026-05-12:** Projects section: no card images; **`image`** removed from project model (`ProjectsSection`, `projects.ts`).
- **2026-05-12:** Removed **Event flow** label from **`placeholder-kafka.svg`**.
- **2026-05-12:** Projects: removed **Operational data mart for KPIs**; single-card full-width layout (`ProjectsSection`, `projects.ts`).
- **2026-05-12:** Projects: removed lakehouse (gym) + Snowflake/Power BI (membership); two-card layout (`projects.ts`).
- **2026-05-12:** Vite **`server.host`** / **`preview.host`** for LAN access (`vite.config.ts`).
- **2026-05-12:** Resume download → **`Sowmiya_TC_Resume.pdf`** (`site.resumePath`, `public/`).
- **2026-05-12:** Contact: removed phone; email **`sowmikarthik2323@gmail.com`** (`site.ts`, `ContactSection`).
- **2026-05-12:** LinkedIn URL updated to `sowmiya-t-c-031287184` profile (`site.ts`).
- **2026-05-12:** Accomplishments, languages, certifications (DP-900, Databricks DE Associate), Cognizant timeline Oct 2020—Present, PSNA BE ECE, highlights section, experience UI tweaks, site/SEO employer name.
- **2026-05-12:** Profile photo `public/profile.png`.
- **2026-05-12:** Full personalization (Sowmiya T C, Senior DE, Cognizant-era copy).
- **2026-05-12:** Skills data (`src/data/skills.ts`).
- **2026-05-12:** Initial scaffold.
