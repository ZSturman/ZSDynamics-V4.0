type PortfolioTab = {
    label: string;
    value: string;
  };


type PortfolioItem = {
  title: string;
  description: string;
  image: string;
  url: string;
  type: string[]; // Types like 'React', 'Next.js', etc.
  sourceCodeUrl?: string; // Optional URL to the source code repository
  liveDemoUrl?: string; // Optional URL to the live demo
  techStack: string[]; // List of technologies used in the project
  duration: string; // Duration of the project (e.g., "3 months")
  dateCompleted: string; // Date the project was completed
  role: string; // The developer's role in the project (e.g., "Frontend Developer")
};