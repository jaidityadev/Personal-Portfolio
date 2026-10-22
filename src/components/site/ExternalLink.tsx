import type { AnchorHTMLAttributes, ReactNode } from "react";

/** Anchor for off-site URLs: opens in a new tab safely. mailto:/tel:/same-site files stay in-tab. */
export function ExternalLink({
  href,
  children,
  ...rest
}: AnchorHTMLAttributes<HTMLAnchorElement> & { href: string; children: ReactNode }) {
  const offsite = /^https?:\/\//.test(href);
  return (
    <a href={href} {...(offsite ? { target: "_blank", rel: "noopener noreferrer" } : {})} {...rest}>
      {children}
      {offsite ? <span className="sr-only"> (opens in a new tab)</span> : null}
    </a>
  );
}
