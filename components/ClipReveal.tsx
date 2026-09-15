"use client";

import type React from "react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { EASE, prefersReducedMotion } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger);

const INSETS: Record<"left" | "right" | "top" | "bottom", string> = {
  left: "0% 0% 0% 100%",
  right: "0% 100% 0% 0%",
  top: "100% 0% 0% 0%",
  bottom: "0% 0% 100% 0%",
};

type Props = {
  direction?: "left" | "right" | "top" | "bottom";
  className?: string;
  children: React.ReactNode;
};

export default function ClipReveal({ direction = "left", className = "", children }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (prefersReducedMotion()) {
      gsap.set(el, { clipPath: "inset(0% 0% 0% 0%)" });
      return;
    }

    gsap.set(el, { clipPath: `inset(${INSETS[direction]})` });

    const tween = gsap.to(el, {
      clipPath: "inset(0% 0% 0% 0%)",
      duration: 1.3,
      ease: EASE,
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [direction]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
