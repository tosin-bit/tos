import Section, { SectionLabel } from "@/components/Section";
import MediaImage from "@/components/media/MediaImage";
import { press } from "@/lib/content";

export default function PressSection() {
  return (
    <Section id="press" className="bg-indigo">
      <SectionLabel>Press</SectionLabel>
      <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
        {press.map((item) => (
          <div key={item.name} className="opacity-50 transition-opacity duration-500 hover:opacity-100">
            <MediaImage src={item.image} alt={item.name} aspect="1 / 1" />
          </div>
        ))}
      </div>
    </Section>
  );
}
