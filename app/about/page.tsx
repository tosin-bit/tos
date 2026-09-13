import type { Metadata } from "next";
import Section, { SectionLabel } from "@/components/Section";
import ClipReveal from "@/components/ClipReveal";
import MediaImage from "@/components/media/MediaImage";
import PinnedPortrait from "@/components/PinnedPortrait";
import { biography, theWork, vision } from "@/lib/content";

export const metadata: Metadata = {
  title: "About — Nenneh Cheyassin Secka-Kebe",
  description:
    "Biography, the work, and the vision. Born in the United States, home to The Gambia at fifty.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main className="pt-28">
      <Section as="div" id="biography" className="pb-0">
        <SectionLabel>Biography</SectionLabel>
        <h1 className="max-w-[16ch] font-display text-4xl leading-[1.05] text-ecru">
          {biography.title}
        </h1>
      </Section>

      <PinnedPortrait
        src="/media/img/portrait-seated.jpg"
        alt="Nenneh Cheyassin Secka-Kebe in a blue and white embroidered outfit with gold jewellery"
        aspect="1066 / 1132"
      >
        {biography.sections.map((section) => (
          <div key={section.heading ?? "opening"} className="flex flex-col gap-6">
            {section.heading ? (
              <h2 className="mt-8 font-display text-3xl text-ecru">{section.heading}</h2>
            ) : null}
            {section.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="max-w-measure font-body text-lg leading-relaxed text-ecru/85"
              >
                {paragraph}
              </p>
            ))}
            {section.quote ? (
              <blockquote className="max-w-measure border-l border-brass pl-6 font-display text-2xl leading-snug text-ecru">
                &ldquo;{section.quote}&rdquo;
              </blockquote>
            ) : null}
            {section.after?.map((paragraph) => (
              <p
                key={paragraph}
                className="max-w-measure font-body text-lg leading-relaxed text-ecru/85"
              >
                {paragraph}
              </p>
            ))}
            {section.closingQuote ? (
              <blockquote className="max-w-measure border-l border-brass pl-6 font-display text-2xl leading-snug text-ecru">
                &ldquo;{section.closingQuote}&rdquo;
              </blockquote>
            ) : null}
          </div>
        ))}
      </PinnedPortrait>

      <Section as="div" id="the-work" className="bg-chalk text-indigo">
        <SectionLabel className="text-brass">The work</SectionLabel>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {theWork.map((block) => (
            <div key={block.title} className="border-t border-brass/40 pt-6">
              <h2 className="font-display text-2xl text-indigo">{block.title}</h2>
              <p className="mt-4 max-w-measure font-body text-lg leading-relaxed text-indigo/80">
                {block.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section as="div" id="vision" className="bg-indigo">
        <SectionLabel>Vision</SectionLabel>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="flex flex-col gap-7 lg:col-span-7">
            {vision.map((paragraph, i) => (
              <p
                key={paragraph}
                className={
                  i === 0
                    ? "max-w-measure font-display text-3xl leading-snug text-ecru"
                    : "max-w-measure font-body text-lg leading-relaxed text-ecru/85"
                }
              >
                {paragraph}
              </p>
            ))}
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <ClipReveal direction="right">
              <MediaImage
                src="/media/img/portrait-candid.jpg"
                alt="Nenneh Cheyassin Secka-Kebe in a white headwrap and embroidered white dress"
                aspect="934 / 740"
                art="portrait"
              />
            </ClipReveal>
          </div>
        </div>
      </Section>
    </main>
  );
}
