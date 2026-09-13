"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LineReveal from "@/components/LineReveal";
import { opening } from "@/lib/content";
import { prefersReducedMotion } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger);

export default function OpeningSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;
    if (!section || !image || prefersReducedMotion()) return;

    const tween = gsap.fromTo(
      image,
      { scale: 1.08, yPercent: -2 },
      {
        scale: 1,
        yPercent: 4,
        ease: "none",
        scrollTrigger: { trigger: section, start: "top top", end: "bottom top", scrub: true },
      },
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative h-[100svh] w-full overflow-hidden bg-indigo">
      <div ref={imageRef} className="absolute inset-0">
        <img
          src="/media/img/portrait-hero.jpg"
          alt="Nenneh Cheyassin Secka-Kebe in a gold headwrap and turquoise embroidered dress"
          className="h-full w-full object-cover object-[68%_center]"
        />
      </div>

      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(95deg, rgba(28,27,58,0.88) 0%, rgba(28,27,58,0.55) 34%, rgba(28,27,58,0.08) 62%, rgba(28,27,58,0) 100%)",
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-2/5"
        aria-hidden="true"
        style={{
          background: "linear-gradient(to top, rgba(28,27,58,0.92) 0%, rgba(28,27,58,0) 100%)",
        }}
      />

      <div className="absolute inset-x-0 bottom-0 z-10 px-gutter pb-14 lg:max-w-[58%]">
        <LineReveal
          as="h1"
          lines={opening.name}
          immediate
          className="font-display text-[clamp(2.75rem,7vw,6.5rem)] leading-[0.95] text-ecru"
        />
        <div className="mt-5 max-w-measure">
          <LineReveal
            as="p"
            lines={[opening.line]}
            immediate
            delay={0.5}
            className="font-body text-lg text-ecru/90"
          />
        </div>
      </div>
    </section>
  );
}
