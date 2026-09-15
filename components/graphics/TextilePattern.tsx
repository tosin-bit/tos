"use client";

import { useId } from "react";

export type Motif = "rings" | "weave" | "starburst" | "lattice" | "dots";

const MOTIFS: Motif[] = ["rings", "weave", "starburst", "lattice", "dots"];

export function motifFor(index: number): Motif {
  return MOTIFS[Math.abs(index) % MOTIFS.length];
}

const GROUND = {
  indigo: "#1C1B3A",
  wine: "#5E1F32",
  deep: "#16152F",
  sand: "#EDE3D0",
  chalk: "#F5EFE2",
} as const;

type Props = {
  motif?: Motif;
  ground?: keyof typeof GROUND;
  scale?: number;
  className?: string;
};

export default function TextilePattern({
  motif = "rings",
  ground = "indigo",
  scale = 1,
  className = "",
}: Props) {
  const uid = useId().replace(/[:]/g, "");
  const patternId = `tx-${motif}-${uid}`;
  const light = ground === "sand" || ground === "chalk";
  const brass = light ? "#8A6A2F" : "#A8813F";
  // the second ink reads against its ground: pale on dark, indigo on light
  const ecru = light ? "#1C1B3A" : "#EFE7D6";

  return (
    <svg
      className={`h-full w-full ${className}`}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        {motif === "rings" ? (
          <pattern
            id={patternId}
            width={72 * scale}
            height={72 * scale}
            patternUnits="userSpaceOnUse"
          >
            <rect width={72 * scale} height={72 * scale} fill={GROUND[ground]} />
            <g
              transform={`scale(${scale})`}
              fill="none"
              stroke={brass}
              strokeWidth="1"
              opacity="0.38"
            >
              <circle cx="36" cy="36" r="7" />
              <circle cx="36" cy="36" r="15" />
              <circle cx="36" cy="36" r="23" />
              <circle cx="36" cy="36" r="31" />
            </g>
            <g transform={`scale(${scale})`} fill={ecru} opacity="0.16">
              <circle cx="36" cy="36" r="3" />
              <circle cx="0" cy="0" r="2.5" />
              <circle cx="72" cy="0" r="2.5" />
              <circle cx="0" cy="72" r="2.5" />
              <circle cx="72" cy="72" r="2.5" />
            </g>
          </pattern>
        ) : null}

        {motif === "weave" ? (
          <pattern
            id={patternId}
            width={56 * scale}
            height={56 * scale}
            patternUnits="userSpaceOnUse"
          >
            <rect width={56 * scale} height={56 * scale} fill={GROUND[ground]} />
            <g transform={`scale(${scale})`}>
              <rect x="0" y="0" width="56" height="12" fill={ecru} opacity="0.07" />
              <rect x="0" y="28" width="56" height="12" fill={brass} opacity="0.16" />
              <g stroke={brass} strokeWidth="1" opacity="0.3">
                <line x1="0" y1="20" x2="56" y2="20" />
                <line x1="0" y1="48" x2="56" y2="48" />
              </g>
              <g stroke={ecru} strokeWidth="1.5" opacity="0.14">
                <line x1="10" y1="0" x2="10" y2="56" />
                <line x1="32" y1="0" x2="32" y2="56" />
                <line x1="48" y1="0" x2="48" y2="56" />
              </g>
            </g>
          </pattern>
        ) : null}

        {motif === "starburst" ? (
          <pattern
            id={patternId}
            width={96 * scale}
            height={96 * scale}
            patternUnits="userSpaceOnUse"
          >
            <rect width={96 * scale} height={96 * scale} fill={GROUND[ground]} />
            <g transform={`scale(${scale})`}>
              <g stroke={brass} strokeWidth="1" opacity="0.34">
                {Array.from({ length: 16 }, (_, i) => {
                  const a = (i * Math.PI * 2) / 16;
                  return (
                    <line
                      key={i}
                      x1={48 + Math.cos(a) * 10}
                      y1={48 + Math.sin(a) * 10}
                      x2={48 + Math.cos(a) * 40}
                      y2={48 + Math.sin(a) * 40}
                    />
                  );
                })}
              </g>
              <circle cx="48" cy="48" r="9" fill="none" stroke={ecru} strokeWidth="1" opacity="0.24" />
              <circle cx="48" cy="48" r="3.5" fill={brass} opacity="0.5" />
            </g>
          </pattern>
        ) : null}

        {motif === "lattice" ? (
          <pattern
            id={patternId}
            width={64 * scale}
            height={64 * scale}
            patternUnits="userSpaceOnUse"
          >
            <rect width={64 * scale} height={64 * scale} fill={GROUND[ground]} />
            <g transform={`scale(${scale})`}>
              <g stroke={brass} strokeWidth="1" opacity="0.32">
                <path d="M32 0 L64 32 L32 64 L0 32 Z" fill="none" />
                <path d="M32 14 L50 32 L32 50 L14 32 Z" fill="none" />
              </g>
              <g fill={ecru} opacity="0.15">
                <circle cx="32" cy="32" r="2.5" />
                <circle cx="0" cy="0" r="2" />
                <circle cx="64" cy="64" r="2" />
                <circle cx="0" cy="64" r="2" />
                <circle cx="64" cy="0" r="2" />
              </g>
            </g>
          </pattern>
        ) : null}

        {motif === "dots" ? (
          <pattern
            id={patternId}
            width={40 * scale}
            height={40 * scale}
            patternUnits="userSpaceOnUse"
          >
            <rect width={40 * scale} height={40 * scale} fill={GROUND[ground]} />
            <g transform={`scale(${scale})`}>
              <g fill={brass} opacity="0.42">
                <circle cx="10" cy="10" r="2.6" />
                <circle cx="30" cy="30" r="2.6" />
              </g>
              <g fill={ecru} opacity="0.16">
                <circle cx="30" cy="10" r="1.6" />
                <circle cx="10" cy="30" r="1.6" />
              </g>
              <g stroke={brass} strokeWidth="0.75" opacity="0.18">
                <line x1="0" y1="20" x2="40" y2="20" />
                <line x1="20" y1="0" x2="20" y2="40" />
              </g>
            </g>
          </pattern>
        ) : null}
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  );
}
