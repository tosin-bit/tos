import Link from "next/link";
import Section, { SectionLabel } from "@/components/Section";
import ClipReveal from "@/components/ClipReveal";
import Parallax from "@/components/Parallax";
import MediaImage from "@/components/media/MediaImage";
import { foundation } from "@/lib/content";

const LAYOUT = [
  { col: "lg:col-span-5", top: "lg:mt-0", aspect: "4 / 5", direction: "left" as const },
  { col: "lg:col-span-6 lg:col-start-7", top: "lg:mt-24", aspect: "3 / 4", direction: "right" as const },
  { col: "lg:col-span-7", top: "lg:mt-16", aspect: "16 / 9", direction: "bottom" as const },
];

export default function FoundationSection() {
  return (
    <Section id="foundation" className="bg-indigo">
      <SectionLabel>The Foundation</SectionLabel>
      <p className="mb-16 max-w-measure font-body text-lg text-ecru/90">{foundation.intro}</p>
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
        {foundation.pillars.map((pillar, i) => {
          const layout = LAYOUT[i % LAYOUT.length];
          return (
            <div key={pillar.title} className={`${layout.col} ${layout.top}`}>
              <ClipReveal direction={layout.direction}>
                <MediaImage src={pillar.image} alt={pillar.title} aspect={layout.aspect} />
              </ClipReveal>
              <Parallax speed={0.1} className="mt-6">
                <h3 className="font-display text-2xl text-ecru">{pillar.title}</h3>
                <p className="mt-3 max-w-measure font-body text-base text-ecru/80">{pillar.body}</p>
              </Parallax>
            </div>
          );
        })}
      </div>
      <Link
        href="/foundation"
        className="mt-16 inline-block border-b border-brass font-body text-sm text-ecru"
      >
        More on the Foundation
      </Link>
    </Section>
  );
}
