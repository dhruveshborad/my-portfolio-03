'use client';

import { useScrollProgress } from "../hooks/useScrollProgress";
import { CosmicBackground } from "./CosmicBackground";
import { Navigation } from "./Navigation";
import { HeroSection } from "./HeroSection";
import { AboutSection } from "./AboutSection";
import { ProjectsSection } from "./ProjectsSection";
import { SkillsSection } from "./SkillsSection";
import { ExperienceSection } from "./ExperienceSection";
import { ContactSection } from "./ContactSection";

export default function Portfolio() {
  const scrollProgress = useScrollProgress();

  return (
    <div className="cosmic-bg min-h-screen">
      <CosmicBackground />
      <Navigation scrollProgress={scrollProgress} />
      
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border/20 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-white/60 mb-4">
            © 2024 Dhruvesh Borad. All rights reserved. Built with <span className="text-accent">❤️</span> and lots of ☕
          </p>
          <p className="text-white/40 text-sm">
            Designed and developed with modern web technologies
          </p>
        </div>
      </footer>
    </div>
  );
}
