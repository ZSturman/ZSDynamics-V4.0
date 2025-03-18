"use client";

import portfolioItems from "@/site/portfolio-items";

const RecentProjects = () => {
  return (
    <div className="max-w-[900px] px-10">
      <ProductionSchedulingAppAd />
    </div>
  );
};

export default RecentProjects;


const ProductionSchedulingAppAd = () => {
  let projectContent = portfolioItems.find(
    (item) => item.id === 5
  )

  if (!projectContent || projectContent === undefined) {
    projectContent = portfolioItems[0];
  }

  return (
    <div className="p-6 md:p-8 lg:p-10 text-dark-shade flex flex-col items-center max-w-screen-lg mx-auto">
      <h2 className="text-lg sm:text-xl md:text-2xl text-center font-bold mb-2">
        {projectContent.title}
      </h2>
      <h3 className="text-md sm:text-lg md:text-xl text-center mb-3">
        {projectContent.subtitle}
      </h3>

      {/* Description - Hidden on smaller screens */}
      <p className="text-sm md:text-base text-center mb-4 hidden md:block">
        {projectContent.description}
      </p>

      <div className="flex flex-row-reverse items-center justify-center">

        <div className="flex flex-col">

{projectContent.features && projectContent.features.length > 0 && (
        <ul className="list-disc text-sm md:text-base ml-4 md:ml-6 mb-4 space-y-2">
          {projectContent.features.slice(0, 4).map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
)}

{projectContent.links && projectContent.links.length > 0 && (
  
      <div className="mt-4 md:mt-6 mx-auto">
        {projectContent.links.map((link, index) => (
        <a
key={index}
          href={link.href}
          className="bg-blue-900 text-white text-sm md:text-base py-2 px-4 rounded-lg shadow hover:bg-blue-800 transition duration-200"
        >
          {link.label}
        </a>
        ))}
      </div>
)}
          </div>

{projectContent.media && projectContent.media.type === "video" && (
        <div className="w-full justify-center mt-4 md:mt-6 hidden md:flex">
          <iframe
            className="w-full max-w-[500px] h-[280px] md:max-w-[650px] md:h-[350px] lg:max-w-[700px] lg:h-[400px] rounded-lg shadow-lg"
            src={projectContent.media.src}
            title="Production Scheduling App Demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
 
    )}
      </div>
    </div>
  );
};
