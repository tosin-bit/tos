import Section, { SectionLabel } from "@/components/Section";
import MediaVideo from "@/components/media/MediaVideo";
import MediaImage from "@/components/media/MediaImage";
import ClipReveal from "@/components/ClipReveal";
import { videoGallery, faratoGallery } from "@/lib/content";

export default function VideoGallerySection() {
  return (
    <Section id="film" className="bg-indigo">
      <SectionLabel>Farato</SectionLabel>

      <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
        {videoGallery.map((tile, i) => (
          <figure key={tile.src} className={i === 0 ? "lg:col-span-7" : "lg:col-span-4 lg:col-start-9"}>
            <MediaVideo
              src={tile.src}
              webmSrc={tile.webmSrc}
              poster={tile.poster}
              alt={`${tile.caption} — ${tile.sub}`}
              aspect={tile.aspect}
              cursorWord="watch"
              art="scene"
            />
            <figcaption className="mt-4">
              <p className="font-display text-xl text-ecru">{tile.caption}</p>
              <p className="mt-1 max-w-measure font-body text-sm text-ecru/65">{tile.sub}</p>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="mt-20 grid grid-cols-2 gap-6 md:grid-cols-3">
        {faratoGallery.map((item, i) => (
          <figure key={item.src}>
            <ClipReveal direction={i % 2 === 0 ? "left" : "right"}>
              <MediaImage src={item.src} alt={item.caption} aspect="3 / 2" art="scene" />
            </ClipReveal>
            <figcaption className="mt-3 font-body text-sm text-ecru/65">{item.caption}</figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
