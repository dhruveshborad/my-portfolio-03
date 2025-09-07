export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl: string;
  githubUrl: string;
}

export interface Skill {
  category: string;
  icon: string;
  skills: {
    name: string;
    level: number;
  }[];
}

export interface Experience {
  type: "work" | "education" | "certification";
  title: string;
  company: string;
  period: string;
  description: string;
  technologies?: string[];
}

export const personalInfo = {
  name: "Dhruvesh Borad",
  title: "Frontend Developer & Digital Architect",
  description: "Crafting stellar digital experiences with 5+ years of expertise in React.js, Next.js, and modern web technologies. Let's build something extraordinary together.",
  email: "dhruveshborad2003@gmail.com",
  phone: "+91 (769) 83-42723",
  location: "Surat, Guj, India",
  profileImage: "/assets/me.png",
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/dhruveshkumar-borad-680505214",
    github: "https://github.com/dhruveshborad",
    twitter: "https://x.com/DhruveshBo53453",
  }
};

export const projects: Project[] = [
  {
    id: "1",
    title: "E-commerce Platform",
    description: "Full-stack e-commerce solution built with Next.js, featuring product management, shopping cart, and secure payment integration.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    technologies: ["Next.js", "React", "Tailwind"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: "2",
    title: "Analytics Dashboard",
    description: "Interactive analytics dashboard with real-time data visualization, custom charts, and comprehensive reporting features.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    technologies: ["React", "D3.js", "API"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: "3",
    title: "Task Management App",
    description: "Collaborative project management tool with drag-and-drop functionality, team collaboration features, and progress tracking.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    technologies: ["Next.js", "TypeScript", "Firebase"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: "4",
    title: "Weather Forecast App",
    description: "Beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    technologies: ["React", "API", "PWA"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: "5",
    title: "Crypto Trading Platform",
    description: "Real-time cryptocurrency trading platform with advanced charting, portfolio management, and market analysis tools.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    technologies: ["Next.js", "WebSocket", "Chart.js"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: "6",
    title: "Social Media Platform",
    description: "Modern social networking platform with real-time messaging, content sharing, and community features.",
    image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    technologies: ["React", "Socket.io", "MongoDB"],
    demoUrl: "#",
    githubUrl: "#"
  }
];

export const skills: Skill[] = [
  {
    category: "Frontend Development",
    icon: "fas fa-code",
    skills: [
      { name: "React.js", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "JavaScript", level: 92 }
    ]
  },
  {
    category: "Styling & Design",
    icon: "fas fa-palette",
    skills: [
      { name: "Tailwind CSS", level: 95 },
      { name: "CSS3", level: 88 },
      { name: "Bootstrap", level: 85 }
    ]
  },
  {
    category: "Development Tools",
    icon: "fas fa-tools",
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "Jira", level: 80 }
    ]
  },
  {
    category: "Backend Knowledge",
    icon: "fas fa-server",
    skills: [
      { name: "Node.js", level: 75 },
      { name: "Express.js", level: 70 },
      { name: "MongoDB", level: 68 }
    ]
  },
  {
    category: "UI/UX Design",
    icon: "fas fa-paint-brush",
    skills: [
      { name: "Figma", level: 85 },
      { name: "Adobe XD", level: 78 },
      { name: "Prototyping", level: 82 }
    ]
  },
  {
    category: "Testing & Performance",
    icon: "fas fa-bug",
    skills: [
      { name: "Jest", level: 75 },
      { name: "Cypress", level: 70 },
      { name: "Lighthouse", level: 85 }
    ]
  }
];

export const experiences: Experience[] = [
  {
    type: "work",
    title: "Senior Frontend Developer",
    company: "HexaScal Technologies",
    period: "2024 - Present",
    description: "Lead frontend development for enterprise web applications. Implemented modern React.js architectures, mentored junior developers, and improved application performance by 40%.",
    technologies: ["React.js", "Next.js", "TypeScript"]
  },
  {
    type: "work",
    title: "Web Developer",
    company: "CapCarbon Technology",
    period: "2023 - 2024",
    description: "Built interactive web interfaces and implemented responsive designs. Gained expertise in modern JavaScript frameworks and agile development methodologies.",
    technologies: ["Next.js", "Tailwind", "auth0", "swagger"]
  },
  {
    type: "work",
    title: "React.JS Developer",
    company: "Codage Habitation",
    period: "2021 - 2023",
    description: "Developed responsive web applications using React.js and modern CSS frameworks. Collaborated with UX/UI designers to create pixel-perfect implementations.",
    technologies: ["React.js", "Redux", "Sass", "Tailwind", "Material-UI", "Figma"]
  },
  {
    type: "education",
    title: "Bachelor of Computer Engineering",
    company: "Aditya Silver Oak Institute of Technology",
    period: "2020 - 2024",
    description: "Specialized in Software Engineering with focus on web technologies and user interface design. Graduated with honors and Dean's list recognition."
  },
  {
    type: "certification",
    title: "React Developer Certification",
    company: "Meta (Facebook)",
    period: "2021",
    description: "Advanced React.js certification covering hooks, context, performance optimization, and modern React patterns."
  },
  {
    type: "certification",
    title: "AWS Cloud Practitioner",
    company: "Amazon Web Services",
    period: "2022",
    description: "Foundation-level understanding of AWS cloud services, architecture, and deployment strategies for web applications."
  },
  {
    type: "certification",
    title: "Google UX Design Certificate",
    company: "Google Career Certificates",
    period: "2023",
    description: "Comprehensive UX design training covering user research, wireframing, prototyping, and usability testing methodologies."
  }
];
