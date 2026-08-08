import type { Profile } from "../types/profile";

// Single source of truth for the static portfolio content.
// Projects intentionally aren't here: per the product plan, project data
// comes from the backend/database, not a frontend constant.
export const profile: Profile = {
  name: "Adam Shebani",
  role: "Computer Engineering Senior @ UW-Madison",
  location: "Madison, Wisconsin",
  bio: [ 
	"Hi, I am Adam! I'm a senior at the University of Wisconsin–Madison studying Computer Engineering. I'm broadly passionate about technology and science, and I enjoy working across the boundary between hardware and software.",

"My primary focus is hardware engineering. Computer architecture, digital design, VLSI, ASICs, FPGAs, and hardware accelerators are the areas that excite me most as I begin my career. I especially enjoy understanding computing across levels of abstraction; From transistors and digital logic to processors, operating systems, and the software that runs on top of them.",

"Outside of hardware, I program because I enjoy building things. Most of my software projects start with something I want for myself: a tool for exploring an idea, automating a workflow, analyzing data, or supporting another hobby. I've worked primarily with Python, C, Java, and SystemVerilog, with projects spanning embedded systems, digital hardware, data processing, and web development.",

"I'm particularly interested in quantitative finance and risk analysis, where I enjoy applying programming, statistics, and mathematics to markets. More broadly, I like learning how complex systems work—whether that's a processor, a distributed system, a financial market, or something entirely outside of engineering. My technical interests are of great breadth and could not be confined to one page!",

"When I'm away from my computer, you'll usually find me lifting, biking, reading, or spending time with friends and family. I'm always looking for something new to learn or build.",

"If you'd like to talk about engineering, collaborate on something, or just connect, feel free to reach out.",
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
      skills: ["Git", "Linux", "Docker", "HDFS", "Spark", "Kafka", "Cassandra"],
    },
    { 
      title: "Embedded",
      skills: ["Alitum", "PSoC6", "Modus Toolbox", "UART", "SPI", "I2C", "FreeRTOS"],
    }
  ],
};
