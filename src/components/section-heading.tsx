import FadeIn from "@/components/animations/fade-in";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  number: string;
  label: string;
  title: string;
  lede?: string;
  className?: string;
}

export default function SectionHeading({
  number,
  label,
  title,
  lede,
  className,
}: SectionHeadingProps) {
  return (
    <FadeIn className={cn("mb-12", className)}>
      <div className="flex items-baseline gap-3 mb-4">
        <span className="font-mono text-sm text-primary">{number}</span>
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          {label}
        </span>
        <span className="hidden sm:block h-px flex-1 bg-border" />
      </div>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
      {lede && (
        <p className="text-muted-foreground max-w-3xl text-base md:text-lg">
          {lede}
        </p>
      )}
    </FadeIn>
  );
}
