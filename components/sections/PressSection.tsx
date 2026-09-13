import Section, { SectionLabel } from "@/components/Section";
import { press } from "@/lib/content";

export default function PressSection() {
  return (
    <Section id="press" className="bg-indigo">
      <SectionLabel>Press</SectionLabel>
      <ul className="flex flex-col divide-y divide-brass/20">
        {press.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              target="_blank"
              rel="noreferrer"
              data-cursor-word="read"
              className="group flex flex-col gap-2 py-7 sm:flex-row sm:items-baseline sm:justify-between"
            >
              <span className="max-w-measure font-display text-2xl text-ecru transition-colors duration-500 group-hover:text-brass">
                {item.title}
              </span>
              <span className="font-body text-sm text-ecru/60">
                {item.outlet}, {item.date}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
