import type { Metadata } from "next";
import Section, { SectionLabel } from "@/components/Section";
import ClipReveal from "@/components/ClipReveal";
import Parallax from "@/components/Parallax";
import MediaBand from "@/components/MediaBand";
import VideoFeature from "@/components/VideoFeature";
import MediaImage from "@/components/media/MediaImage";
import MediaVideo from "@/components/media/MediaVideo";
import { foundation } from "@/lib/content";

export const metadata: Metadata = {
  title: "The Cheyassin Foundation — Nenneh Cheyassin Secka-Kebe",
  description:
    "Women & Wealth. Education & Opportunity. Health & Dignity. And Nenneh 100 — one hundred Gambian women a year.",
  alternates: { canonical: "/foundation" },
};

const LAYOUT = [
  { col: "lg:col-span-5", top: "lg:mt-0", aspect: "4 / 5", direction: "left" as const },
  { col: "lg:col-span-6 lg:col-start-7", top: "lg:mt-28", aspect: "3 / 4", direction: "right" as const },
  { col: "lg:col-span-7", top: "lg:mt-16", aspect: "16 / 9", direction: "bottom" as const },
];

const FARATO = [
  {
    src: "/media/img/farato-nenneh-celebrating.jpg",
    alt: "Nenneh Cheyassin Secka-Kebe celebrating with the women of Farato",
  },
  {
    src: "/media/img/farato-women-tap.jpg",
    alt: "Women of Farato gathered at the new tap as the water runs",
  },
  {
    src: "/media/img/farato-jerrycan.jpg",
    alt: "A woman filling a jerrycan at the new Farato borehole",
  },
  {
    src: "/media/img/farato-crowd-wide.jpg",
    alt: "The crowd gathered at Farato for the borehole handover",
  },
];

export default function FoundationPage() {
  return (
    <main className="bg-chalk pt-28 text-indigo">
      <Section as="div" className="pb-12">
        <SectionLabel className="text-brass-deep">The Foundation</SectionLabel>
        <h1 className="max-w-[14ch] font-display text-4xl leading-[1.05] text-indigo">
          {foundation.name}
        </h1>
        <p className="mt-8 max-w-measure font-display text-xl leading-snug text-brass-deep">
          {foundation.dedication}
        </p>
      </Section>

      <VideoFeature
        src="/media/video/farato-celebration.mp4"
        poster="/media/img/poster-farato-celebration.jpg"
        alt="Women of the Farato farming community at the new borehole"
        label="Health &amp; Dignity"
        heading="Water, and what it changes."
        body="Farato: a borehole for the women&rsquo;s farming community, providing irrigation for the gardens and filtered drinking water."
        reverse
      />

      <Section as="div" className="bg-chalk">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="flex flex-col gap-6 lg:col-span-7">
            {foundation.intro.map((paragraph) => (
              <p
                key={paragraph}
                className="max-w-measure font-body text-lg leading-relaxed text-indigo/80"
              >
                {paragraph}
              </p>
            ))}
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <ClipReveal direction="right">
              <MediaImage
                src="/media/img/farato-tower.jpg"
                alt="The completed borehole tower and tank at Farato"
                aspect="1066 / 1600"
                art="scene" tone="light"
              />
            </ClipReveal>
          </div>
        </div>
      </Section>

      <Section as="div" id="farato" className="bg-chalk pt-0">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {FARATO.map((item, i) => (
            <ClipReveal key={item.src} direction={i % 2 === 0 ? "left" : "right"}>
              <MediaImage
                src={item.src}
                alt={item.alt}
                aspect="4 / 3"
                art="scene"
                tone="light"
              />
            </ClipReveal>
          ))}
        </div>
        <p className="mt-6 font-body text-sm text-brass-deep">
          Farato, September 2025 — the borehole handover
        </p>
      </Section>

      <Section as="div" id="pillars" className="bg-sand">
        <SectionLabel className="text-brass-deep">Three pillars</SectionLabel>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          {foundation.pillars.map((pillar, i) => {
            const layout = LAYOUT[i % LAYOUT.length];
            return (
              <div key={pillar.title} className={`${layout.col} ${layout.top}`}>
                <ClipReveal direction={layout.direction}>
                  <MediaImage
                    src={pillar.image}
                    alt={pillar.title}
                    aspect={layout.aspect}
                    art="scene" tone="light"
                  />
                </ClipReveal>
                <Parallax speed={0.08} className="mt-6">
                  <h2 className="font-display text-2xl text-indigo">{pillar.title}</h2>
                  <p className="mt-4 max-w-measure font-body text-base leading-relaxed text-indigo/80">
                    {pillar.body}
                  </p>
                </Parallax>
              </div>
            );
          })}
        </div>
      </Section>

      <Section as="div" id="nenneh-100" className="bg-indigo text-ecru">
        <SectionLabel>{foundation.nenneh100.name}</SectionLabel>
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="font-display text-[clamp(6rem,18vw,14rem)] leading-none text-ecru">
              100
            </span>
          </div>
          <div className="flex flex-col gap-6 lg:col-span-6 lg:col-start-7 lg:pt-10">
            {foundation.nenneh100.lines.map((line, i) => (
              <p
                key={line}
                className={
                  i === 0
                    ? "max-w-measure font-display text-2xl leading-snug text-ecru"
                    : "max-w-measure font-body text-lg leading-relaxed text-ecru/85"
                }
              >
                {line}
              </p>
            ))}
            <div className="mt-4 flex flex-wrap gap-8">
              <a
                href="mailto:foundation@nennehcheyassin.com?subject=Nenneh%20100%20application"
                className="border-b border-brass pb-1 font-body text-base text-brass transition-colors duration-300 hover:text-ecru"
              >
                Apply
              </a>
              <a
                href="mailto:foundation@nennehcheyassin.com?subject=Partnership"
                className="border-b border-brass pb-1 font-body text-base text-brass transition-colors duration-300 hover:text-ecru"
              >
                Partner with us
              </a>
            </div>
          </div>
        </div>

        <p className="mt-16 max-w-measure font-body text-sm text-ecru/60">
          The first cohort has not been selected. Portraits will follow.
        </p>
      </Section>

      <MediaBand
        src="/media/video/nenneh100-reel.mp4"
        kind="video"
        alt="A reel from the Nenneh 100 programme"
        height="h-[80svh]"
        art="scene"
        caption="The Nenneh 100 Dinner"
      />
    </main>
  );
}
