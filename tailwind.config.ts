import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: "var(--card)",
        "card-foreground": "var(--card-foreground)",
        popover: "var(--popover)",
        "popover-foreground": "var(--popover-foreground)",
        primary: "var(--primary)",
        "primary-foreground": "var(--primary-foreground)",
        secondary: "var(--secondary)",
        "secondary-foreground": "var(--secondary-foreground)",
        muted: "var(--muted)",
        "muted-foreground": "var(--muted-foreground)",
        accent: "var(--accent)",
        "accent-foreground": "var(--accent-foreground)",
        destructive: "var(--destructive)",
        "destructive-foreground": "var(--destructive-foreground)",
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
      },
      borderRadius: {
        DEFAULT: "var(--radius)",
        lg: "calc(var(--radius) + 2px)",
        md: "var(--radius)",
        sm: "calc(var(--radius) - 2px)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        orbitron: ["Orbitron", "monospace"],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        orbit: {
          from: { transform: "rotate(0deg) translateX(100px) rotate(0deg)" },
          to: { transform: "rotate(360deg) translateX(100px) rotate(-360deg)" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.3", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.2)" },
        },
        "cosmic-glow": {
          "0%": {
            boxShadow: "0 0 20px rgba(139, 92, 246, 0.3)",
          },
          "100%": {
            boxShadow:
              "0 0 40px rgba(139, 92, 246, 0.6), 0 0 60px rgba(99, 102, 241, 0.3)",
          },
        },
        "slide-up": {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        orbit: "orbit 20s linear infinite",
        "orbit-slow": "orbit 40s linear infinite",
        "orbit-fast": "orbit 10s linear infinite",
        twinkle: "twinkle 4s ease-in-out infinite",
        "cosmic-glow": "cosmic-glow 3s ease-in-out infinite alternate",
        "slide-up": "slide-up 0.8s ease-out",
        "fade-in": "fade-in 1s ease-out",
      },
      boxShadow: {
        "cosmic-glow": "0 0 30px rgba(139, 92, 246, 0.3)",
        "cosmic-glow-hover":
          "0 0 50px rgba(139, 92, 246, 0.5), 0 0 80px rgba(99, 102, 241, 0.3)",
      },
      backgroundImage: {
        "cosmic-gradient":
          "linear-gradient(135deg, hsl(225, 39%, 7%) 0%, hsl(224, 71%, 4%) 25%, hsl(262, 83%, 8%) 50%, hsl(220, 91%, 5%) 75%, hsl(225, 39%, 7%) 100%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
