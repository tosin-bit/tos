"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { EASE, prefersReducedMotion } from "@/lib/motion";

export default function PageTransition() {
  const pathname = usePathname();
  const curtainRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const curtain = curtainRef.current;
    if (!curtain || prefersReducedMotion()) return;

    gsap.set(curtain, { yPercent: 100, autoAlpha: 1 });
    const tl = gsap.timeline({
      onComplete: () => gsap.set(curtain, { autoAlpha: 0 }),
    });
    tl.to(curtain, { yPercent: 0, duration: 0.45, ease: EASE }).to(curtain, {
      yPercent: -100,
      duration: 0.45,
      ease: EASE,
      delay: 0.05,
    });

    return () => {
      tl.kill();
    };
  }, [pathname]);

  return (
    <div
      ref={curtainRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[90] flex items-center justify-center bg-indigo opacity-0"
      style={{ visibility: "hidden" }}
    >
      <span className="font-display text-[18vw] leading-none text-ecru">NC</span>
    </div>
  );
}
