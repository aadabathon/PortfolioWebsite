import type { Profile } from "../types/profile";

// Single source of truth for the static portfolio content.
// Projects intentionally aren't here: per the product plan, project data
// comes from the backend/database, not a frontend constant.
export const profile: Profile = {
  name: "Adam Shebani",
  role: "Computer Engineering Senior @ UW-Madison",
  location: "Madison, Wisconsin",
  bio: [
    "I'm a senior at UW-Madison studying Computer Engineering. I'm passionate about technology and science broadly, and enjoy working across both hardware and software.",
    "I'm chiefly focused on becoming a hardware engineer — computer architecture, VLSI, ASICs, FPGAs, and hardware accelerators are what excite me most about starting a career. I also enjoy quantitative trading and risk assessment as a side interest.",
  ],
  links: {
    github: "https://github.com/aadabathon",
    linkedin: "https://www.linkedin.com/in/adam-shebani-1741952b4/",
    email: "adamsheb414@gmail.com",
    resume: "/resume.pdf",
  },
  skillGroups: [
    {
      title: "Hardware & Digital Design",
      skills: [
        "SystemVerilog",
        "Computer Architecture",
        "VLSI",
        "ASICs",
        "FPGAs",
        "Hardware Accelerators",
      ],
    },
    {
      title: "Software",
      skills: ["Python", "Java", "C", "C++"],
    },
    {
      title: "Tools",
      skills: ["Git", "Linux"],
    },
  ],
};
