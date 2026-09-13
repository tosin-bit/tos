"use client";

import Link from "next/link";

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
        <Link href="/" className="font-body text-sm text-ecru">
          Nenneh Cheyassin Secka-Kebe
        </Link>
        <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="font-body text-sm text-ecru/80 transition-colors duration-300 hover:text-brass"
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
