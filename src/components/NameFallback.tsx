import { cn } from "@/lib/utils";

type Props = {
  name: string;
  className?: string;
  givenClassName?: string;
  restClassName?: string;
};

/** Renders given name on the first line and remaining tokens on the second (avoids monogram initials like STC). */
export function NameFallback({ name, className, givenClassName, restClassName }: Props) {
  const parts = name.trim().split(/\s+/);
  const given = parts[0] ?? name;
  const rest = parts.slice(1).join(" ");
  return (
    <div className={cn("flex flex-col items-center justify-center text-center", className)}>
      <span className={cn("font-semibold tracking-tight", givenClassName)}>{given}</span>
      {rest ? <span className={cn("mt-1 font-medium text-text-secondary", restClassName)}>{rest}</span> : null}
    </div>
  );
}
