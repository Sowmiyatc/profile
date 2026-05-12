import { sectionNav, useActiveSection } from "@/hooks/useActiveSection";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export function Navbar() {
  const active = useActiveSection();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-colors",
        scrolled ? "border-white/10 bg-bg/70 backdrop-blur-xl" : "border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <button
          type="button"
          onClick={() => scrollTo("home")}
          className="text-sm font-semibold tracking-tight text-text-primary"
        >
          <span className="text-gradient">{site.name}</span>
          <span className="ml-2 text-text-secondary">Portfolio</span>
        </button>

        <nav className="hidden items-center gap-1 lg:flex">
          {sectionNav.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollTo(item.id)}
              className={cn(
                "rounded-lg px-3 py-2 text-sm transition",
                active === item.id
                  ? "bg-white/10 text-text-primary"
                  : "text-text-secondary hover:bg-white/5 hover:text-text-primary",
              )}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex rounded-lg border border-white/10 bg-white/5 p-2 text-text-primary lg:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="border-t border-white/10 bg-bg-secondary/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-3">
              {sectionNav.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollTo(item.id)}
                  className={cn(
                    "rounded-lg px-3 py-3 text-left text-sm",
                    active === item.id ? "bg-white/10 text-text-primary" : "text-text-secondary",
                  )}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
