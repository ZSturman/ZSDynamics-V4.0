import portfolioItems from "@/site/portfolio-items";
import { motion } from "framer-motion";
import ExportedImage from "next-image-export-optimizer";

const HomeBottom = () => {
  // Select three items to display
  const selectedItems = portfolioItems.slice(0, 3);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-col items-center space-y-4"
      >
        {/* Front and Center Item */}
        <motion.div
          
          className="w-full  p-4 "
        >
          <ExportedImage
            src={selectedItems[0].image}
            alt={selectedItems[0].title}
            width={800}
            height={400}
            className="w-full h-64 object-cover rounded-t-lg"
          />
          <h3 className="mt-2 text-2xl ">
            {selectedItems[0].title}
          </h3>
          <p className="">
            {selectedItems[0].description}
          </p>
          <a
            href={selectedItems[0].url}
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:underline mt-2 block"
          >
            View Project
          </a>
        </motion.div>

        {/* Two Smaller Items Below */}
        <motion.div className="flex space-x-4 w-full ">
          {selectedItems.slice(1).map((item, index) => (
            <motion.div
              key={index}
              
              className="w-1/2 p-2 "
            >
              <ExportedImage
                src={item.image}
                alt={item.title}
                width={400}
                height={200}
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <h4 className="mt-2 text-lg ">
                {item.title}
              </h4>
              <p className=" text-sm">
                {item.description}
              </p>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:underline mt-2 block text-sm"
              >
                View Project
              </a>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
};

export default HomeBottom;