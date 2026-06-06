"use client";

import { motion } from "framer-motion";
import { skills } from "../data/portfolio";
import { GlassCard } from "./ui/glass-card";

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6 relative z-10 bg-card/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Technical <span className="premium-gradient">Arsenal</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive list of the technologies, frameworks, and tools I use to build scalable digital products.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
            >
              <GlassCard hoverEffect className="h-full p-6 bg-card/20 border-white/5 flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 bg-primary/10 text-primary rounded-lg">
                    <i className={`${skillGroup.icon} text-xl`}></i>
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-foreground">
                    {skillGroup.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3 justify-start content-start">
                  {skillGroup.skills.map((skill, skillIndex) => {
                    const Icon = skill.icon;
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: (groupIndex * 0.1) + (skillIndex * 0.05) }}
                        className="flex items-center gap-2 px-3 py-1.5 bg-background rounded-lg border border-border shadow-sm hover:border-primary/50 hover:bg-primary/5 transition-colors group cursor-default"
                      >
                        <div className="text-muted-foreground group-hover:text-primary transition-colors">
                          <Icon size={16} />
                        </div>
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
