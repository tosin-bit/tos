"use client";

import type React from "react";
import { useId } from "react";
import TextilePattern, { motifFor } from "./TextilePattern";

export type ArtKind = "portrait" | "scene" | "detail" | "press";

const BRASS = "#A8813F";
const ECRU = "#EFE7D6";

function hashOf(src: string) {
  let h = 0;
  for (let i = 0; i < src.length; i += 1) h = (h * 31 + src.charCodeAt(i)) | 0;
  return Math.abs(h);
}

function Figure({ uid, seed }: ArtProps) {
  // an eclipse form: an ecru disc cut by an offset ground disc
  return (
    <g>
      <defs>
        <clipPath id={`pa-crescent-${uid}`}>
          <circle cx="104" cy="100" r="58" />
        </clipPath>
      </defs>
      <circle cx="104" cy="100" r="58" fill={ECRU} opacity="0.9" />
      <g clipPath={`url(#pa-crescent-${uid})`}>
        <circle
          cx={104 - 20 - (seed % 5) * 6}
          cy={100 - 26 + (seed % 3) * 12}
          r="58"
          fill="#1C1B3A"
          opacity="0.96"
        />
      </g>
      <circle cx="104" cy="100" r="58" fill="none" stroke={BRASS} strokeWidth="1.75" />
      <circle cx="104" cy="100" r="76" fill="none" stroke={BRASS} strokeWidth="1" opacity="0.5" />
      <path d="M104 26 A74 74 0 0 1 178 100" fill="none" stroke={BRASS} strokeWidth="2.5" opacity="0.85" />
    </g>
  );
}

type ArtProps = { uid: string; seed: number };

function Scene(_: ArtProps) {
  // stacked cloth bands crossed by a brass disc
  return (
    <g>
      <rect x="0" y="52" width="200" height="26" fill={ECRU} opacity="0.30" />
      <rect x="0" y="96" width="200" height="14" fill={BRASS} opacity="0.55" />
      <rect x="0" y="128" width="200" height="34" fill={ECRU} opacity="0.20" />
      <circle cx="132" cy="100" r="52" fill={BRASS} opacity="0.42" />
      <circle cx="132" cy="100" r="52" fill="none" stroke={ECRU} strokeWidth="1.5" opacity="0.55" />
      <g stroke={ECRU} strokeWidth="1" opacity="0.3">
        <line x1="52" y1="0" x2="52" y2="200" />
      </g>
    </g>
  );
}

function Detail(_: ArtProps) {
  return (
    <g fill="none" stroke={BRASS} strokeWidth="1.5" opacity="0.6">
      <circle cx="100" cy="100" r="26" />
      <circle cx="100" cy="100" r="48" />
      <circle cx="100" cy="100" r="70" />
      <circle cx="100" cy="100" r="12" fill={ECRU} opacity="0.45" stroke="none" />
      <g stroke={ECRU} opacity="0.35">
        <line x1="100" y1="8" x2="100" y2="192" />
        <line x1="8" y1="100" x2="192" y2="100" />
      </g>
    </g>
  );
}

function Press(_: ArtProps) {
  return (
    <g>
      <rect x="34" y="58" width="132" height="84" fill={ECRU} opacity="0.14" />
      <rect x="34" y="58" width="132" height="84" fill="none" stroke={BRASS} strokeWidth="1.5" opacity="0.6" />
      <g stroke={ECRU} strokeWidth="3" opacity="0.42">
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
}: {
  src: string;
  kind?: ArtKind;
  label?: boolean;
}) {
  const seed = hashOf(src);
  const uid = useId().replace(/[:]/g, "");
  const Art = ART[kind];

  return (
    <div className="absolute inset-0 overflow-hidden">
      <TextilePattern motif={motifFor(seed)} ground={seed % 7 === 0 ? "wine" : "indigo"} />
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 200 200"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        <Art uid={uid} seed={seed} />
      </svg>
      <div className="pointer-events-none absolute inset-3 border border-brass/25" aria-hidden="true" />
      {label ? (
        <span className="absolute bottom-4 left-4 font-body text-xs text-brass/90">
          {src.split("/").pop()}
        </span>
      ) : null}
    </div>
  );
}
