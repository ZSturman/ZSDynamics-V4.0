import HomeTop from "./home/HomeTop";
import HomeBottom from "./home/HomeBottom";
import BioTop from "./bio/BioTop";
import BioBottom from "./bio/BioBottom";
import StudioTop from "./studio/StudioTop";
import StudioBottom from "./studio/StudioBottom";
import ContactTop from "./contact/ContactTop";
import ContactBottom from "./contact/ContactBottom";
import Tabs from "../Tabs";
import Portfolio from "../Portfolio";

export type SectionProps = {
    id: number;
    title: string;
    contentTop: () => React.ReactNode;
    contentBottom: () => React.ReactNode;
    bgTopColor: string;
    bgBottomColor: string;
    textColor: string;
    prev: string | null;
    next: string | null;
    top: string
    bottom: string
    prevBottom: string | null;
    nextBottom: string | null;
    prevTop: string | null;
    nextTop: string | null;
    navAddition?: boolean;
  };
  
  export const sectionNames = ["home", "studio", "bio",  "contact"];

export const sections: SectionProps[] = [
    {
      id: 1,
      title: "home",
      contentTop: () => <HomeTop />,
      contentBottom: () => < HomeBottom />,
      bgTopColor: "bg-light-shade",
      bgBottomColor: "bg-lighter-shade",
      textColor: "text-darkest-shade",
      prev: null,
      next: "studio",
      top: "home",
      bottom: "portfolio",
      prevBottom: null,
      nextBottom: "more",
      prevTop: null,
      nextTop: "experience",
      navAddition: true
    },
    {
      id: 2,
      title: "studio",
      contentTop: () => <StudioTop />,
      contentBottom: () => <Portfolio />,
      bgTopColor: "bg-light-shade",
      bgBottomColor: "bg-lighter-shade",
        textColor: "text-darkest-shade",
        prev: "home",
        next: "bio",
        top: "experience",
        bottom: "portfolio",
        prevBottom: "recents",
        nextBottom: "bio",
        prevTop: "home",
        nextTop: "bio",
        
        navAddition: false,
       
    },
    {
      id: 3,
      title: "bio",
      contentTop: () => <BioTop />,
      contentBottom: () => <BioBottom />,
      bgTopColor: "bg-lighter-shade",
      bgBottomColor: "bg-light-shade",
      textColor: "text-darkest-shade",
      prev: "studio",
        next: "contact",
        top: "about",
        bottom: "socials",
        prevBottom: "studio",
        nextBottom: "contact",
        prevTop: "studio",
        nextTop: "contact",
        navAddition: false,

    },

    {
      id: 4,
      title: "contact",
      contentTop: () => <ContactTop />,
      contentBottom: () => <ContactBottom/>,
      bgTopColor: "bg-lighter-shade",
      bgBottomColor: "bg-light-shade",
        textColor: "text-darkest-shade",
        prev: "bio",
        next: null,
        top: "contact",
        bottom: "until next time",
        prevBottom: "bio",
        nextBottom: null,
        prevTop: "bio",
        nextTop: null,
        
        navAddition: false,
     
    },
  ];
