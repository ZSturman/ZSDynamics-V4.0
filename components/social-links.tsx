import { FiLinkedin } from "react-icons/fi";
import { BsTwitterX } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";

const socialMediaLinks: SocialMediaLink[] = [
    {
      title: "linkedin",
      href: "https://www.linkedin.com/in/zacharysturman/",
      icon: FiLinkedin,
    },
    {
      title: "twitter",
      href: "https://twitter.com/zachary_sturman",
      icon: BsTwitterX,
    },
    {
      title: "github",
      href: "https://github.com/ZSturman",
      icon: FaGithub,
    },
    {
      title: "phone",
      href: "tel:+61426233374",
      icon: FaPhone,
    },
    {
      title: "email",
      href: "mailto:zasturman@gmail.com",
      icon: FaEnvelope,
    },
    {
      title: "resume",
      href: "/ZacharySturman_Resume.pdf",
      icon: FaFileAlt,
    },
  ];

  export default socialMediaLinks;
  