import { GlassCard } from "@/components/ui/GlassCard";
import { Section } from "@/components/layout/Section";
import { AnimatePresence, motion } from "framer-motion";
import { Maximize2, X } from "lucide-react";
import { useState } from "react";

const diagrams = [
  {
    title: "ADF → lakehouse zones",
    description: "Sources land via ADF into bronze storage; Databricks promotes curated tables with repeatable patterns.",
    svg: (
      <svg viewBox="0 0 420 200" className="h-full w-full text-accent-blue" aria-hidden>
        <defs>
          <linearGradient id="flow" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.9" />
          </linearGradient>
        </defs>
        <rect x="20" y="70" width="90" height="60" rx="10" fill="currentColor" opacity="0.15" stroke="currentColor" />
        <text x="65" y="105" textAnchor="middle" fill="#9CA3AF" fontSize="11">
          Sources
        </text>
        <rect x="150" y="60" width="110" height="80" rx="12" fill="url(#flow)" opacity="0.35" stroke="#8B5CF6" />
        <text x="205" y="105" textAnchor="middle" fill="#F9FAFB" fontSize="11">
          ADF
        </text>
        <rect x="300" y="40" width="90" height="40" rx="10" fill="#3B82F6" opacity="0.2" stroke="#3B82F6" />
        <rect x="300" y="95" width="90" height="40" rx="10" fill="#8B5CF6" opacity="0.2" stroke="#8B5CF6" />
        <rect x="300" y="150" width="90" height="40" rx="10" fill="#3B82F6" opacity="0.15" stroke="#3B82F6" />
        <text x="345" y="65" textAnchor="middle" fill="#9CA3AF" fontSize="10">
          Bronze
        </text>
        <text x="345" y="120" textAnchor="middle" fill="#9CA3AF" fontSize="10">
          Silver
        </text>
        <text x="345" y="175" textAnchor="middle" fill="#9CA3AF" fontSize="10">
          Gold
        </text>
        <motion.path
          d="M110 100 H150"
          stroke="#3B82F6"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 0.6 }}
        />
        <motion.path
          d="M260 100 H300"
          stroke="#8B5CF6"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 0.8 }}
        />
      </svg>
    ),
  },
  {
    title: "Batch & micro-batch flow",
    description: "Structured batches or micro-batches feed curated layers; consumers stay idempotent with clear SLAs.",
    svg: (
      <svg viewBox="0 0 420 200" className="h-full w-full" aria-hidden>
        <rect x="30" y="80" width="80" height="44" rx="10" fill="#3B82F6" opacity="0.2" stroke="#3B82F6" />
        <text x="70" y="106" textAnchor="middle" fill="#F9FAFB" fontSize="11">
          Ingest
        </text>
        <rect x="170" y="70" width="90" height="64" rx="12" fill="#111827" stroke="#8B5CF6" />
        <text x="215" y="108" textAnchor="middle" fill="#9CA3AF" fontSize="11">
          Databricks
        </text>
        <rect x="310" y="50" width="80" height="36" rx="10" fill="#8B5CF6" opacity="0.2" stroke="#8B5CF6" />
        <rect x="310" y="100" width="80" height="36" rx="10" fill="#3B82F6" opacity="0.15" stroke="#3B82F6" />
        <rect x="310" y="150" width="80" height="36" rx="10" fill="#8B5CF6" opacity="0.15" stroke="#8B5CF6" />
        <text x="350" y="72" textAnchor="middle" fill="#9CA3AF" fontSize="10">
          Curated
        </text>
        <text x="350" y="122" textAnchor="middle" fill="#9CA3AF" fontSize="10">
          Alerts
        </text>
        <text x="350" y="172" textAnchor="middle" fill="#9CA3AF" fontSize="10">
          BI
        </text>
        <motion.circle
          r="4"
          fill="#3B82F6"
          cx={130}
          cy={102}
          animate={{ cx: [130, 200, 260, 320, 130] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "linear" }}
        />
      </svg>
    ),
  },
  {
    title: "Azure analytics pattern",
    description: "ADF orchestrates movement; Databricks transforms; warehouses and Power BI serve governed consumption.",
    svg: (
      <svg viewBox="0 0 420 200" className="h-full w-full" aria-hidden>
        <rect x="40" y="40" width="340" height="120" rx="16" fill="#0B0F19" stroke="#ffffff22" />
        <rect x="70" y="70" width="90" height="60" rx="10" fill="#3B82F6" opacity="0.18" stroke="#3B82F6" />
        <text x="115" y="105" textAnchor="middle" fill="#F9FAFB" fontSize="11">
          ADF
        </text>
        <rect x="180" y="70" width="90" height="60" rx="10" fill="#8B5CF6" opacity="0.2" stroke="#8B5CF6" />
        <text x="225" y="105" textAnchor="middle" fill="#F9FAFB" fontSize="11">
          Databricks
        </text>
        <rect x="290" y="70" width="70" height="60" rx="10" fill="#3B82F6" opacity="0.12" stroke="#3B82F6" />
        <text x="325" y="105" textAnchor="middle" fill="#9CA3AF" fontSize="11">
          DW
        </text>
        <text x="210" y="185" textAnchor="middle" fill="#9CA3AF" fontSize="11">
          Power BI datasets · Key Vault secrets · monitoring hooks
        </text>
      </svg>
    ),
  },
  {
    title: "Secure data access",
    description: "Entra ID for users and service principals; warehouse roles and Power BI RLS aligned to the same identities.",
    svg: (
      <svg viewBox="0 0 420 200" className="h-full w-full" aria-hidden>
        <rect x="40" y="70" width="90" height="50" rx="10" fill="#3B82F6" opacity="0.2" stroke="#3B82F6" />
        <text x="85" y="100" textAnchor="middle" fill="#F9FAFB" fontSize="11">
          Entra ID
        </text>
        <rect x="170" y="60" width="90" height="70" rx="12" fill="#111827" stroke="#8B5CF6" />
        <text x="215" y="105" textAnchor="middle" fill="#9CA3AF" fontSize="11">
          Roles / RLS
        </text>
        <rect x="300" y="70" width="90" height="50" rx="10" fill="#8B5CF6" opacity="0.18" stroke="#8B5CF6" />
        <text x="345" y="100" textAnchor="middle" fill="#F9FAFB" fontSize="11">
          Lake / DW
        </text>
        <path d="M130 95 H170" stroke="#3B82F6" strokeWidth="2" />
        <path d="M260 95 H300" stroke="#8B5CF6" strokeWidth="2" />
      </svg>
    ),
  },
];

export function ArchitectureSection() {
  const [modal, setModal] = useState<number | null>(null);

  return (
    <Section
      id="architecture"
      title="Architecture"
      subtitle="Reference patterns I apply on Azure-heavy programs—ingestion, processing, and governed consumption."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {diagrams.map((d, i) => (
          <motion.button
            key={d.title}
            type="button"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.05 }}
            whileHover={{ scale: 1.01 }}
            onClick={() => setModal(i)}
            className="text-left"
          >
            <GlassCard className="group h-full cursor-pointer p-0">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                <div>
                  <h3 className="text-lg font-semibold">{d.title}</h3>
                  <p className="mt-1 text-sm text-text-secondary">{d.description}</p>
                </div>
                <Maximize2 className="h-5 w-5 text-text-secondary transition group-hover:text-text-primary" />
              </div>
              <div className="h-48 bg-bg-secondary/60 p-4">{d.svg}</div>
            </GlassCard>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {modal !== null ? (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label={diagrams[modal].title}
            onClick={() => setModal(null)}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-bg-secondary shadow-2xl"
            >
              <button
                type="button"
                className="absolute right-3 top-3 rounded-lg border border-white/10 bg-white/5 p-2 text-text-primary"
                onClick={() => setModal(null)}
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="border-b border-white/10 px-6 pb-4 pt-6 pr-14">
                <h3 className="text-xl font-semibold">{diagrams[modal].title}</h3>
                <p className="mt-2 text-sm text-text-secondary">{diagrams[modal].description}</p>
              </div>
              <div className="h-72 bg-bg p-6">{diagrams[modal].svg}</div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </Section>
  );
}
