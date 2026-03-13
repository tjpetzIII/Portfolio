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
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b-2"
      style={{ background: "var(--card)", borderColor: "var(--accent)" }}
    >
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link
          href={resolveHref("#about")}
          className="font-bold text-base"
          style={{ color: "var(--accent)", textDecoration: "none" }}
        >
          {profile.name}
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-6 text-sm items-center" style={{ listStyle: "none" }}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={resolveHref(link.href)}
                className="font-medium"
                style={{ color: "var(--accent)", textDecoration: "underline" }}
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
            className="text-sm"
            style={{ color: "var(--accent)" }}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? "[ close ]" : "[ menu ]"}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden border-t px-4 py-4"
          style={{ background: "var(--card)", borderColor: "var(--border)" }}
        >
          <ul className="flex flex-col gap-3 text-sm" style={{ listStyle: "none" }}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={resolveHref(link.href)}
                  style={{ color: "var(--accent)", textDecoration: "underline" }}
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
