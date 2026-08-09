import MetricCounter from "@/components/metric-counter";
import FadeIn from "@/components/animations/fade-in";

const metrics = [
  {
    value: 3,
    suffix: "M+",
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
    value: 4,
    suffix: "",
    label: "Peer-reviewed publications",
    sublabel: "Springer · CRC Press · UTJPH",
  },
  {
    value: 3,
    suffix: "+",
    label: "Years teaching ML & stats",
    sublabel: "UofT · LearnAI",
  },
];

/**
 * Figures set on hairlines rather than in boxes. Cards would make four
 * separate objects; rules make one table of evidence.
 */
export default function ProofBar() {
  return (
    <FadeIn delay={0.2}>
      <dl className="grid grid-cols-2 gap-x-8 gap-y-8 lg:grid-cols-4">
        {metrics.map((m) => (
          <div key={m.label} className="border-t border-foreground/15 pt-4">
            <dd className="font-mono text-3xl text-primary md:text-4xl">
              <MetricCounter value={m.value} suffix={m.suffix} />
            </dd>
            <dt className="mt-2 text-sm font-medium">{m.label}</dt>
            <p className="mt-1 font-mono text-[0.6875rem] uppercase tracking-wider text-muted-foreground">
              {m.sublabel}
            </p>
          </div>
        ))}
      </dl>
    </FadeIn>
  );
}
