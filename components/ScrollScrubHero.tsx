"use client";

import type React from "react";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextilePattern from "@/components/graphics/TextilePattern";
import useMediaMissing from "@/components/media/useMediaMissing";
import { prefersReducedMotion } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger);

const SRC = "/media/video/hero-portrait.mp4";

function HeroArt() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-indigo" aria-hidden="true">
      <TextilePattern motif="starburst" scale={2.2} />
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1000 620"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <radialGradient id="hero-glow" cx="50%" cy="45%" r="55%">
            <stop offset="0%" stopColor="#5E1F32" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#5E1F32" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="735" cy="300" r="340" fill="url(#hero-glow)" />
        <defs>
          <clipPath id="hero-crescent">
            <circle cx="742" cy="286" r="188" />
          </clipPath>
        </defs>
        {/* eclipse: an ecru disc cut by an offset indigo disc */}
        <g>
          <circle cx="742" cy="286" r="188" fill="#EFE7D6" opacity="0.93" />
          <g clipPath="url(#hero-crescent)">
            <circle cx="640" cy="232" r="188" fill="#1C1B3A" />
            <circle cx="640" cy="232" r="188" fill="none" stroke="#A8813F" strokeWidth="2.5" opacity="0.85" />
          </g>
          <circle cx="742" cy="286" r="188" fill="none" stroke="#A8813F" strokeWidth="3" />
        </g>
        <g fill="none" stroke="#A8813F">
          <circle cx="742" cy="286" r="236" strokeWidth="1.5" opacity="0.55" />
          <circle cx="742" cy="286" r="286" strokeWidth="1" opacity="0.3" />
          <path d="M742 62 A224 224 0 0 1 966 286" strokeWidth="4" opacity="0.9" />
        </g>
        <g stroke="#A8813F" strokeWidth="1.5" opacity="0.4">
          <line x1="0" y1="498" x2="1000" y2="498" />
          <line x1="500" y1="0" x2="500" y2="620" strokeWidth="1" opacity="0.5" />
        </g>
      </svg>
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(100deg, rgba(28,27,58,0.97) 0%, rgba(28,27,58,0.90) 34%, rgba(28,27,58,0.34) 62%, rgba(28,27,58,0.05) 100%)",
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-1/3"
        style={{
          background: "linear-gradient(to top, rgba(28,27,58,0.92) 0%, rgba(28,27,58,0) 100%)",
        }}
      />
      <span className="absolute right-6 top-24 font-body text-xs text-brass/40">
        hero-portrait.mp4
      </span>
    </div>
  );
}

export default function ScrollScrubHero({ children }: { children?: React.ReactNode }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const outerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(true);
  const [showControl, setShowControl] = useState(false);
  const [scrub, setScrub] = useState(true);
  const hasError = useMediaMissing(videoRef);

  useEffect(() => {
    const video = videoRef.current;
    const outer = outerRef.current;
    if (!video || !outer) return;

    if (hasError) {
      setScrub(false);
      return;
    }

    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    const reduced = prefersReducedMotion();

    if (reduced || !isDesktop) {
      setScrub(false);
      setShowControl(reduced);
      video.autoplay = true;
      video.play().catch(() => {});
      return;
    }

    let trigger: ScrollTrigger | undefined;

    const onLoaded = () => {
      const duration = video.duration || 0;
      video.pause();

      trigger = ScrollTrigger.create({
        trigger: outer,
        start: "top top",
        end: "+=150%",
        pin: stickyRef.current ?? undefined,
        scrub: 0.4,
        onUpdate: (self) => {
          if (!duration) return;
          video.currentTime = self.progress * duration;
        },
        onLeave: () => {
          video.play().catch(() => {});
        },
        onEnterBack: () => {
          video.pause();
        },
      });
    };

    video.addEventListener("loadedmetadata", onLoaded);
    return () => {
      video.removeEventListener("loadedmetadata", onLoaded);
      trigger?.kill();
    };
  }, [hasError]);

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
    <div ref={outerRef} className={`relative ${scrub ? "h-[250vh]" : "h-[100svh]"}`}>
      <div ref={stickyRef} className="relative top-0 h-[100svh] w-full overflow-hidden bg-indigo">
        {!hasError ? (
          <>
            <video
              ref={videoRef}
              muted
              loop
              playsInline
              preload="auto"
              className="h-full w-full object-cover"
            >
              <source src={SRC} type="video/mp4" />
            </video>
            {showControl ? (
              <button
                type="button"
                onClick={togglePlay}
                className="absolute bottom-8 right-8 z-10 border border-brass px-4 py-2 font-body text-xs text-ecru"
              >
                {playing ? "pause" : "play"}
              </button>
            ) : null}
          </>
        ) : (
          <HeroArt />
        )}
        {!hasError ? <div className="absolute inset-0 bg-indigo/25" aria-hidden="true" /> : null}
        {children}
      </div>
    </div>
  );
}
