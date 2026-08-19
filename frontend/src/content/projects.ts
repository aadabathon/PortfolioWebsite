import type { Project } from "../types/project";

// Fill in each project below as you're ready:
//   - description: replace the TODO with real copy.
//   - imageUrl: drop the image file in frontend/public/images/projects/
//     and point this at it, e.g. "/images/projects/16-bit-processor.png".
//   - repos: one entry per linked repo. Most projects only need one; give
//     each entry a short label so multiple repos are distinguishable
//     (shown as the tooltip/aria-label on its GitHub icon).
//   - tags: whatever languages/tools are relevant (shown as pills on the card).
//   - demoUrl: optional — a write-up or demo link, omit if you don't have one.
//
// If this array is empty, the Projects section falls back to a
// "coming soon" placeholder automatically — see ProjectsSection.tsx.
export const projects: Project[] = [
  {
    slug: "16-bit-processor",
    title: "16-Bit Processor",
    description: "This 16-Bit procesesor draws heavy inspiration from the LC-3's instruction set, and is implemented entirely in SystemVerilog.",
    imageUrl: "/images/projects/16-bit-processor.png",
    repos: [
      { label: "GitHub", url: "https://github.com/aadabathon/16_Bit_CPU" },
    ],
    tags: [],
  },
  {
    slug: "sfp-embedded-project",
    title: "SFP Embedded Project",
    description:
      "This SFP+ Carrier Board is a 4-layer, 10 Gb/s SFP+ interface board for a free-space optical comms experiment, routing the module's high-speed pairs out to SMA coaxial interfaces and control lines to a header. I designed the full signal path from first principles: 100 Ω differential geometry from transmission-line physics, GCPW with λ/10 stitching for return-path continuity, pairs length-matched under 3 mil, and a two-ground architecture isolating chassis from the signal reference. Additionally, there is a voltage regulator that takes in potentially noisy 5V from the header and feeds clean 3v3 to the power rail and SFP+ module. The board was developed as part of an ongoing research project, with additional hardware and experimental development currently underway.",
    imageUrl: "/images/projects/sfp-embedded-project.png",
    repos: [
      { label: "GitHub", url: "https://github.com/aadabathon/SFPmodule" },
    ],
    tags: [],
  },
  {
    slug: "psoc6-cy8-ai-board",
    title: "PSoC6 CY8 AI Board",
    description: "TODO: add a description.",
    imageUrl: "/images/projects/psoc6-cy8-ai-board.png",
    repos: [
      {
        label: "AI Working Dir",
        url: "https://github.com/aadabathon/PSoC6AI-workingDir",
      },
      {
        label: "Logging / ML",
        url: "https://github.com/aadabathon/PSoC6-logging-ML",
      },
    ],
    tags: [],
  },
  {
    slug: "ece551-soc-mazerunner",
    title: "ECE 551 SoC Mazerunner",
    description: "Mazerunner was a guided, semester-long system-on-a-chip project. By the end of the semester, the hierarchy was comprised of over ten modules. SPI and UART modules were implemented for communication with the gyroscope and bluetooth interfaces respectively. The project used infrared light to determine the direction the rover was facing, and the difference between it and the desired heading was fed into a PID module to attenuate or amplify wheel rotation. Mazerunner took commands like 'Move until left-open', but it also could solve the maze on its own, declaring its victory with a song once it had reached a magnet. The entire design was pipelined to meet timing constraints, synthesized in Quartus and Synopsys Design Compiler, and demoed live.",
    imageUrl: "/images/projects/ece551-soc-mazerunner.png",
    repos: [
      {
        label: "GitHub",
        url: "https://github.com/aadabathon/ECE551/tree/main/FinalProj",
      },
    ],
    tags: [],
  },
  {
    slug: "quanthub",
    title: "QuantHub",
    description: "Quanthub is an ongoing, quantitative trading workstation. Implemented exclusively in python, Quanthub aspires to be the one stop shop for quantitative research and trading tools. Currently, the app supports synthetic price modeling with a geometric brownian motion, as well as real time equity data from the Interactive Brokers API. All calls to the IBKR API get stored in a SQLite database and the program checks the database before calling the API. This allows users to accumulate historical datasets, for free, while minimizing unnecessary API calls. Furthermore, Quanthub offers an options lab wherein you can generate Black-Scholes call/put prices for any arbitrary parameterization, look at real-time option chains, and observe the volatility surface for a given chain. While this project is designed as an ongoing platform, it is still useful in its infancy for traders and anyone interested in the space.",
    imageUrl: "/images/projects/quanthub.png",
    repos: [
      { label: "GitHub", url: "https://github.com/aadabathon/quanthub" },
    ],
    tags: [],
  },
  {
    slug: "mlcookbook",
    title: "MLcookbook",
    description: "TODO: add a description.",
    imageUrl: "/images/projects/mlcookbook.png",
    repos: [
      { label: "GitHub", url: "https://github.com/aadabathon/MLcookbook" },
    ],
    tags: [],
  },
];
