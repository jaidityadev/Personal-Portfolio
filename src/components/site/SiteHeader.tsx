import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { profile } from "@/content/portfolio";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";

type NavItem = { id: string; label: string; to?: "/" };
const NAV: NavItem[] = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Work" },
  { id: "research", label: "Research" },
  { id: "toolbox", label: "Toolbox" },
  { id: "contact", label: "Contact" },
];

function NavLink({ item, className, onClick, children, current }: { item: NavItem; className: string; onClick?: () => void; children: React.ReactNode; current?: boolean }) {
  return item.to ? (
    <Link to={item.to} className={className} onClick={onClick} activeProps={{ "aria-current": "page" }}>
      {children}
    </Link>
  ) : (
    <Link to="/" hash={item.id} className={className} onClick={onClick} aria-current={current ? "location" : undefined}>
      {children}
    </Link>
  );
}

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the section currently in view (home page only).
  useEffect(() => {
    if (pathname !== "/") {
      setActive(null);
      return;
    }
    const els = NAV.filter((n) => !n.to).map((n) => document.getElementById(n.id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color] duration-500",
        open
          ? "border-hairline bg-background"
          : scrolled
            ? "border-hairline bg-background/90 backdrop-blur-md"
            : "border-transparent bg-transparent",
      )}
    >
      <div className="container-page flex h-16 items-center justify-between gap-6">
        <Link
          to="/"
          hash="top"
          className="group flex items-center gap-2.5 text-[0.95rem] font-medium tracking-tight text-foreground"
          aria-label={`${profile.name}, home`}
        >
          <span
            aria-hidden
            className="grid size-7 place-items-center rounded-full border border-foreground/80 font-serif text-[0.95rem] italic leading-none transition-colors group-hover:border-primary group-hover:text-primary"
          >
            J
          </span>
          {profile.name}
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-7">
            {NAV.map((item) => (
              <li key={item.id}>
                <NavLink
                  item={item}
                  current={active === item.id}
                  className={cn(
                    "link-underline text-sm transition-colors",
                    active === item.id || pathname === item.to ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => window.dispatchEvent(new Event("open-command-menu"))}
            className="hidden h-[2.375rem] items-center gap-2 rounded-full border border-border px-3 text-xs text-muted-foreground transition-colors hover:border-foreground hover:text-foreground lg:inline-flex"
            aria-label="Open command menu"
          >
            Jump to <kbd className="font-mono text-[0.7rem]">⌘K</kbd>
          </button>
          <ThemeToggle />
          <button
            type="button"
            className="icon-btn md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-4" strokeWidth={1.6} /> : <Menu className="size-4" strokeWidth={1.6} />}
          </button>
        </div>
      </div>

      {open ? (
        <nav id="mobile-nav" aria-label="Mobile" className="page-enter h-[calc(100svh-4rem)] overflow-y-auto border-t border-hairline bg-background md:hidden">
          <ul className="container-page flex flex-col py-4">
            {NAV.map((item, i) => (
              <li key={item.id}>
                <NavLink
                  item={item}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-4 border-b border-hairline py-4 last:border-none"
                >
                  <span className="eyebrow text-primary">0{i + 1}</span>
                  <span className="display text-3xl text-foreground">{item.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
