import { motion } from "framer-motion";
import socialMediaLinks from "./social-links";
import { socialLinksVariantChildren } from "./animations/variants";

const SocialMediaLinks = () => {
  return (
    <motion.div className="flex flex-row flex-wrap md:gap-10 items-center justify-between  w-full ">
    {socialMediaLinks.map((link, index) => {
      return (
        <motion.div
        className="text-2xl text-center text-dark-shade  p-2 rounded-lg hover:bg-dark-shade hover:text-lightest-shade"
        whileHover={{ scale: 1.1 }}
          key={index}
          variants={socialLinksVariantChildren}
          initial="init"
          whileInView="headerEnter"
          custom={index}
        >
          <a
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="text md:text-lg lg:text-2xl opacity-70 hover:cursor-pointer hover:scale-110 hover:opacity-90"
          >
            <link.icon />
          </a>
        </motion.div>
      );
    })}
  </motion.div>
  );
};

export default SocialMediaLinks;
