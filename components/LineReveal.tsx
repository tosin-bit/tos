"use client";

import type React from "react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { EASE, prefersReducedMotion } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  lines: string[];
  as?: "h1" | "h2" | "h3" | "p";
  className?: string;
  lineClassName?: string;
  immediate?: boolean;
  delay?: number;
};

export default function LineReveal({
  lines,
  as = "p",
  className = "",
  lineClassName = "",
  immediate = false,
  delay = 0,
}: Props) {
  const containerRef = useRef<HTMLElement>(null);
  const Tag = as;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const spans = container.querySelectorAll<HTMLElement>("[data-line]");

    if (prefersReducedMotion()) {
      gsap.set(spans, { yPercent: 0 });
      return;
    }

    gsap.set(spans, { yPercent: 110 });

    const anim = {
      yPercent: 0,
      duration: 1.1,
      ease: EASE,
      stagger: 0.07,
      delay,
    };

    if (immediate) {
      gsap.to(spans, anim);
    } else {
      gsap.to(spans, {
        ...anim,
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
        },
      });
    }
  }, [immediate, delay]);

  return (
    <Tag ref={containerRef as React.Ref<HTMLHeadingElement>} className={className}>
      {lines.map((line, i) => (
        <span className="line-mask block" key={i}>
          <span data-line className={`block ${lineClassName}`}>
            {line}
          </span>
        </span>
      ))}
    </Tag>
  );
}
