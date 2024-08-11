import React, { useState } from "react";
import { SectionProps } from "../sectionData";
import { motion, useMotionValueEvent, useTransform } from "framer-motion";
import { FaAngleDown, FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useAnimationControlsContext } from "@/context/animationContext";
import InViewContainer from "../../animations/InViewContainer";

interface SectionTopProps {
  section: SectionProps;
}

const SectionTop: React.FC<SectionTopProps> = ({ section }) => {
  const [topOrBottom, setTopOrBottom] = useState<"Top" | "Bottom">("Top");
  const { scrollYProgress } = useAnimationControlsContext();

  const y = useTransform(scrollYProgress, [0, 1], [0, 1000]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setTopOrBottom(latest > 0.5 ? "Bottom" : "Top");
  });

  const navH = 40;

  const handleDownClick = () => {
    document
      .getElementById(`section${section.title}Bottom`)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const handleLeftClick = () => {
    document
      .getElementById(`section${section.prev}${topOrBottom}`)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const handleRightClick = () => {
    document
      .getElementById(`section${section.next}${topOrBottom}`)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={`flex flex-col items-center justify-between overflow-y-clip w-screen ${section.bgTopColor}`}
      id={`section${section.title}Top`}
      style={{ height: `calc(100dvh - ${navH}px)` }}
    >
      <div className="w-screen h-full max-w-[1400px] flex items-center justify-between">
        <motion.div
          className="flex items-center justify-center mx-1 md:mx-5"
          initial={{ opacity: 0, y: -100, scale: 2 }}
          animate={{ opacity: 0.5, y: 0, scale: 1 }}
          transition={{ delay: 1.5 }}
          
        >
          {section.prev && (
            <motion.button
              className="opacity-50 text-xl hover:opacity-90 flex items-center gap-2"
              onClick={handleLeftClick}
              whileHover={{ scale: 1.1 }}
          
            >
              <FaAngleLeft />
              {section.prevTop}
            </motion.button>
          )}
        </motion.div>

        <InViewContainer
          fromDirection="left"
          delay={0.15}
          amount={1}
          className=" flex items-center justify-center pb-20 max-w-[1100px]"
        >
          <motion.div style={{ y }}>{section.contentTop()}</motion.div>
        </InViewContainer>

        <motion.div
          className="flex items-center justify-center mx-1 md:mx-5"
          initial={{ opacity: 0, y: -100, scale: 2 }}
          animate={{ opacity: 0.5, y: 0, scale: 1 }}
          transition={{ delay: 1.5 }}
         
        >
          {section.next && (
            <motion.button
              className="opacity-50 text-xl hover:opacity-90 flex items-center gap-2"
              onClick={handleRightClick}
              whileHover={{ scale: 1.1 }}
              
            >
              {section.nextTop}
              <FaAngleRight />
            </motion.button>
          )}
        </motion.div>
      </div>
      <motion.div
        className={`z-50 pb-10 bg-${section.bgTopColor}`}
        initial={{ opacity: 0, y: -100, scale: 2 }}
        animate={{ opacity: 0.5, y: 0, scale: 1 }}
        transition={{ delay: 1.1 }}
      >
        <motion.button
          onClick={handleDownClick}
          whileHover={{ scale: 1.1 }}
          className="opacity-70 text-xl text-center flex items-center justify-center hover:opacity-90"
        >
          {section.bottom}
          <FaAngleDown />
        </motion.button>
      </motion.div>
    </div>
  );
};

export default SectionTop;