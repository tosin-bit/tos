import Link from "next/link";
import Section, { SectionLabel } from "@/components/Section";
import { journal } from "@/lib/content";

export default function JournalSection() {
  return (
    <Section id="journal" className="bg-indigo">
      <SectionLabel>Journal</SectionLabel>
      <ul className="flex flex-col divide-y divide-brass/20 border-t border-brass/20">
        {journal.map((entry) => {
          const inner = (
            <>
              <span className="max-w-measure font-display text-2xl text-ecru">{entry.title}</span>
              <span className="font-body text-sm text-ecru/60">{entry.date}</span>
            </>
          );
          return (
            <li key={entry.title}>
              {entry.href ? (
                <a
                  href={entry.href}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor-word="read"
                  className="flex flex-col gap-2 py-7 transition-colors duration-500 hover:text-brass sm:flex-row sm:items-baseline sm:justify-between"
                >
                  {inner}
                </a>
              ) : (
                <div className="flex flex-col gap-2 py-7 sm:flex-row sm:items-baseline sm:justify-between">
                  {inner}
                </div>
              )}
            </li>
          );
        })}
      </ul>
      <Link
        href="/journal"
        className="mt-10 inline-block border-b border-brass pb-1 font-body text-sm text-brass transition-colors duration-300 hover:text-ecru"
      >
        The journal
      </Link>
    </Section>
  );
}
