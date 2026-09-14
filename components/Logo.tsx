import type React from "react";
import { CIPHER_PATH } from "@/lib/cipher";

export default function Logo({
  className = "",
  title = "Nenneh Cheyassin Secka-Kebe",
  decorative = false,
}: {
  className?: string;
  title?: string;
  /** Set when the name is already written beside it, so it is not read twice. */
  decorative?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      fill="none"
      {...(decorative
        ? { "aria-hidden": true as const }
        : { role: "img" as const, "aria-label": title })}
    >
      <path fill="currentColor" fillRule="evenodd" d={CIPHER_PATH} />
    </svg>
  );
}
