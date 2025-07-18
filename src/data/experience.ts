export interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string;
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Co-op Software Developer",
    company: "Seisware International Inc",
    location: "Calgary, Alberta",
    duration: "January 2024 - August 2024",
    description:
      "During my Co-op as a Software Developer, I contributed to the stability and performance of a large-scale C++ application used by over 500 active users by resolving 20+ customer-reported and internal bugs. I modernized the team’s testing infrastructure by migrating from NUnit to MSTest, adapting over 50 unit tests to support automated quality checks in a CI/CD pipeline. Additionally, I collaborated closely with cross-functional teams and participated in 10+ sprint planning sessions, contributing to the team’s agile development workflow and delivery goals.",
    technologies: ["C++", "Git", "Qt"],
  },
  {
    id: 2,
    title: "Visual Communication Software Member ",
    company: "University of Calgary Solar Car Team",
    location: "Calgary, Alberta",
    duration: "October 2023 - May 2025",
    description:
      "Aided in creating a Python script that automatically generates the necessary C++ files from a CSV input, significantly reducing manual work and simplifying the process of adding new features or data types to the system.",
    technologies: ["C++", "Python"],
  },
];
