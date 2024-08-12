

type PortfolioItem = {
  title: string;
  description: string;
  image: string;
  repo?: string; // Optional URL to the source code repository
  demo?: string; // Optional URL to the live demo
  visit?: string
  download?: string; // Optional URL to download the project
  techStack: string[]; // List of technologies used in the project
};

type SocialMediaLink = {
  title: string;
  href: string;
  icon: React.ComponentType;
};

type PortfolioSection = ColorLayout & {
  rowId: number;
  colId: number;
  title: string;
  content: React.ReactNode;
  navAddition?: boolean;
};

type ColorLayout = {
  bgColor: string;
  textColor: string;
};

