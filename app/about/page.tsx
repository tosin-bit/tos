import type { Metadata } from "next";
import Section, { SectionLabel } from "@/components/Section";
import Heading from "@/components/Heading";
import ClipReveal from "@/components/ClipReveal";
import MediaBand from "@/components/MediaBand";
import MediaImage from "@/components/media/MediaImage";
import PinnedPortrait from "@/components/PinnedPortrait";
import { biography, theWork, vision } from "@/lib/content";

export const metadata: Metadata = {
  title: "About — Nenneh Cheyassin Secka-Kebe",
  description:
    "Biography, the work, and the vision. Born in the United States, home to The Gambia at fifty.",
  alternates: { canonical: "/about" },
};

const WORK_IMAGES = [
  "/media/img/work-utg-scholarship.jpg",
  "/media/img/farato-taps.jpg",
  "/media/img/farato-jerrycan.jpg",
  "/media/img/farato-crowd-wide.jpg",
];

export default function AboutPage() {
  return (
    <main className="bg-chalk pt-28 text-indigo">
      <Section as="div" id="biography" className="pb-12">
        <SectionLabel className="text-brass-deep">Biography</SectionLabel>
        <Heading as="h1" size="xl" className="max-w-[14ch] text-indigo">
          {biography.title}
        </Heading>
      </Section>

      <MediaBand
        src="/media/img/portrait-teal.jpg"
        alt="Nenneh Cheyassin Secka-Kebe in a turquoise lace gown and headwrap"
        height="h-[62svh]"
        objectPosition="50% 18%"
        art="portrait" tone="light"
      />

      <PinnedPortrait
        src="/media/img/portrait-biography.jpg"
        alt="Nenneh Cheyassin Secka-Kebe in a turquoise lace gown"
        aspect="1066 / 1600"
        className="bg-chalk"
        tone="light"
      >
        {biography.sections.map((section) => (
          <div key={section.heading ?? "opening"} className="flex flex-col gap-6">
            {section.heading ? (
              <Heading size="lg" className="mt-8 text-indigo">
                {section.heading}
              </Heading>
            ) : null}
            {section.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="max-w-measure font-body text-lg leading-relaxed text-indigo/80"
              >
                {paragraph}
              </p>
            ))}
            {section.quote ? (
              <blockquote className="max-w-measure border-l-2 border-brass pl-6 font-display text-[clamp(1.25rem,2.2vw,1.75rem)] leading-snug text-indigo">
                &ldquo;{section.quote}&rdquo;
              </blockquote>
            ) : null}
            {section.after?.map((paragraph) => (
              <p
                key={paragraph}
                className="max-w-measure font-body text-lg leading-relaxed text-indigo/80"
              >
                {paragraph}
              </p>
            ))}
            {section.closingQuote ? (
              <blockquote className="max-w-measure border-l-2 border-brass pl-6 font-display text-[clamp(1.25rem,2.2vw,1.75rem)] leading-snug text-indigo">
                &ldquo;{section.closingQuote}&rdquo;
              </blockquote>
            ) : null}
          </div>
        ))}
      </PinnedPortrait>

      <Section as="div" className="bg-chalk pt-0">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <ClipReveal direction="left">
            <MediaImage
              src="/media/img/archive-father.jpg"
              alt="Pap Ousman Cheyassin Secka — archival photograph"
              aspect="4 / 5"
              art="portrait" tone="light"
            />
          </ClipReveal>
          <ClipReveal direction="right" className="md:mt-20">
            <MediaImage
              src="/media/img/archive-family.jpg"
              alt="Family archival photograph"
              aspect="4 / 5"
              art="detail" tone="light"
            />
          </ClipReveal>
        </div>
        <p className="mt-6 font-body text-sm text-brass-deep">
          Archive — her father, Pap Ousman Cheyassin Secka
        </p>
      </Section>

      <MediaBand
        src="/media/img/farato-nenneh-celebrating.jpg"
        alt="Nenneh Cheyassin Secka-Kebe celebrating with the women of Farato"
        height="h-[70svh]"
        objectPosition="50% 35%"
        art="scene"
        tone="light"
      />

      <Section as="div" id="the-work" className="bg-sand text-indigo">
        <SectionLabel className="text-brass-deep">The work</SectionLabel>
        <div className="grid grid-cols-1 gap-x-10 gap-y-16 md:grid-cols-2">
          {theWork.map((block, i) => (
            <div key={block.title} className={i % 2 === 1 ? "md:mt-20" : ""}>
              <ClipReveal direction={i % 2 === 0 ? "left" : "right"}>
                <MediaImage
                  src={WORK_IMAGES[i]}
                  alt={block.title}
                  aspect={i % 2 === 0 ? "4 / 3" : "1 / 1"}
                  art="scene" tone="light"
                />
              </ClipReveal>
              <Heading size="md" className="mt-6 text-indigo">
                {block.title}
              </Heading>
              <p className="mt-4 max-w-measure font-body text-lg leading-relaxed text-indigo/80">
                {block.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section as="div" id="vision" className="bg-indigo text-ecru">
        <SectionLabel>Vision</SectionLabel>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="flex flex-col gap-7 lg:col-span-7">
            {vision.map((paragraph, i) => (
              <p
                key={paragraph}
                className={
                  i === 0
                    ? "max-w-measure font-display text-[clamp(1.35rem,2.5vw,2rem)] leading-snug text-ecru"
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
                src="/media/img/portrait-rose.jpg"
                alt="Nenneh Cheyassin Secka-Kebe in a rose lace gown with gold jewellery"
                aspect="798 / 1600"
                art="portrait"
              />
            </ClipReveal>
          </div>
        </div>
      </Section>
    </main>
  );
}
