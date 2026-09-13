"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Section from "@/components/Section";
import MediaImage from "@/components/media/MediaImage";
import { story } from "@/lib/content";

gsap.registerPlugin(ScrollTrigger);

export default function StorySection() {
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
          <MediaImage
            src="/media/img/portrait-seated.jpg"
            alt="Nenneh Cheyassin Secka-Kebe, seated portrait"
            aspect="4 / 5"
            art="portrait"
          />
        </div>
        <div className="flex flex-col gap-8 lg:col-span-6 lg:col-start-7 lg:py-24">
          {story.paragraphs.map((paragraph, i) => (
            <p key={i} className="max-w-measure font-body text-lg leading-relaxed text-ecru/90">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </Section>
  );
}
