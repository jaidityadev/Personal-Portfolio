import type { ProjectVisualKind } from "@/content/portfolio";
import { cn } from "@/lib/utils";

/**
 * One illustration per project. All values are seeded so SSR and client
 * markup match. Motion is hover-only (motion-safe) plus `.viz-flow`, which
 * styles.css switches off under prefers-reduced-motion.
 * Canvas: viewBox 0 0 400 260 — fits the 16:10 card and the 16:8 banner.
 */

/** Deterministic PRNG so SSR and client render identical SVGs. */
function seeded(seed: number) {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const r1 = (n: number) => Math.round(n * 10) / 10;

const MONO = "fill-muted-foreground font-mono";

/* 1 — Agentic Tax Assistant & MCP Server: an agent routing to five tools through an MCP gateway. */
function AgentRouting() {
  const agent = { x: 200, y: 74 };
  const lift = [0, 14, 20, 14, 0];
  const tools = [62, 131, 200, 269, 338].map((x, i) => ({ x, y: 136 - lift[i]! }));
  const active = 3;
  const bandTop = 166;
  const bandBottom = 180;
  const blockY = 196;
  const t = tools[active]!;
  return (
    <>
      <text x="200" y="22" textAnchor="middle" className={MONO} fontSize="9">
        request
      </text>
      <line x1="200" x2="200" y1="28" y2="54" strokeWidth="1.5" className="stroke-primary" />

      {tools.map((tool, i) => (
        <line
          key={`s${i}`}
          x1={agent.x}
          y1={agent.y}
          x2={tool.x}
          y2={tool.y}
          strokeWidth={i === active ? 1.5 : 1}
          className={i === active ? "stroke-primary" : "stroke-foreground/25"}
        />
      ))}
      <line
        x1={agent.x}
        y1={agent.y}
        x2={t.x}
        y2={t.y}
        strokeWidth="1.5"
        className="viz-flow stroke-primary-foreground/70"
      />

      <circle cx={agent.x} cy={agent.y} r="22" fill="none" strokeDasharray="2 4" className="stroke-primary/50" />
      <circle cx={agent.x} cy={agent.y} r="13" className="fill-primary" />
      <text x={agent.x - 30} y={agent.y + 3} textAnchor="end" className={MONO} fontSize="9">
        agent
      </text>

      {tools.map((tool, i) => {
        const on = i === active;
        return (
          <g key={`t${i}`} className={cn(on && "motion-safe:transition-transform motion-safe:duration-700 motion-safe:group-hover:-translate-y-0.5")}>
            <line
              x1={tool.x}
              x2={tool.x}
              y1={tool.y + 9}
              y2={bandTop}
              strokeDasharray={on ? undefined : "2 3"}
              strokeWidth={on ? 1.5 : 1}
              className={on ? "stroke-primary" : "stroke-foreground/20"}
            />
            <rect
              x={tool.x - 15}
              y={tool.y - 9}
              width="30"
              height="18"
              rx="4"
              className={on ? "fill-card stroke-primary" : "fill-card stroke-foreground/30"}
            />
            <text
              x={tool.x}
              y={tool.y + 3}
              textAnchor="middle"
              className={cn("font-mono", on ? "fill-primary" : "fill-muted-foreground")}
              fontSize="8"
            >
              t{i + 1}
            </text>
          </g>
        );
      })}

      {/* MCP gateway band */}
      <rect x="24" y={bandTop} width="352" height={bandBottom - bandTop} className="fill-primary/8" />
      <line x1="24" x2="376" y1={bandTop} y2={bandTop} className="stroke-primary/50" />
      <line x1="24" x2="376" y1={bandBottom} y2={bandBottom} className="stroke-primary/50" />
      <text x="28" y={bandTop + 10} className="fill-primary font-mono" fontSize="8">
        mcp
      </text>
      {tools.map((tool, i) => (
        <rect
          key={`a${i}`}
          x={tool.x - 3}
          y={bandTop + 4}
          width="6"
          height="6"
          rx="1"
          className={i === active ? "fill-primary" : "fill-foreground/25"}
        />
      ))}

      {/* Enterprise systems */}
      {tools.map((tool, i) => {
        const on = i === active;
        return (
          <g key={`b${i}`}>
            <line
              x1={tool.x}
              x2={tool.x}
              y1={bandBottom}
              y2={blockY}
              strokeWidth={on ? 1.5 : 1}
              className={on ? "stroke-primary" : "stroke-foreground/15"}
            />
            <rect
              x={tool.x - 26}
              y={blockY}
              width="52"
              height="30"
              rx="3"
              className={on ? "fill-primary/10 stroke-primary" : "fill-foreground/5 stroke-foreground/25"}
            />
            <line x1={tool.x - 18} x2={tool.x + 12} y1={blockY + 11} y2={blockY + 11} className="stroke-foreground/25" />
            <line x1={tool.x - 18} x2={tool.x + 4} y1={blockY + 19} y2={blockY + 19} className="stroke-foreground/25" />
          </g>
        );
      })}
      <line x1={t.x} x2={t.x} y1={t.y + 9} y2={blockY} strokeWidth="1.5" className="viz-flow stroke-card" />
      <text x="376" y="244" textAnchor="end" className={MONO} fontSize="9">
        enterprise systems
      </text>
    </>
  );
}

/* 2 — Tax Document Intelligence: a noisy stream of documents sorted into orderly lanes. */
function DocumentSorting() {
  const rand = seeded(17);
  const lanes = [
    { label: "class_a", y: 60, dot: "fill-primary" },
    { label: "class_b", y: 130, dot: "fill-foreground/65" },
    { label: "class_c", y: 200, dot: "fill-card stroke-foreground/55" },
  ];
  const incoming = Array.from({ length: 30 }, () => ({
    x: r1(20 + rand() * 148),
    y: r1(26 + rand() * 192),
    rot: r1((rand() - 0.5) * 44),
    lane: Math.floor(rand() * 3),
  }));
  const flows = lanes.flatMap((l, li) =>
    [0, 1, 2].map((k) => {
      const y0 = r1(40 + rand() * 180);
      return { d: `M178,${y0} C206,${y0} 202,${l.y} 222,${l.y}`, key: `${li}-${k}` };
    }),
  );
  return (
    <>
      {flows.map((f) => (
        <path key={f.key} d={f.d} fill="none" className="stroke-foreground/15" />
      ))}
      {incoming.map((d, i) => (
        <g key={i} className="motion-safe:transition-transform motion-safe:duration-700 motion-safe:group-hover:translate-x-1">
          <g transform={`rotate(${d.rot} ${d.x + 9} ${d.y + 12})`}>
            <rect x={d.x} y={d.y} width="18" height="24" rx="2.5" className="fill-card stroke-foreground/30" />
            <line x1={d.x + 4} x2={d.x + 14} y1={d.y + 8} y2={d.y + 8} className="stroke-foreground/20" />
            <line x1={d.x + 4} x2={d.x + 11} y1={d.y + 13} y2={d.y + 13} className="stroke-foreground/20" />
            <circle cx={d.x + 16} cy={d.y + 2} r="2.6" className={lanes[d.lane]!.dot} />
          </g>
        </g>
      ))}

      <path
        d="M198,18 C216,88 182,168 204,244"
        fill="none"
        strokeDasharray="3 4"
        strokeWidth="1.2"
        className="stroke-primary/60"
      />

      {lanes.map((l) => (
        <g key={l.label}>
          <text x="226" y={l.y - 18} className={MONO} fontSize="8">
            {l.label}
          </text>
          <line x1="226" x2="376" y1={l.y + 14} y2={l.y + 14} className="stroke-foreground/15" />
          {Array.from({ length: 7 }, (_, k) => (
            <g key={k}>
              <rect
                x={226 + k * 21}
                y={l.y - 11}
                width="16"
                height="22"
                rx="2"
                className="fill-card stroke-foreground/30"
              />
              <line x1={230 + k * 21} x2={238 + k * 21} y1={l.y - 3} y2={l.y - 3} className="stroke-foreground/20" />
              <circle cx={240 + k * 21} cy={l.y - 9} r="2.4" className={l.dot} />
            </g>
          ))}
        </g>
      ))}
    </>
  );
}

/* 3 — Foliyo 2.0: a typed query lighting up matching event tiles across attendee and organizer views. */
function EventGrid() {
  const rand = seeded(41);
  const cols = 6;
  const w = 46;
  const colX = (c: number) => 56 + c * 54;
  const rows = [64, 100];
  const th = 30;
  const orgY = 176;
  const orgH = 44;
  const matches = [
    { r: 0, c: 1 },
    { r: 0, c: 4 },
    { r: 1, c: 2 },
  ];
  const isMatch = (r: number, c: number) => matches.some((m) => m.r === r && m.c === c);
  const matchedCols = new Set(matches.map((m) => m.c));
  const attendee = rows.flatMap((y, r) =>
    Array.from({ length: cols }, (_, c) => ({ r, c, x: colX(c), y, tw: r1(18 + rand() * 18) })),
  );
  const organizer = Array.from({ length: cols }, (_, c) => ({ c, x: colX(c), fill: r1(8 + rand() * 26) }));
  const cx = (c: number) => colX(c) + w / 2;
  const qx = 100;
  return (
    <>
      {/* connectors, drawn under the tiles */}
      <path
        d={`M${qx},40 V52 H${cx(4)}`}
        fill="none"
        strokeWidth="1.2"
        className="stroke-primary"
      />
      <path d={`M${cx(1)},52 V64 M${cx(4)},52 V64`} fill="none" strokeWidth="1.2" className="stroke-primary" />
      <path
        d={`M${colX(2) - 4},52 V97 H${cx(2)} V100`}
        fill="none"
        strokeWidth="1.2"
        className="stroke-primary"
      />
      <path d={`M${qx},40 V52 H${cx(4)}`} fill="none" strokeWidth="1.2" className="viz-flow stroke-card" />
      {[...matchedCols].map((c) => (
        <line key={c} x1={cx(c)} x2={cx(c)} y1="130" y2={orgY} strokeDasharray="1.5 3" className="stroke-primary/50" />
      ))}

      {/* query */}
      <rect x="56" y="14" width="316" height="26" rx="13" className="fill-card stroke-foreground/25" />
      <text x="70" y="31" className="fill-primary font-mono" fontSize="10">
        ›
      </text>
      <text x="82" y="30.5" className="fill-foreground/80 font-mono" fontSize="9">
        workshops near me this weekend
      </text>
      <rect x="248" y="21" width="1.4" height="12" className="fill-primary" />

      <text x="40" y="97" transform="rotate(-90 40 97)" textAnchor="middle" className={MONO} fontSize="8">
        attendee
      </text>
      <text x="40" y="198" transform="rotate(-90 40 198)" textAnchor="middle" className={MONO} fontSize="8">
        organizer
      </text>

      {attendee.map((t) => {
        const on = isMatch(t.r, t.c);
        return (
          <g
            key={`${t.r}-${t.c}`}
            className={cn(on && "motion-safe:transition-transform motion-safe:duration-500 motion-safe:group-hover:-translate-y-0.5")}
          >
            <rect
              x={t.x}
              y={t.y}
              width={w}
              height={th}
              rx="4"
              className={on ? "fill-card stroke-primary" : "fill-card stroke-foreground/20"}
            />
            {on ? <rect x={t.x} y={t.y} width={w} height={th} rx="4" className="fill-primary/10" /> : null}
            <line x1={t.x + 6} x2={t.x + 6 + t.tw} y1={t.y + 10} y2={t.y + 10} className={on ? "stroke-primary" : "stroke-foreground/25"} />
            <line x1={t.x + 6} x2={t.x + 20} y1={t.y + 18} y2={t.y + 18} className="stroke-foreground/15" />
            <circle cx={t.x + w - 7} cy={t.y + th - 7} r="2" className={on ? "fill-primary" : "fill-foreground/20"} />
          </g>
        );
      })}

      <line x1="56" x2="372" y1="153" y2="153" strokeDasharray="2 4" className="stroke-foreground/20" />
      <text x="372" y="147" textAnchor="end" className="fill-primary font-mono" fontSize="8">
        3 matches
      </text>

      {organizer.map((o) => {
        const on = matchedCols.has(o.c);
        return (
          <g key={o.c}>
            <rect
              x={o.x}
              y={orgY}
              width={w}
              height={orgH}
              rx="4"
              className={on ? "fill-card stroke-primary/70" : "fill-foreground/5 stroke-foreground/20"}
            />
            <line x1={o.x + 6} x2={o.x + 30} y1={orgY + 11} y2={orgY + 11} className="stroke-foreground/25" />
            <line x1={o.x + 6} x2={o.x + 18} y1={orgY + 18} y2={orgY + 18} className="stroke-foreground/15" />
            <rect x={o.x + 6} y={orgY + 30} width="34" height="4" rx="2" className="fill-foreground/10" />
            <rect x={o.x + 6} y={orgY + 30} width={o.fill} height="4" rx="2" className={on ? "fill-primary" : "fill-foreground/35"} />
          </g>
        );
      })}
    </>
  );
}

/* 4 — Disease Outbreak Forecasting: four models merging into one ensemble that forecasts past "today". */
function EnsembleForecast() {
  const rand = seeded(29);
  const x0 = 30;
  const today = 270;
  const x1 = 370;
  const xs = Array.from({ length: (x1 - x0) / 4 + 1 }, (_, i) => x0 + i * 4);
  const truth = (x: number) => {
    const s = (1 - Math.cos((2 * Math.PI * (x - x0)) / 80)) / 2;
    return 200 - 118 * Math.pow(s, 2.6) - (x - x0) * 0.03;
  };
  const models = [0, 1, 2, 3].map((k) => {
    const amp = 10 + k * 3;
    const phase = k * 1.7;
    const sign = k % 2 === 0 ? 1 : -1;
    return xs
      .filter((x) => x <= today)
      .map((x) => {
        const decay = 1 - (0.85 * (x - x0)) / (today - x0);
        const y = truth(x) + sign * amp * Math.sin(x / (14 + k * 4) + phase) * decay + (rand() - 0.5) * 3;
        return `${x},${r1(y)}`;
      })
      .join(" ");
  });
  const ens = xs.map((x) => `${x},${r1(truth(x))}`).join(" ");
  const future = xs.filter((x) => x >= today);
  const spread = (x: number) => 5 + (x - today) * 0.32;
  const band = [
    ...future.map((x) => `${x},${r1(truth(x) - spread(x))}`),
    ...[...future].reverse().map((x) => `${x},${r1(truth(x) + spread(x))}`),
  ].join(" ");
  const observed = xs.filter((x, i) => x < today && i % 2 === 0).map((x) => ({ x, y: r1(truth(x) + (rand() - 0.5) * 10) }));
  const legend = ["arima", "nnar", "cart", "ctree"];
  const dashes = [undefined, "4 3", "1.5 2.5", "6 2 1.5 2"];
  return (
    <>
      <polygon points={band} className="fill-primary/12" />
      {observed.map((p) => (
        <circle key={p.x} cx={p.x} cy={p.y} r="1.6" className="fill-foreground/30" />
      ))}
      {models.map((pts, k) => (
        <polyline
          key={k}
          points={pts}
          fill="none"
          strokeDasharray={dashes[k]}
          className="stroke-foreground/35"
        />
      ))}
      <polyline points={ens} fill="none" strokeWidth="2.2" strokeLinejoin="round" className="stroke-primary" />

      <line x1={today} x2={today} y1="40" y2="226" strokeDasharray="3 4" className="stroke-foreground/45" />
      <text x={today + 5} y="48" className="fill-foreground font-mono" fontSize="9">
        today
      </text>
      <text x={x1} y="72" textAnchor="end" className="fill-primary font-mono" fontSize="8">
        forecast
      </text>
      <line x1={x0} x2={x1} y1="226" y2="226" className="stroke-foreground/30" />

      {legend.map((l, k) => (
        <g key={l}>
          <line x1={x0 + k * 52} x2={x0 + k * 52 + 12} y1="22" y2="22" strokeDasharray={dashes[k]} className="stroke-foreground/50" />
          <text x={x0 + k * 52 + 16} y="25" className={MONO} fontSize="8">
            {l}
          </text>
        </g>
      ))}
      <line x1={x0 + 214} x2={x0 + 226} y1="22" y2="22" strokeWidth="2.2" className="stroke-primary" />
      <text x={x0 + 230} y="25" className="fill-primary font-mono" fontSize="8">
        ensemble
      </text>
      <text x={x0} y="244" className={MONO} fontSize="9">
        weeks →
      </text>
    </>
  );
}

/* 5 — Health TrueInfo: a phone seeding messages across three connected countries; hesitancy trending down. */
function MultilingualOutreach() {
  const nodes = [
    { id: "CA", x: 236, y: 64, word: "vaccine", wx: 236, wy: 34 },
    { id: "IN", x: 334, y: 100, word: "टीका", wx: 334, wy: 68 },
    { id: "BO", x: 222, y: 180, word: "vacuna", wx: 222, wy: 220 },
  ];
  const [ca, ind, bo] = nodes as [(typeof nodes)[0], (typeof nodes)[0], (typeof nodes)[0]];
  const trend = [196, 199, 203, 205, 210, 214, 219];
  return (
    <>
      {/* phone */}
      <rect x="40" y="40" width="80" height="178" rx="13" className="fill-card stroke-foreground/40" />
      <rect x="68" y="47" width="24" height="4" rx="2" className="fill-foreground/20" />
      <rect x="66" y="74" width="46" height="18" rx="9" className="fill-primary" />
      <text x="89" y="86" textAnchor="middle" className="fill-primary-foreground font-mono" fontSize="8">
        vaccine
      </text>
      <rect x="48" y="100" width="46" height="18" rx="9" className="fill-foreground/10" />
      <text x="71" y="112" textAnchor="middle" className="fill-foreground font-mono" fontSize="8">
        vacuna
      </text>
      <rect x="66" y="126" width="46" height="18" rx="9" className="fill-foreground/10" />
      <text x="89" y="138.5" textAnchor="middle" className="fill-foreground" fontSize="9">
        टीका
      </text>
      <line x1="50" x2="96" y1="160" y2="160" className="stroke-foreground/20" />
      <line x1="50" x2="84" y1="168" y2="168" className="stroke-foreground/20" />
      <rect x="66" y="204" width="28" height="3" rx="1.5" className="fill-foreground/25" />

      {/* spread */}
      {nodes.map((n) => (
        <path
          key={`p${n.id}`}
          d={`M120,129 C170,129 ${n.x - 40},${n.y} ${n.x},${n.y}`}
          fill="none"
          strokeDasharray="2 4"
          className="stroke-foreground/30"
        />
      ))}
      <path
        d={`M${ca.x},${ca.y} Q${ind.x - 20},${ca.y - 4} ${ind.x},${ind.y} Q${ind.x - 30},${bo.y - 10} ${bo.x},${bo.y} Q${bo.x - 26},${ca.y + 50} ${ca.x},${ca.y}`}
        fill="none"
        strokeWidth="1.3"
        className="stroke-primary/60"
      />
      <path
        d={`M${ca.x},${ca.y} Q${ind.x - 20},${ca.y - 4} ${ind.x},${ind.y} Q${ind.x - 30},${bo.y - 10} ${bo.x},${bo.y} Q${bo.x - 26},${ca.y + 50} ${ca.x},${ca.y}`}
        fill="none"
        strokeWidth="1.3"
        className="viz-flow stroke-card"
      />

      {nodes.map((n) => (
        <g key={n.id}>
          <circle cx={n.x} cy={n.y} r="24" fill="none" className="stroke-primary/12" />
          <circle
            cx={n.x}
            cy={n.y}
            r="15"
            fill="none"
            className="stroke-primary/30 motion-safe:transition-transform motion-safe:duration-700 motion-safe:group-hover:scale-110"
            style={{ transformOrigin: `${n.x}px ${n.y}px` }}
          />
          <circle cx={n.x} cy={n.y} r="5" className="fill-primary" />
          <text x={n.x + 9} y={n.y + 3} className="fill-foreground font-mono" fontSize="8">
            {n.id}
          </text>
          <text x={n.wx} y={n.wy} textAnchor="middle" className="fill-muted-foreground" fontSize="9">
            {n.word}
          </text>
        </g>
      ))}

      {/* hesitancy trend */}
      <text x="292" y="180" className={MONO} fontSize="8">
        hesitancy
      </text>
      <line x1="292" x2="372" y1="226" y2="226" className="stroke-foreground/30" />
      <polyline
        points={trend.map((y, i) => `${292 + i * 13},${y}`).join(" ")}
        fill="none"
        strokeWidth="1.5"
        className="stroke-foreground/70"
      />
      {trend.map((y, i) => (
        <circle key={i} cx={292 + i * 13} cy={y} r="1.8" className={i === trend.length - 1 ? "fill-primary" : "fill-foreground/60"} />
      ))}
    </>
  );
}

/* 6 — Tax Anomaly Detection: a learned quarterly band with a few points that break it. */
function AnomalyBand() {
  const rand = seeded(11);
  const n = 32;
  const x0 = 30;
  const x1 = 370;
  const step = (x1 - x0) / (n - 1);
  const season = [-4, 20, -16, 2];
  const width = 15;
  const anomalies: Record<number, number> = { 9: -44, 19: 42, 27: -40 };
  const expected = Array.from({ length: n }, (_, i) => 140 - i * 0.9 + season[i % 4]!);
  const pts = expected.map((y, i) => {
    const off = anomalies[i];
    return [r1(x0 + i * step), r1(off !== undefined ? y + off : y + (rand() - 0.5) * 12)] as const;
  });
  const upper = expected.map((y, i) => `${r1(x0 + i * step)},${r1(y - width)}`);
  const lower = expected.map((y, i) => `${r1(x0 + i * step)},${r1(y + width)}`).reverse();
  return (
    <>
      <polygon points={[...upper, ...lower].join(" ")} className="fill-primary/10" />
      <polyline points={upper.join(" ")} fill="none" className="stroke-primary/35" />
      <polyline points={[...lower].reverse().join(" ")} fill="none" className="stroke-primary/35" />
      <polyline
        points={pts.map((p) => p.join(",")).join(" ")}
        fill="none"
        strokeWidth="1.3"
        strokeLinejoin="round"
        className="stroke-foreground/55"
      />
      {pts.map(([x, y], i) => {
        if (anomalies[i] === undefined) return <circle key={i} cx={x} cy={y} r="2" className="fill-foreground/70" />;
        const edge = r1(expected[i]! + (anomalies[i]! < 0 ? -width : width));
        return (
          <g key={i}>
            <line x1={x} x2={x} y1={edge} y2={y} strokeDasharray="2 2" className="stroke-primary/70" />
            <circle
              cx={x}
              cy={y}
              r="10"
              fill="none"
              strokeDasharray="3 3"
              className="stroke-primary motion-safe:transition-transform motion-safe:duration-700 motion-safe:group-hover:scale-110"
              style={{ transformOrigin: `${x}px ${y}px` }}
            />
            <circle cx={x} cy={y} r="4" className="fill-primary" />
          </g>
        );
      })}
      <text x={pts[19]![0]} y={pts[19]![1] + 24} textAnchor="middle" className="fill-primary font-mono" fontSize="9">
        flagged
      </text>
      <line x1={x0} x2={x1} y1="226" y2="226" className="stroke-foreground/30" />
      {pts.map(([x], i) => (
        <line key={i} x1={x} x2={x} y1="226" y2={i % 4 === 0 ? 233 : 229} className="stroke-foreground/30" />
      ))}
      <text x={x1} y="244" textAnchor="end" className={MONO} fontSize="9">
        quarters →
      </text>
      <text x={x0} y="30" className={MONO} fontSize="9">
        expected range, learned from history
      </text>
    </>
  );
}

/* 7 — Understanding Youth Mental Health: three factors feeding a logistic curve. */
function LogisticFactors() {
  const rand = seeded(23);
  const px0 = 152;
  const px1 = 374;
  const mid = 263;
  const sig = (x: number) => 1 / (1 + Math.exp(-(x - mid) / 24));
  const curve = Array.from({ length: 45 }, (_, i) => {
    const x = px0 + 4 + i * 5;
    return `${i === 0 ? "M" : "L"}${x},${r1(206 - sig(x) * 152)}`;
  }).join(" ");
  const dots = Array.from({ length: 40 }, () => {
    const x = px0 + 8 + rand() * (px1 - px0 - 12);
    const hit = rand() < sig(x);
    return { x: r1(x), y: r1(hit ? 44 + rand() * 10 : 200 + rand() * 10), hit };
  });
  const inputs = [
    { label: "sleep", y: 92 },
    { label: "substance", y: 130 },
    { label: "social", y: 168 },
  ];
  const node = { x: 124, y: 130 };
  return (
    <>
      {inputs.map((inp) => (
        <g key={inp.label}>
          <path
            d={`M90,${inp.y} C108,${inp.y} 104,${node.y} ${node.x - 9},${node.y}`}
            fill="none"
            className="stroke-foreground/30"
          />
          <circle cx="30" cy={inp.y} r="3.5" className="fill-card stroke-foreground/55" />
          <text x="39" y={inp.y + 3} className={MONO} fontSize="8">
            {inp.label}
          </text>
        </g>
      ))}
      <circle cx={node.x} cy={node.y} r="9" className="fill-card stroke-primary" />
      <text x={node.x} y={node.y + 3.5} textAnchor="middle" className="fill-primary font-mono" fontSize="9">
        Σ
      </text>
      <line x1={node.x + 9} x2={px0 - 4} y1={node.y} y2={node.y} className="stroke-primary/60" />

      <line x1={px0} x2={px1} y1="218" y2="218" className="stroke-foreground/30" />
      <line x1={px0} x2={px0} y1="36" y2="218" className="stroke-foreground/30" />
      <line x1={px0} x2={px1} y1="130" y2="130" strokeDasharray="2 4" className="stroke-foreground/15" />
      {dots.map((d, i) => (
        <circle key={i} cx={d.x} cy={d.y} r="2.8" className={d.hit ? "fill-primary/70" : "fill-card stroke-foreground/45"} />
      ))}
      <path
        d={curve}
        fill="none"
        strokeWidth="2"
        className="stroke-foreground motion-safe:transition-opacity motion-safe:duration-500 motion-safe:group-hover:opacity-80"
      />
      <text x={px0 + 6} y="30" className={MONO} fontSize="9">
        P(outcome)
      </text>
      <text x={px0 - 10} y="52" className={MONO} fontSize="9">
        1
      </text>
      <text x={px0 - 10} y="210" className={MONO} fontSize="9">
        0
      </text>
    </>
  );
}

/* 8 — Humans of South Asia in Toronto: portrait tiles over a thin Toronto skyline. */
function StoryMosaic() {
  const rand = seeded(5);
  const top = 18;
  const gap = 8;
  const columns: { x: number; w: number; hs: number[] }[] = [
    { x: 30, w: 44, hs: [64, 72] },
    { x: 82, w: 58, hs: [144] },
    { x: 148, w: 40, hs: [46, 90] },
    { x: 196, w: 60, hs: [86, 50] },
    { x: 264, w: 44, hs: [144] },
    { x: 316, w: 54, hs: [60, 76] },
  ];
  const highlighted = new Set(["1-0", "3-1", "5-0"]);
  const tones = ["fill-foreground/8", "fill-foreground/14", "fill-foreground/20", "fill-foreground/11"];
  const tiles = columns.flatMap((col, ci) => {
    let y = top;
    return col.hs.map((h, ti) => {
      const tile = { key: `${ci}-${ti}`, x: col.x, y, w: col.w, h, tone: tones[Math.floor(rand() * tones.length)]! };
      y += h + gap;
      return tile;
    });
  });

  const base = 238;
  let sx = 24;
  let sky = `M${sx},${base}`;
  while (sx < 372) {
    if (sx >= 282 && sx < 344) {
      sky += ` H344`;
      sx = 344;
      continue;
    }
    const bw = Math.round(6 + rand() * 14);
    const bh = Math.round(5 + rand() * 24);
    const end = Math.min(sx + bw, sx < 282 ? 282 : 376);
    sky += ` V${base - bh} H${end} V${base}`;
    sx = end;
  }

  return (
    <>
      {tiles.map((t) => {
        const on = highlighted.has(t.key);
        const r = t.w / 2;
        const shape = `M${t.x},${t.y + t.h} L${t.x},${t.y + r} A${r},${r} 0 0 1 ${t.x + t.w},${t.y + r} L${t.x + t.w},${t.y + t.h} Z`;
        const hr = r1(t.w * 0.16);
        const hcy = r1(t.y + Math.max(r + 2, t.h * 0.45));
        const sh = r1(hcy + hr * 1.6);
        return (
          <g
            key={t.key}
            className={cn(on && "motion-safe:transition-transform motion-safe:duration-700 motion-safe:group-hover:-translate-y-0.5")}
          >
            {on ? (
              <path
                d={`M${t.x - 3},${t.y + t.h + 3} L${t.x - 3},${t.y + r} A${r + 3},${r + 3} 0 0 1 ${t.x + t.w + 3},${t.y + r} L${t.x + t.w + 3},${t.y + t.h + 3} Z`}
                fill="none"
                className="stroke-primary/40"
              />
            ) : null}
            <path d={shape} className={on ? "fill-primary" : t.tone} />
            <circle cx={t.x + r} cy={hcy} r={hr} className={on ? "fill-primary-foreground/30" : "fill-foreground/10"} />
            <path
              d={`M${r1(t.x + t.w * 0.2)},${t.y + t.h} C${r1(t.x + t.w * 0.2)},${sh} ${r1(t.x + t.w * 0.8)},${sh} ${r1(t.x + t.w * 0.8)},${t.y + t.h} Z`}
              className={on ? "fill-primary-foreground/30" : "fill-foreground/10"}
            />
          </g>
        );
      })}

      {/* Toronto skyline: blocks, CN Tower, dome */}
      <path d={sky} fill="none" strokeLinejoin="round" className="stroke-foreground/45" />
      <path d="M300,238 V204 M304,238 V204" className="stroke-foreground/45" />
      <ellipse cx="302" cy="201" rx="7" ry="3.5" className="fill-card stroke-foreground/50" />
      <path d="M302,197 V184 M302,184 V174" className="stroke-foreground/50" />
      <circle cx="302" cy="186" r="1.6" className="fill-primary" />
      <path d="M314,238 A16,12 0 0 1 340,238" fill="none" className="stroke-foreground/45" />
      <line x1="24" x2="376" y1={base} y2={base} className="stroke-foreground/30" />
    </>
  );
}

/* Data Analysis Activities: histogram with a fitted curve and the sample mean. */
function Distribution() {
  const rand = seeded(9);
  const bins = 18;
  const bw = 16;
  const gap = 2;
  const x0 = (400 - (bins * bw + (bins - 1) * gap)) / 2;
  const pdf = (z: number) => Math.exp(-(z * z) / 2);
  const bars = Array.from({ length: bins }, (_, i) => {
    const z = ((i + 0.5) / bins) * 6 - 3;
    const hgt = Math.max(4, pdf(z) * 150 + (rand() - 0.5) * 22);
    return { x: x0 + i * (bw + gap), h: r1(hgt), center: Math.abs(z) < 1 };
  });
  const curve = Array.from({ length: 61 }, (_, i) => {
    const z = (i / 60) * 6 - 3;
    const x = x0 + (i / 60) * (bins * (bw + gap) - gap);
    return `${i === 0 ? "M" : "L"}${r1(x)},${r1(220 - pdf(z) * 150)}`;
  }).join(" ");
  return (
    <>
      {bars.map((b, i) => (
        <rect
          key={i}
          x={b.x}
          y={220 - b.h}
          width={bw}
          height={b.h}
          rx="2"
          className={b.center ? "fill-foreground/22" : "fill-foreground/10"}
        />
      ))}
      <path d={curve} fill="none" strokeWidth="2" className="stroke-primary" />
      <line x1="200" x2="200" y1="52" y2="220" strokeDasharray="3 4" className="stroke-primary/70" />
      <text x="206" y="58" className="fill-primary font-serif italic" fontSize="16">
        x̄
      </text>
      <line x1={x0 - 6} x2={400 - x0 + 6} y1="220" y2="220" className="stroke-foreground/30" />
    </>
  );
}

export const PROJECT_VISUALS: Record<ProjectVisualKind, () => React.JSX.Element> = {
  "agent-routing": AgentRouting,
  "document-sorting": DocumentSorting,
  "event-grid": EventGrid,
  "ensemble-forecast": EnsembleForecast,
  "multilingual-outreach": MultilingualOutreach,
  "anomaly-band": AnomalyBand,
  "logistic-factors": LogisticFactors,
  "story-mosaic": StoryMosaic,
  distribution: Distribution,
};

export function ProjectVisual({ kind, className }: { kind: ProjectVisualKind; className?: string }) {
  const Visual = PROJECT_VISUALS[kind];
  return (
    <div className={cn("dot-grid relative overflow-hidden bg-surface", className)}>
      <svg
        viewBox="0 0 400 260"
        className="absolute inset-0 size-full"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden
        strokeWidth="1"
      >
        <Visual />
      </svg>
    </div>
  );
}
