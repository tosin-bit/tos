import type { Metadata } from "next";
import OpeningSection from "@/components/sections/OpeningSection";
import StatementSection from "@/components/sections/StatementSection";
import StorySection from "@/components/sections/StorySection";
import FoundationSection from "@/components/sections/FoundationSection";
import Nenneh100Section from "@/components/sections/Nenneh100Section";
import TableSection from "@/components/sections/TableSection";
import ConversationSection from "@/components/sections/ConversationSection";
import WritingSection from "@/components/sections/WritingSection";
import CultureSection from "@/components/sections/CultureSection";
import PressSection from "@/components/sections/PressSection";
import InvitationsSection from "@/components/sections/InvitationsSection";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <main>
      <OpeningSection />
      <StatementSection />
      <StorySection />
      <FoundationSection />
      <Nenneh100Section />
      <TableSection />
      <ConversationSection />
      <WritingSection />
      <CultureSection />
      <PressSection />
      <InvitationsSection />
    </main>
  );
}
