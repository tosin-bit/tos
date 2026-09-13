import type { Metadata } from "next";
import Section, { SectionLabel } from "@/components/Section";
import ClipReveal from "@/components/ClipReveal";
import Parallax from "@/components/Parallax";
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
  { col: "lg:col-span-6 lg:col-start-7", top: "lg:mt-24", aspect: "3 / 4", direction: "right" as const },
  { col: "lg:col-span-7", top: "lg:mt-16", aspect: "16 / 9", direction: "bottom" as const },
];

export default function FoundationPage() {
  return (
    <main className="pt-28">
      <Section as="div">
        <SectionLabel>The Foundation</SectionLabel>
        <h1 className="max-w-[14ch] font-display text-4xl leading-[1.05] text-ecru">
          {foundation.name}
        </h1>
        <p className="mt-8 max-w-measure font-display text-xl leading-snug text-brass">
          {foundation.dedication}
        </p>
        <div className="mt-10 flex flex-col gap-6">
          {foundation.intro.map((paragraph) => (
            <p
              key={paragraph}
              className="max-w-measure font-body text-lg leading-relaxed text-ecru/85"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </Section>

      <Section as="div" id="pillars" className="bg-indigo">
        <SectionLabel>Three pillars</SectionLabel>
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
                    art="scene"
                  />
                </ClipReveal>
                <Parallax speed={0.1} className="mt-6">
                  <h2 className="font-display text-2xl text-ecru">{pillar.title}</h2>
                  <p className="mt-4 max-w-measure font-body text-base leading-relaxed text-ecru/80">
                    {pillar.body}
                  </p>
                </Parallax>
              </div>
            );
          })}
        </div>
      </Section>

      <Section as="div" id="nenneh-100" className="bg-wine">
        <SectionLabel className="text-ecru/70">{foundation.nenneh100.name}</SectionLabel>
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <span className="font-display text-[clamp(6rem,20vw,15rem)] leading-none text-ecru">
              100
            </span>
          </div>
          <div className="flex flex-col gap-6 lg:col-span-5 lg:col-start-8 lg:pt-10">
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
                className="border-b border-ecru/50 pb-1 font-body text-base text-ecru transition-colors duration-300 hover:text-brass"
              >
                Apply
              </a>
              <a
                href="mailto:foundation@nennehcheyassin.com?subject=Partnership"
                className="border-b border-ecru/50 pb-1 font-body text-base text-ecru transition-colors duration-300 hover:text-brass"
              >
                Partner with us
              </a>
            </div>
          </div>
        </div>
        <div className="mt-16">
          <MediaVideo
            src="/media/video/nenneh100-reel.mp4"
            alt="A reel from the Nenneh 100 programme"
            aspect="16 / 9"
            cursorWord="watch"
            art="scene"
          />
        </div>
      </Section>
    </main>
  );
}
