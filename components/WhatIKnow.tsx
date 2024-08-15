import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";
import { AiOutlinePython } from "react-icons/ai";
import { FaAws } from "react-icons/fa";
import { TbBrandTypescript } from "react-icons/tb";

const WhatIKnow = () => {
  return (
    <div className="text-center sm:text-left text-3xl sm:text-2xl md:text-3xl sm:tracking-widest mb-2">
      <div className="flex flex-col p-10  mt-10  max-w-[900px] mx-auto">
        <motion.a
          className={`text-3xl text-center text-dark-shade p-2 rounded-lg hover:bg-dark-shade hover:text-lightest-shade  font-semibold mb-6`}
          whileHover={{ scale: 1.1, rotate: `2deg` }}
          href="/ZacharySturman_Resume.pdf"
        >
          <h2>What I Know</h2>
        </motion.a>

        <div className="flex flex-col gap-4 font-thin text-lg  text-dark-shade">
          <div className="flex-row flex items-center gap-2">
            <FaReact />
            <p>React </p>
          </div>

          <div className="flex-row flex items-center gap-2">
            <AiOutlinePython />
            <p>Python</p>
          </div>

          <div className="flex-row flex items-center gap-2">
            <TbBrandTypescript />
            <p>TypeScript</p>
          </div>

          <div className="flex-row flex items-center gap-2">
            <FaAws />
            <p>AWS</p>
          </div>

          <motion.a
           className="flex-row flex items-center justify-center hover:bg-dark-shade hover:text-lightest-shade rounded-md"
           
            whileHover={{ scale: 1.1, rotate: `-2deg` }}
            href="/ZacharySturman_Resume.pdf"
          >
            and more...
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default WhatIKnow;
