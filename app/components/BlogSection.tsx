"use client";

import { motion } from "framer-motion";
import { BookOpen, Calendar, Clock, ArrowRight } from "lucide-react";
import Image from "next/image";
import { GlassCard } from "./ui/glass-card";

export function BlogSection() {
  const articles = [
    {
      id: 1,
      title: "The Laws of Human Nature: Understanding Why People Act the Way They Do",
      excerpt: "People are more complicated than they seem. If you can understand what's driving them—their hidden impulses, emotional biases, unconscious patterns—you gain power not by manipulating, but by understanding.",
      date: "Oct 5, 2025",
      readTime: "8 min read",
      category: "Psychology",
      image: "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?auto=format&fit=crop&q=80&w=800",
      link: "https://www.storieasy.com/blog/the-laws-of-human-nature",
    },
    {
      id: 2,
      title: "Deploying Next.js App on Netlify : The Complete Step-by-Step Guide",
      excerpt: "Next.js app deployment is more powerful and easier than ever using Netlify, a developer-friendly platform that supports serverless functions, edge middleware, custom domains, and continuous deployment.",
      date: "Jul 28, 2025",
      readTime: "10 min read",
      category: "Deployment",
      image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80&w=800",
      link: "https://www.storieasy.com/blog/deploying-next-js-app-on-netlify-the-complete-step-by-step-guide-for-beginners-to-pros",
    },
    {
      id: 3,
      title: "The Ultimate 2025 Guide to Next.js + Storyblok: Visual Editing & SEO",
      excerpt: "Discover how to fully integrate Storyblok with Next.js in this comprehensive, step-by-step guide. We'll cover everything from setting up the project to building dynamic routes and optimizing SEO.",
      date: "Jul 14, 2025",
      readTime: "12 min read",
      category: "Next.js",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
      link: "https://www.storieasy.com/blog/the-ultimate-2025-guide-to-next-js-storyblok-visual-editing-dynamic-content-and-advanced-seo",
    }
  ];

  return (
    <section id="blog" className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
              Technical <span className="premium-gradient">Articles</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Thoughts, tutorials, and insights on software engineering, AI, and system architecture.
            </p>
          </div>
          <a href="https://www.storieasy.com/author/info" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors">
            View All Posts <ArrowRight size={18} />
          </a>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <motion.a
              href={article.link}
              target="_blank"
              rel="noreferrer"
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="block h-full"
            >
              <GlassCard hoverEffect className="h-full flex flex-col bg-card/20 border-white/5 overflow-hidden group cursor-pointer">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 text-xs font-medium bg-background/80 backdrop-blur-md text-foreground rounded-full border border-border shadow-sm">
                    {article.category}
                  </span>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-heading font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs font-medium text-muted-foreground pt-4 border-t border-border mt-auto">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={14} />
                      {article.date}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock size={14} />
                      {article.readTime}
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
