import React from "react";
import InViewContainer from "../../animations/InViewContainer";
import { motion } from "framer-motion";
import { subtleVariant } from "@/components/animations/variants";
import SocialMediaLinks from "@/components/SocialMediaLinks";
import socialMediaLinks from "@/components/all-social-links"

const ContactBottom = () => {
  return (
    <div >
    <InViewContainer fromDirection="top" className="flex flex-col gap-10 ">
        <motion.h1
          className="text-3xl sm:text-2xl md:text-3xl sm:tracking-widest mb-8"
          variants={subtleVariant}
          initial="init"
          whileInView={"headerEnter"}
        >
          👋 Thank you for visiting!
        </motion.h1>
      </InViewContainer>

      <InViewContainer
        fromDirection="top"
        delay={0.35}
        className=" text-center sm:text-left text-3xl sm:text-2xl md:text-3xl sm:tracking-widest mb-2"
      >
        <motion.p
          className=" mb-6 text-lg font-medium text-left "
          variants={subtleVariant}
          initial="init"
          whileInView={"headerEnter"}
        >
          Feel free to reach out to me anytime
        </motion.p>
        <motion.p
          className=" mb-6 text-lg font-medium text-left "
          variants={subtleVariant}
          initial="init"
          whileInView={"headerEnter"}
        >
          at
          <a
            href="mailto:zasturman@gmail.com"
            className="text-blue-500 hover:underline"
          >
            {" "}
            {" "}
            zasturman@gmail.com
          </a>
          {" "}
        
          or on social media!
        </motion.p>
        <motion.p
          className=" mb-6 text-lg font-medium text-left "
          variants={subtleVariant}
          initial="init"
          whileInView={"headerEnter"}
        >
          I look forward to hearing from you!
        </motion.p>

     <div className="lg:max-w-[500px] flex items-center justify-center">


<SocialMediaLinks links={socialMediaLinks}/>
     </div>
 



      </InViewContainer>
    </div>
  );
};

export default ContactBottom;
