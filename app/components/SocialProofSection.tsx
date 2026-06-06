"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

function AnimatedCounter({ from, to, duration = 2 }: { from: number; to: number; duration?: number }) {
  const [count, setCount] = useState(from);
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true });

  useEffect(() => {
    if (inView) {
      let startTime: number | null = null;
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * (to - from) + from));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [inView, from, to, duration]);

  return <span ref={nodeRef}>{count}</span>;
}

export function SocialProofSection() {
  const stats = [
    { label: "Production Apps", value: 20, suffix: "+" },
    { label: "International Clients", value: 15, suffix: "+" },
    { label: "Years Experience", value: 5, suffix: "+" },
    { label: "Technologies", value: 12, suffix: "+" },
  ];

  const countries = [
    { name: "Australia", flagCode: "au" },
    { name: "Japan", flagCode: "jp" },
    { name: "Malaysia", flagCode: "my" },
    { name: "Turkey", flagCode: "tr" },
    { name: "USA", flagCode: "us" }
  ];

  return (
    <section className="py-20 px-6 relative z-10 border-t border-border/50 bg-card/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Trust Indicators */}
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card p-6 flex flex-col items-center justify-center text-center"
              >
                <div className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-2 flex items-center">
                  <AnimatedCounter from={0} to={stat.value} />
                  <span className="text-primary">{stat.suffix}</span>
                </div>
                <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Countries */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl font-heading font-bold text-foreground mb-6 flex items-center gap-3">
              Global Reach
              <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full flex items-center gap-1 border border-primary/20">
                <AnimatedCounter from={0} to={countries.length} />+ Countries
              </span>
            </h3>
            <p className="text-muted-foreground mb-8 text-lg">
              Delivering high-quality software solutions to clients and businesses across the globe.
            </p>
            <div className="flex flex-wrap gap-3">
              {countries.map((country, idx) => (
                <motion.div
                  key={country.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + idx * 0.1 }}
                  className="px-6 py-3 rounded-full border border-border bg-background/50 backdrop-blur-sm text-foreground font-medium shadow-sm hover:border-primary/50 transition-colors cursor-default flex items-center gap-2"
                >
                  <Image 
                    src={`https://flagcdn.com/w40/${country.flagCode}.png`} 
                    alt={country.name} 
                    className="rounded-sm object-cover"
                    width={24}
                    height={18}
                  />
                  <span>{country.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
