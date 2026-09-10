"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const [word, setWord] = useState<string | null>(null);
  const [isTouch, setIsTouch] = useState(true);

  useEffect(() => {
    setIsTouch(window.matchMedia("(hover: none), (pointer: coarse)").matches);
  }, []);

  useEffect(() => {
    if (isTouch) return;

    const dot = dotRef.current;
    if (!dot) return;

    const xTo = gsap.quickTo(dot, "x", { duration: 0.5, ease: "power3.out" });
    const yTo = gsap.quickTo(dot, "y", { duration: 0.5, ease: "power3.out" });

    const onMove = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    const onOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest<HTMLElement>("[data-cursor-word]");
      setWord(target ? target.dataset.cursorWord ?? null : null);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, [isTouch]);

  if (isTouch) return null;

  return (
    <div
      ref={dotRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[100] flex items-center justify-center transition-[width,height,background-color] duration-300 ease-signature"
      style={{
        width: word ? 88 : 10,
        height: word ? 88 : 10,
        marginLeft: word ? -44 : -5,
        marginTop: word ? -44 : -5,
        borderRadius: "50%",
        backgroundColor: "#EFE7D6",
      }}
    >
      {word ? (
        <span className="font-body text-xs lowercase tracking-normal text-indigo">{word}</span>
      ) : null}
    </div>
  );
}
