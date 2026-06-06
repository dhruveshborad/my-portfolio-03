'use client';

import { useScrollProgress } from "../hooks/useScrollProgress";
import { PremiumBackground } from "./PremiumBackground";
import { Navigation } from "./Navigation";
import { HeroSection } from "./HeroSection";
import { SocialProofSection } from "./SocialProofSection";
import { AboutSection } from "./AboutSection";
import { ProjectsSection } from "./ProjectsSection";
import { SkillsSection } from "./SkillsSection";
import { ExperienceSection } from "./ExperienceSection";
import { ArchitectureSection } from "./ArchitectureSection";
import { FeedbackSection } from "./FeedbackSection";
import { BlogSection } from "./BlogSection";
import { GithubActivitySection } from "./GithubActivitySection";
import { ContactSection } from "./ContactSection";

export default function Portfolio() {
  const scrollProgress = useScrollProgress();

  return (
    <div className="min-h-screen">
      <PremiumBackground />
      <Navigation scrollProgress={scrollProgress} />
      
      <main>
        <HeroSection />
        <SocialProofSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <ArchitectureSection />
        <FeedbackSection />
        <BlogSection />
        <GithubActivitySection />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border/20 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground mb-4">
            © {new Date().getFullYear()} Dhruvesh Borad. All rights reserved. Built with <span className="text-red-500">❤️</span> and lots of ☕
          </p>
          <p className="text-muted-foreground/60 text-sm">
            Designed and developed with modern web technologies
          </p>
        </div>
      </footer>
    </div>
  );
}
