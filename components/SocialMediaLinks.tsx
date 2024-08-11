import { motion } from "framer-motion";
import { socialLinksVariantChildren } from "./animations/variants";

type SocialMediaLinksProps = {
  links: SocialMediaLink[];
};

const SocialMediaLinks: React.FC<SocialMediaLinksProps> = ({ links }) => {
  return (
    <motion.div className="flex flex-row flex-wrap md:gap-10 items-center justify-center w-full">
      {links.map((link, index) => {
        const padding = `p-${2 + (index % 3)}`; // Vary padding by index
        const rotation = (index % 3) * 2 - 2; // Slight rotation between -2deg and 2deg

        return (
          <motion.div
            className={`text-2xl text-center text-dark-shade ${padding} rounded-lg hover:bg-dark-shade hover:text-lightest-shade`}
            whileHover={{ scale: 1.1 }}
            key={index}
            variants={socialLinksVariantChildren}
            initial="init"
            whileInView="headerEnter"
            custom={index}
            style={{ rotate: `${rotation}deg` }} // Apply slight rotation
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
