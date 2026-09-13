import PlaceholderArt, { type ArtKind } from "@/components/graphics/PlaceholderArt";

export default function MediaFallback({ src, art = "scene" }: { src: string; art?: ArtKind }) {
  return <PlaceholderArt src={src} kind={art} />;
}
