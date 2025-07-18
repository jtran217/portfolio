export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  challenges: string[];
  githubUrl: string;
  liveUrl: string;
  images: string[];
  videoUrl: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "CRM Tool for Stone Shield Calgary",
    description:
      "Built a full-stack CRM system for Stone Shield Calgary using React.js, Express.js, and PostgreSQL to manage leads, automate follow-ups, and streamline team workflows.",
    longDescription:
      "Stone Shield Calgary reached out to me looking for a better way to manage their growing list of clients, as their current process relied heavily on Excel sheets. In response, I designed and developed a custom, mobile friendly Client Relationship Management (CRM) system using React.js, Express.js, and PostgreSQL. The platform allows them to efficiently track leads, manage estimates, automate follow up reminders, and organize client interactions, all accessible from their phones, which was a key requirement for their field focused team. This solution significantly streamlined their workflow and improved team coordination.",
    technologies: [
      "React",
      "Express.js",
      "TypeScript",
      "PostgreSQL",
      "Google Maps API",
      "Supabase",
    ],
    features: [
      "Lead management and tracking",
      "Google Maps integration for lead visualization",
      "Team workflow optimization",
      "Real-time data synchronization",
    ],
    challenges: [
      "Integrating Google Maps API for dynamic lead visualization",
      "Creating intuitive user interfaces for complex business processes",
    ],
    githubUrl: "#",
    liveUrl: "#",
    images: [
      "https://res.cloudinary.com/dittybzbt/image/upload/v1752868386/StoneShieldCRMBlocked_uctl1r.png",
      "https://res.cloudinary.com/dittybzbt/image/upload/v1752868386/StoneShieldEstimation_sdrtr6.png",
      "https://res.cloudinary.com/dittybzbt/image/upload/v1752868387/StoneShieldMap_xhcoll.png",
    ],
    videoUrl: "",
  },
  {
    id: 2,
    title: "E-Commerce Mobile App",
    description:
      "Built a full-stack cross-platform e-commerce app for KlayTheLabel using React Native, Express.js, and the Shopify API.",
    longDescription:
      "This project was developed to support KlayTheLabel’s growing customer base by offering a smoother and more personalized mobile shopping experience. The goal was to help recurring customers easily access products, manage wishlists, track orders, and stay engaged with the brand. Built using React Native and integrated with the Shopify API, the app includes user profiles and real-time updates on new product drops. A custom Express.js backend, containerized with Docker and deployed on AWS, ensures secure and scalable operations tailored to the business’s evolving needs.",
    technologies: [
      "React Native",
      "TypeScript",
      "Express.js",
      "PostgreSQL",
      "Docker",
      "AWS",
      "Shopify API",
    ],
    features: [
      "Cross-platform mobile compatibility",
      "Shopify API integration",
      "Wishlist functionality",
      "User profile management",
      "Order tracking system",
      "Push notifications",
      "JWT authentication",
      "Dockerized deployment",
    ],
    challenges: [
      "Integrating with Shopify API for seamless e-commerce functionality",
      "Implementing cross-platform compatibility",
      "Setting up Docker containerization for scalable deployment",
      "Managing user authentication and security across mobile platforms",
    ],
    githubUrl: "#",
    liveUrl: "#",
    images: [],
    videoUrl: "",
  },
  {
    id: 3,
    title: "Campus Buddy",
    description:
      "Collaborative mobile app designed to centralize campus events and student engagement.",
    longDescription:
      "Campus Buddy was created to solve the problem of fragmented campus communication and event discovery. It provides a centralized platform for students to discover events, connect with peers, and stay engaged with campus life through an intuitive mobile interface. As your ultimate destination for everything campus life, Campus Buddy keeps you updated on events, enhances social networking, and offers exclusive student deals and discounts from partner businesses — all in one place.",
    technologies: [
      "React Native",
      "TypeScript",
      "Express.js",
      "Figma",
      "Firebase",
      "AWS",
    ],
    features: [
      "Centralized campus event discovery",
      "Student engagement tracking",
      "Intuitive UI/UX design",
      "Event notifications and reminders",
      "Social interaction features",
      "Campus map integration",
      "Student organization profiles",
    ],
    challenges: [
      "Designing intuitive user experience for diverse student needs",
      "Creating scalable system architecture for growing user base",
      "Integrating multiple campus services and data sources",
      "Balancing feature richness with app performance",
    ],
    githubUrl: "https://github.com/AarshShah9/CampusBuddy",
    liveUrl: "#",
    images: [
      "https://res.cloudinary.com/dittybzbt/image/upload/v1752869964/CampusBuddyOverview_tzykvk.png",
      "https://res.cloudinary.com/dittybzbt/image/upload/v1752869964/CampusBuddyEventPage_ltoohx.png",
      "https://res.cloudinary.com/dittybzbt/image/upload/v1752869963/CampusBuddyChatFeature_dlbtob.png",
      "https://res.cloudinary.com/dittybzbt/image/upload/v1752869964/CampusBuddyProfilePage_cojd6x.png",
    ],
    videoUrl: "",
  },
];
