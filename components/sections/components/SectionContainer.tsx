"use client";
import { useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import FgPersonSvgComponent from "../../landingPage/FgPersonSvgComponent";
import { useAnimationControlsContext } from "@/context/animationContext";
import { SectionProps, sectionNames } from "../sectionData";
import SectionTop from "./SectionTop";
import SectionBottom from "./SectionBottom";

interface SectionContainerProps {
  section: SectionProps;
}

const SectionContainer: React.FC<SectionContainerProps> = ({ section }) => {
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

  const handleClick = (sectionName: string) => {
    document
      .getElementById(`section${sectionName}${topOrBottom}`)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={`w-screen snap-center flex flex-col items-center ${section.textColor}`}
    >

      <SectionTop section={section} />

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
                className={`opacity-40 hover:opacity-70 ${
                  section.title === sectionName
                    ? "text-xl font-bold"
                    : "text-lg hover:text-2xl"
                }`}
                onClick={() => handleClick(sectionName)}
              >
                {sectionName}
              </button>
            ))}
          </div>
        </div>
      </div>

      <SectionBottom section={section} />
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
