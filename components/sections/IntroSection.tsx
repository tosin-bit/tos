import Link from "next/link";
import Section from "@/components/Section";
import ClipReveal from "@/components/ClipReveal";
import MediaImage from "@/components/media/MediaImage";
import { intro } from "@/lib/content";

export default function IntroSection() {
  return (
    <Section id="intro" className="bg-indigo">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <ClipReveal direction="left">
            <MediaImage
              src="/media/img/portrait-seated.jpg"
              alt="Nenneh Cheyassin Secka-Kebe in a blue and white embroidered outfit with gold jewellery"
              aspect="1066 / 1132"
              art="portrait"
            />
          </ClipReveal>
        </div>
        <div className="flex flex-col justify-center lg:col-span-6 lg:col-start-7">
          <p className="max-w-measure font-display text-3xl leading-snug text-ecru">{intro.lead}</p>
          {intro.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="mt-6 max-w-measure font-body text-lg leading-relaxed text-ecru/85"
            >
              {paragraph}
            </p>
          ))}
          <Link
            href="/about"
            className="mt-10 inline-block w-fit border-b border-brass pb-1 font-body text-sm text-brass transition-colors duration-300 hover:text-ecru"
          >
            View more
          </Link>
        </div>
      </div>
    </Section>
  );
}
