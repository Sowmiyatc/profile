import { site } from "@/data/site";
import { Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-bg-secondary/40 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="text-sm text-text-secondary">
          © {new Date().getFullYear()} {site.name}
        </p>
        <div className="flex gap-3 text-text-secondary">
          <a className="hover:text-text-primary" href={`mailto:${site.email}`} aria-label="Email">
            <Mail className="h-5 w-5" />
          </a>
          <a className="hover:text-text-primary" href={site.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
