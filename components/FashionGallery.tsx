"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MediaImage from "@/components/media/MediaImage";
import { prefersReducedMotion } from "@/lib/motion";
import { fashion } from "@/lib/content";

gsap.registerPlugin(ScrollTrigger);

export default function FashionGallery() {
  const pinRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [useCarousel, setUseCarousel] = useState(true);

  useEffect(() => {
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    setUseCarousel(!isDesktop || prefersReducedMotion());
  }, []);

  useEffect(() => {
    if (useCarousel) return;

    const pin = pinRef.current;
    const track = trackRef.current;
    const progress = progressRef.current;
    if (!pin || !track || !progress) return;

    const distance = () => Math.max(0, track.scrollWidth - window.innerWidth);
    const skewTo = gsap.quickTo(track, "skewX", { duration: 0.4, ease: "power3.out" });
    let settle: ReturnType<typeof setTimeout>;

    const trigger = ScrollTrigger.create({
      trigger: pin,
      start: "top top",
      end: () => `+=${distance()}`,
      pin: true,
      scrub: 0.5,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        gsap.set(track, { x: -distance() * self.progress });
        gsap.set(progress, { scaleX: self.progress });
        // barely perceptible — you feel the speed rather than see it
        const v = gsap.utils.clamp(-2, 2, self.getVelocity() / -1200);
        skewTo(v);
        clearTimeout(settle);
        settle = setTimeout(() => skewTo(0), 120);
      },
    });

    return () => {
      trigger.kill();
      clearTimeout(settle);
    };
  }, [useCarousel]);

  if (useCarousel) {
    return (
      <div className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto px-gutter pb-6">
        {fashion.map((look) => (
          <figure key={look.src} className="w-[74vw] flex-shrink-0 snap-start sm:w-[44vw]">
            <MediaImage src={look.src} alt={look.caption} aspect={look.aspect} art="portrait" />
            <figcaption className="mt-3 font-body text-xs text-brass">{look.caption}</figcaption>
          </figure>
        ))}
      </div>
    );
  }

  return (
    <div ref={pinRef} className="relative h-screen w-full overflow-hidden">
      <div ref={trackRef} className="flex h-full items-center gap-10 pl-gutter will-change-transform">
        {fashion.map((look) => (
          <figure key={look.src} className="h-[62vh] flex-shrink-0">
            <div className="h-[56vh]">
              <MediaImage
                src={look.src}
                alt={look.caption}
                aspect={look.aspect}
                className="h-full w-auto"
                art="portrait"
              />
            </div>
            <figcaption className="mt-3 font-body text-xs text-brass">{look.caption}</figcaption>
          </figure>
        ))}
      </div>
      <div className="absolute inset-x-gutter bottom-10 h-px bg-brass/25">
        <div ref={progressRef} className="h-full w-full origin-left scale-x-0 bg-brass" />
      </div>
    </div>
  );
}
