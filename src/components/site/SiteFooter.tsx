import { Link } from "@tanstack/react-router";
import { ArrowUp } from "lucide-react";

import { footer, profile } from "@/content/portfolio";

export function SiteFooter() {
  return (
    <footer className="border-t border-hairline">
      <div className="container-page flex flex-col gap-4 py-10 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>{footer.copyright}</p>
        <div className="flex items-center gap-6">
          <span className="eyebrow">{profile.location}</span>
          <Link to="/" hash="top" className="link-underline inline-flex items-center gap-1.5 hover:text-foreground">
            Back to top <ArrowUp className="size-3.5" strokeWidth={1.6} aria-hidden />
          </Link>
        </div>
      </div>
    </footer>
  );
}
