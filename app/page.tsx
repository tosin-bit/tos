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
import MediaBand from "@/components/MediaBand";
import VideoFeature from "@/components/VideoFeature";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <IntroSection />

      <VideoFeature
        src="/media/video/farato-nenneh-crowd.mp4"
        webmSrc="/media/video/farato-nenneh-crowd.webm"
        poster="/media/img/poster-farato-crowd.jpg"
        alt="Nenneh Cheyassin Secka-Kebe with the women of Farato as the borehole is handed over"
        label="Farato"
        heading="The day the tank was finished."
        body="The borehole at Farato gives the women's farming community irrigation for the gardens and filtered drinking water. This is the handover."
        aspect="464 / 314"
        maxWidth="max-w-[34rem]"
      />

      <FeaturedFoundationSection />

      <MediaBand
        src="/media/img/work-farato-borehole.png"
        alt="Women of the Farato farming community beside the borehole"
        height="h-[62svh]"
        art="scene"
        caption="Farato — the borehole for the women's farming community"
      />

      <PressSection />
      <VideoGallerySection />
      <InitiativesSection />
      <QuoteWallSection />

      <MediaBand
        src="/media/video/conversation-clip.mp4"
        kind="video"
        alt="A clip from The Conversation series"
        height="h-[70svh]"
        art="detail"
      />

      <JournalSection />
      <ClosingSection />
    </main>
  );
}
