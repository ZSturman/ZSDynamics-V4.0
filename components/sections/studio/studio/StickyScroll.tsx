"use client"
import { useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import ExportedImage from "next-image-export-optimizer";
import { StudioCardType } from "./studioProjects";



const StickyScroll = ({ projects }: { projects: StudioCardType[] }) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = projects.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = projects.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  return (
    <>
      <div className="max-w-[900px] md:w-[750px] lg:w-[900px] rounded-xl shadow-lg">
        <motion.div
          className={`flex h-[35rem] md:h-[30rem] overflow-y-auto justify-center relative space-x-10 rounded-md p-2 md:p-10  backdrop-blur-sm `}

          ref={ref}
        >
          <div className="div relative flex items-start px-4">
            <div className="max-w-2xl">
              {projects.map((project, index) => (
                <div key={project.title + index} className="mt-5 mb-20">
                  <div>
                    <motion.h3
                      initial={{
                        opacity: 0,
                      }}
                      animate={{
                        opacity: activeCard === index ? 1 : 0.3,
                      }}
                      className="text-kg text-sm"
                    >
                      {project.date}
                    </motion.h3>
                  </div>
                  <motion.h2
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: activeCard === index ? 1 : 0.3,
                    }}
                    className="text-2xl font-bold mb-5"
                  >
                    {project.title}
                  </motion.h2>
                  <motion.p
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: activeCard === index ? 1 : 0.3,
                    }}
                    className="text-kg  max-w-sm"
                  >
                    {project.description}
                  </motion.p>

                  {project.bulletPoints && (
                    <motion.ul
                      initial={{
                        opacity: 0,
                      }}
                      animate={{
                        opacity: activeCard === index ? 1 : 0.3,
                      }}
                      className="max-w-sm m-3 list-disc indent-3"
                    >
                      {project.bulletPoints.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </motion.ul>
                  )}

                  <motion.button
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: activeCard === index ? 1 : 0.3,
                    }}
                    className="rounded-lg p-2 mt-5 border-2 border-slate-200"
                  >
                    <a href={project.link ?? "#"}>
                      {project.buttonName ?? "View Project"}
                    </a>
                  </motion.button>
                </div>
              ))}
              <div className="h-20" />
            </div>
          </div>
          <motion.div className="hidden md:block h-96 w-96 rounded-md shadow-lg sticky top-0 bg-slate-100/20 overflow-hidden">
            <div className="absolute justify-center items-center w-full h-full overflow-hidden">

            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default StickyScroll

/*               <ExportedImage
                src={projects[activeCard].image}
                alt="Project Image"
                style={{ objectFit: "cover" }}
                priority
                className="filter grayscale-50"
              /> */