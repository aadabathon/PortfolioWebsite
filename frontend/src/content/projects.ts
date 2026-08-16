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
    description: "TODO: add a description.",
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
      "SFP+ Carrier Board — A 4-layer, 10 Gb/s SFP+ interface board (Altium) for a free-space optical comms experiment, routing the module's high-speed pairs out to SMA coax and control lines to a header. I designed the full signal path from first principles: 100 Ω differential geometry from transmission-line physics, GCPW with λ/10 stitching for return-path continuity, pairs length-matched under 3 mil, and a two-ground architecture isolating chassis from the signal reference.",
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
    description: "TODO: add a description.",
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
    description: "TODO: add a description.",
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
