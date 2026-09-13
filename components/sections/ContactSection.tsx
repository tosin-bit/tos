import Section, { SectionLabel } from "@/components/Section";
import { contact } from "@/lib/content";

export default function ContactSection() {
  return (
    <Section id="contact" className="bg-indigo">
      <SectionLabel>Contact</SectionLabel>
      <h2 className="max-w-measure font-display text-3xl text-ecru">
        For speaking, partnership and press.
      </h2>
      <p className="mt-6 max-w-measure font-body text-base text-ecru/70">{contact.intro}</p>
      <a
        href={contact.instagram}
        target="_blank"
        rel="noreferrer"
        className="mt-10 inline-block border-b border-brass pb-1 font-body text-lg text-brass transition-colors duration-300 hover:text-ecru"
      >
        {contact.instagramHandle}
      </a>
    </Section>
  );
}
