import { GlassCard } from "@/components/ui/GlassCard";
import { Section } from "@/components/layout/Section";
import { certifications } from "@/data/certifications";
import { motion } from "framer-motion";
import { Award } from "lucide-react";

export function CertificationsSection() {
  return (
    <Section
      id="certifications"
      title="Certifications"
      subtitle="DP-900 (Azure Data Fundamentals) and Databricks Certified Data Engineer Associate—add verification links when ready."
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {certifications.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            whileHover={{ y: -4, scale: 1.01 }}
          >
            <GlassCard className="relative h-full overflow-hidden">
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-accent-purple/20 blur-2xl" />
              <div className="flex items-start gap-3">
                <span className="inline-flex rounded-xl bg-white/5 p-2 text-accent-blue">
                  <Award className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-base font-semibold leading-snug">{c.name}</h3>
                  <p className="mt-2 text-sm text-text-secondary">
                    {c.issuer}
                    {c.year ? ` · ${c.year}` : ""}
                  </p>
                  {c.credentialUrl ? (
                    <a href={c.credentialUrl} className="mt-3 inline-block text-sm font-medium text-accent-blue hover:underline" target="_blank" rel="noreferrer">
                      Verify credential
                    </a>
                  ) : null}
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
