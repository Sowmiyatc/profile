# Design log — Resume website

## User prompt (latest)

> Verify this issue exists and fix it:
>
> The `copyEmail` function schedules a `setTimeout` to reset the `copied` state, but doesn't track or cancel previous timeouts. If the user clicks the button multiple times within the 2-second window, multiple timeouts accumulate. The `copied` message will disappear based on the first click's timeout, not the most recent one, resulting in incorrect feedback timing after rapid clicks.

## Decisions

- **Contact copy feedback (`ContactSection.tsx`):** `copyResetTimeoutRef` stores the pending reset timer; each successful copy **clears** the previous timeout before scheduling a new 2s reset so **Copied** always clears **2s after the latest** click. **useEffect** cleanup clears on unmount. On clipboard **failure**, any pending timeout is cleared and **`copied`** is false.
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
- **No GitHub on site;** projects **`md:grid-cols-2`**; LAN **`vite.config.ts`**; resume **`/Sowmiya_TC_Resume.pdf`**; contact email as in **`site.ts`**; LinkedIn + **`public/profile.png`**.
- **Highlights:** `id="highlights"` — accomplishments + languages; in **`SECTION_IDS`** and **navbar**.
- **Experience:** Cognizant Oct 2020—Present + PSNA BE ECE; expandable panels.
- **Certifications:** DP-900 + Databricks DE Associate.
- **Stack:** Vite, React 19, TypeScript, Tailwind v4, Framer Motion, Lucide.

## Assistant response (latest)

Confirmed **`ContactSection.tsx`** was empty (issue reproduced in the sense the prior implementation was gone). Restored the contact UI and fixed **`copyEmail`**: **`useRef<number | null>`** holds the **`window.setTimeout`** id; clear before each new schedule; clear on unmount and on copy error. **`npm run build`** passes.

## Implementation notes

- Resume: **`public/Sowmiya_TC_Resume.pdf`** — `site.resumePath` → `/Sowmiya_TC_Resume.pdf` (hero + contact download).
- **LAN dev:** Run `npm run dev`; use the **Network** URL from the terminal on phones/other PCs (same subnet). If the page does not load, allow **Node.js** through Windows Firewall for private networks.
- Add `credentialUrl` on certification rows when you have verify links.
- PSNA entry uses **Degree program** for dates until you add graduation year.

## Changelog

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
