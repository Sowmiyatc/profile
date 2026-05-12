import { NameFallback } from "@/components/NameFallback";
import { GlassCard } from "@/components/ui/GlassCard";
import { Section } from "@/components/layout/Section";
import { site } from "@/data/site";
import { motion } from "framer-motion";
import { useState } from "react";

export function AboutSection() {
  const [imgOk, setImgOk] = useState(true);

  return (
    <Section
      id="about"
      title="About Me"
      subtitle="Senior Data Engineer at Cognizant Technology Solutions—how I work with clients, data platforms, and delivery teams."
    >
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-accent-blue/25 to-accent-purple/20 blur-2xl" />
          <GlassCard className="relative overflow-hidden p-0">
            <div className="aspect-[4/5] w-full bg-bg-secondary">
              {imgOk ? (
                <img
                  src={site.profileImage}
                  alt={`${site.name}, professional headshot`}
                  className="h-full w-full object-cover"
                  onError={() => setImgOk(false)}
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-accent-blue/20 to-accent-purple/30 px-4">
                  <NameFallback
                    name={site.name}
                    givenClassName="text-2xl text-text-primary sm:text-3xl"
                    restClassName="text-lg sm:text-xl"
                  />
                </div>
              )}
            </div>
          </GlassCard>
        </motion.div>

        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <GlassCard>
              <p className="text-lg leading-relaxed text-text-secondary">{site.summary}</p>
              <ul className="mt-6 space-y-3 text-text-secondary">
                <li className="flex gap-2">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent-blue" />
                  End-to-end ownership: from source analysis and pipeline design to production monitoring and handover.
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent-purple" />
                  Azure-first mindset with pragmatic use of Databricks, Snowflake, and relational engines where they fit best.
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent-blue" />
                  Clear documentation and stakeholder communication so analytics and engineering stay aligned.
                </li>
              </ul>
            </GlassCard>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { title: "Focus", body: "Governed, testable pipelines and explainable metrics for business users." },
              { title: "Style", body: "Collaborative delivery with transparent status, risks, and options across client teams." },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 * i, duration: 0.4 }}
              >
                <GlassCard className="h-full">
                  <h3 className="text-sm font-semibold text-text-primary">{card.title}</h3>
                  <p className="mt-2 text-sm text-text-secondary">{card.body}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
