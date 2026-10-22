import { useEffect, useState } from "react";

const fmt = new Intl.DateTimeFormat("en-CA", {
  timeZone: "America/Toronto",
  hour: "numeric",
  minute: "2-digit",
  hour12: true,
  timeZoneName: "short",
});

/** Live Toronto local time. Renders nothing until mounted to avoid hydration mismatch. */
export function TorontoClock() {
  const [now, setNow] = useState<string | null>(null);

  useEffect(() => {
    const tick = () => setNow(fmt.format(new Date()));
    tick();
    const id = window.setInterval(tick, 15_000);
    return () => window.clearInterval(id);
  }, []);

  if (!now) return null;
  return (
    <span className="font-mono text-xs tabular-nums text-muted-foreground">
      <span aria-hidden className="mr-3 text-border">·</span>
      <span className="sr-only">Local time in Toronto: </span>
      {now}
    </span>
  );
}
