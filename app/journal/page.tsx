import type { Metadata } from "next";
import Section, { SectionLabel } from "@/components/Section";
import { pressArchive, broadcast, writing } from "@/lib/content";

export const metadata: Metadata = {
  title: "Journal — Nenneh Cheyassin Secka-Kebe",
  description: "Press archive and writing.",
  alternates: { canonical: "/journal" },
};

export default function JournalPage() {
  return (
    <main className="pt-28">
      <Section as="div" id="press">
        <SectionLabel>Press</SectionLabel>
        <h1 className="mb-16 max-w-[18ch] font-display text-4xl leading-[1.05] text-ecru">
          The archive
        </h1>

        {pressArchive.map((group) => (
          <div key={group.year} className="mb-16">
            <p className="mb-6 font-display text-2xl text-brass">{group.year}</p>
            <ul className="flex flex-col divide-y divide-brass/20 border-t border-brass/20">
              {group.items.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor-word="read"
                    className="group flex flex-col gap-2 py-6 sm:flex-row sm:items-baseline sm:justify-between"
                  >
                    <span className="max-w-measure font-display text-xl text-ecru transition-colors duration-500 group-hover:text-brass">
                      {item.title}
                    </span>
                    <span className="font-body text-sm text-ecru/60">
                      {item.outlet} — {item.date}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="border-t border-brass/20 pt-8">
          <p className="font-body text-sm text-brass">Broadcast</p>
          <p className="mt-3 max-w-measure font-body text-base text-ecru/75">{broadcast}</p>
        </div>
      </Section>

      <Section as="div" id="writing" className="bg-indigo">
        <SectionLabel>Writing</SectionLabel>
        <p className="mb-12 max-w-measure font-body text-base text-ecru/70">
          Essays under her own name. The first is in preparation.
        </p>
        <ul className="flex flex-col divide-y divide-brass/20 border-t border-brass/20">
          {writing.map((title) => (
            <li key={title} className="py-7">
              <span className="block max-w-[26ch] font-display text-3xl leading-snug text-ecru">
                {title}
              </span>
            </li>
          ))}
        </ul>
      </Section>
    </main>
  );
}
