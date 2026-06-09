import MetricCounter from "@/components/metric-counter";
import FadeIn from "@/components/animations/fade-in";

const metrics = [
  {
    value: 4,
    suffix: "",
    label: "Peer-reviewed publications",
    sublabel: "Springer · CRC Press · UTJPH",
  },
  {
    value: 800,
    suffix: "K+",
    label: "Documents classified",
    sublabel: "Production ML at ADP",
  },
  {
    value: 5,
    suffix: "",
    label: "Agent tool endpoints",
    sublabel: "Agentic AI in production",
  },
  {
    value: 37,
    prefix: "1/",
    suffix: "",
    label: "Pearson Scholar",
    sublabel: "Full-ride, worldwide",
  },
];

export default function ProofBar() {
  return (
    <FadeIn delay={0.3}>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-px rounded-xl border bg-border overflow-hidden">
        {metrics.map((m) => (
          <div
            key={m.label}
            className="bg-background p-5 md:p-6 flex flex-col gap-1"
          >
            <span className="text-2xl md:text-3xl font-bold text-primary">
              <MetricCounter
                value={m.value}
                prefix={m.prefix ?? ""}
                suffix={m.suffix}
              />
            </span>
            <span className="text-sm font-medium">{m.label}</span>
            <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
              {m.sublabel}
            </span>
          </div>
        ))}
      </div>
    </FadeIn>
  );
}
