import { Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Fragment, useRef, type CSSProperties } from "react";

import { TorontoClock } from "@/components/site/TorontoClock";
import { DataConstellation } from "@/components/site/DataConstellation";
import { hero } from "@/content/portfolio";

const d = (ms: number) => ({ "--hero-delay": `${ms}ms` }) as CSSProperties;

export function Hero() {
  const readoutRef = useRef<HTMLSpanElement>(null);

  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative flex min-h-[100svh] flex-col pt-28 md:pt-32"
    >
      <div className="container-page grid flex-1 items-center gap-14 pb-24 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-7">
          <p className="eyebrow hero-in" style={d(0)}>
            {hero.eyebrow[0]}
            <span className="mx-2 text-primary">/</span>
            {hero.eyebrow[1]}
          </p>

          <h1
            id="hero-title"
            className={`display mt-7 ${hero.headlineAnimation === "words" ? "" : "hero-in "} text-[clamp(3rem,7.4vw,6.4rem)] text-foreground`}
            style={d(90)}
          >
            {hero.headlineAnimation === "words" ? (
              <WordReveal />
            ) : (
              <>
                {hero.headline.before} <em className="text-primary">{hero.headline.emphasis}</em>{" "}
                {hero.headline.after}
              </>
            )}
          </h1>

          <p
            className="prose-body hero-in mt-8 max-w-xl text-lg text-muted-foreground"
            style={d(200)}
          >
            {hero.intro}
          </p>

          <div className="hero-in mt-10 flex flex-wrap items-center gap-3" style={d(300)}>
            <Link to="/" hash="work" className="btn-primary">
              Explore my work <ArrowDown className="size-4" strokeWidth={1.6} aria-hidden />
            </Link>
            <Link to="/" hash="contact" className="btn-secondary">
              Get in touch <ArrowRight className="size-4" strokeWidth={1.6} aria-hidden />
            </Link>
          </div>

          <p
            className="hero-in mt-10 inline-flex items-center gap-3 text-sm text-muted-foreground"
            style={d(400)}
          >
            <span aria-hidden className="live-dot size-2 rounded-full bg-primary" />
            {hero.status}
            <TorontoClock />
          </p>
        </div>

        <figure className="hero-in lg:col-span-5" style={d(250)}>
          <div className="dot-grid relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-card sm:aspect-square lg:aspect-[4/5]">
            <DataConstellation readoutRef={readoutRef} />
            <span aria-hidden className="eyebrow pointer-events-none absolute left-4 top-4">
              n = 3 clusters
            </span>
          </div>
          <figcaption className="eyebrow mt-3 flex items-center justify-between">
            <span>Fig. 01 · A feature space, drawn live</span>
            <span ref={readoutRef} aria-hidden className="tabular-nums">
              x 0.00 · y 0.00
            </span>
          </figcaption>
        </figure>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-6 hidden justify-center md:flex">
        <Link
          to="/"
          hash="about"
          className="pointer-events-auto flex flex-col items-center gap-3 text-muted-foreground hover:text-foreground"
          aria-label="Scroll to About"
        >
          <span className="eyebrow">Scroll</span>
          <span aria-hidden className="scroll-line block h-10 w-px bg-border" />
        </Link>
      </div>
    </section>
  );
}

function WordReveal() {
  const { before, emphasis, after } = hero.headline;
  const words = [
    ...before.split(" ").map((w) => ({ w, em: false })),
    { w: emphasis, em: true },
    ...after.split(" ").map((w) => ({ w, em: false })),
  ];
  return (
    <>
      {words.map(({ w, em }, i) => (
        <Fragment key={i}>
          <span className="word-mask">
            <span
              className="word-rise"
              style={{ "--word-delay": `${80 + i * 85}ms` } as CSSProperties}
            >
              {em ? <em className="text-primary">{w}</em> : w}
            </span>
          </span>{" "}
        </Fragment>
      ))}
    </>
  );
}
