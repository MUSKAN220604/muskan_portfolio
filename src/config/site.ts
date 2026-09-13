export type Project = {
  title: string;
  blurb: string;
  stack: string[];
  status?: string;
  featured?: boolean;
};

export type TimelineEntry = {
  period: string;
  role: string;
  org: string;
  detail: string;
};

export const site = {
  name: "Roushni Muskan",
  firstName: "Roushni",
  initials: "RM",
  role: "Software Developer & UI/UX Designer",
  location: "Hyderabad, Telangana",
  timezone: "Asia/Kolkata",
  email: "roushnimuskan2@gmail.com",
  greeting: "Hi, I'm Roushni Muskan",
  tagline:
    "I design and build interfaces where clarity, usability, and small details all matter.",
  about: [
    "I'm a Computer Science and Engineering student specializing in Artificial Intelligence and Machine Learning at VIT Vellore, with a strong focus on UI/UX and product design. I enjoy turning ideas into clear, intuitive interfaces through wireframing, visual design, prototyping, and thoughtful interaction design.",
    "My design process starts with understanding the user and shaping the experience before thinking about implementation. I use Figma to create user flows, wireframes, high-fidelity mockups, reusable components, and interactive prototypes, with an emphasis on visual hierarchy, consistency, responsiveness, and usability.",
    "Being able to code gives me another perspective as a designer. I can understand how an interface will actually behave once it leaves the canvas, which helps me design experiences that are both visually refined and practical to build.",
  ],
  tldr: [
    "Designing before building.",
    "Learning AI & ML.",
    "Building across the stack.",
    "Obsessed with clean interfaces.",
  ],
  status: {
    available: true,
    availableText: "open to opportunities",
    nowLearning: "AI & ML · DBMS · System Design",
    nowBuilding: "Patient Healthcare Records Management System",
  },
  socials: {
    github: "https://github.com/MUSKAN220604",
    linkedin: "https://linkedin.com/in/roushnimuskan",
    email: "mailto:roushnimuskan2@gmail.com",
    resume: "/resume.pdf",
  },
  timeline: [
    {
      period: "2026 — Current",
      role: "Patient Healthcare Records Management System",
      org: "Personal Project",
      detail:
        "Full-stack healthcare system with React.js, FastAPI, MySQL and REST APIs",
    },
    {
      period: "2026 — Current",
      role: "E-Commerce Web Application",
      org: "Personal Project",
      detail:
        "Responsive e-commerce platform built with Next.js, React.js and TypeScript",
    },
    {
      period: "2024 — 28",
      role: "B.Tech, CSE (AI & ML)",
      org: "VIT Vellore",
      detail: "Expected June 2028 · CGPA 7.45/10",
    },
  ] as TimelineEntry[],
  projects: [
    {
      title: "Patient Healthcare Records Management System",
      blurb:
        "A healthcare records management system supporting patient registration, authentication, medical records, prescriptions, and appointments, with React.js dashboards connected to a FastAPI backend and MySQL database through REST APIs.",
      stack: ["React.js", "FastAPI", "MySQL", "REST APIs"],
      status: "In progress",
      featured: true,
    },
    {
      title: "E-Commerce Web Application",
      blurb:
        "A responsive e-commerce platform built with Next.js App Router and TypeScript, featuring product browsing, category pages, shopping cart, order tracking, reusable UI components, modular routing, and REST API integration.",
      stack: ["Next.js", "React.js", "TypeScript", "Tailwind CSS"],
      status: "In progress",
      featured: true,
    },
    {
      title: "Women's Safety Mobile Application",
      blurb:
        "A mobile safety application designed around SOS assistance, live location, emergency contacts, medical emergencies, disaster alerts, law enforcement support, and domestic violence assistance.",
      stack: ["Figma", "UI/UX", "Wireframing", "Prototyping"],
      status: "Complete",
    },
    {
      title: "Air Jordan E-Commerce Landing Page",
      blurb:
        "A responsive sneaker e-commerce landing page designed in Figma using reusable components, product showcases, typography hierarchy, interactive prototypes, and responsive layouts.",
      stack: ["Figma", "UI/UX", "Prototyping"],
      status: "Complete",
    },
  ] as Project[],
  skillGroups: [
    { label: "Programming", items: ["C", "C++", "Java", "Python", "SQL"] },
    {
      label: "Web",
      items: [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "React.js",
        "Next.js",
        "Tailwind CSS",
        "REST APIs",
      ],
    },
    { label: "Frameworks", items: ["FastAPI", "Flask"] },
    { label: "Databases", items: ["MySQL", "PostgreSQL", "SQLite"] },
    {
      label: "UI/UX",
      items: [
        "Figma",
        "UI/UX Design",
        "Wireframing",
        "Prototyping",
        "Design Systems",
        "Responsive Design",
      ],
    },
    { label: "Tools", items: ["Git", "GitHub", "VS Code", "Linux"] },
  ],
  github: {
    username: "MUSKAN220604",
  },
  footerNote: "Designed & built by Roushni Muskan",
} as const;

export type Site = typeof site;
