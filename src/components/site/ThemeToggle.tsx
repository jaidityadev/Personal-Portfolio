import { Moon, Sun } from "lucide-react";

/**
 * Theme is a class on <html>, set before hydration by the inline script in
 * __root.tsx. Icons swap purely via CSS, so server and client markup match.
 */
export function ThemeToggle() {
  const toggle = () => {
    const root = document.documentElement;
    const next = !root.classList.contains("dark");
    root.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      /* storage unavailable — theme still applies for this visit */
    }
  };

  return (
    <button type="button" onClick={toggle} className="icon-btn" aria-label="Toggle dark mode">
      <Moon className="size-4 dark:hidden" strokeWidth={1.6} aria-hidden />
      <Sun className="hidden size-4 dark:block" strokeWidth={1.6} aria-hidden />
    </button>
  );
}

/** Also strips the comment (and whitespace) Netlify's edge injects into <head>; React fails hydration (#418) on them. */
export const themeInitScript = `(function(){try{for(var n=document.head.firstChild;n;){var x=n.nextSibling;if(n.nodeType===8||n.nodeType===3)n.remove();n=x;}}catch(e){}try{var d=document.documentElement;d.classList.add('js');var t=localStorage.getItem('theme');var dark=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;if(dark)d.classList.add('dark');}catch(e){}})();`;
