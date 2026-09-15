"use client";

import { useEffect, useRef, useState } from "react";
import { contact } from "@/lib/content";

export default function ContactChannels() {
  const [copied, setCopied] = useState<string | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => () => clearTimeout(timer.current), []);

  const copy = async (address: string) => {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(address);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(null), 2000);
    } catch {
      // Clipboard blocked (insecure origin, permission denied). The address is
      // still a live mailto link, so there is nothing to recover from.
      setCopied(null);
    }
  };

  return (
    <>
      <ul className="border-t border-indigo/15">
        {contact.emails.map((item, i) => (
          <li key={item.address} className="group relative overflow-hidden border-b border-indigo/15">
            <span
              aria-hidden
              className="absolute inset-0 -translate-x-full bg-indigo transition-transform duration-700 ease-signature group-hover:translate-x-0 group-focus-within:translate-x-0"
            />
            <div className="relative flex items-center gap-5 py-7 transition-[padding] duration-700 ease-signature group-hover:px-5 group-focus-within:px-5">
              <span className="font-body text-xs tabular-nums text-brass-deep transition-colors duration-300 group-hover:text-brass group-focus-within:text-brass">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="min-w-0 flex-1">
                <span className="block font-body text-xs uppercase tracking-caps text-brass-deep transition-colors duration-300 group-hover:text-brass group-focus-within:text-brass">
                  {item.label}
                </span>
                <a
                  href={`mailto:${item.address}`}
                  data-cursor-word="write"
                  className="mt-2 block break-all font-display text-[clamp(0.875rem,2vw,1.5rem)] leading-tight text-indigo transition-colors duration-300 group-hover:text-chalk group-focus-within:text-chalk"
                >
                  {item.address}
                </a>
              </div>

              <button
                type="button"
                onClick={() => copy(item.address)}
                aria-label={`Copy ${item.address}`}
                className="shrink-0 border border-indigo/25 px-3 py-2 font-body text-[0.65rem] uppercase tracking-caps text-indigo/70 transition-colors duration-300 hover:border-brass-deep hover:text-brass-deep group-hover:border-chalk/40 group-hover:text-chalk/80 group-hover:hover:border-brass group-hover:hover:text-brass"
              >
                {copied === item.address ? "Copied" : "Copy"}
              </button>
            </div>
          </li>
        ))}
      </ul>
      <span className="sr-only" role="status" aria-live="polite">
        {copied ? `${copied} copied to the clipboard` : ""}
      </span>
    </>
  );
}
