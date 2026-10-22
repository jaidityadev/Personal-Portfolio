import type { Experience } from "@/content/portfolio";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { TagList } from "./Tag";

export function Timeline({ items }: { items: Experience[] }) {
  return (
    <ol>
      {items.map((item, i) => {
        const last = i === items.length - 1;
        return (
          <li key={`${item.organization}-${i}`} className="grid md:grid-cols-12 md:gap-10">
            <div className="hidden pt-[0.65rem] text-right md:col-span-3 md:block">
              {item.period ? <p className="eyebrow">{item.period}</p> : null}
              {item.location ? <p className="mt-2 text-sm text-muted-foreground">{item.location}</p> : null}
            </div>

            <div
              className={cn(
                "relative border-l border-border pl-8 md:col-span-9 md:pl-10",
                last ? "pb-2" : "pb-16",
              )}
            >
              <span
                aria-hidden
                className={cn(
                  "absolute -left-[6px] top-[0.8rem] size-[11px] rounded-full border",
                  i === 0 ? "live-dot border-primary bg-primary" : "border-foreground/50 bg-background",
                )}
              />
              <Reveal>
                {item.period ? <p className="eyebrow mb-3 md:hidden">{item.period}</p> : null}
                <h3 className="display text-[clamp(1.85rem,3vw,2.5rem)] text-foreground">{item.organization}</h3>
                {item.role ? (
                  <p className="mt-1.5 text-[0.95rem] font-medium text-foreground/80">{item.role}</p>
                ) : null}
                {item.summary ? (
                  <p className="prose-body mt-4 max-w-2xl text-muted-foreground">{item.summary}</p>
                ) : null}
                {item.highlights?.length ? (
                  <ul className="mt-6 max-w-2xl space-y-3">
                    {item.highlights.map((h) => (
                      <li key={h} className="flex gap-4 text-[0.975rem] leading-relaxed text-foreground/85">
                        <span aria-hidden className="mt-[0.75rem] h-px w-4 shrink-0 bg-primary" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
                {item.tags?.length ? <TagList items={item.tags} className="mt-6" /> : null}
              </Reveal>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
