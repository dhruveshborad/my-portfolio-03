import { motion } from "framer-motion";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { experiences } from "../data/portfolio";
import { Briefcase, GraduationCap, Award } from "lucide-react";

export function ExperienceSection() {
  const { ref, isIntersecting } = useIntersectionObserver();

  const getIcon = (type: string) => {
    switch (type) {
      case "work":
        return <Briefcase className="text-accent" size={20} />;
      case "education":
        return <GraduationCap className="text-accent" size={20} />;
      case "certification":
        return <Award className="text-accent" size={20} />;
      default:
        return <Briefcase className="text-accent" size={20} />;
    }
  };

  const workExperience = experiences.filter(exp => exp.type === "work");
  const educationAndCerts = experiences.filter(exp => exp.type !== "work");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="experience" className="py-20 px-4 relative z-10" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ y: 30, opacity: 0 }}
          animate={isIntersecting ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-4">
            Experience & <span className="text-accent">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <motion.h3
              className="text-2xl font-orbitron font-semibold text-white mb-8 flex items-center"
              initial={{ x: -30, opacity: 0 }}
              animate={isIntersecting ? { x: 0, opacity: 1 } : { x: -30, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Briefcase className="text-accent mr-3" size={24} />
              Professional Experience
            </motion.h3>

            <motion.div
              className="space-y-8"
              variants={containerVariants}
              initial="hidden"
              animate={isIntersecting ? "visible" : "hidden"}
            >
              {workExperience.map((exp, index) => (
                <motion.div
                  key={index}
                  className="glass-morphism p-6 rounded-2xl cosmic-glow relative"
                  variants={itemVariants}
                  data-testid={`work-experience-${index}`}
                >
                  <div className="absolute left-0 top-6 w-1 h-16 bg-gradient-to-b from-primary to-accent rounded-full"></div>
                  <div className="ml-6">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold text-white">{exp.title}</h4>
                      <span className="text-accent text-sm">{exp.period}</span>
                    </div>
                    <p className="text-primary-foreground font-medium mb-2">{exp.company}</p>
                    <p className="text-white/80 text-sm leading-relaxed">
                      {exp.description}
                    </p>
                    {exp.technologies && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="bg-primary/20 text-primary-foreground px-2 py-1 rounded-full text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Education & Certifications */}
          <div>
            <motion.h3
              className="text-2xl font-orbitron font-semibold text-white mb-8 flex items-center"
              initial={{ x: 30, opacity: 0 }}
              animate={isIntersecting ? { x: 0, opacity: 1 } : { x: 30, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <GraduationCap className="text-accent mr-3" size={24} />
              Education & Certifications
            </motion.h3>

            <motion.div
              className="space-y-8"
              variants={containerVariants}
              initial="hidden"
              animate={isIntersecting ? "visible" : "hidden"}
            >
              {educationAndCerts.map((exp, index) => (
                <motion.div
                  key={index}
                  className="glass-morphism p-6 rounded-2xl cosmic-glow relative"
                  variants={itemVariants}
                  data-testid={`education-${index}`}
                >
                  <div className="absolute left-0 top-6 w-1 h-16 bg-gradient-to-b from-primary to-accent rounded-full"></div>
                  <div className="ml-6">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold text-white flex items-center">
                        {getIcon(exp.type)}
                        <span className="ml-2">{exp.title}</span>
                      </h4>
                      <span className="text-accent text-sm">{exp.period}</span>
                    </div>
                    <p className="text-primary-foreground font-medium mb-2">{exp.company}</p>
                    <p className="text-white/80 text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
