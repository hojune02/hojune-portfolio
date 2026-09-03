import imageImageFitLab from "../assets/projects/imagefitlab.png"

export type ProjectDetails = {
  problem: string;
  solution: string;
  challenge: string;
};

export type Project = {
  id: number;
  title: string;
  category: string;
  summary: string;
  technologies: string[];
  details: ProjectDetails;
  image?: string;
  github?: string;
  demo?: string;
  deployed?: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Research Paper Agent",
    category: "AI Application",
    summary:
      "A local document-question-answering system that retrieves relevant research content and generates grounded answers using a locally hosted language model.",
    technologies: [
      "Python",
      "FastAPI",
      "Gradio",
      "Docker",
      "llama.cpp",
      "RAG",
    ],
    details: {
      problem:
        "Researchers often spend significant time searching long technical documents for a small amount of relevant information. Cloud-based AI tools can also create privacy, cost, and reproducibility concerns.",
      solution:
        "I built a local retrieval-augmented generation pipeline that ingests research papers, retrieves relevant passages, and sends the retrieved context to a locally hosted language model. A FastAPI backend exposes the system while Gradio provides an interactive interface.",
      challenge:
        "The main engineering challenge was connecting several independently running components—including document retrieval, the API server, Docker services, and llama.cpp—while keeping model aliases, ports, context limits, and configuration consistent.",
    },
  },
  {
    id: 2,
    title: "PLC Binary Classification",
    category: "Cybersecurity Research",
    summary:
      "A static-analysis pipeline for studying whether compiled industrial-control binaries can be classified by critical-infrastructure sector.",
    technologies: [
      "Python",
      "Ghidra",
      "GCC",
      "Static Analysis",
      "Linux",
    ],
    details: {
      problem:
        "Compiled industrial-control binaries often lack source code and meaningful symbols, making it difficult to determine their operational purpose or infrastructure sector.",
      solution:
        "I developed a pipeline that compiles Structured Text programs into ELF binaries, strips identifying information, extracts static features, and investigates whether operational patterns can distinguish water-sector control logic from unrelated programs.",
      challenge:
        "Optimizing compilers remove or transform many obvious semantic clues. I therefore investigated features such as embedded constants, strings, imported functions, control-flow structure, and other artifacts that can survive compilation and symbol stripping.",
    },
  },
  {
    id: 3,
    title: "ImageFitLab",
    category: "Frontend Application",
    summary:
      "Privacy-focused image editor that resizes, compresses, converts, rotates, and adjusts images entirely within the browser.",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Canvas API",
      "CSS",
    ],
    details: {
      problem:
        "Many online image-editing tools require users to upload their files to a remote server, creating privacy concerns and unnecessary delays for simple tasks such as resizing, compression, and format conversion.",
      solution:
        "I built a responsive browser-based image editor that processes images locally using the Canvas API. Users can resize images, preserve aspect ratios, adjust brightness and contrast, rotate or flip images, convert between WebP, JPEG, and PNG, preview the result, and download the optimized file.",
      challenge:
        "The main challenge was coordinating image dimensions, aspect-ratio locking, transformations, compression settings, and asynchronous Canvas rendering while keeping previews responsive and correctly managing temporary browser object URLs.",
    },
    image: imageImageFitLab,
    github: "https://github.com/hojune02/imagefitlab",
    deployed: "https://www.imagefitlab.com"
  },
  {
    id: 4,
    title: "Dove",
    category: "Frontend Application",
    summary:
      "A Prayer Reminder web application that lets users schedule notifications for daily prayers and view prayer times based on their location.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React Native with Expo",
      "Local Storage",
    ],
    details: {
      problem:
        "Users need a convenient way to manage their daily prayer schedules and access accurate prayer times based on their location.",
      solution:
        "I created a Prayer Reminder web application that allows users to schedule notifications for daily prayers and view prayer times based on their location.",
      challenge:
        "The project required integrating with RevenueCat API for subscription management, handling local storage for user preferences, and ensuring accurate notifications as set by the user",
    },
    github:
      "https://github.com/hojune02/dove",
    demo:
      "https://www.youtube.com/shorts/FufcNgPuC_4"
  },
];