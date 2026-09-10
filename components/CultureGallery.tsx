"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MediaImage from "@/components/media/MediaImage";
import { prefersReducedMotion } from "@/lib/motion";
import { culture } from "@/lib/content";

gsap.registerPlugin(ScrollTrigger);

export default function CultureGallery() {
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

    const distance = () => track.scrollWidth - window.innerWidth;

    const skewTo = gsap.quickTo(track, "skewX", { duration: 0.4, ease: "power3.out" });
    let settleTimeout: ReturnType<typeof setTimeout>;

    const trigger = ScrollTrigger.create({
      trigger: pin,
      start: "top top",
      end: () => `+=${distance()}`,
      pin: true,
      scrub: 0.5,
      onUpdate: (self) => {
        gsap.set(track, { x: -distance() * self.progress });
        gsap.set(progress, { scaleX: self.progress });

        const velocity = gsap.utils.clamp(-2, 2, self.getVelocity() / -1000);
        skewTo(velocity);
        clearTimeout(settleTimeout);
        settleTimeout = setTimeout(() => skewTo(0), 120);
      },
    });

    return () => {
      trigger.kill();
      clearTimeout(settleTimeout);
    };
  }, [useCarousel]);

  if (useCarousel) {
    return (
      <div className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto px-gutter pb-4">
        {culture.map((item) => (
          <div key={item.image} className="w-[80vw] flex-shrink-0 snap-start sm:w-[50vw]">
            <MediaImage src={item.image} alt={item.caption} aspect={item.aspect} />
            <p className="mt-3 font-body text-xs text-brass">{item.caption}</p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div ref={pinRef} className="relative h-screen w-full overflow-hidden">
      <div ref={trackRef} className="flex h-full items-center gap-10 pl-gutter">
        {culture.map((item) => (
          <div key={item.image} className="w-[28vw] flex-shrink-0">
            <MediaImage src={item.image} alt={item.caption} aspect={item.aspect} />
            <p className="mt-3 font-body text-xs text-brass">{item.caption}</p>
          </div>
        ))}
      </div>
      <div className="absolute inset-x-gutter bottom-8 h-px bg-brass/30">
        <div ref={progressRef} className="h-full w-full origin-left scale-x-0 bg-brass" />
      </div>
    </div>
  );
}
