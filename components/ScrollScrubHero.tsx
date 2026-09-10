"use client";

import type React from "react";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MediaFallback from "@/components/media/MediaFallback";
import { prefersReducedMotion } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger);

const SRC = "/media/video/hero-portrait.mp4";

export default function ScrollScrubHero({ children }: { children?: React.ReactNode }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const outerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const [hasError, setHasError] = useState(false);
  const [playing, setPlaying] = useState(true);
  const [showControl, setShowControl] = useState(false);
  const [scrub, setScrub] = useState(true);

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
              onError={() => setHasError(true)}
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
          <MediaFallback src={SRC} kind="video" />
        )}
        <div className="absolute inset-0 bg-indigo/25" aria-hidden="true" />
        {children}
      </div>
    </div>
  );
}
