import { SectionLabel } from "@/components/Section";
import CultureGallery from "@/components/CultureGallery";

export default function CultureSection() {
  return (
    <section id="culture" className="relative bg-indigo py-section">
      <div className="mx-auto max-w-[1600px] px-gutter">
        <SectionLabel>Culture</SectionLabel>
      </div>
      <CultureGallery />
    </section>
  );
}
