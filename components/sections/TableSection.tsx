import Section, { SectionLabel } from "@/components/Section";
import MediaVideo from "@/components/media/MediaVideo";
import { table } from "@/lib/content";

export default function TableSection() {
  return (
    <Section id="the-table" className="bg-wine">
      <SectionLabel className="text-ecru/70">The Table</SectionLabel>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <div className="flex flex-col gap-4">
            {table.lines.slice(0, 2).map((line) => (
              <p key={line} className="font-display text-2xl text-ecru">
                {line}
              </p>
            ))}
          </div>
          <p className="mt-12 font-body text-sm text-ecru/70">{table.lines[2]}</p>
        </div>
        <div className="lg:col-span-5 lg:col-start-8">
          <MediaVideo
            src="/media/video/table-ambient.mp4"
            alt="Dim, low-motion footage of a set table"
            aspect="4 / 5"
            cursorWord="watch"
            art="detail"
            className="opacity-90"
          />
        </div>
      </div>
    </Section>
  );
}
