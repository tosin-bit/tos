import Section, { SectionLabel } from "@/components/Section";
import MediaImage from "@/components/media/MediaImage";
import { quotes } from "@/lib/content";

export default function QuotesSection() {
  return (
    <Section id="in-her-words" className="bg-indigo">
      <SectionLabel>In her own words</SectionLabel>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <ul className="flex flex-col divide-y divide-brass/20">
            {quotes.map((quote) => (
              <li key={quote.text} className="py-8">
                <p className="font-display text-2xl leading-snug text-ecru">
                  &ldquo;{quote.text}&rdquo;
                </p>
                <p className="mt-3 font-body text-sm text-brass">{quote.source}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-4 lg:col-start-9 lg:pt-8">
          <MediaImage
            src="/media/img/portrait-candid.jpg"
            alt="Nenneh Cheyassin Secka-Kebe in a white headwrap and embroidered white dress"
            aspect="934 / 740"
            art="portrait"
          />
        </div>
      </div>
    </Section>
  );
}
