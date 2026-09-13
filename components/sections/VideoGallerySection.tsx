import Section, { SectionLabel } from "@/components/Section";
import MediaVideo from "@/components/media/MediaVideo";
import { videoGallery } from "@/lib/content";

export default function VideoGallerySection() {
  return (
    <Section id="film" className="bg-indigo">
      <SectionLabel>Film</SectionLabel>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {videoGallery.map((tile, i) => (
          <figure key={tile.src} className="flex flex-col">
            <MediaVideo
              src={tile.src}
              alt={`${tile.caption} — ${tile.sub}`}
              aspect="16 / 9"
              cursorWord="watch"
              art={i % 2 === 0 ? "scene" : "detail"}
            />
            <figcaption className="mt-4">
              <p className="font-display text-xl text-ecru">{tile.caption}</p>
              <p className="mt-1 max-w-measure font-body text-sm text-ecru/65">{tile.sub}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
