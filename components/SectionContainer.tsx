"use client";
import {
  useMotionValueEvent,
  useTransform,
  motion,
  MotionValue,
} from "framer-motion";
import { useState } from "react";
import FgPersonSvgComponent from "@/components/FgPersonSvgComponent";
import { useAnimationControlsContext } from "@/context/animationContext";
import { DisplayedSectionProps, sectionNames } from "@/site/sectionData";
import {
  FaAngleDown,
  FaAngleLeft,
  FaAngleRight,
  FaAngleUp,
} from "react-icons/fa";
import { subtleVariant } from "@/site/variants";

type SectionContainerProps = {
  section: DisplayedSectionProps;
  index: number;
};

const SectionContainer: React.FC<SectionContainerProps> = ({
  section,
  index,
}) => {
  const navH = 40;

  const [topOrBottom, setTopOrBottom] = useState<"Top" | "Bottom">("Top");
  const { scrollYProgress } = useAnimationControlsContext();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.5) {
      setTopOrBottom("Bottom");
    } else {
      setTopOrBottom("Top");
    }
  });

  const bgColors =
    index % 2 === 0
      ? ["bg-light-shade", "bg-lighter-shade"]
      : ["bg-lighter-shade", "bg-light-shade"];

  const handleClick = (sectionName: string) => {
    document
      .getElementById(`section${sectionName}${topOrBottom}`)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={`w-screen snap-center flex flex-col items-center justify-center ${section.textColor}`}
    >
      <SectionElement
        section={section}
        navH={navH}
        scrollYProgress={scrollYProgress}
        isTop={true}
        bg={bgColors[0]}
      />

      <div className="relative w-full">
        {section.navAddition && <FGPerson navH={navH} />}

        <div
          className="flex flex-row justify-center items-center relative overflow-y-clip shadow-md bg-lightest-shade w-full"
          style={{ height: `${navH}px` }}
        >
          <div className="flex flex-row justify-evenly md:justify-between items-center w-full max-w-[900px] z-50">
            {sectionNames.map((sectionName) => (
              <button
                key={sectionName}
                className={`opacity-40 hover:opacity-70 hover:cursor-pointer ${
                  section.title === sectionName ? "underline" : ""
                }`}
                onClick={() => handleClick(sectionName)}
              >
                {sectionName}
              </button>
            ))}
          </div>
        </div>
      </div>

      <SectionElement
        section={section}
        navH={navH}
        scrollYProgress={scrollYProgress}
        isTop={false}
        bg={bgColors[1]}
      />
    </div>
  );
};

export default SectionContainer;

const FGPerson = ({ navH }: { navH: number }) => {
  const { controls } = useAnimationControlsContext();

  return (
    <div className={`absolute bottom-0 w-full z-40 `}>
      <div className={`flex justify-end `}>
        <FgPersonSvgComponent controls={controls} />
      </div>
      <div style={{ height: navH }} />
    </div>
  );
};

type SectionProps = {
  section: DisplayedSectionProps;
  navH: number;
  scrollYProgress: MotionValue<number>;
  bg: string;
  isTop: boolean;
};

const SectionElement: React.FC<SectionProps> = ({
  section,
  navH,
  scrollYProgress,
  bg,
  isTop,
}) => {
  const yTransformation = isTop ? [0, 1000] : [-1000, 0];

  const y = useTransform(scrollYProgress, [0, 1], yTransformation);

  const handleDownClick = () => {
    document
      .getElementById(`section${section.title}Bottom`)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const handleUpClick = () => {
    document
      .getElementById(`section${section.title}Top`)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const handleLeftClick = () => {
    document
      .getElementById(`section${section.prev}${isTop ? "Top" : "Bottom"}`)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const handleRightClick = () => {
    document
      .getElementById(`section${section.next}${isTop ? "Top" : "Bottom"}`)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={` overflow-y-clip w-full  ${bg} relative`}
      id={`section${section.title}${isTop ? "Top" : "Bottom"}`}
      style={{ height: `calc(100dvh - ${navH}px)` }}
    >
      {isTop ? (
        <motion.div
          className={`z-50 absolute bottom-0 w-full  pb-4`}
          variants={subtleVariant}
          initial="init"
          animate="start"
          custom={1.5}
        >
          <motion.button
            onClick={handleDownClick}
            whileHover={{ scale: 1.1 }}
            className="opacity-70 flex items-center justify-center hover:opacity-90 mx-auto"
          >
            {section.bottom}
            <FaAngleDown />
          </motion.button>
        </motion.div>
      ) : (
        <motion.div
          className={`z-50 absolute top-0 w-full  pt-4`}
          variants={subtleVariant}
          initial="init"
          animate="start"
          custom={1.5}
        >
          <motion.button
            onClick={handleUpClick}
            whileHover={{ scale: 1.1 }}
            className="opacity-70 flex items-center justify-center hover:opacity-90 mx-auto"
          >
            <FaAngleUp />
            {section.top}
          </motion.button>
        </motion.div>
      )}

      {section.prev && (
        <motion.div
          className={`z-50 absolute left-0 top-1/2 h-full `}
          variants={subtleVariant}
          initial="init"
          animate="start"
          custom={0.5}
        >
          <motion.button
            onClick={handleLeftClick}
            whileHover={{ scale: 1.1 }}
            className="opacity-70 flex items-center justify-center hover:opacity-90"
          >
            <FaAngleLeft />
            {isTop ? section.prevTop : section.prevBottom}
          </motion.button>
        </motion.div>
      )}

      {section.next && (
        <motion.div
          className={`z-50 absolute right-0 top-1/2 h-full `}
          variants={subtleVariant}
          initial="init"
          animate="start"
          custom={0.5}
        >
          <motion.button
            onClick={handleRightClick}
            whileHover={{ scale: 1.1 }}
            className="opacity-70 flex items-center justify-center hover:opacity-90"
          >
            {isTop ? section.nextTop : section.nextBottom}
            <FaAngleRight />
          </motion.button>
        </motion.div>
      )}

      <div className="flex items-center justify-center w-full h-full m-auto max-w-[1100px]">
        <motion.div style={{ y }}>
          {isTop ? section.contentTop() : section.contentBottom()}
        </motion.div>
      </div>
    </div>
  );
};
