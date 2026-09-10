import ScrollScrubHero from "@/components/ScrollScrubHero";
import LineReveal from "@/components/LineReveal";
import { opening } from "@/lib/content";

export default function OpeningSection() {
  return (
    <ScrollScrubHero>
      <div className="absolute inset-x-0 bottom-0 z-10 px-gutter pb-12">
        <LineReveal
          as="h1"
          lines={opening.name}
          immediate
          className="font-display text-hero text-ecru"
        />
        <div className="mt-6 max-w-measure">
          <LineReveal
            as="p"
            lines={[opening.line]}
            immediate
            delay={0.6}
            className="font-body text-lg text-ecru/90"
          />
        </div>
      </div>
    </ScrollScrubHero>
  );
}
