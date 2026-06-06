"use client";

import { motion } from "framer-motion";
import { Monitor, Network, Cpu, Database, Cloud } from "lucide-react";
import { GlassCard } from "./ui/glass-card";

export function ArchitectureSection() {
  const layers = [
    {
      id: "frontend",
      title: "Frontend Layer",
      icon: <Monitor size={24} />,
      description: "React, Next.js, and Framer Motion for responsive, interactive, and highly performant user interfaces.",
      color: "text-blue-400",
      bg: "bg-blue-400/10",
      border: "border-blue-400/20"
    },
    {
      id: "api",
      title: "API Layer",
      icon: <Network size={24} />,
      description: "RESTful and GraphQL APIs built with Node.js and Express, ensuring secure and efficient data transfer.",
      color: "text-green-400",
      bg: "bg-green-400/10",
      border: "border-green-400/20"
    },
    {
      id: "business",
      title: "Business Logic Layer",
      icon: <Cpu size={24} />,
      description: "Complex algorithms, AI integrations (OpenAI/RAG), and core application services.",
      color: "text-purple-400",
      bg: "bg-purple-400/10",
      border: "border-purple-400/20"
    },
    {
      id: "database",
      title: "Database Layer",
      icon: <Database size={24} />,
      description: "PostgreSQL and MongoDB with Prisma/Drizzle ORMs for scalable and reliable data persistence.",
      color: "text-yellow-400",
      bg: "bg-yellow-400/10",
      border: "border-yellow-400/20"
    },
    {
      id: "cloud",
      title: "Cloud Infrastructure",
      icon: <Cloud size={24} />,
      description: "AWS, Docker, and Vercel for continuous integration, deployment, and auto-scaling.",
      color: "text-orange-400",
      bg: "bg-orange-400/10",
      border: "border-orange-400/20"
    }
  ];

  return (
    <section id="architecture" className="py-24 px-6 relative z-10 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            How I Build <span className="premium-gradient">Scalable Applications</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A modular, layered approach to software architecture ensuring maintainability, performance, and enterprise-grade security.
          </p>
        </motion.div>

        <div className="relative flex flex-col items-center">
          {/* Connecting Line */}
          <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-gradient-to-b from-blue-400/20 via-purple-400/20 to-orange-400/20 transform -translate-x-1/2" />

          {layers.map((layer, index) => (
            <motion.div
              key={layer.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative w-full max-w-2xl mb-12 last:mb-0 group"
            >
              {/* Connector Dot */}
              <div className="absolute left-1/2 top-1/2 w-4 h-4 rounded-full bg-background border-2 border-primary transform -translate-x-1/2 -translate-y-1/2 z-10 group-hover:scale-150 transition-transform duration-300">
                <div className="w-full h-full bg-primary/20 rounded-full animate-ping" />
              </div>

              <GlassCard 
                className={`relative z-20 p-6 md:p-8 ml-auto mr-auto w-[calc(100%-3rem)] md:w-full bg-card/40 backdrop-blur-xl border-white/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${layer.border} hover:bg-card/60`}
              >
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  <div className={`p-4 rounded-xl ${layer.bg} ${layer.color} shadow-inner`}>
                    {layer.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                      {layer.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {layer.description}
                    </p>
                  </div>
                </div>
              </GlassCard>

              {/* Animated Arrows between layers (except last) */}
              {index < layers.length - 1 && (
                <div className="absolute left-1/2 bottom-[-3rem] transform -translate-x-1/2 z-0">
                  <motion.div
                    animate={{ y: [0, 10, 0], opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
                    className="text-primary/50"
                  >
                    ↓
                  </motion.div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
