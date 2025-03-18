import { FaGithub, FaApple, FaPaw, FaCheckSquare } from "react-icons/fa";

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Monorepo - React Component Library",
    description: "A collection of React components I use in my projects",
    techStack: ["React", "Next.js"],
    date: new Date("2024"),
    links: [
      {
        type: "repo",
        location: "github",
        label: "View Repo",
        href: "https://github.com/ZSturman/React-Component-Collection",
        icon: FaGithub,
      },
      {
        type: "visit",
        location: "website",
        label: "Visit Site",
        href: "https://react-component-collection-delta.vercel.app",
      },

    ],
    media: 
      {
        type: "image",
        alt: "Component Library Screenshot",
        src: "/images/SocialPreviewV.gif",
        title: "Component Library Screenshot"
      },
    
  },
  {
    id: 2,
    title: "FastHTML - Data Labeller for Machine Learning",
    description: "A tool to label data for machine learning models",

    techStack: ["Swift", "Machine Learning", "Motion Data"],
    date: new Date("2024"),
    links: [
      {
        type: "visit",
        location: "website",
        label: "Visit Site",
        href: "https://fast-ht-ml-panel.vercel.app",
      }
    ],
    media: 
      {
        type: "image",
        alt: "FastHTML Screenshot",
        src: "/images/FastHTML.png",
        title: "FastHTML Screenshot"
      }
  },

  {
    id: 3,
    title: "Obsidian Plugin Collection",
    description:
      "A collection of Obsidian plugins from a customizeable dashboard to a queue for your tasks",
    techStack: ["Python", "HTMX"],
    date: new Date("2024"),
    links: [
      {
        type: "repo",
        location: "github",
        label: "View Repo",
        href: "https://github.com/ZSturman/The-2nd-Best-Obsidian-Collection",
        icon: FaGithub,
      }
    ]
  },
  {
    id: 4,
    title: "How's My Eating?",
    subtitle: "An App to Slow Down Binge Eating",
    description:
      "'How's My Eating?' is an iOS application designed to help users develop healthier eating habits by slowing down their eating pace. The app uses kinetic data collected from devices like AirPods to monitor your eating speed and provide real-time notifications if eating too fast.",
    features: [
      "Real-Time Notifications: Get instant alerts to slow down if you're eating too fast.",
      "Kinetic Data Monitoring: Analyze your eating habits using motion data from AirPods.",
      "Privacy-Friendly: Focuses on kinetic data, ensuring a less intrusive experience.",
    ],
    date: new Date("2025"),
  },
  {
    id: 5,
    title: "Production Scheduling Desktop App",
    subtitle: "Automating Scheduling with Pipelines & Gantt Charts",
    description:
      "A cross-platform production scheduling app that integrates directly with Google Sheets, leveraging a Rust-powered backend and a React frontend to manage and visualize production workflows. With automated Gantt chart generation, and secure authentication, it streamlines scheduling for manufacturers.",
    features: [
      "Cross-Platform Support: Runs on macOS, Windows, and Linux.",
      "Gantt Charts & Scheduling: Auto-generates interactive timelines for production jobs.",
      "Secure Authentication: Uses a Google Cloud service account key for controlled access.",
      "Google Sheets Integration: Uses Google Sheets as a backend, eliminating the need for an extra database.",
      "CI/CD Pipeline: Automated testing & deployment via GitHub Actions & Rust Cargo Build.",
      "Customizable UI & Workflow: Modify job details, filters, and Gantt behaviors to fit specific needs.",
    ],
    links: [
      {
        type: "repo",
        location: "github",
        label: "View Repo",
        href: "https://github.com/ZSturman/rods-sheets_v2",
        icon: FaGithub,
      }
    ],
    media: {
      type: "video",
      title: "Production Scheduling App Demo",
      alt: "Production Scheduling App Demo",
      src: "https://www.youtube.com/embed/mIDGjtzKFQ0",
    },
    date: new Date("2025-01")
  },
  {
    id: 6,
        icon: FaPaw,
    title: "Lost & Hound",
    subtitle: "Reuniting Lost Pets with Their Owners",
    description: "An iOS app leveraging motion sensor data from AirPods to promote mindful eating habits by detecting fast eating and encouraging users to slow down.",
    shortDescription: "An iOS app to promote mindful eating habits using motion sensor data and ML",
    techStack: ["React Native", "Swift", "Firebase", "OpenCV", "PostgreSQL"],
    date: new Date("October 2024"),
    links: [
      {
        type: "repo",
        location: "github",
        label: "View on GitHub",
        href: "https://github.com/ZSturman/Hows-My-Eating",
        icon: FaGithub,
      }
    ]
  },
  {
    id: 7,
    title: "How's My Eating?",
    date: new Date("January 2025"),
    icon: FaApple,
    description: "An iOS app leveraging motion sensor data from AirPods to promote mindful eating habits by detecting fast eating and encouraging users to slow down.",
    shortDescription: "An iOS app to promote mindful eating habits using motion sensor data and ML",
    techStack: ["Swift", "HealthKit", "CoreMotion"],
    links: [
      {
        type: "repo",
        location: "github",
        label: "View on GitHub",
        href:  "https://github.com/ZSturman/Hows-My-Eating",
        icon: FaGithub,
      }
    ]
  },
  {
    id: 8,
    title: "TopNote",
    date: new Date("March 2025"),
    icon: FaCheckSquare,
    description: "A widget-based productivity app blending spaced repetition and task management, ensuring users focus on their next priority while managing their backlog efficiently.",
    shortDescription: "A widget-based productivity app blending spaced repetition and task management",
    techStack: ["Swift", "SwiftData"],
    links: [
      {
        type: "repo",
        location: "github",
        label: "View on GitHub",
        href: "https://github.com/ZSturman/TopNote",
        icon: FaGithub,
      }
    ]
  }
];

export default portfolioItems;
