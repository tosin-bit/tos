import Link from "next/link";
import Section, { SectionLabel } from "@/components/Section";
import { initiatives } from "@/lib/content";

export default function InitiativesSection() {
  return (
    <Section id="initiatives" className="bg-indigo">
      <SectionLabel>Initiatives</SectionLabel>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        {initiatives.map((item) => (
          <div key={item.name} className="border-t border-brass/40 pt-8">
            <h3 className="font-display text-3xl text-ecru">{item.name}</h3>
            <p className="mt-5 max-w-measure font-body text-lg leading-relaxed text-ecru/80">
              {item.body}
            </p>
          </div>
        ))}
      </div>
      <Link
        href="/foundation"
        className="mt-12 inline-block border-b border-brass pb-1 font-body text-sm text-brass transition-colors duration-300 hover:text-ecru"
      >
        The Foundation and Nenneh 100
      </Link>
    </Section>
  );
}
