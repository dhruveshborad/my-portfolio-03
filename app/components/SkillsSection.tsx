import { motion } from "framer-motion";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { skills } from "../data/portfolio";

export function SkillsSection() {
  const { ref, isIntersecting } = useIntersectionObserver();

  const getProgressGradient = (level: number) => {
    if (level < 50) return "from-[var(--destructive)] to-[var(--secondary)]";
    if (level < 80) return "from-primary to-ring";
    return "from-[var(--ring)] to-[var(--secondary)]";
  };

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
              className="relative p-6 md:p-8 rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/0 backdrop-blur-md shadow-xl transition-all duration-500 hover:scale-[1.02]"
              variants={itemVariants}
              data-testid={`skill-category-${categoryIndex}`}
            >
              {/* Category Header */}
              <div className="text-center mb-6">
                <i className={`${skillCategory.icon} text-4xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent`}></i>
                <h3 className="text-xl font-orbitron font-semibold text-white tracking-wide">
                  {skillCategory.category}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {skillCategory.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between gap-2 mb-2 flex-wrap">
                      <span className="text-white/90 min-w-0 flex-1 truncate text-sm sm:text-base">{skill.name}</span>
                      <span className="text-accent/90 font-semibold text-sm sm:text-base">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2 sm:h-3 overflow-hidden relative">
                      <motion.div
                        className={`bg-gradient-to-r from-primary to-ring h-2 sm:h-3 rounded-full ring-1 ring-white/10 relative`}
                        initial={{ width: 0 }}
                        animate={isIntersecting ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ 
                          duration: 1.5, 
                          delay: categoryIndex * 0.2 + skillIndex * 0.1,
                          ease: "easeOut"
                        }}
                      >
                        <span className="absolute right-1 -top-6 text-xs text-white/80 hidden md:block">{skill.level}%</span>
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
