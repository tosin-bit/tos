"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/foundation", label: "Foundation" },
  { href: "/writing", label: "Writing" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-brass/30 bg-indigo/70 backdrop-blur-[2px]">
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
                aria-current={pathname === link.href ? "page" : undefined}
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
