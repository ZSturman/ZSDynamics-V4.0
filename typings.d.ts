type PortfolioMediaItem = {
  type: "image" | "video" | "gif" | "audio";
  alt: string;
  src: string;
  title: string;
}

type PortfolioLink = {
  type: "demo" | "repo" | "visit" | "download";
  location: string;
  label: string;
  href: string;
  icon?: React.ComponentType;
}

type PortfolioItem = {
  id: number
  icon?: React.ComponentType; // Optional icon for the project
  title: string;
  subtitle?: string; // Optional subtitle for the project
  description: string;
  shortDescription?: string; // Optional short description
  techStack?: string[]; // List of technologies used in the project
  features?: string[]; // Optional list of features or highlights
  date: Date 
  links?: PortfolioLink[];
  media?: PortfolioMediaItem 
  advertisePriority?: number; // Optional priority for advertising the project
  isFeatured?: boolean; // Optional flag to mark the project as featured
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

