import type React from "react";

type Size = "sm" | "md" | "lg" | "xl";

type Props = {
  as?: "h1" | "h2" | "h3";
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

/*
  Every heading on the site is set in block letters. Capitals need their own
  scale and their own tracking: the larger the size, the tighter the track,
  because letterspacing that reads as elegant at 16px reads as broken at 56px.
*/
const SIZES: Record<Size, string> = {
  sm: "text-xl tracking-caps",
  md: "text-2xl tracking-caps",
  lg: "text-3xl tracking-[0.045em]",
  xl: "text-4xl tracking-caps-tight",
};

export default function Heading({
  as: Tag = "h2",
  size = "md",
  className = "",
  children,
}: Props) {
  return (
    <Tag className={`font-display uppercase ${SIZES[size]} ${className}`}>{children}</Tag>
  );
}
