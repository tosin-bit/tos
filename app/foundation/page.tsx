import type { Metadata } from "next";
import Section, { SectionLabel } from "@/components/Section";
import ClipReveal from "@/components/ClipReveal";
import MediaImage from "@/components/media/MediaImage";
import MediaVideo from "@/components/media/MediaVideo";
import { foundation } from "@/lib/content";

export const metadata: Metadata = {
  title: "The Foundation — Nenneh Cheyassin Secka-Kebe",
  description:
    "Three pillars: Women & Wealth, Education & Opportunity, Health & Dignity.",
  alternates: { canonical: "/foundation" },
};

export default function FoundationPage() {
  return (
    <main className="pt-32">
      <Section as="div">
        <SectionLabel>The Foundation</SectionLabel>
        <h1 className="max-w-measure font-display text-4xl text-ecru">
          Three pillars, one conviction.
        </h1>
        <p className="mt-8 max-w-measure font-body text-lg text-ecru/90">{foundation.intro}</p>
      </Section>

      <Section as="div" className="bg-indigo pt-0">
        <ClipReveal direction="top">
          <MediaVideo
            src="/media/video/foundation-field.mp4"
            alt="Field footage from the Foundation's work"
            aspect="16 / 9"
            cursorWord="watch"
          />
        </ClipReveal>
      </Section>

      {foundation.pillars.map((pillar, i) => (
        <Section as="div" key={pillar.title} className="bg-indigo">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className={i % 2 === 0 ? "lg:col-span-6" : "lg:col-span-6 lg:col-start-7 lg:order-2"}>
              <ClipReveal direction={i % 2 === 0 ? "left" : "right"}>
                <MediaImage src={pillar.image} alt={pillar.title} aspect="4 / 5" />
              </ClipReveal>
            </div>
            <div
              className={`flex flex-col justify-center ${
                i % 2 === 0 ? "lg:col-span-5 lg:col-start-8" : "lg:col-span-5 lg:order-1"
              }`}
            >
              <h2 className="font-display text-3xl text-ecru">{pillar.title}</h2>
              <p className="mt-4 max-w-measure font-body text-lg text-ecru/80">{pillar.body}</p>
            </div>
          </div>
        </Section>
      ))}

      <Section as="div" className="bg-chalk text-indigo">
        <h2 className="max-w-measure font-display text-3xl text-indigo">
          Partner with the Foundation.
        </h2>
        <p className="mt-4 max-w-measure font-body text-lg text-indigo/80">
          We work with individuals and institutions who want their support to reach a woman
          directly, not disappear into an annual report.
        </p>
        <a
          href="mailto:partnership@nennehcheyassin.com"
          className="mt-8 inline-block border-b border-brass font-body text-base text-indigo"
        >
          partnership@nennehcheyassin.com
        </a>
      </Section>
    </main>
  );
}
