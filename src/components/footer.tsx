"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, FileText, ExternalLink } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background py-8">
      <div className="container mx-auto grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="font-medium mb-2">Portfolio</h3>
          <p className="text-sm text-muted-foreground">
            © {year} Jaiditya Dev. All rights reserved.
          </p>
        </div>

        <div>
          <h3 className="font-medium mb-2">Quick Links</h3>
          <nav className="flex flex-col space-y-2">
            <Link
              href="/about"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Link
              href="/projects"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>

        <div>
          <h3 className="font-medium mb-2">Connect</h3>
          <div className="flex space-x-4">
            <Link href="https://github.com/" aria-label="GitHub" className="text-muted-foreground hover:text-foreground">
              <Github className="h-5 w-5" />
            </Link>
            <Link href="https://linkedin.com/in/" aria-label="LinkedIn" className="text-muted-foreground hover:text-foreground">
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link href="https://medium.com/" aria-label="Medium" className="text-muted-foreground hover:text-foreground">
              <ExternalLink className="h-5 w-5" />
            </Link>
            <Link href="https://orcid.org/" aria-label="ORCID" className="text-muted-foreground hover:text-foreground">
              <FileText className="h-5 w-5" />
            </Link>
            <Link href="mailto:jaiditya.dev@example.com" aria-label="Email" className="text-muted-foreground hover:text-foreground">
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
