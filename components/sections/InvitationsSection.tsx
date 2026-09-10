import Section, { SectionLabel } from "@/components/Section";
import { invitations } from "@/lib/content";

export default function InvitationsSection() {
  return (
    <Section id="invitations" className="bg-indigo">
      <SectionLabel>Invitations</SectionLabel>
      <div className="flex flex-col divide-y divide-brass/20">
        {invitations.map((item) => (
          <div
            key={item.label}
            className="flex flex-col gap-2 py-8 sm:flex-row sm:items-baseline sm:justify-between"
          >
            <div>
              <h3 className="font-display text-2xl text-ecru">{item.label}</h3>
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
  );
}
