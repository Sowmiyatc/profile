import { GlassCard } from "@/components/ui/GlassCard";
import { Section } from "@/components/layout/Section";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export function ProjectsSection() {
  const single = projects.length === 1;

  return (
    <Section
      id="projects"
      title="Featured Projects"
      subtitle="Representative data platform work—Azure ingestion, legacy migration, ETL, and hybrid cloud delivery."
    >
      <div
        className={
          single
            ? "mx-auto max-w-3xl"
            : "grid gap-6 sm:grid-cols-1 md:grid-cols-2 md:gap-8 lg:gap-10"
        }
      >
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            layout
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: i * 0.06 }}
            whileHover={{ y: -3 }}
            className="flex min-h-0"
          >
            <GlassCard className="flex h-full w-full flex-col gap-0 p-0">
              <div className="border-b border-white/10 px-6 pb-4 pt-6">
                <h3 className="text-lg font-semibold tracking-tight text-text-primary sm:text-xl">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-text-secondary">{p.description}</p>
              </div>

              <div className="border-b border-white/10 px-6 py-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-accent-blue">Tech stack</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-lg border border-white/10 bg-white/[0.06] px-2.5 py-1 text-xs font-medium text-text-primary"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-1 flex-col gap-5 px-6 py-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-text-primary">Challenges</p>
                  <ul className="mt-2 space-y-2 text-sm leading-relaxed text-text-secondary">
                    {p.challenges.map((c) => (
                      <li key={c} className="flex gap-2 pl-0.5">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-purple" aria-hidden />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-text-primary">Architecture</p>
                  <ul className="mt-2 space-y-2 text-sm leading-relaxed text-text-secondary">
                    {p.architecture.map((a) => (
                      <li key={a} className="flex gap-2 pl-0.5">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-blue" aria-hidden />
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {p.live ? (
                <div className="mt-auto flex flex-wrap gap-4 border-t border-white/10 px-6 py-4">
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-purple hover:underline"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live
                  </a>
                </div>
              ) : null}
            </GlassCard>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
