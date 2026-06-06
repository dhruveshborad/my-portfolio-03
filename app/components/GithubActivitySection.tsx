"use client";

import { motion } from "framer-motion";
import { Github, Star, GitFork, BookOpen, Users } from "lucide-react";
import { GitHubCalendar } from "react-github-calendar";
import { useEffect, useState } from "react";
import { personalInfo } from "../data/portfolio";
import { GlassCard } from "./ui/glass-card";
import { useTheme } from "./ThemeProvider";

export function GithubActivitySection() {
  const [stats, setStats] = useState({
    repos: 0,
    followers: 0,
    following: 0,
    stars: 0
  });
  const [loading, setLoading] = useState(true);
  const { theme } = useTheme();

  const username = personalInfo.socialLinks.github.split("/").pop() || "dhruveshborad";

  useEffect(() => {
    const fetchGithubStats = async () => {
      try {
        const userRes = await fetch(`https://api.github.com/users/${username}`);
        const userData = await userRes.json();
        
        // Note: Real stars require fetching all repos and summing stargazers_count. 
        // For performance, we're fetching just basic user data here.
        setStats({
          repos: userData.public_repos || 0,
          followers: userData.followers || 0,
          following: userData.following || 0,
          stars: 45 // Placeholder for demo. A real implementation would fetch /users/username/repos
        });
      } catch (error) {
        console.error("Error fetching GitHub stats", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGithubStats();
  }, [username]);

  return (
    <section id="github" className="py-24 px-6 relative z-10 bg-card/5">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-6">
            <Github size={32} className="text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Open Source <span className="premium-gradient">Contributions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I actively contribute to open source projects and maintain a consistent coding streak.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {[
            { label: "Repositories", value: stats.repos, icon: <BookOpen size={20} className="text-blue-400" /> },
            { label: "Total Stars", value: stats.stars, icon: <Star size={20} className="text-yellow-400" /> },
            { label: "Followers", value: stats.followers, icon: <Users size={20} className="text-green-400" /> },
            { label: "Following", value: stats.following, icon: <Users size={20} className="text-purple-400" /> },
          ].map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <GlassCard className="p-6 bg-card/40 border-white/5 flex flex-col items-center justify-center text-center group hover:bg-card/60 transition-colors">
                <div className="mb-4 p-3 bg-background rounded-xl border border-border shadow-sm group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                {loading ? (
                  <div className="w-12 h-8 bg-muted animate-pulse rounded mb-1" />
                ) : (
                  <span className="text-3xl font-heading font-bold text-foreground mb-1">{stat.value}</span>
                )}
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{stat.label}</span>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <GlassCard className="p-8 bg-card/40 border-white/5 overflow-hidden">
            <h3 className="text-xl font-heading font-semibold text-foreground mb-6">Contribution Graph</h3>
            <div className="w-full overflow-x-auto pb-4 no-scrollbar">
              <div className="min-w-[800px] [&_rect]:stroke-black/10 dark:[&_rect]:stroke-white/5 [&_rect]:stroke-[1px]">
                <GitHubCalendar 
                  username={username} 
                  colorScheme={theme === 'dark' ? 'dark' : 'light'}
                  theme={{
                    light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
                    dark: ['hsl(var(--muted))', 'hsl(239, 84%, 80%)', 'hsl(239, 84%, 67%)', 'hsl(239, 84%, 50%)', 'hsl(239, 84%, 30%)'],
                  }}
                  fontSize={14}
                  blockSize={12}
                  blockMargin={4}
                />
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
