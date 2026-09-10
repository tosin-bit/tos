import type { Metadata } from "next";
import Section, { SectionLabel } from "@/components/Section";
import { writing } from "@/lib/content";

export const metadata: Metadata = {
  title: "Writing — Nenneh Cheyassin Secka-Kebe",
  description: "Essays by Nenneh Cheyassin Secka-Kebe.",
  alternates: { canonical: "/writing" },
};

const bodies: Record<string, string> = {
  "what-thirty-years-bought-me":
    "Not comfort. Comfort was available much earlier, if that had been the goal. Thirty years bought me the ability to say no to a room without losing my seat in it — that took longer than the money did.",
  "on-being-the-woman-who-convenes":
    "Nobody trains you for this role. You learn it by noticing, after enough dinners, which two people in the city have never once been introduced, and deciding that is your job to fix.",
  "my-fathers-idea-of-a-serious-room":
    "He never raised his voice in a meeting in his life. I used to think that was restraint. I understand now it was a decision about where power actually lives.",
  "why-i-came-home-at-fifty":
    "Everyone asks if it was hard. It was not hard. It was overdue. The harder question is why it takes some of us fifty years to stop asking permission to come home.",
  "the-cost-of-answering-the-phone":
    "There is a version of philanthropy that costs nothing but a signature. That is not what I do. Answering the phone means someone can reach you at eleven at night, and you pick up.",
};

export default function WritingPage() {
  return (
    <main className="pt-32">
      <Section as="div">
        <SectionLabel>Writing</SectionLabel>
        <h1 className="mb-16 max-w-measure font-display text-4xl text-ecru">
          Essays, in her own words.
        </h1>
        <div className="flex flex-col gap-20">
          {writing.map((piece) => (
            <article key={piece.slug} id={piece.slug} className="scroll-mt-32">
              <h2 className="font-display text-3xl text-ecru">{piece.title}</h2>
              <p className="mt-4 max-w-measure font-body text-lg leading-relaxed text-ecru/85">
                {bodies[piece.slug]}
              </p>
            </article>
          ))}
        </div>
      </Section>
    </main>
  );
}
