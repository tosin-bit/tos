"use client";

import { useRef } from "react";
import Section, { SectionLabel } from "@/components/Section";
import useMediaMissing from "@/components/media/useMediaMissing";
import PlaceholderArt, { type Tone } from "@/components/graphics/PlaceholderArt";

type Props = {
  src: string;
  webmSrc?: string;
  poster?: string;
  alt: string;
  label?: string;
  heading: string;
  body?: string;
  /* the clip's own shape — vertical phone footage must not be forced landscape */
  aspect?: string;
  maxWidth?: string;
  reverse?: boolean;
  className?: string;
  tone?: Tone;
};

export default function VideoFeature({
  src,
  webmSrc,
  poster,
  alt,
  label,
  heading,
  body,
  aspect = "9 / 16",
  maxWidth = "max-w-[26rem]",
  reverse = false,
  className = "bg-chalk text-indigo",
  tone = "light",
}: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const missing = useMediaMissing(videoRef);
  const light = tone === "light";

  return (
    <Section as="div" className={className}>
      {label ? (
        <SectionLabel className={light ? "text-brass-deep" : "text-brass"}>{label}</SectionLabel>
      ) : null}
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
        <div className={reverse ? "lg:col-span-5 lg:col-start-8 lg:order-2" : "lg:col-span-5"}>
          <div
            className={`relative w-full overflow-hidden ${maxWidth} ${light ? "bg-sand" : "bg-indigo"}`}
            style={{ aspectRatio: aspect }}
            data-cursor-word="watch"
          >
            {missing ? <PlaceholderArt src={src} kind="scene" tone={tone} /> : null}
            <video
              ref={videoRef}
              muted
              loop
              playsInline
              autoPlay
              preload="metadata"
              poster={poster}
              aria-label={alt}
              className="h-full w-full object-cover"
            >
              {webmSrc ? <source src={webmSrc} type="video/webm" /> : null}
              <source src={src} type="video/mp4" />
            </video>
          </div>
        </div>
        <div
          className={
            reverse ? "lg:col-span-6 lg:col-start-1 lg:order-1" : "lg:col-span-6 lg:col-start-7"
          }
        >
          <h2
            className={`max-w-[18ch] font-display text-3xl uppercase tracking-[0.045em] ${
              light ? "text-indigo" : "text-ecru"
            }`}
          >
            {heading}
          </h2>
          {body ? (
            <p
              className={`mt-5 max-w-measure font-body text-lg leading-relaxed ${
                light ? "text-indigo/80" : "text-ecru/85"
              }`}
            >
              {body}
            </p>
          ) : null}
        </div>
      </div>
    </Section>
  );
}
