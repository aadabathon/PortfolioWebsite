import type { Profile } from "../types/profile";

// Single source of truth for the static portfolio content.
// Projects intentionally aren't here: per the product plan, project data
// comes from the backend/database, not a frontend constant.
export const profile: Profile = {
  name: "Adam Shebani",
  role: "Computer Engineering Senior @ UW-Madison",
  location: "Madison, Wisconsin",
  bio: [ 
	"Hi, I am Adam! I'm a senior at the University of Wisconsin–Madison studying Computer Engineering. I'm broadly passionate about technology and science, and I enjoy implementing what I learn in practice.",

"My primary focus is hardware engineering. Computer architecture, digital design, VLSI, ASICs, FPGAs, and hardware accelerators are the areas that excite me most as I begin my career. I especially enjoy understanding computing across levels of abstraction; from transistors and digital logic to processors, operating systems, and the software that runs on top of them. Typically my workflow is writing RTL and tests in SystemVerilog, using Vivado for FPGA synthesis, and then using Synopsys Design Compiler and ICC for ASIC synthand APR respectively.",

"Outside of hardware, I program because I enjoy building things. Most of my software projects start with something I want for myself: a tool for exploring an idea, automating a workflow, analyzing data, or supporting another hobby. I've worked primarily with Python, C, and Java; with a small amount of C++. My projects span embedded systems, digital hardware, data processing, and web development. I am constantly looking to improve my portfolio, discover new technology, and ship increasingly useful personal projects.",

"I really cannot stress how much I find interesting. Aside from my current professional aspirations, there are many fields I'd happily pivot to work in. Math, physics, chemistry, biology, finance: these are all areas of study I hold in the same regard as computer science.  More importantly, I am insatiably curious. Not knowing things doesn't sit right with me, I sit with a problem until it is resolved. ",

"When I'm away from my computer, you'll usually find me lifting, biking, reading, or spending time with friends and family. I enjoy watching and playing most sports, and try to pick up new hobbies when I can.",

"If you'd like to talk about engineering, collaborate on something, or just connect, feel free to shoot me a text or an email at the resources linked on this page.",
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
      skills: ["Altium", "PSoC6", "Modus Toolbox", "UART", "SPI", "I2C", "FreeRTOS"],
    }
  ],
};
