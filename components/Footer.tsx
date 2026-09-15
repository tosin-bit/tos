import Link from "next/link";
import Logo from "@/components/Logo";
import { contact } from "@/lib/content";

const LINKS = [
  { href: "/about", label: "About" },
  { href: "/foundation", label: "The Foundation" },
  { href: "/journal", label: "Journal" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-brass/25 bg-indigo">
      {/* The cloth, barely there. Loud enough to notice on a second look. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "url(/brand/pattern-cloth-tile-brass.svg)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative mx-auto max-w-[1600px] px-gutter py-16">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          <div>
            <Link
              href="/"
              aria-label="Nenneh Cheyassin Secka-Kebe, home"
              className="group inline-flex items-center gap-4"
            >
              <Logo
                decorative
                className="h-12 w-12 shrink-0 text-brass transition-colors duration-500 ease-signature group-hover:text-ecru"
              />
              <span className="font-display text-xl uppercase tracking-caps text-ecru">
                Nenneh Cheyassin
                <br />
                Secka-Kebe
              </span>
            </Link>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-col gap-3">
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

          <div className="flex flex-col gap-3">
            <a
              href={`mailto:${contact.emails[0].address}`}
              className="font-body text-xs uppercase tracking-caps text-ecru/75 transition-colors duration-300 hover:text-brass"
            >
              {contact.emails[0].address}
            </a>
            <a
              href={contact.instagram}
              target="_blank"
              rel="noreferrer"
              className="font-body text-xs uppercase tracking-caps text-ecru/75 transition-colors duration-300 hover:text-brass"
            >
              {contact.instagramHandle}
            </a>
          </div>
        </div>

        <p className="mt-14 border-t border-brass/20 pt-6 font-body text-xs text-ecru/50">
          © {new Date().getFullYear()} Nenneh Cheyassin Secka-Kebe
        </p>
      </div>
    </footer>
  );
}
