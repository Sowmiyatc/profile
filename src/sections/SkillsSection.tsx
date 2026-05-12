import { GlassCard } from "@/components/ui/GlassCard";
import { Section } from "@/components/layout/Section";
import { skillCategories } from "@/data/skills";
import { motion } from "framer-motion";

export function SkillsSection() {
  return (
    <Section
      id="skills"
      title="Skills"
      subtitle="Self-assessed proficiency bars (for orientation). Azure-native pipelines, Spark workloads, warehouses, and BI—end-to-end from design to production."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {skillCategories.map((cat, ci) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: ci * 0.05 }}
          >
            <GlassCard className="h-full">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-lg font-semibold">{cat.title}</h3>
                <span className="rounded-full bg-white/5 px-2 py-1 text-xs text-text-secondary">{cat.items.length} skills</span>
              </div>
              <ul className="mt-6 space-y-4">
                {cat.items.map((s) => (
                  <li key={s.name}>
                    <div className="flex items-center justify-between gap-3 text-sm">
                      <span className="font-medium text-text-primary">{s.name}</span>
                      <span className="text-xs text-text-secondary">{s.level}%</span>
                    </div>
                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/5">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-accent-blue to-accent-purple"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
