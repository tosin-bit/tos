import type { Metadata } from "next";
import Section, { SectionLabel } from "@/components/Section";
import { contact } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact — Nenneh Cheyassin Secka-Kebe",
  description: "Enquiries, the Foundation, press, and invitations.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main className="pt-28">
      <Section as="div" id="contact">
        <SectionLabel>Contact</SectionLabel>
        <ul className="flex flex-col divide-y divide-brass/20 border-t border-brass/20">
          {contact.emails.map((item) => (
            <li
              key={item.address}
              className="flex flex-col gap-2 py-8 sm:flex-row sm:items-baseline sm:justify-between"
            >
              <span className="font-body text-sm text-brass">{item.label}</span>
              <a
                href={`mailto:${item.address}`}
                className="font-display text-[clamp(1.5rem,3.4vw,2.75rem)] leading-none text-ecru transition-colors duration-300 hover:text-brass"
              >
                {item.address}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={contact.instagram}
          target="_blank"
          rel="noreferrer"
          className="mt-12 inline-block border-b border-brass pb-1 font-body text-base text-brass transition-colors duration-300 hover:text-ecru"
        >
          {contact.instagramHandle}
        </a>
      </Section>

      <Section as="div" id="invitations" className="bg-chalk text-indigo">
        <SectionLabel className="text-brass">Invitations</SectionLabel>
        <p className="mb-14 max-w-measure font-display text-2xl leading-snug text-indigo">
          {contact.invitationsIntro}
        </p>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {contact.invitations.map((item) => (
            <div key={item.label} className="border-t border-brass/40 pt-6">
              <h2 className="font-display text-2xl text-indigo">{item.label}</h2>
              <p className="mt-4 max-w-measure font-body text-base leading-relaxed text-indigo/80">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}
