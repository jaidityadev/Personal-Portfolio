import { useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { links, projects } from "@/content/portfolio";

const SECTIONS = [
  { id: "top", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Selected work" },
  { id: "research", label: "Research" },
  { id: "toolbox", label: "Technical toolbox" },
  { id: "beyond", label: "Beyond the code" },
  { id: "contact", label: "Contact" },
];

export function CommandMenu() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((v) => !v);
      }
    };
    const onOpen = () => setOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener("open-command-menu", onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("open-command-menu", onOpen);
    };
  }, []);

  const go = (fn: () => void) => {
    setOpen(false);
    fn();
  };

  const external = [
    { label: "Email", href: links.email ? `mailto:${links.email}` : null },
    { label: "LinkedIn", href: links.linkedin },
    { label: "GitHub", href: links.github },
    { label: "Résumé", href: links.resume },
  ].filter((l): l is { label: string; href: string } => !!l.href);

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Jump to a section or project…" />
      <CommandList>
        <CommandEmpty>No matches.</CommandEmpty>
        <CommandGroup heading="Sections">
          {SECTIONS.map((s) => (
            <CommandItem key={s.id} onSelect={() => go(() => navigate({ to: "/", hash: s.id }))}>
              {s.label}
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandGroup heading="Projects">
          {projects.map((p) => (
            <CommandItem
              key={p.slug}
              value={`${p.title} ${p.category}`}
              onSelect={() => go(() => navigate({ to: "/projects/$slug", params: { slug: p.slug } }))}
            >
              {p.title}
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandGroup heading="Actions">
          <CommandItem
            onSelect={() =>
              go(() => {
                const dark = document.documentElement.classList.toggle("dark");
                try {
                  localStorage.setItem("theme", dark ? "dark" : "light");
                } catch {
                  /* ignore */
                }
              })
            }
          >
            Toggle dark mode
          </CommandItem>
          {external.map((l) => (
            <CommandItem key={l.label} onSelect={() => go(() => window.open(l.href, "_blank", "noopener"))}>
              Open {l.label}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
