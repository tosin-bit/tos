import Section from "@/components/Section";
import LineReveal from "@/components/LineReveal";
import { quoteWall } from "@/lib/content";

export default function QuoteWallSection() {
  return (
    <Section className="bg-wine">
      <div className="flex flex-col gap-16">
        {quoteWall.map((quote) => (
          <LineReveal
            key={quote}
            as="p"
            lines={[`“${quote}”`]}
            className="max-w-[22ch] font-display text-[clamp(1.9rem,4.4vw,3.6rem)] leading-[1.1] text-ecru"
          />
        ))}
      </div>
    </Section>
  );
}
