export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "CRM Tool for Stone Shield Calgary",
    description:
      "Built a full-stack CRM system for Stone Shield Calgary using React.js, Express.js, and PostgreSQL to manage leads, automate follow-ups, and streamline team workflows. Integrated Google Maps API for lead visualization and used Supabase to handle backend services and authentication.",
    technologies: ["React", "Express.js", "TypeScript", "PostGreSQL"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: 2,
    title: "E-Commerce Mobile App",
    description:
      "Built a full-stack cross-platform e-commerce app for KlayTheLabel using React Native, Express.js, and the Shopify API. Implemented features like wishlists, user profiles, and order tracking, with a Dockerized backend deployed to AWS. Added push notifications and JWT authentication to enhance user engagement and security.",
    technologies: [
      "React Native",
      "TypeScript",
      "Express.js",
      "PostGreSQL",
      "Docker",
    ],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: 3,
    title: "Campus Buddy",
    description:
      "Collaborative mobile app designed to centralize campus events and student engagement. Developed intuitive UI/UX with React Native and TypeScript, and contributed to system architecture and technical documentation for a scalable Express.js backend.",
    technologies: ["React Native", "TypeScript", "Express.js", "Figma"],
    githubUrl: "#",
    liveUrl: "#",
  },
];
