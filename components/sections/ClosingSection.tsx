import Link from "next/link";
import Logo from "@/components/Logo";
import { closing } from "@/lib/content";

export default function ClosingSection() {
  return (
    <section className="relative h-[80svh] w-full overflow-hidden bg-indigo">
      <img
        src="/media/img/portrait-contact.jpg"
        alt="Nenneh Cheyassin Secka-Kebe in white and gold lace with a gold necklace"
        className="h-full w-full object-cover object-[center_18%]"
      />
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(to top, rgba(28,27,58,0.95) 0%, rgba(28,27,58,0.45) 55%, rgba(28,27,58,0.15) 100%)",
        }}
      />
      <div className="absolute inset-x-0 bottom-0 z-10 px-gutter pb-16">
        <Logo decorative className="mb-8 h-14 w-14 text-brass" />
        <p className="font-display text-[clamp(2.5rem,7vw,6rem)] leading-none text-ecru">
          {closing.line}
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-block border-b border-brass pb-1 font-body text-base text-brass transition-colors duration-300 hover:text-ecru"
        >
          Contact
        </Link>
      </div>
    </section>
  );
}
