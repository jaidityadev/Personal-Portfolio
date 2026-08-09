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
    <FadeIn className={cn("mb-12 md:mb-16", className)}>
      <p className="label-rule">
        <span className="text-primary">{number}</span>
        <span>{label}</span>
      </p>
      <h2 className="mt-6 max-w-3xl text-3xl sm:text-4xl md:text-5xl">{title}</h2>
      {lede && (
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {lede}
        </p>
      )}
    </FadeIn>
  );
}
