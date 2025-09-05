import { motion } from "framer-motion";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { User, Rocket, Bolt, TrendingUp } from "lucide-react";

export function AboutSection() {
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  const technologies = [
    { icon: "fab fa-react", name: "React.js", color: "text-blue-400" },
    { icon: "fas fa-bolt", name: "Next.js", color: "text-yellow-400" },
    { icon: "fab fa-js", name: "JavaScript", color: "text-yellow-400" },
    { icon: "fab fa-css3", name: "Tailwind CSS", color: "text-blue-400" },
    { icon: "fab fa-git-alt", name: "Git & GitHub", color: "text-orange-400" },
    { icon: "fas fa-code", name: "VS Code", color: "text-purple-400" },
  ];

  return (
    <section id="about" className="py-20 px-4 relative z-10" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          variants={itemVariants}
          initial="hidden"
          animate={isIntersecting ? "visible" : "hidden"}
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-4">
            About <span className="text-accent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isIntersecting ? "visible" : "hidden"}
        >
          {/* Left Column */}
          <div className="space-y-6">
            <motion.div
              className="glass-morphism p-8 rounded-2xl cosmic-glow"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-orbitron font-semibold text-white mb-4 flex items-center">
                <User className="text-accent mr-3" size={24} />
                Who I Am
              </h3>
              <p className="text-white/80 leading-relaxed">
                I'm a passionate Frontend Developer with over 5 years of experience creating exceptional digital experiences. 
                My journey in web development started with curiosity and has evolved into a deep expertise in modern technologies 
                and user-centered design principles.
              </p>
            </motion.div>

            <motion.div
              className="glass-morphism p-8 rounded-2xl cosmic-glow"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-orbitron font-semibold text-white mb-4 flex items-center">
                <Rocket className="text-accent mr-3" size={24} />
                What I Do
              </h3>
              <p className="text-white/80 leading-relaxed">
                I specialize in building responsive, performant web applications using React.js and Next.js. 
                I'm passionate about clean code, exceptional user experiences, and staying at the forefront of web technology innovation.
              </p>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <motion.div
              className="glass-morphism p-8 rounded-2xl cosmic-glow"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-orbitron font-semibold text-white mb-6 flex items-center">
                <Bolt className="text-accent mr-3" size={24} />
                Core Technologies
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isIntersecting ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    <i className={`${tech.icon} ${tech.color} text-xl`}></i>
                    <span className="text-white">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="glass-morphism p-8 rounded-2xl cosmic-glow"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-orbitron font-semibold text-white mb-4 flex items-center">
                <TrendingUp className="text-accent mr-3" size={24} />
                Experience Highlights
              </h3>
              <ul className="space-y-3 text-white/80">
                {[
                  "5+ years of frontend development expertise",
                  "50+ successful projects delivered",
                  "Modern responsive web applications"
                ].map((highlight, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isIntersecting ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 1.2 + index * 0.1 }}
                  >
                    <i className="fas fa-star text-yellow-400 mr-3"></i>
                    {highlight}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
