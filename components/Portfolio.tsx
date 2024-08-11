"use client";
import Tabs from "@/components/Tabs";


const Portfolio = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex flex-row w-full h-screen overflow-hidden justify-center">
        <div className="flex flex-col items-center pt-10 overflow-scroll pb-40">
          <Tabs />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
