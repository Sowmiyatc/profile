import { useEffect, useState } from "react";

const SECTION_IDS = [
  "home",
  "about",
  "highlights",
  "skills",
  "experience",
  "projects",
  "architecture",
  "certifications",
  "contact",
] as const;

export type SectionId = (typeof SECTION_IDS)[number];

export function useActiveSection() {
  const [active, setActive] = useState<SectionId>("home");

  useEffect(() => {
    const elements = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];
        if (visible?.target.id) setActive(visible.target.id as SectionId);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    for (const el of elements) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return active;
}

export const sectionNav = [
  { id: "home" as const, label: "Home" },
  { id: "about" as const, label: "About" },
  { id: "highlights" as const, label: "Highlights" },
  { id: "skills" as const, label: "Skills" },
  { id: "experience" as const, label: "Experience" },
  { id: "projects" as const, label: "Projects" },
  { id: "architecture" as const, label: "Architecture" },
  { id: "certifications" as const, label: "Certifications" },
  { id: "contact" as const, label: "Contact" },
] satisfies { id: SectionId; label: string }[];
