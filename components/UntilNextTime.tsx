"use client";
import InViewContainer from "./animations/InViewContainer";
import { motion } from "framer-motion";
import { subtleVariant } from "@/site/variants";
import PersonalLinks from "./PersonalLinks";
import { socialLinks } from "@/site/links";


const UntilNextTime = () => {
  return (
    <div className="flex flex-col p-10  mt-10  max-w-[400px] mx-auto">
    
    <h2
        className={`text-3xl  text-dark-shade p-2 rounded-lg hover:bg-dark-shade hover:text-lightest-shade  font-semibold mb-6 ml-10`}
      >
        Find Me On
      </h2>
      {/* <div className="flex flex-row gap-2">
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
      </div> */}

      <InViewContainer
        fromDirection="top"
        delay={0.35}
        className=" text-center sm:tracking-wide mb-2 max-w-[400px] mx-auto"
      >

        {/* <motion.p
          className=" mb-6 text-lg text-left "
          variants={subtleVariant}
          initial="init"
          animate={"start"}
        >
          I look forward to hearing from you!
        </motion.p> */}

<motion.div className="mx-auto">

<PersonalLinks links={socialLinks} showTitles={true} />
</motion.div>

<motion.p
          className=" my-6 text-lg text-left "
          variants={subtleVariant}
          initial="init"
          animate={"start"}
        >
          Feel free to reach out to me anytime at
          <a
            href="mailto:zasturman@gmail.com"
            className="text-blue-500 hover:underline"
          >
            {" "}
            zasturman@gmail.com
          </a>{" "}
        </motion.p>

      </InViewContainer>




    </div>
  );
};

export default UntilNextTime;
