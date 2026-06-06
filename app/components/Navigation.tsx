"use client"

import { motion } from "framer-motion"
import { useTheme } from "./ThemeProvider"
import { Moon, Sun, Home, User, FolderOpen, Brain, Award, Contact, MessageSquare, Search } from "lucide-react"
import { useEffect, useState } from "react"

interface NavigationProps {
  scrollProgress: number
}

export function Navigation({ scrollProgress }: NavigationProps) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const navItems = [
    { href: "#home", label: "Home", Icon: Home },
    { href: "#about", label: "About", Icon: User },
    { href: "#projects", label: "Projects", Icon: FolderOpen },
    { href: "#skills", label: "Skills", Icon: Brain },
    { href: "#experience", label: "Experience", Icon: Award },
    { href: "#feedback", label: "Testimonials", Icon: MessageSquare },
    { href: "#contact", label: "Contact", Icon: Contact },
  ]

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const openCommandPalette = () => {
    document.dispatchEvent(new KeyboardEvent("keydown", { key: "k", metaKey: true }))
  }

  return (
    <>
      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary z-50"
        style={{
          scaleX: scrollProgress / 100,
          transformOrigin: "left",
        }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: scrollProgress / 100 }}
        transition={{ duration: 0.1 }}
      />

      {/* Mobile & Tablet: icon-only vertical navbar fixed to right */}
      <motion.nav
        className="fixed right-2 top-1/2 -translate-y-1/2 z-40 lg:hidden nav-glass rounded-full py-3 px-2 shadow-2xl border border-white/10"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className="flex flex-col items-center gap-3">
          {navItems.map(({ href, label, Icon }) => (
            <button
              key={href}
              onClick={() => handleNavClick(href)}
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label={label}
              title={label}
            >
              <Icon size={20} />
            </button>
          ))}
          <div className="h-px w-6 bg-border my-1" />
          <button
            onClick={openCommandPalette}
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
            aria-label="Search"
          >
            <Search size={20} />
          </button>
          <button
            onClick={toggleTheme}
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
            aria-label="Toggle theme"
          >
            {mounted && theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Desktop: centered labeled navbar */}
      <div className="fixed hidden lg:flex justify-center top-6 left-1/2 transform -translate-x-1/2 z-40 w-full px-4">
        <motion.nav
          className="nav-glass rounded-full px-6 py-3 shadow-2xl border border-white/10 flex items-center justify-between min-w-[600px] max-w-4xl"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-6 overflow-x-auto no-scrollbar flex-1 justify-center">
            {navItems.map(({ href, label }) => (
              <button
                key={href}
                onClick={() => handleNavClick(href)}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300 whitespace-nowrap"
              >
                {label}
              </button>
            ))}
          </div>
          
          <div className="flex items-center gap-4 border-l border-border pl-4 ml-4">
            <button
              onClick={openCommandPalette}
              className="flex items-center gap-2 text-xs font-medium text-muted-foreground hover:text-primary transition-colors duration-300 bg-background/50 px-3 py-1.5 rounded-full border border-border"
            >
              <Search size={14} />
              <span>Cmd K</span>
            </button>
            <button
              onClick={toggleTheme}
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              {mounted && theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </motion.nav>
      </div>
    </>
  )
}
