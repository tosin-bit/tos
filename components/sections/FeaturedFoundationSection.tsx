import Link from "next/link";
import Section, { SectionLabel } from "@/components/Section";
import Heading from "@/components/Heading";
import { featuredFoundation } from "@/lib/content";

export default function FeaturedFoundationSection() {
  return (
    <Section id="foundation" className="bg-chalk text-indigo">
      <SectionLabel className="text-brass-deep">The Foundation</SectionLabel>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Heading as="h2" size="xl" className="text-indigo">
            {featuredFoundation.name}
          </Heading>
          <p className="mt-5 max-w-measure font-display text-xl text-indigo/70">
            {featuredFoundation.pillarLine}
          </p>
        </div>
        <div className="flex flex-col justify-end lg:col-span-5">
          <p className="max-w-measure font-body text-lg leading-relaxed text-indigo/80">
            {featuredFoundation.body}
          </p>
          <Link
            href="/foundation"
            className="mt-8 inline-block w-fit border-b border-brass pb-1 font-body text-sm text-indigo transition-colors duration-300 hover:text-brass"
          >
            About the Foundation
          </Link>
        </div>
      </div>
    </Section>
  );
}
