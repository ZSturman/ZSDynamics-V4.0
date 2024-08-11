"use client";
import SectionContainer from "./components/SectionContainer";
import { sections } from "./sectionData";
import {
  useAnimationControls,
  useScroll,
  motion,
  useMotionValueEvent,
} from "framer-motion";
import { AnimationContext } from "@/context/animationContext";
import ThemeToggle from "../toggles/ToggleTheme";

const Sections = () => {
  const controls = useAnimationControls();
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.95) {
      controls.start("moveToggle");
    } else {
      controls.start("initial");
    }
  });

  const toggleVariants = {
    initial: { y: 0, 
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.25,
      }, },
    moveToggle: {
      y: 50,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.25,
      },
    },
  };

  return (
    <AnimationContext.Provider value={{ controls, scrollYProgress }}>
      <div className="fixed top-0 left-0 p-2">
        <motion.div
          variants={toggleVariants}
          initial="initial"
          animate={controls}
        >
          <ThemeToggle />
        </motion.div>
      </div>
      <div className="overflow-x-scroll overflow-y-clip ">
        <div className="flex flex-row items-center justify-start overflow-x-scroll  snap-x snap-mandatory">
          {sections.map((section, index) => (
            <section key={index}>
              <SectionContainer section={section} />
            </section>
          ))}
        </div>
      </div>
    </AnimationContext.Provider>
  );
};

export default Sections;
