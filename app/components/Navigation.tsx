import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";
import { Moon, Sun, Home, User, FolderOpen, Brain , Award, Contact } from "lucide-react";

interface NavigationProps {
  scrollProgress: number;
}

export function Navigation({ scrollProgress }: NavigationProps) {
  const { theme, setTheme } = useTheme();

  const navItems = [
    { href: "#home", label: "Home", Icon: Home },
    { href: "#about", label: "About", Icon: User },
    { href: "#projects", label: "Projects", Icon: FolderOpen },
    { href: "#skills", label: "Skills", Icon: Brain  },
    { href: "#experience", label: "Experience", Icon: Award },
    { href: "#contact", label: "Contact", Icon: Contact },
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary to-accent z-50"
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
        className="fixed right-1 top-[10vh] -translate-y-1/2 z-40 lg:hidden glass-morphism cosmic-glow rounded-full py-3 px-2"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className="flex flex-col items-center gap-3">
          {navItems.map(({ href, label, Icon }) => (
            <button
              key={href}
              onClick={() => handleNavClick(href)}
              className="text-white hover:text-accent transition-colors duration-300"
              aria-label={label}
              title={label}
              data-testid={`nav-${label.toLowerCase()}-icon`}
            >
              <Icon size={20} />
            </button>
          ))}
          <div className="h-px w-6 bg-white/20 my-1" />
          <button
            onClick={toggleTheme}
            className="text-white hover:text-accent transition-colors duration-300"
            aria-label="Toggle theme"
            data-testid="theme-toggle-icon"
          >
            {theme === "dark" ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Desktop: centered labeled navbar */}
      <div className="fixed hidden lg:flex justify-center top-4 left-1/2 transform -translate-x-1/2 z-40 w-full ">
        <motion.nav
          className="glass-morphism cosmic-glow rounded-full w-[92vw] sm:w-auto px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 overflow-x-auto no-scrollbar">
            {navItems.map(({ href, label }) => (
              <button
                key={href}
                onClick={() => handleNavClick(href)}
                className="text-white hover:text-accent transition-colors duration-300 font-medium text-sm sm:text-base whitespace-nowrap"
                data-testid={`nav-${label.toLowerCase()}`}
              >
                {label}
              </button>
            ))}
            <button
              onClick={toggleTheme}
              className="text-white hover:text-accent transition-colors duration-300"
              data-testid="theme-toggle"
            >
              {theme === "dark" ? <Moon size={18} /> : <Sun size={18} />}
            </button>
          </div>
        </motion.nav>
      </div>
    </>
  );
}
