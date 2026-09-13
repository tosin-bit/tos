import type { Metadata } from "next";
import Section, { SectionLabel } from "@/components/Section";
import MediaBand from "@/components/MediaBand";
import { contact } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact — Nenneh Cheyassin Secka-Kebe",
  description: "Enquiries, the Foundation, press, and invitations.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main className="bg-chalk pt-28 text-indigo">
      <Section as="div" id="contact">
        <SectionLabel className="text-brass-deep">Contact</SectionLabel>
        <ul className="flex flex-col divide-y divide-indigo/15 border-t border-indigo/15">
          {contact.emails.map((item) => (
            <li
              key={item.address}
              className="flex flex-col gap-2 py-9 sm:flex-row sm:items-baseline sm:justify-between"
            >
              <span className="font-body text-sm text-brass-deep">{item.label}</span>
              <a
                href={`mailto:${item.address}`}
                className="font-display text-[clamp(1.4rem,3.2vw,2.6rem)] leading-none text-indigo transition-colors duration-300 hover:text-brass-deep"
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
          className="mt-12 inline-block border-b border-brass-deep pb-1 font-body text-base text-brass-deep transition-colors duration-300 hover:text-indigo"
        >
          {contact.instagramHandle}
        </a>
      </Section>

      <MediaBand
        src="/media/img/portrait-candid.jpg"
        alt="Nenneh Cheyassin Secka-Kebe in a white headwrap and embroidered white dress"
        height="h-[58svh]"
        objectPosition="center 26%"
        art="portrait" tone="light"
      />

      <Section as="div" id="invitations" className="bg-sand text-indigo">
        <SectionLabel className="text-brass-deep">Invitations</SectionLabel>
        <p className="mb-14 max-w-measure font-display text-2xl leading-snug text-indigo">
          {contact.invitationsIntro}
        </p>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {contact.invitations.map((item) => (
            <div key={item.label} className="border-t border-brass/50 pt-6">
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
