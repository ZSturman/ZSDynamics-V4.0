import { FiLinkedin } from "react-icons/fi";
import { BsTwitterX } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { FaBluesky } from "react-icons/fa6";
import { BsSubstack } from "react-icons/bs";
import { FaMastodon } from "react-icons/fa";
import { FaMediumM } from "react-icons/fa";
import { FaDev } from "react-icons/fa6";
import { IoLogoGitlab } from "react-icons/io5";
import { FaHashnode } from "react-icons/fa6";
import { FaCodepen } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { LiaHackerrank } from "react-icons/lia";

export const mainLinks: SocialMediaLink[] = [
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/zacharysturman/",
    icon: FiLinkedin,
  },
  {
    title: "GitHub",
    href: "https://github.com/ZSturman",
    icon: FaGithub,
  },
  {
    title: "Hashnode",
    href: "https://zacharysturman.hashnode.dev/",
    icon: FaHashnode,
  },
  
  {
    title: "Email",
    href: "mailto:zasturman@gmail.com",
    icon: FaEnvelope,
  },
  {
    title: "Resume",
    href: "/ZacharySturman_Resume.pdf",
    icon: FaFileAlt,
  },
];

export const workLinks: SocialMediaLink[] = [
  {
    title: "GitHub",
    href: "https://github.com/ZSturman",
    icon: FaGithub,
  },
  {
    title: "Hashnode",
    href: "https://zacharysturman.hashnode.dev/",
    icon: FaHashnode,
  },



];
export const socialLinks: SocialMediaLink[] = [
  {
    title: "GitHub",
    href: "https://github.com/ZSturman",
    icon: FaGithub,
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/zacharysturman/",
    icon: FiLinkedin,
  },
  {
    title: "Hashnode",
    href: "https://zacharysturman.hashnode.dev/",
    icon: FaHashnode,
  },
  {
    title: "Bluesky",
    href: "https://bsky.app/profile/zacharysturman.bsky.social",
    icon: FaBluesky,
  },
  {
    title: "HackerRank",
    href: "https://www.hackerrank.com/zasturman",
    icon: LiaHackerrank,
  },
];

export const otherLinks: SocialMediaLink[] = [
  {
    title: "Twitter",
    href: "https://twitter.com/zacharysturman",
    icon: BsTwitterX,
  }
]

const notUsed: SocialMediaLink[] = [

  {
    title: "Medium",
    href: "https://zacharysturman.medium.com/",
    icon: FaMediumM,
  },
  {
    title: "Substack",
    href: "https://zacharysturman.substack.com/",
    icon: BsSubstack,
  },
  {
    title: "GitLab",
    href: "https://gitlab.com/ZSturman",
    icon: IoLogoGitlab,
  },
  {
    title: "Behance",
    href: "https://www.behance.net/zacharysturman",
    icon: FaBehance,
  },
]