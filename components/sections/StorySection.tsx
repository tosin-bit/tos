"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Section, { SectionLabel } from "@/components/Section";
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
    <Section as="div" id="story" className="bg-indigo">
      <SectionLabel>Her story</SectionLabel>
      <div ref={wrapRef} className="mt-4 grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div ref={portraitRef} className="lg:col-span-5">
          <MediaImage
            src="/media/img/portrait-seated.jpg"
            alt="Nenneh Cheyassin Secka-Kebe in a blue and white embroidered outfit with gold jewellery"
            aspect="1066 / 1132"
            art="portrait"
          />
        </div>
        <div className="flex flex-col gap-8 lg:col-span-6 lg:col-start-7 lg:py-16">
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
