"use client";
import portfolioItems from "@/site/portfolio-items";
import { motion } from "framer-motion";
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";

const RecentProjects = () => {
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
        <motion.div className="w-full  p-4 ">
          <ExportedImage
            src={selectedItems[0].image}
            alt={selectedItems[0].title}
            width={800}
            height={400}
            className="w-full h-64 object-cover rounded-t-lg"
          />
          <h3 className="mt-2 text-2xl ">{selectedItems[0].title}</h3>
          <div className="flex flex-row gap-4">

          <p className=" opac">{selectedItems[0].description}</p>
          
          </div>


          <ProjectButtons selectedItem={selectedItems[0]} />
        </motion.div>

        {/* Two Smaller Items Below */}
        <motion.div className="flex space-x-4 w-full ">
          {selectedItems.slice(1).map((item, index) => (
            <motion.div key={index} className="w-1/2 p-2 ">
              <ExportedImage
                src={item.image}
                alt={item.title}
                width={400}
                height={200}
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <h4 className="mt-2 text-lg ">{item.title}</h4>
              <p className=" text-sm">{item.description}</p>

              


              <ProjectButtons selectedItem={item} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
};

export default RecentProjects;

const ProjectTechStack = ({ techStack }: { techStack: string[] }) => {
  return (
    <div className="flex space-x-2 opacity-50">
      {techStack.map((tech, index) => (
        <span key={index} >
          {index > 0 && " | "}{" "}
          {tech} 
        </span>
      ))}
    </div>
  );
}



const ProjectButtons = ({ selectedItem }: { selectedItem: PortfolioItem }) => {
  return (
    <div className="flex space-x-4 opacity-60">

      {selectedItem.demo && (
        <Link
          href={selectedItem.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:font-semibold underline"
        >
          Demo
        </Link>
      )}

      {selectedItem.download && (
        <Link
          href={selectedItem.download}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:font-semibold underline"
        >
          Download
        </Link>
      )}

      {selectedItem.visit && (
        <Link
          href={selectedItem.visit}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:font-semibold underline"
        >
          Visit
        </Link>
      )}

{selectedItem.repo && (
        <Link
          href={selectedItem.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:font-semibold underline"
        >
          Repo
        </Link>
      )}
    </div>
  );
};
