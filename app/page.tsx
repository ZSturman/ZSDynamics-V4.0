"use client";
import { Suspense } from "react";
import LoaderOne from "@/components/loaders/svgs";
import SectionContainer from "@/components/SectionContainer";
import { sections } from "@/site/sectionData";
import {
  useAnimationControls,
  useScroll,
  motion,
  useMotionValueEvent,
} from "framer-motion";
import { AnimationContext } from "../context/animationContext";
import ThemeToggle from "@/components/ThemeToggle"

export default function Home() {
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
    <Suspense fallback={<LoaderOne />}>


    <AnimationContext.Provider value={{ controls, scrollYProgress }}>
      <div className="fixed top-0 left-0 p-2 z-30">
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
            <section key={index} className="w-full flex items-center justify-center relative">
              <SectionContainer section={section} index={index} />
            </section>
          ))}
        </div>
      </div>
    </AnimationContext.Provider>

    </Suspense>
  );
}
