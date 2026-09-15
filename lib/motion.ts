export const EASE = "cubic-bezier(0.16, 1, 0.3, 1)";

export const DURATION = {
  short: 0.8,
  base: 1.1,
  long: 1.4,
} as const;

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
