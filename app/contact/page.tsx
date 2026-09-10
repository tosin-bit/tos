import type { Metadata } from "next";
import Section, { SectionLabel } from "@/components/Section";
import { invitations } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact — Nenneh Cheyassin Secka-Kebe",
  description: "Speaking, partnership, and press enquiries.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main className="pt-32">
      <Section as="div">
        <SectionLabel>Invitations</SectionLabel>
        <h1 className="mb-8 max-w-measure font-display text-4xl text-ecru">
          Three ways to reach her.
        </h1>
        <p className="mb-16 max-w-measure font-body text-lg text-ecru/80">
          Each route goes directly to the people who handle it. There is no form to fill in —
          write, and someone will answer.
        </p>
        <div className="flex flex-col divide-y divide-brass/20">
          {invitations.map((item) => (
            <div
              key={item.label}
              className="flex flex-col gap-2 py-10 sm:flex-row sm:items-baseline sm:justify-between"
            >
              <div>
                <h2 className="font-display text-2xl text-ecru">{item.label}</h2>
                <p className="mt-1 font-body text-base text-ecru/70">{item.detail}</p>
              </div>
              <a
                href={`mailto:${item.email}`}
                className="font-body text-base text-brass transition-colors duration-300 hover:text-ecru"
              >
                {item.email}
              </a>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}
