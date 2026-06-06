"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { User, Rocket, Code2, Server, Cloud, BrainCircuit, Quote } from "lucide-react";
import { personalInfo } from "../data/portfolio";
import { GlassCard } from "./ui/glass-card";

export function AboutSection() {
  const expertiseAreas = [
    {
      title: "Frontend Development",
      icon: <Code2 className="text-primary" size={24} />,
      skills: ["React", "Next.js", "TypeScript"],
      description: "Building responsive, accessible, and highly interactive user interfaces."
    },
    {
      title: "Backend Architecture",
      icon: <Server className="text-secondary" size={24} />,
      skills: ["Node.js", "Express", "Fastify"],
      description: "Designing robust APIs and scalable microservices."
    },
    {
      title: "AI Integration",
      icon: <BrainCircuit className="text-pink-500" size={24} />,
      skills: ["OpenAI", "RAG Systems", "AI Agents", "Prompt Engineering"],
      description: "Leveraging LLMs to build intelligent and context-aware applications."
    },
    {
      title: "Cloud Infrastructure",
      icon: <Cloud className="text-blue-400" size={24} />,
      skills: ["AWS", "Docker", "Vercel"],
      description: "Deploying and managing scalable applications in the cloud."
    }
  ];

  return (
    <section id="about" className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            About <span className="premium-gradient">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My journey, philosophy, and technical expertise.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Image and Journey */}
          <div className="lg:col-span-5 space-y-8">
            <GlassCard className="p-8 border-border">
              <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden mb-8">
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10"></div>
                <Image
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  fill
                  className="object-cover object-top hover:grayscale-0 transition-all duration-500"
                />
              </div>
              
              <h3 className="text-2xl font-heading font-semibold text-foreground mb-4 flex items-center gap-2">
                <User className="text-primary" size={24} />
                My Journey
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I began my software engineering journey over 5 years ago with a passion for building 
                  things that live on the internet. Fast forward to today, I&apos;ve had the privilege 
                  of building software for diverse sectors including FinTech, Trading platforms, and 
                  Enterprise SaaS.
                </p>
                <p>
                  My main focus these days is building accessible, inclusive products and digital experiences, 
                  while actively exploring the intersection of web development and Artificial Intelligence.
                </p>
              </div>

              <div className="mt-8 p-6 bg-background/50 rounded-xl border border-border relative">
                <Quote className="absolute top-4 left-4 text-primary/20" size={40} />
                <p className="relative z-10 text-foreground italic font-medium leading-relaxed pl-6">
                  &quot;I believe in engineering solutions that are not just functionally robust, but also deliver an exceptional and seamless user experience.&quot;
                </p>
              </div>
            </GlassCard>
          </div>

          {/* Right Column: Expertise */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <h3 className="text-2xl font-heading font-semibold text-foreground mb-4 flex items-center gap-2">
                <Rocket className="text-primary" size={24} />
                Technical Expertise
              </h3>
              <p className="text-muted-foreground">
                I&apos;ve worked with a variety of technologies across the stack. Here are the core areas I specialize in:
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-6">
              {expertiseAreas.map((area, idx) => (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <GlassCard hoverEffect className="h-full p-6 bg-card/20 border-white/5">
                    <div className="bg-background/80 w-12 h-12 rounded-lg flex items-center justify-center mb-6 shadow-sm border border-border">
                      {area.icon}
                    </div>
                    <h4 className="text-xl font-heading font-semibold text-foreground mb-3">{area.title}</h4>
                    <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                      {area.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {area.skills.map(skill => (
                        <span key={skill} className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/20">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
