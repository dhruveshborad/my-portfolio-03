"use client";

import { motion } from "framer-motion";
import { Download, ArrowRight, Code2, Cpu, Database, Cloud, Brain } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  const handleViewWork = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/assets/Resume.pdf";
    link.download = "Resume.pdf";
    link.click();
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 pb-10 px-6 lg:px-12 max-w-7xl mx-auto">
      <div className="w-full grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* Left Side: Text and CTA */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left z-10 mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-medium mb-6 backdrop-blur-sm flex-wrap"
          >
            <div className="relative flex h-2.5 w-2.5 items-center justify-center shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
            </div>
            <span className="text-center">Available for Freelance & Remote Opportunities</span>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-foreground mb-6 font-heading leading-[1.1]"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Building <span className="premium-gradient">High-Performance</span> Web Applications, AI Solutions & Scalable Digital Products
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-10 max-w-xl font-light leading-relaxed mx-auto lg:mx-0"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Full Stack Developer with 5+ years of experience delivering production-grade applications across FinTech, Trading, AI, Enterprise SaaS, and Global Client Projects.
          </motion.p>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-10 w-full max-w-2xl mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {[
              { label: "Experience", value: "5+ Yrs" },
              { label: "Projects", value: "20+" },
              { label: "Clients", value: "Global" },
              { label: "Specialty", value: "Full Stack" }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col gap-1 border-l-2 border-primary/30 pl-3 sm:pl-4">
                <span className="text-2xl sm:text-3xl font-bold text-foreground font-heading">{stat.value}</span>
                <span className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-widest font-medium">{stat.label}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <button
              onClick={handleViewWork}
              className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 hover:bg-primary/90 hover:scale-105 premium-glow w-full sm:w-auto shadow-lg"
            >
              <span>View Projects</span>
              <ArrowRight size={20} />
            </button>
            <button
              onClick={handleDownloadCV}
              className="bg-card/50 backdrop-blur-md border border-border text-foreground px-8 py-4 rounded-xl font-semibold hover:bg-accent transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105 w-full sm:w-auto"
            >
              <Download size={20} />
              <span>Download Resume</span>
            </button>
          </motion.div>
        </div>

        {/* Right Side: Illustration & Tech Badges */}
        <motion.div
          className="relative hidden lg:block h-[600px] w-full"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Main Illustration */}
          <div className="absolute inset-0 flex items-center justify-center z-0">
            <div className="absolute w-[400px] h-[400px] rounded-full bg-primary/20 blur-[100px] animate-pulse" />
            <div className="absolute w-[300px] h-[300px] rounded-full bg-secondary/20 blur-[80px] -translate-x-20 translate-y-20" />
            <div className="absolute w-[450px] h-[450px] rounded-full bg-background dark:bg-transparent shadow-2xl dark:shadow-none" />
            <Image
              src="/developer_illustration.png"
              alt="Developer Workspace"
              width={600}
              height={600}
              className="absolute object-contain z-10 animate-float drop-shadow-2xl mix-blend-darken dark:mix-blend-normal"
              priority
            />
          </div>

          {/* Floating Badges */}
          {[
            { icon: <Code2 size={20} />, label: "React", top: "15%", left: "5%", delay: 0 },
            { icon: <Database size={20} />, label: "Next.js", top: "25%", left: "75%", delay: 1 },
            { icon: <Code2 size={20} />, label: "TypeScript", top: "65%", left: "2%", delay: 2 },
            { icon: <Cpu size={20} />, label: "Node.js", top: "80%", left: "60%", delay: 1.5 },
            { icon: <Cloud size={20} />, label: "AWS", top: "45%", left: "85%", delay: 0.5 },
            { icon: <Brain size={20} />, label: "OpenAI", top: "75%", left: "25%", delay: 2.5 },
          ].map((badge, i) => (
            <motion.div
              key={i}
              className="absolute z-20 bg-background/90 backdrop-blur-md px-4 py-3 rounded-2xl flex items-center gap-3 text-sm font-medium shadow-xl border border-border/50"
              style={{ top: badge.top, left: badge.left }}
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: badge.delay, ease: "easeInOut" }}
            >
              <div className="text-primary bg-primary/10 p-1.5 rounded-lg">{badge.icon}</div>
              <span className="text-foreground">{badge.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
