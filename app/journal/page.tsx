import type { Metadata } from "next";
import Section, { SectionLabel } from "@/components/Section";
import MediaBand from "@/components/MediaBand";
import { pressArchive, broadcast, writing } from "@/lib/content";

export const metadata: Metadata = {
  title: "Journal — Nenneh Cheyassin Secka-Kebe",
  description: "Press archive and writing.",
  alternates: { canonical: "/journal" },
};

export default function JournalPage() {
  return (
    <main className="bg-chalk pt-28 text-indigo">
      <Section as="div" id="press" className="pb-12">
        <SectionLabel className="text-brass-deep">Press</SectionLabel>
        <h1 className="max-w-[18ch] font-display text-4xl leading-[1.05] text-indigo">
          The archive
        </h1>
      </Section>

      <MediaBand
        src="/media/img/press-band.jpg"
        alt="Nenneh Cheyassin Secka-Kebe photographed for the press"
        height="h-[52svh]"
        art="press" tone="light"
      />

      <Section as="div" className="bg-chalk">
        {pressArchive.map((group) => (
          <div key={group.year} className="mb-20">
            <p className="mb-6 font-display text-2xl text-brass-deep">{group.year}</p>
            <ul className="flex flex-col divide-y divide-indigo/15 border-t border-indigo/15">
              {group.items.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor-word="read"
                    className="group flex flex-col gap-2 py-7 sm:flex-row sm:items-baseline sm:justify-between"
                  >
                    <span className="max-w-measure font-display text-2xl text-indigo transition-colors duration-500 group-hover:text-brass-deep">
                      {item.title}
                    </span>
                    <span className="font-body text-sm text-indigo/60">
                      {item.outlet} — {item.date}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="border-t border-indigo/15 pt-8">
          <p className="font-body text-sm text-brass-deep">Broadcast</p>
          <p className="mt-3 max-w-measure font-body text-base text-indigo/75">{broadcast}</p>
        </div>
      </Section>

      <Section as="div" id="writing" className="bg-sand">
        <SectionLabel className="text-brass-deep">Writing</SectionLabel>
        <p className="mb-12 max-w-measure font-body text-base text-indigo/70">
          Essays under her own name. The first is in preparation.
        </p>
        <ul className="flex flex-col divide-y divide-indigo/15 border-t border-indigo/15">
          {writing.map((title) => (
            <li key={title} className="py-8">
              <span className="block max-w-[26ch] font-display text-3xl leading-snug text-indigo">
                {title}
              </span>
            </li>
          ))}
        </ul>
      </Section>
    </main>
  );
}
