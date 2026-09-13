"use client";

import type React from "react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Section from "@/components/Section";
import MediaImage from "@/components/media/MediaImage";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  src: string;
  alt: string;
  aspect?: string;
  children: React.ReactNode;
};

export default function PinnedPortrait({ src, alt, aspect = "4 / 5", children }: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const portrait = portraitRef.current;
    if (!wrap || !portrait) return;

    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px)", () => {
      const trigger = ScrollTrigger.create({
        trigger: wrap,
        start: "top top",
        end: "bottom bottom",
        pin: portrait,
        pinSpacing: false,
      });
      return () => trigger.kill();
    });

    return () => mm.revert();
  }, []);

  return (
    <Section as="div" className="bg-indigo">
      <div ref={wrapRef} className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div ref={portraitRef} className="lg:col-span-5">
          <MediaImage src={src} alt={alt} aspect={aspect} art="portrait" />
        </div>
        <div className="flex flex-col gap-10 lg:col-span-6 lg:col-start-7">{children}</div>
      </div>
    </Section>
  );
}
