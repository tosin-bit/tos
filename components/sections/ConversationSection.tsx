import Section, { SectionLabel } from "@/components/Section";
import ClipReveal from "@/components/ClipReveal";
import MediaVideo from "@/components/media/MediaVideo";
import { conversation } from "@/lib/content";

export default function ConversationSection() {
  return (
    <Section id="the-conversation" className="bg-indigo">
      <SectionLabel>The Conversation</SectionLabel>
      <p className="mb-12 max-w-measure font-body text-lg text-ecru/90">{conversation.intro}</p>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <ul className="flex flex-col gap-4">
            {conversation.subjects.map((subject) => (
              <li key={subject} className="font-display text-2xl text-ecru">
                {subject}
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-4 lg:col-start-9">
          <ClipReveal direction="left">
            <MediaVideo
              src="/media/video/conversation-clip.mp4"
              alt="A clip from The Conversation series"
              aspect="16 / 9"
              cursorWord="watch"
            />
          </ClipReveal>
        </div>
      </div>
      <div className="mt-16">
        <p className="mb-6 font-body text-sm text-brass">At Nenneh&rsquo;s Table — recent episodes</p>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {["series-ep-01", "series-ep-02", "series-ep-03"].map((ep) => (
            <MediaVideo
              key={ep}
              src={`/media/video/${ep}.mp4`}
              alt={`At Nenneh's Table, episode ${ep.slice(-2)}`}
              aspect="16 / 9"
              cursorWord="watch"
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
