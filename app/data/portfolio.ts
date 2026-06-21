import {
  FaReact, FaNodeJs, FaPython, FaDocker, FaAws, FaRobot, FaBrain,
  FaKeyboard, FaCogs, FaDatabase, FaProjectDiagram, FaServer, FaNetworkWired, FaGitAlt
} from "react-icons/fa";
import {
  SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss, SiRedux,
  SiReactquery, SiFlutter, SiExpress, SiFastify, SiDjango, SiFlask,
  SiFastapi, SiLaravel, SiWordpress, SiPostgresql, SiMongodb, SiMysql,
  SiPrisma, SiDrizzle, SiWebpack, SiJest, SiVitest, SiTestinglibrary, SiVercel, SiGithubactions
} from "react-icons/si";

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  frontendDesc?: string;
  backendDesc?: string;
  keyFeatures?: string[];
  image: string;
  technologies: string[];
  demoUrl: string;
  githubUrl: string;
}

export interface SkillItem {
  name: string;
  icon: any;
}

export interface Skill {
  category: string;
  icon: string;
  skills: SkillItem[];
}

export interface Experience {
  type: "work" | "education" | "certification";
  title: string;
  company: string;
  period: string;
  description: string;
  technologies?: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  country: string;
  countryCode: string;
  content: string;
}

export const personalInfo = {
  name: "Dhruvesh Borad",
  title: "Fullstack Developer & Digital Architect",
  description: "Crafting stellar digital experiences with 5+ years of expertise in the MERN stack, React.js, Next.js, and modern web technologies. Let's build something extraordinary together.",
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
    id: "13",
    title: "Sampatti CRM",
    description: "Comprehensive ERP and CRM platform featuring a user-friendly UI/UX. Includes proper user media space, multi-user roles, lead management, Meta marketing, and seamless integrations with WhatsApp, Gmail, and phone calls.",
    longDescription: "Sampatti CRM is a fully-featured ERP and CRM platform designed to streamline business operations without overwhelming the user with complex functionalities. The core focus is on a simplified, highly intuitive UI/UX that requires zero learning curve. It unifies essential business operations—from user roles and media space management to direct integrations with major communication channels.",
    frontendDesc: "A modern, highly responsive interface built with Next.js and Tailwind CSS, focusing on a clean, frictionless user experience and high accessibility standards.",
    backendDesc: "A robust Node.js backend integrating with PostgreSQL, handling complex role-based access control, secure media storage, and extensive third-party APIs (WhatsApp, Meta).",
    keyFeatures: [
      "User-friendly UI/UX with simplified workflows",
      "Multi-user access with customizable role-based permissions",
      "Dedicated user media space for file management",
      "Seamless WhatsApp, Gmail, and phone call integrations",
      "Comprehensive lead management and Meta marketing tools"
    ],
    image: "/assets/sampatticrm.png",
    technologies: ["Next.js", "Node.js", "Tailwind CSS", "WhatsApp API", "Meta API"],
    demoUrl: "https://app.sampatticrm.com",
    githubUrl: "#"
  },
  {
    id: "1",
    title: "The Top Analysts",
    description: "Community-driven platform where investors share stock predictions, price targets, and market insights in real time.",
    image: "/assets/thetopanalysts.png",
    technologies: ["Next.js", "Node.js", "Fastify", "PostgreSQL", "AWS", "Prisma", "TypeScript"],
    demoUrl: "https://thetopanalysts.com/",
    githubUrl: "#"
  },
  {
    id: "2",
    title: "ZEA DIGITAL DGOLD TRADING",
    description: "Trusted digital gold investment platform connecting Malaysia and India, offering secure, reliable, and profitable gold savings.",
    image: "/assets/zeadigitaldgoldtrading.png",
    technologies: ["Next.js", "Node.js", "Fastify", "TanStack Query", "Tailwind CSS", "Redis", "PostgreSQL", "Vercel"],
    demoUrl: "https://zeadigitaldgoldtrading.com/",
    githubUrl: "#"
  },
  {
    id: "3",
    title: "AI Taggers",
    description: "Australia's partner for high-accuracy, human-verified AI training data across 100+ languages with enterprise-grade security.",
    image: "/assets/aitaggers.png",
    technologies: ["Next.js", "Tailwind CSS", "Supabase", "TypeScript", "OpenAI", "Vercel", "LLM Integration", "AI Data Processing", "Prompt Engineering"],
    demoUrl: "https://www.aitaggers.com.au/",
    githubUrl: "#"
  },
  {
    id: "4",
    title: "Dinar Exchange",
    description: "Trusted currency exchange service for buying Iraqi Dinar in Australia with secure checkout, tracked delivery, and 10+ years experience.",
    image: "/assets/dinarexchange.png",
    technologies: ["Next.js", "Tailwind CSS", "Supabase", "TypeScript", "OpenAI", "Vercel", "AI API Development", "AI Workflow Automation"],
    demoUrl: "https://dinarexchange.com.au/",
    githubUrl: "#"
  },
  {
    id: "5",
    title: "Line Marking Australia",
    description: "Professional line marking services across Australia since 2009. AS/NZS compliant carparks, warehouses, and roads with over 5,000+ projects completed.",
    image: "/assets/linemarkingaustralia.png",
    technologies: ["Next.js", "Supabase", "PostgreSQL", "OpenAI", "AWS", "Vercel", "Cloudflare", "RAG Applications", "AI Agent Systems"],
    demoUrl: "https://linemarkingaustralia.com.au/",
    githubUrl: "#"
  },
  {
    id: "6",
    title: "Australian Credit Solutions",
    description: "Australia's leading credit repair specialists helping remove defaults, court judgments, and enquiries with a 98% success rate and ASIC licensing.",
    image: "/assets/australiancreditsolutions.png",
    technologies: ["Next.js", "Supabase", "PostgreSQL", "OpenAI", "AWS", "Vercel", "Cloudflare", "AI Backend Architecture", "Prompt Engineering", "AI Workflow Automation"],
    demoUrl: "https://www.australiancreditsolutions.com.au/",
    githubUrl: "#"
  },
  {
    id: "7",
    title: "EventLo",
    description: "Modern all-in-one event planning system for professional wedding planners, combining task management, timelines, vendor coordination, and budget tracking.",
    image: "/assets/eventlo.png",
    technologies: ["Next.js", "Sanity", "PostgreSQL", "Node.js", "Vercel"],
    demoUrl: "https://event-lo.com/",
    githubUrl: "#"
  },
  {
    id: "8",
    title: "2MPro",
    description: "Advanced investment platform offering secure, fast, and transparent trading in stocks, crypto, forex, and commodities markets.",
    image: "/assets/2mpro.png",
    technologies: ["Next.js", "FastAPI", "AWS", "Python", "SWR", "PostgreSQL", "LLM Integration", "AI API Development", "AI Agent Systems"],
    demoUrl: "https://2mpro.online/",
    githubUrl: "#"
  },
  {
    id: "9",
    title: "CT Menkul Islem",
    description: "Trusted financial trading platform providing access to global markets including stocks, forex, and commodities with advanced analysis tools.",
    image: "/assets/ctmenkulislem.png",
    technologies: ["Next.js", "FastAPI", "AWS", "Python", "SWR", "PostgreSQL"],
    demoUrl: "https://esube.ctmenkulislem.com/",
    githubUrl: "#"
  },
  {
    id: "10",
    title: "Finansal Borsa",
    description: "Professional investment platform for secure trading in stocks, crypto, foreign exchange, and commodities with real-time market data.",
    image: "/assets/finansalborsa.png",
    technologies: ["Next.js", "FastAPI", "AWS", "Python", "SWR", "PostgreSQL"],
    demoUrl: "https://esube.finansalborsa.com/",
    githubUrl: "#"
  },
  {
    id: "11",
    title: "YFMKL",
    description: "Comprehensive investment solution for trading multiple asset classes with secure infrastructure and real-time market execution.",
    image: "/assets/yfmkl.png",
    technologies: ["Next.js", "FastAPI", "AWS", "Python", "SWR", "PostgreSQL"],
    demoUrl: "https://esube.yfmkl.com/",
    githubUrl: "#"
  },
  {
    id: "12",
    title: "Atlas Piyasa",
    description: "Professional trading environment for stocks and commodities featuring fast execution, reliability, and advanced charting capabilities.",
    image: "/assets/atlaspiyasa.png",
    technologies: ["Next.js", "FastAPI", "AWS", "Python", "SWR", "PostgreSQL"],
    demoUrl: "https://esube.atlaspiyasa.com/",
    githubUrl: "#"
  },
  {
    id: "14",
    title: "Hotel Management System",
    description: "Modernized large-scale admin panel featuring pixel-perfect design, hotel creation, meeting rate management, and ratings & feedback modules.",
    longDescription: "Enhanced and maintained a large-scale Hotel Management System by modernizing the admin panel with a pixel-perfect Figma-to-code implementation. Developed and integrated multiple business-critical modules including hotel creation, meeting rate management, ratings, and feedback management.",
    frontendDesc: "A pixel-perfect, highly responsive interface built with Next.js, TypeScript, and Tailwind CSS. Centralized state management is implemented using React Context API to ensure efficient data handling and seamless user workflows.",
    backendDesc: "Integrated with a robust REST API backend and PostgreSQL database, providing secure data handling, dockerized environment configurations, and advanced filtering and search query APIs.",
    keyFeatures: [
      "Pixel-perfect Figma-to-code admin panel implementation",
      "Modules for hotel creation, meeting rate management, ratings, and feedback",
      "Centralized state management with React Context API",
      "Advanced filtering and search with complete REST API integration",
      "Dockerized environment setup for production-ready deployments"
    ],
    image: "/assets/hotelmanagement.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Docker", "Context API"],
    demoUrl: "#",
    githubUrl: "#"
  }
];

export const skills: Skill[] = [
  {
    category: "Frontend",
    icon: "fas fa-desktop",
    skills: [
      { name: "React", icon: FaReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Redux", icon: SiRedux },
      { name: "TanStack Query", icon: SiReactquery },
      { name: "Flutter", icon: SiFlutter }
    ]
  },
  {
    category: "Backend",
    icon: "fas fa-server",
    skills: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express", icon: SiExpress },
      { name: "Fastify", icon: SiFastify },
      { name: "Python", icon: FaPython },
      { name: "Django", icon: SiDjango },
      { name: "Flask", icon: SiFlask },
      { name: "FastAPI", icon: SiFastapi },
      { name: "Laravel", icon: SiLaravel },
      { name: "WordPress", icon: SiWordpress }
    ]
  },
  {
    category: "Database",
    icon: "fas fa-database",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql }
    ]
  },
  {
    category: "ORM & Tools",
    icon: "fas fa-tools",
    skills: [
      { name: "Prisma", icon: SiPrisma },
      { name: "Drizzle", icon: SiDrizzle },
      { name: "Git", icon: FaGitAlt },
      { name: "Webpack", icon: SiWebpack }
    ]
  },
  {
    category: "Testing",
    icon: "fas fa-vial",
    skills: [
      { name: "Jest", icon: SiJest },
      { name: "Vitest", icon: SiVitest },
      { name: "Testing Library", icon: SiTestinglibrary }
    ]
  },
  {
    category: "Cloud & DevOps",
    icon: "fas fa-cloud",
    skills: [
      { name: "Vercel", icon: SiVercel },
      { name: "AWS", icon: FaAws },
      { name: "Docker", icon: FaDocker },
      { name: "GitHub Actions", icon: SiGithubactions }
    ]
  },
  {
    category: "AI & Automation",
    icon: "fas fa-robot",
    skills: [
      { name: "LLM Integration", icon: FaRobot },
      { name: "RAG Applications", icon: FaBrain },
      { name: "Prompt Engineering", icon: FaKeyboard },
      { name: "AI Workflow Automation", icon: FaCogs },
      { name: "AI Data Processing", icon: FaDatabase },
      { name: "AI API Development", icon: FaProjectDiagram },
      { name: "AI Backend Architecture", icon: FaServer },
      { name: "AI Agent Systems", icon: FaNetworkWired }
    ]
  }
];

export const experiences: Experience[] = [
  {
    type: "work",
    title: "Senior Fullstack Developer",
    company: "HexaScal Technologies",
    period: "2024 - Present",
    description: "Lead fullstack development for enterprise web applications. Implemented modern MERN stack and React.js architectures, mentored junior developers, and improved application performance by 40%.",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Next.js", "TypeScript"]
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
    company: "Codage Habitation",
    period: "2022",
    description: "Advanced React.js certification covering hooks, context, performance optimization, and modern React patterns."
  },
  {
    type: "certification",
    title: "Fullstack Development Excellence",
    company: "CapCarbon Technology",
    period: "2023",
    description: "Recognition for outstanding contribution in building interactive web interfaces and implementing scalable backend architectures."
  },
  {
    type: "certification",
    title: "Enterprise Architecture Certification",
    company: "HexaScal Technologies",
    period: "2024",
    description: "Advanced certification for leading frontend and fullstack development, focusing on modern React.js architectures and performance."
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Maki",
    country: "Japan",
    countryCode: "jp",
    content: "Dhruvesh built our real-time investment platform with great performance and scalability. The system manages live predictions and discussions effectively. It is very reliable and well executed."
  },
  {
    id: "2",
    name: "Karan Patel",
    country: "USA",
    countryCode: "us",
    content: "Dhruvesh provided a complete event management platform with clear structure and smooth user experience. Task tracking and budgeting all function well."
  },
  {
    id: "3",
    name: "Abdullah",
    country: "Turkey",
    countryCode: "tr",
    content: "The trading interface is quick, safe, and able to grow. Yash gave us exactly what we needed for a businesslike financial platform."
  },
  {
    id: "4",
    name: "Neel Bennet",
    country: "Australia",
    countryCode: "au",
    content: "He created a dependable currency trading platform that offers smooth checkout and solid security. The system works reliably and fosters customer trust."
  },
  {
    id: "5",
    name: "Aleena",
    country: "Malaysia",
    countryCode: "my",
    content: "Our digital gold platform is safe, quick, and simple to use. Yash made sure that the backend validation was strong and that transactions went smoothly. A lot of knowledge about fintech."
  },
  {
    id: "6",
    name: "Neel Bennet",
    country: "Australia",
    countryCode: "au",
    content: "Yash made us an AI data platform that can grow and is safe. The structure and performance are both great. Very professional and pays attention to details."
  },
  {
    id: "7",
    name: "Abdullah",
    country: "Turkey",
    countryCode: "tr",
    content: "A high-performance trading platform with reliable backend systems and seamless real-time execution was designed by Yash. Excellent technical performance all around."
  }
];
