import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import IntroSection from "@/components/sections/IntroSection";
import FeaturedFoundationSection from "@/components/sections/FeaturedFoundationSection";
import PressSection from "@/components/sections/PressSection";
import VideoGallerySection from "@/components/sections/VideoGallerySection";
import InitiativesSection from "@/components/sections/InitiativesSection";
import QuoteWallSection from "@/components/sections/QuoteWallSection";
import JournalSection from "@/components/sections/JournalSection";
import ClosingSection from "@/components/sections/ClosingSection";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <IntroSection />
      <FeaturedFoundationSection />
      <PressSection />
      <VideoGallerySection />
      <InitiativesSection />
      <QuoteWallSection />
      <JournalSection />
      <ClosingSection />
    </main>
  );
}
