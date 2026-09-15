import Link from "next/link";
import Section, { SectionLabel } from "@/components/Section";
import { featuredPress, outlets } from "@/lib/content";

export default function PressSection() {
  return (
    <Section id="press" className="bg-indigo">
      <SectionLabel>In the press</SectionLabel>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
        {featuredPress.map((item) => (
          <a
            key={item.href}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            data-cursor-word="read"
            className="group flex flex-col border-t border-brass/40 pt-6"
          >
            <span className="font-body text-sm text-brass">{item.outlet}</span>
            <span className="mt-4 font-display text-2xl leading-snug text-ecru transition-colors duration-500 group-hover:text-brass">
              {item.title}
            </span>
            <span className="mt-4 font-body text-base text-ecru/70">{item.note}</span>
          </a>
        ))}
      </div>

      <div className="mt-16 border-t border-brass/20 pt-8">
        <p className="font-body text-sm text-brass">Also covered by</p>
        <ul className="mt-4 flex flex-wrap gap-x-8 gap-y-3">
          {outlets.map((outlet) => (
            <li key={outlet} className="font-body text-base text-ecru/70">
              {outlet}
            </li>
          ))}
        </ul>
        <Link
          href="/journal#press"
          className="mt-10 inline-block border-b border-brass pb-1 font-body text-sm text-brass transition-colors duration-300 hover:text-ecru"
        >
          View all press
        </Link>
      </div>
    </Section>
  );
}
