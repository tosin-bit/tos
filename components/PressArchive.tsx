"use client";

import { useMemo, useState } from "react";
import { pressArchive } from "@/lib/content";

// Several pieces ran in two places ("Kerr Fatou / West Coast Radio"). Filter on
// the outlet that published first, keep the full credit in the row.
const primary = (outlet: string) => outlet.split(" / ")[0];

const ALL = pressArchive.flatMap((group) =>
  group.items.map((item) => ({ ...item, year: group.year })),
);

const OUTLETS = Array.from(new Set(ALL.map((item) => primary(item.outlet))));

export default function PressArchive() {
  const [filter, setFilter] = useState<string | null>(null);

  const items = useMemo(
    () => (filter ? ALL.filter((item) => primary(item.outlet) === filter) : ALL),
    [filter],
  );

  const chip = (active: boolean) =>
    `border px-4 py-2 font-body text-xs uppercase tracking-caps transition-colors duration-300 ${
      active
        ? "border-indigo bg-indigo text-chalk"
        : "border-indigo/25 text-indigo/65 hover:border-indigo hover:text-indigo"
    }`;

  return (
    <div>
      <div className="mb-12 flex flex-wrap items-center gap-3">
        <button type="button" onClick={() => setFilter(null)} aria-pressed={filter === null} className={chip(filter === null)}>
          All
        </button>
        {OUTLETS.map((outlet) => (
          <button
            key={outlet}
            type="button"
            onClick={() => setFilter(outlet)}
            aria-pressed={filter === outlet}
            className={chip(filter === outlet)}
          >
            {outlet}
          </button>
        ))}
        <span className="ml-auto font-body text-xs tabular-nums text-indigo/50" role="status" aria-live="polite">
          {items.length} {items.length === 1 ? "piece" : "pieces"}
        </span>
      </div>

      <ul className="border-t border-indigo/15">
        {items.map((item, i) => (
          <li key={item.href} className="group relative">
            <span
              aria-hidden
              className="absolute inset-0 origin-bottom scale-y-0 bg-sand transition-transform duration-500 ease-signature group-hover:scale-y-100 group-focus-within:scale-y-100"
            />
            <a
              href={item.href}
              target="_blank"
              rel="noreferrer"
              data-cursor-word="read"
              className="relative grid grid-cols-[2rem_1fr] items-baseline gap-x-5 gap-y-2 border-b border-indigo/15 py-7 transition-[padding] duration-500 ease-signature group-hover:px-4 sm:grid-cols-[3rem_1fr_13rem]"
            >
              <span className="font-body text-xs tabular-nums text-brass-deep">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="max-w-[40ch] font-display text-xl leading-snug text-indigo transition-colors duration-300 group-hover:text-brass-deep">
                {item.title}
              </span>
              <span className="col-start-2 flex flex-col gap-1 sm:col-start-3 sm:text-right">
                <span className="font-body text-xs uppercase tracking-caps text-indigo/60">
                  {item.outlet}
                </span>
                <span className="font-body text-xs tabular-nums text-indigo/45">{item.date}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
