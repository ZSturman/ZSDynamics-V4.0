"use client";

import portfolioItems from "@/site/portfolio-items";
import { motion } from "framer-motion";
// Example icons

const projectVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const KeyProjects = () => {
  const keyProjects: PortfolioItem[] = portfolioItems.filter(
    (item) => item.id === 8 || item.id === 7 || item.id === 6
  );

  if (!keyProjects || keyProjects.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-col p-10 mt-10 max-w-[900px] mx-auto">
      <h3 className="text-lg md:text-xl lg:text-2xl font-bold mt-10 mx-auto">
        Key Projects:
      </h3>
      <ul className="text-sm md:text-base lg:text-lg list-disc pl-8">
        {keyProjects.map((project, index) => (
          <motion.li
            className="flex flex-col gap-2 mt-6"
            variants={projectVariants}
            initial="hidden"
            whileInView="visible"
            key={index}
          >
            {project.icon && project.date && (
              <div className="flex items-center gap-2">
                

                <project.icon />
                
                <strong>
                  {project.title} 
                </strong>
              </div>
            )}
            <p className="hidden sm:block">{project.description}</p>
            <p className="black sm:hidden">{project.shortDescription}</p>
            <div className="hidden sm:block">

            {project.techStack && (
              <p className="italic">Built with: {project.techStack.join(" ")}</p>
            )}
            </div>

            {project.links && project.links.length > 0 && (
              <a
                href={project.links[0].href}
                className="text-blue-500 hover:underline"
              >
                {project.links[0].label}
              </a>
            )}
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default KeyProjects;
