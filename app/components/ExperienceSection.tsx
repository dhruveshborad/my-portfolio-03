"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { experiences } from "../data/portfolio";
import { Briefcase, GraduationCap, Award } from "lucide-react";
import { GlassCard } from "./ui/glass-card";

export function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const getIcon = (type: string) => {
    switch (type) {
      case "work":
        return <Briefcase className="text-primary" size={20} />;
      case "education":
        return <GraduationCap className="text-secondary" size={20} />;
      case "certification":
        return <Award className="text-accent" size={20} />;
      default:
        return <Briefcase className="text-primary" size={20} />;
    }
  };

  return (
    <section id="experience" className="py-24 px-6 relative z-10 bg-card/5">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Experience & <span className="premium-gradient">Education</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A timeline of my professional and academic journey.
          </p>
        </motion.div>

        <div className="relative" ref={containerRef}>
          {/* Vertical Line */}
          <motion.div
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-border rounded-full transform md:-translate-x-1/2 origin-top"
            style={{ scaleY: scrollYProgress }}
          />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-background border-4 border-primary transform -translate-x-[14px] md:-translate-x-1/2 mt-6 z-10 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary animate-ping" />
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? "md:pr-12" : "md:pl-12"}`}>
                    <GlassCard className="p-6 border-white/5 bg-card/40 relative overflow-hidden group">
                      {/* Hover Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2">
                            <div className="p-2 bg-background rounded-lg border border-border shadow-sm">
                              {getIcon(exp.type)}
                            </div>
                            <span className="text-sm font-bold text-primary px-3 py-1 bg-primary/10 rounded-full border border-primary/20">
                              {exp.period}
                            </span>
                          </div>
                        </div>

                        <h3 className="text-xl font-heading font-bold text-foreground mb-1">
                          {exp.title}
                        </h3>
                        <h4 className="text-muted-foreground font-medium mb-4">
                          {exp.company}
                        </h4>

                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                          {exp.description}
                        </p>

                        {exp.technologies && (
                          <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                            {exp.technologies.map(tech => (
                              <span key={tech} className="text-xs font-medium text-foreground bg-background px-2.5 py-1 rounded border border-border">
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </GlassCard>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
