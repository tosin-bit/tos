import PlaceholderArt, { type ArtKind, type Tone } from "@/components/graphics/PlaceholderArt";

export default function MediaFallback({
  src,
  art = "scene",
  tone = "dark",
}: {
  src: string;
  art?: ArtKind;
  tone?: Tone;
}) {
  return <PlaceholderArt src={src} kind={art} tone={tone} />;
}
