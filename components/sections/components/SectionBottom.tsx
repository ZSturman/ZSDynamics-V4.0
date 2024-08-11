
import { SectionProps } from "../sectionData";
import { motion,  useTransform } from "framer-motion";
import { FaAngleLeft, FaAngleRight, FaAngleUp } from "react-icons/fa";
import { useAnimationControlsContext } from "@/context/animationContext";
import InViewContainer from "../../animations/InViewContainer";

interface SectionBottomProps {
  section: SectionProps;
}

const SectionBottom: React.FC<SectionBottomProps> = ({ section }) => {
  const { scrollYProgress } = useAnimationControlsContext();
  const y = useTransform(scrollYProgress, [0, 1], [-1000, 0]);

  const navH = 40;

  const handleUpClick = () => {
    document
      .getElementById(`section${section.title}Top`)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const handleLeftClick = () => {
    document
      .getElementById(`section${section.prev}Bottom`)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const handleRightClick = () => {
    document
      .getElementById(`section${section.next}Bottom`)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={`flex flex-col items-center justify-between overflow-y-clip w-screen ${section.bgBottomColor}`}
      id={`section${section.title}Bottom`}
      style={{ height: `calc(100dvh - ${navH}px)` }}
    >
      <motion.div
        className={`z-50 pt-10 bg-${section.bgBottomColor}`}
        initial={{ opacity: 0, y: -100, scale: 2 }}
        animate={{ opacity: 0.5, y: 0, scale: 1 }}
        transition={{ delay: 1.1 }}
      >
        <motion.button
          onClick={handleUpClick}
          whileHover={{ scale: 1.1 }}
          className="opacity-70 text-xl text-center flex items-center justify-center hover:opacity-90"
        >
          <FaAngleUp />
          {section.top}
        </motion.button>
      </motion.div>

      <InViewContainer
        fromDirection="top"
        amount={1}
        delay={0.15}
        className="w-screen h-full max-w-[1400px] flex justify-between"
      >
        <div className="flex items-center justify-center mx-1 md:mx-5">
          {section.prev && (
            <motion.button
              className="opacity-50 text-xl hover:opacity-90 flex items-center gap-2"
              onClick={handleLeftClick}
              whileHover={{ scale: 1.1 }}
             
            >
              <FaAngleLeft />
              {section.prevBottom}
            </motion.button>
          )}
        </div>

        <div className="flex flex-grow items-center justify-center max-w-[1100px]">
          <motion.div style={{ y }}>{section.contentBottom()}</motion.div>
        </div>

        <div className="flex items-center justify-center mx-1 md:mx-5">
          {section.next && (
            <motion.button
              className="opacity-50 text-xl hover:opacity-90 flex items-center gap-2"
              onClick={handleRightClick}
              whileHover={{ scale: 1.1 }}
             
            >
              {section.nextBottom}
              <FaAngleRight />
            </motion.button>
          )}
        </div>
      </InViewContainer>
    </div>
  );
};

export default SectionBottom;