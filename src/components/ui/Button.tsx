import { cn } from "@/lib/utils";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-accent-blue to-accent-purple text-white shadow-lg shadow-accent-blue/25 hover:opacity-95",
  secondary:
    "border border-white/10 bg-white/5 text-text-primary backdrop-blur hover:bg-white/10",
  ghost: "text-text-secondary hover:text-text-primary",
};

export function Button({
  className,
  variant = "primary",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  return (
    <button
      type="button"
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-blue disabled:pointer-events-none disabled:opacity-50",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}

export function AnchorButton({
  className,
  variant = "primary",
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: Variant }) {
  return (
    <a
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-blue",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}
