"use client";
import InViewContainer from "./animations/InViewContainer";
import { motion } from "framer-motion";
import { subtleVariant } from "@/site/variants";


const UntilNextTime = () => {
  return (
    <div className="">
      <div className="flex flex-row gap-2">
        <motion.h1
          className="text-3xl sm:text-2xl md:text-3xl sm:tracking-wide mb-8 "
          variants={subtleVariant}
          initial="init"
          animate={"start"}
        >
          👋
        </motion.h1>
        <motion.h1
          className="text-3xl sm:text-2xl md:text-3xl sm:tracking-wide mb-8"
          variants={subtleVariant}
          initial="init"
          animate={"start"}
        >
          Thanks for visiting!
        </motion.h1>
      </div>

      <InViewContainer
        fromDirection="top"
        delay={0.35}
        className=" text-center sm:tracking-wide mb-2 max-w-[900px] mx-auto"
      >
        <motion.p
          className=" mb-6 text-lg text-left "
          variants={subtleVariant}
          initial="init"
          animate={"start"}
        >
          Feel free to reach out to me anytime
        </motion.p>
        <motion.p
          className=" mb-6 text-lg text-left "
          variants={subtleVariant}
          initial="init"
          animate={"start"}
        >
          at
          <a
            href="mailto:zasturman@gmail.com"
            className="text-blue-500 hover:underline"
          >
            {" "}
            zasturman@gmail.com
          </a>{" "}
          or on social media!
        </motion.p>
        <motion.p
          className=" mb-6 text-lg text-left "
          variants={subtleVariant}
          initial="init"
          animate={"start"}
        >
          I look forward to hearing from you!
        </motion.p>

      </InViewContainer>


    </div>
  );
};

export default UntilNextTime;
