import Section, { SectionLabel } from "@/components/Section";
import ClipReveal from "@/components/ClipReveal";
import MediaImage from "@/components/media/MediaImage";
import { work } from "@/lib/content";

export default function WorkSection() {
  return (
    <Section id="work" className="bg-indigo">
      <SectionLabel>The work</SectionLabel>
      <p className="mb-16 max-w-measure font-body text-lg text-ecru/90">{work.intro}</p>

      <div className="flex flex-col gap-24">
        {work.projects.map((project, i) => (
          <div key={project.title} className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className={i % 2 === 0 ? "lg:col-span-7" : "lg:col-span-7 lg:col-start-6 lg:order-2"}>
              <ClipReveal direction={i % 2 === 0 ? "left" : "right"}>
                <MediaImage
                  src={project.image}
                  alt={project.alt}
                  aspect="4 / 3"
                  art="scene"
                />
              </ClipReveal>
            </div>
            <div
              className={`flex flex-col justify-center ${
                i % 2 === 0 ? "lg:col-span-4 lg:col-start-9" : "lg:col-span-4 lg:order-1"
              }`}
            >
              <p className="font-display text-3xl text-brass">{project.amount}</p>
              <h3 className="mt-3 font-display text-2xl text-ecru">{project.title}</h3>
              <p className="mt-4 max-w-measure font-body text-base leading-relaxed text-ecru/80">
                {project.body}
              </p>
              <a
                href={project.source.href}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-block w-fit border-b border-brass/60 pb-1 font-body text-sm text-brass transition-colors duration-300 hover:text-ecru"
              >
                {project.source.label}
              </a>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
