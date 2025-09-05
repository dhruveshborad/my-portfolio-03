import { motion } from "framer-motion";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { projects } from "../data/portfolio";
import { ExternalLink, Github } from "lucide-react";

export function ProjectsSection() {
  const { ref, isIntersecting } = useIntersectionObserver();

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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="py-20 px-4 relative z-10" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ y: 30, opacity: 0 }}
          animate={isIntersecting ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-4">
            Featured <span className="text-accent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          <p className="text-white/80 mt-6 max-w-2xl mx-auto">
            Explore my stellar collection of web applications and digital experiences
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isIntersecting ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="glass-morphism rounded-2xl overflow-hidden cosmic-glow hover:scale-105 transition-all duration-500 group"
              variants={itemVariants}
              whileHover={{ y: -10 }}
              data-testid={`project-card-${project.id}`}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-orbitron font-semibold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-white/80 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-primary/20 text-primary-foreground px-2 py-1 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex space-x-4">
                  <motion.a
                    href={project.demoUrl}
                    className="text-accent hover:text-white transition-colors duration-300 flex items-center space-x-1"
                    whileHover={{ scale: 1.05 }}
                    data-testid={`project-demo-${project.id}`}
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    className="text-accent hover:text-white transition-colors duration-300 flex items-center space-x-1"
                    whileHover={{ scale: 1.05 }}
                    data-testid={`project-github-${project.id}`}
                  >
                    <Github size={16} />
                    <span>Source Code</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
