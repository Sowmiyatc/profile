import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { JsonLd } from "@/components/seo/JsonLd";
import { AboutSection } from "@/sections/AboutSection";
import { ArchitectureSection } from "@/sections/ArchitectureSection";
import { CertificationsSection } from "@/sections/CertificationsSection";
import { ContactSection } from "@/sections/ContactSection";
import { ExperienceSection } from "@/sections/ExperienceSection";
import { HighlightsSection } from "@/sections/HighlightsSection";
import { HeroSection } from "@/sections/HeroSection";
import { ProjectsSection } from "@/sections/ProjectsSection";
import { SkillsSection } from "@/sections/SkillsSection";

export default function App() {
  return (
    <>
      <JsonLd />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <HighlightsSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ArchitectureSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
