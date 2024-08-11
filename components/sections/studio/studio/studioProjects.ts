export type StudioCardType = {
  id: string;
  date: string;
  title: string;
  description: string;
  buttonName: string;
  link: string;
  image: string;
  bulletPoints?: string[];
  colors: {
    light: string;
    dark: string;
  };
};

export const studioProjectsList: StudioCardType[] = [
  {
    id: "0",
    date: "June, 2024",
    title: "The-2nd-Best-Obsidian-Collection",
    description:
      "A collection of Obsidian resources designed to enhance how you interact with your notes and manage your information.",
    bulletPoints: [
      "Automatically organizes files into rows and columns based on folder structure.",
      "Dynamically updates the dashboard by checking subdirectories and files.",
    ],
    buttonName: "Check it out",
    link: "https://github.com/ZSturman/The-2nd-Best-Obsidian-Collection",
    image: "/studio/SocialPreviewV.gif",
    colors: {
      light: "#a05c5c",
      dark: "#3a2323",
    },
  },
  {
    id: "1",
    date: "June, 2024",
    title: "The-2nd-Best-Obsidian-Debt-Ledger-App",
    description:
      "An app for iOS that helps you keep track of your debts and credits with friends and family.",
    bulletPoints: [
      "Helps you keep track of who owes you money and who you owe money to.",
      "Sends reminders to friends and family to pay you back.",
    ],
    buttonName: "Download it here",
    link: "#",
    image: "/studio/HomePage.png",
    colors: {
      light: "#6ca05c",
      dark: "#293a23",
    },
  },
  {
    id: "2",
    date: "Feb, 2024",
    title: "Xylo Clone: A High-Fidelity User Experience",
    description:
      "A high-fidelity replica of the Xylo website built with a modern tech stack",
    bulletPoints: [
      "Responsive Design for all devices",
      "Animations, product exploration, and user-friendly interactions.",
      "Efficient API integrations provide real-time data for a dynamic experience.",
    ],
    buttonName: "Check it out",
    link: "https://xylo-clone-5by2le3lr-zsturmans-projects.vercel.app/",
    image: "/studio/xyloClone.png",
    colors: {
      light: "#a05c5c",
      dark: "#3a2323",
    },
  },
];
