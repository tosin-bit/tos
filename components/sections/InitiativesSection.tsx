import Link from "next/link";
import Section, { SectionLabel } from "@/components/Section";
import Heading from "@/components/Heading";
import { initiatives } from "@/lib/content";

export default function InitiativesSection() {
  return (
    <Section id="initiatives" className="bg-sand text-indigo">
      <SectionLabel className="text-brass-deep">Initiatives</SectionLabel>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        {initiatives.map((item) => (
          <div key={item.name} className="border-t border-brass/50 pt-8">
            <Heading as="h3" size="lg" className="text-indigo">
              {item.name}
            </Heading>
            <p className="mt-5 max-w-measure font-body text-lg leading-relaxed text-indigo/80">
              {item.body}
            </p>
          </div>
        ))}
      </div>
      <Link
        href="/foundation"
        className="mt-12 inline-block border-b border-brass-deep pb-1 font-body text-sm text-brass-deep transition-colors duration-300 hover:text-indigo"
      >
        The Foundation and Nenneh 100
      </Link>
    </Section>
  );
}
