"use client";

import { useState } from "react";
import MediaFallback from "./MediaFallback";
import type { ArtKind } from "@/components/graphics/PlaceholderArt";

type Props = {
  src: string;
  alt: string;
  aspect?: string;
  className?: string;
  cursorWord?: string;
  art?: ArtKind;
};

export default function MediaImage({
  src,
  alt,
  aspect = "4 / 5",
  className = "",
  cursorWord,
  art = "scene",
}: Props) {
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className={`relative overflow-hidden bg-indigo ${className}`}
      style={{ aspectRatio: aspect }}
      data-cursor-word={cursorWord}
    >
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="h-full w-full object-cover"
          onError={() => setHasError(true)}
        />
      ) : (
        <MediaFallback src={src} art={art} />
      )}
    </div>
  );
}
