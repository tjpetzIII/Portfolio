export const profile = {
  name: "Thomas Petz",
  title: "Software Engineer",
  bio: "Focused on solving real business concerns with data and technology. Advancing through software engineer levels toward team lead and software architecture.",
  location: "Philadelphia, PA",
  email: "tompetz2000@gmail.com",
  github: "https://github.com/tjpetzIII",
  linkedin: "https://www.linkedin.com/in/tpetz1/",
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
    company: "Elsevier (ELS)",
    role: "Software Engineer II",
    period: "Jun 2023 – Present",
    location: "Philadelphia, PA",
    description:
      "Driving feature development and maintenance across the backend and frontend of Osmosis. Leading Tailwind CSS standardization to ensure a consistent and efficient codebase. Presenting sprint demos to stakeholders to communicate team progress and outcomes.",
    skills: ["TypeScript", "React", "Tailwind CSS", "Node.js"],
  },
  {
    company: "American Commercial Barge Line",
    role: "BI Developer Intern",
    period: "Jun 2022 – Jun 2023",
    location: "Jeffersonville, IN",
    description:
      "Developed business intelligence solutions to support data-driven decision making across the organization.",
    skills: ["SQL", "Business Intelligence", "Data Visualization"],
  },
];

export type Certification = {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
};

export const certifications: Certification[] = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2024",
    credentialId: undefined,
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

export type TravelLocation = {
  name: string;
  country: string;
  coordinates: [number, number]; // [longitude, latitude]
  note?: string;
};

// Update these with your actual travel locations
export const travelLocations: TravelLocation[] = [
  {
    name: "Philadelphia",
    country: "United States",
    coordinates: [-75.1652, 39.9526],
    note: "Home base.",
  },
  {
    name: "Harbor Springs",
    country: "United States",
    coordinates: [-84.9920, 45.4317],
    note: "Some of the best sunsets and landscape in the country.",
  },
  {
    name: "Paris",
    country: "France",
    coordinates: [2.3514, 48.8575],
    note: "Got stuck here for an extra weekend because Heathrow Airport fully shutdown.",
  },
  {
    name: "Amsterdam",
    country: "Netherlands",
    coordinates: [4.89707, 52.377956],
    note: "Gorgeous windmills and parks",
  },
  {
    name: "San Francisco",
    country: "United States",
    coordinates: [ -122.431297, 37.773972],
    note: "Loved the Sea Lions",
  },
  {
    name: "Rome",
    country: "Italy",
    coordinates: [12.496365, 41.902782],
    note: "Amazing architecture",
  },
  {
    name: "Napoli",
    country: "Italy",
    coordinates: [14.2681,40.8518 ],
    note: "Where I got addicted to espresso.",
  },
  {
    name: "Montreal",
    country: "Canada",
    coordinates: [ -73.5674, 45.5019],
    note: "2019 Canadian F1 Gran Prix.",
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
