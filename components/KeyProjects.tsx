"use client";

import { motion } from "framer-motion";
import { FaApple, FaPaw, FaCheckSquare } from "react-icons/fa"; // Example icons

const projectVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const keyProjects = [
  {
    title: "TopNote",
    date: "March 2025",
    icon: FaCheckSquare,
    description: "A widget-based productivity app blending spaced repetition and task management, ensuring users focus on their next priority while managing their backlog efficiently.",
    shortDescription: "A widget-based productivity app blending spaced repetition and task management",
    builtWith: "Swift, SwiftData",
    githubLink: "https://github.com/ZSturman/TopNote",
    linkText: "View Project"
  },
  {
    title: "How's My Eating?",
    date: "January 2025",
    icon: FaApple,
    description: "An iOS app leveraging motion sensor data from AirPods to promote mindful eating habits by detecting fast eating and encouraging users to slow down.",
    shortDescription: "An iOS app to promote mindful eating habits using motion sensor data and ML",
    builtWith: "Swift, HealthKit, CoreMotion",
    githubLink: "https://github.com/ZSturman/Hows-My-Eating",
    linkText: "View on GitHub"
  },
  {
    title: "Lost & Hound",
    date: "October 2024",
    icon: FaPaw,
    description: "A mobile app designed to help reunite lost pets with their owners through community-driven reporting and AI-powered image recognition.",
    shortDescription: "A mobile app to help reunite lost pets using visual recognition",
    builtWith: "Swift+React Native, Firebase, OpenCV, PostgreSQL",
    githubLink: "https://github.com/ZSturman/Lost-Hound",
    linkText: "View Project"
  }
]

const KeyProjects = () => {
  return (
    <div className="flex flex-col p-10 mt-10 max-w-[900px] mx-auto">
      <h3 className="text-lg md:text-xl lg:text-2xl font-bold mt-10 mx-auto">Key Projects:</h3>
      <ul className="text-sm md:text-base lg:text-lg list-disc pl-8">

        {keyProjects.map((project, index) => (
          <motion.li className="flex flex-col gap-2 mt-6" variants={projectVariants} initial="hidden" whileInView="visible" key={index}>
            <div className="flex items-center gap-2">
              <project.icon className="text-xl text-dark-accent" />
              <strong>{project.title} ({project.date})</strong>
            </div>
            <p className="hidden sm:block">{project.description}</p>
            <p className="black sm:hidden">{project.shortDescription}</p>
            <p className="italic">Built with: {project.builtWith}</p>
            <a href={project.githubLink} className="text-blue-500 hover:underline">{project.linkText}</a>
          </motion.li>
        ))}
        
      </ul>
    </div>
  );
};

export default KeyProjects;