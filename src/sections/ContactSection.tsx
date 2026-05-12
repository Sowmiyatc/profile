import { AnchorButton, Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { Section } from "@/components/layout/Section";
import { site } from "@/data/site";
import { motion } from "framer-motion";
import { Copy, Download, Linkedin, Mail } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const copyResetTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (copyResetTimeoutRef.current !== null) {
        window.clearTimeout(copyResetTimeoutRef.current);
      }
    };
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      if (copyResetTimeoutRef.current !== null) {
        window.clearTimeout(copyResetTimeoutRef.current);
      }
      setCopied(true);
      copyResetTimeoutRef.current = window.setTimeout(() => {
        setCopied(false);
        copyResetTimeoutRef.current = null;
      }, 2000);
    } catch {
      if (copyResetTimeoutRef.current !== null) {
        window.clearTimeout(copyResetTimeoutRef.current);
        copyResetTimeoutRef.current = null;
      }
      setCopied(false);
    }
  };

  return (
    <Section id="contact" title="Contact" subtitle="Let’s talk about teams, platforms, and the next hard problem to solve.">
      <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }}>
        <GlassCard className="mx-auto max-w-3xl">
          <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div>
              <p className="text-sm text-text-secondary">Direct</p>
              <div className="mt-3 flex flex-col gap-3 text-text-primary">
                <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 text-lg font-medium hover:text-accent-blue">
                  <Mail className="h-5 w-5 text-accent-blue" />
                  {site.email}
                </a>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button type="button" variant="secondary" onClick={copyEmail}>
                  <Copy className="h-4 w-4" />
                  {copied ? "Copied" : "Copy email"}
                </Button>
                <AnchorButton href={site.resumePath} download>
                  <Download className="h-4 w-4" />
                  Resume PDF
                </AnchorButton>
              </div>
            </div>
            <div className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-sm text-text-secondary">LinkedIn</p>
              <p className="text-sm leading-relaxed text-text-secondary">
                For roles, collaborations, or a fuller work history—message me on LinkedIn.
              </p>
              <AnchorButton href={site.linkedin} target="_blank" rel="noreferrer" variant="secondary" className="justify-start">
                <Linkedin className="h-5 w-5 text-accent-blue" />
                Open profile
              </AnchorButton>
            </div>
          </div>
        </GlassCard>
      </motion.div>
    </Section>
  );
}
