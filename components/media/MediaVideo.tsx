"use client";

import { useEffect, useRef, useState } from "react";
import MediaFallback from "./MediaFallback";
import useMediaMissing from "./useMediaMissing";
import type { ArtKind } from "@/components/graphics/PlaceholderArt";
import { prefersReducedMotion } from "@/lib/motion";

type Props = {
  src: string;
  webmSrc?: string;
  alt: string;
  aspect?: string;
  className?: string;
  cursorWord?: string;
  poster?: string;
  art?: ArtKind;
};

export default function MediaVideo({
  src,
  webmSrc,
  alt,
  aspect = "16 / 9",
  className = "",
  cursorWord = "watch",
  poster,
  art = "scene",
}: Props) {
  const [reduced, setReduced] = useState(false);
  const [playing, setPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const hasError = useMediaMissing(videoRef);

  useEffect(() => {
    const isReduced = prefersReducedMotion();
    setReduced(isReduced);
    if (isReduced) setPlaying(false);
  }, []);

  const togglePlay = () => {
    const el = videoRef.current;
    if (!el) return;
    if (el.paused) {
      el.play();
      setPlaying(true);
    } else {
      el.pause();
      setPlaying(false);
    }
  };

  return (
    <div
      className={`relative overflow-hidden bg-indigo ${className}`}
      style={{ aspectRatio: aspect }}
      data-cursor-word={cursorWord}
      role="group"
      aria-label={alt}
    >
      {!hasError ? (
        <>
          <video
            ref={videoRef}
            muted
            loop
            playsInline
            autoPlay={!reduced}
            poster={poster}
            className="h-full w-full object-cover"
          >
            {webmSrc ? <source src={webmSrc} type="video/webm" /> : null}
            <source src={src} type="video/mp4" />
          </video>
          {reduced ? (
            <button
              type="button"
              onClick={togglePlay}
              className="absolute bottom-4 left-4 border border-brass px-4 py-2 font-body text-xs text-ecru"
            >
              {playing ? "pause" : "play"}
            </button>
          ) : null}
        </>
      ) : (
        <MediaFallback src={src} art={art} />
      )}
    </div>
  );
}
