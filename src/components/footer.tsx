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
            <Link 
              href="https://github.com/jaiditya-dev" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link 
              href="https://linkedin.com/in/jaiditya-dev" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link 
              href="https://drive.google.com/file/d/1JKGh7w_7I2bzosiCpPXBWimTUPaRsUWr/view?usp=sharing" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Resume" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <FileText className="h-5 w-5" />
            </Link>
            <Link 
              href="mailto:jaiditya.dev@example.com" 
              aria-label="Email Contact"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
