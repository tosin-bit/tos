import Section, { SectionLabel } from "@/components/Section";
import ClipReveal from "@/components/ClipReveal";
import MediaImage from "@/components/media/MediaImage";
import MediaVideo from "@/components/media/MediaVideo";
import { nenneh100 } from "@/lib/content";

const PORTRAITS = Array.from({ length: 6 }, (_, i) => ({
  src: `/media/img/nenneh100-0${i + 1}.jpg`,
  alt: `One of the hundred women, portrait ${i + 1}`,
}));

export default function Nenneh100Section() {
  return (
    <Section id="nenneh-100" className="bg-indigo">
      <SectionLabel>Nenneh 100</SectionLabel>
      <div className="grid grid-cols-1 items-end gap-12 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <span className="font-display text-[clamp(6rem,28vw,18rem)] leading-none text-ecru">
            {nenneh100.numeral}
          </span>
          <p className="mt-6 max-w-measure font-body text-lg text-ecru/90">{nenneh100.line}</p>
        </div>
        <div className="lg:col-span-5 lg:col-start-8">
          <ClipReveal direction="right">
            <MediaVideo
              src="/media/video/nenneh100-reel.mp4"
              alt="A reel from the Nenneh 100 programme"
              aspect="1 / 1"
              cursorWord="watch"
            />
          </ClipReveal>
        </div>
      </div>
      <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {PORTRAITS.map((portrait, i) => (
          <ClipReveal key={portrait.src} direction={i % 2 === 0 ? "left" : "right"}>
            <MediaImage src={portrait.src} alt={portrait.alt} aspect="1 / 1" />
          </ClipReveal>
        ))}
      </div>
    </Section>
  );
}
