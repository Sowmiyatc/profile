import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, title, subtitle, children, className }: Props) {
  return (
    <section id={id} className={cn("scroll-mt-24 py-20 sm:py-24", className)}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-10 max-w-2xl"
        >
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
          {subtitle ? <p className="mt-3 text-text-secondary">{subtitle}</p> : null}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
