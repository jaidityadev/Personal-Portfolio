import Link from "next/link";
import { FileText, Github, Linkedin, Mail } from "lucide-react";

const RESUME_URL =
  "https://drive.google.com/file/d/1oj0_6ZugZZDWkI9EHOY9jULrL5yAhaNC/view?usp=sharing";

const quickLinks = [
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

const socials = [
  { label: "GitHub", href: "https://github.com/jaidityadev", Icon: Github },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jaidityadev/",
    Icon: Linkedin,
  },
  { label: "Resume", href: RESUME_URL, Icon: FileText },
  { label: "Email", href: "mailto:jaidityadev1402@gmail.com", Icon: Mail },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-sunken py-14">
      <div className="container mx-auto grid gap-10 md:grid-cols-3">
        <div>
          <p className="font-display text-base font-semibold tracking-tight">
            Jaiditya Dev
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Data science, ML engineering, and GenAI. Toronto.
          </p>
          <p className="mt-4 font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
            © {year}
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Pages
          </h2>
          <ul className="mt-4 flex flex-col gap-2.5">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="pressable inline-block text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Connect
          </h2>
          <a
            href="mailto:jaidityadev1402@gmail.com"
            className="pressable mt-4 inline-block font-mono text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            jaidityadev1402@gmail.com
          </a>
          <div className="mt-4 flex gap-2">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={label}
                className="pressable rounded-lg border border-border p-2.5 text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
