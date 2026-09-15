import type { Metadata } from "next";
import Section, { SectionLabel } from "@/components/Section";
import Heading from "@/components/Heading";
import MediaBand from "@/components/MediaBand";
import PressArchive from "@/components/PressArchive";
import { pressArchive, broadcast, writing } from "@/lib/content";

export const metadata: Metadata = {
  title: "Journal — Nenneh Cheyassin Secka-Kebe",
  description: "Press archive and writing.",
  alternates: { canonical: "/journal" },
};

const COUNT = pressArchive.reduce((n, group) => n + group.items.length, 0);
const YEARS = pressArchive.map((group) => group.year);
const SPAN = `${YEARS[YEARS.length - 1]}–${YEARS[0]}`;
const OUTLET_COUNT = new Set(
  pressArchive.flatMap((group) => group.items.map((item) => item.outlet.split(" / ")[0])),
).size;

export default function JournalPage() {
  return (
    <main className="bg-chalk pt-28 text-indigo">
      <Section as="div" id="press" className="pb-14">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionLabel className="text-brass-deep">Press</SectionLabel>
            <Heading as="h1" size="xl" className="max-w-[10ch] text-indigo">
              The archive
            </Heading>
          </div>
          <div className="flex items-end lg:col-span-4 lg:col-start-9">
            <dl className="flex w-full gap-10 border-t border-indigo/20 pt-6">
              <div>
                <dt className="font-body text-xs uppercase tracking-caps text-brass-deep">Pieces</dt>
                <dd className="mt-2 font-display text-2xl tabular-nums text-indigo">{COUNT}</dd>
              </div>
              <div>
                <dt className="font-body text-xs uppercase tracking-caps text-brass-deep">Years</dt>
                <dd className="mt-2 font-display text-2xl tabular-nums text-indigo">{SPAN}</dd>
              </div>
              <div>
                <dt className="font-body text-xs uppercase tracking-caps text-brass-deep">Outlets</dt>
                <dd className="mt-2 font-display text-2xl tabular-nums text-indigo">{OUTLET_COUNT}</dd>
              </div>
            </dl>
          </div>
        </div>
      </Section>

      <MediaBand
        src="/media/img/portrait-brown.jpg"
        alt="Nenneh Cheyassin Secka-Kebe in brown and gold lace"
        height="h-[58svh]"
        objectPosition="50% 20%"
        art="press"
        tone="light"
      />

      <Section as="div" className="bg-chalk">
        <PressArchive />
      </Section>

      <Section as="div" className="bg-chalk pt-0">
        <div className="border-t border-indigo/20 pt-10">
          <SectionLabel className="text-brass-deep">Broadcast</SectionLabel>
          <ul className="flex flex-wrap gap-3">
            {broadcast.map((item) => (
              <li
                key={item.name}
                className="flex items-baseline gap-3 border border-indigo/20 px-4 py-3 transition-colors duration-500 hover:border-indigo/50"
              >
                <span className="font-body text-sm text-indigo">{item.name}</span>
                {item.detail ? (
                  <span className="font-body text-xs text-indigo/50">{item.detail}</span>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section as="div" id="writing" className="bg-sand text-indigo">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <SectionLabel className="text-brass-deep">Writing</SectionLabel>
              <Heading as="h2" size="lg" className="max-w-[12ch] text-indigo">
                In her own name
              </Heading>
              <p className="mt-6 max-w-measure font-body text-base leading-relaxed text-indigo/70">
                Essays she is writing herself. The first is in preparation; nothing here is
                published yet.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <ol className="border-t border-indigo/20">
              {writing.map((essay, i) => (
                <li
                  key={essay.title}
                  className="flex flex-col gap-4 border-b border-indigo/20 py-7 sm:flex-row sm:items-baseline sm:gap-6"
                >
                  <span className="font-body text-xs tabular-nums text-brass-deep">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 max-w-[38ch] font-display text-xl leading-snug text-indigo">
                    {essay.title}
                  </span>
                  <span
                    className={`w-fit shrink-0 border px-3 py-1.5 font-body text-[0.65rem] uppercase tracking-caps ${
                      essay.status === "In preparation"
                        ? "border-brass-deep text-brass-deep"
                        : "border-indigo/25 text-indigo/50"
                    }`}
                  >
                    {essay.status}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>
    </main>
  );
}
