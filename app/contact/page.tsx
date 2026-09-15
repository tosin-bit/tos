import type { Metadata } from "next";
import Section, { SectionLabel } from "@/components/Section";
import Heading from "@/components/Heading";
import MediaBand from "@/components/MediaBand";
import ContactChannels from "@/components/ContactChannels";
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
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <SectionLabel className="text-brass-deep">Contact</SectionLabel>
              <Heading as="h1" size="xl" className="max-w-[9ch] text-indigo">
                Write to her
              </Heading>
              <p className="mt-7 max-w-measure font-body text-base leading-relaxed text-indigo/70">
                Three addresses, so a note reaches the right desk. She would rather answer
                properly than quickly.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <ContactChannels />

            <a
              href={contact.instagram}
              target="_blank"
              rel="noreferrer"
              data-cursor-word="visit"
              className="group mt-10 flex items-center justify-between gap-6 border border-indigo/20 px-6 py-6 transition-colors duration-500 ease-signature hover:border-indigo hover:bg-indigo"
            >
              <span className="flex flex-col gap-2">
                <span className="font-body text-xs uppercase tracking-caps text-brass-deep transition-colors duration-300 group-hover:text-brass">
                  Instagram
                </span>
                <span className="font-display text-xl text-indigo transition-colors duration-300 group-hover:text-chalk">
                  {contact.instagramHandle}
                </span>
              </span>
              <span
                aria-hidden
                className="font-body text-xl text-indigo/60 transition duration-500 ease-signature group-hover:translate-x-1 group-hover:text-brass"
              >
                &#8599;
              </span>
            </a>
          </div>
        </div>
      </Section>

      <MediaBand
        src="/media/img/portrait-candid.jpg"
        alt="Nenneh Cheyassin Secka-Kebe in white and gold lace with a gold necklace"
        height="h-[58svh]"
        objectPosition="center 16%"
        art="portrait"
        tone="light"
      />

      <Section as="div" id="invitations" className="bg-sand text-indigo">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <SectionLabel className="text-brass-deep">Invitations</SectionLabel>
              <Heading as="h2" size="lg" className="max-w-[11ch] text-indigo">
                What to send
              </Heading>
              <p className="mt-6 max-w-measure font-body text-base leading-relaxed text-indigo/70">
                {contact.invitationsIntro}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-x-10 gap-y-12 lg:col-span-7 lg:col-start-6 md:grid-cols-3">
            {contact.invitations.map((item, i) => (
              <div key={item.label} className="group relative pt-7">
                <span aria-hidden className="absolute inset-x-0 top-0 h-px bg-indigo/20" />
                <span
                  aria-hidden
                  className="absolute left-0 top-0 h-px w-0 bg-brass-deep transition-[width] duration-700 ease-signature group-hover:w-full"
                />
                <span className="font-body text-xs tabular-nums text-brass-deep">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <Heading as="h3" size="sm" className="mt-3 text-indigo">
                  {item.label}
                </Heading>
                <p className="mt-4 font-body text-base leading-relaxed text-indigo/75">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </main>
  );
}
