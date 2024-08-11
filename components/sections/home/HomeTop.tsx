import React from "react";
import { motion } from "framer-motion";
import socialMediaLinks from "../../social-links";
import {
  jobTitleVariant,
  nameVariant,
  socialLinksVariantChildren,
} from "@/components/animations/variants";
import InViewContainer from "../../animations/InViewContainer";
import SocialMediaLinks from "@/components/SocialMediaLinks";

const HomeTop = () => {

  const handleViewMyWorkClicked = () => {
    document
      .getElementById("sectionhomeBottom")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const handleGetInTouchClicked = () => {
    document
      .getElementById("sectioncontactTop")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const handleAboutClicked = () => {
    document
      .getElementById("sectionbioTop")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <InViewContainer fromDirection="top" className="flex flex-col gap-10 mt-24">
      <motion.div
        className="text-sm md:text-xl lg:text-2xl xl:text-2xl text-center text-dark-shade"
        variants={jobTitleVariant}
        whileInView="headerEnter"
        initial="init"
      >
        - Full Stack Developer -
      </motion.div>

      <motion.div className="text-6xl text-center text-dark-shade sm:tracking-wide">
        Hi, I&apos;m{" "}
        <motion.span 
          className="text-dark-accent  "
        whileInView="headerEnter"
        variants={nameVariant}
        initial="init"
        >
          Zachary
        </motion.span>
      </motion.div>


<SocialMediaLinks />




      <div className="flex flex-row gap-10 w-full justify-center">
      <motion.button
          className="text-2xl text-center text-dark-shade  p-2 rounded-lg hover:bg-dark-shade hover:text-lightest-shade"
          whileHover={{ scale: 1.1 }}
          onClick={handleViewMyWorkClicked}
          variants={socialLinksVariantChildren}
          initial="init"
          whileInView="headerEnter"
          custom={3}
        >
          View My Work

      </motion.button>

      <motion.button
          className="text-2xl text-center text-dark-shade  p-2 rounded-lg hover:bg-dark-shade hover:text-lightest-shade"
          whileHover={{ scale: 1.1 }}
          onClick={handleGetInTouchClicked}
          variants={socialLinksVariantChildren}
          initial="init"
          whileInView="headerEnter"
          custom={4}
        >
          Get In Touch

      </motion.button>

      <motion.button
          className="text-2xl text-center text-dark-shade  p-2 rounded-lg hover:bg-dark-shade hover:text-lightest-shade"
          whileHover={{ scale: 1.1 }}
          onClick={handleAboutClicked}
          variants={socialLinksVariantChildren}
          initial="init"
          whileInView="headerEnter"
          custom={5}
        >
          About

      </motion.button>
    </div>
    

      


    </InViewContainer>
  );
};

export default HomeTop;
