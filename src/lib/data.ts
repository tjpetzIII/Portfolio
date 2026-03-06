export const profile = {
  name: "Your Name",
  title: "Software Engineer",
  bio: "I build things for the web. Passionate about clean code, great user experiences, and solving hard problems.",
  location: "San Francisco, CA",
  email: "you@example.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  skills: string[];
};

export const experiences: Experience[] = [
  {
    company: "Acme Corp",
    role: "Senior Software Engineer",
    period: "Jan 2023 – Present",
    location: "San Francisco, CA",
    description:
      "Led development of core platform features serving 1M+ users. Architected microservices migration reducing latency by 40%.",
    skills: ["TypeScript", "React", "Node.js", "AWS"],
  },
  {
    company: "Startup Inc",
    role: "Software Engineer",
    period: "Jun 2021 – Dec 2022",
    location: "Remote",
    description:
      "Built full-stack features across the product. Improved CI/CD pipeline reducing deploy times by 60%.",
    skills: ["Python", "Django", "PostgreSQL", "Docker"],
  },
  {
    company: "Dev Agency",
    role: "Junior Developer",
    period: "May 2020 – May 2021",
    location: "New York, NY",
    description:
      "Delivered client projects across web and mobile. Collaborated closely with designers to build pixel-perfect UIs.",
    skills: ["JavaScript", "Vue.js", "CSS", "Firebase"],
  },
];

export type Project = {
  name: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
};

export const projects: Project[] = [
  {
    name: "Project Alpha",
    description:
      "An open-source CLI tool that automates repetitive dev tasks. Used by 500+ developers.",
    tech: ["Go", "Cobra", "GitHub Actions"],
    github: "https://github.com/yourusername/project-alpha",
    live: undefined,
  },
  {
    name: "Project Beta",
    description:
      "A real-time collaborative whiteboard built with WebSockets and Canvas API.",
    tech: ["Next.js", "Socket.io", "Tailwind CSS"],
    github: "https://github.com/yourusername/project-beta",
    live: "https://projectbeta.example.com",
  },
  {
    name: "Project Gamma",
    description:
      "ML-powered app that categorizes personal finance transactions automatically.",
    tech: ["Python", "FastAPI", "scikit-learn", "React"],
    github: "https://github.com/yourusername/project-gamma",
    live: undefined,
  },
];

export type Activity = {
  title: string;
  category: string;
  description: string;
};

export const activities: Activity[] = [
  {
    title: "Open Source Contributions",
    category: "Open Source",
    description:
      "Regular contributor to Next.js, Tailwind CSS, and various smaller packages.",
  },
  {
    title: "Local Hackathons",
    category: "Community",
    description:
      "Participate in and mentor at local hackathons. Won best UX at HackSF 2024.",
  },
  {
    title: "Tech Blog",
    category: "Writing",
    description:
      "Write about web development, system design, and developer tooling on my personal blog.",
  },
  {
    title: "Rock Climbing",
    category: "Hobbies",
    description:
      "Avid boulderer. V6 at the gym, V4 outdoors. Love problem-solving on the wall.",
  },
];
