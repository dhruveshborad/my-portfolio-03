"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { projects, Project } from "../data/portfolio";
import { ExternalLink, Github, X, ChevronRight, LayoutDashboard, Database, Network } from "lucide-react";
import Image from "next/image";
import { GlassCard } from "./ui/glass-card";

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showAll, setShowAll] = useState(false);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedProject]);

  const displayedProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <section id="projects" className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Featured <span className="premium-gradient">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work, showcasing full-stack capabilities, AI integration, and enterprise-grade architecture.
          </p>
        </motion.div>

        <div className="space-y-24">
          <AnimatePresence>
            {displayedProjects.map((project, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 lg:gap-16 items-center`}
                >
                  {/* Image Side */}
                  <div className="w-full lg:w-1/2">
                    <GlassCard 
                      className="group relative aspect-[16/10] overflow-hidden cursor-pointer bg-card/20 border-white/5"
                      onClick={() => setSelectedProject(project)}
                      hoverEffect
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-40" />
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/40 backdrop-blur-sm">
                        <span className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-xl">
                          View Case Study <ChevronRight size={18} />
                        </span>
                      </div>
                    </GlassCard>
                  </div>

                  {/* Content Side */}
                  <div className="w-full lg:w-1/2 space-y-6">
                    <div className="flex items-center gap-4">
                      <span className="text-primary font-mono text-sm tracking-wider">{index < 9 ? `0${index + 1}` : index + 1}</span>
                      <div className="h-px w-12 bg-primary/30" />
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                      {project.title}
                    </h3>
                    
                    <div className="p-6 rounded-xl bg-card/40 border border-white/5 backdrop-blur-md shadow-lg relative">
                      <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl blur opacity-30" />
                      <p className="relative text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.technologies.slice(0, 5).map(tech => (
                        <span key={tech} className="px-3 py-1 text-sm font-medium text-foreground bg-secondary/10 border border-secondary/20 rounded-full shadow-sm">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 5 && (
                        <span className="px-3 py-1 text-sm font-medium text-muted-foreground bg-background rounded-full border border-border shadow-sm">
                          +{project.technologies.length - 5} more
                        </span>
                      )}
                    </div>

                    <div className="flex gap-4 pt-4">
                      <a 
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                      >
                        <ExternalLink size={18} /> Live Demo
                      </a>
                      {project.githubUrl !== "#" && (
                        <a 
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 text-sm font-semibold text-foreground hover:text-muted-foreground transition-colors"
                        >
                          <Github size={18} /> Source Code
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* View All Button */}
        {projects.length > 4 && (
          <div className="mt-20 text-center">
            <button 
              onClick={() => setShowAll(!showAll)}
              className="inline-block px-8 py-4 rounded-xl border border-border bg-card/50 hover:bg-card text-foreground font-semibold transition-all duration-300 hover:shadow-xl hover:-translate-y-1 backdrop-blur-sm"
            >
              {showAll ? "Show Less Projects" : "View All Projects"}
            </button>
          </div>
        )}

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
            >
              <div 
                className="absolute inset-0 bg-background/80 backdrop-blur-xl"
                onClick={() => setSelectedProject(null)}
              />
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-card border border-border rounded-2xl shadow-2xl flex flex-col no-scrollbar"
              >
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-background/50 text-muted-foreground hover:text-foreground hover:bg-background transition-colors z-20 shadow-lg"
                >
                  <X size={24} />
                </button>

                {/* Modal Header */}
                <div className="relative h-64 md:h-80 w-full shrink-0">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                  <div className="absolute bottom-6 left-6 md:left-10 right-6">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4 drop-shadow-lg">
                      {selectedProject.title}
                    </h2>
                    <div className="flex gap-4">
                      <a 
                        href={selectedProject.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors shadow-lg"
                      >
                        <ExternalLink size={16} /> Live Demo
                      </a>
                      {selectedProject.githubUrl !== "#" && (
                        <a 
                          href={selectedProject.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-secondary/20 text-foreground rounded-lg border border-border text-sm font-semibold hover:bg-secondary/30 transition-colors shadow-lg"
                        >
                          <Github size={16} /> Source Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Modal Content */}
                <div className="p-6 md:p-10 grid md:grid-cols-3 gap-10">
                  <div className="md:col-span-2 space-y-10">
                    <section>
                      <h3 className="text-2xl font-heading font-semibold text-foreground mb-4">Overview</h3>
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        {selectedProject.description}
                      </p>
                      <p className="text-muted-foreground leading-relaxed text-lg mt-4">
                        This project was developed with a focus on scalability, performance, and user experience. 
                        It features a robust architecture that handles complex state management and seamless API integrations, ensuring a smooth and responsive interface.
                      </p>
                    </section>

                    <section className="grid sm:grid-cols-2 gap-6">
                      <div className="p-6 rounded-xl bg-background border border-border shadow-sm">
                        <LayoutDashboard className="text-primary mb-4" size={28} />
                        <h4 className="text-lg font-semibold text-foreground mb-2">Frontend Architecture</h4>
                        <p className="text-sm text-muted-foreground">Responsive, accessible UI built with React, focusing on micro-interactions and Core Web Vitals optimization.</p>
                      </div>
                      <div className="p-6 rounded-xl bg-background border border-border shadow-sm">
                        <Database className="text-secondary mb-4" size={28} />
                        <h4 className="text-lg font-semibold text-foreground mb-2">Backend Architecture</h4>
                        <p className="text-sm text-muted-foreground">Scalable microservices architecture providing robust APIs, secure authentication, and data integrity.</p>
                      </div>
                    </section>
                  </div>

                  <div className="space-y-8">
                    <section className="p-6 rounded-xl bg-primary/5 border border-primary/10">
                      <h3 className="text-xl font-heading font-semibold text-foreground mb-4 flex items-center gap-2">
                        <Network size={20} className="text-primary" />
                        Tech Stack
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map(tech => (
                          <span key={tech} className="px-3 py-1.5 text-sm font-medium text-primary bg-primary/10 border border-primary/20 rounded-lg">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </section>

                    <section>
                      <h3 className="text-xl font-heading font-semibold text-foreground mb-4">Key Features</h3>
                      <ul className="space-y-3">
                        {["Real-time data synchronization", "Advanced AI integrations", "Enterprise-grade security", "High-performance architecture"].map((feature, i) => (
                          <li key={i} className="flex items-start gap-3 text-muted-foreground">
                            <span className="text-primary mt-1">✦</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </section>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
