import Link from "next/link";
import Section, { SectionLabel } from "@/components/Section";
import { writing } from "@/lib/content";

export default function WritingSection() {
  return (
    <Section id="writing" className="bg-indigo">
      <SectionLabel>Writing</SectionLabel>
      <ul className="flex flex-col divide-y divide-brass/20">
        {writing.map((piece) => (
          <li key={piece.slug}>
            <Link
              href={`/writing#${piece.slug}`}
              data-cursor-word="read"
              className="block py-6 font-display text-3xl text-ecru transition-colors duration-500 hover:text-brass"
            >
              {piece.title}
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
