import Section from "@/components/Section";
import LineReveal from "@/components/LineReveal";
import ClipReveal from "@/components/ClipReveal";
import MediaVideo from "@/components/media/MediaVideo";
import { statement } from "@/lib/content";

const lines = statement.paragraph.match(/[^.]+\.\s*/g)?.map((s) => s.trim()) ?? [
  statement.paragraph,
];

export default function StatementSection() {
  return (
    <Section className="bg-chalk text-indigo">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <LineReveal
            as="p"
            lines={lines}
            className="font-display text-3xl text-indigo"
            lineClassName="mb-1"
          />
        </div>
        <div className="lg:col-span-4 lg:col-start-9 lg:mt-16">
          <ClipReveal direction="right">
            <MediaVideo
              src="/media/video/statement-broll.mp4"
              alt="Ambient footage accompanying her statement"
              aspect="4 / 5"
              cursorWord="watch"
            />
          </ClipReveal>
        </div>
      </div>
    </Section>
  );
}
