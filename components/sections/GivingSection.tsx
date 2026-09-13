import Section, { SectionLabel } from "@/components/Section";
import { giving } from "@/lib/content";

export default function GivingSection() {
  return (
    <Section id="giving" className="bg-wine">
      <SectionLabel className="text-ecru/70">The intention</SectionLabel>
      <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <span className="font-display text-[clamp(5rem,16vw,12rem)] leading-none text-ecru">
            {giving.figure}
          </span>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <p className="max-w-measure font-display text-2xl leading-snug text-ecru">{giving.line}</p>
          <p className="mt-5 max-w-measure font-body text-sm text-ecru/65">{giving.note}</p>
          <a
            href={giving.source.href}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-block border-b border-ecru/40 pb-1 font-body text-sm text-ecru/80 transition-colors duration-300 hover:text-ecru"
          >
            {giving.source.label}
          </a>
        </div>
      </div>
    </Section>
  );
}
