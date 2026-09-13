"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LineReveal from "@/components/LineReveal";
import { hero } from "@/lib/content";
import { prefersReducedMotion } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
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
          alt="Nenneh Cheyassin Secka-Kebe in a black and gold embroidered grand boubou"
          className="h-full w-full object-cover object-[50%_22%]"
        />
      </div>

      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(96deg, rgba(28,27,58,0.93) 0%, rgba(28,27,58,0.74) 38%, rgba(28,27,58,0.12) 68%, rgba(28,27,58,0) 100%)",
        }}
      />

      <div className="absolute inset-0 z-10 flex items-center px-gutter">
        <div className="w-full max-w-[60rem]">
          <LineReveal
            as="p"
            lines={hero.statement}
            immediate
            className="font-display text-[clamp(2rem,4.6vw,4rem)] leading-[1.12] text-ecru"
          />
          <p className="mt-8 font-body text-sm text-brass">{hero.attribution}</p>
        </div>
      </div>
    </section>
  );
}
