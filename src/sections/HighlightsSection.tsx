import { GlassCard } from "@/components/ui/GlassCard";
import { Section } from "@/components/layout/Section";
import { accomplishments } from "@/data/accomplishments";
import { languages } from "@/data/languages";
import { motion } from "framer-motion";
import { Award, Languages } from "lucide-react";

export function HighlightsSection() {
  return (
    <Section
      id="highlights"
      title="Accomplishments & Languages"
      subtitle="Impact from production ADF pipelines and multilingual collaboration with global teams."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45 }}
        >
          <GlassCard className="h-full">
            <div className="flex items-center gap-2 text-accent-blue">
              <Award className="h-5 w-5" />
              <h3 className="text-lg font-semibold text-text-primary">Accomplishments</h3>
            </div>
            <ul className="mt-5 space-y-4 text-sm leading-relaxed text-text-secondary">
              {accomplishments.map((line) => (
                <li key={line} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-purple" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45, delay: 0.06 }}
        >
          <GlassCard className="h-full">
            <div className="flex items-center gap-2 text-accent-purple">
              <Languages className="h-5 w-5" />
              <h3 className="text-lg font-semibold text-text-primary">Languages</h3>
            </div>
            <ul className="mt-5 space-y-4">
              {languages.map((lang) => (
                <li
                  key={lang.name}
                  className="flex flex-col gap-1 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
                >
                  <span className="font-medium text-text-primary">{lang.name}</span>
                  <span className="text-sm text-text-secondary">{lang.proficiency}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        </motion.div>
      </div>
    </Section>
  );
}
