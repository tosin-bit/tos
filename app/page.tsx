import type { Metadata } from "next";
import OpeningSection from "@/components/sections/OpeningSection";
import StatementSection from "@/components/sections/StatementSection";
import StorySection from "@/components/sections/StorySection";
import WorkSection from "@/components/sections/WorkSection";
import GivingSection from "@/components/sections/GivingSection";
import QuotesSection from "@/components/sections/QuotesSection";
import PressSection from "@/components/sections/PressSection";
import ContactSection from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <main>
      <OpeningSection />
      <StatementSection />
      <StorySection />
      <WorkSection />
      <GivingSection />
      <QuotesSection />
      <PressSection />
      <ContactSection />
    </main>
  );
}
