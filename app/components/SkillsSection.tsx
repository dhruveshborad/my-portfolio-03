import { motion } from "framer-motion";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { skills } from "../data/portfolio";

export function SkillsSection() {
  const { ref, isIntersecting } = useIntersectionObserver();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="skills" className="py-20 px-4 relative z-10" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ y: 30, opacity: 0 }}
          animate={isIntersecting ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-4">
            Technical <span className="text-accent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          <p className="text-white/80 mt-6 max-w-2xl mx-auto">
            My expertise spans across modern web technologies and development tools
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isIntersecting ? "visible" : "hidden"}
        >
          {skills.map((skillCategory, categoryIndex) => (
            <motion.div
              key={skillCategory.category}
              className="glass-morphism p-8 rounded-2xl cosmic-glow"
              variants={itemVariants}
              data-testid={`skill-category-${categoryIndex}`}
            >
              {/* Category Header */}
              <div className="text-center mb-6">
                <i className={`${skillCategory.icon} text-4xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent`}></i>
                <h3 className="text-2xl font-orbitron font-semibold text-accent tracking-wide">
                  {skillCategory.category}
                </h3>
              </div>

              {/* Skills List */}
              <div className="flex flex-wrap gap-2.5 justify-center">
                {skillCategory.skills.map((skill, skillIndex) => {
                  const Icon = skill.icon;
                  return (
                    <motion.span
                      key={skill.name}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/20 bg-white/5 text-white/90 text-xs font-medium hover:bg-white/10 hover:border-accent transition-colors"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isIntersecting ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    >
                      {Icon && <Icon className="text-sm" />}
                      {skill.name}
                    </motion.span>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
