"use client";

import { profile } from "@/lib/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#certifications", label: "Certifications" },
  { href: "#projects", label: "Projects" },
  { href: "#activities", label: "Activities" },
  { href: "/travel", label: "Travel" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  function resolveHref(href: string) {
    return href.startsWith("#") && !isHome ? `/${href}` : href;
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b"
      style={{ background: "color-mix(in srgb, var(--background) 80%, transparent)", borderColor: "var(--border)" }}>
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href={resolveHref("#about")}
          className="gradient-text font-black text-lg tracking-tight"
        >
          {profile.name}
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8 text-sm text-muted items-center">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={resolveHref(link.href)}
                className="hover:text-foreground transition-colors font-medium"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li><ThemeSwitcher /></li>
        </ul>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeSwitcher />
          <button
            className="text-muted hover:text-foreground"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
          {menuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-border bg-card px-6 py-4">
          <ul className="flex flex-col gap-4 text-sm text-muted">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={resolveHref(link.href)}
                  className="hover:text-accent-secondary transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
