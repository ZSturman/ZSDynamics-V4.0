"use client"
import Hero from "@/components/Hero";
import RecentProjects from "../components/RecentProjects";

import WhatIKnow from "../components/WhatIKnow";
import Bio from "../components/Bio";
import FindMeOn from "../components/FindMeOn";

import UntilNextTime from "../components/UntilNextTime";

const evenColors: ColorLayout = {
  textColor: "text-darkest-shade",
  bgColor: "bg-lightest-shade",
};

const oddColors: ColorLayout = {
  textColor: "text-darkest-shade",
  bgColor: "bg-light-shade",
};

type SectionColumns = {
  id: number;
  title: string;
  naveAddition?: boolean;
  rows: SectionRow[];
};

type SectionRow = {
  id: number;
  title: string;
  content: JSX.Element;
};

export const sectionLayouts: SectionColumns[] = [
  {
    id: 1,
    title: "home", 
    naveAddition: true,
    rows: [
      {
        id: 1,
        title: "hero",
        content: <Hero />,
      },
      {
        id: 2,
        title: "recent-projects",
        content: <RecentProjects />,
      }
    ]
  },
  {
    id: 2,
    title: "studio",
    rows: [
      {
        id: 1,
        title: "what-i-know",
        content: <WhatIKnow />
      },
      {
        id: 2,
        title: "find-me-on",
        content: <FindMeOn />,
      }
    ]
  },
  {
    id: 3,
    title: "bio",
    rows: [
      {
        id: 1,
        title: "bio",
        content: <Bio />,
      },
      {
        id: 2,
        title: "until-next-time",
        content: <UntilNextTime />,
      }
    ]
  }
/*   {
    id: 4,
    title: "contact",
    rows: [
      {
        id: 1,
        title: "contact-form",
        content: <ContactForm />,
      },
      {
        id: 2,
        title: "until-next-time",
        content: <UntilNextTime />,
      }
    ]
  }, */
]



export const portfolioSections: PortfolioSection[] = [
  {
    rowId: 1,
    colId: 1,
    title: "hero",
    content: <Hero />,
    navAddition: true,
    ...evenColors,
  },
  {
    rowId: 1,
    colId: 2,
    title: "what-i-know",
    content: <WhatIKnow />,
    navAddition: false,
    ...oddColors,
  },
  {
    rowId: 1,
    colId: 3,
    title: "bio",
    content: <Bio />,
    navAddition: false,
    ...evenColors,
  },
/*   {
    rowId: 1,
    colId: 4,
    title: "contact-form",
    content: <ContactForm />,
    navAddition: false,
    ...oddColors,
  },  */
  {
    rowId: 2,
    colId: 1,
    title: "recents",
    content: <RecentProjects />,
    navAddition: false,
    ...oddColors,
  },
/*   {
    rowId: 2,
    colId: 2,
    title: "explore-my-work",
    content: <ExploreMyWork />,
    navAddition: false,
    ...evenColors,
  }, */
  {
    rowId: 2,
    colId: 2,
    title: "socials",
    content: <FindMeOn />,
    navAddition: false,
    ...evenColors,
  },
  {
    rowId: 2,
    colId: 3,
    title: "until-next-time",
    content: <UntilNextTime />,
    navAddition: false,
    ...oddColors,
  },
/*   {
    rowId: 2,
    colId: 4,
    title: "until-next-time",
    content: <UntilNextTime />,
    navAddition: false,
    ...evenColors,
  }, */
]


export type DisplayedSectionProps = {
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
  
export const sectionNames = ["home", "studio", "bio"];

export const sections: DisplayedSectionProps[] = [
    {
      id: 1,
      title: "home",
      contentTop: () => <Hero />,
      contentBottom: () => < RecentProjects />,
      bgTopColor: "bg-lighter-shade",
      bgBottomColor: "bg-light-shade",
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
      contentTop: () => <WhatIKnow />,
      contentBottom: () => <FindMeOn />,
      bgTopColor: "bg-light-shade",
      bgBottomColor: "bg-lighter-shade",
        textColor: "text-darkest-shade",
        prev: "home",
        next: "bio",
        top: "experience",
        bottom: "portfolio",
        prevBottom: "recents",
        nextBottom: "socials",
        prevTop: "home",
        nextTop: "bio",
        
        navAddition: false,
       
    },
    {
      id: 3,
      title: "bio",
      contentTop: () => <Bio />,
      contentBottom: () => <UntilNextTime/>,
      bgTopColor: "bg-lighter-shade",
      bgBottomColor: "bg-light-shade",
      textColor: "text-darkest-shade",
      prev: "studio",
        next: "contact",
        top: "about",
        bottom: "socials",
        prevBottom: "studio",
        nextBottom: "until next time",
        prevTop: "studio",
        nextTop: "contact",
        navAddition: false,

    },
/* 
    {
      id: 4,
      title: "contact",
      contentTop: () => <ContactForm />,
      contentBottom: () => <UntilNextTime/>,
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
     
    }, */
  ];
