import Section from "@/components/Section";
import LineReveal from "@/components/LineReveal";
import { statement } from "@/lib/content";

export default function StatementSection() {
  return (
    <Section className="bg-chalk text-indigo">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <LineReveal
            as="p"
            lines={[`“${statement.quote}”`]}
            className="font-display text-4xl text-indigo"
          />
          <p className="mt-6 font-body text-sm text-indigo/60">{statement.source}</p>
        </div>
        <div className="lg:col-span-4 lg:pt-6">
          <p className="max-w-measure font-body text-lg leading-relaxed text-indigo/80">
            {statement.paragraph}
          </p>
        </div>
      </div>
    </Section>
  );
}
