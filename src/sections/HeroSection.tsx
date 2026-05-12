import { NameFallback } from "@/components/NameFallback";
import { AnchorButton, Button } from "@/components/ui/Button";
import { site } from "@/data/site";
import { useTyping } from "@/hooks/useTyping";
import { motion } from "framer-motion";
import { ArrowRight, Download, Linkedin, Mail } from "lucide-react";
import { useMemo, useState } from "react";

function Particles() {
  const dots = useMemo(
    () =>
      Array.from({ length: 36 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        s: 1 + Math.random() * 2,
        d: 10 + Math.random() * 20,
      })),
    [],
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-accent-blue/20"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.s, height: p.s }}
          animate={{ y: [0, -p.d, 0], opacity: [0.15, 0.45, 0.15] }}
          transition={{ duration: 6 + p.d / 10, repeat: Infinity, ease: "easeInOut", delay: p.id * 0.08 }}
        />
      ))}
    </div>
  );
}

export function HeroSection() {
  const typed = useTyping(site.tagline, 28, 500);
  const [imgOk, setImgOk] = useState(true);

  return (
    <section id="home" className="relative flex min-h-screen flex-col justify-center px-4 pb-16 pt-28 sm:px-6">
      <Particles />
      <div className="pointer-events-none absolute inset-x-0 top-24 h-72 bg-gradient-to-b from-accent-purple/25 via-transparent to-transparent blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm font-medium uppercase tracking-widest text-accent-blue"
          >
            <span className="text-accent-purple">{site.experienceTenure}</span>
            <span className="mx-2 text-text-secondary" aria-hidden>
              ·
            </span>
            <span>{site.role}</span>
            <span className="mx-2 text-text-secondary" aria-hidden>
              ·
            </span>
            <span className="text-text-secondary">{site.employer}</span>
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl"
          >
            {site.name}
            <span className="mt-2 block text-2xl font-medium text-text-secondary sm:text-3xl">{site.role}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-6 max-w-xl text-lg text-text-secondary"
          >
            <span className="text-text-primary">{typed}</span>
            <span className="ml-1 inline-block h-5 w-0.5 animate-pulse bg-accent-purple align-bottom" aria-hidden />
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <AnchorButton href={site.resumePath} download>
              <Download className="h-4 w-4" />
              Download resume
            </AnchorButton>
            <Button variant="secondary" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
              <Mail className="h-4 w-4" />
              Contact me
            </Button>
            <Button variant="secondary" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
              View projects
              <ArrowRight className="h-4 w-4" />
            </Button>
            <AnchorButton variant="secondary" href={site.linkedin} target="_blank" rel="noreferrer">
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </AnchorButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="mt-10 flex flex-wrap gap-2"
          >
            {site.coreTech.map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-text-secondary"
              >
                {t}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-accent-blue/40 via-transparent to-accent-purple/40 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-bg-secondary/60 p-6 shadow-2xl backdrop-blur-xl">
            <div className="flex flex-col items-center text-center">
              <div className="relative h-40 w-40 overflow-hidden rounded-full border border-white/10 bg-gradient-to-br from-accent-blue/30 to-accent-purple/30">
                {imgOk ? (
                  <img
                    src={site.profileImage}
                    alt={`${site.name}, ${site.role}`}
                    className="h-full w-full object-cover"
                    onError={() => setImgOk(false)}
                  />
                ) : (
                  <NameFallback
                    name={site.name}
                    className="h-full w-full px-2"
                    givenClassName="text-sm text-text-primary sm:text-base"
                    restClassName="text-xs sm:text-sm"
                  />
                )}
              </div>
              <p className="mt-6 text-sm text-text-secondary">Core stack</p>
              <div className="mt-4 flex flex-wrap justify-center gap-3">
                {site.floatingTechBadges.map((label, i) => (
                  <motion.span
                    key={label}
                    className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-text-primary"
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: i * 0.25, ease: "easeInOut" }}
                  >
                    {label}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
