import { cn } from "../lib/utils";

interface GlassBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function GlassBadge({ children, className, ...props }: GlassBadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest uppercase font-body",
        "bg-emerald-50 text-emerald-700 border border-emerald-100",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
