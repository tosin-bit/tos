"use client";

import Link from "next/link";
import Logo from "@/components/Logo";

const LINKS = [
  { href: "/about", label: "About" },
  { href: "/foundation", label: "The Foundation" },
  { href: "/journal", label: "Journal" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-brass/30 bg-indigo/90">
      <nav className="mx-auto flex max-w-[1600px] flex-wrap items-center justify-between gap-x-6 gap-y-2 px-gutter py-4">
        <Link
          href="/"
          aria-label="Nenneh Cheyassin Secka-Kebe, home"
          className="group flex items-center gap-3 text-ecru transition-colors duration-300 hover:text-brass"
        >
          <Logo className="h-7 w-7 shrink-0 text-brass transition-colors duration-300 group-hover:text-ecru" />
          <span aria-hidden className="font-body text-xs uppercase tracking-caps">
            Nenneh Cheyassin Secka-Kebe
          </span>
        </Link>
        <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="font-body text-xs uppercase tracking-caps text-ecru/75 transition-colors duration-300 hover:text-brass"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
