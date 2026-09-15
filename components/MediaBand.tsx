"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PlaceholderArt, { type ArtKind, type Tone } from "@/components/graphics/PlaceholderArt";
import useMediaMissing from "@/components/media/useMediaMissing";
import { prefersReducedMotion } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  src: string;
  alt: string;
  kind?: "image" | "video";
  art?: ArtKind;
  height?: string;
  objectPosition?: string;
  caption?: string;
  tone?: Tone;
};

export default function MediaBand({
  src,
  alt,
  kind = "image",
  art = "scene",
  height = "h-[70svh]",
  objectPosition = "center",
  caption,
  tone = "dark",
}: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [imgFailed, setImgFailed] = useState(false);
  const videoMissing = useMediaMissing(videoRef);
  const missing = kind === "video" ? videoMissing : imgFailed;

  useEffect(() => {
    const wrap = wrapRef.current;
    const inner = innerRef.current;
    if (!wrap || !inner || prefersReducedMotion()) return;

    const tween = gsap.fromTo(
      inner,
      { yPercent: -6 },
      {
        yPercent: 6,
        ease: "none",
        scrollTrigger: { trigger: wrap, start: "top bottom", end: "bottom top", scrub: true },
      },
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return (
    <figure ref={wrapRef} className={`relative w-full overflow-hidden ${tone === "light" ? "bg-sand" : "bg-indigo"} ${height}`}>
      <div ref={innerRef} className="absolute inset-0 scale-110">
        {missing ? (
          <PlaceholderArt src={src} kind={art} tone={tone} />
        ) : kind === "video" ? (
          <video
            ref={videoRef}
            muted
            loop
            playsInline
            autoPlay
            aria-label={alt}
            className="h-full w-full object-cover"
            style={{ objectPosition }}
          >
            <source src={src} type="video/mp4" />
          </video>
        ) : (
          <img
            src={src}
            alt={alt}
            loading="lazy"
            onError={() => setImgFailed(true)}
            className="h-full w-full object-cover"
            style={{ objectPosition }}
          />
        )}
      </div>
      {caption ? (
        <figcaption className="absolute inset-x-0 bottom-0 px-gutter pb-6">
          <span className="font-body text-sm text-ecru drop-shadow-none">{caption}</span>
        </figcaption>
      ) : null}
    </figure>
  );
}
