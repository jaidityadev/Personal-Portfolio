import { cn } from "@/lib/utils";

export function Tag({ children, className }: { children: string; className?: string }) {
  return <span className={cn("tag", className)}>{children}</span>;
}

export function TagList({ items, className }: { items: string[]; className?: string }) {
  if (!items.length) return null;
  return (
    <ul className={cn("flex flex-wrap gap-2", className)} aria-label="Technologies">
      {items.map((item) => (
        <li key={item}>
          <Tag>{item}</Tag>
        </li>
      ))}
    </ul>
  );
}
