import { GlassCard } from "@/components/ui/GlassCard";
import { Section } from "@/components/layout/Section";
import { experiences } from "@/data/experience";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export function ExperienceSection() {
  const [openId, setOpenId] = useState<number | null>(0);

  return (
    <Section
      id="experience"
      title="Experience"
      subtitle="Professional timeline—Senior Data Engineer at Cognizant Technology Solutions and engineering education at PSNA College of Engineering and Technology."
    >
      <div className="relative">
        <div className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-accent-blue/60 via-accent-purple/40 to-transparent sm:left-[15px]" />
        <ul className="space-y-6">
          {experiences.map((job, index) => {
            const open = openId === index;
            return (
              <motion.li
                key={`${job.company}-${job.duration}`}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45 }}
                className="relative pl-10 sm:pl-12"
              >
                <span className="absolute left-1 top-6 flex h-5 w-5 items-center justify-center rounded-full border border-white/20 bg-bg-secondary sm:left-2">
                  <span
                    className={`h-2 w-2 rounded-full ${job.kind === "education" ? "bg-accent-purple" : "bg-accent-blue"}`}
                  />
                </span>
                <GlassCard className="overflow-hidden p-0">
                  <button
                    type="button"
                    onClick={() => setOpenId(open ? null : index)}
                    className="flex w-full items-start justify-between gap-4 p-6 text-left transition hover:bg-white/[0.03]"
                  >
                    <div>
                      <p className="text-xs uppercase tracking-wide text-accent-blue">{job.duration}</p>
                      <h3 className="mt-1 text-xl font-semibold">{job.role}</h3>
                      <p className="text-text-secondary">{job.company}</p>
                    </div>
                    <motion.div animate={{ rotate: open ? 180 : 0 }} className="mt-1 text-text-secondary">
                      <ChevronDown className="h-5 w-5" />
                    </motion.div>
                  </button>
                  <AnimatePresence initial={false}>
                    {open ? (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35 }}
                        className="border-t border-white/10"
                      >
                        <div className="space-y-5 p-6 pt-4 text-sm text-text-secondary">
                          {job.responsibilities.length > 0 ? (
                            <div>
                              <p className="text-xs font-semibold uppercase tracking-wide text-text-primary">
                                {job.kind === "education" ? "Program" : "Responsibilities"}
                              </p>
                              <ul className="mt-2 list-disc space-y-1 pl-5">
                                {job.responsibilities.map((r) => (
                                  <li key={r}>{r}</li>
                                ))}
                              </ul>
                            </div>
                          ) : null}
                          {job.achievements.length > 0 ? (
                            <div>
                              <p className="text-xs font-semibold uppercase tracking-wide text-text-primary">Achievements</p>
                              <ul className="mt-2 list-disc space-y-1 pl-5">
                                {job.achievements.map((a) => (
                                  <li key={a}>{a}</li>
                                ))}
                              </ul>
                            </div>
                          ) : null}
                          {job.technologies.length > 0 ? (
                            <div className="flex flex-wrap gap-2">
                              {job.technologies.map((t) => (
                                <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-xs text-text-primary">
                                  {t}
                                </span>
                              ))}
                            </div>
                          ) : null}
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </GlassCard>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}
