import path from "node:path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

/** GitHub Pages: project sites use https://<user>.github.io/<repo>/ ; user/org pages use https://<user>.github.io/ */
function githubPagesBase(): string {
  const raw = process.env.GITHUB_REPOSITORY;
  if (!raw) return "/";
  const repo = raw.split("/")[1];
  if (!repo) return "/";
  if (repo.endsWith(".github.io")) return "/";
  return `/${repo}/`;
}

export default defineConfig({
  base: githubPagesBase(),
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: { "@": path.resolve(__dirname, "src") },
  },
  server: {
    host: true,
    port: 5173,
  },
  preview: {
    host: true,
    port: 4173,
  },
});
