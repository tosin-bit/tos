"use client";

import type React from "react";
import { useId } from "react";
import TextilePattern, { motifFor } from "./TextilePattern";

export type ArtKind = "portrait" | "scene" | "detail" | "press";
export type Tone = "dark" | "light";

const BRASS_DARK = "#A8813F";
const BRASS_LIGHT = "#8A6A2F";
const ECRU = "#EFE7D6";
const INK = "#1C1B3A";
const SAND = "#EDE3D0";

type ArtProps = { uid: string; seed: number; tone: Tone };

/* On a dark ground the solid form is pale and the cut-out is ink.
   On a light ground they swap, so the art reads either way. */
function inks(tone: Tone) {
  return {
    brass: tone === "light" ? BRASS_LIGHT : BRASS_DARK,
    solid: tone === "light" ? INK : ECRU,
    ground: tone === "light" ? SAND : INK,
  };
}

function hashOf(src: string) {
  let h = 0;
  for (let i = 0; i < src.length; i += 1) h = (h * 31 + src.charCodeAt(i)) | 0;
  return Math.abs(h);
}

function Figure({ uid, seed, tone }: ArtProps) {
  const { brass, solid, ground } = inks(tone);
  return (
    <g>
      <defs>
        <clipPath id={`pa-crescent-${uid}`}>
          <circle cx="104" cy="100" r="58" />
        </clipPath>
      </defs>
      <circle cx="104" cy="100" r="58" fill={solid} opacity="0.9" />
      <g clipPath={`url(#pa-crescent-${uid})`}>
        <circle
          cx={104 - 20 - (seed % 5) * 6}
          cy={100 - 26 + (seed % 3) * 12}
          r="58"
          fill={ground}
          opacity="0.96"
        />
      </g>
      <circle cx="104" cy="100" r="58" fill="none" stroke={brass} strokeWidth="1.75" />
      <circle cx="104" cy="100" r="76" fill="none" stroke={brass} strokeWidth="1" opacity="0.5" />
      <path d="M104 26 A74 74 0 0 1 178 100" fill="none" stroke={brass} strokeWidth="2.5" opacity="0.85" />
    </g>
  );
}

function Scene({ tone }: ArtProps) {
  const { brass, solid } = inks(tone);
  return (
    <g>
      <rect x="0" y="52" width="200" height="26" fill={solid} opacity="0.3" />
      <rect x="0" y="96" width="200" height="14" fill={brass} opacity="0.55" />
      <rect x="0" y="128" width="200" height="34" fill={solid} opacity="0.2" />
      <circle cx="132" cy="100" r="52" fill={brass} opacity="0.42" />
      <circle cx="132" cy="100" r="52" fill="none" stroke={solid} strokeWidth="1.5" opacity="0.55" />
      <g stroke={solid} strokeWidth="1" opacity="0.3">
        <line x1="52" y1="0" x2="52" y2="200" />
      </g>
    </g>
  );
}

function Detail({ tone }: ArtProps) {
  const { brass, solid } = inks(tone);
  return (
    <g fill="none" stroke={brass} strokeWidth="1.5" opacity="0.6">
      <circle cx="100" cy="100" r="26" />
      <circle cx="100" cy="100" r="48" />
      <circle cx="100" cy="100" r="70" />
      <circle cx="100" cy="100" r="12" fill={solid} opacity="0.45" stroke="none" />
      <g stroke={solid} opacity="0.35">
        <line x1="100" y1="8" x2="100" y2="192" />
        <line x1="8" y1="100" x2="192" y2="100" />
      </g>
    </g>
  );
}

function Press({ tone }: ArtProps) {
  const { brass, solid } = inks(tone);
  return (
    <g>
      <rect x="34" y="58" width="132" height="84" fill={solid} opacity="0.14" />
      <rect x="34" y="58" width="132" height="84" fill="none" stroke={brass} strokeWidth="1.5" opacity="0.6" />
      <g stroke={solid} strokeWidth="3" opacity="0.42">
        <line x1="52" y1="84" x2="148" y2="84" />
        <line x1="52" y1="100" x2="126" y2="100" />
        <line x1="52" y1="116" x2="140" y2="116" />
      </g>
    </g>
  );
}

const ART: Record<ArtKind, (p: ArtProps) => React.ReactElement> = {
  portrait: Figure,
  scene: Scene,
  detail: Detail,
  press: Press,
};

export default function PlaceholderArt({
  src,
  kind = "scene",
  label = true,
  tone = "dark",
}: {
  src: string;
  kind?: ArtKind;
  label?: boolean;
  tone?: Tone;
}) {
  const seed = hashOf(src);
  const uid = useId().replace(/[:]/g, "");
  const Art = ART[kind];

  return (
    <div className="absolute inset-0 overflow-hidden">
      <TextilePattern
        motif={motifFor(seed)}
        ground={
          tone === "light"
            ? seed % 5 === 0
              ? "chalk"
              : "sand"
            : seed % 7 === 0
              ? "wine"
              : "indigo"
        }
      />
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 200 200"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        <Art uid={uid} seed={seed} tone={tone} />
      </svg>
      <div
        className={`pointer-events-none absolute inset-3 border ${
          tone === "light" ? "border-brass-deep/30" : "border-brass/25"
        }`}
        aria-hidden="true"
      />
      {label ? (
        <span
          className={`absolute bottom-4 left-4 font-body text-xs ${
            tone === "light" ? "text-brass-deep" : "text-brass/90"
          }`}
        >
          {src.split("/").pop()}
        </span>
      ) : null}
    </div>
  );
}
