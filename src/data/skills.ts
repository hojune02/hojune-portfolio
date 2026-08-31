export type SkillGroup = {
  category: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    skills: [
      "JavaScript",
      "TypeScript",
      "Python",
      "C",
      "C++",
    ],
  },
  {
    category: "Frontend",
    skills: [
      "HTML",
      "CSS",
      "React",
      "Vite",
    ],
  },
  {
    category: "Backend",
    skills: [
      "Node.js",
      "Express",
      "FastAPI",
    ],
  },
  {
    category: "Systems & Security",
    skills: [
      "Linux",
      "Operating Systems",
      "Computer Networks",
      "Ghidra",
    ],
  },
  {
    category: "Tools",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "VS Code",
    ],
  },
];